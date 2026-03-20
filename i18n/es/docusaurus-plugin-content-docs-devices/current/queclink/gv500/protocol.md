---
slug: /queclink/gv500/protocol
id: gv500-protocol
sidebar_label: Protocol
title: QuecLink - GV500 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar QuecLink GV500 con Plaspy, incluye ajustes de servidor y contexto de transporte
keywords:
  - Protocolo QuecLink GV500
  - Protocolo GPS QuecLink GV500
  - QuecLink GV500 Plaspy
  - Protocolo OBDII GV500
  - Protocolo seguimiento QuecLink
  - Protocolo @Track GV500
  - Rastreo vehicular GV500
  - Compatibilidad dispositivos Plaspy
  - Gestión de flotas GV500
  - Protocolo de comunicación GV500
---

# QuecLink - Protocolo GV500

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GV500 con Plaspy. Resume cómo el GV500 reporta posición, datos OBDII y alertas de eventos a un servidor backend, y explica los ajustes de conexión clave que Plaspy espera para recibir los reportes del dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo envía reportes a la plataforma. El comportamiento exacto del protocolo en el GV500 puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; por ello esta página se centra en detalles públicos seguros y en los puntos de integración comunes usados con Plaspy.

## Resumen del protocolo

El GV500 emplea un protocolo de reporte embebido para enviar posiciones GPS, datos OBDII, eventos de movimiento y alertas mediante GPRS a un servidor remoto. En términos generales, el protocolo define cómo se identifica el dispositivo, cómo se envían datos periódicos y por evento, y cómo se transmiten diagnósticos del vehículo e información de sensores al backend.

- El protocolo transporta fijaciones de ubicación, marcas de tiempo y el estado de movimiento para que Plaspy pueda mostrar posiciones en mapas y calcular rutas.
- La identidad del dispositivo y la información de estado básica permiten a Plaspy asociar los reportes entrantes con el vehículo o activo correcto.
- Informes de eventos como cruces de geocerca, alertas de emergencia y batería baja notifican al backend sobre condiciones fuera de lo normal.
- Los datos OBDII y de diagnóstico vehicular reportados por el GV500 proporcionan campos telemáticos adicionales para análisis de flotas.
- El GV500 implementa el conjunto de reporte embebido @Track que usan los dispositivos QuecLink para estructurar sus reportes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de dispositivos en un único endpoint y puerto compartidos, y realiza detección automática de protocolo para los rastreadores conectados. Cuando el GV500 está configurado para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y la plataforma escucha en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP como transporte hacia el endpoint de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de equipos.
- Si el GV500 apunta correctamente al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y comenzará a parsear los tipos de reporte compatibles.

## Contexto de transporte y conexión

El GV500 se comunica a través de redes GPRS/GSM y puede apuntar a un servidor backend por nombre o por IP. Para usarlo con Plaspy, configure el destino de reportes del dispositivo al servidor Plaspy y seleccione el transporte que el equipo soporte.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para facilitar la configuración en flotas mixtas.
- El GV500 reporta mediante GPRS y depende del canal de datos del operador móvil para alcanzar el endpoint de Plaspy.
- La selección de transporte (UDP vs TCP) puede afectar el comportamiento de entrega y debe elegirse según la configuración del dispositivo y las condiciones de red.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir nuevos tipos de reporte o cambiar cómo se codifican ciertos campos; siempre consulte las notas de firmware del dispositivo al resolver incidencias.
- Las revisiones de hardware y las variantes regionales pueden afectar funciones disponibles como cobertura de datos OBDII o opciones de antena.
- La configuración del fabricante determina si el dispositivo usa UDP o TCP por defecto; verifique la configuración antes de incorporar el equipo.
- El GV500 implementa el conjunto de reporte embebido @Track, pero los detalles del payload y los eventos disponibles dependen del firmware y la configuración.
- Plaspy detecta automáticamente los protocolos soportados, pero se requiere la configuración correcta del servidor y del transporte en el dispositivo para una detección exitosa.
- Valide la compatibilidad contra la documentación y las notas de lanzamiento de QuecLink para comportamiento específico por modelo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GV500 ayuda a reducir el tiempo de configuración, agilizar la resolución de problemas y mejorar la fiabilidad a largo plazo cuando se usa con Plaspy. Tener claro qué reportes y contexto de conexión se esperan permite a los operadores confirmar que los dispositivos llegan a la plataforma y que los datos enviados son útiles para la operación.

- Asegura que el nombre de servidor o la IP y el transporte estén configurados correctamente para que los reportes lleguen a d.plaspy.com en el puerto 8888.
- Ayuda a distinguir problemas de red o de SIM de problemas relacionados con el protocolo o el firmware.
- Facilita la interpretación de informes de eventos como alertas de geocerca, disparos de emergencia y notificaciones de batería baja.
- Orienta las decisiones sobre actualizaciones de firmware, cambios de configuración o reemplazos de hardware cuando las funciones difieren entre unidades.
- Mejora la confianza al integrar campos OBDII y diagnósticos vehiculares en flujos de trabajo y análisis de flota.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GV500 con Plaspy ofrece una combinación práctica para organizaciones que necesitan visibilidad vehicular en tiempo real más diagnósticos opcionales basados en OBDII. La conectividad OBDII del GV500, la detección de movimiento basada en acelerómetro y sus capacidades de reporte embebido lo hacen adecuado para monitoreo de flotas, análisis de comportamiento de conductores y seguridad de activos cuando se emplea con un backend que comprende sus reportes.

Los ajustes de conexión compartidos y la detección automática de protocolos de Plaspy reducen la carga de configuración durante la incorporación. Para obtener más información sobre Plaspy y cómo puede integrarse con dispositivos como el GV500 visite https://www.plaspy.com. Para detalles más actuales sobre el protocolo del dispositivo, comportamiento de firmware y documentación específica del modelo verifique la información con el fabricante en https://www.queclink.com/.
