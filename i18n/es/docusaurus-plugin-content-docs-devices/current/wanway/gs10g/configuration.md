---
slug: /wanway/gs10g/configuration
id: gs10g-configuration
sidebar_label: Configuration
title: WanWay - GS10G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador WanWay GS10G con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración WanWay GS10G
  - Configurar GS10G para Plaspy
  - Configuración SMS GS10G
  - Configuración rastreador GPS WanWay
  - Configuración servidor GS10G
  - Configurar APN GS10G
  - Rastreador compatible con Plaspy
  - Configuración rastreador vehicular
  - Configuración rastreo de flotas
  - Configuración GPRS GS10G
---

# WanWay - GS10G Configuración

Esta página documenta el contexto público de configuración para usar el rastreador WanWay GS10G con Plaspy. Resume los ajustes públicos del servidor de Plaspy que debe aplicar al equipo y ofrece ejemplos de comandos SMS y una guía de flujo de trabajo basada en la documentación pública del dispositivo. Use esta guía para preparar el GS10G para la conexión a Plaspy y validar los reportes básicos tras la configuración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GS10G admite configuración por SMS y por comandos GPRS según su documentación pública; en esta página se muestra cómo aplicar esos comandos teniendo en cuenta los ajustes del servidor de Plaspy.

## Visión general de la configuración

Este proceso prepara el GS10G para comunicarse con Plaspy configurando el APN del dispositivo y el endpoint del servidor, activando el reporte por GPRS y verificando que el equipo informe correctamente. El objetivo es que el rastreador sea visible en Plaspy y que los datos de ubicación y eventos en tiempo real lleguen a la plataforma de forma fiable.

- Configure el APN del operador para que el GS10G pueda usar datos móviles para el reporte.
- Apunte el dispositivo al endpoint del servidor de Plaspy y al puerto compartido usado por Plaspy.
- Configure los intervalos de reporte y ponga el rastreador en modo GPRS para transmitir datos.
- Use comandos de verificación para confirmar parámetros y el estado del equipo después de la configuración.
- Valide que el dispositivo sea visible y esté enviando actualizaciones a Plaspy para monitoreo y alertas.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Estos valores son los ajustes públicos de Plaspy que debe usar al configurar el GS10G. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM válida con un plan de datos móviles y capacidad para SMS instalada en el dispositivo.
- Información del APN del operador móvil para habilitar la conexión de datos GPRS.
- Alimentación física al dispositivo o conexión a la energía del vehículo para que el rastreador pueda arrancar y aceptar comandos SMS.
- Acceso al método de configuración del fabricante GS10G, como comandos SMS o software del proveedor.
- Una cuenta en Plaspy y conocimiento sobre cómo confirmar que un dispositivo está reportando en la plataforma Plaspy.
- Capacidad para recibir respuestas SMS desde el dispositivo para confirmar la configuración y el estado.

## Cómo se conecta este rastreador a Plaspy

El GS10G se configura para enviar datos de ubicación y eventos al endpoint y puerto compartido de Plaspy mediante UDP o TCP. Cuando esté correctamente configurado con el APN del operador y los parámetros del servidor, el rastreador iniciará una conexión GPRS y entregará telemetría a Plaspy para su procesamiento y visualización.

- El rastreador usa datos GPRS/4G para conectar al servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP según los ajustes del equipo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- El dispositivo reporta a intervalos configurados para que Plaspy pueda proporcionar ubicación en vivo y actualizaciones de eventos.
- Las alarmas de eventos y los mensajes de estado se reenvían a Plaspy para alertas e informes históricos.
- Se pueden usar comandos de verificación para revisar parámetros y confirmar que el dispositivo está reportando activamente a Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del WanWay GS10G, como la interfaz de comandos SMS o la herramienta de configuración del proveedor suministrada por WanWay.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o, si es necesario, la IP del servidor 54.85.159.138 en los ajustes de servidor o GPRS.
3. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
4. Seleccione UDP o TCP como transporte si el GS10G requiere elegir transporte.
5. Configure el APN del operador usando el comando APN y establezca el intervalo de reporte deseado.
6. Aplique o guarde la configuración y reinicie el dispositivo si lo requiere el equipo o las instrucciones del proveedor.
7. Valide que el GS10G reporte a Plaspy usando comandos de verificación del dispositivo y confirmando la visibilidad en su cuenta Plaspy.

## Comandos de configuración de ejemplo

La configuración pública del GS10G utiliza comandos SMS. Preserve los marcadores como [apn], [apnu] y [apnp] cuando los reemplace por los valores de su operador.

1. Configure el APN de su operador
   - Use este SMS para fijar el APN. Reemplace [apn] por el APN de su operador. Si el operador requiere usuario y contraseña incluya [apnu] y [apnp].
```text
APN,[apn]
```
   - Si el equipo usa el formato extendido de APN con usuario y contraseña:
```text
APN,[apn],[apnu],[apnp]#
```
   - Explicación: [apn] es el nombre del APN del operador. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN.

2. Configure el servidor GPRS apuntando a Plaspy
```text
SERVER,1,d.plaspy.com,8888,0#
```
   - Explicación: Esto asigna la ranura de servidor 1 al dominio d.plaspy.com y al puerto 8888. El último parámetro en la secuencia de comandos del dispositivo puede indicar protocolo o un valor reservado según el manual del equipo; Plaspy acepta UDP o TCP y realiza detección automática del protocolo.

3. Establezca el intervalo de actualización (ejemplo 60 segundos)
```text
TIMER,60,60#
```
   - Explicación: Configura los temporizadores de reporte. Ajuste los valores según lo requiera su instalación y el manual del GS10G.

4. Active el modo GPRS
```text
GPRSON,1#
```
   - Explicación: Habilita el modo de reporte GPRS para que el dispositivo envíe datos al servidor configurado.

5. Verifique la configuración actual
```text
PARAM#
```

6. Compruebe el estado del dispositivo
```text
STATUS#
```

Notas sobre el uso de estos comandos
- Envíe cada comando como SMS desde el número autorizado o use la herramienta del proveedor según lo requiera la documentación de WanWay.
- Mantenga el orden anterior para la configuración inicial: APN primero, luego ajustes del servidor, temporizadores y finalmente habilitar GPRS.
- Reemplace los marcadores por los valores reales del operador antes de enviar.

## Observaciones de configuración

- Los comandos públicos del GS10G muestran configuración por SMS; también pueden estar disponibles herramientas del proveedor o software de configuración que faciliten implementaciones por lotes.
- Los marcadores de APN [apn], [apnu] y [apnp] deben completarse con los valores de su operador. Si tiene dudas, consulte con el operador móvil.
- Elija UDP o TCP en el dispositivo si es necesario; Plaspy acepta ambos y detectará automáticamente el protocolo del dispositivo cuando el tráfico llegue al servidor.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, por lo que ese puerto no cambia entre integraciones de dispositivos.
- Las versiones de firmware y las revisiones de hardware pueden modificar la sintaxis y el comportamiento de los comandos. Siempre verifique los comandos contra la documentación actual de WanWay.

## Por qué usar Plaspy con esta configuración

Usar el GS10G con Plaspy ofrece una forma práctica de recopilar ubicación en tiempo real, alertas de eventos y telemetría operativa en flotas. Con el dispositivo apuntando al endpoint compartido de Plaspy y una configuración correcta del APN, las organizaciones pueden centralizar los datos de rastreo, recibir notificaciones de alarma y emplear herramientas de informes para apoyar mantenimiento, seguridad y protección de activos.

Para saber más sobre Plaspy y cómo la plataforma puede gestionar dispositivos como el WanWay GS10G visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, sintaxis de comandos y detalles de firmware del fabricante, verifique la información actual en el sitio del fabricante https://www.wanwaytech.net/ ya que el comportamiento del dispositivo y los pasos de configuración pueden cambiar con el tiempo.
