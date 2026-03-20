---
slug: /teltonika/gh5200/protocol
id: gh5200-protocol
sidebar_label: Protocol
title: Teltonika - GH5200 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar Teltonika GH5200 con Plaspy y guía de conexión
keywords:
  - Protocolo Teltonika GH5200
  - Protocolo GPS Teltonika GH5200
  - Compatibilidad GH5200 Plaspy
  - Protocolo de comunicación GH5200
  - Protocolo de rastreo GH5200
  - Integración de tracker con Plaspy
  - Protocolo de rastreador GPS portátil
  - Protocolo de rastreador de seguridad personal
  - Alarma hombre caído
  - Telemetría de sensores Bluetooth
---

# Teltonika - Protocolo GH5200

Esta página describe el contexto público del protocolo para usar el rastreador personal GPS Teltonika GH5200 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel, qué ajustes de conexión se utilizan y qué debe tener en cuenta al integrar un rastreador de seguridad portátil en una plataforma de monitoreo en tiempo real.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión del firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se concentra en el contexto público, no sensible, y en notas prácticas de integración en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación del GH5200 regula cómo el rastreador reporta posiciones, telemetría y eventos de seguridad a un servidor remoto como Plaspy, y cómo el servidor puede reconocer o registrar esos mensajes. A grandes rasgos, el protocolo permite que el dispositivo se identifique, transmita cargas útiles de ubicación y eventos, y envíe telemetría adicional como batería, pulsaciones de botón, indicadores de eventos de voz y datos de sensores Bluetooth.

- Transporta reportes de posición GPS y registros de eventos como alarmas de hombre caído y sin movimiento hacia una plataforma backend.
- Comunica identidad y estado del dispositivo para que Plaspy pueda asociar los mensajes con el activo o usuario correcto.
- Envía telemetría auxiliar como nivel de batería, eventos de botón, indicadores de voz bidireccional y lecturas de sensores Bluetooth.
- Soporta reporte sobre canales de transporte estándar para que el rastreador alcance un endpoint en la nube para ingestión.
- Permite a Plaspy mostrar ubicación en vivo, incidentes con marca temporal y registros históricos para informes y alertas.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de rastreadores en un endpoint unificado e inspecciona los reportes recibidos para determinar automáticamente el protocolo del dispositivo. En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy cuando el GH5200 está configurado para reportar al servidor de Plaspy; Plaspy emparejará los datos entrantes con un formato de rastreador compatible y enrutarán la información a los paneles y flujos de eventos correspondientes.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la provisión y la configuración remota.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el GH5200 reporta a la plataforma.
- Si un dispositivo no llega al endpoint de Plaspy como se espera, verifique APN, destino, tipo de transporte y configuración de identidad del dispositivo.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el GH5200 alcanza la plataforma Plaspy a través de redes celulares. El GH5200 utiliza redes 2G para transmitir sus mensajes y puede configurarse para enviarlos por UDP o TCP al endpoint de ingestión de Plaspy. El enrutamiento de red, la configuración de APN y la selección de transporte son causas comunes de problemas de conectividad, por lo que confirmar esos valores es un paso importante al poner en servicio un equipo desplegado.

- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como host de destino.
- El puerto de red utilizado para todas las comunicaciones de dispositivos con Plaspy es 8888.
- Dependiendo del soporte del equipo y la configuración del cliente, el dispositivo puede enviar datos por UDP o TCP en el puerto 8888.
- Use el APN correcto y la provisión celular adecuada para la región y la SIM del GH5200 para asegurar que los mensajes lleguen a Plaspy.
- Cobertura celular, límites de datos del plan de la SIM y disponibilidad de redes 2G pueden afectar la entrega de mensajes y la frecuencia de reporte.

## Notas de compatibilidad del protocolo

- Las diferencias en versiones de firmware pueden alterar formatos de mensaje, campos reportados y funciones disponibles; siempre anote la versión de firmware del dispositivo al validar su comportamiento.
- Revisiones de hardware o variantes regionales pueden habilitar o deshabilitar telemetría específica, como la voz bidireccional o el soporte para determinados sensores Bluetooth.
- Las opciones de configuración del fabricante pueden permitir seleccionar entre UDP y TCP; confirme qué transporte están usando los dispositivos desplegados.
- Algunos tipos de eventos o asignaciones de botones son configurables en el dispositivo y pueden requerir una configuración acordada para coincidir con los paneles de Plaspy.
- Valide la compatibilidad y los detalles exactos de los mensajes contra la documentación oficial de Teltonika para el GH5200 si necesita especificaciones a nivel de paquete.
- Probar en un endpoint de staging o QA de Plaspy antes de un despliegue amplio ayuda a confirmar que eventos, telemetría y alertas aparecen como se espera.

## Por qué es importante entender el protocolo

Comprender cómo el GH5200 se comunica con Plaspy reduce la fricción en la incorporación, agiliza la resolución de problemas y ayuda a mantener un monitoreo fiable para la seguridad del usuario. Conocer el protocolo y el contexto de conexión permite al equipo de operaciones confirmar la identidad del dispositivo, validar los flujos de eventos e interpretar la telemetría de forma consistente en los paneles de Plaspy.

- Puesta en marcha más rápida al verificar de entrada el host de destino, tipo de transporte y ajustes de APN.
- Resolución de problemas más ágil cuando los eventos no aparecen, comprobando si el dispositivo está alcanzando d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Mapeo claro de eventos de dispositivo como hombre caído, sin movimiento y pulsaciones de botón hacia alertas y flujos de trabajo en Plaspy.
- Manejo predecible de la telemetría de sensores Bluetooth para que lecturas de proximidad y ambientales sean útiles en reportes.
- Mayor confiabilidad a largo plazo al rastrear versiones de firmware y revisiones de hardware que afectan el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el GH5200 con Plaspy ofrece a los equipos una solución enfocada de seguridad personal que integra posición, eventos y telemetría de sensores en una única plataforma de monitoreo. Plaspy ingiere los reportes del GH5200 para que los despachadores y supervisores vean la ubicación en vivo, reciban alertas de incidentes y accedan a registros históricos para apoyar la respuesta y los procesos de cumplimiento.

Plaspy simplifica la integración usando un único puerto para todos los dispositivos compatibles y detectando automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Conozca más sobre Plaspy en https://www.plaspy.com y verifique los detalles actuales de protocolo y firmware con el fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo.
