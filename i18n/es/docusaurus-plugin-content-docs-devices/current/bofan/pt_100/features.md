---
slug: /bofan/pt_100/features
id: pt_100-features
sidebar_label: Features
title: Bofan - PT-100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador GPS Bofan PT-100 y su integración con Plaspy para monitoreo de vehículos
keywords:
  - Funciones Bofan PT-100
  - Rastreador GPS Bofan PT-100
  - Rastreador GPRS PT-100
  - Seguimiento SMS PT-100
  - Rastreador vehicular PT-100
  - Botón SOS PT-100
  - Alertas geocerca PT-100
  - Rastreadores compatibles con Plaspy
  - Registro de posiciones PT-100
  - Seguimiento vehicular Bofan
---

# Bofan - Características del PT-100

Esta página resume el contexto público de funcionalidades del Bofan PT-100 y cómo esas capacidades se utilizan en Plaspy. Se enfoca en información práctica y no sensible sobre qué puede reportar el PT-100 y cómo esos reportes se reflejan en los flujos de monitoreo de vehículos y flotas dentro de Plaspy.

La disponibilidad exacta de funciones para una unidad PT-100 concreta puede variar según la versión de firmware, la revisión de hardware, la instalación y el cableado, así como la implementación del fabricante. Use esta página como referencia general y consulte al fabricante para detalles específicos y actualizados del dispositivo.

## Resumen de funciones

El PT-100 es un rastreador GPS económico para vehículos diseñado para ofrecer visibilidad de ubicación en tiempo real y en historial, junto con un conjunto de alertas y opciones de entrada/salida configurables. Su reporte mixto por SMS y GPRS, además del registro local, brinda flexibilidad para vehículos individuales o flotas pequeñas donde el presupuesto y la simplicidad de monitoreo son prioridades.

- Reporte de ubicación en tiempo real mediante GPRS o SMS para seguimiento en vivo y consultas remotas
- Reportes por intervalo de tiempo para actualizaciones periódicas de posición
- Almacenamiento de posiciones a bordo con capacidad para más de 3,000 waypoints para reproducción histórica
- Botón SOS para enviar alertas de emergencia a contactos designados
- Alertas configurables, incluyendo geocerca, batería baja, corte de alimentación y exceso de velocidad
- Opciones de E/S con dos entradas digitales y una salida, además de función de corte de motor para integrar con sistemas vehiculares

## Funciones principales del Bofan - PT-100

- Reporte de ubicación GPS para vehículos mediante comunicación GPRS y SMS
- Reportes periódicos configurables por intervalo de tiempo
- Almacenamiento histórico a bordo con capacidad para más de 3,000 puntos de posicionamiento
- Botón SOS dedicado para activar alertas de emergencia
- Alertas de geocerca para notificar cuando un vehículo entra o sale de un área definida
- Alertas relacionadas con la alimentación, como batería baja y corte de alimentación externa
- Alertas por exceso de velocidad para señalar cuando se supera un umbral preestablecido
- Dos entradas digitales y una salida disponibles para sensores y controles básicos, con soporte de corte de motor cuando está instalado y configurado

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y normaliza los reportes del PT-100 para que la ubicación, las alertas y el historial de eventos sean visibles en un único entorno de monitoreo. La plataforma de Plaspy detecta protocolos compatibles del rastreador y mapea los mensajes entrantes en registros de posición del dispositivo y eventos de alerta para uso operativo.

- Las actualizaciones de ubicación en vivo y periódicas aparecen en los mapas de Plaspy para visibilidad en tiempo real
- Los waypoints almacenados y subidos por el dispositivo permiten ver el historial de rutas y reproducir recorridos dentro de Plaspy
- Los eventos SOS y otras alertas como geocerca, exceso de velocidad, batería baja y corte de alimentación se muestran como notificaciones y entradas en el registro de eventos
- El estado de E/S y las activaciones de salida pueden presentarse como entradas de dispositivo y eventos de control cuando la plataforma lo soporta
- Los intervalos de reporte y los umbrales de alerta configurados en el dispositivo se reflejan en Plaspy como la cadencia y el tipo de eventos que usted verá

## Casos de uso típicos

- Rastreo básico de vehículos para autos particulares o activos individuales
- Monitoreo de pequeñas flotas con actualizaciones programadas y historial de rutas
- Alertas de emergencia con el botón SOS para la seguridad del conductor
- Geocercas para detectar movimientos no autorizados o monitorear actividad por zonas
- Monitoreo de exceso de velocidad para apoyar políticas de conducción segura
- Inmovilización remota en caso de robo o uso no autorizado cuando el corte de motor está configurado

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen de la versión de firmware del dispositivo y pueden variar entre revisiones de hardware
- El corte de motor y el control de salidas requieren una instalación y cableado correctos y pueden estar sujetos a restricciones legales locales
- El comportamiento por SMS frente a GPRS puede variar según el operador y el soporte celular regional
- Ciertas alertas, como geocerca o umbrales de exceso de velocidad, pueden requerir configuración posterior a la instalación
- Confirme siempre la presencia de funciones y el comportamiento exacto de su unidad con la documentación del fabricante

## Por qué usar Plaspy con estas funciones

Usar el PT-100 con Plaspy ofrece una vía sencilla para centralizar la ubicación de vehículos, alertas e historial. Plaspy consolida los reportes entrantes en una vista unificada para que los equipos operativos puedan monitorear posiciones en vivo, revisar rutas históricas y recibir notificaciones de eventos del rastreador sin tener que procesar mensajes crudos del dispositivo.

Para obtener más información sobre cómo Plaspy trabaja con rastreadores compatibles visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles más recientes del PT-100 con el fabricante en https://www.bofancloud.com/
