---
slug: /skypatrol/sp3400c/protocol
id: sp3400c-protocol
sidebar_label: Protocol
title: SkyPatrol - SP3400C Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo SkyPatrol SP3400C para integración con Plaspy y contexto de conexión
keywords:
  - protocolo SkyPatrol SP3400C
  - protocolo GPS SkyPatrol SP3400C
  - protocolo SkyPatrol SP3400C para Plaspy
  - protocolo de comunicación SkyPatrol SP3400C
  - comunicación rastreador GPS
  - protocolo de seguimiento vehicular
  - compatibilidad Plaspy
  - rastreador GPS CDMA
  - rastreador para gestión de flotas
  - firmware por aire
---

# SkyPatrol - Protocolo SP3400C

Esta página explica el contexto público del protocolo para usar el rastreador GPS SkyPatrol SP3400C con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, cuál es el papel del protocolo de reporte del rastreador y qué ajustes de conexión se suelen emplear al integrar el SP3400C en la plataforma Plaspy. La información aquí es no sensible y está pensada para ayudar a administradores e integradores a comprender la relación de comunicación entre el dispositivo y Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos reportados pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para comandos específicos del dispositivo, formatos binarios o notas de versiones de firmware, consulte la documentación oficial de SkyPatrol.

## Vista general del protocolo

El glosario del protocolo para el SP3400C corresponde al conjunto de convenciones que permiten al dispositivo enviar posición y telemetría a un servidor y recibir configuración o actualizaciones cuando el dispositivo lo soporta. En la práctica esto significa que el rastreador empaqueta posiciones GPS, banderas de estado y el estado de entradas/salidas de forma que el servidor receptor pueda interpretarlas y mapearlas a funciones de seguimiento de vehículos.

- Permite que el dispositivo reporte posición GPS, hora y telemetría básica a un servidor remoto.
- Transporta señales de estado del SP3400C como detección de encendido, eventos del acelerómetro y estado de E/S.
- Proporciona el canal observable para actualizaciones de firmware por aire y configuración remota cuando el dispositivo y el operador celular lo soportan.
- Permite que la plataforma receptora identifique el dispositivo y asocie los mensajes entrantes con un registro de vehículo o activo.
- Sirve como base para funciones de mayor nivel como alertas de geocerca, detección de movimiento y reporte de eventos.

## Cómo detecta Plaspy el protocolo

Plaspy identifica automáticamente el protocolo del rastreador cuando un dispositivo comienza a reportar al endpoint del servidor Plaspy. Usted normalmente no necesita elegir un protocolo específico dentro de Plaspy si el dispositivo está configurado para reportar al destino correcto de Plaspy y usa un transporte soportado.

- Plaspy expone un endpoint compartido en d.plaspy.com y la IP pública 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma escucha en el puerto 8888 para conexiones entrantes de dispositivos.
- Los dispositivos pueden configurarse para reportar vía UDP o TCP al endpoint de Plaspy según las capacidades del equipo y el soporte del operador.
- Cuando un SP3400C correctamente configurado reporta al endpoint de Plaspy, Plaspy detectará e interpretará automáticamente el protocolo de ese dispositivo.
- En la mayoría de los casos, la integración solo requiere apuntar el dispositivo a la dirección de Plaspy y confirmar el transporte y las credenciales si aplica.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el SP3400C llega a Plaspy y qué opciones de transporte están típicamente disponibles. El SP3400C soporta múltiples métodos de comunicación y su configuración determinará si se usa UDP o TCP para el reporte en tiempo real.

- El SP3400C puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 como destino de reporte.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración de equipos en una flota.
- Dependiendo del operador y de la configuración del equipo, las unidades SP3400C también pueden soportar SMS para ciertas comunicaciones, aunque el reporte al servidor Plaspy normalmente usa transporte IP.
- Verifique la configuración de red y del operador para asegurarse de que el rastreador pueda alcanzar Plaspy mediante el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el conjunto exacto de campos que el dispositivo reporta y cómo se codifican los eventos; confirme las notas de la versión de firmware para más detalles.
- Las revisiones de hardware y las variantes regionales del SP3400C pueden mostrar diferencias en entradas, salidas o soporte de bandas celulares.
- La selección del transporte (UDP vs TCP) puede afectar comportamientos como retransmisiones y semántica de sesión; elija el transporte que mejor se adapte a su red y configuración del dispositivo.
- La capacidad de actualizaciones por aire implica que el comportamiento puede cambiar después de una actualización; coordine las actualizaciones durante ventanas de mantenimiento planificadas.
- Las cadenas de configuración del fabricante y los ajustes de servidor deben introducirse correctamente en el dispositivo para garantizar que reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Valide la compatibilidad con la documentación de SkyPatrol y pruebe un dispositivo de muestra antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el SP3400C ayuda a garantizar un flujo de datos confiable hacia Plaspy, acelera la resolución de problemas e informa decisiones sobre la configuración operativa de la flota. Tener claro el protocolo y las opciones de transporte reduce fricción en la integración y mejora la confiabilidad a largo plazo.

- Acelera la configuración inicial al dejar claro a qué servidor y puerto debe reportar el dispositivo.
- Facilita la resolución de problemas de conectividad al acotar si el problema es el transporte, la red o la configuración del dispositivo.
- Informa decisiones sobre actualizaciones de firmware, puesto que el comportamiento del protocolo puede cambiar entre versiones.
- Permite el mapeo correcto de telemetría y E/S del dispositivo a reglas de monitoreo y alertas en Plaspy.
- Ayuda a planear la escala al asegurar configuraciones consistentes en una flota mixta de dispositivos.

## Por qué usar Plaspy con este protocolo

Usar el SkyPatrol SP3400C con Plaspy ofrece a las organizaciones una vía directa para obtener visibilidad de vehículos, monitoreo de eventos y supervisión operativa. El diseño robusto del SP3400C, su conectividad CDMA, el acelerómetro y las capacidades de E/S lo hacen apropiado para muchos escenarios de telemática vehicular, mientras que Plaspy recibe y normaliza los datos del dispositivo para que las flotas puedan actuar sobre ellos.

El modelo de conexión compartida de Plaspy y la detección automática de protocolo simplifican la integración: apunte el SP3400C a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte soportado, y Plaspy gestionará los reportes entrantes del dispositivo. Para conocer más sobre Plaspy y cómo soporta integraciones de rastreadores visite https://www.plaspy.com. Para los detalles más actuales del protocolo SP3400C, notas de firmware e instrucciones específicas del dispositivo, verifique la información con el fabricante en https://www.skypatrol.com/ ya que las implementaciones del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
