---
slug: /skypatrol/sp6824/protocol
id: sp6824-protocol
sidebar_label: Protocol
title: SkyPatrol - SP6824 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SkyPatrol SP6824 y cómo se comunica con la plataforma de rastreo Plaspy
keywords:
  - Protocolo SkyPatrol SP6824
  - Protocolo GPS SkyPatrol SP6824
  - SkyPatrol SP6824 para Plaspy
  - Protocolo de comunicación SP6824
  - Protocolo de rastreo SP6824
  - Tracker compatible con Plaspy
  - Rastreador GPS LTE M
  - Rastreador GPS OBDII
  - Rastreador para gestión de flotas
  - Rastreo de vehículos SP6824
---

# SkyPatrol - Protocolo SP6824

Esta página ofrece un resumen público del protocolo para integrar el SkyPatrol SP6824 con la plataforma de rastreo Plaspy. Se centra en el contexto de comunicación relevante para la integración, en cómo el equipo informa posición y telemetría, y en qué verificar al configurar el dispositivo para que reporte a Plaspy. El contenido es intencionalmente de alto nivel y no sensible, pero explica los elementos prácticos necesarios para una conexión exitosa.

El SP6824 es un rastreador GPS ultradelgado con LTE Cat M1 que puede reportar posición GPS, diagnósticos OBDII opcionales y entradas de eventos a un servicio backend. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe confirmar los detalles del dispositivo con la documentación del proveedor antes del despliegue.

## Resumen del protocolo

El protocolo del SP6824 define las reglas y el flujo de mensajes que permiten al rastreador identificarse, reportar ubicación y telemetría, y enviar alertas por eventos a un servidor. Para la integración con Plaspy, el protocolo habilita la ingesta fiable de actualizaciones de ubicación, diagnósticos provenientes de OBDII cuando estén disponibles y eventos de estado o alarma que alimentan los flujos de trabajo de la plataforma.

- Transporta posición GPS y datos de tiempo para que Plaspy pueda mapear ubicación en tiempo real y trazas históricas.
- Envía diagnósticos OBDII y telemetría del vehículo de forma opcional cuando se utiliza la variante OBDII.
- Genera notificaciones por eventos en entradas como puertas, alarmas, manipulación y cambios de ignición para que Plaspy dispare alertas.
- Soporta reportes periódicos y transmisiones basadas en eventos para equilibrar consumo de batería y uso de red.
- Incluye campos de identificación para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo correcto para la mayoría de los dispositivos compatibles. En la práctica, esto significa que un SP6824 configurado correctamente que reporte al endpoint de Plaspy normalmente no requerirá selección manual de protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y provisión de equipos
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint compartido

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el SP6824 envía sus mensajes de protocolo a Plaspy. El equipo soporta modos de transporte celular típicos y puede configurarse para usar UDP o TCP según el firmware y los requisitos de reporte.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el firmware y las preferencias
- Usar el puerto compartido 8888 entre dispositivos simplifica la configuración de firewall y del operador para flotas
- La selección del transporte puede afectar las garantías de entrega y la forma en que el dispositivo maneja retransmisiones tras pérdidas
- Confirme la provisión del operador y la configuración APN en el dispositivo para garantizar que pueda alcanzar el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar intervalos de reporte, campos de telemetría disponibles o comportamiento de transporte; siempre verifique la versión de firmware instalada.
- Existen variantes de hardware, por ejemplo el modelo plug and play OBDII que aporta diagnósticos adicionales del vehículo.
- Las configuraciones por defecto del fabricante y el APN o ajustes de reporte pueden variar según la región o el operador.
- Elija UDP o TCP en la configuración del dispositivo según sus necesidades de fiabilidad y el desempeño del operador para LTE Cat M1.
- El comportamiento de red de dispositivos LTE M puede diferir entre operadores y proveedores de SIM, por lo que valide la conectividad en las regiones objetivo.
- Valide la compatibilidad consultando la documentación oficial de SkyPatrol y realizando reportes de prueba al endpoint de Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el SP6824 facilita una configuración sin contratiempos, un diagnóstico eficaz y un comportamiento predecible una vez que los dispositivos están desplegados a gran escala. Conocer la superficie del protocolo ayuda a mapear las capacidades del dispositivo con las funciones de Plaspy y a resolver preguntas comunes sobre datos o conectividad.

- Ayuda a confirmar que los campos de posición y telemetría OBDII que Plaspy espera estén presentes en los reportes del dispositivo
- Agiliza la resolución de problemas cuando los dispositivos no aparecen en la plataforma, enfocando las comprobaciones en transporte, APN y ajustes de endpoint
- Permite tomar decisiones informadas sobre UDP versus TCP en función de latencia y necesidades de entrega
- Facilita la planificación de actualizaciones de firmware y posibles cambios en los campos o comportamiento reportado
- Hace más sencillo probar y validar geocercas, alertas de velocidad y rutas que dependen de actualizaciones de ubicación oportunas

## Por qué usar Plaspy con este protocolo

Combinar el SP6824 con Plaspy ofrece a las organizaciones una forma práctica de centralizar ubicación, diagnósticos del vehículo y alertas de eventos desde un rastreador LTE M compacto. Plaspy estandariza los datos entrantes de los dispositivos, detecta automáticamente el protocolo en el endpoint compartido y convierte posición y telemetría en operaciones accionables como geocercas, monitoreo de rutas y flujos de alarma.

Si desea saber más sobre cómo Plaspy maneja integraciones de dispositivos y las funciones disponibles para monitoreo de flotas y activos, visite https://www.plaspy.com. Para detalles específicos del protocolo SP6824, notas de firmware y guías de instalación más recientes, consulte al fabricante en https://www.skypatrol.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
