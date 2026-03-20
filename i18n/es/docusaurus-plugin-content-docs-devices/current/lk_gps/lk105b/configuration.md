---
slug: /lk_gps/lk105b/configuration
id: lk105b-configuration
sidebar_label: Configuration
title: LK-GPS - LK105B Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración LK105B para Plaspy con ajustes de servidor y pasos prácticos para rastreo confiable de mascotas
keywords:
  - Configuración LK-GPS LK105B
  - Configuración LK105B para Plaspy
  - Configuración de servidor LK105B
  - Configuración de rastreador de mascotas
  - Configuración plataforma LK-GPS
  - Configuración de rastreador Plaspy
  - Guía de instalación de rastreador GPS
  - Configuración de software de seguimiento LK105B
  - Conectividad de dispositivo Plaspy
  - Pasos de configuración LK-GPS
---

# LK-GPS - Configuración del LK105B

Esta página describe el contexto público de configuración para usar el rastreador LK-GPS LK105B Mini Pet GPS con Plaspy. Resume los ajustes de servidor prácticos y los pasos habituales necesarios para apuntar un LK105B al endpoint de Plaspy, de modo que el dispositivo pueda enviar ubicación, alertas SOS y telemetría básica a la plataforma. El contenido aquí se limita a detalles públicos de integración y flujo de configuración, no a procedimientos privados del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor usadas para programar el dispositivo. Use esta página para preparar y verificar la conectividad con Plaspy y consulte siempre la documentación oficial de LK-GPS para comandos y comportamiento específicos del firmware.

## Resumen de la configuración

El objetivo de esta configuración es preparar el LK105B para comunicarse de forma confiable con Plaspy, de modo que el dispositivo aparezca en la plataforma y actualice datos de ubicación y eventos. La configuración típica se centra en la disponibilidad de red, el direccionamiento correcto al servidor y la verificación de que el dispositivo es visible en Plaspy.

- Apunte el LK105B al endpoint de Plaspy d.plaspy.com o a la dirección IP equivalente 54.85.159.138 en el puerto 8888 para que el dispositivo entregue la telemetría a la plataforma.
- Asegúrese de que el dispositivo tenga conexión celular activa, la configuración APN correcta y los servicios SMS o de datos requeridos habilitados.
- Seleccione el transporte (UDP o TCP) en el dispositivo si requiere elección; Plaspy admite ambos en el mismo puerto.
- Guarde o aplique la configuración y, si es necesario, reinicie el rastreador para que inicie una nueva conexión al servidor de Plaspy.
- Valide la conectividad en Plaspy confirmando que el IMEI o identificador del dispositivo aparece y comienza a reportar ubicaciones o mensajes de estado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Encienda el rastreador y confirme que la batería está cargada o que el dispositivo tiene una fuente de alimentación estable.
- Servicio celular activo en el dispositivo con datos habilitados y el APN correcto configurado para el proveedor de la SIM.
- Acceso al método de configuración de LK-GPS para el LK105B, como la aplicación del fabricante, portal web o comandos SMS/software provistos por LK-GPS.
- Tener a mano el IMEI del rastreador o el identificador del dispositivo para registrarlo o verificarlo en Plaspy.
- Una cuenta de Plaspy o acceso de administrador a la plataforma para confirmar que el dispositivo aparece tras la configuración.
- Si requiere notificaciones SOS o SMS, asegúrese de que los números autorizados estén configurados en el rastreador según las instrucciones del fabricante.

## Cómo se conecta este rastreador a Plaspy

Al configurar el LK105B para Plaspy, el dispositivo enviará datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que puedan verse y gestionarse en la plataforma. La detección automática de protocolo de Plaspy facilita la aceptación de datos sin selección manual de controladores de protocolo.

- El rastreador transmite actualizaciones periódicas de ubicación a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Las actualizaciones de ubicación, eventos de movimiento y alertas SOS pueden ser enviadas a la plataforma Plaspy para visibilidad y reproducción histórica.
- Si el rastreador soporta LBS como respaldo, puede reportar ubicaciones cuando la señal GPS es débil.
- Las alertas basadas en SMS, como notificaciones SOS, pueden enviarse a los números configurados y también pueden ser reenviadas a la plataforma web según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando llega la conexión al puerto 8888, por lo que no se requiere selección adicional de protocolo en el servidor.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de LK-GPS para el LK105B usando la aplicación del fabricante, la herramienta web o los comandos SMS documentados.
2. Verifique que la tarjeta SIM esté activa, que los datos estén habilitados y que el APN correcto esté configurado según su operador.
3. Introduzca el dominio o la IP del servidor de Plaspy: use d.plaspy.com o 54.85.159.138 como endpoint.
4. Establezca el puerto del servidor en 8888 ya que Plaspy utiliza un puerto compartido para todos los dispositivos.
5. Seleccione UDP o TCP en el dispositivo si requiere una elección de transporte; Plaspy admite ambos en el puerto 8888.
6. Aplique o guarde la configuración mediante la herramienta del fabricante o enviando el comando de guardado.
7. Reinicie el LK105B si el fabricante lo requiere para iniciar una conexión nueva a Plaspy.
8. Valide que el rastreador reporte a Plaspy comprobando la presencia del dispositivo y las actualizaciones entrantes de ubicación en la plataforma usando el IMEI o el ID del dispositivo.

## Ejemplos de comandos de configuración

El fabricante del LK105B puede ofrecer varios métodos de configuración, como una app, portal web o un conjunto de comandos SMS. Los comandos exactos y la sintaxis varían según la versión de firmware y el proveedor. Dado que los métodos del fabricante cambian, aquí no se incluyen comandos públicos universales. Consulte la documentación oficial de LK-GPS o a su proveedor para las cadenas SMS o comandos exactos para establecer servidor, puerto, APN y números de teléfono.

Si dispone de comandos SMS proporcionados por el fabricante o una lista de comandos documentada, formatee y aplique esos comandos en el orden que recomiende LK-GPS y preserve los marcadores de posición como {{apn}} o {{apnuser}} cuando estén presentes. Por ejemplo, si su dispositivo usa comandos SMS, la guía del fabricante mostrará la sintaxis exacta y los marcadores a reemplazar.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis exacta de los comandos y las opciones disponibles; confirme la revisión de firmware antes de aplicar comandos.
- Elegir UDP o TCP puede afectar el comportamiento de entrega y la retransmisión de mensajes; seleccione el transporte recomendado por su despliegue o por LK-GPS para el LK105B.
- Plaspy requiere que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888; este puerto se usa de forma consistente en todos los dispositivos soportados por Plaspy.
- La configuración por SMS y el comportamiento SOS dependen de los ajustes del fabricante y de las listas de teléfonos autorizados configuradas en el rastreador.
- Siempre verifique cualquier paso de configuración con la documentación oficial de LK-GPS para evitar comportamientos inesperados.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el LK-GPS LK105B ofrece una forma directa de recopilar datos de ubicación en tiempo real, ver historial y recibir alertas de eventos para la seguridad y el rastreo de mascotas. Al dirigir el LK105B al endpoint y puerto compartidos de Plaspy, organizaciones y propietarios de mascotas pueden centralizar la visibilidad, monitorear movimientos y responder a eventos SOS desde la plataforma.

To learn more about Plaspy and how it handles device connections and fleet visibility visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and manufacturer guidance for the LK105B see the LK-GPS official site https://www.lk-gps.com. Manufacturer specifications and configuration methods can change over time so verify details on the LK-GPS site when performing setup or firmware updates.
