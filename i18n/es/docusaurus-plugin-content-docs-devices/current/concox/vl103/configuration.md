---
slug: /concox/vl103/configuration
id: vl103-configuration
sidebar_label: Configuration
title: Concox - VL103 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Concox VL103 al servidor Plaspy con ajustes compartidos y comandos SMS
keywords:
- configuración Concox VL103
- instalación Concox VL103
- configuración servidor VL103
- configuración rastreador GPS VL103
- configuración rastreador GPS Concox
- configuración software seguimiento VL103
- seguimiento vehicular VL103
- configuración rastreador Plaspy
- configuración plataforma GPS VL103
- VL103 APN y ajustes del servidor
---

# Concox - VL103 Configuración

Esta página describe el contexto público de configuración para usar el Concox VL103 con Plaspy. Explica los pasos prácticos y los comandos SMS documentados públicamente que se emplean habitualmente para apuntar el rastreador al servidor Plaspy, de modo que el dispositivo pueda reportar ubicación, alarmas y estado. El Concox VL103M se presenta como un rastreador compacto de nivel industrial con funciones como posicionamiento GPS y BDS, posicionamiento por LBS, zumbador externo, avisos sonoros y luminosos, escucha remota e IP66; esta página se centra únicamente en los pasos de configuración públicos necesarios para integrar el dispositivo con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, las herramientas de instalación y las utilidades del proveedor. El VL103 admite configuración por SMS y reporte por GPRS; los ejemplos en esta página usan los comandos SMS públicos para establecer APN, servidor, temporizadores y modo GPRS para su uso con Plaspy.

## Resumen de configuración

Este proceso prepara el VL103 para comunicarse de forma confiable con Plaspy mediante la configuración del APN de la red, la orientación del tráfico del dispositivo al endpoint del servidor Plaspy, la definición de intervalos de reporte y la activación del modo GPRS. El objetivo es que el rastreador quede visible y enviando reportes activamente en la plataforma Plaspy.

- Configure el APN del operador móvil y las credenciales opcionales para que el dispositivo pueda establecer una sesión GPRS.
- Apunte el rastreador al endpoint del servidor Plaspy usando los ajustes compartidos de servidor de Plaspy.
- Establezca el temporizador de reporte periódico para que el dispositivo envíe actualizaciones de ubicación con el intervalo deseado.
- Active el modo de reporte GPRS para que el rastreador use datos móviles en la comunicación.
- Valide la configuración con el comando de verificación de parámetros para confirmar que el dispositivo es visible en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 para conexiones de dispositivos  
- Soporte de transporte UDP o TCP cuando el dispositivo requiere selección de transporte  
- Plaspy detecta automáticamente el protocolo del rastreador al recibir los mensajes

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y reconocerá el protocolo del dispositivo automáticamente.

## Requisitos previos habituales

- Alimentación adecuada al VL103 y acceso al dispositivo para enviar SMS de configuración.  
- Una SIM celular activa con datos habilitados y los datos APN correctos proporcionados por el operador móvil.  
- Un teléfono o pasarela SMS capaz de enviar los mensajes de configuración al rastreador.  
- El rastreador debe estar dentro de cobertura celular para establecer GPRS después de la configuración.  
- Acceso a la documentación oficial de Concox o a la herramienta de instalador para referencia sobre comportamientos específicos del modelo.  
- Una forma de monitorizar el rastreador en Plaspy tras aplicar la configuración para confirmar que reporta.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el VL103 establece una sesión GPRS usando el APN del operador y envía los mensajes del dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy recibe las conexiones en su endpoint designado e identifica automáticamente el protocolo específico del rastreador, por lo que no se requiere seleccionar el protocolo por dispositivo en el servidor.

- El rastreador usa el APN configurado para abrir un canal de datos GPRS hacia la red móvil.  
- El dispositivo envía paquetes a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- Los mensajes del dispositivo usan UDP o TCP según lo seleccione el dispositivo.  
- Plaspy detecta y analiza el protocolo del rastreador automáticamente tras la llegada de los primeros mensajes.  
- Los eventos como actualizaciones de ubicación, alarmas y telemetría se incorporan a Plaspy para su visualización y monitoreo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Concox para el VL103, normalmente mediante comandos SMS o la guía del instalador del fabricante.  
2. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como destino.  
3. Configure el puerto del servidor en 8888 como puerto de reporte del dispositivo.  
4. Elija UDP o TCP en el dispositivo si la selección de transporte es requerida por el firmware.  
5. Configure el APN del operador y las credenciales APN opcionales para que GPRS pueda conectarse.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador lo requiere.  
7. Verifique que el dispositivo reporte a Plaspy comprobando los mensajes entrantes en la plataforma o usando el comando de verificación de parámetros del dispositivo.

Cuando el dispositivo soporta comandos SMS, enviar las secuencias SMS documentadas es un método común y práctico para realizar estos pasos.

## Ejemplos de comandos de configuración

El VL103 admite configuración vía SMS. Los siguientes comandos son los documentos públicamente por el fabricante para tareas comunes de configuración. Conserve los marcadores de posición al enviar los comandos.

- Reinicio de fábrica opcional (usar solo si necesita restablecer el dispositivo a valores de fábrica)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador (reemplace los marcadores de posición con los valores de su operador)
```text
APN,{{apn}}#
```
- Configurar el APN del operador incluyendo usuario y contraseña si es necesario
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} es el APN de la red móvil. {{apnu}} y {{apnp}} son el usuario y la contraseña del APN, usados solo si su operador los requiere.

- Establecer el servidor GPRS usando el dominio Plaspy y el puerto
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O establecer el servidor GPRS usando la IP del servidor Plaspy y el puerto
```text
SERVER,0,54.85.159.138,8888,0#
```
Explicación: Los comandos anteriores configuran el rastreador para enviar datos a Plaspy en el puerto 8888. Use la forma por dominio o por IP según su preferencia o el comportamiento del firmware del dispositivo.

- Configurar el intervalo de actualización de reportes a 60 segundos (dos variaciones soportadas)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```
Explicación: Estos comandos configuran el intervalo periódico de reporte de ubicación/telemetría. Elija la forma que soporte su firmware.

- Activar el modo GPRS para que el dispositivo use datos móviles
```text
GPRSON,1#
```

- Comprobar la configuración actual de GPRS y servidor
```text
GPRSSET#
```
Explicación: Use GPRSSET# para solicitar al dispositivo que responda con sus parámetros actuales de red y servidor para verificación.

Siga la secuencia apropiada para su instalación. Por ejemplo: configure primero el APN, luego el servidor, después el temporizador, active GPRS y concluya verificando con GPRSSET#.

## Notas de configuración

- La configuración por SMS es un método público y de uso común para el VL103; asegúrese de que los comandos SMS se envíen desde un número de confianza si el dispositivo filtra mensajes.  
- Las versiones de firmware o las revisiones de hardware pueden variar y modificar la sintaxis exacta o los parámetros disponibles. Verifique la sintaxis exacta de los comandos con la documentación del firmware de su dispositivo.  
- El dispositivo soporta transporte UDP o TCP; seleccione el tipo de transporte en el dispositivo si es necesario y tenga en cuenta que Plaspy acepta ambos en el puerto 8888.  
- Mantenga los marcadores de posición del APN intactos al preparar los comandos y reemplace solo con los valores específicos de su operador.  
- Tras aplicar la configuración, espere el tiempo necesario para que el dispositivo se registre en la red y para que Plaspy detecte automáticamente el protocolo del rastreador.

## Por qué usar Plaspy con esta configuración

Usar el Concox VL103 con Plaspy ofrece una vía sencilla hacia la visibilidad de su flota y el monitoreo operativo al aprovechar ajustes de servidor compartidos y la detección automática de protocolos. Las organizaciones pueden configurar múltiples unidades VL103 para que reporten al mismo endpoint y puerto de Plaspy, simplificando despliegues a gran escala y reduciendo la complejidad de configuración por dispositivo.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración más recientes y específicos del dispositivo, notas de firmware y comandos oficiales, consulte el sitio del fabricante Concox en https://www.iconcox.com/ para verificar los detalles actuales y cualquier actualización en la sintaxis de comandos.
