---
slug: /teltonika/fmb920/protocol
id: fmb920-protocol
sidebar_label: Protocol
title: Teltonika - FMB920 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Teltonika FMB920 y su comunicación con Plaspy para rastreo y telemetría
keywords:
  - protocolo Teltonika FMB920
  - protocolo GPS Teltonika FMB920
  - compatibilidad FMB920 Plaspy
  - comunicación rastreador Teltonika
  - protocolo de rastreo FMB920
  - compatibilidad de dispositivos Plaspy
  - integración de telemetría FMB920
  - rastreo vehicular Plaspy
  - rastreador gestión de flotas
  - guía de protocolo para rastreadores GPS
---

# Teltonika - Protocolo FMB920

Esta página explica el contexto público del protocolo para usar el Teltonika FMB920 con Plaspy. Describe cómo el rastreador suele comunicarse con Plaspy, qué papel juega el protocolo del dispositivo en una integración correcta y qué ajustes de conexión emplea el endpoint de recolección de Plaspy. El enfoque aquí es información pública y no sensible sobre el protocolo, no detalles internos del parser ni aspectos de firmware.

El FMB920 es un rastreador GPS compacto, compatible con Plaspy, diseñado para instalaciones discretas. Incluye batería de respaldo interna, soporte para inmovilizador remoto y Bluetooth LE para sensores externos. Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos del protocolo de un equipo consulte siempre la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo mediante el cual el FMB920 envía ubicación, estado y datos de sensores a un servidor remoto como Plaspy. Permite que el dispositivo se identifique, transmita actualizaciones periódicas o por eventos y entregue telemetría que Plaspy convierte en ubicación, alertas y registros históricos.

- Permite reportes periódicos de ubicación y eventos para que Plaspy muestre posiciones en tiempo real y reproducciones históricas.
- Transporta entradas telemáticas como encendido, puertas, alarmas y datos básicos de combustible para lógica basada en eventos en Plaspy.
- Ofrece un canal para exponer datos de sensores Bluetooth LE emparejados hacia la plataforma remota.
- Incluye identificación del dispositivo y marcas de tiempo para que Plaspy pueda correlacionar los reportes con el activo correcto.
- Soporta flujos de gestión remota cuando se usa junto con las herramientas del fabricante para actualizaciones de firmware y configuración.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint de recolección compartido y detecta el protocolo de reporte de forma automática. Esto significa que normalmente no necesita seleccionar una opción de protocolo dentro de Plaspy si el FMB920 está configurado para enviar datos correctamente al endpoint de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo envía datos al endpoint compartido.
- El endpoint del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y se resuelve en 54.85.159.138.
- Plaspy utiliza un único puerto para todos los dispositivos compatibles, lo que simplifica la configuración.
- Cuando el rastreador está configurado para reportar a Plaspy, la plataforma compara los datos entrantes con patrones conocidos y los enruta a la cuenta y al activo correspondientes.
- Si un dispositivo no aparece, verifique que esté apuntando al endpoint de Plaspy y que la conectividad de red y los ajustes del APN sean válidos.

## Transporte y contexto de conexión

El transporte y el destino de la conexión importan en la medida en que el rastreador pueda alcanzar de forma confiable el endpoint de recolección de Plaspy. El FMB920 puede configurarse para usar distintos modos de transporte según el firmware y la instalación.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Plaspy acepta los reportes de dispositivos en el puerto 8888; todos los dispositivos en Plaspy usan el mismo puerto para la recolección.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 para reportar.
- Asegúrese de que el APN y la conectividad de datos móviles del rastreador funcionen para que los reportes lleguen al endpoint de Plaspy.
- La elección del transporte (UDP vs TCP) puede afectar la confiabilidad y la semántica de entrega; elija el modo que el dispositivo soporte y que sea recomendado para su despliegue.

## Notas sobre compatibilidad del protocolo

- El comportamiento del protocolo puede cambiar entre versiones de firmware. Verifique la versión de firmware del rastreador al solucionar diferencias de protocolo.
- Revisiones de hardware o variantes regionales del FMB920 pueden presentar funciones ligeramente diferentes o ajustes predeterminados distintos.
- Las herramientas de configuración del fabricante, como Teltonika Configurator y FOTA WEB, son la vía autorizada para revisar y cambiar los ajustes de reporte del dispositivo.
- La elección de UDP o TCP y el endpoint objetivo deben coincidir con la configuración de recolección de Plaspy para garantizar reportes exitosos.
- Las funciones de Bluetooth LE y el reenvío de sensores externos pueden requerir configuración adicional en el rastreador para exponer los datos al servidor.
- Siempre valide los ajustes del dispositivo contra la documentación oficial de Teltonika para detalles específicos del modelo.

## Por qué es importante entender el protocolo

Comprender cómo el FMB920 se comunica con Plaspy reduce el tiempo de puesta en marcha, mejora la resolución de problemas y apoya operaciones confiables a largo plazo. Tener claro el contexto de conexión y los factores comunes de compatibilidad facilita resolver brechas de reporte y mantener la visibilidad de la flota.

- Confirma que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que los reportes sean recibidos.
- Ayuda a aislar problemas de red como APN o discrepancias en el transporte que impidan la entrega de datos.
- Orienta decisiones sobre firmware y configuración cuando se requieren nuevas funciones o cambios.
- Permite un comportamiento predecible en reportes por eventos, flujos de inmovilizador y reenvío de sensores.
- Facilita la coordinación con instaladores, la documentación de Teltonika y el soporte de Plaspy cuando se necesita una investigación más profunda.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB920 con Plaspy ofrece a flotas pequeñas y administradores de activos una opción de rastreador compacto que reporta ubicación, telemetría básica y datos de sensores a una sola plataforma para monitoreo y respuesta. El perfil delgado del equipo, la batería de respaldo interna, la capacidad de inmovilizador remoto y el soporte Bluetooth LE lo hacen adecuado para instalaciones discretas y flujos anti robo, mientras entrega los datos esenciales que Plaspy necesita para rastreo en vivo y alertas.

Para conocer más sobre Plaspy y cómo se integra con rastreadores como el FMB920 visite https://www.plaspy.com. Para obtener detalles de protocolo específicos del dispositivo, notas de firmware y guías de implementación consulte la documentación del fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
