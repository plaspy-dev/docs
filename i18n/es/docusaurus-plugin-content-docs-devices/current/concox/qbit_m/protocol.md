---
slug: /concox/qbit_m/protocol
id: qbit_m-protocol
sidebar_label: Protocol
title: Concox - Qbit M Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo del Concox Qbit M y cómo se comunica con Plaspy para reportes GPS LTE‑M y alertas de emergencia
keywords:
  - protocolo Concox Qbit M
  - protocolo GPS Qbit M
  - Concox Qbit M Plaspy
  - protocolo de comunicación Qbit M
  - protocolo de rastreo Qbit M
  - protocolo de rastreador GPS Concox
  - integración de dispositivo Plaspy
  - rastreador GPS LTE M
  - protocolo de rastreador GPS personal
  - protocolo de rastreo de activos
---

# Concox - Protocolo Qbit M

Esta página ofrece un panorama público del protocolo utilizado por el rastreador Concox Qbit M cuando se integra con la plataforma Plaspy. Describe, en términos generales y no sensibles, cómo se comunica el dispositivo y explica los ajustes de conexión y las opciones de transporte que importan al apuntar un Qbit M hacia Plaspy para el reporte de posiciones LTE M y la entrega de eventos.

El Qbit M es un rastreador compacto para LTE M que envía posiciones GNSS y datos de eventos, como alertas de pánico y disparadores por movimiento. Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware, la configuración regional y la implementación del fabricante. Siempre valide los detalles específicos del equipo con la documentación del fabricante al planear despliegues.

## Resumen del protocolo

El protocolo de comunicaciones del Qbit M permite que el dispositivo reporte ubicación, estado y eventos a un endpoint de backend para que plataformas como Plaspy puedan ingerir y mostrar esos datos. Esta descripción pública se centra en el rol del protocolo más que en sus detalles internos de implementación.

- Permite la transmisión de reportes de posición GNSS y telemetría básica, como estado de batería y movimiento, hacia un servidor remoto.
- Transporta mensajes de evento, incluyendo pulsaciones del botón de pánico, alertas de batería baja y notificaciones de entrada o salida de geocercas.
- Permite que el rastreador se identifique para que la plataforma asocie los reportes con un registro de dispositivo y aplique reglas y alertas de usuario.
- Admite reportes periódicos o basados en eventos para equilibrar la visibilidad en tiempo real y la duración de la batería en escenarios de seguimiento personal.
- Proporciona un flujo consistente de datos de ubicación y eventos que Plaspy puede mapear, almacenar y reenviar hacia flujos de notificación y monitoreo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y utiliza esa conexión para determinar automáticamente el protocolo del dispositivo. En la mayoría de los casos, un Qbit M configurado correctamente reportará al endpoint de Plaspy y no requerirá selección manual de protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para enrutamiento directo cuando sea necesario.
- El puerto es 8888, que Plaspy utiliza como puerto compartido de ingestión para el tráfico de dispositivos.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y el entorno de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos y las reglas de firewall.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan seleccionar un protocolo en la plataforma cuando el dispositivo está correctamente apuntado al endpoint.

## Transporte y contexto de conexión

El transporte de conexión define cómo los paquetes alcanzan Plaspy, pero no cambia el propósito básico del protocolo. El Qbit M usa conectividad celular LTE M para llegar a Internet y puede configurarse para enviar reportes por UDP o TCP al endpoint de Plaspy en el puerto compartido.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Se admiten tanto los transportes UDP como TCP, dependiendo del firmware y de consideraciones de confiabilidad de la red.
- El puerto 8888 es el puerto común usado por Plaspy para todos los dispositivos compatibles, lo que hace que la configuración de enrutamiento y firewall sea predecible.
- Las características de la conectividad LTE M influyen en la frecuencia de reporte y en los perfiles de consumo energético.
- Para despliegues celulares, asegúrese de que el APN y los detalles de la SIM estén configurados correctamente para que el rastreador alcance el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar tiempos de mensaje, eventos soportados y transportes disponibles; verifique las notas de la versión de firmware para cambios relevantes en el protocolo.
- Revisiones de hardware o SKU regionales pueden alterar las bandas de radio soportadas o las funciones de asistencia de posicionamiento que afectan el comportamiento de reporte.
- Las utilidades o aplicaciones de configuración del fabricante pueden exponer opciones de selección de transporte, como UDP versus TCP, y ajustes de dirección de servidor.
- Los nombres de eventos y los conjuntos de parámetros pueden diferir entre ramas de firmware; confirme la lista exacta de eventos de su dispositivo antes de depender de disparadores específicos.
- Para despliegues sensibles a la batería, revise los modos de trabajo disponibles y los intervalos de reporte para equilibrar precisión y tiempo en espera.
- Siempre contraste la compatibilidad con la documentación oficial de Concox para confirmar detalles específicos del dispositivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Qbit M con Plaspy ayuda a asegurar una configuración fiable, una resolución más eficaz de problemas y una operación predecible a largo plazo. Tener una visión clara del protocolo y del contexto de conexión reduce errores de configuración y facilita una integración más fluida.

- Acelera la puesta en marcha aclarando qué dirección de servidor y qué transporte configurar en el dispositivo.
- Ayuda a solucionar problemas de conectividad al acotar las causas relacionadas con transporte, DNS y enrutamiento.
- Permite planificar mejor la autonomía al alinear los intervalos de reporte y los modos de trabajo con la visibilidad deseada.
- Facilita el mapeo preciso de eventos, como alertas de pánico y activaciones de geocerca, dentro de las notificaciones y flujos de trabajo de Plaspy.
- Reduce el riesgo en despliegues al destacar diferencias por firmware o región que puedan afectar el comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el Concox Qbit M con Plaspy ofrece visibilidad centralizada para la seguridad personal y el monitoreo de pequeños activos. Plaspy ingiere la posición y los datos de eventos del dispositivo y expone esa información mediante paneles, reproducción histórica y alertas configurables, de modo que los equipos puedan responder rápidamente a emergencias y gestionar flujos operativos.

Plaspy simplifica la integración al utilizar un único puerto compartido y detección automática de protocolo, lo que reduce la complejidad de configuración para flotas con dispositivos mixtos. Para saber más sobre cómo Plaspy puede trabajar con el Qbit M y otros rastreadores compatibles visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware y orientación de implementación, siempre verifique la información en el sitio del fabricante https://www.iconcox.com/ ya que el comportamiento y las funciones pueden cambiar con nuevas versiones.
