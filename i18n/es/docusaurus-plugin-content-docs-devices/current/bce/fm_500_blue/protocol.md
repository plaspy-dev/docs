---
slug: /bce/fm_500_blue/protocol
id: fm_500_blue-protocol
sidebar_label: Protocol
title: BCE - FM-500 Blue Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar BCE FM-500 Blue a Plaspy, con ajustes de transporte y notas de compatibilidad
keywords:
  - protocolo BCE FM-500 Blue
  - protocolo GPS FM-500 Blue
  - protocolo de rastreo FM-500 Blue
  - compatibilidad BCE FM-500 Blue Plaspy
  - protocolo de comunicación FM-500 Blue
  - protocolo de localizador GPS BCE
  - rastreo de vehículos FM-500 Blue
  - gestión de flotas BCE FM-500 Blue
  - FM-500 Blue CAN FMS J1939
---

# BCE - FM-500 Blue Protocol

Esta página documenta el contexto público del protocolo para usar el rastreador BCE FM-500 Blue con la plataforma Plaspy. Explica, en términos generales y no sensibles, cómo se comunica el dispositivo y resalta los ajustes de conexión y las consideraciones de compatibilidad relevantes al integrar el FM-500 Blue con Plaspy. La descripción del equipo asociada a esta página indica posicionamiento GPS y GLONASS, reportes por GSM, entradas digitales y analógicas, salidas para control remoto y la capacidad de leer datos CAN FMS mediante J1939 para integración vehicular.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto de cualquier rastreador puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí se centra en el contexto público y de alto nivel del protocolo y del transporte, en lugar de formatos de paquete a bajo nivel o detalles internos de firmware. Para comandos específicos del equipo y detalles de firmware, consulte la documentación del fabricante.

## Resumen del protocolo

El FM-500 Blue emplea un protocolo de reporte para enviar ubicación, movimiento y datos de sensores desde el rastreador a través de la red celular hacia un servidor remoto. En Plaspy, este protocolo se usa para identificar el dispositivo, recibir telemetría y entradas de sensores, y habilitar salidas remotas y datos vehiculares como FMS CAN J1939 cuando están disponibles.

- Permite reportes de posición GPS y GLONASS y datos de movimiento asociados hacia el endpoint de Plaspy
- Transporta estados de entradas analógicas y digitales y refleja salidas de control remoto en Plaspy
- Envía datos CAN del vehículo como FMS CAN J1939 cuando el rastreador está conectado a las redes del vehículo
- Permite que el dispositivo registre o reporte información identificadora para que Plaspy asocie los datos entrantes a una cuenta
- Soporta cambios de configuración desde el lado del dispositivo para que reporte al endpoint y transporte correctos de Plaspy

## Detección del protocolo por Plaspy

Plaspy recibe conexiones entrantes y telemetría en un único endpoint y puerto compartidos, y aplica detección automática para emparejar los datos entrantes con un tipo de rastreador conocido. Cuando un BCE FM-500 Blue está configurado para reportar a Plaspy, la plataforma analizará la transmisión entrante y asignará el comportamiento de parseo adecuado sin que el usuario final tenga que seleccionar manualmente el protocolo.

- Todos los dispositivos reportan al mismo puerto de Plaspy, por lo que no se requiere un puerto distinto por equipo
- Plaspy escucha en el dominio público d.plaspy.com y en la IP pública 54.85.159.138
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al enviar datos a Plaspy
- Si el FM-500 Blue está apuntando al endpoint de Plaspy y reportando activamente, normalmente no es necesario seleccionar el protocolo manualmente en la plataforma
- La detección automática reduce los pasos de configuración, pero se recomienda verificar los ajustes de reporte en el rastreador durante la primera conexión

## Contexto de transporte y conexión

El contexto de conexión del FM-500 Blue se centra en el transporte celular y en un direccionamiento de red sencillo hacia el endpoint de Plaspy. Los dispositivos se conectan mediante la red GSM y pueden configurarse para usar cualquiera de las opciones de transporte soportadas según la configuración del equipo y el comportamiento de la red del operador.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo
- La selección del transporte puede depender de las opciones del firmware del rastreador y de las condiciones de la red móvil
- Asegúrese de que el APN y los ajustes GSM del dispositivo sean correctos para que el rastreador pueda alcanzar el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué mensajes o características opcionales envía el FM-500 Blue a Plaspy
- Las revisiones de hardware u opciones de interfaz en distintas versiones del equipo pueden afectar la disponibilidad de entradas, salidas y líneas CAN
- Las opciones de configuración del fabricante determinan si los datos FMS CAN J1939 del vehículo se exponen para su reporte
- La elección entre UDP o TCP en el puerto 8888 puede influir en el comportamiento de entrega bajo distintas condiciones de red
- Siempre valide que el rastreador esté apuntando a d.plaspy.com o a 54.85.159.138 y reportando en el puerto 8888
- Confirme la compatibilidad y las funciones soportadas consultando la documentación oficial de BCE para la revisión de firmware de su dispositivo

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una integración confiable con Plaspy y mejora la tasa de éxito en la configuración inicial y en la operación continua. Tener claro el comportamiento del transporte y del protocolo facilita la resolución de problemas y permite alinear la configuración del equipo con los requisitos de la flota.

- Facilita la configuración correcta del dispositivo para que la telemetría llegue a d.plaspy.com en el puerto 8888
- Ayuda a identificar diferencias ocasionadas por actualizaciones de firmware o revisiones de hardware
- Facilita el mapeo de entradas analógicas y digitales y de salidas remotas a eventos en Plaspy
- Ayuda a validar que los flujos de datos vehiculares como FMS CAN J1939 se estén reenviando correctamente
- Favorece un comportamiento predecible en intervalos de reporte, alertas y monitoreo de dispositivos

## Por qué usar Plaspy con este protocolo

Usar el BCE FM-500 Blue con Plaspy brinda a las organizaciones una forma práctica de recopilar posicionamiento GPS, datos vehiculares y estados de IO desde un rastreador compacto, y aprovechar esa información para visibilidad, monitoreo y supervisión operativa. La detección automática de protocolos de Plaspy para los dispositivos apuntando a d.plaspy.com en el puerto 8888 simplifica el onboarding, de modo que las flotas puedan centrarse en la configuración y el reporte en lugar de la selección de parsers a bajo nivel.

Para obtener más información sobre el uso de Plaspy con rastreadores compatibles y cómo empezar con el reporte de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos del dispositivo, notas de firmware y documentación de hardware del FM-500 Blue, verifique la información con el fabricante en http://www.bce.en/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
