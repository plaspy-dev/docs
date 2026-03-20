---
slug: /jointech/gp_4000/protocol
id: gp_4000-protocol
sidebar_label: Protocol
title: Jointech - GP 4000 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del tracker Jointech GP 4000 y su comunicación con Plaspy para rastreo de flotillas
keywords:
  - Jointech GP 4000
  - protocolo GP 4000
  - protocolo GPS Jointech
  - GP 4000 Plaspy
  - protocolo de rastreo de vehículos
  - rastreador para gestión de flotas
  - comunicación GPRS GPS
  - rastreador TCP UDP
  - compatibilidad de rastreador GPS
  - integración de Jointech
---

# Jointech - GP 4000 Protocol

Esta página describe el contexto público del protocolo para utilizar el tracker GPS Jointech GP 4000 con Plaspy. Se centra en cómo el dispositivo comunica mediante GPRS y SMS para informar posición, telemetría de sensores y alarmas a una plataforma remota. La información aquí está pensada para ayudar a usuarios técnicos e integradores a comprender el papel del tracker en la comunicación sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración y el comportamiento del equipo pueden diferir incluso para el mismo modelo GP 4000.

## Resumen del protocolo

El GP 4000 emplea GPRS sobre TCP o UDP como transporte y opcionalmente SMS para el reporte, habilitando visibilidad remota de la flota y monitoreo de sensores. El protocolo del equipo transmite telemetría esencial como posición GPS, velocidad, rumbo, entradas y salidas, y lecturas de sensores externos incluyendo sensores de combustible. El comportamiento del protocolo determina cómo el tracker se identifica, cómo informa posiciones periódicas y eventos de alarma, y cómo se entregan comandos de configuración remota.

- Transmite posición GPS y telemetría de movimiento hacia un servidor remoto para seguimiento e informes.
- Envía datos de sensores y alarmas procedentes de entradas externas, incluidas lecturas de sensores de combustible y sensores digitales/analógicos.
- Usa GPRS como canal principal de datos y SMS como alternativa o canal de comandos cuando está configurado.
- Gestiona el reenvío de datos almacenados tras periodos en áreas sin cobertura para asegurar que la información en búfer se entregue después de la recuperación de la red.
- Soporta configuración remota y control operativo mediante comandos OTA cuando el firmware lo permite.
- Funciona con ajustes seriales locales como la velocidad por defecto del dispositivo para configuración directa y depuración.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para conexiones entrantes de trackers y determina automáticamente el protocolo a partir del flujo de datos y el comportamiento del dispositivo. En la mayoría de los despliegues no es necesario seleccionar manualmente un protocolo en Plaspy siempre que el GP 4000 esté configurado para reportar al endpoint de Plaspy.

- Los dispositivos deben apuntar a la dirección del servidor Plaspy d.plaspy.com o a la IP directa 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 y usa ese mismo puerto para todos los dispositivos soportados.
- El GP 4000 puede configurarse para usar transporte UDP o TCP en el puerto 8888 según las opciones del equipo.
- Cuando el GP 4000 reporta al endpoint de Plaspy, la plataforma detectará automáticamente y asociará el flujo entrante con la sesión correcta del dispositivo.
- Es necesario contar con una APN y ajustes GPRS correctos en la SIM para que el reporte a Plaspy funcione.
- Si el equipo está configurado para enviar SMS en lugar de GPRS, los comandos y reportes por SMS pueden usarse para interacciones limitadas y resolución de problemas.

## Transporte y contexto de conexión

El contexto de conexión es parte importante de una integración exitosa. El GP 4000 soporta GPRS sobre GSM y puede utilizar TCP o UDP para las sesiones de datos; la configuración determina qué transporte se utiliza. Para compatibilidad con Plaspy, asegúrese de que el dispositivo esté dirigido al endpoint de Plaspy y que la red y la APN permitan conexiones salientes.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los equipos, por lo que el mismo puerto se emplea en los trackers soportados.
- La confiabilidad de la sesión GPRS y el comportamiento del operador afectarán el patrón de conexión del dispositivo y la latencia de datos.
- SMS está disponible como canal alternativo para comandos o cuando la conectividad de datos no está disponible.
- Ajustes seriales locales como la velocidad por defecto del dispositivo de 9600 baudios pueden ser relevantes al configurar la unidad directamente.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles y los comandos remotos soportados; verifique la versión de firmware al validar compatibilidad.
- Revisiones de hardware o módulos opcionales (por ejemplo sensores de combustible) pueden modificar qué campos de telemetría se transmiten.
- La selección de transporte (TCP vs UDP) puede afectar la fiabilidad y la forma en que Plaspy recibe y marca temporalmente los mensajes.
- El comportamiento GPRS del operador, la configuración de APN y las características de la SIM pueden influir en la conectividad y la persistencia de la sesión.
- La configuración del dispositivo para intervalos de reporte, almacenamiento en zonas sin cobertura y ahorro de energía influye en la frecuencia con la que Plaspy recibe actualizaciones.
- Siempre contraste los pasos de configuración con la documentación oficial de Jointech para el GP 4000 antes de realizar despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración correcta, una ingestión de datos precisa en Plaspy y una operación fiable a largo plazo del tracker en flotas en producción. Conocer cómo reporta el GP 4000 y qué canales utiliza mejora la resolución de problemas y permite una validación de telemetría más efectiva.

- Asegura la configuración correcta de la APN y del destino de reporte para que los datos lleguen a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Facilita mapear los canales de sensores del equipo, como salidas de sensor de combustible, a los campos de la plataforma para reportes precisos.
- Ayuda a diagnosticar conectividad intermitente al distinguir comportamientos de GPRS, TCP, UDP y SMS.
- Contribuye a planificar el almacenamiento en zonas sin cobertura y el comportamiento de reenvío para evitar huecos en el historial.
- Orienta la planificación y validación de actualizaciones de firmware cuando se introducen nuevos campos o comportamientos en los mensajes.
- Permite confirmar que las alarmas y eventos cumplen los requisitos operativos para el monitoreo de flotas.

## Por qué usar Plaspy con este protocolo

Usar el Jointech GP 4000 con Plaspy ofrece una vía práctica para obtener visibilidad de la flota y monitoreo con conciencia de sensores. El soporte del GP 4000 para múltiples sensores, monitoreo de combustible y canales de comunicación flexibles combina bien con la detección automática de protocolos de Plaspy y su enfoque de endpoint unificado, lo que simplifica la incorporación de dispositivos.

Si desea saber más sobre cómo Plaspy maneja la conectividad de dispositivos y las funciones de gestión de flotas, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware e instrucciones de configuración más actualizadas, verifique la información en el sitio del fabricante https://www.jointcontrols.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
