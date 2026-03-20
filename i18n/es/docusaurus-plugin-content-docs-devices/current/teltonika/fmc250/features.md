---
slug: /teltonika/fmc250/features
id: fmc250-features
sidebar_label: Features
title: Teltonika - FMC250 Features
sidebar_class_name: menu_item_tracker
description: Resumen de características del FMC250 para compatibilidad con Plaspy incluyendo telemetría CAN conectividad LTE Cat 1 y protección IP67
keywords:
  - Teltonika FMC250
  - FMC250 características
  - Teltonika FMC250 rastreador GPS
  - FMC250 bus CAN
  - FMC250 LTE Cat 1
  - FMC250 IP67
  - FMC250 accesorios Bluetooth
  - FMC250 iButton RFID
  - FMC250 seguimiento de flotas
  - rastreador compatible con Plaspy
---

# Teltonika - FMC250: Características

Esta página resume la información pública sobre las características del Teltonika FMC250 y cómo se reflejan cuando el dispositivo se integra con Plaspy. Se centra en datos prácticos y no sensibles sobre el hardware del FMC250, los canales de telemetría, el soporte de accesorios y los tipos de datos que Plaspy puede consumir para visibilidad de flota y flujos operativos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la SKU, el tipo de instalación y la implementación del fabricante. Antes de desplegar, confirme la variante específica del FMC250 y el conjunto de funciones del firmware para su instalación y revise la documentación oficial de Teltonika para obtener los detalles más recientes del producto.

## Resumen de características

El FMC250 es un rastreador telemático para vehículos diseñado para combinar un seguimiento GNSS confiable, conectividad celular y telemetría a nivel de vehículo en una sola unidad. Está dirigido a usos comerciales en flotas donde se requiere durabilidad ambiental y un conocimiento profundo del vehículo.

- Seguimiento de posición GNSS en tiempo real combinado con telemetría continua para visibilidad de la flota.  
- Conectividad celular LTE Cat 1 con respaldo 2G para mantener el reporte en áreas con cobertura mixta.  
- Procesador de datos de bus CAN integrado con soporte para más de 100 parámetros de vehículo para diagnóstico y análisis.  
- Carcasa resistente IP67 adecuada para instalaciones a bordo en entornos exigentes.  
- Compatibilidad con accesorios Bluetooth e iButton o RFID 1-Wire para identificación de conductores y activos.

## Funciones principales del Teltonika - FMC250

- Reporte de ubicación GNSS apto para telemática vehicular y visibilidad de rutas.  
- Módem celular LTE Cat 1 con conmutación a redes 2G para transmisión de datos más resiliente.  
- Procesamiento de datos CAN integrado capaz de leer y reenviar más de 100 parámetros CAN para telemetría de motor y sensores del vehículo.  
- Carcasa con clasificación IP67 para protección contra polvo y agua en aplicaciones exteriores y vehiculares.  
- Compatibilidad con accesorios Bluetooth como balizas y sensores para ampliar la detección y la presencia.  
- Soporte para iButton y RFID 1-Wire para flujos de trabajo de identificación de conductores o activos.  
- Varias SKUs y opciones de paquete, incluyendo paquetes de parámetros CAN Estándar y Ampliado para ajustarse a los requisitos de reporte.

## Cómo funcionan estas características con Plaspy

Plaspy ingiere la ubicación y la telemetría derivada del CAN del FMC250 para ofrecer una vista combinada de posición y métricas del vehículo. Los datos del FMC250 se normalizan en paneles, reportes y alertas para que los operadores puedan correlacionar ubicación con estado y patrones de uso del vehículo.

- Plaspy recibe actualizaciones de ubicación GNSS y muestra la posición en tiempo real en mapas e historiales de ruta.  
- Los parámetros CAN se procesan en campos de telemetría legibles para diagnóstico, analítica relacionada con combustible y planificación de mantenimiento.  
- Los eventos de accesorios Bluetooth e iButton se presentan en Plaspy para identificación de conductores y seguimiento de presencia de activos.  
- Las señales de telemetría y fallas pueden usarse para generar disparadores de mantenimiento, alertas y reportes en Plaspy.  
- Plaspy detecta automáticamente el protocolo del rastreador y normaliza los datos entrantes para que los dispositivos puedan agregarse sin seleccionar manualmente el protocolo.

## Casos de uso típicos

- Seguimiento de flotas comerciales donde la combinación de ubicación y datos de motor respalda el cumplimiento de rutas y el análisis de utilización.  
- Programas de mantenimiento preventivo que utilizan métricas derivadas del CAN para programar servicio antes de que ocurran fallas.  
- Monitoreo de vehículos pesados y de servicios públicos donde se requiere protección IP67 y conectividad celular robusta.  
- Flujos de identificación de conductores y activos mediante iButton o RFID junto con sensores de proximidad Bluetooth.  
- Monitoreo de combustible y análisis de rendimiento derivados de parámetros CAN para control de costos y reportes.  
- Prevención de robo y flujos de inmovilización o anti robo implementados vía CAN o integraciones con el cableado del vehículo según el alcance de la instalación.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden diferir entre las distintas SKUs del FMC250 y entre los paquetes de parámetros CAN Estándar y Ampliado.  
- La versión de firmware y la configuración del fabricante afectan qué parámetros CAN e integraciones de accesorios están disponibles.  
- La instalación física y el cableado del vehículo pueden cambiar qué canales de telemetría y flujos de inmovilización son posibles.  
- El soporte de accesorios Bluetooth y RFID depende de las opciones de SKU y la configuración de accesorios en el despliegue.  
- Las bandas celulares regionales y variantes regulatorias pueden influir en el comportamiento de conectividad y deben verificarse para su mercado.

## Por qué usar Plaspy con estas funciones

Usar el FMC250 con Plaspy ofrece una ruta práctica para combinar ubicación precisa con telemetría a nivel de vehículo en una sola vista operativa. Plaspy transforma los parámetros CAN y los eventos de accesorios en paneles, alertas y flujos de mantenimiento útiles para gerentes de flota, planificadores de servicio y equipos de operaciones que necesitan tanto conciencia situacional como información sobre la salud del vehículo.

Para saber más sobre Plaspy y cómo funciona con rastreadores vehiculares como el FMC250 visite https://www.plaspy.com. Para obtener los detalles técnicos específicos más recientes, notas de firmware y documentación oficial, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/.
