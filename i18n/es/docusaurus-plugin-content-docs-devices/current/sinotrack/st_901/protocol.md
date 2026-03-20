---
slug: /sinotrack/st_901/protocol
id: st_901-protocol
sidebar_label: Protocol
title: SinoTrack - ST-901 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SinoTrack ST 901 y guía de conexión con Plaspy para seguimiento en tiempo real
keywords:
  - protocolo SinoTrack ST 901
  - protocolo GPS SinoTrack ST 901
  - compatibilidad ST 901 Plaspy
  - protocolo de rastreo ST 901
  - comunicación tracker SinoTrack
  - compatibilidad dispositivos Plaspy
  - rastreo vehicular ST 901
  - configuración inmovilizador ST 901
  - rastreador GPS GPRS SMS
  - seguimiento de flotas ST 901
---

# SinoTrack - Protocolo ST-901

Esta página describe el contexto público del protocolo para usar el tracker SinoTrack ST-901 con Plaspy. Se enfoca en los aspectos de comunicación y conexión relevantes al apuntar el dispositivo a Plaspy para seguimiento en tiempo real, telemetría y entrega de alertas. El contenido está pensado para gestores de flotas, integradores y personal técnico que necesite información clara y no sensible sobre cómo el dispositivo reporta a una plataforma cloud de terceros.

El ST-901 es un tracker compacto e impermeable con conexión de 4 pines, diseñado para motocicletas, scooters, automóviles y camiones ligeros. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El ST-901 soporta reportes por GPS, GPRS y SMS y con frecuencia se configura mediante comandos SMS para enviar sus datos a un servidor de terceros para integración.

## Descripción general del protocolo

El protocolo de comunicación del ST-901 define cómo el tracker formatea y envía mensajes de ubicación, estado y alarma por datos celulares o SMS para que una plataforma cloud como Plaspy pueda recibir y mostrar la información. Esta página no reproduce formatos de mensajes propietarios; en su lugar explica el contexto público de conexión y operación que necesita para integrar el dispositivo con Plaspy.

- El protocolo permite que el dispositivo reporte coordenadas GPS, el estado de encendido (ACC), alertas por pérdida de alimentación y eventos de geocerca o exceso de velocidad a un servidor remoto.
- Proporciona la base para la identificación de eventos, de modo que Plaspy pueda mapear los mensajes entrantes al estado del dispositivo y a las alertas correspondientes.
- Transportado por GPRS celular o SMS, la comunicación posibilita telemetría en tiempo real y una opción de respaldo por SMS cuando no hay datos móviles.
- Los comandos de configuración enviados por SMS establecen la dirección del servidor, el puerto y el APN para que el ST-901 reenvíe sus reportes al endpoint seleccionado.
- Con una configuración adecuada, el tracker suministra los datos que Plaspy necesita para mapeo, alertas y notificaciones basadas en reglas sin requerir selección manual del protocolo en la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint de ingestión compartido y determina automáticamente el protocolo del tracker a partir de los patrones de datos entrantes y los identificadores del dispositivo. En la mayoría de los despliegues no es necesario seleccionar un protocolo específico dentro de Plaspy cuando el tracker está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un dominio e IP comunes para los reportes de dispositivos: d.plaspy.com y 54.85.159.138.
- La plataforma usa un único puerto para la comunicación de dispositivos, por lo que todos los dispositivos compatibles reportan al mismo puerto.
- Plaspy detecta automáticamente el protocolo del tracker después de que el dispositivo se conecta por primera vez y envía datos identificadores.
- Cuando el ST-901 está configurado para apuntar al endpoint de Plaspy, la integración típica requiere solo establecer por SMS la dirección del servidor, el puerto y el APN.
- Si no se detecta un dispositivo, verifique que el tracker esté enviando datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto configurado.

## Transporte y contexto de conexión

Las opciones de conexión influyen en cómo el ST-901 llega a Plaspy. El tracker soporta reportes estándar por GPRS y configuración por SMS, y se puede establecer para usar UDP o TCP según la capacidad del modelo y la configuración del usuario. Entender las opciones de transporte y direccionamiento ayuda a asegurar la entrega fiable a Plaspy.

- Los dispositivos pueden configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- El ST-901 puede usar transporte UDP o TCP al enviar datos a Plaspy en el puerto 8888, según lo que soporte el dispositivo y la configuración aplicada.
- Plaspy emplea el mismo número de puerto para todos los dispositivos compatibles para simplificar la configuración y el enrutamiento del servidor.
- Al configurar por SMS, ajuste la dirección del servidor y el puerto al endpoint de Plaspy y confirme que el APN es el correcto para la tarjeta SIM en uso.
- Elija UDP para reportes ligeros o TCP cuando se prefiera un enlace orientado a conexión, teniendo en cuenta el comportamiento del operador y del dispositivo.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden modificar el tiempo de mensajes, los campos disponibles o los transportes soportados; confirme el nivel de firmware del tracker al diagnosticar problemas.
- Las revisiones de hardware y las variantes regionales del modelo pueden cambiar las bandas GSM soportadas o funciones disponibles como el comportamiento de respaldo por SMS.
- Los comandos de configuración del fabricante y la sintaxis exacta de los SMS pueden variar según el firmware y deben validarse en la documentación oficial de SinoTrack.
- La selección de transporte entre UDP y TCP afecta las características de entrega y puede requerir ajustes distintos en el dispositivo.
- Las reglas de registro de IMEI y los procedimientos de activación locales en algunos países pueden afectar el despliegue y deben planificarse con antelación.
- Valide el APN y la conectividad de la SIM de forma independiente a la dirección del servidor para aislar problemas a nivel de red.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el tracker ayuda a asegurar una integración confiable y acelera la resolución de problemas cuando un dispositivo no aparece en Plaspy. Entender el contexto de conexión, el transporte y los puntos comunes de configuración reduce el tiempo de despliegue y favorece la estabilidad operativa continua.

- Una configuración correcta de la dirección del servidor y el puerto garantiza que los datos lleguen a Plaspy sin intervención manual en la plataforma.
- Conocer las diferencias entre UDP y TCP ayuda a elegir el transporte más resistente para su despliegue.
- Comprender los comandos de configuración por SMS agiliza la puesta en marcha remota de dispositivos que no cuentan con interfaz cableada de configuración.
- Reconocer la variación en firmware y hardware permite ajustar expectativas sobre disponibilidad de funciones y comportamiento.
- Confirmar el APN y la conectividad de la SIM elimina causas comunes de falta de conectividad antes de un análisis de protocolo más profundo.

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack ST-901 con Plaspy ofrece a las organizaciones visibilidad consolidada de la ubicación del vehículo, estado de encendido, alarmas por pérdida de alimentación y notificaciones basadas en eventos junto con las funciones de gestión de plataforma que ofrece Plaspy. La forma compacta e impermeable del ST-901, su entrada ACC y el soporte de relé para inmovilización lo hacen una opción práctica para seguridad y monitoreo de flotas cuando la instalación discreta y el reporte fiable son importantes.

Para conocer más sobre cómo Plaspy trabaja con una amplia gama de trackers vehiculares y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para el comportamiento más actualizado del firmware del dispositivo, el conjunto de comandos SMS y detalles de modelos por región, verifique la documentación específica del fabricante en https://www.sinotrackgps.com/ ya que el soporte de protocolo y la implementación del dispositivo pueden cambiar con el tiempo.
