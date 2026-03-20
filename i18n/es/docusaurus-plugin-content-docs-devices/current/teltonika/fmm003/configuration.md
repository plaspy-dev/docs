---
slug: /teltonika/fmm003/configuration
id: fmm003-configuration
sidebar_label: Configuration
title: Teltonika - FMM003 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FMM003 y apuntarlo a Plaspy con ejemplos de servidor y comandos
keywords:
  - Teltonika FMM003 configuración
  - Teltonika FMM003 configuración para Plaspy
  - Configuración servidor FMM003
  - Configuración rastreador GPS FMM003
  - Configuración software seguimiento Teltonika FMM003
  - Integración rastreador Plaspy
  - Configuración rastreador OBD FMM003
  - Seguimiento vehicular FMM003
  - Ajustes APN y servidor FMM003
  - Comandos configuración Teltonika
---

# Teltonika - Configuración del FMM003

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FMM003 con Plaspy. Aquí encontrará los ajustes de servidor y un ejemplo de comando práctico que puede usar para apuntar el dispositivo a Plaspy y permitir que envíe ubicación y datos OBD para supervisión de flotas. Utilice estas indicaciones junto con la documentación oficial de Teltonika y las herramientas del dispositivo al realizar su configuración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El FMM003 admite varios métodos de configuración de Teltonika como Teltonika Configurator, FOTA WEB, FOTA o herramientas móviles; el ejemplo de comando que se muestra a continuación se puede aplicar cuando la configuración por SMS o por cadena de comandos está soportada.

## Resumen de la configuración

Este proceso prepara el FMM003 para comunicarse con Plaspy configurando los parámetros de acceso de red y el endpoint correcto del servidor de Plaspy. El objetivo es garantizar que el rastreador reporte posición y datos OBD del vehículo de forma confiable a la plataforma.

- Configure las credenciales APN para que el dispositivo use datos móviles
- Establezca el dominio o IP del servidor de Plaspy y el puerto compartido que utiliza la plataforma
- Seleccione el modo de transporte si el dispositivo requiere elegir entre UDP o TCP
- Aplique y guarde la configuración y reinicie el equipo cuando sea necesario
- Verifique que el dispositivo esté reportando en Plaspy y revise la visibilidad de eventos y telemetría

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar su FMM003:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará el protocolo que utilice el rastreador.

## Requisitos típicos antes de la configuración

- Un FMM003 alimentado y accesible, instalado o conectado al puerto OBD II del vehículo
- Una tarjeta micro SIM válida y un plan de datos activo configurado en el dispositivo con los ajustes APN correctos
- Acceso a un método de configuración de Teltonika compatible con su despliegue, como Teltonika Configurator, FOTA WEB, FOTA o la aplicación móvil FMBT
- Conocimiento de las credenciales APN o marcadores de posición para APN, usuario APN y contraseña APN
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para verificar el envío de datos del dispositivo tras la configuración
- Firmware actualizado en el dispositivo si su política de instalación lo requiere

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMM003 enviará posición y los parámetros OBD disponibles al endpoint compartido de Plaspy para que su flota pueda ser monitoreada y analizada en la plataforma. El dispositivo se configura para reportar a la dirección y el puerto de Plaspy indicados más arriba.

- El rastreador utiliza conectividad celular y el APN del dispositivo para establecer sesiones de datos
- Los mensajes del dispositivo se envían a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- La capa de transporte puede ser UDP o TCP según la opción que elija en la configuración
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el envío normal del dispositivo se reconocerá en la plataforma
- Una vez que reporte, la ubicación y los parámetros OBD compatibles aparecerán en Plaspy para monitoreo y alertas

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Teltonika apropiado para su dispositivo y entorno
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo
3. Configure el puerto en 8888, que es el puerto compartido de Plaspy para todos los dispositivos
4. Elija UDP o TCP si el dispositivo le solicita seleccionar una opción de transporte
5. Ingrese las credenciales APN usando los valores de su operador o marcadores de posición y aplique los ajustes
6. Guarde o aplique la configuración y reinicie el dispositivo si la herramienta o el firmware lo recomienda
7. Valide que el dispositivo envía datos a Plaspy y confirme que la telemetría aparece en la plataforma

## Ejemplo de comandos de configuración

El ejemplo público de comando Teltonika que se muestra a continuación realiza una actualización concisa de parámetros que establece los valores APN y apunta el dispositivo al servidor de Plaspy. Este ejemplo se suele enviar por SMS o mediante una herramienta de configuración Teltonika que acepte comandos setparam.

- establecer valores APN y endpoint del servidor Plaspy usando un solo comando

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de los marcadores y campos
  - [apn] es el nombre APN de su operador móvil
  - [apnu] es el usuario APN si su operador lo requiere
  - [apnp] es la contraseña APN si su operador la requiere
  - d.plaspy.com es el dominio del servidor Plaspy usado por la plataforma
  - 8888 es el puerto de Plaspy utilizado por todos los dispositivos
  - Si utiliza configuración por SMS, envíe el comando según las reglas de comandos SMS de Teltonika o use Teltonika Configurator o las herramientas FOTA para aplicar el mismo conjunto de parámetros

Confirme siempre el método de envío del comando y los IDs de parámetro exactos en la documentación de Teltonika o en su herramienta de configuración antes de aplicar el comando.

## Notas de configuración

- Las diferencias de firmware y de las herramientas del dispositivo pueden cambiar los IDs de parámetros y los formatos de comando; verifique los IDs en las referencias actuales de Teltonika
- Elija UDP o TCP según el comportamiento de su red y operador; Plaspy soporta ambos y detectará automáticamente el protocolo
- Mantenga las credenciales APN seguras y verifíquelas con su operador móvil antes de aplicarlas
- Si usa configuración por SMS, asegúrese de que el dispositivo acepte comandos SMS y de que el número remitente esté permitido por la configuración del dispositivo
- Después de aplicar los ajustes, espere un breve periodo para que el dispositivo se conecte y registre en Plaspy antes de dar por concluida la configuración

## Por qué usar Plaspy con esta configuración

Apuntar el Teltonika FMM003 a Plaspy usando los ajustes de servidor compartidos de Plaspy ofrece una forma práctica de centralizar la posición y los datos OBD del vehículo para la supervisión de flotas y la gestión operativa. Las capacidades OBD del FMM003, combinadas con la visibilidad en Plaspy, ayudan a los equipos a monitorear odómetro y parámetros relacionados con combustible junto con la posición GPS para tomar mejores decisiones sobre mantenimiento y gestión de combustible.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup and firmware behavior with the manufacturer at https://www.teltonika-gps.com/ to ensure your configuration matches current Teltonika recommendations.
