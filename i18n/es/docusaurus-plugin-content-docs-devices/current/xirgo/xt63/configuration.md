---
slug: /xirgo/xt63/configuration
id: xt63-configuration
sidebar_label: Configuration
title: Xirgo - XT63 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Xirgo XT63 con Plaspy, incluye ajustes de servidor y comandos SMS para un despliegue rápido
keywords:
  - Configuración Xirgo XT63
  - Instalación Xirgo XT63
  - Configuración XT63 Plaspy
  - Configuración servidor XT63
  - Configuración rastreador GPS XT63
  - Configuración rastreador Xirgo
  - Configuración rastreador Plaspy
  - Telemática vehicular XT63
  - Configuración SMS XT63
  - Ajustes GPRS XT63
---

# Xirgo - Configuración del XT63

Esta página describe el contexto público de configuración para conectar el Xirgo XT63 con la plataforma Plaspy. Se enfoca en los ajustes de servidor prácticos y en los comandos SMS disponibles para apuntar el rastreador a Plaspy, además de explicar qué debe preparar antes de integrar el dispositivo con la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El XT63 admite métodos de configuración por SMS y GPRS que permiten aplicar las configuraciones de Plaspy que se muestran a continuación.

## Resumen de la configuración

El objetivo de este proceso es preparar el XT63 para que se comunique de forma fiable con Plaspy y así reporte ubicación en tiempo real, eventos y telemetría. Use el método de configuración del fabricante que tenga disponible para definir el APN y el endpoint del servidor, y luego valide que el dispositivo se registre en Plaspy.

- Configure el APN del dispositivo para que el rastreador acceda a la red de datos móviles por GPRS o LTE.
- Apunte el rastreador al endpoint y puerto del servidor de Plaspy para que la telemetría se encamine a su cuenta.
- Seleccione el tipo de transporte UDP o TCP si el firmware del equipo solicita elegir uno.
- Guarde y reinicie el dispositivo para que los nuevos ajustes de red y servidor entren en vigor.
- Valide la conectividad en Plaspy y confirme que lleguen mensajes regulares de ubicación y latido.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el XT63 se configura para usar el puerto 8888 como otras unidades compatibles

## Requisitos típicos antes de la configuración

- Un XT63 con alimentación, instalado o alimentado temporalmente para la configuración
- Una tarjeta SIM operativa con datos y SMS habilitados según se requiera para la configuración por GPRS o SMS
- Conocimiento de los valores APN del operador móvil para la SIM en uso
- Acceso al método oficial de configuración Xirgo, como comandos SMS o herramientas del fabricante
- Cobertura de red en la ubicación del dispositivo y confirmación de que el operador soporta los servicios de datos requeridos
- Información sobre la versión de firmware o la revisión de hardware, ya que los comandos y parámetros pueden variar según el firmware

## Cómo se conecta este rastreador a Plaspy

El XT63 envía actualizaciones de ubicación y telemetría de eventos al endpoint y puerto compartidos de Plaspy para que los gestores de flota puedan ver el estado del vehículo y las alertas en la plataforma. Una vez configurado con el APN y el endpoint de Plaspy, el rastreador reportará según su protocolo, que Plaspy detecta automáticamente.

- El rastreador se configura para informar al dominio o IP del servidor Plaspy usando el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo y los requisitos de red
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los mensajes entrantes para mostrarlos
- Actualizaciones de ubicación, eventos de encendido e entradas y otra telemetría se reenvían a su cuenta de Plaspy
- Paquetes regulares de latido o estado ayudan a Plaspy a mantener la visibilidad del dispositivo en la plataforma

## Flujo de trabajo habitual para la configuración

1. Acceda al método oficial de configuración del Xirgo XT63 disponible, por ejemplo comandos SMS o una herramienta del proveedor.
2. Configure el APN del operador para que el dispositivo pueda usar datos celulares por GPRS o LTE.
3. Ingrese el servidor Plaspy como dominio d.plaspy.com o la dirección IP 54.85.159.138 en los campos de servidor del dispositivo.
4. Ajuste el puerto del servidor a 8888, que es el utilizado por todos los dispositivos en Plaspy.
5. Elija UDP o TCP si el firmware del XT63 solicita seleccionar un protocolo de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el dispositivo informe a Plaspy comprobando la llegada de actualizaciones de ubicación y latidos en la plataforma.

## Comandos de ejemplo para la configuración

El XT63 puede configurarse por SMS. El fabricante proporciona los siguientes comandos SMS públicos para establecer el APN y el servidor GPRS. Envíe estos comandos al número del dispositivo desde un teléfono o un gateway SMS que el dispositivo acepte para configuraciones.

1. Configurar el APN del operador
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- Explicación de los marcadores
  - {{apn}} es el nombre del punto de acceso del operador
  - {{apnu}} es el nombre de usuario del APN cuando aplique
  - {{apnp}} es la contraseña del APN cuando aplique
- Complete cada marcador con los valores proporcionados por su operador de SIM o deje usuario y contraseña vacíos si no se requieren

2. Establecer el endpoint GPRS y parámetros de transporte
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- Este comando contiene el puerto 8888 y la IP del servidor Plaspy 54.85.159.138 en el orden que requiere el firmware del dispositivo
- Las cifras finales son parámetros específicos del dispositivo usados por el firmware del XT63 para definir protocolo o reintentos; consulte la documentación de Xirgo para conocer sus significados exactos si necesita ajustarlos

## Notas sobre la configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos SMS o el orden de los parámetros; confirme siempre con las notas de la versión o el manual del XT63.
- El XT63 admite configuración por SMS, lo cual es útil en campo cuando no hay una herramienta de configuración disponible.
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del operador; ambos transportes usan el puerto 8888 para Plaspy.
- Puede apuntar el dispositivo a d.plaspy.com o a 54.85.159.138; usar el dominio permite enrutamiento por DNS mientras que la IP es un endpoint directo.
- Mantenga un registro de los ajustes originales antes de cambiarlos para poder restaurarlos si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el XT63 con Plaspy ofrece a gestores de flota y activos una visibilidad consistente a nivel de plataforma sobre la ubicación de los vehículos, eventos y telemetría. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación, permitiendo desplegar rastreadores a gran escala con una configuración de servidor común y monitoreo centralizado.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific configuration commands, firmware behavior, and installation guidance verify details on the manufacturer website https://xirgo.com/ as specifications and methods can change over time.
