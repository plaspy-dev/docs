---
slug: /totemtech/at07_3g/protocol
id: at07_3g-protocol
sidebar_label: Protocol
title: Totemtech - AT07-3G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Totemtech AT07-3G y su comunicación con Plaspy para rastreo GPS confiable
keywords:
  - Protocolo Totemtech AT07-3G
  - GPS Totemtech AT07-3G
  - Compatibilidad AT07-3G Plaspy
  - Protocolo rastreador GPS Totemtech
  - Protocolo de comunicación AT07-3G
  - Rastreo vehicular Totemtech AT07-3G
  - Integración rastreador Plaspy
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreo AT07-3G
  - Configuración rastreador Totemtech
---

# Totemtech - Protocolo AT07-3G

Esta página describe el contexto público del protocolo para usar el rastreador Totemtech AT07-3G con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel, qué puntos de conexión utiliza Plaspy y qué aspectos de la interacción con el rastreador son más relevantes al integrar el AT07-3G en un flujo de trabajo de monitoreo de flotas o activos.

El Totemtech AT07-3G es un equipo versátil con características como reporte a servidores duales, acelerómetro de 3 ejes para detección de movimiento, almacenamiento en Micro SD, actualizaciones de firmware OTA y múltiples canales de comunicación incluyendo GPRS y SMS. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo del rastreador regula cómo el AT07-3G informa la ubicación, estado, alarmas y telemetría a un servidor remoto, y cómo el servidor puede enviar comandos remotos o cambios de configuración cuando están soportados. Para la integración con Plaspy, la función principal del protocolo es entregar datos de posición y eventos que el servidor pueda interpretar y almacenar.

- Permite transmisiones periódicas y basadas en eventos de posiciones GPS y estado de movimiento hacia un endpoint remoto
- Transporta información de alarmas y estados de I/O como exceso de velocidad, pérdida de alimentación, SOS y alertas por vibración
- Soporta reporte simultáneo a dos servidores, lo que puede mejorar la redundancia o permitir recolección local y en la nube
- Permite aplicar actualizaciones de firmware y cambios de configuración de forma remota cuando OTA está disponible
- Facilita el almacenamiento de telemetría en bruto o agregada en Micro SD cuando la conectividad continua no está disponible

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de rastreadores en un único endpoint y puerto compartido y determina automáticamente qué protocolo compatible coincide con los datos recibidos. En la mayoría de los casos, un AT07-3G correctamente configurado para reportar al endpoint de Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en el dominio d.plaspy.com y en la IP pública del servidor 54.85.159.138
- El puerto compartido para todos los dispositivos en Plaspy es 8888 y Plaspy usa el mismo puerto para cada rastreador compatible
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe telemetría en el endpoint compartido
- Normalmente no es necesario elegir un protocolo en Plaspy si el equipo está configurado para reportar al endpoint de Plaspy
- Asegúrese de que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para permitir la detección automática

## Transporte y contexto de conexión

Las opciones de conexión para el AT07-3G dependen de la configuración del equipo y de las capacidades del firmware; el rastreador puede usar datos móviles basados en paquetes o canales de respaldo para comandos y configuración. Para la integración con Plaspy, la capa de transporte y la dirección de destino son los detalles esenciales de conexión.

- El AT07-3G puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y las opciones del dispositivo
- Los equipos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración de firewalls y redes
- Al usar datos celulares, confirme que el operador permita el transporte seleccionado (UDP o TCP) y que los ajustes APN sean correctos
- Usando la función de servidor dual del dispositivo, una dirección se puede configurar para Plaspy mientras la otra se usa para servicios locales o del proveedor

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las actualizaciones OTA pueden cambiar el formato y la forma en que el dispositivo envía telemetría; valide el comportamiento después de cambios de firmware
- Revisiones de hardware o accesorios opcionales pueden introducir variaciones en los mensajes soportados o en el reporte de I/O
- La elección del transporte (UDP vs TCP) puede afectar las características de entrega; pruebe el rastreador en el entorno de red esperado
- El reporte a servidores duales puede usarse para redundancia pero confirme el orden de selección de servidores y los intervalos de reporte en la configuración del dispositivo
- Puede ser necesario usar herramientas de configuración del fabricante o comandos SMS basados en SIM para establecer el servidor de reporte y el transporte
- Siempre contraste las afirmaciones de compatibilidad con la documentación del proveedor para comportamientos específicos de firmware

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de reporte del rastreador ayuda a asegurar una configuración fiable, captura de datos precisa y resolución eficiente de problemas cuando se usa el AT07-3G con Plaspy. Saber qué aspectos de la comunicación son fijos y cuáles varían por firmware o configuración reduce el tiempo de integración y las sorpresas operativas.

- Confirma que el transporte y el endpoint correctos estén configurados para que los datos lleguen a Plaspy de forma confiable
- Ayuda a diagnosticar problemas comunes como firewalls de red, restricciones del operador o ajustes APN incorrectos
- Aclara las expectativas sobre la frecuencia de reporte de eventos, semántica de alarmas y detección de movimiento con el acelerómetro
- Guía la planificación del almacenamiento y la retención de telemetría cuando el registro en Micro SD se usa como respaldo
- Soporta la planificación de mantenimiento alrededor de actualizaciones OTA que podrían alterar el comportamiento de reporte

## Por qué usar Plaspy con este protocolo

Usar el Totemtech AT07-3G con Plaspy proporciona a las organizaciones visibilidad centralizada de posiciones, eventos de movimiento y alertas reportadas por el rastreador. La detección automática de protocolo de Plaspy y el endpoint compartido simplifican la incorporación de dispositivos y reducen la necesidad de selección manual de protocolo cuando los equipos están configurados correctamente para reportar al servidor de Plaspy.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente específica del dispositivo y las notas de firmware en el sitio del fabricante en http://www.totemtek.com/ antes de finalizar el despliegue.
