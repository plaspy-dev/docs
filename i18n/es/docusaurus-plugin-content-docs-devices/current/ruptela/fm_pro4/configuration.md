---
slug: /ruptela/fm_pro4/configuration
id: fm_pro4-configuration
sidebar_label: Configuration
title: Ruptela - FM-Pro4 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Ruptela FM-Pro4 con los ajustes de servidor de Plaspy y pasos prácticos de instalación
keywords:
  - Configuración Ruptela FM Pro4
  - Configuración FM Pro4
  - Configuración rastreador GPS Ruptela
  - Configuración de rastreador Plaspy
  - Configuración de servidor Plaspy
  - Ajustes de servidor para rastreadores GPS
  - Seguimiento de vehículos FM Pro4
  - Gestión de flotas Ruptela
  - Configuración CANbus FM Pro4
  - Configuración telemetría FM Pro4
---

# Ruptela - Configuración FM-Pro4

Esta página describe el contexto público de configuración para usar el rastreador Ruptela FM‑Pro4 con Plaspy. Se centra en los ajustes prácticos y visibles públicamente necesarios para apuntar el FM‑Pro4 al endpoint de recolección de Plaspy, de modo que el dispositivo pueda enviar posiciones y datos del vehículo para que se muestren en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor, por lo que siga la documentación de Ruptela cuando se requieran detalles específicos del dispositivo.

## Resumen de la configuración

Esta configuración prepara el FM‑Pro4 para enviar su telemetría y datos a bordo a Plaspy, de modo que sus flujos de monitoreo y gestión de activos puedan recibir y procesar los mensajes del dispositivo. Los objetivos prácticos al configurar el rastreador para Plaspy son los siguientes:

- Configurar el rastreador para que reporte al endpoint del servidor de Plaspy y confirmar el método de transporte.
- Asegurar que el puerto y los ajustes de transporte coincidan con los requisitos de Plaspy para que los mensajes lleguen a la plataforma.
- Validar conectividad y entrega de mensajes para que el FM‑Pro4 aparezca en el monitoreo de Plaspy.
- Habilitar el envío de datos del vehículo, como la posición GPS y la telemetría CANbus disponible, hacia Plaspy.
- Guardar y aplicar los ajustes, y luego verificar que el rastreador esté reportando activamente al endpoint de Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el FM‑Pro4. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en el lado del servidor

## Requisitos típicos antes de la configuración

- Asegúrese de que el FM‑Pro4 esté energizado e instalado conforme a las indicaciones de instalación de Ruptela.
- Tenga acceso al método o software oficial de configuración de Ruptela para su dispositivo y versión de firmware.
- Si va a usar reporte por celular, confirme que el dispositivo tenga una SIM funcional y conectividad de red, y que SMS esté disponible como método alternativo de configuración si es necesario.
- Conozca el modo de transporte preferido para su despliegue y verifique que el dispositivo permita seleccionar UDP o TCP.
- Mantenga registradas las versiones del firmware y de la utilidad de configuración para poder consultar las instrucciones del fabricante si el comportamiento difiere.
- Prepare cualquier sensor del vehículo o interfaces CANbus que desee reportar, asegurándose de que estén conectados y habilitados antes de las pruebas.

## Cómo se conecta este rastreador a Plaspy

El FM‑Pro4 se configura para enviar su telemetría y datos a bordo al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo apunte al endpoint de Plaspy y guarde la configuración, los mensajes del rastreador se enrutarán a Plaspy, donde se procesarán y quedarán visibles en la plataforma.

- El rastreador envía mensajes de posición GPS al endpoint del servidor Plaspy.
- Los datos del vehículo obtenidos del CANbus, como campos FMS o J1708, pueden incluirse en los informes enviados a Plaspy.
- El FM‑Pro4 puede reportar datos de sensores y temperatura cuando estén configurados y conectados.
- Eventos y actualizaciones de estado se transmiten a Plaspy para su monitoreo operativo.
- Conecte el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP para que Plaspy reciba los datos y detecte automáticamente el protocolo.

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial de Ruptela para el FM‑Pro4, como su herramienta de escritorio, interfaz web o conjunto de comandos SMS, según aplique a su dispositivo y firmware.
2. En los ajustes de servidor del dispositivo, ingrese el servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 si su herramienta exige una dirección IP.
3. Establezca el puerto del servidor en 8888, que es el puerto de recolección de Plaspy utilizado para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y guarde esa opción en la configuración.
5. Aplique o guarde los cambios de configuración en la herramienta de Ruptela o envíe el comando SMS apropiado si está configurando por SMS.
6. Reinicie el FM‑Pro4 si el dispositivo lo requiere o si el fabricante lo recomienda para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando indicadores de conectividad en su herramienta o confirmando la recepción de datos en Plaspy después de que el dispositivo esté activo.

## Ejemplos de comandos de configuración

Los comandos exactos y las plantillas SMS para el FM‑Pro4 dependen del firmware de Ruptela y de la herramienta de configuración que esté usando. Los fabricantes suelen proporcionar utilidades de configuración de escritorio y familias de comandos SMS. Dado que los comandos varían según el firmware y la distribución, use la documentación de Ruptela o la herramienta de configuración incluida para la sintaxis específica del dispositivo.

Si planea configurar por SMS con un firmware FM‑Pro4 compatible, consulte la referencia de comandos SMS de Ruptela para obtener las plantillas y marcadores correctos. Los marcadores típicos que puede ver en los comandos incluyen tokens relacionados con el APN como [apn], [apnu] y [apnp], que deben reemplazarse por las credenciales de su proveedor de SIM cuando sea necesario.

## Notas de configuración

- Las versiones de firmware y de la herramienta de configuración pueden cambiar la sintaxis de comandos y las funciones disponibles; siempre consulte la documentación de Ruptela para su versión de firmware.
- Elija UDP o TCP según sus necesidades de red y fiabilidad; UDP es habitual para telemetría ligera, mientras que TCP proporciona entrega orientada a conexión cuando está disponible.
- Plaspy utiliza el mismo puerto para todos los rastreadores y detecta automáticamente el protocolo del dispositivo, así que concentre sus esfuerzos en apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Si usa configuración por SMS, asegúrese de que el número de teléfono del dispositivo y los formatos de comando SMS sean correctos para su firmware.
- Documente sus pasos de configuración y los perfiles guardados para simplificar futuras actualizaciones o despliegues a gran escala.

## Por qué usar Plaspy con esta configuración

Usar el Ruptela FM‑Pro4 con Plaspy ofrece una forma directa de centralizar la posición GPS del vehículo y la telemetría a bordo en una sola plataforma para monitoreo de flotas y supervisión operativa. La capacidad del FM‑Pro4 para leer datos CANbus y múltiples entradas de sensores complementa las funcionalidades de Plaspy, permitiendo mostrar posición y telemetría del vehículo juntos, mejorando la visibilidad para enrutamiento, control de combustible y flujos de trabajo de seguridad.

Para obtener más información sobre Plaspy y cómo recibe datos de dispositivos visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, comportamiento de firmware y orientación del fabricante, verifique la documentación más reciente de Ruptela en https://ruptela.com/ antes de realizar la configuración o el despliegue.
