---
slug: /cantrack/g07l/protocol
id: g07l-protocol
sidebar_label: Protocol
title: CanTrack - G07L Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo CanTrack G07L y cómo el rastreador se comunica con Plaspy para rastreo fiable de flotas y telemetría
keywords:
  - protocolo CanTrack G07L
  - protocolo GPS CanTrack G07L
  - protocolo CanTrack G07L Plaspy
  - protocolo de comunicación G07L
  - protocolo de rastreo G07L
  - compatibilidad CanTrack G07L
  - rastreo de flotas G07L
  - protocolo de rastreador vehicular
  - protocolo GPS CanTrack
  - protocolo de dispositivo Plaspy
---

# CanTrack - Protocolo G07L

Esta página resume el contexto del protocolo público para utilizar el rastreador CanTrack G07L con la plataforma Plaspy. Se centra en cómo el dispositivo informa ubicación, estado y eventos a Plaspy y en qué aspectos de la configuración de comunicación son relevantes para la integración, la resolución de problemas y el despliegue. El objetivo es explicar el papel de la comunicación sin exponer detalles de implementación sensibles.

El G07L es un rastreador fijo 4G (hard wired) basado en un módulo SIMCom LTE Cat 1 y el chipset AT6558R, optimizado para integrarse con Plaspy. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto de la telemetría puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Valide siempre el comportamiento específico del equipo con el fabricante cuando sea necesario.

## Visión general del protocolo

A alto nivel, el protocolo de comunicación del G07L es el conjunto de reglas y flujos de mensajes que permiten al dispositivo transmitir fijaciones GNSS, señales de estado, alarmas y registros almacenados a un backend como Plaspy. El protocolo define cuándo reporta el rastreador, qué eventos disparan envíos y cómo se direcciona el equipo para configuración o actualizaciones OTA.

- Permite la transmisión de fijaciones de posición GNSS y telemetría para que Plaspy muestre ubicación en tiempo real e historial.
- Transporta información de estado y eventos como encendido/apagado de ignición, alarmas por movimiento o vibración y alertas por corte de alimentación.
- Soporta buffer local para que los registros almacenados se suban a Plaspy cuando se restablece la conectividad.
- Permite la configuración remota y actualizaciones de firmware vía comandos de la plataforma o métodos over-the-air cuando el equipo lo soporta.
- Proporciona los campos de identificación y el comportamiento de sesión necesarios para que Plaspy asocie los datos entrantes con el dispositivo y la cuenta correctos.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para recibir telemetría de una amplia gama de rastreadores y utiliza un endpoint y puerto unificados para la ingestión. Cuando el G07L se configura para reportar a Plaspy, la plataforma acepta la conexión del dispositivo y determina automáticamente el manejo de protocolo correcto, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo en la plataforma.

- El endpoint público de ingestión de Plaspy es d.plaspy.com y la plataforma también es accesible en 54.85.159.138 para configuración directa por IP.
- Todos los dispositivos configurados para reportar a Plaspy usan el mismo puerto, 8888, lo que simplifica la puesta en marcha.
- El G07L puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del dispositivo y las condiciones de la red.
- Con el equipo apuntando al endpoint de Plaspy, la plataforma ingiere la telemetría y la asigna automáticamente al registro de dispositivo asociado.
- La selección manual de protocolo dentro de Plaspy normalmente no es necesaria si el rastreador está correctamente configurado para reportar al endpoint y puerto de Plaspy.

## Contexto de transporte y conexión

Las elecciones de transporte y conexión afectan la fiabilidad, el consumo de energía y el comportamiento del equipo en redes celulares. El G07L soporta conectividad celular moderna y puede cambiar de transporte según la configuración y la disponibilidad de red.

- El dispositivo puede usar transporte TCP o UDP para comunicarse con Plaspy; ambos son compatibles cuando el equipo está configurado al endpoint de Plaspy.
- Configure el rastreador para apuntar a d.plaspy.com o directamente a 54.85.159.138 cuando la configuración del dispositivo requiera una dirección IP.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados, por lo que el mismo valor de puerto aplica a través de rastreadores.
- La elección de transporte (UDP frente a TCP) puede afectar las garantías de entrega y el comportamiento de reconexión, pero es seleccionable en la configuración del dispositivo.
- Use señal celular estable y ajustes de APN correctos en la SIM para asegurar conectividad consistente y cargas oportunas a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar intervalos de reporte, disparadores de eventos y comandos remotos disponibles; confirme el comportamiento del firmware para una unidad dada.
- Revisiones de hardware o variantes regionales (por ejemplo, soporte de bandas LTE distinto) pueden influir en la conectividad y, por ende, en el comportamiento del protocolo en la práctica.
- La selección de transporte (UDP vs TCP) es un factor configurable que puede necesitar adaptarse al rendimiento del operador o a restricciones específicas del despliegue.
- La capacidad de buffering offline y la lógica de subida pueden diferir según el firmware; el G07L ofrece almacenamiento a bordo para subidas diferidas pero su comportamiento puede variar según la versión.
- Rutas de configuración proporcionadas por el fabricante como USB, SMS o comandos GPRS ofrecen maneras alternativas de establecer el endpoint de Plaspy cuando sea necesario.
- Siempre valide la compatibilidad y los ajustes recomendados contra la documentación más reciente del fabricante para el número de serie o lote específico.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar que los dispositivos reporten de manera fiable, que los eventos se capturen con precisión y que tareas de mantenimiento como configuración y actualizaciones de firmware se realicen con confianza. Estar al tanto del comportamiento a nivel de protocolo reduce el tiempo de puesta en marcha y mejora el tiempo operativo.

- Ayuda a diagnosticar por qué un dispositivo no aparece en Plaspy o no reporta en los intervalos esperados.
- Aclara cómo se transmiten a la plataforma los disparadores de eventos como movimiento, ignición o pérdida de energía.
- Informa decisiones sobre la elección de transporte y la configuración del APN para conectividad celular.
- Orienta expectativas sobre buffering offline, subidas demoradas y conciliación de datos tras interrupciones.
- Facilita la planificación de actualizaciones de firmware y mantenimiento de campo conociendo las vías de configuración disponibles.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G07L con Plaspy ofrece a operadores de flotas y proveedores de servicio una ruta integrada y práctica hacia visibilidad en tiempo real, alertas basadas en eventos e informes históricos. La combinación de conectividad celular robusta, telemetría de movimiento e ignición y buffering offline hace del G07L un equipo útil para flotas mixtas que requieren seguimiento de posición confiable y flujos de alarma.

Para obtener más información sobre cómo Plaspy puede trabajar con dispositivos CanTrack y con rastreadores compatibles en general, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, comportamiento del firmware y variantes de hardware más actuales, consulte al fabricante en https://www.cantrackgps.com/. El soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la información más reciente con CanTrack antes del despliegue.
