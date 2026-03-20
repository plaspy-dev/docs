---
slug: /wanway/gs300/protocol
id: gs300-protocol
sidebar_label: Protocol
title: WanWay - GS300 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del rastreador WanWay GS300 y compatibilidad con Plaspy para integración y solución de problemas
keywords:
  - Protocolo WanWay GS300
  - Protocolo GPS WanWay GS300
  - Compatibilidad WanWay GS300 Plaspy
  - Protocolo de comunicación GS300
  - Protocolo de rastreo GS300
  - Protocolo rastreador GPS WanWay
  - Integración de dispositivos Plaspy
  - Compatibilidad GPS Plaspy
  - Protocolo rastreador de activos
  - Seguimiento de flotas GS300
---

# WanWay - Protocolo GS300

Esta página ofrece información pública sobre el protocolo usado por el rastreador WanWay GS300 y su integración con la plataforma Plaspy. Describe, a alto nivel, cómo se comunica el dispositivo, el papel del protocolo de reporte para una integración exitosa y los detalles prácticos que suelen necesitarse para configurar un GS300 y que reporte a Plaspy.

Plaspy emplea ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo en el GS300 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se centra en información pública y no sensible que ayuda en la configuración y solución de problemas.

## Resumen del protocolo

El GS300 utiliza un protocolo de reporte para transmitir posición, estado y alarmas a un servidor remoto. Este protocolo permite que el rastreador se identifique, envíe telemetría y genere eventos que Plaspy procesa para mapas en vivo, alertas y reproducción histórica.

- El protocolo transporta telemetría básica como posición GPS, marca temporal y estado de movimiento para que Plaspy ubique y analice los activos.
- Señales de evento como estado ACC, exceso de velocidad y notificaciones de desmontaje/maniobra se reportan vía el protocolo y Plaspy las convierte en alertas.
- Campos de identificación y estado del dispositivo permiten a Plaspy asociar mensajes entrantes con la unidad GS300 correcta y mostrar datos útiles en el panel.
- Los detalles de transporte determinan cómo se entregan los mensajes; el contenido del protocolo es independiente de si se usa UDP o TCP para la transmisión.
- El timestamp y el comportamiento de reportes periódicos en el protocolo afectan la frecuencia con la que Plaspy recibe actualizaciones y cómo se construye la reproducción de trazas.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones entrantes en un único endpoint compartido y detectar automáticamente el protocolo de los dispositivos que reportan. En la mayoría de los casos, usted no necesitará seleccionar manualmente un protocolo en Plaspy si el GS300 está configurado para reportar correctamente al endpoint de la plataforma.

- Plaspy escucha en un endpoint unificado de la plataforma, de modo que los dispositivos que reportan a ese endpoint son procesados por la plataforma.
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la dirección IP pública del servidor es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para conexiones entrantes de rastreadores; todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para enviar datos mediante UDP o TCP al endpoint de Plaspy; Plaspy acepta ambos transportes en el puerto 8888.
- Cuando un GS300 configurado correctamente reporta al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo y comenzará a ingerir la telemetría sin que el usuario seleccione un protocolo adicional.

## Transporte y contexto de conexión

Las opciones de conexión y transporte determinan cómo el GS300 envía datos a Plaspy. El dispositivo puede configurarse para usar UDP o TCP según las capacidades del equipo y las preferencias de configuración, y debe apuntar al endpoint de reporte de Plaspy que se indica a continuación.

- El GS300 puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los dispositivos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy usa un único puerto compartido para todos los dispositivos soportados, lo que simplifica la configuración y reduce la confusión de puertos.
- La elección entre UDP y TCP puede afectar características de entrega como retransmisión y orden de paquetes, pero no modifica el contenido del protocolo que Plaspy interpreta.
- Verifique la configuración de APN y parámetros celulares del dispositivo junto con el host y puerto de reporte para asegurar conectividad confiable en redes 4G.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de mensaje, intervalos de reporte o eventos soportados. Revise la versión de firmware al validar el comportamiento.
- Revisión de hardware o variantes regionales pueden implementar opciones de reporte ligeramente diferentes; confirme la compatibilidad para su unidad GS300 específica.
- La selección del transporte (UDP vs TCP) debe coincidir con lo que el firmware del GS300 soporta y con lo que esté configurado en el dispositivo.
- Opciones de configuración en el lado del fabricante, como frecuencia de reporte, modos de sueño y disparadores de eventos, influyen en cómo aparece la telemetría en Plaspy.
- Siempre valide una conexión de prueba y algunos reportes en vivo después de la configuración para asegurarse de que Plaspy está recibiendo el conjunto de datos esperado.
- Consulte la documentación oficial de WanWay para ajustes específicos del dispositivo que afectan el comportamiento y capacidades del protocolo.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del GS300 facilita una configuración fiable, una resolución de problemas efectiva y una operación predecible a largo plazo cuando el dispositivo se usa con Plaspy. Saber qué campos se reportan, cómo se señalan los eventos y cómo se configura el transporte reduce el tiempo de puesta en marcha y mejora la visibilidad operativa.

- Asegura la configuración correcta de host y puerto para que el dispositivo alcance Plaspy de forma confiable.
- Ayuda a interpretar el comportamiento de eventos como alarmas, transiciones ACC y avisos de exceso de velocidad durante las pruebas.
- Orienta en las elecciones de firmware y configuración que afectan la duración de la batería, la frecuencia de reporte y la granularidad de las trazas.
- Reduce el tiempo de depuración al clarificar si un problema es de conectividad, configuración o firmware del dispositivo.
- Crea expectativas más precisas sobre la frescura de los datos y la exactitud de las trazas históricas en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el WanWay GS300 con Plaspy ofrece una combinación práctica de hardware resistente y una plataforma diseñada para ingerir y presentar telemetría de dispositivos en tiempo real. Las organizaciones que rastrean vehículos, remolques o activos de alto valor se benefician de alertas consolidadas, visualización en mapa y reproducción histórica que Plaspy ofrece una vez que el GS300 está configurado para reportar a la plataforma.

Para obtener más información sobre el uso de Plaspy con rastreadores compatibles y sobre la plataforma visite https://www.plaspy.com. Para el firmware más reciente del GS300, opciones de configuración y detalles de protocolo a nivel de fabricante verifique la documentación actual en https://www.wanwaytech.net/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
