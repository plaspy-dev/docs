---
slug: /coban/bn_407/protocol
id: bn_407-protocol
sidebar_label: Protocol
title: Coban - BN-407 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Coban BN-407 y cómo se comunica con Plaspy para rastreo y alertas en tiempo real
keywords:
  - Protocolo Coban BN-407
  - Protocolo GPS Coban BN-407
  - Protocolo de rastreo BN-407
  - Compatibilidad BN-407 Plaspy
  - Protocolo rastreador GPS Coban
  - Protocolo GPS para bicicleta
  - Comunicación rastreador de bicicleta
  - Rastreo de flotas Coban BN-407
  - Protocolo de dispositivo Plaspy
  - Protocolo de comunicación de rastreadores
---

# Coban - Protocolo BN-407

Esta página explica el contexto público del protocolo para usar el rastreador GPS Coban BN-407 con la plataforma Plaspy. Resume cómo el dispositivo reporta ubicaciones y eventos a Plaspy de forma general y sin detalles sensibles, y cómo esas comunicaciones encajan en un flujo de gestión de flotas o activos para bicicletas y pequeños bienes.

El BN-407 es una terminal compacta 4G diseñada para instalación discreta, bajo consumo y alarmas configurables. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto de los mensajes y las funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Cuando es útil, esta página referencia los endpoints de Plaspy y las opciones de transporte generales empleadas para la integración del BN-407.

## Resumen del protocolo

El protocolo de comunicación del BN-407 permite al rastreador identificarse ante un backend, reportar posiciones GNSS y enviar alarmas por eventos que Plaspy puede ingerir y presentar como ubicaciones en vivo, historial y notificaciones. La función del protocolo es entregar telemetría de manera fiable y a la vez soportar ahorro de energía y prioridades de alarma adecuadas para uso en bicicletas.

- Transmite actualizaciones de posición y telemetría para que Plaspy muestre ubicación en vivo y recorridos históricos.
- Envía notificaciones de alarma y eventos por geocerca, impacto, movimiento, exceso de velocidad y batería baja para activar alertas en Plaspy.
- Proporciona identificación e información de sesión para que Plaspy asocie los reportes con el registro de dispositivo correcto.
- Soporta múltiples transportes para que el dispositivo opere en diversos entornos de red y ahorre batería.
- Permite cambios de estado y disparos remotos según lo soportado por el firmware y los comandos del fabricante.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y determina el protocolo según el formato de los datos entrantes. En la mayoría de las implementaciones usted no necesita seleccionar un protocolo dentro de Plaspy mientras el dispositivo esté configurado para reportar al endpoint correcto de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para direccionamiento directo.
- El puerto que usa Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos compatibles con Plaspy, como el BN-407, pueden configurarse para usar UDP o TCP en el puerto 8888 según las opciones del dispositivo y las condiciones de red.
- Cuando el BN-407 reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el equipo correspondiente.
- Una configuración adecuada del dispositivo para enviar reportes al endpoint de Plaspy suele evitar la selección manual del protocolo dentro de la plataforma.

## Transporte y contexto de conexión

La elección de transporte afecta la conectividad, la latencia y el consumo de batería. El BN-407 soporta transportes móviles comunes que le permiten enviar telemetría mientras optimiza energía y cobertura para despliegues en bicicletas.

- El BN-407 puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 si se prefiere direccionamiento directo.
- Usar TCP ofrece entrega orientada a conexión, mientras que UDP puede reducir la sobrecarga; el BN-407 soporta ambos para adaptarse a distintos despliegues.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las reglas de firewall en flotas grandes.
- El transporte por SMS puede estar disponible para la configuración inicial o como respaldo según el firmware del BN-407 y el soporte de la red regional.

## Notas sobre compatibilidad

- Las versiones de firmware y las revisiones de hardware pueden cambiar las funciones soportadas y el comportamiento de los mensajes; confirme el firmware compatible antes de desplegar a escala.
- Los comandos de configuración del fabricante o los ajustes por defecto pueden variar según la región o el distribuidor; siempre valide que el dispositivo esté configurado para reportar al endpoint de Plaspy.
- La selección de transporte (UDP versus TCP) puede afectar las características de entrega y debe probarse en su entorno de despliegue.
- Algunas funciones avanzadas u opciones de alarma pueden depender del firmware y no estar presentes en todas las unidades.
- Confirme el comportamiento GNSS, la gestión de energía y las alarmas consultando la documentación del fabricante antes de una instalación masiva.
- Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta correctamente al endpoint y puerto compartidos, lo que reduce la configuración manual.

## Por qué importa entender el protocolo

Conocer cómo se comunica el BN-407 ayuda a asegurar reportes fiables, un mapeo correcto de alarmas y un uso eficiente de la batería cuando el dispositivo se administra desde Plaspy. Tener expectativas claras sobre transporte, intervalos de reporte y disparadores de eventos reduce el tiempo de integración y el trabajo de resolución de problemas.

- Garantiza que los reportes del dispositivo lleguen a Plaspy y se asocien con el registro de activo correspondiente.
- Ayuda a elegir el transporte y el intervalo de reporte adecuados para equilibrar precisión y duración de la batería.
- Facilita el diagnóstico de problemas de conectividad al acotar si el origen es la red, el transporte o la configuración.
- Permite planificar actualizaciones de firmware y despliegues de funciones que pueden modificar el comportamiento de los mensajes.
- Mejora el manejo de alarmas al clarificar qué eventos reportará el dispositivo y cómo Plaspy los presentará.

## Por qué usar Plaspy con este protocolo

Usar el BN-407 con Plaspy ofrece a los operadores rastreo discreto y de larga autonomía para bicicletas, junto con una plataforma que ingiere posiciones y datos de alarma para monitoreo en vivo, reproducción de historial y notificaciones configurables. Esta combinación es adecuada para flotas de bicicletas compartidas, operadores de alquiler y configuraciones antirrobo personales donde el hardware oculto y el reporte eficiente son importantes.

Plaspy simplifica la conectividad exponiendo un único endpoint y puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando una unidad reporta correctamente a la plataforma. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y la documentación del fabricante consulte la página de Coban https://www.coban.net/. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que es recomendable revisar los recursos del fabricante.
