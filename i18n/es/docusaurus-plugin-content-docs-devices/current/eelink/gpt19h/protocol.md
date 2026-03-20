---
slug: /eelink/gpt19h/protocol
id: gpt19h-protocol
sidebar_label: Protocol
title: EElink - GPT19‑H Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador magnético EElink GPT19 H con Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo EElink GPT19-H
  - rastreador GPS GPT19-H
  - protocolo GPS EElink
  - compatibilidad GPT19-H Plaspy
  - protocolo de rastreador de activos EElink
  - protocolo de rastreo GPS Plaspy
  - protocolo de comunicación GPT19-H
  - protocolo de rastreo EElink
  - rastreo de flotas GPT19-H
  - rastreo de activos GPT19-H
---

# EElink - Protocolo GPT19‑H

Esta página describe, en términos públicos y no sensibles, el contexto del protocolo para usar el rastreador magnético EElink GPT19‑H con Plaspy. Se enfoca en cómo el equipo transmite telemetría y eventos a Plaspy y qué puede esperar al integrar el rastreador para monitoreo de activos y flujos de trabajo antirobo.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece contexto práctico y recomienda validar contra la documentación del fabricante.

## Resumen del protocolo

El protocolo del GPT19‑H es el mecanismo que el rastreador usa para enviar posiciones, eventos de movimiento y manipulación, y confirmaciones de configuración a Plaspy, de modo que esos mensajes puedan mostrarse como posiciones en tiempo real, alertas y telemetría histórica. Este resumen plantea el papel público de esa comunicación sin entrar en detalles internos del dispositivo.

- Permite que el rastreador transmita actualizaciones de ubicación por GPS y LBS a Plaspy para mapas en vivo y historial.
- Transporta telemetría de eventos como activación por movimiento, alertas por vibración, detección de caídas y notificaciones de manipulación que generan alertas en Plaspy.
- Permite aplicar comandos de configuración remota y actualizaciones de parámetros por aire a través de endpoints compatibles con Plaspy.
- Proporciona un método consistente para que Plaspy correlacione la identidad del dispositivo con registros de flota o activos para informes y lógica de geocercas.
- Soporta distintos cadencias de reporte, incluyendo intervalos periódicos de bajo consumo y modos de rastreo continuo de emergencia.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando el GPT19‑H está apuntando al endpoint de Plaspy y configurado para reportar. Normalmente usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está enviando datos al servidor de Plaspy y el dispositivo es accesible por el transporte elegido.

- Plaspy escucha en un endpoint compartido d.plaspy.com para los dispositivos soportados.
- La IP pública del servidor Plaspy es 54.85.159.138, accesible por rastreadores que aceptan una dirección IP como destino.
- Plaspy usa un puerto común para las conexiones de dispositivos y detecta automáticamente el protocolo del rastreador una vez que llegan los mensajes.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración por parte del fabricante.
- Cuando un dispositivo correctamente configurado reporta a Plaspy, la plataforma correlaciona la identidad del dispositivo y comienza a parsear la telemetría sin que el usuario tenga que seleccionar manualmente el protocolo.

## Contexto de transporte y conexión

La elección del transporte es un aspecto importante para una integración y despliegue exitosos. El GPT19‑H puede configurarse para enviar sus datos reportados por UDP o TCP según los ajustes del dispositivo y las condiciones de la red, y puede apuntar al dominio de Plaspy o a la IP del servidor Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requisitos del sitio.
- Plaspy acepta reportes enviados al dominio d.plaspy.com y también acepta envíos directos a 54.85.159.138.
- Plaspy utiliza el puerto 8888 para la comunicación con dispositivos y todos los equipos compatibles comparten este puerto para simplificar la puesta en marcha.
- La selección del transporte puede afectar la confiabilidad y la latencia según el comportamiento de la red móvil y debe probarse en las áreas de despliegue objetivo.
- Asegúrese de que el APN y la configuración de acceso a la red del dispositivo permitan conexiones salientes hacia el endpoint de Plaspy sobre el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades GPT19‑H pueden cambiar las funciones disponibles y el contenido exacto de los mensajes; revise las notas de versión del firmware para detectar diferencias de comportamiento.
- Las revisiones de hardware u opcionales sensores pueden alterar el conjunto de eventos reportados a Plaspy, aun cuando el reporte básico de ubicación no cambie.
- Las opciones de configuración del fabricante determinan si un dispositivo usa UDP o TCP y qué intervalos de reporte están disponibles.
- Las funciones de configuración remota dependen de que el firmware del rastreador soporte actualizaciones de parámetros por aire.
- Al mezclar dispositivos en la misma flota, confirme que cada equipo esté apuntando a d.plaspy.com o a la IP del servidor Plaspy y que use el puerto compartido de Plaspy.
- Valide la compatibilidad para flujos de trabajo específicos, como rastreo continuo de emergencia o intervalos de bajo consumo, revisando el material actualizado del fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a una configuración precisa, a obtener un comportamiento predecible en campo y a facilitar la resolución de problemas cuando los dispositivos no actúan como se espera. Este conocimiento también facilita la planificación de la duración de batería, la cadencia de reporte y el mapeo de alertas en Plaspy.

- Asegura la correcta direccionamiento del dispositivo para que los reportes lleguen a d.plaspy.com o 54.85.159.138 y se procesen en la plataforma Plaspy.
- Ayuda a elegir entre UDP o TCP para equilibrar batería, latencia y fiabilidad de entrega en el despliegue.
- Orienta la configuración de intervalos de activación y modos de emergencia para cumplir objetivos operativos y de autonomía.
- Facilita el mapeo de los tipos de eventos del fabricante a alertas y acciones de geocercas en Plaspy.
- Soporta una resolución de problemas más eficiente cuando un dispositivo deja de reportar al acotar el enfoque a la red, APN, transporte y factores de firmware.

## Por qué usar Plaspy con este protocolo

Usar el GPT19‑H con Plaspy brinda a las organizaciones una forma práctica de convertir la larga duración de batería del rastreador, su montaje resistente y la telemetría de eventos en visibilidad accionable. Plaspy ingiere los datos GPS y LBS del dispositivo junto con eventos de movimiento y manipulación, habilitando la aplicación de geocercas, alertas e informes históricos para recuperación y planificación operativa.

Si desea conocer más sobre cómo Plaspy funciona con rastreadores como el GPT19‑H o revisar opciones de despliegue y mapeo de funciones, visite https://www.plaspy.com. Para las notas de protocolo específicas del dispositivo más recientes, cambios de firmware y guías de configuración del fabricante, verifique la información en el sitio oficial de EElink en https://www.eelink.com.cn/ ya que las implementaciones de los proveedores y el comportamiento del firmware pueden cambiar con el tiempo.
