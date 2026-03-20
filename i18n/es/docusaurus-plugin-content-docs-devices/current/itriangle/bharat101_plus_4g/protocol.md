---
slug: /itriangle/bharat101_plus_4g/protocol
id: bharat101_plus_4g-protocol
sidebar_label: Protocol
title: iTriangle - Bharat101 Plus 4G Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del rastreador iTriangle Bharat101 Plus 4G y su comunicación con Plaspy para seguimiento de flotas en tiempo real
keywords:
  - protocolo iTriangle Bharat101 Plus 4G
  - protocolo GPS Bharat101 Plus 4G
  - protocolo rastreador GPS iTriangle
  - compatibilidad Bharat101 Plus Plaspy
  - protocolo de comunicación rastreador GPS
  - protocolo de rastreo de flotas iTriangle
  - resumen protocolo AIS 140 rastreador
  - protocolo rastreador GPS 4G Plaspy
  - protocolo telemetría vehicular iTriangle
  - detección de protocolo rastreador Plaspy
---

# iTriangle - Bharat101 Plus 4G Protocolo

Esta página ofrece un resumen público y de alto nivel sobre el contexto del protocolo de comunicación del iTriangle Bharat101 Plus 4G cuando se integra con Plaspy. Explica cómo el dispositivo transmite posición y telemetría de forma que resulte útil para integradores de sistemas, responsables de flota y técnicos que configuran el rastreo compatible con Plaspy. El contenido se centra en hechos públicos sobre conectividad y comportamiento del protocolo sin exponer detalles privados o implementaciones específicas.

Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Para la integración con Plaspy el endpoint de la plataforma es d.plaspy.com y la IP del servidor es 54.85.159.138, usando el puerto 8888. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello verifique los detalles específicos del equipo en la documentación oficial del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del Bharat101 Plus 4G es el mecanismo que entrega la posición GNSS, señales de eventos y telemetría de sensores desde el dispositivo hacia Plaspy, de modo que los operadores de flota puedan monitorear activos casi en tiempo real. A grandes rasgos, el protocolo regula cómo el rastreador se identifica, reporta ubicación y estado, y notifica alarmas o eventos al endpoint en la nube.

- Permite la entrega de posición GNSS y telemetría de múltiples sensores a Plaspy para paneles en vivo y reproducciones históricas.
- Transporta notificaciones de eventos como encendido/apagado de ignición, entrada de pánico, alertas de manipulación y estado de inmovilizador remoto.
- Soporta reportes periódicos y transmisiones por evento para que los datos estén disponibles según exijan la conectividad y las políticas.
- Facilita señales de gestión remota del dispositivo enviadas desde el servidor al equipo cuando el firmware lo soporta.
- Funciona sobre canales de transporte estándar para asegurar conectividad en redes 4G con opciones de respaldo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y determina automáticamente el manejo correcto para cada modelo de rastreador y variante de firmware. Cuando un dispositivo correctamente configurado reporta al endpoint de Plaspy, la plataforma asocia el tráfico entrante con el manejo de protocolo apropiado sin que el usuario deba seleccionar manualmente el protocolo.

- Plaspy usa el endpoint único d.plaspy.com y la IP del servidor 54.85.159.138 en el puerto 8888 para las conexiones de los dispositivos.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y comienza a reportar.
- Debido a que la detección es automática, la mayoría de los usuarios no necesitan elegir un ajuste de protocolo dentro de Plaspy si el dispositivo apunta correctamente al endpoint de la plataforma.
- La detección cubre variantes comunes de transporte y características básicas de identificación que suministra el rastreador.

## Contexto de transporte y conexión

La selección del transporte y la configuración del endpoint son consideraciones clave al apuntar un Bharat101 Plus 4G hacia Plaspy. El rastreador puede configurarse para reportar mediante UDP o TCP según la configuración del equipo, las condiciones de la red y las capacidades del firmware. Para integraciones con Plaspy, el endpoint y el puerto estándar son consistentes entre dispositivos.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- El dispositivo puede apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 como endpoint de reporte.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados, eliminando la necesidad de exponer múltiples puertos de servicio.
- La elección del transporte (UDP vs TCP) puede afectar el comportamiento de entrega bajo condiciones de red adversas; elija la opción que se alinee con las recomendaciones del firmware del dispositivo.
- Asegúrese de que el APN y la configuración celular del equipo sean correctos para que pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar las funciones disponibles y el comportamiento de los reportes; verifique la versión de firmware del dispositivo al diagnosticar problemas de integración.
- Revisiones de hardware o módulos opcionales (por ejemplo accesorios BLE o interfaces para sensores externos) pueden introducir diferencias en la disponibilidad de telemetría.
- Algunas funciones, como control remoto del inmovilizador o integraciones avanzadas de sensores, dependen tanto de la capacidad del firmware como del cableado físico o la configuración correcta de los sensores.
- La selección del transporte entre TCP y UDP se realiza en el dispositivo; consulte las guías de configuración del fabricante para los ajustes recomendados.
- La detección automática de Plaspy cubre muchas variantes comunes, pero confirme que el dispositivo está reportando al endpoint de Plaspy durante el aprovisionamiento.
- Siempre contraste las notas de lanzamiento del fabricante para cambios específicos de protocolo o nuevo comportamiento de firmware.

## Por qué es importante entender el protocolo

Comprender cómo el rastreador se comunica con Plaspy mejora el éxito en la configuración, reduce el tiempo de resolución de problemas y ayuda a mantener un rastreo confiable durante el ciclo de vida del dispositivo. Incluso con detección automática, conocer el transporte, los eventos y los modos de falla comunes facilita una operación efectiva.

- Aprovisionamiento más rápido verificando APN, modo de transporte y que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Resolución de problemas más clara cuando faltan telemetría o eventos, enfocándose en conectividad, estado del firmware y cableado de entradas para alarmas.
- Mejor planificación del uso de funciones como control de inmovilizador, emparejamiento de sensores BLE y comportamiento de sincronización de datos sin conexión.
- Decisiones informadas sobre actualizaciones de firmware y compatibilidad con funciones de Plaspy antes de desplegar a escala.
- Mayor confiabilidad operativa mediante adecuada configuración del dispositivo, pruebas y validaciones periódicas.

## Por qué usar Plaspy con este protocolo

Usar el Bharat101 Plus 4G con Plaspy ofrece a las organizaciones una vía práctica para combinar hardware certificado AIS 140 con una plataforma en la nube que ingiere ubicación y telemetría para visibilidad operativa. La ingestión por parte de Plaspy de posición, eventos y datos de sensores permite reproducir rutas, generar alertas y mostrar paneles de telemetría que ayudan a las flotas a gestionar seguridad, cumplimiento y flujos de trabajo anti‑robo.

Si desea saber más sobre cómo Plaspy gestiona integraciones de dispositivos y capacidades de plataforma, visite https://www.plaspy.com. Para las descripciones de protocolo específicas del dispositivo, notas de firmware y guías de instalación más recientes del Bharat101 Plus 4G, confirme los detalles con el fabricante en https://www.itriangle.net/. El soporte de protocolo, el comportamiento del firmware y la implementación del equipo pueden cambiar con el tiempo, así que verifique siempre la información más reciente con la documentación oficial del fabricante.
