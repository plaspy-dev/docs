---
slug: /aovx/gg100/protocol
id: gg100-protocol
sidebar_label: Protocol
title: AOVX - GG100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía del protocolo AOVX GG100 para la configuración de seguimiento en Plaspy, contexto de comunicación y compatibilidad
keywords:
  - protocolo AOVX GG100
  - protocolo GPS AOVX GG100
  - protocolo AOVX GG100 para Plaspy
  - protocolo de comunicación AOVX GG100
  - protocolo de rastreo AOVX GG100
  - rastreador GPS GG100
  - compatibilidad GG100 con Plaspy
  - configuración del rastreador AOVX
  - protocolo GPS para bienes
  - compatibilidad de dispositivos Plaspy
---

# AOVX - GG100 Protocol

Esta página ofrece el contexto público del protocolo para usar el AOVX GG100 con Plaspy. Su objetivo es ayudarle a entender cómo se comunica el rastreador, qué significa el protocolo en un escenario práctico de integración y por qué una configuración correcta del dispositivo es clave para un reporte exitoso.

El GG100 es un rastreador GPS de bienes compatible con Plaspy, diseñado para implementaciones de logística y cadena de suministro a gran escala. Plaspy utiliza parámetros de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según el firmware, la revisión de hardware y la implementación del fabricante.

## Panorama del protocolo

El protocolo es la capa de comunicación que permite que el GG100 envíe datos de seguimiento y telemetría a Plaspy en un formato que la plataforma pueda interpretar. Para este modelo, el contexto del protocolo se entiende mejor como el vínculo entre la configuración del dispositivo y la información útil de ubicación y sensores que aparece en Plaspy.

- Permite que el rastreador reporte su posición y estado a Plaspy
- Soporta la comunicación para el rastreo de bienes y la visibilidad operativa
- Ayuda al dispositivo a identificarse dentro de la plataforma Plaspy
- Transporta los datos necesarios para actualizaciones de ubicación y monitoreo ambiental
- Forma parte del proceso general de integración del dispositivo y no de una función visible para el usuario

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para trabajar con un punto de conexión compartido y detectar automáticamente el protocolo del rastreador después de que el dispositivo se conecta. En el caso del GG100, esto significa que normalmente el usuario configura el dispositivo para enviar datos al servidor de Plaspy, y la plataforma reconoce el protocolo sin requerir, en la mayoría de los casos, una selección manual.

- Usa el mismo punto de conexión de Plaspy para los dispositivos compatibles
- Detecta automáticamente el protocolo del rastreador
- Reduce la configuración manual dentro de la plataforma
- Simplifica la puesta en marcha de rastreadores GPS compatibles
- Ayuda al dispositivo a comenzar a reportar una vez que la red y el servidor están correctamente configurados

## Contexto de transporte y conexión

El GG100 puede configurarse para comunicarse con Plaspy mediante UDP o TCP en el puerto 8888, según la compatibilidad del dispositivo y la configuración elegida. Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138, y todos los dispositivos en Plaspy usan el mismo puerto.

- Dominio del servidor Plaspy d.plaspy.com
- IP del servidor Plaspy 54.85.159.138
- Puerto compartido 8888 para los dispositivos compatibles
- Se puede usar UDP o TCP en ese puerto
- Los parámetros de conexión deben coincidir con las capacidades del dispositivo y las necesidades de la implementación

## Notas de compatibilidad del protocolo

- La compatibilidad puede depender de la versión del firmware y de la revisión de hardware
- Los detalles de implementación del fabricante pueden afectar la forma en que el rastreador reporta los datos
- El comportamiento de UDP y TCP puede variar según cómo esté configurado el dispositivo
- Plaspy usa el mismo puerto para los dispositivos compatibles, lo que simplifica la configuración de red
- Si el rastreador se actualiza o se reconfigura, el comportamiento de comunicación puede cambiar
- La documentación oficial del fabricante es la mejor referencia para conocer los detalles actuales específicos del dispositivo
- En implementaciones a gran escala, valide la configuración en un grupo pequeño de unidades antes de desplegarla masivamente

## Por qué importa entender el protocolo

Entender el protocolo ayuda a asegurar que el GG100 esté configurado correctamente y que Plaspy reciba los datos necesarios para el rastreo, las alertas y los reportes. También facilita el diagnóstico cuando un dispositivo no aparece en línea, reporta de forma inconsistente o se comporta de manera diferente después de una actualización de firmware.

- Ayuda a confirmar que el rastreador está enviando datos al punto de conexión correcto de Plaspy
- Facilita un diagnóstico más rápido cuando las actualizaciones de ubicación no llegan como se espera
- Mejora la consistencia del despliegue en grandes flotas de activos
- Reduce la confusión entre la configuración de red y el comportamiento de reporte del dispositivo
- Ofrece una visión más clara de cómo los cambios de firmware o hardware pueden afectar la integración

## Por qué usar Plaspy con este protocolo

Usar el AOVX GG100 con Plaspy ofrece a las organizaciones una forma práctica de centralizar el rastreo de bienes, el monitoreo ambiental y la visibilidad operativa. La plataforma puede recibir y organizar los datos del dispositivo una vez que el rastreador está configurado para comunicarse con los parámetros de conexión compartidos de Plaspy, lo que facilita el monitoreo de envíos, pallets, contenedores y otros activos móviles.

Para equipos que gestionan logística, transporte de cadena de frío o despliegues de activos a gran escala, esta combinación permite un reporte estructurado y supervisión continua sin necesidad de una configuración compleja dispositivo por dispositivo dentro de la plataforma. Conozca más sobre Plaspy en el sitio web principal https://www.plaspy.com y verifique los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y la guía del fabricante en el sitio oficial de AOVX https://www.aovx.com/ para mantener su implementación alineada con la documentación actual.
