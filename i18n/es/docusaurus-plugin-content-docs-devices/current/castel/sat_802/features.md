---
slug: /castel/sat_802/features
id: sat_802-features
sidebar_label: Features
title: Castel - SAT-802 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador GPS Castel SAT-802 y su integración con Plaspy para monitoreo global
keywords:
  - Castel SAT-802
  - características Castel SAT-802
  - rastreador GPS SAT-802
  - rastreador GPS Castel
  - rastreador Iridium SBD GPRS
  - rastreador de doble módulo
  - seguimiento global de activos
  - rastreo de vehículos
  - monitoreo de flotas Plaspy
  - rastreador compatible con Plaspy
---

# Castel - SAT-802: Características

Esta página ofrece una descripción pública y orientada a funcionalidades del Castel SAT-802 y cómo sus capacidades se integran con Plaspy. Está dirigida a operadores de flotas, administradores de activos y revisores técnicos para entender de forma práctica qué puede hacer este rastreador y cómo Plaspy presenta y utiliza esa información.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Antes del despliegue, usted debe verificar las funciones específicas del equipo, los detalles de firmware y los requisitos de instalación en la documentación oficial del fabricante.

## Resumen de características

El Castel SAT-802 es un rastreador GPS de doble módulo que combina mensajería satelital Iridium SBD con conectividad celular GPRS para ofrecer seguimiento en áreas amplias y casi global. Está pensado para activos de alto valor y flotas que operan en entornos mixtos donde la visibilidad continua es importante, e incluye modos integrados para reducir el consumo medio de energía en despliegues prolongados.

- Vías de comunicación duales mediante Iridium SBD y GPRS para reportes desde ubicaciones remotas y zonas urbanas
- Selección inteligente de canal que prioriza GSM cuando está disponible y cambia a Iridium para cobertura global
- Posicionamiento GPS para reportes de ubicación y visibilidad de rutas en Plaspy
- Amplia compatibilidad de tensión de entrada para uso en distintos vehículos y tipos de activos
- Modos de ahorro de energía para reducir la corriente media durante espera o periodos de baja actividad
- Rangos de operación y almacenamiento robustos para muchos despliegues de campo

## Funciones principales del Castel - SAT-802

- Soporte de mensajería satelital Iridium SBD para cobertura en áreas sin servicio celular
- Comunicación celular GPRS para reportes de menor latencia donde GSM esté disponible
- Arquitectura de doble módulo con transmisión de datos bidireccional transparente entre canales
- Posicionamiento GPS para fijar ubicaciones y seguimiento de movimiento
- Selección inteligente de canal con prioridad a GSM cuando ambos redes están disponibles
- Amplio rango de tensión de operación de 9V a 36V DC para opciones de instalación flexibles
- Modos de ahorro de energía y rangos de corriente de trabajo documentados para mejor gestión de energía
- Calificaciones ambientales incluyendo rango de temperatura de operación y nivel de protección IP30

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y normaliza los datos de ubicación y estado entrantes para que los equipos mantengan conciencia continua de activos que usan enlaces satelitales o celulares. La plataforma trata al SAT-802 como un dispositivo compatible estándar, a la vez que expone los resultados prácticos de su conectividad dual y sus funciones de gestión de energía.

- Los puntos de ubicación y el movimiento se muestran en Plaspy mediante las fijaciones GPS enviadas por el dispositivo
- Plaspy muestra el estado de conectividad y puede indicar si las actualizaciones llegaron por celular o satélite cuando los mensajes del dispositivo incluyen ese contexto
- La capacidad de transmisión bidireccional del SAT-802 permite comandos remotos o actualizaciones de configuración según lo soporten el dispositivo y la plataforma
- El comportamiento de ahorro de energía afecta la cadencia de reportes y puede reflejarse en Plaspy como periodos de telemetría reducida
- Plaspy detecta automáticamente protocolos comunes de rastreadores para simplificar la puesta en línea de unidades SAT-802

## Casos de uso típicos

- Seguimiento de activos móviles de alto valor en áreas con cobertura mixta donde es necesario respaldo satelital
- Monitoreo de vehículos de flota que operan tanto dentro de áreas con cobertura celular como en regiones remotas
- Despliegues de larga duración donde los modos de ahorro de energía extienden la vida operativa entre mantenimientos
- Operaciones de flota mixtas que requieren una vista unificada que incluya activos reportados por satélite y por celular
- Recuperación de activos y seguimiento de la cadena de custodia donde la cobertura global reduce zonas sin visibilidad

## Notas sobre disponibilidad de funciones

- La funcionalidad y la telemetría disponible pueden cambiar entre versiones de firmware y revisiones de hardware; confirme los detalles con el fabricante
- Factores de instalación como la colocación de antenas, el cableado de energía y la integración en el vehículo afectan el rendimiento en campo
- La disponibilidad celular regional y la latencia en mensajes satelitales varían según la geografía y las condiciones del servicio
- La protección IP30 indica protección limitada contra ingreso de partículas; evalúe la carcasa y el montaje para entornos hostiles
- Las cifras de consumo de energía y los modos de ahorro afectarán los intervalos de reporte y deben probarse en su perfil de despliegue

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el Castel SAT-802 centraliza la información de ubicación y estado de activos que pueden alternar entre conectividad GPRS e Iridium SBD. Para organizaciones que necesitan una imagen operativa continua, Plaspy ayuda a consolidar flujos de conectividad mixtos en una sola interfaz para monitoreo, revisión histórica y toma de decisiones operativas.

Si desea saber más sobre cómo Plaspy puede presentar y gestionar datos de dispositivos como el SAT-802, visite https://www.plaspy.com. Para especificaciones técnicas más actuales, notas de firmware y orientación del fabricante, consulte siempre la documentación oficial de Castel en http://www.castelecom.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
