---
slug: /tzone/tz_avl09/protocol
id: tz_avl09-protocol
sidebar_label: Protocol
title: TZone - TZ-AVL09 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del TZone TZ-AVL09 y cómo se comunica con Plaspy para monitoreo vehicular confiable
keywords:
  - Protocolo TZone TZ-AVL09
  - Protocolo GPS TZone TZ-AVL09
  - Compatibilidad TZ-AVL09 con Plaspy
  - Protocolo rastreador GPS TZone
  - Seguimiento vehicular TZ-AVL09
  - Gestión de flotas TZone
  - Protocolo de comunicación TZone
  - Protocolo de rastreador GPS Plaspy
  - Protocolo de seguimiento TZ-AVL09
  - Guía del protocolo TZone
---

# TZone - Protocolo TZ-AVL09

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS TZone TZ-AVL09 con Plaspy. Resume cómo el dispositivo se comunica con los servidores de Plaspy en términos generales y no sensibles, para que usted entienda las expectativas de conexión, las opciones de transporte y el papel del protocolo de reporte del equipo en una implementación con Plaspy. Los detalles técnicos se describen en función de los comportamientos públicos y las capacidades del dispositivo, no de la lógica interna del firmware.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al punto de conexión de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. La descripción del producto TZone arriba sirve como referencia factual para esta página y explica las capacidades del equipo que influyen en cómo típicamente reporta posición, alarmas y el estado de E/S a un servidor remoto.

## Resumen del protocolo

El protocolo de reporte TZ-AVL09 es el mecanismo que el dispositivo emplea para identificarse ante un servidor remoto, transmitir datos GPS y de sensores, y notificar alarmas o cambios de estado. En términos generales, el protocolo define los tipos de mensajes que envía el rastreador, el transporte que utiliza y cómo el servidor interpreta esos mensajes para convertirlos en actualizaciones de ubicación y estado útiles dentro de Plaspy.

- Permite reportes periódicos y por eventos para que Plaspy pueda trazar posición y movimiento.
- Transmite estado de alarmas y entradas como exceso de velocidad, geocerca, SOS, vibración y baja batería para soportar alertas.
- Permite que el servidor reconozca la identidad del dispositivo y el contexto de la sesión para asociar los datos con el activo correcto.
- Admite el envío de telemetría desde sensores y accesorios opcionales como nivel de combustible, temperatura y eventos RFID.
- Opera sobre transportes de datos móviles estándar o SMS según la configuración del dispositivo y la disponibilidad de la red.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones en un punto de entrada compartido y analiza los reportes entrantes para determinar la rutina de parseo adecuada. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al punto de conexión de Plaspy usando las configuraciones recomendadas.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y el tráfico puede enrutarse a esa dirección si no se usa DNS.
- La plataforma escucha en el puerto 8888 para todos los dispositivos y todos los modelos compatibles usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP para enviar datos a Plaspy, dependiendo del rastreador y la configuración de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint, por lo que normalmente no hace falta seleccionar el protocolo manualmente.
- Si un dispositivo no reporta como se espera, verificar el transporte, el destino y la configuración de firmware suele ser un primer paso eficaz.

## Transporte y contexto de conexión

Las decisiones de conexión determinan cómo el TZ-AVL09 establece y mantiene la comunicación con Plaspy. El rastreador soporta conexiones de datos GPRS y puede enviar reportes a una dirección IP o a un nombre DNS. Comprender las opciones de transporte y el punto de conexión ayuda a asegurar la entrega fiable de posiciones GPS y alarmas.

- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y el comportamiento deseado.
- Los dispositivos pueden apuntar al nombre DNS d.plaspy.com o directamente a 54.85.159.138 como destino de reporte.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración del servidor para flotas con múltiples modelos.
- Las condiciones de red, la configuración del APN y el enrutamiento del operador pueden afectar la entrega de paquetes y pueden influir en si TCP o UDP es preferible.
- El TZ-AVL09 también admite SMS para comandos y mensajería de respaldo en algunas configuraciones, pero el reporte de datos a Plaspy normalmente usa datos móviles.
- Asegúrese de que el APN y el destino del servidor estén correctamente configurados en el rastreador para permitir que llegue al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar los mensajes que envía un TZ-AVL09 y cómo se reportan las funciones opcionales; confirme el firmware del rastreador al solucionar problemas.
- Las revisiones de hardware y módulos opcionales como sensores externos, cámara o registro en SD pueden afectar la telemetría disponible, pero no el destino público de conexión.
- La elección entre TCP y UDP puede estar limitada por el firmware del dispositivo o ser requerida por conjuntos de funciones específicos, como la confirmación bidireccional.
- Los comandos de configuración del fabricante y el control por SMS pueden alterar la frecuencia de reporte, condiciones de alarma y comportamiento del transporte.
- Valide siempre la compatibilidad probando un dispositivo en el endpoint de Plaspy en lugar de confiar únicamente en el nombre del modelo.
- Consulte la documentación oficial del fabricante para opciones de configuración específicas del modelo que influyan en el comportamiento del protocolo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador le ayuda a configurar los equipos correctamente, diagnosticar problemas de reporte y diseñar flujos de monitoreo de flotas fiables dentro de Plaspy. Saber cómo el dispositivo reporta identidad, posición y alarmas facilita la puesta en marcha y asegura un funcionamiento más predecible.

- Incorporación de dispositivos más rápida asegurando APN y destino correctos para d.plaspy.com o 54.85.159.138.
- Resolución de problemas más ágil cuando las alarmas o actualizaciones de ubicación no llegan por discrepancias de transporte o firmware.
- Mejor planificación del uso de funciones como control de puertas, corte de motor o telemetría de sensores según los métodos de reporte soportados.
- Menor tiempo de inactividad al identificar cuándo las diferencias de firmware o hardware afectan el contenido o la frecuencia de los mensajes.
- Expectativas más claras para trabajos de integración al asignar dispositivos a Plaspy y mapear entradas a eventos de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el TZone TZ-AVL09 con Plaspy ofrece una forma práctica de centralizar datos de ubicación, alarmas y sensores en una plataforma de gestión de flotas. La combinación de las capacidades del equipo —como detección de movimiento, entradas de puerta y motor, múltiples puertos de E/S y periféricos opcionales— con el modelo de endpoint compartido de Plaspy puede simplificar el despliegue y reducir el esfuerzo de configuración por equipo.

Si desea conocer más sobre cómo Plaspy gestiona la conectividad de dispositivos y las funcionalidades de flota, visite https://www.plaspy.com. Para detalles específicos recientes del protocolo del dispositivo, notas de firmware y opciones de hardware del TZ-AVL09, verifique la información actual en el sitio del fabricante http://www.tzonedigital.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
