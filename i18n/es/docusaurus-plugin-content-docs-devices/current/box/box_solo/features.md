---
slug: /box/box_solo/features
id: box_solo-features
sidebar_label: Features
title: Box - Box Solo Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Box Solo y su integración con Plaspy para visibilidad de flotas y activos
keywords:
  - características Box Solo
  - rastreador GPS Box Solo
  - Box Solo Plaspy
  - características del rastreador Box
  - unidad de seguimiento para remolques
  - rastreador GPS GSM cuatribanda
  - registro de posición de remolque
  - seguimiento vehicular Box Solo
  - capacidades Box Solo
  - rastreo de flotas Box Solo
---

# Box - Características de Box Solo

Esta página ofrece una descripción pública de las funciones disponibles al usar el rastreador para remolques Box Solo con Plaspy. Resume las capacidades prácticas que puede esperar al integrar dispositivos Box Solo en Plaspy para el reporte de posición, la visibilidad de eventos y la conectividad básica. El enfoque está en las funciones orientadas al usuario y en cómo se presentan en Plaspy, no en detalles técnicos de bajo nivel.

La disponibilidad exacta de funciones en una unidad Box Solo concreta puede variar según la versión de firmware, la revisión de hardware, la variante regional y la forma de instalación. Las decisiones de instalación, la selección de antena y el comportamiento del firmware del fabricante influyen en lo que es posible en la práctica, por lo que esta página describe las capacidades típicas documentadas públicamente del modelo en lugar de garantías específicas del dispositivo.

## Resumen de funciones

El Box Solo está pensado para el registro continuo de la posición de remolques, con transmisión fiable basada en GSM y almacenamiento local de datos. Su diseño prioriza una instalación sencilla y comunicaciones estables, apropiadas para despliegues de seguimiento de flotas y remolques.

- Registro continuo de posición mediante receptor GPS de alta sensibilidad para mejorar la adquisición de fijaciones.
- Comunicaciones GPRS GSM cuatribanda para amplia cobertura de red, incluyendo soporte para bandas GSM de EE. UU.
- Memoria interna para almacenar datos de posición cuando la conectividad celular no está disponible.
- Batería de respaldo que mantiene el seguimiento durante interrupciones de la alimentación primaria.
- Informes configurables según tiempo, distancia y cambio de ángulo para equilibrar precisión y uso de datos.
- Modo de reposo y comportamiento de bajo consumo para reducir la descarga cuando el remolque está inactivo.

## Funciones principales de Box Solo

- Receptor GPS de alta sensibilidad para fijaciones de ubicación consistentes en instalaciones de remolque habituales.
- Comunicaciones GPRS GSM cuatribanda para transmitir datos de ubicación a servidores de recolección.
- Memoria interna para almacenamiento sin conexión de registros de posición y eventos hasta que se restablezcan las comunicaciones.
- Batería de respaldo integrada para mantener el rastreo durante interrupciones cortas de energía.
- Desencadenantes de reporte de posición basados en intervalos de tiempo configurables, umbrales de distancia y cambios de ángulo.
- Soporte para modos de comunicación TCP y UDP para flexibilidad en la conectividad con servidores.
- Dos entradas digitales y una entrada analógica para monitoreo básico de señales externas e integración.
- Factor de forma compacto y montaje con tres cables (positivo, negativo y alimentación por encendido) para una instalación sencilla.

## Cómo funcionan estas funciones con Plaspy

Cuando se conectan a Plaspy, las unidades Box Solo envían datos de ubicación y eventos que Plaspy muestra para monitoreo y análisis histórico. Plaspy puede detectar el protocolo del dispositivo automáticamente y aceptar los reportes usando los modos de transporte comunes.

- Las actualizaciones de ubicación y el historial almacenado transmitidos por el dispositivo aparecen en los mapas y las vistas de reproducción de Plaspy para revisar rutas y posiciones.
- Los eventos relacionados con las entradas del dispositivo y los desencadenantes de reporte pueden mostrarse como eventos discretos dentro de Plaspy para mayor conciencia operativa.
- Los datos fuera de línea almacenados en la memoria interna se recopilan y cargan una vez que se restablece la conectividad celular, preservando la continuidad histórica.
- Los dispositivos pueden configurarse para usar TCP o UDP hacia los endpoints de Plaspy, y Plaspy detectará el comportamiento del protocolo en los flujos estándar.
- El modo de reposo y las funciones de ahorro de energía reducen la frecuencia de reporte cuando un remolque está inactivo; Plaspy reflejará esta menor cadencia de actualizaciones.

## Casos de uso típicos

- Seguimiento de remolques y registro de ubicación para flotas de remolques en entornos de despliegue mixtos.
- Track and trace para recuperación de activos y reconstrucción de rutas tras entregas o movimientos.
- Monitoreo complementario para gestores de flota que requieren historial de posición consistente aun cuando hay brechas en la cobertura celular.
- Monitoreo sencillo de sensores externos usando las entradas digitales y analógica para puertas u otras señales auxiliares.
- Visibilidad a largo plazo para parques de remolques donde la instalación compacta y la batería de respaldo son ventajosas.

## Notas sobre disponibilidad de funciones

- La versión de firmware y la configuración del fabricante pueden cambiar el comportamiento de los desencadenantes de reporte y de las entradas en cada unidad.
- Revisiones de hardware o variantes regionales pueden afectar las bandas GSM soportadas y las certificaciones.
- Los métodos de instalación, la elección y ubicación de la antena influyen en el desempeño del GPS y GSM y, por tanto, en la precisión reportada.
- Algunas capacidades requieren la configuración adecuada tanto en el dispositivo como en Plaspy para ser visibles y operativas.
- Consulte la documentación del fabricante para detalles exactos de cableado y para confirmar aprobaciones regulatorias en su mercado.

## Por qué usar Plaspy con estas funciones

Combinar el hardware Box Solo con Plaspy ofrece a las organizaciones una vía sencilla hacia la visibilidad centralizada de remolques y la reproducción histórica. Plaspy recibe reportes de ubicación y eventos del rastreador, reconoce automáticamente el protocolo del dispositivo y presenta historial de posiciones, líneas de tiempo de eventos y estados de forma que apoyan la supervisión operativa y los flujos de trabajo básicos de flota.

Para conocer más sobre cómo Plaspy funciona con dispositivos como el Box Solo, visite https://www.plaspy.com. Para detalles técnicos más actuales y específicos del dispositivo, incluyendo comportamiento de firmware, guías de instalación e información sobre variantes regionales, verifique la documentación del fabricante en http://www.boxtelematics.com/. Las funciones del dispositivo y las implementaciones de firmware pueden cambiar con el tiempo, por lo que siempre conviene confirmar las especificaciones actuales con el fabricante.
