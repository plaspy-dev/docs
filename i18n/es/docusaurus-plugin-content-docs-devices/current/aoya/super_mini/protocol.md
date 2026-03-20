---
slug: /aoya/super_mini/protocol
id: super_mini-protocol
sidebar_label: Protocol
title: AoYa - super mini Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del rastreador GPS AoYa super mini y su comunicación con Plaspy para seguimiento vehicular confiable
keywords:
  - Protocolo AoYa super mini
  - AoYa super mini GPS
  - Compatibilidad AoYa super mini Plaspy
  - Comunicación AoYa super mini
  - Rastreo AoYa super mini
  - Protocolo rastreador AoYa GPS
  - Rastreadores compatibles Plaspy
  - Rastreo vehicular AoYa
  - Gestión de flotas AoYa
  - Guía protocolo rastreador GPS
---

# AoYa - super mini Protocolo

Esta página documenta el contexto público del protocolo para usar el rastreador GPS AoYa super mini con Plaspy. Se centra en cómo el dispositivo reporta ubicación y estado a un servicio backend y qué esperar al configurar el rastreador para integrarlo con Plaspy. El contenido está pensado para ayudar a administradores e integradores a comprender los aspectos básicos de la conexión sin exponer detalles privados del fabricante.

Plaspy utiliza ajustes de conexión compartidos para todos los rastreadores compatibles y detecta automáticamente el protocolo cuando un dispositivo empieza a reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la compatibilidad final y la disponibilidad de funciones dependen de la unidad y del build de firmware específico.

## Resumen del protocolo

El protocolo de comunicación del AoYa super mini define cómo el rastreador se identifica, reporta datos de ubicación y sensores, y transmite alarmas y actualizaciones de estado a un servidor remoto. Para la integración con Plaspy, el papel público del protocolo es proporcionar telemetría y notificaciones de eventos con marcas de tiempo que la plataforma pueda interpretar para mapas, alarmas y reproducción histórica.

- Envía reportes periódicos y basados en eventos de ubicación a un endpoint configurado para que Plaspy los consuma
- Transmite eventos de alarma y sensores como alarma de luz, corte de alimentación, exceso de velocidad y detección de vibración
- Incluye identidad del dispositivo y metadatos de estado básicos para que Plaspy asocie los reportes al activo correcto
- Soporta fuentes de ubicación suplementarias como LBS y WiFi para mejorar la disponibilidad del posicionamiento en entornos difíciles
- Habilita funciones de control remoto como inmovilización del motor cuando el fabricante y la configuración lo permiten

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint compartido y reconoce el protocolo del rastreador automáticamente cuando los dispositivos correctamente configurados reportan a la plataforma. En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy manualmente; apuntar el AoYa super mini al endpoint de Plaspy con el transporte correcto suele ser suficiente para la detección automática.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138 para despliegues con IP directa
- Plaspy usa un único puerto para todos los dispositivos para simplificar la configuración y el enrutamiento
- Plaspy detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint compartido
- Si un rastreador no se detecta automáticamente, verifique la configuración de reporte del dispositivo y la documentación del fabricante

## Transporte y contexto de conexión

La capa de transporte determina cómo el AoYa super mini envía sus mensajes de protocolo a Plaspy. Dependiendo del firmware y la configuración del dispositivo, el rastreador puede soportar reporte por UDP o TCP. Use la opción de transporte que soporte el dispositivo y que esté permitida en su red para asegurar una entrega confiable.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- Plaspy acepta reportes de dispositivos en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto
- El rastreador puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Elija UDP para reportes simples y de bajo overhead o TCP cuando se prefiera un flujo de bytes fiable y el dispositivo lo soporte
- Asegúrese de que los firewalls de la red permitan tráfico saliente al endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- El AoYa super mini es compatible con Plaspy cuando está configurado para reportar al endpoint y puerto de Plaspy
- Las revisiones de firmware pueden cambiar las funciones disponibles y el comportamiento de los mensajes, por lo que el comportamiento puede variar entre unidades
- Las revisiones de hardware o módulos opcionales pueden afectar los sensores soportados y las funciones de control remoto
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y la política de red
- Las variantes regionales del fabricante pueden introducir diferencias en parámetros o en el protocolo; verifique la configuración de región del dispositivo
- Valide siempre el comportamiento del dispositivo consultando la documentación del fabricante antes de un despliegue a gran escala

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo del rastreador ayuda a garantizar una configuración correcta, acelerar la solución de problemas y mantener una operación consistente a largo plazo con Plaspy. Saber qué puede y qué no puede reportar el dispositivo, y cómo lo hace, reduce el tiempo de integración y contribuye a mantener flotas confiables.

- Permite configurar correctamente el dispositivo para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Facilita la resolución de problemas por reportes perdidos o telemetría incompleta al clarificar reglas de transporte y eventos
- Aclara qué alarmas y sensores se reportan para que las alertas y reglas en Plaspy se ajusten adecuadamente
- Ayuda a planear actualizaciones de firmware y reemplazos de hardware que puedan alterar el comportamiento del protocolo
- Permite verificar que funciones de control remoto, como corte de motor, estén soportadas y configuradas de forma segura

## Por qué usar Plaspy con este protocolo

Usar el AoYa super mini con Plaspy ofrece a las organizaciones una vía directa para consolidar datos de ubicación, estado y alarmas en una única plataforma de gestión de flotas. La detección automática de protocolos de Plaspy y su endpoint consistente simplifican la incorporación de dispositivos, mientras que el soporte para transportes comunes y un puerto compartido reduce la configuración por dispositivo.

Para saber más sobre Plaspy y cómo funciona con una amplia gama de rastreadores visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación de los dispositivos pueden cambiar con el tiempo; para la información más reciente y específica de cada dispositivo verifique la documentación actual y las notas de firmware en el sitio del fabricante en http://www.aoyagps.com/ .
