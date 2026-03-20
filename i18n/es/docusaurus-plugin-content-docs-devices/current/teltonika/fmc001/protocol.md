---
slug: /teltonika/fmc001/protocol
id: fmc001-protocol
sidebar_label: Protocol
title: Teltonika - FMC001 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Teltonika FMC001 y su comunicación con Plaspy mediante ajustes compartidos
keywords:
  - protocolo Teltonika FMC001
  - protocolo GPS FMC001
  - Teltonika FMC001 Plaspy
  - comunicación rastreador GPS
  - protocolo OBD II para rastreo
  - rastreo de vehículos Teltonika
  - compatibilidad FMC001
  - guía de protocolo de rastreadores
  - protocolo rastreador Bluetooth LE
  - protocolo rastreadores gestión de flotas
---

# Teltonika - Protocolo FMC001

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC001 con Plaspy. Se enfoca en cómo el dispositivo comunica sus datos en términos generales, cómo Plaspy recibe y reconoce la información del rastreador y qué considerar al integrar dispositivos FMC001 en una implementación de Plaspy. Los detalles técnicos aquí buscan ayudar en la configuración y en la resolución de problemas sin exponer implementaciones privadas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste reporta a la plataforma. El comportamiento exacto del protocolo y los campos telemáticos disponibles pueden variar según la versión de firmware del FMC001, la revisión de hardware y la implementación del fabricante. Para comportamientos específicos del dispositivo como modos de suspensión, parámetros OBD II, soporte de sensores BLE y opciones FOTA, consulte la documentación oficial de Teltonika.

## Resumen del protocolo

El protocolo de comunicación del FMC001 regula cómo el rastreador reporta posición GNSS, parámetros OBD II, eventos del acelerómetro, datos de sensores Bluetooth y mensajes de estado a un servidor. En la práctica, el protocolo define qué datos envía el dispositivo, cómo el servidor identifica el equipo y cómo ambos extremos mantienen sincronizada la sesión y la telemetría.

- Permite transmitir posición GNSS, lecturas OBD II, eventos del acelerómetro y datos de sensores BLE a un servidor remoto.
- Incluye identidad y estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con la ficha vehicular correcta.
- Soporta modos de reporte que reflejan las opciones de gestión de energía del FMC001, como GPS Sleep y distintos modos de deep sleep.
- Autoriza extensiones dirigidas por firmware, como notificaciones FOTA y el estado de emparejamiento de sensores, para que la plataforma las interprete.
- Sienta las bases para que Plaspy presente telemetría útil para gestión de flotas, comportamiento del conductor y diagnósticos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos para todos los dispositivos compatibles, y luego encamina los datos entrantes hacia la ruta de procesamiento adecuada. Dado que Plaspy detecta automáticamente el protocolo del rastreador, por lo general usted no necesita seleccionar manualmente un protocolo dentro de la plataforma cuando el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.

- Plaspy utiliza un único puerto de ingestión para todos los dispositivos, lo que simplifica la configuración.
- Cuando un FMC001 reporta a Plaspy, la plataforma inspecciona y enruta la sesión mediante rutinas de detección automática en lugar de requerir selección manual del protocolo.
- La configuración adecuada del dispositivo para apuntar al endpoint de Plaspy garantiza que el rastreador sea reconocido y parseado por la plataforma.
- Usualmente los usuarios configuran el rastreador para reportar al dominio o IP de Plaspy y confían en la detección automática para el manejo del protocolo.

## Transporte y contexto de conexión

El FMC001 puede configurarse para enviar telemetría por UDP o TCP según las opciones del dispositivo y las condiciones de la red. Plaspy acepta conexiones en el mismo puerto para todos los rastreadores y provee un dominio y una IP destino que los dispositivos pueden usar para reportar.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto común de reporte para Plaspy es 8888 y todos los dispositivos en Plaspy usan ese mismo puerto.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según las opciones del FMC001.
- La elección del transporte impacta la semántica de entrega de mensajes y debe alinearse con la fiabilidad de la red y las preferencias de configuración del dispositivo.
- Asegúrese de que el APN y la configuración del operador en el FMC001 permitan conexiones salientes hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede depender del nivel de firmware del FMC001; firmwares más recientes pueden introducir campos telemáticos adicionales o cambios de comportamiento.
- Revisiones de hardware u opciones adicionales como ciertos perfiles BLE pueden afectar qué datos envía el dispositivo al servidor.
- La selección de transporte entre UDP y TCP puede influir en la entrega de mensajes y requerir ajuste de parámetros en el dispositivo.
- Herramientas de configuración del fabricante como Teltonika Configurator y los procesos FOTA pueden modificar el comportamiento de reporte del dispositivo.
- Verifique que la configuración del equipo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para permitir la comunicación adecuada con Plaspy.
- Siempre contraste el comportamiento del dispositivo con la documentación oficial de Teltonika al evaluar compatibilidad.

## Por qué es importante entender el protocolo

Comprender cómo el FMC001 se comunica con Plaspy ayuda a lograr telemática confiable, agiliza la resolución de problemas y hace que las operaciones de la flota sean más previsibles. Conocer el papel del transporte, la identidad del dispositivo y el comportamiento según firmware reduce el tiempo de integración y facilita que los equipos de operaciones mantengan un reporte consistente.

- Ayuda a garantizar que el dispositivo esté configurado para reportar al endpoint y puerto correctos de Plaspy.
- Acelera la resolución de problemas cuando la telemetría o los valores OBD II no aparecen en Plaspy.
- Aclara cómo los modos de suspensión y los intervalos de reporte afectan las líneas de tiempo de ubicación y eventos.
- Orienta sobre la elección entre UDP y TCP según la conectividad y la criticidad de los mensajes.
- Facilita las comprobaciones de compatibilidad antes de despliegues masivos o actualizaciones de firmware.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMC001 con Plaspy ofrece a los equipos operativos una vía confiable para ingerir datos OBD II, posición GNSS, eventos de acelerómetro y entradas de sensores BLE en una plataforma única de gestión de flotas. Las capacidades del FMC001 para detectar comportamiento del conductor, monitoreo de combustible y sus modos de sueño flexibles se alinean bien con la recolección y visualización de telemetría de Plaspy, ayudando a mantener visibilidad sobre vehículos y casos de uso diversos.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el Teltonika FMC001, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y guía del fabricante, consulte los recursos oficiales de Teltonika en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
