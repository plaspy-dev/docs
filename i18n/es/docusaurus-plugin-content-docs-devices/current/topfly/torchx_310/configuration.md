---
slug: /topfly/torchx_310/configuration
id: torchx_310-configuration
sidebar_label: Configuration
title: TopFly - TorchX 310 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar un TopFly TorchX 310 a Plaspy con ajustes de servidor compartido y ejemplos de SMS
keywords:
  - configuración TopFly TorchX 310
  - instalación TopFly TorchX 310
  - configuración rastreador GPS TopFly
  - configuración de dispositivo Plaspy
  - configuración TorchX 310 Plaspy
  - configuración rastreador OBD II
  - configuración rastreo de flotas
  - comandos SMS rastreador GPS
  - ajustes de servidor del dispositivo
  - configuración telemática del vehículo
---

# TopFly - Configuración del TorchX 310

Esta página describe el contexto público de configuración para usar el TopFly TorchX 310 con Plaspy. Resume los ajustes prácticos y ejemplos de comandos SMS que se usan habitualmente para apuntar el dispositivo a Plaspy y validar la conectividad. Úsela como guía operativa y complétela con la documentación del fabricante al realizar una instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TorchX 310 acepta comandos de configuración vía SMS y GPRS en campo y puede prepararse para reportar telemetría a Plaspy usando el endpoint y puerto compartidos que se muestran a continuación.

## Resumen de configuración

El objetivo de la configuración es dejar el TorchX 310 listo para comunicar de forma fiable la posición GNSS y la telemetría del bus CAN a Plaspy y que aparezca en su instancia de gestión de flotas. Típicamente se configuran el APN del operador, el endpoint del servidor Plaspy y un intervalo de reporte para que el dispositivo reenvíe localización y datos del vehículo a la plataforma.

- Configure el acceso de red y el APN para que el dispositivo use LTE Cat‑M1 o redes de respaldo para datos.
- Establezca el endpoint del servidor Plaspy para que el rastreador envíe reportes GPRS al destino correcto.
- Defina un intervalo de reporte adecuado para balancear la actualidad de los datos y el uso de la red.
- Valide la conectividad del equipo y verifique que Plaspy reciba los eventos y telemetría iniciales.
- Use los comandos SMS del dispositivo o la herramienta oficial de configuración TopFly según lo proporcione el fabricante.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Estos son los datos públicos del endpoint de Plaspy que debe usar al configurar el TorchX 310 para reportes GPRS.

## Requisitos típicos antes de la instalación

- El dispositivo esté instalado y energizado en el puerto OBD II del vehículo o conectado según la guía del instalador.
- SIM activa con datos y SMS habilitados y credenciales APN correctas para el operador.
- Acceso al número telefónico del dispositivo para enviar SMS o a la herramienta de configuración TopFly compatible con el TorchX 310.
- Conocimiento de la contraseña del dispositivo para configuración por SMS (la contraseña por defecto de ejemplo que aparece más abajo es 0000).
- Cobertura celular y GNSS razonable en el lugar de instalación para poder validar la conectividad.

## Cómo se conecta este rastreador a Plaspy

El TorchX 310 se configura para reportar posición GNSS y telemetría CAN al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda ingerir ubicación, VIN, odómetro, DTCs y otra telemetría. Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede usar un transporte soportado y la plataforma procesará los mensajes adecuadamente.

- El dispositivo envía localización y telemetría derivada del CAN a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los intervalos de reporte determinan con qué frecuencia se envían los paquetes de posición y estado a Plaspy.
- Los puntos en búfer almacenados durante pérdida de red se reenvían a Plaspy cuando la conectividad se restablece.
- El rastreador puede usar transporte UDP o TCP para comunicarse con Plaspy en el puerto compartido.
- Plaspy ingiere la telemetría para mapas en vivo, reportes y flujos de alertas una vez que llegan los mensajes.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración de TopFly, o use comandos SMS si el firmware del dispositivo los soporta.  
2. Introduzca la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.  
3. Establezca el puerto del servidor en 8888; recuerde que Plaspy usa el mismo puerto para todos los dispositivos.  
4. Elija UDP o TCP si el dispositivo requiere seleccionar explícitamente el transporte.  
5. Configure el APN y, si aplica, el usuario y la contraseña del APN para la SIM.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige.  
7. Valide que el dispositivo reporte a Plaspy revisando los eventos entrantes y las actualizaciones de ubicación en su instancia de Plaspy.

Si prefiere la configuración por SMS, siga el formato de comandos SMS de TopFly soportado por el TorchX 310 para aplicar los mismos ajustes de servidor y APN (ejemplos abajo).

## Ejemplos de comandos de configuración

El TorchX 310 soporta comandos de configuración por SMS. El ejemplo abajo usa la contraseña por defecto del dispositivo 0000. Reemplace los marcadores por los valores de su operador donde corresponda.

1. Establecer la zona horaria a UTC 0
```
GMT,0000,0#
```

2. Configurar el APN del operador. Reemplace los marcadores de posición: [apn] por el nombre del APN, [apnu] por el usuario del APN si es necesario, y [apnp] por la contraseña del APN si aplica.
```
APN,0000,[apn],[apnu],[apnp]#
```

3. Establecer el servidor GPRS a la IP y puerto de Plaspy. Plaspy también acepta el dominio d.plaspy.com si lo prefiere.
```
IP,0000,54.85.159.138 8888#
```

4. Ajustar el intervalo de reporte a 60 segundos. El formato TIMER y los rangos permitidos dependen del firmware.
```
TIMER,0000,60:60:0:0#
```

Notas sobre los comandos anteriores:
- La contraseña SMS por defecto de ejemplo es 0000. Confirme y use la contraseña aplicable a su unidad.
- Mantenga el formato exacto y los delimitadores finales al enviar comandos SMS al dispositivo.
- Si prefiere usar el dominio en lugar de la IP, proporcione d.plaspy.com donde se solicite la dirección del servidor.

## Notas de configuración

- Las versiones de firmware del fabricante y las variantes regionales del dispositivo pueden cambiar la sintaxis exacta de los comandos y los parámetros soportados; consulte la documentación de TopFly para detalles específicos por firmware.
- La configuración por SMS es comúnmente soportada pero requiere que la SIM acepte SMS y que el instalador conozca la contraseña de configuración del equipo.
- Elija UDP o TCP según las necesidades de su despliegue; Plaspy aceptará cualquiera en el puerto 8888 y detectará el protocolo automáticamente.
- Cuando use marcadores como [apn], [apnu] y [apnp] reemplácelos por los valores específicos del APN y las credenciales requeridas por la tarjeta SIM.
- Tras aplicar la configuración, espere a que el dispositivo se registre en la red celular y a que los puntos en búfer se suban a Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el TorchX 310 para reportar a Plaspy permite a los gestores de flota consolidar ubicación del vehículo, telemetría del bus CAN y datos de accesorios BLE en una sola plataforma para monitoreo, generación de reportes y alertas. La instalación plug and play en OBD II combinada con el almacenamiento en búfer del dispositivo y los intervalos de reporte configurables facilita implementaciones rápidas y visibilidad operativa continua.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the most current device specific setup details, firmware behavior and manufacturer instructions at https://www.topflytech.com/ .
