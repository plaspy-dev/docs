---
slug: /concox/vl101g/features
id: vl101g-features
sidebar_label: Features
title: Concox - VL101G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Concox VL101G y su integración con Plaspy para seguimiento de flotas y telemática vehicular
keywords:
  - Concox VL101G
  - funciones Concox VL101G
  - rastreador GPS VL101G
  - VL101G Plaspy
  - rastreador vehicular Concox
  - GNSS de doble frecuencia
  - rastreador LTE Cat 1
  - telemática vehicular
  - análisis de comportamiento de conducción
  - inmovilizador vehicular
---

# Concox - Funciones del VL101G

Esta página ofrece un resumen público y orientado a funciones del Concox VL101G y explica cómo sus capacidades se integran con Plaspy para el seguimiento de flotas y la telemática vehicular. Está pensada para describir las funcionalidades operativas principales que puede esperar utilizar con Plaspy y de qué modo estas funciones respaldan la monitorización, la seguridad y los flujos de trabajo de la flota.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional, el cableado y la configuración de la instalación, y las decisiones de implementación del fabricante. Para configuración a nivel de dispositivo, detalles de firmware e instrucciones de instalación consulte la documentación oficial de Concox y las notas de la versión.

## Resumen de funciones

El VL101G es un terminal vehicular GNSS 4G diseñado para montaje en techo y uso profesional en flotas. Combina posicionamiento de alta precisión, enlace celular resistente, entradas y salidas orientadas al vehículo, y funciones de continuidad de datos a bordo para ofrecer seguimiento y telemática continuos en condiciones exigentes.

- GNSS de alta precisión de doble frecuencia (L1 + L5) con soporte para GPS, BDS, GLONASS y Galileo para mejorar la localización en situaciones de señal marginal.
- Conectividad LTE Cat 1 con conmutación a GSM 2G y ranura Micro SIM para amplia cobertura de enlace y reportes fiables.
- Entradas y salidas orientadas al vehículo y compatibilidad serial para detección de encendido, canales de telemetría y casos de uso de control remoto.
- Almacenamiento a bordo y batería de respaldo que preservan registros y posiciones durante pérdidas temporales de alimentación o interrupciones de conectividad.
- Sensores de movimiento integrados (acelerómetro y giroscopio) para generar eventos de comportamiento de conducción destinados a coaching y evaluación de riesgo.
- Carcasa robusta con clasificación IP66 y rango de temperatura extendido, apta para instalaciones en techo y exposiciones exteriores del vehículo.

## Características principales del Concox - VL101G

- GNSS de doble frecuencia L1 + L5 compatible con GPS, BDS, GLONASS y Galileo para mayor precisión de posicionamiento.
- Sistema de navegación inercial para mantener continuidad posicional en entornos de señal débil.
- Conectividad celular LTE Cat 1 con fallback a GSM 2G y soporte para Micro SIM que aumenta la resiliencia de red.
- Entradas y salidas vehiculares además de compatibilidad TTL y RS232 para capturar encendido, telemetría externa y soportar control de relés.
- Capacidad de control de relé adecuada para corte remoto del motor o flujos de inmovilización cuando la instalación lo permita.
- Almacenamiento interno para registro en búfer de posiciones y eventos durante pérdidas de conectividad.
- Batería de respaldo industrial para mantener operaciones básicas y registro durante interrupciones del suministro principal.
- Acelerómetro y giroscopio integrados para la detección de eventos de conducción severa empleados en informes telemáticos.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere los flujos de telemetría y posición del VL101G para mostrar ubicación en tiempo real, recorridos históricos y datos de eventos en paneles e informes. Plaspy detecta automáticamente el protocolo del rastreador durante el registro y admite los modos de reporte UDP o TCP habituales, lo que facilita la incorporación rápida del dispositivo y la visibilidad operativa.

- Fijaciones GNSS en tiempo real y actualizaciones de posición mostradas en los mapas de Plaspy para seguimiento en vivo e historial de rutas.
- Eventos de encendido y de entradas digitales mapeados como indicadores de inicio/parada y manipulación en los paneles y alertas de Plaspy.
- Eventos de comportamiento de conducción derivados del acelerómetro y giroscopio integrados enviados a Plaspy como eventos telemáticos para puntuación y análisis.
- Eventos de relé o salidas digitales expuestos en los flujos de incidentes de Plaspy para respaldar acciones de inmovilización y recuperación cuando estén configurados.
- El almacenamiento en búfer a bordo y la batería de respaldo preservan los registros para que Plaspy reciba los datos históricos una vez que se restablezca la conectividad.

## Casos de uso habituales

- Monitoreo continuo de flotas para enrutamiento, despacho e informes de utilización en flotas de vehículos.
- Telemetría para alquiler y leasing que permite hacer cumplir contratos, monitorizar uso y detectar manipulaciones.
- Programas de seguros basados en uso que requieren eventos de conducción de alta fidelidad e historial de posición preciso.
- Operaciones anti robo y recuperación que combinan alertas de movimiento, estado de encendido e inmovilización remota.
- Programas de capacitación de conductores y mejora de seguridad mediante la detección de eventos severos y tarjetas de puntuación.
- Planificación de mantenimiento y diagnóstico operacional usando telemetría vehicular e historial de eventos.

## Notas sobre disponibilidad de funciones

- Diferencias de firmware y configuración de software pueden habilitar o deshabilitar canales de telemetría y reportes de eventos específicos.
- Revisiones de hardware y variantes regionales pueden afectar las bandas celulares soportadas y las opciones de cableado de entradas y salidas.
- El cableado de la instalación y la decisión de habilitar relés o periféricos externos determinan si están disponibles la inmovilización remota y algunas funciones de telemetría.
- Los sensores integrados y la precisión dependen de la colocación de la antena y de las prácticas de montaje en techo o en zonas expuestas.
- Siempre consulte la hoja de datos del fabricante y la guía de instalación para obtener las especificaciones exactas del hardware e información de cumplimiento regional.

## Por qué usar Plaspy con estas funciones

Combinar el VL101G con Plaspy ofrece a las organizaciones una forma práctica de convertir la telemetría a nivel de vehículo en información operativa. Plaspy consolida posición GNSS, eventos de sensores y estados de entradas/salidas en una vista unificada de la flota, lo que permite una respuesta más rápida ante incidentes, mejor visibilidad de rutas e informes telemáticos estructurados para programas de seguridad y eficiencia.

Para obtener más información sobre cómo Plaspy puede trabajar con dispositivos Concox y revisar las capacidades de la plataforma visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware e instrucciones de instalación confirme los detalles en el sitio del fabricante https://www.iconcox.com/
