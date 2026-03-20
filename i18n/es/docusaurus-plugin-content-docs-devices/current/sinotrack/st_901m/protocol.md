---
slug: /sinotrack/st_901m/protocol
id: st_901m-protocol
sidebar_label: Protocol
title: SinoTrack - ST-901M Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del SinoTrack ST-901M y su comunicación con Plaspy para rastreo en tiempo real y telemetría
keywords:
  - protocolo SinoTrack ST 901M
  - protocolo GPS SinoTrack ST 901M
  - protocolo de comunicación ST 901M
  - protocolo de rastreo ST 901M
  - compatibilidad SinoTrack Plaspy
  - guía de protocolo para rastreadores GPS
  - protocolo seguimiento de vehículos
  - integración GPRS SMS para rastreadores
  - configuración APN ST 901M
  - compatibilidad de dispositivos Plaspy
---

# SinoTrack - Protocolo ST-901M

Esta página ofrece contexto público sobre el protocolo para usar el rastreador cableado SinoTrack ST-901M con Plaspy. Se centra en cómo el dispositivo transmite telemetría y eventos a un servidor de monitoreo de terceros y qué debe considerar al apuntar los datos del ST-901M hacia Plaspy para rastreo en vivo, alertas y funciones básicas de control remoto.

El ST-901M reporta posición GNSS, estado de ignición y eventos de alarma por GPRS o SMS y puede configurarse mediante comandos SMS para enviar datos a un endpoint de monitoreo. Plaspy utiliza ajustes de conexión compartidos para dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el formato exacto de los reportes y el comportamiento pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre verifique las instrucciones específicas del equipo en la documentación oficial del fabricante antes de realizar cambios de configuración.

## Resumen del protocolo

El ST-901M emplea el protocolo de reporte que SinoTrack implementa para entregar datos de ubicación y estado a un servidor remoto. En la práctica, ese protocolo define cómo se identifica el dispositivo, cuándo envía actualizaciones y cómo se codifican alarmas y telemetría para que una plataforma como Plaspy pueda procesarlas.

- Permite enviar coordenadas GNSS, marca de tiempo y estado de movimiento desde el rastreador hacia un servidor de monitoreo.
- Transporta notificaciones de eventos como encendido/apagado de ignición, alertas de exceso de velocidad y disparos de alarma, para que las plataformas presenten alertas e historial.
- Facilita la asociación del dispositivo a una cuenta de usuario mediante campos de identificación como el IMEI, de modo que el servidor dirija la telemetría al registro vehicular correcto.
- Soporta la configuración de intervalos de reporte y reportes por eventos para equilibrar el uso de datos y la oportunidad de la información.
- Proporciona el mecanismo para el reenvío de comandos de la plataforma al dispositivo cuando la implementación lo soporta, habilitando funciones como control remoto del inmovilizador.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes entrantes de dispositivos en un endpoint de red compartido y detecta automáticamente el protocolo del rastreador utilizado por los equipos que reportan. Eso significa que cuando un ST-901M está correctamente configurado para enviar datos al endpoint de Plaspy, la plataforma identificará y procesará su telemetría sin que normalmente sea necesario seleccionar el protocolo de forma manual.

- Plaspy escucha en el dominio de servidor compartido d.plaspy.com y en la IP pública 54.85.159.138 usando el puerto 8888.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP para enviar reportes a Plaspy en el puerto 8888.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, lo que simplifica la configuración y el enrutamiento en el servidor.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios por lo general no necesitan elegir un protocolo dentro de la plataforma cuando el equipo apunta al endpoint de Plaspy.
- Es imprescindible una correcta configuración del APN y de la dirección IP o dominio de la plataforma en el equipo para una detección y reporte confiables.

## Transporte y contexto de conexión

El contexto de conexión cubre las opciones de transporte y direccionamiento que usa el ST-901M al enviar datos a un servidor de monitoreo. El ST-901M soporta el reenvío de datos por GPRS y puede usar SMS como respaldo; el método de transporte elegido influye en cómo llegan los reportes a Plaspy.

- El ST-901M puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración seleccionada.
- Los equipos pueden apuntar al servidor de Plaspy mediante el dominio d.plaspy.com o mediante la IP 54.85.159.138 según lo permita la configuración del dispositivo.
- El puerto 8888 es el puerto estándar que Plaspy utiliza para todos los dispositivos compatibles, por lo que ajustes consistentes facilitan los despliegues.
- GPRS es el canal de datos en tiempo real principal, mientras que SMS puede utilizarse para configuración o como respaldo de emergencia cuando no hay datos disponibles.
- Asegúrese de que la SIM y los ajustes de APN sean correctos y de que el equipo tenga acceso a la red para alcanzar el endpoint de Plaspy y garantizar una telemetría confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de versión de firmware pueden cambiar la cadencia de reportes, los eventos disponibles y el formato exacto de los campos incluso para el mismo modelo.
- Las revisiones de hardware o las variantes regionales del ST-901M pueden implementar comportamientos de reporte o características soportadas ligeramente distintos.
- Las opciones de configuración del fabricante, como los conjuntos de comandos SMS, determinan cómo actualizar el APN y los valores de dirección de plataforma que apuntan el dispositivo a Plaspy.
- La elección entre UDP y TCP afecta las garantías de entrega y el comportamiento en condiciones de red deficientes.
- Valide la compatibilidad probando un equipo de punta a punta con Plaspy y confirmando los ajustes en la documentación oficial de SinoTrack.
- El reenvío de comandos de plataforma al dispositivo depende del soporte por parte del operador de red, del plan de la SIM y de si la implementación está configurada para aceptar comandos.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el ST-901M ayuda a garantizar una configuración fluida, telemetría confiable y una resolución de problemas eficaz al integrar el equipo con Plaspy. Tener claro el contexto de comunicación reduce el tiempo de despliegue y mejora la confianza operativa para gestores de flotas e integradores.

- Ayuda a confirmar los ajustes correctos de APN y dirección de plataforma para que los datos lleguen a Plaspy de forma confiable.
- Facilita el diagnóstico de reportes faltantes al distinguir problemas de transporte de red de fallas a nivel del dispositivo.
- Apoya la planificación del manejo de eventos como exceso de velocidad o eventos de ignición, ajustando intervalos de reporte a las necesidades operativas.
- Aclara si funciones de comando a dispositivo, como el control remoto del inmovilizador, están disponibles en su implementación.
- Reduce la ambigüedad al validar que Plaspy detectó automáticamente el protocolo del equipo y está ingestando la telemetría correctamente.

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack ST-901M con Plaspy ofrece a las organizaciones una vía directa para obtener visibilidad de vehículos en tiempo real y capacidades básicas de control remoto. La instalación cableada del ST-901M, su detección de ignición y el reporte por GPRS lo convierten en una opción práctica para flotas, vehículos particulares y monitoreo de activos donde se requiere telemetría robusta y siempre conectada.

El enfoque de endpoint unificado de Plaspy significa que puede configurar el ST-901M para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y confiar en que la plataforma detectará automáticamente el protocolo del rastreador e iniciará la ingestión de datos de ubicación y eventos. Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y comandos de configuración por SMS consulte al fabricante en https://www.sinotrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse en las fuentes oficiales.
