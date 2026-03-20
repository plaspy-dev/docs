---
slug: /topfly/t8806r/configuration
id: t8806r-configuration
sidebar_label: Configuration
title: TopFly - T8806+R Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopFly T8806+R con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración TopFly T8806+R
  - Instalación TopFly T8806+R
  - T8806+R Plaspy
  - Configuración rastreador GPS TopFly
  - Configuración servidor T8806+R
  - Comandos SMS TopFly
  - configuración seguimiento vehicular
  - configuración seguimiento de flotas
  - configuración plataforma GPS
  - configuración rastreador Plaspy
---

# TopFly - T8806+R Configuración

Esta página documenta el contexto público de configuración para usar el rastreador TopFly T8806+R con Plaspy. Se centra en los ajustes prácticos del servidor y en ejemplos de comandos del fabricante de dominio público para que usted prepare el dispositivo y reporte a Plaspy, logrando visibilidad en tiempo real y notificaciones de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos de comandos SMS que se muestran a continuación provienen de las notas públicas de TopFly y ejemplifican un flujo de configuración común usando la contraseña por defecto del dispositivo.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el rastreador para comunicarse de forma confiable con Plaspy y validar que los datos lleguen a la plataforma. El T8806+R admite configuración por SMS según los comandos públicos que se muestran y ofrece funciones como reporte en tiempo real y gran almacenamiento en búfer para datos cuando está fuera de línea.

- Configure el dispositivo para enviar datos al endpoint de servidor de Plaspy para que posiciones y eventos aparezcan en la plataforma.
- Establezca el APN y parámetros GPRS para que el rastreador use datos móviles para el envío.
- Defina la dirección y el puerto del servidor Plaspy para que el dispositivo sepa dónde enviar la telemetría.
- Configure los intervalos de reporte como el comando TIMER para controlar la frecuencia de transmisión.
- Valide que el dispositivo llegue a Plaspy y aparezca en línea en la plataforma.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el rastreador:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del rastreador automáticamente una vez que el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Un T8806+R con alimentación y accesible que pueda recibir comandos SMS o la herramienta oficial de configuración.
- Una tarjeta SIM activa con plan de datos móviles y los ajustes APN correctos.
- La contraseña por defecto del dispositivo si se requiere para la configuración por SMS (el ejemplo público usa 0000).
- Acceso al instalador o técnico que realizará la configuración y las pruebas.
- Conocimientos básicos sobre el envío de comandos SMS al dispositivo o uso de la interfaz de configuración del fabricante.
- Capacidad para validar la conectividad desde el dispositivo hacia el servidor Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el rastreador envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que posiciones y alertas sean visibles en la plataforma. Plaspy recibe la conexión entrante y determina automáticamente el manejador de protocolo correcto.

- El dispositivo se configura para reportar a la dirección y puerto del servidor Plaspy para que la telemetría se enrute a la plataforma.
- Las actualizaciones de ubicación se envían según el intervalo de reporte configurado por el timer del dispositivo.
- Eventos del dispositivo como encendido, desconexión de energía y condiciones de alarma se transmiten a Plaspy para su monitoreo.
- Plaspy usa el mismo puerto de escucha para todos los dispositivos soportados y detectará automáticamente el protocolo utilizado por el rastreador.
- Una vez que el dispositivo se conecta, usted puede validar su presencia y estado en Plaspy usando las herramientas de la plataforma.

## Flujo de configuración común

1. Acceda al método oficial de configuración de TopFly o al procedimiento de configuración por SMS según la documentación de TopFly o las herramientas del instalador.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o como la IP del servidor 54.85.159.138 según la opción de configuración del dispositivo.
3. Establezca el puerto en 8888 que Plaspy utiliza para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte para la comunicación con el servidor.
5. Aplique o guarde la configuración en el dispositivo y asegúrese de que los ajustes sean aceptados.
6. Reinicie el dispositivo si el fabricante lo requiere o después de aplicar nuevos ajustes de red/servidor.
7. Valide que el dispositivo reporte a Plaspy y aparezca en línea en la plataforma.

## Comandos de configuración de ejemplo

El ejemplo público de configuración del T8806+R utiliza comandos SMS con la contraseña del dispositivo 0000 (por defecto en las notas públicas). Estos comandos se presentan en el orden indicado en el ejemplo del fabricante. Envíe cada SMS al número del rastreador usando la contraseña donde se indique.

1) Configure la zona horaria a UTC 0
```
GMT,0000,0#
```

2) Configure el APN del operador
```
APN,0000,[apn],[apnu],[apnp]#
```
- [apn] es el nombre de punto de acceso de datos móviles provisto por su operador de SIM.
- [apnu] es el usuario APN si el operador lo requiere. Déjelo en blanco si no es necesario.
- [apnp] es la contraseña APN si el operador la requiere. Déjelo en blanco si no es necesario.

3) Configure la IP y puerto GPRS al servidor Plaspy
```
IP,0000,54.85.159.138 8888#
```
- Este ejemplo público configura el dispositivo para reportar a la IP y puerto del servidor Plaspy indicados arriba. Si su dispositivo admite nombres de dominio puede optar por usar d.plaspy.com donde corresponda, pero el comando anterior es el ejemplo proporcionado por el fabricante.

4) Establezca el intervalo de actualización de reporte a 60 segundos
```
TIMER,0000,60:60:0:0#
```
- Este formato TIMER define el comportamiento de reporte del dispositivo según el ejemplo público. El comando anterior configura un intervalo de reporte de 60 segundos tal como se muestra en las notas del fabricante.

Nota: Estos comandos SMS reflejan el ejemplo público de TopFly y usan la contraseña por defecto del dispositivo 0000 tal como aparece en el contenido de configuración proporcionado.

## Notas de configuración

- El ejemplo público utiliza configuración por SMS. Algunas instalaciones pueden usar el software o herramientas de configuración de TopFly; siga la documentación oficial de TopFly para esos métodos.
- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles o la sintaxis. Confirme el formato exacto de comandos para su unidad antes de realizar despliegues masivos.
- Plaspy acepta tanto transportes UDP como TCP en el puerto compartido 8888. Elija el transporte compatible con el dispositivo y su red.
- Si su dispositivo admite usar un nombre de dominio para el servidor, d.plaspy.com es el dominio de Plaspy a utilizar; el ejemplo SMS proporcionado configura la dirección IP directamente.
- Verifique siempre los valores y credenciales del APN con el proveedor de la SIM y conserve los marcadores de posición como [apn], [apnu] y [apnp] cuando prepare plantillas de SMS.

## Por qué usar Plaspy con esta configuración

Usar el TopFly T8806+R con Plaspy ofrece a las organizaciones una forma sencilla de centralizar la telemetría de los dispositivos en una sola plataforma para obtener visibilidad de vehículos y activos. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy simplifican la integración entre múltiples modelos de dispositivos y reducen la carga de configuración por unidad.

Para saber más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos más recientes específicos de TopFly, notas de firmware y detalles de hardware, verifique la información actualizada en el sitio del fabricante https://www.topflytech.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
