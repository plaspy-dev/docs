---
slug: /autofon/omega_maiak_xl/protocol
id: omega_maiak_xl-protocol
sidebar_label: Protocol
title: AutoFon - Омега Маяк XL Protocol
sidebar_class_name: menu_item_tracker
description: Guía del protocolo y contexto de conexión para integrar AutoFon Омега Маяк XL con el servidor Plaspy
keywords:
  - protocolo AutoFon Омега Маяк XL
  - AutoFon Omega Mayak XL Plaspy
  - protocolo GPS Omega Mayak XL
  - protocolo de comunicación Omega Mayak XL
  - protocolo de rastreador GPS AutoFon
  - protocolo de rastreo de vehículos Plaspy
  - protocolo de rastreo de activos AutoFon
  - compatibilidad de protocolo GPS Plaspy
  - reportes GPRS y SMS Omega Mayak XL
  - integración de rastreo AutoFon
---

# AutoFon - Омега Маяк XL Protocolo

Esta página ofrece información pública sobre el protocolo para usar el rastreador AutoFon Омега Маяк XL con Plaspy. Resume cómo se comunica el dispositivo a nivel general, qué puntos de conexión ofrece Plaspy y qué esperar al integrar la baliza para seguimiento en tiempo real y reproducción histórica. La información está pensada para ayudar a integradores técnicos y gestores de flotas a comprender el flujo de comunicación sin revelar detalles sensibles de implementación.

El Omega Mayak XL es una baliza compacta alimentada por batería, diseñada para larga autonomía y montajes discretos. Soporta posicionamiento GLONASS y GPS, conectividad GSM con doble SIM, reportes por GPRS y respaldo por SMS, BLE para detección de proximidad y un gran buffer interno para registros fuera de línea. Plaspy usa ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador; el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte es el mecanismo que el rastreador utiliza para identificarse, transmitir posición y telemetría, y entregar alertas a una plataforma de monitoreo. Con Plaspy, el protocolo permite reportes periódicos o por evento, la reproducción de datos almacenados tras la recuperación de conectividad y la entrega de alarmas críticas como movimiento o SOS.

- Transporta posición GNSS, eventos del acelerómetro, estado de batería y temperatura hacia Plaspy.
- Permite que el rastreador se identifique ante el servidor para que Plaspy asocie los reportes con el activo correcto.
- Soporta tanto reportes en tiempo real como la reproducción por lotes de registros de ubicación almacenados cuando regresa la cobertura.
- Habilita la entrega de alarmas y estados como movimiento, inclinación, choque y SOS a los flujos de trabajo de monitoreo.
- Ofrece reportes por SMS y rutas de comandos desde el servidor como opción cuando la conectividad IP no está disponible.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de los rastreadores soportados en un único endpoint compartido y determina automáticamente el protocolo al momento de la ingestión. En la mayoría de los despliegues no necesitará seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y todos los equipos soportados por Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que una configuración adecuada normalmente evita la selección manual de protocolo en la plataforma.
- Configure el Omega Mayak XL para reportar vía GPRS al endpoint de Plaspy o para usar respaldo por SMS para que Plaspy reciba ubicación y telemetría.
- La detección y el enrutamiento se realizan en los servidores de Plaspy cuando un dispositivo entrega por primera vez un reporte reconocible al endpoint compartido.

## Transporte y contexto de conexión

El transporte y la dirección determinan cómo el rastreador llega a Plaspy, pero no son lo mismo que los detalles internos del protocolo. El Omega Mayak XL soporta reportes GPRS hacia un servidor de monitoreo y respaldo por SMS, y puede configurarse para usar UDP o TCP al enviar datos a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y las opciones elegidas.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 para el reporte.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración del endpoint a escala de flotas.
- Para mayor fiabilidad, el Omega Mayak XL soporta doble SIM y selección automática de APN para mejorar la entrega exitosa de reportes GPRS.
- Cuando el GNSS no está disponible, el rastreador puede proporcionar ubicación aproximada mediante fallback celular y almacenar fixes GNSS detallados en su buffer interno para subirlos posteriormente.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido y la cadencia de los mensajes; verifique la compatibilidad con la versión de firmware del equipo.
- Diferencias en la plataforma de hardware y variantes regionales del modelo pueden afectar las bandas de radio, las opciones de transporte o la disponibilidad de funciones.
- La elección del transporte UDP frente a TCP puede influir en el comportamiento de entrega y debe coincidir con la configuración del dispositivo y las condiciones de la red.
- El comportamiento de doble SIM y la configuración de APN pueden determinar qué operador entrega los datos a Plaspy.
- El reporte por SMS puede usarse como respaldo, pero puede requerir manejo alternativo en Plaspy o una configuración adicional para el parseo de mensajes.
- Siempre valide los detalles de integración con los menús de configuración del dispositivo y la documentación del fabricante para su unidad específica.

## Por qué es importante entender el protocolo

Comprender cómo el rastreador se comunica con una plataforma de monitoreo ayuda a asegurar una configuración confiable, un comportamiento predecible y una resolución de problemas más rápida cuando surgen incidencias. Incluso cuando Plaspy detecta automáticamente el protocolo, conocer las opciones de transporte y reporte reduce la fricción en la integración y apoya decisiones operativas.

- Ayuda a confirmar que el dispositivo está apuntando al endpoint correcto de Plaspy y usando el transporte esperado.
- Permite elegir intervalos de reporte y estrategias de energía sensatas que equilibren la duración de la batería con la frescura de la ubicación.
- Facilita el diagnóstico cuando registros en cola no llegan a la plataforma tras cortes de conectividad.
- Soporta la correcta configuración y el manejo del respaldo por SMS para alertas críticas cuando no hay IP disponible.
- Asegura que los campos de alarmas y telemetría enviados por el dispositivo se muestren correctamente en los paneles y alertas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon Омега Маяк XL con Plaspy ofrece a las organizaciones seguimiento discreto y de larga autonomía con una ruta de ingestión fiable para posición, telemetría y alertas. El buffer fuera de línea del rastreador, la resiliencia de doble SIM y el soporte tanto para GPRS como para SMS encajan bien con la arquitectura de endpoint único y la detección automática de protocolos de Plaspy, lo que lo hace adecuado para recuperación de activos, monitoreo a largo plazo y despliegues encubiertos.

Para obtener más información sobre Plaspy y cómo puede integrarse con dispositivos como el Omega Mayak XL, visite https://www.plaspy.com. Para los detalles más recientes específicos del protocolo, notas de firmware e información de modelos regionales, verifique la documentación actual del fabricante en https://www.autofon.ru/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consulte las fuentes oficiales del fabricante para obtener la guía más actualizada.
