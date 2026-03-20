---
slug: /globalsat/bt_821c/configuration
id: bt_821c-configuration
sidebar_label: Configuration
title: GlobalSat - BT-821C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat BT-821C y apuntar dispositivos compatibles a los servidores de Plaspy
keywords:
  - Configuración GlobalSat BT-821C
  - Configuración BT-821C para Plaspy
  - Configuración receptor GPS GlobalSat
  - Guía de configuración BT-821C
  - Configuración receptor Bluetooth GNSS
  - Configuración servidor Plaspy
  - Configuración dispositivo GNSS para Plaspy
  - Configuración fuente NMEA GPS
  - Configuración GNSS para seguimiento de flotas
  - Configuración de correcciones RTCM
---

# GlobalSat - BT-821C Configuración

Esta página describe el contexto público de configuración para usar el GlobalSat BT-821C con Plaspy. Se concentra en los detalles prácticos del servidor y del flujo de trabajo necesarios para que el BT-821C actúe como fuente de posicionamiento para hosts compatibles con Plaspy, o para configurar un tracker o gateway compatible que reenvíe datos GNSS a Plaspy. Cuando existen comandos públicos del dispositivo, se incluyen para mayor claridad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente los protocolos de tracker en las conexiones entrantes. Los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Si su instalación utiliza SMS o un gateway para reenviar GNSS, siga la guía del fabricante junto a los ajustes de servidor documentados aquí.

## Resumen de configuración

El objetivo al configurar el BT-821C para Plaspy es garantizar que el receptor suministre un flujo GNSS confiable a un host o que un tracker o gateway conectado esté apuntando a Plaspy para el reporte. Dependiendo de su sistema, la configuración puede realizarse mediante emparejamiento Bluetooth, software del fabricante o comandos por SMS donde estén soportados.

- Prepare el receptor para transmitir NMEA o RTCM a un host o gateway compatible con Plaspy.
- Configure cualquier tracker o gateway conectado para que apunte al endpoint del servidor Plaspy y así la ubicación y telemetría lleguen a Plaspy.
- Verifique la conectividad y el reconocimiento del protocolo en el lado de Plaspy para confirmar la entrada de datos.
- Guarde y aplique los ajustes, luego reinicie el dispositivo o gateway si es necesario para comenzar el reporte en vivo.
- Use los comandos SMS públicos proporcionados si el dispositivo o el tracker conectado admiten configuración por SMS.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo de tracker para las conexiones entrantes
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que el puerto 8888 se comparte entre los dispositivos soportados

## Requisitos previos típicos antes de la configuración

- Un receptor BT-821C con batería y encendido, con Bluetooth operativo y visible para emparejar.
- Un host, gateway o tracker compatible con Plaspy que acepte una transmisión NMEA externa o que pueda reenviar datos GNSS a un servidor IP.
- Acceso al método de configuración oficial de GlobalSat o a la herramienta del proveedor para el BT-821C o al software del gateway conectado.
- Si se utiliza configuración por SMS (los comandos públicos se muestran más abajo), una SIM activa y capacidad de SMS en el dispositivo que recibe comandos, y la posibilidad de enviar SMS al dispositivo.
- El IMEI o identificador del dispositivo requerido por los comandos del fabricante si usa configuración por SMS.
- Acceso administrativo a Plaspy para verificar que el dispositivo aparece y reporta datos después de la configuración.

## Cómo se conecta este receptor a Plaspy

Al usarse con Plaspy, el BT-821C normalmente proporciona un flujo de datos GNSS a un host, gateway o tracker compatible con Plaspy. En instalaciones donde un tracker o gateway acepta la configuración del dispositivo, esa unidad se configura para reportar al endpoint compartido del servidor Plaspy y puerto, de modo que Plaspy reciba ubicación y telemetría en tiempo real.

- El BT-821C transmite sentencias NMEA estándar a un host o gateway emparejado compatible con Plaspy para actualizaciones de ubicación en tiempo real.
- Si el tracker conectado soporta reporte directo a servidor, configúrelo para apuntar a d.plaspy.com (o 54.85.159.138) en el puerto 8888 usando UDP o TCP.
- Una vez que el tracker o gateway reenvía datos GNSS, Plaspy detecta el protocolo automáticamente y comienza a ingerir las actualizaciones de ubicación.
- El panel y las herramientas de monitoreo de Plaspy mostrarán la ubicación, el movimiento y el estado a partir del flujo del dispositivo.
- Use los pasos de validación en Plaspy para confirmar que el dispositivo es visible y está reportando después de la configuración y el reinicio.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante, el software, o la herramienta del tracker/gateway que gestione el BT-821C o el dispositivo conectado.
2. Introduzca la dirección del servidor Plaspy por dominio d.plaspy.com o por IP 54.85.159.138 cuando la configuración requiera un endpoint.
3. Establezca el puerto en 8888 según lo requerido por Plaspy y recuerde que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione el transporte UDP o TCP si su dispositivo requiere elegir un protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante o mediante comando SMS según corresponda.
6. Reinicie o haga reboot del dispositivo o gateway si es necesario para activar los nuevos ajustes.
7. Verifique que el dispositivo reporte a Plaspy comprobando el estado del dispositivo y los mensajes entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los siguientes comandos públicos basados en SMS se incluyen como ejemplo. Están pensados para firmware de dispositivos o trackers que soporten configuración por SMS. Sustituya los marcadores de posición según se indica después de cada comando. Mantenga el IMEI exacto y calcule el valor de checksum correctamente antes de enviar.

Formato de ejemplo usado por Plaspy para el empaquetado SMS en el contenido original:
TSPRXAB27GHKLMnaicz*U!

1) Comando de configuración
- Propósito: configurar APN y apuntar el dispositivo a Plaspy por IP y puerto
- Reemplace {{imei}} con el IMEI del dispositivo, [apn] con el APN, [apnu] con el usuario APN y [apnp] con la contraseña APN. El checksum final debe calcularse y sustituirse por {{checksum}}.

```
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

2) Comando de reinicio (opcional o requerido según el caso)
- Propósito: reiniciar el dispositivo para aplicar ajustes
- Reemplace {{imei}} y calcule {{checksumreeboot}} para el comando de reinicio.

```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Generación de checksum
- El checksum mostrado en el contenido publicado se calcula como un XOR byte a byte de todos los caracteres antes del asterisco, y luego se convierte a una cadena hexadecimal de dos dígitos en mayúsculas. Asegúrese de calcular e insertar el valor de checksum exactamente según lo requiera el firmware de su dispositivo.

Marcadores de posición explicados
- {{imei}} — IMEI o identificador del dispositivo requerido por el formato de comando SMS.
- [apn] — Nombre del punto de acceso para datos celulares si el tracker o gateway usa conectividad celular.
- [apnu] — Usuario APN cuando sea necesario.
- [apnp] — Contraseña APN cuando sea necesaria.
- {{checksum}} y {{checksumreeboot}} — valores de checksum calculados e insertados en el comando.

Si su unidad BT-821C específica o el tracker conectado no soportan configuración por SMS, utilice el software del fabricante o la interfaz de configuración del gateway. Verifique siempre la sintaxis de los comandos con la documentación del proveedor.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles, la sintaxis requerida y los algoritmos de checksum; confirme los detalles actuales con el fabricante antes de enviar comandos.
- El BT-821C es un receptor GNSS Bluetooth que proporciona flujos NMEA y RTCM a un host; la configuración directa de servidor se realiza en el tracker o gateway que reenvía los datos cuando corresponde.
- Elija UDP o TCP según los requisitos de su gateway o tracker; Plaspy acepta ambos y autodetectará el protocolo.
- Cuando use comandos SMS, confirme la entrega de SMS, los límites de caracteres y la dirección correcta del IMEI para evitar una configuración incorrecta.
- Use el dominio d.plaspy.com o la IP 54.85.159.138 cuando la interfaz de configuración soporte un nombre de dominio o requiera una dirección IP respectivamente.

## Por qué usar Plaspy con esta configuración

Utilizar el GlobalSat BT-821C con Plaspy ofrece una forma práctica de mejorar la calidad de posición para hosts móviles y gateways que alimentan ubicación a Plaspy. Las salidas estándar NMEA y RTCM del BT-821C lo convierten en una fuente GNSS externa sencilla para mapas, monitoreo de flotas y telemetría de campo, mientras Plaspy se encarga de la detección de protocolos y la ingesta centralizada de datos de ubicación.

Learn more about Plaspy and how it accepts GNSS and tracker data at https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and any manufacturer changes on the official GlobalSat site https://www.globalsat.com.tw/ before performing production deployments.
