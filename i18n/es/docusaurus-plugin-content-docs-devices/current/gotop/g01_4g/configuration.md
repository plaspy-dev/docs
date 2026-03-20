---
slug: /gotop/g01_4g/configuration
id: g01_4g-configuration
sidebar_label: Configuration
title: GOTOP - G01-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GOTOP G01-4G para integración con Plaspy, ajustes de servidor y flujo práctico de instalación
keywords:
  - configuración GOTOP G01-4G
  - configuración G01-4G
  - rastreador GPS GOTOP Plaspy
  - configuración de rastreo de vehículos
  - ajustes servidor Plaspy
  - guía de instalación rastreador GPS
  - integración G01-4G
  - configuración seguimiento de flotas
  - configuración telemática de vehículos
  - configuración antirrobo rastreador
---

# GOTOP - G01-4G Configuración

Esta página describe el contexto público de configuración para usar el rastreador GOTOP G01-4G con Plaspy. Resume los ajustes de servidor y el flujo de trabajo prácticos necesarios para apuntar el dispositivo a Plaspy, indica qué verificar antes de la instalación y destaca notas importantes sobre variaciones entre fabricantes. El contenido se centra en los parámetros que Plaspy requiere y en cómo el rastreador suele reportar posiciones y eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que aquí se presentan los ajustes públicos de Plaspy y un flujo de trabajo general, no una secuencia de comandos para cada variante de dispositivo.

## Vista general de la configuración

Configurar el G01-4G para Plaspy prepara el dispositivo para enviar datos de ubicación, alarmas y telemetría a la plataforma centralizada de Plaspy. El objetivo principal es asegurar que el rastreador sea accesible desde el endpoint del servidor de Plaspy, seleccionar el transporte y puerto correctos, y validar el dispositivo en la plataforma para que los mapas en vivo y las alertas estén disponibles.

- Apunte el dispositivo al servidor de Plaspy ingresando el dominio o la IP del servidor y el puerto compartido utilizado por Plaspy.
- Seleccione el protocolo de transporte que soporte el equipo, UDP o TCP, y guarde esa configuración en el dispositivo.
- Verifique la conectividad celular y que el rastreador pueda enviar paquetes al endpoint de Plaspy.
- Valide que el dispositivo aparezca en Plaspy y que los mensajes de posición y eventos se estén recibiendo.
- Confirme que alarmas como SOS, vibración y ACC se transmiten y son visibles en los paneles de Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la instalación

- Confirme que el G01-4G está alimentado e instalado según la guía del fabricante, con antena y cableado asegurados.
- Tarjeta SIM celular activa con datos y SMS según lo requiera el dispositivo; verifique cobertura en el área de despliegue.
- Acceso al método o software oficial de configuración GOTOP para el G01-4G (herramienta del fabricante, interfaz web o comandos SMS).
- Una cuenta en Plaspy o acceso a la plataforma para validar el reporte del dispositivo y ver la telemetría entrante.
- Conocimientos básicos sobre si el equipo requiere seleccionar UDP o TCP para el transporte al servidor o si la selección es automática en la interfaz del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el G01-4G envía fijaciones GNSS, eventos de alarma y telemetría del vehículo a través de datos celulares al endpoint y puerto compartido de Plaspy. Plaspy ingiere estos mensajes y los convierte en actualizaciones de ubicación en vivo, alarmas y registros históricos para monitoreo de flota y respuesta a incidentes.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP en el dispositivo si se requiere seleccionar el transporte; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Los reportes regulares de posición y los mensajes de alarma aparecen en Plaspy para mapeo en vivo y alertas.
- La telemetría como eventos ACC (encendido), pulsaciones SOS, alarmas por vibración y pérdida de alimentación se reenvían a Plaspy y quedan registrados contra el dispositivo.
- El fallback por SMS (cuando el equipo lo soporta) ofrece continuidad para eventos selectos si la conectividad de datos está temporalmente indisponible.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración GOTOP para el G01-4G (herramienta del fabricante, interfaz web o canal de configuración por SMS).
2. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como IP 54.85.159.138 en la opción de servidor del dispositivo.
3. Ajuste el puerto del dispositivo a 8888 que es el puerto compartido que utiliza Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere la selección del transporte; guarde el transporte elegido.
5. Aplique o guarde la configuración en el dispositivo y siga los avisos del fabricante para confirmar los ajustes.
6. Reinicie el equipo si la herramienta o la guía del fabricante exige un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando en la plataforma las actualizaciones de posición y los mensajes de eventos entrantes.

## Ejemplos de comandos de configuración

Este documento no incluye una lista universal de comandos públicos. Los dispositivos GOTOP se configuran comúnmente mediante la herramienta del fabricante, la interfaz web o el conjunto de comandos SMS, y la sintaxis exacta de comandos o SMS depende del firmware y de las variantes regionales del producto.

Al usar comandos SMS del fabricante o una herramienta de configuración, los ajustes esenciales que debe proporcionar son:
- Server domain d.plaspy.com o server IP 54.85.159.138
- Port 8888
- Transport UDP o TCP si el dispositivo lo requiere

Si necesita comandos SMS específicos para el dispositivo o una lista de comandos, consulte la documentación del producto GOTOP G01-4G o la guía de configuración proporcionada por su proveedor. Plaspy aceptará los reportes en el servidor compartido y detectará automáticamente el protocolo del rastreador cuando el dispositivo envíe datos a la dirección y puerto indicados arriba.

## Notas de configuración

- Variaciones de firmware y revisiones regionales de hardware pueden cambiar la sintaxis de los comandos y la interfaz de configuración; confirme siempre con la documentación GOTOP correspondiente a su revisión de dispositivo.
- Decida entre UDP y TCP según la preferencia del instalador y las condiciones de la red. Plaspy acepta ambos y realiza detección automática del protocolo.
- El G01-4G soporta fallback por SMS para ciertos eventos; los comandos de configuración por SMS (si se usan) son específicos del fabricante.
- Todos los dispositivos en Plaspy usan el mismo puerto (8888), lo que simplifica la configuración del servidor en flotas mixtas.
- Mantenga una copia de la configuración guardada y pruebe un dispositivo en un entorno controlado antes del despliegue masivo.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G01-4G con Plaspy brinda a las organizaciones visibilidad centralizada sobre la ubicación de los vehículos, alarmas y telemetría. Plaspy ingiere las actualizaciones 4G y los flujos de eventos del rastreador para que los gestores de flota puedan monitorear posiciones en tiempo real, responder a alarmas SOS y por vibración, seguir el estado de encendido y gestionar flujos de inmovilización remota desde una única plataforma.

To learn more about Plaspy and how it integrates with trackers like the GOTOP G01-4G, visit https://www.plaspy.com. For the most current device specific configuration, firmware details, and command syntax consult the manufacturer website https://www.gotop.cc/ since setup methods and device behavior can change over time.
