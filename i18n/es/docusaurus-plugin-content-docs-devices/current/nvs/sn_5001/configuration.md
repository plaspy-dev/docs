---
slug: /nvs/sn_5001/configuration
id: sn_5001-configuration
sidebar_label: Configuration
title: NVS - SN-5001 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el NVS SN-5001 con Plaspy incluidos comandos SMS y ajustes de servidor
keywords:
  - configuración NVS SN-5001
  - instalación NVS SN-5001
  - NVS SN-5001 Plaspy
  - configuración rastreador NVS
  - configuración GPS SN-5001
  - rastreo vehicular SN-5001
  - configuración plataforma GPS SN-5001
  - configuración rastreador Plaspy
  - ajustes servidor rastreador GPS
  - configuración SMS SN-5001
---

# NVS - SN-5001: Configuración

Esta página reúne la información pública necesaria para dejar un rastreador NVS SN-5001 funcionando con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos SMS que el fabricante publica y que se usan habitualmente para apuntar el dispositivo al endpoint de Plaspy y activar el envío de datos.

Plaspy utiliza una configuración de servidor compartida entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de NVS y las notas de firmware de su dispositivo.

## Resumen de configuración

El objetivo de estos pasos es preparar el SN-5001 para que establezca una conexión de datos y envíe de forma fiable la ubicación y los eventos a Plaspy. Las instrucciones públicas que siguen muestran cómo configurar el APN, el endpoint del servidor y el modo GPRS mediante comandos SMS cuando el dispositivo soporta este método.

- Configure el APN y el modo GPRS del equipo para que el rastreador pueda acceder a internet y reportar a Plaspy.
- Apunte el rastreador al endpoint y puerto de Plaspy para que los datos lleguen a su cuenta.
- Valide la conectividad y la configuración usando el comando de verificación del dispositivo para que aparezca en Plaspy.
- Opcionalmente, realice un reinicio de fábrica antes de la primera configuración si lo exige la instalación o para solución de problemas.
- Verifique en la plataforma Plaspy que el reporte del dispositivo y las señales de alarma funcionen correctamente para el monitoreo operativo.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Estos son los valores públicos de Plaspy que debe introducir en el SN-5001 para que informe a la plataforma Plaspy.

## Requisitos habituales antes de la configuración

- Un SN-5001 con alimentación conectada y batería en buen estado o alimentación externa.
- Una tarjeta SIM activa con un plan de datos que soporte GPRS y los datos de APN del operador.
- El valor del APN del operador y, opcionalmente, el usuario y la contraseña del APN si el operador los requiere.
- Acceso para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante, según el método de configuración del equipo.
- Conocimiento de la contraseña del equipo si fue cambiada respecto al valor de fábrica.
- Acceso a la documentación oficial de NVS para el modelo SN-5001 para confirmar detalles específicos de firmware.

## Cómo se conecta este rastreador a Plaspy

El SN-5001 se configura para usar la red móvil y establecer una conexión de datos GPRS y luego enviar su ubicación y eventos al endpoint y puerto compartidos de Plaspy. Una vez configurado, el equipo reportará su posición y las alarmas o eventos configurados a Plaspy para su visualización y monitoreo.

- El rastreador usa el APN configurado para abrir una sesión de datos GPRS.
- Los datos del dispositivo se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y el comportamiento del operador.
- Plaspy detecta automáticamente el protocolo entrante del rastreador y procesa los datos del equipo.
- Las señales de alarma y las notificaciones de eventos se reenvían a Plaspy para que aparezcan en la plataforma.

## Flujo de configuración típico

1. Acceda al método de configuración oficial del fabricante para el SN-5001, normalmente comandos SMS o una utilidad de configuración de NVS.
2. Si es necesario, haga un reinicio de fábrica para restaurar valores conocidos antes de la configuración.
3. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para el envío.
6. Configure el APN del operador y, si corresponde, el usuario y la contraseña del APN para que la conexión GPRS funcione.
7. Aplique o guarde la configuración y reinicie el equipo si es necesario para que los cambios tengan efecto.
8. Valide que el equipo está reportando a Plaspy y que el rastreador aparece y se actualiza en su interfaz Plaspy.

## Ejemplos de comandos de configuración

El SN-5001 puede configurarse enviando comandos SMS al equipo. Los ejemplos del fabricante que aparecen a continuación están presentes en la documentación pública. La contraseña predeterminada del dispositivo mostrada en los comandos públicos es 123456. Si la contraseña de su equipo es distinta, reemplace 123456 por la contraseña real del dispositivo.

- Reinicio de fábrica opcional inicial (use solo si necesita restaurar valores por defecto):

```
begin123456
```

- Establecer la zona horaria a UTC 0:

```
time zone123456 0
```

- Configurar el APN del operador (reemplace [apn] con el valor del APN de su operador móvil):

```
apn123456 [apn]
```

- Configurar usuario y contraseña del APN si su operador los requiere (reemplace [apnu] y [apnp] con sus credenciales):

```
up123456 [apnu] [apnp]
```

- Establecer el servidor GPRS a la IP y puerto de Plaspy (la IP pública de Plaspy es 54.85.159.138 y el puerto es 8888):

```
adminip123456 54.85.159.138 8888
```

- Cambiar el rastreador al modo GPRS (dos sintaxis aceptadas):

```
gprs123456,1,1
```

o

```
gprs123456
```

- Verificar o consultar la configuración en el dispositivo:

```
check123456
```

Nota sobre los marcadores: [apn] es la cadena APN del operador móvil. [apnu] y [apnp] son el usuario y la contraseña del APN cuando se requieren. Mantenga la contraseña del dispositivo (123456 en estos ejemplos) correcta para su equipo antes de enviar cualquier comando SMS.

## Observaciones sobre la configuración

- La configuración basada en SMS se muestra aquí porque forma parte del contenido público de configuración del SN-5001. Otras herramientas de NVS o versiones de firmware pueden soportar métodos alternativos.
- Diferentes revisiones de firmware pueden aceptar formatos de comando ligeramente distintos o requerir un orden diferente. Verifique la sintaxis de los comandos para su versión de firmware.
- Elija TCP o UDP según las necesidades de la instalación; Plaspy soporta ambos y detectará el protocolo automáticamente cuando el dispositivo se conecte al puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que el puerto 8888 es consistente entre rastreadores.
- Confirme siempre los ajustes del APN con el operador móvil y pruebe la conectividad de datos antes de asumir que el dispositivo está reportando correctamente.

## Por qué usar Plaspy con esta configuración

Configurar el NVS SN-5001 para enviar datos a Plaspy ofrece a las organizaciones un endpoint de servidor consistente y un manejo automático de protocolos que simplifica la incorporación de equipos. Con los ajustes de servidor compartidos y la detección automática del protocolo, los dispositivos SN-5001 pueden integrarse en un flujo de trabajo de monitoreo que consolida ubicación, alarmas y estado básico del equipo en una sola plataforma.

Para saber más sobre Plaspy visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que verifique la información de instalación más reciente en el sitio oficial de NVS https://www.nvs-ts.ru/ antes de desplegar los equipos.
