---
slug: /careu/ua1/protocol
id: ua1-protocol
sidebar_label: Protocol
title: CAREU - UA1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CAREU UA1 y cómo envía telemetría y ubicación a Plaspy
keywords:
  - protocolo CAREU UA1
  - protocolo GPS CAREU UA1
  - protocolo de comunicación CAREU UA1
  - protocolo de rastreo CAREU UA1
  - compatibilidad CAREU UA1 Plaspy
  - protocolo rastreador CAREU
  - protocolo rastreador de activos UA1
  - integración UA1 Plaspy
  - protocolo rastreador GPS Plaspy
  - rastreo de activos UA1
---

# CAREU - Protocolo UA1

Esta página ofrece una visión pública y a alto nivel del contexto del protocolo del dispositivo CAREU UA1 para su uso con Plaspy. Explica cómo el UA1 suele comunicar ubicación, movimiento y telemetría y qué debe considerar al configurar los informes del dispositivo para garantizar una ingesta fiable en flujos de trabajo de monitoreo de activos y flotas con Plaspy.

Plaspy utiliza una configuración de conexión compartida para los dispositivos que soporta y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al punto de entrada de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en detalles públicos e independientes de la implementación que son útiles para la configuración y la resolución de problemas.

## Resumen del protocolo

El protocolo de comunicación implementado en el UA1 define cómo se empaquetan y transmiten al servidor remoto las posiciones GNSS, los eventos del acelerómetro, las alertas de manipulación y la telemetría opcional de sensores. Para la integración con Plaspy, la función del protocolo es asegurar que el dispositivo pueda identificarse, reportar datos válidos de ubicación y eventos, y soportar funciones opcionales de gestión de dispositivos a través de enlaces celulares y canales auxiliares.

- Permite la entrega confiable de informes de ubicación periódicos o basados en eventos al backend.
- Transfiere eventos de movimiento y manipulación basados en el acelerómetro para que Plaspy pueda generar alertas y disparadores.
- Transporta telemetría opcional de sensores y BLE para casos de uso de monitoreo ambiental o de carga.
- Soporta la identificación del dispositivo y reportes de latido (heartbeat) para que Plaspy pueda correlacionar los datos con el registro de activo correcto.
- Puede exponer canales de gestión remota para actualizaciones de firmware, configuración o diagnósticos según las opciones del dispositivo y servicios del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy expone un único endpoint y puerto compartido para el reporte de dispositivos y detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta y comienza a enviar datos. En la mayoría de las implementaciones no necesitará elegir manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar a la dirección y puerto de Plaspy.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com, que resuelve al endpoint público de ingesta.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse en la configuración del dispositivo cuando DNS está restringido.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados usan el mismo puerto para reportes.
- Plaspy identifica automáticamente el protocolo del rastreador en las conexiones entrantes, por lo que la selección manual a menudo no es necesaria.
- Si un dispositivo está correctamente configurado para enviar al endpoint de Plaspy, la plataforma ingerirá ubicación y telemetría conforme al protocolo detectado.

## Transporte y contexto de conexión

El transporte de la conexión y la configuración del endpoint son esenciales para una entrega confiable. El UA1 soporta múltiples métodos de transporte celular y canales auxiliares; para la integración con Plaspy el dispositivo debe apuntar al endpoint y puerto compartidos de Plaspy usando un transporte disponible y soportado por el equipo.

- El UA1 puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888, según el soporte del dispositivo y la provisión.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138 cuando DNS no está disponible o no es preferido.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de ingesta 8888, lo que simplifica la provisión de dispositivos en grandes flotas.
- Cuando esté disponible, el UA1 también puede usar canales alternos como FTP o SMS para entrega de firmware o en condiciones de red restringida, mientras que el reporte de ubicación principal suele realizarse por la ruta de datos celulares.
- Asegúrese de que el APN celular y la selección de transporte en el dispositivo coincidan con su operador y necesidades de despliegue para mantener conectividad consistente.

## Notas sobre compatibilidad del protocolo

- El UA1 es compatible con Plaspy para el reporte de ubicación y telemetría, pero el comportamiento real depende del firmware del dispositivo y de variantes regionales de hardware.
- Las actualizaciones de firmware pueden cambiar intervalos de reporte, campos de telemetría disponibles y preferencias de transporte; verifique las notas de firmware al solucionar problemas.
- Revisiones de hardware o SKUs destinados a diferentes regiones pueden exponer distintas bandas radioeléctricas o comportamientos de respaldo que afectan la conectividad y la fiabilidad del reporte.
- La selección de UDP frente a TCP en la configuración del dispositivo puede afectar las características de entrega; elija el transporte que coincida con su red y las recomendaciones del firmware del dispositivo.
- Herramientas de configuración del fabricante, como la provisión por Bluetooth o comandos SMS, pueden usarse para apuntar los dispositivos al endpoint y puerto de Plaspy.
- Siempre valide un dispositivo representativo en su entorno de despliegue para confirmar que los reportes llegan a Plaspy como se espera antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Un entendimiento básico del protocolo de comunicación del rastreador ayuda a asegurar una configuración consistente, una resolución de problemas eficiente y un comportamiento predecible a largo plazo al integrar dispositivos UA1 con Plaspy. Saber cómo y cuándo el dispositivo reporta reduce la fricción en la integración y mejora el monitoreo operativo.

- Ayuda a verificar que los dispositivos están apuntando correctamente al endpoint de Plaspy y usando el transporte previsto.
- Facilita la interpretación de reportes faltantes o retrasados durante problemas de conectividad o modos de ahorro de batería.
- Apoya la toma de decisiones sobre intervalos de reporte y umbrales de eventos que equilibran la vida de la batería y la fidelidad del rastreo.
- Mejora la coordinación con técnicos de campo al provisionar dispositivos por Bluetooth o aplicar actualizaciones de firmware.
- Permite pasos de validación prácticos antes de un despliegue masivo para que Plaspy reciba telemetría útil desde el primer día.

## Por qué usar Plaspy con este protocolo

Usar el CAREU UA1 con Plaspy proporciona a las organizaciones una opción de rastreo de bajo consumo y resistente para el monitoreo de activos a largo plazo y la visibilidad de contenedores o carga. Plaspy ingiere posiciones GNSS, eventos de movimiento y manipulación, además de telemetría opcional de sensores, de modo que los equipos pueden crear alertas, reportes y reglas operativas basadas en los datos del UA1.

Plaspy simplifica la incorporación de dispositivos aceptando reportes en el endpoint y puerto compartidos y detectando automáticamente el protocolo del rastreador cuando el dispositivo está configurado correctamente. Para obtener más información sobre Plaspy y cómo puede usarse con dispositivos como el CAREU UA1 visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, comportamiento de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de CAREU https://www.systech-iot.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
