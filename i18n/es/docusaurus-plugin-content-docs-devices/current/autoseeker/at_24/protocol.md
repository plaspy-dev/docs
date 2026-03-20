---
slug: /autoseeker/at_24/protocol
id: at_24-protocol
sidebar_label: Protocol
title: Autoseeker - AT-24 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Autoseeker AT-24 y su comunicación con Plaspy para un rastreo vehicular confiable
keywords:
  - protocolo Autoseeker AT-24
  - protocolo GPS Autoseeker AT-24
  - protocolo de comunicación Autoseeker AT-24
  - protocolo de rastreo Autoseeker AT-24
  - compatibilidad Autoseeker Plaspy
  - protocolo del rastreador AT-24
  - protocolo de rastreo vehicular Autoseeker
  - rastreo de flotas Autoseeker AT-24
  - protocolo del rastreador Autoseeker para Plaspy
  - integración protocolo AT-24
---

# Autoseeker - Protocolo AT-24

Esta página describe el contexto público del protocolo para utilizar el rastreador Autoseeker AT-24 con la plataforma Plaspy. Explica cómo se comunica el dispositivo a alto nivel, qué papel tiene el protocolo de reporte del rastreador al entregar telemetría a Plaspy y qué ajustes de conexión se usan comúnmente para la integración. El AT-24 es un rastreador 4G compacto con funciones como detección de ACC, control remoto de inmovilizador, geovallas y batería de respaldo; esas capacidades se exponen a Plaspy mediante el protocolo de reporte del dispositivo.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa correctamente al endpoint de Plaspy. Para integraciones con Plaspy el endpoint público del servidor es d.plaspy.com y la IP pública es 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. Todos los dispositivos conectados a Plaspy usan el mismo puerto, y dado que Plaspy detecta los protocolos de rastreador automáticamente, la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo apunta al endpoint y al transporte correctos.

## Resumen del protocolo

A grandes rasgos, el protocolo del rastreador define cómo el AT-24 formatea y envía posiciones, estados y eventos para que Plaspy los ingiera y los presente. El protocolo es el puente entre el hardware del dispositivo y los servicios de Plaspy, transmitiendo ubicaciones GNSS, cambios de estado de entradas y eventos que alimentan alertas, reportes y controles remotos en la plataforma.

- Transmite posiciones GNSS y actualizaciones de ubicación con marca temporal para que Plaspy pueda mapear y registrar desplazamientos.
- Reporta estado del dispositivo y entradas como ACC encendido/apagado, bajo consumo y eventos de batería de respaldo para monitoreo del estado vehicular.
- Envía notificaciones de eventos como entradas/salidas de geovalla, exceso de velocidad y pulsaciones de SOS para que Plaspy genere alertas y registre auditorías.
- Habilita funciones orientadas a comandos expuestas por el dispositivo, como control remoto de inmovilizador cuando esté soportado y permitido.
- Usa la conectividad de datos celulares y el protocolo de reporte del rastreador para alcanzar el endpoint de ingestión de Plaspy para procesamiento en tiempo real.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y determina el protocolo del dispositivo automáticamente en función del tráfico de reporte que llega. Cuando un AT-24 se configura para reportar a Plaspy, alcanzará el endpoint de Plaspy y la plataforma casará los datos entrantes con un perfil de protocolo soportado para que el dispositivo pueda ser ingresado sin selección manual de protocolo.

- Plaspy acepta reportes de dispositivos en d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Todos los dispositivos usan el mismo puerto en Plaspy, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante, por lo que la selección manual de protocolo suele ser innecesaria.
- Asegúrese de que el dispositivo esté configurado para apuntar al endpoint de Plaspy usando el transporte correcto y las credenciales si el dispositivo las requiere.
- Si un dispositivo no aparece detectado, verifique la configuración de reporte en el rastreador y consulte la documentación del fabricante.

## Transporte y contexto de conexión

Las opciones de transporte y conexión forman parte de los detalles prácticos de la integración. El AT-24 puede reportar vía datos celulares y soporta rutas de reporte estándares; según el firmware y la configuración, puede usar UDP o TCP para enviar su telemetría a Plaspy. Los hechos críticos de conexión pública de Plaspy son el dominio d.plaspy.com, la dirección 54.85.159.138 y el puerto 8888.

- El AT-24 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y ajustes del dispositivo.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 para alcanzar Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que reduce la complejidad de configuración por equipo.
- Se requiere conectividad de datos celulares para transportar los reportes del rastreador a Plaspy en tiempo real.
- Elija el transporte (UDP o TCP) que su firmware y entorno de red soporten para optimizar la confiabilidad.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar cómo una unidad AT-24 específica reporta campos o tipos de eventos; verifique las notas de la versión del firmware al diagnosticar discrepancias.
- Revisiones de hardware o módulos accesorios opcionales pueden introducir diferencias en las entradas soportadas o en los campos de telemetría.
- Algunos comportamientos, como comandos remotos de inmovilizador, monitoreo de voz o comportamiento de SOS, pueden depender de la configuración del dispositivo y de las regulaciones regionales.
- Seleccionar UDP frente a TCP en la configuración del dispositivo puede afectar las características de entrega; use el transporte que recomiende el firmware del dispositivo.
- Confirme siempre que el rastreador esté configurado para reportar al endpoint de Plaspy d.plaspy.com o a la IP pública 54.85.159.138 en el puerto 8888.
- Valide la compatibilidad y las funciones esperadas contra la documentación del fabricante antes de desplegar grandes cantidades de dispositivos.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación que utiliza el AT-24 ayuda a asegurar una configuración confiable, facilitar el diagnóstico y manejar correctamente los eventos dentro de Plaspy. Saber qué se espera que envíe el dispositivo y qué ajustes de conexión usar permite a los operadores confirmar que la telemetría y los mensajes de control llegan a Plaspy y funcionan según lo previsto.

- Ayuda a diagnosticar por qué un dispositivo no aparece en Plaspy cuando la configuración de reporte está mal.
- Aclara qué eventos y entradas del rastreador aparecerán como alertas o campos en los tableros de Plaspy.
- Facilita validar funciones remotas como el inmovilizador y confirmar flujos de operación seguros.
- Apoya la planificación para despliegues a escala de flotas al identificar variantes de firmware o hardware que requieren manejo distinto.
- Reduce el tiempo perdido en prueba y error al alinear la configuración del dispositivo con las expectativas de ingestión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-24 con Plaspy brinda a las organizaciones hardware de rastreo compacto y discreto combinado con una plataforma que ingiere y normaliza la telemetría del rastreador para monitoreo, alertas y reportes. La conectividad 4G del AT-24, su batería de respaldo, la detección de ACC y la capacidad de inmovilizador proporcionan los eventos en tiempo real y los cambios de estado que los gestores de flotas y los equipos de seguridad requieren para supervisión operativa y respuesta ante robos.

Si desea saber más sobre cómo Plaspy maneja las integraciones de rastreadores, visite https://www.plaspy.com para información de la plataforma y guías de despliegue. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la documentación específica más reciente y las notas de firmware del fabricante en https://autoseekergps.com/.
