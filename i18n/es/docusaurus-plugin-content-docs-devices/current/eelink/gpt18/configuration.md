---
slug: /eelink/gpt18/configuration
id: gpt18-configuration
sidebar_label: Configuration
title: EElink - GPT18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el rastreador GPS EElink GPT18 con servidores Plaspy y por SMS
keywords:
  - Configuración EElink GPT18
  - Instalación EElink GPT18
  - Configuración GPT18 Plaspy
  - Ajustes de servidor Plaspy
  - Configuración de rastreador GPS
  - Configuración de rastreador GPS portátil
  - Configuración SMS GPT18
  - Guía de compatibilidad Plaspy
  - Configuración de plataforma GPS
  - Configuración de servidor de dispositivo
---

# EElink - Configuración GPT18

Esta página documenta el contexto público de configuración para usar el rastreador vestible EElink GPT18 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica los pasos típicos que usted puede realizar en el dispositivo o por SMS, y muestra comandos de ejemplo públicos que se usan comúnmente para apuntar un GPT18 a Plaspy para el reporte de ubicación y eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y el software del proveedor. El GPT18 soporta configuración remota por servidor, aplicación móvil o SMS, por lo que esta guía se centra en los pasos públicos y prácticos que se alinean con los ajustes del servidor Plaspy.

## Resumen de configuración

Este proceso prepara el GPT18 para enviar telemetría de ubicación y eventos a Plaspy, habilita la supervisión en la plataforma Plaspy y ofrece comandos de verificación simples para confirmar la conectividad. Cuando esté disponible, el dispositivo puede configurarse por SMS usando los comandos del fabricante que se muestran en la sección de ejemplos.

- Configurar el servidor del dispositivo y el transporte para que el rastreador reporte a Plaspy
- Proveer el APN y los parámetros celulares correctos para habilitar la conectividad de datos y la gestión por SMS
- Validar el reporte y la visibilidad del dispositivo en Plaspy después de aplicar los ajustes
- Usar comandos SMS para una configuración rápida en sitio o la app del fabricante cuando esté disponible
- Guardar y reiniciar el rastreador para asegurar que los ajustes entren en vigor y comiencen los envíos a Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el GPT18:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo reporte al endpoint del servidor mencionado arriba.

## Requisitos típicos antes de la configuración

- Un equipo GPT18 cargado y con energía listo para la configuración
- Una tarjeta SIM activa en el dispositivo con datos y SMS habilitados y el APN correcto del operador móvil
- Acceso al método oficial de configuración EElink, como comandos SMS, la app EElink o la herramienta de aprovisionamiento del vendedor
- Conocimiento del APN del operador y de cualquier usuario o contraseña APN requeridos
- Una cuenta de Plaspy o acceso a la Plataforma donde se gestionará y supervisará el dispositivo
- Capacidad para enviar y recibir SMS desde el dispositivo durante la configuración en sitio si va a usar la configuración por SMS

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GPT18 envía sus datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que el dispositivo sea visible en la plataforma Plaspy para supervisión y alertas. Plaspy recibe la telemetría y aplica detección automática de protocolo para interpretar los datos del rastreador.

- El rastreador reporta actualizaciones de ubicación y eventos a d.plaspy.com o a la IP del servidor Plaspy en 54.85.159.138 usando el puerto 8888
- El transporte puede ser UDP o TCP dependiendo del firmware del rastreador o de las opciones de aprovisionamiento
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint del servidor
- Eventos del dispositivo como SOS, batería baja y alertas de geocerca aparecen en Plaspy una vez que el reporte está establecido
- Reconfigurar el servidor del dispositivo al endpoint de Plaspy y reiniciar el dispositivo normalmente inicia el flujo de telemetría hacia la plataforma

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración EElink para el GPT18 (comandos SMS, app del proveedor o herramienta de configuración).
2. Ingrese la dirección del servidor como d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija el transporte UDP o TCP si el dispositivo solicita selección de transporte durante la configuración.
5. Proporcione el APN del operador y cualquier usuario o contraseña APN que su operador requiera.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su consola o vista de monitoreo de Plaspy.

Si prefiere el aprovisionamiento por SMS, siga los pasos SMS indicados en la sección de comandos de ejemplo para aplicar el servidor, el APN, el temporizador y los comandos de verificación.

## Comandos de configuración de ejemplo

El GPT18 soporta configuración basada en SMS. Los comandos de ejemplo públicos a continuación se envían por SMS al dispositivo y se conservan en el orden recomendado por el fabricante. Las notas de etiquetado siguen a cada comando. Los marcadores de posición como [apn], [apnu] y [apnp] deben reemplazarse por los valores del APN de su operador móvil cuando sea necesario.

1. Restablecimiento de fábrica opcional (usar solamente cuando sea necesario para el aprovisionamiento inicial)
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

3. Establecer el APN del operador
```
APN,[apn],[apnu],[apnp]#
```
- [apn] es la cadena APN del operador
- [apnu] es el usuario del APN si el operador lo requiere
- [apnp] es la contraseña del APN si el operador la requiere
- Si no se necesita usuario o contraseña, omita esos marcadores según el formato del comando del dispositivo

4. Establecer el servidor GPRS por dominio (recomendado)
```
SERVER,1,d.plaspy.com,8888#
```

5. Alternativamente establecer el servidor GPRS por IP
```
SERVER,0,54.85.159.138,8888#
```

6. Establecer el intervalo de actualización de seguimiento a 60 segundos
```
TIMER,60#
```

7. Verificar los parámetros actuales
```
PARAM#
```

Use la forma por dominio para apuntar a d.plaspy.com o la forma por IP para apuntar a 54.85.159.138. Ambos usan el puerto 8888 y el dispositivo puede configurarse para transporte UDP o TCP cuando sea necesario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos SMS o los parámetros disponibles; siempre verifique los comandos contra la versión de firmware del dispositivo en la documentación del fabricante.
- El GPT18 soporta aprovisionamiento por SMS, lo cual es útil para la configuración en campo cuando no hay disponible la app o herramientas de PC.
- Elija UDP o TCP según las preferencias de instalación o el comportamiento del operador. Ambos transportes son compatibles y Plaspy detectará automáticamente el protocolo del rastreador.
- Asegúrese de que el APN y las credenciales APN sean correctas antes de intentar la configuración del servidor GPRS para evitar fallas de conectividad.
- Después de aplicar los ajustes, puede ser necesario reiniciar o cortar la energía del dispositivo para que los nuevos parámetros de servidor y APN entren en efecto.

## Por qué usar Plaspy con esta configuración

Configurar el EElink GPT18 para reportar a Plaspy ofrece a cuidadores y equipos de monitoreo una forma sencilla de recibir ubicación, alertas SOS y estado del dispositivo desde un rastreador vestible y compacto. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican el aprovisionamiento y le permiten gestionar visibilidad, alertas e informes de forma centralizada para múltiples dispositivos y tipos de dispositivos.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la guía de configuración más reciente con el fabricante en https://www.eelink.com.cn/.
