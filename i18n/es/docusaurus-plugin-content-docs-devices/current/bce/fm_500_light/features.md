---
slug: /bce/fm_500_light/features
id: fm_500_light-features
sidebar_label: Features
title: BCE - FM-500 Light+ Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador GPS BCE FM-500 Light+ y su integración con Plaspy para ubicación y monitoreo de E/S
keywords:
  - funciones BCE FM-500 Light+
  - rastreador GPS BCE FM-500 Light+
  - funciones FM-500 Light+
  - FM-500 Light+ Plaspy
  - funciones del rastreador BCE
  - capacidades de rastreador GPS
  - rastreo de activos BCE
  - rastreo de vehículos BCE
  - 1-Wire RS-232 EIA-485
  - entradas salidas digitales analogicas
---

# BCE - FM-500 Light+ Características

Esta página ofrece un resumen público de las funciones del BCE FM-500 Light+ y cómo sus capacidades se integran con la plataforma Plaspy. Resume las funciones del dispositivo que son relevantes para el rastreo, el monitoreo y el control remoto básico cuando el rastreador se utiliza con Plaspy; está pensado como una guía de alto nivel, no como un reemplazo de la documentación del fabricante.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la instalación y el cableado específicos, y las decisiones de implementación del fabricante. Cuando procede, esta página resalta capacidades prácticas orientadas al usuario derivadas de la descripción del dispositivo y cómo suelen representarse dentro de Plaspy.

## Resumen de funciones

El FM-500 Light+ está diseñado para el rastreo de objetos y vehículos con un formato compacto y un conjunto de interfaces de E/S para conectar sensores y dispositivos de control. Su conectividad GNSS y celular permite reportar posición y movimiento a través de la red móvil e integrarse en plataformas de gestión de flotas y activos como Plaspy.

- Reporte de ubicación GNSS usando GPS y GLONASS para detección de posición y movimiento
- Transferencia de datos por GSM para enviar ubicación y estados de entrada a servidores remotos
- Entradas digitales y analógicas para monitoreo de sensores y disparadores externos
- Salidas digitales para controlar equipos externos de forma remota
- Múltiples interfaces físicas, incluyendo compatibilidad 1-Wire iButton, RS-232 y EIA-485 para soportar sensores y accesorios adicionales

## Funciones principales del BCE - FM-500 Light+

- Posicionamiento GPS y GLONASS para reportes básicos de ubicación, velocidad y rumbo
- Comunicación de datos por GSM para enviar eventos de ubicación y E/S a plataformas remotas
- Entradas digitales para monitorear estados encendido/apagado de interruptores y sensores externos
- Entradas analógicas para leer señales variables de sensores cuando la instalación lo permite
- Salidas digitales para accionar o señalizar dispositivos externos en escenarios de control remoto
- Interfaz 1-Wire iButton para usos de accesorios o identificación
- Interfaces seriales RS-232 y EIA-485 para integración con equipos de terceros
- Batería interna de respaldo y factor de forma compacto y resistente adecuado para muchas instalaciones

## Cómo funcionan estas funciones con Plaspy

Plaspy procesa los reportes del FM-500 Light+ y presenta la información de ubicación y E/S junto con otros datos de la flota. Plaspy detecta automáticamente el protocolo del rastreador y normaliza los datos recibidos para que la ubicación del equipo, su movimiento y los estados reportados de entradas estén disponibles para monitoreo e informes.

- La ubicación y el movimiento se muestran en los mapas de Plaspy con actualizaciones de posición con sello de tiempo
- Los cambios reportados en entradas digitales y analógicas aparecen como eventos o elementos de telemetría dentro de Plaspy
- Las salidas digitales pueden representarse en Plaspy para mostrar su estado y, cuando están configuradas, formar parte de flujos de trabajo de comando remoto
- Los periféricos conectados por serial o 1-Wire suelen exponerse mediante canales de entrada configurados, de modo que su estado o identificadores pueden rastrearse en Plaspy
- Plaspy puede aceptar conexiones de dispositivos compatibles y detecta el protocolo del equipo automáticamente para simplificar la integración

## Casos de uso típicos

- Rastreo de ubicación de vehículos y activos para optimización de rutas y recuperación
- Monitoreo remoto del estado de equipos usando entradas digitales y analógicas
- Control de dispositivos auxiliares mediante salidas digitales para acciones remotas básicas
- Integración de dispositivos accesorios vía RS-232 o EIA-485 para telemetría extendida
- Identificación o registro de accesos mediante la interfaz 1-Wire iButton
- Despliegues que requieren un rastreador compacto con batería interna de respaldo para situaciones de energía intermitente

## Notas sobre disponibilidad de funciones

- Las versiones de firmware pueden habilitar, cambiar o desactivar funciones y ajustes específicos; siempre verifique la versión de firmware para conocer detalles de capacidad
- Las revisiones de hardware y las variantes regionales pueden modificar las interfaces disponibles o los rangos de entrada soportados
- La instalación física y el cableado determinan qué entradas y salidas son accesibles y cómo los sensores reportan datos
- Las opciones de configuración del fabricante y la personalización por parte del distribuidor pueden afectar cómo se presentan los datos y qué funciones están activas
- Para detalles precisos eléctricos y de protocolo, consulte la documentación oficial del fabricante

## Por qué usar Plaspy con estas funciones

Usar el FM-500 Light+ junto con Plaspy ofrece a las organizaciones una ruta sencilla para convertir señales brutas de ubicación y E/S en información operativa accionable. Plaspy proporciona manejo unificado de dispositivos, visualización en mapas, registro de eventos e informes, de modo que los datos del rastreador puedan emplearse para monitoreo, alertas y flujos básicos de control remoto sin desarrollar servicios backend personalizados.

Si desea saber más sobre cómo Plaspy soporta flotas de dispositivos y cómo se integran rastreadores compatibles, visite https://www.plaspy.com. Tenga en cuenta que las funciones del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que siempre es recomendable verificar la información más reciente del dispositivo en el sitio oficial de BCE en http://www.bce.en/.
