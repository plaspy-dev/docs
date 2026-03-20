---
slug: /ruptela/pro5/protocol
id: pro5-protocol
sidebar_label: Protocol
title: Ruptela - Pro5 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Ruptela Pro5 y su comunicación con Plaspy para telemática y gestión de flotas
keywords:
  - protocolo Ruptela Pro5
  - protocolo GPS Ruptela Pro5
  - protocolo de comunicación Ruptela Pro5
  - protocolo de rastreo Ruptela Pro5
  - compatibilidad Pro5 Plaspy
  - telemática de flotas Pro5
  - telemetría CAN Pro5
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular Pro5
  - integración de dispositivos Plaspy
---

# Ruptela - Pro5: Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Ruptela Pro5 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos no sensibles y en los ajustes de conexión utilizados para el reporte, dejando los detalles de firmware y paquetes propietarios a la documentación del fabricante.

Plaspy utiliza configuraciones de conexión compartidas para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según el firmware del dispositivo, la revisión de hardware y la implementación del fabricante, por lo que se recomienda realizar pruebas de campo y revisar la documentación oficial de Ruptela para características específicas del equipo.

## Resumen del protocolo

El protocolo de comunicación usado por el Pro5 define cómo el rastreador se identifica, reporta posiciones GNSS y telemetría del vehículo, y transmite eventos a Plaspy para almacenamiento y procesamiento. La función práctica del protocolo es entregar datos útiles y oportunos desde el dispositivo hacia la plataforma, permitiendo además que el dispositivo reciba comandos de gestión y configuración cuando esté soportado.

- Permite que el Pro5 entregue posición GNSS, eventos del acelerómetro y telemetría derivada de CAN a Plaspy para monitoreo en tiempo real.
- Proporciona información de identidad y sesión para que Plaspy asocie los datos entrantes con el activo y registro de dispositivo correctos.
- Transporta datos de sensores y diagnósticos del vehículo, como combustible, parámetros del motor y eventos de E/S, para su ingesta en reportes de flota.
- Soporta transporte mediante sockets IP estándar, de modo que los datos puedan encaminarse de forma fiable desde redes celulares hasta los servidores de Plaspy.
- Permite activadores de aprovisionamiento remoto cuando el dispositivo y la plataforma del fabricante soportan FOTA o actualizaciones de configuración.

## Cómo detecta Plaspy el protocolo

La capa de ingesta de Plaspy está diseñada para aceptar conexiones entrantes en un único endpoint compartido y reconocer automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta a la plataforma. En implementaciones típicas, no se requiere seleccionar manualmente el protocolo dentro de Plaspy si el dispositivo apunta al endpoint de Plaspy y envía telemetría.

- Plaspy utiliza un único endpoint público para el reporte de dispositivos y detecta automáticamente el protocolo de rastreo en las conexiones entrantes.
- Los dispositivos configurados para reportar a Plaspy solo necesitan apuntar a la dirección compartida de Plaspy para ser identificados y procesados.
- Usted generalmente no necesita seleccionar un protocolo específico dentro de Plaspy cuando el dispositivo está configurado para enviar datos al endpoint de la plataforma.
- La detección automática reduce pasos de configuración en despliegues masivos y ayuda a garantizar un manejo consistente de modelos de dispositivos diversos.
- Si un dispositivo no es reconocido, el primer paso recomendado es validar los ajustes de salida del dispositivo y el comportamiento del firmware contra la guía del fabricante.

## Transporte y contexto de conexión

El Pro5 puede configurarse para usar UDP o TCP para el reporte, según el soporte del dispositivo y las opciones de configuración. Plaspy acepta el tráfico de dispositivos en el puerto de reporte común utilizado por todos los dispositivos compatibles y puede alcanzarse tanto por nombre de dominio como por la dirección IP de la plataforma.

- El dominio de servidor de Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP de la plataforma Plaspy para configuración directa es 54.85.159.138.
- El puerto de reporte compartido para todos los dispositivos en Plaspy es 8888 y debe usarse para conexiones Pro5.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP en el puerto 8888 según las necesidades de la instalación y las capacidades del equipo.
- Usar el puerto común simplifica las reglas de firewall y de red para despliegues de flota y centraliza la ingesta.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar la temporización de mensajes, los campos de telemetría disponibles y el comportamiento del transporte; siempre verifique la versión de firmware del dispositivo al diagnosticar compatibilidad.
- Las revisiones de hardware o variantes regionales del Pro5 pueden afectar las interfaces disponibles, como el cableado CAN, puertos seriales o el soporte de bandas de radio.
- Las plataformas de aprovisionamiento del fabricante y los procesos FOTA pueden alterar la forma en que el dispositivo reporta o acepta configuración remota.
- La selección de transporte (UDP vs TCP) debe ajustarse a los requerimientos de confiabilidad de la red y al comportamiento de cualquier equipo intermedio.
- Verifique que el dispositivo esté apuntando al endpoint y puerto de Plaspy y que la configuración de SIM/APN sea correcta antes de trabajar en el análisis del parsing del protocolo.
- En caso de duda, consulte la documentación y las notas de versión de Ruptela para cambios específicos del protocolo del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar una configuración correcta, un diagnóstico eficiente y una fiabilidad a largo plazo al usar el Pro5 con Plaspy. Un conocimiento práctico de cómo el dispositivo reporta identidad, telemetría y eventos reduce el tiempo de integración y mejora la confianza operativa.

- Agiliza la incorporación inicial del dispositivo al asegurar que se apliquen los ajustes correctos de host y transporte.
- Facilita la interpretación de brechas en la telemetría, reportes duplicados o tiempos de evento inesperados.
- Ayuda a operaciones a elegir la configuración de transporte y red apropiada para una entrega confiable.
- Favorece la coordinación de actualizaciones de firmware y cambios de configuración entre las herramientas de gestión de dispositivos y Plaspy.
- Mejora la respuesta ante incidentes al clarificar qué telemetría se espera que entregue el dispositivo para alertas y reconstrucciones.

## Por qué usar Plaspy con este protocolo

El Pro5 está diseñado para entregar telemetría vehicular robusta y datos GNSS confiables para vehículos pesados; combinarlo con Plaspy proporciona a los operadores una plataforma unificada para ubicación en vivo, diagnósticos y alertas por eventos. El endpoint de ingesta compartido de Plaspy y la detección automática de protocolos simplifican los despliegues a escala de flota y permiten que los dispositivos Pro5 transmitan ubicación, datos CAN, entradas BLE y notificaciones de eventos a paneles centralizados.

Para conocer más sobre Plaspy y cómo la plataforma puede ingerir y presentar la telemetría del Pro5, visite https://www.plaspy.com. Para detalles autorizados y específicos del protocolo del dispositivo, notas de firmware e instrucciones de configuración, verifique la información más reciente en el sitio del fabricante https://ruptela.com/.
