---
slug: /dct/syrus_obdii_cat1/protocol
id: syrus_obdii_cat1-protocol
sidebar_label: Protocol
title: DCT - SYRUS OBDII-CAT1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar DCT SYRUS OBDII-CAT1 con Plaspy, con contexto de conexión y notas de compatibilidad
keywords:
  - protocolo DCT SYRUS OBDII CAT1
  - protocolo GPS SYRUS OBDII CAT1
  - SYRUS OBDII CAT1 Plaspy
  - protocolo de comunicación SYRUS OBDII CAT1
  - protocolo de rastreo SYRUS OBDII CAT1
  - integración de dispositivos Plaspy
  - protocolo telemático OBDII
  - telemetría de diagnóstico vehicular
  - rastreador OBDII plug and play
  - protocolo de seguimiento de flotas
---

# DCT - SYRUS OBDII-CAT1 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador DCT SYRUS OBDII-CAT1 con Plaspy. Se centra en cómo el dispositivo reporta ubicación GNSS, telemetría OBDII y eventos del acelerómetro hacia Plaspy en términos generales y no sensibles, pensados para operadores de flotas e integradores. La información aquí le ayudará a comprender cómo se comunica el rastreador con una plataforma en la nube y qué verificar durante el despliegue.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto en tiempo de ejecución y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que considere esta guía como contexto de protocolo y no como referencia de firmware.

## Resumen del protocolo

El rastreador SYRUS OBDII-CAT1 utiliza su protocolo de reporte para enviar soluciones GNSS, parámetros OBDII y eventos de movimiento a través de redes celulares, de modo que una plataforma en la nube como Plaspy pueda ingerir y mostrar esos datos. El protocolo define cómo el dispositivo se identifica, cuándo envía actualizaciones y qué telemetría del dispositivo llega a la plataforma.

- Permite reportes periódicos y por evento de la ubicación GPS y la telemetría del vehículo a un servidor remoto.
- Transporta valores estándar de PIDs OBDII y datos de diagnóstico vehicular que Plaspy puede usar para monitoreo de salud y combustible.
- Transmite eventos derivados del acelerómetro para detectar frenadas bruscas e impactos, apoyando el análisis de conducta de conducción.
- Permite que el rastreador se identifique ante la plataforma en la nube para que Plaspy asocie los mensajes entrantes con el registro de vehículo correcto.
- Soporta aprovisionamiento remoto del dispositivo y ajustes configurables de intervalo de reporte mediante el firmware y las herramientas del fabricante.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría de muchos modelos de rastreadores y detecta automáticamente el protocolo cuando los dispositivos están configurados para reportar al endpoint de Plaspy. En la mayoría de los despliegues no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta correctamente y utiliza los ajustes de transporte compatibles.

- Plaspy expone un único endpoint compartido para reportes de dispositivos con el fin de simplificar los despliegues.
- La plataforma escucha en el puerto 8888 las conexiones y la telemetría entrante de los dispositivos.
- Plaspy determina automáticamente el protocolo del tracker entrante y enruta los datos hacia la tubería de ingestión adecuada.
- En configuraciones típicas, el dispositivo es el único componente que necesita configuración explícita para apuntar al endpoint de Plaspy.
- Si un dispositivo envía telemetría e identificación válidas y reconocibles, Plaspy lo asociará al registro de dispositivo correcto sin selección manual de protocolo.

## Contexto de transporte y conexión

El contexto de conexión explica cómo el rastreador alcanza el servidor de Plaspy y qué opciones de transporte se usan comúnmente. El SYRUS OBDII-CAT1 puede operar sobre redes celulares y soporta reportes a través de capas de transporte estándar según la configuración del dispositivo y la disponibilidad de red.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las plantillas de aprovisionamiento.
- Los dispositivos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o directamente a la dirección IP 54.85.159.138 según políticas de red o DNS.
- El puerto 8888 es el puerto común usado por todos los dispositivos soportados por Plaspy, lo que simplifica la configuración de firewalls y operadores.
- Elija UDP para reportes más livianos cuando esté soportado o TCP para entrega más fiable basada en sesiones, según las opciones de firmware del tracker.
- Asegúrese de que los datos celulares salientes y las reglas de firewall permitan tráfico hacia el endpoint de Plaspy en el puerto 8888 para que los reportes funcionen correctamente.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las plantillas de aprovisionamiento del fabricante pueden cambiar los campos de telemetría disponibles y el comportamiento de reporte entre lotes.
- Las revisiones de hardware pueden alterar las capacidades de los sensores o la cobertura de PIDs OBDII, por lo que valide la revisión específica del dispositivo frente a los diagnósticos esperados.
- Algunos operadores o variantes regionales pueden afectar el desempeño de conectividad; se recomienda realizar pruebas en la red objetivo antes de un despliegue a gran escala.
- La elección de transporte entre UDP y TCP puede afectar las garantías de entrega y debe coincidir con la configuración del dispositivo usada en producción.
- Confirme qué PIDs OBDII estándar son compatibles con el firmware del SYRUS OBDII-CAT1 si requiere parámetros de motor específicos para su monitoreo.
- Siempre contraste el comportamiento del dispositivo con la documentación oficial del fabricante para confirmar las funciones soportadas según su caso de uso.

## Por qué es importante entender el protocolo

Tener una comprensión clara del protocolo de comunicación del dispositivo ayuda a asegurar una configuración correcta, acelerar la resolución de problemas y mantener una operación confiable a largo plazo en Plaspy. Saber cómo reporta el rastreador y qué espera la plataforma reduce la fricción en la integración y mejora la visibilidad de la flota.

- Acelera el despliegue inicial al aclarar qué ajustes deben configurarse en el tracker para conectar con Plaspy.
- Ayuda a diagnosticar problemas de conectividad al acotar si la causa es el transporte, DNS o el comportamiento del firmware.
- Permite establecer reglas de firewall y de operador apropiadas al documentar el dominio de destino y los requisitos de puerto.
- Orienta las expectativas sobre la telemetría disponible y la cadencia de reporte según el firmware y las capacidades del dispositivo.
- Apoya la planificación de escala al estandarizar la configuración de dispositivos y asegurar un comportamiento consistente en toda la flota.

## Ventajas de usar Plaspy con este protocolo

Usar el SYRUS OBDII-CAT1 con Plaspy ofrece a los operadores de flotas un camino simplificado para recopilar ubicación vehicular, diagnósticos OBDII y datos de acelerómetro orientados a eventos en un entorno centralizado para visualización y flujos de trabajo. La naturaleza plug and play del dispositivo reduce el tiempo de instalación, mientras que Plaspy aporta un punto de ingestión compartido y servicios de plataforma para convertir la telemetría sin procesar en información operativa.

Para saber más sobre Plaspy y cómo funciona con una amplia variedad de rastreadores visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y revisiones de hardware consulte al fabricante en https://www.digitalcomtech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden evolucionar con el tiempo.
