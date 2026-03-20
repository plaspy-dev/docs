---
slug: /gotop/vt360/configuration
id: vt360-configuration
sidebar_label: Configuration
title: GOTOP - VT360 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GOTOP VT360 para Plaspy, con ajustes de servidor y flujo de trabajo práctico
keywords:
  - Configuración GOTOP VT360
  - Instalación GOTOP VT360
  - Configuración VT360 Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS vehicular
  - Configuración servidor rastreador GPS
  - Configuración GPRS VT360
  - Configuración seguimiento de flotas
  - Integración VT360
  - GOTOP rastreador Plaspy
---

# GOTOP - Configuración del VT360

Esta página describe el contexto público de configuración para usar el rastreador GOTOP VT360 con Plaspy. Reúne los ajustes de servidor prácticos y el flujo de trabajo necesario para apuntar los dispositivos VT360 hacia Plaspy, de modo que el equipo entregue datos de ubicación y eventos para seguimiento en tiempo real y gestión de flotas. Esta guía está dirigida a instaladores e integradores de sistemas que requieren el endpoint compartido de Plaspy y los pasos secuenciales para que el rastreador sea visible en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo de cada rastreador, por lo que en la mayoría de los casos no es necesario seleccionar un servidor específico por protocolo. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, así que siempre verifique cualquier comando específico del equipo con la documentación oficial de GOTOP o con su proveedor antes del despliegue final.

## Resumen de la configuración

Este proceso prepara el VT360 para enviar telemetría e informes de alarma a la plataforma Plaspy y verifica la conectividad para que el dispositivo aparezca en su cuenta de Plaspy. El objetivo es asegurar que el reporte por GPRS o SMS esté dirigido correctamente a Plaspy y que la unidad guarde y envíe eventos en el formato esperado.

- Configure el VT360 para reportar al endpoint del servidor de Plaspy para que ubicaciones y alarmas se entreguen a su cuenta.
- Verifique ajustes de red como la SIM y el APN para que el dispositivo pueda establecer reporte por GPRS.
- Elija el transporte (UDP o TCP) si el equipo requiere selección explícita y establezca el puerto compartido de Plaspy.
- Guarde y aplique los ajustes en el VT360, y reinicie el dispositivo si es necesario para activar la nueva configuración del servidor.
- Confirme el reporte comprobando que el dispositivo aparece y envía actualizaciones en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP (el equipo puede configurarse para usar cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con plan de datos y los ajustes APN correctos para reporte por GPRS.
- Fuente de alimentación para el VT360 y conexionado del vehículo o relés completado.
- Acceso al método de configuración GOTOP que planea usar (comandos SMS, software de PC o cable de configuración) según lo provea el fabricante.
- Antenas (GPS y GSM) conectadas y ubicadas para recepción confiable.
- Una cuenta en Plaspy o detalles de aprovisionamiento de dispositivos para que pueda verificar que el rastreador es visible después de la configuración.
- Herramientas básicas de prueba como un teléfono para SMS o una laptop si usa el software del proveedor.

## Cómo se conecta este rastreador a Plaspy

El VT360 envía reportes de posición y estado al endpoint de Plaspy usando SMS o GPRS según disponibilidad y configuración. Cuando se configura para apuntar a Plaspy, el rastreador transmite su telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir, mostrar y generar alertas sobre esos datos.

- El dispositivo envía actualizaciones periódicas de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede configurar el transporte como UDP o TCP; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Las alarmas por eventos como SOS, disparos de geocerca, exceso de velocidad y batería baja se reenvían a Plaspy para la generación de alertas.
- Si GPRS no está disponible, VT360 soporta métodos de reporte por SMS que pueden integrarse en los flujos de trabajo de Plaspy cuando así se admite.
- Una vez registrado y reportando, Plaspy mostrará la ubicación en vivo, trayectos históricos y registros de eventos para supervisión operativa.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración GOTOP para el VT360 (conjunto de comandos SMS, herramienta de configuración para PC o herramienta móvil del proveedor).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 como servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los equipos).
4. Seleccione transporte UDP o TCP si el VT360 requiere una selección explícita.
5. Configure el APN y los parámetros SIM necesarios para que el dispositivo pueda establecer conexión GPRS.
6. Aplique o guarde la configuración en el equipo y realice un reinicio si el fabricante lo recomienda.
7. Valide que el VT360 reporta a Plaspy revisando su cuenta de Plaspy en busca de una primera actualización de posición y mensajes de estado.

## Ejemplos de comandos de configuración

El VT360 puede configurarse mediante el conjunto de comandos SMS de GOTOP o con herramientas de configuración del proveedor. La sintaxis exacta de los comandos varía según el firmware y la lista de comandos SMS del fabricante. Debido a que los formatos de comando cambian entre versiones de firmware y vendedores, consulte el manual oficial de GOTOP para los comandos SMS o de software precisos para establecer servidor, puerto, transporte y valores de APN.

Si planea usar configuración vía SMS, obtenga la lista de comandos SMS del VT360 en el manual de GOTOP y utilice esa lista autorizada para enviar ajustes de servidor y APN. Si usa una herramienta de configuración para PC, siga la interfaz de la herramienta para ingresar d.plaspy.com o 54.85.159.138 y establecer el puerto 8888, seleccionando UDP o TCP según se requiera.

## Notas de configuración

- Las versiones de firmware pueden cambiar la sintaxis de los comandos o las opciones disponibles; siempre verifique la lista de comandos SMS para su revisión de firmware.
- TCP puede ser más confiable para reportes con sesión mientras que UDP puede ser preferible para actualizaciones frecuentes de bajo overhead; elija según las características de su red y el comportamiento del equipo.
- La configuración del APN es obligatoria para el reporte por GPRS; los valores del APN dependen del proveedor de la SIM y deben configurarse en el dispositivo.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, así que use el puerto 8888 al apuntar el VT360 a Plaspy.
- Las herramientas del fabricante y las imágenes de configuración proporcionadas por distribuidores pueden simplificar despliegues masivos; confirme la compatibilidad de la herramienta con la revisión de hardware de su VT360.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP VT360 con Plaspy facilita la integración de un rastreador probado en un plataforma operativa de gestión de flotas. Las opciones de reporte por GPRS y SMS del VT360, combinadas con el endpoint compartido de Plaspy y la detección automática de protocolos, hacen práctico desplegar unidades rápidamente y mantener visibilidad para seguimiento en tiempo real, alertas por eventos e informes históricos.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific setup steps, firmware notes, and command lists on the official manufacturer website https://www.gotop.cc/. Manufacturer specifications, setup methods, and firmware behavior can change over time so check the GOTOP documentation for the most current guidance.
