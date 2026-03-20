---
slug: /hunterpro/cp60_temp/protocol
id: cp60_temp-protocol
sidebar_label: Protocol
title: HunterPro - CP60-TEMP Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para la compatibilidad del HunterPro CP60-TEMP con Plaspy en monitoreo de temperatura refrigerada
keywords:
  - protocolo HunterPro CP60-TEMP
  - protocolo GPS HunterPro CP60-TEMP
  - protocolo de seguimiento CP60-TEMP
  - protocolo de rastreador de temperatura HunterPro
  - compatibilidad de dispositivos Plaspy
  - integración HunterPro Plaspy
  - protocolo GPS para camión refrigerado
  - protocolo de rastreador de temperatura para contenedores
  - protocolo de comunicación de rastreador GPS
  - protocolo de monitoreo de temperatura de flota
---

# HunterPro - CP60-TEMP Protocolo

Esta página describe, a nivel general, el contexto del protocolo público para usar el rastreador HunterPro CP60-TEMP con Plaspy. Aquí se explica cómo el dispositivo reporta ubicación y telemetría de temperatura a Plaspy y qué papel tiene el protocolo de comunicación del rastreador para entregar datos útiles en camiones refrigerados, contenedores y almacenes.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto general de comunicación y en consideraciones prácticas de compatibilidad más que en detalles internos específicos de firmware.

## Resumen del protocolo

El protocolo CP60-TEMP define los comportamientos y mensajes del dispositivo que permiten al rastreador enviar posición GPS, lecturas de temperatura e información de estado a un servidor remoto como Plaspy. El protocolo regula cómo el dispositivo se identifica, reporta datos periódicos y alarmas, y maneja la conectividad a nivel de transporte con el endpoint de Plaspy.

- Permite que el CP60-TEMP informe ubicación GPS y telemetría de temperatura a la nube para monitoreo y alertas
- Incluye identificación o metadatos del dispositivo para que Plaspy asocie los datos entrantes con el activo correcto
- Soporta reportes periódicos y mensajes basados en eventos usados para visibilidad de rutas y control de cumplimiento de temperatura
- Permite transmitir indicadores de estado como alimentación, batería o estado de sensores junto con ubicación y temperatura
- Sienta la base para configuraciones remotas y alertas por umbrales cuando el dispositivo y el firmware lo soportan

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador para los dispositivos soportados, incluido el CP60-TEMP, cuando el equipo está correctamente configurado para reportar a la plataforma. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está enviando datos al endpoint de la plataforma.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- Plaspy escucha en el puerto 8888 para tráfico entrante de dispositivos
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del endpoint
- Si un dispositivo apunta correctamente al endpoint de Plaspy, la plataforma se encargará de identificar el protocolo automáticamente

## Transporte y contexto de conexión

El contexto de conexión describe cómo el CP60-TEMP llega a Plaspy a través de la red. La elección del transporte y si el dispositivo apunta al dominio de Plaspy o a la dirección numérica puede afectar las reglas de firewall y la configuración de las redes para la telemetría.

- El CP60-TEMP puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones del dispositivo
- Los equipos pueden dirigirse al dominio d.plaspy.com o a la dirección numérica 54.85.159.138
- Plaspy utiliza el puerto 8888 para todos los dispositivos, lo cual reduce la configuración por dispositivo del endpoint
- Asegúrese de que los firewalls y el enrutamiento de red permitan tráfico saliente UDP o TCP al endpoint de Plaspy en el puerto 8888
- La fiabilidad de la red y los parámetros celulares influyen en la frecuencia de reporte de la telemetría y en si se observan comportamientos de retransmisión a nivel de transporte

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar el tiempo de los mensajes, la disponibilidad de campos o el conjunto exacto de telemetría que envía un dispositivo
- Las revisiones de hardware y los módulos de sensor opcionales pueden modificar los datos de temperatura o ambientales disponibles
- Algunas opciones de configuración del dispositivo determinan si el transporte usa UDP o TCP y qué endpoint se emplea
- Siempre configure el equipo para reportar al endpoint de Plaspy para habilitar la detección automática del protocolo
- Verifique el comportamiento del dispositivo tras actualizaciones de firmware, ya que los intervalos de reporte y el manejo de alarmas pueden cambiar
- Revise la configuración del equipo contra la documentación oficial de HunterPro antes del despliegue
- Si falta telemetría o identificación, confirme la configuración del equipo y si el firmware del dispositivo soporta el conjunto de telemetría esperado

## Por qué es importante entender el protocolo

Tener una comprensión clara y a alto nivel del protocolo de comunicación CP60-TEMP ayuda a operadores de flota e integradores a garantizar una configuración confiable, facilitar el diagnóstico y mantener un monitoreo de temperatura consistente en activos refrigerados.

- Acelera la configuración inicial al clarificar a qué servidor y puerto debe reportar el dispositivo
- Ayuda a diagnosticar problemas de conectividad y reporte cuando la telemetría o los valores de temperatura no llegan
- Mejora la visibilidad operativa sobre la frecuencia de reporte del dispositivo y qué datos incluirá
- Orienta decisiones sobre la selección de transporte y permisos de red para una entrega estable de telemetría
- Apoya la planificación de actualizaciones de firmware y pruebas de compatibilidad antes de despliegues a gran escala

## Por qué usar Plaspy con este protocolo

Usar el HunterPro CP60-TEMP con Plaspy ofrece a las organizaciones una forma práctica de centralizar datos de ubicación y temperatura para vehículos y instalaciones refrigeradas. Plaspy recibe la telemetría del dispositivo y la presenta junto con herramientas de alerta, geocercas e informes para que los equipos monitoreen la integridad de la cadena de frío y respondan rápidamente ante desviaciones.

Para saber más sobre Plaspy y cómo maneja la conectividad de dispositivos y el monitoreo de flotas visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y revisiones de hardware más recientes, verifique la información en el sitio del fabricante http://hunterpro.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
