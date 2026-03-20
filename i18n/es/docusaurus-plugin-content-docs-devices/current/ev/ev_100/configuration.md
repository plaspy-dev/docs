---
slug: /ev/ev_100/configuration
id: ev_100-configuration
sidebar_label: Configuration
title: EV - EV-100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EV EV-100 con Plaspy, incluyendo ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - configuración EV EV-100
  - configuración EV-100 Plaspy
  - configuración de rastreador GPS EV
  - configuración de rastreador vehicular EV
  - configuración servidor EV-100
  - integración de dispositivo Plaspy
  - comandos SMS rastreador GPS
  - configuración APN EV-100
  - configuración plataforma de seguimiento vehicular
  - seguimiento de flotas EV-100
---

# EV - Configuración EV-100

Esta página describe el contexto público de configuración para usar el rastreador GPS EV EV-100 con Plaspy. Resume los ajustes de servidor de Plaspy y presenta los comandos SMS y el flujo de trabajo que el fabricante suele proporcionar para preparar un EV-100 a fin de que reporte ubicación y eventos en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el equipo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El EV-100 admite configuración por SMS y GPRS; los ejemplos de comandos SMS a continuación usan la contraseña predeterminada del dispositivo 123456, salvo que usted la haya cambiado.

## Resumen de la configuración

Este proceso prepara el EV-100 para comunicarse con Plaspy configurando la zona horaria, el APN de la red y el endpoint del servidor para que la unidad pueda enviar posición y alarmas a la plataforma.

- Ajustar la zona horaria y parámetros básicos para que las marcas de tiempo coincidan con su cuenta.
- Configurar el APN del operador móvil para que el tracker use GPRS y reporte en tiempo real.
- Habilitar o establecer la dirección del servidor del dispositivo para que el EV-100 envíe datos a Plaspy.
- Seleccionar el transporte (UDP o TCP) si el dispositivo solicita elegir un tipo de transporte.
- Validar la conectividad para que el dispositivo sea visible en la plataforma Plaspy usando el puerto compartido de Plaspy.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para configuración basada en DNS.
- IP del servidor 54.85.159.138 puede usarse cuando se requiere una dirección IP.
- Puerto 8888 es el puerto de escucha de Plaspy para todos los dispositivos compatibles.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del tracker.
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta y todos los equipos en Plaspy usan el mismo puerto.

## Requisitos típicos antes de la configuración

- Una unidad EV-100 alimentada e instalada, accesible por SMS y con una SIM válida que tenga datos habilitados.
- Conocimiento del APN del operador móvil, y opcionalmente usuario y contraseña del APN si su proveedor los requiere.
- Acceso al método de configuración del instalador o fabricante, como comandos SMS o software del proveedor.
- Capacidad para recibir y enviar SMS desde la SIM usada en el tracker para aplicar los comandos de configuración por SMS.
- Confirmación del vendedor o fabricante si el dispositivo requiere habilitar la función de cambio de servidor antes de establecer uno personalizado.

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el EV-100 envía reportes de ubicación y alarmas al endpoint compartido del servidor Plaspy en el puerto de la plataforma, de modo que Plaspy pueda mostrar la ubicación y los eventos del dispositivo.

- El tracker se configura para reportar al endpoint compartido d.plaspy.com o a 54.85.159.138.
- Todos los datos se envían al puerto 8888, que es el puerto estándar de Plaspy para dispositivos compatibles.
- El equipo puede usar transporte UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que en muchos casos la configuración explícita del protocolo es sencilla.
- Una vez activo el reporte, las actualizaciones de ubicación y los eventos de alarma aparecen en la plataforma Plaspy para monitoreo y enrutamiento.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software, o prepare el acceso por SMS a la SIM del dispositivo.
2. Verifique y ajuste la zona horaria y parámetros básicos para que los registros estén alineados con sus necesidades.
3. Ingrese la dirección del servidor Plaspy como d.plaspy.com o como la IP 54.85.159.138 según lo requiera el dispositivo.
4. Configure el puerto 8888 para el reporte, ya que Plaspy usa el mismo puerto para todos los dispositivos.
5. Elija UDP o TCP si la configuración del EV-100 exige especificar el protocolo de transporte.
6. Aplique o guarde la configuración en el dispositivo y reinicie el tracker si las instrucciones del fabricante lo requieren.
7. Valide que el EV-100 reporte a Plaspy comprobando la conectividad del dispositivo y los mensajes entrantes en la plataforma Plaspy.

Nota: El fabricante del EV-100 puede requerir habilitar el cambio de servidor en el dispositivo antes de aceptar comandos para cambiar el servidor. Contacte al proveedor o consulte la documentación del dispositivo si no puede cambiar el servidor directamente.

## Comandos de configuración de ejemplo

El EV-100 admite configuración vía SMS. Los comandos de ejemplo abajo usan la contraseña predeterminada 123456. Reemplace la contraseña si su dispositivo tiene un código de acceso distinto.

1. Ajustar zona horaria a UTC+0
```
123456L+00
```

2. Configurar el APN del operador
- Comando mínimo con solo APN:
```
123456S1,[apn]
```
- Si su operador requiere usuario y contraseña del APN, inclúyalos como marcadores:
```
123456S1,[apn],[apnu],[apnp]
```
Explicación de los marcadores:
- [apn] = cadena APN de su operador móvil
- [apnu] = usuario del APN si el operador lo requiere
- [apnp] = contraseña del APN si el operador lo requiere

3. Establecer dirección y puerto del servidor
- El fabricante indica que puede ser necesario habilitar el cambio de servidor por parte de ellos. Una vez habilitado, use:
```
123456I1,54.85.159.138,8888
```
- Puede sustituir d.plaspy.com donde el dispositivo soporte nombres de dominio en lugar de IP:
```
123456I1,d.plaspy.com,8888
```

Mantenga este orden de comandos al aplicar la configuración inicial: zona horaria, APN y luego ajustes del servidor. Si el fabricante exige un paso de habilitación previo para cambiar el servidor, contáctelos para activar la funcionalidad de configuración de servidor en el dispositivo.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar la sintaxis de los comandos SMS o las opciones disponibles; consulte siempre la documentación del fabricante para su build de firmware.
- El ejemplo del EV-100 emplea comandos SMS para la configuración. Si prefiere usar las herramientas de software del proveedor, siga esas herramientas y confirme que envían los mismos valores de servidor y APN.
- Elija UDP o TCP según la fiabilidad de la red y las indicaciones del proveedor; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- El fabricante puede requerir habilitar la opción de cambio de servidor antes de aceptar comandos. Contacte al proveedor si un comando para establecer el servidor es rechazado.
- Mantenga las credenciales del APN seguras y verifique que la SIM tenga datos y privilegios SMS suficientes tanto para la configuración como para el reporte.

## Por qué usar Plaspy con esta configuración

Configurar el EV-100 para que reporte a Plaspy brinda a las organizaciones visibilidad centralizada de flotas de vehículos y motocicletas a través de un único endpoint compartido. Con el EV-100 reportando a Plaspy en el puerto 8888, los operadores obtienen un comportamiento consistente entre múltiples modelos porque Plaspy usa el mismo puerto y la detección automática de protocolo para las conexiones entrantes.

Para saber más sobre Plaspy y cómo soporta trackers como el EV-100 visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y herramientas del proveedor consulte el sitio oficial del fabricante http://www.eviewltd.com/ ya que las especificaciones y métodos de instalación pueden cambiar con el tiempo.
