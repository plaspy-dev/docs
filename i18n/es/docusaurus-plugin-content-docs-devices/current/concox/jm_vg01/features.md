---
slug: /concox/jm_vg01/features
id: jm_vg01-features
sidebar_label: Features
title: Concox - JM-VG01 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Concox JM-VG01 y cómo sus funciones de ubicación y seguridad se integran con Plaspy
keywords:
  - Características Concox JM-VG01
  - Rastreador GPS Concox JM-VG01
  - Compatibilidad JM-VG01 con Plaspy
  - Características rastreador vehicular Concox
  - Detección comportamiento de conducción JM-VG01
  - Precisión de kilometraje JM-VG01
  - Rastreo GPS con ayuda INS
  - Botón de pánico JM-VG01
  - Corte remoto JM-VG01
  - Rastreador Concox IP65
---

# Concox - JM-VG01 Características

Esta página ofrece una descripción pública y no sensible de las funciones del rastreador Concox JM-VG01 y explica cómo se integran sus capacidades con la plataforma Plaspy. Está dirigida a gestores de flotas, integradores y usuarios técnicos que necesiten comprender las funciones del dispositivo relevantes al usarlo con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para obtener detalles técnicos y de seguridad actualizados, consulte la documentación de Concox y la etiqueta o los archivos de configuración que acompañan a su unidad.

## Resumen de funciones

El JM-VG01 (a veces referenciado comercialmente como JM-VG01U en cierta documentación) se presenta como un rastreador vehicular avanzado con sensibilidad de movimiento y resiliencia en navegación. Está orientado al seguimiento continuo, análisis del comportamiento de conducción, reporte preciso de kilometraje y varias funciones de seguridad y control apropiadas para el monitoreo de vehículos.

- Rastreo GPS asistido por INS para mantener la localización en zonas con señal satelital débil o nula.
- Análisis del comportamiento de conducción con detección de ocho tipos de maniobras inadecuadas o riesgosas y alertas asociadas.
- Detección de movimiento en múltiples ejes mediante acelerómetro y giroscopio para identificar movimientos sensibles.
- Cálculo de kilometraje preciso con una precisión declarada por el fabricante cercana al 98% y un algoritmo diseñado para minimizar el error de distancia.
- Funciones de estado del vehículo, incluyendo detección de encendido (ACC), señalización mediante botón de pánico y capacidad de corte remoto a través de un relé instalado.
- Construcción resistente con protección IP65 contra polvo y salpicaduras, adecuada para entornos de instalación exigentes.

## Características principales del Concox - JM-VG01

- Navegación GPS asistida por INS para mantener el seguimiento en túneles, cañones urbanos o áreas con señal degradada.
- Monitorización del comportamiento de conducción que identifica ocho tipos definidos de conducción inapropiada y genera alertas.
- Acelerómetro y giroscopio multiaxial para detectar aceleraciones lineales y movimientos angulares.
- Cálculo de kilometraje de alta precisión con reducción de error declarada por el fabricante, útil para informes fiables de distancia.
- Detección de encendido para registrar eventos ACC on/off y correlacionar el movimiento con el estado de energía del vehículo.
- Entrada de botón de pánico para registrar alertas de emergencia y notificar a los sistemas de monitoreo.
- Función de corte remoto mediante una interfaz de relé dedicada cuando está instalada y configurada.
- Clasificación de protección ambiental IP65 para resistencia al polvo y al agua en instalaciones vehiculares habituales.

## Cómo funcionan estas funciones con Plaspy

Plaspy está diseñado para recibir y mostrar el estado, la ubicación y los datos de eventos del rastreador, de modo que usted pueda monitorear vehículos y responder a sucesos operativos. Plaspy detecta automáticamente muchos protocolos de rastreadores y acepta conexiones de dispositivos por TCP o UDP usando el puerto estándar de la plataforma, permitiendo que el JM-VG01 reporte eventos y telemetría al sistema.

- Seguimiento continuo de ubicación y visualización en mapas, incluyendo posicionamiento sostenido donde el INS complementa el GPS.
- Registro de eventos y alertas por detecciones de comportamiento de conducción para que las flotas puedan revisar incidentes y tendencias en Plaspy.
- Resúmenes de kilometraje y viajes en los informes de Plaspy, aprovechando el cálculo de distancia del dispositivo para facturación, mantenimiento o cumplimiento.
- Vistas de estado de encendido y líneas de tiempo que permiten entender el uso del vehículo y correlacionar movimiento con eventos ACC.
- Visibilidad de eventos de pánico para que despachos o gerentes identifiquen y respondan a alertas de emergencia reportadas por el dispositivo.
- Estado y visibilidad del corte remoto, y control cuando la instalación del dispositivo y el protocolo lo permiten; Plaspy muestra las acciones de control compatibles y registra los eventos relacionados.

## Casos de uso típicos

- Programas de seguridad de flota que monitorean la conducta del conductor y generan informes para capacitación o cumplimiento.
- Operaciones que requieren seguimiento resistente en áreas de señal satelital deficiente, como centros urbanos o entornos subterráneos.
- Facturación o programación de mantenimiento basada en kilometraje usando una medición de distancia más precisa.
- Respuesta rápida a incidentes mediante la identificación de activaciones del botón de pánico y los movimientos recientes del vehículo.
- Flujos de trabajo ante robo que combinan ubicación en tiempo real, estado de encendido y la posibilidad de inmovilización remota autorizada cuando está instalada.
- Despliegues vehiculares en condiciones exteriores o exigentes que se benefician de la protección IP65.

## Notas sobre disponibilidad de funciones

- La presencia de funciones puede variar según el firmware y las revisiones específicas de hardware del JM-VG01; los fabricantes a veces modifican capacidades entre lotes de producción.
- La descripción del dispositivo hace referencia tanto a sensores de tres ejes como a una configuración multieje agregada; consulte la etiqueta del dispositivo y la documentación de Concox para confirmar el hardware exacto de su unidad.
- El corte remoto requiere un relé correctamente instalado y cableado en el vehículo; la instalación física y las políticas locales o de la empresa determinan si la inmovilización remota está habilitada.
- Las definiciones de comportamiento de conducción, umbrales de alerta y algoritmos de kilometraje pueden ser configurables y verse afectadas por ajustes de firmware y calibración.
- Para variantes regionales y las especificaciones técnicas más recientes, consulte siempre las notas de versión y la documentación de producto de Concox.

## Por qué usar Plaspy con estas funciones

Usar el Concox JM-VG01 con Plaspy proporciona a las organizaciones una vista unificada de ubicación, eventos de seguridad y métricas operativas. Plaspy recopila el flujo de ubicación y eventos del rastreador, lo presenta en mapas y líneas de tiempo, e integra datos de kilometraje y encendido en informes de flota para apoyar la toma de decisiones y la supervisión operativa.

Para saber más sobre cómo Plaspy presenta los datos del JM-VG01 y cómo puede ayudar en el despliegue, visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles específicos y las recomendaciones de configuración más recientes con Concox en https://www.iconcox.com/.
