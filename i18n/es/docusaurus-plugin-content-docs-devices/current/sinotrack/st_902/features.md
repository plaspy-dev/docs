---
slug: /sinotrack/st_902/features
id: st_902-features
sidebar_label: Features
title: SinoTrack - ST-902 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador OBD2 SinoTrack ST-902 y su integración con Plaspy para seguimiento y alertas de flotas
keywords:
  - Características SinoTrack ST-902
  - Tracker GPS SinoTrack ST-902
  - Rastreador OBD2 ST-902
  - Compatibilidad ST-902 Plaspy
  - Rastreador GPS OBD2
  - Seguimiento de flotas ST-902
  - Alarmas SinoTrack ST-902
  - Capacidades GPS ST-902
  - SinoTrack OBD2 Plaspy
  - Rastreo de vehículos ST-902
---

# SinoTrack - Características del ST-902

Esta página ofrece un resumen público y no sensible de las características del SinoTrack ST-902 y explica cómo el dispositivo puede integrarse con Plaspy para seguimiento centralizado, alertas y telemetría de flota. Se centra en las capacidades prácticas que puede esperar cuando el ST-902 está apuntando a Plaspy y en el valor operativo que aportan.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación, la variante regional y la implementación del fabricante. Para pasos de configuración específicos del dispositivo y los detalles técnicos más recientes, consulte la documentación oficial de SinoTrack.

## Resumen de funciones

El ST-902 es un rastreador OBD2 plug‑and‑play pensado para un despliegue rápido en vehículos. Combina soluciones GNSS para posicionamiento, reportes por celular GPRS con fallback por SMS, una batería interna de respaldo compacta y un conjunto estándar de alarmas para ofrecer visibilidad continua de la ubicación y registro de eventos que pueden canalizarse hacia Plaspy.

- Instalación instantánea mediante el conector OBD‑II de 16 pines para minimizar el tiempo de inactividad en despliegues.
- Conectividad GSM/GPRS para cargas periódicas de posición y fallback por SMS para informes básicos cuando no hay datos móviles.
- Conjunto de alarmas integrado que incluye choque/impacto, exceso de velocidad, geo‑cercas y aviso de batería baja para antirrobo y monitoreo de incidentes.
- Pequeña batería interna recargable para mantener operación limitada frente a pérdida de alimentación o cuando se desenchufa el dispositivo.
- Receptor GNSS de alta sensibilidad con una precisión práctica aproximada de 10 m (2D RMS) para monitoreo de rutas y ubicaciones.

## Funciones principales del SinoTrack - ST-902

- Factor de forma plug‑and‑play OBD‑II que se instala en el puerto de diagnóstico del vehículo.
- Conectividad GSM/GPRS para reportes en tiempo real y SMS como canal de respaldo.
- Soporte de alarmas por choque o impacto, detección de exceso de velocidad, alertas de geo‑cerca y avisos de batería baja.
- Batería interna recargable (150 mAh, 3.7 V) para operación breve cuando se pierde la alimentación externa.
- Receptor GNSS UBLOX7020 de alta sensibilidad con la precisión aproximada de posicionamiento indicada por el fabricante (~10 m).
- Interfaz por comandos SMS para configuración remota, incluyendo asignación de servidor y consultas básicas.
- Capacidad para dirigir reportes a plataformas de terceros como Plaspy o al servicio del proveedor SinoTrack PRO.
- Garantía de dos años del proveedor y acceso al soporte técnico del fabricante para asistencia en despliegues.

## Cómo funcionan estas funciones con Plaspy

Cuando se configura para reportar a Plaspy, el ST-902 envía actualizaciones de posición y eventos de alarma que Plaspy procesa para seguimiento en vivo, alertas e informes históricos. Plaspy detecta automáticamente los protocolos compatibles del rastreador y consolida la telemetría entrante para ofrecer visibilidad unificada de la flota.

- Las ubicaciones GPS en tiempo real y sus marcas de tiempo se muestran en Plaspy para supervisión en vivo y reproducción de rutas.
- Los eventos de alarma como choque, exceso de velocidad, geo‑cerca y batería baja se reenvían a Plaspy para activar notificaciones y reglas.
- La telemetría expuesta por el OBD‑II puede enviarse a Plaspy cuando el vehículo proporciona los PIDs relevantes y el dispositivo está configurado para reportarlos.
- Los dispositivos pueden configurarse para enviar datos al dominio colector de Plaspy d.plaspy.com y Plaspy soporta los métodos de transporte habituales para que el rastreador apunte al servidor correcto.
- La configuración por SMS es útil para dispositivos remotos que requieren cambios de IP o dominio del servidor sin acceso físico.

## Casos de uso típicos

- Incorporación rápida de flotas cuando el tiempo mínimo de instalación es esencial para despliegues a gran escala.
- Monitoreo antirrobo y detección de manipulación mediante alertas de choque y geo‑cercas dirigidas a operaciones centrales.
- Rastreo de taxis y vehículos de rideshare para despacho y supervisión operativa.
- Alquileres de corto plazo y car sharing donde se requiere activación rápida por plug‑in y altas tasas de rotación.
- Visibilidad de vehículos comerciales para informes simples de ubicación y eventos sin cableado permanente.
- Escenarios que requieren reporte por fallback SMS cuando los datos celulares son intermitentes.

## Notas sobre disponibilidad de funciones

- Las variantes de firmware y las revisiones de hardware pueden cambiar qué alarmas, comandos SMS o PIDs OBD‑II están disponibles en una unidad concreta.
- Las variantes regionales y el soporte de operadores afectan la disponibilidad de bandas GSM/GPRS y pueden requerir ajustes de SIM y APN específicos.
- El ST-902 se suministra sin tarjeta SIM; los operadores deben provisionar una SIM local y el APN correcto para reportes fiables.
- La batería de respaldo ofrece tiempo de operación limitado y está pensada para intervalos cortos durante pérdida de alimentación o eventos de desconexión.
- Las interfaces de configuración y los conjuntos de comandos del fabricante son la fuente autoritativa para ajustes avanzados y deben consultarse al planificar despliegues.

## Por qué usar Plaspy con estas funciones

Combinar el ST-902 con Plaspy brinda a las organizaciones visibilidad centralizada de las ubicaciones de los vehículos y de los eventos de alarma, manteniendo la sencillez en el despliegue. El factor de forma OBD2 plug‑and‑play reduce tiempo y costo de instalación, y Plaspy consolida posiciones y alertas entrantes en paneles, reportes históricos y flujos de notificación para la supervisión operativa.

Para conocer más sobre Plaspy y cómo se integra con dispositivos como el ST-902 visite https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de SinoTrack https://www.sinotrackgps.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
