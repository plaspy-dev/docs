---
slug: /gotop/g23/features
id: g23-features
sidebar_label: Features
title: GOTOP - G23 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS GOTOP G23 y su integración con Plaspy para seguimiento vehicular y antirrobo
keywords:
  - características GOTOP G23
  - rastreador GPS GOTOP G23
  - capacidades GOTOP G23
  - GOTOP G23 Plaspy
  - características rastreador G23
  - seguimiento vehicular GOTOP G23
  - rastreador compatible con Plaspy
  - mini rastreador cable G23
  - G23 posicionamiento híbrido
  - inmovilizador GOTOP G23
---

# GOTOP - G23: Características

Esta página ofrece un panorama público de las funciones del rastreador mini wire GOTOP G23 y de cómo sus capacidades se integran con Plaspy para el seguimiento centralizado y la supervisión de flotas. Resume el comportamiento práctico y no sensible del dispositivo, y explica qué datos y alarmas puede reportar el G23 a Plaspy para monitoreo en vivo, reproducción histórica y alertas operativas.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el modelo regional y el método de instalación. Cuando el G23 soporta una función (por ejemplo detección ACC, corte remoto de alimentación/combustible, posicionamiento híbrido GNSS o alertas de batería de respaldo), Plaspy puede recibir y utilizar esos informes, aunque las capacidades finales dependen de la unidad específica y de la implementación del fabricante.

## Resumen de características

El GOTOP G23 es un rastreador compacto para vehículos diseñado para instalaciones discretas donde se requiere ubicación confiable y telemetría básica. Combina posicionamiento híbrido con entradas de vehículo y un diseño de bajo consumo para ofrecer monitoreo continuo en autos, motocicletas, bicicletas eléctricas y vehículos comerciales ligeros.

- Posicionamiento híbrido que utiliza GPS, BeiDou y LBS celular para mejorar la disponibilidad de ubicación y ofrecer aproximadamente 5 metros de precisión en condiciones típicas.
- Entradas del vehículo que incluyen detección de ignición ACC e informes de eventos por arranques no autorizados o para monitorear el estado del motor.
- Función de corte remoto de alimentación o combustible y alarma por apagado cuando la instalación y la normativa local lo permiten, útil para intervenciones tipo inmovilizador.
- Diseño de bajo consumo con amplio rango de entrada DC (9–95 V) y batería interna de respaldo para reportar eventos offline o de manipulación.
- Factor de forma mini wire compacto con antenas internas para montaje discreto en el vehículo.

## Características principales del GOTOP - G23

- Posicionamiento GNSS híbrido: GPS + BeiDou + LBS para mayor disponibilidad de fijado de posición y reproducción de rutas práctica.
- Conectividad 2G GSM para reportar ubicación y telemetría de eventos a un servidor.
- Detección de ignición (ACC) para informar cambios en el estado del motor o la llave.
- Salida de corte remoto de alimentación/combustible que puede usarse como función de inmovilizador cuando está instalada y controlada correctamente.
- Alarma por apagado y batería de respaldo de 80 mAh para enviar notificaciones de pérdida de energía primaria o manipulación.
- Detección de exceso de velocidad y alertas por vibración/movimiento para reportes basados en eventos.
- Amplio rango de entrada DC (9–95 V) que facilita la instalación en motocicletas, autos, e‑bikes y vehículos comerciales ligeros.
- Carcasa ABS compacta con antenas internas para instalaciones de perfil bajo y ocultas.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere informes de posición, eventos de alarma y marcadores de estado de rastreadores compatibles como el G23 para que los operadores de flota puedan monitorear vehículos en tiempo real y reaccionar ante incidentes. Plaspy detecta automáticamente protocolos soportados y mapea los códigos de evento estándar del G23 a paneles y notificaciones.

- Las posiciones GNSS y LBS en vivo aparecen en los mapas de Plaspy para seguimiento en tiempo real y reproducción de rutas.
- Las alertas de ignición ACC y los arranques ilegales se muestran como eventos para que usted pueda supervisar actividad de motor no autorizada.
- Las alarmas por apagado y las notificaciones de batería de respaldo alimentan reglas de alerta en Plaspy para detección de manipulación y pérdida de energía primaria.
- Las alarmas de exceso de velocidad y las de vibración/movimiento pueden activar notificaciones, informes o flujos de trabajo automatizados dentro de Plaspy.
- La capacidad de corte remoto de alimentación/combustible del dispositivo puede integrarse en flujos de control de Plaspy cuando las normas locales y el cableado lo permiten.
- La configuración del dispositivo y el enrutamiento de datos pueden apuntar al endpoint de ingestión de Plaspy; Plaspy soporta detección automática de protocolo y métodos estándar de reporte UDP o TCP.

## Casos de uso típicos

- Gestión de flotas para taxis, vehículos de reparto y flotas mixtas que requieren visibilidad continua de ubicación y eventos.
- Monitoreo antirrobo y flujos de trabajo de inmovilización utilizando corte de alimentación y alarmas por apagado.
- Rastreo de motocicletas y e‑bikes donde se necesita tamaño compacto, antenas internas y amplia tolerancia de voltaje.
- Flotas de alquiler y operaciones de car sharing que requieren monitoreo del estado de ignición y reproducción histórica.
- Supervisión de vehículos comerciales ligeros incluyendo alertas de exceso de velocidad y movimiento para apoyar seguridad y cumplimiento.
- Telemetría para operadores que precisan un rastreador discreto para minimizar la visibilidad sin perder capacidad de monitoreo.

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones puede depender de la versión de firmware y de la revisión exacta de hardware suministrada por el fabricante.
- La cobertura 2G GSM regional y el soporte de bandas afectan la conectividad real; verifique la disponibilidad de red local antes del despliegue.
- Algunas funciones requieren cableado e instalación correctos (por ejemplo detección ACC y corte remoto); los detalles de instalación influyen en el comportamiento.
- El G23 se configura mediante su interfaz UART‑TTL para ajustes avanzados; la gestión por web o FOTA no está especificada en la documentación del dispositivo.
- La documentación del fabricante y las diferencias entre modelos regionales pueden cambiar detalles operativos; siempre verifique la unidad que reciba contra las especificaciones oficiales.

## Por qué usar Plaspy con estas funciones

Vincular el GOTOP G23 con Plaspy ofrece a los operadores una vía sencilla para convertir la telemetría de ubicación y eventos a nivel de dispositivo en visibilidad operativa accionable. Plaspy ingiere posiciones GNSS y LBS y mapea las alarmas del G23 a paneles, alertas e informes para que los equipos puedan monitorear vehículos, responder a eventos de manipulación y gestionar acciones de inmovilización donde esté permitido.

Para saber más sobre Plaspy y cómo la plataforma puede centralizar el seguimiento de dispositivos como el GOTOP G23 visite https://www.plaspy.com. Para detalles técnicos específicos y comportamiento de firmware más recientes consulte la documentación oficial de GOTOP en https://www.gotop.cc/ ya que las características e implementaciones del fabricante pueden cambiar con el tiempo.
