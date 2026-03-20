---
slug: /autofon/se_beacon/features
id: se_beacon-features
sidebar_label: Features
title: AutoFon - SE+ Beacon Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del AutoFon SE+ Beacon y su integración con Plaspy para seguimiento discreto a largo plazo
keywords:
  - Funciones AutoFon SE+ Beacon
  - AutoFon SE+ Beacon rastreador GPS
  - Compatibilidad SE+ Beacon Plaspy
  - Funciones rastreador GPS AutoFon
  - Rastreo encubierto de vehículos
  - Rastreador GPS de larga autonomía
  - Rastreador con detección de impactos
  - Rastreador con detección de inclinación
  - Rastreador con canal auxiliar
  - Rastreador GPRS con respaldo SMS
---

# AutoFon - SE+ Beacon: funciones

Esta página ofrece una vista pública de las funciones del AutoFon SE+ Beacon como rastreador GPS compatible con Plaspy. Aquí se describen las capacidades principales que puede esperar al integrar este modelo con Plaspy y se explica cómo se utilizan habitualmente las señales del dispositivo en la plataforma para monitoreo y alertas.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y las opciones de configuración del fabricante. Para planificar despliegues, utilice este resumen junto con la documentación del fabricante y las notas de firmware de su unidad para confirmar qué funciones están activas en un equipo específico.

## Descripción general de funciones

El SE+ Beacon es un rastreador compacto y de perfil bajo diseñado para proporcionar informes de posición fiables y alertas basadas en eventos, optimizando al mismo tiempo la duración de batería. Combina posicionamiento GNSS con reporte por GPRS y respaldo por SMS, además de sensores de movimiento e impacto, lo que lo hace adecuado para tareas de monitoreo discreto y prolongado.

- Posicionamiento GNSS con GPS y GLONASS para fijaciones de ubicación confiables.
- GPRS como canal principal de reporte y SMS como respaldo para alertas y notificaciones.
- Funcionamiento prolongado con dos pilas CR123A y opción de alimentación externa para ampliar la autonomía.
- Detección de movimiento, inclinación e impacto para reportes basados en eventos y alertas por robo o seguridad.
- Gran búfer interno para almacenar datos no enviados durante interrupciones de red, de modo que Plaspy reciba los paquetes históricos cuando se restablezca la conectividad.
- Canal auxiliar y entrada de alarma para acciones remotas y control básico de dispositivos externos cuando está configurado.

## Funciones principales del AutoFon - SE+ Beacon

- Posicionamiento GPS + GLONASS mediante el módulo GNSS del dispositivo para actualizaciones de ubicación precisas.
- Reporte de datos por GPRS con respaldo por SMS para garantizar la entrega de alertas cuando la conectividad de datos es limitada.
- Detección de movimiento, detección de inclinación (incluidos eventos >90°) y detección de impacto/choque para monitoreo basado en eventos.
- Botón SOS micro para generar alertas inmediatas que pueden aparecer en Plaspy.
- Canal auxiliar y entrada de alarma para activar o controlar dispositivos externos cuando la instalación lo permite.
- Micrófono integrado para monitoreo de audio remoto cuando lo habilite el instalador o la configuración.
- Gran búfer offline tipo "caja negra" (aprox. 98,000 paquetes GPRS) para conservar telemetría mientras está desconectado.
- Capacidad de actualización remota de firmware por aire para mantener los dispositivos desplegados al día.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere posiciones GNSS y telemetría de eventos del SE+ Beacon para ofrecer seguimiento en tiempo real, reproducción histórica y alertas. La plataforma asigna los reportes del dispositivo a paneles, líneas de tiempo de eventos y notificaciones para que los operadores mantengan la conciencia situacional.

- Actualizaciones de ubicación en tiempo real y seguimiento en el mapa en Plaspy cuando el dispositivo reporta vía GPRS.
- Alertas de eventos (inicio/parada de movimiento, eventos de inclinación, impacto y SOS) que se integran en las vistas de alertas y la línea de tiempo de Plaspy.
- La entrega del búfer offline garantiza que Plaspy reciba paquetes de posición y eventos encolados tras pérdidas temporales de conectividad.
- Los eventos del canal auxiliar y la entrada de alarma están disponibles en Plaspy para flujos de trabajo operativos y acciones remotas si están configurados y autorizados.
- Plaspy detecta automáticamente muchos protocolos de rastreadores y acepta reportes hacia su dominio de servidor; los dispositivos pueden configurarse para usar UDP o TCP en el mismo puerto de Plaspy cuando sea necesario.

## Casos de uso típicos

- Monitoreo encubierto y prolongado de vehículos donde la baja detectabilidad y la larga autonomía son prioritarias.
- Seguimiento de activos como remolques, contenedores o mercancías en almacenamiento con alertas por movimiento e impactos durante tránsito o guarda.
- Monitoreo remoto de objetos estacionarios como cabañas, portones o equipos que solo requieren registros ocasionales.
- Localización personal o de mascotas combinada con la capacidad de alerta SOS para señalización de emergencias simple.
- Supervisión de pequeños equipos o flotas de remolques cuando la telemetría discreta y las alertas por eventos son suficientes sin hardware telemático completo.

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen del firmware y la revisión de hardware; no todas las unidades pueden soportar cada capacidad listada.
- Las elecciones de instalación y el cableado (por ejemplo, conectar alimentación externa o líneas de alarma) afectan qué entradas y funciones auxiliares están disponibles.
- Variantes regionales o diferencias regulatorias pueden influir en el soporte de bandas GSM y el comportamiento de entrega de mensajes.
- El micrófono y el monitoreo de audio remoto dependen de cómo esté configurado el dispositivo y de las normas locales de privacidad; habilítelos solo donde esté permitido.
- Confirme siempre las funciones soportadas para un número de serie y versión de firmware específicos con la documentación oficial del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el SE+ Beacon con Plaspy ofrece a las organizaciones visibilidad práctica de ubicaciones y alertas basadas en eventos sin la huella de equipos telemáticos más grandes. Plaspy presenta historial de posiciones, líneas de tiempo de alertas y mapas operativos que facilitan la respuesta a señales de movimiento, inclinación, impacto y SOS de este rastreador compacto. El búfer offline del dispositivo y su reporte por doble vía ayudan a preservar la continuidad de la telemetría, lo que favorece la reconstrucción fiable de incidentes y el monitoreo continuo.

Learn more about how Plaspy can manage devices like the AutoFon SE+ Beacon on the Plaspy website https://www.plaspy.com. Device features, firmware behavior and manufacturer details can change over time, so please verify the most current device specifications and configuration guidance on the official manufacturer site https://www.autofon.ru/.
