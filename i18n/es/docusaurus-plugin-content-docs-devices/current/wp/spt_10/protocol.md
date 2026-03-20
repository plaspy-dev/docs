---
slug: /wp/spt_10/protocol
id: spt_10-protocol
sidebar_label: Protocol
title: WP - SPT-10 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador WP SPT-10 y su compatibilidad con Plaspy con consejos de conexión y transporte
keywords:
  - protocolo WP SPT-10
  - protocolo GPS WP SPT-10
  - protocolo de comunicación WP SPT-10
  - protocolo de rastreo WP SPT-10
  - protocolo rastreador WP
  - compatibilidad dispositivos Plaspy
  - integración rastreador GPS Plaspy
  - protocolo rastreador GPS portátil
  - compatibilidad firmware rastreador
  - ajustes de transporte del dispositivo
---

# WP - SPT-10 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador portátil GPS y GSM WP SPT-10 con Plaspy. Se centra en cómo el dispositivo se comunica con los servidores de Plaspy en términos generales, para que usted entienda los puntos de integración relevantes para la configuración, conectividad y resolución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El WP SPT-10 puede enviar ubicación y eventos por datos celulares o SMS según la configuración; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene revisar las notas del firmware cuando estén disponibles.

## Resumen del protocolo

El SPT-10 utiliza su receptor GNSS integrado y el módem celular para generar datos de posición y eventos y transmitir esos mensajes a un servidor remoto. El protocolo de comunicación define cómo se identifica el rastreador, cómo se codifican la telemetría y los eventos, y cómo el servidor reconoce o interpreta esos informes. Para la integración con Plaspy, el objetivo principal es la entrega fiable de mensajes de ubicación, alarma y estado al endpoint de Plaspy.

- Permite que el rastreador reporte posición GPS, actualizaciones de estado y alertas de eventos a un servidor remoto para monitoreo en tiempo real.
- Incluye la identidad del dispositivo y metadatos básicos para que la plataforma receptora asigne los mensajes a una unidad específica.
- Soporta modos de reporte periódicos y por evento, como intervalo de tiempo, intervalo por distancia y notificaciones de emergencia/pánico.
- Permite configuración remota y actualizaciones de firmware cuando el dispositivo soporta gestión OTA.
- Traduce la telemetría del dispositivo en registros útiles para mapeo, geocercas, control de kilometraje y alertas en Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint compartido y usa mecanismos de detección para identificar el protocolo de cada rastreador. En la mayoría de los casos usted no necesita seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138.
- La plataforma acepta reportes de dispositivos en el puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP como transporte según las capacidades del modelo y sus ajustes.
- Cuando el SPT-10 se apunta al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y procesará los mensajes entrantes según lo soportado.

## Contexto de transporte y conexión

El contexto de conexión se refiere a cómo el SPT-10 alcanza Plaspy y no tanto al formato interno de los paquetes. El rastreador puede enviar los datos reportados por la red celular usando UDP o TCP, y puede apuntarse a Plaspy por nombre de dominio o dirección IP según las prácticas locales de configuración.

- El SPT-10 puede configurarse para usar UDP o TCP en el puerto 8888 para el reporte.
- Los dispositivos pueden dirigirse al endpoint de Plaspy por dominio d.plaspy.com o directamente por la IP 54.85.159.138.
- Plaspy escucha en el mismo puerto para todos los dispositivos para simplificar la configuración y reducir errores en campo.
- La elección del transporte puede influir en el comportamiento de entrega bajo condiciones de red deficientes; consulte los ajustes del dispositivo para opciones de reintento y keepalive.
- Asegúrese de que la SIM y el operador del dispositivo permitan tráfico saliente hacia el endpoint de Plaspy y que los ajustes APN estén configurados correctamente en el rastreador.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la temporización de los mensajes, los tipos de eventos disponibles o los campos opcionales. Confirme la versión de firmware si observa comportamientos inesperados.
- Las revisiones de hardware a veces alteran los transportes soportados o los conjuntos de sensores; las etiquetas del dispositivo y los números de serie ayudan a identificar revisiones.
- Los comandos de configuración del fabricante y el comportamiento de actualizaciones OTA pueden diferir según el firmware del modelo y deben validarse antes de aplicar cambios a toda la flota.
- Seleccionar UDP frente a TCP afecta la forma en que los mensajes se reintentan y se reconocen en la red; elija el transporte que corresponda a las capacidades del dispositivo y a las condiciones de la red.
- Los ajustes de la SIM, la configuración APN y los modos de gestión de energía del SPT-10 influyen en su capacidad para mantener sesión con el endpoint de Plaspy.
- Valide siempre funciones críticas como geocercas, reporte de pánico y cálculo de kilometraje contra la documentación del fabricante y mediante pruebas con dispositivos antes de confiar en ellas operativamente.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el SPT-10 le ayuda a configurar correctamente los dispositivos, identificar dónde surgen los problemas y mantener la fiabilidad de los reportes con el tiempo. Aunque Plaspy detecta protocolos automáticamente y utiliza un puerto compartido, entender los fundamentos del transporte y el comportamiento del firmware acelera la resolución de problemas y garantiza un seguimiento preciso.

- Confirma que los dispositivos apuntan al endpoint y transporte correctos para que los reportes lleguen a la plataforma.
- Ayuda a distinguir problemas de red o SIM de fallos específicos del dispositivo durante interrupciones de conectividad.
- Orienta las decisiones sobre actualizaciones de firmware y cómo estos cambios pueden modificar el comportamiento de los mensajes o las funciones disponibles.
- Mejora la configuración de intervalos de reporte, modos de ahorro de energía y umbrales de eventos para que coincidan con las necesidades operativas.
- Permite probar de forma efectiva funciones críticas como alertas de pánico, disparo de geocercas y registro histórico.

## Por qué usar Plaspy con este protocolo

Usar el WP SPT-10 con Plaspy ofrece una vía directa para obtener ubicación en tiempo real, monitoreo de eventos y rutas históricas, tanto para rastreadores portátiles pequeños como para implementaciones de flota más grandes. El endpoint centralizado de Plaspy y la detección automática de protocolos reducen la complejidad de configuración y permiten que los equipos se concentren en la colocación de dispositivos, la gestión de energía y las políticas operativas en lugar de la configuración por servidor de cada equipo.

Si desea explorar capacidades y confirmar requisitos operativos, conozca más sobre Plaspy en https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente del fabricante en http://www.wondeproud.com/ y consulte la documentación oficial del dispositivo para detalles específicos de firmware y configuración.
