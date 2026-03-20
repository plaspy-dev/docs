---
slug: /eelink/gpt12/configuration
id: gpt12-configuration
sidebar_label: Configuration
title: EElink - GPT12 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador EElink GPT12 y compatibilidad con Plaspy usando servidor compartido y comandos SMS
keywords:
  - configuración EElink GPT12
  - instalación EElink GPT12
  - configuración de servidor EElink GPT12
  - configuración de software de rastreo EElink GPT12
  - configuración plataforma GPS EElink GPT12
  - integración protocolo EELINK
  - comandos SMS GPT12
  - configuración APN GPT12
  - configuración rastreador GPS Plaspy
  - rastreo de flotas GPT12
---

# EElink - Configuración del GPT12

Esta página documenta el contexto público de configuración para usar el rastreador GPS EElink GPT12 con Plaspy. Se centra en los ajustes prácticos de servidor y del dispositivo que permiten al GPT12 enviar ubicación y telemetría a la plataforma Plaspy, e incluye los comandos SMS públicos habitualmente utilizados para aplicar esas configuraciones en el equipo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GPT12 soporta configuración por SMS e integración con el protocolo EELINK; los comandos de ejemplo que siguen muestran un flujo típico basado en SMS que está públicamente documentado para este modelo.

## Resumen de configuración

Esta configuración prepara el GPT12 para comunicarse de forma confiable con Plaspy ajustando el APN de datos móviles y dirigiendo el dispositivo al endpoint del servidor de Plaspy. El objetivo es habilitar que el rastreador envíe actualizaciones periódicas de ubicación e informes de eventos para que el equipo sea visible en la plataforma Plaspy.

- Configure el APN del dispositivo para que pueda usar datos GPRS para reportes en tiempo real.
- Apunte el rastreador a la dirección del servidor de Plaspy para que los informes lleguen a la plataforma.
- Establezca un intervalo de actualización adecuado a sus necesidades de monitoreo.
- Opcionalmente restablezca o verifique parámetros para asegurar un estado de configuración limpio.
- Valide la conectividad y la visibilidad en Plaspy después de aplicar los ajustes.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes del servidor de Plaspy al configurar el GPT12. Estos valores se comparten entre los dispositivos soportados por Plaspy y son necesarios para enrutar los mensajes del rastreador hacia la plataforma.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la configuración

- Un dispositivo GPT12 con batería cargada o conectado a alimentación durante la configuración.
- Una tarjeta SIM válida con datos activados y servicio SMS disponible para la configuración por SMS.
- El APN del operador móvil y, si aplica, el nombre de usuario y contraseña del APN proporcionados por su operador.
- Acceso al método de configuración del fabricante, como comandos SMS, herramienta de PC o app del proveedor.
- Conocimiento del IMEI del dispositivo o identificador necesario para registrar el rastreador en Plaspy si su flujo de trabajo de cuenta lo requiere.
- Confirmación de que el firmware del equipo soporta configuración por SMS y el protocolo EELINK según lo esperado.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GPT12 envía mensajes de ubicación y estado al endpoint del servidor de Plaspy para que el dispositivo quede visible en la plataforma. Plaspy recibe las conexiones entrantes en su servidor y puerto compartidos y determina el protocolo del rastreador de forma automática.

- El rastreador envía reportes por GPRS al dominio o IP del servidor de Plaspy en el puerto 8888.
- El equipo puede configurarse para usar transporte UDP o TCP hacia el endpoint de Plaspy.
- Plaspy recibe los reportes y los mapea al protocolo correcto del dispositivo automáticamente.
- Los reportes incluyen actualizaciones periódicas de posición según el intervalo configurado con TIMER.
- Una vez recibidos los mensajes, el dispositivo y sus eventos quedan visibles para monitoreo y reproducción en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante, por ejemplo la interfaz de comandos SMS del GPT12, la herramienta de configuración para PC o la app del proveedor.
2. Ingrese la dirección del servidor Plaspy como dominio d.plaspy.com o como la dirección IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888; Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Elija el tipo de transporte UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Configure el APN y cualquier credencial (usuario/contraseña) solicitada por su operador de SIM.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si es necesario.
7. Valide que el GPT12 está reportando a Plaspy revisando el estado del dispositivo y los mensajes entrantes en la plataforma.

## Ejemplos de comandos de configuración

El GPT12 soporta configuración vía comandos SMS. Los siguientes comandos públicos se presentan en el orden documentado. Mantenga los marcadores de posición exactamente como se muestran y reemplácelos por los valores de su operador.

1. Restablecimiento inicial opcional a configuración de fábrica (usar solo cuando sea necesario para un inicio limpio)
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0 (ejemplo)
```
GMT,E,0#
```

3. Configurar el APN del operador. Reemplace los marcadores con la información de su operador:
- [apn] es el nombre del APN proporcionado por su operador
- [apnu] es el usuario del APN si su operador lo requiere
- [apnp] es la contraseña del APN si su operador lo requiere
```
APN,[apn],[apnu],[apnp]#
```
Nota: Si su operador no requiere usuario ni contraseña, puede enviar solo APN,[apn]# dependiendo del firmware del dispositivo.

4. Establecer el servidor GPRS al dominio de Plaspy usando el comando SERVER
```
SERVER,1,d.plaspy.com,8888#
```

5. O establecer el servidor GPRS a la IP de Plaspy en su lugar
```
SERVER,0,54.85.159.138,8888#
```

6. Establecer el intervalo de actualización a cada 60 segundos
```
TIMER,60#
```

7. Verificar los parámetros actuales
```
PARAM#
```

Estos comandos siguen el flujo público documentado para el GPT12. Use la variante del comando SERVER (dominio o IP) que mejor se adapte a su entorno de red.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Verifique la sintaxis con la documentación de su firmware antes de enviar comandos.
- Algunas implementaciones prefieren SERVER en forma de dominio d.plaspy.com para permitir actualizaciones DNS, mientras que otras prefieren la forma IP. Plaspy acepta ambas en el puerto 8888.
- Elija UDP o TCP según el comportamiento de su red y operador. Plaspy acepta cualquiera de los dos transportes y detectará el protocolo automáticamente.
- La configuración por SMS es útil cuando el dispositivo está fuera de línea o antes de instalar una SIM para datos. Confirme la entrega y el reconocimiento de los comandos SMS por parte del equipo.
- Mantenga un registro de los comandos que envía y pruebe la conectividad tras la configuración usando PARAM# o observando el dispositivo en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el EElink GPT12 para reportar a Plaspy ofrece a las organizaciones visibilidad consistente de la ubicación de los activos y el historial de eventos mediante un único endpoint de servidor compartido. Usar los ajustes de servidor y puerto compartidos de Plaspy simplifica el despliegue a gran escala porque la plataforma detecta automáticamente los protocolos de los rastreadores y acepta dispositivos que reportan al mismo endpoint.

To learn more about Plaspy and supported tracker workflows visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and command updates for the GPT12 please verify details on the manufacturer site https://www.eelink.com.cn/ since firmware behavior and setup methods can change over time.
