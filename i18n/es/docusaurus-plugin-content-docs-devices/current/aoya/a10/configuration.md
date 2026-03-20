---
slug: /aoya/a10/configuration
id: a10-configuration
sidebar_label: Configuration
title: AoYa - A10 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador AoYa A10 para que reporte a Plaspy usando los ajustes públicos del servidor y una lista de verificación segura
keywords:
  - Configuración AoYa A10
  - Instalación AoYa A10
  - AoYa A10 Plaspy
  - Configuración servidor AoYa A10
  - Configuración rastreador GPS AoYa A10
  - Guía de configuración AoYa
  - Instalación rastreador A10
  - Integración AoYa A10
  - Configuración rastreo de vehículos
  - Configuración rastreadores Plaspy
---

# AoYa - A10: Configuración

Esta página describe el contexto de configuración pública para usar el rastreador GPS AoYa A10 con Plaspy. Se enfoca en los ajustes de servidor y transporte que deberá aplicar para que el A10 reporte ubicación y estado a la plataforma Plaspy. La guía resume las opciones de configuración del fabricante en términos generales y se centra en los parámetros requeridos por Plaspy para la integración.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante para configurar el A10 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El A10 suele ofrecer configuración en el dispositivo o mediante SMS, además de utilidades del proveedor para establecer APN y detalles del servidor; consulte la documentación del fabricante para comandos y procedimientos específicos del dispositivo.

## Resumen de la configuración

El objetivo de la configuración es preparar el A10 para que envíe de forma confiable su ubicación y eventos del dispositivo a Plaspy. Esto incluye asegurar el acceso a la red, configurar el APN correcto y el endpoint del servidor, elegir el modo de transporte si es necesario y verificar que el dispositivo aparezca en Plaspy.

- Configure el rastreador para usar conexión de datos móviles y un APN válido para que tenga acceso a internet.
- Ingrese la información del servidor de Plaspy para que el dispositivo reporte al endpoint de la plataforma.
- Seleccione el tipo de transporte compatible con el dispositivo (UDP o TCP) si se requiere elegir.
- Guarde y aplique los ajustes, luego valide que el dispositivo sea visible y esté reportando en Plaspy.
- Use herramientas del fabricante o la configuración por SMS proporcionada por AoYa para aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888; Plaspy utiliza el mismo puerto para todos los dispositivos compatibles
- Soporte de transporte mediante UDP o TCP según la capacidad del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos habituales antes de la configuración

- Un rastreador AoYa A10 cargado y operativo con acceso a su método de configuración
- Una tarjeta SIM con un plan de datos activo y cobertura suficiente para GPRS o datos móviles
- Acceso a la herramienta de configuración del fabricante o al método de configuración por SMS si está disponible
- Conocimiento del APN del operador móvil para permitir la conectividad de datos GPRS
- Herramientas básicas para alimentar el dispositivo de forma segura durante la configuración y validación
- Acceso a una cuenta o interfaz de Plaspy para confirmar la recepción de reportes después de la configuración

## Cómo se conecta este rastreador a Plaspy

El AoYa A10 se configura para enviar su ubicación y estado al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera y presente los datos de seguimiento. Una vez que la conectividad de red y los detalles del servidor estén correctos, la detección automática de protocolo de Plaspy ayuda a emparejar el protocolo del dispositivo con la plataforma.

- El rastreador inicia una conexión a d.plaspy.com o a la IP del servidor Plaspy y usa el puerto 8888
- El transporte de datos utiliza UDP o TCP según la configuración del dispositivo
- Plaspy recibe la telemetría y hace visible el dispositivo dentro de la plataforma para monitoreo
- La detección automática de protocolo en la plataforma reduce la necesidad de seleccionar el protocolo manualmente
- Los informes de eventos y ubicación se entregan a Plaspy para monitoreo operativo y registro histórico

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del AoYa A10 o al software proporcionado por el fabricante, o revise las opciones de configuración por SMS en el manual del dispositivo.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo permita el dispositivo.
3. Establezca el puerto del servidor en 8888 para coincidir con el puerto público de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un tipo de transporte; Plaspy admite ambos y detectará el protocolo automáticamente al conectar.
5. Guarde o aplique la configuración mediante la herramienta del dispositivo o el método por SMS y reinicie el dispositivo si se recomienda.
6. Valide que el rastreador reporte a Plaspy comprobando la presencia del dispositivo y la actividad reciente en la plataforma Plaspy.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las rutas de menú exactas o la sintaxis de SMS usada para configurar servidor y APN; consulte siempre la documentación actual de AoYa.
- Algunos instaladores prefieren usar el nombre de dominio d.plaspy.com mientras que otros configuran la IP del servidor directamente; Plaspy acepta ambas opciones.
- UDP y TCP tienen características de transporte distintas; elija la opción recomendada para su entorno o deje la negociación de protocolo a Plaspy cuando sea posible.
- El A10 puede soportar configuración por SMS o una herramienta de software del fabricante; utilice el método que mejor se adapte a su flujo operativo.
- Verifique la configuración del APN con el operador móvil en lugar de confiar en ejemplos genéricos o plantillas.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el AoYa A10 ofrece una forma sencilla de centralizar la ubicación y los datos de eventos de los vehículos. Al apuntar el A10 al endpoint y puerto compartidos de Plaspy, las organizaciones pueden consolidar los datos de múltiples dispositivos y acceder a paneles operativos, alertas y registros históricos de ubicación desde una sola plataforma.

Para saber más sobre Plaspy y cómo funciona con rastreadores como el AoYa A10 visite https://www.plaspy.com. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que confirme los detalles y la sintaxis de comandos específicos del dispositivo en el sitio oficial de AoYa http://www.aoyagps.com/ antes de desplegar equipos.
