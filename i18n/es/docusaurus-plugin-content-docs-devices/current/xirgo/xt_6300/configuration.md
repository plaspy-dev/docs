---
slug: /xirgo/xt_6300/configuration
id: xt_6300-configuration
sidebar_label: Configuration
title: Xirgo - XT-6300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xirgo XT-6300 con ajustes de servidor Plaspy y ejemplos de comandos SMS para integración
keywords:
  - Configuración Xirgo XT-6300
  - Configuración XT-6300
  - Configuración Plaspy XT-6300
  - Configuración del servidor XT-6300
  - Configuración rastreador GPS Xirgo
  - Configuración seguimiento vehicular
  - Configuración rastreador GPS Plaspy
  - Configuración SMS XT-6300
  - Configuración GPRS XT-6300
  - Ajustes servidor rastreador
---

# Xirgo - XT-6300 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Xirgo XT-6300 con Plaspy. Explica los ajustes de servidor compartidos que requiere Plaspy, muestra los comandos SMS habituales para este modelo y ofrece pasos prácticos para preparar el dispositivo para que reporte ubicación y telemetría a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante para el XT-6300 pueden variar según la versión de firmware, las opciones de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta guía como contexto público y confirme los detalles específicos del equipo con la documentación oficial de Xirgo.

## Resumen de configuración

El objetivo al configurar el XT-6300 para Plaspy es apuntar el dispositivo al endpoint compartido de Plaspy, asegurar que tenga conectividad celular válida y los parámetros APN correctos, y verificar que reporte correctamente a la plataforma. En el XT-6300 esto comúnmente implica enviar o aplicar una pequeña cantidad de ajustes mediante el método de configuración del fabricante, como SMS o software del proveedor.

- Apuntar el XT-6300 al endpoint de Plaspy para que ubicación y eventos lleguen a la plataforma.
- Configurar APN y parámetros GPRS para que el dispositivo pueda abrir una sesión de datos.
- Seleccionar el tipo de transporte si es necesario y configurar el puerto compartido de Plaspy.
- Guardar y aplicar los ajustes, y reiniciar el dispositivo si es requerido.
- Verificar que el dispositivo aparezca y reporte en la plataforma Plaspy.

## Ajustes de servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el XT-6300:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Plaspy emplea el mismo puerto para todos los dispositivos compatibles y determinará automáticamente el protocolo correcto cuando el rastreador se conecte.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado según las instrucciones del instalador para que pueda enviar SMS o abrir una sesión GPRS.
- SIM celular activa con datos habilitados y la entrada APN correcta para el operador móvil.
- Acceso al método oficial de configuración Xirgo para su versión del dispositivo, por ejemplo comandos SMS o la herramienta del proveedor.
- Conocimiento de los parámetros APN de su operador móvil, incluyendo APN, usuario y contraseña según se requiera.
- Forma de monitorear el reporte del dispositivo en Plaspy después de la configuración para confirmar la integración exitosa.

## Cómo se conecta este rastreador a Plaspy

El XT-6300 se configura para enviar sus datos GPRS al endpoint y puerto compartidos de Plaspy. Una vez que se establecen el servidor GPRS y los ajustes APN, el rastreador abrirá una conexión con Plaspy y comenzará a reportar ubicación y eventos del dispositivo, de modo que la unidad quede visible en la plataforma.

- El rastreador apunta al dominio o IP del servidor de Plaspy y al puerto compartido.
- El dispositivo utiliza el APN configurado para establecer una sesión de datos GPRS.
- Los datos se transmiten por el protocolo de transporte seleccionado, UDP o TCP.
- Plaspy recibe conexiones entrantes en el puerto 8888 y detecta automáticamente el formato y protocolo del dispositivo.
- Después de la configuración, el rastreador envía mensajes de ubicación y eventos a Plaspy para monitoreo e informes.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Xirgo o al software del proveedor para el XT-6300 (configuración por SMS o la herramienta del fabricante).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como destino del servidor GPRS del dispositivo.
3. Configure el puerto del dispositivo en 8888 según lo requiere Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de transporte.
5. Ingrese los ajustes APN y cualquier usuario o contraseña APN que su operador exija.
6. Aplique o guarde la configuración y reinicie el dispositivo si la documentación del equipo lo indica.
7. Valide que el XT-6300 reporte a Plaspy verificando la conectividad del dispositivo y los mensajes entrantes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El XT-6300 puede configurarse por SMS usando los comandos públicos que se muestran a continuación. Estos comandos forman parte del contenido de configuración del modelo y normalmente se envían como mensajes SMS al rastreador.

1. Establezca el APN del operador. Reemplace los marcadores con los valores de su operador:
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- {{apn}} es la cadena APN de su operador móvil.
- {{apnu}} es el nombre de usuario APN si su operador lo requiere.
- {{apnp}} es la contraseña APN si su operador la requiere.

2. Configure el servidor GPRS para apuntar el rastreador a Plaspy. Este comando incluye el puerto y la IP del servidor Plaspy:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- Este SMS configura los parámetros del servidor GPRS para usar el puerto 8888 y la IP del servidor 54.85.159.138 según la configuración pública. Mantenga el orden al enviar los comandos si las instrucciones del instalador lo requieren.

Envíe estos mensajes SMS siguiendo el flujo de trabajo de instalación descrito por Xirgo. Mantenga el orden mostrado aquí si su dispositivo requiere que el APN se configure antes del servidor GPRS.

## Notas de configuración

- El XT-6300 soporta configuración por SMS como en los ejemplos, aunque las herramientas del proveedor o las actualizaciones de firmware pueden ofrecer métodos alternativos.
- La selección del transporte UDP o TCP puede afectar el comportamiento en distintos entornos de red; elija el transporte que su instalación requiera y asegúrese de que coincida con las reglas de firewall.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en las conexiones entrantes.
- Las versiones de firmware y las opciones de hardware como OBDII, JBUS o Bluetooth opcional pueden cambiar los comandos o las interfaces disponibles. Verifique los comandos con la versión de firmware del dispositivo.
- Al usar marcadores como {{apn}}, asegúrese de que las credenciales del operador sean correctas y pruebe la conectividad antes de un despliegue a gran escala.

## Por qué usar Plaspy con esta configuración

Configurar el XT-6300 para reportar a Plaspy proporciona a las organizaciones un endpoint de servidor consistente y una plataforma que detecta automáticamente el protocolo del dispositivo. Para flotas o despliegues con hardware mixto, este enfoque compartido reduce la carga de configurar servidores por dispositivo y ayuda a centralizar la visibilidad, el monitoreo de eventos y la supervisión operativa.

Para más información sobre Plaspy visite https://www.plaspy.com y para detalles de configuración específicos y actuales consulte la documentación oficial de Xirgo en https://xirgo.com/. Las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo, por lo que es importante verificar la información más reciente en el sitio de Xirgo al aplicar configuraciones en producción.
