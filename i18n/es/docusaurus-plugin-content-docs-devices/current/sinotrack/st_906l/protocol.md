---
slug: /sinotrack/st_906l/protocol
id: st_906l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-906L Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para usar el rastreador SinoTrack ST 906L con Plaspy, con enfoque en conexión, informes y alertas
keywords:
  - Protocolo SinoTrack ST-906L
  - Protocolo GPS SinoTrack ST-906L
  - Compatibilidad ST-906L Plaspy
  - Protocolo rastreador SinoTrack
  - Protocolo de seguimiento ST-906L
  - Protocolo de dispositivo Plaspy
  - Protocolo GPS vehicular SinoTrack
  - Protocolo de comunicación ST 906L
  - Integración rastreador SinoTrack
  - Protocolo telemetría ST-906L
---

# SinoTrack - Protocolo ST-906L

Esta página describe el contexto público del protocolo para usar el rastreador SinoTrack ST-906L con Plaspy. Se centra en cómo el dispositivo comunica ubicación y eventos a una plataforma centralizada, el papel del protocolo de reporte en la entrega de datos telemétricos y qué considerar al conectar un ST-906L a Plaspy para monitoreo de flotas o unidades individuales. La descripción se basa en las capacidades habituales del ST-906L, como conectividad LTE/GSM, GNSS de alta sensibilidad, reportes por SMS y GPRS, y las funciones del dispositivo más relevantes para telemetría y alertas.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo comienza a reportar a la plataforma. El endpoint público de Plaspy es d.plaspy.com y el servicio es accesible en 54.85.159.138 usando el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración final dependerá del firmware y la configuración específicos del aparato.

## Resumen del protocolo

El protocolo de comunicación es el mecanismo por el cual el ST-906L envía posición, estado y alarmas a un servidor remoto y recibe instrucciones de gestión. En la práctica, esto significa que el rastreador transmite ubicaciones, estados de entradas y sensores, y notificaciones de eventos a través de la conexión celular a Plaspy, mientras que la configuración y el control pueden realizarse vía SMS, ajustes GPRS o comandos de plataforma cuando el dispositivo lo soporta.

- Permite entregar posición GPS, marca temporal y telemetría básica como estado de ACC, alimentación y nivel de batería a Plaspy.
- Transporta notificaciones de eventos como SOS, exceso de velocidad, impacto, rupturas de geocerca y pérdida de alimentación principal para alertas inmediatas.
- Proporciona un mecanismo de identificación para que Plaspy asocie los reportes entrantes con la cuenta y el IMEI correctos.
- Permite configuración remota cuando el equipo acepta comandos por SMS o ajustes GPRS para APN, dominio o IP del servidor y intervalos de reporte.
- Soporta reportes continuos o basados en eventos según la configuración del dispositivo y el comportamiento del firmware.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint compartido y determina automáticamente el protocolo del rastreador en función de los datos entrantes y la identificación del equipo. Para la mayoría de usuarios esto significa que, una vez que el ST-906L esté configurado para enviar datos a Plaspy, no será necesario seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en un mismo puerto para todos los dispositivos, por lo que la incorporación se concentra en lograr conectividad correcta más que en elegir un protocolo entre varios.
- El dominio público de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para configuraciones directas por IP.
- Plaspy usa el puerto 8888 para el reporte y monitoreo de dispositivos; ese mismo puerto se emplea para todos los rastreadores compatibles.
- El sistema está diseñado para identificar automáticamente el formato de reporte y mapearlo al parser y cuenta adecuados.
- Si un dispositivo está enviando datos al endpoint de Plaspy y está autorizado por la configuración de la cuenta, por lo general aparecerá sin selección manual de protocolo.

## Transporte y conexión

Las opciones de transporte y conexión determinan cómo el ST-906L alcanza el endpoint de ingestión de Plaspy. El ST-906L soporta reporte por datos celulares y configuración vía SMS, y puede configurarse para usar UDP o TCP según lo permita el dispositivo y la preferencia del instalador.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 en casos donde no se use DNS.
- El puerto de reporte utilizado por Plaspy para todos los dispositivos es 8888 y se admiten tanto UDP como TCP si el firmware del rastreador lo permite.
- GPRS o LTE son los transportes primarios para telemetría en tiempo real y reportes de eventos hacia Plaspy; SMS se utiliza a menudo para la configuración inicial o como respaldo de alertas.
- Elija UDP cuando prefiera menor sobrecarga en los reportes si está soportado, o TCP para entrega orientada a conexión si el dispositivo y la red lo favorecen.
- Asegúrese de que el APN y los parámetros de la SIM estén correctamente configurados en el ST-906L para que pueda establecer una sesión de datos y alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los tipos de reporte disponibles, el conjunto exacto de campos en los reportes y la frecuencia de transmisión.
- Revisiones de hardware o módulos opcionales pueden introducir diferencias en entradas soportadas, comportamiento de sensores o comandos para periféricos.
- Las convenciones de configuración por parte del fabricante pueden variar; muchas unidades ST-906L se configuran comúnmente mediante comandos SMS para establecer dominio y puerto del servidor.
- La elección del transporte importa; no toda instalación soporta UDP y TCP de igual manera debido al comportamiento de redes móviles o reglas de firewall.
- Plaspy detecta protocolos automáticamente, pero es necesario apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para una detección fiable.
- Valide siempre la compatibilidad y notas específicas de firmware con la documentación del fabricante antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el ST-906L facilita una configuración más rápida, resolución de problemas eficaz y una operación a largo plazo más confiable al integrarlo con Plaspy. El conocimiento del protocolo también ayuda a alinear el comportamiento de reporte del dispositivo con las necesidades de reporte de la flota y las estrategias de alerta.

- Facilita la configuración inicial correcta del APN, dominio o IP del servidor y el tipo de transporte para que el dispositivo alcance Plaspy.
- Ayuda a diagnosticar por qué un dispositivo podría no aparecer en Plaspy al revisar conexión, transporte y asociación de cuenta.
- Permite a los administradores definir intervalos de reporte y umbrales de eventos adecuados a las restricciones de red y batería.
- Soporta un manejo predecible de eventos clave como pérdida de alimentación, SOS, exceso de velocidad y acciones del inmovilizador en Plaspy.
- Ayuda a evaluar si una actualización de firmware o una revisión de hardware puede afectar la integración existente.

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack ST-906L con Plaspy ofrece visibilidad centralizada de la ubicación de vehículos, alertas de eventos y rutas históricas. La combinación del ST-906L de conectividad LTE/GSM, GNSS integrado y entradas comunes para vehículos lo hace práctico para despliegues en flotas, motocicletas y automóviles donde se requiere monitoreo remoto y control antirrobo.

Si desea saber más sobre cómo Plaspy puede recibir la telemetría del ST-906L y ofrecer mapeo, alertas y supervisión de flota visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente del protocolo y del firmware del dispositivo con el fabricante en https://www.sinotrackgps.com/.
