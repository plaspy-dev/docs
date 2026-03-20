---
slug: /concox/vl103m/configuration
id: vl103m-configuration
sidebar_label: Configuration
title: Concox - VL103M Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox VL103M para conectarlo a Plaspy con ajustes de servidor y comandos SMS
keywords:
  - Configuración Concox VL103M
  - Instalación Concox VL103M
  - Concox VL103M Plaspy
  - Configuración de servidor VL103M
  - Comandos SMS VL103M
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador GPS para motocicleta
  - Configuración de rastreo de vehículos
  - Ajustes servidor Plaspy
  - Guía integración rastreador
---

# Concox - Configuración del VL103M

Esta página presenta la información pública de configuración para utilizar el rastreador Concox VL103M con la plataforma Plaspy. Resume los ajustes de servidor compartidos requeridos por Plaspy, pasos prácticos de preparación y ejemplos de comandos del fabricante que se publican para hacer que el dispositivo reporte a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo a continuación muestran un flujo de trabajo común por SMS publicado para el VL103M e ilustran cómo apuntar el dispositivo al endpoint de Plaspy.

## Resumen de configuración

El objetivo de la configuración es preparar el VL103M para que comunique de forma confiable datos de ubicación y eventos a Plaspy y aparezca en su cuenta para seguimiento en vivo y alertas. Los pasos se enfocan en la preparación de la red, el direccionamiento del servidor y la verificación básica para que el rastreador pueda ser administrado a través de Plaspy.

- Proporcione al rastreador una conectividad celular válida y el APN correcto para la SIM en uso.
- Configure el dispositivo para que reporte a Plaspy usando el endpoint y puerto de servidor compartido.
- Seleccione el método de transporte requerido por el firmware del rastreador cuando sea necesario, UDP o TCP.
- Configure el intervalo de reporte y el modo GPRS para que las actualizaciones periódicas lleguen a Plaspy y permita visibilidad en tiempo real.
- Verifique la configuración con el comando de verificación del dispositivo para confirmar parámetros y conectividad.

## Ajustes del servidor Plaspy

- Use el dominio de servidor d.plaspy.com como el nombre de servidor primario para Plaspy.
- Como endpoint alternativo, la dirección IP del servidor Plaspy es 54.85.159.138.
- El puerto a utilizar es 8888 — Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la opción de configuración del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor Plaspy.

## Requisitos típicos antes de la instalación

- Un dispositivo VL103M encendido y accesible con una Micro SIM funcional provisionada para datos y SMS.
- Conocimiento del APN del operador móvil y, si aplica, del usuario y la contraseña del APN (se mantienen los marcadores de posición abajo).
- Capacidad para enviar comandos SMS al rastreador desde el teléfono del instalador o administrador, o acceso a la herramienta oficial de configuración del fabricante si prefiere esa vía.
- Señal celular adecuada en el sitio de instalación para que el dispositivo se registre en la red y abra GPRS.
- Una cuenta en Plaspy y familiaridad básica con la adición de un dispositivo en la plataforma una vez que el rastreador esté reportando.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el VL103M enviará actualizaciones periódicas de posición e informes de eventos a Plaspy en el endpoint y puerto compartidos. Plaspy procesa esas actualizaciones, aplica la detección automática de protocolo y muestra la ubicación, alertas y estado en la plataforma.

- El rastreador reporta posición y telemetría al endpoint del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Los mensajes se envían a Plaspy por el puerto 8888 usando el transporte seleccionado en el dispositivo, UDP o TCP.
- Informes por eventos como manipulación, vibración o SOS se reenvían a Plaspy para alertas e historial.
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar y mapear los mensajes en la plataforma.
- Una vez que los mensajes llegan a Plaspy, usted puede ver la ubicación en tiempo real, reproducción histórica y los eventos recibidos en la plataforma.

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante para el VL103M, típicamente comandos SMS o la utilidad de configuración de Concox.
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija la opción de transporte UDP o TCP si el equipo requiere una selección explícita.
5. Configure el APN y habilite el modo GPRS para que el dispositivo pueda establecer una sesión de datos con la red.
6. Aplique o guarde la configuración y reinicie el equipo si las instrucciones del fabricante requieren reboot.
7. Valide que el dispositivo reporte a Plaspy comprobando el latido del dispositivo en la plataforma o usando el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

El VL103M soporta configuración por SMS. Los siguientes comandos SMS públicos se encuentran en la documentación del fabricante y se muestran aquí en orden. Mantenga los marcadores de posición y sustitúyalos por los valores del APN de su operador según corresponda. Las notas etiquetadas explican el propósito y las opciones.

- Restablecer a valores de fábrica (paso inicial opcional)
```
FACTORY#
```

- Establecer la zona horaria a UTC con valores más o menos según lo soporte el equipo
```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace {{apn}} con su APN. Si el operador requiere usuario y contraseña, incluya {{apnu}} y {{apnp}} respectivamente
```
APN,{{apn}}#
```
o con usuario y contraseña
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Marcadores de posición: {{apn}} = nombre del APN, {{apnu}} = usuario del APN, {{apnp}} = contraseña del APN)

- Establecer el servidor GPRS para usar el dominio de Plaspy en el puerto 8888
```
SERVER,1,d.plaspy.com,8888,0#
```
o configurar el servidor usando la IP del servidor Plaspy en el puerto 8888
```
SERVER,0,54.85.159.138,8888,0#
```
(Use el dominio o la IP según necesite; los parámetros finales pueden ser específicos del dispositivo según la documentación del fabricante)

- Establecer el intervalo de actualizaciones periódicas a cada 60 segundos
```
TIMER,60#
```
o un formato alternativo de temporizador
```
TIMER,60,60#
```

- Habilitar el modo GPRS para que el dispositivo use reporte por datos
```
GPRSON,1#
```

- Verificar parámetros actuales de GPRS y servidor
```
GPRSSET#
```

Nota: Los ejemplos del comando SERVER muestran tanto la opción con dominio como con IP. El rastreador puede permitir la selección del transporte en otra parte de sus ajustes; elija UDP o TCP en el puerto 8888 según corresponda.

## Notas de configuración

- El VL103M soporta comandos de configuración por SMS como se muestran arriba; siga el formato del fabricante exactamente y preserve los marcadores de posición.
- Las variantes de firmware y regionales pueden cambiar nombres de parámetros o la sintaxis de comandos. Confirme los formatos exactos para su versión de firmware en la documentación oficial de Concox.
- Elija UDP o TCP según las opciones de firmware del rastreador; cualquiera de los dos transportes puede usarse para conectar a Plaspy en el puerto 8888.
- Después de aplicar los ajustes, espere un breve periodo para que el dispositivo se registre en la red celular y para que Plaspy detecte los mensajes entrantes.
- Use el comando de verificación GPRSSET para confirmar que el dispositivo tiene los valores esperados de APN, servidor y modo GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el Concox VL103M para que reporte a Plaspy ofrece una vía práctica para visibilidad en tiempo real, monitoreo de eventos y gestión centralizada de flotas. La forma compacta y las capacidades de telemetría del VL103M, combinadas con la detección automática de protocolos de Plaspy, facilitan la integración de dispositivos en flujos operativos para seguimiento, alertas antirrobo y monitoreo remoto.

Para obtener más información sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para los comandos específicos más recientes por dispositivo, notas de firmware y orientación de instalación, verifique los detalles de configuración con el fabricante en https://www.iconcox.com/ ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.
