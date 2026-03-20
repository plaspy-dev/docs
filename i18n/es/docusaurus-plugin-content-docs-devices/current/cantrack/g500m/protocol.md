---
slug: /cantrack/g500m/protocol
id: g500m-protocol
sidebar_label: Protocol
title: CanTrack - G500M Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del CanTrack G500M y cómo comunica con Plaspy para rastreo vehicular confiable
keywords:
  - protocolo CanTrack G500M
  - protocolo GPS CanTrack G500M
  - rastreador G500M Plaspy
  - rastreador OBD CanTrack
  - protocolo de comunicación G500M
  - rastreo vehicular G500M
  - protocolo rastreador GPS Plaspy
  - telemetría G500M
  - rastreador OBD plug and play
  - gestión de flotas G500M
---

# CanTrack - Protocolo G500M

Esta página explica el contexto público del protocolo para usar el CanTrack G500M Mini GPS Tracker con Plaspy. Se centra en cómo el G500M informa posición, estado de encendido y eventos de movimiento a una plataforma backend, y qué aspectos de esa comunicación son relevantes para una integración exitosa con Plaspy. El G500M es un rastreador OBD plug and play compacto que usa GSM GPRS para reportes TCP/IP e incluye funciones como detección de ACC, eventos por sensor G, almacenamiento local de posiciones y reportes programados.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. Los dispositivos compatibles con Plaspy pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 usando el puerto compartido 8888. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso es importante validar los detalles específicos del dispositivo con la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo del dispositivo define cómo el G500M empaqueta y transmite telemetría para que sistemas backend como Plaspy puedan ingerir datos de ubicación, estado y eventos. Para una integración práctica, el protocolo garantiza que el rastreador pueda identificarse, proporcionar actualizaciones de posición útiles y entregar notificaciones de eventos, al tiempo que soporta reconexión confiable y subida de datos almacenados tras interrupciones de cobertura.

- Permite reportar coordenadas GPS, estado de ignición ACC y eventos de movimiento o colisión a Plaspy.
- Transporta identidad del dispositivo e información de tiempo para que Plaspy asocie los mensajes entrantes con el registro vehicular correcto.
- Admite almacenamiento local y posterior reenvío de posiciones en buffer cuando vuelve la conectividad de red.
- Proporciona banderas de evento para alarmas como desconexión o encendido que Plaspy puede convertir en alertas.
- Usa transporte IP estándar para que los dispositivos apunten a un endpoint de Plaspy para recolección centralizada.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido los reportes de dispositivos y aplica detección automática de protocolo para identificar mensajes de rastreadores compatibles. Cuando un G500M está configurado correctamente para reportar a Plaspy, la plataforma normalmente detectará el protocolo del dispositivo sin que el usuario tenga que seleccionarlo manualmente.

- Plaspy acepta conexiones entrantes en el puerto compartido 8888 para todos los dispositivos soportados.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138.
- Plaspy detecta automáticamente el protocolo del rastreador al recibir tráfico de un dispositivo configurado correctamente.
- La mayoría de usuarios no necesita elegir un protocolo manualmente en Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.
- Una identidad de dispositivo correcta y períodos de reporte consistentes ayudan a Plaspy a mantener un mapeo preciso de los equipos.

## Transporte y contexto de conexión

El contexto de conexión cubre las opciones de capa de transporte que el G500M puede usar para llegar a Plaspy y las opciones prácticas de configuración disponibles para el equipo. Dependiendo del firmware y la configuración del dispositivo, el G500M puede usar UDP o TCP para enviar su telemetría a Plaspy en el puerto común.

- El G500M puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y su aprovisionamiento.
- Los dispositivos pueden dirigirse al dominio d.plaspy.com o a la dirección numérica 54.85.159.138 para el reporte.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos a fin de simplificar la configuración entre modelos.
- TCP ofrece una opción orientada a conexión mientras que UDP puede utilizarse para uplinks más pequeños o con menor sobrecarga según el firmware.
- Asegúrese de que el APN y la configuración celular del dispositivo permitan conexiones salientes hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar funciones de mensaje, eventos disponibles y la selección de transporte por defecto; verifique las notas de firmware antes del despliegue.
- Revisiones de hardware o variantes regionales del G500M pueden implementar opciones de reporte o valores por defecto ligeramente distintos.
- Pueden requerirse comandos de configuración del fabricante y pasos de aprovisionamiento para apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Algunas funciones avanzadas, como escucha remota de voz o comportamientos especializados de alarma, pueden depender del firmware y de las regulaciones regionales.
- El transporte debe elegirse según las capacidades del dispositivo y los requisitos operativos de confiabilidad y latencia.
- Siempre valide un dispositivo en una unidad de prueba antes de realizar un despliegue masivo para confirmar que Plaspy recibe la telemetría esperada.

## Por qué es importante comprender el protocolo

Tener una comprensión clara y práctica del protocolo de reporte del G500M ayuda a asegurar una configuración confiable, una resolución de problemas más eficiente y datos históricos consistentes dentro de Plaspy. Saber cómo y cuándo reporta el dispositivo, y qué eventos puede generar, reduce la ambigüedad durante la puesta en marcha y las operaciones continuas.

- Acelera el aprovisionamiento inicial al confirmar el dominio del servidor, la IP y los ajustes de transporte correctos.
- Simplifica la resolución de problemas cuando la telemetría se detiene al restringir las comprobaciones a transporte, APN y comportamiento del firmware.
- Ayuda a predecir cómo se comporta el almacenamiento offline y la re subida tras brechas de cobertura.
- Aclara qué eventos e entradas el dispositivo puede reportar a Plaspy para alertas y automatizaciones.
- Permite tomar decisiones informadas sobre la colocación y configuración del equipo para lograr la mejor recepción GPS y cobertura celular.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G500M con Plaspy ofrece visibilidad centralizada de la ubicación del vehículo, estado de encendido y telemetría de eventos sin cableado complejo ni instalaciones prolongadas. El factor de forma OBD plug and play, combinado con la ingestión por parte de Plaspy de reportes GSM GPRS, hace del G500M una opción práctica para gestores de flotas, operadores de alquiler y propietarios de vehículos que buscan actualizaciones de ubicación oportunas, registro de viajes y alertas dentro de una plataforma gestionada.

Para obtener más información sobre Plaspy y cómo maneja el reporte de dispositivos y flujos de trabajo de flotas visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la documentación más reciente y específica del dispositivo en el sitio del fabricante https://www.cantrackgps.com/ antes del despliegue.
