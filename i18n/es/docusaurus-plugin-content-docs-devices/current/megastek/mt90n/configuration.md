---
slug: /megastek/mt90n/configuration
id: mt90n-configuration
sidebar_label: Configuration
title: Megastek - MT90N Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador Megastek MT90N con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Megastek MT90N
  - Configuración MT90N
  - Integración MT90N Plaspy
  - Configuración servidor MT90N
  - Configuración rastreador GPS MT90N
  - Rastreador Megastek GPS Plaspy
  - Configuración SMS MT90N
  - Rastreador NB IoT MT90N
  - Ajustes de reporte MT90N
  - Configuración de dispositivo Plaspy
---

# Megastek - Configuración MT90N

Esta página ofrece contexto público sobre la configuración del Megastek MT90N para su uso con Plaspy. Se centra en los valores de servidor compartido de Plaspy a los que debe apuntar el dispositivo, los requisitos habituales antes de la configuración y los pasos prácticos comúnmente utilizados para que el equipo comience a reportar a Plaspy. Cuando está disponible, se incluyen ejemplos de comandos SMS de uso público para el MT90N.

Plaspy utiliza el mismo endpoint y puerto de servidor para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siga las instrucciones del fabricante para detalles específicos del dispositivo mientras utiliza los valores de servidor de Plaspy para la conectividad.

## Resumen de la configuración

El objetivo de esta configuración es preparar al MT90N para que envíe su ubicación y telemetría a Plaspy de forma confiable, de modo que el dispositivo sea visible en la plataforma para monitoreo en tiempo real, alertas y reproducción histórica. La configuración normalmente implica asignar un identificador, establecer el APN de datos móviles, configurar el endpoint y puerto del servidor Plaspy, y activar el modo de envío de datos.

- Configure el identificador del dispositivo y los parámetros de red para que el MT90N pueda autenticarse y registrarse en la red celular.
- Proporcione el APN del operador y, si aplica, el usuario y contraseña del APN para que el dispositivo establezca conexión de datos.
- Establezca el servidor GPRS/TCP o UDP apuntando a Plaspy para que los mensajes lleguen a la plataforma.
- Defina el intervalo de reporte y habilite el modo de envío de datos para controlar la frecuencia de actualizaciones y el consumo de batería.
- Verifique que el dispositivo alcance Plaspy confirmando que lleguen los mensajes iniciales y que el equipo aparezca en la interfaz de Plaspy.

## Valores del servidor Plaspy

Use los siguientes valores públicos del servidor Plaspy al configurar el MT90N. Estos valores se comparten entre los dispositivos compatibles y son necesarios para la conectividad con Plaspy.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP (el dispositivo puede configurarse usando cualquiera de los dos en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un MT90N con batería cargada y encendido, accesible para configuración.
- Conexión de datos NB‑IoT o celular funcional y una SIM o suscripción adecuada para NB‑IoT cuando el equipo y el mercado lo requieran.
- Acceso al método de configuración del fabricante para el MT90N, como comandos SMS o herramientas del proveedor.
- El IMEI del dispositivo (utilizado para comandos de identificación) y cualquier credencial de instalador requerida para la configuración por SMS.
- Conocimiento del APN del operador y, opcionalmente, del usuario y contraseña del APN para la red móvil local.
- Acceso a una cuenta de Plaspy o a un administrador para confirmar que el dispositivo está reportando tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El MT90N se configura para enviar posición y telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir y mostrar la ubicación, eventos y alertas. Una vez aplicados los parámetros de red y la información del servidor y habilitado el modo de envío de datos, el dispositivo comenzará a enviar mensajes a Plaspy, donde la plataforma detectará automáticamente el protocolo correcto y procesará la información.

- El rastreador envía actualizaciones de ubicación y mensajes de eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede configurar el dispositivo para usar transporte TCP o UDP en el puerto 8888 según las opciones del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes a la entrada de dispositivo correspondiente.
- Una vez recibidos los mensajes, Plaspy ofrece rastreo en tiempo real, eventos de geocerca, alertas SOS y reproducción histórica.
- Valide la conectividad confirmando la recepción de mensajes en Plaspy después de guardar la configuración en el dispositivo.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Megastek para el MT90N, como la configuración por SMS o la herramienta del proveedor documentada por el fabricante.
2. Ingrese el endpoint del servidor Plaspy ya sea como dominio d.plaspy.com o directamente como la IP 54.85.159.138 según la opción del dispositivo.
3. Configure el puerto del servidor en 8888 en los ajustes del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un transporte; ambos son compatibles con Plaspy en el puerto 8888.
5. Ingrese el APN del operador y cualquier usuario o contraseña del APN requeridos por el operador móvil.
6. Aplique o guarde la configuración y, si el firmware del dispositivo lo exige, reinicie o corte la alimentación del MT90N.
7. Verifique que el dispositivo reporte a Plaspy comprobando la llegada de los mensajes iniciales y la visibilidad del equipo en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El MT90N puede configurarse mediante comandos SMS. Los siguientes comandos de ejemplo se extraen de la guía pública de configuración del dispositivo y usan la contraseña por defecto 000000. Reemplace los marcadores de posición y los valores IMEI con el IMEI real del dispositivo o con los valores del APN del operador.

- Nota: el marcador [apn] representa el APN de su operador. Los marcadores opcionales de usuario y contraseña del APN son [apnu] y [apnp].

1. Establezca el ID del dispositivo usando el IMEI (use los últimos 15 dígitos si el fabricante lo requiere). Reemplace \<15_DIGIT_IMEI> con el IMEI de su equipo:
```
M000000,22,<15_DIGIT_IMEI>
```

2. Configure el APN del operador. Indique [apn] y, si es necesario, incluya [apnu] y [apnp] separados por comas:
```
M000000,23,[apn]
```
Si su APN requiere usuario y contraseña:
```
M000000,23,[apn],[apnu],[apnp]
```

3. Establezca el intervalo de actualización/reporte a 60 segundos (ejemplo):
```
M000000,25,60
```

4. Configure el servidor GPRS para apuntar a Plaspy. Este ejemplo usa la IP pública y el puerto de Plaspy exactamente como se proporcionan:
```
M000000,24,56 54.85.159.138,8888
```

5. Habilite el modo de reporte GPRS/datos (comando ejemplo para activar el modo 2):
```
M000000,21,2
```

Siga los comandos en el orden mostrado para la configuración inicial: establezca el ID del dispositivo, configure el APN, fije el intervalo de reporte, configure el servidor Plaspy y habilite el envío de datos. Reemplace la contraseña por defecto 000000 si su dispositivo requiere otra contraseña para SMS. La sintaxis exacta de los comandos y el significado de sus parámetros pueden variar según la versión de firmware; consulte la documentación de Megastek para detalles específicos del dispositivo.

## Notas sobre la configuración

- Las versiones de firmware de Megastek y las variantes regionales del equipo pueden cambiar la sintaxis exacta de los comandos SMS o el orden de los parámetros; verifique la sintaxis en la documentación del fabricante para el firmware de su dispositivo.
- La configuración por SMS es un método común mostrado aquí, pero algunas instalaciones utilizan herramientas del proveedor o un portal de incorporación; utilice el método oficial del fabricante indicado para su unidad MT90N.
- Plaspy soporta tanto TCP como UDP en el mismo puerto 8888; elija el transporte según la preferencia del instalador y las condiciones de la red.
- Reemplace siempre los valores de marcador como IMEI, [apn], [apnu] y [apnp] por valores apropiados para su dispositivo y operador móvil.
- Si la configuración no surte efecto de inmediato, intente reiniciar el dispositivo o cortar la alimentación después de guardar los ajustes.

## Por qué usar Plaspy con esta configuración

Usar el MT90N con Plaspy ofrece a las organizaciones visibilidad centralizada para seguimiento de seguridad personal y activos ligeros mediante un endpoint y puerto de servidor consistentes. Apuntar el dispositivo al servidor compartido de Plaspy y habilitar el envío de datos permite rastreo en tiempo real, alertas SOS, notificaciones de geocerca y reproducción histórica dentro de la plataforma Plaspy, lo que simplifica el monitoreo en flotas con dispositivos mixtos.

Aprenda más sobre Plaspy y cómo puede integrar los flujos del MT90N en procesos de seguimiento más amplios en https://www.plaspy.com. Para los comandos de configuración más recientes, comportamiento de firmware e instrucciones del fabricante, verifique los detalles en el sitio de Megastek https://www.megastek.com/ ya que los métodos de configuración y el firmware pueden cambiar con el tiempo.
