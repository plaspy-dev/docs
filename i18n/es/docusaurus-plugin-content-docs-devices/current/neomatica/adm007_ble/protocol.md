---
slug: /neomatica/adm007_ble/protocol
id: adm007_ble-protocol
sidebar_label: Protocol
title: Neomatica - ADM007 BLE Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador GPS Neomatica ADM007 BLE con Plaspy para seguimiento y telemetría BLE
keywords:
  - Neomatica ADM007 BLE
  - protocolo Neomatica ADM007 BLE
  - protocolo GPS ADM007 BLE
  - ADM007 BLE Plaspy
  - rastreador GPS Neomatica
  - protocolo rastreador GPS
  - rastreador con sensor BLE
  - protocolo seguimiento de flotas
  - seguimiento GPS de vehículos
  - compatibilidad de dispositivos Plaspy
---

# Neomatica - Protocolo ADM007 BLE

Esta página ofrece un panorama público del contexto del protocolo para usar el rastreador Neomatica ADM007 BLE con Plaspy. Se enfoca en cómo el dispositivo comunica datos con la plataforma Plaspy en términos generales, qué opciones de transporte y conexión son habituales y qué esperar al integrar el ADM007 BLE en una implementación con Plaspy.

El ADM007 BLE es un rastreador GPS tipo enchufe para toma de cigarrillo que incluye posicionamiento GPS/GLONASS, soporte para sensores BLE, detección anti-jamming y registro local de datos. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto de reporte puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página ofrece orientación pública y contexto práctico sin exponer detalles privados de implementación.

## Resumen del protocolo

El protocolo de comunicación define cómo el ADM007 BLE informa posiciones GNSS, lecturas de sensores BLE, actualizaciones de estado y alarmas a un servidor remoto como Plaspy. A alto nivel, el protocolo permite la identificación del dispositivo, reportes periódicos o por eventos y la entrega de telemetría que Plaspy procesa para monitoreo en tiempo real y análisis histórico.

- Transmite posición GNSS y telemetría de sensores BLE para su uso en paneles y alertas de Plaspy.
- Entrega actualizaciones de estado y eventos para que Plaspy refleje conectividad, manipulación o condiciones de anti jamming.
- Soporta registro local y carga diferida para que el historial de rutas se sincronice con Plaspy cuando haya conectividad.
- Permite configuración remota y mantenimiento a través de canales soportados como Bluetooth, SMS o GPRS según la documentación del fabricante.
- Habilita que el rastreador se identifique y envíe los datos mínimos que Plaspy requiere para asociar registros de dispositivos a cuentas y vehículos.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta correctamente al endpoint compartido de Plaspy. En general, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy cuando el ADM007 BLE está configurado para enviar datos a la plataforma, ya que Plaspy inspecciona los reportes entrantes para asociarlos con el parser y el registro de dispositivo correspondiente.

- Plaspy acepta conexiones de dispositivos en la dirección pública de servidor d.plaspy.com y en la IP de la plataforma 54.85.159.138.
- Todos los dispositivos que reportan a Plaspy usan el mismo número de puerto 8888, lo que simplifica la configuración y la incorporación.
- El ADM007 BLE puede configurarse para usar UDP o TCP para enviar reportes a Plaspy, según la configuración del dispositivo.
- Cuando el ADM007 BLE apunta al endpoint de Plaspy y al puerto 8888, Plaspy detectará el protocolo automáticamente y mapeará los datos entrantes al dispositivo correcto en la plataforma.
- La selección manual de protocolo dentro de Plaspy normalmente no es necesaria si el dispositivo está configurado para reportar a d.plaspy.com en el puerto compartido.

## Contexto de transporte y conexión

Las opciones de conexión determinan cómo el ADM007 BLE llega a Plaspy, pero por lo general no cambian la telemetría de alto nivel que se entrega. El rastreador está diseñado para reportar mediante GPRS celular a un servidor remoto y puede configurarse para usar distintos transportes de red cuando el firmware del dispositivo lo permita.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138 cuando la configuración de red requiere una dirección en lugar de un hostname.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que facilita la configuración de cortafuegos y APN.
- La selección del transporte puede afectar características de entrega como latencia y retransmisión, pero no altera que Plaspy detecte automáticamente el protocolo entrante.
- Para la configuración inicial, asegúrese de que el APN y los parámetros de red en el ADM007 BLE sean válidos y que las conexiones salientes a d.plaspy.com en el puerto 8888 estén permitidas por la red.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre revisiones de hardware del ADM007 BLE pueden modificar los comandos disponibles, los intervalos de reporte y el comportamiento de los sensores BLE.
- Las herramientas de configuración suministradas por el fabricante, como la app ADM Configurator y las actualizaciones FOTA, pueden cambiar el comportamiento del protocolo con el tiempo.
- La integración de sensores BLE y la cantidad de sensores soportados dependen del firmware del dispositivo y de los perfiles de sensor específicos que se utilicen.
- La elección de transporte entre UDP y TCP puede estar restringida por las redes de los operadores o por la configuración del dispositivo y afectar la fiabilidad de la entrega.
- Valide que la versión de firmware que va a desplegar esté documentada por Neomatica para las funcionalidades de reporte esperadas.
- Confirme siempre los ajustes de configuración como APN, host de destino y protocolo de transporte con la documentación oficial de Neomatica cuando sea posible.

## Por qué es importante entender el protocolo

Comprender cómo el ADM007 BLE se comunica con Plaspy ayuda a asegurar un despliegue confiable, agilizar la resolución de problemas y mantener flujos de datos predecibles para las operaciones de flota. Conocer el comportamiento de conexión y del protocolo permite a los equipos configurar redes y dispositivos de forma que se minimice el tiempo de inactividad y se garantice que la telemetría llegue a la plataforma.

- Asegura los ajustes correctos de APN y red para que los dispositivos alcancen consistentemente d.plaspy.com en el puerto 8888.
- Facilita la resolución de problemas cuando los mensajes se demoran, se pierden o no se asocian con el dispositivo correcto en Plaspy.
- Orienta la elección entre UDP y TCP según prioridades operativas como latencia o garantías de entrega.
- Guía la planificación de actualizaciones de firmware para validar nuevas funciones o cambios en el protocolo antes de un despliegue masivo.
- Ayuda a los operadores a decidir cuándo es necesario el registro local y la sincronización para preservar el historial de rutas durante brechas de conectividad.

## Por qué usar Plaspy con este protocolo

Utilizar el ADM007 BLE con Plaspy ofrece un camino sencillo para obtener ubicación en tiempo real del vehículo, telemetría combinada de sensores BLE y análisis histórico de rutas en una sola plataforma. El modelo de endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación, de modo que los dispositivos configurados para reportar a la plataforma comienzan a entregar datos útiles con mapeo manual mínimo.

Si desea obtener más información sobre cómo Plaspy maneja la integración de dispositivos y explorar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles autorizados específicos del dispositivo, notas de firmware y la guía de implementación más reciente, consulte al fabricante en https://neomatica.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
