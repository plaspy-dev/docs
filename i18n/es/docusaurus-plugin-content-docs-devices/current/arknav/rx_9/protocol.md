---
slug: /arknav/rx_9/protocol
id: rx_9-protocol
sidebar_label: Protocol
title: ArkNav - RX-9 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del ArkNav RX-9 y cómo se comunica con Plaspy para seguimiento y telemetría de flotas confiables
keywords:
  - Protocolo ArkNav RX-9
  - Protocolo GPS ArkNav RX-9
  - Protocolo ArkNav RX-9 para Plaspy
  - Protocolo de comunicación ArkNav RX-9
  - Protocolo de rastreo ArkNav RX-9
  - Compatibilidad tracker ArkNav con Plaspy
  - Rastreo de flota RX-9
  - Reporte de telemetría RX-9
  - Protocolo de rastreador GPS ArkNav
  - Protocolo tracker RX-9 resistente al agua
---

# ArkNav - Protocolo RX-9

Esta página describe el contexto público del protocolo para usar el rastreador ArkNav RX-9 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, cómo se aplican los ajustes de conexión y qué considerar al aprovisionar unidades RX-9 para telemetría de flota, antirrobo y logística con control de temperatura. El RX-9 es un rastreador GPS robusto con certificación IP67, basado en módulos uBlox para GNSS y celular, y se utiliza habitualmente en vehículos, remolques y maquinaria pesada donde la precisión y la durabilidad del equipo son críticas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo correctamente configurado reporta al endpoint de Plaspy. El comportamiento exacto del protocolo para el RX-9 puede variar según la versión de firmware, la revisión de hardware, la configuración de accesorios y la implementación del fabricante. Para la configuración de red, Plaspy acepta tráfico en d.plaspy.com y 54.85.159.138 usando un único puerto de plataforma, y las unidades RX-9 pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.

## Resumen del protocolo

El protocolo de comunicación del rastreador es el conjunto de reglas que el RX-9 utiliza para intercambiar datos de posicionamiento, sensores y eventos con un backend como Plaspy. Permite al equipo identificarse ante el servidor, transmitir fijaciones GPS y telemetría, y señalar alertas y cambios de estado. Comprender el protocolo a nivel conceptual ayuda a instaladores y administradores a garantizar que el dispositivo esté configurado para alcanzar el endpoint de Plaspy y que la telemetría se integre correctamente en la plataforma.

- Transporta la ubicación del dispositivo, marcas de tiempo y telemetría de sensores al servidor para que Plaspy muestre posiciones en tiempo real y trazas históricas.
- Transmite la identidad y el estado del dispositivo para que Plaspy asocie los datos entrantes con el activo y la configuración correctos.
- Envía señales de eventos y alertas como encendido, movimiento, eventos por fuerza G, identificación del conductor, nivel de batería y temperatura, que activan notificaciones basadas en reglas en Plaspy.
- Soporta reportes periódicos de latido o keepalive para mantener una sesión confiable y habilitar flujos de trabajo de gestión remota.
- Permite intervalos y condiciones de reporte configurables para que las implementaciones equilibren la frecuencia de actualizaciones con el consumo de datos celulares y la vida útil de la batería.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador para la mayoría de dispositivos, incluido el RX-9, cuando el dispositivo apunta a la plataforma. Dado que la detección se realiza del lado del servidor, los usuarios normalmente no necesitan seleccionar manualmente un protocolo en Plaspy si el equipo está correctamente configurado para reportar a la dirección de Plaspy.

- Plaspy escucha en un único puerto de plataforma para los datos de dispositivo y usa detección automatizada para identificar el protocolo de reporte.
- Los dispositivos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y la configuración de firewalls.
- La identidad correcta del equipo y la consistencia en los intervalos de reporte ayudan a Plaspy a asociar los datos con la cuenta y el rastreador adecuados.
- Si un dispositivo no aparece en Plaspy, verifique la configuración de red, el APN y que el equipo esté apuntando al endpoint y al puerto correctos de Plaspy.

## Contexto de transporte y conexión

Las elecciones de transporte y conexión determinan cómo el RX-9 envía sus reportes a Plaspy. El RX-9 soporta reportes por datos celulares estándar y puede configurarse para usar UDP o TCP según el firmware del dispositivo y los requisitos de la implementación. Entender el contexto de conexión ayuda a garantizar una entrega confiable y un direccionamiento correcto hacia el servidor.

- Las unidades RX-9 pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración.
- Los dispositivos pueden reportar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy utiliza el mismo puerto para todos los dispositivos, lo que reduce la complejidad de configuración por unidad.
- Elija UDP para menor sobrecarga y entrega más rápida cuando la red sea suficientemente confiable, o TCP cuando el firmware prefiera entrega ordenada y control de estado de conexión.
- Asegúrese de que las políticas de red del vehículo o de la flota permitan tráfico saliente hacia el endpoint y puerto de Plaspy para permitir el reporte correcto.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la disponibilidad de campos, el formato de los reportes o los modos de transporte soportados. Confirme la versión de firmware del RX-9 al resolver problemas de compatibilidad.
- Las revisiones de hardware y la configuración de accesorios, como sensores de temperatura externos o inmovilizadores, pueden alterar el conjunto de campos de telemetría que el dispositivo reporta.
- Los valores por defecto del fabricante y las plantillas de mensajes configurables pueden variar según modelos regionales. Verifique la configuración del dispositvo cuando los campos esperados no aparezcan en Plaspy.
- La selección de transporte entre UDP y TCP es una opción de configuración en muchas unidades y puede afectar la semántica de entrega y el comportamiento de reintentos.
- Al integrar a gran escala, valide una unidad de prueba de extremo a extremo con Plaspy antes del aprovisionamiento masivo para confirmar el comportamiento de red y de reporte.
- Siempre contraste la configuración del equipo, como APN, dirección del servidor e intervalos de reporte, con la documentación oficial de ArkNav para el modelo específico.

## Por qué resulta importante entender el protocolo

Tener una comprensión general del protocolo de comunicación del RX-9 ayuda a administradores e integradores a configurar correctamente los dispositivos, interpretar los datos entrantes y diagnosticar problemas comunes de conectividad sin necesidad de análisis profundo a nivel de bits. Este entendimiento práctico reduce el tiempo de despliegue y mejora la fiabilidad operativa cuando los dispositivos se monitorean a través de Plaspy.

- Garantiza la dirección del servidor y los ajustes de transporte correctos para que los dispositivos lleguen confiablemente a Plaspy.
- Facilita el mapeo de los campos de telemetría del dispositivo en la plataforma para que las alertas y reglas se activen según lo previsto.
- Ayuda a solucionar reportes perdidos, conectividad intermitente y huecos en los datos al revisar transporte, APN y versiones de firmware.
- Apoya la planificación del uso de datos, los intervalos de reporte y los compromisos de vida útil de batería en despliegues de flota.
- Facilita la coordinación con el soporte de ArkNav o los instaladores cuando el comportamiento del dispositivo difiere de la documentación.

## Por qué usar Plaspy con este protocolo

Usar el RX-9 con Plaspy ofrece una vía sencilla para obtener visibilidad en tiempo real de vehículos, monitoreo de telemetría y alertas basadas en reglas para flotas que operan en entornos exigentes. El diseño robusto del RX-9, sus sensores de telemetría integrados y el soporte para accesorios externos lo hacen adecuado para casos de uso de flota, remolques y entornos con control de temperatura, mientras que Plaspy se encarga de la ingesta, visualización y alertas de los datos que el dispositivo reporta.

Si desea obtener más información sobre la integración de dispositivos ArkNav RX-9 con Plaspy y las funcionalidades de gestión de flotas disponibles, conozca más sobre Plaspy en el sitio principal https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, comportamiento de firmware y soporte de accesorios, verifique la información en el sitio del fabricante https://www.arknavgps.com.tw/ ya que el soporte de protocolo y la implementación de firmware pueden cambiar con el tiempo.
