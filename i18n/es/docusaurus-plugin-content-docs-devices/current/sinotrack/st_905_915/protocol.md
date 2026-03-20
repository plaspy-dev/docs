---
slug: /sinotrack/st_905_915/protocol
id: st_905_915-protocol
sidebar_label: Protocol
title: SinoTrack - ST-905/915 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo SinoTrack ST 905 915 y cómo se comunica con Plaspy para seguimiento confiable
keywords:
  - Protocolo SinoTrack ST 905 915
  - Protocolo rastreador GPS SinoTrack
  - Protocolo de rastreo ST 905 915
  - Compatibilidad Plaspy
  - Comunicación rastreador GPS
  - Protocolo de rastreo vehicular
  - Integración rastreador de activos
  - Guía de configuración rastreador GPS
  - Protocolo de rastreo en tiempo real
  - Resumen protocolo de rastreador
---

# SinoTrack - Protocolo ST-905/915

Esta página describe el contexto público del protocolo para usar el rastreador SinoTrack ST-905/915 con la plataforma Plaspy. Explica, en términos generales y sin información sensible, cómo se comunica el dispositivo con Plaspy y qué esperar al configurarlo para el envío de reportes y la supervisión. Utilice este documento como contexto de protocolo y no como un manual paso a paso del equipo.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que funciones del equipo como larga autonomía en espera, posicionamiento basado en Ubox 7020, reportes de alarma, conectividad por SMS o GPRS y monitor de voz pueden comportarse de forma distinta según el firmware y la configuración del rastreador.

## Visión general del protocolo

El protocolo de comunicación es el conjunto de comportamientos que el ST-905/915 utiliza para identificarse y transmitir telemetría, alarmas y estado al servidor. Para la integración con Plaspy esto significa que el rastreador debe apuntar al endpoint de Plaspy y usar un transporte soportado para que los reportes entrantes puedan ser recibidos e interpretados.

- Transmite la telemetría principal como ubicación, hora y estado básico del equipo al servidor para su mapeo y registro histórico.
- Entrega notificaciones de eventos utilizadas para alarmas como batería baja, impacto y exceso de velocidad para activar alertas en Plaspy.
- Incluye datos de identificación del dispositivo para que Plaspy asocie los reportes entrantes con un rastreador registrado.
- Opera sobre canales celulares como GPRS para datos en tiempo real y también puede soportar reportes o configuración por SMS cuando el firmware lo permite.
- Habilita funciones remotas del equipo, como monitor de voz, cuando tanto el firmware como la integración con la plataforma las soportan.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes en un endpoint compartido y detecta automáticamente el protocolo que utiliza el rastreador. En la mayoría de los casos los usuarios no necesitan seleccionar manualmente un protocolo en Plaspy una vez que el rastreador está correctamente configurado para reportar al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para enrutamiento directo.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y todos los equipos en Plaspy usan el mismo puerto.
- El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 según el soporte del rastreador y la configuración de la red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los reportes llegan al endpoint compartido.
- Cuando un rastreador está configurado para reportar al endpoint de Plaspy, la plataforma intentará mapear los mensajes entrantes al dispositivo correspondiente y comenzará a mostrar la telemetría.

## Contexto de transporte y conexión

La selección del transporte y los ajustes de destino correctos son esenciales para un envío fiable. El ST-905/915 puede usar datos de paquete o SMS para reportar según la configuración y capacidad del firmware; para la integración con Plaspy normalmente se configura el transporte de red para apuntar al endpoint de Plaspy.

- Los dispositivos pueden apuntar a d.plaspy.com o al host numérico 54.85.159.138 cuando se requiere enrutamiento por IP directo.
- El equipo puede usar UDP o TCP en el puerto 8888 dependiendo de la configuración de la unidad y del comportamiento de la red celular.
- El puerto 8888 es el puerto común usado por Plaspy en todos los dispositivos compatibles para simplificar la configuración.
- Use el modo de transporte recomendado por su operador y el manual del dispositivo para obtener la mejor fiabilidad en redes GPRS o 2G/3G.
- Asegúrese de que el APN y los ajustes de datos en la tarjeta SIM sean correctos para que el rastreador pueda establecer una conexión GPRS al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles y qué eventos se reportan; verifique la versión de firmware del rastreador al realizar diagnósticos.
- Revisiones de hardware o lotes alternativos de fabricación ST-905/915 pueden implementar pequeñas variaciones de protocolo; confirme el comportamiento en una unidad de prueba cuando sea posible.
- Algunas funciones como el monitor de voz o tipos de alarma avanzados pueden requerir firmware o configuración específica para enviarse por GPRS en lugar de SMS.
- Las diferencias de transporte entre UDP y TCP pueden afectar la semántica de entrega; seleccione el transporte que mejor manejen su dispositivo y la red.
- Siempre valide la compatibilidad con la documentación más reciente del fabricante y realice pruebas en vivo para confirmar el comportamiento esperado.
- Si depende de funciones de optimización de batería, revise cómo el firmware implementa los modos de sueño y los intervalos de reporte.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que el ST-905/915 reporte de forma confiable a Plaspy, que las alarmas se reciban con prontitud y que las capacidades del dispositivo se utilicen correctamente en los despliegues.

- Una configuración correcta del protocolo y el transporte reduce las brechas de datos y mejora la precisión de ubicación en la plataforma.
- Reconocer comportamientos dependientes del firmware ayuda a diagnosticar eventos faltantes o diferencias en la frecuencia de mensajes.
- Saber qué reportará el dispositivo permite mapear correctamente las alarmas y campos de telemetría a las alertas y widgets de Plaspy.
- La conciencia del protocolo ayuda a planificar los compromisos de duración de batería al elegir intervalos de reporte y modos de sueño que se ajusten a las necesidades operativas.
- La resolución de problemas de conectividad es más sencilla cuando sabe si el dispositivo debe usar UDP o TCP y cuál es el endpoint correcto de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack ST-905/915 con Plaspy ofrece a las organizaciones una forma directa de capturar las capacidades de larga autonomía en espera del rastreador, su reporte de alarmas y el posicionamiento preciso en una vista centralizada de gestión de flotas o activos. Plaspy recibe e interpreta la telemetría y los eventos enviados por el dispositivo para que los equipos puedan monitorear ubicaciones, reaccionar ante alarmas y mantener supervisión operativa en los despliegues.

Para obtener más información sobre Plaspy y cómo maneja el reporte de dispositivos visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, notas de firmware y guías de implementación más actualizados verifique la información con el fabricante en https://www.sinotrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
