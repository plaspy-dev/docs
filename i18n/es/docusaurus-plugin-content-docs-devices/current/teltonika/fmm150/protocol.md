---
slug: /teltonika/fmm150/protocol
id: fmm150-protocol
sidebar_label: Protocol
title: Teltonika - FMM150 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar Teltonika FMM150 con Plaspy en seguimiento y telemetría
keywords:
  - Teltonika FMM150
  - protocolo FMM150
  - GPS FMM150
  - protocolo Teltonika
  - FMM150 Plaspy
  - telemetría vehicular
  - seguimiento de flotas
  - telemetría CAN
  - telemetría EV
  - rastreador LTE Cat M1
---

# Teltonika - Protocolo FMM150

Esta página describe el contexto público del protocolo para utilizar el rastreador Teltonika FMM150 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, qué puntos de conexión usar y qué considerar al integrar ubicación y telemetría derivada del CAN en un flujo de trabajo de gestión de flotas.

El FMM150 combina LTE Cat M1 con NB IoT y retroceso 2G, e incluye un procesador de datos CAN integrado que expone más de 100 parámetros del vehículo. Plaspy usa configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conjuntos de comandos específicos del dispositivo o detalles de firmware consulte la documentación oficial de Teltonika.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de mensajes y comportamientos que el FMM150 utiliza para informar ubicación, telemetría CAN y estado a una plataforma remota como Plaspy. En términos de documentación pública, el protocolo define cómo el dispositivo se identifica, cómo se estructura la telemetría para transporte y cómo Plaspy recibe señales útiles para seguimiento, alertas e informes.

- Permite al FMM150 transmitir la ubicación GPS y parámetros derivados del CAN a un servidor remoto para su ingestión por Plaspy.
- Transporta información de identificación y estado del dispositivo para que Plaspy pueda asociar los mensajes con el vehículo y la configuración correctos.
- Soporta telemetría periódica y basada en eventos para que Plaspy pueda construir historial de posiciones, eventos de geocerca y reportes diagnósticos.
- Permite que datos de accesorios y sensores (BLE, RFID o adaptadores CAN) se entreguen junto con GPS para ofrecer una visión de flota más completa.
- Funciona sobre transportes de red estándar para llegar a Plaspy sin requerir túneles propietarios ni endpoints personalizados en la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe las conexiones de los dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesitan seleccionar un protocolo manualmente dentro de la plataforma. Una configuración de dispositivo adecuada para reportar al endpoint de Plaspy suele ser suficiente para que el equipo empiece a enviar telemetría compatible.

- El dominio del servidor de Plaspy para reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos; este puerto se usa de forma uniforme para todos los dispositivos compatibles con Plaspy.
- Plaspy realiza detección automática del protocolo cuando el dispositivo se conecta al endpoint compartido, por lo que normalmente no es necesario seleccionar el protocolo de forma manual en Plaspy.
- Si un dispositivo no alcanza el endpoint de Plaspy, verifique la configuración de red del dispositivo, la APN y que el equipo esté configurado para reportar a d.plaspy.com o a la IP indicada.
- Use las herramientas de gestión remota de Teltonika, como Configurator o FOTA WEB, para revisar y actualizar los parámetros de reporte cuando estén disponibles.

## Transporte y contexto de conexión

El transporte de la conexión y el direccionamiento forman parte del contexto público de integración. El FMM150 puede configurarse para usar UDP o TCP para enviar telemetría a Plaspy, dependiendo del firmware del dispositivo y de la configuración del usuario. La selección correcta del transporte y la dirección del servidor garantizan la entrega consistente de ubicación y telemetría CAN a Plaspy.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según su configuración y las condiciones de red.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración y reglas de firewall.
- Elija UDP cuando se prefiera menor sobrecarga y latencia, o TCP cuando el firmware del dispositivo requiera entrega fiable y comportamiento de sesión.
- Asegúrese de que la APN y el plan de datos de la SIM del dispositivo soporten el transporte y la configuración de bandas celulares elegidas para LTE Cat M1, NB IoT o retroceso 2G.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de dispositivos pueden cambiar las funciones disponibles y el comportamiento de los mensajes; verifique las notas de la versión antes de despliegues masivos.
- Las revisiones de hardware y variantes de código de pedido pueden exponer distintos conjuntos de parámetros CAN o interfaces de accesorios.
- Las herramientas del fabricante, como Teltonika Configurator y FOTA WEB, pueden cambiar la configuración de reporte o habilitar funciones adicionales que afecten el comportamiento del protocolo.
- La selección de transporte (UDP versus TCP) puede afectar la latencia y la semántica de entrega; confirme el soporte y la estabilidad en el lado del dispositivo bajo sus condiciones de red.
- Valide qué parámetros CAN están disponibles para el modelo de su vehículo y el código de pedido para asegurar que la telemetría esperada llegue a Plaspy.
- Siempre contraste las suposiciones de integración con la documentación oficial de Teltonika para la variante específica del FMM150 que esté utilizando.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del FMM150 ayuda a garantizar una configuración exitosa, datos precisos en Plaspy y una resolución de problemas efectiva cuando los dispositivos se despliegan en una flota. Tener claridad sobre el protocolo reduce el tiempo de integración y ayuda a tomar decisiones informadas sobre transporte, intervalos de reporte y selección de parámetros CAN.

- Acelera la configuración inicial alineando los ajustes de reporte del dispositivo con el endpoint y los requisitos de transporte de Plaspy.
- Mejora la resolución de problemas al clarificar si los problemas son de red, de configuración del dispositivo o de firmware.
- Ayuda a optimizar el uso de batería y los costos de datos al seleccionar intervalos de reporte y estrategias de transporte apropiadas.
- Garantiza que los parámetros CAN y los datos de accesorios se interpreten y mapeen correctamente en los paneles y alertas de Plaspy.
- Facilita despliegues escalables documentando el comportamiento esperado de la telemetría según diferentes variantes de firmware y hardware.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM150 con Plaspy ofrece a las organizaciones una vía práctica para combinar una localización vehicular precisa con telemetría profunda derivada del CAN. Esa combinación respalda la visibilidad de la flota, flujos de trabajo de mantenimiento preventivo, monitoreo de combustible y baterías de vehículos eléctricos, y elaboración de informes operativos sin necesidad de gateways separados para extraer señales del vehículo.

Las configuraciones de conexión compartidas de Plaspy y su detección automática de protocolos simplifican la incorporación de dispositivos, de modo que los equipos puedan concentrarse en políticas, alertas y análisis en lugar de en la configuración de transporte de bajo nivel. Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el FMM150 visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo; verifique los detalles específicos de protocolo y las notas de firmware más recientes con Teltonika en https://www.teltonika-gps.com/ para obtener la orientación actual del fabricante.
