---
slug: /astra_telematics/at202/protocol
id: at202-protocol
sidebar_label: Protocol
title: Astra Telematics - AT202 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Astra Telematics AT202 con Plaspy y lograr seguimiento y telemetría confiables
keywords:
  - Astra Telematics AT202
  - Protocolo AT202
  - Rastreador GPS AT202
  - Protocolo Astra Telematics
  - Compatibilidad AT202 Plaspy
  - Protocolo de comunicación AT202
  - Protocolo de rastreo AT202
  - Integración CANBus AT202
  - Telemática vehicular AT202
  - Rastreo de flotas AT202
---

# Astra Telematics - Protocolo AT202

Esta página describe el contexto público del protocolo para usar el Astra Telematics AT202 con Plaspy. Resume cómo el dispositivo comunica con Plaspy mediante puntos de conexión compartidos y qué aspectos del comportamiento del rastreador son más relevantes para la integración, el monitoreo y la resolución de problemas. La orientación aquí se centra en el contexto público y no sensible del protocolo, más que en detalles de implementación.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un AT202 reporta a la plataforma. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, revisión de hardware, variantes regionales y la configuración del fabricante; por eso revise las notas de firmware y la documentación del proveedor al validar funciones avanzadas.

## Resumen del protocolo

El protocolo de reporte del AT202 es el mecanismo de comunicación a nivel de dispositivo que transporta posiciones GNSS, telemetría CANBus, eventos de E/S digitales, valores ADC y flujos de sensores auxiliares desde el rastreador hasta Plaspy. En despliegues en producción, el papel del protocolo es mover de forma fiable los datos de posición y eventos a través del enlace celular hacia el servidor de Plaspy para que la plataforma pueda parsear, normalizar y presentar información de la flota.

- Transporta posición GNSS, velocidad, rumbo y marcas de tiempo para seguimiento en tiempo real y registro histórico.
- Transmite canales CANBus y entradas seriales para que Plaspy convierta la telemetría cruda en indicadores clave del vehículo.
- Entrega eventos de entradas y salidas digitales usados para puertas, encendido, inmovilizador y activadores de sensores.
- Reporta valores ADC y flujos de sensores externos para monitoreo de combustible o señales analógicas.
- Incluye información de estado y salud como respaldo de batería, conectividad celular y eventos del acelerómetro para detección de manipulación.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint de ingestión compartido y determina automáticamente el manejo de protocolo apropiado. Cuando el AT202 está configurado para reportar a Plaspy, la plataforma usa su detección y enrutamiento incorporados para reconocer el feed del dispositivo y mapear la telemetría entrante a los analizadores y esquemas de datos correctos.

- El dominio público de ingestión de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un AT202 envía datos al endpoint de Plaspy; normalmente no se requiere selección manual dentro de Plaspy si el dispositivo está apuntando correctamente.
- Una configuración adecuada del reporte del dispositivo (dominio o IP y transporte) es esencial para que la detección automática tenga éxito.
- Si la telemetría no aparece, revise primero la APN del dispositivo y la configuración del objetivo de reporte antes de cambiar ajustes de protocolo en la plataforma.

## Contexto de transporte y conexión

El AT202 soporta conectividad celular multinetwork y puede configurarse para usar UDP o TCP para el reporte de datos. Entender las opciones básicas de transporte y endpoint ayuda a asegurar que el dispositivo llegue a Plaspy de forma confiable en distintas condiciones de red y configuraciones de firmware.

- El AT202 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y ajustes del dispositivo.
- Los dispositivos pueden apuntar al dominio de ingestión de Plaspy d.plaspy.com o a la IP pública 54.85.159.138.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que reduce diferencias de configuración en una flota mixta.
- Las opciones de red celular en el AT202 incluyen GPRS, LTE‑M y NB‑IoT; la selección de red puede afectar los patrones de conectividad y los intervalos de reporte.
- Ajustes del lado del dispositivo como APN, reintentos de conexión y modos de reporte de bajo consumo influyen en la frecuencia con que los datos llegan al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los canales de telemetría disponibles o campos opcionales; siempre verifique las notas de firmware del AT202 para detectar cambios de comportamiento.
- Variantes de hardware o diferencias regionales en bandas celulares pueden afectar qué modos de transporte o redes están disponibles.
- Las elecciones de configuración del fabricante (por ejemplo transporte por defecto, intervalos de reporte o canales I/O habilitados) influyen en qué datos envía el dispositivo a Plaspy.
- Es necesario un APN correcto y una provisión adecuada de la SIM para el reporte celular; asegúrese de que la configuración del operador permita el transporte seleccionado.
- Elegir UDP frente a TCP en el dispositivo puede afectar el comportamiento de entrega bajo condiciones de conectividad pobre; seleccione el transporte compatible con su despliegue y firmware.
- Valide los mapeos importantes de I/O (canales CANBus, escalado de ADC, polaridad de entradas digitales) según la documentación del dispositivo para asegurar que Plaspy reciba telemetría útil.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del AT202 ayuda a asegurar un onboarding fluido, entrega fiable de eventos y una resolución de problemas eficiente. Saber qué datos reporta el dispositivo y cómo llegan a Plaspy reduce el tiempo de integración y respalda un monitoreo operativo consistente.

- Acelera la configuración inicial al garantizar que el AT202 apunte a d.plaspy.com o a 54.85.159.138 y use el puerto 8888 según lo requiere Plaspy.
- Ayuda a diagnosticar problemas de conectividad al clarificar si las fallas se deben al transporte, la APN o la configuración del dispositivo.
- Facilita el mapeo preciso de canales CANBus y sensores para que Plaspy presente KPIs vehiculares correctos.
- Reduce la ambigüedad sobre reportes de batería de respaldo o modos de bajo consumo y cómo esos estados aparecen en Plaspy.
- Mejora la gestión del ciclo de vida al indicar cuándo cambios de firmware o hardware pueden requerir actualizaciones de configuración.

## Por qué usar Plaspy con este protocolo

Usar el Astra Telematics AT202 con Plaspy ofrece a las organizaciones una vía robusta para capturar ubicación, telemetría de vehículos y datos de eventos en una sola plataforma. La combinación de GNSS multiconstelación, amplia cobertura celular y un conjunto de E/S completo permite a los operadores de flotas obtener posiciones precisas, telemetría de motor y sensores, y eventos de conductores para obtener información operativa y alertas.

El endpoint de ingestión compartido de Plaspy simplifica la configuración de dispositivos en flotas mixtas, y la detección automática de protocolos elimina la necesidad de seleccionar el protocolo manualmente cuando un AT202 está correctamente apuntado a la plataforma. Para saber más sobre cómo Plaspy puede trabajar con el AT202 y otros rastreadores, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que verifique la documentación y las notas de firmware más recientes del AT202 en el sitio del fabricante https://astratelematics.com/.
