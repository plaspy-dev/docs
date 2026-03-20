---
slug: /uvi_group/gt06/configuration
id: gt06-configuration
sidebar_label: Configuration
title: UVI Group - GT06 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el GT06 de UVI Group para usarlo con Plaspy, con ajustes de servidor, comandos SMS y consejos de validación
keywords:
  - Configuración UVI Group GT06
  - Configuración GT06 Plaspy
  - Configuración de servidor GT06
  - Configuración rastreador GPS UVI Group
  - Configuración SMS GT06
  - Configuración GPRS GT06
  - Configuración seguimiento vehicular
  - Configuración rastreador GPS Plaspy
  - Configuración APN GT06
  - Guía de conectividad GT06
---

# UVI Group - GT06 — Configuración

Esta página reúne la información pública y práctica para preparar un rastreador UVI Group GT06 para su integración con Plaspy. Aquí encontrará los ajustes de servidor usados habitualmente, ejemplos de comandos SMS y recomendaciones para validar que el dispositivo reporte posición y estado correctamente al sistema Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan conexiones entrantes. Las indicaciones del fabricante para el GT06 pueden variar según versión de firmware, revisión de hardware, tipo de instalación y herramientas del vendedor; por eso los ejemplos que se muestran son instrucciones prácticas públicas y no un manual exhaustivo del fabricante.

## Resumen de configuración

El proceso de configuración prepara el GT06 para comunicarse de forma fiable con Plaspy, de modo que la posición y el estado del dispositivo aparezcan en la plataforma. Lo habitual es establecer el APN y los parámetros de GPRS, verificar conectividad y confirmar el comportamiento de reporte.

- Configure el APN del equipo para que pueda abrir una sesión de datos GPRS e informar por Internet.
- Apunte el dispositivo al servidor de Plaspy usando el endpoint y puerto compartidos.
- Seleccione el protocolo de transporte si el rastreador requiere elegir entre UDP o TCP.
- Defina un intervalo de reporte para que el dispositivo actualice la ubicación con la cadencia deseada.
- Verifique la configuración con comprobaciones de estado y GPRS y confirme la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el GT06. Estos valores son el endpoint estándar que Plaspy utiliza para los dispositivos compatibles.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming connections

Todos los dispositivos configurados para Plaspy usan el mismo puerto y Plaspy intentará detectar automáticamente el protocolo del rastreador.

## Requisitos previos

- Un GT06 con alimentación instalado o accesible para la configuración inicial
- Una tarjeta SIM con datos habilitados y el APN del operador disponible para configurar
- Capacidad para enviar comandos SMS al GT06 si va a utilizar configuración por SMS
- Acceso a la documentación oficial del fabricante o a la herramienta de configuración del GT06
- Conocimiento de la contraseña del dispositivo para acciones de configuración; la contraseña predeterminada común es 666666
- Un método para confirmar la conectividad del dispositivo, como respuestas SMS de estado o la visibilidad en la plataforma Plaspy

## Cómo se conecta este tracker a Plaspy

El GT06 suele transmitir GPS y estado del dispositivo a través de la red celular hacia un servidor en Internet. Al configurarlo para Plaspy, el rastreador se apunta al endpoint y puerto de Plaspy para que la telemetría entrante sea recibida y procesada por la plataforma.

- El rastreador abre una sesión GPRS usando el APN configurado y envía datos por IP
- Los datos se dirigen al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según las opciones del dispositivo y el firmware
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador
- Una vez activo el reporte, el dispositivo aparece en Plaspy para monitorización y generación de eventos

## Flujo típico de configuración

1. Encienda el GT06 y asegúrese de que la SIM con datos esté instalada y funcione.
2. Acceda al método de configuración oficial del GT06, como comandos SMS o la utilidad proporcionada por el fabricante.
3. Introduzca el objetivo del servidor de Plaspy usando d.plaspy.com o la dirección IP 54.85.159.138 en la configuración de servidor del dispositivo.
4. Establezca el puerto en 8888 para el reporte hacia Plaspy.
5. Elija UDP o TCP si el dispositivo exige seleccionar el transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del GT06 requiere reinicio para aplicar cambios.
7. Valide que el rastreador reporte a Plaspy usando comandos de estado del dispositivo y confirme la visibilidad en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GT06 puede configurarse mediante comandos SMS. Los comandos que siguen son ejemplos públicos y usan la contraseña de muestra 666666, que es el valor por defecto en muchas unidades GT06. Mantenga el orden donde se indica y reemplace los marcadores según corresponda.

- Restablecer a configuración de fábrica (paso opcional)
```text
FACTORY,666666#
```
Nota: Este comando suele emplearse para devolver el equipo a la configuración de fábrica. Use solo cuando sea necesario.

- Establecer la zona horaria a UTC 0
```text
gmt,666666,e,0#
```

- Configurar el APN del operador
```text
APN,666666,[apn]#
```
Si su APN requiere usuario o contraseña incluya los campos opcionales según lo soporte su dispositivo:
```text
APN,666666,[apn],[apnu],[apnp]#
```
Explicación de los marcadores
- [apn] es la cadena APN del operador necesaria para GPRS
- [apnu] es el nombre de usuario del APN si lo proporciona el operador
- [apnp] es la contraseña del APN si la proporciona el operador

- Configurar el servidor GPRS al endpoint de Plaspy usando la IP pública y el puerto 8888
```text
server,666666,0,54.85.159.138,8888,0#
```
Este comando apunta el dispositivo a la IP del servidor Plaspy en el puerto 8888. Algunos firmwares permiten usar el dominio d.plaspy.com en lugar de la IP si soportan nombres de dominio.

- Establecer intervalo de reporte a 60 segundos
```text
timer,666666,,60#
```

- Consultar la configuración GPRS actual
```text
GPRSSET,666666#
```

- Consultar el estado del dispositivo
```text
status,666666#
```

Envíe estas cadenas SMS desde el teléfono de la SIM del dispositivo al número del rastreador. Tras el envío, espere las respuestas SMS de confirmación que el dispositivo pueda proporcionar y luego verifique el reporte en Plaspy.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis y el comportamiento de los comandos SMS; consulte la documentación del GT06 o las notas del proveedor para formatos exactos.
- Los ejemplos de comandos del GT06 anteriores usan explícitamente la IP del servidor Plaspy, pero algunos firmwares permiten usar el dominio d.plaspy.com.
- Elija UDP o TCP según la capacidad del dispositivo y las necesidades de la red; Plaspy soporta ambos y detectará el protocolo automáticamente.
- La configuración por SMS es un método común para GT06, aunque a veces el fabricante ofrece herramientas de PC o aplicaciones móviles que realizan los mismos cambios.
- Cambie la contraseña predeterminada 666666 cuando sea posible para mejorar la seguridad tras la configuración inicial.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un GT06 configurado correctamente aporta visibilidad centralizada para rastreadores en una flota o conjunto de activos. Apuntar los dispositivos al endpoint y puerto compartidos de Plaspy simplifica la puesta en marcha y permite que la plataforma identifique el protocolo automáticamente, de modo que los rastreadores aparezcan en el sistema para monitoreo en tiempo real y supervisión operativa.

Para más información sobre Plaspy visite https://www.plaspy.com. Para métodos específicos de configuración de dispositivo, comportamiento de firmware y detalles del fabricante verifique las instrucciones en el sitio oficial de UVI Group http://www.uvi-group.com/
