---
slug: /goome/gm02g/configuration
id: gm02g-configuration
sidebar_label: Configuration
title: Goome - GM02G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Goome GM02G con ajustes de servidor Plaspy, comandos SMS y pasos prácticos de instalación
keywords:
  - Configuración Goome GM02G
  - Instalación GM02G
  - Goome GM02G Plaspy
  - Configuración de servidor GM02G
  - Configuración SMS GM02G
  - Configuración rastreador GPS Goome
  - Rastreo de vehículos GM02G
  - Configuración plataforma GM02G
  - Configuración rastreador Plaspy
  - Rastreador GPS GM02G
---

# Goome - Configuración del GM02G

Esta página detalla la configuración pública necesaria para usar el rastreador Goome GM02G con la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera y resume los pasos prácticos del lado del fabricante para apuntar un GM02G a Plaspy y que el dispositivo informe correctamente en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El GM02G admite configuración por SMS según la documentación pública; esta guía incorpora esos comandos SMS públicos y muestra cómo emplearlos con los valores de servidor de Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar un Goome GM02G para que se comunique de forma fiable con Plaspy y sea visible y reportable en la plataforma de gestión de flotas. Para los dispositivos GM02G, la ruta pública de configuración suele utilizar comandos SMS para establecer el APN y los datos del servidor GPRS, y luego validar la conectividad.

- Configure el APN del dispositivo y el servidor GPRS para que el rastreador pueda establecer conectividad de datos.
- Apunte el rastreador al endpoint del servidor Plaspy para que los reportes lleguen a su cuenta.
- Establezca el intervalo de reporte o los parámetros de temporizador para controlar la frecuencia de actualización y los reportes por movimiento.
- Verifique los ajustes y el estado del dispositivo usando los comandos de verificación del rastreador.
- Confirme que el dispositivo aparece y reporta correctamente en Plaspy tras la configuración.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el GM02G:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using either UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Requisitos típicos antes de comenzar

- Suministro de energía del vehículo o alimentación en banco para que el GM02G esté encendido durante la configuración.
- Tarjeta SIM activa con datos y capacidad de SMS insertada en el rastreador.
- Información del APN del operador y, si aplica, usuario y contraseña del APN requeridos por el operador móvil.
- Acceso a un teléfono con capacidad de enviar SMS o a una pasarela SMS para enviar comandos de configuración al rastreador.
- Acceso físico al rastreador para verificar la instalación y realizar reinicios si es necesario.
- Documentación del fabricante o acceso a herramientas del proveedor para pasos específicos del modelo.

## Cómo se conecta este rastreador a Plaspy

El GM02G se configura para enviar ubicación y estado del dispositivo al endpoint público y al puerto de Plaspy. Una vez que el dispositivo tenga conexión GPRS activa y los ajustes de servidor correctos, enviará reportes periódicos o activados por movimiento para que el vehículo sea visible en Plaspy.

- El rastreador usa el APN configurado para abrir datos GPRS y alcanzar Plaspy.
- Envía paquetes de posición y estado a la dirección del servidor Plaspy en el puerto 8888.
- Los reportes pueden enviarse por temporizador o cuando se detecta movimiento según la configuración del dispositivo.
- Plaspy recibe esos paquetes y detecta automáticamente el protocolo del rastreador para su análisis.
- Tras una configuración exitosa, el dispositivo aparecerá y reportará eventos en la plataforma Plaspy.

## Flujo de trabajo de configuración habitual

1. Consulte el método oficial de configuración de Goome para el GM02G (el dispositivo admite comandos SMS y estos se usan en los ejemplos públicos de configuración).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el ajuste de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (todos los dispositivos Plaspy usan el mismo puerto).
4. Elija el protocolo de transporte UDP o TCP si el dispositivo solicita seleccionar transporte.
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos de confirmación necesarios.
6. Reinicie el dispositivo o haga un ciclo de alimentación si el fabricante lo requiere después de un cambio de configuración.
7. Valide que el dispositivo reporte a Plaspy y que sea visible en la plataforma.

## Comandos de configuración de ejemplo

El GM02G admite configuración por SMS. Los siguientes comandos SMS públicos se presentan en el orden recomendado para la configuración inicial. Marque cualquier paso de reseteo como opcional y use solo cuando sea necesario.

- Reset de fábrica opcional (usar solo si necesita borrar ajustes previos):
```text
FACTORY#
```

- Establecer el APN del operador. Reemplace los marcadores con los valores de su operador. [apn] es obligatorio. [apnu] y [apnp] son usuario y contraseña opcionales si su operador los requiere:
```text
APN,[apn],[apnu],[apnp]#
```
Explicación de ejemplo: si su APN es internet, envíe APN,internet# o incluya credenciales cuando sean necesarias.

- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto. Esto apunta el dispositivo para que reporte a Plaspy:
```text
GPRSSET,54.85.159.138,8888#
```
También puede ingresar el dominio del servidor en las herramientas del fabricante si aceptan un hostname (d.plaspy.com), pero el ejemplo público por SMS usa la IP.

- Establecer el intervalo de actualización para enviar reportes de posición cada 60 segundos:
```text
TIMER,60#
```

Comandos de verificación disponibles en la documentación pública:

- Consultar la configuración del servidor GPRS en el dispositivo:
```text
GPRSSET#
```

- Solicitar el estado del dispositivo para verificar conectividad y estado operativo:
```text
STATUS#
```

## Notas sobre la configuración

- La configuración por SMS es un método público habitual para el GM02G; los comandos y la sintaxis pueden variar según la versión de firmware o personalización del proveedor.
- Si el dispositivo o la herramienta del proveedor admite nombres de host, puede usar d.plaspy.com en lugar de la dirección IP; el ejemplo público por SMS emplea la IP 54.85.159.138.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy admite ambos transportes en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- Mantenga exactamente los marcadores de APN tal como se muestran: [apn] para el APN del operador, [apnu] para el usuario del APN y [apnp] para la contraseña del APN.
- Después de guardar los ajustes, puede ser necesario un ciclo de alimentación o reinicio para que algunas versiones de firmware apliquen los cambios.

## Por qué usar Plaspy con esta configuración

Configurar un Goome GM02G para reportar a Plaspy ofrece a las organizaciones una forma sencilla de incorporar rastreadores compactos y discretos a una plataforma centralizada de visibilidad y monitoreo de flotas. Usar los ajustes de servidor compartidos de Plaspy simplifica despliegues masivos porque todos los dispositivos compatibles usan el mismo puerto y Plaspy detecta automáticamente el protocolo, reduciendo la complejidad de configuración por dispositivo.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. Please verify the most current device-specific configuration methods and firmware details with the manufacturer at http://www.goomegpstracker.com because manufacturer specifications and setup behavior can change over time.
