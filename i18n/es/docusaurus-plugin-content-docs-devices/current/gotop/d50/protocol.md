---
slug: /gotop/d50/protocol
id: d50-protocol
sidebar_label: Protocol
title: GOTOP - D50 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador para mascotas GOTOP D50 con Plaspy usando el endpoint compartido y detección automática
keywords:
  - protocolo GOTOP D50
  - protocolo GPS GOTOP D50
  - GOTOP D50 Plaspy
  - protocolo de comunicación GOTOP D50
  - protocolo de rastreo GOTOP D50
  - protocolo rastreador GPS para mascotas
  - compatibilidad GOTOP D50
  - protocolo de dispositivo Plaspy
  - protocolo rastreador GPS
  - rastreador para mascotas Plaspy
---

# GOTOP - Protocolo D50

Esta página resume el contexto público del protocolo para usar el rastreador para mascotas GOTOP D50 4G con Plaspy. Describe cómo el D50 informa ubicaciones y eventos a Plaspy y qué papel juega el protocolo de reporte del dispositivo para que la plataforma Plaspy muestre ubicaciones en tiempo real, reproducción de historial, geocercas y alertas SOS.

Plaspy utiliza una configuración de conexión compartida entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles en el D50 pueden variar según versiones de firmware, revisiones de hardware e implementación del fabricante, por lo que esta página se centra en contexto general no sensible, apoyándose en los hechos de conexión de Plaspy y en las capacidades del dispositivo descritas por el fabricante.

## Resumen del protocolo

El protocolo que emplea el D50 regula cómo el rastreador comunica datos de posición, eventos y estado a un servidor remoto para que Plaspy pueda recibir y mostrar esa información. Para un rastreador de mascotas como el D50, el protocolo transmite coordenadas GNSS, datos de respaldo LBS, banderas de evento como movimiento o SOS, y actualizaciones periódicas de estado que incluyen batería e indicadores de conectividad.

- Permite la entrega de actualizaciones de posición con marca de tiempo y notificaciones de eventos desde el dispositivo hacia Plaspy.
- Transmite la identidad del dispositivo y telemetría básica para que Plaspy asocie los reportes con el registro correcto.
- Lleva información de respaldo de ubicación, como LBS basada en torres celulares, cuando GNSS no está disponible para proporcionar posiciones de mejor esfuerzo.
- Envía eventos de estado y sensores como detección de movimiento y SOS para que Plaspy genere alertas y entradas en el historial.
- Soporta modos de reporte eficientes que equilibran la frecuencia de actualización y la duración de la batería, lo cual Plaspy refleja en los estados en línea y de batería.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint consolidado y determina automáticamente el protocolo del rastreador a partir del flujo de datos entrante. En la mayoría de los casos un D50 configurado correctamente para reportar a Plaspy será reconocido sin requerir una selección manual de protocolo dentro de Plaspy.

- El servidor público de Plaspy se accede en d.plaspy.com y también está disponible mediante la dirección IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo.
- El puerto que escucha Plaspy para reportes de dispositivos es el 8888.
- Los dispositivos pueden estar configurados para enviar por UDP o TCP al puerto 8888 según capacidades del equipo y configuración.
- Si el D50 está configurado para reportar al endpoint de Plaspy, por lo general el usuario no necesita elegir un protocolo dentro de Plaspy.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el D50 abre un canal hacia Plaspy, pero no cambian la semántica de alto nivel del protocolo descrita arriba. El D50 soporta el reporte estándar por datos celulares sobre GPRS y puede configurarse para apuntar a Plaspy por nombre de host o IP.

- El dispositivo puede configurarse para enviar reportes a d.plaspy.com o directamente a 54.85.159.138.
- El puerto 8888 se usa para todos los dispositivos en Plaspy y es el puerto de escucha para reportes entrantes de rastreadores.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según lo que soporte el firmware del rastreador y la selección del usuario.
- La elección del transporte afecta las características de entrega pero no impide que Plaspy detecte automáticamente el protocolo del rastreador.
- Asegúrese de que el APN del rastreador, el plan de datos móviles y la SIM estén configurados correctamente para que el reporte por GPRS pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir, cambiar o desaprobar funciones; verifique qué comportamientos están presentes en la versión de firmware de su D50.
- Las revisiones de hardware pueden introducir pequeñas diferencias en el comportamiento de sensores, gestión de energía y desempeño GNSS que afectan la telemetría reportada.
- Las configuraciones del fabricante y las variantes regionales del firmware a veces cambian el transporte por defecto o los intervalos de reporte; revise la configuración del dispositivo antes de integrar.
- Elegir UDP frente a TCP afecta la retransmisión y las características de entrega; seleccione el transporte que se ajuste a la capacidad del dispositivo y a sus necesidades de fiabilidad.
- Confirme que el D50 esté configurado para reportar al endpoint y puerto de Plaspy y no a un portal de terceros.
- Valide el APN y la provisión de la SIM para asegurar que el enlace ascendente GPRS esté operativo para la ingestión por Plaspy.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación y las expectativas de conexión ayuda a asegurar un flujo de datos confiable entre el D50 y Plaspy, reduce el tiempo de configuración y agiliza la resolución de problemas cuando eventos o posiciones no aparecen como se espera.

- Facilita el diagnóstico de por qué las actualizaciones de posición, alertas de geocerca o notificaciones SOS pueden no llegar a Plaspy.
- Orienta la elección correcta del transporte y la configuración del servidor en el rastreador para que coincidan con el endpoint y puerto de Plaspy.
- Informa decisiones sobre frecuencia de reporte frente a duración de batería para que el comportamiento del dispositivo se alinee con las necesidades operativas.
- Aclara expectativas sobre la precisión del respaldo LBS cuando no hay solución GNSS.
- Ayuda a interpretar los indicadores de estado del dispositivo que muestra Plaspy, como batería, en línea/fuera de línea y última vez visto.

## Por qué usar Plaspy con este protocolo

Usar el D50 con Plaspy ofrece funcionalidad de seguimiento compacta y enfocada en mascotas, combinada con una plataforma diseñada para recibir reportes estándar por GPRS de posición y eventos. Para organizaciones y propietarios que necesitan visibilidad y supervisión operativa, el GNSS del D50 más el respaldo LBS, detección de movimiento y eventos SOS encajan de forma natural con las funciones de Plaspy como mapas en vivo, reproducción de historial y alertas de geocerca.

Plaspy facilita recibir y presentar los reportes del D50 al escuchar en un único endpoint compartido. Para obtener más información sobre Plaspy y cómo maneja integraciones de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica del protocolo y del firmware más reciente en el sitio del fabricante en https://www.gotop.cc/.
