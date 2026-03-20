---
slug: /teltonika/fmm800/protocol
id: fmm800-protocol
sidebar_label: Protocol
title: Teltonika - FMM800 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador Teltonika FMM800 con Plaspy, configuración y notas de compatibilidad
keywords:
  - Protocolo Teltonika FMM800
  - Protocolo GPS Teltonika FMM800
  - Compatibilidad FMM800 Plaspy
  - Protocolo de comunicación FMM800
  - Protocolo rastreador GPS Teltonika
  - Rastreador OBD II FMM800
  - Protocolo seguimiento vehicular
  - Compatibilidad dispositivos Plaspy
  - Protocolo seguimiento de flotas
  - Comunicación rastreador GPS
---

# Teltonika - Protocolo FMM800

Esta página describe el contexto público del protocolo para usar el rastreador GPS Teltonika FMM800 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión utiliza y consideraciones prácticas para integrar este rastreador OBD II plug and play en un flujo telemático centralizado.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware del FMM800, la revisión de hardware y la implementación del fabricante, por lo que esta guía se mantiene en un nivel público y no sensible, resaltando los puntos clave de comunicación para una integración confiable.

## Resumen del protocolo

El protocolo que usa el FMM800 regula cómo el rastreador se autentica, reporta ubicación y telemetría, y entrega datos de eventos desde el OBD II del vehículo y sensores a bordo hacia Plaspy. En la práctica, el protocolo traduce mediciones crudas del dispositivo en mensajes identificados y con sello de tiempo que Plaspy puede procesar para mapas, alertas e informes.

- Permite que el FMM800 se identifique y envíe a Plaspy ubicación, telemetría OBD II, eventos de acelerómetro y datos de sensores BLE.
- Transporta actualizaciones periódicas de posición y mensajes impulsados por eventos utilizados para alertas como frenadas bruscas o cambios de ignición.
- Incluye identificadores del dispositivo y metadatos que permiten a Plaspy asociar los reportes entrantes con el registro vehicular correcto.
- Soporta la entrega de valores de sensores auxiliares reenviados desde dispositivos BLE emparejados con el FMM800.
- Permite acciones de configuración remota y actualizaciones de firmware iniciadas mediante herramientas de Teltonika, mientras Plaspy se enfoca en la ingestión y visualización de datos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y usa esa conexión entrante para identificar automáticamente el protocolo del rastreador. En la mayoría de las implementaciones, un FMM800 correctamente configurado solo necesita apuntar a Plaspy y la plataforma reconocerá el tipo de dispositivo y comenzará a ingerir datos sin selección manual de protocolo.

- Plaspy escucha en un puerto común para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador a partir del tráfico entrante.
- Normalmente usted configura el FMM800 para que reporte al endpoint de Plaspy en lugar de seleccionar un protocolo dentro de la interfaz de Plaspy.
- La detección automática reduce pasos de configuración y facilita el despliegue de modelos diversos a escala.
- Si un dispositivo no aparece como se espera, verifique la configuración de reporte del equipo, la versión de firmware y que esté apuntando al endpoint de Plaspy.

## Contexto de transporte y conexión

La elección del transporte y los objetivos DNS determinan cómo el FMM800 se conecta a Plaspy. El dispositivo puede configurarse para usar UDP o TCP según el soporte del equipo y los requisitos del sitio. Plaspy expone un único endpoint accesible que los dispositivos deben usar al reportar.

- Los dispositivos pueden configurarse para enviar datos usando UDP o TCP en el puerto 8888 según el soporte del equipo y su transporte preferido.
- Las unidades FMM800 pueden apuntarse al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 al configurar el endpoint de reporte.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica el aprovisionamiento y las reglas de firewall.
- Usar el transporte y endpoint correctos asegura que los mensajes lleguen y puedan ser detectados y procesados automáticamente por Plaspy.
- Asegúrese de que la operadora móvil o la red del vehículo permitan tráfico saliente hacia el endpoint de Plaspy y el transporte elegido.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre versiones de Teltonika pueden cambiar qué campos de telemetría están disponibles o cómo se reportan ciertos eventos.
- Las revisiones de hardware o variantes regionales del FMM800 pueden presentar ligeras diferencias en interfaces soportadas, como BLE o comportamiento de bandas celulares.
- Las herramientas del fabricante, como Teltonika Configurator y FOTA WEB, son el método principal para gestionar firmware y configuraciones del dispositivo que afectan el comportamiento del protocolo.
- La elección de transporte entre UDP y TCP puede afectar las características de entrega de mensajes y debe alinearse con sus necesidades de fiabilidad y latencia.
- Valide la compatibilidad y la telemetría disponible consultando la documentación de Teltonika para la versión de firmware y la revisión de hardware del FMM800 que piensa desplegar.
- Al integrar a escala, pruebe un dispositivo de muestra con su red y ajustes de Plaspy antes de aprovisionar en masa.

## Por qué es importante comprender el protocolo

Tener una comprensión práctica del protocolo de comunicación del rastreador ayuda a asegurar una instalación confiable, simplifica la resolución de problemas y mejora la estabilidad operativa a largo plazo al usar Plaspy para monitoreo de flotas.

- Configuración más rápida al confirmar que el dispositivo apunta al endpoint y transporte correctos antes del despliegue.
- Resolución de problemas más efectiva cuando la telemetría o los eventos no aparecen como se espera en Plaspy.
- Mejor planificación de reglas de red y firewall, dado que todos los dispositivos usan el mismo puerto y endpoint de Plaspy.
- Gestión del ciclo de vida más eficiente al alinear actualizaciones de firmware y plantillas de configuración con los formatos de datos esperados.
- Expectativas claras sobre qué valores de sensores y OBD II estarán disponibles según el firmware y la configuración del equipo.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM800 con Plaspy ofrece un camino de baja fricción hacia la visibilidad vehicular y el monitoreo operacional. La forma OBD II plug and play, combinada con opciones celulares y soporte BLE para sensores, entrega un flujo de telemetría robusto que Plaspy puede ingerir para seguimiento en tiempo real, alertas e informes históricos. Esta combinación es útil para gerentes de flotas, plataformas de car sharing y operadores logísticos que requieren datos de ubicación y diagnóstico vehicular oportunos sin instalaciones complejas.

Para saber más sobre cómo Plaspy maneja la integración y el reporte de dispositivos, visite https://www.plaspy.com. Para los detalles más actuales a nivel de dispositivo, notas de firmware y especificaciones de hardware, verifique la información con el fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento de firmware pueden cambiar con el tiempo.
