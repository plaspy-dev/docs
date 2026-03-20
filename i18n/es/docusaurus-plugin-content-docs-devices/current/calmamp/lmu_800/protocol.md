---
slug: /calmamp/lmu_800/protocol
id: lmu_800-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-800 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CalmAmp LMU-800 y cómo se comunica con Plaspy para seguimiento de flotas y vehículos
keywords:
  - CalmAmp LMU 800
  - protocolo LMU 800
  - CalmAmp LMU 800 GPS
  - compatibilidad LMU 800 Plaspy
  - protocolo de rastreo CalmAmp
  - comunicación rastreador vehicular
  - seguimiento de flotas CalmAmp
  - protocolo de seguimiento LMU 800
  - integración PEG PULS CalmAmp
  - rastreador GPS Plaspy
---

# CalmAmp - Protocolo LMU-800

Esta página ofrece un contexto público sobre el protocolo utilizado por el rastreador CalmAmp LMU-800 cuando se integra con Plaspy. Explica cómo suele comunicarse el dispositivo con Plaspy y qué papel tiene el protocolo de reporte para entregar datos de ubicación y eventos. La información está orientada a la integración y el contexto de conexión, no a formatos propietarios internos.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo comienza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo en el LMU-800 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración y el comportamiento en tiempo de ejecución pueden diferir entre instalaciones.

## Resumen del protocolo

El protocolo es el mecanismo que usa el LMU-800 para identificarse ante un servidor, reportar datos GPS y de sensores, y transmitir eventos como movimiento, cambios de entrada o batería baja. Para integrarlo con Plaspy, el protocolo determina qué datos se envían, cuándo se envían y cómo el dispositivo y el servidor reconocen o registran esos mensajes.

- Permite que el LMU-800 envíe posiciones, marcas de tiempo y telemetría básica a un servidor remoto.
- Transporta información de eventos y alertas generadas por el dispositivo o por reglas PEG de CalmAmp, como eventos de movimiento o geocercas.
- Identifica el dispositivo ante el servidor para que Plaspy pueda asociar los reportes entrantes con el registro de activo correcto.
- Facilita el reporte periódico y el reporte por excepciones según la configuración del dispositivo y la de PEG.
- Funciona en conjunto con características de energía y sensores del dispositivo, como la batería de respaldo interna y el acelerómetro, para mantener un rastreo confiable.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartidos para conexiones de rastreadores y detecta automáticamente el protocolo una vez que el dispositivo comienza a reportar. En la mayoría de los casos, un LMU-800 correctamente configurado y apuntando a Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, al que los dispositivos pueden apuntar para reportes.
- La IP del servidor Plaspy es 54.85.159.138 y el servicio acepta conexiones en el puerto 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del rastreador y el soporte de firmware.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración e incorporación de equipos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan reportes válidos al endpoint compartido.
- Normalmente usted sólo necesita asegurarse de que el LMU-800 esté configurado para reportar a d.plaspy.com o a la IP del servidor; el resto se gestiona automáticamente.

## Transporte y contexto de conexión

Los detalles de conexión y transporte definen cómo el LMU-800 alcanza el servicio de Plaspy. Esta sección cubre las opciones públicas de conexión y consideraciones de red generales para la integración.

- El LMU-800 puede configurarse para usar transporte UDP o TCP para conectarse a Plaspy en el puerto 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 según preferencias de red o DNS.
- Usar el mismo puerto en todos los equipos reduce la necesidad de gestionar múltiples puertos en el backend de Plaspy.
- Los firewalls de red y la configuración APN del operador deben permitir tráfico saliente UDP o TCP hacia el endpoint de Plaspy en el puerto 8888.
- Sistemas de configuración OTA como CalAmp PULS pueden cambiar el destino de los reportes o la configuración de transporte, por lo que confirme los ajustes tras actualizaciones.
- La elección del transporte puede afectar las características de entrega de mensajes pero no el propósito general del protocolo, que es proporcionar datos de ubicación y eventos utilizables.

## Notas sobre compatibilidad del protocolo

- Las diferencias en versiones de firmware pueden modificar el intervalo de mensajes, los campos disponibles o el comportamiento de eventos; verifique compatibilidad con la revisión exacta de firmware en uso.
- Las revisiones de hardware u opcionales pueden alterar las entradas/salidas o la telemetría disponible y, por tanto, influir en lo que el dispositivo envía.
- Características del fabricante, como reglas PEG, afectan qué eventos se generan y cuándo el rastreador se comunica con el servidor.
- La elección entre UDP y TCP puede estar condicionada por condiciones de red o el comportamiento del operador en su región de despliegue.
- Las actualizaciones OTA desde PULS pueden modificar la configuración o la lógica de reporte; confirme los ajustes después de cualquier actualización remota.
- Valide el reporte del dispositivo comprobando que el LMU-800 apunte a d.plaspy.com o a la IP de Plaspy y que los puertos necesarios estén abiertos.

## Por qué es importante entender el protocolo

Comprender en la práctica el protocolo de comunicación del LMU-800 ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y mantener un rendimiento predecible a largo plazo al usar el dispositivo con Plaspy.

- Acelera el aprovisionamiento inicial porque sabrá dónde apuntar el dispositivo y qué transporte usar.
- Ayuda a diagnosticar problemas de reporte o conectividad confirmando el destino y el transporte del dispositivo.
- Permite planificar actualizaciones de firmware y comprender cómo los cambios desde PULS pueden afectar el comportamiento de reporte.
- Favorece el ajuste de eventos mediante reglas PEG para que el dispositivo envíe sólo los datos que usted necesite.
- Reduce el tiempo dedicado a configurar firewalls y APN al concentrarse en un único endpoint y puerto de Plaspy.

## Ventajas de usar Plaspy con este protocolo

Usar el CalmAmp LMU-800 con Plaspy ofrece a las organizaciones una forma directa de recopilar datos de ubicación y eventos desde un rastreador compacto orientado a vehículos, con batería de respaldo y detección de movimiento. El enfoque de endpoint unificado de Plaspy y la detección automática de protocolo simplifican la incorporación de dispositivos para que los equipos puedan enfocarse en la operación y no en la configuración por dispositivo.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de las versiones de firmware e instrucciones de configuración del fabricante, verifique la información en el sitio oficial de CalmAmp http://www.calamp.com/ ya que el comportamiento del dispositivo y el soporte de protocolo pueden cambiar con el tiempo.
