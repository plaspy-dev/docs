---
slug: /tzone/tz_bt04/configuration
id: tz_bt04-configuration
sidebar_label: Configuration
title: TZone - TZ-BT04 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del registrador TZone TZ-BT04 para subir datos a Plaspy y comandos SMS
keywords:
  - Configuración TZone TZ-BT04
  - Configuración TZ-BT04 para Plaspy
  - Rastreador TZone Plaspy
  - Configuración de servidor TZ BT04
  - Configuración de software TZ-BT04
  - Configuración registrador de datos TZone
  - Configuración GPRS TZ-BT04
  - Registrador de temperatura y humedad TZone
  - Configuración de dispositivo Plaspy
  - Configuración plataforma TZone TZ BT04
---

# TZone - Configuración del TZ-BT04

Esta página describe la configuración pública necesaria para usar el TZone TZ-BT04 con Plaspy. Reúne los pasos prácticos publicados que puede seguir para preparar el dispositivo y que envíe datos de temperatura y humedad a la plataforma Plaspy. El TZ-BT04 es un registrador de datos Bluetooth Low Energy que también permite subir la información recopilada a un servidor mediante GPRS; esta guía se centra en la configuración GPRS documentada públicamente y relevante para la compatibilidad con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar los ajustes públicos que Plaspy requiere y consulte con el fabricante sobre diferencias específicas antes de realizar cambios en dispositivos en producción.

## Resumen de la configuración

El objetivo de la configuración es permitir que el TZ-BT04 envíe los datos registrados a Plaspy para que la plataforma muestre la telemetría y el historial del dispositivo. En dispositivos TZ-BT04 que suben vía GPRS, la configuración pública suele requerir establecer el APN del operador, un intervalo de reporte y la dirección y puerto del servidor de Plaspy.

- Configure el APN del operador para que la SIM pueda acceder a los servicios de datos GPRS.
- Defina un intervalo de subida o reporte apropiado para que el dispositivo envíe datos con la cadencia deseada.
- Configure el dispositivo con los datos del servidor de Plaspy para que las subidas sean aceptadas por la plataforma.
- Active el modo de subida GPRS en el dispositivo una vez que la red esté configurada.
- Valide que el dispositivo aparezca y reporte correctamente en Plaspy tras la configuración.

## Ajustes de servidor de Plaspy

Al configurar el TZ-BT04 para Plaspy, use los siguientes ajustes públicos de servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy emplea el mismo puerto para todos los dispositivos soportados y tratará de detectar automáticamente el protocolo correcto cuando el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Asegúrese de que el TZ-BT04 tenga batería suficiente o una fuente de alimentación activa para la configuración y las pruebas.
- Disponga de una tarjeta SIM con datos móviles activos y los detalles del APN del operador.
- Capacidad para enviar comandos SMS al dispositivo si utiliza el método de configuración por SMS mostrado en esta guía.
- Confirme la cobertura GPRS en la ubicación del dispositivo para que las subidas puedan alcanzar los servidores de Plaspy.
- Acceso a la guía de configuración o herramientas del fabricante para el TZ-BT04 y así seguir las instrucciones específicas del dispositivo.
- Una cuenta activa de Plaspy o acceso a su instancia de la plataforma Plaspy para verificar que el dispositivo reporta correctamente tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El TZ-BT04 puede subir la telemetría recopilada a un servidor remoto a través de una conexión GPRS. Para la compatibilidad con Plaspy, el dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda recibir y mostrar los datos.

- El dispositivo usa GPRS para abrir una conexión al dominio o IP del servidor Plaspy en el puerto 8888.
- Los datos se envían por UDP o TCP según la configuración del dispositivo y la detección de Plaspy.
- Plaspy detecta automáticamente el protocolo del dispositivo y acepta las conexiones entrantes.
- Una vez conectado, Plaspy almacena y muestra el historial y los reportes en tiempo real del dispositivo.
- La visibilidad en la plataforma y las alertas dependen de una configuración correcta del APN, servidor y transporte.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante para el TZ-BT04. En muchas instalaciones esto se realiza mediante un conjunto de comandos por SMS o con la herramienta del fabricante descrita en el manual del dispositivo.
2. Introduzca la dirección del servidor de Plaspy especificando ya sea el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo soporte el dispositivo.
3. Establezca el puerto en 8888 en la configuración del servidor/GPRS del dispositivo.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
5. Configure el APN del operador y cualquier credencial de APN necesaria para la tarjeta SIM.
6. Aplique o guarde la configuración y active el modo de subida GPRS en el dispositivo.
7. Reinicie el dispositivo si el fabricante lo requiere y valide que el dispositivo reporte a Plaspy.

Si utiliza comandos SMS para la configuración, siga el orden de comandos del fabricante y verifique cada paso antes de continuar con el siguiente.

## Comandos de ejemplo para la configuración

El TZ-BT04 puede configurarse mediante comandos SMS. Los siguientes comandos públicos se presentan en el orden recomendado por el fabricante. Reemplace los marcadores donde se indica y envíe cada comando por SMS al dispositivo.

1. Establecer el APN del operador
```
*000000,011,[apn],[apnu],[apnp]#
```
- [apn] es la cadena APN del operador móvil requerida por su proveedor.
- [apnu] es el nombre de usuario del APN cuando el operador lo requiere; de lo contrario, déjelo vacío u omita si el dispositivo lo permite.
- [apnp] es la contraseña del APN cuando el operador la requiere; de lo contrario, déjelo vacío u omita si el dispositivo lo permite.
- Algunos firmwares admiten una forma abreviada sin usuario ni contraseña:
```
*000000,011,[apn]#
```

2. Establecer el intervalo de actualización a 60 segundos
```
*000000,018,60,999#
```
- Este comando define los intervalos de reporte o subida; ajuste "60" a los segundos deseados si el firmware lo soporta.

3. Establecer el servidor GPRS a la IP y puerto de Plaspy
```
*000000,015,0,54.85.159.138,8888#
```
- Este ejemplo usa la IP y el puerto 8888 de Plaspy tal como está documentado públicamente.
- Si el dispositivo acepta un nombre de dominio en lugar de la IP, puede usar d.plaspy.com donde esté soportado.

4. Activar el modo de subida GPRS
```
*000000,016,1#
```
- Este comando habilita el modo de reporting GPRS en el dispositivo.

Siga el orden de comandos mostrado arriba al configurar un dispositivo por primera vez. Si el dispositivo o el firmware requieren formas diferentes de comandos, consulte el manual del fabricante.

## Notas sobre la configuración

- Las versiones de firmware y las revisiones de hardware del fabricante pueden cambiar la sintaxis de los comandos o los parámetros soportados; siempre verifique el manual del TZ-BT04 para la sintaxis específica de su firmware.
- El TZ-BT04 soporta la configuración por SMS con los comandos públicos anteriores; algunos integradores pueden usar herramientas del proveedor en lugar de SMS.
- Elija UDP o TCP según las capacidades del dispositivo; Plaspy soporta ambos y tratará de detectar automáticamente el protocolo correcto.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración del servidor entre distintos modelos de rastreadores.
- Probar la conectividad tras cada cambio ayuda a aislar problemas con el APN, la cobertura de red o la sintaxis de los comandos.

## Por qué usar Plaspy con esta configuración

Usar Plaspy para las subidas del TZ-BT04 centraliza la recolección de datos y ofrece un endpoint consistente para dispositivos que soportan subidas por GPRS. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad de configurar servidores por dispositivo y facilitan poner en línea múltiples equipos con un flujo de trabajo uniforme.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma para agregar y visualizar datos de dispositivos, visite https://www.plaspy.com. Para obtener los detalles más recientes de configuración específica del dispositivo, notas de firmware y la sintaxis de comandos del TZ-BT04, verifique la información actual en el sitio del fabricante http://www.tzonedigital.com/
