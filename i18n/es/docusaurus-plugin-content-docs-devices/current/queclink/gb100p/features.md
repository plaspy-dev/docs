---
slug: /queclink/gb100p/features
id: gb100p-features
sidebar_label: Features
title: QuecLink - GB100P Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones públicas del QuecLink GB100P y su integración con Plaspy para telemática y programas UBI
keywords:
  - Funciones QuecLink GB100P
  - Rastreador GPS QuecLink GB100P
  - Compatibilidad GB100P Plaspy
  - Detección de choques GB100P
  - Sensor inercial GB100P
  - GB100P BLE 4.2
  - Almacenamiento de mensajes GB100P
  - Rastreador GPS vehicular GB100P
  - Telemática GB100P Plaspy
  - Aviso fin de vida GB100P
---

# QuecLink - Funciones del GB100P

Esta página resume el contexto público de funcionalidades para usar el QuecLink GB100P con Plaspy. Se centra en las capacidades prácticas, escenarios operativos típicos y en cómo la telemetría y los eventos del dispositivo se reflejan dentro de la plataforma Plaspy. El contenido está pensado para usuarios que evalúan el comportamiento del equipo y su idoneidad para la integración, no como guía de configuración del dispositivo.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Donde se describen capacidades específicas, se basan en la documentación del dispositivo y en patrones de uso habituales; usted debe verificar el comportamiento actual con la documentación del fabricante y el firmware de su unidad antes del despliegue.

## Resumen de características

El GB100P es un rastreador GPS compacto montado con batería, diseñado para usos telemáticos como programas de seguro basado en uso y financiamiento de automóviles. Combina posicionamiento GNSS, sensores inerciales de alta frecuencia, soporte BLE y robusto almacenamiento en búfer de mensajes para ofrecer telemetría continua y captura detallada de eventos en entornos vehiculares exigentes.

- Factor de forma compacto montado con batería, apto para instalación discreta en compartimentos de motor y otros espacios reducidos
- Sensado inercial de 6 ejes de alta tasa, incluyendo acelerómetro tri-axial muestreado hasta 1600 Hz y giroscopio MEMS para captura de choques y análisis de comportamiento de conducción
- Conectividad GSM/GPRS cuatribanda con modos de reporte TCP, UDP y SMS para amplia cobertura regional y flexibilidad al enviar datos a Plaspy
- Soporte BLE 4.2 para extender la telemetría con sensores Bluetooth y balizas en flujos de trabajo como identificación de conductor o monitoreo de accesorios
- Almacenamiento en dispositivo de hasta 10,000 mensajes y paquetes GPS comprimidos por segundo para preservar la telemetría ante cobertura celular intermitente
- Carcasa robusta con certificación IP65 y batería interna NiMH de respaldo resistente a altas temperaturas para mantener el reporte en entornos difíciles

## Características principales del QuecLink - GB100P

- Receptor GNSS All-in-One de u-blox para posicionamiento confiable y reducción del tiempo hasta la primera posición (TTFF) en vehículos en movimiento
- Módem GSM/GPRS cuatribanda con soporte para los modos de enlace ascendente TCP, UDP y SMS
- Radio BLE 4.2 para integración con accesorios y balizas
- Conjunto de sensores inerciales de 6 ejes con acelerómetro tri-axial de alta tasa de muestreo y giroscopio MEMS para detección de incidentes y comportamiento de conducción
- Modo de paquetes GPS comprimidos de 1 segundo para reducir el consumo de ancho de banda preservando el historial de posiciones
- Gran capacidad de búfer de mensajes en el dispositivo para retención de datos fuera de línea y retransmisión
- Soporte documentado para geo-cercas y alarma de estacionamiento para hasta 20 zonas
- Carcasa resistente con clasificación IP65 y batería interna NiMH de respaldo para montaje en compartimento de motor y operación a temperaturas elevadas

## Cómo funcionan estas capacidades con Plaspy

Cuando el GB100P envía telemetría a Plaspy, la plataforma ingiere datos de posición, paquetes inerciales de alta resolución e entradas BLE de accesorios para soportar seguimiento en tiempo real, detección de eventos y análisis histórico. Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes a sus sistemas de rastreo, alertas e informes para ofrecer visibilidad operativa.

- Las actualizaciones de ubicación en tiempo real y el historial de movimiento son visibles en los tableros de Plaspy cuando el dispositivo reporta paquetes de posición
- Los datos inerciales de alta frecuencia previos y posteriores a impactos están disponibles para reconstrucción de incidentes y flujos de trabajo de puntuación de riesgo
- Los mensajes en búfer se cargan a Plaspy una vez que se restablece la conectividad, preservando la telemetría histórica durante cortes de red
- La telemetría de accesorios BLE y balizas puede asociarse con registros de vehículo o conductor dentro de Plaspy para flujos de trabajo extendidos
- Las alarmas del dispositivo relacionadas con geo-cercas, estacionamiento y velocidad pueden activar notificaciones y registros de eventos en Plaspy para supervisión y cumplimiento

## Casos de uso típicos

- Programas de seguro basado en uso que requieren datos inerciales de alta frecuencia para puntuación de riesgo y análisis post-incidente
- Financiamiento automotriz y recuperación de activos donde los rastreadores discretos montados con batería y el reporte con búfer facilitan la localización y recuperación de vehículos
- Operaciones de flota en zonas con cobertura celular intermitente donde el almacenamiento en dispositivo asegura continuidad de la telemetría
- Programas de comportamiento y seguridad del conductor que usan acelerómetro y giroscopio para detectar conducción agresiva y activar flujos de coaching
- Flujos de trabajo basados en BLE para identificación de conductor o monitoreo de estado de accesorios integrados a través de Plaspy

## Notas sobre disponibilidad de funciones

- Queclink ha emitido un aviso de EOL para el GB100P y las órdenes cesaron el 15 de noviembre de 2024; las unidades existentes continúan operando, pero se debe confirmar con Queclink la guía sobre producción y repuestos
- Las revisiones de firmware y los lotes de hardware pueden cambiar formatos de paquete, tasas de muestreo y alarmas disponibles; verifique las funciones contra el firmware instalado en sus unidades
- El tipo de instalación y la ubicación de montaje afectan la recepción GNSS y el comportamiento de medición inercial; el montaje en el compartimento del motor puede influir en las características de rendimiento
- Las variantes regionales o las aprobaciones celulares pueden modificar las bandas disponibles y la fiabilidad del reporte en algunos países
- Para nuevos despliegues, considere los modelos de reemplazo recomendados por el fabricante para requerimientos de E/S extendidos y disponibilidad a largo plazo

## Por qué usar Plaspy con estas funciones

Integrar el QuecLink GB100P con Plaspy ofrece a las organizaciones una vía práctica para consolidar telemetría de alta frecuencia, datos de eventos por choque y entradas de accesorios BLE en un flujo de trabajo telemático unificado. Plaspy brinda la visibilidad, las alertas y los informes históricos necesarios para operacionalizar análisis de choques, puntuación de seguros basada en uso y monitoreo de flotas, al tiempo que preserva los datos en búfer durante redes intermitentes.

Para obtener más información sobre Plaspy y cómo puede funcionar con dispositivos como el GB100P, visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar las especificaciones y la información de soporte más recientes en el sitio del fabricante https://www.queclink.com/.
