---
slug: /topshine/mt01w_4g/protocol
id: mt01w_4g-protocol
sidebar_label: Protocol
title: TopShine - MT01W-4G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del TopShine MT01W-4G que explica cómo se comunica con Plaspy para flotas y despliegues con video
keywords:
  - Protocolo TopShine MT01W-4G
  - Protocolo GPS TopShine MT01W-4G
  - Comunicación TopShine MT01W-4G
  - Compatibilidad MT01W-4G con Plaspy
  - Protocolo de rastreo MT01W-4G
  - Protocolo de dispositivo Plaspy
  - Telemetría de video de rastreador GPS
  - Rastreo de flotas TopShine
  - Protocolo de rastreador vehicular
  - Rastreador de video a bordo
---

# TopShine - Protocolo MT01W-4G

Esta página describe el contexto público del protocolo para integrar el rastreador TopShine MT01W-4G con Plaspy. Incluye el papel general del dispositivo en la comunicación, cómo Plaspy recibe los informes y las configuraciones de transporte habitualmente usadas para conectar unidades MT01W-4G a Plaspy, sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso este documento se centra en el contexto público y no sensible necesario para una integración y solución de problemas exitosas.

## Descripción general del protocolo

El protocolo de comunicación del MT01W-4G define cómo el rastreador envía posición, telemetría, alertas y estados a un servidor remoto, y cómo el servidor puede emitir acciones remotas cuando están soportadas. En el MT01W-4G, los flujos de video y la telemetría coexisten en el dispositivo, y el protocolo asegura que los datos de ubicación y eventos lleguen a la plataforma de flotas para su mapeo, alertas y reproducción histórica.

- Permite que el MT01W-4G reporte posiciones GPS, telemetría y alertas de eventos a Plaspy para monitoreo en tiempo real.
- Transporta identificación del dispositivo e información de estado para que Plaspy asocie los informes entrantes con el vehículo y la configuración correctos.
- Transmite eventos de alarma como SOS, alertas de colisión, salidas de geocerca y eventos de combustible para activar notificaciones y flujos de trabajo en la plataforma.
- Soporta la telemetría necesaria para reportes de motor y estado del conductor que Plaspy usa en análisis e indicadores operativos.
- Funciona junto al subsistema de video del dispositivo para que video y trazas GPS queden sincronizados en la vista de la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy recibe informes entrantes en un endpoint de red compartido y determina automáticamente qué protocolo utiliza cada rastreador. Cuando el MT01W-4G está configurado para reportar a Plaspy, normalmente no es necesario seleccionar manualmente un protocolo dentro de la interfaz de Plaspy, siempre que el dispositivo esté enviando datos al servidor y puerto correctos.

- Plaspy usa un endpoint y puerto comunes para todos los dispositivos compatibles para simplificar la configuración.
- La plataforma inspecciona las conexiones entrantes para identificar el dispositivo que reporta y mapea los mensajes al parser adecuado de forma automática.
- La identificación correcta del dispositivo depende de que el rastreador envíe los campos públicos de identificación esperados, tal como los documenta el fabricante.
- Si un equipo no es detectado automáticamente, la primera recomendación es verificar la configuración de transporte y los parámetros del dispositivo hacia el endpoint de Plaspy.
- Plaspy ofrece registros y diagnósticos de conexión para ayudar a verificar que el MT01W-4G esté llegando a la plataforma cuando reporta al endpoint compartido.

## Transporte y contexto de conexión

El MT01W-4G puede configurarse para usar transportes de red estándar para enviar telemetría y alarmas. Plaspy acepta informes de dispositivos en el mismo puerto para todos los equipos, y el MT01W-4G puede apuntar al dominio de Plaspy o a una IP directa según las preferencias de despliegue y la disponibilidad de DNS.

- Los dispositivos reportan al servidor de Plaspy en d.plaspy.com o directamente a 54.85.159.138.
- El puerto común de Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos Plaspy usan ese mismo puerto.
- El MT01W-4G puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la confiabilidad de transporte deseada.
- La selección entre UDP o TCP depende del entorno y de las opciones de firmware del rastreador; verifique los ajustes del equipo antes del despliegue.
- Consideraciones de red como NAT del operador, reglas de firewall y configuración del APN pueden afectar la conectividad hacia d.plaspy.com o la IP del servidor.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden modificar el ritmo de mensajes, los campos disponibles y las características opcionales; confirme la versión de firmware del rastreador al validar su comportamiento.
- Revisiones de hardware u módulos opcionales (por ejemplo soporte de cámara de video o sensores de combustible) pueden añadir o cambiar los campos de telemetría que expone el dispositivo.
- La elección del transporte entre UDP y TCP puede afectar las características de entrega; seleccione el transporte que mejor se ajuste a sus necesidades de fiabilidad y latencia.
- Las configuraciones de reporte por defecto del fabricante pueden apuntar a la plataforma del proveedor; actualice la dirección del servidor a d.plaspy.com o 54.85.159.138 y el puerto 8888 para la integración con Plaspy.
- Plaspy detecta automáticamente el protocolo en las conexiones entrantes, pero se requiere un ID de dispositivo correcto y una cadencia de reporte adecuada para una detección fiable.
- Para funciones avanzadas como comandos remotos o inmovilización, asegúrese de que el firmware del dispositivo soporte el comportamiento y que la funcionalidad esté habilitada.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el MT01W-4G ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y mantener un funcionamiento predecible a largo plazo cuando el dispositivo está emparejado con Plaspy. Conocer el contexto público del protocolo reduce fricciones en la integración y facilita el diagnóstico de problemas de conectividad o de mapeo de datos.

- Acelera el aprovisionamiento inicial al confirmar que el rastreador apunta al endpoint y transporte correctos de Plaspy.
- Ayuda a aislar problemas de red como bloqueos por parte del operador, reglas de firewall o configuraciones APN incorrectas que impidan que los informes lleguen a Plaspy.
- Permite el mapeo consistente de eventos del dispositivo a alertas de la plataforma para que los flujos de alarma e inmovilización funcionen como se espera.
- Mejora la planificación de mantenimiento al clarificar qué cambios de firmware o hardware podrían afectar el reporte y la disponibilidad de funciones.
- Facilita conversaciones informadas con el fabricante cuando se requiera confirmar comportamientos específicos del proveedor.

## Por qué usar Plaspy con este protocolo

Emparejar el TopShine MT01W-4G con Plaspy brinda a los operadores de flotas visibilidad integrada que combina ubicación GPS, telemetría del vehículo y video a bordo en una única vista operacional. Esta combinación es útil para organizaciones que requieren evidencia sincronizada en incidentes, monitoreo de conductores y alertas accionables para mejorar la seguridad y el desempeño operativo.

Plaspy simplifica la conectividad de los dispositivos usando un endpoint y puerto compartidos y detectando automáticamente el protocolo del rastreador cuando el MT01W-4G reporta a la plataforma. Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos más recientes sobre el protocolo del dispositivo, notas de firmware y documentación del fabricante, consulte TopShine en https://www.gztopshine.com/.
