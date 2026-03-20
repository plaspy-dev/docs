---
slug: /teltonika/fmu125/protocol
id: fmu125-protocol
sidebar_label: Protocol
title: Teltonika - FMU125 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para usar el Teltonika FMU125 con Plaspy en rastreo e integración
keywords:
  - protocolo Teltonika FMU125
  - Teltonika FMU125 GPS
  - compatibilidad FMU125 Plaspy
  - protocolo de comunicación FMU125
  - protocolo de rastreador Teltonika
  - integración de rastreador GPS Plaspy
  - rastreo vehicular FMU125
  - gestión de flotas Teltonika FMU125
  - interfaz FMU125 RS232 RS485
  - telemetría y sensores FMU125
---

# Teltonika - Protocolo FMU125

Esta página ofrece contexto público sobre el protocolo utilizado por el rastreador Teltonika FMU125 con Plaspy. Resume cómo el dispositivo suele comunicarse con una plataforma de seguimiento de terceros, qué papel tiene el protocolo del rastreador en el intercambio de datos y qué ajustes de conexión en Plaspy son relevantes para el reporte estándar del equipo. El contenido está pensado como guía general de integración y solución de problemas, y evita detalles internos o sensibles del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento observado en campo puede diferir si el FMU125 recibe actualizaciones o cambios de configuración.

## Resumen del protocolo

El protocolo de reporte del FMU125 define cómo el rastreador envía posición GNSS, estado de conectividad celular, eventos del acelerómetro y datos opcionales de sensores externos a un servidor remoto. En la práctica, el protocolo actúa como el canal estructurado que convierte lecturas crudas de sensores y telemetría en registros útiles para una plataforma de flotas como Plaspy.

- Permite que el FMU125 entregue posición GNSS y datos de movimiento a Plaspy para monitoreo en tiempo real
- Transporta indicadores de acelerómetro y eventos como choque, remolque y desconexión
- Lleva datos pasantes desde accesorios de terceros mediante las interfaces RS232 y RS485 cuando están en uso
- Incluye identificación del dispositivo e información de estado para que Plaspy reconozca el equipo remitente
- Permite la configuración remota y disparadores de actualización de firmware cuando el fabricante y el dispositivo lo soportan

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo de reporte cuando llegan datos desde un rastreador configurado correctamente. Esto significa que la mayoría de los usuarios no necesita seleccionar un protocolo manualmente en la plataforma si el FMU125 está apuntando al endpoint de Plaspy y utiliza un transporte permitido.

- Plaspy proporciona un endpoint único para simplificar la configuración del reporte de dispositivos
- La plataforma escucha en el mismo puerto para todos los dispositivos soportados, de modo que los propietarios no gestionan múltiples puertos
- Cuando el FMU125 está configurado para reportar al endpoint de Plaspy, la plataforma intentará identificar automáticamente el protocolo del dispositivo
- La identificación correcta requiere que el rastreador envíe los campos estándar de telemetría e identificación del dispositivo según lo provea el fabricante
- Seleccionar el protocolo manualmente en Plaspy rara vez es necesario si el rastreador está configurado para reportar correctamente al servidor de Plaspy

## Transporte y contexto de conexión

El FMU125 puede configurarse para reportar mediante métodos de transporte comunes según la configuración del dispositivo y las condiciones de la red. Para la compatibilidad con Plaspy, el siguiente contexto de conexión es importante entenderlo y aplicarlo al configurar el rastreador.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138
- La plataforma escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar
- El FMU125 puede configurarse para usar UDP o TCP para conectarse a Plaspy en el puerto 8888 según la configuración del equipo y los requisitos de red
- Seleccione el modo de transporte compatible con su operador de SIM y coherente con la política de su flota
- Asegúrese de que el APN, el plan de datos y la configuración del dispositivo permitan que el FMU125 alcance el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden afectar qué campos de telemetría y eventos reporta el FMU125 y cómo se codifican
- Revisión de hardware o variaciones de producción del mismo modelo pueden mostrar pequeñas diferencias en interfaces soportadas o ajustes por defecto
- La elección de transporte entre UDP y TCP puede alterar características como la entrega y la retransmisión
- Los sensores externos conectados por RS232 o RS485 dependen de una configuración de passthrough correcta para aparecer en la telemetría de la plataforma
- Al integrar, valide los campos reportados con una prueba en vivo corta para confirmar que el dispositivo y el servidor intercambian los mensajes esperados
- Consulte las herramientas de configuración y las notas de versión de Teltonika al planear actualizaciones de firmware o cambios de comportamiento
- Confirme siempre cualquier capacidad crítica con la documentación del fabricante para la revisión específica de firmware y hardware

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del FMU125 acelera la configuración, reduce la prueba y error y facilita la resolución de problemas cuando los dispositivos no reportan como se espera a Plaspy. Saber qué envía el rastreador y cómo se conecta a Plaspy mejora la confiabilidad y la visibilidad operativa.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y utiliza el transporte soportado
- Contribuye a distinguir problemas de conectividad de problemas de configuración o firmware
- Mejora la interpretación de la telemetría entrante como fixes GNSS, eventos del acelerómetro y valores de sensores externos
- Apoya la planificación de actualizaciones de firmware y la realización de pruebas para evitar cambios inesperados en la salida del dispositivo
- Facilita la coordinación con el soporte de Teltonika y la aplicación de configuraciones correctas mediante sus herramientas

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMU125 con Plaspy ofrece una vía sencilla para capturar ubicación GNSS, eventos de movimiento y datos de sensores externos para monitoreo de flotas y activos. El enfoque de endpoint único de Plaspy y la detección automática de protocolos reducen gran parte de la configuración manual habitualmente asociada a la integración de modelos diversos de rastreadores, permitiendo que los equipos se concentren en flujos operativos en lugar de en la mecánica de la conexión.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el FMU125 visite https://www.plaspy.com. Para obtener los detalles más actuales específicos del dispositivo, notas de firmware y herramientas de configuración consulte al fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden evolucionar con el tiempo.
