---
slug: /careu/ua1_p/configuration
id: ua1_p-configuration
sidebar_label: Configuration
title: CAREU - UA1-P Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador CAREU UA1-P en Plaspy con los ajustes de servidor y el flujo de instalación
keywords:
  - configuración CAREU UA1-P
  - instalación CAREU UA1-P
  - CAREU UA1-P Plaspy
  - guía de configuración UA1-P
  - configuración de rastreador CAREU
  - configuración de rastreadores Plaspy
  - configuración de rastreador GPS
  - configuración de rastreador de activos
  - configuración de rastreador de paquetes
  - integración plataforma GPS
---

# Configuración del CAREU - UA1-P

Esta página describe el contexto público de configuración para usar el rastreador GPS CAREU UA1-P con la plataforma Plaspy. Resume los valores de servidor prácticos y el flujo de trabajo de instalación que usted empleará al integrar dispositivos UA1-P en Plaspy, y está dirigida a instaladores, integradores y usuarios técnicos que preparan dispositivos para seguimiento en la nube e ingestión de telemetría.

Plaspy utiliza un endpoint y puerto compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos del fabricante para configurar el UA1-P pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; considere esta guía como la parte pública enfocada a Plaspy dentro de un proceso de configuración completo y verifique acciones específicas del dispositivo con la documentación oficial del fabricante.

## Resumen de configuración

El objetivo es dejar el UA1-P listo para que informe de forma confiable ubicación y telemetría ambiental a Plaspy. Ese proceso normalmente implica apuntar el rastreador al servidor de Plaspy, seleccionar el transporte adecuado, guardar parámetros y confirmar que el dispositivo reporta correctamente a la plataforma.

- Configure los ajustes de red y la dirección del servidor para que el UA1-P alcance el endpoint de Plaspy.
- Seleccione el protocolo de transporte que soporte el dispositivo y confirme que esté habilitado.
- Verifique la conectividad celular, el estado de batería y las fijaciones GNSS para que el rastreador pueda generar reportes válidos.
- Guarde y aplique los parámetros, y reinicie el dispositivo si es necesario para aplicar cambios de red y servidor.
- Confirme que el UA1-P aparece en Plaspy y que los mensajes de telemetría y ubicación llegan como se espera.

## Ajustes del servidor Plaspy

Al configurar el CAREU UA1-P para Plaspy, utilice exactamente los siguientes ajustes públicos de servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device as required
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que el valor de puerto 8888 es el puerto común que utilizará entre distintos tipos de dispositivo.

## Requisitos típicos antes de la instalación

- Confirme que el UA1-P tenga la batería cargada y esté alimentado o conectado según la guía del fabricante.
- Asegúrese de que la SIM instalada y la suscripción celular ofrezcan el acceso de red 4G o 2G requerido por la variante del dispositivo.
- Tenga acceso al método oficial de configuración de CAREU, como la app de configuración por Bluetooth o el software del proveedor.
- Disponer de vista despejada del cielo o una fijación GNSS válida para la adquisición de posición inicial durante las pruebas.
- Conozca el IMEI o identificador único del dispositivo para poder emparejar el equipo físico con las entradas en Plaspy.
- Acceso administrativo a la cuenta Plaspy o rol de aprovisionador para validar que el dispositivo aparece tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El UA1-P se configura para enviar su ubicación y telemetría de sensores al cloud de Plaspy apuntando el dispositivo al endpoint y puerto compartidos de Plaspy. Una vez configurado, Plaspy ingiere los mensajes del UA1-P y ofrece visualización, alertas y datos históricos para el seguimiento de activos.

- El dispositivo reporta fijaciones GNSS y lecturas de sensores ambientales al endpoint de Plaspy d.plaspy.com usando el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma reconocerá los mensajes del UA1-P cuando lleguen al servidor.
- Confirme el reporte comprobando que el dispositivo aparece en Plaspy y que los canales de telemetría esperados se están llenando.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, no necesita valores de puerto específicos por dispositivo más allá de 8888.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración CAREU, como la app Bluetooth local o la herramienta de PC del proveedor suministrada por el fabricante.
2. En los ajustes de red o servidor introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Ajuste el puerto del servidor a 8888 como el puerto del servidor del dispositivo.
4. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP de acuerdo con sus necesidades de instalación.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que los parámetros se han escrito en el equipo.
6. Reinicie el UA1-P si la documentación del fabricante exige un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporta a Plaspy revisando la lista de dispositivos y la telemetría en Plaspy y confirmando que llegan las actualizaciones de ubicación.

## Ejemplos de comandos de configuración

El CAREU UA1-P soporta configuración local vía Bluetooth y herramientas del proveedor, y los comandos exactos o los campos de la interfaz varían según el firmware del fabricante y la herramienta que utilice. Debido a las diferencias entre herramientas y versiones de firmware, aquí no se proporciona la sintaxis precisa ni el formato SMS/comando. Al configurar el UA1-P deberá ingresar la dirección del servidor Plaspy (d.plaspy.com o 54.85.159.138), el puerto 8888 y seleccionar UDP o TCP en la interfaz de configuración suministrada por CAREU.

Si dispone de una lista de comandos del proveedor, use esos comandos para establecer primero la dirección del servidor y el puerto, luego confirme el transporte y guarde. El orden de operaciones en la herramienta del proveedor suele reflejar el flujo mostrado arriba.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales del dispositivo pueden cambiar las opciones disponibles de configuración y los nombres exactos de los campos en la herramienta del fabricante.
- Use UDP cuando prefiera menor sobrecarga y una entrega ligeramente más rápida, o TCP cuando necesite entrega orientada a conexión y retransmisión; el UA1-P permite seleccionar cualquiera de los dos transportes.
- La configuración local por Bluetooth es una herramienta de campo habitual para el UA1-P y resulta útil para actualizaciones de parámetros sin abrir la carcasa.
- La configuración remota de parámetros y las actualizaciones de firmware vía FTP son compatibles en la familia de dispositivos en general, pero verifique el flujo exacto de actualización remota para su revisión de firmware.
- Siempre verifique el IMEI o número de serie del dispositivo al emparejar dispositivos con entradas en Plaspy para evitar asignaciones incorrectas.

## Por qué usar Plaspy con esta configuración

Utilizar el CAREU UA1-P con Plaspy ofrece a equipos de logística y gestión de activos una forma consistente de recopilar telemetría de ubicación y ambiental para paquetes y bienes valiosos. El diseño compacto y robusto del UA1-P, su capacidad de sensado ambiental y su batería recargable lo hacen adecuado para envíos rastreados, mientras que Plaspy proporciona visibilidad centralizada, alertas y reportes históricos para los flujos operativos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles de configuración específicos del dispositivo y las notas de firmware más recientes en el sitio del fabricante https://www.systech-iot.com/. Los pasos de configuración del fabricante, el comportamiento de firmware y las interfaces del dispositivo pueden cambiar con el tiempo, así que verifique las instrucciones y la sintaxis de comandos más actuales con la documentación oficial del fabricante.
