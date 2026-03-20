---
slug: /queclink/wth301/configuration
id: wth301-configuration
sidebar_label: Configuration
title: QuecLink - WTH301 Configuration
sidebar_class_name: menu_item_tracker
description: Instrucciones públicas para configurar el QuecLink WTH301 y reportar a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración QuecLink WTH301
  - Guía de instalación WTH301
  - QuecLink WTH301 Plaspy
  - Configuración de servidor WTH301
  - Configuración de rastreador QuecLink
  - Configuración SMS WTH301
  - Configuración de dispositivo Plaspy
  - Configuración de software de rastreo QuecLink
  - Configuración plataforma GPS WTH301
  - Integración sensores BLE Plaspy
---

# QuecLink - WTH301 Configuración

Esta página documenta el contexto público de configuración para usar el QuecLink WTH301 con la plataforma Plaspy. Resume los parámetros de servidor que Plaspy requiere y ofrece ejemplos de comandos SMS que suelen utilizarse para apuntar un dispositivo QuecLink a Plaspy. Use esta guía como punto de partida práctico al integrar el WTH301 en una implementación con Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El WTH301 puede configurarse mediante las herramientas del fabricante o mediante comandos SMS cuando el equipo lo soporte; esta página incluye ejemplos públicos de SMS proporcionados en las notas de configuración del dispositivo y resalta los valores del servidor de Plaspy que debe ingresar.

## Resumen de configuración

El objetivo de la configuración es preparar el WTH301 y cualquier gateway o rastreador BLE emparejado para que la telemetría ambiental llegue de forma fiable a Plaspy y aparezca en paneles e informes. En muchas implementaciones el trabajo incluye configurar el APN celular y los parámetros GPRS del servidor en el rastreador o gateway que reenvía, confirmar el emparejamiento BLE y validar el reporte a Plaspy.

- Configure el dispositivo o el gateway asociado para enviar datos a Plaspy usando el endpoint y puerto del servidor compartido.
- Establezca un APN válido y los datos de autenticación si su operador los requiere.
- Habilite intervalos de reporte periódicos para que temperatura y humedad se reenvíen con la cadencia deseada.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy y envía actualizaciones regulares.
- Use SMS o las herramientas oficiales del fabricante según corresponda al hardware y la versión de firmware.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Nota: Todos los dispositivos en Plaspy usan el mismo puerto para la comunicación con el servidor

## Requisitos habituales antes de la configuración

- Acceso físico al dispositivo y a cualquier rastreador o gateway con BLE emparejado que transmitirá los datos del sensor a la nube.
- Una tarjeta SIM operativa y los datos del operador para cualquier gateway o rastreador celular que utilice GPRS para uplink, incluyendo APN, nombre de usuario de APN y contraseña de APN si son necesarios.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración o portal web del fabricante.
- Acceso básico a la cuenta de Plaspy para poder confirmar que el dispositivo aparece y que la telemetría es visible después de la configuración.
- Conocimiento de la contraseña del dispositivo que se usa en los comandos SMS; los comandos de ejemplo abajo usan la contraseña pública por defecto que muestra el fabricante.

## Cómo se conecta este rastreador a Plaspy

Cuando se despliega con un gateway BLE compatible con Plaspy o con un rastreador habilitado para BLE, el WTH301 transmite telemetría ambiental que es capturada y reenviada a Plaspy. El dispositivo que reenvía se configura para reportar al endpoint y puerto compartido de Plaspy para que la plataforma pueda correlacionar los datos del sensor con la telemetría GPS y del vehículo.

- El WTH301 transmite temperatura y humedad por BLE a un gateway o rastreador emparejado.
- El gateway/rastreador sube los datos recogidos a Plaspy usando el endpoint d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe el uplink y detecta automáticamente el protocolo del dispositivo para así parsear los datos y asociarlos con el equipo correcto.
- Las lecturas de los sensores aparecen junto con la ubicación GPS y las señales del vehículo en Plaspy para monitoreo en tiempo real y reproducción histórica.
- Las alertas e informes en Plaspy pueden combinar la telemetría ambiental con eventos del vehículo para obtener información operativa.

## Flujo habitual de configuración

1. Acceda al método oficial de configuración del fabricante o al software correspondiente, o prepárese para enviar comandos SMS si el dispositivo lo admite.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes GPRS/servidor del dispositivo.
3. Configure el puerto del servidor en 8888. Recuerde que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo solicita seleccionar el transporte.
5. Configure el APN del operador y las credenciales de APN usando los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} según lo requiera su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo o gateway si el fabricante lo solicita.
7. Valide que el dispositivo reporta a Plaspy comprobando la llegada de telemetría en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS de ejemplo son públicos y se usan para configurar dispositivos QuecLink. Estos comandos emplean la contraseña de dispositivo de ejemplo que muestra el fabricante: queclink. Preserve los marcadores de posición y reemplace por los valores de su operador cuando sea necesario.

1. Restauración opcional a fábrica inicial (use solo si necesita restablecer ajustes):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar la zona horaria a UTC+0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador (reemplace los marcadores con los valores de su operador):
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = su APN del operador
- {{apnu}} = nombre de usuario APN si es requerido (dejar en blanco si no aplica)
- {{apnp}} = contraseña APN si es requerida (dejar en blanco si no aplica)

4. Configurar los parámetros del servidor GPRS para reportar a Plaspy (se muestran dominio e IP como ejemplo):
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando establece el servidor en d.plaspy.com y como respaldo la IP 54.85.159.138, ambos usando el puerto 8888. Plaspy aceptará conexiones vía UDP o TCP y detectará automáticamente el protocolo entrante.

5. Establecer intervalo de actualización periódica a 60 segundos:
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2:
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre estos comandos:
- La contraseña de ejemplo en estos comandos es queclink. Use la contraseña que esté configurada en su hardware.
- Reemplace los marcadores del APN por los datos de su operador antes de enviar.
- Envíe los comandos como mensajes SMS al número del dispositivo, o utilice la herramienta de configuración del fabricante si está disponible.

## Notas de configuración

- La configuración vía SMS suele ser compatible con dispositivos QuecLink; use SMS o la herramienta oficial según su dispositivo y firmware.
- Las revisiones de firmware y hardware pueden cambiar los parámetros disponibles y la sintaxis de los comandos; confirme el conjunto exacto de comandos para la versión de firmware de su equipo.
- La selección TCP frente a UDP puede afectar el comportamiento de entrega; Plaspy soporta ambos transportes y detecta automáticamente el protocolo en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto para la comunicación con el servidor, lo que simplifica los ajustes de servidor entre distintos modelos.
- Mantenga seguras las credenciales de APN y las contraseñas de los dispositivos y documente cualquier cambio a los valores por defecto.

## Por qué usar Plaspy con esta configuración

Emparejar el WTH301 con un gateway o rastreador BLE compatible con Plaspy amplía el seguimiento de ubicación con telemetría precisa de temperatura y humedad. Esta integración ayuda a los equipos operativos a monitorear condiciones de la cadena de frío en tiempo real, correlacionar lecturas ambientales con la ubicación y eventos del vehículo, y generar informes que respaldan el cumplimiento y la investigación de incidentes.

Para obtener más información sobre Plaspy y cómo puede centralizar la telemetría de vehículos y ambiental, visite https://www.plaspy.com. Para los métodos de configuración más recientes específicos por dispositivo, comportamiento de firmware y detalles del fabricante, consulte la documentación oficial de QuecLink en https://www.queclink.com/ ya que las especificaciones y los pasos de configuración pueden cambiar con el tiempo.
