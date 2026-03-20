---
slug: /teltonika/fmc125/configuration
id: fmc125-configuration
sidebar_label: Configuration
title: Teltonika - FMC125 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Teltonika FMC125 con ajustes del servidor Plaspy y comandos de ejemplo
keywords:
  - Teltonika FMC125
  - configuración FMC125
  - configuración FMC125 Plaspy
  - configuración Teltonika
  - configuración rastreador GPS
  - configuración rastreo de vehículos
  - rastreador para gestión de flotas
  - configuración servidor FMC125
  - configuración rastreador Plaspy
  - configuración plataforma GPS
---

# Teltonika - FMC125: Configuración

Esta página describe el contexto público de configuración para usar el Teltonika FMC125 con Plaspy. Incluye los ajustes compartidos del servidor Plaspy que usted aplicará en el rastreador, indicaciones prácticas de instalación y un comando SMS de ejemplo, publicado en información pública del dispositivo, para apuntar el FMC125 a Plaspy.

Plaspy utiliza ajustes de servidor comunes entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración o comandos SMS de Teltonika disponibles. Use esta página para preparar el dispositivo para comunicarse con Plaspy y consulte la documentación de Teltonika para detalles específicos del equipo.

## Resumen de la configuración

El objetivo principal de esta configuración es preparar el FMC125 para enviar posición GNSS y telemetría a Plaspy usando el endpoint y puerto compartidos de Plaspy. Esto implica configurar el APN del dispositivo y apuntar el rastreador al servidor de Plaspy, seleccionar el transporte si es necesario y validar que la unidad se comunique correctamente.

- Configure el APN y las credenciales de red para que el rastreador tenga conectividad celular.
- Establezca el endpoint del servidor en d.plaspy.com o la IP del servidor Plaspy y configure el puerto.
- Seleccione UDP o TCP en el dispositivo si requiere elegir un tipo de transporte.
- Aplique y guarde los ajustes, luego reinicie el rastreador cuando sea necesario para que los cambios surtan efecto.
- Valide que el dispositivo sea visible en Plaspy y que reporte telemetría como posición, entradas por impulso y datos serie.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según la configuración del rastreador
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se usa un único puerto para todos los dispositivos

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo cuando el dispositivo se conecte.

## Requisitos habituales antes de la configuración

- Asegúrese de que el FMC125 esté alimentado e instalado correctamente con las antenas GNSS y celular conectadas.
- Verifique que el dispositivo tenga conexión celular activa y una SIM configurada para datos; el FMC125 soporta Dual SIM para mayor resiliencia.
- Obtenga el APN correcto y, si aplica, el usuario y la contraseña del operador móvil.
- Tenga acceso al método de configuración Teltonika que utilizará, como comandos SMS o herramientas de configuración de Teltonika.
- Confirme que el firmware del dispositivo está actualizado o anote la versión de firmware para seguir las instrucciones del fabricante correctas.
- Prepárese para reiniciar el dispositivo después de aplicar la configuración para asegurar que los cambios se apliquen.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMC125 usa su enlace celular para reportar posición GNSS y telemetría al endpoint y puerto compartidos de Plaspy. Plaspy procesa ubicación, pulsos de entrada, eventos RFID y 1-wire, además de telemetría serie, para mostrar el dispositivo en los paneles de la plataforma y generar alertas.

- El rastreador se apunta a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse en UDP o TCP en el dispositivo si aplica; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto funciona para todos los dispositivos compatibles.
- Una vez conectado, el dispositivo envía actualizaciones de posición y la telemetría configurada para seguimiento en vivo y trazas históricas.
- Plaspy recibe eventos para monitoreo operacional como pulsos de combustible, lecturas RFID y datos serie cuando esas entradas están habilitadas.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de Teltonika para el FMC125, ya sean comandos SMS o una herramienta de configuración de Teltonika.
2. Ingrese el APN y cualquier credencial APN requerida por su operador móvil.
3. Introduzca d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como la dirección del servidor del dispositivo.
4. Configure el puerto 8888 en el rastreador.
5. Seleccione UDP o TCP como transporte si el dispositivo requiere seleccionar uno.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento de Teltonika lo exige.
7. Valide que el dispositivo reporte a Plaspy y aparezca como un rastreador activo en su cuenta Plaspy.

Si utiliza el método de configuración por SMS o lote de Teltonika, incluya los ajustes de Plaspy exactamente como se muestra en el comando de ejemplo a continuación.

## Comandos de configuración de ejemplo

El ejemplo público de Teltonika para configuración por SMS en lote puede establecer parámetros de APN y apuntar el dispositivo a Plaspy. El siguiente comando aparece en contenido público de configuración de dispositivos y preserva marcadores para valores del operador.

- Explicación de los marcadores
  - {{apn}} es el APN de la red móvil
  - {{apnu}} es el nombre de usuario del APN si lo requiere el operador
  - {{apnp}} es la contraseña del APN si lo requiere el operador

Example SMS batch command to set APN and point the device to Plaspy:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Envíe este SMS al dispositivo siguiendo el flujo de trabajo SMS recomendado por Teltonika o introdúzcalo mediante la herramienta de configuración del proveedor cuando esté soportado. El comando establece los parámetros de red y la dirección del servidor a d.plaspy.com con el puerto Plaspy 8888. Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los códigos de parámetro o los comandos soportados; confirme los IDs de parámetro correctos para la versión de firmware de su FMC125.
- Elija UDP o TCP según su preferencia de instalación y cualquier requisito de red; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Preserve los marcadores de APN cuando prepare comandos y reemplácelos por los valores suministrados por el operador antes de enviar.
- La configuración por SMS es común en dispositivos Teltonika, aunque el uso de la herramienta oficial de Teltonika puede ser preferible para despliegues masivos o por etapas.
- Tras aplicar los ajustes, a menudo es necesario reiniciar el dispositivo para que los cambios entren en vigor; siga las indicaciones de Teltonika para procedimientos de reinicio seguros.

## Por qué usar Plaspy con esta configuración

Configurar el FMC125 para reportar a Plaspy ofrece visibilidad centralizada para operadores de flotas que requieren seguimiento en tiempo real confiable y telemetría avanzada. Con el equipo listo para enviar GNSS, entradas por impulso y datos serie, Plaspy puede proporcionar paneles accionables, análisis de combustible y alertas que apoyan la toma de decisiones operativas.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el FMC125 visite https://www.plaspy.com. Para métodos de configuración específicos de dispositivo más recientes, comportamiento de firmware y detalles del fabricante verifique la información en el sitio de Teltonika https://www.teltonika-gps.com/ .
