---
slug: /calmamp/lmu_2010/configuration
id: lmu_2010-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-2010 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para CalmAmp LMU-2010 con valores de servidor Plaspy y pasos prácticos de integración
keywords:
  - Configuración CalmAmp LMU-2010
  - Configuración LMU-2010 Plaspy
  - Configuración servidor LMU-2010
  - Configuración GPS LMU-2010
  - Ajustes APN LMU-2010
  - Configuración SMS LMU-2010
  - Configuración tracker Plaspy
  - Seguimiento vehicular LMU-2010
  - Configuración remota LMU-2010
  - Instalación tracker CalmAmp
---

# Configuración — CalmAmp - LMU-2010

Esta página documenta el contexto público de configuración para usar el tracker CalmAmp LMU-2010 con Plaspy. Se centra en los valores de servidor prácticos y en los comandos públicos necesarios para apuntar un LMU-2010 a la plataforma Plaspy, de modo que el dispositivo pueda reportar ubicación y estados a su cuenta Plaspy. Cuando está disponible, la página incluye ejemplos de comandos SMS y notas extraídas de documentación pública del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker; los pasos exactos del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LMU-2010 admite configuración por SMS y por GPRS; los ejemplos siguientes usan SMS para establecer APN y valores de servidor GPRS. Verifique siempre los comandos y el flujo de trabajo exactos para su versión de firmware y método de instalación.

## Resumen de la configuración

El objetivo al configurar un LMU-2010 para Plaspy es preparar el dispositivo para comunicarse de forma fiable con los servidores de Plaspy y que aparezca en la plataforma para monitoreo e informes. El proceso práctico de configuración normalmente establece credenciales de red, apunta el tracker al endpoint de Plaspy, define el puerto y el transporte correctos y valida que el dispositivo reporte correctamente.

- Configurar el APN del dispositivo y cualquier credencial APN necesaria para que el tracker establezca conexión GPRS.
- Apuntar el dispositivo al endpoint de servidor de Plaspy d.plaspy.com o a la IP de servidor indicada.
- Asegurarse de que el dispositivo use el puerto 8888 que Plaspy emplea para todos los dispositivos compatibles.
- Seleccionar UDP o TCP como transporte si el dispositivo exige una selección explícita y guardar la configuración.
- Reiniciar o reiniciar el tracker después de aplicar los ajustes para que los cambios surtan efecto y validar que el dispositivo reporte a Plaspy.

## Ajustes de servidor Plaspy

Use estos valores públicos de servidor Plaspy al configurar el LMU-2010. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del tracker.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP (el dispositivo puede configurarse para cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del tracker para las conexiones entrantes
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo valor de puerto para simplificar la configuración

## Requisitos típicos antes de la configuración

- Acceso al método de configuración del LMU-2010 que soporte su versión, como comandos SMS, software del fabricante o herramientas Over-the-Air.
- Una SIM activa con capacidad de SMS y acceso GPRS/datos si va a configurar los ajustes de red directamente en el dispositivo.
- El dispositivo encendido y instalado o temporalmente conectado para la configuración y pruebas.
- APN, nombre de usuario APN y contraseña APN provistos por el operador móvil si la SIM lo requiere.
- El MID del dispositivo o identificador único disponible; algunos comandos SMS requieren el ID de dispositivo devuelto por una consulta de estado.
- Un plan para validar que el dispositivo aparezca en Plaspy tras la configuración, por ejemplo supervisando los datos entrantes en su cuenta.

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el LMU-2010 establecerá una sesión de datos IP y enviará datos de ubicación y eventos al endpoint y puerto de Plaspy. Plaspy recibe la conexión entrante en el puerto compartido y usa detección automática de protocolo para interpretar el protocolo del dispositivo.

- El dispositivo se apunta al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Los datos se envían al puerto 8888 que Plaspy usa para todos los dispositivos compatibles.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Plaspy detecta y gestiona automáticamente el protocolo del tracker, por lo que no se requiere seleccionar el protocolo por dispositivo en el servidor.
- Tras una configuración exitosa, el dispositivo reportará GPS y estado del equipo a Plaspy para su visibilidad y monitoreo.

## Flujo de trabajo típico de configuración

Siga estos pasos prácticos al configurar un LMU-2010 para que reporte a Plaspy. Ajuste el flujo según las herramientas disponibles y el firmware del dispositivo.

1. Acceda al método de configuración oficial de CalmAmp para su versión, como comandos SMS, software del proveedor o provisión Over-the-Air PULS.
2. Use la interfaz de configuración del dispositivo para introducir el endpoint de Plaspy usando d.plaspy.com o la IP de servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888 que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Ingrese el APN, usuario APN y contraseña APN para la SIM instalada si su operador lo exige.
6. Aplique o guarde la configuración y reinicie el dispositivo si el flujo requiere un reinicio para aplicar los ajustes.
7. Valide que el tracker reporte a Plaspy comprobando el estado del dispositivo en su cuenta Plaspy o usando los comandos de verificación del dispositivo que se describen abajo.

## Ejemplos de comandos de configuración

El LMU-2010 puede configurarse por SMS usando los comandos públicos que se muestran a continuación. El dispositivo responde con un MID (ID de 10 dígitos) después del comando !R0, el cual se utiliza como ID de mensaje para los SMS siguientes en este ejemplo.

- Primero obtenga el MID del dispositivo enviando el comando de estado:
```text
!R0
```
- Establezca el APN del operador (reemplazar {{apn}} por el APN de su operador):
```text
!RP,2306,0,{{apn}}
```
- Defina el nombre de usuario APN si se requiere (reemplazar {{apnu}} por el usuario):
```text
!RP,2314,0,{{apnu}}
```
- Defina la contraseña APN si se requiere (reemplazar {{apnp}} por la contraseña):
```text
!RP,2315,0,{{apnp}}
```
- Configure el servidor GPRS a la IP de Plaspy:
```text
!RP,2319,0,54.85.159.138
```
- Establezca el puerto del servidor a 8888:
```text
!RP,769,0,8888
```
- Reinicie el tracker para aplicar cambios (el reinicio suele ser necesario tras la configuración):
```text
!R3,70,0
```
- Para comprobar la configuración actual en el dispositivo use:
```text
!RO
```

Notas sobre los marcadores de posición y uso:
- {{apn}} es un marcador para la cadena APN del operador móvil.
- {{apnu}} es un marcador para el usuario APN si el operador lo requiere.
- {{apnp}} es un marcador para la contraseña APN si el operador lo requiere.
- El orden de los comandos es importante: establezca credenciales de red y valores de servidor antes de reiniciar.
- El comando de reinicio se incluye para aplicar los nuevos ajustes; considérelo obligatorio cuando su flujo o la documentación de su firmware indique que es necesario un reinicio.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los comandos disponibles y los nombres de parámetros; confirme siempre los comandos con las notas de su firmware.
- El LMU-2010 soporta configuración por SMS como se muestra, pero la provisión Over-the-Air (PULS) o las herramientas del proveedor pueden estar disponibles y suelen ser preferibles para despliegues masivos.
- Al elegir el transporte, considere el comportamiento de la red y del operador; muchas implementaciones usan UDP, pero el LMU-2010 puede configurarse para TCP si la red lo requiere.
- Asegúrese de que las credenciales APN sean correctas para la SIM en el dispositivo; una configuración APN incorrecta impedirá la conectividad GPRS hacia d.plaspy.com o 54.85.159.138.
- Use el comando !RO o la consulta de estado del proveedor para verificar los ajustes antes y después del reinicio.

## Por qué usar Plaspy con esta configuración

Configurar el CalmAmp LMU-2010 para que reporte a Plaspy ofrece a las organizaciones un endpoint y puerto de servidor consistentes para la conectividad de los dispositivos, simplificando el aprovisionamiento y el monitoreo de flotas. Con Plaspy detectando automáticamente el protocolo del tracker y un puerto compartido, los administradores pueden agilizar la incorporación de dispositivos y centrarse en la supervisión operativa en lugar de en diferencias por dispositivo en el servidor.

Si desea obtener más información sobre cómo Plaspy gestiona la conectividad de dispositivos y las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos del dispositivo y autoridad del fabricante, como comportamiento del firmware, referencias de comandos y opciones de provisión Over-the-Air, verifique la información más reciente en el sitio del fabricante http://www.calamp.com/ ya que los métodos de configuración y el firmware pueden cambiar con el tiempo.
