---
slug: /teltonika/fmc130/features
id: fmc130-features
sidebar_label: Features
title: Teltonika - FMC130 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador Teltonika FMC130 y su integración con Plaspy para gestión de flotas
keywords:
  - Características del Teltonika FMC130
  - Rastreador GPS Teltonika FMC130
  - Compatibilidad FMC130 Plaspy
  - Monitoreo de combustible FMC130
  - Adaptador CAN FMC130
  - Bluetooth LE FMC130
  - Inmovilizador FMC130
  - Batería interna FMC130
  - Seguimiento de flotas FMC130
  - Rastreador GPS FMC130
---

# Teltonika - Funciones del FMC130

Esta página ofrece una visión pública y no sensible del rastreador Teltonika FMC130 y de cómo sus funciones documentadas se utilizan con Plaspy para la gestión de flotas y la telemetría. Se centra en capacidades prácticas y el valor operativo cuando el FMC130 está integrado con la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, la selección de accesorios, el tipo de instalación y la implementación del fabricante. Para límites técnicos específicos del dispositivo y el comportamiento del firmware más reciente, consulte la documentación oficial de Teltonika.

## Resumen de funciones

El FMC130 es un rastreador vehicular orientado a la telemetría, diseñado para ofrecer visibilidad continua y control operativo. Cuando usted lo usa con Plaspy, proporciona reporte de ubicación, monitoreo de pulsos de combustible, telemetría del bus del vehículo a través de un adaptador y soporte para sensores externos que informan condiciones ambientales y del cargamento.

- Conectividad celular 4G LTE Cat 1 con conmutación automática a 2G para cobertura regional más amplia
- Batería de respaldo interna para mantener el rastreo y las alertas durante cortes temporales de energía
- Entrada de impulso dedicada para lecturas de medidores de flujo de combustible basados en pulsos
- Compatibilidad con adaptador CAN para acceder a parámetros del vehículo cuando se instala el adaptador
- Soporte Bluetooth Low Energy para sensores y balizas externas como dispositivos de temperatura y movimiento

## Funciones principales del Teltonika - FMC130

- Conectividad celular diseñada para subir posiciones y telemetría de forma fiable en entornos móviles
- Batería interna de respaldo que mantiene los reportes básicos durante interrupciones de energía
- Entrada de impulso dedicada a medidores de flujo de combustible basados en pulsos para un monitoreo preciso
- Soporte para adaptador de bus CAN para leer señales y telemetría del vehículo cuando estén disponibles
- Capacidad Bluetooth Low Energy (BLE) para emparejar sensores y balizas externas
- Entradas y salidas cableadas flexibles para integrarse con el encendido y otras señales del vehículo
- Control remoto de bloqueo de motor e inmovilizador soportado por el dispositivo y utilizable desde plataformas de gestión
- Gestión remota de firmware y configuración mediante Teltonika FOTA WEB para actualizaciones a gran escala en flotas

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y normaliza la telemetría entrante del FMC130 para que los operadores de flota puedan monitorear la ubicación en tiempo real, revisar recorridos históricos y actuar sobre eventos. Plaspy detecta automáticamente el protocolo del rastreador y acepta conexiones del dispositivo para ofrecer visibilidad y controles centralizados.

- Ubicación en tiempo real y reproducción histórica visibles en el panel de Plaspy para supervisión operativa
- Datos de pulso de combustible desde la entrada de impulso reportados en Plaspy para apoyar análisis de consumo y detección de pérdidas
- Parámetros del vehículo obtenidos vía adaptador CAN (cuando estén presentes) mostrados como telemetría en Plaspy para mantenimiento y seguimiento de rendimiento
- Datos de sensores BLE reenviados a Plaspy para monitoreo de condiciones de carga como temperatura o eventos de movimiento
- Acciones remotas de inmovilización y bloqueo de motor disponibles desde Plaspy para respuesta anti robo y control de flota
- Los dispositivos pueden configurarse para comunicarse con Plaspy usando las opciones estándar de conexión de dispositivos de la plataforma y se detectan automáticamente

## Casos de uso típicos

- Seguimiento y despacho de flotas donde la ubicación en tiempo real y las rutas históricas guían la asignación y la programación
- Monitoreo de combustible y detección de sustracciones usando la entrada de impulso para capturar pulsos de flujo de combustible
- Diagnóstico del vehículo y planificación de mantenimiento utilizando telemetría del adaptador CAN para rastrear métricas clave
- Monitoreo de condiciones de la carga, por ejemplo cargas refrigeradas, usando sensores Bluetooth para temperatura y movimiento
- Antirrobo e inmovilización remota para controlar el acceso al vehículo desde una consola central
- Despliegues a gran escala de firmware y configuración en la flota mediante herramientas de gestión remota

## Notas sobre disponibilidad de funciones

- Algunas funciones requieren versiones específicas de firmware u opcionales como un adaptador CAN o sensores BLE externos
- Revisiones de hardware y variantes regionales pueden afectar las bandas celulares soportadas y las interfaces disponibles
- El tipo de instalación y el cableado pueden influir en qué entradas y salidas cableadas están disponibles para su uso
- El inmovilizador remoto y el bloqueo de motor dependen de una integración correcta con el vehículo y de requisitos legales o de seguridad locales
- Verifique siempre las funciones soportadas para un número de serie y nivel de firmware específicos con la documentación del fabricante

## Por qué usar Plaspy con estas funciones

Usar el FMC130 con Plaspy brinda a las organizaciones una vista consolidada de la ubicación, la telemetría de combustible y las señales del vehículo en toda su flota. La plataforma de Plaspy transforma la telemetría del dispositivo en información operativa útil, como rastreo en vivo, alertas por eventos e informes históricos, para respaldar las operaciones diarias de la flota y la toma de decisiones.

Si desea conocer más sobre cómo Plaspy puede usar el FMC130 en su flota, visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, notas de firmware y opciones de accesorios más actuales, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/.
