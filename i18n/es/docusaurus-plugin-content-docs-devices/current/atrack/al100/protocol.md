---
slug: /atrack/al100/protocol
id: al100-protocol
sidebar_label: Protocol
title: ATrack - AL100 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo de comunicación del rastreador ATrack AL100 para su integración con Plaspy
keywords:
  - protocolo ATrack AL100
  - protocolo GPS ATrack AL100
  - compatibilidad AL100 Plaspy
  - protocolo de comunicación AL100
  - protocolo de rastreo AL100
  - protocolo rastreador ATrack bicicleta eléctrica
  - integración telemetría AL100
  - datos CAN Bus AL100
  - telemetría Bluetooth AL100
  - rastreo de flotas ATrack
---

# ATrack - Protocolo AL100

Esta página ofrece una visión pública y no sensible del contexto de comunicación para usar el rastreador ATrack AL100 con la plataforma Plaspy. Explica cómo el dispositivo reporta ubicación y telemetría a Plaspy y qué considerar al configurar el AL100 para un rastreo fiable de flotas y e-movilidad. El objetivo es ayudar a usuarios técnicos y a operadores de flota a comprender el papel del protocolo del rastreador en una integración exitosa sin exponer detalles de implementación privados.

El AL100 es un rastreador robusto LTE Cat 1 para e-movilidad, con carcasa IP67 y opciones de CAN Bus y Bluetooth para ampliar la telemetría. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página resalta los ajustes compartidos por Plaspy y notas prácticas de compatibilidad para ayudarle a configurar y mantener dispositivos AL100.

## Resumen del protocolo

El AL100 emplea un protocolo de reporte de dispositivo para enviar posiciones GPS y telemetría como kilometraje, velocidad, cadencia, torque, nivel de batería y temperaturas a un servidor backend. Ese protocolo define cómo el rastreador se identifica, agrupa la telemetría y programa los envíos para que Plaspy pueda mostrar mapas en tiempo real, alertas e informes históricos a los usuarios.

- Permite la entrega de ubicación GPS y telemetría con marcas de tiempo desde el dispositivo hacia un backend para su procesamiento.
- Transporta datos de identificación para que Plaspy asocie cada reporte con el registro de dispositivo AL100 correcto.
- Transmite datos opcionales del CAN Bus del motor y del vehículo cuando el hardware y el firmware lo permiten.
- Soporta telemetría adicional desde sensores Bluetooth opcionales cuando estos están emparejados con el dispositivo.
- Constituye la base para el reporte de eventos usados por Plaspy, como alertas de batería, eventos de movimiento e indicadores de comportamiento de conducción.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesita seleccionar un protocolo manualmente dentro de Plaspy. La configuración habitual para desplegar AL100 es apuntar el dispositivo al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto en el que Plaspy escucha es 8888.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y los requisitos de la red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la incorporación de unidades.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el AL100 está configurado para reportar al endpoint de Plaspy.

## Contexto de transporte y conexión

Las elecciones de transporte y conexión influyen en cómo el AL100 llega a Plaspy a través de la red celular. El dispositivo normalmente envía datos al endpoint de Plaspy usando el transporte configurado y el enlace celular, y las políticas de red pueden afectar la conectividad y el comportamiento de entrega.

- El dispositivo puede configurarse con UDP o TCP en el puerto 8888 dependiendo del firmware y las opciones de configuración.
- Se puede apuntar a d.plaspy.com o directamente a 54.85.159.138 cuando DNS o restricciones de red requieren una dirección IP.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que unifica el manejo en el servidor.
- La conectividad LTE Cat 1 del AL100 proporciona el enlace ascendente para el reporte de ubicación y telemetría.
- La traducción de direcciones de red, filtrado del operador o reglas de firewall en redes celulares o privadas pueden afectar la accesibilidad y pueden requerir las comprobaciones de red estándar.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre unidades AL100 pueden cambiar los intervalos de reporte, los conjuntos de campos o las opciones de transporte; confirme el comportamiento del firmware antes de un despliegue masivo.
- Las revisiones de hardware u opciones accesorias como CAN Bus o Bluetooth afectan qué campos de telemetría están disponibles para Plaspy.
- La integración opcional del CAN Bus utiliza una interfaz personalizada de datos de motor y vehículo que puede requerir configuración específica en el lado del rastreador.
- Elegir UDP frente a TCP modifica las características de entrega; seleccione el transporte soportado por su firmware y entorno de red.
- Las opciones de configuración del fabricante y las compilaciones regionales de firmware pueden cambiar los detalles del protocolo con el tiempo.
- Valide la compatibilidad del dispositivo y los ajustes recomendados contra la documentación oficial del fabricante y las notas de la versión.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación y el contexto de conexión del AL100 ayuda a asegurar una configuración fiable, una interpretación precisa de los datos y una resolución más rápida de problemas cuando los dispositivos no funcionan como se espera.

- Garantiza que el rastreador apunte a d.plaspy.com o 54.85.159.138 usando el transporte y puerto correctos para que los reportes lleguen a Plaspy.
- Facilita el diagnóstico de telemetría faltante al confirmar si la telemetría CAN Bus o Bluetooth está habilitada y se transmite.
- Aporta información para decisiones sobre actualizaciones de firmware y cómo estas pueden cambiar los campos de telemetría disponibles o la cadencia de reporte.
- Mejora la resolución de problemas de conectividad al clarificar si se usa UDP o TCP y si políticas del operador o de la red pueden interferir.
- Apoya la planificación de escalamiento de flota al entender cómo los dispositivos se identifican y cómo Plaspy mapea los reportes entrantes a los dispositivos.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el ATrack AL100 permite a los operadores consolidar el rastreo de e-movilidad, la telemetría y las alertas de eventos en un solo panel. El diseño robusto del AL100, su conectividad LTE Cat 1 y la telemetría de motor opcional vía CAN Bus lo hacen adecuado para flotas de alquiler y bicicletas eléctricas personales donde la disponibilidad, la salud de la batería y la recuperación ante robo son prioridades. Plaspy procesa el flujo de datos del AL100 en mapas en vivo, alertas, informes históricos y flujos de trabajo automatizados que ayudan a los operadores a actuar rápidamente ante eventos de batería, motor y movimiento.

Para conocer más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Para obtener los detalles más actuales y específicos por dispositivo sobre protocolo, notas de firmware e instrucciones de configuración para el AL100, verifique la información en el sitio del fabricante https://www.atrack.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
