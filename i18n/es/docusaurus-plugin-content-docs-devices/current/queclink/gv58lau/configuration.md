---
slug: /queclink/gv58lau/configuration
id: gv58lau-configuration
sidebar_label: Configuration
title: QuecLink - GV58LAU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV58LAU para conectarlo a Plaspy mediante ajustes de servidor y comandos SMS
keywords:
  - Configuración QuecLink GV58LAU
  - Instalación QuecLink GV58LAU
  - QuecLink GV58LAU Plaspy
  - Guía configuración GV58LAU
  - Configuración rastreador QuecLink
  - Configuración servidor GV58LAU
  - Rastreador GPS GV58LAU Plaspy
  - Configuración seguimiento flotas QuecLink
  - Configuración SMS GV58LAU
  - Configuración plataforma GPS QuecLink
---

# QuecLink - GV58LAU Configuración

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GV58LAU con Plaspy. Se centra en los detalles prácticos de servidor y puesta en marcha que son de dominio público y explica cómo apuntar el dispositivo a Plaspy para que las posiciones y los eventos lleguen a la plataforma. Cuando los comandos del fabricante o ejemplos son públicos, se muestran aquí como un punto de partida práctico para completar una integración básica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador para simplificar la incorporación. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use los comandos y el flujo aquí como referencia pública y verifique las diferencias específicas del equipo con la documentación oficial de QuecLink.

## Resumen de configuración

El objetivo es dejar al GV58LAU preparado para reportar de forma fiable la localización GNSS y los eventos del equipo a Plaspy y validar la conectividad tras la instalación. La configuración típica prepara el acceso de red, apunta el rastreador a Plaspy y confirma que el dispositivo sea visible en la plataforma.

- Configurar el dispositivo para que use Plaspy como servidor de reporte y así las posiciones y eventos lleguen a los paneles.
- Establecer el APN y las credenciales celulares necesarias para que se inicien sesiones GPRS/LTE.
- Aplicar el host y puerto del servidor Plaspy para que el rastreador sepa dónde enviar los uplinks TCP o UDP.
- Validar la conectividad con telemetría en vivo y confirmar que el dispositivo aparezca en Plaspy.
- Opcionalmente usar configuración por SMS si durante la instalación el dispositivo solo es accesible mediante comandos de texto.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Estos valores son el endpoint público y el puerto a los que deben apuntar los dispositivos GV58LAU al integrarlos con Plaspy.

## Requisitos típicos antes de la configuración

- Un GV58LAU con alimentación y cableado correctos y con conectividad celular habilitada.
- Una SIM válida con datos y el APN correcto para su operador.
- Acceso al método de configuración del fabricante soportado por el dispositivo, como comandos SMS o herramientas de servicio USB.
- Conocimiento de la contraseña del dispositivo si se requiere para configurar; el ejemplo público usa la contraseña por defecto queclink.
- Un método para recibir respuestas del equipo o telemetría (respuestas SMS, registros serial/USB o visibilidad en Plaspy) para confirmar los ajustes.
- Confirmación de la versión de firmware y la revisión de hardware cuando sea posible, ya que los comandos y el comportamiento pueden variar.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GV58LAU envía fixes GNSS e informes de eventos al endpoint compartido de Plaspy usando los métodos de uplink estándar que soporta el dispositivo. Plaspy ingiere esos uplinks y mapea la ubicación, eventos de E/S y alarmas configuradas en la plataforma para seguimiento en tiempo real y análisis histórico.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com y su IP 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP para enviar uplinks según la preferencia de configuración; Plaspy soporta ambos y detecta automáticamente el protocolo.
- Actualizaciones de ubicación, activaciones de alarmas y eventos de entradas/salidas se envían como paquetes uplink a Plaspy para visualización y notificaciones.
- Plaspy proporciona visibilidad y monitorización del estado una vez que el rastreador se conecta correctamente y empieza a reportar al endpoint y puerto compartidos.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración QuecLink para su unidad GV58LAU, como comandos SMS, herramienta de servicio o interfaz USB.
2. Configure el APN del equipo y cualquier credencial del operador necesaria para que el rastreador establezca la sesión de datos LTE.
3. Ingrese el servidor Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138.
4. Establezca el puerto destino en 8888, que es el puerto usado por Plaspy.
5. Seleccione UDP o TCP si el dispositivo requiere especificar el transporte; ambos están soportados y Plaspy detecta el protocolo al recibir los paquetes.
6. Aplique o guarde la configuración y reinicie el equipo si es necesario para que los cambios tengan efecto.
7. Valide que el rastreador reporta a Plaspy confirmando la presencia y la telemetría del dispositivo en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El GV58LAU puede configurarse enviando comandos SMS. Los siguientes ejemplos públicos sirven como punto de partida práctico. El ejemplo usa la contraseña del dispositivo queclink, que es el valor por defecto mostrado en la documentación pública. Conserve los marcadores de posición al aplicar estos comandos para su operador.

1. Comando opcional de restauración de fábrica para la puesta en marcha inicial o para borrar ajustes previos
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Etiqueta: comando opcional de inicio para restaurar el comportamiento de fábrica cuando se requiera. Use solo si desea resetear el equipo.

2. Establecer la zona horaria del dispositivo a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN y las credenciales del operador
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- Explicación de los marcadores:
  - [apn] es el nombre del APN del operador móvil
  - [apnu] es el nombre de usuario del APN si el operador lo requiere
  - [apnp] es la contraseña del APN si el operador la requiere

4. Establecer el servidor GPRS a Plaspy por dominio e IP con puerto 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando configura el dispositivo para reportar al servidor Plaspy en d.plaspy.com y en la IP 54.85.159.138 usando el puerto 8888. Mantiene ambos objetivos, dominio e IP, para soportar resolución DNS o conectividad directa por IP.

5. Ajustar el intervalo de reporte a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Modifique los valores de 60 segundos si su instalación requiere una frecuencia de reporte distinta.

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Esto configura el comportamiento de la entrada SOS para generar notificaciones cuando se active.

Nota sobre la configuración por SMS
- La configuración por SMS se muestra porque los comandos de ejemplo públicos utilizan SMS. Algunas instalaciones prefieren USB o una herramienta del fabricante; siempre siga el método que corresponda al acceso al equipo y a su política de instalación.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y los parámetros disponibles. Verifique el soporte exacto de comandos para su firmware GV58LAU antes de desplegar masivamente.
- El ejemplo anterior usa comandos SMS y la contraseña por defecto queclink indicada en la documentación pública. Cambie las contraseñas por defecto en entornos de producción cuando sea posible.
- Tanto los transportes TCP como UDP son compatibles con Plaspy y con el flujo de configuración del dispositivo; elija el transporte según la red y las preferencias de confiabilidad.
- Tenga listas las credenciales APN y la provisión de la SIM antes de aplicar los ajustes del servidor GPRS para que el dispositivo pueda establecer conectividad de inmediato.
- Cuando un comando contiene marcadores como [apn], reemplácelo por los valores específicos del operador; no incluya las llaves en el SMS final.

## Por qué usar Plaspy con esta configuración

Configurar el GV58LAU para reportar a Plaspy ofrece un camino práctico para obtener localización en tiempo real, monitoreo de entradas/salidas y manejo de alarmas para flotas y soluciones de seguridad. Usando el endpoint compartido de Plaspy y los comandos SMS de ejemplo puede preparar dispositivos para entregar telemetría continua y alertas de eventos a una plataforma única que escala desde unos pocos vehículos hasta flotas grandes.

Para saber más sobre Plaspy visite https://www.plaspy.com y para los detalles específicos del dispositivo y notas de firmware consulte al fabricante en https://www.queclink.com/. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar los comandos y procedimientos en la documentación oficial de QuecLink antes de un despliegue a gran escala.
