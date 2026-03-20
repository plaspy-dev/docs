---
slug: /cantrack/g08l/protocol
id: g08l-protocol
sidebar_label: Protocol
title: CanTrack - G08L Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del CanTrack G08L y su comunicación con Plaspy para rastreo en vivo y telemetría de flotas
keywords:
  - protocolo CanTrack G08L
  - protocolo GPS CanTrack G08L
  - protocolo de comunicación G08L
  - protocolo de rastreo G08L
  - compatibilidad CanTrack Plaspy
  - protocolo de dispositivo Plaspy
  - protocolo rastreador GPS Plaspy
  - protocolo rastreador luz trasera
  - rastreo de flotas G08L
  - protocolo rastreador encubierto
---

# CanTrack - Protocolo G08L

Esta página ofrece una visión pública y de alto nivel del contexto del protocolo de comunicación para usar el CanTrack G08L con Plaspy. Se centra en cómo el dispositivo reporta GNSS, eventos de movimiento y telemetría de estado a Plaspy, así como en qué considerar al configurar la conectividad para rastreo en vivo, alertas y telemetría de flota. El G08L es un rastreador GPS tipo luz trasera de 4 pulgadas, construido alrededor del módulo Quectel BG95 con LTE y posicionamiento GPS y BeiDou, sensor de aceleración integrado, batería interna y protección IP67; esta guía explica cómo esos flujos de telemetría se entregan a una plataforma en la nube como Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para el G08L, el dispositivo puede estar configurado para reportar a través del enlace celular para que Plaspy reciba mensajes de ubicación, eventos y estado para paneles y alertas. Usted debe esperar que pequeñas diferencias de protocolo o actualizaciones de firmware del proveedor puedan cambiar la frecuencia de los mensajes y los tipos de evento disponibles.

## Resumen del protocolo

El protocolo del G08L define cómo el rastreador se identifica, reporta posición y eventos de sensores, y comunica la salud del dispositivo a un servicio backend como Plaspy. A nivel de documentación pública describimos el protocolo como el reporte de posición GNSS, eventos de movimiento, telemetría de batería y estado a un endpoint de servidor, de modo que Plaspy pueda convertir esas entradas en actualizaciones de mapa, alarmas e informes.

- Permite el reporte de posiciones GNSS y BeiDou para actualizaciones de ubicación en vivo y recorridos históricos.
- Transporta mensajes de eventos desde el sensor G integrado para detección de conducción brusca y choques.
- Transmite el estado del dispositivo, como nivel de batería, modo de energía y estado de conectividad, para soportar mantenimiento remoto.
- Proporciona la telemetría que Plaspy ingiere y mapea a alertas, geocercas e informes de comportamiento del conductor.
- Soporta desencadenantes y mensajes de estado para actualizaciones OTA cuando las herramientas del proveedor y el firmware del dispositivo lo permiten.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y usa esa información para identificar el tipo de dispositivo y la familia de protocolo. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy si el G08L está correctamente configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com para reporte y administración de dispositivos.
- La IP del servidor Plaspy es 54.85.159.138 y el puerto es 8888, por lo que los dispositivos pueden apuntar al dominio o a la IP.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las reglas de firewall.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega la telemetría al endpoint compartido, por lo que normalmente no es necesaria la selección manual del protocolo.

## Transporte y contexto de conexión

Las elecciones de conexión determinan cómo el G08L envía telemetría a Plaspy y qué configuraciones de red deben permitirse en firewalls y APN celulares. El G08L utiliza su radio LTE Cat M1 / Cat NB2 para acceder a Internet y luego abre una sesión TCP o UDP hacia el endpoint de Plaspy para el reporte.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP del servidor 54.85.159.138 según la preferencia del instalador.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para entregar telemetría a Plaspy.
- El uso de TCP suele proporcionar entrega de sesión más confiable, mientras que UDP puede usarse donde se prefiera menor overhead y el firmware del dispositivo lo soporte.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, una sola regla de salida en el firewall para el puerto 8888 es suficiente para la mayoría de las flotas.
- Confirme los requisitos de APN e IP de salida con su operador móvil para asegurar que el G08L pueda alcanzar d.plaspy.com o 54.85.159.138 desde el vehículo.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el ritmo de los mensajes, el conjunto de eventos reportados y los campos opcionales; consulte las notas de la versión del firmware del dispositivo para detalles.
- Revisiones de hardware o variantes de fabricación del G08L pueden alterar los sensores disponibles o el comportamiento de reporte por defecto.
- Las opciones de configuración del fabricante pueden permitir alternar entre UDP y TCP; verifique que el dispositivo esté establecido en el transporte que Plaspy espera o que su red permita ambos.
- Algunos tipos de eventos, como alarmas por choque o reportes de conducción brusca, dependen de la configuración y sensibilidad del sensor G que controla el proveedor.
- El comportamiento de las actualizaciones OTA y las capacidades de mantenimiento remoto están influenciados tanto por el firmware del G08L como por las herramientas backend del proveedor.
- Valide la compatibilidad y los campos de telemetría disponibles contra la documentación oficial del fabricante al planear integraciones o alertas personalizadas.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del G08L ayuda a asegurar una incorporación confiable, telemetría precisa en Plaspy y una resolución más ágil de problemas cuando los eventos no aparecen como se espera. Incluso con la detección automática de protocolos de Plaspy, tener visibilidad de lo que el dispositivo está configurado para enviar y cómo se conecta reduce el tiempo de inactividad y mantiene operaciones de flota consistentes.

- Confirma los ajustes correctos de endpoint y transporte para que los dispositivos alcancen Plaspy de forma fiable.
- Ayuda a mapear los campos reportados a alertas y widgets de tablero en Plaspy para informes precisos.
- Acelera la resolución cuando faltan actualizaciones de ubicación, reportes de batería o eventos de sensores.
- Informa decisiones sobre intervalos de reporte, modos de energía y ventanas para actualizaciones de firmware.
- Reduce sorpresas de integración causadas por cambios de firmware, variantes regionales o configuraciones por defecto del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el G08L con Plaspy brinda a gestores de flota y operadores una forma discreta y resistente a manipulaciones de recolectar telemetría continua de ubicación y eventos desde vehículos, manteniendo la funcionalidad de la luz trasera. Plaspy convierte los mensajes GNSS y de sensores entrantes en mapas en vivo, alertas de geocercas, resúmenes de comportamiento de conducción y paneles operativos que ayudan a los equipos a optimizar rutas, responder incidentes y planificar el mantenimiento.

Si desea saber más sobre cómo Plaspy funciona con rastreadores como el CanTrack G08L y revisar las opciones de servicio, visite https://www.plaspy.com. Para los detalles más actuales específicos del dispositivo, comportamiento de firmware e información sobre revisiones de hardware, siempre verifique las especificaciones en el sitio del fabricante https://www.cantrackgps.com/ ya que la documentación del proveedor puede cambiar con el tiempo.
