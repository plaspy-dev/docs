---
slug: /cantrack/g900lm_4g/protocol
id: g900lm_4g-protocol
sidebar_label: Protocol
title: CanTrack - G900LM-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del CanTrack G900LM-4G y cómo se comunica con Plaspy para rastreo en tiempo real y gestión de flotas
keywords:
  - CanTrack G900LM-4G
  - CanTrack G900LM
  - Protocolo G900LM-4G
  - Protocolo G900LM
  - Protocolo GPS CanTrack
  - Protocolo GT06
  - Protocolo rastreador GPS
  - Compatibilidad Plaspy
  - Protocolo seguimiento vehicular
  - Seguimiento de flotas Plaspy
---

# CanTrack - G900LM-4G Protocolo

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del CanTrack G900LM-4G cuando se utiliza con la plataforma Plaspy. Su objetivo es aclarar cómo el rastreador informa telemetría y alarmas a Plaspy y qué aspectos de la comunicación del dispositivo son relevantes para la integración y el despliegue.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo informa correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía debe considerarse de alto nivel y no un manual específico por firmware.

## Resumen del protocolo

El protocolo que utiliza el G900LM-4G define cómo el rastreador se identifica, empaqueta actualizaciones de ubicación y estado, y reporta alarmas a un servidor remoto. En la práctica, el protocolo permite al dispositivo entregar soluciones GPS, estado de alimentación e ignición, y eventos de alarma a Plaspy para que se muestren en mapas en vivo y se puedan usar en informes.

- Permite telemetría periódica y por eventos como ubicación, velocidad, estado de ignición y eventos de alarma.
- Proporciona un identificador y contexto de sesión para que Plaspy asocie los datos entrantes con el vehículo o activo correcto.
- Transporta información de estado y diagnóstico que Plaspy utiliza para alertas, historial y monitoreo de salud del dispositivo.
- Permite configuración remota e interacción por comandos a través de la plataforma cuando el firmware del dispositivo lo soporta.
- Soporta tipos de alarma comúnmente usados en flotas, incluyendo movimiento, corte de alimentación y alertas por velocidad.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint público compartido los reportes entrantes de los rastreadores y detecta automáticamente el protocolo del equipo una vez que llegan datos desde un dispositivo configurado para reportar a la plataforma. En la mayoría de las implementaciones, el usuario no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para enviar al endpoint de Plaspy.

- El dominio público del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos usan el mismo puerto en Plaspy, lo que simplifica la configuración en flotas mixtas.
- El dispositivo solo necesita apuntar al endpoint de Plaspy y usar el transporte soportado para que Plaspy reciba los mensajes.
- Cuando el dispositivo está configurado para reportar a Plaspy, la detección del protocolo ocurre automáticamente y por lo general no se requiere selección manual.
- Si un dispositivo tiene múltiples modos de firmware u opciones de transporte, asegúrese de que esté en el modo que corresponde con la guía del fabricante para el reporte a plataformas.

## Transporte y contexto de conexión

Las opciones de conexión afectan cómo el rastreador envía sus mensajes de protocolo a Plaspy. El G900LM-4G puede configurarse para usar transportes IP comunes y debe apuntar al endpoint de Plaspy usando las configuraciones recomendadas para ese dispositivo y su despliegue.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, dependiendo del soporte del equipo y la configuración local.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para alcanzar Plaspy.
- Plaspy acepta conexiones de rastreadores en el puerto 8888 y usa el mismo puerto para todos los dispositivos compatibles para simplificar la configuración de red.
- Elija UDP o TCP según las capacidades del firmware del dispositivo, la fiabilidad de la red y los comandos que necesite enviar desde la plataforma.
- Verifique la configuración de APN y GSM en el rastreador para que pueda alcanzar el endpoint de Plaspy desde la red celular del vehículo.

## Notas sobre compatibilidad del protocolo

- El G900LM-4G suele asociarse en la documentación del fabricante con compatibilidad tipo GT06, pero el comportamiento exacto depende del firmware y de variantes regionales.
- Las revisiones de firmware pueden añadir, cambiar o eliminar campos y soporte de comandos; siempre verifique la versión de firmware del dispositivo al solucionar problemas.
- Las revisiones de hardware o variantes de cableado (por ejemplo, 4 pines frente a 8 pines) pueden afectar las entradas disponibles y el comportamiento de control remoto, incluso si el protocolo de reporte central es el mismo.
- La selección de transporte entre UDP y TCP puede afectar la fiabilidad y qué comandos remotos están disponibles o cómo se manejan los reconocimientos.
- Las variantes regionales del fabricante o las bandas pueden influir en los pasos de configuración necesarios para alcanzar la plataforma.
- Valide la compatibilidad y las configuraciones recomendadas contra la documentación oficial de CanTrack para el modelo y firmware específico que esté desplegando.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a los instaladores y gerentes de flota a garantizar un reporte fiable, un mapeo correcto de alarmas y un comportamiento consistente cuando el dispositivo se integra con Plaspy. Un conocimiento claro del protocolo reduce el tiempo de configuración y simplifica la resolución de problemas cuando los dispositivos se comportan de forma inesperada.

- Ayuda a confirmar que el dispositivo está enviando correctamente la identificación y la telemetría para que Plaspy pueda asignar lecturas a los vehículos.
- Facilita el diagnóstico de problemas de conectividad como APN incorrecto, dirección del servidor o selección de transporte.
- Orienta las decisiones sobre intervalos de reporte, filtros de eventos y umbrales de alarma para optimizar el uso de datos y la capacidad de respuesta.
- Aclara qué comandos remotos y opciones de configuración están soportados por el firmware actual.
- Reduce el tiempo de resolución al enfocar las solicitudes de soporte al fabricante o de firmware en los comportamientos de protocolo más relevantes.

## Por qué usar Plaspy con este protocolo

Usar el G900LM-4G con Plaspy ofrece a las flotas un rastreador compacto y cableado junto con una plataforma que consolida localización en tiempo real, alarmas y reproducción histórica. La detección automática de protocolos de Plaspy y el enfoque de puerto unificado simplifican la incorporación de dispositivos en conjuntos mixtos de modelos y variantes de firmware, lo que ayuda a reducir la complejidad de despliegues a gran escala.

Si desea conocer más sobre Plaspy y cómo soporta rastreadores como el G900LM-4G, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, comportamiento de firmware y guías del fabricante más actuales, verifique la información en el sitio oficial de CanTrack https://www.cantrackgps.com/ ya que las implementaciones de los dispositivos y las funciones de firmware pueden cambiar con el tiempo.
