---
slug: /istartek/vt130_l/features
id: vt130_l-features
sidebar_label: Features
title: iStartek - VT130-L Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador iStartek VT130-L y su integración con Plaspy para seguimiento en tiempo real y telemetría de flotas
keywords:
  - funciones iStartek VT130-L
  - rastreador GPS VT130-L
  - funciones rastreador iStartek
  - compatibilidad VT130-L con Plaspy
  - capacidades VT130-L
  - rastreador GNSS multiconstelación
  - telemetría vehicular VT130-L
  - soporte FOTA VT130-L
  - rastreador compacto IP66
  - soporte inmovilizador VT130-L
---

# iStartek - Características del VT130-L

Esta página describe el contexto público de funciones para el uso del rastreador GPS iStartek VT130-L con Plaspy. Resume las capacidades prácticas que usted puede aprovechar en Plaspy para seguimiento en vivo de vehículos, recopilación de telemetría, alarmas y flujos básicos de intervención remota. La información se centra en la funcionalidad orientada al usuario más que en detalles de bajo nivel del protocolo.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la forma en que la unidad esté instalada. Para información específica sobre cableado, comportamiento del firmware, accesorios y detalles técnicos más recientes, consulte la documentación del fabricante referenciada al final de esta página.

## Resumen de funciones

El VT130-L es un rastreador 4G compacto y robusto diseñado para seguimiento en tiempo real y telemetría vehicular confiable. Al integrarse con Plaspy, transmite posicionamiento GNSS multiconstelación y un conjunto amplio de eventos de seguridad y vehículo para que los operadores puedan monitorear activos, responder a alarmas y generar informes operativos.

- Posicionamiento GNSS de alta precisión con soporte multiconstelación para mantener calidad de ubicación en distintos entornos.
- Carcasa compacta con clasificación IP66 y amplia tolerancia de voltaje de entrada, facilitando el montaje en distintos vehículos de una flota mixta.
- Acelerómetro 3D integrado y conjunto de alarmas para detección de impactos, remolque/vibración y otros eventos críticos.
- Capacidades de control remoto incluyendo corte de combustible o de energía para intervenciones tipo inmovilizador y salida de buzzer opcional.
- Almacenamiento a bordo y soporte FOTA para retener eventos cuando la conectividad sea limitada y simplificar la gestión del ciclo de vida del firmware.

## Características principales del iStartek - VT130-L

- Soporte multiconstelación GNSS, incluyendo BDS, GPS, GLONASS y QZSS, para mejorar la fiabilidad de la fijación de posición.
- Conectividad celular 4G con posicionamiento dual GPS+GSM para mayor cobertura y comportamiento de conmutación por caída.
- Conjunto de alarmas completo que incluye violaciones de geocerca, exceso de velocidad, pérdida de señal GPS, desconexión de alimentación externa, eventos de puertas y del motor.
- Sensor de aceleración 3D integrado para detección de impactos, movimientos bruscos y eventos de remolque o vibración.
- Salidas remotas y control tipo inmovilizador, incluyendo corte remoto de combustible o energía y salida de buzzer opcional.
- Memoria flash de 16 Mbit para registro temporal de eventos cuando no hay conectividad de red.
- Actualizaciones de firmware por aire (FOTA) y opciones de redundancia de servidor para facilitar el mantenimiento y la disponibilidad del dispositivo.
- Carcasa compacta con protección IP66, adecuada para montaje discreto en vehículos de pasajeros y activos de flotas mixtas.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere las posiciones, alarmas y telemetría del VT130-L para que los equipos puedan visualizar posiciones de vehículos en vivo y reaccionar a eventos desde una única plataforma. El dispositivo transmite coordenadas GNSS y eventos de estado que Plaspy mapea en vistas de seguimiento, alertas e informes.

- El feed de ubicación en vivo y las actualizaciones periódicas de telemetría aparecen en los mapas de Plaspy para despacho y monitoreo.
- El reenvío de alarmas por violaciones de geocerca, detecciones de impacto, desconexión de alimentación y otros eventos genera notificaciones oportunas en Plaspy.
- Entradas relacionadas con ignición, puertas y motor se representan como eventos de estado para apoyar el monitoreo de comportamiento del conductor y acceso.
- Los registros a bordo y el almacenamiento flash permiten que Plaspy reciba cargas diferidas de eventos cuando se restablece la conectividad.
- Acciones de control remoto, como corte de combustible o energía, se desencadenan y reflejan en los flujos de trabajo de Plaspy cuando están habilitadas operativamente.
- Información del ciclo de vida del dispositivo, como estado de actualizaciones de firmware y redundancia de conexión, ayuda a los administradores a mantener un despliegue saludable; Plaspy detecta y mapea automáticamente los detalles de protocolo disponibles.

## Casos de uso típicos

- Gestión de flotas para despacho en tiempo real, cumplimiento de rutas e informes de kilometraje en vehículos comerciales.
- Monitoreo de transporte público y de unidades escolares con estado de puertas y motor para seguridad de pasajeros y cumplimiento de horarios.
- Operaciones de taxi y plataformas de viaje que requieren telemetría en cabina, reportes de ignición y alertas de incidentes.
- Telemática para seguros y control de flotas en leasing, donde kilometraje, ralentí y eventos de conducción brusca ayudan a la gestión de riesgos.
- Instalaciones antirobo en vehículos particulares usando ubicaciones discretas combinadas con corte remoto y alarmas por vibración.
- Despliegues en flotas mixtas que se benefician del factor de forma pequeño y la amplia tolerancia de voltaje para diferentes tipos de vehículos.

## Notas sobre disponibilidad de funciones

- Funciones como umbrales de alarma, entradas disponibles y accesorios opcionales pueden variar según la compilación de firmware y las variantes de hardware por región.
- Ciertas funciones de control remoto y accesorios pueden requerir cableado específico o hardware opcional para estar presentes y correctamente configurados.
- El comportamiento a bordo para rellenado de registros y actualizaciones FOTA depende del firmware actual y de la configuración del servidor.
- El soporte de bandas celulares regionales y la compatibilidad con accesorios varían por SKU del modelo; consulte al fabricante para identificar la variante correcta para su área.
- La integración con Plaspy refleja los datos que el dispositivo está configurado para enviar; verifique tanto la configuración del equipo como las reglas de su cuenta Plaspy para el comportamiento de alertas esperado.

## Por qué usar Plaspy con estas funciones

Utilizar el VT130-L con Plaspy ofrece una combinación práctica de hardware compacto y una plataforma diseñada para consolidar datos de ubicación y eventos para supervisión operativa. El soporte multiconstelación GNSS, la detección de aceleración a bordo y el amplio conjunto de alarmas del dispositivo ayudan a Plaspy a entregar conciencia situacional accionable y flujos de trabajo basados en eventos para flotas de distintos tamaños y funciones.

Learn more about how Plaspy can support deployments of the VT130-L on the main website https://www.plaspy.com. Please verify the latest device feature list firmware behavior and manufacturer implementation details on the official iStartek site https://istartek.com/ as features and firmware may change over time.
