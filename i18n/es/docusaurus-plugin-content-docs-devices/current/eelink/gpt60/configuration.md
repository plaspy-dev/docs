---
slug: /eelink/gpt60/configuration
id: gpt60-configuration
sidebar_label: Configuration
title: EElink - GPT60 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para EElink GPT60, incluye ajustes de servidor Plaspy, comandos SMS y flujo de integración
keywords:
  - EElink GPT60
  - Configuración GPT60
  - Configuración rastreador GPS EElink
  - Configuración GPT60 Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador personal
  - Configuración EELINK 2.1
  - Integración rastreador Plaspy
  - Configuración plataforma GPS
  - Configuración servidor de rastreo
---

# EElink - Configuración GPT60

Esta página documenta el contexto público de configuración para usar el EElink GPT60 con Plaspy. Consolida los ajustes del servidor Plaspy que debe aplicar, los requisitos típicos y los comandos SMS públicos disponibles para los dispositivos GPT60, de modo que pueda preparar el rastreador para un reporte confiable a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero las acciones en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos en esta página usan el conjunto de comandos SMS publicados para GPT60 cuando aplica, y están pensados para guiar la integración con Plaspy mientras recomienda verificar con la documentación oficial de EElink.

## Resumen de configuración

El objetivo de la configuración es preparar el GPT60 para que establezca una conexión persistente y correctamente dirigida hacia Plaspy, de modo que ubicación, eventos y alertas aparezcan en la plataforma. Esto implica definir parámetros de acceso a la red, asignar el endpoint del servidor Plaspy y confirmar los intervalos de actualización y el comportamiento de telemetría.

- Configure el APN y los ajustes GPRS del dispositivo para que el rastreador pueda acceder a la red de datos celular.
- Apunte el dispositivo al endpoint del servidor Plaspy para que la telemetría fluya hacia Plaspy para mapeo y alertas.
- Elija el modo de transporte UDP o TCP si el dispositivo requiere selección de transporte para comunicación con el servidor.
- Establezca un intervalo de reporte apropiado para equilibrar la actualidad de los datos y la vida de la batería.
- Verifique la configuración con la consulta de parámetros del dispositivo y confirme que el rastreador reporte correctamente a Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol for supported devices

Estos valores son los ajustes públicos de Plaspy que debe usar al configurar dispositivos GPT60. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo utilizado por el rastreador.

## Requisitos previos habituales

- Un dispositivo GPT60 cargado y con capacidad para recibir comandos SMS o usar la herramienta de configuración del fabricante.  
- Una tarjeta SIM activa provisionada para datos con el APN correcto del operador móvil.  
- Conocimiento del APN del operador y, en su caso, del nombre de usuario y contraseña del APN si el operador los requiere.  
- Cobertura en una red LTE o GSM soportada por el dispositivo en el lugar de instalación.  
- Acceso al método de comandos SMS del dispositivo o a la utilidad de configuración de EElink según lo proporcione el fabricante.  
- Acceso administrativo a su cuenta Plaspy para verificar que el dispositivo aparezca después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GPT60 envía telemetría de ubicación y eventos al endpoint del servidor Plaspy para que los administradores puedan monitorear posición, alertas y estado del dispositivo. El equipo usa el protocolo EELINK 2.1 para telemetría y configuración remota, lo que permite actualizaciones casi en tiempo real y cambios de parámetros de forma remota.

- El rastreador se configura para reportar al endpoint del servidor Plaspy d.plaspy.com o al IP equivalente 54.85.159.138 en el puerto 8888.  
- La telemetría se transmite sobre la capa de transporte elegida, UDP o TCP, según la configuración del equipo.  
- Plaspy recibe las posiciones y eventos reportados y los asocia al registro del dispositivo en la plataforma para visualización y alertas.  
- Las actualizaciones de estado e informes de eventos como SOS o detección de caídas se reenvían a Plaspy para visibilidad en el panel y flujos de notificación.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto y endpoint funcionan entre dispositivos compatibles.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de EElink para su dispositivo, normalmente mediante comandos SMS o la herramienta de configuración del proveedor.  
2. Configure el APN usando los valores de su operador para que el dispositivo pueda usar datos móviles.  
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y establezca el puerto del servidor en 8888.  
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte.  
5. Defina el intervalo de actualización de telemetría y los desencadenantes de eventos como SOS o alerta por caída.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo solicita.  
7. Valide que el dispositivo reporte a Plaspy revisando la actividad en Plaspy y usando el comando de consulta de parámetros para confirmar los ajustes.

## Ejemplos de comandos de configuración

El GPT60 permite configuración basada en SMS. Los siguientes comandos públicos se proporcionan en el orden recomendado para la configuración inicial. Conserve los marcadores de posición donde se muestran.

1. Optional initial factory reset
```
FACTORY#
```
Use esto solo si necesita restablecer el rastreador a los valores de fábrica antes de la reconfiguración.

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} es la cadena APN del operador.  
- {{apnu}} es el nombre de usuario del APN cuando se requiere.  
- {{apnp}} es la contraseña del APN cuando se requiere.  
Si no se necesita nombre de usuario o contraseña, omita los marcadores de posición correspondientes según requiera el dispositivo.

4. Set the GPRS server using the domain (preferred)
```
SERVER,1,d.plaspy.com,8888#
```

5. Or set the GPRS server using the IP address (alternative)
```
SERVER,0,54.85.159.138,8888#
```

6. Set the update interval to every 60 seconds
```
TIMER,60#
```

7. Verify device parameters
```
PARAM#
```
Este comando consulta los ajustes actuales del dispositivo para que pueda confirmar APN, servidor, temporizador y otros parámetros.

Siga los comandos en el orden mostrado cuando se requiera aprovisionamiento inicial. Ajuste el temporizador y los valores de APN según las necesidades de su despliegue.

## Notas de configuración

- Las versiones de firmware de EElink y las variantes regionales del dispositivo pueden cambiar el comportamiento de los comandos y los parámetros soportados; confirme la sintaxis exacta con la documentación de EElink.  
- El GPT60 soporta configuración por SMS como se muestra, lo que resulta útil para instalaciones remotas o en campo donde no hay acceso directo por USB o herramientas de configuración.  
- Elija TCP o UDP según sus necesidades operativas y las características del operador; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo.  
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que debe usar ese puerto al ingresar los ajustes del servidor.  
- Verifique siempre los ajustes con el comando PARAM# o la utilidad de configuración de EElink después de aplicar cambios.

## Por qué usar Plaspy con esta configuración

Usar el GPT60 con Plaspy ofrece una ruta sencilla hacia rastreo en tiempo real, alertas y monitoreo de dispositivos para flujos de trabajo de seguridad personal y activos portátiles. El dispositivo transmite ubicación, eventos SOS y telemetría a Plaspy, donde los equipos pueden visualizar movimiento, responder alertas e integrar los datos de rastreo en procesos operativos.

Para saber más sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para conocer los métodos de configuración específicos más recientes, la sintaxis de comandos y detalles de firmware verifique la información con el fabricante en https://www.eelink.com.cn/.
