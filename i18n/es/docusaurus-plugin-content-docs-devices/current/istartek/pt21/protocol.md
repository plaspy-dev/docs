---
slug: /istartek/pt21/protocol
id: pt21-protocol
sidebar_label: Protocol
title: iStartek - PT21 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el PT21 de iStartek con Plaspy y habilitar rastreo en tiempo real y alertas
keywords:
  - protocolo iStartek PT21
  - rastreador GPS PT21
  - iStartek PT21 Plaspy
  - protocolo de comunicación PT21
  - protocolo de rastreo PT21
  - protocolo GPS iStartek
  - rastreador GPRS PT21
  - rastreador de activos pequeños PT21
  - rastreador SOS con voz PT21
  - posicionamiento híbrido PT21
---

# iStartek - Protocolo PT21

Esta página documenta el contexto público del protocolo para usar el iStartek PT21 con Plaspy. Se centra en cómo se comunica el dispositivo a alto nivel, qué esperar al integrar el PT21 en Plaspy y consideraciones prácticas para la configuración y operación. El objetivo es ofrecer información clara y no sensible que facilite la configuración y resolución de problemas, a la vez que se recomienda consultar la documentación oficial del fabricante para detalles específicos de firmware.

El PT21 es un rastreador compacto 2G/GPRS con posicionamiento híbrido y funciones de audio bidireccional que reporta ubicación, estado y alertas mediante canales celulares estándar. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según el firmware, la revisión de hardware y la implementación del fabricante. El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 usando el puerto 8888 para el reporte de dispositivos. El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según lo requiera el rastreador y el entorno de red.

## Resumen del protocolo

El protocolo de reporte del PT21 define cómo el rastreador envía telemetría, posiciones y notificaciones de eventos a plataformas en la nube como Plaspy. Para efectos de integración, el protocolo actúa como puente entre los sensores del dispositivo y el punto de ingestión de Plaspy, de modo que ubicación, alarmas y comandos simples se convierten en datos accionables dentro de los flujos de monitoreo.

- Permite reportes periódicos y por eventos para que Plaspy muestre posiciones en tiempo real y el historial.
- Transmite el estado del dispositivo y alarmas como SOS, batería baja, entrada/salida de geocerca y estado de conectividad.
- Soporta canales de transporte estándar (GPRS TCP/UDP y SMS) para enviar telemetría al endpoint de Plaspy.
- Permite que las funciones de audio bidireccional y monitoreo de voz se reflejen como eventos asociados o anexos en la plataforma.
- Provee reportes programados e historial de rutas para reproducción y auditoría dentro de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes en un único endpoint compartido y determina automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo cuando el dispositivo está correctamente apuntado a la plataforma. Configurar el rastreador para que reporte al servidor de Plaspy suele ser suficiente para que la plataforma reconozca el flujo entrante.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para las conexiones de dispositivos.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía reportes válidos al endpoint compartido.
- Si el rastreador soporta tanto TCP como UDP, configure el equipo para usar el transporte que mejor se adapte a su red o proveedor de SIM.
- La selección manual del protocolo en Plaspy rara vez es necesaria cuando el dispositivo está reportando correctamente al endpoint de Plaspy.

## Transporte y contexto de conexión

El PT21 puede entregar reportes sobre GPRS celular usando modos de transporte comunes. En la práctica esto implica apuntar el rastreador a la dirección del servidor compartido de Plaspy y usar el canal de transporte soportado por la implementación. Mantenga el contexto de conexión simple y alinee la configuración del rastreador con su plan de datos SIM y la cobertura de la red móvil.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Los dispositivos pueden apuntar a d.plaspy.com o 54.85.159.138 como host de destino para el reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la incorporación y la configuración a escala de flota.
- SMS suele estar disponible como canal de respaldo para comandos o envío de posición cuando no hay datos GPRS.
- Asegúrese de que el operador SIM soporte GPRS 2G donde sea necesario y verifique la cobertura para un reporte confiable.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento exacto de los reportes y los campos de telemetría disponibles; siempre revise las notas de la versión del firmware.
- Las revisiones de hardware y las SKU regionales pueden implementar pequeñas diferencias en los transportes soportados o en las funciones opcionales.
- El PT21 depende de GPRS 2G para el envío de datos; la disponibilidad de la red y las políticas de desmantelamiento de operadores pueden afectar la operación a largo plazo en algunas regiones.
- La selección del transporte (TCP vs UDP) puede influir en la fiabilidad y el consumo de batería; elija el transporte que equilibre capacidad de respuesta y ahorro energético para su caso de uso.
- Los comandos de configuración del fabricante o los formatos SMS pueden variar según la compilación del firmware; valide contra la documentación más reciente de iStartek.
- En caso de duda, confirme la compatibilidad apuntando un solo dispositivo a Plaspy y verificando reportes en vivo antes de un despliegue amplio.

## Por qué es importante entender el protocolo

Conocer lo básico sobre cómo se comunica el PT21 facilita una configuración fluida, una resolución de problemas más rápida y un comportamiento predecible en producción. Incluso con la detección automática de Plaspy, la comprensión del transporte, la cadencia de reportes y los tipos de eventos reduce el tiempo de integración y mejora la confiabilidad del monitoreo.

- Ayuda a diagnosticar problemas de conectividad verificando si el equipo reporta correctamente a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Permite decisiones informadas sobre TCP frente a UDP según las condiciones de red y consideraciones de batería.
- Permite alinear intervalos de reporte y configuraciones de geocerca con presupuestos de datos y necesidades operativas.
- Facilita la resolución de fallas en flujos de alarma y SOS para que los eventos críticos aparezcan correctamente en Plaspy.
- Mejora la planificación de actualizaciones de firmware y las pruebas de compatibilidad en despliegues mixtos.

## Por qué usar Plaspy con este protocolo

Usar el iStartek PT21 con Plaspy ofrece un camino directo hacia la visualización en mapa, alertas y reproducción histórica para necesidades de rastreo de activos compactos y personal. El posicionamiento híbrido y el audio bidireccional del PT21 se integran bien con la ingestión de telemetría de Plaspy para dar visibilidad al equipo, contexto de incidentes y notificaciones accionables sin agregar middleware.

El endpoint compartido de Plaspy y la detección automática de protocolos reducen la carga de configuración, y el uso consistente del puerto 8888 para todos los dispositivos simplifica las implementaciones a gran escala. Para saber más sobre cómo Plaspy puede trabajar con dispositivos como el PT21, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo con el fabricante en https://istartek.com/.
