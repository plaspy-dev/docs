---
slug: /gosafe/g6c/features
id: g6c-features
sidebar_label: Features
title: Gosafe - G6C Features
sidebar_class_name: menu_item_tracker
description: Funciones y guía de integración con Plaspy para el rastreador vehicular Gosafe G6C
keywords:
  - Características Gosafe G6C
  - Rastreador GPS Gosafe G6C
  - Capacidades Gosafe G6C
  - Funciones Gosafe G6C
  - Gosafe G6C Plaspy
  - Compatibilidad rastreador GPS Plaspy
  - Rastreador GPS para vehículos Gosafe
  - Seguimiento de flotas G6C
  - Telemetría G6C funciones
  - Telemetría Gosafe Plaspy
---

# Gosafe - Funcionalidades del G6C

Esta página ofrece contexto público sobre las funcionalidades disponibles al usar el rastreador Gosafe G6C con Plaspy. Se enfoca en las capacidades prácticas que el G6C pone a disposición de gestores de flota, integradores y usuarios empresariales cuando el dispositivo está conectado a Plaspy para seguimiento en tiempo real, envío de telemetría y generación de informes operativos.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. El resumen a continuación refleja las capacidades documentadas del G6C y describe cómo se mapean a los flujos de trabajo y la visibilidad en Plaspy. Para detalles específicos del dispositivo y las notas de firmware más recientes, consulte la documentación del fabricante.

## Resumen de funciones

El G6C está diseñado como un rastreador de grado vehicular para despliegues a gran escala donde se requiere posicionamiento confiable, telemetría con almacenamiento en búfer y E/S flexible. Combina un receptor GNSS de alta sensibilidad y comunicaciones celulares con un conjunto amplio de entradas y salidas para entregar ubicación y telemetría a Plaspy para monitoreo e informes.

- Reporte de ubicación GNSS en tiempo real y envío de mensajes con almacenamiento en búfer para mantener continuidad ante pérdidas temporales de red
- Soporte de alimentación orientado a vehículos y batería de respaldo para preservar el rastreo y la captura de eventos ante interrupciones de energía
- Conjunto completo de E/S para detección de ignición, entradas analógicas y control de accesorios que reflejan el estado del vehículo en Plaspy
- Sensores y detecciones a bordo, incluyendo sensor de movimiento y detección de interferencia GSM para respaldar flujos de trabajo de antirobo y conducta de manejo
- Gestión remota y actualizaciones de firmware por aire (OTA) para simplificar el mantenimiento y la configuración a escala de flota

## Funciones principales del Gosafe - G6C

- Motor GNSS u-blox de alta sensibilidad con soporte SBAS para mejorar la precisión del posicionamiento
- Comunicación GSM multibanda GPRS con variantes que incluyen UMTS HSPA y LTE y soporte para modos de transporte TCP, UDP y SMS
- Rango de alimentación de grado vehicular con batería interna LiPo de respaldo para preservar telemetría crítica durante cortes de alimentación principal
- Amplio conjunto de E/S incluyendo detección de ignición, entradas digitales y analógicas, salidas en drenador abierto, RS232 e interfaz 1-Wire para identificación de conductor y sensores
- Acelerómetro 3D a bordo para detección de eventos basados en movimiento y registro de conducta de manejo
- Detección de interferencia GSM para apoyar monitoreo antirobo y alertas
- Gestión remota y actualizaciones de firmware OTA además de memoria flash con búfer para almacenamiento de mensajes durante interrupciones de conectividad

## Cómo funcionan estas funciones con Plaspy

Cuando un G6C está conectado y reporta a Plaspy, la plataforma recibe ubicación y telemetría que pueden utilizarse para monitoreo en vivo, alertas basadas en reglas y análisis histórico. Plaspy detecta automáticamente muchos protocolos de rastreadores y normaliza los eventos entrantes para que los equipos de flota trabajen con datos coherentes entre distintos tipos de dispositivos.

- Datos de ubicación continuos y almacenados en búfer aparecen en los mapas y en las líneas de tiempo de vehículo de Plaspy para seguimiento en vivo y reproducción
- Los cambios en entradas digitales y de ignición se registran como eventos de estado para activar reglas de enrutamiento, ventanas de mantenimiento y alertas personalizadas
- La telemetría de entradas analógicas, como nivel de combustible o lecturas de sensores, puede incorporarse en informes y paneles de Plaspy
- Los eventos basados en acelerómetro y las detecciones de interferencia GSM están disponibles como eventos discretos para puntuación de seguridad, alertas antirobo y procesos de cumplimiento
- Las actualizaciones OTA y la gestión de dispositivos facilitan la configuración remota, de modo que Plaspy reciba formatos de mensaje y conjuntos de telemetría consistentes en toda la flota

## Casos de uso típicos

- Operaciones de flota y despacho donde la ubicación precisa en tiempo real y la reproducción histórica mejoran el ruteo y la utilización
- Flujos de trabajo de antirobo y recuperación mediante detección de interferencia y desactivación remota con salidas y relés accesorios
- Monitoreo de conducta de conductores y programas de seguridad basados en eventos del acelerómetro y líneas de tiempo de ignición
- Monitoreo de sensores y combustible usando entradas analógicas integradas en los informes de Plaspy para análisis de costos y consumo
- Despliegues a gran escala que requieren actualizaciones de firmware OTA, configuración centralizada y un buffering de telemetría predecible
- Proyectos de integradores donde se utilizan accesorios RS232 o 1-Wire para ampliar la recolección de datos del vehículo

## Notas sobre disponibilidad de funciones

- La versión de firmware y las variantes regionales de hardware afectan qué funciones están habilitadas y el comportamiento exacto de entradas, salidas y sensores
- El método de instalación y el cableado del vehículo determinan qué entradas son utilizables para detección de ignición, monitoreo de combustible o control de accesorios
- Algunas capacidades dependen de variantes de hardware opcionales, como módulos UMTS HSPA o LTE, o configuraciones de SIM embebida
- La disponibilidad de actualizaciones OTA puede depender de la conectividad del proveedor de servicio y del aprovisionamiento del dispositivo
- Siempre verifique las funciones soportadas y la compatibilidad de accesorios contra el número de serie del dispositivo y la documentación del fabricante

## Por qué usar Plaspy con estas funciones

Usar el G6C con Plaspy proporciona una vista unificada de la ubicación del vehículo y la telemetría operativa que apoya la toma de decisiones en despacho, seguridad y mantenimiento. Plaspy ofrece alertas basadas en reglas, reproducción e informes que convierten los eventos crudos del G6C en inteligencia operativa accionable para flotas e integradores.

Plaspy está diseñado para escalar con el tamaño de la flota mientras preserva la continuidad de eventos cuando los dispositivos almacenan mensajes durante brechas de conectividad. Combinado con las capacidades del hardware G6C, esta integración soporta un rastreo confiable, detección antirobo y monitoreo basado en sensores en flotas mixtas.

Para saber más sobre Plaspy visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por favor verifique la información más reciente y específica del dispositivo en el sitio del fabricante https://gosafesystem.com/
