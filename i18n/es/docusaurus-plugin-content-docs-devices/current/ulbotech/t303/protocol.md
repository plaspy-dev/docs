---
slug: /ulbotech/t303/protocol
id: t303-protocol
sidebar_label: Protocol
title: Ulbotech - T303 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Ulbotech T303 y su comunicación con Plaspy para seguimiento y telemetría de vehículos
keywords:
  - protocolo Ulbotech T303
  - protocolo GPS Ulbotech T303
  - protocolo de comunicación T303
  - protocolo de rastreo T303
  - compatibilidad Ulbotech T303
  - protocolo rastreador Plaspy
  - integración Plaspy T303
  - protocolo rastreador GPS T303
  - rastreo de vehículos T303
  - gestión de flotas T303
---

# Ulbotech - T303 Protocolo

Esta página ofrece una visión pública del protocolo del rastreador GPS Ulbotech T303 y explica cómo el dispositivo se comunica con Plaspy para seguimiento, telemetría y reportes de eventos. El contenido se enfoca en aspectos de alto nivel y no sensibles del protocolo, de modo que responsables de flota e integradores puedan comprender el funcionamiento de la comunicación sin exponer detalles internos del firmware.

Plaspy utiliza ajustes de conexión compartidos para los rastreadores soportados y detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del T303 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; use esta página como guía general y consulte la documentación del fabricante para detalles específicos del dispositivo.

## Visión general del protocolo

El protocolo del T303 define cómo el rastreador comunica posiciones GNSS, telemetría de sensores, eventos de estado y entradas de control a un servidor remoto. En la práctica, el protocolo permite la identificación del equipo, el envío de posiciones, la notificación de alarmas y la entrega de datos telemáticos para que Plaspy pueda procesar y presentar información útil.

- Permite al T303 transmitir fijaciones GNSS periódicas y telemetría a un servidor remoto para seguimiento en tiempo real e historial.
- Transmite eventos y estados como encendido ACC, alarma SOS y acciones del inmovilizador hacia Plaspy.
- Transporta datos de sensores del vehículo, incluyendo entradas analógicas para combustible o temperatura, voltaje de batería y eventos de acelerómetro para análisis del comportamiento del conductor.
- Proporciona la información necesaria a Plaspy para correlacionar la identidad del dispositivo y entregar alertas, reportes y actualizaciones en el mapa.
- Opera sobre la capa de transporte del dispositivo, por lo que la configuración de red y conectividad determina la fiabilidad en la entrega.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos e identifica automáticamente el protocolo del rastreador que reporta. Cuando el T303 está configurado para reportar a Plaspy, normalmente no es necesario seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy ingiere conexiones entrantes en d.plaspy.com usando la IP pública del servidor 54.85.159.138 y el puerto compartido 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en despliegues multi proveedor.
- Plaspy puede aceptar reportes de dispositivos ya sea por UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Si un dispositivo está correctamente configurado para reportar al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador.
- Si la detección automática no ocurre, se recomienda revisar la configuración de reporte del dispositivo y contactar al soporte de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión y transporte determinan cuán fiable será la entrega de datos del T303 a Plaspy. El T303 soporta GPRS móvil para uplink y puede configurarse para usar UDP o TCP para enviar su flujo de reportes al endpoint de Plaspy.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la dirección 54.85.159.138 para el reporte.
- El puerto de red para Plaspy es el 8888 y el dispositivo puede usar UDP o TCP en dicho puerto.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la provisión de equipos y las reglas de firewall.
- La elección del transporte (UDP versus TCP) afecta la semántica de entrega y puede ser seleccionable en la configuración del T303 según el firmware.
- Confirme la configuración del APN y los ajustes de red móvil en el dispositivo para que el reporte por GPRS funcione de forma consistente en la región objetivo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el comportamiento del dispositivo y los eventos disponibles, por lo que verifique qué firmware está instalado en el T303 antes de asumir soporte exacto de características.
- Revisiones de hardware o variantes regionales pueden alterar las entradas, salidas o la interpretación de sensores soportados.
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del T303 y con las restricciones de red en su despliegue.
- Los ajustes predeterminados del fabricante, como APN o intervalo de reporte, pueden influir en cómo el rastreador se comunica con Plaspy.
- Valide siempre el reporte del dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 durante la configuración inicial.
- En caso de duda, consulte la documentación oficial de Ulbotech para parámetros específicos del modelo y características soportadas por el firmware.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del T303 ayuda a instaladores y gestores de flota a lograr una entrega de datos confiable, resolver problemas de conectividad y configurar reportes útiles en Plaspy. Saber qué envía el dispositivo y cómo se conecta garantiza un seguimiento consistente y una resolución más rápida cuando no se reportan eventos esperados.

- Facilita verificar que el dispositivo apunta al endpoint correcto de Plaspy y usa el puerto 8888.
- Acelera la resolución de problemas de posiciones faltantes, alertas de eventos o huecos en la telemetría.
- Orienta decisiones sobre la selección de transporte y la configuración del firewall de la red.
- Permite interpretar correctamente datos de sensores y mapear campos del dispositivo en los tableros de Plaspy.
- Reduce el tiempo de despliegue al clarificar qué ajustes del dispositivo afectan el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech T303 con Plaspy ofrece una forma práctica y escalable de gestionar seguimiento de flota, flujos antirrobo y operaciones basadas en telemetría. El T303 proporciona fijaciones GNSS de alta sensibilidad, E/S flexibles para inmovilización y sensores, y detección de comportamiento que alimentan los tableros, alertas e informes históricos de Plaspy para apoyar la toma de decisiones operativas.

Para conocer más sobre cómo el T303 puede integrarse con Plaspy, visite el sitio de Plaspy en https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware y guía de implementación más actual consulte al fabricante en http://www.ulbotech.com/ ya que la documentación del proveedor puede cambiar con el tiempo.
