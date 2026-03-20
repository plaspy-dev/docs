---
slug: /topfly/tld2_l/features
id: tld2_l-features
sidebar_label: Features
title: TopFly - TLD2-L Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador OBDII TopFly TLD2-L 4G LTE y su integración con Plaspy para gestión de flotas y telemetría
keywords:
  - TopFly TLD2-L
  - funciones TopFly TLD2-L
  - rastreador GPS TopFly
  - funciones TLD2-L Plaspy
  - rastreador GPS OBDII
  - OBDII plug and play
  - rastreador GPS LTE M NB IoT
  - rastreador con soporte sensores BLE
  - seguimiento de flotas Plaspy
  - rastreo de vehículos TLD2-L
---

# TopFly - Características del TLD2-L

Esta página ofrece un resumen público de las funciones del rastreador GPS TopFly TLD2-L y de cómo sus capacidades se integran con Plaspy. Se centra en detalles prácticos y no sensibles sobre lo que el dispositivo puede hacer cuando está emparejado con la plataforma Plaspy, y en qué pueden esperar ver los gestores de flota e integradores dentro del sistema.

La disponibilidad exacta de funciones puede variar según la revisión de firmware, la variante de hardware, la configuración regional y el tipo de instalación. Para detalles críticos o sensibles en materia de seguridad, consulte la documentación oficial del fabricante y las notas de la versión para confirmar el comportamiento de su dispositivo y firmware específicos.

## Resumen de funciones

El TLD2-L es un rastreador OBDII compacto plug and play diseñado para despliegues rápidos y telemetría continua del vehículo. Combina localizaciones GNSS frecuentes, conectividad celular, soporte de accesorios BLE y detección de eventos para enviar datos de ubicación y comportamiento a Plaspy, facilitando el monitoreo y los flujos operativos.

- Instalación OBDII plug and play para despliegues rápidos en campo sin necesidad de cableado.
- Seguimiento en tiempo real con informes configurables hasta intervalos de segundos y amplio almacenamiento en buffer local para cubrir cortes de cobertura.
- Conectividad LTE Cat M1 y Cat NB2 con fallback GSM para mantener alcance en múltiples redes.
- Acelerómetro de 6 ejes integrado para detección de conducción brusca y colisiones, útil en análisis de comportamiento del conductor.
- Compatibilidad BLE 4.0/5.0 para emparejar sensores de temperatura, humedad, contactos y accesorios de relé inalámbrico.
- Actualizaciones de firmware remotas vía FOTA y soporte para protocolos de transporte comunes para gestionar dispositivos a escala.

## Funciones principales del TopFly TLD2-L

- Factor de forma OBDII para instalación sin herramientas y fácil redistribución entre vehículos.
- Informes de alta frecuencia y almacenamiento en buffer en el dispositivo para preservar telemetría durante interrupciones de red.
- Conectividad LTE‑M y NB‑IoT con fallback GSM para amplia compatibilidad con operadores.
- Eventos habilitados por el acelerómetro de 6 ejes como aceleración brusca, frenado fuerte, giros pronunciados y detección de colisiones.
- Soporte de sensores BLE para ampliar la telemetría con sensores externos de temperatura, humedad o contacto y para accionar relés inalámbricos.
- Alertas de encendido y apagado de ignición, detección de desconexión y batería interna de respaldo para awareness anti manipulación.
- Firmware Over The Air (FOTA) y soporte para TCP, UDP, MQTT y SMS como protocolos de transporte para gestión remota y entrega de datos.
- Posicionamiento GNSS con tiempo rápido al primer fix y precisión adecuada para seguimiento de vehículos y operaciones de flota.

## Cómo funcionan estas funciones con Plaspy

Plaspy procesa la telemetría del TLD2-L para que los equipos puedan visualizar ubicaciones, recibir alertas de eventos y analizar el comportamiento del conductor en una vista centralizada de gestión de flota. Las opciones de reporte y las entradas de sensores del dispositivo se traducen en elementos accionables dentro de Plaspy para despacho, seguridad y monitoreo de condiciones.

- Trazas de ubicación en vivo y rutas históricas visibles en los mapas de Plaspy a partir de los informes del dispositivo.
- Eventos de comportamiento de conducción derivados del acelerómetro presentados como alertas y analítica para programas de seguridad.
- Eventos de encendido, desconexión y batería baja señalados en Plaspy para notificaciones operativas y prevención de robo.
- Telemetría de sensores BLE mostrada junto con la ubicación para correlacionar condiciones ambientales con ruta y tiempo.
- Reportes programados y subidas con buffering que ayudan a garantizar continuidad de datos en Plaspy incluso ante interrupciones temporales de la red.
- Soporte FOTA y de protocolos de transporte que permiten mantenimiento remoto y entrega confiable de datos a la plataforma.

## Casos de uso típicos

- Seguimiento de flotas y visibilidad de rutas para equipos de despacho y supervisión operativa.
- Monitoreo del comportamiento del conductor y programas de seguridad usando eventos derivados del acelerómetro.
- Monitoreo de carga y condiciones emparejando sensores BLE de temperatura y humedad con el rastreador.
- Prevención de robo y detección de manipulación mediante estado de ignición y alertas de desconexión con opciones de respuesta remota.
- Programas de vehículos compartidos o de alquiler que se benefician de la instalación rápida OBDII y el tiempo de inactividad mínimo.
- Iniciativas de activos conectados para vehículos comerciales ligeros donde la telemetría integrada y los datos de sensores son relevantes.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según el nivel de firmware; la disponibilidad y el comportamiento de FOTA dependen del firmware instalado.
- El soporte de bandas celulares y el comportamiento en red varían según la variante de hardware y la provisión de SIM/operador.
- La compatibilidad con accesorios BLE depende de los perfiles de los sensores y del soporte de firmware tanto del dispositivo como del accesorio.
- Algunos eventos y modos de reporte dependen de las condiciones de instalación y de las implementaciones OBDII del vehículo.
- Para especificaciones exactas, listas de sensores y cumplimiento normativo, consulte la documentación del fabricante para la variante de su dispositivo.

## Por qué usar Plaspy con estas funciones

Usar el TopFly TLD2-L con Plaspy ofrece una combinación práctica de despliegue rápido y visibilidad centralizada de la flota. El diseño OBDII plug and play reduce el tiempo de instalación, mientras que los informes frecuentes, los eventos del acelerómetro y las entradas de sensores BLE proporcionan al personal operativo el contexto necesario para mejorar el ruteo, la seguridad y el monitoreo de condiciones.

Para obtener más información sobre cómo funciona Plaspy con dispositivos compatibles visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, detalles de firmware y orientación del fabricante, verifique la información en el sitio de TopFly https://www.topflytech.com/ ya que las funciones de los dispositivos y el comportamiento del firmware pueden cambiar con el tiempo.
