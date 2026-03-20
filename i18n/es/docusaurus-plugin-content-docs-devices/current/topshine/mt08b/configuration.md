---
slug: /topshine/mt08b/configuration
id: mt08b-configuration
sidebar_label: Configuration
title: TopShine - MT08B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopShine MT08B con ajustes de servidor Plaspy y comandos SMS GPRS para integración
keywords:
  - configuración TopShine MT08B
  - instalación TopShine MT08B
  - configuración MT08B Plaspy
  - configuración de servidor MT08B
  - configuración rastreador GPS TopShine
  - configuración SMS MT08B
  - configuración GPRS MT08B
  - configuración rastreador Plaspy
  - integración dispositivo TopShine
  - configuración plataforma GPS MT08B
---

# TopShine - Configuración MT08B

Esta página documenta el contexto público de configuración para usar el TopShine MT08B con Plaspy. Reúne los ajustes prácticos orientados a la plataforma y ejemplos de comandos SMS/GPRS provistos por el fabricante que se emplean comúnmente para preparar el MT08B para el seguimiento en tiempo real, alertas e informes históricos en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página se centra en los ajustes públicos y los comandos que puede usar para apuntar un MT08B a Plaspy, recomendando además verificar contra la documentación oficial de TopShine.

## Resumen de configuración

El proceso de configuración prepara el MT08B para comunicarse de forma fiable con Plaspy a través de la red GSM usando SMS o GPRS. El objetivo es establecer el identificador del dispositivo, el APN y el endpoint del servidor Plaspy, y asegurarse de que el dispositivo reporte con el intervalo deseado.

- Apuntar el rastreador al endpoint y puerto del servidor Plaspy para que el dispositivo transmita datos de ubicación a Plaspy.
- Configurar el APN y la autenticación opcional para que se puedan establecer conexiones GPRS.
- Establecer el identificador del dispositivo (derivado del IMEI) para que Plaspy asocie los mensajes entrantes con el activo correcto.
- Elegir el transporte (UDP o TCP) y confirmar que el modo del dispositivo esté en GPRS para el reporte de datos.
- Validar la conectividad consultando el IMEI y comprobando que el dispositivo aparezca en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Plaspy behavior: Plaspy automatically detects the tracker protocol when the device connects and Plaspy uses the same port for all supported devices

## Requisitos previos comunes

- Una unidad MT08B alimentada con método de configuración SMS o GPRS accesible según las instrucciones del proveedor
- Una tarjeta SIM GSM válida con datos habilitados y credenciales APN correctas para el operador móvil
- El IMEI del dispositivo disponible para identificación y verificación
- Acceso a la documentación de TopShine o a las herramientas del instalador que describan la sintaxis de comandos SMS/GPRS
- Familiaridad básica con el envío de comandos SMS al dispositivo o con el uso del software de configuración del proveedor
- Confirmación de que el firmware del dispositivo soporta el conjunto de comandos mostrado a continuación

## Cómo se conecta este rastreador a Plaspy

El MT08B puede enviar ubicación y telemetría a Plaspy usando SMS o GPRS. Al usar GPRS, el rastreador abre un socket hacia el endpoint y puerto del servidor Plaspy y transmite mensajes estándar de ubicación/estado que Plaspy procesa para visualización y alertas.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- El transporte puede configurarse en UDP o TCP según la opción del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente
- El identificador del dispositivo se deriva del IMEI para que Plaspy pueda mapear los mensajes entrantes al activo correcto
- Una vez en línea, el rastreador envía actualizaciones periódicas según el intervalo configurado y genera mensajes de evento por movimiento, geocerca, SOS y alertas de alimentación
- Plaspy recibe estos mensajes para la visualización en el mapa en tiempo real, la generación de alertas y la retención del historial

## Flujo de configuración común

1. Acceda al método oficial de configuración de TopShine, típicamente mediante comandos SMS documentados por el proveedor o la herramienta de configuración del vendedor.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 según la sintaxis de comandos del dispositivo.
3. Establezca el puerto a 8888 en la configuración de servidor del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; configure el mismo transporte cuando sea necesario.
5. Configure el APN y cualquier usuario y contraseña del APN requeridos por el operador móvil para que el dispositivo pueda usar GPRS.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo lo requiere.
7. Valide que el dispositivo reporte a Plaspy consultando el IMEI y verificando el estado en línea del dispositivo en Plaspy.

## Comandos de configuración de ejemplo

El MT08B soporta configuración basada en SMS. Los comandos de ejemplo del proveedor a continuación usan la contraseña del dispositivo 000000 por defecto. Reemplace los marcadores y campos específicos del dispositivo según sea necesario. Mantenga el orden indicado para la configuración inicial cuando se muestre.

- Note: default device password in these examples is 000000. Adjust if the device password was changed.

1. Optional initial factory reset (use only when you need a reset)
```text
W000000,990,099###
```
2. Set the device ID (the vendor command uses 14 digits derived from IMEI)
```text
W000000,010,<14-digit-device-id>
```
- Explanation: replace \<14-digit-device-id> with the first 14 digits from the device IMEI if required by the device. Plaspy will use the device IMEI (15 digits) to identify the device in the platform.

3. Set the operator APN (placeholders preserved)
```text
W000000,011,[apn][,[apnu],[apnp]]
```
- Explanation: replace [apn] with your mobile operator APN. If your operator requires a username and password, provide [apnu] and [apnp] respectively (the comma and placeholders are used only when needed).

4. Set the GPRS server to Plaspy by IP and port
```text
W000000,012,54.85.159.138,8888
```
- This command points the device at Plaspy using the public server IP and port 8888. You may also enter d.plaspy.com if the device accepts a domain.

5. Switch the device to GPRS data mode
```text
W000000,013,2
```

6. Set the update interval (example value)
```text
W000000,014,6
```
- Explanation: this sample sets a device reporting interval. Replace 6 with the desired interval per vendor documentation.

7. Query the device IMEI for verification
```text
W000000,601
```
- Send this SMS to receive the IMEI from the device so you can confirm identifiers and device status.

## Notas de configuración

- La configuración por SMS está documentada públicamente por el proveedor y se usa comúnmente para la configuración en campo del MT08B; siga exactamente la sintaxis de comandos del proveedor y mantenga la contraseña del dispositivo.
- Las credenciales APN son específicas del operador; si su APN requiere usuario y contraseña, incluya [apnu] y [apnp] en el comando de APN.
- Elija TCP o UDP según las necesidades de la instalación; Plaspy soporta ambos y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte al puerto compartido.
- El firmware y la sintaxis de comandos pueden diferir entre lotes de producción o versiones de firmware; siempre verifique el formato exacto del comando para su revisión del dispositivo con la documentación de TopShine.
- Después de aplicar los ajustes, confirme que el dispositivo reporta a Plaspy comprobando que aparece en línea en la plataforma y revisando los mensajes de posición recientes.

## Por qué usar Plaspy con esta configuración

Usar el MT08B con Plaspy ofrece a los operadores un equipo compacto y discreto combinado con una plataforma que centraliza ubicación, alertas de eventos e historial. Para flotas pequeñas, motocicletas e instalaciones con enfoque en seguridad, el MT08B junto con Plaspy permite visibilidad sobre movimiento, eventos de alimentación, alertas SOS y señales I/O en una sola plataforma.

Learn more about Plaspy and how to manage device integration at https://www.plaspy.com. Verify device specific configuration steps and firmware details with TopShine at https://www.gztopshine.com/ since manufacturer specifications and setup methods can change over time.
