---
slug: /topshine/ogt02/protocol
id: ogt02-protocol
sidebar_label: Protocol
title: TopShine - OGT02 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo TopShine OGT02 OBD2 y cómo comunica con Plaspy para seguimiento y telemetría en tiempo real
keywords:
  - protocolo TopShine OGT02
  - protocolo GPS TopShine OGT02
  - protocolo TopShine OGT02 para Plaspy
  - protocolo de comunicación TopShine OGT02
  - protocolo de rastreo TopShine OGT02
  - rastreador OBD2 TopShine OGT02
  - compatibilidad OGT02 Plaspy
  - protocolo rastreador GPS OGT02
  - protocolo OBD2 TopShine
  - rastreo vehicular OGT02 Plaspy
---

# TopShine - Protocolo OGT02

Esta página ofrece contexto público del protocolo para usar el TopShine OGT02 con Plaspy. Resume cómo el rastreador OBD2 4G plug and play reporta ubicación, movimiento y la telemetría OBD disponible a Plaspy, y qué considerar al apuntar los dispositivos a los servidores de Plaspy para seguimiento en tiempo real y alertas. El contenido está pensado para integradores, gestores de flota y evaluadores técnicos que requieren una referencia clara y no sensible sobre la incorporación de dispositivos.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste se conecta a la plataforma. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en orientaciones públicas y prácticas en lugar de detalles internos específicos del firmware. El OGT02 soporta modos de trabajo GPRS y SMS y envía GPS, eventos del acelerómetro y datos OBD cuando están disponibles a endpoints compatibles con Plaspy.

## Resumen del protocolo

El OGT02 comunica telemetría a un servidor remoto para que Plaspy pueda procesar posición, alertas de eventos y telemetría del vehículo. A alto nivel, el protocolo del rastreador define cómo el dispositivo se identifica, marca temporalmente y empaqueta los reportes de posición, informa eventos de movimiento o impacto, y remite valores derivados del OBD a la plataforma para visualización y alertas.

- Permite reportes regulares de ubicación para que Plaspy muestre la posición en vivo y las trayectorias históricas.
- Transmite eventos de movimiento y acelerómetro que Plaspy usa para generar alertas por desplazamiento o impacto.
- Envía telemetría OBD como odómetro y PIDs del vehículo cuando están disponibles para informes de salud del vehículo.
- Incluye identificación básica del dispositivo para que Plaspy asocie el flujo con el activo correcto de la flota.
- Admite múltiples modos de transporte para conectividad global, permitiendo que los dispositivos funcionen sobre redes celulares y SMS según se requiera.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint compartido y deduce automáticamente el protocolo del rastreador a partir de los datos y metadatos recibidos. Cuando un OGT02 está configurado para reportar a Plaspy, usted normalmente no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo apunte al endpoint y puerto correctos de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y los dispositivos pueden usarlo como host de reporte.
- La IP del servidor Plaspy es 54.85.159.138 y puede utilizarse donde DNS no esté disponible.
- El puerto utilizado por Plaspy es el 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 dependiendo de la capacidad del dispositivo.
- Cuando el OGT02 está correctamente configurado para reportar al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del rastreador para su ingestión.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el OGT02 alcanza los servidores de Plaspy más que la estructura interna de los paquetes. El rastreador puede operar sobre canales de datos celulares y configurarse para usar diferentes capas de transporte soportadas por el firmware del dispositivo.

- El OGT02 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración del operador.
- Los equipos pueden apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 como host de destino.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados para simplificar el despliegue y las reglas de red.
- Cuando se usa SMS como modo de reporte alternativo, SMS entrega telemetría limitada en comparación con sesiones de datos GPRS.
- Consideraciones a nivel de red como ajustes APN, reglas de firewall y restricciones del operador pueden afectar la conectividad y deben validarse durante el despliegue.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de mensajes, los campos disponibles o los valores por defecto del transporte; verifique las notas de firmware para el comportamiento específico del dispositivo.
- Las revisiones de hardware o las variantes regionales pueden alterar las bandas celulares soportadas y, en consecuencia, el comportamiento de reporte en ciertas redes.
- Las opciones de modo de transporte configurables por el fabricante determinan si el dispositivo reporta mediante UDP o TCP en el puerto 8888.
- La disponibilidad de PIDs OBD depende de la marca, modelo y soporte OBD del vehículo; no todos los vehículos exponen la misma telemetría.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint compartido, pero se requiere una configuración correcta del dispositivo en el lado del rastreador.
- Siempre valide el reporte del dispositivo en un entorno controlado antes de un despliegue masivo para confirmar el mapeo de telemetría y el comportamiento de eventos.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el OGT02 ayuda a asegurar una conexión confiable con Plaspy y mejora la eficiencia en la resolución de problemas durante el despliegue y la operación. Saber qué transporte, modo de reporte y telemetría usa el dispositivo permite a los equipos alinear la configuración de red, validar alertas e interpretar los datos que Plaspy presenta.

- Asegura ajustes APN y de red correctos para que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a correlacionar eventos reportados por el dispositivo con las alertas en Plaspy para investigar incidentes más rápido.
- Orienta la elección del transporte UDP versus TCP según la fiabilidad de la red y la configuración de firewall.
- Clarifica las expectativas sobre la telemetría OBD disponible para que los informes en Plaspy reflejen las capacidades del vehículo.
- Facilita una incorporación y escalamiento previsibles documentando las elecciones de firmware y configuración del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el TopShine OGT02 con Plaspy ofrece a las organizaciones una opción OBD2 fácil de desplegar para ubicación en tiempo real, alertas de movimiento y telemetría del vehículo sin cableado complejo. El factor plug and play acelera el despliegue en una flota mientras Plaspy centraliza el seguimiento en vivo, las alertas de geocercas y la reproducción histórica, permitiendo a los equipos monitorear activos y responder a eventos de forma eficiente.

Si desea obtener más información sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para los detalles más actuales sobre protocolo específico del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de TopShine https://www.gztopshine.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante asegurará que su despliegue coincida con las capacidades más recientes del dispositivo.
