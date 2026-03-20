---
slug: /concox/at4/protocol
id: at4-protocol
sidebar_label: Protocol
title: Concox - AT4 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador Concox AT4 y su comunicación con Plaspy para seguimiento y eventos en tiempo real
keywords:
  - protocolo Concox AT4
  - protocolo GPS Concox AT4
  - protocolo de comunicación AT4
  - protocolo de rastreo AT4
  - compatibilidad Concox AT4 Plaspy
  - protocolo de rastreador Concox
  - rastreador GPS AT4
  - seguimiento de vehículos Concox AT4
  - seguimiento de activos AT4
  - compatibilidad de dispositivos Plaspy
---

# Concox - Protocolo AT4

Esta página ofrece una visión pública y de alto nivel del contexto de comunicación del Concox AT4 cuando se utiliza con Plaspy. Está dirigida a gerentes de flota, integradores y usuarios técnicos que necesiten comprender cómo el AT4 informa ubicación y eventos a Plaspy, sin exponer detalles privados de implementación.

El AT4 es compatible con Plaspy de fábrica; Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante, por lo que esta página se enfoca en orientaciones públicas e independientes de implementación para integración y resolución de problemas.

## Resumen del protocolo

El protocolo de reporte del AT4 define cómo el dispositivo se identifica ante un servidor, envía datos de ubicación y eventos, y almacena informes cuando la conectividad se interrumpe. Para los usuarios de Plaspy, la función principal del protocolo es entregar posiciones GNSS y derivadas de GSM, telemetría y notificaciones de eventos de manera que Plaspy pueda ingerirlas y presentarlas en tiempo real.

- Permite reportes de ubicación periódicos y notificaciones de eventos como manipulación, exceso de velocidad y alertas de movimiento.
- Transporta identidad y estado del dispositivo para que Plaspy asocie correctamente los reportes entrantes con el activo correspondiente.
- Incluye comportamiento de almacenamiento en búfer para que el dispositivo pueda subir los datos guardados cuando se restablezca la conectividad.
- Transmite telemetría que soporta funciones como monitoreo de audio remoto y eventos del acelerómetro cuando está permitido.
- Proporciona latidos o reportes periódicos que permiten a Plaspy vigilar la salud y la conectividad del equipo.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes en un único endpoint compartido y detecta automáticamente los protocolos de rastreadores compatibles cuando los dispositivos se conectan y comienzan a reportar. Cuando un AT4 está configurado para reportar al endpoint de Plaspy, por lo general no es necesario seleccionar manualmente un protocolo dentro de Plaspy.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto usado por Plaspy para reporte de dispositivos es 8888; todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía reportes reconocibles al endpoint de Plaspy.
- Si el AT4 está correctamente configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, la selección de protocolo dentro de Plaspy generalmente no es necesaria.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el AT4 llega a los servidores de Plaspy, lo cual es importante para reglas de firewall, configuración de la SIM y el aprovisionamiento inicial del dispositivo. El AT4 soporta los mecanismos celulares comunes de reporte y puede configurarse para usar cualquiera de los modos de transporte soportados.

- El dispositivo puede usar UDP o TCP en el puerto 8888 para conectarse a Plaspy, según la configuración y el firmware.
- Los dispositivos pueden configurarse para apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 para enviar reportes.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y utiliza el mismo puerto para todos los equipos soportados.
- Seleccione el modo de transporte compatible con el firmware del dispositivo y con su red y configuración de firewall.
- Las condiciones de la red y el comportamiento NAT del operador pueden afectar la conectividad; asegúrese de que la SIM permita tráfico saliente de datos y que el transporte elegido esté habilitado.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la cadencia de reportes, los tipos de evento disponibles y funciones opcionales como monitoreo de audio remoto o telemetría adicional de sensores.
- Las revisiones de hardware y los paquetes de firmware regionales pueden introducir diferencias en los comandos soportados y en los valores por defecto de comportamiento.
- La elección de transporte (UDP vs TCP) puede afectar las garantías de entrega y el comportamiento durante pérdidas de conectividad; seleccione el modo que mejor se ajuste a las capacidades del dispositivo y a sus necesidades operativas.
- Los modos de ahorro de energía y de reposo en el AT4 pueden alterar la frecuencia de reporte y la latencia en la entrega de eventos.
- Configuraciones aplicadas por el fabricante o firmware personalizado pueden cambiar la forma en que el dispositivo construye y envía reportes; valide cualquier modificación con la documentación del proveedor del dispositivo.
- Siempre pruebe los dispositivos en un piloto controlado antes de un despliegue amplio para confirmar que Plaspy recibe los reportes esperados.

## Por qué es importante conocer el protocolo

Tener un entendimiento claro y práctico del protocolo de comunicación del AT4 facilita la configuración exitosa, la operación confiable y la resolución de problemas más rápida al integrar dispositivos con Plaspy.

- Confirma que el dispositivo está apuntando al endpoint y transporte correctos de Plaspy para que los reportes lleguen a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a diagnosticar problemas de conectividad relacionados con la SIM, el APN o restricciones del operador frente a incompatibilidades de protocolo.
- Permite interpretar con mayor facilidad qué eventos y telemetría entregará el dispositivo a Plaspy según las capacidades del firmware.
- Apoya la planificación de vida útil de batería y de compromisos en la cadencia de reportes cuando se usan modos de ahorro de energía en dispositivos en largo reposo.
- Agiliza las pruebas piloto y los despliegues al clarificar las expectativas sobre subidas en búfer y la entrega de eventos tras cortes.

## Ventajas de usar Plaspy con este protocolo

Usar el Concox AT4 con Plaspy ofrece una solución práctica para organizaciones que necesitan seguimiento de activos a largo plazo y bajo mantenimiento, con alertas de manipulación y audio remoto opcional cuando está permitido. La alta capacidad de batería del AT4, su carcasa con clasificación IPX5 y su montaje magnético lo hacen adecuado para monitoreo de remolques y activos, mientras Plaspy recopila y presenta datos de ubicación, eventos y telemetría para uso operativo.

Para obtener más información sobre cómo Plaspy trabaja con dispositivos como el AT4, visite https://www.plaspy.com. Para detalles actuales del protocolo y del firmware del dispositivo, y para verificar el comportamiento específico del equipo, consulte al fabricante en https://www.iconcox.com/. El soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la documentación más reciente del fabricante.
