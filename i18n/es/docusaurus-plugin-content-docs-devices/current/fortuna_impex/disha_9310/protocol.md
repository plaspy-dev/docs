---
slug: /fortuna_impex/disha_9310/protocol
id: disha_9310-protocol
sidebar_label: Protocol
title: Fortuna Impex - Disha 9310 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública sobre el protocolo del rastreador Disha 9310 y su comunicación con Plaspy
keywords:
  - Protocolo Fortuna Impex Disha 9310
  - Protocolo GPS Fortuna Impex Disha 9310
  - Compatibilidad Disha 9310 con Plaspy
  - Protocolo de comunicación de rastreadores GPS
  - Protocolo de seguimiento de vehículos
  - Compatibilidad de seguimiento Disha 9310
  - Protocolo de dispositivo Plaspy
  - Rastreo de flotas Disha 9310
  - Integración de rastreadores Fortuna Impex
  - Protocolo de telemetría Disha 9310
---

# Fortuna Impex - Protocolo Disha 9310

Esta página describe el contexto público del protocolo para usar el rastreador Fortuna Impex Disha 9310 con Plaspy. Explica, a alto nivel, cómo el dispositivo comunica con Plaspy, qué ajustes de conexión se esperan en el lado de Plaspy y qué aspectos del protocolo del rastreador son relevantes para una integración y operación correctas. Esta guía está pensada como información pública y no sensible, no como una especificación completa del protocolo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del Disha 9310 puede variar según la versión de firmware, la revisión de hardware o decisiones de implementación del fabricante. El Disha 9310 ofrece seguimiento en tiempo real e histórico, alertas en tiempo real y reportes programados, y cuenta con diseño de antenas GPS y GPRS internas que simplifican la instalación y reducen la vulnerabilidad de una antena externa.

## Resumen del protocolo

El rastreador Disha 9310 envía telemetría e información de eventos a un servidor mediante el protocolo de reporte implementado por el fabricante. En términos generales, el protocolo define cómo el dispositivo se identifica, cómo se codifican los datos de ubicación y eventos, y cómo el dispositivo y el servidor intercambian acuses de recibo o respuestas cuando están soportados.

- Permite que el rastreador envíe actualizaciones de ubicación y notificaciones de eventos a un servidor remoto para seguimiento en tiempo real y registro histórico.
- Proporciona identificación del dispositivo para que Plaspy pueda asociar los datos entrantes con el vehículo o activo correcto.
- Transporta información de estado y alertas como encendido, movimiento o eventos configurados para notificaciones oportunas.
- Soporta transporte sobre canales móviles de datos estándar para que el Disha 9310 pueda reportar mientras está en movimiento.
- Permite que servidores como Plaspy procesen telemetría útil para mapeo, reportes y alertas sin exponer detalles internos del firmware.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint compartido y determina automáticamente el protocolo del rastreador a partir de las conexiones y las cargas útiles entrantes. Por lo general, usted no necesita seleccionar un protocolo manualmente dentro de Plaspy cuando el Disha 9310 está configurado para reportar al endpoint de Plaspy con los ajustes de conexión correctos.

- Plaspy escucha en un puerto común que se utiliza para todos los dispositivos y protocolos compatibles.
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy recibe datos en el puerto 8888 y utiliza ese puerto compartido para todos los modelos para simplificar la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador según las características de la conexión entrante y la carga útil.
- Si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy, normalmente no se requiere selección manual del protocolo.

## Transporte y contexto de conexión

El contexto de conexión se concentra en cómo el Disha 9310 llega a los servidores de Plaspy más que en detalles internos de los paquetes. El rastreador puede configurarse para usar cualquiera de los tipos de transporte comunes que soportan muchos dispositivos, y puede apuntar a Plaspy usando el dominio o la dirección IP.

- Los equipos pueden configurarse para reportar vía UDP o TCP en el puerto 8888 según los ajustes del dispositivo y las capacidades del firmware.
- El Disha 9310 puede apuntar al dominio del servidor de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138 para el reporte.
- El puerto 8888 es el utilizado por Plaspy para reportes de dispositivos y es el mismo puerto que se usa para todos los dispositivos soportados por la plataforma.
- La elección entre UDP y TCP afecta la confiabilidad y el comportamiento de retransmisión en la capa de transporte, pero no modifica el papel público del protocolo del rastreador en la identificación y envío de datos.
- Asegúrese de que haya conectividad de datos móviles y de que la configuración APN sea correcta en el dispositivo para que pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el conjunto de comandos soportados, los intervalos de reporte y los formatos de eventos; tome nota del nivel de firmware del rastreador al solucionar problemas.
- Diferentes revisiones de hardware o variantes regionales del Disha 9310 pueden implementar ligeras variaciones en cómo se codifican los campos de datos o en qué funciones opcionales están disponibles.
- La configuración del fabricante (por ejemplo servidor por defecto, tipo de transporte o intervalo de reporte) debe actualizarse para apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para la integración con Plaspy.
- El uso de UDP frente a TCP debe coincidir con la configuración del dispositivo y con cualquier restricción de red del despliegue; su elección puede influir en las características de entrega.
- Valide funciones especiales como activación por comandos SMS o configuración remota con la documentación oficial de Fortuna Impex antes de dependender de ellas en producción.
- Si observa comportamientos inesperados, confirme la revisión de firmware y consulte las notas de la versión del fabricante por cambios en el protocolo.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del Disha 9310 ayuda en la configuración inicial, en la resolución de problemas de conectividad intermitente y en asegurar que el dispositivo entregue telemetría precisa con el tiempo. Saber cómo reporta el rastreador, qué transporte utiliza y qué ajustes de servidor son requeridos reduce el tiempo de puesta en marcha y favorece operaciones estables.

- Asegura que el dispositivo apunte al endpoint y puerto correctos de Plaspy para que los datos se reciban de forma fiable.
- Ayuda a aislar si los problemas son de capa de red o están ligados al firmware y la configuración del dispositivo.
- Facilita conversaciones informadas con el instalador del equipo o con el fabricante cuando el comportamiento difiera de lo esperado.
- Ayuda a planificar actualizaciones de firmware o reemplazos de hardware al comprender posibles cambios de protocolo.
- Soporta la configuración correcta de alertas y reportes que dependen de telemetría estructurada y oportuna.

## Por qué usar Plaspy con este protocolo

Usar el Fortuna Impex Disha 9310 con Plaspy puede ofrecer a organizaciones de servicios, reparto y transporte visibilidad consolidada de la ubicación, estado y eventos de sus vehículos. Plaspy ingiere la telemetría enviada por el rastreador y la presenta para monitoreo, reportes y flujos operativos, de modo que los equipos puedan optimizar el uso de activos y responder rápidamente a incidentes.

Plaspy simplifica la incorporación de dispositivos usando un puerto de reporte compartido y detección automática de protocolo; así, una vez que el Disha 9310 esté configurado para reportar a Plaspy puede empezar a enviar telemetría utilizable sin selección manual del protocolo. Para conocer más sobre Plaspy y cómo gestiona la conectividad de dispositivos y la administración de flotas visite https://www.plaspy.com. Por favor verifique los detalles más recientes sobre protocolos específicos del dispositivo, comportamiento de firmware e implementaciones del fabricante en el sitio oficial de Fortuna Impex http://fortunaindia.com/ ya que estos detalles pueden cambiar con el tiempo.
