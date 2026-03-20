---
slug: /globalsat/tr_350/protocol
id: tr_350-protocol
sidebar_label: Protocol
title: GlobalSat - TR-350 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el GlobalSat TR 350 con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - protocolo GlobalSat TR 350
  - protocolo GPS GlobalSat TR 350
  - compatibilidad TR 350 Plaspy
  - protocolo de comunicación TR 350
  - protocolo de rastreo TR 350
  - protocolo de rastreador GPS
  - protocolo de rastreador personal
  - compatibilidad de dispositivos Plaspy
  - integración de rastreadores Plaspy
  - GNSS Wi Fi BLE posicionamiento
---

# GlobalSat - Protocolo TR-350

Esta página ofrece contexto público sobre el protocolo para usar el rastreador personal GlobalSat TR-350 con Plaspy. Resume cómo el dispositivo se comunica con Plaspy en términos generales, el papel del protocolo de reporte del rastreador y los detalles de conexión prácticos que necesitará al aprovisionar unidades para monitoreo en tiempo real. El contenido se enfoca en información pública y no sensible, y está pensado para ayudar a operadores e integradores a comprender la relación de comunicación entre el TR-350 y Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene un enfoque de alto nivel mientras señala los hechos concretos de conexión que necesitará para la integración y el diagnóstico.

## Resumen del protocolo

El TR-350 utiliza un protocolo de reporte para enviar datos de ubicación, telemetría y eventos desde el rastreador a un servidor remoto. El protocolo define cómo el dispositivo se identifica, cómo informa coordenadas GNSS y fuentes asistidas de posicionamiento, y cómo comunica eventos de estado como SOS, batería y alertas de movimiento a Plaspy para su ingestión y procesamiento.

- Permite que el dispositivo envíe fijaciones GNSS junto con datos de posicionamiento asistido por Wi‑Fi y Bluetooth LE al backend.
- Transporta indicadores de SOS y eventos como movimiento y detección de caídas para que Plaspy pueda desencadenar alertas y flujos de trabajo.
- Comunica telemetría de salud del dispositivo, como nivel de batería y estado de conectividad, para el monitoreo de disponibilidad.
- Permite que el rastreador presente una identidad de dispositivo única para que Plaspy pueda correlacionar los mensajes entrantes con el activo correcto.
- Proporciona la carga útil que Plaspy ingiere y transforma en historial de ubicaciones, alertas y paneles para operadores.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador en función de los datos que reporta el dispositivo. Para la mayoría de usuarios, la plataforma identificará el protocolo sin selección manual, siempre que el rastreador esté configurado para reportar a la dirección y puerto del servidor de Plaspy.

- Plaspy expone un endpoint de servidor compartido para reportes de dispositivos en d.plaspy.com y la IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica y uniforma el enrutamiento de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan reportes correctamente configurados a la plataforma.
- En despliegues típicos no es necesario seleccionar un protocolo en Plaspy si el TR-350 está apuntando al endpoint de Plaspy.
- Si ocurren problemas de detección, revisar la configuración de reporte del dispositivo y las notas de firmware es el siguiente paso recomendado.

## Transporte y contexto de conexión

La conexión a Plaspy se establece usando opciones de transporte comunes soportadas por el TR-350. El dispositivo puede configurarse para enviar sus reportes por UDP o TCP a Plaspy, usando el mismo puerto que Plaspy utiliza para todos los dispositivos. Estos detalles de transporte son los ajustes de red principales necesarios para apuntar el rastreador a Plaspy para la ingestión de datos en vivo.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según las capacidades del dispositivo y del firmware.
- El endpoint de reporte de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138, accesibles en el puerto compartido.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que facilita el aprovisionamiento de flotas.
- Elija UDP o TCP según las opciones de configuración del rastreador y las condiciones de red en su despliegue.
- Confirme que cualquier firewall de red o configuración del operador permita tráfico saliente hacia el endpoint de Plaspy en el transporte y puerto configurados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte y los eventos disponibles; siempre verifique la versión de firmware instalada en las unidades TR-350.
- Las revisiones de hardware o variantes regionales pueden afectar las bandas celulares disponibles o el comportamiento del posicionamiento asistido; valide según las etiquetas del dispositivo y las notas del fabricante.
- Las configuraciones predeterminadas del fabricante pueden apuntar a endpoints distintos; asegúrese de que las unidades estén configuradas para reportar a d.plaspy.com o 54.85.159.138 en el puerto compartido.
- La selección de transporte entre UDP y TCP puede influir en la confiabilidad y debería coincidir con la configuración del rastreador y las características de la red.
- La detección automática de Plaspy reduce la configuración manual, pero se recomienda verificar los mensajes entrantes durante el aprovisionamiento inicial.
- Para opciones de gestión de dispositivos y aprovisionamiento remoto, consulte al fabricante o a su distribuidor sobre los métodos soportados.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una configuración exitosa, un diagnóstico eficaz y una operación confiable a largo plazo del TR-350 cuando se usa con Plaspy. Tener claro qué reporta el rastreador y cómo llega al servidor reduce el tiempo de inactividad y mejora la calidad de los datos de ubicación y eventos disponibles para los operadores.

- Permite validar que los eventos de SOS, movimiento, caída y batería se transmiten e interpretan correctamente en la plataforma.
- Orienta la elección entre UDP y TCP para obtener el mejor equilibrio entre latencia y fiabilidad en su entorno.
- Facilita el diagnóstico cuando los dispositivos no aparecen en la plataforma, al centrar las comprobaciones en endpoint de conexión, puerto y comportamiento del firmware.
- Ayuda a planificar mejor el posicionamiento asistido en interiores al entender cómo se entregan los datos GNSS, Wi‑Fi y Bluetooth LE.
- Reduce el tiempo de despliegue al aclarar qué ajustes del dispositivo deben coincidir con los parámetros de conexión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat TR-350 con Plaspy ofrece a las organizaciones una solución enfocada para monitoreo de seguridad personal y respuesta a incidentes en tiempo real. La combinación del TR-350 de GNSS de alta sensibilidad, posicionamiento por Wi‑Fi y soporte de balizas Bluetooth LE proporciona un contexto de ubicación más rico que Plaspy puede ingerir y presentar a cuidadores, centros de respuesta o equipos de operaciones. Los eventos integrados de SOS y la funcionalidad de voz bidireccional encajan de forma natural en las alertas y flujos de incidentes de Plaspy para agilizar la respuesta.

Para obtener más información sobre Plaspy y cómo puede integrarse con dispositivos como el TR-350, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la documentación de protocolo específica del dispositivo y las notas de firmware más recientes con el fabricante en https://www.globalsat.com.tw/.
