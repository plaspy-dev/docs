---
slug: /teltonika/fmb204/protocol
id: fmb204-protocol
sidebar_label: Protocol
title: Teltonika - FMB204 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para Teltonika FMB204 con Plaspy, incluye ajustes de conexión y pautas de compatibilidad
keywords:
  - Protocolo Teltonika FMB204
  - GPS Teltonika FMB204
  - Compatibilidad FMB204 Plaspy
  - Protocolo de rastreador Teltonika
  - Comunicación de rastreador GPS
  - Integración de dispositivos Plaspy
  - Rastreador para gestión de flotas
  - Rastreo de activos FMB204
  - Sensores BLE FMB204
  - Conectividad Teltonika FMB204
---

# Teltonika - Protocolo FMB204

Esta página ofrece un resumen del contexto público del protocolo para utilizar el Teltonika FMB204 con Plaspy. Se centra en cómo el dispositivo comunica posición en tiempo real y telemetría con Plaspy sin exponer detalles privados de parsing. El FMB204 es un rastreador GPS 2G compacto, resistente al agua, con batería de respaldo interna y soporte Bluetooth Low Energy para sensores externos; aquí se abordan los aspectos de comunicación relevantes para la integración y la resolución de problemas.

Plaspy usa parámetros de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado a la plataforma. Para el FMB204 puede configurar el reporte hacia el endpoint de Plaspy en d.plaspy.com o 54.85.159.138. El puerto es 8888 y el dispositivo puede usar UDP o TCP en ese puerto. Todos los dispositivos en Plaspy emplean el mismo puerto, y el comportamiento del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo de reporte define cómo el FMB204 transmite identificación, posición GPS, estado y telemetría de sensores a un servidor remoto como Plaspy. A alto nivel, el protocolo asegura que los datos de la unidad se puedan asociar con un registro de dispositivo en Plaspy y que los valores de posición y sensores se entreguen de manera fiable para mapeo, alertas y almacenamiento.

- Proporciona identificación del dispositivo y telemetría con sello de tiempo para que Plaspy pueda correlacionar los reportes con el activo correcto.
- Transporta la posición GPS y, opcionalmente, datos de sensores BLE para temperatura, humedad, magnetismo y eventos de movimiento.
- Permite reportes periódicos y por eventos para que Plaspy muestre posición en vivo y recorridos históricos.
- Soporta conexión sobre canales de transporte estándar para que el dispositivo alcance el endpoint de Plaspy en diferentes condiciones de red.
- Permite configuración remota y actualizaciones de firmware mediante herramientas del fabricante sin interrumpir la entrega de telemetría a Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador que está reportando. Cuando el FMB204 se apunta al servidor de Plaspy, la plataforma usa la metadata de conexión entrante y patrones de carga útil para asociar el tráfico con el dispositivo correcto y procesar la telemetría dentro del flujo de trabajo de Plaspy.

- Apunte el dispositivo a d.plaspy.com o 54.85.159.138 y use el puerto 8888 para el reporte.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la preferencia del instalador y la capacidad del equipo.
- La identificación correcta del dispositivo y la accesibilidad en red son los requisitos principales para la detección automática.
- Si un dispositivo no aparece en Plaspy, verifique la configuración de red, el APN y los perfiles de configuración del fabricante.

## Transporte y contexto de conexión

La elección del transporte afecta cómo el FMB204 abre y mantiene el enlace con Plaspy, pero no altera el rol público del protocolo en sí. El rastreador soporta enlace celular 2G para telemetría y BLE para sensores locales, mientras que el endpoint y puerto del servidor definen dónde se entrega la telemetría.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la dirección numérica 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para la entrega de telemetría.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; elija el transporte que mejor se adapte a su red y requisitos de fiabilidad.
- Factores a nivel de red como el APN, la calidad de la señal y las restricciones del operador influyen en la entrega de reportes.
- Asegúrese de que reglas de firewall y NAT permitan conexiones salientes desde el dispositivo hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los campos exactos de telemetría y el comportamiento temporal; siempre consulte las notas de la versión de firmware para identificar cambios que afecten el reporte.
- Las revisiones de hardware y las variantes regionales pueden alterar las bandas soportadas, la disponibilidad de sensores o las interfaces de accesorios.
- Las herramientas de gestión remota del fabricante, como Teltonika configurator y FOTA WEB, pueden modificar ajustes del dispositivo que impacten el comportamiento del protocolo.
- La selección de transporte entre UDP y TCP puede influir en la latencia y las garantías de entrega de la telemetría; elija según las necesidades del despliegue.
- Confirme que los identificadores del dispositivo y el reporte de IMEI sean correctos para que Plaspy pueda asociar las conexiones entrantes con el activo adecuado.
- Valide cualquier accesorio personalizado o de terceros para comprobar su compatibilidad con los casos de uso de telemetría esperados.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a instaladores y administradores a asegurar un flujo de datos fiable hacia Plaspy, agilizar la resolución de problemas y planificar el mantenimiento y las actualizaciones de firmware a largo plazo. Tener claro el contexto del protocolo reduce el tiempo de integración y mejora la consistencia operativa.

- Ayuda a diagnosticar problemas de conectividad como endpoint incorrecto, problemas de APN o puertos bloqueados.
- Aclara cómo los datos de sensores BLE se transportan junto con la telemetría GPS y de estado.
- Orienta la decisión entre UDP y TCP según la fiabilidad de la red y las consideraciones de consumo de energía.
- Guía las prácticas de gestión de firmware y configuración para que Plaspy reciba datos consistentes.
- Facilita el registro correcto del dispositivo y el mapeo de activos en Plaspy para reportes y alertas precisas.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB204 con Plaspy ofrece una solución práctica para el rastreo de remolques, motocicletas y activos remotos donde se requiere hardware robusto e integración con sensores BLE. La carcasa IP67 del FMB204, su amplia batería de respaldo y sus capacidades BLE amplían la telemetría más allá de la posición para incluir señales ambientales y de presencia que mejoran los flujos de trabajo de antirrobo y monitorización de flotas.

Para obtener más información sobre la integración de dispositivos y funcionalidades con Plaspy visite https://www.plaspy.com. Para detalles de firmware más recientes, especificaciones del dispositivo e instrucciones del fabricante verifique las notas específicas de protocolo e implementación en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
