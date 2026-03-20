---
slug: /reachfar/rf_v28/configuration
id: rf_v28-configuration
sidebar_label: Configuration
title: Reachfar - RF-V28 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el localizador Reachfar RF-V28 y dirigir telemetría al servidor Plaspy
keywords:
  - Reachfar RF-V28 configuración
  - Reachfar RF-V28 instalación
  - Reachfar RF-V28 Plaspy
  - Configuración rastreador GPS Plaspy
  - configuración colgante GPS personal
  - configuración servidor RF-V28
  - comandos SMS RF-V28
  - geocerca Wi-Fi RF-V28
  - configuración detección de caídas RF-V28
  - integración dispositivo Plaspy
---

# Reachfar - RF-V28 Configuración

Esta página describe el contexto público de configuración para usar el colgante personal GPS Reachfar RF-V28 con la plataforma Plaspy. Se enfoca en los parámetros del servidor y el flujo práctico necesarios para dirigir la telemetría y los eventos del RF-V28 hacia Plaspy, de modo que los dispositivos sean visibles y gestionables en la plataforma.

Plaspy utiliza un endpoint de servidor compartido y un único puerto para los dispositivos compatibles, y detecta automáticamente el protocolo del tracker usado por el RF-V28. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siga el manual del dispositivo para instrucciones exactas al configurar o resolver problemas.

## Resumen de configuración

El objetivo de este proceso es preparar el RF-V28 para enviar datos de ubicación y eventos a Plaspy de forma fiable y verificar que el dispositivo aparezca en la plataforma para su monitoreo y notificaciones.

- Apunte el dispositivo al endpoint de Plaspy para que el RF-V28 entregue posiciones GPS, Wi‑Fi y LBS a la plataforma.
- Confirme los ajustes de transporte (UDP o TCP) y el puerto para que las conexiones sean aceptadas por Plaspy.
- Valide que SOS, detección de caídas y la geocerca por Wi‑Fi estén habilitadas y se transmitan a Plaspy.
- Guarde y aplique la configuración en el dispositivo y verifique que el RF-V28 informe correctamente a Plaspy.
- Utilice la app del fabricante o los métodos de configuración por SMS cuando estén disponibles para completar ajustes.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com como host principal para el reporte de dispositivos.
- IP del servidor 54.85.159.138 puede usarse cuando se requiera un endpoint numérico.
- Puerto 8888 es el único puerto que Plaspy utiliza para las conexiones de dispositivos.
- Soporte de transporte para UDP o TCP; configure el RF-V28 para usar UDP o TCP según la opción que ofrezca el dispositivo.
- Plaspy detecta automáticamente el protocolo del tracker para interpretar los mensajes entrantes del RF-V28 sin selección de protocolo por dispositivo.

## Requisitos típicos antes de la configuración

- Un colgante RF-V28 cargado y operativo con acceso a su interfaz de configuración (app del fabricante o comandos SMS).
- Una SIM celular activa instalada y configurada si el dispositivo usa conectividad celular para reportar posición y eventos.
- Acceso al manual de usuario Reachfar o a la herramienta de configuración del proveedor para comandos específicos del RF-V28 y procedimientos de actualización de firmware.
- Una cuenta en Plaspy o acceso de administrador para registrar y ver el dispositivo una vez que comience a reportar a la plataforma.
- Información de red básica como el dominio del servidor d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 para ingresar en los ajustes del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El RF-V28 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda mostrar posiciones en tiempo real, generar alertas por SOS o geocerca y archivar recorridos históricos.

- El RF-V28 envía actualizaciones de posición (GPS, A-GPS, Wi‑Fi y LBS) a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Eventos del dispositivo como pulsaciones del botón SOS y alarmas de detección de caídas se transmiten a Plaspy para notificación inmediata.
- Los eventos de geocerca y de geocerca por Wi‑Fi de entrada/salida se reportan a la plataforma Plaspy para el procesamiento de alertas y reglas.
- La detección automática de protocolo de Plaspy interpreta los mensajes del RF-V28, por lo que el dispositivo puede usarse sin una configuración de protocolo personalizada en la plataforma.
- Una vez confirmado el reporte, el dispositivo aparece en los mapas de Plaspy y queda disponible el historial de rutas para revisión.

## Flujo de configuración típico

1. Acceda al método oficial de configuración Reachfar o al software correspondiente (app móvil del proveedor, herramienta web o interfaz de comandos SMS) como se describe en el manual del RF-V28.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de red/servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 para que coincida con el puerto compartido de Plaspy.
4. Seleccione UDP o TCP en las opciones de transporte del dispositivo si el RF-V28 solicita elegir el transporte.
5. Aplique o guarde la configuración desde la herramienta del fabricante o mediante SMS y siga cualquier indicación del dispositivo para confirmar los ajustes.
6. Reinicie el RF-V28 si el firmware o el método de configuración lo exige para que los cambios surtan efecto.
7. Valide que el dispositivo informe a Plaspy comprobando la recepción de actualizaciones de ubicación y notificaciones de eventos en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El RF-V28 admite configuración mediante la app del fabricante y comandos SMS; la sintaxis exacta de los comandos varía según el firmware y la versión del proveedor. Dado que los formatos de comando son específicos del fabricante y pueden cambiar, consulte el manual de Reachfar para los comandos SMS o de herramienta precisos para establecer servidor y tipo de transporte.

Orientación de ejemplo que puede aparecer en la documentación del fabricante (no tome esto como comandos literales sin verificar en el manual del RF-V28):
- Establecer servidor especificando d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Seleccionar tipo de transporte UDP o TCP si el dispositivo lo requiere.
- Usar la sintaxis SMS del proveedor o los controles de la app para guardar y reiniciar el dispositivo.

Si necesita ejemplos explícitos de comandos SMS para el RF-V28, consulte el manual de Reachfar o el soporte del proveedor; no dependa de ejemplos genéricos sin verificación.

## Notas de configuración

- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración del lado del equipo.
- Elegir UDP o TCP afecta la forma de entrega; UDP se usa frecuentemente por su menor sobrecarga en telemetría, mientras que TCP puede mejorar la confirmación de entrega según el firmware del dispositivo.
- Las revisiones de firmware y hardware pueden modificar las opciones de configuración disponibles o la sintaxis de los comandos SMS; confirme siempre los comandos con la documentación del fabricante.
- Si el RF-V28 admite configuración por SMS, ese método puede ser una alternativa útil cuando no están disponibles la app o las herramientas OTA.
- Habilite y pruebe los reportes de SOS, detección de caídas y geocerca por Wi‑Fi después de aplicar los ajustes del servidor para confirmar la transmisión de eventos a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el RF-V28 con Plaspy ofrece una forma sencilla de centralizar el seguimiento de seguridad personal, alertas de emergencia e historial de rutas en una única plataforma de monitoreo. Organizaciones y cuidadores obtienen visibilidad en tiempo real de las personas que llevan el colgante, reciben alertas inmediatas por SOS y caídas, y pueden auditar movimientos históricos para revisión de incidentes.

Learn more about Plaspy and how it supports devices like the Reachfar RF-V28 at https://www.plaspy.com. For the latest device-specific configuration methods firmware behavior and manufacturer details verify current information at the Reachfar website https://www.reachfargps.com/
