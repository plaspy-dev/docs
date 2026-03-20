---
slug: /coban/bn_405c/protocol
id: bn_405c-protocol
sidebar_label: Protocol
title: Coban - BN-405C Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Coban BN-405C y cómo comunica ubicación y eventos a Plaspy en tiempo real
keywords:
  - protocolo Coban BN 405C
  - protocolo GPS Coban BN 405C
  - protocolo BN 405C Plaspy
  - protocolo de comunicación BN 405C
  - protocolo de rastreo BN 405C
  - protocolo rastreador GPS Coban
  - dispositivos compatibles Plaspy
  - protocolo seguimiento vehicular
  - protocolo gestion de flotas rastreador
  - compatibilidad Coban BN 405C
---

# Coban - Protocolo BN-405C

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Coban BN-405C con Plaspy. Explica, en términos generales, cómo el BN-405C informa ubicación, telemetría y alarmas a una plataforma como Plaspy y qué aspectos conviene considerar al configurar y validar el dispositivo. La información aquí se centra en detalles operativos no sensibles que ayudan a flotas e integradores a comprender el comportamiento del equipo sin exponer implementaciones privadas.

El BN-405C soporta enlaces celulares multired y transportes comunes de plataforma como TCP, UDP y SMS, lo que facilita la integración con Plaspy para ubicación en vivo y alertas de eventos. Plaspy acepta los reportes de dispositivos en el endpoint compartido d.plaspy.com (54.85.159.138) en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP hacia esa dirección y puerto. Plaspy usa el mismo puerto para todos los dispositivos admitidos y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo del BN-405C define cómo el rastreador transmite identidad, posición, estado y eventos de alarma a un servidor para que esos mensajes sean aprovechables por una plataforma de flotas. En el contexto de Plaspy, el protocolo permite que la unidad envíe coordenadas GNSS, telemetría y notificaciones de eventos que alimentan mapas en tiempo real, alertas y reproducción histórica.

- Permite que el rastreador se identifique ante el servidor para asociar los datos con el vehículo y el registro de dispositivo correctos.
- Transporta reportes de posición GNSS y telemetría como estado de ignición, nivel de batería y entradas de sensores para uso en paneles y alertas.
- Entrega mensajes de alarma y eventos por violaciones de geocerca, exceso de velocidad, pérdida de alimentación y otras condiciones configuradas.
- Soporta múltiples transportes para que los dispositivos puedan reportar vía TCP, UDP o SMS según la red y la configuración.
- Proporciona un mecanismo para que la plataforma correlacione reportes del dispositivo en viajes, alertas e historial de auditoría sin exponer detalles internos del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de una amplia gama de modelos de rastreadores minimizando la configuración manual. Cuando un BN-405C o un dispositivo similar envía mensajes al endpoint de Plaspy, la plataforma asocia automáticamente esos reportes entrantes con el dispositivo y el modelo de datos correcto.

- Plaspy recibe los reportes de dispositivos en d.plaspy.com y en la misma IP pública 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente apuntado al endpoint de Plaspy, por lo que normalmente no es necesario seleccionar un protocolo dentro de la plataforma.
- La configuración adecuada del dispositivo en el equipo es el requisito principal para asegurar la detección automática y la asociación correcta del dispositivo.
- Si un dispositivo no puede resolver el nombre de dominio, configurar el equipo para usar la dirección IP proporcionada puede ser una alternativa.

## Contexto de transporte y conexión

La elección del transporte afecta cómo el BN-405C reenvía mensajes a Plaspy y cómo la red maneja la entrega y la latencia. Muchas unidades soportan tanto UDP como TCP, y en algunos despliegues SMS puede usarse como respaldo para configuración y alertas.

- El BN-405C puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las preferencias de despliegue.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la dirección IP 54.85.159.138 para reportar.
- Usar UDP puede reducir la sobrecarga y la latencia en reportes de posición frecuentes, mientras que TCP ofrece una opción orientada a conexión cuando el dispositivo lo soporta.
- SMS sigue siendo un canal alternativo para configuración remota y alertas críticas cuando la conectividad de datos por paquetes es limitada.
- Asegúrese de que el APN y la provisión de la SIM estén correctos para que el rastreador alcance el endpoint de Plaspy de manera confiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles y las funciones opcionales, por lo que debe verificarse el comportamiento para la versión específica de firmware en uso.
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas celulares disponibles y el soporte de transportes, lo que a su vez influye en la conectividad hacia Plaspy.
- Algunas funciones, como sensores opcionales, interfaces de audio o integración de cámara, requieren configuración por dispositivo y pueden depender de elementos adicionales del protocolo.
- La selección de transporte entre TCP y UDP es una elección de configuración; verifique que el firmware del BN-405C soporte su transporte preferido y el comportamiento de sesión.
- Los comandos y el reporte de respaldo por SMS pueden variar según el conjunto de comandos del fabricante y deben validarse con el manual del dispositivo.
- Valide la configuración del dispositivo y pruebe el reporte de extremo a extremo a Plaspy durante la instalación para confirmar la detección del protocolo y el mapeo correctos.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del BN-405C y del contexto de transporte ayuda a garantizar una integración fluida y un funcionamiento confiable con Plaspy. Saber qué envía el dispositivo y cómo se conecta reduce tiempos de inactividad y facilita la resolución de problemas.

- Asegura la configuración correcta del dispositivo para que los reportes lleguen a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a diagnosticar problemas de conectividad como APN incorrecto, desajuste de transporte o brechas en la cobertura de red.
- Aclara qué tipos de telemetría y alarmas estarán disponibles para paneles, alertas y reproducción histórica.
- Apoya la planificación de actualizaciones de firmware y lanzamientos de funciones que puedan cambiar el comportamiento del protocolo.
- Reduce la ambigüedad al coordinar con instaladores, proveedores de SIM y el fabricante del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el Coban BN-405C con Plaspy brinda visibilidad centralizada de la posición del vehículo, alarmas y telemetría para operaciones de flota, logística y procesos antirrobo. La detección automática de protocolo y el modelo de endpoint único de Plaspy simplifican la incorporación de dispositivos, de modo que los equipos puedan concentrarse en la operación en vez de en la selección de protocolos por equipo.

Plaspy acepta reportes en d.plaspy.com (54.85.159.138) en el puerto 8888 y usa el mismo puerto para todos los dispositivos compatibles. Si desea obtener más información sobre Plaspy y cómo funciona con rastreadores compatibles como el BN-405C, visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y variantes de hardware más recientes, verifique la información en el sitio del fabricante https://www.coban.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
