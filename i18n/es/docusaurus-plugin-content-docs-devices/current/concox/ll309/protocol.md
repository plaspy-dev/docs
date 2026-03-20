---
slug: /concox/ll309/protocol
id: ll309-protocol
sidebar_label: Protocol
title: Concox - LL309 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el Concox LL309 con Plaspy en rastreo GPS y telemetría ambiental
keywords:
  - Concox LL309
  - protocolo LL309
  - rastreador GPS Concox LL309
  - comunicación LL309
  - compatibilidad LL309 con Plaspy
  - protocolo GPS Concox
  - protocolo de rastreo LL309
  - protocolo para rastreadores de cadena de frío
  - rastreador con telemetría ambiental
  - integración de dispositivos Plaspy
---

# Concox - Protocolo LL309

Esta página describe el contexto público del protocolo para usar el rastreador Concox LL309 con Plaspy. Se enfoca en cómo el dispositivo informa ubicación y telemetría ambiental a Plaspy más que en el detalle de los paquetes a bajo nivel. El LL309 es un rastreador compacto para carga refrigerada y paquetería con sensores de temperatura y humedad integrados, enlace LTE Cat.1 y almacenamiento en caché fuera de línea; aquí se explica de forma general cómo esa telemetría llega a la plataforma Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento del LL309 puede variar según la versión de firmware, revisiones de hardware y las implementaciones del fabricante, por lo que este resumen público explica las expectativas de transporte e integración y recomienda verificar contra el firmware del dispositivo y la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del LL309 permite que el rastreador se identifique, transmita coordenadas GNSS y envíe telemetría ambiental y estados de eventos a un servidor remoto. A grandes rasgos, el protocolo define los mensajes e informes de eventos que envía el equipo, cómo se transportan esos mensajes hacia Plaspy y qué campos contienen la telemetría y el estado que Plaspy consume para los paneles y las reglas.

- Permite que el LL309 reporte ubicación derivada de GNSS y telemetría multisensor como temperatura, humedad, apertura/forzado y estado de batería a Plaspy.
- Transporta actualizaciones periódicas de posición y alertas por eventos para que Plaspy pueda activar notificaciones y reglas en flujos de trabajo de cadena de frío y antirobo.
- Incluye mecanismos de almacenamiento en caché y posterior envío para que los registros retenidos durante periodos sin conectividad se entreguen cuando se restablezca el enlace.
- Soporta tanto transmisión en tiempo real como cargas por lotes según la configuración del dispositivo y las condiciones de la red.
- Funciona con Plaspy como receptor de telemetría, donde la plataforma asigna los campos entrantes a elementos de rastreo, sensores y eventos en la vista de flota.

## Cómo Plaspy detecta el protocolo

Plaspy recibe telemetría en un único endpoint y puerto compartidos y realiza identificación automática del protocolo para dispositivos correctamente configurados para reportar a Plaspy. Cuando un LL309 apunta al endpoint de Plaspy y comienza a reportar, la plataforma correlacionará los datos entrantes con una rutina de análisis soportada, por lo que normalmente no es necesaria la selección manual del protocolo.

- Plaspy escucha conexiones y reportes entrantes en d.plaspy.com y también acepta conexiones directas a 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Los dispositivos pueden configurarse para usar UDP o TCP y Plaspy acepta ambos transportes en el puerto compartido.
- Si un equipo está configurado para reportar al endpoint de Plaspy, los usuarios normalmente no necesitan seleccionar el protocolo manualmente dentro de Plaspy.
- La detección automática de Plaspy reduce pasos de configuración, pero es esencial que los ajustes de reporte del dispositivo sean correctos para una detección fluida.

## Transporte y conexión

El LL309 puede enviar datos por UDP o TCP dependiendo de su configuración y del comportamiento de la red celular. Para la integración con Plaspy, apunte el rastreador a la dirección del servidor Plaspy y use el puerto compartido en el que Plaspy recibe para garantizar que el dispositivo pueda alcanzar la plataforma y ser detectado automáticamente.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP directa 54.85.159.138 para ingestión en Plaspy.
- Plaspy acepta conexiones UDP y TCP en el mismo puerto, lo que simplifica los ajustes en el dispositivo.
- El puerto compartido usado por Plaspy es consistente entre todos los dispositivos soportados para minimizar errores de configuración.
- En escenarios de cobertura intermitente, el LL309 almacena registros localmente y los sube cuando recupera conectividad con el endpoint de Plaspy.
- Los métodos locales de configuración por BLE, SMS o USB en el LL309 suelen emplearse para establecer el endpoint de Plaspy y la selección del transporte durante la puesta en marcha.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de mensajes, los campos o la telemetría opcional; verifique qué versión de firmware tiene el LL309 para conocer el comportamiento esperado.
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas, los transportes o las opciones de sensores disponibles y cómo se codifica la telemetría.
- La selección de transporte (UDP versus TCP) es una decisión de configuración que puede influir en el comportamiento de entrega y debe alinearse con las condiciones de red y las recomendaciones del operador de SIM.
- La configuración local vía BLE o exportación Type C es útil para confirmar que el dispositivo está ajustado para reportar a d.plaspy.com o a la IP de Plaspy y que se está usando el puerto correcto.
- Valide cualquier comando o cambio de reporte específico del dispositivo contra la documentación oficial de Concox cuando se requiera conocer el comportamiento preciso de los mensajes.
- La detección automática de Plaspy funciona para modos de reporte estándar, pero firmwares personalizados atípicos o endpoints de reporte no estándar pueden requerir validación adicional.

## Por qué es importante entender el protocolo

Comprender cómo el LL309 se comunica con Plaspy ayuda a garantizar una configuración confiable, una interpretación precisa de la telemetría y un comportamiento predecible en flotas de producción. Un conocimiento práctico del protocolo y del contexto de transporte reduce el tiempo de integración y simplifica la resolución de problemas cuando las alertas o la telemetría no coinciden con lo esperado.

- Asegura la correcta configuración del dispositivo para que el LL309 reporte a d.plaspy.com o 54.85.159.138 usando el puerto compartido de Plaspy.
- Ayuda a diagnosticar problemas de conectividad confirmando si el equipo usa UDP o TCP y si los datos en caché se están subiendo.
- Permite a los operadores verificar que campos de telemetría ambiental como temperatura y humedad están llegando y mapeándose correctamente en Plaspy.
- Facilita la planificación de actualizaciones de firmware, ya que los cambios pueden afectar la cadencia de reporte o los campos de telemetría disponibles.
- Contribuye a integrar flujos de trabajo de alarmas aclarando qué eventos enviará el rastreador y cómo Plaspy los consumirá.

## Por qué usar Plaspy con este protocolo

Usar el Concox LL309 con Plaspy ofrece un camino simplificado para combinar seguimiento de ubicación preciso con telemetría ambiental para cadena de frío, entrega de paquetería y protección de activos de alto valor. Plaspy ingiere datos GNSS y lecturas de sensores, aplica reglas y notificaciones configurables y preserva el historial de eventos para que los equipos operativos puedan actuar ante variaciones de temperatura, alertas de manipulación y condiciones de batería baja.

El enfoque de endpoint compartido de Plaspy significa que los dispositivos LL309 solo necesitan configurarse para reportar a d.plaspy.com o a la IP directa 54.85.159.138 en el puerto de la plataforma, y Plaspy detectará automáticamente el protocolo del dispositivo para que usted pueda concentrarse en el despliegue en lugar de en la selección de protocolo. Learn more about Plaspy at https://www.plaspy.com and verify the latest device and protocol details on the manufacturer site https://www.iconcox.com/. Note that protocol support, firmware behavior, and manufacturer implementation details can change over time so confirm current information with the official Concox documentation.
