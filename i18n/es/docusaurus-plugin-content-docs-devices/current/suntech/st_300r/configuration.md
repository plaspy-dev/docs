---
slug: /suntech/st_300r/configuration
id: st_300r-configuration
sidebar_label: Configuration
title: Suntech - ST 300R Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST 300R para conectarlo a Plaspy con ajustes de servidor y comandos SMS
keywords:
  - configuración Suntech ST 300R
  - instalación Suntech ST 300R
  - ST 300R Plaspy
  - configuración rastreador GPS Suntech
  - ajustes servidor Suntech ST 300R
  - configuración rastreador Plaspy
  - guía instalación rastreador GPS
  - configuración seguimiento vehículos
  - seguimiento flotas Suntech ST 300R
  - comandos SMS Suntech ST 300R
---

# Suntech - Configuración ST 300R

Esta página describe el contexto público de configuración para usar el rastreador Suntech ST 300R con Plaspy. Se centra en los ajustes prácticos de servidor, el flujo de trabajo habitual y los comandos SMS que puede usar para apuntar un ST 300R a Plaspy, de modo que el dispositivo reporte ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos y ejemplos aquí como orientación pública y verifique el comportamiento del dispositivo frente a la documentación actual de Suntech.

## Resumen de configuración

Este proceso prepara un ST 300R para comunicarse de forma confiable con Plaspy configurando parámetros de red, el servidor de reporte y los intervalos de envío. Al terminar, el rastreador enviará posiciones y actualizaciones de estado al endpoint del servidor de Plaspy para que el dispositivo aparezca en la plataforma.

- Configure los parámetros de red del dispositivo para que establezca conectividad GPRS y alcance el endpoint de Plaspy.
- Configure el rastreador para que reporte al dominio o IP del servidor Plaspy y al puerto compartido.
- Defina los intervalos y el comportamiento de reporte para que Plaspy reciba actualizaciones frecuentes.
- Use comandos por SMS provistos por Suntech para aplicar configuraciones si no dispone de una herramienta de instalador.
- Verifique la identidad y conectividad del dispositivo para confirmar que el rastreador es visible y reporta correctamente dentro de Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Un ST 300R alimentado y accesible con un IMEI conocido para poder derivar el identificador del dispositivo.
- Una tarjeta SIM operativa con datos habilitados y el APN correcto del operador móvil.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante.
- Referencia a la documentación del fabricante o la guía de instalador para la sintaxis exacta de los SMS y el comportamiento del firmware.
- Un plan para validar el dispositivo después de la configuración confirmando que reporta a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El ST 300R se configura para enviar su telemetría y estado al endpoint y puerto compartidos de Plaspy, donde Plaspy detecta el protocolo del rastreador y procesa los mensajes entrantes. Una vez configurado, el dispositivo será visible en Plaspy y podrá monitorearse por ubicación y eventos.

- El rastreador reporta ubicación y estado a d.plaspy.com o a la IP de Plaspy 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo usado por el rastreador y asigna el dispositivo a la plataforma.
- Los reportes suelen incluir posición y estado del dispositivo para que Plaspy muestre ubicación, estado de ignición y otras señales compatibles.
- Tras la configuración, valide que el equipo aparece y se actualiza en Plaspy para confirmar la conectividad de extremo a extremo.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración Suntech para el ST 300R, ya sea mediante comandos SMS del fabricante o una herramienta de configuración autorizada.
2. Ingrese la dirección del servidor Plaspy, ya sea el dominio d.plaspy.com o la IP 54.85.159.138 cuando el dispositivo solicite un endpoint.
3. Establezca el puerto del servidor en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte; Plaspy admite ambos y detectará el protocolo automáticamente.
5. Aplique o guarde la configuración en el rastreador usando el método del fabricante, normalmente enviando comandos SMS o aplicando ajustes en la herramienta.
6. Reinicie el dispositivo si el firmware lo requiere para que los nuevos parámetros de red y servidor tengan efecto.
7. Verifique que el dispositivo reporte a Plaspy revisando la plataforma en busca de actualizaciones entrantes desde el ID de dispositivo configurado.

## Ejemplos de comandos de configuración

El ST 300R puede configurarse por SMS. A continuación aparecen las secuencias públicas de comandos SMS extraídas del contenido público de Suntech. Reemplace {{device_id}} con el ID de dispositivo calculado a partir del IMEI como se indica más abajo. Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} en sus SMS si necesita suministrar credenciales APN del operador.

Cómo calcular el ID de dispositivo
- El ID de dispositivo son los últimos 9 dígitos del IMEI excluyendo el dígito verificador final. Por ejemplo, si el IMEI es 123456789012345, el ID de dispositivo serían los 9 dígitos que comienzan en la posición 6 hasta la posición 14 de la secuencia IMEI; use los 9 dígitos finales antes del último dígito.

1) Reinicio de fábrica inicial opcional (usar solo si es necesario o como parte de la configuración inicial)
```text
ST300CMD;{{device_id}};02;Reset
```

2) Establecer el APN del operador y el servidor GPRS
- Este comando configura los valores APN y la IP y puerto del servidor Plaspy. Conserve los marcadores de posición para las credenciales APN si su operador las requiere.
```text
ST300NTW;{{device_id}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- Notas:
  - El cuarto campo aquí es una bandera para habilitar el APN; ajústela según la herramienta del dispositivo si espera un valor diferente.
  - Puede reemplazar la IP de Plaspy por d.plaspy.com en sistemas que acepten nombres de dominio en lugar de direcciones IP.

3) Establecer intervalo de reporte a 60 segundos
```text
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4) Comando de verificación para revisar la configuración actual
```text
ST300CMD;{{device_id}};02;PresetA
```

## Notas de configuración

- La configuración por SMS se utiliza comúnmente en dispositivos ST 300R; asegúrese de que su SIM pueda enviar y recibir SMS y tenga datos habilitados para GPRS.
- El cálculo del ID de dispositivo debe seguir la regla del fabricante mostrada arriba; un ID incorrecto impedirá que Plaspy asigne los mensajes a su cuenta.
- La selección TCP frente a UDP depende de la preferencia del instalador y de las condiciones de la red; Plaspy acepta ambos y determina el protocolo automáticamente.
- Las revisiones de firmware y las variantes regionales pueden cambiar la sintaxis exacta de los SMS y la posición de los parámetros, por lo que verifique los comandos con la documentación actual de Suntech.
- Al suministrar credenciales APN, conserve los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores del operador necesarios para su SIM.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST 300R con Plaspy ofrece una vía práctica para incorporar la ubicación del vehículo, el estado de ignición y los datos de sensores en una única plataforma de gestión. Estandarizar el endpoint de servidor y el puerto entre dispositivos simplifica el despliegue y permite que Plaspy detecte protocolos automáticamente, reduciendo la complejidad de configuración por dispositivo.

Para obtener más información sobre cómo funciona Plaspy y comenzar, visite https://www.plaspy.com. Para detalles específicos más recientes sobre la configuración del dispositivo, notas de firmware e instrucciones del fabricante, consulte el sitio oficial de Suntech en http://www.suntechint.com/. Los métodos específicos del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, así que siempre verifique la documentación más reciente del fabricante.
