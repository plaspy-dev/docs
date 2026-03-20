---
slug: /autofon/gl_maiak/protocol
id: gl_maiak-protocol
sidebar_label: Protocol
title: AutoFon - GL-Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo AutoFon GL-Маяк y notas prácticas para integrarlo con Plaspy
keywords:
  - protocolo AutoFon GL-Маяк
  - AutoFon GL-Beacon
  - rastreador GPS GL-Маяк
  - protocolo GL-Beacon
  - protocolo GPS AutoFon
  - compatibilidad Plaspy
  - integración rastreador Plaspy
  - rastreo de vehículos GL-Маяк
  - rastreador de activos GL-Маяк
  - protocolo rastreador GPRS GPS
---

# AutoFon - Protocolo GL-Маяк

Esta página ofrece un panorama público del protocolo para usar el rastreador AutoFon GL-Маяк (GL-Beacon) con Plaspy. Se enfoca en cómo el equipo se comunica con Plaspy a alto nivel, qué ajustes de conexión se emplean y consideraciones prácticas para una integración exitosa sin exponer detalles internos o sensibles del protocolo.

Plaspy emplea un punto de conexión y puerto compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante; por eso esta página describe el contexto general de comunicación y recomendaciones de integración más que los detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de reporte del rastreador regula cómo el GL-Маяк envía información de ubicación, telemetría y alarmas a un servidor remoto, y cómo los comandos o controles remotos se entregan de vuelta al equipo. En la integración con Plaspy, el propósito del protocolo es asegurar la identificación fiable del dispositivo, el envío de eventos y la recuperación de datos en búfer tras interrupciones de conectividad.

- Proporciona identidad del dispositivo y actualizaciones periódicas o por eventos para seguimiento en tiempo real.
- Codifica eventos de alarma y sensores como SOS, movimiento, impacto, vuelco y entradas externas para que Plaspy pueda generar alertas y flujos de trabajo.
- Soporta almacenamiento en búfer y retransmisión para que la telemetría capturada sin conexión se reenvíe a Plaspy cuando se restablece la conectividad.
- Permite canales de control remoto para salidas auxiliares cuando está configurado para inmovilización del vehículo o control de dispositivos externos.
- Admite rutas de reporte alternativas como SMS para alertas críticas cuando no hay GPRS disponible.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto gestionados, y determina automáticamente el protocolo del rastreador cuando un dispositivo debidamente configurado reporta a ese endpoint. En la mayoría de los casos, usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está dirigido a los ajustes de servidor correctos.

- El dominio del servidor Plaspy para reportes de dispositivo es d.plaspy.com.
- La dirección IP pública del servidor Plaspy es 54.85.159.138.
- El puerto de escucha para dispositivos es 8888 y Plaspy usa el mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para enviar datos por UDP o TCP al endpoint de Plaspy en el puerto 8888.
- Cuando el dispositivo apunta correctamente al endpoint de Plaspy, la detección de protocolo la maneja el servidor automáticamente y la selección manual generalmente no es necesaria.

## Transporte y contexto de conexión

El GL-Маяк puede reportar mediante GPRS celular y también soporta alertas por SMS como canal alterno. La configuración de la conexión se realiza normalmente en el propio equipo, definiendo el APN móvil, la dirección del servidor remoto y el tipo de transporte. La información del endpoint y puerto de Plaspy se utiliza para que el dispositivo entregue telemetría y eventos.

- El reporte se realiza normalmente por GPRS, usando SMS como respaldo para alertas críticas.
- El rastreador puede configurarse para conectar al endpoint de Plaspy por nombre d.plaspy.com o por la IP del servidor 54.85.159.138.
- El transporte puede ser UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- Todos los dispositivos que soporta Plaspy usan el puerto 8888, lo que simplifica la configuración de servidores y firewalls en despliegues de flotas.
- Asegúrese de que el APN y la configuración de la SIM permitan datos GPRS y que el enrutamiento de SMS esté correctamente configurado si se requiere la alternativa por SMS.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar cómo aparecen ciertos tipos de eventos o campos opcionales en los reportes; siempre pruebe con la versión de firmware en uso.
- Las revisiones de hardware o variantes de módulo pueden alterar las bandas soportadas, el rendimiento GNSS y algunos comportamientos de periféricos.
- Los menús de configuración del fabricante pueden ofrecer modos UDP y TCP; elija el transporte que sea compatible con su firmware y red.
- Ajustes del lado del dispositivo como números autorizados, protección por contraseña e intervalos de señal de vida afectan la interacción del rastreador con Plaspy.
- La capacidad de almacenamiento en búfer y el comportamiento de retransmisión pueden variar; confirme las expectativas de buffering para su despliegue.
- Valide la compatibilidad y el comportamiento en una prueba controlada antes de un despliegue masivo para asegurarse de que el dispositivo cumple con sus necesidades de monitoreo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar un despliegue confiable, facilita la resolución de problemas y permite predecir el comportamiento del dispositivo con Plaspy. Conocer cómo el rastreador reporta identidad, eventos y datos en búfer permite tomar mejores decisiones de configuración y resolver incidentes más rápido.

- Ayuda a confirmar la dirección del servidor, el transporte y los ajustes de APN para un reporte fiable a Plaspy.
- Facilita el diagnóstico de telemetría faltante, entrega de alarmas o subidas retrasadas de paquetes en búfer.
- Orienta sobre una configuración sensata de intervalos de reporte, modos de sueño y señales de vida para balancear autonomía y necesidades de rastreo.
- Aclara cómo deben cablearse y probarse las entradas de alarma y controles auxiliares para integrarlos con los flujos de trabajo de Plaspy.
- Informa los planes de prueba para validar variaciones de firmware y hardware antes del despliegue completo.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon GL-Маяк con Plaspy brinda a las organizaciones un rastreo compacto con alta autonomía combinado con monitoreo centralizado, gestión de alarmas y reproducción histórica. El enfoque del GL-Beacon en la duración de batería, buffering robusto y detección de eventos encaja bien con las capacidades de detección server-side y telemetría de Plaspy para mantener visibilidad durante brechas temporales de cobertura.

Plaspy simplifica la integración al aceptar reportes en un único dominio y puerto y al detectar automáticamente el protocolo del rastreador, reduciendo la configuración manual dentro de la plataforma. Para conocer más sobre las funciones y capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y recomendaciones del fabricante, verifique la información en el sitio oficial de AutoFon en https://www.autofon.ru/.

Nota sobre precisión editorial: el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo. Verifique el comportamiento actual del equipo y los pasos de configuración con la documentación oficial del fabricante en https://www.autofon.ru/ antes de ponerlo en producción.
