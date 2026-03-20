---
slug: /riti/idu_300/protocol
id: idu_300-protocol
sidebar_label: Protocol
title: Riti - IDU-300 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Riti IDU-300 y cómo se comunica con Plaspy para un rastreo de flotas confiable
keywords:
  - Protocolo Riti IDU-300
  - Protocolo GPS Riti IDU-300
  - Riti IDU-300 Plaspy
  - Protocolo de rastreo IDU-300
  - Protocolo rastreador GPS Riti
  - Compatibilidad Riti IDU-300
  - Protocolo de rastreo de flotas Riti
  - Protocolo de comunicación IDU-300
  - Protocolo rastreador de vehículos Riti
  - Protocolo de dispositivo Plaspy
---

# Riti - Protocolo IDU-300

Esta página ofrece una visión pública orientada al protocolo para el uso del rastreador GPS Riti IDU-300 con Plaspy. Se enfoca en cómo el dispositivo se comunica en términos generales, cómo Plaspy recibe los reportes del rastreador y qué debe considerar al integrar el IDU-300 en un flujo de trabajo de administración de flotas.

El IDU-300 es una Unidad de Datos Inteligente 3G diseñada para monitoreo de flotas, despacho e integración de accesorios como sensores de temperatura y paneles de despacho. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Utilice esta página como contexto general del protocolo y verifique detalles específicos del dispositivo con la documentación oficial de Riti.

## Resumen del protocolo

El protocolo del IDU-300 define cómo el rastreador se identifica ante un servidor remoto, transmite posiciones y datos de sensores, y reporta eventos de estado para que una plataforma como Plaspy transforme mensajes sin procesar en telemetría útil para la flota. Este resumen se mantiene en un nivel alto y evita entrar en detalles internos del dispositivo, explicando el papel de la capa de comunicación.

- Permite reportes periódicos y reportes por eventos para que el estado de la flota sea visible en Plaspy.
- Transporta valores de accesorios y sensores, como temperatura o entradas externas, junto con información de GPS y estado.
- Incluye elementos de identificación o ID del dispositivo para que Plaspy asocie los datos entrantes con el registro de vehículo correcto.
- Admite reconocimientos o respuestas desde el backend para confirmar configuraciones o la entrega de comandos cuando el dispositivo y el firmware los implementan.
- Permite transporte sobre conexiones de red estándar para que el rastreador alcance Plaspy desde sesiones de datos celulares.

## Cómo Plaspy detecta el protocolo

Plaspy opera un endpoint compartido que recibe reportes de muchos modelos de rastreadores y reconoce automáticamente el formato recibido. Eso significa que normalmente no es necesario seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, que es el nombre de host al que pueden apuntar los dispositivos.
- La dirección IP del servidor Plaspy es 54.85.159.138 y puede usarse donde DNS no esté disponible.
- El puerto es 8888 y es el puerto común de escucha para reportes de dispositivos a Plaspy.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el modelo y la configuración de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos de rastreadores.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente al endpoint y puerto compartidos.

## Contexto de transporte y conexión

Las elecciones de conexión y el comportamiento del transporte determinan cómo el IDU-300 llega a Plaspy a través de la red celular. El dispositivo puede soportar modos de reporte tanto UDP como TCP y puede configurarse para usar el dominio de Plaspy o la IP directa del servidor.

- Los dispositivos pueden apuntar a d.plaspy.com como nombre de host para el reporte.
- Alternativamente, pueden configurarse para reportar a 54.85.159.138 cuando se prefiera direccionamiento por IP.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; la selección depende del firmware del dispositivo y de los requisitos de fiabilidad de la red.
- El puerto 8888 es utilizado por todos los dispositivos que reportan a Plaspy, proporcionando un objetivo de red consistente.
- Use el modo de transporte soportado por su firmware y pruebe la conectividad desde el dispositivo al endpoint de Plaspy antes de un despliegue masivo.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar la temporización de mensajes, campos opcionales y el comportamiento de accesorios; siempre verifique el nivel de firmware del dispositivo al diagnosticar compatibilidad.
- Las revisiones de hardware o las combinaciones de accesorios (por ejemplo sensores de temperatura externos o paneles de despacho) pueden alterar qué campos de datos se reportan.
- Algunos entornos de despliegue requieren TCP para entrega confiable, mientras que otros usan UDP por menor sobrecarga; confirme cuál transporte prefiere el firmware de su dispositivo.
- Los menús de configuración del fabricante o los comandos SMS de configuración pueden variar entre versiones de firmware, afectando cómo se apunta el dispositivo a Plaspy.
- Confirme que los valores de identificación del dispositivo (IMEI o ID del dispositivo) que usa el rastreador coinciden con las entradas en su flota de Plaspy para asegurar la asociación correcta.
- Valide la compatibilidad contra la documentación oficial de Riti para el modelo y firmware exactos para evitar supuestos sobre el contenido o comportamiento de los mensajes.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar que el IDU-300 reporte de forma fiable a Plaspy, que los datos de accesorios se interpreten correctamente y que los pasos de solución de problemas sean eficientes cuando las implementaciones no funcionen como se espera.

- Agiliza la configuración al asegurar que el dispositivo apunte al endpoint y modo de transporte correctos en Plaspy.
- Ayuda a diagnosticar problemas de conectividad al acotar si la causa es de red, transporte o firmware.
- Mejora la integración de accesorios al aclarar qué valores de sensor incluirá el dispositivo en los reportes a Plaspy.
- Reduce el riesgo en despliegues al identificar revisiones de firmware o hardware que requieren un manejo especial.
- Facilita interpretar la cadencia de reportes, los disparadores de eventos y los elementos de datos esperados durante las pruebas.

## Por qué usar Plaspy con este protocolo

Usar el Riti IDU-300 con Plaspy ofrece a los operadores de flota una plataforma única para recibir posiciones GPS, telemetría de accesorios y eventos de estado desde sus vehículos. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos reducen el trabajo de configuración por dispositivo y le permiten concentrarse en la supervisión operativa en lugar del análisis de mensajes a bajo nivel.

Si desea saber más sobre Plaspy y cómo recibe reportes de dispositivos como el IDU-300, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la información más reciente del dispositivo en el sitio del fabricante https://www.riti.com.tw/.
