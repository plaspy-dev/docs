---
slug: /globalsat/bt_821c/protocol
id: bt_821c-protocol
sidebar_label: Protocol
title: GlobalSat - BT-821C Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el GlobalSat BT-821C con Plaspy en transmisión e integración de datos GNSS
keywords:
  - protocolo GlobalSat BT-821C
  - protocolo GPS BT-821C
  - GNSS Bluetooth GlobalSat
  - BT-821C NMEA
  - BT-821C RTCM
  - compatibilidad Plaspy
  - protocolo de dispositivo Plaspy
  - receptor GNSS Bluetooth
  - rastreo de flotas BT-821C
  - rastreo de vehículos GlobalSat
---

# GlobalSat - BT-821C Protocolo

Esta página describe el contexto público del protocolo para utilizar el receptor GNSS GlobalSat BT-821C con Plaspy. Explica cómo el BT-821C funciona como fuente de posicionamiento, cómo se aprovecha su salida GNSS estándar en los flujos de trabajo de Plaspy y qué papel cumple el protocolo de reporte del equipo en escenarios de rastreo en tiempo real y telemetría.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo o gateway reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, revisión de hardware e implementación del fabricante, por lo que la información a continuación se centra en el contexto público no sensible y en notas prácticas de integración.

## Visión general del protocolo

El BT-821C suministra datos GNSS como receptor conectado por Bluetooth utilizando sentencias GNSS estándar y mensajes de corrección. En despliegues con Plaspy el BT-821C suele emparejarse con un dispositivo anfitrión o gateway que reenvía los datos de posición al servicio de Plaspy para su uso en mapas, alertas y monitoreo de flotas.

- Emite sentencias NMEA 0183 estándar como GGA, GSA, GSV y RMC que aportan posición, tiempo e información de satélites.
- Soporta correcciones RTCM para que un host pueda aplicar correcciones diferenciales cuando haya disponible una fuente de correcciones.
- Funciona como fuente GNSS por Bluetooth para un smartphone, tablet o gateway, que a su vez reporta la ubicación a Plaspy para visualización y telemetría.
- El rol del protocolo es proporcionar posicionamiento consistente con marcas de tiempo y estado de satélites para que Plaspy pueda ingerir y mostrar datos de ubicación precisos.
- El uso de formatos estándar como NMEA y RTCM incrementa la interoperabilidad con hosts y gateways que usan protocolos de reporte compatibles con Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy escucha reportes de dispositivos en un único endpoint compartido y determina automáticamente el protocolo correcto del rastreador según los datos entrantes y la configuración de la fuente. Generalmente los usuarios no necesitan elegir el protocolo manualmente dentro de Plaspy cuando los dispositivos o gateways están configurados para reportar al servidor de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy usa el puerto 8888 para conexiones de dispositivos; todos los dispositivos soportados usan ese mismo puerto.
- Los dispositivos o gateways pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar datos a Plaspy.
- Cuando un host compatible con Plaspy recibe NMEA o RTCM del BT-821C puede reenviar esos datos al endpoint de Plaspy, donde la detección del protocolo y la ingesta ocurren automáticamente.
- La detección automática significa que la plataforma empata los datos entrantes con patrones conocidos de dispositivos y los enruta al feed de dispositivo correspondiente sin que el usuario tenga que seleccionar el protocolo en muchos casos.

## Transporte y contexto de conexión

El BT-821C en sí es un receptor GNSS por Bluetooth que entrega sentencias GNSS a un host emparejado. Ese host o gateway es responsable de transportar los datos de posición a Plaspy usando los transportes de red que Plaspy soporta. Comprender la capa de transporte ayuda a garantizar la entrega fiable y la configuración correcta del endpoint de reporte.

- El dispositivo puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888 según las capacidades del host o gateway.
- Los endpoints de reporte pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 según restricciones de red o DNS.
- Plaspy usa el mismo puerto para todos los dispositivos, lo que simplifica la configuración de firewall y red para flotas y gateways.
- Para despliegues con BT-821C el flujo típico es: BT-821C por Bluetooth hacia el host, y luego el host reenvía los datos GNSS a Plaspy usando el transporte elegido.
- Asegúrese de que el gateway o host que se empareja con el BT-821C esté configurado para apuntar al endpoint de Plaspy y use el protocolo de transporte apropiado.

## Notas sobre compatibilidad del protocolo

- El BT-821C emite sentencias NMEA 0183 estándar y acepta correcciones RTCM, pero los conjuntos concretos de sentencias y el soporte RTCM pueden variar según las revisiones de firmware.
- Dado que el BT-821C es un receptor GNSS por Bluetooth, la compatibilidad con Plaspy depende de que el host o gateway reenvíe correctamente los datos GNSS a Plaspy.
- Diferentes implementaciones de hosts o firmware de gateways pueden optar por UDP o TCP para el reenvío; confirme el comportamiento de transporte al solucionar conectividad.
- Las actualizaciones de firmware del fabricante o las revisiones de hardware pueden cambiar los mensajes disponibles o el soporte de correcciones, así que verifique la versión de firmware del equipo al diagnosticar problemas.
- Valide la compatibilidad contra la documentación oficial de GlobalSat y pruebe el comportamiento en el host o gateway específico que planea usar con Plaspy.
- Restricciones de red como NAT del operador o reglas de firewall pueden afectar la conectividad a d.plaspy.com o 54.85.159.138 en el puerto 8888, por lo que coordine con los administradores de red.

## Por qué es importante entender el protocolo

Entender cómo se comunica el BT-821C y cómo su salida GNSS se reenvía a Plaspy ayuda a garantizar una correcta configuración y operación fiable en sistemas de rastreo en producción. Conocer los detalles del protocolo y del transporte reduce errores de configuración y acelera la resolución de problemas cuando los datos de posición no aparecen como se espera.

- Permite determinar si un problema de conectividad proviene del emparejamiento Bluetooth del BT-821C, del software del host o de la configuración del transporte de red.
- Guía la configuración correcta del reenvío del gateway hacia el endpoint de Plaspy d.plaspy.com en el puerto 8888 usando UDP o TCP según corresponda.
- Ayuda a identificar si las correcciones RTCM o los feeds SBAS están siendo entregados y aplicados por el host para mejorar la precisión.
- Facilita evaluar las diferencias entre versiones de firmware y el impacto de revisiones durante pruebas y despliegues.
- Mejora la confiabilidad a largo plazo al aclarar qué componentes son responsables del formateo, transporte y entrega de los datos.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat BT-821C como fuente GNSS para Plaspy ofrece a las organizaciones una vía práctica para mejorar la calidad de la ubicación sin reconfigurar vehículos ni reemplazar hardware telemático existente. El BT-821C proporciona una fuente de posición externa de alta sensibilidad usando NMEA y RTCM estándar, y cuando se empareja con un host o gateway compatible con Plaspy mejora la precisión del rastreo en tiempo real para mapas, geocercas y monitoreo de flotas.

Si desea conocer más sobre Plaspy y cómo la plataforma maneja el reporte de dispositivos y la detección de protocolos visite https://www.plaspy.com. Para los detalles más recientes específicos por dispositivo, notas de firmware y revisiones de hardware consulte al fabricante en https://www.globalsat.com.tw/ ya que las implementaciones y funciones soportadas pueden cambiar con el tiempo.
