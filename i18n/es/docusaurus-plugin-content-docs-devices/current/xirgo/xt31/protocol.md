---
slug: /xirgo/xt31/protocol
id: xt31-protocol
sidebar_label: Protocol
title: Xirgo - XT31 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar y comunicar el Xirgo XT31 con la plataforma Plaspy
keywords:
  - protocolo Xirgo XT31
  - protocolo GPS Xirgo XT31
  - compatibilidad XT31 Plaspy
  - protocolo Xirgo monitoreo de carga
  - protocolo rastreador XT31
  - comunicación Xirgo XT31
  - protocolo seguimiento de vehículos XT31
  - protocolo gateway IoT Xirgo
  - telemática XT31 para remolques
  - protocolo de dispositivo Plaspy
---

# Xirgo - Protocolo XT31

Esta página describe el contexto público del protocolo para usar el Xirgo XT31 con Plaspy. Se centra en cómo el XT31, un gateway IoT industrial y solución de monitoreo de carga para remolques y contenedores, se comunica con un backend de gestión de flotas para que Plaspy pueda ingerir telemetría de carga, actualizaciones de eventos e información histórica de estado para uso operativo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece contexto general y orientación de integración en lugar de detalles específicos de firmware.

## Descripción general del protocolo

El XT31 funciona como un gateway IoT que reporta el estado de la carga, la telemetría de sensores y actualizaciones basadas en eventos a un servidor backend. El protocolo del dispositivo regula cómo el XT31 se identifica, entrega paquetes de telemetría y señala eventos para que Plaspy pueda normalizar y presentar los datos junto con las señales del rastreador GPS.

- Define los mecanismos para que el XT31 informe el estado de la carga, lecturas de sensores y notificaciones de eventos a Plaspy.
- Permite la identificación del dispositivo y la continuidad de sesión para que Plaspy asocie los datos entrantes con el activo correcto.
- Soporta reportes en tiempo real e históricos para que Plaspy pueda generar alertas, paneles y registros para los operadores.
- Permite la integración de datos agregados del gateway con las señales de ubicación GPS para una vista operacional unificada.
- Se orienta a actualizaciones portables y basadas en eventos que facilitan flujos de trabajo automatizados y análisis en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint público y puerto compartidos y determina automáticamente el protocolo del dispositivo de origen. Cuando un XT31 está configurado para reportar al endpoint de Plaspy, la plataforma detectará y normalizará la entrada para que normalmente no sea necesaria la selección manual del protocolo dentro de Plaspy.

- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.
- El endpoint del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Los dispositivos configurados para reportar al endpoint de Plaspy serán identificados y asociados con el activo correcto en la plataforma.
- En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo en Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.
- Una configuración adecuada del dispositivo y credenciales de reporte correctas garantizan que Plaspy registre y procese los mensajes XT31 de forma consistente.

## Transporte y contexto de conexión

El XT31 puede configurarse para enviar telemetría y eventos sobre capas de transporte estándar según la capacidad y configuración del dispositivo. Para la comunicación con Plaspy, los detalles importantes de conexión son el host compartido y el puerto consistente que Plaspy utiliza para todos los dispositivos.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las necesidades operativas.
- Plaspy acepta tráfico entrante de dispositivos en el puerto 8888 para todos los dispositivos, incluido el XT31.
- El dispositivo puede apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP pública 54.85.159.138 como endpoint de reporte.
- La selección del transporte puede afectar las garantías de entrega y el comportamiento de los paquetes, pero no cambia que Plaspy reciba datos en el mismo puerto para cada dispositivo.
- Asegúrese de que cualquier firewall de red o la configuración APN del operador permitan conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir, eliminar o modificar campos de telemetría y comportamientos de eventos que afecten cómo se muestran los datos en Plaspy.
- Las revisiones de hardware u módulos de sensores opcionales en el XT31 pueden alterar el conjunto de flujos de telemetría disponibles.
- Las opciones de configuración del fabricante pueden permitir cambiar el transporte entre UDP y TCP o ajustar intervalos de reporte y umbrales de evento.
- Para una integración fiable, confirme que el XT31 esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Aunque Plaspy detecta automáticamente los protocolos entrantes, la configuración correcta del dispositivo y los identificadores adecuados siguen siendo necesarios para un emparejamiento consistente de activos.
- Siempre valide la compatibilidad para su revisión de firmware XT31 y la configuración de sensores específica contra la documentación oficial del fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del XT31 ayuda a garantizar una configuración exitosa, un flujo de datos fiable y una resolución de problemas efectiva al integrar la telemetría del dispositivo en Plaspy. Tener expectativas claras sobre el transporte, el comportamiento de reporte y la variabilidad del protocolo reduce la fricción en la integración y mejora los resultados operativos.

- Ayuda a diagnosticar problemas de conectividad y de análisis de datos entre el dispositivo y Plaspy.
- Informa la decisión entre TCP y UDP para su despliegue según necesidades de fiabilidad y latencia.
- Orienta la configuración de intervalos de reporte, umbrales de eventos y qué flujos de sensores se transmiten a Plaspy.
- Facilita la planificación de actualizaciones de firmware y cambios de hardware que puedan afectar la disponibilidad de telemetría.
- Permite una coordinación más eficaz con el soporte del fabricante cuando el comportamiento del dispositivo difiere de lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el XT31 con Plaspy incorpora telemetría centrada en la carga y agregación de gateway dentro de una vista unificada de gestión de flotas. El XT31 complementa las señales de los rastreadores GPS al entregar estado de la carga, evaluaciones de capacidad y actualizaciones basadas en eventos que Plaspy puede visualizar, alertar e incluir en los flujos operativos.

Plaspy ofrece ingestión centralizada y normalización de la telemetría del XT31 junto con datos de ubicación y del vehículo, ayudando a los equipos a mejorar el enrutamiento, la utilización de activos y los flujos de trabajo de seguridad. Para conocer más sobre cómo Plaspy funciona con dispositivos como el XT31 visite https://www.plaspy.com. Para los detalles más recientes sobre protocolo específico del dispositivo, comportamiento de firmware y guías de implementación consulte la documentación oficial del fabricante en https://xirgo.com/.
