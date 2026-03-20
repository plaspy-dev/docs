---
slug: /eelink/gpt12_x/protocol
id: gpt12_x-protocol
sidebar_label: Protocol
title: EElink - GPT12‑X Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar EElink GPT12‑X con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo EElink GPT12‑X
  - protocolo GPS EElink GPT12‑X
  - protocolo EElink GPT12‑X para Plaspy
  - protocolo de comunicación EElink GPT12‑X
  - protocolo de rastreo EElink GPT12‑X
  - integración protocolo EELINK
  - rastreador GPS GPT12‑X
  - rastreador LTE Cat‑M NB‑IoT
  - rastreador de larga autonomía
  - compatibilidad rastreadores Plaspy
---

# EElink - Protocolo GPT12‑X

Esta página describe el contexto público del protocolo para usar el rastreador EElink GPT12‑X con Plaspy. Resume cómo se comunica el dispositivo a alto nivel, cómo Plaspy recibe e interpreta telemetría y alarmas, y qué verificar durante el despliegue. El enfoque está en aspectos públicos y no sensibles del protocolo para que usted pueda planear la integración y la resolución de problemas sin exponer implementaciones internas.

El GPT12‑X es un rastreador GPS de larga autonomía con conectividad LTE Cat‑M y NB‑IoT, posicionamiento multi‑GNSS y una batería de 5000 mAh diseñada para despliegues de varios años. Plaspy usa ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles técnicos específicos del dispositivo, consulte la documentación y las notas de la versión del fabricante.

## Resumen del protocolo

A alto nivel, el protocolo de reporte del rastreador define cómo el GPT12‑X empaqueta y envía telemetría, alarmas de evento y actualizaciones de estado para que Plaspy pueda ingerirlos en mapas, alertas e informes. La visión pública de este protocolo abarca funciones como identificación, actualizaciones periódicas de posición, notificaciones de eventos y canales de control para gestión remota.

- Identificación del dispositivo y establecimiento de sesión para que Plaspy pueda atribuir mensajes entrantes al activo y cuenta correctos.
- Entrega de posición y telemetría incluyendo soluciones GNSS, marcas de tiempo y campos de estado que alimentan mapas en vivo y el historial.
- Reporte de eventos y alarmas por vibración, colisión, manipulación y modos de emergencia para que Plaspy pueda activar notificaciones y flujos de trabajo.
- Señales de batería y modos de alimentación que permiten a Plaspy interpretar el comportamiento de larga autonomía y las transiciones a seguimiento de emergencia.
- Canales de configuración remota y actualizaciones OTA gestionados a través de la vía de gestión de dispositivos para actualizaciones del ciclo de vida.

## Cómo Plaspy detecta el protocolo

Plaspy usa un endpoint de servidor compartido para recibir telemetría de los rastreadores soportados. Cuando un GPT12‑X configurado correctamente reporta a ese endpoint, Plaspy detecta automáticamente y enruta los datos a la canalización de ingestión adecuada. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el equipo está configurado para reportar al endpoint de Plaspy.

- Plaspy recibe datos en el dominio compartido d.plaspy.com y en la IP pública 54.85.159.138 usando el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar a la plataforma, lo que simplifica la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy, eliminando la necesidad de seleccionar el protocolo manualmente en muchos despliegues.
- Asegúrese de que el GPT12‑X esté configurado para enviar datos al endpoint de Plaspy y que los ajustes de red como APN y transporte coincidan con la capacidad del dispositivo.
- Si un dispositivo no aparece en Plaspy, verifique la configuración de reporte del equipo, el estado del firmware y que el dispositivo pueda alcanzar la dirección del servidor Plaspy.

## Transporte y contexto de conexión

El GPT12‑X soporta enlaces celulares de bajo consumo y puede configurarse para enviar telemetría mediante métodos de transporte comunes en redes LPWA. Para la integración con Plaspy, los aspectos clave de conexión son consistentes entre los rastreadores soportados y deben usarse al apuntar el dispositivo a la plataforma.

- El dispositivo puede configurarse para reportar mediante UDP o TCP según el soporte del equipo y el entorno del operador.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados, por lo que el GPT12‑X debe configurarse para usar el puerto 8888 en el endpoint de Plaspy.
- Los dispositivos pueden apuntar al servidor Plaspy usando el dominio d.plaspy.com o la IP pública 54.85.159.138.
- Confirme la compatibilidad del operador para LTE Cat‑M o NB‑IoT en su región para asegurar que el dispositivo pueda alcanzar Plaspy de manera fiable.
- Al usar firewalls o redes privadas, permita el tráfico saliente hacia la dirección del servidor Plaspy y el puerto 8888 para la telemetría del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, nombres de campos o funciones disponibles; verifique las notas de la versión del firmware del GPT12‑X para identificar variaciones del protocolo.
- Las revisiones de hardware y las variantes regionales del GPT12‑X pueden implementar diferentes bandas de radio o conjuntos de funciones que afectan la conectividad o el reporte de eventos.
- El dispositivo soporta el protocolo EELINK para integración con plataformas como Plaspy, pero variantes menores del proveedor o firmwares personalizados pueden introducir diferencias.
- La elección de transporte entre UDP y TCP puede afectar las características de entrega y debe decidirse según la confiabilidad de la red y la configuración del dispositivo.
- Las actualizaciones OTA de firmware y la configuración remota pueden modificar el comportamiento del protocolo con el tiempo; confirme el impacto de las actualizaciones antes de implementaciones masivas.
- Siempre valide el comportamiento del dispositivo según la documentación del fabricante y pruebe una muestra pequeña de dispositivos antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del GPT12‑X ayuda a garantizar una integración confiable, acelerar la resolución de problemas y prever el comportamiento del dispositivo en Plaspy. Conocer el contexto público del protocolo le permite mapear campos de telemetría a las capacidades de la plataforma y planear el mantenimiento a largo plazo.

- Configuración inicial más rápida al saber cuál es la dirección y el puerto del servidor a los que debe reportar el dispositivo y qué transporte usar.
- Resolución de problemas más efectiva cuando la telemetría o las alarmas no aparecen en Plaspy, porque usted podrá verificar transporte, destino del servidor y estado del firmware.
- Mejor planificación de batería y perfiles de reporte al entender cómo los intervalos de reporte y los modos de emergencia afectan el flujo de datos y el consumo energético.
- Despliegues OTA y de configuración más seguros al anticipar cómo los cambios remotos pueden alterar campos reportados o el comportamiento de eventos.
- Expectativas claras para geocercas, enrutamiento de alarmas y calidad de telemetría en Plaspy cuando se conocen las capacidades del dispositivo y los roles del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el GPT12‑X con Plaspy ofrece un camino directo hacia la visibilidad a largo plazo de activos y flotas. La conectividad LPWA del rastreador, el posicionamiento multi‑GNSS y la batería de larga autonomía lo hacen adecuado para despliegues con mantenimiento mínimo y detección fiable de eventos. Plaspy ingiere posición, estado y señales de alarma para generar mapas en vivo, alertas e informes históricos, además de soportar configuración remota y actualizaciones de ciclo de vida para flotas de dispositivos.

Para conocer más sobre Plaspy y cómo la plataforma maneja integraciones con rastreadores GPS, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la información más reciente sobre el protocolo y el firmware específico del dispositivo en el sitio del fabricante https://www.eelink.com.cn/ antes de realizar despliegues a gran escala.
