---
slug: /concox/gv20/protocol
id: gv20-protocol
sidebar_label: Protocol
title: Concox - GV20 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Concox GV20 y su conexión con Plaspy para rastreo de flotas
keywords:
  - Protocolo Concox GV20
  - Protocolo GPS Concox GV20
  - Comunicación del GV20
  - Protocolo de rastreo GV20
  - Concox GV20 Plaspy
  - Rastreo de flotas GV20
  - Protocolo del tracker Concox
  - Rastreador vehicular GV20
  - Compatibilidad de dispositivos Plaspy
  - Funciones de corte remoto GV20
---

# Concox - Protocolo GV20

Esta página explica el contexto público del protocolo para usar el rastreador GPS Concox GV20 con Plaspy. El Concox GV20 es un dispositivo 3G pensado para el seguimiento de vehículos, motos y autobuses; ofrece funciones como reporte de ubicación en tiempo real, historial de recorridos y reproducción, estado de ignición, notificaciones instantáneas de alertas y corte remoto de combustible o alimentación cuando el hardware y el firmware lo permiten. El contenido aquí se centra en cómo el GV20 se comunica con Plaspy de forma general y no sensible para facilitar la configuración y la resolución de problemas.

Plaspy utiliza ajustes de conexión compartidos para los modelos compatibles y detecta automáticamente el protocolo cuando un dispositivo se configura para reportar al endpoint de Plaspy. Datos públicos de conexión de Plaspy que puede usar al configurar el GV20 son d.plaspy.com como dominio de servidor, 54.85.159.138 como dirección alcanzable y el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, Plaspy emplea el mismo puerto para todos los dispositivos soportados y el comportamiento del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo entre el GV20 y una plataforma en la nube como Plaspy define cómo el dispositivo reporta telemetría y eventos, y cómo los comandos iniciados por la plataforma se enrutan de regreso al dispositivo. Para el GV20 esto incluye actualizaciones de ubicación, eventos de estado como cambios de ignición o alertas, y acciones de control como el corte remoto de combustible o alimentación cuando el hardware y el firmware lo soportan.

- Transporta telemetría de posición para que Plaspy muestre la ubicación en tiempo real y el historial de rutas.
- Envía notificaciones de eventos para alertas, estado de ignición, activaciones de geocerca y condiciones similares.
- Habilita acciones iniciadas por la plataforma cuando el dispositivo y el firmware admiten funciones de control remoto.
- Identifica el dispositivo ante el servidor para que Plaspy asocie los reportes con el activo correcto.
- Proporciona una cadencia de reportes predecible que Plaspy utiliza para mostrar actividad reciente e histórica.

## Cómo Plaspy detecta el protocolo

Plaspy depende de un endpoint de servidor y puerto compartidos para las conexiones entrantes de dispositivos y usa detección automática para reconocer el protocolo del rastreador cuando un dispositivo reporta. En la mayoría de los casos no es necesario seleccionar un protocolo en la interfaz de Plaspy siempre que el GV20 esté configurado para reportar al servidor de Plaspy.

- Plaspy escucha conexiones de dispositivos en el mismo puerto para todos los modelos soportados: el puerto 8888.
- Los dispositivos pueden apuntar al servidor de Plaspy usando el dominio d.plaspy.com o la dirección 54.85.159.138.
- Plaspy acepta tanto conexiones UDP como TCP en el puerto 8888 según cómo esté configurado el dispositivo.
- Cuando el GV20 envía sus reportes iniciales al endpoint de Plaspy, la plataforma utiliza esos datos entrantes para detectar el protocolo y asociar el dispositivo.
- Una configuración correcta del reporte del dispositivo normalmente evita la necesidad de seleccionar manualmente el protocolo dentro de Plaspy.

## Contexto de transporte y conexión

Los ajustes de conexión y transporte determinan cómo el GV20 alcanza a Plaspy, pero no son lo mismo que la carga útil del protocolo. El GV20 puede configurarse para usar UDP o TCP para reportar; el protocolo subyacente se ejecuta sobre ese transporte y lleva la telemetría real y la información de eventos hacia Plaspy.

- El GV20 puede configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy recibe el tráfico de dispositivos en el puerto 8888 y todos los dispositivos Plaspy usan ese mismo puerto.
- Según el firmware y la configuración del equipo, el reporte puede usar UDP o TCP en el puerto 8888.
- Ajustes a nivel de red como APN, disponibilidad de datos móviles y cobertura 3G del operador afectan la conectividad independientemente del protocolo del rastreador.
- Confirme que el dispositivo esté configurado para reportar al endpoint de Plaspy para permitir la detección automática del protocolo.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede depender de la versión de firmware del GV20; firmware más nuevos o antiguos pueden cambiar las funciones disponibles o el comportamiento de los mensajes.
- Las revisiones de hardware y módulos accesorios opcionales pueden afectar qué eventos y controles están disponibles mediante el protocolo del dispositivo.
- Las configuraciones del fabricante determinan si el dispositivo usa UDP o TCP y el formato exacto de la dirección del servidor.
- Siempre verifique que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar compatibilidad con Plaspy.
- Limitaciones de la red del operador, como cobertura 3G y configuración de la SIM, pueden influir en el comportamiento real aun cuando los ajustes del protocolo sean correctos.
- Consulte la documentación del fabricante para cualquier bandera específica del modelo o pasos de configuración que afecten el reporte a plataformas de terceros.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico de cómo se comunica el GV20 ayuda a garantizar una configuración más fluida, una resolución de problemas más rápida y un funcionamiento fiable con Plaspy. Conocer el papel de los ajustes de transporte, la dirección del servidor y las diferencias de firmware reduce el tiempo de puesta en marcha y facilita la identificación de problemas cuando un dispositivo no aparece en línea o no envía los eventos esperados.

- Facilita la verificación de servidor y puerto correctos al inicializar dispositivos.
- Ayuda a interpretar comportamientos del equipo como reportes perdidos, alertas con retraso o mensajes de estado inusuales.
- Orienta la decisión sobre usar UDP o TCP según el entorno de despliegue.
- Apoya la planificación de actualizaciones de firmware o cambios de hardware que podrían alterar el comportamiento del protocolo.
- Mejora la coordinación con el fabricante o integrador cuando se requieran ajustes en el dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el Concox GV20 con Plaspy ofrece una plataforma consolidada para visibilidad de vehículos, monitoreo de rutas, alertas y funciones de control remoto cuando el dispositivo lo soporta. Para flotas, autobuses y otras operaciones vehiculares, la combinación de la telemetría del GV20 y los reportes de Plaspy proporciona herramientas prácticas para operaciones diarias, respuesta a incidentes y análisis histórico.

Si desea conocer más sobre Plaspy y cómo funciona con el Concox GV20, visite https://www.plaspy.com. Para la documentación más actualizada específica del dispositivo, notas de firmware y detalles de implementación del fabricante, verifique la información en el sitio oficial de Concox https://www.iconcox.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
