---
slug: /sentar/d39b/protocol
id: d39b-protocol
sidebar_label: Protocol
title: Sentar - D39B Protocol
sidebar_class_name: menu_item_tracker
description: Guía de protocolo para conectar el reloj infantil Sentar D39B a Plaspy y garantizar rastreo y telemetría confiables
keywords:
  - protocolo Sentar D39B
  - protocolo GPS Sentar D39B
  - protocolo de comunicación Sentar D39B
  - protocolo de rastreo Sentar D39B
  - rastreador GPS Sentar Plaspy
  - compatibilidad rastreador D39B
  - protocolo GPS reloj infantil
  - protocolo de dispositivo Plaspy
  - rastreadores compatibles con Plaspy
  - compatibilidad de rastreo Sentar
---

# Sentar - Protocolo D39B

Esta página ofrece información pública sobre el protocolo para usar el reloj inteligente infantil Sentar D39B con Plaspy. Explica, a alto nivel, cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión utiliza públicamente la plataforma y qué esperar al integrar el D39B en un entorno de telemetría Plaspy. El objetivo es ayudar a usuarios técnicos y administradores a comprender los fundamentos de la conexión y el reporte sin divulgar detalles de implementación privados.

El D39B es un dispositivo compatible con Plaspy que combina GPS, AGPS, LBS y posicionamiento por Wi‑Fi con voz y datos 4G sobre Android 8.1. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la revisión de firmware, el lote de hardware y la configuración del fabricante. Dado que esas variables afectan cómo se presenta la telemetría, es importante alinear los ajustes del dispositivo con las recomendaciones de conexión de Plaspy y verificar detalles de firmware con el fabricante cuando sea necesario.

## Visión general del protocolo

El protocolo de comunicación del D39B regula cómo el reloj informa ubicación, estado y eventos a una plataforma backend como Plaspy. A un nivel conceptual público, el protocolo define los mensajes o informes que envía el dispositivo, cómo se identifica frente al servidor y el transporte esperado para enviar la telemetría.

- Permite que el dispositivo envíe actualizaciones periódicas de ubicación y notificaciones de eventos a Plaspy para monitoreo en tiempo real.
- Incluye información identificadora para que Plaspy asocie los datos entrantes con el registro correcto del D39B.
- Transporta campos de estado como SOS, batería e indicadores básicos de actividad que Plaspy normaliza para mostrar en el panel.
- Soporta informes transitorios y mensajes impulsados por eventos para que alertas y SOS lleguen con rapidez.
- Permite que Plaspy combine la telemetría del D39B con otros dispositivos compatibles para reportes unificados y registros históricos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint y puerto compartidos y realiza la detección del protocolo utilizando señales públicas y no sensibles de las conexiones entrantes. Cuando un dispositivo D39B está configurado para reportar al endpoint de Plaspy, la plataforma normalmente reconocerá y parseará los mensajes automáticamente, por lo que usted no necesita seleccionar el protocolo manualmente.

- Plaspy recibe telemetría en el dominio público d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma centraliza la escucha en ese puerto para todos los rastreadores soportados.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que recibe un informe de dispositivo correctamente formateado.
- Normalmente usted no necesita elegir un protocolo dentro de Plaspy si el dispositivo apunta al endpoint y puerto correctos.
- Si un dispositivo no es detectado automáticamente, los problemas comunes incluyen dirección de servidor incorrecta, selección de transporte errónea o diferencias de firmware en el dispositivo.

## Transporte y contexto de conexión

El contexto de conexión explica cómo el D39B alcanza los servidores de Plaspy. El D39B puede configurarse para usar transporte UDP o TCP dependiendo del firmware y las opciones de configuración. Plaspy expone un único puerto compartido para todos los rastreadores y acepta conexiones desde dispositivos que direccionan la plataforma por nombre de dominio o por IP.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto público que Plaspy usa para el tráfico de dispositivos es el 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El D39B puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Elegir UDP o TCP puede afectar las características de entrega, pero no cambia que Plaspy acepte ambos transportes en el puerto compartido.
- Asegúrese de que el APN y la configuración de red del dispositivo permitan tráfico saliente hacia el dominio o la IP de Plaspy para que la telemetría llegue al servidor.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de los mensajes, tiempos o informes opcionales; verifique el nivel de firmware del dispositivo al solucionar problemas.
- Las revisiones de hardware o variantes regionales pueden alterar la conectividad disponible o los ajustes de transporte por defecto.
- Es posible que se requieran herramientas de configuración del fabricante o pasos de aprovisionamiento para apuntar el D39B al endpoint de Plaspy.
- La selección de transporte TCP versus UDP depende del dispositivo y debe coincidir con la configuración enviada a Plaspy.
- Funciones especiales como llamadas de voz o video son manejadas por las aplicaciones del dispositivo y no necesariamente modifican el protocolo de reporte de ubicación.
- Siempre valide la compatibilidad y el comportamiento actual consultando la documentación oficial de Sentar para detalles específicos del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del D39B y el contexto de conexión ayuda a garantizar reportes confiables a Plaspy, acelera la resolución de problemas y reduce sorpresas de integración cuando cambian firmware o configuraciones.

- Permite a los administradores confirmar que el dispositivo está apuntando al endpoint correcto de Plaspy y usando el transporte soportado.
- Ayuda a diagnosticar problemas comunes de conectividad como ajustes de APN incorrectos, puertos bloqueados o direcciones de servidor equivocadas.
- Aclara qué campos de telemetría puede esperar la plataforma y cómo las alertas como SOS se enrutan dentro de Plaspy.
- Facilita la planificación de actualizaciones de firmware o despliegues de dispositivos al resaltar dónde las diferencias de protocolo pueden afectar los reportes.
- Mejora la confiabilidad operativa al alinear los intervalos de reporte y la configuración de eventos del dispositivo con las expectativas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Sentar D39B con Plaspy ofrece una forma práctica de integrar dispositivos de seguridad personal en el mismo ecosistema de telemetría utilizado para rastreo y monitoreo más amplio. Las capacidades de posicionamiento por capas del D39B y su conectividad de datos 4G lo hacen apto para ubicación en tiempo real, alertas SOS y telemetría básica de actividad que Plaspy puede normalizar junto con otros dispositivos.

Para conocer más sobre cómo Plaspy trabaja con rastreadores compatibles y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guías de configuración del fabricante, verifique la información en el sitio oficial de Sentar en http://www.sentarsmart.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda confirmar la documentación del fabricante antes de planificar despliegues.
