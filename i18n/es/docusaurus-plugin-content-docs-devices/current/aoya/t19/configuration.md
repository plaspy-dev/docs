---
slug: /aoya/t19/configuration
id: t19-configuration
sidebar_label: Configuration
title: AoYa - T19 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador AoYa T19 para usarlo con Plaspy con ajustes públicos de servidor y guía general del fabricante
keywords:
  - Configuración AoYa T19
  - Configuración del AoYa T19
  - AoYa T19 Plaspy
  - Configuración rastreador GPS AoYa T19
  - Configuración servidor T19
  - Configuración seguimiento AoYa T19
  - Configuración plataforma GPS T19
  - Rastreo de vehículos AoYa T19
  - Integración AoYa T19
  - Seguimiento de activos T19
---

# AoYa - Configuración del T19

Esta página describe el contexto público de configuración para usar el rastreador magnético mini AoYa T19 con la plataforma Plaspy. Explica los ajustes de servidor compartidos que debe aplicar al dispositivo y resume, en términos generales y no técnicos, los métodos habituales del fabricante para que pueda preparar su rastreador para la integración.

Plaspy utiliza el mismo endpoint y puerto de servidor para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El T19 puede configurarse mediante los métodos que proporciona el fabricante, como comandos SMS o software de configuración; esta guía resume los pasos públicos necesarios para apuntar el dispositivo a Plaspy sin reproducir sintaxis sensibles o específicas del dispositivo.

## Resumen de configuración

El objetivo de la configuración es preparar el T19 para que se comunique de forma fiable con Plaspy, posibilitando la visibilidad en tiempo real y el reporte de eventos en la plataforma. En este dispositivo eso normalmente implica configurar el acceso a la red y el endpoint de reporte, validar la conectividad y confirmar que el rastreador aparece en Plaspy.

- Aplique los ajustes de acceso a la red que requiere el dispositivo para llegar a Internet o a la red móvil de datos.
- Configure el rastreador para que reporte al endpoint del servidor Plaspy y así los datos de ubicación y eventos lleguen a la plataforma.
- Seleccione la opción de protocolo de transporte compatible con el T19 y Plaspy y aplíquela de forma consistente.
- Verifique que el dispositivo sea visible y esté reportando en Plaspy después de guardar los ajustes y probar la conectividad.
- Utilice el método de configuración provisto por el fabricante, como SMS o una aplicación del proveedor, cuando sea necesario.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador una vez que el dispositivo reporte al endpoint del servidor.

## Requisitos típicos antes de la configuración

- Un rastreador AoYa T19 cargado y accesible para la configuración.
- Una tarjeta SIM con un plan de datos móviles instalada y activa si el dispositivo requiere datos celulares para reportar.
- Conocimiento de la configuración APN del operador móvil si el dispositivo requiere ajustar el APN.
- Acceso al método de configuración del fabricante, como comandos SMS o la herramienta de configuración del proveedor.
- Una forma de monitorear el estado de reporte del dispositivo en Plaspy para confirmar la integración exitosa.
- Información básica sobre la ubicación de instalación y el comportamiento de reporte esperado para validar las pruebas.

## Cómo se conecta este rastreador a Plaspy

El T19 se configura para enviar sus datos de ubicación y eventos al endpoint y puerto del servidor Plaspy para que la información se ingiera directamente en la plataforma. Plaspy identifica el protocolo del rastreador de forma automática y comienza a procesar los mensajes sin necesidad de seleccionar el protocolo en el servidor.

- El dispositivo envía mensajes salientes al dominio o IP de servidor de Plaspy.
- Los mensajes se entregan sobre el protocolo de transporte seleccionado, ya sea UDP o TCP, en el puerto 8888.
- Plaspy recibe los datos entrantes y detecta automáticamente el protocolo del rastreador para su procesamiento.
- Las actualizaciones de ubicación y los mensajes de evento se vuelven visibles en Plaspy para monitoreo e informes.
- Una vez confirmado el reporte, el estado del dispositivo y la telemetría quedan disponibles para uso operativo.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante, como el flujo de trabajo SMS del proveedor o la aplicación de configuración que suministra AoYa.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP de servidor 54.85.159.138 como destino.
3. Establezca el puerto de reporte del dispositivo en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos.
4. Seleccione la opción de protocolo de transporte UDP o TCP en el dispositivo si este requiere una selección explícita.
5. Guarde o aplique la configuración en el dispositivo y asegúrese de que los parámetros de red requeridos, como el APN, estén configurados.
6. Valide que el rastreador reporte a Plaspy revisando la conectividad y la visibilidad del dispositivo dentro de la plataforma Plaspy.

Si el dispositivo utiliza configuración por SMS o una aplicación del proveedor, siga la guía del fabricante para enviar los ajustes de red y servidor en lugar de introducir sintaxis de comandos recogida en recursos de terceros.

## Notas de configuración

- Las revisiones de firmware y hardware del dispositivo pueden cambiar los pasos exactos de configuración o los formatos de mensaje; siempre compruebe el comportamiento del dispositivo después de aplicar los ajustes.
- Elija UDP o TCP según la preferencia del instalador y las opciones disponibles en el dispositivo; Plaspy detectará automáticamente el protocolo entrante.
- Todos los dispositivos que se conectan a Plaspy usan el mismo número de puerto, por lo que la consistencia al ingresar el puerto es importante.
- Si usa configuración por SMS, siga la estructura de comandos indicada por el fabricante y no reutilice ni publique credenciales predeterminadas sensibles.
- Verifique el APN y la conectividad de red antes de finalizar la configuración para evitar falsos negativos durante las pruebas.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el AoYa T19 ofrece una plataforma centralizada para recopilar datos de ubicación y eventos de rastreadores magnéticos discretos. Para organizaciones que rastrean vehículos, equipaje, contenedores u otros activos, la combinación de un rastreador de larga duración y una plataforma que consolida datos, detecta protocolos automáticamente y utiliza ajustes de servidor consistentes simplifica la visibilidad de la flota y los activos.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. Please verify the latest device specific configuration details, firmware behavior, and manufacturer instructions on the official AoYa site http://www.aoyagps.com/ as methods and specifications can change over time.
