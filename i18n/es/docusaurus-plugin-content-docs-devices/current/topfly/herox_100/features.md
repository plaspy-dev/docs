---
slug: /topfly/herox_100/features
id: herox_100-features
sidebar_label: Features
title: TopFly - HeroX 100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador TopFly HeroX 100 y su integración con Plaspy para seguimiento de flotas y telemetría
keywords:
  - TopFly HeroX 100
  - rastreador GPS TopFly
  - características HeroX 100
  - HeroX 100 con Plaspy
  - rastreador GPS para flotas
  - rastreador telemetría CAN BUS
  - rastreador BLE 5.1
  - seguimiento cadena de frío
  - dispositivo de rastreo vehicular
  - rastreador antirrobo
---

# TopFly - HeroX 100: Características

Esta página ofrece una descripción pública y no sensible del conjunto de características del TopFly HeroX 100 cuando se utiliza con Plaspy. Está enfocada en capacidades prácticas, flujos de trabajo comunes y en cómo Plaspy consume habitualmente los datos del dispositivo para seguimiento, monitoreo y visibilidad operativa.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y las decisiones del fabricante por región. Para detalles técnicos específicos, notas de firmware y las especificaciones más recientes consulte la documentación oficial de TopFly y sus notas de lanzamiento.

## Resumen de funcionalidades

El HeroX 100 es un rastreador GPS cableado compatible con Plaspy, diseñado para instalaciones en vehículos y activos que requieren posicionamiento preciso, un conjunto amplio de entradas y salidas (I/O) e integración de accesorios. Está orientado a informes de ubicación continuos, telemetría robusta y capacidad de expansión para flotas y escenarios antirrobo.

- Posicionamiento multi GNSS de alta precisión con GPS, BeiDou, Galileo y QZSS, con CEP autónomo por debajo de 1.5 m para enrutamiento y geocercas fiables.
- Conectividad celular 4G CAT 1 con retroceso a 2G para mayor cobertura y transmisión consistente de telemetría.
- Reportes en tiempo real configurables con frecuencias de hasta cada 3 segundos y gran buffer local para preservar puntos históricos durante pérdidas de conectividad.
- Conjunto de interfaces completo que incluye CAN BUS FMS, múltiples entradas y salidas digitales y analógicas, puertos RS485, soporte 1-wire para iButton y salidas de relé para control remoto.
- Soporte BLE 5.1 de largo alcance para sensores TopFly y de terceros, útil para temperatura, humedad, apertura de puertas e identificación de conductor.

## Funciones principales del TopFly - HeroX 100

- Posicionamiento multi GNSS con objetivos de precisión estrictos para soporte de ubicaciones y geocercas precisas.
- Módem celular 4G CAT 1 con fallback a 2G para resiliencia en redes mixtas.
- Gran buffer local para almacenamiento offline de puntos de posición y mantener el historial durante cortes de red.
- Soporte de telemetría CAN BUS FMS para integración de datos vehiculares cuando esté disponible.
- Amplias entradas y salidas digitales y analógicas además de salidas de relé para habilitar control remoto y señalización de eventos.
- Compatibilidad BLE 5.1 para emparejar sensores inalámbricos y etiquetas de identificación de conductor.
- Acelerómetro interno de 6 ejes e entradas dedicadas de seguridad para detección de choque, entrada SOS y eventos de comportamiento de conducción.
- Actualizaciones remotas de firmware y opciones de transporte seguro que incluyen canales cifrados comunes.

## Cómo interactúan estas funciones con Plaspy

Cuando se integra con Plaspy, Plaspy ingiere los datos del HeroX 100 y los mapea a vistas en vivo, alertas e informes que apoyan la toma de decisiones operativas. Plaspy recibe fijaciones GNSS, eventos de I/O, telemetría CAN y lecturas de sensores BLE, y convierte esa información en datos accionables para operadores de flota e integradores.

- Seguimiento de ubicación en tiempo real sobre mapas con intervalos de actualización configurables para despacho y monitoreo rápidos.
- Alertas basadas en eventos como encendido/apagado de ignición, desconexión, SOS, choques y manipulación, mostradas en Plaspy para respuesta inmediata.
- Telemetría CAN BUS enviada a los paneles de Plaspy para soportar métricas como consumo de combustible, odómetro, RPM y otros datos vehiculares cuando el vehículo los provea.
- Control remoto de relés y flujos de trabajo de inmovilización gestionados mediante comandos desde Plaspy vinculados a salidas del dispositivo y comprobaciones de seguridad.
- Datos de sensores Bluetooth para temperatura, humedad o identificación de conductor integrados en Plaspy para monitoreo de condiciones y registros de auditoría.
- Reproducción histórica desde puntos en buffer para reconstruir trayectos e investigar incidentes ocurridos mientras el dispositivo estuvo offline.

## Casos de uso típicos

- Gestión de flotas y optimización de rutas utilizando actualizaciones frecuentes de posición y telemetría vehicular.
- Escenarios antirrobo e inmovilización que combinan salidas de relé, alertas de manipulación y comandos remotos.
- Monitoreo de cadena de frío con sensores BLE de temperatura y humedad reportados a Plaspy para cumplimiento y trazabilidad.
- Identificación y registro de conductores usando iButton 1-wire o etiquetas BLE para asignación automática de conductor.
- Monitoreo de equipos especializados donde RS485, entradas analógicas o interfaces CAN capturan telemetría personalizada.
- Seguridad y respuesta a incidentes mediante detección de choques, entradas SOS y eventos del acelerómetro que activan flujos de trabajo.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware pueden habilitar o modificar comportamientos como intervalos de reporte, capacidad de buffer y opciones de cifrado.
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas celulares soportadas, las I/O disponibles o la compatibilidad con accesorios.
- Ciertos ítems de telemetría, como señales CAN específicas, dependen de la marca y modelo del vehículo y de la disponibilidad y mapeo FMS.
- Las decisiones de instalación influyen en qué entradas están activas y cómo se cablean funciones como detección de ignición o control de relé.
- Para conocer las capacidades e implementación más actuales, verifique la hoja de datos del dispositivo y las notas de lanzamiento del fabricante.

## Por qué usar Plaspy con estas funciones

Combinar el HeroX 100 con Plaspy aporta ubicación precisa y telemetría vehicular completa a una plataforma diseñada para monitoreo, alertas y flujos operativos. Esta combinación ayuda a las organizaciones a mantener visibilidad continua, reaccionar ante eventos de seguridad e integrar datos de sensores para necesidades especializadas como cadena de frío o identificación de conductores.

Para obtener más información sobre Plaspy y cómo el HeroX 100 puede encajar en su despliegue visite https://www.plaspy.com. Para detalles de características específicas del dispositivo, notas de firmware y documentación del fabricante consulte TopFly en https://www.topflytech.com/
