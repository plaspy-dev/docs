---
slug: /topten/tk228/configuration
id: tk228-configuration
sidebar_label: Configuration
title: TopTen - TK228 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopTen TK228 para conectarse a Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración TopTen TK228
  - Instalación TopTen TK228
  - Configuración servidor TopTen TK228
  - TopTen TK228 Plaspy
  - Instalación OBD II TK228
  - Configuración rastreador GPS TopTen
  - Configuración APN TopTen TK228
  - Configuración rastreador Plaspy
  - Rastreo vehicular TK228
  - Configuración GPRS TK228
---

# TopTen - TK228 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador TopTen TK228 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, cómo el TK228 se identifica ante la plataforma y los comandos SMS prácticos que se usan comúnmente para apuntar el equipo a Plaspy. El material a continuación se basa en el patrón de configuración público para dispositivos TK228 y en los valores de servidor que Plaspy necesita para la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que una misma configuración de servidor suele funcionar para varios modelos. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor; trate los comandos aquí como ejemplos públicos y verifique los detalles con el firmware del equipo y la documentación oficial de TopTen.

## Resumen de la configuración

Este resumen explica el objetivo práctico de configurar un TK228 para usar con Plaspy y qué esperar durante el proceso de puesta en marcha.

- Configurar el TK228 para que reporte al endpoint y puerto del servidor de Plaspy.
- Establecer el APN y los parámetros GPRS para que el rastreador pueda enviar datos por la red móvil.
- Asegurarse de que el identificador del dispositivo coincida con la ID derivada del IMEI que Plaspy espera, para que el equipo sea visible en la plataforma.
- Validar la conectividad y el reporte para que el dispositivo aparezca y se actualice en Plaspy.
- Opcionalmente, restaurar los valores de fábrica antes de la configuración si el instalador o el proveedor lo recomiendan.

## Ajustes del servidor Plaspy

- servidor dominio d.plaspy.com
- servidor IP 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- detección automática de protocolo en Plaspy

Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte al endpoint configurado.

## Requisitos habituales antes de la configuración

- Un TK228 con alimentación instalado o conectado al puerto OBD II del vehículo o a la fuente de energía, listo para aceptar configuraciones.
- Una tarjeta SIM funcional con un plan de datos activo y la información de APN correcta para la red móvil.
- Acceso a un teléfono o herramienta SMS capaz de enviar mensajes de configuración al rastreador.
- El IMEI del dispositivo disponible para identificación y verificación durante la configuración.
- Conocimiento de las credenciales APN, incluyendo el nombre del APN y, si aplica, usuario y contraseña del APN.
- Herramienta de configuración del fabricante o instrucciones de TopTen si prefiere una configuración por software en lugar de por SMS.

## Cómo se conecta este rastreador a Plaspy

El TK228 se configura para enviar datos de ubicación y telemetría al endpoint y puerto compartidos de Plaspy, de modo que pueda ser monitoreado y gestionado desde la plataforma.

- El rastreador reporta a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente si el dispositivo usa UDP o TCP, así que puede usar cualquiera de los dos transportes al configurar el equipo.
- El ID del rastreador que usa Plaspy corresponde a los últimos 14 dígitos del IMEI tal como lo reporta el comando PAR del dispositivo.
- Los datos enviados a Plaspy pueden incluir posición GPS, ubicación basada en GSM, eventos de alarma y diagnósticos CAN por GPRS según lo soporte el firmware del TK228.
- En el lado del dispositivo se aplican intervalos de reporte y ajustes de suspensión para controlar el uso de la red y la frecuencia de envío.

## Flujo de configuración típico

1. Acceda al método de configuración oficial del fabricante o al software y revise las instrucciones del equipo sobre el formato de los comandos SMS o la configuración guiada por herramienta.
2. Ingrese el servidor de Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según la opción de configuración del equipo.
3. Establezca el puerto de destino en 8888 ya que Plaspy usa el mismo puerto en todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Proporcione los ajustes APN y cualquier usuario y contraseña del APN necesarios para establecer la conexión GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si la documentación del equipo o del proveedor indica que es necesario.
7. Verifique que el dispositivo reporte a Plaspy y que la ID derivada del IMEI coincida con el valor que Plaspy espera.

## Comandos de configuración de ejemplo

El TK228 soporta configuración vía SMS. Los comandos públicos que se muestran a continuación ejemplifican el formato SMS común para restaurar valores por defecto, establecer el APN y servidor, y consultar la configuración actual. Mantenga los marcadores de posición al sustituir sus credenciales de red.

- Paso opcional de restauración de fábrica o reinicio inicial
```sms
111111CLR
```
- Configurar APN y servidor GPRS para apuntar a Plaspy por IP con puerto y marcadores de APN
```sms
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
- Verificar o consultar la configuración actual del servidor
```sms
111111WWW:
```

Notas sobre los comandos anteriores
- El prefijo 111111 en estos ejemplos es la contraseña de comando que aparece en el conjunto de comandos públicos. Reemplácelo por la contraseña de su dispositivo si es diferente.
- {{apn}} es el nombre del APN requerido por su operador móvil. {{apnu}} es el usuario del APN y {{apnp}} es la contraseña del APN. Mantenga estos marcadores y sustitúyalos por los valores de su operador.
- El orden de los comandos importa cuando restaura valores de fábrica antes de aplicar la configuración de red. El comando de reinicio de fábrica es opcional y debe usarse solo cuando sea necesario.

## Observaciones sobre la configuración

- Las diferencias de firmware y las variantes regionales pueden cambiar la sintaxis de los comandos o los parámetros disponibles. Verifique el firmware de su rastreador y las instrucciones del proveedor antes de enviar comandos SMS.
- El TK228 soporta la configuración por SMS como se muestra, pero muchos instaladores usan software o herramientas del fabricante para configuraciones masivas y monitoreo.
- Elija UDP o TCP según la preferencia del instalador o los requisitos de la red. Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente.
- Al ingresar el servidor puede usar el dominio d.plaspy.com o la IP directa 54.85.159.138; ambos resuelven al mismo endpoint de Plaspy en el puerto 8888.
- Confirme la convención de ID derivada del IMEI con la salida del comando PAR para que el dispositivo se identifique correctamente en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar correctamente un TopTen TK228 para que reporte a Plaspy proporciona visibilidad centralizada de la ubicación del vehículo, eventos de alarma y diagnósticos por GPRS en una única plataforma. Para organizaciones que gestionan flotas o necesitan supervisión operativa en tiempo real, configurar el TK228 para reportar a Plaspy garantiza reportes consistentes a un endpoint de servidor compartido y simplifica la incorporación de dispositivos gracias a la detección automática de protocolos de Plaspy.

To learn more about Plaspy and how it handles device connectivity and fleet management features visit https://www.plaspy.com. Please verify device specific configuration methods and the latest manufacturer details on the TopTen site at http://www.t10.cn because firmware behavior and setup procedures can change over time.
