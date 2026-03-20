---
slug: /supermate/d10_t/configuration
id: d10_t-configuration
sidebar_label: Configuration
title: Supermate - D10-T Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Supermate D10 T y conectarlo a Plaspy con servidores compartidos y pasos prácticos
keywords:
  - Configuración Supermate D10 T
  - Instalación Supermate D10 T
  - Configuración de servidor Supermate D10 T
  - Supermate D10 T Plaspy
  - Configuración de rastreo Supermate D10 T
  - Configuración rastreador GPS Supermate
  - Rastreo de vehículos Supermate D10 T
  - Configuración plataforma rastreadores Plaspy
  - Configuración plataforma GPS D10 T
  - Rastreo de flotas Supermate D10 T
---

# Supermate - D10-T Configuración

Esta página reúne la información pública y práctica necesaria para configurar el rastreador Supermate D10 T de manera que reporte ubicaciones y eventos a Plaspy. Encontrará aquí los valores de servidor compartido usados por Plaspy y el flujo típico de configuración para apuntar un D10 T al endpoint de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que emplee el proveedor. Use esta guía para conocer los valores que Plaspy requiere y el flujo habitual; siempre contraste con las instrucciones del fabricante para comandos y menús específicos del dispositivo.

## Visión general de la configuración

El objetivo es dejar el D10 T listo para comunicarse de forma confiable con la plataforma Plaspy y que el dispositivo sea visible en su cuenta. Los pasos que siguen son prácticos y se enfocan en los valores clave que debe aplicar en el equipo o en la herramienta de configuración del proveedor.

- Configure el dispositivo para que reporte al endpoint del servidor Plaspy y confirme el método de transporte si es necesario.
- Asegúrese de la conectividad celular y de cualquier APN o ajuste de red requerido para que el rastreador pueda acceder a Internet.
- Valide que el dispositivo esté enviando datos al servidor Plaspy y que la plataforma reciba y decodifique los mensajes.
- Guarde y aplique la configuración; reinicie el rastreador si el fabricante recomienda un reinicio para activar los cambios.
- Confirme la visibilidad en Plaspy revisando el dispositivo en la plataforma y observando las actualizaciones de ubicación recientes.

## Ajustes del servidor Plaspy

Aplique exactamente estos valores de servidor Plaspy al configurar el Supermate D10 T:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy usa el mismo puerto para todos los dispositivos soportados e intentará identificar el protocolo del rastreador automáticamente después de que el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Acceso físico al Supermate D10 T para ver el número de serie y aplicar cualquier ajuste por menú o SMS que requiera el fabricante.
- Una tarjeta SIM activa y un plan de datos compatible con el rastreador si se necesita conexión celular; verifique que la SIM esté provisionada para acceso a Internet.
- Acceso al método oficial de configuración de Supermate o al software del fabricante o proveedor.
- Batería cargada o fuente de alimentación estable para que el rastreador permanezca en línea durante la configuración y validación.
- Sus credenciales de cuenta Plaspy y los datos de registro del dispositivo para confirmar que el rastreador aparece en la plataforma una vez que comience a reportar.

## Cómo se conecta este rastreador a Plaspy

El D10 T envía sus actualizaciones de ubicación y estado al endpoint compartido de Plaspy en el dominio y puerto indicados. Plaspy detecta el protocolo entrante y decodifica los mensajes para que el dispositivo aparezca en su cuenta.

- El rastreador envía reportes periódicos de ubicación y mensajes de evento a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Si el dispositivo lo requiere, puede elegir UDP o TCP como transporte.
- Plaspy detecta automáticamente el protocolo usado por el rastreador cuando llegan los primeros mensajes.
- Una vez que el servidor acepta la conexión, Plaspy procesa los reportes para que usted pueda monitorear ubicaciones, movimientos y alertas en la plataforma.
- La validación consiste en confirmar la llegada de mensajes a Plaspy y observar el feed del dispositivo en su cuenta.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de Supermate proporcionado por el fabricante o el distribuidor.
2. En los ajustes del dispositivo, ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888.
4. Seleccione UDP o TCP si la configuración del dispositivo requiere elegir un protocolo de transporte.
5. Ingrese cualquier ajuste de red requerido, como el APN, cuando la herramienta del fabricante lo solicite, y luego aplique o guarde la configuración.
6. Reinicie el equipo si el fabricante recomienda un reinicio para activar los nuevos parámetros.
7. Valide que el dispositivo reporte a Plaspy comprobando la lista de dispositivos y los mensajes recientes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los comandos y las interfaces de configuración del Supermate D10 T varían según el firmware y la herramienta del proveedor. Dado que no se incluyen aquí los conjuntos de comandos específicos por modelo, siga la documentación del fabricante o el software de configuración para obtener el texto y la sintaxis exactos. Si dispone de comandos por SMS o consola de Supermate, aplique el dominio o la IP del servidor Plaspy y el puerto 8888 en el orden que indique el fabricante.

Si su proveedor o firmware ofrece comandos SMS, el patrón típico es:
- Use el comando del fabricante para establecer el dominio o la IP del servidor
- Use el comando del fabricante para definir el puerto
- Use el comando del fabricante para establecer el modo de transporte si es necesario
- Use el comando del fabricante para guardar y reiniciar

Conserve siempre los valores de marcador de posición exactamente como los proporciona el fabricante al sustituir APN o credenciales.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar los nombres exactos de los menús, la sintaxis de los comandos SMS y la ubicación de los ajustes del servidor en el software del proveedor; revise las notas de la versión del firmware antes de aplicar cambios.
- Algunas versiones de firmware requieren ingresar ya sea d.plaspy.com o la IP 54.85.159.138; ambas opciones se incluyen aquí y cualquiera puede ser aceptada por el equipo.
- Elija UDP o TCP según las opciones del dispositivo; funcionalmente Plaspy acepta ambos y detectará el protocolo automáticamente.
- Al configurar de forma remota, asegúrese de que el rastreador tenga una SIM operativa y cobertura de red para que los ajustes se apliquen y validen correctamente.
- Mantenga un registro de los números de serie y de los cambios de configuración para seguimiento de instalaciones y resolución de problemas futura.

## Por qué usar Plaspy con esta configuración

Conectar el Supermate D10 T a Plaspy proporciona visibilidad continua del estado y la ubicación de sus activos usando una sola configuración de servidor compartido. Los valores constantes de Plaspy simplifican el despliegue masivo y ayudan a que los equipos logren que los rastreadores reporten rápidamente a la plataforma para monitoreo y alertas.

Para saber más sobre Plaspy y cómo la plataforma gestiona conexiones de dispositivos y detección de protocolos visite https://www.plaspy.com. Para comandos, menús y detalles de firmware más actuales del Supermate D10 T, consulte la documentación del fabricante en http://www.gps-summit.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
