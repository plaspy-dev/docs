---
slug: /cantrack/tk08a/protocol
id: tk08a-protocol
sidebar_label: Protocol
title: CanTrack - TK08A Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo del CanTrack TK08A y cómo se comunica con Plaspy para seguimiento GPS y telemetría confiables
keywords:
  - protocolo CanTrack TK08A
  - protocolo GPS CanTrack TK08A
  - CanTrack TK08A Plaspy
  - protocolo de comunicación TK08A
  - protocolo de rastreo TK08A
  - protocolo de rastreador GPS CanTrack
  - protocolo TK08A para motocicletas
  - seguimiento de flotas TK08A
  - compatibilidad de dispositivos Plaspy
  - detección de protocolo de rastreador Plaspy
---

# CanTrack - Protocolo TK08A

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack TK08A con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos abiertos y no sensibles, para que gerentes de flota, integradores y personal técnico comprendan el papel del protocolo de reporte del rastreador en una integración exitosa. El TK08A es un rastreador compacto, cableado, diseñado para motocicletas y vehículos pequeños; ofrece ubicación GPS, conectividad GPRS, capacidad de inmovilizador antirrobo, telemetría de alarmas y reportes de respaldo breves con una batería interna Li-Polymer.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Los ajustes del servidor de Plaspy para el reporte de dispositivos son d.plaspy.com y 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente, por lo que los dispositivos correctamente configurados suelen comenzar a reportar sin necesidad de seleccionar el protocolo manualmente dentro de Plaspy.

## Resumen del protocolo

El protocolo de reporte TK08A regula cómo el rastreador se identifica, transmite datos de posición y eventos, y señala alarmas y actualizaciones de estado que Plaspy procesa para mapas, alertas e informes. A grandes rasgos, el protocolo provee la estructura necesaria para la identidad del dispositivo, reportes periódicos o por evento, y la telemetría mínima requerida por los flujos de trabajo de flotas y seguridad.

- Permite que el dispositivo presente identidad y estado para que Plaspy asocie los mensajes entrantes con el activo correcto.
- Transmite posición, hora, velocidad y estados básicos de sensores para que Plaspy muestre ubicación en vivo y rutas históricas.
- Comunica eventos de alarma y manipulación como estado de ignición, vibración, corte de alimentación y disparos del inmovilizador para alertas oportunas.
- Soporta el almacenamiento en búfer y la subida de posiciones guardadas tras la restauración de la conectividad, preservando la continuidad del historial de rastreo.
- Opera sobre métodos de reporte por datos celulares comúnmente usados por rastreadores de vehículos, lo que permite a Plaspy procesar los mensajes en tiempo real.

## Detección del protocolo por Plaspy

Plaspy recibe tráfico de dispositivos en un endpoint y puerto compartidos y realiza la detección automática de protocolos de rastreadores compatibles. Para la mayoría de los usuarios esto significa que cuando el TK08A se configura con la dirección de reporte de Plaspy y el transporte correcto, Plaspy identificará y procesará el dispositivo sin necesidad de seleccionar el protocolo manualmente.

- Los dispositivos reportan al servidor Plaspy d.plaspy.com o a la IP de respaldo 54.85.159.138 en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Normalmente no es necesario seleccionar un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy usando el transporte apropiado.
- Los pasos básicos de configuración en el dispositivo suelen incluir la dirección del servidor, la selección del transporte y la identidad correcta del dispositivo para que Plaspy pueda emparejar los mensajes entrantes.
- Si surgen problemas, revisar los procedimientos de configuración por SMS o USB del dispositivo y la documentación del fabricante puede ayudar a verificar que los parámetros de reporte sean correctos.

## Contexto de transporte y conexión

El TK08A puede enviar datos a Plaspy mediante reporte por datos celulares o, como respaldo, mediante envíos por SMS para ciertos eventos. El contexto de conexión determina cómo el dispositivo llega a Plaspy y qué transporte usa para el reporte en vivo y la reconexión tras interrupciones.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y las opciones de configuración.
- Plaspy acepta tráfico de rastreadores en d.plaspy.com y 54.85.159.138 usando el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica los ajustes de servidor entre distintos modelos de rastreadores.
- Cuando la cobertura celular se interrumpe, el TK08A almacena posiciones localmente y sube los datos en búfer cuando la conexión se restablece.
- La selección del transporte (UDP vs TCP) puede afectar el comportamiento de entrega y debe coincidir con las recomendaciones del fabricante para la versión de firmware específica.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato de los mensajes del rastreador, lo que podría afectar la compatibilidad con cualquier plataforma receptora.
- Las revisiones de hardware u opciones de funcionalidades en la familia TK08A pueden introducir variaciones en los campos de telemetría disponibles y en el reporte de alarmas.
- La elección del transporte es importante: algunos builds de firmware prefieren UDP mientras que otros soportan reporte por TCP al mismo puerto del servidor Plaspy.
- El reporte por SMS suele estar disponible como respaldo para alarmas críticas, pero puede requerir una configuración separada distinta al reporte por GPRS.
- Siempre valide los ajustes de identidad del dispositivo para que Plaspy pueda mapear los reportes entrantes con el vehículo o activo correcto.
- Confirme la compatibilidad con la documentación del fabricante al desplegar grandes cantidades de dispositivos o al mezclar versiones de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador reduce la incertidumbre durante la instalación y solución de problemas, y ayuda a garantizar la entrega confiable de telemetría y alarmas a Plaspy. Saber cómo y cuándo reporta el dispositivo facilita la configuración de los ajustes del servidor, el diagnóstico de problemas de conectividad y la validación de que los eventos importantes llegan a sus flujos de monitoreo.

- Asegura que se aplique la dirección del servidor y el transporte correctos durante la configuración del dispositivo para que los datos lleguen a Plaspy.
- Ayuda a resolver ubicaciones faltantes revisando el comportamiento de búfer y subida tras brechas de cobertura.
- Aclara cómo se representan las alarmas y los eventos de ignición para que las alertas en Plaspy sean precisas y accionables.
- Orienta en la decisión de usar respaldos por SMS frente a GPRS para la entrega de eventos críticos.
- Facilita despliegues consistentes a escala de flota al resaltar variaciones de firmware o hardware que conviene tener en cuenta.

## Por qué usar Plaspy con este protocolo

Usar el TK08A con Plaspy ofrece a las organizaciones una vía práctica para recopilar datos de posición, sensores y alarmas desde rastreadores compactos para motocicletas y vehículos pequeños. La combinación es útil para la gestión de flotas mixtas, flujos de trabajo antirrobo con control remoto de inmovilizador y proyectos de telemática que dependen de reportes consistentes y la reconstrucción de rutas históricas.

Para conocer más sobre Plaspy y cómo se integra con dispositivos como el CanTrack TK08A visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware e instrucciones de configuración más actuales, verifique la información en el sitio del fabricante https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
