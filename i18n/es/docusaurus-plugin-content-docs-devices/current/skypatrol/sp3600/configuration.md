---
slug: /skypatrol/sp3600/configuration
id: sp3600-configuration
sidebar_label: Configuration
title: SkyPatrol - SP3600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SkyPatrol SP3600 y reportar a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - Configuración SkyPatrol SP3600
  - Instalación SP3600 SkyPatrol
  - Configuración SP3600 Plaspy
  - Configuración de servidor SP3600
  - Configuración rastreador GPS SkyPatrol
  - Configuración seguimiento de flotas SP3600
  - Guía SkyPatrol SP3600
  - Configuración plataforma GPS SP3600
  - Configuración rastreador SkyPatrol
  - Compatibilidad SP3600 Plaspy
---

# SkyPatrol - Configuración del SP3600

Esta página describe el contexto público de configuración para usar el rastreador SkyPatrol SP3600 Series con Plaspy. Explica los ajustes compartidos del servidor de Plaspy a los que el dispositivo debe reportar, y ofrece una guía práctica e independiente del fabricante para preparar el SP3600 para su integración. El contenido se basa en la descripción del producto SP3600 y en los requisitos generales de Plaspy, y está pensado para instaladores y usuarios técnicos que configuren el rastreador para comunicarse con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione el proveedor. Consulte siempre la documentación de SkyPatrol para controles específicos del equipo y procedimientos de recuperación.

## Resumen de la configuración

Esta sección resume lo que se busca lograr con la configuración y los resultados clave que debe verificar antes de confiar en el SP3600 para el rastreo en vivo con Plaspy.

El proceso de configuración prepara el SP3600 para enviar su ubicación y datos de eventos al punto de enlace de Plaspy, de modo que los vehículos sean visibles y reporten de forma confiable en la plataforma.

- Apuntar la dirección de reporte del dispositivo a Plaspy usando el dominio o la IP del servidor proporcionados.
- Asegurarse de que el dispositivo use el puerto compartido de Plaspy para que la plataforma pueda recibir mensajes de todos los dispositivos compatibles.
- Elegir el método de transporte que soporte el dispositivo y validar la conectividad.
- Guardar la configuración, reiniciar el rastreador si es necesario y confirmar que el equipo aparece en Plaspy.
- Verificar que los reportes de eventos y sensores, como alertas de geocerca y eventos de movimiento, lleguen a la plataforma.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el SkyPatrol SP3600 para que reporte a Plaspy:

- Dominio del servidor d.plaspy.com
- Dirección IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo se conecta

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que el SP3600 debe estar configurado para usar el puerto 8888 al reportar a Plaspy.

## Requisitos habituales antes de la configuración

Prepare los siguientes elementos antes de iniciar el proceso de configuración:

- Un SP3600 alimentado y accesible con antenas y cableado instalados según la guía del fabricante
- Una SIM celular válida y un plan de datos compatible con redes GSM GPRS de banda cuádruple para el dispositivo
- Acceso al método o software oficial de configuración SkyPatrol para el SP3600
- Cobertura de red en la ubicación de instalación para que el dispositivo pueda registrarse en la red móvil
- El IMEI del dispositivo y cualquier identificador de cuenta requerido por la herramienta del fabricante
- Documentación del fabricante correspondiente a la versión de firmware y revisión de hardware en uso

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SP3600 envía datos de ubicación, estado y eventos al punto de enlace de Plaspy y se hace visible en la plataforma. El rastreador reporta la posición del vehículo y otros eventos habilitados para que los administradores de flota puedan monitorear los vehículos casi en tiempo real.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy
- Las actualizaciones de ubicación y los latidos periódicos se envían por el protocolo de transporte elegido a Plaspy
- Eventos de geocerca y alertas de sensores pueden transmitirse a Plaspy para notificaciones en la plataforma
- Plaspy recibe los datos entrantes y detecta automáticamente el protocolo del rastreador para su análisis
- La visibilidad en Plaspy depende del registro exitoso hacia d.plaspy.com o 54.85.159.138 en el puerto 8888

## Flujo de trabajo típico de configuración

Siga estos pasos prácticos para configurar un SP3600 para su uso con Plaspy. Los menús y comandos exactos dependen del software SkyPatrol o de los métodos de provisión por SMS que proporcione el proveedor.

1. Acceda al método oficial de configuración SkyPatrol o al software del SP3600 según lo descrito en la documentación del fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 para coincidir con el puerto de escucha de Plaspy.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según corresponda a su entorno.
5. Aplique o guarde los cambios de configuración en la herramienta SkyPatrol.
6. Reinicie el SP3600 si el firmware o la herramienta lo exige para cargar los nuevos ajustes de conexión.
7. Valide que el dispositivo reporte a Plaspy comprobando que aparece y se actualiza en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta de configuración varían según el firmware de SkyPatrol, la herramienta del proveedor o los métodos de configuración por SMS. Dado que las cadenas de comandos específicas las controla el fabricante y pueden variar por la versión de firmware, consulte la documentación de SkyPatrol o la herramienta de aprovisionamiento del dispositivo para conocer los comandos exactos para establecer servidor, puerto y transporte.

Si utiliza una utilidad de configuración SkyPatrol o un procedimiento basado en SMS, siga el formato exacto que proporcione SkyPatrol para ingresar el dominio o la IP del servidor, el puerto 8888 y la selección de transporte UDP o TCP.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las etiquetas de los menús de configuración y la sintaxis de comandos. Verifique la versión de firmware antes de aplicar instrucciones.
- Elegir UDP frente a TCP puede afectar el comportamiento de entrega de mensajes; seleccione el transporte según lo requiera su instalación y confirme la conectividad.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles, así que asegúrese de que dicho puerto esté permitido en cualquier firewall o equipo de red intermedio.
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse, lo que reduce la necesidad de seleccionar un protocolo en Plaspy.
- Siempre consulte la documentación específica del SkyPatrol SP3600 para instrucciones del dispositivo y cualquier ajuste opcional, como intervalos de reporte de eventos.

## Por qué usar Plaspy con esta configuración

Usar el SkyPatrol SP3600 con Plaspy ofrece un camino sencillo para lograr visibilidad de vehículos y monitoreo de eventos. Los ajustes de servidor compartidos de Plaspy simplifican la incorporación de la flota, ya que la plataforma escucha en un único puerto y detecta automáticamente los protocolos de los rastreadores, permitiendo que los equipos se concentren en el despliegue y las operaciones en lugar de gestionar diferencias de servidor por dispositivo.

Learn more about Plaspy and how it supports fleet tracking and monitoring at https://www.plaspy.com. For the most current SkyPatrol SP3600 device specific setup details, firmware notes, and manufacturer tools consult the official SkyPatrol documentation at https://www.skypatrol.com/ as device configuration methods and firmware behavior can change over time.
