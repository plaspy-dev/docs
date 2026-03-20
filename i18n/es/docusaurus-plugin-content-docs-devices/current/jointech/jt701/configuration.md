---
slug: /jointech/jt701/configuration
id: jt701-configuration
sidebar_label: Configuration
title: Jointech - JT701 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Jointech JT701 con Plaspy, incluye ajustes de servidor, comandos SMS y pasos para conectar el rastreador
keywords:
  - Configuración Jointech JT701
  - Guía de instalación JT701
  - Configuración servidor JT701
  - Jointech rastreador Plaspy
  - Configuración GPS JT701
  - Configuración dispositivo Plaspy
  - Configuración SMS JT701
  - Ajustes APN tracker
  - Seguimiento de activos JT701
  - Rastreador seguridad de carga
---

# Jointech - Configuración JT701

Esta página presenta la guía pública para poner en funcionamiento el rastreador Jointech JT701 con Plaspy. Se centra en los ajustes prácticos del servidor, los comandos SMS documentados públicamente y los pasos habituales para apuntar un JT701 a Plaspy y así obtener seguimiento en tiempo real y notificación de eventos.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto funcionan para muchos modelos. La configuración en el lado del fabricante puede variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor; trate estas instrucciones como una guía práctica pública y confirme cualquier paso específico del dispositivo con el fabricante o su proveedor.

## Resumen de la configuración

El objetivo es preparar el JT701 para que envíe su telemetría GPS y de seguridad a Plaspy y verificar que los datos llegan a la plataforma de forma fiable. Para el JT701, el fabricante ofrece un método por SMS para establecer el servidor GPRS y la información APN, método que se usa habitualmente en instalaciones en campo.

- Configure el dispositivo para que reporte al endpoint de Plaspy y así se envíen posiciones y eventos correctamente.
- Proporcione el APN correcto y, si aplica, las credenciales para que el dispositivo inicie sesiones de datos GPRS.
- Verifique la selección de transporte y el puerto para que el rastreador se conecte por el puerto esperado.
- Confirme la identidad del dispositivo y que Plaspy reciba telemetría y alarmas en tiempo real.
- Use Plaspy para ver ubicaciones, eventos de manipulación y el historial de bloqueo/desbloqueo una vez que el reporte esté verificado.

## Ajustes de servidor de Plaspy

- Dominio de servidor d.plaspy.com como endpoint principal de Plaspy para las conexiones de dispositivos
- IP de servidor 54.85.159.138 como endpoint alternativo para equipos que requieren dirección IP
- Puerto 8888 que Plaspy utiliza para todos los dispositivos soportados
- Transporte compatible vía UDP o TCP según la capacidad y preferencia del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto puede usarse en muchos modelos

## Requisitos habituales antes de la configuración

- Un JT701 cargado y en funcionamiento con conectividad celular disponible
- Una tarjeta SIM activa con acceso a datos y el APN correcto del operador instalado
- El ID del dispositivo o identificador del rastreador que va a configurar (se usa como prefijo en los SMS)
- Capacidad para enviar comandos SMS al rastreador si utiliza el método de configuración por SMS
- Acceso a las instrucciones oficiales de Jointech o a las herramientas del proveedor como referencia
- Cobertura de red en la zona donde operará el dispositivo para permitir el uplink GPRS hacia Plaspy

## Cómo se conecta este rastreador a Plaspy

Al configurar los ajustes de servidor de Plaspy, el JT701 utiliza su enlace de datos celular para enviar actualizaciones de posición, eventos de manipulación y bloqueo, y telemetría de estado al endpoint y puerto compartidos de Plaspy. Plaspy procesa estos mensajes, aplica detección automática de protocolo y muestra la telemetría en la plataforma.

- El rastreador reporta al endpoint compartido de Plaspy d.plaspy.com o a 54.85.159.138
- Todos los dispositivos se conectan usando el puerto 8888, por lo que las reglas de firewall y red deben permitir tráfico saliente a ese puerto
- El dispositivo puede usar UDP o TCP para transportar mensajes a Plaspy según su configuración
- Plaspy detecta el protocolo del rastreador y parsea la telemetría entrante para mostrarla y generar alertas
- Una vez activo el reporte, el dispositivo aparece en los paneles de Plaspy para seguimiento e historial de eventos

## Flujo típico de configuración

1. Consulte el método de configuración oficial de Jointech o el manual del JT701 para seguir la sintaxis correcta de SMS o herramienta.
2. Prepare el ID del dispositivo que se usará como prefijo en los SMS y confirme el APN actual de la SIM instalada en el equipo.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor en el método de configuración del dispositivo.
4. Establezca el puerto 8888 en la configuración del rastreador y seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Aplique o guarde la configuración en el dispositivo y, si usa SMS, envíe los comandos con el formato correcto.
6. Reinicie el dispositivo si la documentación indica que se necesita un reinicio para que surtan efecto los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de telemetría y eventos en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Para configurar el rastreador, envíe los comandos por SMS con el ID del dispositivo como prefijo exactamente según lo exige el JT701. Reemplace los valores de ejemplo por los de su equipo.

- Tenga en cuenta que el rastreador requiere el ID del dispositivo como el primer token en el comando SMS. Reemplace {{trackerID}} por su ID real.
- [apn] es la cadena APN del operador móvil.
- [apnu] y [apnp] son usuario y contraseña APN opcionales si su SIM requiere autenticación.

1. Establecer el servidor GPRS y el APN

Envíe un SMS con el siguiente formato, reemplazando los valores de marcador:

```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,[apn])
```

Como alternativa puede usar el dominio del servidor en lugar de la IP si el dispositivo soporta nombres de dominio:

```
({{trackerID}},2,S02,129,1,d.plaspy.com,8888,[apn])
```

2. Establecer usuario y contraseña APN si su operador los requiere

Envíe este SMS solo si su APN necesita usuario y contraseña:

```
({{trackerID}},2,S24,129,1,[apnu],[apnp])
```

Estos comandos SMS siguen la sintaxis pública proporcionada por el fabricante. Al enviar, asegúrese de que el mensaje vaya dirigido al número del JT701 y de que el operador permita el envío de comandos SMS al rastreador.

## Notas de configuración

- La configuración por SMS está soportada por las instrucciones públicas del JT701 mostradas arriba y se usa frecuentemente cuando se requiere acceso en campo al equipo.
- Las versiones de firmware y las variantes regionales de hardware pueden cambiar la sintaxis o el comportamiento de los comandos; confirme siempre el formato correcto con la documentación más reciente del fabricante.
- Elija TCP o UDP según sus necesidades de red y fiabilidad; ambos son compatibles hacia Plaspy en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo, por lo que el servidor y el puerto son los ajustes clave.
- Si dispone de una herramienta de instalación de Jointech, úsela, ya que puede simplificar la configuración del APN y del servidor en comparación con el SMS manual.

## Por qué usar Plaspy con esta configuración

Usar el JT701 con Plaspy ofrece una solución de seguimiento compacta y segura que envía posición GPS, alertas de manipulación y eventos de acceso a una plataforma unificada de gestión de flotas. Esta configuración permite a los operadores monitorear la seguridad de la carga, recibir notificaciones inmediatas por aperturas no autorizadas y mantener un historial auditable de accesos que combina las capacidades del hardware JT701 con la visibilidad y los reportes de Plaspy.

Para más información sobre Plaspy visite https://www.plaspy.com y consulte las notas de instalación y firmware específicas en el sitio del fabricante https://www.jointcontrols.com/ ya que los métodos de configuración, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo.
