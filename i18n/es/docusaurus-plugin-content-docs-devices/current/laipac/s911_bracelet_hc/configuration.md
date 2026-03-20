---
slug: /laipac/s911_bracelet_hc/configuration
id: s911_bracelet_hc-configuration
sidebar_label: Configuration
title: Laipac - S911 Bracelet HC Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del brazalete Laipac S911 Bracelet HC para Plaspy, con ajustes de servidor y pasos prácticos de instalación
keywords:
  - Configuración Laipac S911 Bracelet HC
  - Configuración Laipac S911
  - Configuración S911 Bracelet HC Plaspy
  - Configuración GPS brazalete Laipac
  - Configuración rastreador sanitario S911
  - Configuración servidor rastreador GPS
  - Configuración dispositivo Plaspy
  - Configuración rastreador GPS para personas mayores
  - Configuración seguimiento de pacientes
  - Configuración plataforma GPS Laipac
---

# Laipac - Configuración del S911 Bracelet HC

Esta página ofrece el contexto público de configuración para usar el Laipac S911 Bracelet HC con la plataforma Plaspy. Resume los valores públicos y prácticos del servidor y los pasos habituales necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicación y eventos. Use esta guía junto con el manual del dispositivo y las herramientas del proveedor para completar la puesta en marcha.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Esta página se enfoca en los valores específicos de Plaspy y en un flujo de trabajo práctico y seguro para poner en servicio el S911 Bracelet HC en un despliegue sanitario.

## Resumen de configuración

El objetivo de la configuración es preparar el S911 Bracelet HC para que se comunique de manera fiable con Plaspy, de modo que el personal de cuidado y operaciones pueda ver la ubicación en tiempo real, alertas SOS y notificaciones de manipulación o caídas. La configuración se centra en apuntar el dispositivo al punto final compartido de Plaspy y en validar que el equipo aparezca en la plataforma.

- Configure el dispositivo para que reporte a Plaspy usando el punto final del servidor compartido y los ajustes de transporte requeridos.
- Asegúrese de que el dispositivo tenga conectividad celular y energía para enviar reportes de GPS y eventos a Plaspy.
- Valide que las alertas SOS, detección de caídas y manipulación lleguen y sean visibles en la plataforma Plaspy.
- Guarde y aplique los ajustes en la herramienta de configuración del fabricante y verifique que el dispositivo establezca conexión con d.plaspy.com en el puerto 8888.
- Pruebe los reportes en un entorno controlado antes del despliegue completo.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará el protocolo automáticamente una vez que el S911 Bracelet HC reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Requisitos típicos antes de la configuración

- Un S911 Bracelet HC cargado, con batería funcional y acceso al puerto micro USB para carga o configuración local.
- Una SIM celular activa con un plan de datos compatible con el dispositivo e instalada según las instrucciones del fabricante.
- Acceso a las herramientas de configuración de Laipac o al método de configuración del proveedor para ingresar los ajustes del servidor y guardar los cambios.
- Una cuenta de Plaspy o acceso a su despliegue de Plaspy para verificar que el dispositivo aparece después de la configuración.
- Un área de prueba tranquila para validar fijaciones GPS, eventos SOS y alertas de sensores antes de poner el dispositivo en producción.

## Cómo se conecta este rastreador a Plaspy

El S911 Bracelet HC envía su información de ubicación y eventos al punto final y puerto del servidor Plaspy para que el dispositivo sea visible en la plataforma. Una vez que el reporte esté configurado a d.plaspy.com (o 54.85.159.138) en el puerto 8888, el backend de Plaspy detectará el protocolo del dispositivo y empezará a procesar los mensajes entrantes.

- El dispositivo transmite actualizaciones de posición en tiempo real al punto final de Plaspy en el puerto 8888.
- Las pulsaciones del botón SOS y las alertas de emergencia se envían al mismo punto final de Plaspy para que las notificaciones aparezcan en la plataforma.
- La detección de caídas y las alertas por manipulación se reportan a Plaspy para su monitoreo y respuesta a incidentes.
- Los eventos de llamadas de voz y las funciones de marcado rápido suelen gestionarse localmente en el dispositivo, pero los eventos relacionados se registran y pueden referenciarse en la plataforma cuando el reporte de mensajes lo soporta.
- Plaspy detecta automáticamente el protocolo utilizado por el rastreador tras la conexión a d.plaspy.com o a 54.85.159.138.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Laipac o al software del proveedor para el S911 Bracelet HC (por ejemplo, la herramienta de configuración para PC provista o la interfaz de servicio autorizada).
2. En los ajustes de servidor del dispositivo ingrese como destino el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto de destino en 8888.
4. Si el dispositivo requiere la selección de transporte, elija UDP o TCP según las opciones del equipo y la preferencia del instalador.
5. Aplique o guarde la configuración dentro de la herramienta del fabricante o en el menú del dispositivo.
6. Reinicie el dispositivo si el fabricante lo exige para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en su despliegue de Plaspy y que se reciben mensajes de ubicación y eventos.

## Ejemplo de comandos de configuración

El S911 Bracelet HC puede configurarse usando la herramienta de configuración del fabricante o la interfaz de servicio suministrada por Laipac. Los formatos exactos de comando, las cadenas SMS o los pasos en la herramienta de PC varían según el firmware y el software del proveedor. Dado que las herramientas del fabricante difieren, consulte el manual del usuario de Laipac o a su proveedor para los comandos exactos y el canal de configuración soportado (PC USB, configuración por micro USB o aprovisionamiento remoto).

Si dispone de una lista de comandos proporcionada por el proveedor o cadenas SMS de Laipac, aplíquelas en el orden recomendado por el fabricante y asegúrese de que el destino esté establecido en d.plaspy.com o 54.85.159.138 con el puerto 8888. Plaspy detectará el protocolo automáticamente una vez que el rastreador se conecte.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la interfaz de configuración, las opciones de transporte disponibles y los comandos de aprovisionamiento soportados. Confirme la versión de firmware antes de seguir los pasos.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega; consulte las recomendaciones de Laipac y pruebe ambos transportes si no está seguro. Plaspy admite UDP y TCP en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos. Apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 es el requisito principal para la conectividad con la plataforma.
- Siempre pruebe SOS, detección de caídas, alertas por manipulación y las actualizaciones periódicas de posición en un entorno controlado después de la configuración.
- Mantenga la documentación del fabricante y las herramientas de configuración de Laipac a mano durante la instalación por si necesita reaplicar ajustes o realizar una actualización de firmware.

## Por qué usar Plaspy con esta configuración

Usar el Laipac S911 Bracelet HC con Plaspy ofrece al personal de cuidado y a los equipos de operaciones una manera centralizada de ver ubicación, eventos SOS y alertas de dispositivos para la monitorización sanitaria. Los ajustes compartidos de servidor de Plaspy simplifican la puesta en marcha al proporcionar un único destino para apuntar múltiples dispositivos mientras Plaspy detecta automáticamente el protocolo y comienza a procesar los mensajes del dispositivo.

Para obtener más información sobre la gestión de dispositivos y funciones en Plaspy visite https://www.plaspy.com. Para los pasos de configuración específicos más recientes, notas de firmware y herramientas de configuración consulte la documentación oficial de Laipac en https://laipac.com/ ya que el comportamiento del dispositivo y los métodos del fabricante pueden cambiar con el tiempo.
