---
slug: /topfly/torchx_110/features
id: torchx_110-features
sidebar_label: Features
title: TopFly - TorchX 110 Features
sidebar_class_name: menu_item_tracker
description: Resumen de las funciones del TorchX 110 y cómo este rastreador OBDII de TopFly funciona con Plaspy para gestión de flotas y telemetría
keywords:
  - Características TopFly TorchX 110
  - Rastreador GPS TorchX 110
  - Rastreador OBDII TopFly
  - Compatibilidad TorchX 110 con Plaspy
  - Telemetría CAN bus OBDII
  - Rastreador con soporte para sensores BLE
  - Rastreador vehicular 4G Cat 1
  - Seguimiento en tiempo real de alta resolución
  - Telemetría de diagnóstico vehicular
  - Almacenamiento en búfer offline de ubicaciones
---

# TopFly - Características del TorchX 110

Esta página ofrece una descripción pública de las funciones del TopFly TorchX 110 y cómo sus capacidades se integran con la plataforma Plaspy. Se concentra en detalles operativos no sensibles que ayudan a gerentes de flota, integradores telemáticos y evaluadores técnicos a comprender qué puede ofrecer el dispositivo cuando se usa con Plaspy.

La disponibilidad exacta de las funciones y su comportamiento dependen de la versión de firmware, la revisión de hardware, la variante regional y la instalación. Las características que se describen aquí reflejan la documentación del dispositivo y configuraciones comunes; confirme siempre las especificaciones del equipo y el comportamiento del firmware con el fabricante y las notas de la versión antes de desplegarlo.

## Resumen de funcionalidades

El TorchX 110 es una unidad telemática OBDII plug‑and‑play diseñada para entregar actualizaciones de ubicación frecuentes, datos CAN del vehículo y soporte para sensores Bluetooth. Su formato compacto facilita la instalación en flotas mixtas y aporta la telemetría necesaria para la gestión de flotas, seguros basados en uso y flujos de trabajo de diagnóstico.

- Instalación OBDII plug‑and‑play para despliegues rápidos en flotas y mínima intrusión en el vehículo.
- Seguimiento en tiempo real de alta resolución con actualizaciones tan frecuentes como cada 3 segundos para un análisis detallado de rutas y comportamiento.
- Telemetría CAN bus que incluye estado de ignición, VIN, cuentakilómetros verdadero, nivel de combustible y códigos de diagnóstico (DTC) para mantenimiento y verificación.
- Soporte BLE 5.0 para sensores externos como temperatura y contacto de puertas, ampliando los casos de uso telemático.
- Posicionamiento híbrido que combina GNSS con posicionamiento Wi‑Fi y Bluetooth para mejorar las fijaciones en entornos urbanos y complejos.
- Amplio búfer offline para almacenar numerosos puntos de ubicación durante períodos sin cobertura, evitando la pérdida de datos.

## Funciones principales del TopFly - TorchX 110

- Factor de forma OBDII plug‑and‑play pensado para una instalación rápida en vehículos compatibles.
- Conectividad celular 4G Cat‑1 con opciones de fallback para cobertura amplia y reportes frecuentes.
- Reporte de posición a alta frecuencia, con actualizaciones tan rápidas como cada 3 segundos para telemetría detallada.
- Acceso a datos CAN que proporciona ignición, VIN, cuentakilómetros verdadero, nivel de combustible y DTCs a través de la interfaz OBDII del vehículo.
- Soporte de accesorios BLE 5.0 que permite integrar sensores de temperatura, humedad, puertas y similares.
- Almacenamiento interno en búfer para conservar el historial de ubicaciones durante pérdidas temporales de conectividad.
- Detección de choques y recopilación de eventos para capturar datos de incidentes destinados a reconstrucción y reportes.
- Funciones de mantenimiento remoto, incluyendo FOTA y acceso de depuración por USB para actualizaciones de firmware y diagnóstico.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el TorchX 110 transmite ubicación y telemetría del vehículo a la plataforma para que usted pueda monitorear flotas, activar alertas y generar informes. Plaspy detecta automáticamente los protocolos de los rastreadores compatibles y presenta los campos de datos derivados de las entradas CAN y de posicionamiento del dispositivo.

- Ubicaciones en tiempo real y telemetría CAN aparecen en los paneles y mapas en vivo de Plaspy para visibilidad operativa.
- Ignición, VIN, cuentakilómetros y DTCs extraídos de los datos CAN pueden utilizarse en informes de Plaspy, reglas de mantenimiento e identificación de activos.
- Los valores de sensores BLE y los eventos de accesorios pueden mostrarse como puntos de telemetría y vincularse a las reglas de alerta de Plaspy.
- Datos de choques e incidentes reenviados a Plaspy permiten la reconstrucción de eventos, notificaciones y reproducción histórica.
- Plaspy acepta conexiones de dispositivos mediante opciones de transporte estándar; la plataforma empareja automáticamente el protocolo del rastreador para una ingestión de datos sin fricciones.

## Casos de uso típicos

- Gestión de flotas con seguimiento en vivo, reproducción de rutas y monitoreo del comportamiento del conductor para mejorar la eficiencia operativa.
- Flujos de trabajo de seguros basados en uso donde el cuentakilómetros, el VIN y la telemetría de eventos respaldan la validación de pólizas y la evaluación de riesgo.
- Diagnóstico vehicular y programación de mantenimiento impulsados por DTC, nivel de combustible y datos de odómetro.
- Prevención de robo y recuperación mediante alertas de ignición y desconexión de alimentación combinadas con seguimiento en vivo.
- Monitoreo de cadena de frío o condición de activos usando sensores BLE de temperatura y puertas integrados en reglas telemáticas.
- Reconstrucción de incidentes e informes de seguridad con datos de detección de choques y reproducción de eventos.

## Notas sobre disponibilidad de funciones

- Las diferencias en firmware pueden habilitar o limitar funciones específicas; el estado de actualización puede afectar campos de telemetría y la frecuencia de reporte.
- Las revisiones de hardware y las variantes regionales celulares pueden cambiar las bandas soportadas y el comportamiento de fallback; confirme la compatibilidad regional para cobertura celular.
- El soporte de protocolos OBDII puede variar entre marcas y modelos de vehículos; algunos parámetros CAN pueden no estar disponibles en todos los vehículos.
- La compatibilidad con accesorios BLE y el soporte de sensores dependen del firmware del fabricante y de los perfiles de los accesorios.
- Consulte la documentación del fabricante y las notas de la versión para obtener las especificaciones, certificaciones y actualizaciones planificadas más recientes.

## Por qué usar Plaspy con estas funciones

Usar el TorchX 110 con Plaspy ofrece a las organizaciones una vía sencilla del hardware a la visibilidad operativa. El factor de forma OBDII reduce el tiempo de instalación en flotas grandes, mientras que la telemetría CAN y el seguimiento a alta frecuencia proporcionan a Plaspy las entradas necesarias para monitoreo, flujos de trabajo de mantenimiento y análisis basados en uso. El soporte de sensores BLE y el almacenamiento en búfer offline amplían los casos de uso telemático, como el monitoreo de la cadena de frío y la recolección resiliente de datos durante las brechas de conectividad.

Para obtener más información sobre cómo Plaspy admite dispositivos TopFly y la telemática de flotas, visite https://www.plaspy.com. Para las especificaciones de dispositivo más actuales, notas de firmware y detalles del fabricante, verifique la información en el sitio de TopFly https://www.topflytech.com/ ya que las funciones y los detalles de implementación pueden cambiar con el tiempo.
