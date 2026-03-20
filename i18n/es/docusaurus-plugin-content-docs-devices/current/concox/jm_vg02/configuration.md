---
slug: /concox/jm_vg02/configuration
id: jm_vg02-configuration
sidebar_label: Configuration
title: Concox - JM-VG02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox JM-VG02 con ajustes de servidor Plaspy y comandos SMS para configurar el dispositivo
keywords:
  - configuración Concox JM-VG02
  - configuración inicial Concox JM-VG02
  - configuración JM-VG02 para Plaspy
  - ajustes de servidor JM-VG02
  - configuración rastreador OBD II Concox
  - comandos SMS JM-VG02
  - configuración de rastreador Plaspy
  - guía de configuración rastreador de vehículo
  - configuración plataforma GPS Concox
  - configuración software de rastreo
---

# Concox - JM-VG02 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Concox JM-VG02 con Plaspy. Resume los ajustes de servidor de Plaspy necesarios, describe los prerrequisitos habituales y recopila comandos públicos de configuración por SMS que se usan comúnmente para apuntar un dispositivo JM-VG02 al servicio Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando recibe datos. Los pasos de configuración desde el fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice los comandos que se muestran aquí como un punto de partida práctico y verifique los detalles contra la documentación del dispositivo o la guía del proveedor.

## Resumen de configuración

Configurar un JM-VG02 para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos al punto final y puerto centralizados de Plaspy. Los comandos públicos de esta guía muestran el flujo típico de configuración por SMS que muchos dispositivos Concox emplean para ajustar APN, servidor, temporizadores y el modo GPRS.

- Apuntar el rastreador al servidor de Plaspy y establecer el puerto requerido para habilitar la entrega de datos.
- Configurar el APN y los ajustes de GPRS para que el dispositivo pueda establecer una conexión de datos móviles.
- Ajustar los intervalos de reporte y temporizadores para controlar la frecuencia de los envíos de datos.
- Validar la configuración y la conectividad para que el dispositivo aparezca en Plaspy y reporte telemetría.
- Opcionalmente, restaurar el dispositivo a los valores de fábrica antes de una nueva configuración para empezar desde cero.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración del servidor

## Requisitos habituales antes de la configuración

- Asegúrese de que el JM-VG02 esté instalado y con alimentación, por ejemplo conectado al puerto OBD II cuando corresponda.
- Inserte una tarjeta SIM activa con datos móviles habilitados y la información de APN correcta para su operador.
- Tenga acceso a un teléfono o un gateway SMS para enviar comandos de configuración por SMS al dispositivo si va a usar este método.
- Disponga de las instrucciones oficiales del fabricante o una copia del manual del dispositivo para comportamientos específicos del firmware.
- Conectividad de red básica para verificar que el dispositivo pueda alcanzar el dominio o la IP del servidor Plaspy.
- Tenga en cuenta que los comandos y respuestas exactos pueden variar según la revisión de firmware y la región.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el JM-VG02 se instruye para reportar datos de ubicación y eventos al punto final y puerto compartidos de Plaspy. Plaspy recibe las conexiones de los dispositivos por el transporte especificado y mapea automáticamente los datos entrantes al protocolo de rastreador correspondiente.

- El rastreador usa GPRS para enviar paquetes a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Seleccione UDP o TCP en el dispositivo si el firmware requiere elegir el transporte.
- Plaspy identifica el protocolo del dispositivo de forma automática, por lo que no es necesario seleccionar el protocolo en Plaspy.
- Actualizaciones regulares de posición y mensajes de eventos se entregan al punto final de Plaspy para su procesamiento.
- Una vez que el reporte funcione, el dispositivo será visible en la plataforma Plaspy y enviará telemetría periódica.

## Flujo de configuración común

1. Consulte el método oficial de configuración Concox para el JM-VG02, como los comandos SMS documentados por el fabricante.
2. Si el dispositivo lo requiere, ingrese el dominio del servidor d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888 para todas las conexiones de dispositivos Plaspy.
4. Elija UDP o TCP en el dispositivo si el firmware exige seleccionar el transporte.
5. Configure el APN y cualquier usuario o contraseña de APN que exija el operador móvil.
6. Aplique o guarde la configuración y reinicie el rastreador si el equipo requiere un reinicio para aplicar los ajustes.
7. Valide que el rastreador reporte a Plaspy comprobando la conectividad y que el dispositivo aparezca en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El JM-VG02 puede configurarse enviando mensajes SMS al dispositivo. Los siguientes comandos son públicos y se muestran en el mismo orden lógico que los flujos de configuración típicos. Se conservan las etiquetas y parámetros; los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} se usan cuando debe proporcionar los valores específicos del operador.

- Opcional restauración a fábrica inicial (usar solo si desea restaurar valores predeterminados)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador
Use {{apn}} para el nombre del APN. Si su operador requiere usuario y contraseña de APN incluya {{apnu}} y {{apnp}} después del APN.
```text
APN,{{apn}}#
```
O con usuario y contraseña
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Establecer el servidor GPRS usando dominio (forma legible recomendada)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O establecer el servidor GPRS usando dirección IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización a 60 segundos (se muestran dos formas aceptadas)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Verificar los ajustes actuales relacionados con GPRS
```text
GPRSSET#
```

Notas sobre los marcadores de posición:
- {{apn}} es el nombre del APN de datos móviles proporcionado por su operador de SIM.
- {{apnu}} y {{apnp}} representan el usuario y la contraseña opcionales del APN si el operador los requiere.
- Use la forma con dominio SERVER,1,d.plaspy.com,8888,0# para referirse al dominio de Plaspy, o SERVER,0,54.85.159.138,8888,0# para usar la IP numérica.

## Notas de configuración

- La configuración por SMS es un método comúnmente soportado por dispositivos Concox como el JM-VG02; confirme que su dispositivo acepta comandos SMS y que la SIM puede recibir SMS.
- Las revisiones de firmware y hardware pueden cambiar los conjuntos de comandos o el comportamiento por defecto; consulte la documentación oficial correspondiente a la versión de firmware de su dispositivo si tiene dudas.
- Elija UDP o TCP según la preferencia del instalador y el soporte del firmware del dispositivo; ambos transportes son compatibles para llegar a Plaspy en el puerto 8888.
- Todos los dispositivos Plaspy usan el mismo puerto para simplificar la configuración del servidor y permitir que Plaspy enrute las conexiones de forma fiable.
- Pruebe la conectividad después de la configuración usando el comando de verificación y confirmando que el dispositivo aparece en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el JM-VG02 para reportar a Plaspy ofrece a las organizaciones una forma práctica de centralizar la visibilidad de vehículos, alertas de comportamiento al volante y el monitoreo operacional. Dado que Plaspy detecta automáticamente el protocolo y usa un punto final y puerto compartidos, integrar un dispositivo consiste principalmente en configurar el APN, el servidor, el transporte y los temporizadores en el propio equipo.

Para obtener más información sobre Plaspy y cómo acepta telemetría de rastreadores compatibles visite https://www.plaspy.com. Para referencias de comandos específicas del dispositivo, notas de firmware y documentación completa del producto, verifique los detalles de configuración en el sitio del fabricante https://www.iconcox.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
