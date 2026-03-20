---
slug: /lk_gps/lk110_4g_global_e_bike_bicycle_gps_tracker/configuration
id: lk110_4g_global_e_bike_bicycle_gps_tracker-configuration
sidebar_label: Configuration
title: LK-GPS - LK110 4G Global E-bike/Bicycle GPS Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador LK110 4G para e-bike y su integración con Plaspy
keywords:
  - configuración LK GPS LK110
  - configuración LK110
  - configuración LK110 Plaspy
  - configuración rastreador GPS e-bike
  - configuración rastreador GPS bicicleta
  - configuración de dispositivo Plaspy
  - ajustes de servidor rastreador GPS
  - seguimiento de flotas LK110
  - integración rastreador LK GPS
  - rastreo GPS en tiempo real
---

# LK-GPS - Configuración del rastreador LK110 4G para e-bike / bicicleta

Esta página presenta el contexto público de configuración para usar el LK110 4G Global E-bike/Bicycle GPS Tracker con Plaspy. Se centra en los ajustes de servidor y en el flujo práctico que necesita para configurar el equipo y lograr que envíe ubicación y telemetría de eventos a la plataforma Plaspy. Use esta guía para preparar la integración y entender cómo Plaspy recibe datos de dispositivos LK-GPS compatibles.

Plaspy trabaja con ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Siga estas indicaciones generales y confirme comandos o menús específicos con la documentación del fabricante o la herramienta de configuración del LK110.

## Resumen de configuración

Configurar el LK110 para Plaspy garantiza que el rastreador pueda comunicarse de forma estable con el servidor de Plaspy y aparecer en sus paneles de monitoreo. El objetivo es apuntar el dispositivo al servicio de Plaspy, confirmar el transporte y el puerto seleccionados y validar que las ubicaciones y eventos de alarma lleguen a la plataforma.

- Configure el rastreador para reportar al endpoint de Plaspy y que la ubicación en vivo sea visible en la plataforma.
- Seleccione el modo de transporte que requiera el dispositivo y confirme que utilice el puerto de Plaspy.
- Verifique la conectividad celular y la alimentación del dispositivo para que la telemetría se transmita con fiabilidad.
- Valide que las alertas de geocerca, vibración, desplazamiento y batería baja sean enviadas a Plaspy.
- Confirme que el dispositivo responda a comandos remotos y que las actualizaciones de estado aparezcan en Plaspy.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el dispositivo o al completar los datos de servidor en la herramienta del fabricante:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y se apoya en la detección automática de protocolo para interpretar los mensajes entrantes.

## Requisitos típicos antes de la configuración

- Un LK110 con carga o alimentación instalado siguiendo las instrucciones del fabricante y montado de forma segura en la bicicleta o e-bike.
- Conectividad celular 4G global activa en el dispositivo; asegúrese de que el equipo tenga una SIM activa y la capacidad de datos o SMS requerida según el modelo.
- Acceso al método oficial de configuración LK-GPS o al software del fabricante, o la referencia de comandos SMS si el rastreador admite configuración por SMS.
- El IMEI o identificador del dispositivo disponible para inventario y resolución de problemas.
- Conocimiento de los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) para ingresarlos en la herramienta de configuración.
- Un método para observar y validar los mensajes del dispositivo en Plaspy después de la configuración, ya sea mediante la plataforma Plaspy o registros de monitoreo.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el LK110 utiliza su conexión 4G global para enviar datos de ubicación y alarmas al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos mensajes, identifica automáticamente el protocolo del rastreador y mapea los eventos en la plataforma para seguimiento en tiempo real y notificaciones.

- Actualizaciones de ubicación en tiempo real transmitidas a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Informes de alarma, como entrada/salida de geocerca, vibración, desplazamiento y batería baja, reenviados a Plaspy para notificación inmediata.
- Confirmaciones de comandos remotos y actualizaciones de estado del dispositivo visibles en la interfaz de Plaspy.
- Cargas de eventos e historial disponibles para reproducción y generación de informes en Plaspy.
- El transporte puede ser UDP o TCP según lo que soporte el firmware del equipo; el puerto se mantiene en 8888.

## Flujo típico de configuración

1. Acceda al método oficial de configuración LK-GPS o al software facilitado por el fabricante, o prepare la herramienta de comandos SMS si la configuración por SMS es necesaria.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en 8888 como puerto de reporte del dispositivo.
4. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte; use el transporte que soporte su firmware.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe los comandos SMS según lo documentado por LK-GPS.
6. Reinicie el dispositivo si el firmware o la herramienta de configuración lo requieren para aplicar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando los mensajes de ubicación o eventos entrantes en la plataforma y confirmando que la detección automática de protocolo ha parseado los datos.

## Ejemplos de comandos de configuración

Los comandos y el formato exacto dependen del firmware del LK110 y de la herramienta del fabricante. Esta página no incluye cadenas de comandos específicas porque los métodos del fabricante varían; consulte la documentación de configuración LK-GPS o la referencia de comandos SMS del dispositivo para la sintaxis exacta. Si usa un SMS o una herramienta de configuración directa, ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138, establezca el puerto en 8888 y elija UDP o TCP cuando sea necesario.

Si dispone de una referencia de comandos LK-GPS del fabricante, utilice los comandos indicados por ellos para configurar:
- server address o IP a d.plaspy.com o 54.85.159.138
- server port a 8888
- transport a UDP o TCP
- cualquier APN o ajustes relacionados con la SIM según el operador

Conserve exactamente los marcadores de posición como [apn] o similares tal como los provea el fabricante al seguir sus plantillas de comando.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar menús y la sintaxis de comandos; siempre consulte la documentación LK-GPS del LK110 antes de enviar comandos.
- TCP y UDP se comportan de forma diferente según las condiciones de red; elija el transporte que soporte el dispositivo y que haya sido validado con el operador regional.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, así que no cambie el puerto salvo que Plaspy support lo indique.
- La configuración mediante SMS puede estar disponible para el LK110; verifique la lista de comandos SMS con LK-GPS si planea usar SMS para la configuración.
- Confirme el IMEI del dispositivo y cualquier identificador de reporte para poder correlacionar los mensajes entrantes con la unidad física durante la validación.

## Por qué usar Plaspy con esta configuración

Usar el LK110 con Plaspy centraliza la ubicación GPS, los eventos de alarma y los flujos de comandos remotos en una sola plataforma que soporta monitoreo, informes y alertas. Para propietarios de bicicletas, operadores de pequeñas flotas y servicios de alquiler, esta combinación ofrece seguimiento confiable, notificaciones oportunas antirobo y capacidades de gestión remota accesibles desde una interfaz unificada.

Para obtener más información sobre Plaspy y cómo esta configuración encaja en flujos de trabajo de rastreo más amplios visite https://www.plaspy.com. Para detalles más recientes sobre configuración específica del dispositivo, notas de firmware y referencias de comandos confirme la información en el sitio del fabricante https://www.lk-gps.com. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, así que verifique las instrucciones actuales antes de aplicar la configuración en dispositivos productivos.
