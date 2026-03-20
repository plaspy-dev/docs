---
slug: /ev/ev_201m/protocol
id: ev_201m-protocol
sidebar_label: Protocol
title: EV - EV-201M Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del rastreador GPS EV-201M y cómo se comunica con Plaspy para seguimiento de mascotas y telemetría
keywords:
  - protocolo EV EV-201M
  - protocolo GPS EV-201M
  - protocolo de rastreo EV-201M
  - compatibilidad EV-201M Plaspy
  - protocolo de rastreadores Plaspy
  - rastreador GPS EV-201M
  - protocolo rastreador de mascotas EV
  - protocolo LTE-M NB IoT para rastreadores
  - comunicación rastreador EV
  - protocolo de telemetría EV-201M
---

# EV - Protocolo EV-201M

Esta página describe el contexto público del protocolo para usar el rastreador EV-201M con la plataforma Plaspy. Se concentra en cómo el dispositivo comunica ubicación, telemetría y eventos a Plaspy en términos generales y no sensibles, de modo que integradores y usuarios técnicos puedan entender qué esperar al configurar y conectar el rastreador.

El EV-201M es un rastreador GPS compacto 4G LTE-M / NB diseñado para seguimiento de mascotas con grado de protección IP67, batería de 800 mAh, funciones asistidas por BLE y seguimiento en tiempo real con intervalos de hasta 10 segundos en exteriores cuando está habilitado. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del rastreador es el método que usa el dispositivo para empaquetar posiciones GNSS, telemetría y eventos y entregarlos a un endpoint en la nube donde Plaspy ingiere y presenta los datos. El contexto público del protocolo ayuda a explicar qué tipo de información se transmite, cómo se identifica el dispositivo y qué comportamientos espera Plaspy para un reporte fiable.

- Envía fijaciones GNSS y marcas de tiempo de posición a Plaspy para que las ubicaciones se mapeen y se mantenga el historial.
- Reporta telemetría del dispositivo como nivel de batería, eventos de movimiento o actividad y estado de BLE para un monitoreo más completo.
- Entrega notificaciones de eventos como solicitudes manuales de ubicación desde el botón del dispositivo y disparos de geocercas a Plaspy.
- Permite intervalos de reporte configurables y modos de rastreo en vivo que afectan la frecuencia de las actualizaciones de posición.
- Permite a Plaspy correlacionar la identidad del dispositivo con los datos entrantes para que ubicaciones y alertas aparezcan bajo el rastreador correcto en la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de rastreadores en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del dispositivo cuando llegan datos. En la mayoría de los casos, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el EV-201M está configurado para reportar al endpoint de Plaspy con los ajustes de transporte correctos.

- El endpoint público de Plaspy para reportes de rastreadores es d.plaspy.com y la IP del servidor equivalente es 54.85.159.138.
- Plaspy escucha el tráfico de dispositivos en el puerto 8888 y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos de reporte a la plataforma.
- Si el EV-201M está configurado para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888, los dispositivos normalmente aparecen en Plaspy sin selección manual de protocolo.
- Una identificación adecuada del dispositivo y telemetría consistente mejoran la detección automática y el mapeo dentro de Plaspy.

## Contexto de transporte y conexión

El transporte de conexión determina cómo el EV-201M entrega datos a Plaspy a través de la red celular. El EV-201M puede configurarse para usar UDP o TCP según el soporte del módulo y la configuración del dispositivo; ambos transportes son compatibles al reportar al puerto compartido de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los rastreadores pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- El mismo puerto 8888 es utilizado por todos los dispositivos en Plaspy, lo que simplifica la configuración entre modelos.
- La elección del transporte (UDP vs TCP) puede afectar características de entrega como retransmisiones y latencia, pero la decisión la dicta el firmware y la configuración del dispositivo.
- La conectividad celular y la configuración del APN en la SIM/perfil siguen siendo importantes para asegurar que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte y los campos de telemetría disponibles; siempre verifique la versión de firmware del dispositivo durante la integración.
- Las revisiones de hardware y las variantes regionales pueden alterar las bandas celulares soportadas o la funcionalidad BLE, lo que indirectamente afecta el reporte.
- Las herramientas de configuración o aprovisionamiento del fabricante pueden requerir que el dispositivo esté configurado para enviar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la ingestión por parte de Plaspy.
- La selección del transporte (UDP versus TCP) depende del soporte del dispositivo y debe coincidir con la configuración usada para alcanzar Plaspy.
- Las funciones asistidas por BLE y las líneas de tiempo de actividad pueden transmitirse como telemetría auxiliar y variar según el firmware.
- Valide la compatibilidad y el comportamiento más reciente consultando la documentación del fabricante antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración fluida, reportes confiables y una resolución de problemas más rápida para los rastreadores EV-201M usados con Plaspy. Saber qué envía el rastreador y cómo se conecta reduce conjeturas cuando los eventos o la telemetría no aparecen como se espera.

- Facilita la configuración correcta del dispositivo para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte preferido.
- Ayuda a diagnosticar problemas de conectividad confirmando si el dispositivo llega al endpoint de Plaspy y utiliza el transporte esperado.
- Permite ajustar los intervalos de reporte y las configuraciones de rastreo en vivo para equilibrar la vida útil de la batería y la oportunidad de las actualizaciones.
- Mejora la interpretación de la telemetría, como batería y eventos BLE, al revisar el comportamiento del dispositivo en Plaspy.
- Apoya la planificación sobre el impacto de actualizaciones de firmware, revisiones de hardware y despliegues con dispositivos mixtos.

## Por qué usar Plaspy con este protocolo

Usar el EV-201M con Plaspy brinda a dueños de mascotas y organizaciones una vista unificada de ubicaciones, telemetría y alertas junto con otros activos. Plaspy consolida rastreo en vivo, notificaciones de geocerca e historial de actividad del EV-201M para que los usuarios puedan monitorear mascotas en tiempo real y analizar el historial de ubicaciones y las líneas de actividad.

Para saber más sobre cómo Plaspy trabaja con rastreadores compatibles y confirmar la configuración del dispositivo y las mejores prácticas, visite https://www.plaspy.com. Para los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante para el EV-201M, verifique la información con el fabricante en http://www.eviewltd.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
