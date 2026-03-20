---
slug: /maxtrack/mxt_141/configuration
id: mxt_141-configuration
sidebar_label: Configuration
title: Maxtrack - MXT-141 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Maxtrack MXT-141 para reportar a Plaspy usando ajustes públicos de servidor y ejemplo de SMS
keywords:
  - Configuración Maxtrack MXT-141
  - Instalación Maxtrack MXT-141
  - Configuración MXT-141 Plaspy
  - Configuración rastreador GPS Maxtrack
  - Configuración SMS MXT-141
  - Configuración servidor rastreador
  - Configuración seguimiento vehicular
  - Guía de configuración Maxtrack
  - Ajustes servidor Plaspy
  - Integración plataforma GPS
---

# Maxtrack - Configuración del MXT-141

Esta página describe el contexto público de configuración para usar el Maxtrack MXT-141 con la plataforma de flotas Plaspy. Reúne los ajustes de servidor de Plaspy que necesita, explica el flujo de configuración más común e incluye el comando público de configuración por SMS proporcionado para el MXT-141 para que pueda preparar el dispositivo y reportar a Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. Cuando es posible, esta página emplea el ejemplo público de configuración SMS del MXT-141 proporcionado por el fabricante y resalta los campos que normalmente deberá ajustar.

## Resumen de la configuración

El objetivo es preparar el MXT-141 para que envíe telemetría e informes de estado a Plaspy y así el dispositivo sea visible y administrable en la plataforma. El comando SMS público mostrado más adelante es un método frecuente que el fabricante ofrece para enviar los ajustes de servidor y APN al rastreador.

- Configure el rastreador para que reporte al endpoint y puerto del servidor Plaspy, de modo que los datos lleguen a la plataforma.
- Establezca el APN y las credenciales de ser necesarias por el firmware del equipo.
- Verifique la selección de transporte y la conectividad para que los paquetes lleguen a Plaspy.
- Confirme que el dispositivo esté reportando y sea visible en Plaspy después de aplicar los ajustes.
- Use el comando SMS del fabricante como una forma eficiente de aprovisionar dispositivos cuando esté soportado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando se reciben datos
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos comunes antes de la configuración

- Acceso al método de configuración del MXT-141 recomendado por Maxtrack, como el aprovisionamiento por SMS o el software oficial de Maxtrack
- Un teléfono o herramienta capaz de enviar comandos SMS al rastreador si va a usar la configuración por SMS
- Conocer el ID del dispositivo (trackerID) tal como lo requiere el comando SMS del fabricante
- Tener presente la contraseña del equipo; el ejemplo público usa la contraseña por defecto 0000
- Una conexión móvil funcional para el rastreador para que el SMS o la configuración de red tenga efecto
- Confirmar los valores de APN para la SIM del equipo si su operador los exige

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el MXT-141 envía ubicación y datos del dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos entrantes y detecta automáticamente el protocolo del equipo, de modo que el rastreador puede ser reconocido sin necesidad de mapeos de puerto personalizados en el servidor.

- El rastreador envía telemetría periódica o por eventos al endpoint d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP, según cómo esté configurado el firmware del rastreador
- Plaspy detecta el protocolo automáticamente para que la plataforma pueda parsear los mensajes entrantes
- Una vez conectado, el dispositivo aparece en Plaspy para monitoreo y supervisión operacional
- Validar el reporte confirma que el dispositivo se está comunicando correctamente con Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Maxtrack para su unidad, ya sea el formato documentado de aprovisionamiento por SMS o el software del proveedor.
2. Prepare el valor del endpoint del servidor introduciendo d.plaspy.com o 54.85.159.138 según el método que utilice.
3. Configure el puerto en 8888 en la configuración del rastreador.
4. Elija UDP o TCP si el dispositivo requiere selección explícita de transporte.
5. Proporcione el APN y las credenciales si son necesarias y aplique o guarde la configuración.
6. Reinicie el dispositivo si el fabricante lo recomienda o si el equipo requiere reboot para aplicar los ajustes.
7. Valide que el dispositivo esté reportando a Plaspy y aparezca en la plataforma; revise la conectividad y la telemetría inicial.

## Ejemplo de comandos de configuración

El MXT-141 puede configurarse enviando un comando por lotes vía SMS al equipo. El ejemplo proporcionado por el fabricante usa la contraseña por defecto 0000 e incluye marcadores de posición para el tracker ID y los valores de APN. Conserve los marcadores al ensamblar el comando para su dispositivo.

- Comando público por SMS (ejemplo del fabricante):

```
0000,[trackerID],2,0,[apn],[apnu],[apnp],54.85.159.138,8888,,.
```

Notas sobre el comando:
- 0000 es la contraseña del dispositivo en el ejemplo público. Es la contraseña por defecto que muestra la muestra del fabricante.
- [trackerID] es un marcador que debe reemplazar con el ID del dispositivo asignado a su rastreador.
- [apn], [apnu] y [apnp] son marcadores para APN, usuario del APN y contraseña del APN respectivamente; complete estos valores con los requeridos por el operador móvil si es necesario.
- El comando contiene la IP del servidor Plaspy 54.85.159.138 y el puerto 8888 según el ejemplo público de configuración.
- Si su método de instalación acepta un nombre de dominio, puede sustituir d.plaspy.com por la IP cuando corresponda; confirme con la documentación del dispositivo si el rastreador acepta nombres de dominio en la configuración por SMS.

## Notas de configuración

- El ejemplo público del MXT-141 muestra aprovisionamiento por SMS; siga la guía de Maxtrack para el formato de SMS y el procedimiento de envío.
- Los ejemplos públicos suelen usar contraseñas por defecto; cambie la contraseña del dispositivo en instalaciones de producción conforme a su política de seguridad.
- El firmware y las herramientas del proveedor pueden cambiar el formato del comando requerido o los campos disponibles; siempre consulte la documentación del dispositivo para su versión de firmware.
- Elija UDP o TCP según sus preferencias de despliegue y las capacidades del firmware; Plaspy detectará automáticamente el protocolo cuando lleguen los datos.
- Todos los dispositivos usan el puerto 8888 en Plaspy, por lo que no necesita distintos puertos por dispositivo en el lado del servidor.

## Por qué usar Plaspy con esta configuración

Configurar el MXT-141 para reportar a Plaspy ofrece un camino sencillo hacia el seguimiento centralizado, la visibilidad y el monitoreo operacional. Usar los ajustes de servidor compartidos de Plaspy y el ejemplo de aprovisionamiento SMS del fabricante facilita la incorporación uniforme de dispositivos y ayuda a reducir la complejidad de configuración por unidad.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes, and manufacturer details verify information on the official Maxtrack site https://maxtrack.com.br.
