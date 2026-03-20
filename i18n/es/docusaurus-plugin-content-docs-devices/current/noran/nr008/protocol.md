---
slug: /noran/nr008/protocol
id: nr008-protocol
sidebar_label: Protocol
title: Noran - NR008 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público y no sensible del protocolo del Noran NR008 y su comunicación con Plaspy
keywords:
  - protocolo Noran NR008
  - rastreador GPS Noran NR008
  - protocolo de comunicación Noran NR008
  - compatibilidad Plaspy
  - integración Plaspy
  - protocolo rastreador GPS
  - rastreo de vehículos Noran
  - protocolo gestión de flotas
  - telemetría NR008
  - comunicación NR008 GPRS
---

# Noran - Protocolo NR008

Esta página ofrece un resumen público y no sensible sobre el contexto de comunicación del Noran NR008 cuando se utiliza con Plaspy. Explica el papel del protocolo de reporte del rastreador, las opciones de transporte que suelen emplearse en los NR008 y cómo Plaspy recibe e interpreta los datos del dispositivo para seguimiento de flotas, alertas y funciones de control remoto.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en un contexto de protocolo práctico y de alto nivel, no en comandos específicos de firmware ni en formatos de paquete privados.

## Resumen del protocolo

El protocolo del NR008 define cómo el dispositivo reporta posición, estado y eventos a un servidor remoto y cómo puede recibir comandos desde ese servidor. Para implementaciones del NR008 con Plaspy, la función principal del protocolo es entregar telemetría y datos de eventos útiles y fiables a través de redes celulares, además de habilitar funciones de control remoto cuando estén soportadas.

- Transmite posición GNSS y telemetría con marca de tiempo para el seguimiento en mapas y el historial en Plaspy.
- Envía mensajes de alarma y eventos como SOS, activaciones de geocerca, exceso de velocidad y notificaciones de pérdida de energía.
- Incluye confirmaciones de comandos remotos y permite acciones a distancia como control de inmovilizador cuando el dispositivo y el cableado del vehículo lo soportan.
- Usa canales de datos celulares como GPRS para reportes al servidor y puede recurrir a SMS para entrega de comandos o alertas.
- Contiene campos de identificación y estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones de dispositivos en un único endpoint y detecta automáticamente el protocolo del rastreador según el tráfico entrante y la identificación del dispositivo. En despliegues típicos, un NR008 configurado correctamente reportará al endpoint de Plaspy y requerirá una selección mínima de protocolo dentro de la plataforma.

- El dominio de servidor de Plaspy para reportes de dispositivos es d.plaspy.com, que resuelve al endpoint público.
- La IP del servidor de Plaspy es 54.85.159.138 para quienes prefieran usar un destino numérico.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía sus primeros reportes a la plataforma.
- Cuando el NR008 está configurado para reportar al endpoint de Plaspy, por lo general usted no necesita seleccionar manualmente el protocolo dentro de Plaspy.

## Transporte y contexto de conexión

El NR008 soporta reporte celular por GPRS y también puede recibir comandos por SMS, por lo que la elección del transporte depende de la configuración del dispositivo y la disponibilidad de la red. Para reportes directos por socket a Plaspy, el NR008 puede configurarse para usar UDP o TCP en el puerto compartido de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del equipo y la preferencia del operador.
- Los NR008 pueden apuntar al dominio d.plaspy.com o al host numérico 54.85.159.138 como destino de reporte.
- Plaspy utiliza el puerto 8888 para el tráfico de dispositivos en todos los rastreadores soportados, lo que reduce la complejidad de configuración.
- Si GPRS no está disponible, el NR008 puede apoyarse en SMS para entrega de comandos y alertas críticas cuando el dispositivo admite esa alternativa.
- La confiabilidad de la red, la configuración del APN y la provisión de la SIM en el NR008 influyen en la consistencia con la que la telemetría llega a los servidores de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de los mensajes, los campos disponibles o el comportamiento de eventos. Consulte las notas de la versión del firmware para ver diferencias.
- Las revisiones de hardware u accesorios opcionales, como micrófonos externos y botones SOS, pueden modificar las funciones disponibles y los eventos reportados.
- Las opciones de configuración del fabricante pueden permitir cambiar entre SMS, GPRS y reporte por socket directo; elija el transporte que mejor se adapte a sus necesidades de despliegue.
- Algunas acciones basadas en comandos requieren un cableado correcto y compatibilidad del vehículo para funciones como inmovilizador remoto o corte de combustible.
- Valide la configuración del APN y de la operadora de la SIM para asegurar que los reportes GPRS lleguen al endpoint de Plaspy de manera fiable.
- Confirme las bandas soportadas y el modo celular con sus operadores locales al desplegar en distintas regiones.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del NR008 y las opciones de reporte ayuda a garantizar una configuración fiable, agilizar la resolución de problemas y prever un comportamiento estable del dispositivo en Plaspy. Saber cómo el dispositivo envía datos y qué transportes utiliza reduce la fricción en la puesta en marcha y favorece la operatividad a largo plazo.

- Ayuda a diagnosticar por qué la telemetría deja de llegar y si el problema está relacionado con el transporte, el APN o la configuración del dispositivo.
- Aclara qué alertas y eventos puede enviar el NR008 para que las reglas de alertas y los flujos de trabajo en Plaspy se configuren correctamente.
- Indica si comandos remotos como inmovilizar funcionarán por GPRS o si en situaciones concretas se necesita SMS.
- Permite una mejor planificación para despliegues a escala de flota al estandarizar ajustes de dispositivos apuntando al endpoint de Plaspy.
- Favorece la auditabilidad y el cumplimiento al asegurar que el dispositivo transmite los campos necesarios para el reporte y el historial.

## Por qué usar Plaspy con este protocolo

Usar el Noran NR008 con Plaspy centraliza las transmisiones de telemetría y eventos en una plataforma de gestión de flotas. Plaspy ingiere actualizaciones de ubicación, alarmas e informes de estado para ofrecer mapas en tiempo real, enrutamiento de alertas e informes históricos que los equipos operativos pueden usar para monitorear vehículos y coordinar respuestas.

Plaspy facilita la conectividad al ofrecer un único endpoint y puerto compartido para todos los dispositivos soportados y al detectar automáticamente el protocolo del rastreador cuando un dispositivo reporta a d.plaspy.com. Para saber más sobre Plaspy y cómo integrarlo con su despliegue NR008 visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y las recomendaciones del fabricante en el sitio oficial de Noran en http://www.norantracker.com/ ya que las implementaciones pueden cambiar con el tiempo.
