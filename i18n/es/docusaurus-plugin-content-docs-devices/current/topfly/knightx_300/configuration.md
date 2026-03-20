---
slug: /topfly/knightx_300/configuration
id: knightx_300-configuration
sidebar_label: Configuration
title: TopFly - KnightX 300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para TopFly KnightX 300 que muestra cómo conectar el rastreador a Plaspy usando ajustes de servidor compartidos
keywords:
  - configuración TopFly KnightX 300
  - instalación TopFly KnightX 300
  - configuración KnightX 300 Plaspy
  - configuración de servidor KnightX 300
  - configuración de rastreador TopFly
  - configuración de dispositivo Plaspy
  - configuración de rastreador GPS
  - configuración de rastreador de activos
  - configuración de rastreador para cadena de frío
  - configuración de seguimiento de vehículos
---

# TopFly - KnightX 300 Configuración

Esta página documenta el contexto público de configuración para usar el TopFly KnightX 300 con Plaspy. Resume los pasos prácticos y los ajustes públicos necesarios para apuntar el dispositivo a Plaspy, de modo que la ubicación, la telemetría y los datos de sensores lleguen a su instancia de Plaspy. Siempre que es posible, esta guía hace referencia a comandos visibles por el fabricante y muestra cómo aplicar la información del servidor de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración por parte del fabricante pueden variar según la versión del firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que se muestran a continuación provienen de la guía pública de configuración del dispositivo y explican un flujo común de configuración por SMS cuando el equipo admite esa vía.

## Resumen de la configuración

El proceso de configuración prepara el KnightX 300 para enviar periódicamente ubicación y datos de sensores a Plaspy. Se centra en establecer los parámetros de red, los intervalos de reporte y el endpoint de Plaspy para que el dispositivo pueda establecer conexiones salientes y reenviar registros almacenados cuando haya conectividad.

- Configure los ajustes de red del dispositivo y el APN para que el rastreador pueda acceder a la red de datos móviles.
- Establezca el endpoint del servidor Plaspy y el puerto compartido para que el rastreador reenvíe la telemetría al destino correcto.
- Defina los intervalos de reporte y el comportamiento de almacenamiento en búfer para equilibrar la frecuencia de actualizaciones y la duración de la batería.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy después de aplicar los ajustes.
- Use SMS o la herramienta oficial de configuración de TopFly cuando esté disponible para aplicar los comandos mostrados en esta guía.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Nota: Todos los dispositivos en Plaspy usan el mismo puerto 8888. El KnightX 300 puede configurarse para usar UDP o TCP en el puerto 8888 para que Plaspy pueda recibir los datos y detectar automáticamente el protocolo empleado.

## Requisitos típicos antes de la configuración

- Rastreador con alimentación y batería cargada, o conectado a una fuente de energía temporal para la configuración inicial.
- Acceso al método de configuración de TopFly para el KnightX 300, como comandos SMS o la herramienta del fabricante.
- Una tarjeta SIM operativa con datos y los detalles del APN del operador disponibles (APN, usuario APN, contraseña APN).
- La contraseña de ejemplo del dispositivo según la guía pública de configuración cuando se requiera enviar comandos (la contraseña predeterminada se muestra más abajo).
- Una cuenta de Plaspy o un flujo de aprovisionamiento para registrar y monitorear el dispositivo una vez que comience a reportar.
- Conocimiento básico sobre si el dispositivo debe usar UDP o TCP para el transporte saliente.

## Cómo se conecta este rastreador a Plaspy

El KnightX 300 se configura para reportar ubicación, telemetría y eventos de sensores al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo esté apuntando a Plaspy y el reporte esté habilitado, Plaspy ingerirá el tráfico del dispositivo y detectará automáticamente el protocolo para mostrar los datos en paneles y alertas.

- El rastreador envía actualizaciones periódicas de ubicación y registros en búfer al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse en UDP o TCP según la configuración del dispositivo; Plaspy detectará e interpretará el protocolo entrante.
- La telemetría y los eventos de sensores BLE se reenvían junto con la ubicación para que Plaspy pueda mostrar datos ambientales y activar alertas.
- Cuando se configura por SMS o mediante la herramienta del fabricante, el dispositivo utiliza el APN y los ajustes de servidor proporcionados para establecer la conectividad móvil y comenzar a reportar a Plaspy.
- Plaspy recibe el flujo de datos y lo asocia a su cuenta para que usted pueda validar el estado del dispositivo y el seguimiento.

## Flujo de trabajo de configuración habitual

1. Acceda al método de configuración oficial de TopFly o al software para el KnightX 300 (por ejemplo, comandos SMS o la herramienta del proveedor).
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el ajuste de servidor del dispositivo según lo permita.
3. Configure el puerto en 8888 (todos los dispositivos en Plaspy usan el mismo puerto).
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN del operador y las credenciales del APN para que el dispositivo pueda usar datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren reinicio.
7. Valide que el dispositivo reporte a Plaspy y aparezca en el panel de su plataforma, confirmando actualizaciones de telemetría y ubicación.

## Comandos de configuración de ejemplo

La guía pública de configuración del KnightX 300 incluye comandos SMS. La configuración de ejemplo abajo usa la contraseña predeterminada 0000 como se muestra en las instrucciones públicas. Mantenga los marcadores de posición al reemplazarlos por los valores de su operador.

- Establecer la zona horaria del dispositivo a UTC 0
```text
GMT,0000,0#
```

- Configurar el APN del operador y credenciales opcionales
```text
APN,0000,[apn],[apnu],[apnp]#
```
Explicación: [apn] es la cadena APN del operador, [apnu] es el usuario del APN (si se requiere) y [apnp] es la contraseña del APN (si se requiere). Si su APN no necesita usuario ni contraseña, deje [apnu] y [apnp] vacíos según la sintaxis SMS del dispositivo.

- Establecer el servidor GPRS de Plaspy usando la IP pública y el puerto que se muestran en esta guía
```text
IP,0000,54.85.159.138 8888#
```
Nota: Este comando configura la IP del servidor Plaspy y el puerto 8888 que Plaspy utiliza para todos los dispositivos compatibles.

- Ejemplo para establecer un intervalo de reporte a 60 segundos
```text
TIMER,0000,60:60:0:0#
```

Estos comandos se muestran en la guía pública del fabricante y deben enviarse usando el canal de configuración del dispositivo que el fabricante documente, por ejemplo mensajes SMS desde un número de teléfono autorizado. La contraseña de ejemplo 0000 es la muestra de fábrica usada en el ejemplo público.

## Notas de configuración

- La configuración vía SMS se muestra en la guía pública; también puede usar las herramientas del proveedor TopFly si están disponibles para aprovisionamiento masivo o remoto.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los campos disponibles; verifique el formato exacto de los comandos para su firmware antes de desplegar masivamente.
- Elija UDP o TCP según sus preferencias de conectividad y firewall; Plaspy detectará el protocolo usado cuando el dispositivo comience a reportar.
- Si el dispositivo acepta un dominio en lugar de una IP en algunas versiones de firmware, puede usar d.plaspy.com; los comandos de ejemplo usan la IP tal como figura en la muestra pública.
- Lleve control de la contraseña utilizada para la configuración y actualícela si su política de seguridad lo requiere, siguiendo el procedimiento del fabricante.

## Por qué usar Plaspy con esta configuración

Usar el KnightX 300 con Plaspy permite a los equipos ingerir actualizaciones frecuentes de ubicación, registros en búfer y telemetría ambiental en un flujo único de gestión de flotas. La configuración pública mostrada aquí se centra en conectar el dispositivo en red y apuntarlo al servidor Plaspy para que los datos fluyan de forma confiable hacia paneles, alertas y registros históricos para la visibilidad operativa.

Learn more about Plaspy and how it can integrate device streams at https://www.plaspy.com. For device specific command syntax, firmware notes, and the latest manufacturer instructions, verify details at the official TopFly site https://www.topflytech.com/ as product behavior and setup methods can change over time.
