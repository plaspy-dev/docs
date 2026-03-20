---
slug: /meitrack/tc68l_e/configuration
id: tc68l_e-configuration
sidebar_label: Configuration
title: Meitrack - TC68L/E Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack TC68L/E con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración Meitrack TC68L E
  - Instalación Meitrack TC68L E
  - Configuración de servidor TC68L E
  - Configuración TC68L E en Plaspy
  - Configuración de rastreador OBD Meitrack
  - Configuración de dispositivo Plaspy
  - Comandos SMS TC68L E
  - Configuración GPRS TC68L E
  - Compatibilidad rastreador Meitrack Plaspy
  - Configuración rastreador GPS vehicular
---

# Meitrack - Configuración TC68L/E

Esta página describe el contexto público de configuración para utilizar el rastreador Meitrack TC68L/E con Plaspy. Reúne los ajustes de servidor necesarios en Plaspy y presenta ejemplos de comandos del fabricante disponibles públicamente para que prepare el dispositivo y pueda reportar a Plaspy información de posición y telemetría en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TC68L/E admite configuración por SMS y GPRS, y los comandos SMS de ejemplo que se muestran están basados en contenido público del fabricante.

## Resumen de la configuración

Preparar un TC68L/E para Plaspy garantiza que el dispositivo pueda enviar posición GNSS y telemetría OBD a la plataforma Plaspy y que sea visible en su espacio de trabajo. El proceso de configuración normalmente define el endpoint del servidor, el transporte, los intervalos de reporte de datos y las credenciales APN necesarias para datos celulares.

- Configure el dispositivo para que reporte al servidor de Plaspy y así Plaspy reciba ubicación y telemetría.
- Ajuste los parámetros GPRS o SMS, incluyendo credenciales APN si la red móvil lo requiere.
- Seleccione el protocolo de transporte (UDP o TCP) y apunte el dispositivo al puerto 8888 de Plaspy.
- Verifique los intervalos de reporte y las reglas de eventos para que la telemetría aparezca en Plaspy según lo esperado.
- Valide que el dispositivo esté activo en Plaspy y que las actualizaciones de posición y métricas OBD sean visibles.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el TC68L/E:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de configurar

- Confirme que el TC68L/E tiene alimentación y está instalado en el puerto OBD II del vehículo o alimentado según las instrucciones del fabricante.
- Asegúrese de que el dispositivo tenga una SIM activa y que disponga de la información APN de su operador móvil.
- Tenga un método para enviar comandos SMS al dispositivo o acceso a la herramienta/portal de configuración del fabricante o del proveedor.
- Conozca la contraseña del dispositivo si no es la predeterminada; los ejemplos a continuación usan la contraseña por defecto 0000 según contenido público del fabricante.
- Verifique la cobertura de red para GPRS para que el rastreador pueda alcanzar el servidor Plaspy.
- Mantenga acceso a la documentación oficial de Meitrack o a utilidades provistas por su proveedor para instrucciones específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el TC68L/E envía posición GNSS y telemetría OBD al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos y los asocia con su cuenta para que usted pueda supervisar ubicación, diagnósticos del vehículo y alertas de eventos.

- El rastreador reporta posición y telemetría a d.plaspy.com (o la IP equivalente 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; el dispositivo puede usar cualquiera de los dos protocolos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma ingiera la telemetría sin necesidad de mapear protocolos manualmente.
- Los intervalos de reporte y las reglas de eventos determinan la frecuencia con la que posiciones y métricas OBD aparecen en Plaspy.
- Después de una configuración exitosa, el dispositivo será visible en los paneles de Plaspy para seguimiento en vivo, reproducción de historial y alertas.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Meitrack para el TC68L/E, como comandos SMS, la herramienta web del proveedor o una utilidad de configuración suministrada por su vendedor.
2. Ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP de servidor 54.85.159.138 en los ajustes GPRS/servidor del dispositivo.
3. Configure el puerto del dispositivo a 8888, ya que Plaspy utiliza este puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte; ambos son compatibles para comunicarse con Plaspy.
5. Añada las credenciales APN si su operador lo exige, usando el campo de configuración o los marcadores de posición del comando SMS.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si así lo requiere el fabricante.
7. Valide que el dispositivo reporte a Plaspy comprobando posiciones entrantes y telemetría en su cuenta Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS de ejemplo provienen de contenido público del fabricante para el TC68L/E. Muestran una secuencia típica para preparar el dispositivo para reportar vía GPRS a Plaspy. La muestra usa la contraseña por defecto 0000 según el contenido público; si su dispositivo tiene otra contraseña, reemplace el 0000 inicial por la correcta.

1. Reinicio opcional a valores de fábrica o restaurar por defecto (etiquetado como configuración inicial opcional):
```
0000,F11
```

2. Configure el servidor GPRS a Plaspy. Este comando establece tipo de servidor 2 con la IP del servidor Plaspy, puerto y APN. Los marcadores de APN deben reemplazarse por los valores de su operador. Usuario y contraseña APN son opcionales y se muestran como marcadores.
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} = el APN de su operador móvil
- {{apnu}} = nombre de usuario APN si su operador lo requiere (opcional)
- {{apnp}} = contraseña APN si su operador lo requiere (opcional)

3. Establezca la zona horaria a UTC 0:
```
0000,B36,0
```

4. Fije el intervalo de reporte a 1 minuto (ejemplo público para actualización cada minuto):
```
0000,A12,6,0
```

5. Configure el reporte de eventos (ejemplo público incluido por el fabricante):
```
0000,C03,0
```

Notas sobre los comandos de ejemplo:
- Mantenga el orden de comandos cuando realice una configuración inicial si desea restaurar valores por defecto y luego aplicar los ajustes de servidor y reglas de reporte.
- La contraseña por defecto 0000 se usa en estos ejemplos porque aparece en contenido público del fabricante. Cámbiela si su dispositivo tiene otra contraseña.
- Si prefiere configurar usando la herramienta de Meitrack o un portal del proveedor, aplique allí los mismos dominio/IP de servidor, puerto, transporte y valores APN.

## Notas de configuración

- La configuración por SMS está soportada por el TC68L/E según contenido público del fabricante, pero las herramientas del proveedor y las actualizaciones de firmware pueden agregar métodos alternativos de configuración.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; verifique los comandos exactos para la versión de firmware de su dispositivo.
- Elija UDP o TCP según sus necesidades de red y fiabilidad; ambos transportes son aceptados por Plaspy en el puerto 8888.
- Tenga listas las credenciales APN al configurar GPRS; valores APN incorrectos impedirán que el dispositivo envíe datos a Plaspy.
- Si realiza un restablecimiento de fábrica, vuelva a aplicar los ajustes de servidor Plaspy y las reglas de reporte posteriormente.

## Por qué usar Plaspy con esta configuración

Usar el Meitrack TC68L/E con Plaspy ofrece telemetría plug-and-play OBD II y reporte de posicionamiento en una sola plataforma. Esta combinación acelera la implementación para flotas, alquiler y servicios de car sharing al reducir tiempos de instalación y proporcionar visibilidad continua de la ubicación y diagnósticos del vehículo.

Para saber más sobre Plaspy y cómo soporta la conectividad de dispositivos y flujos de trabajo de telemetría, visite https://www.plaspy.com. Para obtener detalles específicos más actuales sobre configuración del dispositivo, comportamiento de firmware y comandos del fabricante, confirme la documentación más reciente en https://www.meitrack.com/ antes de aplicar cambios.
