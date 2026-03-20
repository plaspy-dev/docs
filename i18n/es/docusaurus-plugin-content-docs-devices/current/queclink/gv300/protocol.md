---
slug: /queclink/gv300/protocol
id: gv300-protocol
sidebar_label: Protocol
title: QuecLink - GV300 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el rastreador QuecLink GV300 con Plaspy, con ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo QuecLink GV300
  - Protocolo GPS QuecLink GV300
  - QuecLink GV300 para Plaspy
  - Protocolo de comunicación GV300
  - Protocolo de rastreo GV300
  - Protocolo de rastreador vehicular QuecLink
  - Compatibilidad GV300 Plaspy
  - Protocolo de seguimiento de vehículos Plaspy
  - Guía de protocolo de rastreador GPS
  - Rastreo de flotas QuecLink GV300
---

# QuecLink - Protocolo GV300

Esta página describe el contexto público del protocolo para usar el rastreador vehicular QuecLink GV300 con la plataforma Plaspy. Se centra en cómo se comunica el equipo en términos generales, qué ajustes de conexión espera Plaspy y consideraciones prácticas de compatibilidad relevantes para la implementación y la resolución de problemas.

El GV300 es un dispositivo telemático probado para vehículos, con posicionamiento GNSS, conectividad celular cuatribanda y un conjunto completo de interfaces cableadas. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, el comportamiento exacto del protocolo puede variar según el firmware, la revisión del hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador es el método de comunicación que el GV300 usa para enviar posiciones, telemetría y eventos de alarma a un servidor remoto. En el contexto de Plaspy, el protocolo permite que el equipo se identifique, entregue datos de ubicación y sensores, y notifique eventos que disparan alertas y flujos de trabajo, sin que en la mayoría de los casos sea necesario configurar algo especial dentro de Plaspy.

- Permite que informes de posición GNSS y telemetría con marcas de tiempo lleguen a Plaspy para visualización en mapas y generación de alertas.
- Transporta estados de entradas digitales y analógicas, disparos de ignición y eventos de alarma para que Plaspy pueda presentar eventos accionables.
- Lleva la identidad del dispositivo y detalles de sesión que permiten a Plaspy asociar los datos entrantes con el registro correcto del rastreador.
- Soporta informes periódicos programados y reportes por evento para equilibrar la visibilidad en tiempo real y el uso de ancho de banda.
- Funciona sobre transporte estándar TCP o UDP, lo que permite adaptarse a las condiciones de los operadores y la red.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un punto compartido y utiliza la información en el flujo de mensajes para identificar automáticamente el protocolo del rastreador. Esto significa que, cuando un GV300 está configurado para reportar al endpoint de Plaspy, la plataforma típicamente detectará y asociará el dispositivo sin necesidad de seleccionar el protocolo manualmente.

- Plaspy recibe tráfico de dispositivos en el endpoint compartido d.plaspy.com en el puerto 8888 y también acepta conexiones dirigidas a 54.85.159.138 en el mismo puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de equipos y el enrutamiento en el servidor.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente los usuarios no necesitan elegir una opción de protocolo dentro de Plaspy cuando el dispositivo está apuntando correctamente al endpoint de la plataforma.
- Para que el reporte funcione correctamente, el GV300 debe estar configurado para enviar sus informes al dominio o IP del servidor de Plaspy y usar el protocolo de transporte soportado.
- Si un dispositivo no aparece en línea, validar la dirección de reporte y el modo de transporte del equipo es el primer paso en la resolución de problemas.

## Contexto de transporte y conexión

El GV300 soporta transportes en red comúnmente usados por rastreadores vehiculares. Para conectividad con Plaspy, el equipo puede configurarse para usar UDP o TCP en el puerto que Plaspy escucha. Comprender las opciones de transporte y endpoint ayuda a garantizar una entrega confiable y el comportamiento esperado.

- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y las preferencias de configuración.
- Los dispositivos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para enrutar directamente a la plataforma.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos compatibles, usted puede estandarizar los ajustes en una flota mixta.
- Elija UDP para menor sobrecarga y tolerancia a pérdidas transitorias de paquetes, o TCP para una sesión orientada a conexión cuando sea compatible con el dispositivo y la red.
- Algunas implementaciones usan SMS u otros canales de respaldo que soporta el GV300 para reportes fuera de la red; revise la configuración del equipo y las limitaciones de cobertura al diseñar redundancia.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar características de reporte disponibles, nombres de eventos o campos opcionales; consulte las notas de la versión del firmware cuando el comportamiento difiera de lo esperado.
- Las revisiones de hardware y adaptadores accesorios (para CAN, sensores de temperatura, etc.) pueden modificar la telemetría soportada o el mapeo de E/S disponible.
- Los valores por defecto de configuración del fabricante pueden usar modos de transporte o temporización distintos; configure explícitamente la dirección de reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- La selección de transporte (UDP vs TCP) puede afectar las características de entrega de mensajes y debe elegirse conforme a las condiciones de la red y las prioridades operativas.
- Valide cualquier integración personalizada o de terceros (adaptadores CAN, sensores externos) contra la documentación del GV300 para asegurar que los valores reportados se mapeen correctamente en Plaspy.
- Compare siempre los reportes observados en Plaspy con la documentación del fabricante al solucionar campos inesperados o comportamientos de eventos.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GV300 con Plaspy mejora la calidad de la puesta en marcha, acelera la resolución de problemas y aumenta la confiabilidad a largo plazo de las operaciones de la flota. Un entendimiento práctico del protocolo y del contexto de conexión reduce el tiempo de inactividad y ayuda a los equipos a tomar decisiones informadas sobre transporte, frecuencia de reporte e integración de sensores.

- Garantiza que el equipo esté apuntando al endpoint y puerto correctos de Plaspy para que los informes lleguen de forma fiable.
- Facilita el diagnóstico de equipos sin conexión al revisar el modo de transporte, la configuración de APN y si los informes alcanzan d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Permite configurar de forma informada los intervalos de reporte y los umbrales de alarma para balancear batería, uso de datos y visibilidad.
- Aclara el mapeo entre canales de E/S del GV300, tramas CAN y los campos de telemetría visibles en los paneles de Plaspy.
- Reduce el tiempo de resolución en preguntas de integración al comparar el comportamiento observado con la semántica de protocolo esperada por el fabricante.

## Por qué usar Plaspy con este protocolo

Combinar el QuecLink GV300 con Plaspy ofrece a las organizaciones una forma sencilla y escalable de convertir la posición GNSS y la telemetría vehicular en información operativa. El hardware robusto y orientado a vehículo del GV300 y sus E/S cableadas complementan las capacidades de ingestión, alertas e informes de Plaspy para soportar monitoreo de flotas, recuperación ante robos, telemetría de cadena de frío y flujos de trabajo de telemática para seguros.

Plaspy facilita recibir los reportes del GV300 usando un único endpoint y puerto compartidos para todos los dispositivos y detectando automáticamente el protocolo del rastreador. Para obtener más información sobre Plaspy y cómo el GV300 puede integrarse en su programa de flota visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente del GV300 en el sitio del fabricante en https://www.queclink.com/ para obtener las especificaciones actualizadas.
