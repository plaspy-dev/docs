---
slug: /globalsat/lt_501h/configuration
id: lt_501h-configuration
sidebar_label: Configuration
title: GlobalSat - LT-501H Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat LT-501H con Plaspy, incluye ajustes de servidor, comandos SMS y pasos prácticos de instalación
keywords:
  - configuración GlobalSat LT-501H
  - instalación GlobalSat LT-501H
  - configuración LT-501H Plaspy
  - configuración LoRaWAN LT-501H
  - configuración servidor rastreador GlobalSat
  - configuración rastreador Plaspy
  - guía configuración rastreador GPS
  - comandos SMS LT-501H
  - ajustes servidor Plaspy
  - configuración LoRaWAN rastreador
---

# GlobalSat - Configuración LT-501H

Esta página documenta el contexto público de configuración para conectar la familia GlobalSat LT-501H a Plaspy. Resume los ajustes de servidor prácticos que Plaspy espera, los prerrequisitos típicos que debe verificar antes de la configuración y los comandos públicos y ejemplos de flujo de trabajo que se usan habitualmente para apuntar un rastreador hacia Plaspy. La serie LT-501 dispone de capacidad LoRaWAN y se integra con frecuencia en Plaspy mediante uplinks LoRaWAN, pero la siguiente guía también incluye ejemplos de comandos SMS de dominio público cuando el fabricante o las herramientas del proveedor los ofrecen.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de los dispositivos requieren el mismo endpoint y puerto. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación o la herramienta de configuración del proveedor. Use esta guía para aplicar los valores públicos de Plaspy y los pasos prácticos, y consulte la documentación del fabricante para detalles específicos del dispositivo.

## Resumen de la configuración

Configurar el LT-501H para Plaspy consiste en asegurar que el rastreador envíe ubicación y telemetría al endpoint compartido de Plaspy para que la plataforma pueda ingerir, decodificar y mostrar los datos. Los valores públicos que aparecen a continuación son los que Plaspy publica para el enrutamiento de dispositivos y se mantienen consistentes entre los dispositivos soportados para simplificar la provisión.

- Apunte el rastreador o la herramienta de configuración del proveedor hacia Plaspy usando el endpoint o IP publicados para que los uplinks lleguen a Plaspy.
- Configure el puerto al puerto compartido de Plaspy para que el tráfico del dispositivo sea aceptado por el backend de Plaspy.
- Elija el transporte UDP o TCP en el dispositivo si el firmware requiere seleccionar el tipo de transporte.
- Valide la conectividad y que el dispositivo aparezca en su espacio de trabajo en Plaspy tras la configuración.
- Utilice el IMEI del dispositivo o el identificador de hardware durante el registro para que Plaspy pueda asociar los uplinks del dispositivo con su cuenta.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Acceso al IMEI del dispositivo o al identificador de hardware requerido para el registro y los plantillas de comandos.
- Batería cargada o alimentación estable para que el dispositivo permanezca accesible durante la configuración.
- Acceso al método oficial de configuración del fabricante o a la herramienta del proveedor para el LT-501H.
- Red LoRaWAN y servidor de aplicaciones configurados para reenviar uplinks a Plaspy si usa integración LoRaWAN.
- Si usa configuración vía SMS, una tarjeta SIM operativa y la capacidad de enviar mensajes SMS al dispositivo.
- Un terminal o cliente SMS para enviar los comandos públicos de configuración y capturar las confirmaciones del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El método principal de integración del LT-501H con Plaspy son los uplinks LoRaWAN que entregan ubicación y telemetría al backend de Plaspy. Plaspy ingiere y decodifica esos uplinks para que los dispositivos sean visibles en la plataforma. Cuando las herramientas del proveedor o el firmware permiten la configuración directa del servidor mediante comando o SMS, el dispositivo puede configurarse para apuntar directamente al endpoint y puerto de Plaspy.

- El LT-501H envía uplinks a Plaspy usando el transporte y endpoint configurados para que Plaspy procese la ubicación y los eventos.
- Plaspy recibe los datos en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo que utiliza el rastreador.
- Una vez que el rastreador reporta, Plaspy enlaza el IMEI o identificador del dispositivo al espacio de trabajo para su visibilidad en el mapa y el historial.
- Eventos como movimiento, estado de batería y alertas de ayuda se reenvían a Plaspy para monitoreo operativo.
- Si el fabricante proporciona comandos de configuración por SMS o IP, esos comandos pueden establecer los campos E0 y E1 con los valores de Plaspy para que los reportes directos lleguen a la plataforma.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software para el LT-501H y confirme los canales de configuración soportados.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor o endpoint.
3. Configure el puerto de destino a 8888 que usa Plaspy para todos los dispositivos.
4. Seleccione el transporte UDP o TCP en el puerto 8888 si el dispositivo o firmware solicita elegir el transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe el comando SMS requerido si se soporta la configuración vía SMS.
6. Reinicie o haga reboot del dispositivo si la herramienta o el flujo de trabajo exige reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en su espacio de trabajo y que se reciben uplinks recientes.

## Ejemplos de comandos de configuración

El formato público de comando SMS proporcionado por el fabricante para esta familia de rastreadores puede usarse cuando el dispositivo soporta configuración por SMS. Los siguientes ejemplos se extraen del contenido público de configuración del modelo. Preserve y reemplace los marcadores de posición cuando envíe el comando.

General command format noted in vendor content
TSPRXAB27GHKLMnaicz*U!

Primary setup command
Replace {{imei}} with the device IMEI and {{apn}}, {{apnu}}, {{apnp}} with SIM APN values where required. The checksum placeholder {{checksum}} must be calculated and appended as shown.

```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Optional reboot command labeled in vendor content as a device reboot step
Replace {{imei}} with the device IMEI and compute the checksum for this string as well.

```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Notas sobre los marcadores de posición y el checksum
- {{imei}} es el número IMEI del dispositivo; incluya la cadena IMEI exacta en el comando.
- {{apn}}, {{apnu}}, {{apnp}} son marcadores para el APN de la SIM, el usuario del APN y la contraseña del APN cuando la configuración por SMS o celular requiere parámetros GPRS.
- {{checksum}} y {{checksumreeboot}} son checksums hexadecimales de dos dígitos en mayúsculas calculados sobre el texto del comando antes del asterisco. El script público del proveedor muestra un checksum basado en XOR donde se hace XOR de cada código de carácter y el resultado se convierte a una cadena hex de dos caracteres en mayúsculas.
- Los comandos anteriores establecen E0 en la IP del servidor Plaspy 54.85.159.138 y E1 en el puerto 8888 según lo publicado por Plaspy. También puede usar d.plaspy.com en herramientas del proveedor que acepten un nombre de dominio en lugar de una IP.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comando o la lógica del checksum. Confirme siempre la sintaxis con la guía actual del fabricante.
- Algunas implementaciones del LT-501H usan solo LoRaWAN y no requieren configuración de servidor IP o SMS; use el enrutamiento de la aplicación LoRaWAN para reenviar uplinks a Plaspy cuando corresponda.
- Elija UDP o TCP según la opción del firmware del dispositivo. Plaspy escucha cualquiera de los dos transportes en el mismo puerto compartido 8888.
- La configuración por SMS está soportada por los comandos públicos del proveedor mostrados arriba cuando el dispositivo o la variante acepta comandos SMS.
- Al usar comandos SMS incluya el IMEI exactamente y verifique que el checksum computado sea correcto antes de enviar.

## Por qué usar Plaspy con esta configuración

Usar el LT-501H con Plaspy ofrece visibilidad centralizada para rastreadores LoRaWAN de larga duración y permite a las organizaciones recopilar GPS, balizas BLE y telemetría de movimiento en una sola plataforma. Ya sea que utilice el enrutamiento de aplicaciones LoRaWAN o comandos proporcionados por el proveedor para apuntar el dispositivo a Plaspy, los ajustes de servidor compartidos simplifican la provisión y facilitan que los dispositivos comiencen a reportar rápidamente.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and manufacturer guidance verify details on the official GlobalSat site https://www.globalsat.com.tw/ as vendor instructions and firmware behavior may change over time.
