---
slug: /navtelekom/s_2115/protocol
id: s_2115-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2115 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para compatibilidad del Navtelekom СИГНАЛ S-2115 con servidores Plaspy y guía de conexión
keywords:
  - Protocolo Navtelekom S-2115
  - Navtelekom СИГНАЛ S-2115
  - Protocolo GPS S-2115
  - Comunicación S-2115
  - Compatibilidad dispositivos Plaspy
  - Rastreador GPS Plaspy
  - Protocolo rastreo vehicular
  - Rastreador GLONASS GPS
  - Reporte alarmas S-2115
  - Integración rastreador heredado
---

# Navtelekom - СИГНАЛ S-2115 Protocolo

Esta página describe el contexto público del protocolo para integrar el tracker Navtelekom СИГНАЛ S-2115 con la plataforma Plaspy. Se centra en cómo el equipo se comunica de forma general, cómo Plaspy procesa los datos del tracker y qué aspectos verificar al incorporar unidades S-2115. El S-2115 es un rastreador vehicular GLONASS/GPS con comunicaciones GSM, acelerómetro interno para detección de impacto e inclinación, notificaciones por SMS y voz, y un configurador USB para ajustes locales y actualizaciones de firmware.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto de los reportes y el manejo de comandos puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles específicos pueden diferir entre unidades S-2115 archivadas y otros equipos de la familia SIGNAL.

## Resumen del protocolo

El protocolo de comunicación S-2115 es el mecanismo que usa el tracker para enviar posición, alarmas y estado a un servidor central, y para recibir comandos remotos o configuraciones vía GSM. Para la integración con Plaspy, lo importante públicamente es cómo el dispositivo establece la conexión de transporte, se identifica y envía telemetría y notificaciones de eventos que la plataforma puede interpretar para seguimiento en tiempo real y alertas.

- Transporta datos GNSS de posición además de información de eventos como impacto, inclinación, estado de energía y eventos de entradas/salidas.
- Transmite telemetría y alarmas por datos celulares u otros canales que Plaspy puede ingerir para monitoreo en vivo.
- Proporciona identidad del dispositivo e información de sesión para que un servidor asocie los reportes entrantes con un vehículo rastreado.
- Permite consultas de parámetros remotos y comandos simples a través del transporte soportado o canales secundarios como SMS o voz.
- Funciona junto con herramientas locales de configuración USB y actualizaciones de firmware, las cuales afectan el comportamiento del dispositivo en la red.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones en un endpoint común de ingestión y determina automáticamente el protocolo del tracker entrante cuando recibe reportes del dispositivo correctamente configurado. Para la mayoría de usuarios esto implica asegurarse de que el S-2115 apunte al endpoint de Plaspy y que la configuración de transporte de red coincida con las capacidades del equipo. Normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy cuando el dispositivo está enviando datos al endpoint de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 para configuración por IP directa.
- El puerto de ingestión usado por Plaspy es 8888 y es el mismo puerto para todos los dispositivos soportados por Plaspy.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración del sitio.
- Plaspy detecta automáticamente el protocolo del tracker una vez que el dispositivo se conecta al endpoint y comienza a reportar.

## Transporte y contexto de conexión

Al integrar el S-2115 con Plaspy, conviene centrarse en el transporte y la dirección que usa el equipo para llegar a Plaspy más que en los detalles de paquete a bajo nivel. El S-2115 puede enviar fixes GNSS y alarmas a través de redes celulares; las elecciones de configuración determinan si los reportes llegan a Plaspy vía UDP o TCP y si el dispositivo apunta a un nombre DNS o a una dirección IP.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El transporte de red puede ser UDP o TCP en el puerto 8888 según la configuración del dispositivo.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados para simplificar la incorporación.
- Si se conecta por DNS, asegúrese de que el dispositivo tenga el APN y los ajustes de datos celulares correctos.
- La configuración local por USB mediante el configurador del proveedor se usa habitualmente para establecer endpoints de reporte y preferencias de transporte antes del despliegue.

## Notas sobre compatibilidad del protocolo

- Diferencias de firmware entre unidades S-2115 archivadas pueden cambiar el formato de los reportes y los campos incluidos.
- Revisiones de hardware o variantes de producción pueden afectar las entradas disponibles, el comportamiento de alarmas o los modos de transporte soportados.
- Cambios por parte del fabricante o builds regionales de firmware pueden introducir variaciones en la sintaxis de comandos o la cadencia de reportes.
- La selección de transporte entre UDP y TCP puede influir en la entrega, en características como confiabilidad y latencia.
- Los métodos de alarma por SMS y voz existen por separado de la transmisión de datos y pueden usarse para escalamiento de alertas o para equipos sin conexión de datos activa.
- Valide el comportamiento esperado frente a la guía del operador del dispositivo y las herramientas NTC Configurator disponibles cuando sea posible.

## Por qué es importante conocer el protocolo

Comprender de forma práctica cómo se comunica el S-2115 ayuda a asegurar una incorporación fiable, una resolución de problemas efectiva y telemetría consistente a largo plazo para los usuarios de Plaspy. Saber qué reportará el equipo y cómo establece conexiones reduce la fricción en la integración y facilita que los equipos de operaciones interpreten alertas y registros históricos.

- Garantiza que el equipo apunte al endpoint correcto de Plaspy y use el transporte soportado.
- Ayuda a diagnosticar problemas de conectividad separando factores de red, transporte y configuración del dispositivo.
- Permite mapear con precisión los eventos del equipo a flujos de trabajo de alarmas y reportes en Plaspy.
- Orienta decisiones sobre actualizaciones de firmware, uso del configurador local y prácticas de despliegue para unidades archivadas.
- Facilita la planificación de canales de respaldo como SMS o voz cuando los datos celulares son poco fiables.

## Por qué usar Plaspy con este protocolo

Usar el Navtelekom СИГНАЛ S-2115 con Plaspy ofrece visibilidad centralizada de la ubicación de vehículos, alarmas por eventos y telemetría operativa en la que confían gestores de flotas y equipos de seguridad. Plaspy consume los reportes de posición y eventos del S-2115 para poblar paneles, activar alertas configurables y mantener registros históricos para análisis y revisión de incidentes. En despliegues heredados o archivados, el S-2115 sigue siendo útil para rastreo básico y alarmas basadas en acelerómetro cuando está correctamente configurado.

Para conocer más sobre Plaspy y cómo gestiona la ingestión de dispositivos, los reportes y las alertas, visite https://www.plaspy.com. Para obtener los detalles más actuales específicos del protocolo del dispositivo, comportamiento de firmware y herramientas de configuración para el СИГНАЛ S-2115, verifique la información en el sitio del fabricante https://www.navtelecom.ru/ ya que las implementaciones de dispositivos y las versiones de firmware pueden cambiar con el tiempo.
