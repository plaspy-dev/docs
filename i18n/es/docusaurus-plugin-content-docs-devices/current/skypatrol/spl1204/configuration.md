---
slug: /skypatrol/spl1204/configuration
id: spl1204-configuration
sidebar_label: Configuration
title: SkyPatrol - SPL1204 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador de candado SkyPatrol SPL1204 para usar con Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - SkyPatrol SPL1204
  - configuración SPL1204
  - configuración rastreador SkyPatrol
  - configuración Plaspy
  - configuración rastreador GPS
  - configuración rastreador de activos
  - rastreador de candado de carga
  - configuración seguimiento de flotas
  - rastreador alerta manipulación
  - rastreador RFID para cerradura
---

# SkyPatrol - Configuración del SPL1204

Esta página explica el contexto público de configuración para usar el rastreador de candado SkyPatrol SPL1204 con Plaspy. Encontrará las opciones de servidor recomendadas y el flujo de trabajo típico para conectar el SPL1204, de modo que sus posiciones GPS, alertas de manipulación, eventos de desbloqueo por RFID y telemetría de batería lleguen a Plaspy para monitoreo e informes.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como punto de partida práctico y verifique instrucciones específicas del dispositivo en la documentación oficial de SkyPatrol.

## Resumen de configuración

El objetivo es dejar el SPL1204 listo para comunicar de forma fiable la ubicación y los eventos al sistema Plaspy. Esto implica apuntar el dispositivo al punto de acceso del servidor de Plaspy, garantizar conectividad celular estable y validar que los datos se reciben correctamente en la plataforma.

- Configure el dispositivo con los ajustes de servidor de Plaspy para que GPS, eventos de manipulación y RFID se reenvíen a la plataforma.
- Verifique que el equipo tenga una conexión de datos celulares activa y batería suficiente para los informes.
- Seleccione la opción de transporte (UDP o TCP) si el equipo lo requiere y establezca el puerto compartido de Plaspy.
- Aplique y guarde la configuración del fabricante y reinicie el rastreador si es necesario.
- Valide los mensajes entrantes en Plaspy para que el dispositivo sea visible y comience el reporte de eventos.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el SPL1204. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta el protocolo del rastreador de forma automática.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda parsear los mensajes entrantes

## Requisitos antes de la configuración

- Confirme que la batería del SPL1204 esté cargada y que el dispositivo esté encendido para la configuración y las pruebas.
- Asegúrese de que el dispositivo tenga una SIM celular activa y un plan de datos compatible con el operador y las redes regionales.
- Tenga a mano el IMEI o el número de serie del dispositivo para el registro e identificación en Plaspy.
- Obtenga acceso al método o software de configuración oficial de SkyPatrol provisto por el vendedor.
- Verifique que dispone de acceso a su cuenta Plaspy y la posibilidad de ver dispositivos nuevos o telemetría entrante en su proyecto.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SPL1204 envía su telemetría de ubicación y eventos a través de la red celular al punto de acceso y puerto del servidor Plaspy. Plaspy ingiere esos mensajes, aplica detección automática de protocolo y muestra la posición y los eventos en la plataforma para que los operadores puedan monitorear los activos y responder a las alertas.

- Las actualizaciones de posición GPS se envían al servidor Plaspy en d.plaspy.com puerto 8888.
- Las alertas de manipulación y los eventos de desbloqueo por RFID se reportan y registran en Plaspy para auditoría y flujos de trabajo de alarma.
- El nivel de batería y el estado de alimentación se transmiten para programar mantenimiento antes de una posible pérdida de energía.
- El transporte puede ser UDP o TCP según la elección de configuración del dispositivo; Plaspy acepta ambos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo entrante del rastreador para parsear mensajes sin necesidad de variar puertos por dispositivo.

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial de SkyPatrol según lo suministre el fabricante o proveedor.
2. Ubique las opciones de servidor o reporte remoto en la interfaz de configuración del dispositivo.
3. Ingrese d.plaspy.com o la IP 54.85.159.138 como destino para el reporte del dispositivo.
4. Configure el puerto en 8888 y confirme que el dispositivo utilizará ese puerto para la telemetría saliente.
5. Seleccione UDP o TCP si el dispositivo requiere elegir un protocolo de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo indican.
7. Valide que el SPL1204 esté reportando a Plaspy comprobando la visibilidad del dispositivo y los eventos entrantes en la plataforma.

## Ejemplo de comandos de configuración

El método de configuración del SPL1204 depende de la herramienta del fabricante, el firmware o el proceso de aprovisionamiento del proveedor y puede realizarse vía interfaz web, software de escritorio o utilidad de provisión. Dado que los métodos varían, aquí no se incluye la sintaxis exacta de comandos. Al usar la herramienta de SkyPatrol, ingrese los ajustes del servidor Plaspy exactamente como se muestran: d.plaspy.com o 54.85.159.138 y puerto 8888, y seleccione UDP o TCP según corresponda. Después de aplicar los ajustes con la herramienta oficial, reinicie el dispositivo si es necesario y verifique la conectividad con Plaspy.

## Notas de configuración

- El firmware y el diseño de menús varían entre versiones de SkyPatrol y revisiones de hardware; siga las instrucciones específicas para el firmware de su equipo.
- Si el rastreador requiere elegir transporte, evalúe UDP frente a TCP según las condiciones de su red; Plaspy acepta ambos en el puerto compartido 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que reduce la configuración de parseo por dispositivo.
- Las herramientas del instalador o del proveedor pueden ofrecer opciones de aprovisionamiento por lotes para múltiples unidades SPL1204; consulte los recursos de SkyPatrol para prácticas de configuración masiva.
- Confirme siempre la activación de la SIM, los ajustes APN y la compatibilidad del operador mediante las guías oficiales de SkyPatrol cuando use datos celulares.

## Por qué usar Plaspy con esta configuración

Configurar el SkyPatrol SPL1204 para reportar a Plaspy permite consolidar la telemetría del candado junto con la ubicación y el estado de la flota en una sola plataforma. Para operadores logísticos y equipos de seguridad, integrar alertas de manipulación, eventos de desbloqueo por RFID y el estado de batería en un único sistema facilita el monitoreo, ayuda a mantener la cadena de custodia y mejora la respuesta ante posibles robos o accesos no autorizados.

Para obtener más información sobre Plaspy y cómo consolida la telemetría de dispositivos como el SPL1204, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo SkyPatrol, avisos de firmware y materiales de soporte, verifique la información más reciente en el sitio del fabricante https://www.skypatrol.com/
