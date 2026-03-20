---
slug: /concox/jm_vg01u/features
id: jm_vg01u-features
sidebar_label: Features
title: Concox - JM-VG01U Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador Concox JM-VG01U y cómo su INS GNSS, kilometraje e inmovilizador funcionan con Plaspy
keywords:
  - Concox JM-VG01U
  - funciones JM-VG01U
  - rastreador GPS Concox
  - compatibilidad JM-VG01U Plaspy
  - rastreador GNSS para vehículo
  - rastreador INS GNSS
  - inmovilizador por relé
  - reporte de kilometraje GPS
  - detección de conducta de manejo
  - seguimiento de flotas Plaspy
---

# Concox - JM-VG01U: Características

Esta página describe el contexto público de funcionalidades del Concox JM-VG01U cuando se utiliza con Plaspy. Resume las capacidades del dispositivo relevantes para responsables de flotas, programas de seguro basados en uso y despliegues de financiamiento automotriz, y explica cómo esas capacidades se traducen en monitorización, alertas e informes dentro de Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Utilice esta página como orientación general sobre compatibilidad y capacidades y consulte la documentación oficial de Concox para detalles técnicos específicos y actualizados del dispositivo.

## Resumen de características

El JM-VG01U es un rastreador GNSS vehicular asistido por INS diseñado para ofrecer posicionamiento continuo y telemetría de movimiento detallada para uso profesional en flotas. Combina GNSS multiconstelación, navegación inercial y asistencia por LBS para mejorar la localización en entornos urbanos y con señal débil, al tiempo que suministra información de eventos y viajes útil para seguridad y operaciones.

- Posicionamiento GNSS asistido por INS con asistencia LBS para mantener actualizaciones de ubicación en zonas de recepción difícil.
- Sensado de movimiento de 6 ejes (acelerómetro 3 ejes y giroscopio 3 ejes) para detección de conductas al volante y clasificación de eventos.
- Reporte de kilometraje preciso con un margen de error declarado bajo, adecuado para facturación basada en uso y métricas operativas.
- Entradas de vehículo integradas, incluyendo detección de ignición (ACC) y un botón SOS en cabina para eventos de viaje y emergencias.
- Soporte para corte remoto por relé (inmovilizador) orientado a flujos de recuperación y control antirrobo.

## Características principales del Concox - JM-VG01U

- Navegación asistida por INS combinada con GNSS multiconstelación para mejorar la continuidad de la posición.
- Sensado inercial de 6 ejes que permite detectar múltiples comportamientos de conducción inseguros.
- Cálculo de kilometraje mediante algoritmos a bordo con expectativas de error publicadas y bajas.
- Entradas digitales para estado de ignición (ACC) y un botón SOS en cabina para registro de eventos.
- Salida por relé para soportar inmovilizadores remotos o acciones de corte.
- Hardware robusto con protección ambiental IP65 y rango de temperatura industrial.
- Conectividad celular GSM quad-band para amplia cobertura de red.
- Indicadores LED para estado de GNSS, celular y alimentación para facilitar diagnósticos de instalación.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere la telemetría de dispositivos compatibles como el JM-VG01U y traduce posiciones GNSS, eventos inerciales y señales de entradas digitales en mapas en vivo, flujos de eventos e informes históricos. El manejo de dispositivos en Plaspy mapea los eventos enviados por el equipo a registros en la plataforma, de modo que usted puede monitorear viajes, eventos de seguridad y el estado del dispositivo desde una sola interfaz.

- Ubicación en tiempo real y continuidad de posición mostradas en los mapas de Plaspy para visibilidad inmediata de la flota.
- Eventos de comportamiento al conducir y de movimiento capturados como alertas de seguridad y disponibles en los análisis de Plaspy.
- Eventos de ignición (ACC) y pulsaciones del botón SOS asociados a registros de viaje y capaces de desencadenar notificaciones inmediatas.
- Telemetría de kilometraje que alimenta informes de utilización y kilometraje usados para facturación, planificación de mantenimiento y análisis.
- Estado del inmovilizador por relé y acciones de corte remoto representables en los paneles de Plaspy como salidas del dispositivo o eventos de control.
- Plaspy detecta automáticamente protocolos compatibles y normaliza la telemetría entrante para su visualización e informes.

## Casos de uso típicos

- Gestión de flotas y supervisión de rutas donde la ubicación continua y el conocimiento del comportamiento del conductor mejoran las operaciones.
- Monitoreo antirrobo con alertas SOS y capacidad de inmovilizador remoto para flujos de recuperación.
- Programas de seguro basados en uso y financiamiento automotriz que requieren kilometraje preciso y registros de eventos.
- Entregas urbanas y logística donde la asistencia INS y LBS reduce huecos de ubicación en cañones urbanos y túneles.
- Programas de seguridad que dependen de la detección automática de maniobras bruscas y eventos tipo colisión.
- Informes de mantenimiento y utilización basados en telemetría de ignición y kilometraje.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware del fabricante pueden habilitar, modificar o afinar el comportamiento de funciones como umbrales de eventos, algoritmos de kilometraje y procesamiento INS.
- Las revisiones de hardware y las variantes regionales pueden afectar las entradas disponibles, las bandas celulares compatibles o las certificaciones del equipo.
- Una instalación y cableado correctos (para ACC, SOS y relé) son necesarios para que esas funciones reporten de forma fiable a Plaspy.
- Algunas opciones avanzadas de detección de eventos o reporte pueden ser configurables en el dispositivo o mediante herramientas del fabricante; Plaspy presenta la telemetría que el dispositivo emite.
- Confirme siempre el conjunto exacto de funciones y las opciones de configuración para una unidad y compilación de firmware específicas con la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el Concox JM-VG01U con Plaspy incorpora el posicionamiento y la telemetría de movimiento a un entorno centralizado de monitoreo e informes. Plaspy convierte datos GNSS e inerciales en seguimiento en vivo accionable, alertas de seguridad y análisis históricos para que los operadores de flota puedan reducir riesgos, verificar el uso y optimizar los reportes operativos.

Para obtener más información sobre Plaspy y cómo integra las entradas de dispositivos en los flujos de trabajo de flotas visite https://www.plaspy.com. Para especificaciones más recientes, notas de firmware y detalles de implementación del fabricante, verifique la información en el sitio oficial de Concox https://www.iconcox.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
