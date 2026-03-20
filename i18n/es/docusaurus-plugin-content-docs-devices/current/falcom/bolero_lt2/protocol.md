---
slug: /falcom/bolero_lt2/protocol
id: bolero_lt2-protocol
sidebar_label: Protocol
title: Falcom - BOLERO-LT2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo y guía de conexión a Plaspy para el tracker Falcom BOLERO-LT2
keywords:
  - protocolo Falcom BOLERO-LT2
  - protocolo rastreador GPS Falcom
  - protocolo GPS BOLERO LT2
  - compatibilidad BOLERO LT2 Plaspy
  - protocolo rastreo vehicular Falcom
  - comunicación rastreador GPS Plaspy
  - protocolo gestor de flotas rastreador
  - guía integración BOLERO LT2
  - resumen protocolo Falcom
  - protocolo de dispositivo Plaspy
---

# Falcom - Protocolo BOLERO-LT2

Esta página ofrece un contexto público del protocolo para usar el tracker Falcom BOLERO-LT2 con Plaspy. Resume cómo el dispositivo suele comunicarse con plataformas de gestión de flotas, qué esperar del comportamiento de reporte en términos generales y cómo Plaspy recibe e interpreta los datos del dispositivo. El contenido se centra en detalles prácticos y públicos del protocolo útiles para despliegues y resolución de problemas, sin entrar en internals confidenciales del fabricante.

El BOLERO-LT2 es un tracker GSM GPRS cuatribanda con un receptor GPS de alta sensibilidad y funciones como geocercas y grabador de datos interno. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del tracker. El endpoint público de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP para reportar al puerto 8888. Tenga en cuenta que el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo que utiliza el BOLERO-LT2 regula cómo la unidad se identifica, abre una sesión de reporte y envía datos de posición y eventos para que Plaspy pueda presentar telemetría y alertas útiles. En la práctica, el protocolo define la secuencia y el contenido de los mensajes intercambiados entre el tracker y el servidor, pero los detalles de implementación pueden cambiar según el firmware y las opciones del equipo.

- Permite que el dispositivo envíe reportes periódicos de posición GPS e información de estado a Plaspy
- Facilita que el tracker se identifique para que Plaspy asocie los mensajes con el activo correcto
- Transmite notificaciones de eventos y alarmas como disparos de geocerca o cambios en entradas digitales
- Soporta la subida del grabador de datos para que las trayectorias históricas almacenadas se entreguen a la plataforma
- Permite interacciones de configuración o comandos cuando el fabricante y el firmware del dispositivo lo soportan

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint público y puerto para todos los dispositivos soportados y usa ese endpoint compartido para detectar automáticamente el protocolo entrante. Si el BOLERO-LT2 está configurado para reportar al endpoint de Plaspy, la plataforma emparejará los mensajes entrantes con el perfil de dispositivo correcto sin que normalmente sea necesario seleccionar el protocolo manualmente.

- El dominio público de Plaspy es d.plaspy.com y la IP correspondiente es 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, que es el 8888
- Plaspy detecta automáticamente el protocolo del tracker, por lo que los usuarios normalmente no necesitan elegir un protocolo dentro de la plataforma
- Los dispositivos configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 serán recibidos por la plataforma
- Asegúrese de que la configuración de reporte del dispositivo apunte al endpoint de Plaspy y que la conectividad de red y los ajustes de APN sean correctos para una detección confiable

## Transporte y contexto de conexión

El BOLERO-LT2 puede configurarse para usar el transporte de datos móviles estándar para enviar telemetría a un servidor. Para Plaspy, las opciones de transporte soportadas son TCP y UDP en el puerto unificado de Plaspy. La elección del transporte depende de las opciones de configuración del dispositivo y de los requisitos del despliegue del cliente.

- Los dispositivos pueden usar UDP o TCP para enviar datos al puerto 8888 según soporte y configuración del equipo
- El servidor de Plaspy es accesible en d.plaspy.com y en la IP pública 54.85.159.138
- Plaspy usa el mismo puerto 8888 para todos los dispositivos para simplificar despliegues a gran escala y la monitorización
- Confirme que el dispositivo esté configurado para reportar al endpoint de Plaspy y no a otra dirección de servidor
- Consideraciones a nivel de red como NAT del operador, reglas de firewall y ajustes de APN pueden afectar la conectividad y deben verificarse durante la instalación

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del fabricante pueden cambiar el contenido de los mensajes, los eventos disponibles y el comportamiento de reporte
- Revisiones de hardware o variantes del modelo pueden diferir en transportes y características soportadas
- El puerto unificado y la detección automática de Plaspy reducen la necesidad de selección manual de protocolo, pero sigue siendo esencial la configuración correcta en el dispositivo
- La elección del transporte entre UDP y TCP puede afectar la entrega y el manejo de sesiones
- Funciones como la retención del grabador de datos y el formato de geocercas dependen del fabricante y deben validarse según el firmware del equipo
- Siempre confirme la compatibilidad y las funciones disponibles consultando la documentación oficial de Falcom para el modelo y firmware exactos

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del BOLERO-LT2 ayuda a garantizar instalaciones confiables, configuraciones de servidor correctas y una resolución eficiente de problemas cuando los dispositivos reportan a Plaspy. Saber qué elementos maneja la plataforma y cuáles dependen del firmware del dispositivo reduce la incertidumbre durante los despliegues.

- Verifique que los ajustes de servidor del dispositivo apunten a d.plaspy.com o 54.85.159.138 y usen el puerto 8888
- Elija el ajuste de transporte apropiado en el dispositivo según la red y las necesidades operativas
- Revise las notas de la versión del firmware cuando aparezca un comportamiento nuevo o cuando un dispositivo deje de reportar como se espera
- Use el grabador de datos y las opciones de reporte del dispositivo deliberadamente para ajustar la retención de datos y el consumo de ancho de banda
- Pruebe el reporte del dispositivo tras cambios de configuración para confirmar que la plataforma recibe la telemetría esperada

## Por qué usar Plaspy con este protocolo

Usar el Falcom BOLERO-LT2 con Plaspy ofrece una vía directa para obtener visibilidad de flotas y monitoreo operativo. El endpoint único de Plaspy y el puerto unificado simplifican los despliegues masivos al reducir la configuración por dispositivo, y la detección automática del protocolo minimiza los pasos administrativos al agregar hardware compatible.

Si desea conocer más sobre cómo Plaspy maneja trackers compatibles y las capacidades de la plataforma, visite https://www.plaspy.com. Para la documentación específica más actualizada del protocolo del dispositivo, notas de firmware y opciones de configuración del BOLERO-LT2, verifique los detalles en el sitio del fabricante https://www.falcom.de. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que se recomienda consultar los recursos oficiales de Falcom para obtener la información más reciente.
