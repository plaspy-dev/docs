---
slug: /meitrack/tc68l/configuration
id: tc68l-configuration
sidebar_label: Configuration
title: Meitrack - TC68L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack TC68L para apuntar el dispositivo a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Meitrack TC68L
  - Instalación Meitrack TC68L
  - Configuración TC68L Plaspy
  - Configuración rastreador GPS Meitrack
  - Configuración servidor TC68L
  - Configuración dispositivo Plaspy
  - Comandos SMS TC68L
  - Configuración rastreador OBD II
  - Configuración seguimiento vehicular
  - Servidor GPRS TC68L
---

# Meitrack - Configuración del TC68L

Esta página describe el contexto público de configuración para usar el Meitrack TC68L con Plaspy. Se centra en los ajustes de servidor prácticos y en los comandos SMS que se utilizan comúnmente para apuntar un TC68L hacia Plaspy, de modo que el dispositivo pueda reportar ubicaciones y eventos a la plataforma. Use este documento para entender los valores de servidor requeridos y el flujo general de integración de este modelo con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. La descripción del TC68L suministrada aquí (rastreador OBD II 4G plug and play con batería interna y botón SOS) sirve de base para la guía a continuación, y los comandos de ejemplo reflejan las instrucciones públicas por SMS para este modelo.

## Resumen de configuración

Esta configuración prepara el TC68L para comunicarse de forma confiable con Plaspy, apuntando el dispositivo al servidor de Plaspy y asegurando que las actualizaciones periódicas y los reportes de eventos estén habilitados. Para el TC68L el fabricante proporciona comandos por SMS que permiten establecer servidor, intervalos de reporte y comportamientos básicos.

- Apuntar el dispositivo a Plaspy usando el dominio o la IP del servidor compartido y el puerto requerido.
- Configurar el APN y parámetros GPRS para que el TC68L pueda conectarse a datos móviles.
- Habilitar actualizaciones periódicas de posición y el reporte de eventos para que el dispositivo envíe ubicación y alertas a Plaspy.
- Validar la conectividad del dispositivo con Plaspy y confirmar que el equipo aparezca en la plataforma.
- Si está disponible, usar las herramientas del fabricante o comandos SMS para aplicar los ajustes y reiniciar el rastreador.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes de servidor de Plaspy al configurar el TC68L. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un TC68L con alimentación accesible instalado o conectado temporalmente para poder recibir comandos SMS.
- Una tarjeta SIM activa con acceso a datos instalada en el dispositivo y la información APN correcta disponible.
- Acceso al método de configuración del fabricante, como comandos SMS o una herramienta de configuración compatible.
- La contraseña por defecto del dispositivo si es requerida para los comandos; los ejemplos más abajo usan la contraseña por defecto 0000.
- Una cuenta en Plaspy y el flujo de provisión de dispositivos para registrar el rastreador una vez que reporte a la plataforma.
- Un plan de pruebas para verificar conectividad y confirmar que el dispositivo aparece en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TC68L envía datos de ubicación y eventos al punto de enlace y puerto compartidos de Plaspy. Plaspy gestiona las conexiones entrantes de los rastreadores compatibles y automáticamente identifica el protocolo para que los dispositivos puedan ser administrados en la plataforma.

- El dispositivo se configura para enviar conexiones GPRS/TCP o GPRS/UDP a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Las actualizaciones periódicas de posición se envían a Plaspy según el intervalo de reporte configurado.
- Alertas de eventos como SOS, manipulación o pérdida de conexión se reenvían a Plaspy para monitoreo en tiempo real.
- Plaspy procesa los datos entrantes y presenta la ubicación y telemetría del dispositivo en la plataforma.
- La detección automática de protocolo en Plaspy elimina la necesidad de seleccionar manualmente el protocolo en la plataforma.

## Flujo de configuración habitual

1. Identifique y utilice el método oficial de configuración de Meitrack, por ejemplo comandos SMS o la herramienta del fabricante documentada por Meitrack.
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido que Plaspy usa para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte durante la configuración.
5. Configure el APN del dispositivo y cualquier campo de usuario y contraseña de la SIM para que el equipo pueda establecer conexión de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador lo requiere para aplicar los ajustes de red.
7. Valide que el TC68L reporte a Plaspy revisando la actividad del dispositivo en la plataforma y confirmando que las actualizaciones periódicas y los eventos sean visibles.

## Comandos de configuración de ejemplo

El Meitrack TC68L puede configurarse por SMS usando la contraseña del dispositivo y los siguientes comandos públicos. El ejemplo de configuración utiliza la contraseña por defecto del dispositivo 0000. Si es necesario, cambie la contraseña siguiendo las instrucciones del fabricante.

- Reinicio opcional a ajustes de fábrica iniciales (usar solo cuando sea necesario para la instalación inicial):
```text
0000,F11
```

- Configurar el servidor GPRS a Plaspy usando la IP y el puerto. Reemplace [apn] con el APN de su SIM. Si su operador requiere usuario o contraseña, incluya [apnu] y [apnp] según corresponda.
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Nota: Puede usar d.plaspy.com en lugar de la IP si su dispositivo acepta un nombre de dominio en el comando A21.

- Establecer la zona horaria a UTC 0 (ajuste si necesita otra zona horaria):
```text
0000,B36,0
```

- Configurar el intervalo de actualización a cada 1 minuto (valor de ejemplo usado en muestras públicas):
```text
0000,A12,6,0
```

- Configurar el comportamiento de reporte de eventos (ejemplo habilitando eventos comunes según la muestra pública):
```text
0000,C03,0
```

Explicación de los marcadores:
- [apn] — la cadena APN de su operador móvil requerida para datos GPRS.
- [apnu] — usuario del APN si el operador lo solicita.
- [apnp] — contraseña del APN si el operador lo solicita.

Envíe cada comando SMS desde un número autorizado si el dispositivo está configurado para aceptar SMS desde números específicos, y espere un momento para que el equipo aplique los ajustes y establezca la conexión de datos.

## Notas de configuración

- La configuración por SMS es un método público común para modelos Meitrack y se presenta aquí porque forma parte de la muestra pública de configuración.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los parámetros soportados; verifique los comandos con las notas de firmware del dispositivo proporcionadas por Meitrack.
- Elija TCP o UDP según las limitaciones del dispositivo; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo cuando el dispositivo se conecta.
- Después de la configuración inicial, considere cambiar la contraseña por defecto 0000 para mejorar la seguridad del dispositivo según las recomendaciones del fabricante.
- Confirme el APN y el servicio de datos de la SIM antes de depender de reportes en tiempo real; configuraciones incorrectas del APN son una causa frecuente de fallos de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el Meitrack TC68L con Plaspy ofrece a las organizaciones un camino sencillo para el rastreo de vehículos y el monitoreo de eventos, aprovechando ajustes de servidor compartidos y la detección automática de protocolos de Plaspy. Los comandos públicos por SMS permiten una provisión rápida del dispositivo para apuntarlo a Plaspy, de modo que las actualizaciones de ubicación, alertas y telemetría operativa fluyan hacia la plataforma para visibilidad y procesos operativos.

Para más información sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, detalles de firmware y guías de instalación, siempre verifique la información actual en el sitio oficial de Meitrack https://www.meitrack.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
