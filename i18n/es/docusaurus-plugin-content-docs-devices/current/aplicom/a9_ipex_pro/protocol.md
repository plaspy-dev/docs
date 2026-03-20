---
slug: /aplicom/a9_ipex_pro/protocol
id: a9_ipex_pro-protocol
sidebar_label: Protocol
title: Aplicom - A9 IPEX PRO Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el Aplicom A9 IPEX PRO con Plaspy en seguimiento de flotas y telemetría
keywords:
  - protocolo Aplicom A9 IPEX PRO
  - protocolo GPS Aplicom A9 IPEX PRO
  - protocolo de comunicación Aplicom A9 IPEX PRO
  - protocolo de rastreo Aplicom A9 IPEX PRO
  - protocolo de rastreador Aplicom
  - rastreador GPS compatible con Plaspy
  - protocolo de telemática para flotas
  - protocolo de telemetría CAN
  - protocolo de rastreo vehicular
  - rastreador IoT industrial
---

# Aplicom - Protocolo A9 IPEX PRO

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Aplicom A9 IPEX PRO con Plaspy. Describe, en términos generales, cómo el dispositivo se comunica con los servidores de Plaspy y qué aspectos del comportamiento de reporte son relevantes para su despliegue, monitoreo y solución de problemas. El contenido está pensado para ayudar a equipos técnicos e integradores a comprender el papel de la comunicación sin revelar detalles internos del firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se centra en contexto general no sensible junto con los detalles de conexión de Plaspy necesarios para la integración.

## Descripción general del protocolo

El protocolo empleado por el A9 IPEX PRO permite al rastreador enviar posiciones GNSS, telemetría procedente del bus CAN y de las interfaces I/O, mensajes de evento y actualizaciones periódicas de estado a una plataforma backend como Plaspy. Define cómo el dispositivo se identifica, reporta cargas útiles de telemetría y señala eventos útiles para la gestión de flotas y la supervisión remota.

- Permite la transmisión de ubicación en tiempo real y telemetría desde el dispositivo al servidor para reproducción de rutas y generación de alertas.
- Transporta información de identidad y sesión del dispositivo para que Plaspy pueda asociar los mensajes con el activo correcto.
- Entrega datos del bus CAN, estado de entradas, acelerómetro y batería que Plaspy puede convertir en telemetría vehicular útil.
- Envía mensajes orientados a eventos, como movimiento, encendido, manipulación o estados del dispositivo, para su procesamiento inmediato.
- Soporta tanto entrega orientada a sesión como sin estado sobre capas de transporte comunes, de modo que los equipos funcionen con distintas condiciones de red.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint público compartido y determina automáticamente el protocolo del rastreador cuando un dispositivo reporta correctamente a ese endpoint. En la mayoría de los casos, los usuarios finales no necesitan seleccionar manualmente un protocolo dentro de Plaspy siempre que el rastreador esté configurado para enviar datos a la dirección y puerto correctos del servidor Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com, que resuelve al servicio de entrada de Plaspy.
- La IP pública del servidor Plaspy es 54.85.159.138 y se proporciona para entornos que requieren direccionamiento numérico.
- Plaspy escucha en un único puerto para todos los dispositivos y protocolos, lo que simplifica la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el tráfico llega al endpoint compartido, eliminando la necesidad de selección de protocolo por dispositivo en la mayoría de los despliegues.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para una detección automática exitosa.

## Transporte y contexto de conexión

El transporte de conexión describe cómo el A9 IPEX PRO entrega los mensajes del protocolo a Plaspy, no la estructura interna de esos mensajes. El dispositivo puede configurarse para usar alguno de los modos de transporte comunes soportados por módems celulares, y el endpoint de Plaspy acepta conexiones en el puerto compartido para todos los dispositivos.

- El equipo puede configurarse para usar UDP o TCP según el soporte del dispositivo y las opciones de configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica el aprovisionamiento y el despliegue masivo.
- Elija UDP cuando se desee menor sobrecarga de transporte y baja latencia para reportes periódicos y cuando el firmware del dispositivo lo soporte.
- Elija TCP cuando el firmware requiera un transporte orientado a sesión o cuando se prefiera semántica de entrega confiable.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar las funciones disponibles, la frecuencia de mensajes y los campos de la carga útil visibles para Plaspy.
- Las revisiones de hardware u opciones modulares del A9 IPEX PRO pueden afectar las fuentes de telemetría presentes, como opciones CAN o entradas adicionales.
- La selección de transporte entre UDP y TCP es configurable en el dispositivo y debe coincidir con la configuración utilizada durante el registro y las pruebas.
- Algunos despliegues utilizan las herramientas de gestión o las API de Aplicom para configuración remota, lo que puede alterar la forma en que el dispositivo reporta a Plaspy.
- Valide siempre que el dispositivo apunte al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 y que esté usando el transporte y puerto acordados.
- Confirme el comportamiento del dispositivo tras actualizaciones de firmware, ya que cambios en la cadencia de reporte o en el formato de eventos pueden afectar las integraciones.

## Por qué es importante comprender el protocolo

Tener una comprensión práctica del protocolo de reporte del rastreador ayuda a los equipos a configurar los dispositivos correctamente, solucionar problemas de conectividad y datos, y mantener una calidad consistente de telemetría con el paso del tiempo al usar Plaspy. Este conocimiento reduce el tiempo de despliegue y mejora la visibilidad operativa.

- Asegura la dirección correcta del dispositivo para que Plaspy pueda detectar y aceptar conexiones automáticamente.
- Facilita la resolución de problemas a nivel de transporte, como pérdida de paquetes, NAT o reglas de firewall que afectan reportes UDP o TCP.
- Aclara qué campos de telemetría y tipos de eventos están disponibles en una versión específica de firmware o revisión de hardware.
- Apoya decisiones operativas sobre cadencia de reporte y uso de red para gestionar los costos de datos celulares.
- Simplifica la coordinación entre técnicos de campo, gestores de flota y operadores backend durante actualizaciones o despliegues.

## Por qué usar Plaspy con este protocolo

Usar el Aplicom A9 IPEX PRO con Plaspy ofrece una vía práctica para capturar posicionamiento GNSS resistente, telemetría CAN y eventos basados en entradas dentro de una única plataforma de gestión de flotas. El modelo de detección automática de protocolos y el endpoint compartido de Plaspy reducen la complejidad de configuración, de modo que las organizaciones puedan centrarse en la visibilidad de activos y en los flujos operativos en lugar de en detalles de protocolo por dispositivo.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el A9 IPEX PRO, visite https://www.plaspy.com. Verifique los detalles actuales del protocolo específico del dispositivo, el comportamiento del firmware y las recomendaciones del fabricante en el sitio oficial de Aplicom https://www.aplicom.com/ ya que las implementaciones y las funciones de firmware pueden cambiar con el tiempo.
