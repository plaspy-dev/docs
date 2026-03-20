---
slug: /eelink/gpt19/configuration
id: gpt19-configuration
sidebar_label: Configuration
title: EElink - GPT19 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador EElink GPT19 a Plaspy con ajustes de servidor y comandos SMS
keywords:
  - configuración EElink GPT19
  - instalación EElink GPT19
  - configuración rastreador GPT19
  - configuración GPT19 Plaspy
  - rastreador EElink Plaspy
  - configuración servidor rastreador GPS
  - rastreo de vehículos GPT19
  - configuración SMS GPT19
  - seguimiento de flotas GPT19
  - instrucciones EElink GPT19
---

# EElink - GPT19 Configuración

Esta página documenta el contexto de configuración pública para usar el rastreador EElink GPT19 con la plataforma Plaspy. Reúne los ajustes prácticos de servidor y los comandos SMS que se emplean habitualmente para apuntar el dispositivo a Plaspy y permitir que el rastreador informe ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador al conectarse. Los pasos de configuración en el lado del fabricante para el GPT19 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía se centra en los ajustes públicos y comandos SMS comúnmente usados en modelos GPT19 al integrarlos con Plaspy.

## Resumen de la configuración

Este proceso prepara el GPT19 para comunicarse de manera fiable con Plaspy y le permite verificar que el dispositivo aparece en la plataforma. Los objetivos prácticos al configurar un GPT19 para compatibilidad con Plaspy son los siguientes:

- Apuntar el dispositivo al endpoint y puerto del servidor de Plaspy para recibir telemetría.
- Configurar el APN del operador para que el dispositivo establezca GPRS cuando sea necesario.
- Seleccionar el transporte (UDP o TCP) y confirmar que el dispositivo envía a Plaspy en el puerto 8888.
- Ajustar el intervalo de reporte y parámetros básicos según sus necesidades de monitoreo.
- Verificar los ajustes y confirmar que el dispositivo aparece y reporta correctamente en Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el GPT19. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse.

- servidor dominio d.plaspy.com
- servidor IP 54.85.159.138
- puerto 8888
- transporte: soporte para UDP o TCP
- detección automática de protocolo en Plaspy

## Requisitos típicos antes de la configuración

- Un rastreador GPT19 alimentado y accesible con la SIM y la batería instaladas según las instrucciones del fabricante.
- Acceso al método de configuración admitido por su unidad, como comandos SMS o la herramienta oficial de configuración de Eelink.
- El APN del operador y, opcionalmente, las credenciales APN para la tarjeta SIM que proporcionará datos GPRS.
- Un método para enviar comandos SMS al rastreador si va a usar configuración mediante SMS.
- Conocimientos básicos sobre si el dispositivo debe usar UDP o TCP en la red donde lo va a desplegar.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GPT19 reporta posición y estado a la plataforma Plaspy enviando paquetes de datos al endpoint y puerto compartidos. Plaspy identifica automáticamente el protocolo del rastreador, por lo que no necesita elegir un puerto especial por dispositivo.

- El rastreador se apunta al endpoint del servidor Plaspy en d.plaspy.com o al IP equivalente.
- Los datos se envían al puerto 8888, que es el puerto común que usa Plaspy para todos los dispositivos soportados.
- Puede elegir UDP o TCP como transporte cuando el dispositivo requiera selección de transporte.
- Plaspy detecta automáticamente el protocolo del dispositivo al conectarse e interpreta los mensajes entrantes.
- Una vez activo el reporte, el dispositivo queda visible en Plaspy para monitoreo de ubicación, eventos y estado.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de EElink para su modelo GPT19, típicamente comandos SMS o la herramienta de configuración del fabricante.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 que Plaspy usa para todos los equipos.
4. Elija UDP o TCP en el rastreador si el dispositivo requiere selección de transporte.
5. Configure el APN y las credenciales APN que requiera su SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere o después de cambios mayores.
7. Valide que el rastreador esté reportando a Plaspy y que sea visible en la plataforma.

## Comandos de configuración de ejemplo

El GPT19 admite configuración por SMS. A continuación se muestran los comandos SMS públicos que se usan con frecuencia para configurar el dispositivo para Plaspy. Preserve los marcadores de posición y sustitúyalos por sus valores reales donde se indica.

- Restablecer el dispositivo a valores de fábrica (paso inicial opcional)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
Nota: [apn] es el nombre del APN. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN y pueden omitirse si su operador no los requiere.
```text
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS para usar el dominio de Plaspy (UDP o TCP en el puerto 8888)
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente, configurar el servidor GPRS por dirección IP
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de posición a 60 segundos
```text
TIMER,60#
```

- Consultar parámetros actuales para verificar la configuración
```text
PARAM#
```

Use el formato de comando SERVER que coincida con su preferencia por dominio o IP. Los ejemplos de SERVER anteriores apuntan explícitamente el dispositivo a Plaspy usando el puerto compartido requerido 8888.

## Notas de configuración

- El GPT19 admite configuración mediante SMS como se muestra en los comandos de ejemplo; utilice la sintaxis SMS oficial de Eelink para su versión de firmware.
- Algunas revisiones de firmware pueden variar en la sintaxis de comandos o en los parámetros disponibles. Verifique los comandos en el manual del dispositivo antes de enviarlos.
- Elija UDP o TCP según las condiciones de la red y las recomendaciones de su proveedor de conectividad; Plaspy acepta ambos transportes en el puerto 8888.
- Cuando utilice marcadores de posición como [apn], sustitúyalos por la cadena APN real proporcionada por el operador móvil. Si el usuario o la contraseña del APN no son necesarios, omita esos campos según las reglas de comandos del dispositivo.
- Confirme siempre los ajustes usando la consulta PARAM# y comprobando la visibilidad del dispositivo en Plaspy tras la configuración.

## Por qué usar Plaspy con esta configuración

Configurar el EElink GPT19 para que reporte a Plaspy ofrece a las organizaciones un endpoint de servidor consistente y una configuración predecible para el monitoreo de flotas y activos. Usar los ajustes de servidor compartidos de Plaspy simplifica el aprovisionamiento porque todos los dispositivos compatibles usan el mismo puerto y Plaspy detecta automáticamente el protocolo, lo que facilita la integración y brinda visibilidad operativa más rápida.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration details and firmware documentation at the manufacturer site https://www.eelink.com.cn/. Manufacturer specifications, available commands, and firmware behavior can change over time so always confirm the current instructions on the official EElink documentation.
