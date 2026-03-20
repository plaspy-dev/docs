---
slug: /autofon/d/features
id: d-features
sidebar_label: Features
title: AutoFon - D-Маяк Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del rastreador AutoFon D‑Маяк y compatibilidad con Plaspy para rastreo, alertas y telemetría en tiempo real
keywords:
  - AutoFon D-Маяк
  - AutoFon D Beacon
  - funciones D-Маяк
  - rastreador GPS AutoFon
  - compatibilidad D-Маяк con Plaspy
  - baliza GPS encubierta
  - rastreador de larga duración
  - buffer tipo caja negra
  - rastreador GPS GPRS
  - rastreo de vehículos con Plaspy
---

# Características de AutoFon - D‑Маяк

Esta página resume el contexto público de funcionalidades para usar el rastreador AutoFon D‑Маяк con Plaspy. Destaca las capacidades del dispositivo relevantes para monitoreo, generación de alertas y telemetría histórica en Plaspy, y explica cómo se reflejan normalmente esas capacidades en la plataforma.

La disponibilidad exacta de funciones puede variar según la versión de firmware, revisión de hardware, tipo de instalación e implementación del fabricante. Considere los puntos que siguen como una visión práctica basada en la descripción del dispositivo y consulte la documentación del fabricante para detalles específicos y actualizados del equipo.

## Visión general de funciones

El AutoFon D‑Маяк es una baliza GSM/GLONASS+GPS autónoma y compacta, diseñada para instalaciones discretas y despliegues antirrobo de larga duración. Su combinación de larga autonomía, navegación multiconstelación, reportes flexibles y detección de eventos lo hace apropiado para protección remota de activos y recuperación sigilosa de vehículos cuando se integra con una plataforma de monitoreo como Plaspy.

- Operación autónoma prolongada con celdas de batería reemplazables para despliegues encubiertos extendidos
- Posicionamiento GLONASS más GPS para mejorar el rendimiento sobre dispositivos de una sola constelación
- Monitoreo por GPRS con fallback a SMS para entrega persistente de ubicación y eventos
- Detección de eventos basada en acelerómetro digital y botón SOS para alertas inmediatas
- Gran buffer tipo caja negra para almacenar paquetes GPRS no enviados y preservar la telemetría durante cortes
- Control auxiliar, monitoreo de audio y etiqueta de presencia del propietario para mayor conciencia situacional

## Funciones principales del AutoFon - D‑Маяк

- Funcionamiento autónomo diseñado para larga duración con dos baterías CR123A y soporte para opciones de alimentación externa
- Navegación combinada GLONASS y GPS para mayor precisión posicional
- Reportes en tiempo real sobre GPRS junto con modos configurables de reporte por SMS
- Acelerómetro digital que detecta inicio de movimiento, impactos, vuelcos y eventos similares
- Microbotón SOS dedicado y entrada de alarma externa para señalización de eventos urgentes
- Canal auxiliar universal para control remoto de sistemas del vehículo cuando está configurado
- Buffer tipo caja negra integrado capaz de retener gran cantidad de paquetes GPRS pendientes
- Micrófono incorporado y etiqueta RF de presencia del propietario para ampliar la telemetría más allá de la posición
- Capacidad de actualización remota de firmware por GPRS y comportamiento de reporte configurable

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe mensajes de ubicación y eventos del D‑Маяк y los presenta en mapas, líneas de tiempo y canales de alerta para que los operadores puedan monitorear activos en tiempo real. El dispositivo puede configurarse para reportar por GPRS con fallback por SMS y Plaspy detecta automáticamente el protocolo del rastreador para una integración sencilla.

- Ubicación y telemetría del dispositivo aparecen en los mapas de Plaspy y en la reproducción histórica para revisión de incidentes
- Eventos SOS y de entrada de alarma generan alertas inmediatas y entradas en la línea de tiempo para la respuesta del operador
- El buffer tipo caja negra sube los paquetes almacenados a Plaspy cuando se restablece la conectividad, preservando la continuidad
- Plaspy puede reenviar comandos remotos al dispositivo para accionar el canal auxiliar cuando esté permitido
- Monitoreo de audio y estado de la etiqueta RF de presencia del propietario están disponibles como telemetría suplementaria en la plataforma
- El D‑Маяк reporta a la infraestructura de Plaspy y la plataforma soporta modos de transporte comunes, por lo que la detección de protocolo y el enrutamiento se manejan automáticamente

## Casos de uso típicos

- Antirrobo encubierto de vehículos y recuperación rápida cuando la instalación discreta y la larga duración de batería son críticas
- Rastreo de carga valiosa y contenedores donde el almacenamiento en buffer y el reporte persistente protegen la telemetría
- Vigilancia de activos remotos en lugares sin alimentación eléctrica confiable, como kioscos o almacenes estacionales
- Rastreo discreto de personas o animales cuando se requiere una baliza compacta y de larga duración
- Uso suplementario en gestión de flotas donde unidades ocultas proporcionan telemetría de ubicación y eventos por activo
- Investigación de incidentes y respuesta de seguridad mediante registros de audio y eventos del acelerómetro

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones y el comportamiento exacto dependen de la versión de firmware y la revisión de hardware del fabricante
- El tipo de instalación y el cableado o la presencia de alimentación externa pueden habilitar o deshabilitar ciertas capacidades
- Variantes regionales de radio y regulaciones pueden cambiar las bandas GSM o las opciones de reporte disponibles
- La capacidad de actualización remota de firmware puede estar limitada por la disponibilidad de red o la configuración
- Revise las notas de lanzamiento del fabricante y la configuración del dispositivo para confirmar los reportes y comandos soportados

## Por qué usar Plaspy con estas funciones

Usar el AutoFon D‑Маяк con Plaspy ofrece a las organizaciones una forma práctica de convertir datos de una baliza GPS de larga duración y discreta en visibilidad operativa, alertas automatizadas y telemetría histórica. Plaspy centraliza las corrientes entrantes de ubicación y eventos para que los equipos puedan monitorear movimiento, responder a alarmas y recuperar telemetría almacenada tras cortes sin necesidad de recuperar paquetes manualmente.

Si desea conocer más sobre cómo Plaspy soporta rastreadores como el AutoFon D‑Маяк y explorar las capacidades de la plataforma, visite https://www.plaspy.com. Para las especificaciones específicas del dispositivo, notas de firmware y orientación de instalación más actualizadas, verifique la información con el fabricante en https://www.autofon.ru/.
