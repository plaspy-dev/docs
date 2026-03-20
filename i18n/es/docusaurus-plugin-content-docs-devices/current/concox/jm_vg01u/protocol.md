---
slug: /concox/jm_vg01u/protocol
id: jm_vg01u-protocol
sidebar_label: Protocol
title: Concox - JM-VG01U Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Concox JM-VG01U con Plaspy para telemetría de flotas e integración confiables
keywords:
  - Concox JM-VG01U
  - Protocolo Concox JM VG01U
  - Protocolo GPS JM VG01U
  - Compatibilidad JM VG01U Plaspy
  - Protocolo rastreador GPS Concox
  - Protocolo rastreo vehicular Plaspy
  - Protocolo rastreador asistido por INS
  - Protocolo rastreador gestión de flotas
  - Protocolo de comunicación JM VG01U
  - Compatibilidad de dispositivo Plaspy
---

# Concox - Protocolo JM-VG01U

Esta página describe el contexto público del protocolo para usar el rastreador Concox JM-VG01U con Plaspy. Explica cómo se comunica el dispositivo a alto nivel, qué ajustes de conexión utiliza Plaspy y qué aspectos considerar al configurar el equipo para que envíe telemetría a la plataforma. El contenido se enfoca en el rol del protocolo y el contexto de integración, no en los detalles internos del hardware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, la información aquí es pública y de carácter general para facilitar la integración y solución de problemas.

## Resumen del protocolo

El protocolo de comunicación define cómo la telemetría, el estado y los eventos del JM-VG01U se envían a un servidor remoto como Plaspy. A grandes rasgos, el protocolo regula el transporte de mensajes, la identificación del dispositivo y los tipos de telemetría que la plataforma puede interpretar para el seguimiento en tiempo real y el análisis histórico.

- Permite que el JM-VG01U envíe posición GNSS, datos de movimiento derivados del INS y eventos de entradas digitales a Plaspy para visualización en mapas e informes.
- Lleva información de identificación del dispositivo y contexto de sesión para que Plaspy asocie la telemetría entrante con el registro de activo correcto.
- Transmite mensajes de eventos y estado como cambios de ignición, pulsaciones de SOS, acciones del inmovilizador y alertas de comportamiento de conducción para su procesamiento en Plaspy.
- Admite transporte por UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Permite actualizaciones de ubicación periódicas y reportes por evento, de modo que las flotas reciban datos tanto continuos como orientados a incidentes.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría en un endpoint público compartido y determina automáticamente el protocolo del rastreador basándose en la conexión entrante y el flujo de mensajes. En implementaciones típicas, un dispositivo configurado correctamente solo necesita apuntar al endpoint de Plaspy; la selección manual de protocolo dentro de la plataforma generalmente no es necesaria.

- Plaspy acepta reportes de dispositivos en el mismo puerto usado por todos los rastreadores compatibles y detecta automáticamente el protocolo.
- Los equipos deben configurarse para reportar al endpoint del servidor de Plaspy para permitir la detección automática.
- La identificación correcta del dispositivo (IMEI o ID del equipo) en el mensaje saliente garantiza que Plaspy pueda enlazar los datos con el perfil de dispositivo adecuado.
- Si la telemetría no aparece, lo habitual es revisar primero la configuración de transporte y el destino en el dispositivo.
- La detección automática simplifica el onboarding cuando se despliegan múltiples modelos en una flota.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el JM-VG01U llega a Plaspy sin entrar en los detalles internos de los mensajes. El rastreador puede configurarse para reportar mediante transportes móviles comunes y debe apuntar al endpoint de red de Plaspy para su ingestión.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto que utiliza Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Seleccione el transporte (UDP o TCP) en el rastreador según la fiabilidad de la red y la capacidad del dispositivo.
- Asegúrese de que el APN celular y la provisión de la SIM estén correctos para que el equipo pueda establecer conexiones salientes hacia d.plaspy.com o 54.85.159.138.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes y los campos de telemetría disponibles; verifique la compatibilidad si actualiza el firmware del equipo.
- Las revisiones de hardware o variantes regionales pueden modificar los transportes soportados, entradas o salidas de sensores.
- Las configuraciones específicas del fabricante o los formatos de dirección del servidor pueden variar; confirme el formato aceptado al apuntar dispositivos a Plaspy.
- La elección de transporte entre UDP y TCP puede afectar el comportamiento de entrega en condiciones de red deficientes.
- Errores de configuración en el dispositivo, como APN incorrecto, nombre de servidor equivocado o reportes deshabilitados, pueden impedir la detección automática.
- Valide siempre con una pequeña flota de prueba o una unidad antes de un despliegue amplio para confirmar el comportamiento con su revisión de firmware.

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación del equipo ayuda a asegurar un onboarding confiable, telemetría precisa y una resolución de problemas más rápida cuando los dispositivos operan con Plaspy. Conocer cómo reporta el rastreador y qué espera la plataforma reduce el tiempo de configuración y minimiza sorpresas en producción.

- Confirma que el rastreador está apuntando al endpoint correcto de Plaspy para que la detección automática pueda realizarse.
- Ayuda a diagnosticar problemas comunes como posiciones faltantes, datos de eventos incompletos o conexiones intermitentes.
- Orienta la decisión sobre selección de transporte, intervalos de reporte y umbrales de eventos para equilibrar volumen de datos y oportunismo.
- Facilita la coordinación informada con el fabricante para preguntas específicas de firmware o configuraciones personalizadas.
- Mejora la confiabilidad a largo plazo al clarificar cómo las actualizaciones de software o cambios de hardware podrían afectar el reporte.

## Por qué usar Plaspy con este protocolo

Usar el JM-VG01U con Plaspy ofrece a las flotas un flujo consolidado de telemetría GNSS de alta precisión y datos asistidos por INS, eventos de comportamiento de conducción y entradas del vehículo en una plataforma diseñada para monitoreo en tiempo real y análisis histórico. La detección automática de protocolo de Plaspy y la estrategia de puerto unificado simplifican la incorporación de dispositivos y permiten que los operadores de flota se enfoquen en resultados como seguridad y utilización en lugar de detalles de conectividad de bajo nivel.

Para conocer más sobre Plaspy y cómo se integra con rastreadores Concox como el JM-VG01U, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente sobre el protocolo y el firmware del dispositivo con el fabricante en https://www.iconcox.com/
