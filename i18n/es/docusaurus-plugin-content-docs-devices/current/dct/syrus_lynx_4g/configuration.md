---
slug: /dct/syrus_lynx_4g/configuration
id: syrus_lynx_4g-configuration
sidebar_label: Configuration
title: DCT - Syrus Lynx 4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar DCT Syrus Lynx 4G con ajustes de servidor Plaspy y ejemplo de script Syrus Desk
keywords:
  - DCT Syrus Lynx 4G configuración
  - Syrus Lynx 4G configuración Plaspy
  - Syrus Lynx 4G configuración de servidor
  - configuración software Syrus rastreo
  - configuración plataforma GPS Syrus
  - configuración tracker Plaspy
  - configuración rastreador GPS vehicular
  - configuración gestor de flotas rastreador
  - guía de configuración Syrus
  - ejemplo script Syrus Desk
---

# DCT - Syrus Lynx 4G: Configuración

Esta página describe el contexto público para usar el rastreador DCT Syrus Lynx 4G con Plaspy. Se enfoca en los ajustes de servidor prácticos, los requisitos típicos y un ejemplo de script para Syrus Desk que prepara el dispositivo para reportar al backend en la nube de Plaspy y habilitar seguimiento en tiempo real y alertas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; no obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ejemplo que sigue usa un fragmento de script SB de Syrus que puede cargarse con Syrus Desk e incluye marcadores para APN y el endpoint de servidor que Plaspy requiere.

## Resumen de la configuración

Preparar un Syrus Lynx 4G para su uso con Plaspy implica configurar el dispositivo para que alcance el endpoint AVL de Plaspy, establecer las credenciales APN necesarias y habilitar las señales de reporte que usted requiera para mapeo y alertas. El script de ejemplo incluido es un punto de partida que puede cargarse vía Syrus Desk y luego adaptar al APN y políticas de reporte que necesite.

- Apunte el dispositivo al endpoint de servidor de Plaspy para que GNSS y telemetría se reenvíen a Plaspy y se puedan monitorizar.  
- Configure el APN celular, usuario y contraseña según lo requiera su operador de SIM.  
- Habilite reportes periódicos por tiempo o por evento para que la plataforma reciba ubicaciones y actualizaciones de estado.  
- Guarde y aplique la configuración usando Syrus Desk o la herramienta del fabricante y verifique la conectividad del equipo en Plaspy.  
- Compruebe que eventos y telemetría aparecen en Plaspy para poder usar alertas y comandos remotos.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol for incoming device connections

## Requisitos típicos antes de la configuración

- Acceso al dispositivo y a la herramienta oficial de configuración DCT Syrus como Syrus Desk para cargar scripts o plantillas.  
- Tarjeta SIM activa con datos y los ajustes APN correctos del operador.  
- Dispositivo energizado e instalado o conectado a un banco de pruebas con alimentación estable durante la configuración.  
- IMEI del dispositivo y cualquier información de registro disponible para resolución de problemas y validación.  
- Conocimiento de la versión de firmware del equipo y de cualquier requisito de las herramientas del proveedor que afecte la carga de scripts.  
- Conectividad de red desde el dispositivo hacia Internet público para que alcance d.plaspy.com o la IP de respaldo.

## Cómo se conecta este rastreador a Plaspy

El Syrus Lynx 4G envía posición GNSS y telemetría a través de su enlace celular al endpoint y puerto compartidos del servidor de Plaspy para que la plataforma ingiera ubicación, eventos y actualizaciones de estado. Plaspy recibe el flujo del dispositivo y detecta el protocolo automáticamente para mapeo, alertas y acciones remotas.

- El dispositivo se configura para reenviar tráfico AVL a d.plaspy.com en el puerto 8888.  
- Plaspy acepta conexiones por UDP o TCP y detecta el protocolo del rastreador automáticamente.  
- Señales basadas en tiempo o en eventos desde el rastreador generan actualizaciones de posición y estado en Plaspy.  
- Condiciones de alarma como manipulación o remolque se reenvían a Plaspy para alertas inmediatas.  
- Una vez validado el reporte, Plaspy puede mostrar ubicación en vivo, recorridos históricos y disparar reglas para notificaciones o acciones remotas.

## Flujo de trabajo típico de configuración

1. Abra el método o software de configuración oficial del fabricante, por ejemplo Syrus Desk.  
2. Cree o edite un script SB de Syrus o una plantilla e incluya la dirección del servidor Plaspy d.plaspy.com o, si lo necesita para pruebas, la IP 54.85.159.138.  
3. Establezca el puerto de destino en 8888 y seleccione UDP o TCP si el dispositivo requiere selección explícita del transporte.  
4. Complete los marcadores de APN con el APN de su operador, nombre de usuario y contraseña si son necesarios.  
5. Aplique o guarde la configuración en el dispositivo usando Syrus Desk y asegúrese de que el archivo se cargue en el formato correcto.  
6. Reinicie el dispositivo si la documentación del fabricante o Syrus Desk indica que se requiere un reboot.  
7. Valide que el dispositivo reporte a Plaspy observando la telemetría y los datos de ubicación entrantes en su interfaz Plaspy.

## Ejemplo de comandos de configuración

Puede copiar y pegar el siguiente script en un archivo de texto nuevo, guardarlo con extensión .tmf y cargarlo con Syrus Desk. El ejemplo preserva el orden de comandos y usa marcadores para las credenciales APN. Los comentarios del script forman parte del ejemplo y describen cada bloque.

> Nota: la línea que apunta a Plaspy está explícitamente establecida en d.plaspy.com con el puerto 8888. Plaspy soporta UDP o TCP en este puerto y detectará el protocolo del rastreador automáticamente.

```text
#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
#configuring the APN
>SRFA{{apn}}<
>SRFI<
>SRFL{{apnu}}<
>SRFP{{apnp}}<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
#A Destination Address holding the server destination
>SDA4;P00<
#Time-only Time And Distance signal definition
>STD80300<
#Event triggered by T&D signal
>SED37NV4;TD8+<
#Input report event
>SED05NV4;IP3+<
#end
```

- {{apn}} — marcador para el nombre del APN del operador de su SIM.  
- {{apnu}} — marcador para el usuario del APN si su operador lo requiere.  
- {{apnp}} — marcador para la contraseña del APN si su operador lo requiere.  
- El comando >SRT;CONFIG< se incluye en el script para borrar configuraciones previas tal como indican los comentarios del ejemplo; trate las acciones de borrado como opcionales o iniciales únicamente cuando pretenda eliminar ajustes anteriores.

## Notas de configuración

- Syrus Desk es la herramienta recomendada del fabricante para cargar plantillas SB como el ejemplo .tmf anterior; siga las indicaciones de Syrus Desk para formato de archivo y pasos de subida.  
- El comportamiento y los comandos SB disponibles pueden variar según la versión de firmware y la revisión de hardware; siempre confirme la sintaxis de comandos con la documentación del firmware del dispositivo.  
- Elija UDP o TCP según las características de la red y las expectativas del servidor; Plaspy soporta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.  
- Tenga listas las credenciales APN y los detalles de aprovisionamiento de la SIM antes de aplicar la configuración; valores incorrectos de APN impedirán que el dispositivo se registre en la red.  
- En pruebas puede usar d.plaspy.com o la IP proporcionada para depuración, pero en producción es preferible usar el dominio para seguir el enrutamiento DNS estándar.

## Por qué usar Plaspy con esta configuración

Configurar el Syrus Lynx 4G para reportar a Plaspy ofrece a los operadores de flotas visibilidad centralizada de la ubicación de los vehículos, alertas y telemetría. Los ajustes de servidor compartidos de Plaspy simplifican la incorporación porque la plataforma utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente los protocolos de los rastreadores, reduciendo la personalización por equipo y acelerando despliegues a gran escala.

Para más detalles sobre las capacidades de Plaspy y explorar las funcionalidades de la plataforma, consulte https://www.plaspy.com. Para comandos específicos del dispositivo, notas de versiones de firmware y documentación de la herramienta Syrus Desk, verifique la información más reciente en el sitio del fabricante https://www.digitalcomtech.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
