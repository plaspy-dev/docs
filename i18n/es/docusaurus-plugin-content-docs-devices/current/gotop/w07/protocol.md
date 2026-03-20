---
slug: /gotop/w07/protocol
id: w07-protocol
sidebar_label: Protocol
title: GOTOP - W07 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo GOTOP W07 y cómo se comunica con Plaspy para rastreo en tiempo real y alertas
keywords:
  - Protocolo GOTOP W07
  - Protocolo GPS GOTOP W07
  - Protocolo de comunicación GOTOP W07
  - Protocolo de rastreo GOTOP W07
  - Protocolo rastreador GPS GOTOP
  - Compatibilidad W07 Plaspy
  - Integración GOTOP W07
  - Protocolo rastreador GPS Plaspy
  - Rastreo vehicular GOTOP W07
  - Rastreo de activos W07
---

# GOTOP - Protocolo W07

Esta página describe el contexto público del protocolo para usar el rastreador GPS GOTOP W07 con Plaspy. Explica, a alto nivel, cómo el dispositivo informa ubicación y eventos a Plaspy y qué configuraciones de comunicación son relevantes para una integración confiable. El contenido se enfoca en detalles públicos y no sensibles que ayudan a operadores e integradores a comprender cómo el rastreador interactúa con la plataforma Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar entre versiones de firmware, revisiones de hardware y las opciones de implementación del fabricante, por lo que esta página permanece en un nivel de visión general mientras señala los datos de conexión de Plaspy que comúnmente utilizará.

## Visión general del protocolo

El W07 transmite posiciones GPS, notificaciones de eventos y telemetría básica a un servidor remoto usando datos celulares y SMS. El objetivo del protocolo es trasladar la identificación del equipo, coordenadas de ubicación, marcas de tiempo y señales de evento (por ejemplo movimiento, geocerca o alertas de batería) desde el dispositivo hasta Plaspy para que la plataforma muestre posiciones en vivo y rutas históricas.

- Permite que el W07 envíe actualizaciones periódicas de ubicación y mensajes de alarma a Plaspy para seguimiento en tiempo real y reproducción de rutas.
- Transporta identidad y estado del dispositivo para que Plaspy asocie los informes con el activo o usuario correcto.
- Entrega tipos de eventos que Plaspy utiliza para activar alertas como movimiento, geocerca, exceso de velocidad y corte de energía.
- Soporta tanto envío de datos por GPRS como fallback por SMS según la red y la configuración del equipo.
- Proporciona la telemetría básica que Plaspy ingiere y convierte en puntos de mapa, marcas de tiempo y notificaciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los informes entrantes en un endpoint común y determina automáticamente el protocolo del rastreador para procesar correctamente los reportes con el formato esperado. En la mayoría de los casos un integrador no necesita seleccionar el protocolo manualmente en Plaspy si el W07 está configurado para reportar a la dirección y puerto de Plaspy.

- El endpoint público de reporte de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El servidor de Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy.
- Si el W07 apunta al endpoint de Plaspy usando el transporte y credenciales correctas, Plaspy ingesta los mensajes de ubicación y eventos sin que el usuario deba seleccionar el protocolo.
- Utilice los flujos estándar de configuración del dispositivo para apuntar el rastreador a d.plaspy.com o a la IP del servidor para que Plaspy pueda recibir los reportes.

## Transporte y contexto de conexión

El W07 soporta el envío por datos celulares y puede configurarse para enviar mensajes usando UDP o TCP según la capacidad del dispositivo y las opciones elegidas. Para despliegues con Plaspy, el contexto clave de conexión es el endpoint y puerto compartidos de Plaspy para que los dispositivos entreguen la telemetría de forma confiable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- El W07 puede apuntar a d.plaspy.com o directamente a 54.85.159.138 al configurar la dirección del servidor.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la puesta en marcha entre distintos modelos de rastreador.
- Elija UDP o TCP según la confiabilidad de la red y las opciones de configuración del rastreador; ambos transportes son aceptados por el endpoint de Plaspy.
- Asegúrese de que el APN y los ajustes GPRS del dispositivo estén correctamente configurados para la SIM en uso, de modo que los reportes puedan llegar al servidor de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden alterar la cadencia de envío, los campos admitidos y los tipos de eventos opcionales; verifique siempre la versión de firmware al validar el comportamiento.
- Las revisiones de hardware pueden cambiar sensores disponibles o funciones de gestión de energía que afectan qué telemetría se reporta.
- En algunos despliegues del W07 se usará principalmente GPRS para actualizaciones en vivo, mientras que SMS puede actuar como respaldo para alertas críticas según la configuración.
- La elección del transporte (UDP vs TCP) impacta el comportamiento de entrega; valide su entorno de red y las configuraciones del rastreador para el transporte seleccionado.
- Las configuraciones del fabricante y las compilaciones regionales de firmware pueden generar pequeñas diferencias en el protocolo entre equipos vendidos en distintos mercados.
- Para un comportamiento definitivo, consulte la documentación de GOTOP para la revisión específica de firmware y los pasos de configuración del W07.

## Por qué es importante entender el protocolo

Comprender cómo el W07 se comunica con Plaspy acelera la puesta en marcha, reduce el tiempo de integración y mejora la confiabilidad a largo plazo de los flujos de seguimiento y alertas. Incluso con la detección automática de Plaspy, conocer el transporte, los modos de reporte y la semántica de eventos resulta práctico para la resolución de problemas y la optimización de despliegues.

- Acelera la configuración inicial asegurando que el dispositivo reporte al endpoint y puerto correctos de Plaspy.
- Ayuda a diagnosticar reportes faltantes verificando el transporte, el APN y si el dispositivo usa GPRS o SMS.
- Mejora las decisiones sobre vida útil de batería y frecuencia de reporte al seleccionar ajustes de latido y sueño adecuados con Plaspy en mente.
- Aclara por qué ciertos eventos aparecen en Plaspy y cómo los cambios de firmware pueden añadir o eliminar campos de telemetría.
- Facilita a los administradores de flota validar que las alertas de geocerca, exceso de velocidad y movimiento lleguen como se espera.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP W07 con Plaspy brinda a las organizaciones visibilidad clara y accionable para el rastreo de pequeños activos, dispositivos personales o vehículos livianos. La forma compacta y resistente al agua del W07, combinada con posicionamiento GPS/LBS confiable y eventos de telemetría básicos, encaja en muchos casos donde se requiere rastreo discreto, móvil y alertas oportunas.

Plaspy recopila las actualizaciones de ubicación y los mensajes de alarma del W07 a través del endpoint compartido en d.plaspy.com (54.85.159.138) en el puerto 8888, y detecta automáticamente el protocolo del rastreador para que los operadores puedan ver ubicaciones en vivo y recorridos históricos sin seleccionar manualmente el protocolo. Conozca más sobre Plaspy en el sitio principal https://www.plaspy.com. Para detalles específicos del dispositivo, comportamiento de firmware y notas de implementación, verifique la información actual en el sitio del fabricante https://www.gotop.cc/ ya que el comportamiento y el soporte del equipo pueden cambiar con el tiempo.
