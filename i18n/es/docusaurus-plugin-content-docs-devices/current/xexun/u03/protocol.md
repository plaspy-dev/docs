---
slug: /xexun/u03/protocol
id: u03-protocol
sidebar_label: Protocol
title: Xexun - U03 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la insignia U03 UWB de Xexun y su comunicación con Plaspy para posicionamiento interior y telemetría
keywords:
  - protocolo Xexun U03
  - protocolo GPS Xexun U03
  - protocolo de comunicación Xexun U03
  - protocolo de rastreo U03
  - compatibilidad Xexun U03 Plaspy
  - protocolo de posicionamiento UWB
  - protocolo posicionamiento interior
  - protocolo insignia U03
  - integración U03 Plaspy
  - insignia UWB Plaspy
---

# Xexun - Protocolo U03

Esta página describe el contexto público del protocolo para usar la insignia de posicionamiento de alta precisión U03 UWB de Xexun con Plaspy. Resume cómo la insignia comunica ubicación y telemetría a Plaspy, el papel del protocolo de comunicación en ese intercambio y las configuraciones de conexión que Plaspy acepta para el reporte de dispositivos. El objetivo es ofrecer orientación pública y de alto nivel para integrar y operar insignias U03 en despliegues con Plaspy, sin entrar en detalles sensibles del firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. Los dispositivos U03 pueden configurarse para enviar informes al endpoint de Plaspy en d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888. Dependiendo del soporte y la configuración del dispositivo, puede usarse UDP o TCP en el puerto 8888; Plaspy utiliza el mismo puerto para todos los equipos. El comportamiento exacto puede variar según el firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y de alto nivel del protocolo en lugar de en detalles internos del firmware.

## Resumen del protocolo

La insignia U03 emplea mediciones inalámbricas de distancia y breves intercambios de mensajes para entregar posiciones interiores precisas y el estado del dispositivo a un backend de posicionamiento gestionado por Plaspy. El protocolo de comunicación coordina la identificación, la entrega de telemetría y mensajes bidireccionales opcionales, como alertas y notificaciones remotas, para que Plaspy pueda procesar ubicaciones en tiempo real, generar eventos y almacenar recorridos históricos.

- El protocolo permite que la insignia se identifique y comunique su estado actual para que Plaspy asocie los mensajes con un registro de dispositivo.
- Los datos de posición y de ranging procedentes de anclas UWB y de la insignia se reportan a Plaspy para mapeo en tiempo real y reproducción histórica.
- Campos de telemetría como nivel de batería, estado del sensor de movimiento, eventos de manipulación o SOS se transmiten junto con las actualizaciones de ubicación.
- El mensajero bidireccional admite notificaciones push, alertas por vibración y comandos remotos encaminados desde Plaspy hacia la insignia.
- Avisos de actualización de firmware remota y señales de gestión de dispositivos se coordinan a través del mismo canal de reporte y los flujos de trabajo de la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy acepta informes entrantes de dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo de rastreador apropiado según los datos recibidos. En despliegues típicos no necesita seleccionar un protocolo dentro de Plaspy si la insignia U03 está correctamente configurada para enviar sus informes al endpoint de Plaspy; la plataforma gestiona la detección y el enrutamiento del protocolo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP pública es 54.85.159.138.
- El puerto usado para el reporte de dispositivos es el 8888; Plaspy emplea ese mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según capacidades del equipo y consideraciones de red.
- Cuando un dispositivo correctamente configurado reporta al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y procesará los datos entrantes.
- La selección manual de protocolo en Plaspy normalmente no es necesaria siempre que la insignia apunte a la dirección y puerto correctos de Plaspy.

## Contexto de transporte y conexión

El transporte y la conexión para la U03 dependen principalmente de cómo esté configurada la insignia para enviar sus reportes a Plaspy. Para integrar con Plaspy usted debe verificar qué transporte soporta el dispositivo y confirmar que esté configurado para reportar al endpoint o a la IP de Plaspy en el puerto compartido.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones de despliegue.
- Las insignias pueden apuntar a d.plaspy.com o a 54.85.159.138 como dirección objetivo para el reporte.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y las reglas de red.
- Elija UDP cuando se requiera menor latencia y un estilo de reporte tipo broadcast, o TCP cuando el firmware del dispositivo prefiera entrega fiable y gestión de sesión.
- Asegúrese de que los firewalls y reglas NAT de la red permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 desde los gateways de insignia o bridges de anclas según sea necesario.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y las variantes de hardware de la U03 pueden influir en qué modos de transporte y características de mensaje están disponibles.
- Las decisiones de implementación del fabricante pueden modificar qué campos de telemetría u opcionales aparecen en los reportes.
- Algunos despliegues utilizan gateways o anclas intermediarias para traducir datos UWB y RFID al flujo de reporte del dispositivo; confirme cómo se integra la insignia en su arquitectura.
- La selección de transporte (UDP vs TCP) debe coincidir con el firmware de la insignia y las políticas de red locales para obtener los mejores resultados.
- Plaspy detecta automáticamente el protocolo una vez que el dispositivo reporta al endpoint compartido, pero la configuración del lado del dispositivo debe ser correcta.
- Valide siempre la compatibilidad y los pasos de configuración contra la documentación actual del fabricante y la documentación de su despliegue.

## Por qué es importante comprender el protocolo

Comprender cómo la U03 se comunica con Plaspy ayuda a garantizar fijaciones de ubicación confiables, alertas oportunas y una gestión de dispositivos predecible durante la vida útil del despliegue. Estar al tanto del transporte, los endpoints de reporte y el comportamiento del firmware reduce el tiempo de configuración y facilita la resolución de problemas.

- Una configuración correcta de endpoint y transporte evita informes fallidos y eventos perdidos en Plaspy.
- Conocer qué telemetría y campos de alerta suministra la insignia ayuda a mapear las señales del dispositivo a los paneles y flujos de trabajo de Plaspy.
- Entender las diferencias de firmware facilita la planificación de actualizaciones remotas y la disponibilidad de funciones.
- Reglas de red y uso de puertos adecuados reducen problemas de conectividad y favorecen un seguimiento continuo y estable.
- La comprensión del protocolo acelera la resolución de problemas cuando los datos de ubicación o telemetría son inconsistentes.

## Por qué usar Plaspy con este protocolo

Combinar la insignia Xexun U03 con Plaspy proporciona posicionamiento interior de alta precisión y una plataforma unificada para alertas, telemetría y reproducción histórica. Las organizaciones que requieren posicionamiento a nivel de centímetros para seguridad, control de acceso, asistencia o supervisión operativa se benefician de unir las capacidades de hardware U03 con el mapeo, procesamiento de eventos y gestión de dispositivos de Plaspy.

Para saber más sobre Plaspy y cómo puede integrarse con despliegues U03, visite https://www.plaspy.com. Para detalles específicos más recientes sobre el protocolo del dispositivo, notas de firmware y revisiones de hardware consulte la documentación del fabricante en https://www.xexun.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
