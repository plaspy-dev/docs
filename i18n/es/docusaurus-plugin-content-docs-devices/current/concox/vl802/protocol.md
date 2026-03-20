---
slug: /concox/vl802/protocol
id: vl802-protocol
sidebar_label: Protocol
title: Concox - VL802 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Concox VL802 con Plaspy y guía de conexión y transporte
keywords:
  - protocolo Concox VL802
  - rastreador GPS Concox VL802
  - protocolo VL802 Plaspy
  - comunicación Concox VL802
  - protocolo de rastreo VL802
  - protocolo GPS Concox
  - telemetría VL802
  - rastreo de vehículos VL802
  - gestión de flotas Concox VL802
  - compatibilidad de dispositivo Plaspy
---

# Concox - Protocolo VL802

Esta página explica el contexto público de comunicación para utilizar el rastreador GPS Concox VL802 con Plaspy. Resume cómo el VL802 suele reportar ubicación y telemetría al sistema, qué ajustes de conexión se emplean y cuál es el papel del protocolo de reporte del dispositivo en una integración exitosa. La información se centra en el comportamiento a nivel de protocolo que es seguro publicar y que resulta útil para integradores y equipos de flotas.

Plaspy utiliza ajustes de endpoint compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar a la plataforma. El comportamiento exacto del protocolo en el VL802 puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; por eso esta página debe considerarse una guía general y no una referencia específica de firmware.

## Resumen del protocolo

El protocolo de comunicación del rastreador es el conjunto de reglas que el VL802 usa para transmitir coordenadas GNSS, telemetría y notificaciones de eventos a un servidor remoto. En términos generales, el protocolo permite al dispositivo identificarse ante el servidor, enviar datos de ubicación con marca temporal y datos de sensores, y transmitir mensajes de estado o eventos que Plaspy puede convertir en alertas e informes.

- Permite que el VL802 envíe actualizaciones periódicas o basadas en eventos de ubicación y telemetría a Plaspy.
- Transporta la identidad y el estado del dispositivo para que Plaspy asocie los mensajes entrantes con el registro vehicular correcto.
- Entrega alarmas y eventos de E/S como ACC, SOS y estado de relés en un formato que Plaspy puede procesar como eventos accionables.
- Traslada telemetría analógica y de sensores para que valores como nivel de combustible o sensores externos aparezcan en los paneles de Plaspy.
- Soporta flujos bidireccionales de comando y control iniciados por Plaspy para acciones remotas cuando el firmware y la configuración del dispositivo lo permiten.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y detecta automáticamente el protocolo del VL802 cuando arriban los mensajes. Dado que la detección se realiza en el servidor, la mayoría de los usuarios no necesita elegir manualmente un protocolo en la plataforma si el rastreador está configurado para reportar al endpoint correcto de Plaspy.

- Los dispositivos deben configurarse para reportar al servidor de Plaspy en la dirección d.plaspy.com o a la IP pública 54.85.159.138.
- Plaspy escucha en un único puerto para todos los dispositivos y determina automáticamente el protocolo del rastreador a partir del tráfico entrante.
- Cuando un VL802 correctamente configurado comienza a reportar a Plaspy, la plataforma empareja la identidad del dispositivo y procesa ubicación y telemetría.
- La selección manual de protocolo en Plaspy raramente es necesaria siempre que el dispositivo envíe datos al endpoint de Plaspy y utilice un transporte soportado.
- Si la detección automática no se produce, se recomienda revisar la configuración de reporte del dispositivo y la compatibilidad de firmware como siguiente paso.

## Transporte y contexto de conexión

El VL802 puede configurarse para usar UDP o TCP según el firmware del dispositivo y las preferencias del instalador. Plaspy acepta ambos modos de transporte en el puerto compartido, de modo que los instaladores pueden elegir el transporte que mejor se adapte a su red y necesidades de fiabilidad.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración entre distintos modelos de rastreadores.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; seleccione el transporte recomendado y soportado por el firmware y el entorno de red.
- Usar TCP puede mejorar la fiabilidad de entrega en redes con pérdida de paquetes, mientras que UDP reduce la sobrecarga cuando la pérdida es baja.
- Asegúrese de que el APN y el plan de datos de la SIM permitan conexiones salientes al endpoint de Plaspy y de que las reglas del operador o del firewall permitan el transporte y puerto seleccionados.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el enmarcado del protocolo, los campos disponibles o la telemetría opcional; siempre verifique las notas de la versión del proveedor.
- Las revisiones de hardware y las variantes regionales del VL802 pueden exponer conjuntos de funciones o mapeos de E/S distintos que influyan en qué telemetría aparece en Plaspy.
- Las opciones de configuración del fabricante (intervalos de reporte, umbrales de eventos, mapeo de sensores auxiliares) afectan el volumen y tipo de datos enviados a Plaspy.
- La elección del transporte (UDP vs TCP) suele ser configurable en muchas instalaciones VL802 y puede alterar la temporización y fiabilidad de los reportes.
- Valide la compatibilidad confirmando que el dispositivo apunta a d.plaspy.com o 54.85.159.138 y que usa el puerto de escucha de Plaspy.
- Se recomienda realizar pruebas de campo tras la configuración para asegurar que Plaspy reciba los eventos y la telemetría esperados.

## Por qué importa entender el protocolo

Tener un conocimiento básico del protocolo de comunicación del VL802 ayuda a instaladores, integradores y operadores de flotas a configurar correctamente los dispositivos, diagnosticar problemas intermitentes y mantener operaciones fiables a largo plazo en Plaspy. Saber dónde residan las configuraciones y qué debe reportar el dispositivo reduce el tiempo de resolución y mejora la calidad de los datos.

- Configuración más rápida al confirmar que el dispositivo reporta a d.plaspy.com o 54.85.159.138 en el puerto compartido de Plaspy.
- Resolución de problemas más clara cuando eventos o telemetría no aparecen como se espera en Plaspy.
- Mejores decisiones sobre transporte e intervalos de reporte para equilibrar uso de red y actualidad de los datos.
- Validación más sencilla de actualizaciones de firmware que puedan cambiar la telemetría o el comportamiento de eventos.
- Flujos antirrobo e inmovilizadores más fiables asegurando que los comandos y mensajes de estado son compatibles con el firmware actual del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el VL802 con Plaspy ofrece a los operadores de flotas una solución telemática robusta y orientada a empresas que aprovecha las fortalezas del hardware VL802 mientras simplifica el manejo en servidor. Plaspy ingiere ubicación GNSS, eventos de E/S y telemetría analógica del VL802 para que los equipos puedan monitorear la ubicación del vehículo, conducta del conductor y datos de sensores en una sola plataforma.

El enfoque de endpoint compartido de Plaspy reduce la complejidad de configuración al usar el mismo puerto para todos los dispositivos soportados y detectar automáticamente el protocolo del rastreador cuando el VL802 está apuntando al servidor de Plaspy. To learn more about Plaspy and how it can manage VL802 devices at scale, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware notes, and implementation guidance with the device manufacturer at https://www.iconcox.com/ as protocol support and firmware behavior can change over time.
