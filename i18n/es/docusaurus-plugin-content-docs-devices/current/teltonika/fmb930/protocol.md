---
slug: /teltonika/fmb930/protocol
id: fmb930-protocol
sidebar_label: Protocol
title: Teltonika - FMB930 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la conectividad del Teltonika FMB930 con Plaspy
keywords:
  - Protocolo Teltonika FMB930
  - Protocolo GPS Teltonika FMB930
  - Protocolo de seguimiento FMB930
  - Protocolo de rastreador Teltonika
  - Compatibilidad FMB930 Plaspy
  - Comunicación rastreador GPS
  - Rastreador telemetría BLE
  - Rastreador vehículo eléctrico
  - Rastreador GPS bajo consumo
  - Rastreo de flotas de vehículos
---

# Teltonika - Protocolo FMB930

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMB930 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, de manera que usted, como responsable de flota o integrador, pueda comprender el comportamiento de conexión y reporte necesario para un despliegue exitoso.

El FMB930 es un rastreador compacto y de bajo consumo pensado para vehículos eléctricos ligeros y motocicletas eléctricas; soporta posicionamiento GNSS, reporte vía GSM 2G y telemetría por Bluetooth Low Energy (BLE) para sensores. Plaspy utiliza una configuración compartida de conexión entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte es el mecanismo por el cual el FMB930 entrega datos GNSS, telemetría BLE y estado del dispositivo a una plataforma telemática como Plaspy. En términos públicos, este protocolo cubre identificación, actualizaciones de posición, reenvío de telemetría de sensores y reportes básicos de estado del equipo para que Plaspy presente datos útiles en los flujos de trabajo de la flota.

- Permite que el dispositivo se identifique y transmita posición GNSS y hora a Plaspy para mapeo en tiempo real y reproducción histórica.
- Transporta valores de telemetría BLE recibidos de sensores emparejados —por ejemplo temperatura, humedad, magnetómetro y movimiento— para que Plaspy muestre esas lecturas.
- Reporta el estado de energía del dispositivo y notificaciones de batería baja, relevantes para intervalos prolongados de inactividad y modos de ultra bajo consumo.
- Soporta señales de gestión remota que permiten actualizaciones de firmware y configuración a través de servicios de administración compatibles.
- Proporciona los metadatos básicos que Plaspy necesita para asociar mensajes entrantes con un registro de dispositivo específico dentro de la gestión de flota.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos de dispositivos en un único endpoint compartido y reconoce automáticamente el formato de reporte usado por cada rastreador. En la mayoría de despliegues, usted solo debe apuntar el dispositivo al endpoint de Plaspy; Plaspy se encargará de la identificación del protocolo y del enrutamiento hacia la canalización de procesamiento adecuada.

- El dominio del servidor Plaspy es d.plaspy.com y los dispositivos pueden usarlo como host de reporte.
- La IP del servidor Plaspy es 54.85.159.138 y, alternativamente, los dispositivos pueden configurarse para reportar directamente a esta dirección.
- El puerto es 8888 y todas las conexiones de dispositivos a Plaspy usan el mismo puerto para mantener consistencia entre los modelos soportados.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y el transporte elegido.
- Dado que Plaspy detecta automáticamente el protocolo del rastreador, por lo general no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente apuntado al endpoint.

## Transporte y contexto de conexión

Comprender el transporte y la resolución de direcciones ayuda a garantizar que los dispositivos lleguen a Plaspy de forma confiable. El FMB930 suele configurarse para enviar su tráfico de reporte a través de la red celular al endpoint de Plaspy, donde el transporte y la resolución IP determinan las características de entrega.

- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según la configuración del equipo y las consideraciones de red.
- La configuración DNS del dispositivo puede apuntar el rastreador a d.plaspy.com o al host numérico 54.85.159.138.
- Usar un nombre de dominio permite que las redes de los operadores resuelvan hacia la infraestructura actual de Plaspy, mientras que el uso de IP directa puede ser útil en redes más restringidas.
- Todos los dispositivos gestionados por Plaspy se conectan usando el mismo puerto TCP o UDP 8888 para simplificar la configuración de firewalls y NAT.
- Verifique que el APN y las reglas de puertos salientes de su proveedor de SIM sean compatibles con tráfico saliente TCP o UDP hacia Plaspy.

## Notas de compatibilidad del protocolo

- El comportamiento del protocolo puede variar entre versiones de firmware; siempre verifique el nivel de firmware del dispositivo al validar funciones como reenvío de telemetría BLE o modos avanzados de suspensión.
- Las revisiones de hardware o las variantes regionales del FMB930 pueden exponer diferentes E/S o comportamientos de gestión de energía que afectan la frecuencia de reporte y la telemetría.
- La selección de transporte (UDP frente a TCP) puede influir en las garantías de entrega; elija el transporte que mejor equilibre sus necesidades de confiabilidad y consumo de energía.
- El soporte de sensores BLE depende del firmware del rastreador y de la compatibilidad local con dispositivos BLE; no todos los modelos o perfiles de sensores están garantizados.
- Las herramientas de gestión remota del fabricante, como FOTA WEB, pueden alterar la configuración o el firmware de forma remota; confirme los flujos de gestión antes de despliegues a gran escala.
- Valide la compatibilidad y el comportamiento contra la documentación del fabricante y las notas de la versión para el código de producto y firmware exactos que vaya a desplegar.

## Por qué es importante comprender el protocolo

Tener una comprensión clara del protocolo de comunicación del rastreador facilita la configuración inicial, la resolución de problemas y la fiabilidad operativa a largo plazo al integrar dispositivos FMB930 con Plaspy. Saber qué envía el dispositivo, cómo se conecta y qué puede variar por firmware reduce el tiempo de solución ante problemas comunes.

- Simplifica la provisión de dispositivos asegurando que el rastreador apunte a d.plaspy.com o a 54.85.159.138 usando el puerto 8888.
- Ayuda a diagnosticar problemas de conectividad distinguiendo entre fallas en la capa de transporte y problemas de análisis del protocolo o de telemetría.
- Orienta las decisiones de configuración sobre intervalos de reporte y gestión de energía para ajustarse a las necesidades operativas de su flota.
- Permite planificar el uso de telemetría BLE y funciones de gestión remota que dependen de capacidades de firmware.
- Reduce comportamientos inesperados en campo al considerar diferencias de firmware y revisiones de hardware antes de desplegar masivamente.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB930 con Plaspy ofrece una solución de rastreo compacta y eficiente en consumo para motocicletas eléctricas y vehículos eléctricos ligeros, mientras permite a los responsables de flota recibir GNSS y telemetría BLE en una plataforma unificada. La detección automática de protocolo de Plaspy y su enfoque de puerto único simplifican las integraciones para que usted pueda concentrarse en las operaciones de la flota en lugar del análisis de mensajes a nivel de dispositivo.

Para saber más sobre cómo Plaspy maneja las conexiones de dispositivos y los flujos de trabajo de flota visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y documentación del fabricante, consulte la información más reciente en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
