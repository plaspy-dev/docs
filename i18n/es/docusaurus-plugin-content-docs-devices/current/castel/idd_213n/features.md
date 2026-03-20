---
slug: /castel/idd_213n/features
id: idd_213n-features
sidebar_label: Features
title: Castel - IDD-213N Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Castel IDD-213N y su integración con Plaspy para diagnóstico y rastreo vehicular
keywords:
  - Castel IDD-213N
  - funciones Castel IDD-213N
  - rastreador GPS Castel IDD-213N
  - IDD-213N Plaspy
  - rastreador diagnóstico vehicular
  - rastreador GPS OBD II
  - dispositivo gestión de flotas
  - monitoreo comportamiento de conducción
  - rastreador OBD 3G
  - funciones rastreo vehicular
---

# Castel - IDD-213N: Funcionalidades

Esta página ofrece un resumen público de las funcionalidades del Castel IDD-213N y de la forma en que sus capacidades se integran con Plaspy. Describe las funciones del dispositivo relevantes para el rastreo y diagnóstico remoto, y explica el valor práctico que esas funciones aportan dentro de la plataforma Plaspy. El contenido se centra en las características visibles para el usuario y el contexto de integración, más que en detalles de implementación de bajo nivel.

La disponibilidad exacta de funciones en una unidad IDD-213N concreta puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para comportamiento específico del dispositivo, opciones de configuración y los detalles técnicos más recientes consulte la documentación oficial de Castel y las notas de versión.

## Visión general de las funciones

El Castel IDD-213N es un dispositivo de diagnóstico a bordo compatible con OBD, diseñado para uso en vehículos particulares y comerciales. Combina la captura de datos del ECU con el reporte de ubicación y conectividad celular para ofrecer visibilidad remota de diagnósticos y seguimiento operacional.

- Conexión tipo OBD plug-and-play para lectura de datos del ECU y de información de diagnóstico del vehículo.
- Reporte de ubicación en tiempo real adecuado para mapas y casos de uso de seguimiento.
- Soporte para múltiples protocolos de diagnóstico de vehículo, incluyendo OBD II/EOBD, J1939 y J1708 para amplia compatibilidad.
- Conectividad celular 3G en bandas comunes para enlace de datos hacia el servidor backend.
- Recolección de estadísticas de kilometraje y consumo de combustible para generación de reportes y análisis.
- Monitoreo de comportamiento de conducción con eventos como exceso de velocidad, aceleraciones bruscas, frenadas fuertes y detección de ralentí prolongado.

## Funciones principales del Castel - IDD-213N

- Cumplimiento con OBD II y EOBD para acceso estandarizado a parámetros de diagnóstico del vehículo.
- Compatibilidad con J1939 y J1708 para soporte extendido en vehículos pesados y redes legacy.
- Lecturas diagnósticas del ECU, incluyendo velocidad del vehículo, RPM y temperatura del refrigerante según reporte del vehículo.
- Lectura de códigos de falla (DTC) y captura de freeze frame para soporte en la resolución de problemas.
- Captura y transmisión de ubicación en tiempo real para seguimiento y supervisión de flotas.
- Módem celular 3G integrado para conectividad de datos hacia servicios backend.
- Estadísticas de comportamiento de conducción y viajes, incluyendo agregación de kilometraje y consumo de combustible.

## Cómo estas funciones funcionan con Plaspy

Plaspy recibe los reportes de dispositivos compatibles como el IDD-213N y muestra la información de ubicación y diagnóstico a través de la plataforma para monitoreo y análisis histórico. La integración está diseñada para que gestores de flotas y proveedores de servicio vean el estado del vehículo y los eventos junto con la información posicional.

- El IDD-213N puede enviar a Plaspy la ubicación y los diagnósticos derivados del ECU para visualización en mapa en vivo y reproducción histórica.
- Los códigos de falla (DTC) y la información de freeze frame reportados por el dispositivo pueden aparecer como eventos o detalles de estado dentro de Plaspy.
- El kilometraje, consumo de combustible y resúmenes de viaje generados por el dispositivo pueden incluirse en los reportes y exportes de Plaspy.
- Eventos de comportamiento de conducción, como exceso de velocidad, aceleraciones bruscas y ralentí prolongado, pueden marcarse y revisarse dentro de Plaspy.
- Plaspy detecta automáticamente los protocolos compatibles de los rastreadores y acepta conexiones al dominio backend de Plaspy para facilitar la incorporación de dispositivos.

## Casos de uso típicos

- Equipos de gestión de flotas que monitorean la salud y ubicación de los vehículos para coordinar mantenimiento y despachos.
- Operadores de alquiler de autos que controlan uso del vehículo, kilometraje y alertas de diagnóstico para planificar mantenimiento.
- Programas de seguros vehiculares que usan resúmenes de comportamiento de conducción y datos diagnósticos para análisis de riesgo.
- Escuelas de conducción y flotas de entrenamiento que observan el comportamiento del conductor y estadísticas de viaje para capacitación.
- Talleres de servicio que recogen remotamente freeze frame y datos DTC para prediagnosticar problemas antes de la visita al taller.

## Notas sobre disponibilidad de funciones

- La presencia de ciertas funciones depende del firmware y la revisión de hardware del dispositivo; no todas las unidades necesariamente expondrán el mismo conjunto de parámetros diagnósticos.
- El tipo de instalación y el cableado del vehículo o la implementación del ECU pueden afectar qué puntos de datos OBD o protocolos están disponibles.
- La cobertura de redes celulares regionales y el soporte de los operadores para servicios 3G pueden influir en la conectividad y la frecuencia de telemetría.
- Algunos reportes avanzados o estadísticas agregadas requieren procesamiento en servidor y pueden depender de la configuración de Plaspy.
- Verifique siempre el comportamiento en su despliegue específico contra la configuración del dispositivo y la guía del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el Castel IDD-213N junto con Plaspy ofrece una manera práctica de combinar visibilidad diagnóstica del vehículo con conocimiento de ubicación. Plaspy incorpora los reportes del dispositivo en una vista unificada donde los equipos operativos pueden monitorear la salud del vehículo, responder a alertas de diagnóstico y seguir activos en tiempo real. Esta combinación resulta útil para organizaciones que requieren supervisión consolidada del estado del vehículo, comportamiento del conductor y ubicación de la flota.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el Castel IDD-213N visite https://www.plaspy.com. Para las especificaciones del dispositivo, notas de firmware y la guía más actualizada del fabricante, verifique los detalles en el sitio de Castel http://www.castelecom.com/. Las funcionalidades y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme la información más reciente con el fabricante.
