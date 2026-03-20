---
slug: /eelink/gpt12l/protocol
id: gpt12l-protocol
sidebar_label: Protocol
title: EElink - GPT12‑L Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar EElink GPT12‑L con Plaspy, con ajustes de conexión, transporte y notas de compatibilidad
keywords:
  - protocolo EElink GPT12‑L
  - protocolo GPS EElink GPT12‑L
  - protocolo de comunicación GPT12‑L
  - protocolo de rastreo GPT12‑L
  - compatibilidad rastreador EElink con Plaspy
  - integración de rastreadores en Plaspy
  - guía de protocolo para rastreadores de activos
  - ajustes de transporte rastreador GPS
  - protocolo de rastreo de flotas EElink
  - protocolo rastreador LTE Cat M1 NB2
---

# EElink - Protocolo GPT12‑L

Esta página describe el contexto público del protocolo para usar el rastreador EElink GPT12‑L con Plaspy. Resume cómo el dispositivo suele comunicarse con Plaspy, qué endpoints de conexión se utilizan y qué consideraciones prácticas son relevantes para la integración y la resolución de problemas, sin exponer detalles de implementación sensibles.

El GPT12‑L es un rastreador GPS compatible con Plaspy, diseñado para larga autonomía en espera y posicionamiento confiable mediante multi GNSS y conectividad LTE Cat M1/NB2. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación oficial de EElink para detalles específicos de firmware antes de desplegar a gran escala.

## Resumen del protocolo

El protocolo del rastreador es el comportamiento público de comunicación que el GPT12‑L utiliza para reportar posiciones GNSS, eventos y telemetría del dispositivo a una plataforma backend como Plaspy. En la práctica, este protocolo define cómo se identifica el dispositivo, cuándo envía actualizaciones y qué tipos de mensajes de evento están disponibles para mapas, alertas y el historial.

- Transmite reportes de posición GNSS y marcas de tiempo que Plaspy ingiere para ubicación en vivo y rutas históricas.
- Envía mensajes de evento como alarmas de geovalla, activaciones por movimiento o vibración y actualizaciones de batería y estado de energía.
- Incluye identificadores y telemetría que permiten a Plaspy asociar los datos entrantes a un registro de dispositivo y mantener el estado actualizado.
- Admite activaciones programadas y reportes basados en eventos para equilibrar la visibilidad en tiempo real con larga duración de batería.
- Permite configuración remota y cambios de modo mediante comandos desde el servidor, SMS u otros canales de configuración compatibles según lo implemente el fabricante.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint de ingestión compartido y determina automáticamente el protocolo correcto para los dispositivos soportados. Esto permite que la mayoría de los dispositivos configurados correctamente sean reconocidos sin la necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en el endpoint compartido del servidor en d.plaspy.com y en la IP de servidor 54.85.159.138.
- La plataforma utiliza el puerto 8888 para la conectividad de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint configurado de Plaspy.
- En general, los usuarios no necesitan elegir manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy y usa el transporte soportado.
- Identificadores correctos del dispositivo y reportes oportunos facilitan la detección automática y la asociación con una cuenta.

## Contexto de transporte y conexión

El contexto de conexión abarca la capa de transporte y los detalles del endpoint que usan los dispositivos para alcanzar Plaspy. El GPT12‑L puede operar usando UDP o TCP para reportes, dependiendo de la configuración del dispositivo y de las capacidades del firmware.

- Los dispositivos pueden estar configurados para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El mismo puerto 8888 se usa en todos los dispositivos soportados en Plaspy para simplificar la configuración de firewalls y servidores.
- La elección entre UDP y TCP puede afectar las garantías de entrega y el comportamiento de reintento según el firmware del dispositivo y las condiciones de red.
- Confirme la opción de transporte del dispositivo en la configuración del equipo o con el fabricante antes de un despliegue a gran escala.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden alterar la frecuencia de mensajes, los tipos de eventos disponibles y el soporte de comandos remotos para el GPT12‑L.
- Revisiones de hardware y variantes regionales pueden cambiar las bandas LTE soportadas y, por tanto, afectar la cobertura de red más que el protocolo a alto nivel.
- La configuración por parte del fabricante u opciones adicionales pueden estar habilitadas o deshabilitadas en SKUs o compilaciones de firmware específicas.
- La selección de transporte (UDP versus TCP) puede ser configurable en el dispositivo o vía SMS y puede influir en la fiabilidad bajo condiciones de red celular.
- El endpoint compartido de Plaspy y la detección automática reducen la configuración manual, pero siguen siendo necesarios identificadores precisos del dispositivo y el transporte correcto.
- Valide siempre el comportamiento de un dispositivo en un entorno controlado antes de implementarlo en flotas de producción.

## Por qué es importante comprender el protocolo

Comprender el protocolo del rastreador le ayuda a configurar el GPT12‑L con confianza, solucionar problemas de conectividad o reporte y optimizar el comportamiento del dispositivo para la duración de la batería y las necesidades operativas.

- Permite determinar los ajustes correctos de transporte y servidor para una ingesta fiable en Plaspy.
- Facilita confirmar si reportes perdidos se deben a la red, la elección de transporte o la configuración del dispositivo.
- Ayuda a ajustar intervalos de reporte, disparadores de evento y programación de sueño para cumplir con requisitos de batería y reporte.
- Permite mapear con precisión eventos como activaciones de geovalla, alertas por movimiento y modos de emergencia a reglas y notificaciones de la plataforma.
- Mejora la colaboración con el soporte de EElink al validar comportamientos de firmware o solicitar aclaraciones de funcionalidades.

## Por qué usar Plaspy con este protocolo

Usar el GPT12‑L con Plaspy ofrece a las organizaciones una forma práctica de combinar larga duración de batería, precisión multi GNSS y rastreo de bajo mantenimiento con una plataforma que acepta tráfico de dispositivos en un único puerto compartido y detecta automáticamente protocolos de rastreadores soportados. Esta combinación es adecuada para gestión de flotas, protección anti robo y monitoreo remoto de activos donde se requieren actualizaciones intermitentes y de emergencia en tiempo real.

Si desea obtener más información sobre el uso de Plaspy con el GPT12‑L y otros rastreadores compatibles, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le pedimos verificar la información específica y actual en el sitio del fabricante https://www.eelink.com.cn/ antes de desplegar a gran escala.
