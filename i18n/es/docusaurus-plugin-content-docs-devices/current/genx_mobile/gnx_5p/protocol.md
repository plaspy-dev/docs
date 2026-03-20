---
slug: /genx_mobile/gnx_5p/protocol
id: gnx_5p-protocol
sidebar_label: Protocol
title: GenX Mobile - GNX-5P Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo GNX-5P de GenX Mobile y cómo el dispositivo comunica rastreo y telemetría con Plaspy
keywords:
  - Protocolo GenX Mobile GNX-5P
  - Protocolo GPS GNX-5P
  - Compatibilidad GNX-5P Plaspy
  - Protocolo de comunicación GNX-5P
  - Protocolo de rastreo GNX-5P
  - Protocolo de rastreador GenX Mobile
  - Rastreo vehicular GNX-5P
  - Rastreo de flotas GNX-5P
  - Integración de dispositivos Plaspy
  - Guía de protocolo de dispositivo
---

# GenX Mobile - Protocolo GNX-5P

Esta página ofrece una descripción pública, no sensible, del contexto del protocolo de comunicación del GenX Mobile GNX-5P cuando se utiliza con la plataforma de gestión de flotas Plaspy. Se enfoca en cómo el rastreador reporta telemetría y eventos a Plaspy y qué aspectos del protocolo del dispositivo son relevantes para una integración y operación exitosas.

Plaspy utiliza un punto de conexión y un puerto compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene la discusión en un nivel práctico y neutral con respecto a la implementación.

## Resumen del protocolo

El protocolo empleado por el GNX-5P define cómo el dispositivo envía telemetría de ubicación, estado y eventos a un servidor remoto para que Plaspy pueda ingerir y presentar esos datos. Cubre las acciones básicas de reporte de posición, identidad del dispositivo y muestras de eventos como alertas basadas en el acelerómetro, sin exponer formatos binarios privados ni detalles internos del fabricante.

- Permite transmisión periódica y por evento de la ubicación GPS y telemetría relacionada a un servidor remoto.
- Transporta la identidad y el estado del dispositivo para que Plaspy pueda asociar los mensajes con un rastreador registrado.
- Transmite datos de sensores y eventos, como alertas del acelerómetro, estado de movimiento y calidad de señal, de forma que Plaspy pueda mapearlos a alertas y análisis.
- Admite transporte sobre protocolos de red comunes para que los dispositivos funcionen de manera fiable en redes celulares.
- Soporta intervalos de reporte y umbrales de eventos configurables mediante la configuración del dispositivo suministrada por el fabricante.
- Permite que el firmware extienda o modifique los conjuntos de mensajes conservando el reporte básico de ubicación e identidad.

## Cómo detecta Plaspy el protocolo

Plaspy requiere que el dispositivo reporte al punto de conexión y puerto del servidor Plaspy; una vez que los mensajes llegan al punto compartido, Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios rara vez necesitan seleccionar un protocolo manualmente. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito típico para una detección automática exitosa.

- El dominio del servidor Plaspy es d.plaspy.com, que los dispositivos pueden usar para reportar.
- La IP del servidor Plaspy es 54.85.159.138 y puede emplearse como endpoint alternativo.
- El puerto es 8888 y es el puerto compartido utilizado por todos los dispositivos en Plaspy.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el direccionamiento al endpoint de Plaspy es correcto.

## Transporte y contexto de conexión

Las opciones de transporte y la configuración de conexión determinan cómo los mensajes del GNX-5P llegan a Plaspy. El GNX-5P está diseñado para operar sobre redes celulares modernas y soporta modos de transporte comunes; la elección del tipo de transporte apropiado depende del firmware del dispositivo y de las características deseadas de fiabilidad o latencia.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint de reporte.
- Usar TCP puede mejorar la fiabilidad de entrega, mientras que UDP puede reducir la sobrecarga en algunas configuraciones, según la capacidad del dispositivo.
- El comportamiento de la red celular y las condiciones de señal influyen en la frecuencia con la que el GNX-5P puede reportar y en si los mensajes se reenvían.
- Debido a que Plaspy utiliza un único puerto para todos los dispositivos, cambiar el transporte de un equipo normalmente requiere solo modificar la configuración del dispositivo, no el puerto del servidor.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir, eliminar o cambiar tipos de mensajes y comportamientos; siempre verifique la versión de firmware del dispositivo al diagnosticar compatibilidad.
- Las revisiones de hardware y los componentes opcionales, como sensores internos, pueden afectar qué campos de telemetría están disponibles en una unidad concreta.
- Los comandos de configuración del fabricante y los procedimientos de provisión controlan si el dispositivo apunta a d.plaspy.com o a la IP numérica y si utiliza UDP o TCP.
- La selección del transporte (UDP frente a TCP) debe coincidir con la capacidad del dispositivo y con los requisitos de la red del operador.
- Plaspy aceptará mensajes en el puerto compartido e intentará la detección del protocolo, pero se requiere el direccionamiento correcto al endpoint de Plaspy.
- Valide la compatibilidad frente a la documentación más reciente de GenX Mobile y las notas de la versión para comportamientos específicos del firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GNX-5P ayuda a asegurar una configuración fiable, una recopilación de datos precisa y una resolución de problemas más rápida al integrar el dispositivo con Plaspy. Conocer qué reporta el dispositivo y cómo se conecta reduce el tiempo de integración y mejora la visibilidad operativa.

- Facilita la configuración correcta del dispositivo para que los mensajes lleguen a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a distinguir entre problemas relacionados con el transporte y problemas relacionados con el protocolo o el firmware.
- Orienta las decisiones sobre intervalos de reporte, umbrales de eventos y compensaciones entre consumo de batería y uso de datos.
- Permite una resolución de problemas más eficaz cuando las actualizaciones de posición, acelerómetro o estado no aparecen en Plaspy.
- Ayuda a los administradores a confirmar que el GNX-5P está enviando los tipos de telemetría necesarios para análisis y alertas de la flota.

## Por qué usar Plaspy con este protocolo

Utilizar el GNX-5P con Plaspy ofrece una vía práctica para consolidar la ubicación GPS, el estado del vehículo y la telemetría de eventos en una sola plataforma de gestión de flotas. La detección automática de protocolos de Plaspy y el enfoque de puerto compartido reducen la carga de configuración y permiten que los equipos se concentren en la operación en lugar de en la selección de protocolos.

Plaspy está diseñado para aceptar reportes GNX-5P enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP, y detectará automáticamente el protocolo del rastreador una vez que el dispositivo envíe datos a ese endpoint. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific protocol details and firmware behavior with the manufacturer at http://www.genxmobile.com/.
