---
slug: /riti/670_idu_300/protocol
id: 670_idu_300-protocol
sidebar_label: Protocol
title: Riti - 670 (IDU-300) Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo Riti 670 IDU-300 sobre compatibilidad con la configuración y conexiones del servidor Plaspy
keywords:
  - protocolo Riti 670
  - Riti IDU 300
  - Riti 670 Plaspy
  - protocolo rastreador GPS Riti
  - protocolo de comunicación IDU 300
  - rastreo vehicular Riti
  - compatibilidad dispositivo Plaspy
  - rastreador GPS Plaspy
  - protocolo seguimiento de flotas
  - protocolo telemetría GPS
---

# Riti - 670 (IDU-300) Protocolo

Esta página explica el contexto público del protocolo para usar el Riti Locator 670 (IDU-300) con Plaspy. Se enfoca en cómo el equipo comunica con los servidores de Plaspy en términos generales y qué ajustes de conexión se emplean comúnmente en integraciones con Plaspy. El contenido está dirigido a gerentes de flota e integradores para que comprendan el papel del protocolo de comunicación del rastreador sin divulgar detalles privados del fabricante.

El Locator 670 es un rastreador GPS para vehículo compatible con Plaspy, con GNSS de alta sensibilidad, reportes frecuentes y soporte para múltiples periféricos. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos del dispositivo consulte la documentación oficial de Riti.

## Visión general del protocolo

El protocolo de comunicación del dispositivo define cómo se reportan al servidor telemático las posiciones GNSS, la telemetría y los eventos de periféricos. Para el Riti 670 usado con Plaspy, el protocolo permite el transporte fiable de ubicación y datos de sensores y soporta el almacenamiento local y la subida de datos tras la recuperación de conectividad.

- Transporta reportes de posición GNSS, kilometraje y odómetro, voltaje de batería y eventos de periféricos al servidor.
- Codifica telemetría multi-sensor para que Plaspy pueda mostrar mapas en vivo, alertas e informes históricos.
- Soporta almacenamiento local de registros para retener datos durante pérdida de conectividad y subirlos posteriormente.
- Permite que el rastreador se identifique y transmita el estado del dispositivo necesario para los flujos de trabajo de la flota.
- Lleva notificaciones de eventos como SOS, alertas de DVR y umbrales de sensores para las alarmas gestionadas por Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un punto de entrada compartido y detecta automáticamente el protocolo del rastreador sin selección manual cuando el equipo está configurado para reportar al endpoint de Plaspy. Una configuración correcta del dispositivo reduce el tiempo de puesta en marcha y facilita el procesamiento oportuno de los datos.

- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Los dispositivos deben configurarse para reportar a d.plaspy.com o directamente a la IP del servidor Plaspy.
- Cuando el dispositivo apunta al endpoint de Plaspy, la detección de protocolo se realiza en el servidor, de modo que raramente será necesario seleccionar un protocolo manualmente.
- Ajustes típicos del dispositivo que influyen en la detección y el flujo de datos incluyen APN correcto, tipo de transporte y intervalo de reporte.
- Para modelos descontinuados o legacy confirme que la versión de firmware y los ajustes de reporte coinciden con las expectativas actuales de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el rastreador abre y mantiene la ruta hacia los servidores de Plaspy. El Locator 670 puede configurarse para usar distintos modos de transporte y reenviará los datos almacenados cuando se recupere la conectividad celular.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- El dominio de servidor Plaspy d.plaspy.com y la IP del servidor 54.85.159.138 son endpoints públicos de Plaspy a los que los dispositivos pueden enviar reportes.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas con equipos mixtos.
- La elección de transporte (UDP vs TCP) puede afectar características de entrega como latencia y fiabilidad, dependiendo de la red y del comportamiento del firmware.
- Asegúrese de que el APN y las credenciales celulares estén correctos para que el rastreador pueda establecer una sesión con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, las funciones soportadas y los campos de sensor disponibles; confirme la versión de firmware al solucionar problemas.
- Las revisiones de hardware y la configuración de accesorios pueden habilitar o deshabilitar entradas de periféricos o tipos de telemetría.
- Las diferencias en el modo de transporte entre UDP y TCP son configurables en el dispositivo y pueden afectar cómo se retransmiten o reconocen los datos.
- Modelos 3G descontinuados como el Locator 670 pueden presentar limitaciones frente a estándares celulares más recientes; tenga esto en cuenta para planificación a largo plazo.
- Valide la compatibilidad con Plaspy según el comportamiento del dispositivo en su red antes de despliegues a gran escala.
- Diferencias en el lado del fabricante, como ajustes OEM personalizados, pueden alterar el endpoint de reporte por defecto o los comandos disponibles.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar que el dispositivo y Plaspy intercambien la telemetría correcta y que los datos aparezcan adecuadamente en vistas en vivo e informes. También facilita la resolución de problemas cuando los mensajes se retrasan, faltan o cuando la información de periféricos no llega como se espera.

- Acelera la configuración inicial al guiar sobre endpoint, puerto y tipo de transporte correctos.
- Ayuda a diagnosticar problemas de conectividad como APN incorrecto, puertos bloqueados o transporte mal seleccionado.
- Aclara las expectativas sobre la entrega de registros almacenados tras desconexiones intermitentes.
- Orienta decisiones sobre actualizaciones de firmware y reemplazo de equipos para la gestión del ciclo de vida de la flota.
- Permite una mejor integración de sensores y periféricos del vehículo en los flujos de trabajo de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Riti Locator 670 (IDU-300) con Plaspy ofrece a los operadores de flota acceso consolidado a posición en tiempo real, kilometraje por segundo, monitoreo de batería y un conjunto amplio de eventos de periféricos. Para flotas legacy que mantienen en operación el 670, Plaspy puede ingerir GNSS y telemetría de sensores para soportar despacho, alertas y análisis histórico sin requerir puertos o endpoints personalizados por dispositivo.

Si desea saber más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Verifique los últimos detalles específicos del protocolo del dispositivo, comportamiento del firmware y la documentación del fabricante en el sitio oficial de Riti https://www.riti.com.tw/ ya que el soporte de protocolo y las implementaciones del equipo pueden cambiar con el tiempo.
