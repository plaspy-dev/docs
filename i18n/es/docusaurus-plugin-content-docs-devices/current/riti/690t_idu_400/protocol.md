---
slug: /riti/690t_idu_400/protocol
id: 690t_idu_400-protocol
sidebar_label: Protocol
title: Riti - 690T (IDU-400) Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Riti 690T IDU-400 y su comunicación con Plaspy para telemetría de flotas y reemplazo del tacógrafo
keywords:
  - Riti 690T
  - protocolo Riti 690T
  - protocolo GPS 690T
  - IDU 400 Plaspy
  - compatibilidad Riti Plaspy
  - protocolo de rastreo de vehículos
  - reemplazo de tacógrafo
  - protocolo de telemetría de flotas
  - seguimiento de identificación del conductor
  - comunicación del rastreador GPS
---

# Riti - 690T (IDU-400) Protocolo

Esta página describe el contexto del protocolo público para usar el Riti Locator 690T (IDU-400) con Plaspy. Se centra en cómo el equipo se comunica con Plaspy en términos generales, qué ajustes de conexión se utilizan y el papel que juega el protocolo de reporte del rastreador para introducir en la nube telemetría de flota y registros tipo tacógrafo utilizables.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación práctica y segura sin detallar internals propietarios del proveedor.

## Resumen del protocolo

El protocolo de comunicación del 690T permite que la unidad se identifique, entregue posición y telemetría, y transmita registros de conducción y datos de eventos a Plaspy. En términos de integración, el protocolo define los mensajes que envía el dispositivo, la cadencia de reporte esperada y cómo se representan los eventos operativos para la ingestión en la nube.

- Permite subidas regulares de posición y telemetría para que Plaspy construya registros de viaje en tiempo real e históricos por vehículo.
- Transporta identificación de conductor y banderas de eventos desde entradas/salidas externas (I/O) como iButton, sensores de temperatura y entradas digitales.
- Transmite registros tipo tacógrafo y muestras de alta frecuencia que respaldan flujos de trabajo de auditoría e inspección en Plaspy.
- Incluye reportes de estado operativo como salud de la batería de respaldo y notificaciones de pérdida de alimentación que ayudan a mantener la continuidad de los registros.
- Soporta configuración remota y comportamiento OTA según el firmware del dispositivo y las opciones del fabricante.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint público compartido y emplea detección automática para identificar protocolos comunes de reporte de rastreadores. Cuando un equipo configurado correctamente reporta al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor de Plaspy es 54.85.159.138 para el reporte de dispositivos.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- Plaspy detecta automáticamente el protocolo del rastreador cuando se recibe telemetría en el endpoint compartido.
- Si un dispositivo está configurado para enviar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy procesará los datos entrantes según sus reglas de detección.
- Por lo general, usted configura el rastreador para que reporte al endpoint de Plaspy y confía en la detección automática del protocolo en lugar de elegir una cadena de protocolo dentro de Plaspy.

## Transporte y contexto de conexión

El 690T puede configurarse para usar transporte TCP o UDP estándar para alcanzar el endpoint de Plaspy. La selección de transporte depende de las capacidades del equipo y de las preferencias del sitio en cuanto a confiabilidad y comportamiento de red.

- Los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Apunte el equipo a d.plaspy.com o 54.85.159.138 para dirigir los reportes a los servidores de ingestión de Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que no se requiere mapeo de puertos por dispositivo.
- Operadores de red y firewalls deben permitir tráfico saliente hacia el dominio o la IP de Plaspy en el puerto 8888 para garantizar la entrega fiable.
- Elegir TCP puede ayudar con la confirmación de entrega a nivel de transporte, mientras que UDP puede ser usado por dispositivos que optimizan por menor sobrecarga, sujeto a las opciones del firmware del dispositivo.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware pueden cambiar campos de mensaje, cadencia de reporte y funciones opcionales que afectan cómo el dispositivo aparece en Plaspy.
- Revisiones de hardware y variantes regionales del dispositivo pueden exponer distintas opciones de E/S, como entradas adicionales de sensores o métodos de identificación de conductor.
- Las configuraciones de fabricante determinan si el equipo usa TCP o UDP al reportar a Plaspy.
- Verifique siempre que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar compatibilidad con Plaspy.
- Cambios en el firmware o en el comportamiento de la plataforma del proveedor pueden afectar la integración; confirme el comportamiento actual antes de despliegues a gran escala.
- Consulte la documentación oficial del fabricante para detalles específicos de firmware, transportes soportados y variantes de módem por región.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una configuración exitosa, recolección de datos precisa y resolución eficiente de problemas cuando se usa el 690T con Plaspy. Tener claridad sobre lo que el dispositivo reporta y cómo se conecta reduce la fricción de integración y respalda operaciones de flota confiables.

- Acelera la configuración inicial al confirmar que el dispositivo apunta a d.plaspy.com o 54.85.159.138 y usa el puerto 8888.
- Ayuda a identificar desacoples de configuración como selección de transporte incorrecta o canales de E/S deshabilitados.
- Permite una resolución de problemas más focalizada cuando la telemetría esperada o los registros tipo tacógrafo faltan en Plaspy.
- Aclara qué funciones están disponibles según el firmware y hardware para que pueda empatar las capacidades del dispositivo con las necesidades operativas.
- Apoya la planificación de mantenimiento a largo plazo al resaltar puntos donde actualizaciones de firmware o cambios de configuración pueden alterar el comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el Riti 690T con Plaspy ofrece a las flotas una vía confiable hacia el reemplazo en la nube del tacógrafo y telemetría de alta frecuencia sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma. Plaspy centraliza la ubicación del vehículo, los registros de conducción y los datos de eventos para que los equipos puedan realizar inspecciones, auditorías e informes operativos desde un único archivo buscable.

Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos del dispositivo más actuales, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de Riti https://www.riti.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
