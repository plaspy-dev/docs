---
slug: /wanway/gp10/configuration
id: gp10-configuration
sidebar_label: Configuration
title: WanWay - GP10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar WanWay GP10 con Plaspy usando servidor compartido y comandos SMS
keywords:
  - configuración WanWay GP10
  - ajuste WanWay GP10
  - WanWay GP10 Plaspy
  - configuración del rastreador GPS GP10
  - configuración del servidor WanWay GP10
  - comandos SMS WanWay GP10
  - ajustes APN WanWay GP10
  - configuración de seguimiento GP10
  - configuración del dispositivo GP10
  - configuración rastreador WanWay
---

# WanWay - Configuración del GP10

Esta página describe el contexto público de configuración para usar el rastreador personal WanWay GP10 con la plataforma Plaspy. Incluye los ajustes prácticos del servidor y los comandos SMS disponibles públicamente para que el GP10 informe su ubicación y estado a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. La configuración del GP10 que se muestra aquí utiliza comandos por SMS publicados por WanWay para establecer el APN, el servidor GPRS, el intervalo de reporte y activar el envío por GPRS.

## Resumen de la configuración

Configurar el GP10 para Plaspy garantiza que el dispositivo pueda alcanzar el endpoint de datos de Plaspy, reportar posición y estado, y quedar visible dentro de la plataforma. El proceso generalmente emplea la interfaz de comandos por SMS del dispositivo para establecer las credenciales de red y los parámetros del servidor, de modo que el GP10 envíe datos mediante la red móvil a Plaspy.

- Establecer el APN del operador para que el dispositivo pueda conectarse a datos móviles
- Configurar el GP10 para apuntar al dominio o IP del servidor de Plaspy y al puerto compartido
- Definir intervalos de reporte para que las actualizaciones lleguen con la cadencia esperada en Plaspy
- Habilitar el modo de reporte por GPRS en el equipo para que envíe datos a Plaspy
- Verificar la configuración mediante comprobaciones de estado o parámetros antes de la instalación final

## Ajustes de servidor para Plaspy

Al configurar el GP10 para Plaspy, use los siguientes ajustes públicos exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente, por lo que al GP10 solo se le debe indicar el dominio o la IP correctos y el puerto.

## Requisitos típicos antes de comenzar

- Un dispositivo GP10 con carga de batería suficiente o conectado a una fuente de energía para la configuración
- Una tarjeta SIM válida con datos móviles activados y la información APN del operador disponible
- Capacidad para enviar comandos SMS al GP10 (la configuración por SMS es el método publicado)
- Acceso a las instrucciones oficiales de WanWay o al software del proveedor como referencia
- Un lugar seguro para hacer un reinicio o ciclo de energía del dispositivo después de aplicar la configuración
- Tener en cuenta que las versiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis o el comportamiento de los comandos

## Cómo se conecta este rastreador a Plaspy

El GP10 se configura para enviar su ubicación y estado al endpoint y puerto compartido de Plaspy. Una vez establecidos el APN y el servidor y activado el modo GPRS, el dispositivo usará la red móvil para comunicarse con Plaspy y ofrecer seguimiento en tiempo real y reporte de eventos.

- El dispositivo usa datos móviles (GPRS) para abrir una conexión con el endpoint de Plaspy
- Reporta posiciones GPS y mensajes de estado a d.plaspy.com o a la IP de Plaspy
- Los datos se envían al puerto 8888, que Plaspy usa para todos los dispositivos
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar protocolo en la plataforma
- Plaspy pone a disposición los datos reportados para monitoreo, alertas de geocercas y reproducción histórica

## Flujo típico de configuración

1. Consulte el método de configuración oficial del WanWay GP10 o las instrucciones del proveedor; para GP10 el método publicado utiliza comandos SMS.
2. Ingrese el APN correspondiente a la SIM del dispositivo para que el rastreador pueda usar datos móviles.
3. Configure el servidor como d.plaspy.com o 54.85.159.138 y establezca el puerto 8888.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte en su comando de servidor.
5. Aplique o guarde la configuración enviando los comandos SMS al GP10 y siga las respuestas de confirmación del proveedor.
6. Reinicie o haga un ciclo de energía del dispositivo si WanWay lo recomienda o si el equipo lo requiere para aplicar los ajustes de red.
7. Valide que el dispositivo informe a Plaspy revisando las respuestas de estado y confirmando la visibilidad en la plataforma Plaspy.

## Ejemplos de comandos de configuración

La configuración pública del WanWay GP10 se realiza mediante comandos SMS. A continuación se muestran los comandos públicos tal como los publica WanWay. Mantenga el orden al aplicarlos, ya que en muchos flujos el orden importa para la activación de la red.

- Configurar el APN del operador
Este comando establece el APN que el dispositivo usará para registrarse en la red de datos móviles. Reemplace los marcadores con los valores de su operador. Los campos de usuario y contraseña son opcionales según el operador.

```
APN,[apn]#
```

O si su APN requiere usuario y contraseña:

```
APN,[apn],[apnu],[apnp]#
```

(Explicación de los marcadores: [apn] es el nombre del APN proporcionado por su operador móvil. [apnu] es un nombre de usuario del APN si se requiere. [apnp] es la contraseña del APN si se requiere.)

- Establecer el servidor GPRS hacia Plaspy usando el dominio y puerto
Esto configura el índice de servidor 1 para apuntar al dominio y puerto de Plaspy.

```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativa usando la IP del servidor de Plaspy
Si prefiere usar la IP en lugar del dominio, utilice:

```
SERVER,1,54.85.159.138,8888,0#
```

- Establecer el temporizador de reporte
Este ejemplo configura los temporizadores de reporte. Los valores numéricos siguen la sintaxis de comandos del dispositivo.

```
TIMER,60,60#
```

- Activar el modo de reporte por GPRS
Este comando cambia el dispositivo a modo GPRS para que pueda enviar datos al servidor configurado.

```
GPRSON,1#
```

- Verificar parámetros de configuración
Use este comando para solicitar los parámetros de configuración actuales del dispositivo.

```
PARAM#
```

- Consultar el estado del dispositivo
Solicite un informe de estado del dispositivo para confirmar su estado actual y conectividad.

```
STATUS#
```

Use las respuestas del dispositivo para confirmar que cada paso se completó correctamente. Si el GP10 devuelve mensajes de error, consulte la documentación de WanWay para el significado preciso y las acciones correctivas recomendadas.

## Notas sobre la configuración

- La configuración por SMS es el método publicado para GP10; el comportamiento y los comandos soportados pueden variar según la revisión de firmware.
- Puede usar tanto d.plaspy.com como 54.85.159.138 como destino del servidor; ambos apuntan al mismo endpoint de Plaspy y Plaspy escucha en el puerto 8888 para todos los dispositivos.
- Elija UDP o TCP según lo requiera el comando del dispositivo; Plaspy detectará automáticamente el protocolo al recibir los datos.
- Siempre conserve los campos marcadores como [apn] y reemplácelos únicamente con las credenciales de su operador.
- Si un cambio de configuración no surte efecto, intente guardar los ajustes y reiniciar el dispositivo, y vuelva a comprobar con PARAM# y STATUS#.

## Por qué usar Plaspy con esta configuración

Configurar el WanWay GP10 para reportar a Plaspy ofrece a organizaciones y particulares un camino sencillo hacia la visibilidad de ubicación en tiempo real, notificaciones de eventos y monitoreo centralizado. Usar los ajustes de servidor compartidos de Plaspy reduce la complejidad por dispositivo y permite que Plaspy gestione la detección de protocolo, haciendo que los equipos sean visibles en la plataforma con una configuración de servidor consistente.

Para conocer más sobre Plaspy y cómo gestiona las conexiones de dispositivos visite https://www.plaspy.com. Para obtener las instrucciones más actuales específicas del WanWay GP10, notas de firmware y detalles del fabricante, verifique la información en el sitio oficial de WanWay https://www.wanwaytech.net/ ya que los pasos del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
