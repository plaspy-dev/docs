---
slug: /cantrack/p60l/configuration
id: p60l-configuration
sidebar_label: Configuration
title: CanTrack - P60L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador CanTrack P60L a servidores y a la plataforma Plaspy
keywords:
  - configuración CanTrack P60L
  - configuración P60L
  - configuración servidor CanTrack P60L
  - configuración Plaspy P60L
  - configuración rastreador GPS P60L
  - configuración rastreador Plaspy
  - configuración rastreador personal
  - integración telemetría P60L
  - dispositivos compatibles Plaspy
  - configuración OTA y SMS P60L
---

# CanTrack - Configuración del P60L

Esta página describe el contexto de configuración público para conectar el rastreador personal CanTrack P60L a Plaspy. Resume los ajustes de servidor prácticos y las acciones típicas necesarias para preparar el dispositivo, de modo que posiciones, alertas SOS, eventos de voz y telemetría de temperatura lleguen a los paneles y alertas de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que puede usar un único endpoint y puerto para varios modelos. La configuración del fabricante y los pasos exactos pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use esta guía junto con la documentación de CanTrack y las herramientas de su dispositivo.

## Visión general de la configuración

Configurar el P60L para Plaspy consiste principalmente en apuntar el rastreador al endpoint del servidor Plaspy, seleccionar el transporte correcto y validar que las posiciones GNSS y la telemetría se suban correctamente. El objetivo es habilitar un rastreo en tiempo real confiable, reportes SOS y telemetría para que Plaspy pueda visualizar y generar alertas sobre los datos del dispositivo.

- Establezca la dirección y el puerto del servidor del dispositivo con los valores de Plaspy para que el rastreador envíe paquetes TCP/IP a la plataforma.
- Seleccione el método de transporte (UDP o TCP) si el rastreador exige una selección explícita.
- Verifique la conectividad celular y que el dispositivo obtenga fijaciones GNSS para transmitir ubicación y telemetría.
- Confirme que el dispositivo informe SOS, voz y temperatura a Plaspy tras la configuración.
- Guarde los ajustes y reinicie el rastreador si es necesario para que el nuevo endpoint y transporte entren en vigor.

## Ajustes del servidor Plaspy

- Use el dominio de servidor d.plaspy.com como host para las subidas de los dispositivos
- La dirección IP del servidor 54.85.159.138 puede emplearse cuando se requiera una entrada numérica
- El puerto 8888 es el puerto en escucha de Plaspy para conexiones de dispositivos
- El transporte soportado puede ser UDP o TCP; seleccione el que su firmware requiera
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta protocolos compatibles en el puerto compartido
- Todos los dispositivos en Plaspy utilizan el mismo puerto, por lo que puede reutilizar el puerto 8888 para modelos compatibles

## Requisitos típicos antes de la configuración

- Un dispositivo P60L cargado y funcional con acceso a la interfaz de configuración del fabricante o al conjunto de comandos SMS
- Servicio celular activo y una SIM válida configurada para datos; cobertura LTE o GPRS según lo requiera el equipo
- Acceso a la herramienta de configuración oficial de CanTrack, la app compañera o la referencia de comandos SMS del fabricante
- Visibilidad GNSS para que el dispositivo obtenga fijaciones de posición iniciales durante las pruebas
- Acceso administrativo a cualquier gateway o firewall que pueda bloquear tráfico saliente hacia d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Un plan para verificar los reportes SOS, voz y temperatura una vez que el dispositivo aparezca en Plaspy

## Cómo se conecta este rastreador a Plaspy

El P60L transmite fijaciones de posición GNSS y telemetría de sensores a través del enlace celular al endpoint de Plaspy, donde la plataforma parsea y almacena los eventos del dispositivo para su mapeo, reglas y alertas. El dispositivo también puede almacenar registros offline y subirlos cuando se restablece la conectividad, de modo que Plaspy mantiene continuidad histórica.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a 54.85.159.138
- Los datos del dispositivo se envían a Plaspy en el puerto 8888 usando el transporte seleccionado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los flujos entrantes al registro de dispositivo correspondiente
- Se reciben y presentan en Plaspy telemetrías como eventos SOS, disparadores de voz bidireccional y lecturas de temperatura
- Los puntos registrados offline se suben al endpoint de Plaspy cuando el dispositivo recupera conectividad

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de CanTrack, como el software del fabricante, la app compañera o el conjunto de comandos SMS.
2. Ingrese el host del servidor de Plaspy; use d.plaspy.com o proporcione 54.85.159.138 cuando se requiera una IP numérica.
3. Establezca el puerto del dispositivo en 8888, que Plaspy utiliza para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere la selección explícita del transporte.
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o mediante los comandos SMS que proporcione CanTrack.
6. Reinicie el P60L si el firmware lo requiere para aplicar los cambios de red.
7. Valide que el dispositivo reporte a Plaspy confirmando su visibilidad en la plataforma y probando una fijación de posición, un evento SOS o una subida de telemetría.

## Ejemplos de comandos de configuración

El CanTrack P60L admite configuración mediante las herramientas del fabricante y un conjunto de comandos SMS; sin embargo, la sintaxis exacta y el comportamiento del firmware varían según la versión y la región. Debido a que los comandos y herramientas del fabricante cambian con el tiempo, consulte la referencia oficial de comandos de CanTrack para las cadenas SMS precisas o las operaciones con la herramienta de PC que correspondan a su dispositivo y versión de firmware.

Si usa configuración por SMS, la documentación de CanTrack indicará los comandos SMS exactos para establecer el host del servidor, el puerto, el transporte, los valores APN y otros parámetros. Mantenga a mano los marcadores como APN, nombre de usuario y contraseña proporcionados por su operador móvil e introdúzcalos según las instrucciones del fabricante.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos, los campos de menú disponibles y las opciones de transporte; revise siempre las notas de la versión del firmware del P60L.
- Algunas instalaciones usan comandos SMS y otras una herramienta de configuración para PC o móvil; emplee el método que su firmware y su proveedor ofrezcan.
- La elección entre TCP y UDP puede afectar garantías de entrega y el comportamiento en condiciones de conectividad pobre; seleccione el transporte recomendado para su caso de uso y pruebe su comportamiento.
- Plaspy usa el mismo puerto 8888 en los dispositivos soportados y realiza detección automática de protocolo para simplificar despliegues con múltiples modelos.
- Tenga a mano el APN y las credenciales del operador al configurar dispositivos que requieran ajustes de datos celulares para la conectividad saliente.

## Por qué usar Plaspy con esta configuración

Usar el P60L con Plaspy permite a las organizaciones centralizar en una sola plataforma la ubicación en tiempo real, alertas SOS, incidentes de voz bidireccional y telemetría ambiental. Para despliegues que requieren monitoreo personal de seguridad, seguimiento de adultos mayores o niños, o telemetría de activos con detección de temperatura y registro offline, el P60L ofrece las capacidades de dispositivo y Plaspy proporciona visualización, alertas y flujos operacionales.

Learn more about Plaspy at https://www.plaspy.com and review CanTrack device specific details at https://www.cantrackgps.com/ to confirm the latest setup methods and firmware behavior. Manufacturer specifications, setup commands and firmware features evolve over time so verify device configuration steps with the official CanTrack documentation before large scale deployments.
