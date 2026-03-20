---
slug: /xirgo/xt_4970/configuration
id: xt_4970-configuration
sidebar_label: Configuration
title: Xirgo - XT-4970 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xirgo XT 4970 para integrarlo con Plaspy, con ajustes de servidor y comandos SMS para una puesta en marcha rápida
keywords:
  - configuración Xirgo XT 4970
  - configuración del rastreador Xirgo
  - integración XT 4970 con Plaspy
  - configuración del servidor Plaspy
  - guía de instalación de rastreador GPS
  - configuración para seguimiento de remolques
  - configuración de rastreador LTE
  - configuración APN y GPRS
  - configuración para rastreadores con aprovechamiento de energía
  - configuración de plataforma de rastreo de vehículos
---

# Xirgo - XT-4970 Configuración

Esta página proporciona el contexto público de configuración necesario para conectar el Xirgo XT-4970 a la plataforma Plaspy. Resume los ajustes prácticos del servidor, el flujo común de instalación y ejemplos de comandos SMS publicados para este modelo. Use esta guía junto con la documentación oficial de Xirgo para completar la configuración y verificar el dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El XT-4970 admite configuración vía SMS o remota; los comandos de ejemplo abajo muestran el formato SMS común usado para establecer el APN y el servidor GPRS para Plaspy.

## Visión general de la configuración

El objetivo de este proceso es preparar el XT-4970 para que reporte ubicación y estado a Plaspy de forma fiable. Los pasos siguientes describen los objetivos prácticos que cumplirá durante la instalación y la validación.

- Configurar los ajustes de datos móviles como el APN para que el dispositivo acceda a la red del operador.
- Apuntar el dispositivo al punto de enlace del servidor compartido de Plaspy para que la telemetría llegue a la plataforma.
- Seleccionar el método de transporte (UDP o TCP) y establecer el puerto compartido de Plaspy usado por todos los dispositivos.
- Verificar que el dispositivo pueda enviar paquetes a Plaspy y confirmar su visibilidad en la plataforma.
- Documentar el IMEI u otro identificador del dispositivo para usarlo al agregar el rastreador en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el XT-4970. Estos son los valores que Plaspy espera para enrutar la telemetría de los dispositivos.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y su plataforma detecta automáticamente el protocolo del dispositivo.

## Requisitos habituales antes de la instalación

- Un XT-4970 alimentado con una SIM LTE activa provisionada para datos en un operador compatible.
- Ajustes APN y cualquier usuario o contraseña de APN requeridos por el operador móvil.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración Xirgo usada por su proveedor.
- El IMEI del dispositivo u otro identificador para que la unidad sea reconocida en Plaspy cuando empiece a reportar.
- Acceso a la documentación del fabricante para los formatos de comando específicos del dispositivo y notas de firmware.
- Comprobaciones básicas de visibilidad de red, como asegurarse de que el dispositivo tenga cobertura celular en el operador elegido.

## Cómo se conecta este rastreador a Plaspy

Al configurar el XT-4970 para Plaspy, se apunta al endpoint del servidor Plaspy y el dispositivo envía sus datos de ubicación y eventos por el transporte seleccionado. Plaspy recibe los datos en un puerto compartido y los asigna a la cuenta y al registro de dispositivo correspondiente usando el identificador del equipo.

- El rastreador envía reportes GPRS a d.plaspy.com o a la IP 54.85.159.138.
- El tráfico se envía al puerto 8888 en el servidor Plaspy.
- Puede elegir UDP o TCP como transporte si el firmware del dispositivo solicita una selección.
- Plaspy detecta automáticamente el protocolo usado por el rastreador y procesa los mensajes entrantes.
- Una vez que el dispositivo comienza a reportar, aparece en Plaspy para monitoreo de ubicación, movimiento y eventos.

## Flujo típico de configuración

Siga estos pasos públicos y prácticos al preparar un XT-4970 para usar con Plaspy.

1. Acceda al método o software de configuración oficial de Xirgo recomendado por su proveedor, o prepárese para enviar mensajes SMS de configuración si el dispositivo lo soporta.
2. Ingrese el servidor Plaspy como d.plaspy.com o la dirección IP 54.85.159.138 en el ajuste del servidor GPRS.
3. Configure el puerto en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija la opción de transporte UDP o TCP si el equipo requiere especificar un tipo de transporte.
5. Configure el APN del operador y las credenciales de APN necesarias para la SIM para que el dispositivo tenga acceso a datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware exige reinicio para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy confirmando que la unidad aparece en la plataforma o revisando los registros del servidor para una conexión inicial.

Si su instalación utiliza configuración vía SMS, los comandos que se muestran abajo pueden emplearse como ejemplos; siempre verifique el formato con la documentación Xirgo más reciente.

## Ejemplos de comandos de configuración

El XT-4970 puede configurarse por SMS usando el formato de comando público publicado para este modelo. Preserve el orden cuando el dispositivo lo requiera.

- Establecer el APN del operador. Reemplace los marcadores con los valores de su operador:
```sms
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explicación de los marcadores:
- {{apn}} es el nombre del APN requerido por el operador móvil.
- {{apnu}} es el usuario del APN si el operador lo solicita.
- {{apnp}} es la contraseña del APN si el operador la solicita.

- Configurar el servidor GPRS para apuntar el dispositivo a Plaspy. Este comando configura el puerto y la dirección IP usada por Plaspy:
```sms
+XT:1001,8888,54.85.159.138,4,0,0
```
Notas:
- El comando incluye el puerto 8888 y la IP del servidor Plaspy 54.85.159.138 tal como se muestra.
- Los parámetros numéricos finales siguen el formato de comando del dispositivo; consulte la documentación de Xirgo para conocer sus significados exactos si necesita ajustar banderas de transporte o modos de conexión.
- Si prefiere usar un nombre de host, ingrese d.plaspy.com en su herramienta de proveedor o en el método SMS donde el dispositivo acepte un dominio en lugar de una IP.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los SMS o el comportamiento de la herramienta de configuración; confirme siempre los comandos según la versión de firmware que esté utilizando.
- Algunos instaladores prefieren usar las herramientas de proveedor de Xirgo o plataformas M2M en lugar de SMS; elija el método que coincida con su instalación y la guía del proveedor.
- Cuando tenga la opción, pruebe tanto los transportes UDP como TCP para confirmar cuál funciona mejor en su red; Plaspy detectará el protocolo activo.
- Verifique las credenciales APN con el operador móvil antes de enviar los comandos de configuración para evitar demoras de conectividad.
- Mantenga un registro del IMEI del dispositivo y de los comandos de configuración que aplicó para facilitar la resolución de problemas futura.

## Por qué usar Plaspy con esta configuración

Usar el XT-4970 con Plaspy ofrece a las organizaciones una vía simple para obtener visibilidad a largo plazo de remolques, contenedores y activos remotos. La conectividad LTE del equipo y su diseño con aprovechamiento de energía lo hacen adecuado para despliegues donde la duración de la batería y la fiabilidad de los reportes son esenciales, y apuntar el dispositivo al servidor compartido de Plaspy permite una supervisión centralizada y control operativo.

Para obtener más información sobre Plaspy y cómo puede gestionar dispositivos como el Xirgo XT-4970, visite https://www.plaspy.com. Para las últimas instrucciones de configuración específicas del dispositivo, notas de firmware y detalles del fabricante, verifique la información en el sitio oficial de Xirgo https://xirgo.com/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
