---
slug: /suntech/st25t/configuration
id: st25t-configuration
sidebar_label: Configuration
title: Suntech - ST25T Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST25T con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración Suntech ST25T
  - Instalación Suntech ST25T
  - Suntech ST25T Plaspy
  - Configuración servidor ST25T
  - Configuración plataforma GPS ST25T
  - Configuración telemetría Suntech
  - Configuración dispositivo Plaspy
  - Configuración interfaz telemetría vehicular
  - Configuración APN ST25T
  - Configuración SMS ST25T
---

# Suntech - Configuración del ST25T

Esta página documenta el contexto público de configuración para usar el módulo de interfaz Suntech ST25T con Plaspy. Se enfoca en los pasos prácticos y públicos necesarios para dirigir el dispositivo o su gateway emparejado a reportar telemetría a Plaspy, incluyendo los ajustes de servidor que requiere Plaspy y ejemplos de comandos SMS comúnmente utilizados para programar parámetros de red y reporte.

Plaspy utiliza el mismo endpoint y puerto compartido para los dispositivos soportados y detecta automáticamente el protocolo del rastreador usado por los dispositivos conectados. Los pasos de configuración por parte del fabricante para el ST25T o su gateway pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; los comandos que se muestran abajo reflejan ejemplos públicos de configuración vía SMS y marcadores de posición que usted debe adaptar a su instalación y a los ajustes del operador de SIM.

## Resumen de la configuración

Configurar el ST25T para la integración con Plaspy prepara la interfaz y su gateway para reenviar datos del bus del vehículo y sensores a un endpoint de Plaspy. El proceso alinea los ajustes de APN y GPRS, establece el intervalo de reporte y verifica que el dispositivo sea visible en la plataforma Plaspy. Cuando el ST25T se usa como interfaz de telemetría normalmente se empareja con un gateway compatible con Plaspy que aporta conectividad celular y GNSS, mientras el ST25T provee flujos de datos ECU, sensores y seriales.

- Configure el dispositivo o el gateway emparejado para que apunten al servidor Plaspy d.plaspy.com o a la IP del servidor Plaspy.
- Establezca el APN, el nombre de usuario y la contraseña de APN opcionales, y los ajustes de transporte para que GPRS pueda entregar mensajes a Plaspy.
- Use un intervalo de reporte de ejemplo de 60 segundos cuando corresponda para habilitar telemetría casi en tiempo real en Plaspy.
- Valide la conectividad con el comando SMS de verificación provisto o comprobando el dispositivo en la plataforma Plaspy.
- Asegúrese de que el ID del dispositivo se calcule correctamente a partir del IMEI al enviar comandos de configuración por SMS.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP (el dispositivo puede configurarse usando UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Tarjeta SIM activa instalada en el gateway o dispositivo que proporcionará datos celulares y recepción de SMS para la configuración.
- Información APN operativa del proveedor móvil, incluyendo APN, nombre de usuario APN y contraseña APN cuando sea necesario.
- Acceso al método oficial de configuración del fabricante o a la lista de comandos SMS para el ST25T o su gateway.
- IMEI del dispositivo disponible para calcular el ID de dispositivo usado en los comandos de configuración.
- Un teléfono móvil capaz de enviar SMS al número del dispositivo para la configuración vía SMS si el dispositivo soporta programación por SMS.

## Cómo se conecta este rastreador a Plaspy

El ST25T es una interfaz de telemetría que reenvía datos del bus del vehículo y de sensores a un gateway compatible con Plaspy, que a su vez envía los datos a Plaspy. En algunas implementaciones la interfaz o el gateway aceptan configuración por SMS o GPRS y se apuntan directamente al endpoint de Plaspy para que los mensajes de telemetría y eventos se entreguen a Plaspy en el puerto 8888.

- El dispositivo o el gateway emparejado se configura para reportar al endpoint Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los datos viajan por TCP o UDP dependiendo del transporte seleccionado durante la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador usado por el dispositivo y procesa la telemetría entrante.
- Los reportes regulares de posición y telemetría se reenvían a Plaspy para supervisión en vivo, alertas e informes históricos.
- Se pueden usar comandos de verificación o consultas de estado para confirmar que el dispositivo está reportando al servidor Plaspy.

## Procedimiento típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el ST25T o el gateway emparejado (SMS, herramienta Bluetooth local o utilidad del proveedor).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor de red/GPRS.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para los dispositivos soportados).
4. Elija UDP o TCP si el dispositivo requiere selección explícita de transporte y asegúrese de que la misma opción sea aceptable en el lado del gateway.
5. Ingrese el APN del operador y los campos opcionales de nombre de usuario y contraseña del APN (use los marcadores {{apn}}, {{apnu}}, {{apnp}} según sea necesario).
6. Aplique o guarde la configuración y reinicie el dispositivo o el gateway si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo esté reportando a Plaspy utilizando el comando SMS de verificación o comprobando la conectividad del dispositivo en Plaspy.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del ST25T que se muestran a continuación presentan plantillas de comandos SMS usadas para establecer el APN del operador, la IP y el puerto del servidor GPRS de Plaspy, y el intervalo de reporte. Estas plantillas conservan marcadores de posición para los ajustes APN y un id de dispositivo calculado. El id de dispositivo se deriva del IMEI: tome los seis dígitos inmediatamente antes del último dígito del IMEI (es decir, elimine el último dígito del IMEI y luego use los seis dígitos anteriores). Por ejemplo, el IMEI 123456789012345 produce el id de dispositivo 901234 en el flujo de ejemplo.

Nota: envíe estos comandos como mensajes SMS al número del dispositivo o del gateway según el procedimiento de programación SMS del fabricante.

- Comando de red y servidor GPRS (establecer APN y apuntar a Plaspy)
```text
SA200NTW;{{device_id}};02;<auth_flag>;<apn>;{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- Explicación:
  - {{device_id}} = seis dígitos extraídos del IMEI como se describió arriba.
  - <auth_flag> = 1 si proporciona nombre de usuario o contraseña del APN ({{apnu}} o {{apnp}}), de lo contrario 0.
  - {{apn}} = marcador de posición del APN del operador.
  - {{apnu}} y {{apnp}} = marcadores de posición opcionales para nombre de usuario y contraseña del APN.
  - El comando usa la IP del servidor Plaspy 54.85.159.138 y el puerto 8888.

- Establecer el intervalo de actualización/reporte a 60 segundos
```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```
- Verificar o consultar la configuración actual predeterminada
```text
SA200CMD;{{device_id}};02;PresetA
```

Estos comandos son ejemplos públicos extraídos del contenido de configuración del dispositivo. Adapte los marcadores de posición a su APN del operador y al id de dispositivo derivado del IMEI. Si su conjunto de comandos SMS o el firmware difieren, utilice la herramienta o documentación del fabricante para traducir estas plantillas al formato correcto.

## Notas de configuración

- Las versiones de firmware del dispositivo y del gateway pueden cambiar los formatos de comando y los parámetros soportados; siempre verifique la sintaxis SMS exacta para su revisión de firmware.
- El ST25T normalmente reenvía telemetría a un gateway compatible con Plaspy; confirme si debe programar el propio ST25T o el gateway al aplicar los ajustes de servidor y APN.
- Elija UDP o TCP según la confiabilidad de la red y el comportamiento del gateway; ambos transportes son soportados por Plaspy en el puerto 8888.
- Cuando use autenticación APN incluya el nombre de usuario y la contraseña apropiados y establezca el campo <auth_flag> en 1 en la plantilla SA200NTW.
- La configuración vía SMS es común en los ejemplos públicos mostrados aquí; consulte las instrucciones oficiales de Suntech para métodos alternativos de configuración, como una herramienta Bluetooth local o software del proveedor.

## Por qué usar Plaspy con esta configuración

Usar el ST25T junto con un gateway compatible con Plaspy ofrece una forma eficiente de integrar datos del bus del vehículo, sensores y datos seriales heredados en la plataforma Plaspy. Esta configuración permite a las flotas combinar la posición GNSS del gateway con los flujos de telemetría del ST25T para monitoreo unificado, análisis de combustible y alertas basadas en eventos en Plaspy.

Para conocer más sobre Plaspy y las configuraciones soportadas visite https://www.plaspy.com. Para detalles actuales específicos del dispositivo, notas de firmware y comandos oficiales consulte al fabricante en http://www.suntechint.com/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
