---
slug: /tk_star/tk910_4g/features
id: tk910_4g-features
sidebar_label: Features
title: TK-Star - TK910 4G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador TK-Star TK910 4G y cómo sus capacidades de rastreo, antirrobo y conectividad se integran con Plaspy
keywords:
  - TK Star TK910 4G características
  - TK Star TK910 4G rastreador GPS
  - compatibilidad TK910 4G Plaspy
  - rastreador GPS para vehículos
  - rastreador GPS para motocicletas
  - rastreador GPS 4G
  - rastreador NB IoT Cat M1
  - alertas de geocerca
  - corte remoto de motor
  - reproducción de rutas históricas
---

# TK-Star - Funciones del TK910 4G

Esta página ofrece un resumen público de las funciones del rastreador GPS TK-Star TK910 4G y cómo sus capacidades se aprovechan en Plaspy para rastreo, alertas y reproducción histórica. Se centra en los aspectos prácticos y no sensibles del equipo que resultan relevantes para despliegues con Plaspy y la supervisión de flotas.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el modelo regional, el método de instalación y la implementación del fabricante. Para detalles específicos y variantes compatibles vigentes, consulte la documentación oficial de TK-Star mencionada al final de esta página.

## Resumen de funciones

El TK910 4G es un rastreador compacto pensado para motocicletas, autos particulares, flotas de alquiler y equipos livianos. Combina GNSS multiconstelación con posicionamiento asistido por red y varias opciones celulares para ofrecer ubicación en tiempo real y telemetría de eventos que Plaspy puede recibir y mostrar.

- Seguimiento continuo en tiempo real con GNSS y posicionamiento asistido por LBS y Wi Fi para mejorar cobertura en interiores y entornos urbanos.
- Alertas de seguridad y antirrobo, incluyendo detección de vibración, notificaciones de movimiento y exceso de velocidad, y corte remoto de motor para inmovilización.
- Conectividad celular amplia en 4G LTE con retroceso a WCDMA y GSM, además de soporte para NB IoT y Cat M1 según región.
- Batería interna de respaldo para mantener telemetría crítica y reporte de la última ubicación conocida tras pérdida de alimentación del vehículo.
- Reproducción histórica de rutas y retención de historial de eventos del lado servidor, adecuada para auditorías e informes de flota.

## Características principales del TK-Star - TK910 4G

- Soporte GNSS multiconstelación, incluyendo GPS, GLONASS y BeiDou para posicionamiento satelital robusto.
- Posicionamiento asistido mediante LBS y Wi Fi para mejorar la geolocalización en interiores y zonas urbanas densas.
- Transmisión de ubicación en tiempo real y telemetría de eventos apta para supervisión en vivo en Plaspy.
- Alertas de geocerca y notificaciones por exceso de velocidad o movimiento para flujos de trabajo de monitoreo automatizados.
- Detección de vibraciones para indicar posibles intentos de manipulación o robo.
- Control de corte remoto del motor para inmovilización mediante control del suministro de aceite según lo reportado por el fabricante.
- Opciones de conectividad amplias con 4G LTE y fallback a WCDMA y GSM, además de NB IoT y Cat M1 donde estén disponibles.
- Batería interna de respaldo que preserva el reporte crítico durante un periodo limitado después de la pérdida de alimentación principal.

## Cómo funcionan estas funciones con Plaspy

Cuando el TK910 4G se conecta a Plaspy, los datos de ubicación y eventos fluyen hacia la plataforma para visualización, alertas y análisis histórico. Plaspy detecta automáticamente protocolos comunes de rastreadores y presenta la telemetría entrante para uso operativo e informes.

- Ubicación y actualizaciones de posición en vivo en Plaspy usando GNSS y, cuando esté disponible, LBS y Wi Fi asistido para mayor continuidad en interiores.
- Alertas por ruptura de geocerca, exceso de velocidad y vibración entregadas a Plaspy para notificaciones inmediatas y acciones por parte del operador.
- Acciones de inmovilizador remoto reportadas a través de Plaspy para que los operadores puedan ver eventos de inmovilización y comandos de reanudación cuando la configuración de despliegue lo permita.
- Reproducción histórica de rutas y líneas de tiempo de eventos disponibles en las interfaces web y móvil para auditorías y revisión de incidentes con retención del lado servidor.
- Plaspy puede correlacionar la telemetría del rastreador con otras fuentes de datos disponibles en un despliegue para enriquecer el contexto operativo cuando existan entradas externas.

## Casos de uso típicos

- Monitoreo antirrobo de motocicletas y scooters usando detección de vibraciones y corte remoto de motor para reducir el riesgo de hurto.
- Rastreo de vehículos de alquiler con alertas de geocerca y exceso de velocidad para hacer cumplir los términos de alquiler y proteger activos.
- Gestión de flota de autos corporativos y camionetas ligeras para despacho, supervisión de rutas e informes de cumplimiento.
- Rastreo de equipos livianos y vehículos pequeños donde el formato compacto y el amplio rango de voltaje son ventajas.
- Investigación de incidentes y conciliación de facturación usando rutas históricas y registros de eventos almacenados en servidor.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware del fabricante y las revisiones de hardware pueden modificar la existencia o el comportamiento de funciones específicas como posicionamiento asistido, umbrales de alerta y soporte de inmovilizador.
- Las variantes regionales del dispositivo pueden diferir en la cobertura de bandas celulares y en la disponibilidad de NB IoT o Cat M1.
- El método de instalación y el cableado determinan qué funciones están disponibles en una unidad concreta para inmovilización y monitoreo de alimentación persistente.
- Plaspy detecta automáticamente muchos protocolos comunes de rastreadores y acepta telemetría de dispositivos configurados para enviar datos a la infraestructura de Plaspy como d.plaspy.com usando TCP o UDP en el puerto de la plataforma.
- Para datos precisos sobre autonomía de batería, límites ambientales y detalles de cableado de E/S consulte la documentación oficial de producto de TK Star para el modelo y la región específicos.

## Por qué usar Plaspy con estas funciones

Usar el TK910 4G con Plaspy brinda a las organizaciones visibilidad centralizada de ubicaciones en vivo, eventos de seguridad y movimientos históricos. Plaspy agrega la posición y la telemetría de eventos del rastreador en paneles e notificaciones que ayudan a los equipos operativos a responder más rápido a alertas de robo, supervisar el cumplimiento y analizar rutas para mejorar la eficiencia.

Learn more about Plaspy and how it can work with compatible trackers at https://www.plaspy.com. Device features, firmware behavior and manufacturer implementation can change over time, so verify the latest TK-Star specifications and regional details on the official TK-Star website https://www.tk-star.com/.
