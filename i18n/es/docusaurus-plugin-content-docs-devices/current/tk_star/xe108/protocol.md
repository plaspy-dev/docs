---
slug: /tk_star/xe108/protocol
id: xe108-protocol
sidebar_label: Protocol
title: TK-Star - XE108 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del TK-Star XE108 y cómo se comunica con Plaspy para rastreo y notificaciones
keywords:
  - protocolo TK-Star XE108
  - protocolo GPS XE108
  - TK-Star XE108 Plaspy
  - protocolo de comunicación XE108
  - protocolo rastreador GPS TK-Star
  - protocolo de rastreo XE108
  - compatibilidad rastreador TK-Star
  - guía protocolo rastreador GPS
  - rastreo vehicular XE108
  - alertas geocerca XE108
---

# TK-Star - Protocolo XE108

Esta página explica el contexto público del protocolo para usar el rastreador GPS portátil TK-Star XE108 con Plaspy. Se enfoca en cómo el dispositivo se comunica en términos generales, el contexto de conexión que Plaspy espera y consideraciones prácticas de compatibilidad que ayudan en la configuración y solución de problemas. El objetivo es ofrecer información clara y pública sin exponer detalles privados de implementación.

El XE108 es un rastreador portátil compacto diseñado para rastreo en tiempo real, seguimiento automático, reporte en zonas sin cobertura, reportes GPS y GSM, revisión de historial, geocercas, alertas por movimiento y exceso de velocidad, avisos de batería baja, sensor de sacudidas, botón SOS y modo de suspensión para ahorrar batería. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar entre versiones de firmware, revisiones de hardware y decisiones del fabricante.

## Resumen del protocolo

El protocolo del dispositivo es el conjunto de reglas y patrones de mensajes que el XE108 emplea para informar ubicación, estado y alertas a un servidor remoto. Para la integración con Plaspy, el protocolo permite que el rastreador se identifique, envíe datos de posición y eventos, y reciba comandos o confirmaciones opcionales cuando el dispositivo y su firmware lo soporten.

- Permite que el XE108 reporte ubicación por GPS y estados basados en GSM a un servidor.
- Transmite señales de eventos como presionado del botón SOS, entradas y salidas de geocerca, movimiento, exceso de velocidad y batería baja.
- Proporciona un identificador para que Plaspy asocie los mensajes entrantes con el equipo correcto.
- Transporta tiempo, fijaciones posicionales y metadatos de estado que Plaspy usa para el mapeo y las trazas históricas.
- Permite al rastreador participar en modos de ahorro de energía controlando intervalos de reporte y actualizaciones por eventos.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos los reportes entrantes y cuenta con detección automática de protocolo para facilitar la incorporación de dispositivos. Cuando un XE108 está configurado para enviar datos a Plaspy, la plataforma inspecciona los mensajes entrantes a alto nivel y los compara con patrones públicos conocidos, por lo que normalmente no es necesario seleccionar el protocolo manualmente.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto para reportes de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo.
- Si el XE108 apunta al endpoint de Plaspy, la plataforma intentará identificar el protocolo automáticamente.
- Generalmente, usted no necesita escoger un protocolo dentro de Plaspy si el rastreador está correctamente configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el XE108 llega a Plaspy más que el formato exacto de los mensajes. El rastreador puede usar UDP o TCP cuando su firmware soporta ambos modos, y debe estar configurado para enviar reportes a la dirección y puerto de Plaspy para que la entrega sea exitosa.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El transporte soportado en el dispositivo puede ser UDP o TCP en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de reporte para simplificar la configuración del servidor y del dispositivo.
- Consideraciones de red como NAT del operador móvil, calidad de señal y ajustes de APN pueden afectar la conectividad.
- Asegúrese de que el APN del XE108 y los ajustes del servidor saliente estén configurados para alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware pueden cambiar la frecuencia de reporte del dispositivo, qué eventos incluye y detalles menores de los mensajes.
- Revisiones de hardware entre lotes de producción a veces introducen pequeñas diferencias de comportamiento que afectan la compatibilidad.
- Las opciones de configuración del lado del fabricante pueden permitir cambiar el modo de transporte o activar/desactivar funciones específicas que influyen en los reportes.
- Seleccionar UDP o TCP debe coincidir con la capacidad del firmware y con el ajuste usado al configurar el dispositivo para apuntar a Plaspy.
- Valide el firmware y las opciones de envío del XE108 con las notas de la versión del fabricante cuando solucione comportamientos inusuales.
- Siempre compare el comportamiento real del dispositivo con la documentación oficial más reciente del fabricante para obtener la referencia más fiable.

## Por qué es importante comprender el protocolo

Entender el rol del protocolo de comunicación del XE108 ayuda a asegurar una configuración fluida, un rastreo fiable y alertas útiles dentro de Plaspy. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer lo básico agiliza la solución de problemas y aclara por qué ocurren ciertos comportamientos.

- Ayuda a diagnosticar por qué un dispositivo no aparece o no reporta en Plaspy revisando transporte, endpoint y ajustes de APN.
- Explica diferencias en la frecuencia de reporte y la vida de batería vinculadas a los modos de reporte del firmware.
- Aclara cómo se entregan e interpretan en la plataforma tipos de eventos como SOS, geocerca y alertas de movimiento.
- Ayuda a planificar brechas de cobertura y el comportamiento de rastreo en zonas sin servicio al entender cómo el dispositivo bufferiza y reporta.
- Permite configurar correctamente la dirección del servidor y el transporte para que el rastreador llegue de forma fiable a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star XE108 con Plaspy ofrece a organizaciones y usuarios individuales un camino sencillo para recopilar datos de ubicación en tiempo real, gestionar alertas como geocercas o eventos SOS y revisar trazas históricas para supervisión operativa. El endpoint compartido de Plaspy y la detección automática de protocolo reducen los pasos manuales necesarios para comenzar a recibir datos del rastreador, de modo que los equipos puedan concentrarse en usar los datos de ubicación en lugar de configurar ajustes de servidor complejos.

Conozca más sobre Plaspy en https://www.plaspy.com y revise los detalles actuales de protocolo y firmware específicos del dispositivo en el sitio del fabricante https://www.tk-star.com/ para confirmar el comportamiento y las opciones de configuración. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verificar la documentación oficial del fabricante garantizará la configuración más precisa.
