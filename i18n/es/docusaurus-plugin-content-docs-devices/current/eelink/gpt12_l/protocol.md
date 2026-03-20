---
slug: /eelink/gpt12_l/protocol
id: gpt12_l-protocol
sidebar_label: Protocol
title: EElink - GPT12‑L Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar EElink GPT12‑L con Plaspy, ajustes de transporte y notas de compatibilidad
keywords:
  - protocolo EElink GPT12-L
  - protocolo GPT12-L GPS
  - EElink GPT12-L Plaspy
  - protocolo rastreador GPS EElink
  - protocolo de comunicación GPT12-L
  - protocolo de rastreo GPT12-L
  - compatibilidad de dispositivos Plaspy
  - protocolo de seguimiento de flotas
  - protocolo rastreo de activos
  - integración rastreador GPS
---

# EElink - Protocolo GPT12‑L

Esta página documenta el contexto del protocolo público para usar el EElink GPT12‑L con la plataforma Plaspy. Se centra en cómo el rastreador comunica sus datos a los puntos de ingestión de Plaspy, qué ajustes de conexión son necesarios y consideraciones prácticas de compatibilidad para implementaciones de flotas y rastreo de activos.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso este documento mantiene un enfoque general y recomienda verificar la documentación oficial del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del GPT12‑L permite al dispositivo reportar posiciones GNSS, mensajes de evento y telemetría operacional a un endpoint remoto de ingestión. Esta capa de protocolo es el vehículo para actualizaciones oportunas, eventos de geocerca, estado de batería y alarmas configuradas que Plaspy consume para mapas en vivo e informes históricos.

- Proporciona un método estructurado para que el dispositivo se identifique y transmita ubicación y telemetría a Plaspy
- Transporta mensajes de evento como activaciones de geocerca, alarmas de movimiento y notificaciones de modo de emergencia
- Soporta patrones de bajo consumo habilitando reportes basados en eventos y despertadores programados
- Permite entregar comandos de configuración remota a través del servidor u otros canales soportados por el dispositivo
- Asegura que los datos lleguen a Plaspy en un formato que la plataforma pueda interpretar para seguimiento en tiempo real e informes históricos

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint de ingestión compartido y detecta automáticamente el protocolo del rastreador para los modelos soportados, incluido el GPT12‑L. En la mayoría de los casos no es necesario seleccionar un protocolo manualmente dentro de Plaspy siempre que el rastreador esté configurado correctamente para reportar al endpoint de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint de ingestión
- Una configuración correcta del dispositivo que apunte al endpoint de Plaspy garantiza la asociación automática con la plataforma
- Si un dispositivo soporta múltiples modos de transporte, puede usar UDP o TCP para reportar y Plaspy aceptará la conexión entrante en el puerto compartido

## Transporte y contexto de conexión

Las elecciones de transporte y conexión determinan cómo el GPT12‑L envía sus datos de protocolo a Plaspy. El dispositivo puede configurarse para usar UDP o TCP según el firmware, la preferencia del operador y las condiciones de la red. Conocer el endpoint y las opciones de transporte es útil para la configuración inicial del equipo y para las reglas de firewall.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Se puede apuntar a d.plaspy.com o a la dirección IP 54.85.159.138 para la ingestión
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica las reglas de red y firewall
- La elección de transporte (UDP vs TCP) afecta la fiabilidad de entrega y el comportamiento, pero no el endpoint de la plataforma
- Asegúrese de que el APN de la red móvil y la configuración de dirección del servidor en el rastreador coincidan con el endpoint de Plaspy elegido

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar comandos disponibles, intervalos de reporte y comportamiento de eventos; siempre verifique la versión de firmware del equipo al validar compatibilidad
- Las revisiones de hardware o variantes regionales pueden tener soporte de bandas celulares y valores predeterminados de configuración distintos que afecten la conectividad
- La selección de transporte entre UDP y TCP puede estar limitada por el firmware del equipo o la red del operador; confirme qué transportes soporta la unidad específica
- La configuración del lado servidor, como el endpoint y puerto de Plaspy, debe ingresarse exactamente en el dispositivo para asegurar la entrega correcta
- Las características del fabricante, como conjuntos de comandos remotos y comportamiento OTA, pueden variar e influir en cómo se aplica la configuración de forma remota
- Valide el comportamiento del protocolo y los tipos de mensajes soportados contra la documentación oficial de EElink para detalles específicos del modelo

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GPT12‑L ayuda a asegurar una integración fluida con Plaspy y reduce el tiempo dedicado a resolver problemas de conectividad y reporte. Tener claro el comportamiento general del protocolo también facilita a los operadores configurar perfiles de energía y reportes de eventos acorde a las necesidades operativas.

- Permite configurar correctamente el dispositivo para apuntar a los endpoints de Plaspy y elegir un transporte apropiado
- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy revisando redes, firmware o desajustes de transporte
- Informa la configuración de reglas de sueño y despertador para balancear vida de batería y puntualidad de reportes
- Facilita la planificación de despliegues a gran escala al comprender el requisito de puerto y endpoint uniforme
- Colabora con la coordinación de actualizaciones de firmware de EElink que puedan alterar la semántica de los reportes o las funciones soportadas

## Ventajas de usar Plaspy con este protocolo

Usar el GPT12‑L con Plaspy ofrece a las organizaciones una combinación práctica de rastreo de activos con ultra larga autonomía y una plataforma que ingiere datos de ubicación y eventos de forma consistente. El soporte multi GNSS del GPT12‑L, la conectividad LTE Cat M1 y NB2, y los perfiles de sueño configurables lo hacen adecuado para flotas, antirrobo y monitoreo de activos a largo plazo cuando se integra con las capacidades de ingestión y tablero de Plaspy.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el GPT12‑L, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware e instrucciones oficiales de configuración, consulte la documentación del fabricante en https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
