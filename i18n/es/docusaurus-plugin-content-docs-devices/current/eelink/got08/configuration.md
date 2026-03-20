---
slug: /eelink/got08/configuration
id: got08-configuration
sidebar_label: Configuration
title: EElink - GOT08 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar EElink GOT08 en Plaspy con ejemplo de servidor y comandos SMS
keywords:
  - configuración EElink GOT08
  - instalación EElink GOT08
  - configuración GOT08 Plaspy
  - configuración servidor GOT08
  - configuración rastreador OBD EElink
  - configuración SMS GOT08
  - rastreadores compatibles Plaspy
  - configuración seguimiento vehicular
  - ajustes servidor rastreador GPS
  - seguimiento de flotas GOT08
---

# EElink - GOT08 Configuración

Esta página documenta el contexto público de configuración para usar el EElink GOT08 con la plataforma Plaspy. Resume los ajustes públicos del servidor de Plaspy a los que debe apuntar el dispositivo, explica los pasos prácticos recomendados e incluye ejemplos de comandos SMS que se usan con frecuencia para configurar unidades GOT08 para el envío de datos a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La descripción del GOT08 y el conjunto de comandos SMS que se muestran aquí son la base de las indicaciones; siempre verifique el firmware del dispositivo y la documentación del proveedor si tiene dudas.

## Resumen de la configuración

El objetivo de la configuración es dejar una unidad GOT08 lista para que transmita de forma fiable la ubicación y la telemetría OBD a Plaspy. Para los dispositivos GOT08 esto suele implicar usar la interfaz SMS del fabricante para ajustar el APN y los parámetros del servidor, y luego validar que la unidad reporte al endpoint de Plaspy y aparezca en la plataforma.

- Configure el APN del dispositivo para que el rastreador use datos móviles mediante GPRS.
- Apunte el dispositivo al endpoint y puerto del servidor de Plaspy para que los datos se direccionen correctamente.
- Seleccione UDP o TCP si el rastreador exige una elección explícita de transporte.
- Confirme que los reportes de ubicación y telemetría lleguen a Plaspy y sean visibles en la plataforma.
- Opcionalmente reinicie o ajuste temporizadores para definir la frecuencia de reporte para seguimiento en tiempo real y registro histórico.

## Ajustes del servidor Plaspy

Al configurar el GOT08 para Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Estos valores son los endpoints públicos de Plaspy que debe configurar en el dispositivo para que el GOT08 envíe datos a la plataforma Plaspy.

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBD-II del vehículo para instalar o inspeccionar el dispositivo GOT08.
- Una tarjeta SIM GSM operativa insertada en el rastreador con datos habilitados y capacidad de SMS si va a usar provisión por SMS.
- Un teléfono capaz de enviar comandos SMS al dispositivo para la configuración por SMS, o acceso a la herramienta de configuración oficial de EELINK si está disponible.
- Alimentación aplicada al GOT08 a través del puerto OBD del vehículo y el equipo en condiciones normales de funcionamiento.
- Acceso a una cuenta de Plaspy y pasos de aprovisionamiento listos en la plataforma para validar los reportes entrantes.
- Familiaridad con la versión de firmware del dispositivo o la documentación del proveedor sobre comandos de configuración.

## Cómo se conecta este rastreador a Plaspy

El GOT08 se configura para enviar ubicación y telemetría OBD al endpoint y puerto compartidos de Plaspy. Una vez apuntado a Plaspy, el dispositivo transmite posición y datos del vehículo para que Plaspy los visualice, genere alertas y almacene registros históricos.

- El GOT08 envía ubicación y telemetría OBD al endpoint d.plaspy.com o a la IP 54.85.159.138.
- Todo el tráfico se dirige al puerto 8888 del endpoint de Plaspy.
- El dispositivo puede configurarse para usar transporte UDP o TCP en el puerto 8888 según la opción del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se usa el mismo puerto para los dispositivos soportados.
- Una vez en reporte, Plaspy ofrece visibilidad en tiempo real, notificación de eventos y almacenamiento para reproducción y análisis posteriores.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el GOT08 (comandos SMS o software de configuración del proveedor) según lo documentado por EELINK.
2. Configure el APN del dispositivo para que el rastreador pueda usar datos móviles para reportes.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Elija el transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Aplique o guarde la configuración en el dispositivo y envíe cualquier comando de confirmación o guardado necesario.
6. Reinicie el rastreador si el dispositivo requiere un reboot para aplicar los parámetros de red.
7. Valide que el GOT08 esté reportando a Plaspy comprobando el estado del dispositivo y los mensajes entrantes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GOT08 admite configuración mediante SMS. Los siguientes comandos SMS públicos se proporcionan en el contenido del fabricante y pueden enviarse en orden por SMS al dispositivo. Preserve marcadores como [apn], [apnu] y [apnp] y reemplácelos con los valores de su operador según sea necesario.

- Reset opcional a fábrica (usar solo si necesita restablecer el dispositivo a valores predeterminados):
```text
FACTORY#
```

- Fijar la zona horaria del dispositivo a UTC+0 (ejemplo):
```text
GMT,E,0#
```

- Configurar el APN del operador (reemplazar los marcadores con los valores de su operador; mantener el formato separado por comas):
```text
APN,[apn],[apnu],[apnp]#
```
Explicación: [apn] es el nombre del APN. [apnu] es el usuario del APN si se requiere. [apnp] es la contraseña del APN si se requiere. Si su operador no pide usuario o contraseña, omita esos marcadores según la sintaxis del dispositivo.

- Configurar el servidor GPRS por dominio (recomendado usar el dominio de Plaspy):
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS por dirección IP:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de reporte a cada 60 segundos:
```text
TIMER,60#
```

- Comprobar parámetros actuales en el dispositivo:
```text
PARAM#
```

Envíe estos comandos por SMS al GOT08 desde un número autorizado si el dispositivo restringe el control SMS a una lista blanca. Mantenga el orden de comandos al realizar el aprovisionamiento inicial: APN, SERVER, TIMER y luego verificación con PARAM#.

## Notas de configuración

- La configuración por SMS está disponible para el GOT08 según los comandos públicos del fabricante; verifique si su dispositivo requiere que el número de teléfono emisor esté previamente autorizado.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; consulte la documentación de EELINK para notas específicas de firmware.
- El dispositivo admite la configuración del servidor por dominio o por IP. Si el DNS es poco fiable en su despliegue, use la opción de IP del servidor.
- Elija UDP o TCP según su red y los requerimientos del dispositivo; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Confirme siempre los ajustes de APN con su operador móvil; una configuración de APN incorrecta es la causa más frecuente de fallas en la conectividad GPRS.

## Por qué usar Plaspy con esta configuración

Usar el GOT08 con Plaspy ofrece un camino rápido a la visibilidad del vehículo, ya que el GOT08 se instala en el puerto OBD-II y puede aprovisionarse con comandos SMS sencillos para comenzar a enviar ubicación y telemetría OBD con rapidez. Para administradores de flotas y propietarios de vehículos que requieren visibilidad oportuna, combinar un rastreador plug-and-play como el GOT08 con Plaspy reduce la complejidad de instalación y acelera el acceso a datos útiles.

Para obtener más información sobre Plaspy y cómo funciona esta configuración dentro de la plataforma visite https://www.plaspy.com. Los métodos de configuración del fabricante, el comportamiento del firmware y los detalles específicos del dispositivo pueden cambiar con el tiempo, por lo que debe verificar el conjunto de comandos y la configuración más recientes en el sitio oficial de EELINK https://www.eelink.com.cn/.
