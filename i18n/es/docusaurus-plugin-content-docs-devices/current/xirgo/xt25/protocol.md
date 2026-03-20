---
slug: /xirgo/xt25/protocol
id: xt25-protocol
sidebar_label: Protocol
title: Xirgo - XT25 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo Xirgo XT25 y cómo comunica con Plaspy, con guía para la conexión
keywords:
  - protocolo Xirgo XT25
  - protocolo GPS Xirgo XT25
  - compatibilidad XT25 Plaspy
  - rastreo de vehículos XT25
  - comunicación de localizador GPS
  - protocolo gestión de flotas
  - telemática OBD XT25
  - LTE Cat M1 NB2 tracker
  - emparejamiento Bluetooth ELD
  - telemetría antirrobo
---

# Xirgo - Protocolo XT25

Esta página resume el contexto público del protocolo para usar el Xirgo XT25 con Plaspy. Se centra en cómo el dispositivo reporta ubicación y telemetría a la plataforma Plaspy en términos generales, qué ajustes de conexión se usan públicamente y consideraciones prácticas para lograr que el equipo envíe datos a Plaspy para rastreo e informes.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el dispositivo apunta al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene un enfoque público y orientado a la integración, destacando los datos de conexión necesarios para integrar dispositivos XT25 con Plaspy.

## Resumen del protocolo

El XT25 comunica la ubicación del vehículo, eventos de movimiento y telemetría básica a un servidor backend usando el protocolo de reportes implementado por Xirgo. En Plaspy, este protocolo suministra la información necesaria para mostrar ubicaciones en vivo, activar eventos y registrar telemetría histórica; el dispositivo sigue siendo responsable de obtener correcciones GNSS, señales OBD y datos de sensores del vehículo.

- El protocolo permite que el dispositivo se identifique y envíe telemetría periódica o basada en eventos a un servidor remoto para su procesamiento.
- La telemetría normalmente incluye fixes GPS, eventos de movimiento detectados por el acelerómetro y señales del vehículo disponibles por OBD o cableado.
- El protocolo regula cómo el rastreador solicita acuses de recibo, timestamps y los intervalos de reporte configurados cuando el firmware del equipo lo soporta.
- Plaspy ingiere los datos transmitidos y mapea campos comunes como ubicación, velocidad, estado de ignición y marcas de tiempo de eventos en sus flujos de rastreo e informes.
- El firmware y la configuración determinan qué interfaces opcionales están activas, como proxy de sensores Bluetooth, reporte de batería interna o señalización por E/S externas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos de los dispositivos en un endpoint compartido y determina automáticamente qué protocolo de rastreador se está usando, por lo que usted normalmente no tendrá que seleccionar un protocolo manualmente. Si un XT25 está configurado para reportar a Plaspy y la red está correctamente establecida, Plaspy detectará y procesará los mensajes del dispositivo según el comportamiento observado.

- Plaspy escucha en un solo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador en las conexiones entrantes.
- El endpoint del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para reportes de dispositivos; este mismo puerto se usa en todos los dispositivos de la flota Plaspy.
- Cuando un XT25 apunta al endpoint de Plaspy y envía sus primeros reportes, Plaspy asocia el tráfico entrante a un perfil de protocolo conocido para su procesamiento.
- Usted por lo general solo debe configurar el host de reporte y el transporte en el XT25; Plaspy se encarga de la identificación protocolar en segundo plano.

## Transporte y contexto de conexión

Las unidades XT25 pueden configurarse para usar transporte UDP o TCP para enviar telemetría, dependiendo del firmware y la preferencia del instalador. Para conectarse a Plaspy, configure el dispositivo para reportar al endpoint de Plaspy en el puerto compartido; este es el contexto de conexión público necesario para la integración.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 como dirección del servidor Plaspy.
- Plaspy acepta conexiones UDP y TCP de dispositivos en el puerto 8888.
- El puerto 8888 se utiliza para todos los dispositivos que reportan a Plaspy, lo que simplifica la configuración de gateways y firewalls.
- Elija UDP para menor sobrecarga y un comportamiento de retransmisión más sencillo, o TCP cuando se prefiera entrega ordenada y estado de conexión, sujeto a lo que soporte el firmware del XT25.
- Confirme el APN celular y el acceso a la red para que el XT25 pueda alcanzar el endpoint de Plaspy a través del transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar qué campos de telemetría se envían y cómo el dispositivo estructura los reportes; valide el firmware instalado en las unidades XT25 al solucionar problemas.
- Diferentes builds regionales de firmware o variantes para operadores (por ejemplo imágenes específicas de carrier) pueden activar o desactivar funciones opcionales como emparejamiento Bluetooth ELD o determinados canales OBD.
- La selección de transporte entre UDP y TCP es configurable en muchas instalaciones; asegúrese de que el XT25 esté configurado con el transporte soportado por el despliegue y permitido por las políticas de red.
- Las expansiones de E/S externas y el reporte opcional de batería interna son características del dispositivo que afectan qué datos aparecen en Plaspy, pero no cambian el endpoint de reporte fundamental.
- Siempre verifique capacidades como PIDs OBD y perfiles Bluetooth contra la documentación del fabricante para el modelo y la revisión de firmware exactos.
- Valide la sincronización horaria del dispositivo y el comportamiento de los fixes GNSS después de la instalación para asegurar que las marcas de tiempo de eventos se alineen con las necesidades de reporte en Plaspy.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del XT25 ayuda a los instaladores y responsables de flota a configurar los dispositivos correctamente, anticipar qué datos recibirá Plaspy y resolver con eficiencia problemas de conectividad o mapeo de datos.

- Garantiza que el dispositivo apunte al endpoint Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que Plaspy pueda ingerir los reportes.
- Ayuda a seleccionar el modo de transporte correcto (UDP o TCP) según la confiabilidad de la red y las necesidades de funcionalidad.
- Facilita la resolución de telemetría faltante revisando el firmware, las interfaces activadas y la compatibilidad OBD.
- Apoya la planificación de integraciones opcionales como sensores Bluetooth, E/S externas para inmovilizadores o alertas por batería interna.
- Reduce el tiempo de despliegue al alinear la configuración del dispositivo con las expectativas de Plaspy sobre cadencia de reportes y notificaciones de eventos.

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT25 con Plaspy ofrece a las flotas hardware compacto y práctico combinado con una plataforma que gestiona automáticamente la detección de protocolo y el mapeo de datos comunes. Las opciones de instalación plug and play del XT25, su capacidad OBD, el acelerómetro integrado y el Bluetooth opcional lo hacen adecuado para despliegues de flotas mixtas que requieren visibilidad en tiempo real y alertas basadas en eventos.

Si desea conocer más sobre cómo Plaspy trabaja con dispositivos como el XT25, visite https://www.plaspy.com para explorar funciones de la plataforma y guías de despliegue. Para el comportamiento más reciente y específico del protocolo del dispositivo, detalles de firmware y guías de instalación, consulte la documentación del fabricante en https://xirgo.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
