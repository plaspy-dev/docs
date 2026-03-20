---
slug: /concox/jm_vl01/configuration
id: jm_vl01-configuration
sidebar_label: Configuration
title: Concox - JM-VL01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Concox JM-VL01 con Plaspy, con ajustes de servidor, comandos SMS y pasos prácticos de integración
keywords:
  - Configuración Concox JM-VL01
  - JM-VL01 configuración Plaspy
  - configuración rastreador GPS Concox
  - configuración servidor JM-VL01
  - integración rastreador flotas Plaspy
  - comandos SMS JM-VL01
  - configuración seguimiento vehicular
  - ajustes APN JM-VL01
  - configuración GPRS Concox
  - configuración plataforma GPS
---

# Concox - JM-VL01 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Concox JM-VL01 con Plaspy. Consolida los ajustes del servidor Plaspy, los prerrequisitos habituales y los comandos prácticos de configuración que están públicamente disponibles para este modelo. Cuando corresponda, se muestran ejemplos de comandos SMS procedentes de la documentación del fabricante para que pueda configurar el dispositivo y enviarlo a Plaspy.

Plaspy utiliza ajustes compartidos de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante para el JM-VL01 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que se muestran a continuación reflejan instrucciones públicas y deben emplearse junto con la documentación oficial de Concox al realizar una configuración en producción.

## Resumen de la configuración

El proceso de configuración prepara el JM-VL01 para comunicarse con Plaspy y garantiza que el dispositivo reporte datos de ubicación y eventos de forma fiable. La configuración típica utiliza la vía de SMS provista por Concox o la herramienta del proveedor que soporte este modelo.

- Configure el dispositivo para que apunte al endpoint de servidor de Plaspy y así entregue datos de ubicación y eventos.
- Establezca el APN y los parámetros de GPRS o LTE para que el rastreador pueda conectarse a datos móviles.
- Defina intervalos de reporte, como el temporizador periódico, para controlar la frecuencia de las actualizaciones de ubicación hacia Plaspy.
- Active el modo de datos GPRS y verifique los parámetros con el comando de verificación del dispositivo.
- Valide la visibilidad del dispositivo en Plaspy tras aplicar los ajustes y, si es necesario, reinicie el dispositivo para que los cambios surtan efecto.

## Ajustes del servidor Plaspy

Al configurar el JM-VL01 para Plaspy, utilice los siguientes ajustes públicos de servidor exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos previos típicos

- Un JM-VL01 con alimentación y accesible, instalado o conectado a la alimentación del vehículo para configuración y pruebas
- Una tarjeta SIM válida con datos habilitados y la información APN correcta del operador móvil
- Capacidad para enviar comandos SMS al dispositivo desde un teléfono de gestión si se usa configuración por SMS
- Acceso a la documentación oficial de Concox o a las herramientas de configuración del proveedor para el JM-VL01
- Conocer los valores del APN y cualquier nombre de usuario o contraseña APN requeridos por su operador móvil
- Confirmación de que la revisión de firmware y hardware de la unidad es compatible con sus procedimientos de instalación

## Cómo se conecta este rastreador a Plaspy

El JM-VL01 se configura para enviar informes de posición y eventos a un endpoint y puerto del servidor Plaspy, de modo que los administradores de flota puedan monitorear los dispositivos en la plataforma. La configuración dirige al rastreador a enviar datos al dominio Plaspy o a la IP de Plaspy usando el puerto compartido.

- El rastreador envía reportes de ubicación y eventos a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Puede configurar el dispositivo para usar transporte UDP o TCP según las opciones del equipo
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda parsear los datos entrantes de los dispositivos soportados
- Notificaciones de eventos como alertas de geocerca, cambios de ignición y otros disparadores se entregan a la plataforma para su monitoreo
- Una configuración correcta permite la visibilidad y el monitoreo operativo de los dispositivos JM-VL01 en Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración Concox para el JM-VL01 ya sea mediante comandos SMS o la herramienta del proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del dispositivo.
3. Establezca el puerto a 8888 para el servicio Plaspy.
4. Seleccione UDP o TCP si el dispositivo requiere especificar el transporte para la configuración SERVER.
5. Configure el APN del dispositivo y las credenciales APN necesarias para que pueda utilizar datos móviles.
6. Aplique o guarde la configuración en el dispositivo y reinicie la unidad si el procedimiento lo requiere.
7. Verifique que el JM-VL01 reporte a Plaspy y que aparezca en la plataforma con las actualizaciones de ubicación y eventos esperadas.

## Comandos de configuración de ejemplo

El JM-VL01 admite configuración por SMS con los siguientes comandos públicos. Envíe estos mensajes SMS en el orden mostrado al realizar una configuración inicial. Se incluyen notas de etiquetado para mayor claridad.

- Paso opcional de reseteo de fábrica o preparación inicial
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador
Tenga en cuenta que {{apn}} es un marcador de posición para el APN de su operador. Si su operador requiere nombre de usuario o contraseña APN, use los marcadores opcionales {{apnu}} y {{apnp}} como se muestra.
```text
APN,{{apn}}# 
```
o con nombre de usuario y contraseña
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS para usar el dominio Plaspy en el puerto 8888
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativamente configurar el servidor GPRS usando la IP de Plaspy en el puerto 8888
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización de reporte a 60 segundos
```text
TIMER,60#
```
o formato alternativo de temporizador
```text
TIMER,60,60#
```

- Activar modo GPRS
```text
GPRSON,1#
```

- Verificar parámetros GPRS y del servidor
```text
GPRSSET#
```

Conserve los marcadores de posición al redactar los comandos APN. Reemplace {{apn}}, {{apnu}} y {{apnp}} por los valores de su operador antes de enviar.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comandos SMS disponibles o el orden de los parámetros. Verifique los comandos con el manual del dispositivo correspondiente a su unidad.
- La configuración por SMS se documenta aquí porque está públicamente disponible para el JM-VL01. Dependiendo de su proveedor, también puede disponer de herramientas del vendedor o de una interfaz de configuración por serial.
- Los ejemplos incluyen comandos SERVER tanto con dominio como con IP. Use la variante de dominio para referirse a d.plaspy.com o la variante de IP para 54.85.159.138 según lo requiera su flujo de trabajo.
- Elija UDP o TCP de acuerdo con los requerimientos de su instalación. Plaspy soporta ambos transportes y detecta automáticamente el protocolo entrante.
- Todos los dispositivos que reportan a Plaspy usan el puerto 8888. Asegúrese de que los cortafuegos de red permitan el tráfico saliente y entrante según el transporte elegido.

## Por qué usar Plaspy con esta configuración

Configurar el Concox JM-VL01 para reportar a Plaspy ofrece una forma práctica de centralizar la ubicación, los eventos y la telemetría operativa de su flota. Usar el endpoint y puerto compartidos de Plaspy simplifica el despliegue en muchos rastreadores y permite que Plaspy detecte automáticamente el protocolo del dispositivo, de modo que usted pueda concentrarse en el monitoreo y la operación en lugar de en reglas de parseo por dispositivo.

Para obtener más información sobre Plaspy y cómo la plataforma funciona con dispositivos como el Concox JM-VL01 visite https://www.plaspy.com. Los comandos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar la documentación técnica y de configuración más reciente en el sitio de Concox https://www.iconcox.com/ antes de realizar despliegues en producción.
