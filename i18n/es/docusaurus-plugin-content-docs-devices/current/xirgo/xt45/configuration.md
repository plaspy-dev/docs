---
slug: /xirgo/xt45/configuration
id: xt45-configuration
sidebar_label: Configuration
title: Xirgo - XT45 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Xirgo XT45 y enviarlo a Plaspy con ejemplos prácticos de servidor y comandos SMS
keywords:
  - configuración Xirgo XT45
  - configuración XT45 Plaspy
  - configuración rastreador Xirgo
  - ajustes servidor XT45
  - configuración GPS Xirgo XT45
  - configuración software de rastreo XT45
  - configuración plataforma GPS Xirgo XT45
  - configuración SMS XT45
  - configuración dispositivo Plaspy
  - configuración seguimiento de flotas XT45
---

# Xirgo - Configuración del XT45

Esta página describe el contexto público de configuración para usar el rastreador Xirgo XT45 con Plaspy. Explica los valores públicos del servidor de Plaspy a los que debe apuntar el equipo, el flujo de trabajo típico de configuración y los comandos SMS proporcionados por el fabricante que se utilizan con frecuencia para conectar el XT45 al servicio de Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Esta guía se enfoca en los pasos prácticos y públicos para preparar el XT45 para comunicarse con Plaspy y señala cuándo debe consultar la documentación de Xirgo para detalles específicos del dispositivo.

## Visión general de la configuración

Configurar el XT45 para Plaspy prepara el dispositivo para enviar ubicaciones y telemetría supervisora a una plataforma centralizada, de modo que los operadores puedan ver posiciones en tiempo real, recibir alertas y generar informes. El proceso normalmente implica configurar el APN y parámetros de datos móviles, apuntar el dispositivo al endpoint de Plaspy y validar que el dispositivo reporte correctamente en la plataforma.

- Configure el APN del operador para que el dispositivo establezca conectividad de datos celulares.
- Configure el servidor GPRS del equipo hacia el endpoint y puerto de Plaspy para dirigir la telemetría a la plataforma.
- Seleccione el modo de transporte (UDP o TCP) si es necesario y guarde la configuración en el dispositivo.
- Valide la conectividad y el envío de datos en Plaspy para confirmar que la telemetría está llegando.
- Use SMS o la herramienta del fabricante según corresponda para aplicar ajustes cuando no haya acceso por cableado o USB directo.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Estos valores son los ajustes públicos del endpoint de Plaspy que debe usar al configurar el XT45. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del rastreador automáticamente.

## Requisitos típicos antes de la configuración

- Una unidad XT45 con alimentación y accesible, con su módem celular habilitado.
- Una tarjeta SIM activa provisionada para datos con el APN correcto del operador móvil.
- Acceso al método de configuración soportado por la unidad, como comandos SMS o la herramienta oficial de Xirgo.
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles para ingresar en el dispositivo.
- Capacidad para enviar comandos SMS al equipo si se utiliza la configuración por SMS.
- Un plan para validar los reportes en Plaspy una vez aplicada la configuración.

## Cómo se conecta este rastreador a Plaspy

El XT45 se configura para reportar fijaciones de posición y telemetría supervisora al endpoint y puerto compartidos de Plaspy. Una vez aplicados el APN y los ajustes de servidor correctos, el dispositivo usa su enlace celular integrado para abrir una conexión con Plaspy y enviar telemetría para mapeo en vivo, alertas e informes históricos.

- El equipo envía mensajes de posición GPS y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede elegirse como UDP o TCP; el XT45 puede configurarse para usar cualquiera de los dos según sea necesario.
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere los mensajes entrantes.
- Los datos que llegan a Plaspy se muestran en mapas en vivo y en las herramientas de informes para monitoreo y alertas.
- Las entradas y salidas supervisoras del XT45 pueden generar eventos que aparecen en Plaspy para flujos de trabajo como inmovilización o monitoreo de encendido.

## Flujo de trabajo de configuración común

1. Acceda al método de configuración oficial de Xirgo apropiado para su dispositivo y despliegue, como comandos SMS o el software del fabricante.
2. Configure los valores de APN del dispositivo para su operador móvil para habilitar datos celulares.
3. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del equipo.
4. Establezca el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
5. Si el dispositivo requiere selección de transporte, elija UDP o TCP y guarde la configuración.
6. Aplique o guarde la configuración en el dispositivo y, si es necesario, reinicie la unidad para activar los nuevos ajustes.
7. Valide que el XT45 reporte a Plaspy revisando el estado del dispositivo y la telemetría reciente en la plataforma Plaspy.

## Comandos de ejemplo para configuración

Para configurar el rastreador, envíe los siguientes comandos por SMS en el orden mostrado.

1. Configure el APN del operador (reemplace los valores entre llaves por los de su operador):
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- {{apn}} = Nombre del punto de acceso (APN) suministrado por el operador móvil.
- {{apnu}} = Nombre de usuario del APN si el operador lo requiere; de lo contrario, deje el campo vacío o use la convención de campo vacío del dispositivo.
- {{apnp}} = Contraseña del APN si el operador lo requiere; de lo contrario, deje el campo vacío o use la convención de campo vacío del dispositivo.

2. Configure el servidor GPRS para apuntar a Plaspy (el puerto y la IP son explícitos):
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- Este comando configura el servidor GPRS para usar el puerto 8888 y la IP 54.85.159.138, que corresponden al endpoint de Plaspy. Los parámetros restantes son flags específicos del firmware del XT45; consulte la documentación de Xirgo para conocer el significado de esos flags si necesita ajustarlos.

Si en su despliegue prefiere usar el dominio d.plaspy.com en lugar de la forma IP, ingrese d.plaspy.com donde la herramienta de configuración del dispositivo o el comando SMS acepte un hostname. Siempre mantenga el orden de comandos al aplicar estas configuraciones y confirme con un reinicio si el equipo lo requiere.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o el orden de parámetros; verifique siempre el formato de comando según la versión de firmware de su XT45.
- El XT45 admite la configuración de la dirección del servidor por SMS como se muestra, pero las herramientas del fabricante o el software de configuración local pueden ofrecer los mismos ajustes vía USB o provisión OTA.
- Al elegir el transporte, considere la fiabilidad de la red y el comportamiento de los paquetes para su operador; el dispositivo admite UDP o TCP en el puerto 8888 y Plaspy aceptará cualquiera de los dos.
- Si no se requieren credenciales de APN, utilice la convención del dispositivo para campos vacíos de usuario y contraseña (consulte la documentación de Xirgo).
- Reiniciar el dispositivo tras aplicar los ajustes suele ser necesario para asegurar que los nuevos valores de servidor y APN entren en vigencia.

## Por qué usar Plaspy con esta configuración

Configurar el XT45 para reportar a Plaspy brinda a las organizaciones un rastreo duradero y fiable para activos que experimentan cortes de energía intermitentes o ambientes exigentes. Las entradas supervisadas del XT45 y su diseño robusto, combinados con la ingestión centralizada y la detección automática de protocolos de Plaspy, ayudan a entregar telemetría de ubicación y estado útil para monitoreo, alertas y análisis históricos.

To learn more about Plaspy and how it works with compatible trackers like the XT45 visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details consult the official Xirgo documentation at https://xirgo.com/ to verify commands and parameters for your exact hardware and firmware revision.
