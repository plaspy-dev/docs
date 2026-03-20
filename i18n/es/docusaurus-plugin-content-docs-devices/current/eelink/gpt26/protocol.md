---
slug: /eelink/gpt26/protocol
id: gpt26-protocol
sidebar_label: Protocol
title: EElink - GPT26 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para usar el rastreador EElink GPT26 con Plaspy incluyendo guía de conexión y consideraciones de compatibilidad
keywords:
  - protocolo EElink GPT26
  - protocolo GPS EElink GPT26
  - protocolo comunicaciones EElink GPT26
  - protocolo de rastreo EElink GPT26
  - protocolo rastreador GPS EElink
  - compatibilidad protocolo EELINK
  - integración GPT26 Plaspy
  - protocolo de dispositivo Plaspy
  - compatibilidad rastreador GPS Plaspy
  - rastreo de flotas GPT26
---

# EElink - Protocolo GPT26

Esta página ofrece contexto público del protocolo para usar el rastreador GPS EElink GPT26 con la plataforma Plaspy. Explica, a alto nivel, cómo se comunica el equipo, qué puntos de conexión espera Plaspy y qué debe saber sobre los modos de reporte del dispositivo y la integración en la plataforma, sin revelar detalles sensibles de implementación.

El GPT26 es un rastreador cuatribanda con modos de localización por GPS y LBS, batería de alta capacidad, montaje magnético, certificación IP67 y soporte para el protocolo EELINK y actualizaciones OTA. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del dispositivo define cómo el GPT26 reporta posición, estado y eventos a un servidor remoto y cómo una plataforma como Plaspy reconoce y utiliza esos reportes. Para integradores y administradores, entender el papel público del protocolo ayuda a garantizar telemetría fiable, manejo de eventos y configuración remota cuando el dispositivo y el fabricante lo permiten.

- Permite que el rastreador envíe actualizaciones de ubicación y reportes de estado a un punto de conexión remoto para que Plaspy pueda mostrar y procesar los datos.
- Facilita que el dispositivo se identifique frente al servidor, de modo que Plaspy pueda asociar los mensajes entrantes con el registro de dispositivo correcto.
- Soporta operación sobre canales de transporte estándar, de modo que un mismo punto de conexión pueda atender a muchos modelos de dispositivo.
- Opera en modos de localización GPS y LBS según lo permita el hardware y el firmware, posibilitando reportes flexibles en condiciones variables de señal.
- Puede incluir soporte para comandos remotos y actualizaciones OTA expuestas por el fabricante, aunque los detalles dependen del firmware.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único punto de conexión compartido y determina automáticamente el protocolo del rastreador a partir del reporte entrante. Dado que Plaspy está diseñado para soportar múltiples rastreadores, la plataforma elimina la necesidad de que la mayoría de usuarios seleccionen manualmente un protocolo cuando el dispositivo está configurado para reportar correctamente al endpoint de Plaspy.

- Plaspy escucha en el endpoint unificado d.plaspy.com y en la IP pública 54.85.159.138.
- El servicio Plaspy usa el puerto 8888 para reportes y gestión de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos que reportan al endpoint de Plaspy.
- Por lo general, los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos.

## Contexto de transporte y conexión

El GPT26 puede configurarse para reportar a un servidor remoto usando protocolos de transporte comunes; Plaspy soporta estos modos de transporte en su endpoint compartido. Comprender la selección del transporte ayuda al configurar el APN del dispositivo, la dirección del servidor y el modo de reporte.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, por lo que el valor del puerto es consistente entre tipos de equipo.
- La elección entre TCP y UDP puede afectar las garantías de entrega y el comportamiento de red, pero Plaspy aceptará reportes en el endpoint compartido en ambos casos.
- Asegúrese de que el APN y la configuración de red del dispositivo permitan conexiones salientes hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El GPT26 anuncia soporte para el protocolo EELINK, pero las versiones de firmware del fabricante pueden variar en el soporte de características exactas.
- Las revisiones de firmware y las variantes de hardware pueden cambiar qué comandos o campos de telemetría están disponibles.
- Algunas funciones, como actualizaciones OTA, comandos remotos o campos de diagnóstico extendido, pueden ser opcionales o estar condicionadas a builds de firmware específicos.
- La selección del transporte (UDP frente a TCP) debe coincidir con lo que soporta el firmware del dispositivo y con cómo está configurado para reportar al endpoint de Plaspy.
- Valide siempre el reporte del dispositivo comprobando que el rastreador envía mensajes a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que Plaspy está recibiendo datos.
- En caso de duda, consulte la documentación del fabricante para cadenas de configuración específicas del dispositivo y notas de firmware.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del GPT26 ayuda a administradores e integradores a configurar los dispositivos correctamente, verificar reportes y solucionar problemas comunes sin necesidad de inspeccionar código interno del equipo.

- Facilita la configuración inicial al clarificar qué dirección de servidor y transporte debe usar el dispositivo para alcanzar Plaspy.
- Ayuda a diagnosticar fallas de reporte al confirmar si el equipo está en modo GPS o LBS y si logra comunicarse con el endpoint de Plaspy.
- Simplifica las pruebas de interoperabilidad cuando los dispositivos se mueven entre plataformas o se aplican actualizaciones de firmware.
- Contribuye a un monitoreo de flota fiable al asegurar que el dispositivo se identifique de forma consistente ante Plaspy y envíe la telemetría esperada.
- Ayuda en la planificación de mantenimiento o gestión de baterías al entender cómo los modos de localización y los intervalos de reporte afectan el consumo energético.

## Por qué usar Plaspy con este protocolo

Usar el GPT26 con Plaspy ofrece a las organizaciones una vía directa para recolectar datos de ubicación y estado del rastreador y convertir esa información en inteligencia operativa. El enfoque de endpoint unificado de Plaspy reduce la complejidad de configuración y la detección automática de protocolos minimiza los pasos manuales necesarios para poner una flota en línea.

Si desea evaluar Plaspy para usar con dispositivos EElink GPT26 u otros rastreadores, conozca más sobre la plataforma en https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo y las notas de firmware en el sitio del fabricante https://www.eelink.com.cn/ antes de desplegar a gran escala.
