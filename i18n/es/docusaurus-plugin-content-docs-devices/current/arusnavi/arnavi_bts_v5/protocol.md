---
slug: /arusnavi/arnavi_bts_v5/protocol
id: arnavi_bts_v5-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi BTS v.5 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para Arnavi BTS v.5 y cómo envía telemetría a Plaspy vía gateways
keywords:
  - Protocolo Arusnavi Arnavi BTS v.5
  - Protocolo GPS Arnavi BTS v.5
  - Protocolo de comunicación Arnavi BTS v.5
  - Protocolo de rastreo Arnavi BTS v.5
  - Sensor BLE Arusnavi Plaspy
  - Compatibilidad Arnavi BTS v.5 Plaspy
  - Protocolo iBeacon de Arusnavi
  - Integración gateway BLE Plaspy
  - Protocolo monitoreo temperatura cadena fría
  - Rastreo de activos Arnavi BTS v.5
---

# Arusnavi - Protocolo Arnavi BTS v.5

Esta página describe el contexto público del protocolo para usar el Arusnavi Arnavi BTS v.5 con la plataforma de flotas y telemetría Plaspy. El Arnavi BTS v.5 es un sensor BLE compacto y etiqueta iBeacon empleado para monitoreo de temperatura, detección de contacto y puertas, y la identificación de activos. Cuando un gateway BLE compatible con Plaspy o un rastreador GPS Plaspy con funciones de gateway recoge la publicidad BLE y la telemetría del BTS v.5, esos datos pueden ser reenviados a Plaspy para monitoreo en tiempo real, alertas e informes históricos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador que llega a la plataforma. En la práctica esto significa que los gateways y rastreadores que reenvíen telemetría del BTS v.5 deben configurarse para reportar al endpoint de Plaspy usando los ajustes públicos d.plaspy.com o 54.85.159.138 en el puerto 8888. El dispositivo que reenvía a Plaspy puede usar UDP o TCP en el puerto 8888 según las capacidades del gateway. El comportamiento exacto del protocolo y los campos visibles para Plaspy pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es importante revisar la documentación del fabricante para detalles específicos de firmware.

## Visión general del protocolo

El protocolo de comunicación del Arnavi BTS v.5 se centra en la publicidad BLE y la telemetría de beacons que un gateway recoge y retransmite a un endpoint de servidor. Desde la perspectiva de Plaspy, el objetivo del protocolo es poner a disposición lecturas de sensores e información de identidad en un formato apto para la red que un gateway pueda reenviar a Plaspy y mapear a registros de vehículos o activos.

- La publicidad BLE y la identidad iBeacon proporcionan valores UUID, MAJOR y MINOR que permiten a Plaspy asociar una etiqueta con un activo o compartimento.
- La telemetría de temperatura y el estado de contacto se transportan en las cargas útiles de los beacons o en anuncios de sensores y el gateway las reenvía como elementos de telemetría discretos.
- El gateway actúa como puente entre el tráfico radio local BLE y el endpoint de servidor de Plaspy para que los datos estén disponibles junto con las fuentes de rastreo GPS.
- El intervalo de transmisión configurable y la potencia de radio en el BTS v.5 afectan la frecuencia de actualizaciones que recibe Plaspy y ayudan a balancear la capacidad de respuesta con la duración de la batería.
- La identificación a nivel de protocolo permite a Plaspy ingerir, normalizar y presentar datos de sensores BLE sin que el usuario tenga que seleccionar manualmente el formato de paquete.

## Cómo Plaspy detecta el protocolo

Plaspy detecta e interpreta automáticamente los protocolos de trackers y gateways compatibles cuando los datos se reportan al endpoint de la plataforma. Para los usuarios esto reduce la configuración manual dentro de Plaspy una vez que el gateway o rastreador que realiza el reenvío está correctamente apuntado al endpoint de Plaspy.

- Plaspy recibe telemetría reenviada en el dominio público d.plaspy.com y en la IP pública 54.85.159.138 usando el puerto de la plataforma 8888.
- El dispositivo que reenvía puede usar transporte UDP o TCP en el puerto 8888 según sus capacidades y configuración.
- Plaspy emplea un punto de entrada y puerto consistentes para todos los dispositivos soportados, por lo que el mismo endpoint funciona para trackers y gateways.
- Cuando un gateway compatible con Plaspy reenvía datos BLE del Arnavi BTS v.5 al endpoint de Plaspy, la plataforma detectará el protocolo entrante y mapeará la telemetría a los activos automáticamente.
- La configuración típica no requiere seleccionar un protocolo dentro de Plaspy siempre que el gateway esté configurado para reportar al endpoint correcto de Plaspy e incluya los identificadores de dispositivo necesarios.

## Contexto de transporte y conexión

Comprender el contexto de transporte ayuda a asegurar que los gateways y la infraestructura de red permitan la entrega confiable de la telemetría del BTS v.5 a Plaspy. El propio BTS v.5 transmite publicidad BLE que un gateway recibe localmente, mientras que el gateway se encarga del transporte de red hacia Plaspy.

- Los gateways y los rastreadores que reenvían deben apuntar a d.plaspy.com o a la IP del servidor 54.85.159.138 para que la telemetría llegue al endpoint correcto.
- El transporte de red usado para enviar datos a Plaspy es UDP o TCP en el puerto 8888; el transporte específico depende de la implementación del gateway.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de cortafuegos y la red.
- Asegúrese de permitir el acceso saliente desde la red de su gateway al puerto 8888 para que Plaspy pueda recibir telemetría sin interrupciones.
- Los gateways normalmente empaquetan la publicidad BLE y los datos de sensores en un formato apto para la red antes de enviarlos a Plaspy; confirme que el gateway soporte el reenvío de las cargas útiles BLE que su caso de uso requiere.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware en el BTS v.5 pueden cambiar cómo se formatean los campos de los sensores o qué telemetría se incluye en las cargas útiles de publicidad.
- Las revisiones de hardware y los lotes de producción pueden presentar diferencias sutiles en propiedades de radio o parámetros de configuración disponibles.
- Las herramientas de configuración del fabricante y las aplicaciones móviles pueden cambiar nombres de parámetros y valores predeterminados entre versiones.
- La capa de transporte elegida por el gateway (UDP o TCP) debe coincidir con la documentación del gateway y las políticas de red para obtener el equilibrio deseado entre fiabilidad y latencia.
- Se recomienda realizar pruebas en un entorno controlado para validar que su gateway reenvía los campos BLE requeridos a Plaspy.
- Verifique siempre la compatibilidad y la configuración recomendada con la documentación del fabricante para confirmar el comportamiento según su versión de firmware y revisión de hardware.

## Por qué es importante entender el protocolo

Tener una comprensión práctica de cómo el Arnavi BTS v.5 se comunica a través de un gateway BLE hacia Plaspy mejora el éxito en la configuración, acelera la resolución de problemas y aumenta la fiabilidad a largo plazo.

- Ajuste los intervalos de reporte y la potencia de radio para equilibrar la vida de la batería y la frecuencia de actualizaciones según sus necesidades operativas.
- Confirme el reenvío desde el gateway y la salida de red al puerto 8888 para evitar brechas de conectividad entre la flota y Plaspy.
- Mapee correctamente los campos UUID, MAJOR y MINOR del beacon para que Plaspy asocie con precisión la telemetría del sensor al vehículo o activo correspondiente.
- Resuelva problemas más rápido sabiendo si un punto de telemetría faltante se debe a alcance BLE, reenvío del gateway o transporte de red.
- Planifique actualizaciones de firmware y pruebas de campo para evitar cambios no deseados en las cargas útiles de telemetría o en el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el Arnavi BTS v.5 con Plaspy es una opción práctica para organizaciones que requieren telemetría ambiental, detección de manipulaciones e identificación de activos junto con la ubicación y datos operativos del vehículo. Cuando las etiquetas BTS v.5 están dentro del alcance de un gateway BLE compatible con Plaspy o de un gateway vehicular que recoge beacons BLE, la temperatura, los eventos de contacto y la identidad del beacon pueden convertirse en telemetría de primera clase en los paneles y reglas de alerta de Plaspy.

Plaspy integra esa telemetría de sensores en la misma vista operacional que el rastreo GPS y otros sensores del vehículo, de modo que los equipos pueden correlacionar excursiones de temperatura, eventos de puertas y señales de proximidad con la ubicación y los datos de ruta. Para conocer más sobre Plaspy y cómo puede integrar la telemetría de sensores BLE en flujos de trabajo de monitoreo de flotas y activos visite https://www.plaspy.com. Para los detalles de protocolo más actuales, comportamiento de firmware y guías de implementación del dispositivo, verifique la información con el fabricante en https://www.arusnavi.ru ya que el soporte de protocolo y las funcionalidades de firmware pueden cambiar con el tiempo.
