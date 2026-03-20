---
slug: /topfly/warriorx_100/configuration
id: warriorx_100-configuration
sidebar_label: Configuration
title: TopFly - WarriorX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TopFly WarriorX 100 y apuntarlo a los servidores Plaspy para enviar telemetría
keywords:
  - Configuración TopFly WarriorX 100
  - Configuración WarriorX 100
  - Integración Plaspy
  - Configuración rastreador GPS
  - Ajustes servidor Plaspy
  - Configuración rastreador de activos
  - Rastreo vehicular TopFly
  - Comandos SMS rastreador
  - Rastreador GNSS de activos
  - Configuración rastreador bajo consumo
---

# TopFly - Configuración WarriorX 100

Esta página documenta el contexto público de configuración para usar el TopFly WarriorX 100 con Plaspy. Explica los pasos prácticos y los ajustes de servidor necesarios para apuntar el dispositivo a Plaspy y que la ubicación y la telemetría se entreguen a la plataforma. Utilice esta guía junto con la documentación del fabricante para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ejemplo de modelConfiguration para el WarriorX 100 muestra comandos SMS que ilustran un flujo de configuración habitual del fabricante.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el WarriorX 100 para comunicarse de forma fiable con Plaspy, validar la conectividad de red y permitir que el dispositivo aparezca en la plataforma Plaspy para monitoreo y alertas.

- Configurar el dispositivo para usar el endpoint del servidor Plaspy de modo que la telemetría y los eventos se envíen a la plataforma.
- Proveer APN y ajustes GPRS para que el dispositivo utilice datos móviles para enviar reportes.
- Elegir transporte y puerto (UDP o TCP en el puerto de Plaspy) de acuerdo con la interfaz del equipo.
- Validar el intervalo de reporte y la frecuencia de actualización para equilibrar la vida útil de la batería y las necesidades de reporte.
- Verificar que el dispositivo sea visible en Plaspy después de aplicar los ajustes y reiniciarlo si es necesario.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará el protocolo del rastreador automáticamente, por lo que un único endpoint de servidor y puerto puede dar soporte a varios tipos de rastreadores.

## Requisitos típicos antes de la configuración

- Un WarriorX 100 encendido y accesible, con batería o alimentación externa disponible.
- Una tarjeta SIM válida con capacidad de datos y SMS insertada y activa para la configuración de APN y SMS.
- Credenciales APN del operador móvil, incluyendo marcadores como [apn], [apnu] y [apnp] si su operador las requiere.
- Acceso a un teléfono que pueda enviar SMS al dispositivo o acceso a la herramienta oficial de configuración del fabricante si está disponible.
- La contraseña del dispositivo cuando sea requerida por los comandos (el ejemplo utiliza la contraseña por defecto 0000).
- Documentación o ficha técnica del fabricante para instrucciones específicas de firmware y la sintaxis de comandos.

## Cómo se conecta este rastreador a Plaspy

El WarriorX 100 se configura para reportar fixes GNSS y telemetría de eventos al endpoint y puerto del servidor Plaspy. Una vez que el servidor GPRS y el APN estén correctamente configurados y se seleccione el transporte, el dispositivo enviará actualizaciones periódicas y reportes de eventos a Plaspy para mapas en vivo, alertas y reproducción histórica.

- Los reportes del dispositivo se envían a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- El rastreador puede usar transporte UDP o TCP para enviar paquetes GPRS según la selección y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse, de modo que la plataforma puede parsear la telemetría entrante.
- Los intervalos de reporte son configurables en el dispositivo para equilibrar la frecuencia de actualización y la duración de la batería.
- Eventos como movimiento, manipulación o batería baja se reenvían a Plaspy una vez que el dispositivo apunta al servidor Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de TopFly para el WarriorX 100, como la interfaz de comandos SMS o el software del fabricante.
2. Prepare la información del APN del operador móvil y confirme que la SIM esté activa en el rastreador.
3. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP directa 54.85.159.138 según la capacidad del dispositivo.
4. Establezca el puerto a 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el rastreador y realice el reinicio del dispositivo si es necesario.
6. Valide que el rastreador esté reportando comprobando la actividad del dispositivo en Plaspy y confirmando conexiones entrantes al servidor Plaspy.
7. Ajuste el intervalo de reporte o los umbrales de eventos según sea necesario para lograr el equilibrio deseado entre autonomía y frecuencia de telemetría.

## Comandos de configuración de ejemplo

El modelConfiguration del WarriorX 100 soporta configuración por SMS. Los comandos de ejemplo del fabricante abajo usan la contraseña del dispositivo 0000, que es la configuración por defecto en este ejemplo público. Preserve los marcadores al reemplazar valores de APN.

1. Establecer la zona horaria a UTC 0
```
GMT,0000,0#
```

2. Establecer el APN del operador y las credenciales
```
APN,0000,[apn],[apnu],[apnp]#
```
- Explicación: reemplace [apn] con el APN de su operador. Si el operador requiere usuario o contraseña, introdúzcalos en [apnu] y [apnp] o déjelos en blanco según corresponda.

3. Configurar el servidor GPRS a Plaspy usando la IP y el puerto de Plaspy
```
IP,0000,54.85.159.138 8888#
```
- Esto apunta el rastreador al endpoint del servidor Plaspy y al puerto compartido de Plaspy usado por todos los dispositivos.

4. Establecer el intervalo de actualización periódica a 60 segundos
```
TIMER,0000,60:60:0:0#
```
- Este ejemplo establece el perfil de intervalo de reporte; siga la guía del fabricante para la sintaxis de TIMER y las implicaciones sobre el consumo de energía.

Nota: Use la contraseña del dispositivo que corresponda a su unidad. Los comandos de ejemplo usan 0000 como contraseña por defecto mostrada en el snippet público de modelConfiguration. Si la contraseña fue cambiada, sustituya por la contraseña actual del dispositivo.

## Notas de configuración

- La configuración vía SMS está soportada por los comandos de ejemplo, pero las herramientas del fabricante o la configuración por USB también pueden estar disponibles según la versión de firmware y la revisión de hardware.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos o los parámetros disponibles; siempre verifique los comandos con la documentación más reciente del fabricante.
- Elija UDP o TCP según su entorno de red y las opciones del dispositivo; ambos transportes son soportados al apuntar a Plaspy en el puerto 8888.
- Todos los dispositivos Plaspy usan el mismo puerto y Plaspy detectará el protocolo del rastreador automáticamente, por lo que utilice el valor de puerto compartido al configurar distintos modelos de rastreadores.
- Mantenga los valores del APN y las credenciales del operador listos antes de enviar mensajes de configuración para reducir ciclos de configuración.

## Por qué usar Plaspy con esta configuración

Configurar el WarriorX 100 para reportar a Plaspy ofrece visibilidad centralizada de la ubicación de activos, alertas de eventos y telemetría histórica. Para activos exteriores de larga duración, la combinación de perfiles de reporte de bajo consumo del WarriorX 100 y la ingesta de Plaspy permite a los equipos mantener conciencia situacional mientras se minimizan los costos de mantenimiento y datos.

Para obtener más información sobre Plaspy y cómo recibe telemetría de dispositivos visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento del firmware y las referencias oficiales de comandos consulte la documentación del fabricante en https://www.topflytech.com/ la cual puede cambiar con el tiempo.
