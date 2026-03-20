---
slug: /sinotrack/st_901l/protocol
id: st_901l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-901L Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para configurar e integrar el SinoTrack ST-901L con Plaspy para seguimiento vehicular confiable
keywords:
  - Protocolo SinoTrack ST-901L
  - Protocolo GPS SinoTrack ST-901L
  - Protocolo de rastreo SinoTrack ST-901L
  - Comunicación SinoTrack ST-901L
  - Compatibilidad ST 901L Plaspy
  - Configuración GPRS SMS ST 901L
  - protocolo rastreador vehicular Plaspy
  - protocolo rastreador motocicleta
  - protocolo mini GPS impermeable
  - guía protocolo rastreo de flotas
---

# SinoTrack - Protocolo ST-901L

Esta página documenta el contexto público del protocolo para usar el SinoTrack ST-901L con Plaspy. Explica cómo el dispositivo reporta típicamente ubicación y eventos, y qué esperar al integrarlo con los servicios de Plaspy. El contenido se centra en el comportamiento general del protocolo y la conexión, no en detalles internos de firmware ni en implementaciones privadas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo está configurado para enviar datos a los endpoints de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página resalta patrones comunes y consideraciones prácticas para una configuración y resolución de problemas exitosas.

## Resumen del protocolo

El ST-901L comunica posiciones, estados y alarmas a través de datos móviles y canales SMS estándar. El dispositivo ofrece opciones de configuración por SMS para la IP y APN, de modo que pueda apuntarse a servidores de terceros como Plaspy. En la práctica, la función del protocolo es entregar de forma fiable las posiciones GPS y las notificaciones de eventos desde el equipo hasta la plataforma de backend.

- Permite la entrega segura de actualizaciones de ubicación y telemetría desde el dispositivo hacia Plaspy para monitoreo en tiempo real.
- Transmite eventos de alarma y estado como detección de ACC, pérdida de alimentación principal, disparo de geocercas y alertas por exceso de velocidad.
- Soporta configuración de servidor y APN vía SMS para dirigir los reportes hacia un endpoint de Plaspy.
- Traduce las entradas del dispositivo y los estados de los sensores en eventos estructurados que Plaspy interpreta para paneles y alertas.
- Provee el mecanismo de transporte que permite funciones opcionales como el control remoto de relés dentro de flujos de trabajo de inmovilizador.

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint de entrada compartido que acepta conexiones de muchos rastreadores compatibles y determina automáticamente el protocolo adecuado según el tráfico entrante y los identificadores del dispositivo. En la mayoría de los casos solo necesita configurar el ST-901L para que reporte al endpoint de Plaspy y Plaspy se encargará de la detección del protocolo sin selección manual.

- Plaspy usa un único puerto compartido para todos los dispositivos compatibles y realiza detección automática del protocolo en las conexiones recibidas.
- Apuntar el rastreador al endpoint de Plaspy normalmente se realiza mediante comandos de configuración por SMS suministrados por el fabricante.
- El dominio del servidor y el endpoint alcanzable de Plaspy son d.plaspy.com y la IP del servidor 54.85.159.138 para direccionamiento directo.
- Debido a que la detección es automática, usted por lo general no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- Si un dispositivo no reporta como se espera, verifique la dirección del servidor, el APN y el tipo de transporte en el equipo y compruebe que el IMEI esté registrado o permitido por los flujos de trabajo de su cuenta Plaspy.

## Transporte y contexto de conexión

La elección del transporte y la correcta direcionamiento del servidor son esenciales para reportes confiables. El ST-901L puede enviar datos por canales de datos celulares y configurarse para usar UDP o TCP según el soporte del dispositivo y la configuración por SMS. Plaspy escucha en el mismo puerto para todos los dispositivos para simplificar la configuración.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración que usted elija.
- Plaspy acepta conexiones en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos, manteniendo un punto de integración consistente.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP directa 54.85.159.138 al configurar la dirección del servidor objetivo.
- Los pasos típicos de configuración son: establecer el APN, configurar la dirección y el puerto del servidor objetivo mediante los comandos SMS del dispositivo e insertar una SIM activa con datos habilitados.
- Asegúrese de que el transporte seleccionado y el APN permitan conexiones salientes hacia el endpoint de Plaspy desde la red del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las opciones de configuración del fabricante pueden cambiar el formato de los mensajes y las funciones disponibles.
- Las revisiones de hardware o las variantes regionales pueden ofrecer distintos conjuntos de bandas soportadas, opciones de transporte o comandos.
- Algunas funciones, como el control de relés externos o comportamientos específicos de alarma, pueden requerir cableado adicional o configuración en el equipo.
- La configuración por SMS para IP y APN es ampliamente compatible en este modelo, pero siga exactamente el conjunto de comandos SMS del fabricante al dirigir datos hacia Plaspy.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega; elija el transporte que coincida con la configuración de su equipo y las condiciones de la red.
- Valide siempre el comportamiento del dispositivo después de configurarlo observando reportes en vivo en Plaspy y verificando las respuestas del equipo.

## Por qué es importante entender el protocolo

Comprender cómo el ST-901L se comunica con Plaspy ayuda a asegurar una configuración correcta, telemetría confiable y manejo predecible de alarmas. Conocer el comportamiento del protocolo y del transporte reduce el tiempo de puesta en marcha y facilita la resolución de problemas cuando los dispositivos no aparecen en la plataforma como se espera.

- Acelera la configuración inicial al aclarar qué dirección de servidor, transporte y ajustes de APN aplicar.
- Facilita el diagnóstico de problemas de conectividad como reportes faltantes, eventos parciales o mapeo incorrecto de alarmas.
- Informa decisiones sobre selección de transporte y redundancia para mayor fiabilidad en condiciones de red difíciles.
- Aclara las expectativas sobre el comportamiento de funciones como reporte de ACC, alarmas por pérdida de energía, eventos de geocerca y control remoto de relés.
- Apoya la gestión del ciclo de vida al indicar cuándo diferencias de firmware o hardware podrían requerir ajustes de configuración.

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack ST-901L con Plaspy ofrece a organizaciones y particulares una solución compacta y confiable de rastreo vehicular con funciones adecuadas para motocicletas, scooters y autos pequeños. La forma compacta e impermeable del ST-901L, su conectividad 4G con fallback a GSM y las opciones de configuración por SMS facilitan apuntar el equipo a Plaspy y comenzar a recibir datos de posición y eventos para monitoreo, reportes y flujos básicos de inmovilizador.

El endpoint compartido de Plaspy y la detección automática de protocolo simplifican la integración: configure el ST-901L para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 (UDP o TCP según soporte) y Plaspy se encargará de la detección del protocolo y del procesamiento normal de eventos. Para conocer más sobre Plaspy y cómo funciona con una amplia gama de rastreadores visite https://www.plaspy.com. Para obtener el protocolo específico del dispositivo, el conjunto de comandos SMS y los detalles de firmware más recientes, verifique la documentación del fabricante en https://www.sinotrackgps.com/ porque el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
