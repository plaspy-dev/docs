---
slug: /ev/ev_300/configuration
id: ev_300-configuration
sidebar_label: Configuration
title: EV - EV-300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EV EV-300 y conectarlo a Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - configuración EV EV-300
  - instalación EV EV-300
  - configuración servidor EV EV-300
  - configuración rastreador GPS EV
  - configuración seguimiento EV
  - configuración SMS EV-300
  - configuración rastreador Plaspy
  - configuración dispositivo Plaspy
  - configuración rastreador vehicular
  - configuración GPS motocicleta
---

# EV - Configuración del EV-300

Esta página reúne la información pública necesaria para configurar el rastreador de vehículos y motocicletas EV EV-300 con Plaspy. Contiene los ajustes prácticos y públicos que deberá aplicar para apuntar un EV-300 a la plataforma Plaspy, además de explicar los comandos SMS públicos que el fabricante documenta para la configuración inicial.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando recibe datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El EV-300 admite configuración por SMS según los comandos públicos mostrados abajo, y algunas opciones de cambio de servidor pueden requerir activación por parte del fabricante.

## Resumen de configuración

Esta guía describe el propósito y los pasos prácticos mínimos para preparar un EV-300 y que se comunique de forma fiable con Plaspy. Se centra en las acciones públicas necesarias para establecer los valores de APN de la red móvil, la zona horaria y el endpoint del servidor de Plaspy para que el dispositivo pueda reportar a la plataforma.

- Prepare el dispositivo para que pueda enviar datos salientes a Plaspy utilizando el endpoint y puerto compartidos.
- Configure el APN del operador y las credenciales opcionales para que el rastreador tenga conectividad móvil.
- Aplique la dirección y puerto del servidor de Plaspy para que los mensajes reportados lleguen a la plataforma y se detecte el protocolo automáticamente.
- Valide la conectividad del dispositivo y confirme que el rastreador aparece en la plataforma Plaspy.
- Utilice los comandos SMS del EV-300 para la configuración inicial cuando estén disponibles y contacte al fabricante si las opciones de cambio de servidor están restringidas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte admitido UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos

Estos valores son los ajustes públicos de Plaspy que debe usar al configurar el EV-300 para que reporte a la plataforma. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará el protocolo del dispositivo automáticamente.

## Requisitos habituales antes de la configuración

- Un equipo EV-300 alimentado con batería en buen estado o conectado a la corriente del vehículo.
- Una tarjeta SIM válida instalada y con servicio de datos activo o SMS habilitado si va a usar la configuración por SMS.
- Acceso al método de configuración oficial del fabricante o a la documentación del EV-300.
- La contraseña por defecto del dispositivo si se requiere enviar comandos SMS; los comandos públicos del EV-300 usan 123456 como contraseña predeterminada.
- Un teléfono capaz de enviar SMS al dispositivo o la herramienta de configuración del fabricante cuando corresponda.
- Confirmación de que el fabricante o el vendedor ha habilitado las opciones de cambio de servidor si el firmware del dispositivo lo requiere.

## Cómo se conecta este tracker a Plaspy

El EV-300 se configura para enviar ubicaciones y mensajes de dispositivo al endpoint y puerto del servidor Plaspy para que la plataforma pueda ingerir y parsear los datos en tiempo real. Plaspy identificará el protocolo del rastreador automáticamente cuando el dispositivo envíe datos al endpoint compartido.

- El rastreador se apunta al endpoint de Plaspy en d.plaspy.com o a la IP 54.85.159.138.
- Todos los dispositivos de Plaspy reportan en el puerto 8888, por lo que la configuración de puerto es consistente.
- El dispositivo utiliza el transporte seleccionado, UDP o TCP, para enviar mensajes a Plaspy en el puerto 8888.
- Plaspy realiza la detección automática del protocolo para interpretar los mensajes del rastreador sin requerir selección manual de protocolo por dispositivo.
- Tras la configuración, los reportes y eventos del EV-300 serán visibles en Plaspy una vez que el dispositivo se conecte y autentique correctamente.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el EV-300, o prepárese para enviar comandos SMS desde el teléfono del propietario del dispositivo.
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 según el método de comandos del equipo y las indicaciones del fabricante.
3. Configure el puerto del dispositivo en 8888, que es el puerto que usa Plaspy para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un transporte para el envío de reportes.
5. Aplique o guarde la configuración en el rastreador y, si usa SMS, envíe los comandos SMS necesarios desde el número de teléfono autorizado.
6. Reinicie el equipo si el fabricante recomienda un reinicio tras la configuración.
7. Valide que el dispositivo reporta a Plaspy comprobando que aparece en línea en la plataforma y que se reciben mensajes de posición.

Si el firmware del EV-300 restringe los cambios de servidor, contacte al fabricante para habilitar la opción antes de establecer la dirección del servidor.

## Ejemplos de comandos de configuración

La configuración pública del EV-300 incluye comandos SMS documentados por el fabricante. La muestra siguiente usa la contraseña por defecto del dispositivo 123456. Envíe estos comandos como SMS desde el número de teléfono autorizado para el dispositivo. Mantenga los marcadores de posición tal como aparecen cuando sean requeridos.

1. Ajustar la zona horaria a UTC 0
Envíe este SMS al dispositivo:
```
123456L+00
```

2. Configurar el APN del operador
Reemplace [apn] por el APN de su operador móvil. Si su operador requiere usuario o contraseña incluya [apnu] y [apnp] respectivamente. Ejemplos:
```
123456S1,[apn]
```
o con credenciales
```
123456S1,[apn],[apnu],[apnp]
```
Nota: Mantenga los marcadores de posición tal como están y sustituya por los valores reales del APN proporcionados por su operadora.

3. Habilitar la opción de cambio de servidor
Según las notas públicas, puede ser necesario contactar al fabricante para habilitar la opción de cambiar el servidor antes de enviar el comando de servidor.

4. Establecer la IP y el puerto del servidor Plaspy
Después de habilitar el cambio de servidor, envíe el siguiente SMS para apuntar el rastreador a Plaspy usando la IP pública y el puerto:
```
123456I1,54.85.159.138,8888
```
Nota: El ejemplo anterior usa la IP del servidor Plaspy. Si el EV-300 admite nombres de dominio para la configuración del servidor y el fabricante lo ha habilitado, puede usar d.plaspy.com en lugar de la IP solo si está documentado por EV.

Verifique siempre que cada SMS haya sido aceptado por el dispositivo y que el equipo responda o aparezca en línea tras la configuración.

## Notas de configuración

- Las versiones de firmware del fabricante y las banderas de funciones pueden afectar qué comandos SMS y opciones de servidor están disponibles. Consulte la documentación del fabricante para conocer cambios.
- El EV-300 soporta configuración por SMS tal como se muestra. Si el dispositivo no acepta cambios de servidor por SMS, contacte al vendedor para habilitar la función.
- Elija UDP o TCP según las indicaciones de la instalación y las restricciones de red. Plaspy acepta ambos en el puerto 8888.
- Plaspy usa el mismo puerto en todos los trackers soportados y detecta automáticamente el protocolo del dispositivo, por lo que no necesita preseleccionar el protocolo en Plaspy.
- Si usa marcadores de APN incluya el APN correcto, el usuario y la contraseña de la tarjeta SIM instalada en el equipo.

## Por qué usar Plaspy con esta configuración

Configurar el EV-300 para que reporte a Plaspy ofrece un camino sencillo para obtener visibilidad en tiempo real de vehículos y motocicletas usando un único endpoint y puerto compartidos. Las organizaciones que requieren monitoreo y supervisión operativa se benefician de ajustes de servidor consistentes, detección automática de protocolo y visibilidad centralizada en Plaspy una vez que los dispositivos están configurados y conectados correctamente.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos del fabricante, comportamiento de firmware y detalles del dispositivo consulte la información en el sitio oficial de EV http://www.eviewltd.com/ ya que los procedimientos del fabricante pueden cambiar con el tiempo.
