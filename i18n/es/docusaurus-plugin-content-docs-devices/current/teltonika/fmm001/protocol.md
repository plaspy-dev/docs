---
slug: /teltonika/fmm001/protocol
id: fmm001-protocol
sidebar_label: Protocol
title: Teltonika - FMM001 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Teltonika FMM001 y cómo comunica con Plaspy usando conexión compartida y detección automática
keywords:
  - protocolo Teltonika FMM001
  - protocolo GPS Teltonika FMM001
  - compatibilidad Teltonika FMM001 Plaspy
  - protocolo de comunicación FMM001
  - protocolo de rastreo FMM001
  - protocolo de rastreador GPS Teltonika
  - telemetría OBD II Teltonika
  - rastreador CAT M1 OBD
  - integración Bluetooth LE
  - protocolo GPS para gestión de flotas
---

# Teltonika - Protocolo FMM001

Esta página ofrece el contexto público del protocolo para integrar el Teltonika FMM001 con Plaspy. Explica, a alto nivel, cómo el equipo se comunica, qué papel cumple el protocolo en el intercambio de telemetría y eventos, y qué ajustes de conexión de Plaspy se usan para el reporte. El objetivo es brindar orientación práctica y no sensible para facilitar la configuración y la verificación, no reproducir detalles internos del fabricante.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que usted debe confirmar detalles específicos del dispositivo en la documentación oficial de Teltonika cuando sea necesario.

## Resumen del protocolo

A nivel general, el protocolo del FMM001 define cómo el rastreador se identifica ante un servidor, cómo reporta datos GNSS y OBD II, y cómo transmite eventos como cambios de ignición o alertas del acelerómetro. El protocolo es el puente entre el firmware del dispositivo y la plataforma Plaspy, permitiendo la ingestión consistente de ubicación, diagnósticos y datos de sensores para monitoreo y análisis de flotas.

- Permite la identificación del dispositivo y el enrutamiento seguro de telemetría hacia un endpoint de Plaspy
- Transporta posición GNSS, parámetros OBD II, eventos del acelerómetro y estados de sensores BLE en reportes periódicos
- Soporta informes periódicos y mensajes impulsados por eventos para capturar viajes, geocercas y alarmas
- Permite la configuración remota y la gestión de firmware mediante herramientas del fabricante mientras el dispositivo reporta a Plaspy
- Proporciona un mecanismo común para que el FMM001 funcione con plataformas de terceros usando la pila de red del dispositivo

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y usa los datos recibidos para determinar el protocolo correcto del rastreador para parseo y procesamiento. Esta detección automática elimina en la mayoría de los casos la necesidad de seleccionar el protocolo manualmente cuando el dispositivo está correctamente configurado para reportar a Plaspy.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- Los dispositivos reportan al puerto de reporte de Plaspy 8888 y Plaspy usa el mismo puerto para todos los dispositivos compatibles
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint
- Normalmente no es necesario definir un tipo de protocolo en Plaspy si el rastreador apunta al endpoint de Plaspy y usa el transporte esperado

## Contexto de transporte y conexión

Los ajustes de transporte y conexión controlan cómo el FMM001 envía sus mensajes de protocolo a Plaspy. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según la configuración del equipo y las condiciones de la red. Tanto el uso de DNS como la IP directa funcionan para apuntar el dispositivo a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy acepta reportes de dispositivos en d.plaspy.com o 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes
- Elija UDP para telemetría periódica ligera o TCP para mayor fiabilidad orientada a sesión según el soporte del dispositivo y las políticas de red
- Confirme que el firewall de red y la configuración del APN permitan tráfico saliente hacia el servidor y puerto de Plaspy

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué campos se reportan o cómo se codifican los eventos; siempre confirme la compatibilidad para su compilación de firmware
- Las revisiones de hardware y los conjuntos de funciones opcionales (por ejemplo OBD II o soporte BLE) pueden afectar la telemetría disponible y las opciones de configuración
- La selección de transporte (UDP vs TCP) puede modificar el comportamiento en retransmisiones y continuidad de sesión
- Las herramientas del fabricante como FOTA, Teltonika Configurator y la app FMBT son los canales autorizados para actualizaciones de firmware y opciones de dispositivo
- Valide que el destino de reporte del dispositivo coincida con los ajustes de Plaspy antes del despliegue
- Al integrar a escala, pruebe dispositivos representativos en distintas versiones de firmware para detectar diferencias de comportamiento

## Por qué es importante entender el protocolo

Comprender cómo se comunica el FMM001 ayuda a asegurar una configuración confiable, una ingestión de datos precisa y una resolución eficiente de problemas cuando el dispositivo se usa con Plaspy. Tener claridad sobre el papel del protocolo reduce la fricción en la integración y ayuda a los equipos a detectar problemas de configuración o red más rápido.

- Ayuda a confirmar que el dispositivo está reportando al endpoint y puerto correctos de Plaspy
- Facilita la resolución de problemas por posiciones faltantes, huecos en la telemetría o reportes de eventos inesperados
- Apoya la planificación de actualizaciones de firmware y el habilitado de funciones como lectura de parámetros OBD II e integración de sensores BLE
- Mejora las expectativas sobre el consumo de batería y la gestión de energía derivada de modos de suspensión e intervalos de reporte
- Permite una escalada más fluida de flotas al anticipar diferencias entre revisiones de hardware y firmware

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM001 con Plaspy ofrece a las organizaciones una vía práctica para capturar ubicación, diagnósticos del vehículo y eventos de sensores en una plataforma unificada para flotas. La capacidad OBD II del FMM001, su GNSS, datos del acelerómetro y soporte BLE lo convierten en un rastreador flexible para aplicaciones como monitoreo de flotas, supervisión de alquiler y leasing, análisis del comportamiento del conductor y telemática para seguros. El enfoque de endpoint compartido de Plaspy simplifica el onboarding de dispositivos al centralizar el reporte a una sola dirección y puerto de servidor mientras detecta automáticamente el protocolo del rastreador.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para detalles más actuales sobre capacidades del dispositivo, firmware y guías de configuración, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
