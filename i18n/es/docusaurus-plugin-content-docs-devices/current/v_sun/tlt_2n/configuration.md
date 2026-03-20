---
slug: /v_sun/tlt_2n/configuration
id: tlt_2n-configuration
sidebar_label: Configuration
title: V-SUN - TLT-2N Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador V-SUN TLT-2N con Plaspy y los ajustes de servidor y SMS de ejemplo
keywords:
  - configuración V-SUN TLT-2N
  - instalación V-SUN TLT-2N
  - configuración servidor TLT-2N
  - comandos SMS TLT-2N
  - configuración rastreador Plaspy
  - configuración dispositivo Plaspy
  - ajustes servidor GPS
  - configuración GPRS rastreador
  - configuración seguimiento vehicular
  - integración plataforma GPS
---

# V-SUN - TLT-2N Configuración

Esta página documenta el contexto público de configuración para usar el rastreador V-SUN TLT-2N con Plaspy. Resume los ajustes de servidor prácticos y ejemplos de comandos SMS que se emplean habitualmente para apuntar un TLT-2N a la plataforma Plaspy para seguimiento GPRS TCP y gestión por SMS. Úsela como referencia técnica para preparar el dispositivo y dejarlo visible en Plaspy, respetando siempre las instrucciones del proveedor y del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El TLT-2N admite configuración por SMS y conexiones GPRS TCP, por lo que los ejemplos de SMS que aparecen en esta página son los comandos publicados y de uso común en muchas implementaciones.

## Resumen de configuración

El objetivo del proceso de configuración es preparar el TLT-2N para que reporte ubicación y eventos al endpoint del servidor de Plaspy y validar la conectividad para que el dispositivo quede visible en la plataforma.

- Configure el APN y los parámetros GPRS del dispositivo para que pueda establecer una sesión de datos.
- Apunte el servidor GPRS del dispositivo al endpoint de Plaspy usando el dominio del servidor o la IP y el puerto compartido.
- Seleccione el modo de transporte que el dispositivo soporte (UDP o TCP) y guarde la configuración.
- Habilite el reporte GPRS y el reporte GPS para que el dispositivo envíe actualizaciones periódicas.
- Valide que el dispositivo informe a Plaspy y aparezca en la plataforma antes de la instalación final.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el TLT-2N. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP is supported; select the transport the device requires
- Plaspy will automatically detect the device protocol when the device connects to the server

## Requisitos típicos antes de la configuración

- Un dispositivo TLT-2N alimentado y accesible capaz de recibir SMS o aceptar configuración por GPRS.
- Una tarjeta SIM funcional con datos habilitados y capacidad para SMS instalada en el dispositivo y con el APN correcto para la red.
- Conocimiento del APN del operador móvil y cualquier usuario o contraseña necesarios para el APN.
- Acceso a la lista de comandos SMS del dispositivo o a la herramienta de configuración del fabricante para enviar comandos.
- La contraseña por defecto del dispositivo si se requiere para los comandos SMS. Los comandos de ejemplo públicos usan la contraseña por defecto 0000.
- Capacidad básica para supervisar la conectividad, por ejemplo verificando si el dispositivo establece una sesión GPRS y reporta a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El TLT-2N puede enviar datos de posición y eventos a la plataforma Plaspy mediante GPRS TCP o UDP. Con los ajustes de servidor indicados arriba, el rastreador abre una conexión al endpoint compartido de Plaspy y reporta según los intervalos de reporte configurados y las funciones habilitadas.

- El rastreador se configura para reportar al endpoint del servidor Plaspy en d.plaspy.com o en 54.85.159.138.
- Los datos se envían por el transporte seleccionado en el puerto 8888, que Plaspy utiliza para todos los dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe conexiones en el servidor.
- El dispositivo también puede configurarse y consultarse mediante comandos SMS para ajustes o resolución de problemas.
- Cuando está correctamente configurado, los reportes regulares de ubicación, las alarmas y las cargas históricas aparecen en Plaspy para su monitoreo y análisis.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o a la lista de comandos SMS para el TLT-2N. Use la guía del vendedor o la interfaz SMS del dispositivo.
2. Configure el APN del dispositivo con los parámetros del operador usando el comando de APN e incluya el usuario y la contraseña del APN si son requeridos.
3. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor GPRS.
4. Ajuste el puerto a 8888 como puerto de reporte GPRS del dispositivo.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte para el reporte GPRS.
6. Aplique o guarde la configuración y, si procede, envíe los comandos que habiliten los modos de reporte GPRS y GPS.
7. Reinicie o aplique un ciclo de alimentación al dispositivo si el fabricante lo requiere y verifique que establezca conexión con Plaspy y reporte según lo esperado.

## Comandos de configuración de ejemplo

El TLT-2N admite configuración mediante SMS. Los siguientes comandos SMS públicos se incluyen en la documentación del dispositivo y se presentan aquí en el orden que muestra el ejemplo del fabricante. La contraseña por defecto del dispositivo en estos ejemplos es 0000.

- Factory reset (optional initial step)
```text
*RESET#0000##
```
Note: This reset command is typically used only when you need to restore factory defaults.

- Set the operator APN
```text
#803#0000#{{apn}}#{{apnu}}#{{apnp}}##
```
Replace the placeholders as needed:
- {{apn}} is the operator APN string
- {{apnu}} is the APN username if required by the carrier
- {{apnp}} is the APN password if required by the carrier
If your operator does not require username or password, omit those placeholders and keep the correct number of separators as required by the device.

- Set the GPRS server by IP and port to point to Plaspy
```text
#804#0000#54.85.159.138#8888##
```
You may also use the server domain instead of the IP if the device accepts a domain name in the same command format. When entering a domain, use d.plaspy.com where supported.

- Set the update interval for movement reporting
```text
#805#0000#120#1##
```
This example sets a moving report interval value as published by the manufacturer; adjust numbers as needed for your reporting policy.

- Set the update interval for static reporting
```text
#809#0000#120#1##
```
Adjust the static interval parameter value to suit your requirements.

- Enable GPRS mode
```text
7100000
```

- Enable GPS mode
```text
2220000
```

Envíe cada comando como un SMS al número de la SIM del dispositivo. Mantenga la sintaxis exacta del comando y el número de separadores tal como se muestra; algunas versiones de firmware del dispositivo son estrictas con el formato.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles. Verifique siempre los comandos con la documentación de su dispositivo.
- El TLT-2N soporta configuración por SMS y reporte GPRS TCP; use SMS cuando la configuración remota por IP aún no esté disponible.
- Cuando el dispositivo requiera selección de transporte, elija UDP o TCP según las necesidades de su despliegue; Plaspy acepta ambos y detecta el protocolo automáticamente al conectarse.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados. Use este puerto al apuntar el dispositivo a la plataforma.
- Tenga presente la contraseña por defecto 0000 al enviar comandos de configuración y cámbiela si su política de instalación exige otra contraseña después de la configuración inicial.

## Por qué usar Plaspy con esta configuración

Usar el V-SUN TLT-2N con Plaspy ofrece una forma práctica de recopilar actualizaciones de ubicación y eventos de dispositivos instalados en vehículos y activos de pequeñas flotas. Con los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo, integrar el TLT-2N en la plataforma puede lograrse con un conjunto reducido de pasos por SMS o GPRS, lo que le permite monitorear posiciones, alarmas e historiales desde un sistema centralizado.

To learn more about Plaspy and how it handles device connections, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer guidance for the V-SUN TLT-2N check the official V-SUN site at http://www.v-sun.cc/ as vendor documentation and firmware behavior can change over time.
