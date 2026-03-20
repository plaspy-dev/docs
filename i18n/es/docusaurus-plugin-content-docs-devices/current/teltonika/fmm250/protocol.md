---
slug: /teltonika/fmm250/protocol
id: fmm250-protocol
sidebar_label: Protocol
title: Teltonika - FMM250 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar Teltonika FMM250 con Plaspy, con guía de conexión y notas de compatibilidad
keywords:
  - Protocolo Teltonika FMM250
  - Protocolo GPS Teltonika FMM250
  - Teltonika FMM250 Plaspy
  - Protocolo de comunicación FMM250
  - Protocolo de rastreo FMM250
  - Protocolo de rastreador vehicular Teltonika
  - Protocolo de datos CAN FMM250
  - Compatibilidad de dispositivos Plaspy
  - Guía de protocolo para rastreadores GPS
  - Protocolo para rastreo de flotas
---

# Teltonika - Protocolo FMM250

Esta página presenta el contexto público del protocolo para utilizar el rastreador Teltonika FMM250 con Plaspy. Explica, a alto nivel, cómo el dispositivo se comunica con Plaspy, cómo se aplican las configuraciones de conexión compartidas y qué aspectos del protocolo de reporte son relevantes para una integración exitosa. El FMM250 es un rastreador vehicular robusto con protección IP67, diseñado para captura precisa de datos CAN y conectividad celular moderna; este documento se enfoca en la información necesaria para entender su papel en un despliegue Plaspy sin entrar en detalles de firmware.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. Los dispositivos compatibles con Plaspy pueden apuntar a d.plaspy.com (54.85.159.138) en el puerto 8888 usando UDP o TCP; Plaspy emplea un puerto común para todos los dispositivos y realiza la identificación del protocolo en el backend. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre confirme detalles específicos del dispositivo con el fabricante cuando sea necesario.

## Visión general del protocolo

El protocolo que usa el FMM250 para comunicarse con un servicio backend regula cómo se codifican y transmiten la telemetría, los parámetros CAN, la ubicación y los eventos. En el contexto de Plaspy, el protocolo permite que el rastreador entregue de forma confiable telemetría y parámetros del bus vehicular que luego se mapean en los paneles y flujos de trabajo de Plaspy.

- Permite la transmisión de ubicación GNSS, telemetría derivada del CAN y entradas de accesorios a Plaspy para monitoreo en vivo.
- Transporta información de identificación para que el backend asocie las conexiones entrantes con un registro de dispositivo específico.
- Soporta reportes periódicos y mensajes por eventos, lo que permite a Plaspy mostrar vistas en tiempo real y registros históricos.
- Facilita actualizaciones de configuración del dispositivo y parámetros operativos cuando el rastreador y el flujo de gestión lo admiten.
- Proporciona el contexto vehicular y de telemetría que Plaspy necesita para mapear parámetros CAN en diagnósticos y análisis de flotas.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para las conexiones entrantes de rastreadores y detecta automáticamente el protocolo del dispositivo cuando está correctamente configurado. Esta detección automática evita que la mayoría de los usuarios tengan que seleccionar manualmente un protocolo en Plaspy cuando el rastreador está apuntando al endpoint de Plaspy.

- Plaspy acepta conexiones dirigidas a d.plaspy.com en 54.85.159.138 en el puerto 8888.
- La plataforma soporta dispositivos que reportan vía UDP o TCP en el puerto 8888 y aplica el mismo puerto para todos los rastreadores soportados.
- Cuando un dispositivo establece comunicación con el endpoint de Plaspy, la plataforma determina el protocolo y enruta la telemetría al pipeline de ingestión correspondiente.
- En implementaciones habituales, usted configura el dispositivo para que reporte a d.plaspy.com en el puerto 8888 y Plaspy se encarga del resto sin selección manual de protocolo.
- Si un dispositivo no es reconocido, revise la configuración de red del equipo, el transporte (UDP vs TCP) y la documentación del fabricante.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el rastreador llega a Plaspy y qué opciones de transporte son las más comunes. El FMM250 soporta transportes celulares modernos y puede configurarse para reportar a Plaspy usando UDP o TCP según la configuración del dispositivo y las condiciones de la red.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 como endpoint del servidor Plaspy.
- Plaspy utiliza el puerto 8888 para todos los dispositivos; el FMM250 puede configurarse para usar UDP o TCP en ese mismo puerto.
- La elección del transporte (UDP frente a TCP) puede afectar las características de entrega y debe adaptarse a las condiciones de la red y del operador para obtener mejores resultados.
- Asegúrese de que la operadora y la configuración del APN en el dispositivo permitan conexiones salientes al endpoint y puerto de Plaspy.
- Verifique que firewalls intermedios y políticas NAT permitan el transporte elegido hacia Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de los mensajes, los campos disponibles o el mapeo de parámetros CAN; verifique el firmware del dispositivo al validar el comportamiento.
- Las revisiones de hardware y las diferencias de SKU pueden afectar las interfaces disponibles, los conjuntos de parámetros CAN o la compatibilidad con accesorios.
- Las herramientas de configuración del fabricante o la gestión remota pueden alterar cómo el dispositivo reporta datos y qué transportes son compatibles.
- La elección del transporte (UDP vs TCP) es una opción de configuración; confirme que el dispositivo esté apuntando al endpoint de Plaspy en el puerto 8888.
- Módulos accesorios y adaptadores CAN pueden cambiar el conjunto de campos de telemetría que se reportan a Plaspy.
- Siempre contraste las suposiciones de compatibilidad con la documentación más reciente del fabricante para el SKU y firmware específicos.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación que usa el FMM250 ayuda a garantizar una configuración fiable del dispositivo, un mapeo preciso de la telemetría en Plaspy y facilita la resolución de problemas durante el despliegue y la operación. Tener claridad sobre el protocolo acelera la integración y reduce la ambigüedad al diagnosticar problemas de conectividad o datos.

- Facilita confirmar que el dispositivo está correctamente dirigido a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a mapear parámetros provenientes del CAN en campos de Plaspy para diagnósticos, análisis de combustible o monitoreo de vehículos eléctricos.
- Contribuye a la resolución de problemas cuando falta telemetría, al revisar transporte, firmware y ajustes del APN.
- Informa decisiones sobre la selección de transporte y la resiliencia de red para su despliegue.
- Apoya la planificación de mantenimiento a largo plazo conforme evolucionan firmware y funcionalidades del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM250 con Plaspy integra telemetría vehicular detallada y conectividad robusta en un único flujo de gestión de flotas. Las capacidades CAN del FMM250 y sus opciones celulares lo hacen adecuado para organizaciones que requieren diagnósticos precisos del vehículo, insumos para mantenimiento predictivo y reportes de ubicación confiables en entornos exigentes.

El modelo de endpoint compartido y la detección automática de protocolo de Plaspy simplifican la integración: apunte el dispositivo a d.plaspy.com (54.85.159.138) en el puerto 8888 usando UDP o TCP, y Plaspy se encargará de identificar el protocolo y de la ingestión de datos. Para obtener más información sobre Plaspy y cómo soporta la telemetría de flotas, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware e información de SKU, confirme siempre con el fabricante en https://www.teltonika-gps.com/.
