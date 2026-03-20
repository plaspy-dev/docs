---
slug: /boxtrack/control/protocol
id: control-protocol
sidebar_label: Protocol
title: BoxTrack - Control Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador BoxTrack Control y compatibilidad con Plaspy para monitoreo vehicular confiable
keywords:
  - protocolo BoxTrack Control
  - BoxTrack Control GPS
  - protocolo de seguimiento BoxTrack
  - compatibilidad BoxTrack Plaspy
  - rastreador GPS BoxTrack
  - protocolo de seguimiento vehicular
  - protocolo de comunicación de rastreadores
  - gestión de flotas Plaspy
  - protocolo de dispositivo GPS
  - protocolo rastreador antirrobo
---

# BoxTrack - Protocolo de Control

Esta página ofrece el contexto público del protocolo para usar el rastreador BoxTrack Anti-Theft Control con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, qué mensajes y capacidades se intercambian con más frecuencia y qué debe considerarse al configurar el rastreador para que informe ubicación y estado a la plataforma Plaspy.

El BoxTrack Anti-Theft Control es un rastreador vehicular con múltiples funciones: precisión GPS inferior a 5 metros, corte remoto de motor, botón SOS, monitoreo de audio en vivo, alertas por sensor G, conectividad multi red, memoria interna para hasta 2,000 reportes y batería de respaldo. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según versiones de firmware, revisiones de hardware y decisiones del fabricante.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas y tipos de mensajes que el BoxTrack Control emplea para reportar posición, eventos de estado y telemetría a un servidor remoto. Para la integración con Plaspy, los aspectos públicos del protocolo determinan cómo se identifica el dispositivo, cómo entrega reportes periódicos o por evento y cómo transmite atributos clave como SOS, estado de encendido y alertas de sensores.

- El protocolo permite transmitir coordenadas GPS y marcas de tiempo para que Plaspy muestre ubicación precisa e historial.
- Los campos de telemetría como encendido, nivel de batería, eventos del sensor G y respuestas a controles remotos informan a Plaspy sobre el estado del dispositivo.
- Las alertas SOS y de emergencia se reportan para que Plaspy genere notificaciones y active flujos de respuesta.
- El protocolo admite almacenamiento en memoria interna para retener reportes durante pérdidas temporales de conectividad.
- Eventos relacionados con controles, como estado de corte de motor y acuses de recibo de comandos remotos, permiten que Plaspy refleje acciones remotas en la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un punto final de red compartido y detecta automáticamente el protocolo del rastreador utilizado por los dispositivos que reportan al servicio. En la mayoría de los casos, un instalador o la configuración del equipo solo deben apuntar el BoxTrack Control al endpoint y puerto de Plaspy; Plaspy intentará identificar el protocolo y comenzar a decodificar los mensajes compatibles.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y el puerto de escucha es 8888.
- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según la preferencia del instalador.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.
- Cuando el rastreador está configurado correctamente para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca la capa de transporte y el direccionamiento que el dispositivo utiliza para llegar a Plaspy. Para el BoxTrack Control, la selección del transporte y el objetivo DNS o IP determinan cuán confiable es la entrega de mensajes bajo distintas condiciones de red.

- El dispositivo puede usar UDP o TCP para reportar según el soporte del equipo y la configuración elegida.
- Plaspy acepta reportes entrantes en el puerto 8888 para todos los dispositivos compatibles.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 según opciones de configuración o restricciones de red.
- UDP puede ser útil para reportes frecuentes y ligeros, mientras que TCP puede ayudar con la entrega garantizada para mensajes más grandes o con acuses si el dispositivo lo soporta.
- Los cambios de red entre 4G y 2G afectan la resiliencia de la conectividad y pueden influir en el comportamiento de los reportes.

## Notas sobre compatibilidad del protocolo

- Los cambios de firmware pueden agregar, eliminar o modificar campos en los reportes salientes; verifique las notas de la versión del firmware para detectar cambios en el protocolo.
- Las revisiones de hardware a veces alteran entradas disponibles o el cableado de sensores, lo que afecta la telemetría reportada por el rastreador.
- Los menús de configuración del fabricante o los comandos de configuración por SMS pueden variar entre compilaciones de firmware; siga la documentación del dispositivo al establecer el endpoint de Plaspy.
- Elegir UDP frente a TCP afecta la semántica de entrega y puede requerir ajustes distintos en redes operadoras o dispositivos NAT.
- El comportamiento de la memoria interna (por ejemplo almacenar hasta 2,000 reportes) y las estrategias de carga pueden variar según el firmware y afectar cómo se recuperan los datos históricos.
- Verifique la compatibilidad probando un dispositivo en el endpoint de Plaspy antes de un despliegue a gran escala.

## Por qué importa entender el protocolo

Comprender cómo se comunica el BoxTrack Control ayuda a instaladores, integradores y gestores de flotas a lograr un despliegue confiable, diagnosticar problemas y asegurar datos operativos precisos en Plaspy. Tener expectativas claras sobre el protocolo reduce tiempos de configuración y mejora la respuesta ante incidentes.

- Una configuración correcta del endpoint y del transporte reduce reportes perdidos y asegura actualizaciones oportunas en Plaspy.
- Conocer los campos de telemetría disponibles permite mapear las capacidades del dispositivo con la supervisión y alertas de Plaspy.
- Estar al tanto de diferencias de firmware y hardware ayuda a priorizar actualizaciones y despliegues por etapas.
- Entender el almacenamiento en búfer y el comportamiento de la memoria facilita la interpretación de reportes retrasados o agrupados tras brechas de conectividad.
- La comprensión del protocolo facilita la resolución coordinada de problemas entre proveedores de dispositivos, operadores y el soporte de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el BoxTrack Anti-Theft Control con Plaspy otorga a las organizaciones visibilidad centralizada de la posición de los vehículos, eventos de seguridad y acciones de control remoto. El enfoque de endpoint compartido de Plaspy simplifica la configuración de dispositivos y la plataforma detecta automáticamente el protocolo del rastreador para que los equipos comiencen a reportar con una mínima configuración manual.

Plaspy soporta flujos empresariales para monitoreo de eventos SOS, seguimiento de rutas históricas y observación de alertas generadas por sensores como impactos o conducción brusca. Para saber más sobre cómo Plaspy puede trabajar con el BoxTrack Control y otros dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo en el sitio oficial del fabricante.
