---
slug: /cantrack/g200/protocol
id: g200-protocol
sidebar_label: Protocol
title: CanTrack - G200 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CanTrack G200 y guía de compatibilidad con Plaspy
keywords:
  - Protocolo CanTrack G200
  - Protocolo GPS CanTrack G200
  - Protocolo G200 Plaspy
  - Rastreo CanTrack G200
  - Protocolo rastreador GPS CanTrack
  - Compatibilidad Plaspy
  - Integración rastreador G200
  - Rastreo vehicular G200
  - Rastreo de flotas CanTrack
  - Protocolo de comunicación G200
---

# CanTrack - Protocolo G200

Esta página ofrece una visión pública del contexto de comunicación del rastreador magnético CanTrack G200 cuando se utiliza con la plataforma Plaspy. Resume cómo el dispositivo suele reportar ubicaciones y eventos, el papel del protocolo en ese intercambio y consideraciones prácticas de compatibilidad para su integración con Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente los protocolos cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo en el G200 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en detalles públicos y no sensibles y en orientación general en lugar de definiciones de comandos específicos de firmware.

## Resumen del protocolo

El protocolo del rastreador define los mensajes que envía un dispositivo G200 y cómo el servidor los interpreta para que las ubicaciones, alarmas y actualizaciones de estado sean procesables en Plaspy. A alto nivel, el protocolo permite que el dispositivo se identifique, reporte posiciones y datos LBS, y notifique eventos como movimiento, vibración o manipulación.

- Permite al G200 transmitir reportes de ubicación GPS o LBS que Plaspy puede geolocalizar y mostrar
- Transmite la identidad del dispositivo y su estado básico para asociar los reportes entrantes con el activo correcto
- Incluye notificaciones de eventos como exceso de velocidad, violaciones de geocerca, alarmas por vibración y alertas anti manipulación
- Soporta reportes intermitentes y almacenamiento en memoria durante periodos sin conectividad GSM
- Funciona junto con los modos de energía del rastreador para equilibrar la frecuencia de reportes y la duración de la batería

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico crudo de rastreadores en un endpoint unificado y aplica detección automática, de modo que la mayoría de los dispositivos no requieren selección manual de protocolo en la interfaz. Cuando un G200 está configurado para enviar reportes al endpoint de Plaspy, la plataforma identificará el formato del reporte entrante y lo asociará con el registro de dispositivo correcto siempre que el equipo esté reportando adecuadamente.

- Plaspy escucha en un endpoint de servidor compartido para los rastreadores compatibles
- El dominio público del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- Plaspy utiliza el mismo puerto para todos los dispositivos, lo que simplifica la configuración y el alta de equipos
- En la mayoría de los casos usted solo necesita apuntar el dispositivo al endpoint de Plaspy y la plataforma gestionará la detección de protocolo automáticamente
- Si un dispositivo no aparece en Plaspy, verifique la configuración de reportes del dispositivo, el APN y la conectividad de la SIM, así como la versión de firmware por si hay cambios en el comportamiento

## Transporte y contexto de conexión

La selección del transporte para el G200 depende del firmware del equipo y de la configuración local. El dispositivo puede estar configurado para enviar reportes por UDP o TCP al servidor Plaspy, y el contexto de conexión determina cómo alcanza el endpoint de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- El dominio público del servidor de Plaspy es d.plaspy.com y su IP pública es 54.85.159.138
- El puerto usado para el tráfico de dispositivos Plaspy es 8888 y Plaspy emplea el mismo puerto para todos los modelos compatibles
- Seleccione UDP para reportes más sencillos y de menor sobrecarga o TCP cuando el firmware del dispositivo requiera mayor fiabilidad en la entrega
- Asegúrese de que el APN y la configuración de la SIM en el G200 estén correctos para que pueda resolver d.plaspy.com o alcanzar la dirección IP numérica

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de mensajes, los eventos disponibles y las opciones de transporte; consulte las notas de firmware para comportamiento específico de cada dispositivo
- Las revisiones de hardware o lotes de producción distintos pueden afectar funciones disponibles como modos de energía o el comportamiento del sensor magnético
- Algunas características del G200, como el almacenamiento en memoria para escenarios sin conexión y los modos de ahorro de energía, influyen en cuándo y cómo se envían los reportes a la plataforma
- La selección de protocolo de transporte (UDP vs TCP) es una opción a nivel de dispositivo y puede requerir configuración correspondiente en el rastreador
- Valide la compatibilidad probando un dispositivo contra el endpoint de Plaspy antes de un despliegue masivo
- Consulte la documentación del fabricante para cualquier comando de configuración del dispositivo o modos especiales de reporte que puedan influir en la compatibilidad

## Por qué importa entender el protocolo

Conocer cómo se comunica el G200 ayuda a los administradores a registrar, diagnosticar y mantener dispositivos en Plaspy con éxito. Aunque Plaspy detecta protocolos automáticamente en el endpoint compartido, la familiaridad práctica con el comportamiento de reportes del dispositivo reduce la fricción en el alta y acorta el tiempo de resolución de problemas.

- Ayuda a confirmar que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Orienta la resolución de problemas para dispositivos que no reportan al aclarar la frecuencia de reportes esperada y los tipos de eventos
- Facilita la planificación de compensaciones entre batería y ahorro de energía según el modo de reporte del dispositivo
- Apoya la toma de decisiones sobre selección de transporte y ajustes de SIM para una conectividad confiable
- Permite coordinar con el fabricante del dispositivo en caso de incidencias relacionadas con firmware o configuración

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el CanTrack G200 ofrece a las organizaciones visibilidad consolidada de activos móviles que se benefician de larga duración de batería, montaje magnético robusto y funciones de reporte de eventos como vibración y alertas anti manipulación. El enfoque de endpoint unificado y la detección automática de protocolos de Plaspy reducen la complejidad de configuración, por lo que los dispositivos correctamente apuntados a la plataforma suelen comenzar a reportar sin necesidad de seleccionar el protocolo manualmente.

Para conocer más sobre Plaspy y cómo gestiona la conectividad de dispositivos y la supervisión de flotas, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos de dispositivos, notas de firmware e instrucciones de configuración del CanTrack G200, consulte la documentación del fabricante en https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del equipo pueden cambiar con el tiempo.
