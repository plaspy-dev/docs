---
slug: /autoseeker/at_15/protocol
id: at_15-protocol
sidebar_label: Protocol
title: Autoseeker - AT-15 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo Autoseeker AT 15 para conectar y reportar dispositivos en Plaspy
keywords:
  - Autoseeker AT 15
  - rastreador Autoseeker
  - protocolo AT 15
  - protocolo GPS Autoseeker
  - compatibilidad AT 15 Plaspy
  - comunicación mini rastreador GPS
  - rastreo de vehículos Plaspy
  - rastreador geocerca
  - rastreo de flotas Autoseeker
  - dispositivo de seguimiento personal
---

# Autoseeker - Protocolo AT-15

Esta página resume el contexto público del protocolo para usar el rastreador Autoseeker AT-15 con la plataforma Plaspy. Se centra en cómo el AT-15 se comunica con Plaspy en términos generales y qué verificar al configurar los dispositivos para garantizar reportes fiables. Esta guía está pensada para ayudar a administradores e integradores a comprender los aspectos básicos de conexión y las consideraciones habituales sin exponer detalles internos del firmware.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo de reporte cuando un dispositivo apunta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que el comportamiento del dispositivo puede diferir entre unidades o después de actualizaciones de firmware.

## Resumen del protocolo

El protocolo de reporte es el conjunto formal de mensajes y comportamientos de conexión que permite al AT-15 enviar ubicación, estado y eventos a un servidor como Plaspy. En términos de documentación pública, el protocolo define cómo el dispositivo se identifica, cómo se reportan posiciones y alertas, y cómo el servidor reconoce o registra esos reportes.

- Permite al AT-15 transmitir fijaciones GPS, sellos de tiempo e indicadores básicos de estado a un servidor remoto.
- Transporta eventos como entradas y salidas de geocercas, alertas de movimiento y notificaciones de energía o batería.
- Proporciona información de identidad del equipo para que Plaspy asocie los reportes entrantes con la unidad correcta.
- Soporta reportes periódicos y mensajes impulsados por eventos que mantienen la ubicación y el estado actualizados en Plaspy.
- Permite comandos de configuración desde el fabricante o herramientas de puesta en marcha cuando el dispositivo cuenta con ese soporte.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint público compartido e identifica automáticamente el protocolo del rastreador usado por las conexiones entrantes. Cuando un AT-15 está configurado para reportar a Plaspy, la plataforma casará los mensajes entrantes con patrones de protocolo conocidos y encaminará los datos correctamente.

- Plaspy escucha en un endpoint estándar, por lo que normalmente no es necesario seleccionar el protocolo manualmente.
- Asegúrese de que el AT-15 esté configurado para reportar a Plaspy para permitir la detección automática.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración.
- Una identidad de dispositivo correcta y intervalos de reporte consistentes mejoran la fiabilidad de la detección automática.
- Si un dispositivo no se detecta automáticamente, confirmar que apunte al endpoint de Plaspy es un buen primer paso.

## Contexto de transporte y conexión

La capa de transporte determina cómo el AT-15 abre una sesión con Plaspy y cómo se transmiten los mensajes. El dispositivo puede estar configurado para usar cualquiera de los protocolos de transporte comunes según su firmware y ajustes, y Plaspy acepta ambos tipos en el puerto compartido.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y las opciones del equipo.
- El endpoint del servidor de Plaspy para reportes es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que reduce la complejidad de configuración en flotas mixtas.
- Seleccione UDP cuando se prefiera menor sobrecarga y se tolere pérdida ocasional de paquetes; seleccione TCP cuando se necesite entrega fiable y estado de sesión, según la capacidad del dispositivo.
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 como paso estándar de puesta en marcha.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los eventos disponibles y los transportes soportados; siempre verifique la versión de firmware en sus unidades AT-15.
- Las revisiones de hardware o variantes de terceros pueden implementar comportamientos ligeramente distintos que afecten el contenido de los mensajes o los intervalos de reporte.
- Las herramientas de configuración del fabricante o las interfaces SMS/comandos pueden alterar cómo el dispositivo reporta a servidores; documente cualquier cambio realizado durante el despliegue.
- La selección de transporte (UDP vs TCP) debe alinearse con la capacidad del dispositivo y el entorno de red donde operará el rastreador.
- Si va a integrar muchas unidades, valide un lote pequeño antes de un despliegue masivo para detectar diferencias inesperadas en el protocolo o el transporte.
- Siempre contraste el comportamiento del dispositivo con la documentación oficial del fabricante cuando sea posible.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del dispositivo facilita la configuración exitosa, la resolución eficiente de problemas y un funcionamiento predecible a lo largo del tiempo. Conocer lo esencial sobre cómo el AT-15 reporta ubicación y eventos a Plaspy reduce la incertidumbre y favorece una gestión más fluida de flotas o activos.

- Ayuda a diagnosticar problemas de conectividad confirmando el endpoint y los ajustes de transporte correctos.
- Mejora la puesta en marcha asegurando que los dispositivos apunten al endpoint de Plaspy y usen el transporte previsto.
- Permite decisiones más acertadas sobre batería y frecuencia de reporte al entender cómo la periodicidad afecta el consumo.
- Favorece un comportamiento fiable de geocercas y alertas mediante reportes y manejo de eventos consistentes.
- Facilita la validación de si actualizaciones de firmware o cambios de hardware afectan la operación.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Autoseeker AT-15 ofrece una vía directa para recopilar ubicación en tiempo real, eventos de geocerca e información básica de estado en un conjunto mixto de rastreadores. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos simplifican la configuración y reducen la necesidad de gestionar puertos por dispositivo, lo cual es útil al desplegar unidades a gran escala o administrar múltiples modelos.

Si necesita más detalles sobre las funcionalidades de Plaspy u opciones de despliegue, conozca más en el sitio web de Plaspy en https://www.plaspy.com. Para la documentación más actualizada y específica del protocolo, notas de firmware y orientación del fabricante para el Autoseeker AT-15, verifique la información en el sitio oficial de Autoseeker en https://autoseekergps.com/ porque el soporte del protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
