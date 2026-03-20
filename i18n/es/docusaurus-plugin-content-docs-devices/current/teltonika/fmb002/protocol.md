---
slug: /teltonika/fmb002/protocol
id: fmb002-protocol
sidebar_label: Protocol
title: Teltonika - FMB002 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Teltonika FMB002 con Plaspy para comunicación y compatibilidad
keywords:
  - protocolo Teltonika FMB002
  - rastreador GPS FMB002
  - compatibilidad Teltonika FMB002 Plaspy
  - protocolo de comunicación FMB002
  - seguimiento OBDII FMB002
  - sensores BLE FMB002
  - seguimiento vehicular FMB002
  - datos bus CAN FMB002
  - gestión de flotas FMB002
  - integración de rastreadores Plaspy
---

# Teltonika - Protocolo FMB002

Esta página describe el contexto público del protocolo para usar el Teltonika FMB002 con Plaspy. Aquí se explica cómo el rastreador se comunica con Plaspy, qué papel desempeña el protocolo de reporte del dispositivo en la entrega de posiciones y datos del vehículo, y las consideraciones prácticas al integrar un FMB002 con la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El FMB002 es un rastreador OBDII ultra compacto plug and play con GNSS, GSM, BLE 4.0 y capacidad de bus CAN; esas características determinan qué datos puede enviar un equipo configurado a Plaspy.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de reglas y flujos de mensajes que el FMB002 usa para enviar telemetría, posición y datos del bus del vehículo a un servidor remoto como Plaspy. Para un dispositivo plug and play OBDII como el FMB002, el protocolo permite entregar posiciones GNSS, diagnósticos del vehículo desde OBDII y CAN, lecturas de sensores BLE y notificaciones de eventos al backend de la flota.

- Permite la transmisión de actualizaciones de ubicación y marcas de tiempo desde GNSS al servidor
- Transporta datos del vehículo leídos desde OBDII y bus CAN para combustible, RPM y diagnóstico
- Envía datos de sensores y accesorios BLE cuando estos periféricos están en uso
- Comunica eventos generados por el dispositivo como encendido, desconexión, choque y remolque
- Proporciona un canal de comunicación estándar para que una plataforma como Plaspy interprete y almacene la telemetría

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y determina automáticamente el protocolo de reporte del rastreador para las conexiones entrantes. Cuando un FMB002 está configurado para reportar al endpoint de Plaspy, por lo general usted no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo apunte correctamente a la plataforma.

- Plaspy acepta conexiones en el dominio d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138 y Plaspy escucha en el puerto 8888 para reporte de dispositivos
- Los dispositivos pueden configurarse para usar UDP o TCP y Plaspy admite ambos transportes en el puerto común
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo del rastreador una vez que un dispositivo correctamente configurado se conecta

## Transporte y contexto de conexión

Los detalles de conexión son una parte importante de la integración exitosa. El FMB002 soporta transportes celulares comunes y puede configurarse para enviar datos por UDP o TCP según su configuración y las opciones de firmware.

- Los dispositivos FMB002 pueden configurarse usando UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntar al dominio Plaspy d.plaspy.com o a la dirección IP 54.85.159.138
- Usar el puerto compartido de Plaspy mantiene la configuración uniforme entre distintos rastreadores
- Elija el transporte que se ajuste a sus requerimientos de red y a las restricciones del operador
- Confirme la APN y los ajustes GPRS del dispositivo para asegurar conectividad fiable al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- La versión de firmware puede cambiar qué mensajes y funciones envía el rastreador a un servidor
- Las revisiones de hardware y los accesorios BLE opcionales pueden modificar la telemetría y el comportamiento disponibles
- Las opciones de configuración del fabricante, como modos de sueño e intervalos de reporte, afectan el flujo de datos
- La selección de transporte entre UDP y TCP puede influir en la confiabilidad y latencia de la entrega
- Valide la disponibilidad de datos OBDII y CAN para la marca y el modelo de su vehículo antes del despliegue
- Verifique siempre la configuración del dispositivo después de actualizaciones de firmware para preservar la conectividad con Plaspy
- Para casos límite consulte la documentación de Teltonika para confirmar el soporte de funcionalidades por firmware

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que los dispositivos estén configurados correctamente, facilita la resolución de problemas de conectividad y datos, y soporta una operación consistente a largo plazo en Plaspy. Saber cómo el rastreador reporta posición, eventos y datos del bus del vehículo influye directamente en las decisiones de configuración y la visibilidad operativa.

- Ayuda a verificar que los tipos de datos GNSS, OBDII, CAN y BLE se estén transmitiendo como se espera
- Facilita diagnosticar por qué un dispositivo puede no aparecer en Plaspy tras cambios de configuración
- Informa la elección de transporte e intervalos de reporte para despliegues sensibles a batería o alimentación
- Asiste en la planificación de actualizaciones de firmware y en la validación de ajustes retenidos después de upgrades
- Apoya a los administradores de flota en la interpretación de eventos como desconexión, choque o detección de inmovilidad

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB002 con Plaspy ofrece a las organizaciones una forma de centralizar la ubicación del vehículo, diagnósticos OBDII y datos de sensores BLE en una sola plataforma para monitoreo e informes. La forma plug and play OBDII del FMB002, combinada con la detección automática de protocolos y el manejo unificado de puertos de Plaspy, disminuye la carga administrativa durante el despliegue y ayuda a mantener conectividad consistente en una flota mixta de dispositivos.

Para conocer más sobre Plaspy y cómo maneja las integraciones de dispositivos visite https://www.plaspy.com. Verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las indicaciones del fabricante en el sitio oficial de Teltonika https://www.teltonika-gps.com/ ya que los detalles de implementación pueden cambiar con el tiempo.
