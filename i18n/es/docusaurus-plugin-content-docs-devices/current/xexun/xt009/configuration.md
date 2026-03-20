---
slug: /xexun/xt009/configuration
id: xt009-configuration
sidebar_label: Configuration
title: Xexun - XT009 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xexun XT009 para apuntar el dispositivo a Plaspy mediante SMS o herramientas del fabricante
keywords:
  - Configuración Xexun XT009
  - Configuración XT009
  - Configuración del Xexun XT009
  - Configuración XT009 en Plaspy
  - Configuración del servidor XT009
  - Instalación rastreador GPS XT009
  - Configuración rastreador Xexun
  - Comandos SMS XT009
  - Configuración GPRS XT009
  - Integración rastreador Plaspy
---

# Xexun - XT009 Configuration

Esta página describe la configuración pública para usar el rastreador GPS de motocicletas Xexun XT009 con la plataforma Plaspy. Reúne los pasos prácticos y los ajustes de servidor públicos que normalmente se utilizan para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar posición y estado a su cuenta en Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El XT009 admite patrones de configuración por SMS y GPRS comúnmente usados en dispositivos Xexun; abajo mostramos los comandos SMS públicos y el flujo habitual para registrar el equipo en Plaspy.

## Resumen de la configuración

Preparar un XT009 para Plaspy significa indicarle al rastreador a dónde enviar sus reportes GPRS y asegurarse de que el dispositivo tenga conectividad móvil y ajustes APN correctos. El objetivo es que el rastreador sea visible en Plaspy y validar que los reportes de posición y eventos lleguen de forma fiable.

- Configure la dirección del servidor GPRS del rastreador para apuntar al endpoint de Plaspy.
- Verifique APN, usuario y contraseña para que el dispositivo pueda establecer GPRS.
- Elija y confirme el transporte (UDP o TCP) y use el puerto compartido de Plaspy.
- Guarde la configuración y, si es necesario, reinicie el dispositivo para aplicar los cambios.
- Confirme que el dispositivo reporta a Plaspy y aparece en la plataforma para monitoreo.

## Ajustes del servidor de Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP (device may be configured using either)  
- Plaspy automatically detects the tracker protocol across supported devices and all devices in Plaspy use the same port

## Requisitos típicos antes de configurar

- Un XT009 con alimentación y accesible, instalado o conectado a una fuente temporal para la configuración.  
- Una tarjeta SIM activa insertada en el XT009 con datos habilitados y el APN correspondiente al operador móvil.  
- Acceso al método de configuración del fabricante para el XT009 (SMS o herramienta oficial de configuración).  
- Conocimiento de la contraseña del dispositivo (la contraseña por defecto pública que se muestra en los comandos abajo es 123456).  
- Capacidad para enviar y recibir SMS desde un número autorizado si se utiliza la configuración por SMS.  
- Una cuenta Plaspy o acceso a una instancia de Plaspy para verificar que el dispositivo aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El XT009 se configura para enviar sus reportes GPRS al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar datos de ubicación y eventos. Una vez establecidos el servidor y el APN, el rastreador abre una sesión GPRS y transmite actualizaciones de posición a Plaspy, donde la plataforma detecta automáticamente el protocolo entrante.

- El dispositivo envía paquetes GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la selección del dispositivo y el comportamiento de la red; Plaspy acepta ambos.  
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes.  
- Una conexión exitosa habilita actualizaciones de posición, alertas de movimiento e informes de estado dentro de Plaspy.  
- Tras la configuración, valide los reportes comprobando la entrada del dispositivo en Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del Xexun XT009 (comandos SMS o la herramienta de configuración de Xexun) provisto por el fabricante.  
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto de servicio a 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte.  
5. Configure el APN del dispositivo y, si aplica, el usuario y la contraseña del APN para la tarjeta SIM.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.  
7. Valide que el XT009 reporte a Plaspy y aparezca en su cuenta o vista de plataforma Plaspy.

## Comandos de configuración de ejemplo

El XT009 puede configurarse mediante comandos SMS. Los siguientes comandos son el conjunto público de SMS usados comúnmente para la configuración inicial. Los ejemplos usan la contraseña por defecto 123456. Reemplace los marcadores {{apn}}, {{apnu}} y {{apnp}} por el APN, usuario APN y contraseña APN de su operador según corresponda.

- Paso inicial opcional para restaurar valores de fábrica (usar solo si es necesario durante la configuración inicial):
```text
begin123456
```

- Configurar el APN del operador (reemplace {{apn}} con el APN de su operador móvil):
```text
apn123456 {{apn}}
```

- Configurar el usuario del APN (solo si su operador lo requiere; reemplace {{apnu}}):
```text
apnuser123456 {{apnu}}
```

- Configurar la contraseña del APN (solo si su operador la requiere; reemplace {{apnp}}):
```text
apnpasswd123456 {{apnp}}
```

- Configurar el servidor GPRS para apuntar a Plaspy. Este ejemplo usa la IP pública y el puerto de Plaspy:
```text
adminip123456 54.85.159.138 8888
```

- Establecer el modo GPRS (usar si el dispositivo espera un comando de modo; siga la guía del fabricante):
```text
gprsmode123456
```

- Establecer el intervalo de subida/reportes a 60 segundos (este ejemplo fija un intervalo de 60 segundos):
```text
t060s***n123456
```

Notas sobre los marcadores y la contraseña:
- {{apn}} es la cadena APN de su operador móvil.  
- {{apnu}} es el usuario APN si el operador lo requiere.  
- {{apnp}} es la contraseña APN si el operador la requiere.  
- La contraseña por defecto del dispositivo mostrada en estos comandos es 123456. Si la contraseña de su dispositivo ha sido cambiada, utilice la contraseña actual.

Envíe estos comandos SMS desde un número autorizado al XT009. Después de enviar los comandos de servidor y APN, espere a que el dispositivo establezca GPRS y confirme los reportes en Plaspy.

## Notas de configuración

- La configuración por SMS es compatible con el XT009 según el conjunto de comandos públicos mostrado arriba; las herramientas del fabricante o el software para PC pueden ofrecer un método alternativo.  
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los comportamientos por defecto; verifique los comandos si alguno no funciona.  
- Elija UDP o TCP según la preferencia del instalador y el comportamiento de la red; Plaspy acepta ambos transportes en el puerto 8888.  
- Plaspy usa un único puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo, así que use el puerto 8888 al apuntar el rastreador a Plaspy.  
- Si el dispositivo requiere un reinicio o un ciclo de energía después de aplicar los ajustes, realícelo para asegurarse de que el rastreador establezca la sesión GPRS.

## Por qué usar Plaspy con esta configuración

Usar el Xexun XT009 con Plaspy ofrece a las organizaciones una forma práctica de monitorear motocicletas y recibir alertas basadas en eventos, apoyándose en un endpoint y puerto consistentes entre dispositivos. Apuntar el XT009 al servidor de Plaspy permite la visibilidad centralizada de actualizaciones de ubicación y eventos operativos para que los equipos puedan gestionar activos y responder a incidentes de forma eficiente.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific setup methods, firmware behavior, and manufacturer details at https://www.xexun.com/ to ensure the commands and procedures shown here match your device and firmware.
