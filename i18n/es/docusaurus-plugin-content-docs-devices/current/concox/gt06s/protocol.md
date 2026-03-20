---
slug: /concox/gt06s/protocol
id: gt06s-protocol
sidebar_label: Protocol
title: Concox - GT06S Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Concox GT06S con Plaspy en telemetría GPS y comunicación de dispositivos
keywords:
  - protocolo Concox GT06S
  - protocolo GPS Concox GT06S
  - protocolo de rastreo Concox GT06S
  - compatibilidad GT06S Plaspy
  - protocolo rastreador Concox
  - protocolo de comunicación GT06S
  - protocolo de rastreador GPS
  - protocolo de rastreo vehicular
  - compatibilidad dispositivos Plaspy
  - rastreo de flotas GT06S
---

# Concox - Protocolo GT06S

Esta página describe el contexto público del protocolo para usar el rastreador Concox GT06S con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a nivel de conexión y telemetría sin exponer detalles propietarios o sensibles de implementación. El objetivo es ayudar a operadores e integradores a comprender qué reporta el rastreador y cómo Plaspy recibe esa información para mapas, alertas e informes.

Plaspy usa configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el equipo está configurado para reportar a Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del GT06S, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto público y consideraciones prácticas de compatibilidad.

## Resumen del protocolo

El protocolo de reporte del GT06S es el mecanismo por el cual el dispositivo envía telemetría de ubicación, estado y eventos a un endpoint en la nube. En términos prácticos, este protocolo asegura que el rastreador pueda identificarse, transmitir posiciones basadas en GNSS y en la red celular, enviar alarmas y eventos de sensores, y permitir que el servidor convierta esos mensajes en datos útiles para flujos de trabajo de flotas.

- Codifica la identidad y el estado del dispositivo para que el servidor asocie la telemetría con un vehículo o activo.
- Transporta actualizaciones de ubicación GNSS y LBS, junto con marcas de tiempo y estados básicos de sensores.
- Transmite tipos de eventos como estado de encendido, alertas de manipulación, eventos del acelerómetro y solicitudes remotas de corte en un formato legible por máquina.
- Permite que la plataforma en la nube mapee, muestre y archive datos de ubicación y eventos para alertas e informes.
- Soporta la subida de registros offline al reconectar, de modo que los puntos históricos se preserven después de una pérdida de conectividad.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador cuando un dispositivo está correctamente apuntado al servicio. En la mayoría de los casos el propietario del dispositivo no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy y usa las opciones de transporte soportadas.

- El endpoint público de Plaspy para el reporte de dispositivos es d.plaspy.com y también puede alcanzarse en 54.85.159.138.
- La plataforma de Plaspy escucha en el puerto 8888 para conexiones de dispositivos.
- Los dispositivos pueden usar UDP o TCP para conectarse a Plaspy en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el lado del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint compartido.
- Es necesaria una configuración adecuada de APN y red en la SIM para que el dispositivo alcance el endpoint de Plaspy.

## Transporte y contexto de conexión

El GT06S normalmente transmite su telemetría a través de la red móvil usando una tarjeta SIM y puede configurarse para usar transporte TCP o UDP para enviar datos a Plaspy. El contexto de conexión es importante para la fiabilidad y para asociar el dispositivo con la dirección y puerto del servicio Plaspy.

- El dispositivo puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Use TCP o UDP en el puerto 8888 según la configuración del dispositivo y la preferencia del operador.
- Todos los dispositivos soportados por Plaspy usan el mismo número de puerto 8888 para reportar a la plataforma.
- Configuraciones de red móvil como APN, intensidad de señal y comportamiento de roaming del operador afectan la entrega.
- Asegúrese de que el GT06S esté configurado para apuntar al endpoint de Plaspy y que la SIM tenga conectividad de datos.
- El comportamiento de subida de registros offline restaura los puntos históricos al reconectarse para que Plaspy mantenga la continuidad.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué mensajes o tipos de eventos envía el dispositivo; verifique el comportamiento según su versión de firmware.
- Las revisiones de hardware y las variantes regionales del GT06S pueden incluir conjuntos de funciones o campos de telemetría ligeramente distintos.
- Opciones de configuración del fabricante, como la selección del modo de transporte (TCP versus UDP), afectan cómo el dispositivo se conecta a Plaspy.
- Confirme la provisión de APN y la configuración de la red móvil para garantizar una entrega fiable al endpoint de Plaspy.
- Pruebe un único dispositivo en su cuenta antes de un despliegue masivo para validar el mapeo de eventos y la cadencia de reportes.
- Consulte la documentación del fabricante para límites de temporización de mensajes y métodos de configuración específicos del dispositivo, como SMS o gestión remota.

## Por qué es importante comprender el protocolo

Comprender el contexto público del protocolo del GT06S facilita la configuración, el diagnóstico y la fiabilidad a largo plazo al integrar dispositivos en Plaspy. Tener expectativas claras sobre lo que el rastreador reporta y cómo la plataforma lo recibe reduce el tiempo dedicado a diagnosticar problemas de conectividad y mapeo de datos.

- Asegura que los dispositivos estén apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 para una entrega exitosa.
- Ayuda a solucionar telemetría faltante revisando el tipo de transporte y la configuración del APN.
- Facilita la interpretación de tipos de eventos como encendido, manipulación, alertas del acelerómetro y corte remoto en los paneles de Plaspy.
- Apoya la planificación de actualizaciones de firmware que puedan cambiar campos de telemetría o comportamientos.
- Mejora la confianza en el despliegue al validar un dispositivo de muestra antes de escalar.

## Ventajas de usar Plaspy con este protocolo

Usar el GT06S con Plaspy ofrece a operadores de flotas y activos visibilidad práctica y en tiempo real de la ubicación del vehículo, el estado de encendido, eventos del acelerómetro y funciones antirrobo como el corte remoto. Plaspy mapea e interpreta la telemetría del dispositivo en paneles, reglas de alerta e informes históricos para que los equipos puedan reaccionar ante eventos, analizar el comportamiento del conductor y mantener continuidad mediante la subida de registros offline.

El endpoint compartido de Plaspy y la detección automática del protocolo simplifican la integración: apunte sus dispositivos GT06S a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP y la plataforma reconocerá el equipo que reporta. Para saber más sobre Plaspy visite https://www.plaspy.com. Verifique los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y las indicaciones del fabricante en el sitio oficial de Concox en https://www.iconcox.com/ ya que las implementaciones pueden evolucionar con el tiempo.
