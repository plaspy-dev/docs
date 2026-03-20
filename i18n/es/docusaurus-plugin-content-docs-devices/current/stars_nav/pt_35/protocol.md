---
slug: /stars_nav/pt_35/protocol
id: pt_35-protocol
sidebar_label: Protocol
title: Stars Nav - PT-35 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Stars Nav PT-35 y cómo se comunica con Plaspy para rastreo y alertas confiables
keywords:
  - Stars Nav PT-35
  - protocolo PT-35
  - protocolo GPS Stars Nav
  - rastreador GPS PT-35
  - PT-35 Plaspy
  - compatibilidad de dispositivos Plaspy
  - protocolo de comunicación PT-35
  - protocolo para rastreadores personales
  - seguimiento de flotas PT-35
  - integración de rastreadores GPS
---

# Stars Nav - Protocolo PT-35

Esta página ofrece un contexto público del protocolo para usar el rastreador Stars Nav PT-35 con la plataforma Plaspy. Resume cómo el PT-35 suele comunicarse mediante redes celulares para enviar datos de ubicación, alertas y telemetría a Plaspy sin exponer detalles privados de implementación. Use esta guía para entender el papel general del protocolo en la integración y verificar los requisitos de configuración antes de conectar dispositivos a Plaspy.

El PT-35 está diseñado para operar con transportes GPRS TCP/IP y SMS y se describe como compatible con Plaspy. Plaspy usa ajustes de servidor compartidos para dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los instaladores deben confirmar detalles específicos del dispositivo con la documentación oficial de Stars Nav cuando sea necesario.

## Resumen del protocolo

El protocolo del PT-35 define cómo el dispositivo se identifica, reporta la posición GNSS y telemetría, y entrega mensajes de eventos como alertas de pánico o la subida de mensajes almacenados a un servidor remoto. En la práctica, esto significa que el rastreador utilizará el transporte (GPRS TCP/IP o SMS) para enviar actualizaciones periódicas y basadas en eventos que Plaspy procesa para mapeo, alertas e historial.

- Permite la entrega de posiciones GNSS y telemetría del PT-35 a Plaspy para seguimiento en tiempo real e informes históricos.
- Transmite señales de eventos como pánico, movimiento, manipulación y cambios en I/O para que Plaspy genere alertas y acciones.
- Soporta la subida de mensajes en búfer para que posiciones y eventos almacenados se reenvíen a Plaspy tras la reconexión.
- Usa canales estándar de datos celulares o SMS soportados por el dispositivo para alcanzar el endpoint de Plaspy.
- Funciona en conjunto con los modos de energía y programación del PT-35 para controlar la frecuencia de reporte y la duración de batería.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos de los dispositivos usando un endpoint y puerto de servidor compartido y determina automáticamente el protocolo de rastreador apropiado para el parseo y procesamiento. Dado que Plaspy centraliza los ajustes de conexión, por lo general usted no necesita seleccionar manualmente el protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.

- Plaspy usa el dominio de servidor compartido d.plaspy.com y también acepta conexiones a la IP del servidor 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de escucha, lo que simplifica la configuración y el alta de equipos.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta con éxito al endpoint de Plaspy.
- Cuando el PT-35 está configurado para apuntar al endpoint de Plaspy, por lo general no es necesario asignar un nombre de protocolo en la interfaz de Plaspy.
- Si los mensajes no están llegando, verificar la dirección de reporte del dispositivo, el tipo de transporte y el comportamiento del firmware es el primer paso de solución de problemas.

## Transporte y contexto de conexión

El PT-35 soporta múltiples canales de transporte para comunicarse con servidores backend; los instaladores eligen el transporte que mejor se adapte a cobertura, costo y requisitos funcionales. Para la integración con Plaspy, el dispositivo puede configurarse para usar UDP o TCP en el puerto común de Plaspy, o usar SMS como método alternativo para alertas y estado.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportes basados en GPRS según el firmware y la preferencia del instalador.
- El PT-35 también puede enviar mensajes vía SMS para alertas o cuando las conexiones de datos no estén disponibles.
- Plaspy acepta tráfico de dispositivos dirigido a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Todos los dispositivos de Plaspy usan el mismo número de puerto, lo que simplifica la configuración a nivel de flota.
- Elija el transporte en función de la confiabilidad y las condiciones de red; TCP puede proporcionar sesiones persistentes mientras que UDP puede ser más ligero si el rastreador lo soporta.

## Notas de compatibilidad del protocolo

- El PT-35 se describe como compatible con Plaspy y soporta transportes GPRS TCP/IP y SMS, pero el comportamiento exacto de los mensajes puede variar por versión de firmware.
- Revisiones de hardware y accesorios opcionales (por ejemplo distintos módulos GNSS o variantes de I/O) pueden cambiar las funcionalidades disponibles y los campos de telemetría.
- Algunas funciones, como límites de mensajes en búfer, temporizadores de sueño o enrutamiento de voz, dependen de la implementación y deben validarse por unidad y firmware.
- La elección de transporte (TCP, UDP, SMS) puede afectar la semántica de entrega de mensajes y debe coincidir con la configuración del dispositivo en el lado del rastreador.
- Verifique que el APN, la dirección de destino y la configuración de transporte en el dispositivo coincidan con los ajustes de conexión de Plaspy antes del despliegue.
- En caso de duda, consulte la documentación técnica oficial de Stars Nav para notas específicas de firmware y ejemplos de configuración.

## Por qué es importante entender el protocolo

Comprender cómo el PT-35 se comunica con Plaspy ayuda a asegurar instalaciones confiables, una interpretación correcta de los datos y una solución efectiva de problemas. Tener claro el patrón de comunicación reduce el tiempo de configuración y minimiza sorpresas en implementaciones de campo.

- Asegura que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto de escucha de Plaspy para que los datos lleguen correctamente.
- Ayuda a mapear eventos del dispositivo como pánico, movimiento o cambios en I/O a reglas de alerta y paneles en Plaspy.
- Facilita la selección del mejor modo de transporte para su escenario de despliegue, balanceando duración de batería, latencia y confiabilidad.
- Apoya una diagnosis más rápida cuando los mensajes se retrasan o faltan verificando transporte, APN y comportamiento del firmware.
- Promueve la validación del comportamiento de subida en búfer para recuperar mensajes históricos tras pérdida de conectividad.

## Ventajas de usar Plaspy con este protocolo

Usar el PT-35 con Plaspy proporciona a organizaciones y particulares visibilidad operativa sencilla desde un hardware compacto. El diseño de bajo consumo del PT-35, su I/O flexible y el soporte para GPRS y SMS lo hacen una opción práctica para seguridad personal, protección de activos y seguimiento de flotas ligeras o equipos donde el factor de forma discreto y la larga autonomía son prioritarios.

Plaspy centraliza los datos entrantes de ubicación y eventos de los dispositivos que reportan al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador para que los equipos puedan enfocarse en la supervisión y la respuesta en lugar de la selección manual de protocolos. Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos y la administración de flotas, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo; verifique la información más reciente y la guía de configuración específica del dispositivo en el sitio del fabricante en http://www.starsnav.com/.
