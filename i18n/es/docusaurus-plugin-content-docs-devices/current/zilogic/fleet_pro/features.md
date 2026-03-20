---
slug: /zilogic/fleet_pro/features
id: fleet_pro-features
sidebar_label: Features
title: Zilogic - Fleet Pro Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Zilogic Fleet Pro y su compatibilidad con Plaspy
keywords:
  - Zilogic Fleet Pro características
  - Rastreador GPS Zilogic Fleet Pro
  - Interfaz OBD II Fleet Pro
  - Acelerómetro Fleet Pro
  - Compatibilidad rastreador GPS Plaspy
  - Rastreador de telemática vehicular
  - Intervalos de informe configurables Fleet Pro
  - Entradas y salidas digitales Fleet Pro
  - Entradas analógicas Fleet Pro
  - Rastreo de vehículos con Plaspy
---

# Zilogic - Funciones de Fleet Pro

Esta página ofrece una descripción pública y concisa de las funcionalidades y capacidades del Zilogic Fleet Pro cuando se utiliza con Plaspy. Está pensada para ayudar a gestores de flota, integradores y revisores técnicos a comprender qué datos puede reportar el dispositivo y cómo se integran esas capacidades en la supervisión dentro de la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, módulos opcionales, método de instalación y elecciones del fabricante. Para detalles técnicos actuales y específicos por dispositivo consulte la documentación y las notas de la versión del fabricante.

## Resumen de funciones

El Fleet Pro está orientado a la telemática vehicular con un enfoque en datos prácticos para la gestión de flotas: ubicación, entradas relacionadas con el comportamiento del conductor, diagnóstico del vehículo mediante una interfaz opcional y reportes flexibles. Combina conectividad y opciones de reporte configurables para equilibrar visibilidad en tiempo real y control del uso de datos.

- Reporte de ubicación GPS de alta precisión para monitoreo de rutas y posiciones.
- Acelerómetro integrado para vigilar patrones de conducción y detectar eventos relacionados con el movimiento.
- Interfaz OBD II opcional para mostrar diagnósticos y datos operativos del vehículo cuando esté instalada.
- Seguimiento en línea y bajo demanda a través de canales celulares, incluyendo GPRS y reportes por SMS.
- Intervalos de reporte configurables, con opciones de hasta 30 segundos para mayor fidelidad en el seguimiento.
- Varias opciones físicas de E/S que incluyen entradas y salidas digitales y entradas analógicas para sensores adicionales.

## Funciones principales del Zilogic - Fleet Pro

- Acelerómetro integrado para el monitoreo del comportamiento de conducción y detección de eventos de movimiento.
- Interfaz OBD II opcional para acceder a información de diagnóstico del vehículo cuando esté instalada.
- Rastreo de ubicación GPS con énfasis en la precisión para el seguimiento de rutas.
- Conectividad GSM/GPRS de doble banda para enviar posiciones y actualizaciones de estado.
- Soporte para seguimiento en línea y bajo demanda mediante canales de reporte celular.
- Intervalos de transmisión de datos configurables para ajustar la frecuencia de actualizaciones frente al consumo de datos.
- Múltiples opciones de E/S, incluidas entradas y salidas digitales y entradas analógicas para señales y sensores externos.
- LEDs de estado para ayudar en la verificación de la instalación y en la resolución básica de problemas.

## Cómo funcionan estas funciones con Plaspy

Al conectarse a Plaspy, la telemetría y los datos de eventos del Fleet Pro se integran en una vista unificada de la flota que facilita la supervisión, los informes y la revisión histórica. Plaspy detecta automáticamente muchos protocolos comunes de rastreadores y acepta los reportes en el endpoint de la plataforma, permitiendo que dispositivos como el Fleet Pro informen ubicación y eventos sin necesidad de seleccionar manualmente el protocolo por dispositivo.

- Las actualizaciones de posición GPS aparecen en los mapas de Plaspy y en las trayectorias históricas para el análisis de rutas.
- Los eventos derivados del acelerómetro y los indicadores de comportamiento de conducción pueden registrarse como eventos o usarse en los informes de comportamiento dentro de Plaspy.
- Los datos OBD II, cuando el Fleet Pro está equipado y configurado para reportarlos, pueden mostrarse como métricas de diagnóstico o rendimiento en los paneles de Plaspy.
- Los intervalos de reporte configurables en el dispositivo se reflejan en la cadencia de actualizaciones dentro de Plaspy, de modo que usted pueda equilibrar el seguimiento casi en tiempo real y las consideraciones de ancho de banda.
- Los estados de las entradas digitales y analógicas reportados por el dispositivo están disponibles como puntos de telemetría discretos o analógicos para supervisar equipos conectados o señales del vehículo.
- Plaspy recibe los mensajes de los dispositivos en el endpoint de la plataforma y aplica detección automática de protocolo, lo que simplifica el alta de rastreadores con configuración mínima manual.

## Casos de uso habituales

- Seguimiento de rutas y revisión de viajes históricos para flotas de vehículos comerciales.
- Programas de monitoreo y capacitación de conductores usando eventos del acelerómetro.
- Diagnóstico remoto del vehículo y planificación de mantenimiento cuando se utiliza la interfaz OBD II opcional.
- Consultas de ubicación bajo demanda para despacho y coordinación de activos.
- Supervisión de entradas auxiliares del vehículo como estado de puertas, alimentación de equipos o señales simples de sensores mediante entradas digitales y analógicas.
- Alertas y reportes configurables para gestionar eficiencia de combustible u operaciones cuando se usan entradas analógicas para alimentar telemetría.

## Notas sobre disponibilidad de funciones

- Funciones opcionales como la interfaz OBD II pueden ser un complemento o requerir revisiones de hardware y firmware específicas que habiliten el reporte de datos OBD.
- El comportamiento del acelerómetro y los umbrales de evento pueden depender de configuraciones de firmware y ser configurables durante la instalación o mediante herramientas del fabricante.
- Los intervalos de reporte y los mínimos soportados dependen del firmware del dispositivo y de las condiciones de la red; aunque el dispositivo soporta reportes frecuentes, su uso práctico debería considerar los planes de datos y la disponibilidad de la red.
- Las funciones de E/S disponibles y los rangos de entrada analógica pueden variar según la variante de hardware y deben confirmarse para cada unidad antes del despliegue.
- Las bandas celulares regionales y el soporte de doble banda pueden diferir entre lotes de producción y deben verificarse frente a los requisitos de los operadores locales.

## Por qué usar Plaspy con estas funciones

Usar el Zilogic Fleet Pro con Plaspy brinda a las organizaciones un camino claro desde la telemetría a nivel de dispositivo hasta insights operativos. Plaspy agrega ubicación, movimiento y señales del vehículo en una sola vista con paneles para que los gestores de flota puedan monitorear vehículos en tiempo real, revisar comportamientos históricos y generar reportes para programas de seguridad y eficiencia. La combinación de intervalos de reporte configurables y la visibilidad que ofrece Plaspy ayuda a los equipos a ajustar las soluciones para lograr el equilibrio adecuado entre oportunidad de la información y costo de datos.

Para saber más sobre cómo Plaspy puede integrarse con dispositivos Zilogic visite https://www.plaspy.com. Para detalles técnicos específicos por dispositivo, notas de firmware y opciones de accesorios consulte al fabricante en https://zilogic.com/ ya que las características del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
