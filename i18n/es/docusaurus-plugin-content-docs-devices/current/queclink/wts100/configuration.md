---
slug: /queclink/wts100/configuration
id: wts100-configuration
sidebar_label: Configuration
title: QuecLink - WTS100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el sensor QuecLink WTS100 con Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración QuecLink WTS100
  - Instalación QuecLink WTS100
  - Integración WTS100 Plaspy
  - Configuración sensor de temperatura
  - Configuración receptor gateway QuecLink
  - Configuración servidor Plaspy
  - Integración telemetría de flotas
  - Configuración monitoreo cadena de frío
  - Comandos SMS QuecLink
  - Guía de configuración de dispositivo
---

# QuecLink - Configuración del WTS100

Esta página documenta el contexto público de configuración para usar el sensor de temperatura QuecLink WTS100 con Plaspy. Aquí se explican los ajustes prácticos del servidor y comandos de ejemplo que se emplean comúnmente al integrar dispositivos y receptores QuecLink con la plataforma Plaspy. Use esta guía para entender el endpoint compartido de Plaspy y cómo los ejemplos de configuración de QuecLink se mapean a esos ajustes.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Los comandos de ejemplo que se muestran a continuación provienen de muestras públicas de configuración de QuecLink y deben validarse con el dispositivo, gateway o receptor específico que usted esté configurando.

## Resumen de configuración

Este proceso prepara un dispositivo QuecLink o un gateway compatible para reenviar telemetría a Plaspy, de modo que las lecturas de temperatura, el estado del dispositivo y las alarmas aparezcan en su cuenta de Plaspy. En el caso del WTS100, la integración normalmente se realiza a través de receptores o gateways QuecLink compatibles que recopilan telemetría RF y la reenvían a servidores backend.

- Apunte el gateway o dispositivo QuecLink al endpoint compartido del servidor Plaspy para que la telemetría llegue a la plataforma.
- Valide la configuración de red y APN si está configurando un gateway o dispositivo celular que use GPRS.
- Asegúrese de que los intervalos de reporte y las entradas de eventos estén configurados para que la telemetría de temperatura y las alarmas se envíen a Plaspy con la cadencia esperada.
- Confirme que el dispositivo o gateway esté emparejado e identificado en Plaspy para que la telemetría se asocie al registro de activo correcto.
- Use los comandos SMS de ejemplo más abajo como referencia pública cuando trabaje con flujos de configuración por SMS o GPRS de QuecLink.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data arrives

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza la detección del protocolo de forma automática.

## Requisitos previos típicos

- Energía y acceso al receptor QuecLink, al gateway o al dispositivo que va a configurar.
- Acceso al método de configuración del fabricante o al software que corresponda para su dispositivo o gateway (SMS, interfaz web o herramienta del proveedor).
- Si configura un gateway celular o un dispositivo con GPRS, una SIM activa y los ajustes de APN correctos (ver marcadores de posición abajo).
- Conocimiento de la contraseña predeterminada del dispositivo si los comandos o la herramienta de configuración requieren autenticación (la contraseña por defecto que aparece en muestras públicas es queclink).
- Verificación de la colocación de la red o la RF para garantizar que la comunicación receptor-sensor sea fiable antes de reenviar telemetría a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El WTS100 transmite telemetría de temperatura a receptores o gateways QuecLink compatibles, que a su vez reenvían la telemetría a servidores backend. Cuando el gateway se configura para usar los ajustes del servidor Plaspy, los datos del sensor quedan disponibles en la plataforma Plaspy para monitoreo y alertas.

- El gateway reenvía la telemetría recibida del sensor al endpoint compartido de Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Plaspy recibe telemetría por UDP o TCP y detecta automáticamente el protocolo del dispositivo para su análisis.
- Las lecturas de temperatura, el estado de batería y los eventos de alarma se muestran en Plaspy una vez que se mapean al registro del dispositivo correcto.
- Las alertas y umbrales configurados en Plaspy pueden activar notificaciones basadas en la telemetría reenviada desde el receptor o gateway.
- La información de salud del dispositivo y el enlace RF reportados por el gateway ayudan a programar mantenimiento y reemplazos.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de QuecLink o al software para el dispositivo o gateway que esté usando (SMS, web UI o herramienta del proveedor).
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 según se indica en esta guía.
3. Establezca el puerto de destino en 8888 en la configuración del dispositivo o gateway.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; Plaspy acepta ambos y detecta el protocolo automáticamente.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o enviando los comandos SMS correspondientes.
6. Reinicie el dispositivo o gateway si el fabricante lo requiere para que los nuevos ajustes entren en vigor.
7. Valide que el dispositivo o gateway reporte a Plaspy y que la telemetría aparezca en su cuenta de Plaspy.

Si el dispositivo o gateway admite configuración por SMS, use los ejemplos de comandos SMS a continuación en el orden presentado para aplicar ajustes comunes.

## Ejemplos de comandos de configuración

Los siguientes comandos son ejemplos públicos de configuración por SMS para QuecLink. Se muestran en la secuencia original tal como se aplican comúnmente. La muestra usa la contraseña por defecto del dispositivo queclink. Los marcadores de posición permanecen donde las muestras públicas requieren entrada del operador.

- Notas sobre los marcadores de posición
  - {{apn}} es el nombre APN utilizado por el operador celular.
  - {{apnu}} es el nombre de usuario del APN cuando el operador lo requiere.
  - {{apnp}} es la contraseña del APN cuando el operador la requiere.

- Ejemplos de comandos (enviar por SMS cuando aplique)

1. Restauración de fábrica opcional inicial (aquí etiquetada como configuración inicial o cuando se requiere un inicio limpio)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar la zona horaria (ejemplo establece UTC 0)
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador con marcadores de posición para APN, usuario y contraseña
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

4. Configurar el servidor GPRS para apuntar a Plaspy por dominio e IP con puerto 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer intervalos de reporte para actualizaciones periódicas (ejemplo establece intervalo de 60 segundos)
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación de entrada SOS ejemplo (esto es una configuración de entrada de evento de ejemplo)
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Estos comandos son ejemplos públicos y pueden aplicarse cuando se configuran dispositivos o gateways que aceptan comandos estilo SMS o GPRS. Confirme siempre que la configuración por SMS esté soportada por su hardware y verifique la sintaxis de los comandos según la documentación de firmware del dispositivo.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o las opciones disponibles. Confirme siempre con las notas de firmware para su número de serie y revisión.
- Los comandos de ejemplo anteriores usan estilo de configuración por SMS; en algunos despliegues se utiliza una interfaz web o una herramienta de configuración del proveedor. Use el método que corresponda a su hardware.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que debe centrarse en el host del servidor y la selección de transporte correctos.
- Al configurar valores APN tenga listos los marcadores {{apn}}, {{apnu}} y {{apnp}} y confirme con el operador si se requiere usuario o contraseña.
- Dado que el WTS100 es un sensor de temperatura por radio integrado vía receptores o gateways, asegúrese de que el receptor o gateway esté configurado para reenviar la telemetría del sensor a Plaspy usando los ajustes de servidor indicados arriba.

## Por qué usar Plaspy con esta configuración

Integrar la telemetría del QuecLink WTS100 en Plaspy ofrece a los equipos visibilidad centralizada de temperatura y estado de dispositivos en operaciones de flota y activos. Combinado con las alertas e informes de Plaspy, las excursiones de temperatura, la salud de la batería y los problemas de enlace RF pueden monitorizarse junto con los datos de ubicación y vehículo cuando los gateways reenvían telemetría a Plaspy.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information with the official QuecLink documentation at https://www.queclink.com/ before applying changes.
