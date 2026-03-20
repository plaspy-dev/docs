---
slug: /eelink/gpt19/configuration
id: gpt19-configuration
sidebar_label: Configuration
title: EElink - GPT19 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink GPT19 con ajustes de servidor y comandos SMS para conectar con la plataforma Plaspy
keywords:
  - configuración EElink GPT19
  - instalación EElink GPT19
  - integración GPT19 Plaspy
  - configuración servidor GPT19
  - comandos SMS GPT19
  - configuración rastreador GPS EElink
  - rastreo vehicular GPT19
  - guía configuración rastreador GPS
  - configuración plataforma GPT19
  - ajustes servidor rastreador EElink
---

# EElink - Configuración GPT19

Esta página documenta el contexto de configuración pública para usar el rastreador EElink GPT19 con la plataforma Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica los comandos SMS disponibles públicamente para el GPT19 y detalla pasos prácticos para que el dispositivo reporte a Plaspy. Use esta guía junto con la documentación del fabricante para cualquier detalle específico del dispositivo.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles, y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración por parte del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos que siguen como el método publicado y de propósito general para configurar el GPT19 mediante GPRS y SMS.

## Resumen de la configuración

El objetivo de esta configuración es preparar al GPT19 para comunicarse de forma fiable con Plaspy y validar que el dispositivo sea visible en la plataforma. Los pasos públicos para el GPT19 se centran en ajustar el APN y apuntar el dispositivo a los ajustes del servidor de Plaspy, y luego comprobar el comportamiento de reporte.

- Configure el APN de la red móvil para que los datos GPRS funcionen si va a usar reporte por datos.
- Establezca la dirección del servidor a Plaspy usando el dominio público o la IP y el puerto compartido.
- Seleccione el tipo de transporte en el dispositivo si es necesario (UDP o TCP).
- Ajuste los intervalos o temporizadores de reporte para que el dispositivo envíe actualizaciones periódicas de ubicación.
- Verifique los parámetros y confirme que el dispositivo aparece en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automáticamente detecta el protocolo del rastreador cuando recibe datos

Estos valores son los detalles del endpoint público de Plaspy que debe usar al configurar el GPT19. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del rastreador automáticamente.

## Requisitos típicos antes de la configuración

- Un rastreador GPT19 cargado y listo con la batería instalada y el montaje necesario completado.
- Una tarjeta SIM activa con capacidad de datos y SMS y los ajustes APN correctos del operador móvil.
- Acceso al método de configuración del dispositivo soportado por la unidad, como comandos SMS o las herramientas oficiales de EElink.
- Conocimiento de los valores APN del operador, incluyendo posibles usuario y contraseña si aplica.
- Habilidad básica para enviar y recibir SMS desde el número autorizado para configurar el dispositivo.
- Acceso a la cuenta de Plaspy donde validará la conectividad del dispositivo una vez que el rastreador comience a reportar.

## Cómo se conecta este rastreador a Plaspy

El GPT19 puede configurarse para reportar ubicación y datos del dispositivo directamente a Plaspy apuntando su servidor de reporte GPRS al endpoint de Plaspy y usando el puerto compartido. Una vez configurado, el equipo envía actualizaciones periódicas y alarmas que Plaspy procesa y muestra.

- El rastreador envía paquetes de ubicación y eventos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy acepta datos por UDP o TCP según el transporte seleccionado en el dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador al recibir los datos, por lo que se usa el mismo puerto 8888 para todos los dispositivos.
- El reporte periódico se controla mediante los temporizadores del dispositivo para equilibrar frecuencia y vida útil de la batería.
- Una vez que el dispositivo reporta, se vuelve visible en Plaspy para monitoreo, alertas de geocercas y reproducción histórica.

## Flujo de configuración común

1. Acceda al método oficial de configuración EElink para el GPT19, por ejemplo mediante comandos SMS o una herramienta de configuración proporcionada por el fabricante.
2. Si es necesario, realice un reseteo de fábrica opcional para volver a un estado conocido.
3. Configure el APN correcto para la SIM del operador usando el comando APN e incluya usuario y contraseña si el operador los requiere.
4. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138.
5. Establezca el puerto del servidor en 8888.
6. Elija el transporte UDP o TCP si el dispositivo solicita una selección.
7. Aplique o guarde la configuración y reinicie el dispositivo si requiere un reinicio para que los cambios surtan efecto.
8. Valide que el dispositivo reporte a Plaspy y verifique la conectividad y las actualizaciones de ubicación en la plataforma.

## Ejemplos de comandos de configuración

Los comandos SMS publicados para el GPT19 utilizados en la configuración se muestran a continuación. Envíe estos comandos desde un número de teléfono autorizado al rastreador como mensajes SMS en el orden indicado cuando el orden sea importante.

- Reset de fábrica inicial opcional (usar solo cuando sea necesario para borrar ajustes):
```
FACTORY#
```

- Establecer la zona horaria a UTC 0 (ejemplo):
```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace los valores de marcador con los de su operador. [apn] es obligatorio. [apnu] y [apnp] son opcionales si su operador requiere usuario y contraseña.
```
APN,[apn]#
```
o con usuario y contraseña opcionales
```
APN,[apn],[apnu],[apnp]#
```

- Establecer el servidor GPRS al dominio de Plaspy en el puerto 8888 (preferible por dominio):
```
SERVER,1,d.plaspy.com,8888#
```

- O establecer el servidor GPRS a la IP de Plaspy en el puerto 8888:
```
SERVER,0,54.85.159.138,8888#
```

- Ajustar el temporizador de reporte para enviar actualizaciones cada 60 segundos:
```
TIMER,60#
```

- Verificar parámetros actuales en el dispositivo:
```
PARAM#
```

Mantenga el orden anterior al realizar la configuración inicial: APN primero, luego SERVER, después TIMER y finalmente una verificación con PARAM#. El comando de reseteo de fábrica es opcional y solo debe usarse si necesita restaurar los valores por defecto antes de reconfigurar.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis o el comportamiento de los comandos; siempre consulte el manual del dispositivo para el formato exacto según su versión de firmware.
- El GPT19 soporta configuración por SMS con conjuntos de instrucciones publicados; la configuración remota del servidor también puede ser posible mediante herramientas de EElink o configuraciones asistidas por la plataforma si el proveedor las ofrece.
- Elija UDP o TCP según las necesidades de su instalación; ambos transportes son compatibles con Plaspy y con el dispositivo, y Plaspy detectará el protocolo automáticamente en el servidor.
- Preserve los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por los valores específicos del operador; no envíe el texto literal del marcador al dispositivo.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos, por lo que el ajuste del puerto del servidor es constante en los rastreadores compatibles.

## Por qué usar Plaspy con esta configuración

Configurar el GPT19 para reportar a Plaspy brinda a las organizaciones visibilidad consistente y monitoreo centralizado de vehículos y activos. Con el servidor de Plaspy configurado y el GPT19 reportando a intervalos regulares, usted podrá monitorear actualizaciones de ubicación, recibir alertas y utilizar las herramientas de la plataforma para supervisión operativa.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific commands, firmware details, and manufacturer guidance verify information on the EElink website https://www.eelink.com.cn/ since manufacturer setup methods and firmware behavior can change over time.
