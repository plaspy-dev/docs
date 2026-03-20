---
slug: /istartek/vt140/configuration
id: vt140-configuration
sidebar_label: Configuration
title: iStartek - VT140 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS iStartek VT140 y su compatibilidad con Plaspy, con ajustes de servidor y ejemplos de SMS
keywords:
  - configuración iStartek VT140
  - instalación iStartek VT140
  - configuración servidor VT140
  - compatibilidad Plaspy
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - configuración AIS 140
  - configuración protocolo CDAC
  - comandos SMS VT140
  - configuración gestión de flotas
---

# iStartek - Configuración del VT140

Esta página describe el contexto público de configuración para utilizar el rastreador GPS iStartek VT140 con Plaspy. Consolida los ajustes de servidor de Plaspy y los pasos prácticos más comunes para direccionar un VT140 hacia Plaspy y habilitar el envío de telemetría y posicionamiento en tiempo real. Utilice esta guía como punto de partida práctico para la puesta a punto y validación del dispositivo antes de completar pasos específicos del sitio o requerimientos regulatorios.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT140 admite configuración por SMS además de la subida a servidores duales; por eso esta página incluye ejemplos de comandos SMS públicos y explica cómo se relacionan con los valores del servidor de Plaspy.

## Resumen de configuración

El objetivo de esta configuración es preparar un VT140 para que se comunique de forma confiable con la plataforma Plaspy, envíe GNSS y telemetría del vehículo, y aparezca en los mapas e informes de Plaspy. En los equipos VT140 el fabricante ofrece opciones de configuración por comandos SMS que incluyen APN, servidor y intervalo de reporte, los cuales permiten apuntar el dispositivo hacia Plaspy.

- Configure el APN y los parámetros GPRS del equipo para que tenga conectividad de datos para la carga.
- Establezca el endpoint del servidor VT140 al dominio o IP de Plaspy y al puerto de carga compartido.
- Elija el modo de transporte adecuado si el equipo requiere selección entre UDP o TCP.
- Configure un intervalo de reporte para controlar la frecuencia de actualizaciones y ahorrar datos cuando sea necesario.
- Valide la configuración con un comando de estado y confirme que el dispositivo aparece en Plaspy.
- Conserve los valores predeterminados del fabricante o realice un restablecimiento de fábrica solo si es necesario.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transporte compatible: UDP o TCP
- detección automática de protocolo en Plaspy

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando los datos lleguen al servidor.

## Requisitos típicos antes de la configuración

- Un equipo VT140 instalado y con alimentación, y con una SIM activa configurada para datos GPRS.
- Capacidad para enviar SMS si va a usar la configuración por SMS.
- Información correcta del APN, nombre de usuario APN y contraseña APN proporcionada por el operador móvil.
- Acceso al método de configuración oficial de iStartek o al software del proveedor y cualquier instrucción del vendedor.
- Una cuenta Plaspy o detalles de aprovisionamiento para verificar que el dispositivo aparece y reporta correctamente.
- Herramientas básicas para validación, como un teléfono para enviar SMS y acceso a la red para ver los mapas de Plaspy.

## Cómo se conecta este rastreador a Plaspy

El VT140 envía posiciones GNSS, telemetría y datos de eventos al endpoint del servidor Plaspy usando su capacidad de subida a servidores duales y los protocolos soportados. Al configurar el equipo para enviar a d.plaspy.com o a la IP del servidor Plaspy y el puerto compartido, el VT140 se vuelve visible en Plaspy y entregará actualizaciones de ubicación y eventos para monitoreo e informes.

- El VT140 reporta posiciones GNSS y telemetría del vehículo al endpoint y puerto del servidor Plaspy.
- Las notificaciones de eventos y alarmas, como geocerca, pérdida de alimentación y disparos de sensores, se reenvían a Plaspy.
- Los datos almacenados en la memoria del dispositivo se suben cuando la conectividad se restablece, de modo que Plaspy puede mostrar rutas continuas.
- El equipo puede configurarse para usar UDP o TCP como transporte para enviar paquetes a Plaspy en el puerto 8888.
- Plaspy detecta automáticamente el protocolo entrante del rastreador, por lo que el dispositivo puede usar el protocolo soportado sin configuración adicional en la plataforma.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de iStartek para el VT140, normalmente comandos SMS o la herramienta del proveedor documentada por iStartek.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 proporcionada por Plaspy.
3. Configure el puerto del servidor en 8888, el puerto compartido utilizado por Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP en el dispositivo si se requiere elegir el transporte.
5. Configure el APN y otros parámetros GPRS para que el equipo pueda establecer conectividad de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo solicita.
7. Valide que el VT140 esté reportando a Plaspy revisando el estado del dispositivo en Plaspy y usando comandos de verificación del equipo según corresponda.

## Ejemplos de comandos de configuración

El VT140 admite configuración por SMS. Los siguientes comandos de ejemplo se encuentran en el material público de configuración del VT140. Mantenga los marcadores de posición y reemplácelos por los valores de su operador donde sea necesario.

- Restablecimiento de fábrica opcional
```text
FACTORY#
```

- Establecer zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn],[apnu],[apnp]#
```
Explicación de los marcadores de APN
- [apn] es el APN de datos móviles para el operador de la SIM.
- [apnu] es el nombre de usuario del APN si el operador lo requiere. Si no es necesario, el campo puede dejarse en blanco u omitirse según las reglas del operador.
- [apnp] es la contraseña del APN si el operador la requiere.

- Configurar el servidor GPRS a Plaspy usando el dominio y puerto
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS a Plaspy usando la IP y puerto
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer intervalo de actualización a 60 segundos
```text
TIMER,60#
```

- Consultar los parámetros actuales
```text
PARAM#
```

Siga el orden de los comandos cuando su instalador o el fabricante lo recomienden. El restablecimiento de fábrica es opcional y debe usarse solo cuando sea necesario para una configuración limpia.

## Notas de configuración

- La configuración por SMS está explícitamente soportada para el VT140 en los ejemplos públicos, aunque también pueden existir herramientas del proveedor o software de configuración de iStartek.
- Las revisiones de firmware, variantes de hardware y modelos regionales pueden cambiar el comportamiento de los comandos o los parámetros soportados. Verifique los comandos con la versión del equipo en uso.
- Cuando se requiera elegir transporte, seleccione UDP o TCP según las indicaciones de la instalación; Plaspy acepta ambos y detecta automáticamente el protocolo del rastreador.
- Use el dominio d.plaspy.com cuando sea posible para permitir resolución DNS y mayor flexibilidad; la IP del servidor 54.85.159.138 está disponible como endpoint alternativo.
- Confirme siempre las credenciales APN con el operador móvil y pruebe un intervalo de reporte corto para validar la conectividad antes de pasar a producción.

## Por qué usar Plaspy con esta configuración

Usar el VT140 con Plaspy brinda a los operadores de flotas y equipos de cumplimiento visibilidad continua de ubicación, eventos y telemetría. Las capacidades de subida a servidores duales y el almacenamiento en búfer del VT140, combinadas con la detección automática de protocolos y el puerto unificado de Plaspy, simplifican la integración y ayudan a garantizar la entrega fiable de datos GNSS y de sensores para monitoreo, informes y flujos de trabajo de seguridad.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el VT140 visite https://www.plaspy.com. Para métodos de configuración, comportamiento de firmware y detalles del fabricante más recientes, verifique la documentación oficial de iStartek en https://istartek.com/
