---
slug: /topten/tk228/protocol
id: tk228-protocol
sidebar_label: Protocol
title: TopTen - TK228 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del TopTen TK228 y cómo se comunica con Plaspy para rastreo y diagnóstico
keywords:
  - TopTen TK228
  - protocolo TopTen TK228
  - protocolo del rastreador GPS TK228
  - compatibilidad TopTen con Plaspy
  - TK228 CAN BUS OBDII
  - protocolo de rastreo TK228
  - comunicación GPS TopTen
  - rastreo de vehículos TK228
  - protocolo de dispositivo Plaspy
  - guía de protocolo de rastreador GPS
---

# TopTen - Protocolo TK228

Esta página ofrece una visión pública y de alto nivel sobre el contexto de comunicación del TopTen TK228 cuando se utiliza con Plaspy. Se centra en cómo el equipo suele reportar ubicación, datos de diagnóstico y eventos de alarma a un servidor de flotas, y en qué aspectos debe fijarse al configurar el rastreador para que funcione con Plaspy. El objetivo es explicar el papel del protocolo y las bases de la conexión sin exponer detalles sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el TK228 comienza a reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware del TK228, la revisión de hardware y la implementación del fabricante, por lo que usted debe validar las configuraciones específicas del equipo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El TK228 utiliza su protocolo de reporte para transmitir la posición GPS, la ubicación por celdas GSM como respaldo, diagnósticos del bus CAN y eventos de alarma desde el vehículo hacia un servidor remoto. El protocolo define cómo el equipo se identifica, reporta datos periódicos y por eventos, y transmite cargas con estado o diagnósticos que plataformas de flotas como Plaspy consumen para mapeo, alertas y análisis.

- Transporta actualizaciones de posición e información de estaciones base GSM para mejorar la precisión de la ubicación y ofrecer un mecanismo de respaldo.
- Transmite datos de diagnóstico del vehículo y del bus CAN que permiten monitorear odómetro, velocidad, estado del motor y códigos de error.
- Envía eventos de alarma y de sensores como vibración, movimiento, geovallas, exceso de velocidad, pérdida de alimentación y disparos de inmovilizador.
- Incluye campos de identificación y estado del equipo que permiten al servidor asociar los mensajes entrantes con un vehículo o IMEI específico.
- Permite flujos de diagnóstico y control remoto a través de canales GPRS cuando el dispositivo y la configuración del fabricante lo soportan.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los datos reportados en un único endpoint compartido y identifica automáticamente el protocolo del rastreador para poder parsear los mensajes entrantes. Para la mayoría de los usuarios esto significa que no es necesario seleccionar manualmente el protocolo dentro de Plaspy, siempre que el TK228 esté configurado para reportar al endpoint de Plaspy.

- Plaspy escucha los reportes de los equipos en d.plaspy.com y en la IP pública 54.85.159.138 usando el puerto estándar de Plaspy.
- Todos los dispositivos usados con Plaspy reportan al mismo número de puerto, lo que simplifica la configuración y el onboarding.
- El TK228 puede apuntar al endpoint de Plaspy y, una vez que los mensajes llegan, Plaspy detecta el protocolo adecuado para ese modelo de dispositivo o tipo de mensaje.
- Generalmente usted solo necesita configurar el APN, la dirección del servidor y el tipo de transporte en el TK228; Plaspy se encarga de la detección del protocolo automáticamente.
- Si los mensajes del equipo no llegan o no se parsean, verifique la selección del transporte, la dirección del servidor y la compatibilidad del firmware del dispositivo.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo los mensajes del TK228 alcanzan el servidor de Plaspy, pero no cambian los detalles del endpoint público. El TK228 puede configurarse para usar UDP o TCP según el firmware y las opciones locales, y puede apuntar tanto al dominio de Plaspy como a la dirección IP.

- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como endpoint de reporte.
- El puerto estándar de Plaspy usado por todos los dispositivos es el 8888 y puede emplearse tanto sobre UDP como TCP.
- Elija UDP o TCP en el TK228 según la fiabilidad de la red y la capacidad del equipo; ambos transportes son aceptados por Plaspy en el mismo puerto.
- Asegúrese de que el APN y la configuración GPRS sean correctos para que el dispositivo pueda establecer una conexión de datos celular con el endpoint de Plaspy.
- Confirme que las redes del operador y los sistemas del vehículo no bloqueen el transporte o el puerto seleccionado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué y cómo reporta el TK228; verifique la versión de firmware del dispositivo al solucionar problemas de compatibilidad.
- Las revisiones de hardware y las diferencias en el cableado del bus CAN pueden afectar qué señales del vehículo están disponibles a través del protocolo del dispositivo.
- Algunas funciones del TK228, como diagnóstico Bluetooth, control de alarmas RFID e inmovilizador inalámbrico, se gestionan localmente y pueden no siempre transmitirse por GPRS a un servidor.
- La selección de transporte entre UDP y TCP puede influir en el comportamiento de entrega en redes con restricciones; pruebe el transporte elegido en su entorno.
- Las configuraciones por defecto del fabricante pueden apuntar a otros proveedores de servicios; actualice la dirección del servidor a d.plaspy.com o 54.85.159.138 y el puerto 8888 para la integración con Plaspy.
- Valide la disponibilidad de funciones y el comportamiento del protocolo contra la documentación del fabricante antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TK228 ayuda a asegurar una configuración fluida, una resolución de problemas efectiva y un funcionamiento confiable a largo plazo dentro de Plaspy. Comprender el rol del protocolo reduce las conjeturas cuando faltan eventos, los diagnósticos son incompletos o surgen problemas de transporte.

- Acelera la puesta en marcha al aclarar qué dirección de servidor y transporte debe usar el equipo.
- Facilita el diagnóstico de reportes faltantes comprobando si los mensajes alcanzan d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Orienta las decisiones sobre actualizaciones de firmware y habilitación de funciones cuando se requieren campos de datos específicos.
- Apoya el mapeo adecuado de señales del bus CAN y OBDII a las expectativas de la plataforma de flotas.
- Mejora el manejo de alarmas e inmovilizadores al aclarar qué eventos el equipo reportará al servidor.

## Por qué usar Plaspy con este protocolo

Usar el TK228 con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación del vehículo, su estado y diagnósticos en una sola plataforma. La detección automática de protocolos y el enfoque de endpoint unificado de Plaspy simplifican la incorporación para que las flotas puedan concentrarse en la supervisión y las operaciones en lugar de la gestión de protocolos de bajo nivel.

Si desea conocer más sobre Plaspy y cómo la plataforma trabaja con dispositivos como el TopTen TK228, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar las especificaciones más recientes del dispositivo TK228 y las notas de firmware en el sitio del fabricante http://www.t10.cn.
