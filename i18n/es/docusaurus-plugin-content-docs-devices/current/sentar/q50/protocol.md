---
slug: /sentar/q50/protocol
id: q50-protocol
sidebar_label: Protocol
title: Sentar - Q50 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el reloj GPS Sentar Q50 con Plaspy, con contexto de conexión y recomendaciones de compatibilidad
keywords:
  - protocolo Sentar Q50
  - protocolo GPS Sentar Q50
  - protocolo de comunicación Sentar Q50
  - protocolo de rastreo Sentar Q50
  - protocolo rastreador Sentar
  - protocolo reloj GPS Q50
  - compatibilidad Sentar Plaspy
  - protocolo rastreador GPS Plaspy
  - protocolo de reporte de rastreador
  - compatibilidad protocolo reloj GPS
---

# Sentar - Q50 - Protocolo

Esta página ofrece una vista pública y no sensible del contexto de comunicación del reloj GPS Sentar Q50 cuando reporta a la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión son usados públicamente y consideraciones prácticas de compatibilidad, sin exponer detalles privados de implementación.

El Sentar Q50 es un reloj GPS orientado al monitoreo infantil que incorpora GPS, AGPS y posicionamiento por LBS sobre una plataforma basada en MTK2503. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página explica los puntos de interacción comunes que debe conocer al integrar un Q50 con Plaspy.

## Resumen del protocolo

El protocolo de comunicación del Q50 define cómo el dispositivo envía ubicación, estado y datos de eventos a un servidor remoto. A grandes rasgos, el protocolo transmite información de identidad, actualizaciones de posición y mensajes impulsados por eventos para que Plaspy pueda mostrar información de seguimiento útil para los usuarios finales.

- Transmite la identidad del dispositivo y actualizaciones periódicas de ubicación para que la plataforma relacione los datos con un reloj específico.
- Envía reportes de eventos como alertas SOS, transiciones de geocerca y estado de llamadas o mensajes relevantes para monitoreo y seguridad.
- Proporciona estado y telemetría que permiten a Plaspy mostrar nivel de batería, tipo de red y indicadores básicos de salud del dispositivo.
- Utiliza canales de transporte estándar para alcanzar un endpoint de Plaspy donde la plataforma interpreta los reportes entrantes para visualización y alertas.
- Permite distintos intervalos de reporte y disparadores de eventos según la configuración del dispositivo y el comportamiento del firmware.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos en un endpoint público consistente y aplica rutinas de detección y procesamiento para que el usuario por lo general no tenga que seleccionar manualmente un parser. Los dispositivos correctamente configurados que reportan al endpoint de Plaspy suelen ser reconocidos de forma automática.

- Plaspy escucha en el endpoint público d.plaspy.com y en la IP 54.85.159.138 para reportes entrantes de dispositivos.
- El puerto público compartido para todos los dispositivos es 8888 y Plaspy usa este único puerto para las conexiones entrantes de rastreadores.
- Los dispositivos pueden estar configurados para usar UDP o TCP en el puerto 8888; Plaspy acepta ambos transportes.
- Dado que todos los dispositivos en Plaspy usan el mismo puerto, la plataforma puede centralizar el manejo de conexiones y la detección de protocolos.
- Si el Q50 está configurado para reportar al endpoint de Plaspy y hay conectividad de red, Plaspy intentará detectar y procesar el protocolo del dispositivo automáticamente.

## Transporte y contexto de conexión

Las decisiones de conexión como UDP frente a TCP, DNS frente a IP directa y el host de reporte configurado determinan cómo el Q50 alcanza a Plaspy. Estos son detalles a nivel de configuración que suelen estar disponibles en los ajustes del dispositivo o en la documentación del proveedor.

- El Q50 puede configurarse para enviar reportes usando UDP o TCP en el puerto 8888 según lo permita el dispositivo y su configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138 como host de reporte.
- Plaspy usa el mismo puerto 8888 para todos los rastreadores soportados, lo que simplifica la configuración al desplegar múltiples tipos de dispositivos.
- La selección del transporte (UDP o TCP) puede afectar el comportamiento de entrega y las políticas de reintento, pero no cambia los ajustes públicos del endpoint.
- Asegúrese de que exista conectividad de salida desde la red del dispositivo hacia el endpoint de Plaspy para que los reportes puedan alcanzar el servidor.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre unidades Q50 pueden modificar la frecuencia de mensajes, los tipos de eventos disponibles o los campos opcionales que expone el dispositivo.
- Revisión de hardware o variantes regionales pueden influir en cuáles métodos de posicionamiento se priorizan, como GPS, AGPS o LBS.
- Las herramientas de configuración del fabricante o los pasos de aprovisionamiento pueden requerir establecer el host de reporte en d.plaspy.com o 54.85.159.138 y seleccionar UDP o TCP en el puerto 8888.
- La elección de transporte entre UDP y TCP debe coincidir con lo que el firmware del dispositivo soporta y lo que el entorno de red permite.
- Probar un dispositivo representativo antes de un despliegue masivo ayuda a confirmar cómo se comporta una compilación de firmware particular con Plaspy.
- Siempre contraste las opciones de configuración del dispositivo con la documentación oficial de Sentar para la revisión de firmware que esté utilizando.

## Por qué es importante entender el protocolo

Comprender cómo el Q50 se comunica con Plaspy ayuda a garantizar actualizaciones de ubicación confiables, manejo correcto de eventos y facilita la resolución de problemas cuando surjan incidencias de conectividad o reporte. Tener una comprensión práctica del protocolo y del contexto de transporte reduce el tiempo de integración y mejora la fiabilidad operativa.

- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy si está apuntando al host incorrecto o usando el transporte equivocado.
- Aclara las expectativas sobre la frecuencia de actualizaciones y el impacto en batería relacionado con intervalos de reporte y disparadores de eventos.
- Facilita decisiones informadas sobre la configuración de red, como reglas de firewall o comportamiento NAT para dispositivos en redes celulares o Wi Fi.
- Mejora la resolución de problemas cuando alertas como SOS o eventos de geocerca no se reciben como se espera.
- Contribuye a la planificación de actualizaciones de firmware o reemplazos de dispositivos al señalar dónde suelen ocurrir diferencias de comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el Sentar Q50 con Plaspy ofrece a familias y organizaciones una forma consistente de recopilar datos de ubicación y eventos desde dispositivos wearables y ver esa información en una plataforma centralizada. La detección automática de protocolos de Plaspy y su estrategia de puerto unificado simplifican la incorporación y reducen la necesidad de configurar manualmente parsers de protocolo.

Si está evaluando compatibilidad de dispositivos, configure el Q50 para apuntar a d.plaspy.com o 54.85.159.138 usando UDP o TCP en el puerto 8888 y confirme que los reportes llegan al servidor. Plaspy detectará automáticamente el protocolo del rastreador y procesará los datos entrantes, lo que ayuda a poner los dispositivos en reporte rápidamente.

Para conocer más sobre Plaspy y cómo soporta integraciones de dispositivos visite https://www.plaspy.com. Verifique los detalles más recientes del protocolo y firmware del Sentar Q50 con el fabricante en http://www.sentarsmart.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
