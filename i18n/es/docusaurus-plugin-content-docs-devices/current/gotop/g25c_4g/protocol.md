---
slug: /gotop/g25c_4g/protocol
id: g25c_4g-protocol
sidebar_label: Protocol
title: GOTOP - G25C-4G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para GOTOP G25C-4G y compatibilidad con Plaspy, con ajustes de conexión y notas prácticas de integración
keywords:
  - protocolo GOTOP G25C-4G
  - protocolo GPS GOTOP G25C-4G
  - protocolo de comunicación GOTOP G25C-4G
  - protocolo de rastreo GOTOP G25C-4G
  - compatibilidad de dispositivos Plaspy
  - integración de rastreo con Plaspy
  - guía de protocolo de rastreador GPS
  - protocolo de rastreo de vehículos
  - protocolo de rastreador IoT
  - configuración G25C-4G para Plaspy
---

# GOTOP - Protocolo G25C-4G

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP G25C-4G con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, para que integradores y administradores entiendan los requisitos de conexión y qué esperar durante la configuración.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que aspectos como la cadencia de mensajes, umbrales de alarma y funciones opcionales pueden diferir entre unidades.

## Resumen del protocolo

El protocolo de comunicación del G25C-4G regula cómo el rastreador envía identidad, ubicación, telemetría y alarmas a un servicio backend como Plaspy. En la práctica, el protocolo permite que el dispositivo entregue actualizaciones de posición útiles, reportes de estado y notificaciones de eventos que Plaspy procesa para paneles en tiempo real y reproducción histórica.

- Permite reportes periódicos y por eventos de ubicación desde GPS, BDS, AGPS, Wi‑Fi y LBS hacia Plaspy
- Transporta identidad y estado del dispositivo para que Plaspy asocie la telemetría con el activo correcto
- Transmite eventos de alarma y sensores como movimiento, caída, batería baja, geocerca y exceso de velocidad para alertas
- Soporta almacenamiento en offline y reenvío automático para que los puntos almacenados durante pérdida de conectividad se entreguen cuando se restablezca la red
- Facilita configuración remota y flujos asistidos por SMS para cambios rápidos en campo sin necesidad de entrar a la plataforma

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador según los patrones de tráfico y los reportes del dispositivo. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está apuntando correctamente al endpoint de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com para configuraciones basadas en hostname
- La IP del servidor Plaspy para configuración directa es 54.85.159.138
- Los dispositivos reportan al puerto 8888 y Plaspy usa el mismo puerto para todos los dispositivos soportados
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador
- Cuando el rastreador apunta al endpoint de Plaspy, la plataforma detectará el protocolo automáticamente y comenzará a procesar los reportes

## Transporte y contexto de conexión

El comportamiento de conexión determina cómo el G25C-4G llega a Plaspy, pero no cambia el propósito general del protocolo. El rastreador típicamente usa datos celulares para enviar telemetría y puede recurrir a otros mecanismos para mensajes cortos o controles por SMS cuando están disponibles.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según las necesidades de su despliegue
- Apunte el rastreador a d.plaspy.com o directamente a 54.85.159.138 para entregar reportes a Plaspy
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que el mismo puerto de destino aplica entre rastreadores
- La conectividad de la red celular es el transporte principal para telemetría en tiempo real, con almacenamiento offline usado durante cortes
- El SMS puede complementar el reporte de datos para enlaces de ubicación rápidos y cambios remotos de parámetros cuando el dispositivo lo soporta

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, campos opcionales y comandos soportados; verifique la versión de firmware al solucionar problemas
- Las revisiones de hardware o variantes regionales pueden modificar las bandas de radio soportadas o funciones disponibles que afectan la frecuencia de telemetría
- La configuración por parte del fabricante y los ajustes por defecto pueden variar y posiblemente requieran actualizar parámetros iniciales para apuntar el dispositivo a d.plaspy.com o 54.85.159.138
- Elegir UDP o TCP afecta el comportamiento ante pérdida de paquetes y el paso por firewalls; consulte las políticas de red para escoger el mejor transporte
- La memoria offline y el reenvío automático mejoran la confiabilidad, pero el momento del reenvío depende del firmware
- Siempre contraste los nombres de parámetros del dispositivo y los formatos de comandos SMS con la documentación del fabricante antes de aplicar cambios de configuración

## Por qué importa conocer el protocolo

Comprender el protocolo de comunicación reduce el tiempo de puesta en marcha y facilita aislar problemas cuando un dispositivo no aparece en Plaspy o cuando la telemetría parece incompleta. Tener expectativas claras sobre transporte, frecuencia de reporte y comportamiento de eventos conduce a despliegues más confiables y a una resolución de incidentes más rápida.

- Ayuda a verificar que el rastreador apunta al endpoint y puerto correctos de Plaspy
- Aclara si el dispositivo y la red requieren UDP o TCP
- Orienta la resolución de faltantes de reportes durante mala cobertura celular o después de actualizaciones de firmware
- Informa decisiones sobre perfiles de ahorro de energía, frecuencia de telemetría y sensibilidad de alarmas
- Asegura que el comportamiento de alarmas y reenvío cumpla los requisitos operativos para anti robo y monitoreo de activos

## Por qué usar Plaspy con este protocolo

El GOTOP G25C-4G ofrece posicionamiento multimodo robusto y una larga duración de batería, adecuado para monitoreo a largo plazo de vehículos y activos. Cuando se integra con Plaspy, el dispositivo puede alimentar actualizaciones de ubicación en tiempo real, alarmas y telemetría histórica a una plataforma centralizada para monitoreo y supervisión operativa. Esta combinación es útil para flotas, rastreo de contenedores, activos en renta y equipos remotos donde la durabilidad, autonomía y reporte confiable son prioritarios.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el G25C-4G visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo, notas de firmware y guías de configuración del fabricante consulte la documentación oficial de GOTOP en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
