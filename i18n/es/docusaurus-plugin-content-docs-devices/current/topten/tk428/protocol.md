---
slug: /topten/tk428/protocol
id: tk428-protocol
sidebar_label: Protocol
title: TopTen - TK428 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo TopTen TK428 OBD II y cómo comunica telemetmetría y ubicación a Plaspy
keywords:
  - TopTen TK428
  - protocolo TopTen TK428
  - rastreador GPS TK428
  - protocolo TK428 OBD II
  - protocolo GPS TopTen Plaspy
  - compatibilidad TK428 Plaspy
  - rastreador GPS OBD II
  - seguimiento de vehículos TK428
  - gestión de flotas TK428
  - compatibilidad de dispositivos Plaspy
---

# TopTen - Protocolo TK428

Esta página describe el contexto público del protocolo para usar el rastreador OBD II TopTen TK428 con Plaspy. Se centra en cómo el dispositivo transmite información de ubicación y telemetría útil a la plataforma Plaspy y qué considerar durante la configuración y validación. El conector OBD del TK428 le permite reportar ubicación junto con datos del vehículo como velocidad, RPM, odómetro y métricas relacionadas con combustible, que Plaspy puede mostrar una vez que el dispositivo esté configurado para enviar datos al endpoint de Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta correctamente. El comportamiento exacto del protocolo y los campos de telemetría disponibles pueden variar según la versión de firmware del TK428, la revisión hardware y la implementación del fabricante. Para detalles específicos de firmware consulte la documentación y las notas de lanzamiento de TopTen.

## Visión general del protocolo

El protocolo de comunicación del TK428 regula cómo el dispositivo se identifica, reporta telemetría GPS y OBD, y mantiene una conexión de reporte hacia un servidor remoto. En la práctica, este protocolo mapea los datos del vehículo y la ubicación en mensajes que el servidor puede interpretar y almacenar para seguimiento, alertas e informes.

- Permite que el rastreador identifique el número de serie o IMEI y asocie la telemetría con un registro de vehículo.
- Transporta coordenadas GPS y telemetría derivada del OBD como velocidad, RPM y lecturas de odómetro hacia el servidor.
- Controla los intervalos de reporte y los informes por eventos, por ejemplo estado de encendido o eventos de movimiento, según lo permita el firmware del dispositivo.
- Integra lecturas del bus CAN y del puerto OBD II en un formato que los sistemas del servidor pueden consumir para análisis de flota.
- Depende del firmware y de la compatibilidad del CAN del vehículo para determinar qué parámetros de la ECU puede leer el TK428.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de dispositivos usando un endpoint y puerto comunes y determina automáticamente el protocolo apropiado, por lo que en la mayoría de los casos no es necesario seleccionar un protocolo manualmente. La configuración correcta del dispositivo para que envíe datos al endpoint de Plaspy es el requisito principal para la detección y el onboarding.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto de reporte de Plaspy es 8888 y todos los dispositivos usan el mismo puerto para comunicarse con Plaspy.
- Los dispositivos pueden configurarse para comunicarse por UDP o TCP en el puerto 8888 según las opciones del equipo y la red.
- Cuando el TK428 envía datos a d.plaspy.com puerto 8888, Plaspy examina el flujo de datos entrante y mapea la información al perfil de dispositivo correspondiente.
- En la mayoría de los casos un TK428 configurado correctamente será detectado automáticamente sin necesidad de seleccionar el protocolo dentro de la plataforma Plaspy.

## Transporte y contexto de conexión

Las elecciones de transporte influyen en la confiabilidad y el comportamiento pero no cambian el objetivo principal del protocolo: enviar telemetría GPS y OBD a Plaspy. El TK428 soporta modos de transporte comunes y puede apuntar tanto al nombre de dominio de Plaspy como a la dirección IP de la plataforma.

- El TK428 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del rastreador y el entorno de red.
- Los dispositivos pueden apuntar al nombre DNS de Plaspy d.plaspy.com o directamente a 54.85.159.138 si así lo exige la configuración de red.
- Plaspy utiliza el mismo puerto 8888 para todos los rastreadores compatibles para simplificar la configuración y el onboarding.
- Factores a nivel de red como NAT, reglas de firewall y el comportamiento del operador móvil pueden afectar si UDP o TCP es preferible para un despliegue concreto.
- Confirme que el servidor y el puerto de reporte del dispositivo coincidan con los ajustes de Plaspy para asegurar la entrega oportuna de posición y telemetría.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre unidades TK428 pueden cambiar qué campos de telemetría se reportan y con qué frecuencia se emiten eventos.
- Las revisiones de hardware y las variaciones del bus CAN del vehículo afectan qué parámetros de la ECU puede leer el rastreador en cada vehículo.
- Las opciones de configuración del fabricante pueden alterar las preferencias de transporte o los datos de diagnóstico disponibles.
- Seleccionar UDP frente a TCP puede influir en las garantías de entrega y en el comportamiento de batería o conexión en redes celulares.
- Pruebe siempre un dispositivo representativo de su flota antes de un despliegue a gran escala para validar los campos de telemetría y la cadencia de reporte.
- Valide la compatibilidad y cualquier característica específica de firmware contra la documentación oficial de TopTen para su revisión del TK428.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TK428 ayuda a asegurar una configuración correcta, un mapeo de telemetría preciso y una resolución de problemas más rápida al integrar los dispositivos con Plaspy. Saber cómo el dispositivo reporta datos facilita establecer expectativas sobre la información disponible en la plataforma y diagnosticar problemas de conectividad comunes.

- Asegura que el servidor de reporte y el puerto estén configurados en d.plaspy.com o 54.85.159.138 y en el puerto 8888 para que Plaspy pueda recibir los datos.
- Ayuda a determinar si TCP o UDP es el transporte más adecuado para un escenario de despliegue específico.
- Facilita interpretar qué parámetros OBD y CAN entregará el rastreador según el firmware y el soporte del vehículo.
- Reduce el tiempo de onboarding al clarificar qué telemetría se espera del TK428 y cómo Plaspy mapeará esos campos.
- Favorece un monitoreo y alertas consistentes alineando el comportamiento de reporte del dispositivo con la configuración de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el TopTen TK428 con Plaspy ofrece una vía directa para combinar la ubicación del vehículo con telemetría OBD II enriquecida para operaciones de flota, monitoreo de conducta de conductores y diagnóstico vehicular. La conexión plug and play OBD del TK428 facilita su despliegue en vehículos con puerto OBD II, mientras Plaspy centraliza reportes, alertas y datos históricos.

La detección automática de protocolos de Plaspy y el uso de un puerto de reporte compartido simplifican la configuración del dispositivo y reducen los pasos de configuración manual para gestores de flota e integradores. Para saber más sobre cómo Plaspy puede funcionar con sus dispositivos TK428 visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de TopTen http://www.t10.cn, ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
