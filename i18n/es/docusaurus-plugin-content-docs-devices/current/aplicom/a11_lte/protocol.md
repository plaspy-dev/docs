---
slug: /aplicom/a11_lte/protocol
id: a11_lte-protocol
sidebar_label: Protocol
title: Aplicom - A11 LTE Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo para conectar rastreadores Aplicom A11 LTE a Plaspy mediante el endpoint compartido
keywords:
  - Aplicom A11 LTE
  - protocolo Aplicom A11 LTE
  - rastreador GPS Aplicom A11 LTE
  - Aplicom A11 LTE Plaspy
  - protocolo GPS Aplicom
  - protocolo de comunicación A11 LTE
  - protocolo de seguimiento de flotas
  - protocolo de dispositivo telemático
  - integración Bluetooth LE del rastreador
  - conectividad de dispositivo Plaspy
---

# Aplicom - Protocolo A11 LTE

Esta página ofrece una visión pública del contexto de comunicación para usar la unidad telemática Aplicom A11 LTE con Plaspy. Se enfoca en cómo el dispositivo informa la ubicación y datos de sensores a Plaspy, el papel del protocolo en ese intercambio y las configuraciones de conexión prácticas que normalmente importan al integrar el A11 LTE en una solución de gestión de flotas.

El Aplicom A11 LTE combina conectividad móvil global, soporte Bluetooth LE para beacons y sensores, y actualizaciones Over The Air para configuración. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante. Para detalles específicos del dispositivo y la guía de firmware más reciente, consulte la documentación del fabricante.

## Resumen del protocolo

El protocolo que usa el A11 LTE regula cómo el dispositivo se identifica, envía datos de posición y sensores, y recibe configuraciones o comandos de actualización. Para integraciones como Plaspy, el protocolo actúa como puente que transforma las señales crudas del equipo en telemetría y eventos operativos utilizables.

- Permite que el rastreador informe posición GPS, hora y estado de movimiento para que Plaspy muestre ubicación y el historial.
- Transporta telemetría más allá del GPS, como presencia de etiquetas Bluetooth, lecturas de sensores y estados básicos de E/S reportados por el dispositivo.
- Proporciona información de identidad y sesión que permite a Plaspy asociar mensajes entrantes con un registro específico del dispositivo.
- Soporta flujos de comando y configuración, como activadores de actualizaciones OTA y actualizaciones remotas de parámetros cuando el dispositivo lo implementa.
- Permite que Plaspy interprete los mensajes entrantes en puntos de datos estándar de flota sin que los usuarios deban ensamblar paquetes manualmente.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint y puerto compartidos e incluye detección automática de protocolos para simplificar la configuración. Cuando un A11 LTE se configura para reportar a Plaspy, la plataforma identifica qué protocolo soportado está usando el tráfico entrante y envía los datos al canal de análisis y almacenamiento correcto.

- Plaspy recibe conexiones en el dominio d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y las condiciones de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la necesidad de gestionar múltiples puertos de entrada para distintos modelos de rastreadores.
- Cuando un A11 LTE apunta al endpoint de Plaspy y comienza a reportar, Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere seleccionar el protocolo manualmente dentro de Plaspy.
- La configuración correcta del dispositivo para enviar reportes al endpoint de Plaspy es el requisito principal para que la detección automática funcione.

## Transporte y contexto de conexión

Las opciones de conexión, como UDP o TCP, y el endpoint al que apunta el dispositivo determinan cómo el A11 LTE llega a Plaspy. Estos detalles de transporte son distintos al contenido del protocolo, pero son fundamentales durante el despliegue inicial y la resolución de problemas.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, según soporte y configuración del equipo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, manteniendo un puerto de entrada consistente entre modelos.
- Elementos de red como firewalls, NAT y el enrutamiento del operador móvil pueden afectar si UDP o TCP funciona mejor en una implementación determinada.
- Confirme que el APN y la conectividad móvil del dispositivo permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 para asegurar reportes fiables.

## Notas sobre compatibilidad del protocolo

- Diferencias de firmware entre versiones del A11 LTE pueden cambiar qué elementos de telemetría se reportan o cómo se formatean campos opcionales.
- Revisiones de hardware y accesorios opcionales, como sensores externos o beacons Bluetooth, pueden introducir elementos de datos adicionales que la plataforma debería esperar.
- Configuraciones del lado del fabricante y los intervalos de reporte configurables pueden alterar la frecuencia y el tamaño de los mensajes que envía el dispositivo.
- La elección entre UDP y TCP en el dispositivo afecta las características de entrega pero no las semánticas principales de los datos reportados.
- Valide los ajustes de transporte y reporte configurando el dispositivo para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y confirmando que los datos aparecen en Plaspy.
- Siempre compare el comportamiento observado del dispositivo con la documentación oficial de Aplicom antes de tomar decisiones de despliegue.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del A11 LTE ayuda a asegurar una integración fluida con Plaspy, acelera la resolución de incidencias y respalda operaciones confiables a largo plazo. Tener expectativas claras sobre qué datos enviará el rastreador y cómo se conecta reduce el tiempo dedicado a diagnosticar problemas de conectividad o mapeo de datos.

- Ayuda a verificar que el dispositivo está enviando la telemetría correcta y que Plaspy recibe los campos esperados, como ubicación y estados de sensores.
- Agiliza la resolución de problemas al acotar si un problema es de red, de transporte o de comportamiento del firmware.
- Orienta decisiones sobre intervalos de reporte, gestión de energía y sondeo de sensores Bluetooth para equilibrar la vida de batería y la visibilidad.
- Facilita la planificación de actualizaciones OTA y configuración remota al entender cómo se entregan y confirman los cambios de configuración.
- Reduce el riesgo de integración al alinear las expectativas de gestión de flotas con lo que el dispositivo realmente reporta.

## Por qué usar Plaspy con este protocolo

Usar el Aplicom A11 LTE con Plaspy ofrece un camino práctico para obtener visibilidad de flotas y activos en áreas geográficas extensas gracias a la conectividad global del A11 LTE y la canalización unificada de ingestión de Plaspy. El enfoque combinado permite a las organizaciones capturar posición GPS, presencia de etiquetas Bluetooth y otra telemetría en una plataforma consolidada para monitoreo e informes.

La detección automática de protocolos de Plaspy y su diseño de puerto único simplifican la incorporación de dispositivos. Apunte un A11 LTE a d.plaspy.com o 54.85.159.138 en el puerto 8888 con el transporte elegido (UDP o TCP), y Plaspy se encargará de la detección y el procesamiento de datos, permitiendo que los equipos se concentren en el uso operativo en lugar de en la infraestructura del protocolo. To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance consult the manufacturer at https://www.aplicom.com/ since protocol support and firmware behavior can change over time.
