---
slug: /dct/syrus_lynx_4g/protocol
id: syrus_lynx_4g-protocol
sidebar_label: Protocol
title: DCT - Syrus Lynx 4G Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el DCT Syrus Lynx 4G con Plaspy incluyendo conexión y compatibilidad para flotas
keywords:
  - protocolo DCT Syrus Lynx 4G
  - protocolo GPS Syrus Lynx 4G
  - protocolo rastreador GPS DCT
  - Syrus Lynx 4G Plaspy
  - protocolo de comunicación Syrus Lynx 4G
  - protocolo rastreo de vehículos Plaspy
  - compatibilidad protocolo rastreador de flotas
  - integración telemetría Syrus Lynx 4G
  - protocolo de dispositivo Plaspy
  - protocolo telemática de flotas
---

# DCT - Syrus Lynx 4G: Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador DCT Syrus Lynx 4G con la plataforma Plaspy. Explica, en términos generales, cómo el dispositivo comunica con Plaspy, qué ajustes de conexión se emplean y de qué manera el comportamiento a nivel de protocolo influye en la integración y la resolución de problemas, sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el Syrus Lynx 4G puede variar según la versión de firmware, la variante de hardware y la implementación del fabricante, por lo que esta página se enfoca en el contexto público y no sensible del protocolo y en consideraciones prácticas de compatibilidad.

## Resumen del protocolo

El protocolo de reporte es el conjunto de reglas que el Syrus Lynx 4G usa para entregar posición GNSS, telemetría y eventos de alarma a un endpoint en la nube, de modo que Plaspy pueda ingerir y presentar esas señales. En la práctica, el protocolo garantiza que el dispositivo pueda identificarse, compartir estado y datos de sensores, y activar alertas o comandos que Plaspy pueda procesar.

- Proporciona identidad y estado del dispositivo, información que Plaspy usa para vincular mensajes entrantes con un registro de vehículo.
- Transporta posición GNSS, marca temporal y telemetría básica como velocidad, rumbo y estados de alarma para mapeo e informes históricos.
- Envía notificaciones de eventos como alarmas por remolque, pérdida de alimentación y comportamientos de conducción que generan alertas basadas en reglas en Plaspy.
- Permite flujos de comando y control para que acciones remotas, como inmovilización, puedan iniciarse desde Plaspy y reenviarse al dispositivo.
- Actúa como capa de interoperabilidad entre el firmware de DCT y los sistemas de ingestión de Plaspy, sujeta a diferencias de firmware y configuración.

## Cómo detecta Plaspy el protocolo

Plaspy recibe flujos de telemetría y eventos en un endpoint y puerto compartidos, y luego corresponde los datos entrantes con comportamientos de dispositivos conocidos para decodificar y procesar los mensajes. Dado que Plaspy está diseñado para aceptar muchos tipos de dispositivos, usted normalmente no necesita seleccionar un protocolo manualmente cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la dirección pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.
- Cuando un Syrus Lynx 4G está configurado para reportar al endpoint de Plaspy, Plaspy identificará y procesará sus mensajes sin seleccionar el protocolo manualmente en la mayoría de los casos.
- Una configuración correcta del equipo y firmware actualizado aumentan la probabilidad de detección automática y decodificación correcta.
- Si surgen problemas de detección, revisar el destino de reporte del dispositivo, el tipo de transporte y las notas de firmware es un primer paso práctico.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el Syrus Lynx 4G llega a Plaspy más que los detalles internos del protocolo. El dispositivo puede configurarse para usar opciones de transporte IP estándar y debe apuntar su destino de reporte al endpoint compartido de Plaspy para integrarse.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requisitos del despliegue.
- Plaspy escucha en el puerto 8888 para todos los dispositivos compatibles, por lo que el mismo puerto se usa para el tráfico del Syrus Lynx 4G que para otros rastreadores.
- Los equipos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 como dirección del servidor Plaspy.
- La conectividad celular (LTE Cat-1 con fallback a 3G/2G) es el medio de transporte típico para que el Lynx 4G alcance el endpoint de Plaspy.
- Asegúrese de que cualquier política del operador o reglas de firewall permitan conexiones salientes desde el dispositivo hacia el servidor y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware de DCT pueden cambiar cómo se informan campos específicos, nombres de eventos o telemetría opcional; siempre verifique las notas de firmware al resolver problemas.
- Las revisiones de hardware o SKUs regionales pueden soportar distintas bandas celulares u opciones de sensores que afecten la disponibilidad de telemetría.
- La selección de transporte (UDP vs TCP) debe coincidir con la configuración del equipo y con los requisitos operativos de confiabilidad y latencia.
- Las opciones de configuración en el lado del fabricante (intervalos de reporte, umbrales de alarma, cableado del inmovilizador) pueden cambiar los datos que Plaspy recibe y la frecuencia de los mismos.
- Valide la provisión del dispositivo (SIM, APN y destino de reporte) para asegurar que los mensajes se dirijan a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Consulte la documentación oficial de DCT para comportamientos específicos de firmware y comandos de configuración soportados que afecten el reporte.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del Syrus Lynx 4G ayuda a garantizar reportes consistentes, agilizar la resolución de problemas y mantener una operación confiable a largo plazo al integrarse con Plaspy. Tener nociones básicas del protocolo reduce el tiempo de resolución ante problemas de conectividad e interpretación de datos.

- Ayuda a verificar que el dispositivo apunta al endpoint correcto de Plaspy y utiliza el transporte y puerto soportados.
- Facilita el diagnóstico de telemetría faltante, nombres de eventos inesperados o diferencias en cómo se informan las alarmas entre versiones de firmware.
- Informa decisiones sobre intervalos de reporte, consumo de datos y comportamiento con batería de respaldo para un rastreo ininterrumpido.
- Apoya la planificación de despliegues masivos al clarificar qué opciones de configuración deben estandarizarse para coherencia en la flota.
- Permite una comunicación más efectiva con el soporte técnico de DCT cuando el comportamiento del equipo es inconsistente con la ingestión en Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el DCT Syrus Lynx 4G con Plaspy ofrece a los operadores visibilidad centralizada y práctica sobre ubicación, alarmas y telemática para flotas, operaciones de renta y programas de seguros. La conectividad multinetwork del dispositivo, su batería interna de respaldo y las funciones de telemetría se alinean directamente con capacidades de Plaspy como mapeo en tiempo real, alertas basadas en reglas y flujos de comando remoto.

El modelo de endpoint compartido y la detección automática de protocolos de Plaspy simplifican la incorporación de dispositivos: configure el Syrus Lynx 4G para reportar al servidor de Plaspy en d.plaspy.com o en 54.85.159.138 en el puerto 8888 usando UDP o TCP, y Plaspy generalmente detectará y procesará los mensajes del dispositivo. Para saber más sobre cómo Plaspy soporta rastreo de flotas y telemática, visite https://www.plaspy.com. Para obtener los detalles más actuales del protocolo del dispositivo, notas de firmware y guías de implementación, consulte la documentación del fabricante en https://www.digitalcomtech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
