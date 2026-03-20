---
slug: /neomatica/adm700_3g/features
id: adm700_3g-features
sidebar_label: Features
title: Neomatica - ADM700 3G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las capacidades del Neomatica ADM700 3G y su integración con Plaspy para rastreo y telemetría de flotas
keywords:
  - Neomatica ADM700 3G
  - Características ADM700 3G
  - Rastreador GPS Neomatica
  - ADM700 3G Plaspy
  - ADM700 3G GPS GLONASS
  - ADM700 3G CAN FMS
  - ADM700 3G IP65 IK07
  - ADM700 3G doble SIM
  - Telemetría ADM700 3G
  - Seguimiento de vehículos Plaspy
---

# Neomatica - ADM700 3G: Características

Esta página describe, a nivel público, las capacidades relevantes del rastreador GPS Neomatica ADM700 3G cuando se utiliza con Plaspy. Se explica qué funciones del ADM700 3G son útiles al integrar dispositivos en Plaspy para seguimiento en tiempo real, telemetría y supervisión de flotas, sin entrar en detalles sensibles de configuración.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Cuando el ADM700 3G soporta funciones concretas como posicionamiento GPS y GLONASS, conectividad por protocolos abiertos o EGTS, telemetría por CAN bus o actualizaciones remotas de firmware, Plaspy puede mostrar esas capacidades tal como las reporta el dispositivo y según lo permita el firmware instalado.

## Resumen de características

El ADM700 3G es una unidad telemática robusta diseñada para instalaciones vehiculares e industriales y es compatible con Plaspy para reportes de ubicación y telemetría en tiempo real. Combina un receptor GNSS de alta sensibilidad, conectividad celular, múltiples entradas y salidas, y protección industrial que soporta seguimiento continuo y supervisión operativa.

- Posicionamiento de alta precisión con soporte combinado de GPS y GLONASS y receptor GNSS de alta sensibilidad para obtener fijaciones más rápidas.
- Carcasa preparada para entornos industriales con resistencia al polvo y al agua IP65 y protección contra impactos IK07 para ambientes exigentes.
- Conectividad celular en bandas 3G UMTS con GPRS EDGE y transmisión HSDPA, además de doble SIM para mayor resiliencia de red.
- Amplio soporte de entradas y salidas y CAN para telemetría vehicular, entradas de sensores, captura de eventos y salidas de control.
- Registro interno y soporte para microSD para almacenamiento de registros offline y posterior subida a Plaspy.

## Funciones principales del Neomatica - ADM700 3G

- Posicionamiento combinado GPS y GLONASS con receptor GNSS multicanal de alta sensibilidad.
- Datos celulares 3G UMTS con soporte GPRS EDGE y HSDPA, y capacidad de doble SIM para redundancia.
- Soporte EGTS y protocolo abierto que facilitan la integración a nivel servidor con plataformas como Plaspy.
- Múltiples entradas analógicas y discretas, entradas por pulso, salidas de colector abierto y soporte CAN incluyendo FMS J1939.
- Capacidad de actualización remota de firmware vía datos celulares para simplificar el mantenimiento de la flota.
- Registro no volátil interno con capacidad para grandes cantidades de registros y soporte de tarjeta microSD para ampliar el almacenamiento offline.
- Diseño de alimentación robusto con amplio rango de tensión de operación y protecciones contra sobretensiones pensadas para uso vehicular.
- Protección ambiental certificada IP65 y resistencia a impactos IK07 para instalaciones industriales.

## Cómo funcionan estas características con Plaspy

Al desplegarse un ADM700 3G, el dispositivo envía fijaciones GNSS, entradas y registros de eventos a Plaspy para que los operadores puedan monitorear vehículos y activos en tiempo real y revisar datos históricos. Plaspy detecta automáticamente los protocolos de rastreador compatibles e ingiere la telemetría que el dispositivo envía para visualización y alertas.

- Las fijaciones de ubicación y las actualizaciones periódicas de posición aparecen en los mapas de Plaspy y permiten reproducción de rutas y revisión de historial.
- Los mensajes del bus CAN y los eventos de entradas analógicas o discretas reportados por el dispositivo están disponibles en Plaspy para diagnósticos y reportes personalizados.
- Los registros offline almacenados en la memoria interna o en la microSD se suben a Plaspy cuando se restablece la conectividad, preservando la continuidad del historial.
- Las actualizaciones remotas de firmware, cuando son compatibles con el dispositivo, facilitan el mantenimiento de la flota y pueden coordinarse con despliegues gestionados a través de Plaspy.
- Plaspy soporta los patrones estándar de conectividad de dispositivos y aceptará el tráfico dirigido al dominio del servidor Plaspy para su integración y enrutamiento.

## Casos de uso típicos

- Gestión de flotas para vehículos comerciales, camiones y flotas mixtas que requieren rastreo en tiempo real, historial de rutas y telemetría.
- Monitoreo de maquinaria pesada donde se necesita protección robusta y amplio rango de tensión de alimentación.
- Logística y seguimiento de semirremolques que usan el registro interno para captar eventos cuando la cobertura celular es intermitente.
- Antirrobo y seguridad que aprovechan entradas de eventos, señales de acelerómetro y salidas remotas para flujos de respuesta.
- Monitoreo de sensores y temperatura usando 1 Wire u otras entradas analógicas soportadas para envíos sensibles a temperatura.
- Despliegues a largo plazo donde las actualizaciones remotas de firmware y la doble SIM reducen la necesidad de mantenimiento presencial.

## Notas sobre disponibilidad de funciones

- La presencia de funciones depende del firmware del equipo y la revisión de hardware específica instalada por el fabricante o integrador.
- El soporte de bandas celulares regionales y las certificaciones varían según el mercado y pueden afectar la conectividad disponible.
- Algunas funciones, como conjuntos de mensajes CAN o soporte de sensores 1 Wire, requieren cableado vehicular compatible y configuración adecuada durante la instalación.
- La capacidad de registro offline y la compatibilidad con microSD están sujetas a límites de tamaño de tarjeta y sistema de archivos descritos por el fabricante.
- Para salidas de control del dispositivo e integraciones de seguridad, siga las mejores prácticas de instalación y las indicaciones del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el ADM700 3G con Plaspy permite centralizar la conciencia de ubicación y la telemetría de vehículos y activos industriales. Plaspy recopila posiciones GNSS, entradas reportadas por el dispositivo, telemetría CAN y registros guardados para ofrecer visibilidad operativa, alertas configurables y reportes históricos que ayudan en la programación de mantenimientos y en el análisis del comportamiento de la flota.

Si desea explorar cómo Plaspy puede ingerir telemetría de dispositivos Neomatica y presentarla en paneles y reportes, conozca más sobre Plaspy en https://www.plaspy.com. Verifique las características específicas más recientes, el comportamiento del firmware y los detalles de implementación del fabricante en el sitio de Neomatica https://neomatica.com/ ya que las capacidades y el firmware pueden cambiar con el tiempo.
