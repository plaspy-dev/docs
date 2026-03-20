---
slug: /trackerking/jx05/configuration
id: jx05-configuration
sidebar_label: Configuration
title: TrackerKing - JX05 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el TrackerKing JX05 para Plaspy con ajustes de servidor compartido y pasos prácticos para compatibilidad GT06
keywords:
  - Configuración TrackerKing JX05
  - Instalación TrackerKing JX05
  - Configuración JX05 Plaspy
  - Configuración rastreador GPS TrackerKing
  - Configuración servidor JX05
  - Configuración JX05 GT06
  - Configuración rastreador de activos
  - Configuración rastreador GPS 2G
  - Plataforma seguimiento JX05
  - Configuración rastreador magnético JX05
---

# TrackerKing - Configuración del JX05

Esta página documenta el contexto público de configuración para usar el TrackerKing JX05 con la plataforma Plaspy. Aquí se resumen los ajustes prácticos y el flujo de trabajo necesarios para apuntar el JX05 a Plaspy, de modo que el rastreador pueda enviar mensajes de ubicación y alarmas a su cuenta de Plaspy. La información se basa en la compatibilidad pública: el JX05 es un rastreador portátil 2G GSM que usa GT06 por defecto y ofrece opciones de mapeo JT808 y Tianqin para backends.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo entrante del rastreador, lo que simplifica el alta de equipos. Los pasos exactos en el lado del fabricante para configurar el JX05 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración de TrackerKing que utilice, por lo que le recomendamos revisar esta página junto con la documentación de TrackerKing al realizar una configuración en vivo.

## Resumen de la configuración

Este proceso prepara el TrackerKing JX05 para comunicarse de forma fiable con Plaspy, de modo que los eventos de posición y alarma sean visibles en la plataforma y en los flujos operativos relacionados.

- Configure el rastreador para que reporte al endpoint del servidor de Plaspy y así la telemetría llegue a su cuenta.
- Asegúrese de que el dispositivo use el puerto compartido de Plaspy y un transporte apropiado (UDP o TCP) según lo requiera el equipo.
- Seleccione el mapeo de protocolo GT06 o una alternativa compatible si su integración requiere JT808 o Tianqin.
- Valide la conectividad y el envío de eventos para que alertas de movimiento, vibración, geocerca y batería baja aparezcan en Plaspy.
- Guarde y aplique los ajustes en el rastreador, luego confirme la visibilidad del dispositivo en la interfaz de Plaspy.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el JX05. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so GT06 or other supported mappings are recognized by the platform

## Requisitos comunes antes de comenzar

- Una unidad JX05 cargada y con la batería interna en buen estado, lista para configuración y colocación.
- Una tarjeta SIM 2G GSM activa instalada y provisionada para acceso de datos según lo requiera su operador.
- Cobertura de red en el sitio de despliegue para conectividad 2G y reporte exitoso al servidor.
- Acceso a los métodos de configuración de TrackerKing, como la app oficial, la herramienta web o las utilidades de provisión del proveedor.
- Acceso a la cuenta de Plaspy y permisos para ver los dispositivos recién añadidos en la plataforma.
- Tener a mano los datos del servidor de Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) para introducirlos al configurar el equipo.

## Cómo se conecta este rastreador a Plaspy

El JX05 envía mensajes de ubicación y alarmas por 2G al endpoint y puerto compartido de Plaspy. Plaspy ingiere los mensajes del dispositivo (GT06 por defecto, con opciones JT808 o Tianqin), mapea los eventos en la plataforma y pone la telemetría a disposición para seguimiento en tiempo real y alertas.

- El rastreador envía actualizaciones de posición y mensajes de eventos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Puede configurar el dispositivo para usar transporte UDP o TCP en el puerto 8888 según lo que el JX05 requiera.
- Plaspy detecta automáticamente el mapeo de protocolo entrante para que los mensajes se analicen sin mapeos de puerto personalizados.
- Eventos de movimiento, vibración, geocerca, exceso de velocidad y batería baja se reenvían a Plaspy para alertas e historial.
- Una vez que el rastreador esté registrado y reporte datos, la telemetría del dispositivo será visible en los paneles y reportes de Plaspy.

## Flujo de configuración típico

Siga estos pasos prácticos al configurar un JX05 para que funcione con Plaspy. La interfaz exacta o el método por comandos dependerá de las herramientas de TrackerKing o del firmware que esté utilizando.

1. Acceda al método o software oficial de configuración de TrackerKing, como la app del proveedor, el portal web o la herramienta de provisión.
2. En los ajustes del servidor del dispositivo, introduzca el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888.
4. Elija el transporte UDP o TCP si la configuración del JX05 requiere especificar el tipo de transporte.
5. Seleccione GT06 como mapeo de protocolo (o JT808/Tianqin si su backend lo exige).
6. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante.
7. Reinicie el dispositivo si el firmware lo solicita o si el proveedor lo recomienda.
8. Verifique que el dispositivo reporte a Plaspy y que los mensajes de ubicación y alarma aparezcan en su cuenta de Plaspy. Recuerde que Plaspy usa el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente.

## Ejemplos de comandos de configuración

El JX05 puede configurarse mediante las herramientas oficiales de TrackerKing, la app móvil o los métodos de provisión del dispositivo. Los formatos exactos de comando y los pasos varían según el firmware y la interfaz del proveedor, por lo que no se incluyen comandos universales aquí.

Si piensa usar SMS o cadenas de comandos remotos para la configuración, consulte el manual de usuario de TrackerKing o la guía de configuración para la sintaxis exacta de los comandos SMS y los marcadores de posición soportados. Siempre confirme los formatos de comando contra la documentación actual de TrackerKing antes de enviar configuraciones a los dispositivos.

## Notas sobre configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de configuración o la sintaxis de los comandos soportados; verifique la versión de firmware antes de aplicar ajustes.
- El JX05 tiene GT06 por defecto, pero también soporta mapeos JT808 y Tianqin; asegúrese de seleccionar el mapeo que coincida con la forma en que desea que Plaspy interprete los mensajes.
- UDP es una opción común para telemetría de rastreadores; utilice TCP si el dispositivo o la red requieren un transporte más fiable. Plaspy soporta ambas opciones en el puerto 8888.
- Confirme la APN y los ajustes del operador en la SIM para que el rastreador pueda establecer una conexión de datos saliente a d.plaspy.com.
- Consulte siempre las instrucciones de configuración de TrackerKing para comandos específicos del dispositivo, procedimientos de reseteo o ajustes opcionales.

## Por qué usar Plaspy con esta configuración

Usar el TrackerKing JX05 con Plaspy ofrece a las organizaciones visibilidad centralizada de rastreadores de larga autonomía sin necesidad de cableado permanente. La combinación de batería de alta capacidad, montaje magnético portátil y compatibilidad con el protocolo GT06 hace que el JX05 sea una opción práctica para remolques, contenedores, maquinaria de construcción y otros activos sin supervisión. Cuando se apunta correctamente al endpoint compartido de Plaspy, los eventos de ubicación y alarma del dispositivo forman parte de un stack unificado de telemetría para monitoreo y respuesta operativa.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el TrackerKing JX05 visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, notas de firmware y soporte del fabricante, verifique los detalles en el sitio de TrackerKing https://trackerking.cn/. Los métodos de configuración por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es importante revisar la documentación del fabricante para asegurar que su configuración esté actualizada.
