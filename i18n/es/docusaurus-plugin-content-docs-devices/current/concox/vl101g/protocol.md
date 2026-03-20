---
slug: /concox/vl101g/protocol
id: vl101g-protocol
sidebar_label: Protocol
title: Concox - VL101G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador Concox VL101G con Plaspy para seguimiento de flotas y telemática
keywords:
  - Protocolo Concox VL101G
  - Protocolo GPS Concox VL101G
  - Compatibilidad VL101G con Plaspy
  - Comunicación Concox VL101G
  - Protocolo de rastreo VL101G
  - Telemática Concox
  - Rastreador vehicular VL101G
  - Dispositivos compatibles con Plaspy
  - Protocolo de rastreador GPS
  - Rastreador para gestión de flotas
---

# Concox - Protocolo VL101G

Esta página describe el contexto del protocolo público para usar el rastreador GPS Concox VL101G con Plaspy. Explica cómo el equipo suele reportar posición, telemetría y eventos de entradas/salidas (E/S) a Plaspy y qué esperar de la comunicación dispositivo-plataforma sin entrar en detalles privados de implementación.

Plaspy utiliza un punto de conexión y puerto compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que parámetros como la frecuencia de mensajes, los canales de telemetría y las funciones opcionales pueden diferir entre unidades.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas que sigue el VL101G para enviar coordenadas GNSS, telemetría y eventos de E/S desde el vehículo hacia un endpoint en la nube. Para la integración con Plaspy, el protocolo determina cómo el VL101G se identifica, reporta la posición y el estado, y entrega los canales de telemetría que la plataforma mapea en paneles, alertas y registros históricos.

- Permite enviar posiciones GNSS y marcas de tiempo que Plaspy usa para el rastreo en tiempo real y el historial.
- Transmite telemetría del vehículo y eventos de entradas digitales como estado de ignición, alarmas y lecturas de sensores.
- Soporta almacenamiento en búfer y subida de registros cuando se restablece la cobertura celular, preservando el historial para la ingestión por Plaspy.
- Proporciona actualizaciones de estado y latidos (heartbeats) para que Plaspy pueda monitorear disponibilidad y conectividad del dispositivo.
- Permite asociar señales de control y acciones remotas con canales de E/S del dispositivo cuando el hardware y el firmware lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint de ingestión unificado y un puerto para el reporte de dispositivos y realiza la identificación del protocolo de forma automática cuando un rastreador compatible reporta ahí. En la mayoría de los casos, un VL101G configurado para reportar a Plaspy será reconocido y comenzará a entregar datos utilizables sin selección manual de protocolo en la plataforma.

- Plaspy usa un endpoint de servidor compartido y un único puerto para todos los dispositivos, lo que simplifica la configuración.
- Cuando un VL101G apunta al endpoint de Plaspy, la plataforma detecta el protocolo del rastreador de forma automática.
- Generalmente no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint.
- Una configuración adecuada del dispositivo y un firmware actualizado ayudan a asegurar que el rastreador reporte los canales de telemetría esperados a Plaspy.
- Si un dispositivo no aparece de inmediato, se recomienda validar la configuración de red y la documentación del fabricante como siguiente paso.

## Transporte y contexto de conexión

El transporte de la conexión determina cómo el VL101G envía los mensajes del protocolo a Plaspy. El VL101G soporta modos comunes de enlace celular y puede configurarse para usar UDP o TCP según la versión de firmware y la preferencia del instalador. Para la integración con Plaspy use el endpoint y puerto compartidos de Plaspy.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138.
- El puerto de red usado para reportar a Plaspy es 8888 y este mismo puerto se usa para todos los dispositivos en Plaspy.
- El VL101G puede ajustarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración del equipo.
- El enlace celular (LTE Cat 1 con fallback 2G para el VL101G) transporta los mensajes del protocolo hasta el endpoint de Plaspy.
- Confirme la configuración de APN, SIM y el registro en la red en el dispositivo para que pueda alcanzar d.plaspy.com o la IP del servidor.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden habilitar o deshabilitar ciertos canales de telemetría y comportamientos de E/S. Verifique siempre la versión de firmware de la unidad.
- Revisiones de hardware o variantes de SKU pueden cambiar las entradas, salidas o los modos inalámbricos disponibles, lo que afecta los datos reportados.
- La selección del transporte entre UDP y TCP puede alterar el comportamiento en redes deficientes; siga las recomendaciones del fabricante para el transporte más adecuado según su despliegue.
- La detección automática de protocolo de Plaspy reduce la configuración manual, pero no sustituye la validación de los ajustes del dispositivo y la accesibilidad de red.
- Los ejemplos de configuración y los conjuntos de comandos del fabricante son fuente autorizada para la configuración en el lado del dispositivo y deben consultarse para funciones avanzadas.
- Al integrar inmovilizadores o control de relés, asegúrese de que el cableado y las políticas de seguridad cumplan con los requisitos del vehículo y la normativa, y confirme los comandos soportados con el fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación facilita una configuración exitosa, agiliza la resolución de problemas y asegura una operación consistente a largo plazo al usar el VL101G con Plaspy. Saber qué debe enviar el dispositivo y cómo se conecta reduce errores de configuración y aclara qué canales de telemetría estarán disponibles en Plaspy.

- Asegura la configuración correcta del dispositivo para APN, selección de transporte y endpoint objetivo para que el rastreador reporte a Plaspy.
- Ayuda a diagnosticar problemas de conectividad confirmando que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Aclara qué canales de telemetría y eventos de E/S recibirá la plataforma en función del firmware y la revisión de hardware.
- Orienta en la elección del modo de transporte y el comportamiento esperado en distintas condiciones de red.
- Facilita la planificación del almacenamiento en búfer y la continuidad de los datos durante brechas de cobertura o pérdida de energía.

## Por qué usar Plaspy con este protocolo

Usar el Concox VL101G con Plaspy ofrece a las organizaciones una forma práctica de convertir GNSS de alta precisión, telemetría vehicular y eventos de E/S en información operativa. Plaspy ingiere el flujo de reportes del VL101G para proporcionar ubicación en tiempo real, alertas por ignición y manipulación, análisis de comportamiento de conducción y reportes históricos útiles para optimizar flotas, operaciones de alquiler y procesos de seguridad.

Plaspy simplifica la integración al usar un único endpoint de ingestión y puerto compartido para todos los dispositivos compatibles y al detectar automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. Para saber más sobre Plaspy y cómo funciona con dispositivos como el VL101G visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y la guía del fabricante, confirme la información más reciente en el sitio oficial de Concox https://www.iconcox.com/.
