---
slug: /trackerking/g909/protocol
id: g909-protocol
sidebar_label: Protocol
title: TrackerKing - G909 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del TrackerKing G909 y su comunicación con Plaspy mediante configuración compartida
keywords:
  - Protocolo TrackerKing G909
  - Protocolo GPS TrackerKing G909
  - Protocolo TrackerKing G909 para Plaspy
  - Protocolo de comunicación TrackerKing G909
  - Protocolo de rastreo TrackerKing G909
  - Compatibilidad G909 con Plaspy
  - Protocolo de rastreador GPS TrackerKing
  - Protocolo de rastreo vehicular G909
  - Protocolo GPS para flotas TrackerKing
  - Integración G909 con Plaspy
---

# TrackerKing - Protocolo G909

Esta página describe el contexto público del protocolo usado por el TrackerKing G909 con Plaspy. Aquí se explica cómo el dispositivo comunica información con la plataforma Plaspy, sin entrar en detalles propietarios, y de forma independiente a implementaciones concretas, para que integradores y administradores de flotas comprendan el papel del protocolo en el reporte de posiciones, eventos y la integración con la plataforma.

El G909 es un rastreador vehicular empotrado, diseñado para posicionamiento continuo, reporte de encendido ACC, notificación de alarmas y control remoto de inmovilizador. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas que el G909 emplea para enviar posición, telemetría y eventos de alarma a un servidor remoto. En el contexto de Plaspy, el protocolo garantiza que el equipo pueda identificarse, entregar datos de ubicación y estado útiles, y recibir actualizaciones de control gestionadas por la plataforma. Esta página evita detalles de paquetes propietarios, pero explica cómo encaja el protocolo dentro de una integración con Plaspy.

- Permite la entrega periódica y por eventos de telemetría para que Plaspy reciba posición, velocidad, batería y estado de alarmas.
- Proporciona información de identidad y sesión que permite a Plaspy asociar mensajes entrantes con el registro correcto del dispositivo.
- Transporta tipos de alarma como SOS, vibración, geocerca y exceso de velocidad para que las alertas y flujos de trabajo de la plataforma se activen.
- Transmite telemetría relacionada con encendido y kilometraje utilizada para análisis de viajes, eventos de arranque/parada e informes operativos.
- Soporta señales de control remoto desde la plataforma, como comandos de inmovilizador cuando la funcionalidad está soportada por el firmware del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe informes entrantes en un endpoint y puerto compartidos, y está diseñado para reconocer automáticamente el formato de reporte del dispositivo. Cuando un G909 se configura para reportar al endpoint de Plaspy, la plataforma identifica el tipo de dispositivo y asigna los mensajes al registro correspondiente sin requerir selección manual de protocolo en la mayoría de los casos.

- El endpoint del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 como referencia a nivel de red.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles; el puerto público de Plaspy es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy.
- Normalmente solo necesita configurar el G909 para reportar a d.plaspy.com o a 54.85.159.138 usando el transporte y puerto correctos.
- Un registro adecuado del dispositivo en Plaspy y una configuración de reporte correcta aseguran que la plataforma pueda corresponder los mensajes entrantes con su cuenta.

## Transporte y contexto de conexión

El G909 puede configurarse para usar UDP o TCP según el firmware instalado y la configuración realizada durante la instalación. En las integraciones con Plaspy, la elección del transporte afecta el comportamiento a nivel de red, pero no cambia que Plaspy reciba y procese el protocolo del dispositivo en un endpoint y puerto comunes de la plataforma.

- El dispositivo puede configurarse para UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como servidor destino para el envío de informes.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el lado del dispositivo y el enrutamiento en la plataforma.
- La fiabilidad de la red, el comportamiento del operador y los firewalls pueden influir en si UDP o TCP es preferible en una región determinada.
- Asegúrese de que las reglas de firewall y NAT permitan tráfico saliente hacia el servidor Plaspy y el transporte elegido en el puerto 8888.

## Notas de compatibilidad del protocolo

- Las actualizaciones de firmware del G909 pueden cambiar comandos disponibles, campos de mensaje y el comportamiento en el reporte de eventos; verifique las notas de firmware para cambios en el protocolo.
- Las revisiones de hardware pueden modificar las entradas soportadas o el cableado de alarmas, manteniendo a nivel alto un protocolo similar.
- Algunas funciones, como inmovilizador remoto y monitoreo por voz, dependen de la configuración del dispositivo y accesorios instalados, y pueden variar según el modelo regional.
- La selección de transporte entre UDP y TCP es configurable en el dispositivo y debe ajustarse a los requisitos de la red y la instalación.
- Asegure que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para conectarse a Plaspy y permitir la detección automática del protocolo.
- Valide siempre la compatibilidad y el comportamiento contra la documentación del fabricante para el lote de producción y la versión de firmware específica.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del G909 facilita una configuración correcta, un comportamiento predecible y una resolución de problemas más eficiente al integrar dispositivos con Plaspy. Conocer el contexto de conexión y qué reporta el rastreador ayuda a los administradores a confirmar que la telemetría, las alarmas y los controles remotos funcionan como se espera.

- Confirma la configuración correcta del servidor y del transporte para que los dispositivos lleguen a Plaspy de forma fiable.
- Ayuda a interpretar la telemetría entrante y las alarmas en la plataforma cuando se diagnostican datos faltantes o discrepancias en eventos.
- Aclara las dependencias entre el comportamiento del firmware y las funcionalidades de la plataforma, como respuestas del inmovilizador y reporte ACC.
- Informa la planificación de red respecto a UDP frente a TCP y cómo eso afecta la entrega de mensajes y retransmisiones.
- Orienta las decisiones sobre actualizaciones de firmware para preservar funciones necesarias y la compatibilidad con la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el TrackerKing G909 con Plaspy proporciona a los operadores de flota visibilidad centralizada de la ubicación de los vehículos, estado de encendido, kilometraje y eventos de alarma, al mismo tiempo que habilita flujos de trabajo en la plataforma para alertas y acciones remotas. La combinación de un rastreador empotrado con batería interna de respaldo y el manejo de dispositivos de Plaspy es adecuada para flotas y propietarios que necesitan monitoreo continuo, resistencia a manipulación y capacidades de respuesta remota.

Para obtener más información sobre Plaspy y cómo se integra el G909 con la plataforma visite https://www.plaspy.com. Para conocer el firmware más actualizado, el comportamiento detallado del dispositivo y las recomendaciones del fabricante, verifique los detalles del protocolo específicos del dispositivo en el sitio de TrackerKing https://trackerking.cn/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
