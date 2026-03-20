---
slug: /teltonika/fmb010/protocol
id: fmb010-protocol
sidebar_label: Protocol
title: Teltonika - FMB010 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el Teltonika FMB010 con Plaspy y habilitar seguimiento y telemetría en tiempo real
keywords:
  - protocolo Teltonika FMB010
  - protocolo GPS Teltonika FMB010
  - Teltonika FMB010 Plaspy
  - comunicación rastreador GPS
  - protocolo seguimiento vehicular
  - compatibilidad Plaspy
  - rastreador OBD II
  - telemetría sensores BLE
  - detección de choques rastreador
  - integración seguimiento de flotas
---

# Teltonika - Protocolo FMB010

Esta página ofrece un panorama público del protocolo para usar el Teltonika FMB010 con Plaspy. Describe, en términos generales, cómo comunica el dispositivo, qué función cumple el protocolo de reporte para entregar telemetría a Plaspy y qué ajustes de conexión son relevantes para la integración. El objetivo es proporcionar a equipos de flota y técnicos el contexto necesario para configurar y verificar el reporte sin exponer detalles privados de implementación.

El FMB010 es un rastreador compacto en formato OBD II con soporte para sensores BLE, batería interna de respaldo y detección de choques basada en acelerómetro. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles pueden diferir entre unidades y versiones de firmware.

## Visión general del protocolo

El protocolo del rastreador es el método que utiliza el dispositivo para empaquetar y enviar telemetría a un servidor remoto para que Plaspy pueda procesarla. Para el FMB010 esto incluye ubicación, telemetría OBD II del vehículo, eventos del acelerómetro y lecturas opcionales de sensores BLE. El protocolo permite que el dispositivo se identifique ante el servidor y entregue eventos y mediciones con marca de tiempo que Plaspy usa para seguimiento en tiempo real, alertas e informes históricos.

- Permite la transmisión de posición GPS y telemetría básica del vehículo hacia Plaspy
- Transporta eventos del acelerómetro como alertas de choque y trazas de movimiento
- Entrega mediciones de sensores BLE para temperatura, humedad, magnetismo y movimiento
- Transmite métricas derivadas del OBD II para conducción eficiente y monitoreo del motor cuando están disponibles
- Proporciona información de identificación y sesión para que Plaspy asocie los datos con el activo correcto

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint y puerto compartidos para los reportes entrantes de rastreadores y aplica detección automática para determinar el protocolo del dispositivo. Cuando un FMB010 apunta al endpoint de Plaspy y envía datos, la plataforma asigna la secuencia entrante al parser y al registro de dispositivo apropiados sin que normalmente sea necesario seleccionar el protocolo manualmente.

- El dominio del servidor de Plaspy para reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor de Plaspy es 54.85.159.138
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador
- Por lo general, los usuarios no necesitan escoger un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy
- La identificación correcta del dispositivo y el reporte hacia el host de Plaspy son los pasos principales para una detección automática exitosa

## Transporte y contexto de conexión

El FMB010 puede configurarse para usar transporte UDP o TCP según el soporte del dispositivo y la preferencia del instalador. Al integrar con Plaspy, dirija el dispositivo al endpoint de Plaspy usando las configuraciones de conexión compartidas para que los datos lleguen a la plataforma de forma consistente.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o a la dirección IP 54.85.159.138
- Plaspy usa el mismo puerto 8888 para todos los dispositivos para simplificar la configuración y las reglas de red
- Elija UDP para reportes más livianos o TCP cuando se prefiera fiabilidad de sesión, según las capacidades del dispositivo y el entorno de red
- Asegúrese de que cualquier firewall o regla NAT permita conexiones salientes al endpoint de Plaspy en el puerto 8888

## Notas de compatibilidad del protocolo

- La compatibilidad del FMB010 con Plaspy se basa en que el dispositivo envíe tipos de telemetría estándar que la plataforma reconoce
- Las versiones de firmware pueden cambiar cómo se reportan ciertos eventos o campos de telemetría; valide el comportamiento tras actualizaciones de firmware
- Las revisiones de hardware o variantes regionales pueden modificar ligeramente la telemetría disponible o los transportes soportados
- La selección de transporte entre UDP y TCP es una decisión de configuración que afecta la semántica de entrega y los requisitos de red
- Los sensores BLE y la batería de respaldo ofrecen telemetría adicional, pero pueden requerir pasos de configuración separados en el dispositivo
- Confirme siempre cualquier configuración personalizada o ajustes específicos del proveedor con la documentación oficial del fabricante

## Por qué es importante entender el protocolo

Conocer cómo se comunica el rastreador ayuda a instaladores y administradores a asegurar reportes confiables, solucionar problemas de conectividad y alinear la configuración del dispositivo con las expectativas de Plaspy. Un contexto claro del protocolo reduce tiempos de despliegue y disminuye la ambigüedad al tratar temas de sincronización de eventos, datos faltantes o diferencias de firmware.

- Ayuda a confirmar que el dispositivo está enviando los tipos de telemetría esperados a Plaspy
- Facilita el diagnóstico de problemas de conectividad relacionados con transporte, DNS o firewalls
- Apoya la planificación de actualizaciones de firmware que pueden cambiar campos o comportamiento de eventos
- Orienta en la elección entre UDP y TCP según prioridades operativas y limitaciones de red
- Permite una mejor interpretación de alertas como eventos de choque o lecturas de sensores BLE

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB010 con Plaspy ofrece a las flotas una vía rápida para obtener ubicación en tiempo real, telemetría básica del vehículo y alertas de eventos sin configuraciones complejas por dispositivo. La forma OBD II del FMB010, su batería interna de respaldo, soporte para sensores BLE y datos de acelerómetro se combinan para ofrecer un conjunto conciso de telemetría que Plaspy muestra en paneles, alertas e informes para monitoreo operativo y respuesta a incidentes.

Para más información sobre Plaspy y cómo funciona este rastreador con la plataforma visite https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que conviene verificar la información específica del dispositivo y las notas de firmware más recientes en el sitio del fabricante https://www.teltonika-gps.com/ antes de tomar decisiones de despliegue.
