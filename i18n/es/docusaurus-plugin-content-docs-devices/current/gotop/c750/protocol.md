---
slug: /gotop/c750/protocol
id: c750-protocol
sidebar_label: Protocol
title: GOTOP - C750 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador OBD GOTOP C750 y cómo transmite ubicación y eventos a Plaspy
keywords:
  - GOTOP C750
  - protocolo GOTOP C750
  - protocolo GPS GOTOP C750
  - comunicación GOTOP C750
  - protocolo de rastreo GOTOP C750
  - rastreador OBD C750
  - rastreador compatible con Plaspy
  - rastreo de flotas C750
  - telemetría vehicular C750
  - rastreador GPS GOTOP
---

# GOTOP - Protocolo C750

Esta página resume el contexto público del protocolo para usar el rastreador OBD GOTOP C750 con Plaspy. Se centra en cómo el dispositivo envía datos de ubicación y eventos a Plaspy, el papel de las configuraciones de conexión compartidas y los aspectos prácticos de integrar unidades C750 sin exponer detalles sensibles de implementación.

El C750 es un rastreador OBD II de instalación plug and play que usa comunicaciones GSM GPRS y un receptor GNSS U‑Blox para el posicionamiento. Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos del firmware más recientes, consulte la documentación del fabricante.

## Resumen del protocolo

A alto nivel, el protocolo de reporte permite que el C750 establezca un enlace de red, se identifique y entregue telemetría de ubicación y eventos que Plaspy puede ingerir en tableros y reglas de alerta. El contexto público del protocolo cubre los métodos de reporte del dispositivo y los tipos de eventos y telemetría que típicamente se envían al servidor, en lugar de los detalles internos de los paquetes.

- Permite reporte de posición en tiempo real desde el C750 hacia Plaspy para visualización en mapa e historial.
- Transporta notificaciones de eventos como exceso de velocidad, salida de geocerca, movimiento, vibración y corte de alimentación.
- Transmite telemetría relevante derivada del OBD cuando está disponible, de modo que Plaspy pueda correlacionar el estado del vehículo con la ubicación.
- Soporta patrones de reporte alternativos como reporte continuo por GPRS y envío por SMS bajo demanda para verificación o configuración.
- Permite que el dispositivo presente información identificadora para que Plaspy pueda asociar los registros del equipo con los flujos de datos entrantes.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente los protocolos de rastreadores cuando un dispositivo está configurado para reportar al endpoint de Plaspy. En la mayoría de los despliegues usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el C750 está apuntando al servidor Plaspy con la configuración de conexión correcta. La detección se realiza a nivel de plataforma, por lo que la configuración se centra en la correcta configuración de red en el dispositivo.

- Plaspy usa un endpoint de servidor compartido para el reporte de dispositivos en d.plaspy.com.
- El servidor de Plaspy también es accesible en 54.85.159.138 para configuración por IP directa.
- Todos los dispositivos reportan al mismo puerto de Plaspy que es 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de red.
- Cuando el C750 está correctamente apuntado al endpoint de Plaspy, la plataforma intenta identificar automáticamente el protocolo del dispositivo, por lo que normalmente no es necesaria la selección manual.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el rastreador se comunica a través de redes móviles para alcanzar Plaspy. El C750 utiliza GSM GPRS para el transporte de datos y puede reportar eventos a Plaspy de forma continua vía GPRS o enviar mensajes bajo demanda por SMS. Para reporte directo al servidor, normalmente se requiere configurar el dispositivo para que apunte a Plaspy.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- El puerto de reporte usado por Plaspy es 8888 y este mismo puerto se emplea en todos los dispositivos compatibles.
- El C750 soporta reporte sobre UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración del equipo.
- El seguimiento continuo normalmente se realiza por GPRS mientras que el SMS se usa a menudo para consultas de ubicación bajo demanda o como notificación de respaldo.
- Verifique la configuración de APN y GPRS en el dispositivo para que las conexiones salientes al endpoint de Plaspy tengan éxito en su entorno de red.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo un dispositivo formatea o secuencia los reportes; siempre confirme el comportamiento para su versión de firmware.
- Las revisiones de hardware o las variantes regionales pueden alterar los transportes soportados o los eventos disponibles.
- Las opciones de configuración del fabricante pueden afectar si el dispositivo usa TCP o UDP por defecto.
- La disponibilidad de telemetría derivada del OBD depende del soporte OBD del vehículo y del mapeo de PIDs que implemente el firmware del dispositivo.
- El comportamiento y los formatos de SMS pueden variar; son útiles para diagnóstico pero están separados del reporte por GPRS al servidor.
- Valide cualquier despliegue a gran escala con un grupo piloto pequeño para confirmar un reporte consistente a Plaspy.

## Por qué es importante entender el protocolo

Comprender el contexto público del protocolo ayuda a asegurar una configuración confiable y una resolución de problemas más rápida al integrar el C750 con Plaspy. Conocer qué transportes puede usar el dispositivo, cómo reporta eventos y qué factores influyen en su comportamiento reduce la fricción en el despliegue y mejora la disponibilidad operativa.

- Confirma que los dispositivos están apuntando al endpoint y puerto correctos de Plaspy para la detección automática.
- Ayuda a mapear eventos del dispositivo, como exceso de velocidad o corte de energía, a reglas de alerta y flujos de notificación en Plaspy.
- Orienta la decisión sobre el uso de TCP o UDP según la estabilidad de la red y el comportamiento del operador.
- Informa la planificación de actualizaciones de firmware para que pueda probar cambios en el protocolo antes de un despliegue masivo.
- Soporta pasos de diagnóstico como verificar la configuración de APN y confirmar que el dispositivo puede alcanzar d.plaspy.com o 54.85.159.138.

## Por qué usar Plaspy con este protocolo

Combinar el GOTOP C750 con Plaspy ofrece a las organizaciones un camino sencillo desde la instalación plug and play hasta datos accionables de ubicación y eventos. La forma OBD II del C750, su reporte por GSM GPRS y la batería de respaldo para reportes por corte de alimentación lo hacen adecuado para visibilidad de flotas, monitoreo antirrobo y recopilación simple de telemetría. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolo reducen la carga de configuración y aceleran el despliegue en muchos vehículos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware específica del dispositivo con el fabricante en https://www.gotop.cc/ antes de despliegues a gran escala.
