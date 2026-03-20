---
slug: /eelink/tk319h/configuration
id: tk319h-configuration
sidebar_label: Configuration
title: EElink - TK319‑H Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK319‑H con ajustes de servidor Plaspy y pasos por SMS
keywords:
  - Configuración EElink TK319-H
  - Instalación EElink TK319-H
  - Configuración TK319-H Plaspy
  - MoveLink EELINK instalación
  - Configuración servidor rastreador GPS
  - Configuración seguimiento vehicular
  - Rastreador compatible Plaspy
  - Configuración SMS TK319-H
  - Configuración rastreador gestión de flotas
  - TK319-H APN y servidor
---

# EElink - Configuración del TK319‑H

Esta página describe el contexto público de configuración para integrar el rastreador EElink TK319‑H con la plataforma Plaspy. Incluye los ajustes compartidos del servidor Plaspy que deberá aplicar al equipo, los comandos SMS comunes publicados por EElink para la configuración y un flujo práctico para preparar el dispositivo y que reporte correctamente a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los datos llegan al backend. Los pasos del fabricante para configurar el equipo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, en esta página se incorporan los comandos SMS de EElink para el TK319‑H para ilustrar un camino de configuración habitual.

## Resumen de configuración

El objetivo de la configuración es preparar el TK319‑H para comunicarse de forma fiable con Plaspy, de modo que el dispositivo aparezca en la plataforma, reporte ubicación y alarmas, y participe en los flujos de trabajo de la flota. La configuración típica establece el APN del equipo e indica que envíe datos GPRS o por socket a los puntos finales del servidor Plaspy en el puerto compartido que usa la plataforma.

- Configure el APN del dispositivo para que pueda establecer conectividad de datos móviles y reportes GPRS
- Apunte el rastreador al servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el puerto 8888
- Seleccione el modo de transporte UDP o TCP en el dispositivo si el firmware o la red lo requieren
- Defina un intervalo de reporte adecuado para que el rastreador actualice posición y telemetría en Plaspy
- Verifique la conectividad y use la consulta de parámetros del equipo para confirmar que los ajustes se aplicaron

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según la selección del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Todos los dispositivos en Plaspy usan el mismo puerto por diseño, y la detección de protocolo se gestiona en el servidor, por lo que no necesita conocer el nombre interno del protocolo para registrar el equipo en Plaspy.

## Requisitos previos a la configuración

- Un TK319‑H con alimentación y una tarjeta SIM funcional que tenga datos y SMS habilitados
- Información del APN del operador móvil, incluyendo usuario y contraseña si son requeridos
- Acceso para enviar mensajes SMS al dispositivo o disponer de la herramienta de configuración EElink si está disponible
- Conocimiento básico del número telefónico del equipo o acceso del instalador al vehículo para enviar SMS de configuración
- Cuenta en Plaspy o contacto con el administrador de la flota para confirmar que el dispositivo aparece en la plataforma después de la configuración

## Cómo se conecta este rastreador a Plaspy

El TK319‑H transmite ubicación y telemetría a través de redes celulares usando el protocolo MoveLink/EELINK y se configura para reportar al punto final y puerto compartido del servidor Plaspy. Una vez que el dispositivo envía datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy ingestará los mensajes y detectará automáticamente el protocolo del rastreador para su procesamiento.

- El equipo reporta posiciones GPS y LBS al endpoint del servidor Plaspy
- Los mensajes de telemetría y alarmas se encaminan a Plaspy para el manejo de eventos
- Plaspy mapea actualizaciones de posición en tiempo real y almacena rutas históricas
- El rastreador puede usar transporte UDP o TCP para enviar paquetes al puerto 8888 en el endpoint de Plaspy
- Plaspy maneja la detección de protocolo para que los datos del dispositivo se analicen sin necesidad de seleccionar manualmente el protocolo en la plataforma

## Flujo típico de configuración

1. Acceda al método oficial de configuración EElink para el TK319‑H, normalmente mediante comandos SMS o la herramienta del proveedor suministrada por el fabricante
2. Asegúrese de que el dispositivo tenga energía y una SIM con datos y SMS activas instaladas
3. Ingrese la dirección del servidor Plaspy indicando d.plaspy.com o 54.85.159.138
4. Establezca el puerto del servidor en 8888 en el rastreador
5. Seleccione UDP o TCP como transporte en el dispositivo si solicita una opción
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reboot para cargar los nuevos ajustes
7. Valide que el equipo reporta a Plaspy revisando la actividad del dispositivo en la plataforma o usando el comando de consulta de parámetros

## Ejemplos de comandos de configuración

EElink documenta la configuración basada en SMS para el TK319‑H. Los siguientes comandos se obtienen de la fuente del fabricante y pueden enviarse como SMS al número del dispositivo en el orden mostrado. Los comandos conservan los marcadores de posición cuando corresponde.

- Reinicio opcional a valores de fábrica (usar solo cuando necesite un estado inicial conocido)
```text
FACTORY#
```

- Establecer la zona horaria del dispositivo a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: El comando APN puede incluir opcionalmente el nombre de usuario y la contraseña del APN. Mantenga los marcadores de posición [apn], [apnu] y [apnp] y sustitúyalos por el APN del operador, el usuario APN y la contraseña APN según lo requiera su operador móvil.

- Configurar el servidor GPRS al dominio de Plaspy usando la ranura de servidor primaria 1
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS a la IP de Plaspy usando la ranura de servidor 0
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de seguimiento a 60 segundos
```text
TIMER,60#
```

- Consultar los parámetros actuales del dispositivo para verificar la configuración
```text
PARAM#
```

Envíe estos comandos SMS al número telefónico correspondiente a la SIM instalada en el TK319‑H. Mantenga el orden cuando la inicialización sea importante; por ejemplo, configure el APN antes de indicar el servidor, y realice un restablecimiento de fábrica solo cuando sea necesario.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware de EElink pueden cambiar la sintaxis de comandos o las funciones soportadas; consulte siempre el manual específico del dispositivo para la sintaxis SMS exacta si algo no responde como se espera
- El dispositivo soporta modos de transporte UDP y TCP; elija según la fiabilidad de la red y sus necesidades operativas, pero tenga en cuenta que Plaspy acepta ambos en el puerto 8888
- La configuración por SMS es útil para instalaciones remotas, pero confirme la entrega de SMS y la capacidad de respuesta del dispositivo antes de depender únicamente de la configuración remota
- Reemplace los marcadores de posición del APN por los valores reales del operador; si su operador requiere usuario y contraseña incluya los valores [apnu] y [apnp] en el comando APN
- Plaspy utiliza el mismo puerto para todos los dispositivos y realiza la detección automática de protocolo, por lo que una vez configurados el servidor y el puerto, la plataforma identificará y procesará los mensajes entrantes

## Por qué usar Plaspy con esta configuración

Usar el TK319‑H con Plaspy brinda a las organizaciones visibilidad confiable de la ubicación del vehículo, el estado de encendido y las alarmas dentro de una plataforma única para gestión de flotas. La forma compacta del rastreador y su compatibilidad con MoveLink/EELINK facilitan la provisión de equipos para que reporten posición y telemetría al endpoint del servidor Plaspy en el puerto 8888, permitiendo monitoreo casi en tiempo real, alertas de eventos y datos históricos de recorridos para operaciones y seguridad.

Learn more about Plaspy at https://www.plaspy.com and verify device specific setup methods, firmware behavior, and the latest EElink documentation at https://www.eelink.com.cn/ to ensure the commands and procedures match your tracker revision and regional model.
