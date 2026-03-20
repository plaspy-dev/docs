---
slug: /concox/vl103d/protocol
id: vl103d-protocol
sidebar_label: Protocol
title: Concox - VL103D Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Concox VL103D y cómo el dispositivo se comunica con Plaspy para rastreo vehicular y telemetría
keywords:
  - Protocolo Concox VL103D
  - Protocolo GPS Concox VL103D
  - Compatibilidad Concox VL103D con Plaspy
  - Protocolo de rastreo VL103D
  - Protocolo de comunicación VL103D
  - Protocolo rastreador GPS Concox
  - Compatibilidad de dispositivo Plaspy
  - Protocolo seguimiento vehicular
  - Protocolo rastreador para gestión de flotas
  - Integración telemetría VL103D
---

# Concox - Protocolo VL103D

Esta página describe el contexto público del protocolo para usar el rastreador Concox VL103D con la plataforma Plaspy. Aquí se explica, a alto nivel, cómo el VL103D comunica posiciones, alarmas y telemetría a Plaspy y qué aspectos de la comunicación del dispositivo son relevantes al integrar el equipo para rastreo en vivo, alertas y flujos básicos de gestión de flotas.

El VL103D es compatible con Plaspy desde su configuración inicial y combina conectividad LTE con GNSS e I/O vehicular para ofrecer rastreo en tiempo real y reporte de eventos. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se enfoca en contexto público no sensible más que en detalles internos del dispositivo.

## Descripción general del protocolo

El protocolo de reporte del rastreador es el mecanismo desde el dispositivo que entrega posiciones GNSS, estados, alarmas y valores de sensores a un servidor remoto para que esos datos puedan usarse en mapas, alertas e informes. En el caso del VL103D, el canal de comunicación transporta fijaciones de ubicación en tiempo real, estado de movimiento e ignición, valores ADC de sensores y notificaciones de eventos que Plaspy utiliza para poblar vistas en tiempo real y activar reglas.

- Permite que el VL103D se identifique y entregue posición GNSS y telemetría con marca temporal a un servidor backend.
- Transporta señales de alarma y eventos como movimiento, SOS, cambios de ignición y eventos basados en el acelerómetro.
- Lleva datos de I/O vehicular y sensores analógicos como estado ACC y lecturas ADC de 0–5 V para combustible u otra telemetría.
- Permite al servidor correlacionar la telemetría con la identidad del dispositivo para que Plaspy pueda mostrar historial, alertas e informes.
- Soporta tanto reportes periódicos como mensajes por evento, de modo que el dispositivo puede ser eficiente en redes celulares.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador empleado por un dispositivo conectado. En la mayoría de los casos, un VL103D configurado correctamente que reporte al endpoint de Plaspy será reconocido sin necesidad de seleccionar el protocolo manualmente en la plataforma, lo que simplifica la instalación para técnicos y administradores de flota.

- Plaspy escucha en una dirección y puerto de servidor comunes para conexiones entrantes y aplica detección automática para identificar el tipo de rastreador.
- Generalmente usted no necesita elegir un protocolo manualmente dentro de Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.
- La detección automática permite que varios modelos de rastreadores coexistan usando la misma configuración y puerto en Plaspy.
- Si un dispositivo no es reconocido, los pasos típicos de solución incluyen confirmar la configuración de reporte del dispositivo, la versión de firmware y que el equipo apunte al endpoint correcto de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión describe cómo se configura el VL103D para apuntar a Plaspy y qué opciones de transporte están disponibles. Plaspy expone un único endpoint al que los dispositivos pueden orientarse; la capa de protocolo opera encima de esa conexión de transporte y es detectada por Plaspy una vez que llega el tráfico.

- El dominio del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138 para reporte directo.
- Plaspy usa el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- El VL103D puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración local.
- Los dispositivos pueden usar el dominio de Plaspy o la IP del servidor al configurar el destino de reporte.
- Asegúrese de que el enrutamiento de red y las reglas de firewall permitan conexiones salientes al endpoint de Plaspy en el transporte y puerto configurados.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar tipos de mensajes disponibles, comportamiento de eventos y opciones de configuración; siempre verifique la versión de firmware al solucionar problemas.
- Revisiones de hardware o variantes regionales del VL103D pueden exponer soporte de bandas o interfaces opcionales distintas, lo que puede afectar el comportamiento operativo.
- Algunas funciones, como lecturas ADC, control de inmovilizador o umbrales de eventos del acelerómetro, se administran por configuración del dispositivo y firmware y pueden variar según la versión.
- La selección del modo de transporte entre UDP y TCP puede influir en las características de entrega y debe coincidir con lo que el firmware del dispositivo soporta.
- La detección automática de Plaspy maneja muchas variantes comunes, pero se recomienda validar la compatibilidad según la documentación del dispositivo y el firmware actual.
- En caso de duda, consulte la documentación oficial del fabricante para conjuntos de comandos y guías de configuración específicas del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del VL103D ayuda a garantizar una configuración fiable del dispositivo, una resolución de problemas eficaz y un comportamiento predecible en despliegues productivos. Saber qué envía el dispositivo y cómo Plaspy lo recibe reduce el tiempo de puesta en marcha y mejora la confianza en las operaciones de la flota.

- Confirma que el dispositivo está reportando al endpoint correcto de Plaspy y usando el transporte soportado.
- Permite identificar por qué ciertos eventos o valores de telemetría aparecen diferentes tras una actualización de firmware o un reemplazo de dispositivo.
- Facilita la resolución dirigida de conectividad, mapeo de sensores y configuración de eventos entre el rastreador y Plaspy.
- Apoya la planificación de integraciones que usan ignición, control de relés o entradas de sensores analógicos para asegurar la entrega consistente de datos.
- Ayuda a validar que las alarmas y los flujos de inmovilizador funcionen según lo esperado cuando se aplican reglas en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el VL103D con Plaspy ofrece a las organizaciones visibilidad sobre la ubicación del vehículo, eventos de movimiento y telemetría básica desde una sola plataforma. El diseño robusto del VL103D, su amplio rango de voltaje, la capacidad GNSS y el I/O vehicular lo hacen adecuado para recuperación, antirrobo y escenarios de gestión ligera de flotas, donde Plaspy puede centralizar alertas, vistas de mapa en vivo y reproducción histórica.

Si desea saber más sobre cómo Plaspy soporta dispositivos como el Concox VL103D, visite https://www.plaspy.com. Para comportamiento de protocolo y firmware específico del dispositivo consulte siempre con el fabricante en https://www.iconcox.com/ ya que el soporte de protocolo y los detalles de implementación pueden cambiar con el tiempo.
