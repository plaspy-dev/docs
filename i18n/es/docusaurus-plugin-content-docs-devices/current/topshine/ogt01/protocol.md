---
slug: /topshine/ogt01/protocol
id: ogt01-protocol
sidebar_label: Protocol
title: TopShine - OGT01 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TopShine OGT01 para comunicación con Plaspy, cubriendo GPS, OBD y eventos
keywords:
  - Protocolo TopShine OGT01
  - Protocolo GPS TopShine OGT01
  - Compatibilidad TopShine OGT01 Plaspy
  - Rastreo OGT01 OBD II
  - Protocolo de comunicación OGT01
  - Rastreo vehicular TopShine
  - Integración telemetría OGT01
  - Protocolo rastreador GPS Plaspy
  - Rastreo de flotas OGT01
  - Telemetría OBD Plaspy
---

# TopShine — Protocolo OGT01

Esta página resume, a nivel público, el contexto del protocolo para usar el rastreador OBD II TopShine OGT01 con la plataforma Plaspy. Se centra en cómo el equipo informa ubicación, diagnósticos del vehículo y eventos a Plaspy, en términos generales y no sensibles, para que administradores de flotas e integradores comprendan la conectividad y el comportamiento esperado.

El OGT01 es un rastreador OBD II plug-and-play con antenas GPS y GSM integradas, un registrador de datos de 2 MB y una batería de respaldo para reportes limitados cuando se pierde la alimentación del vehículo. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El OGT01 puede reportar vía GPRS usando TCP o UDP y también soporta SMS como opción de respaldo.

## Visión general del protocolo

El protocolo de reporte del OGT01 regula cómo el dispositivo se identifica, transmite la ubicación GPS y envía telemetría OBD y alertas de eventos a un servidor remoto. A nivel público, la función del protocolo es garantizar que Plaspy reciba información de posición y parámetros del vehículo que puedan mostrarse, almacenarse y utilizarse para acciones operativas.

- Permitir la identificación del dispositivo para que Plaspy asocie la telemetría entrante con la unidad y el vehículo correctos.
- Entregar actualizaciones periódicas y por eventos de la posición GPS para soportar seguimiento en tiempo real y geocercas.
- Transportar diagnósticos OBD y telemetría de sensores, como estado del motor, consumo de combustible y códigos de falla, para análisis de flota.
- Proveer comportamientos de respaldo y almacenamiento intermedio, por ejemplo registro offline en zonas sin cobertura GSM y sincronización cuando se restablece la conectividad.
- Soportar canales GPRS tanto TCP como UDP, además de reportes por SMS cuando el firmware del dispositivo lo implemente.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint compartido y utiliza el contenido y las características de conexión para determinar automáticamente el manejador de protocolo adecuado. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el OGT01 está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy acepta reportes de dispositivos en d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto de la plataforma 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy, minimizando pasos de configuración manual.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos soportados, un equipo con la dirección correcta por lo general comenzará a transmitir datos sin cambios de puerto por unidad.
- Si un dispositivo soporta reportes por SMS, Plaspy puede ingerir esos mensajes o usar SMS como canal transicional cuando la conectividad GPRS no esté disponible.
- Normalmente usted solo necesita configurar el dispositivo para que apunte al endpoint de Plaspy; Plaspy se encarga de la identificación y el enrutamiento del protocolo.

## Contexto de transporte y conexión

La selección del transporte y la dirección del servidor son fundamentales para conectar el OGT01 a Plaspy. El dispositivo puede configurarse para usar UDP o TCP sobre el puerto de la plataforma, y puede apuntar a un nombre de dominio o a una dirección numérica según la preferencia del instalador y las opciones del firmware.

- El OGT01 puede configurarse para usar UDP o TCP en el puerto 8888 para reportes GPRS hacia Plaspy.
- Los dispositivos pueden dirigirse al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 como dirección alternativa para el mismo endpoint.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de plataforma 8888, lo que simplifica el despliegue y las reglas de firewall.
- TCP se usa comúnmente para entrega de sesión confiable, mientras que UDP puede estar disponible para menor latencia, sujeto al soporte del firmware del dispositivo y al comportamiento de la red.
- SMS puede actuar como canal de respaldo para reportes cuando GPRS no está disponible, con datos almacenados que se suben más tarde cuando se restablece el enlace GPRS.

## Notas sobre compatibilidad de protocolo

- Las revisiones de firmware pueden cambiar conjuntos de comandos, intervalos de reporte y valores por defecto de transporte; verifique el nivel de firmware del dispositivo al solucionar problemas.
- Revisiones de hardware o variantes regionales del OGT01 pueden diferir en bandas GSM soportadas o en los parámetros OBD reportados.
- El instalador debe confirmar si el firmware del dispositivo usa TCP o UDP por defecto y ajustar las reglas de red en consecuencia.
- La disponibilidad de parámetros OBD puede depender de la ECU del vehículo y del soporte de software OBD; no todos los vehículos exponen el mismo conjunto de métricas.
- El comportamiento y la capacidad del registrador interno de datos (por ejemplo, el logger de 2 MB del OGT01) afectan cómo se almacenan los datos históricos y cómo se suben después de interrupciones.
- Las funcionalidades de la plataforma del fabricante y las credenciales de demostración son independientes de Plaspy; siempre contraste la documentación del fabricante con su configuración en Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el OGT01 acelera la puesta en marcha, reduce el tiempo dedicado a la resolución de problemas y mejora la confiabilidad a largo plazo para operaciones de flota que usan Plaspy. Tener claridad sobre el transporte y el comportamiento de reporte permite a los administradores validar la conectividad, interpretar los datos entrantes y planificar escenarios offline o degradados.

- Garantiza la dirección de servidor y la selección de transporte correctas para que el dispositivo llegue a Plaspy de forma fiable.
- Ayuda a interpretar telemetría perdida o retrasada al distinguir problemas de red de configuraciones del dispositivo o comportamiento del firmware.
- Orienta decisiones sobre retención de datos, sincronización tras cortes y expectativas sobre la cobertura de parámetros OBD.
- Facilita configuraciones de firewall y red más efectivas al usar el puerto único de la plataforma Plaspy.
- Mejora la integración con alertas y automatizaciones en Plaspy al asegurar que los reportes por eventos se entreguen según lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el TopShine OGT01 con Plaspy brinda a las organizaciones visibilidad a nivel de vehículo y la posibilidad de combinar datos de posición GPS con telemetría OBD para obtener análisis operativos más completos. El factor de forma OBD II plug-and-play del OGT01, sus diagnósticos a bordo y su registrador offline lo hacen práctico para desplegar rápidamente cuando el monitoreo continuo y los datos de combustible o motor son importantes.

Plaspy centraliza la telemetría entrante del OGT01 en paneles, reglas de geocercas y alertas, y reportes exportables que apoyan la optimización de flotas, detección de robos y planificación de mantenimiento. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo configurado correctamente reporta al endpoint de Plaspy. Para saber más sobre Plaspy y los flujos de dispositivos soportados visite https://www.plaspy.com. Para los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio de TopShine https://www.gztopshine.com/ la cual puede actualizarse con el tiempo.
