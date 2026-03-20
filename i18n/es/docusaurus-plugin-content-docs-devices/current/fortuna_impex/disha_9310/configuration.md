---
slug: /fortuna_impex/disha_9310/configuration
id: disha_9310-configuration
sidebar_label: Configuration
title: Fortuna Impex - Disha 9310 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Fortuna Impex Disha 9310 con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - Configuración Fortuna Impex Disha 9310
  - Configuración Disha 9310
  - Configuración Plaspy Disha 9310
  - Configuración rastreador GPS Disha 9310
  - Configuración servidor Disha 9310
  - Configuración seguimiento Fortuna Disha 9310
  - Configuración plataforma Disha 9310
  - Configuración seguimiento vehicular Disha 9310
  - Configuración rastreador GPS Fortuna Impex
  - Guía instalación Disha 9310
---

# Fortuna Impex - Disha 9310: Configuración

Esta página describe el contexto público de configuración para usar el rastreador Fortuna Impex Disha 9310 con Plaspy. Resume los ajustes de servidor públicos y los pasos prácticos necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda enviar ubicaciones, eventos y alertas a la plataforma. La información aquí emplea los datos públicos de configuración de Plaspy y la descripción general del dispositivo Disha 9310.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Siga las indicaciones a continuación para preparar el dispositivo para comunicarse con Plaspy y consulte la documentación de Fortuna Impex para comandos específicos y utilidades del proveedor.

## Resumen de la configuración

Preparar el Disha 9310 para Plaspy implica configurar el dispositivo para que reporte al punto final del servidor de Plaspy y verificar la conectividad para que el rastreador aparezca en la plataforma. El objetivo es asegurar que el dispositivo pueda enviar actualizaciones de posición, alertas y eventos de forma confiable usando los ajustes estándar de servidor de Plaspy.

- Configure la dirección del servidor del dispositivo al endpoint de Plaspy para que los informes lleguen a la plataforma.
- Establezca el transporte de comunicación en UDP o TCP en el puerto de Plaspy que se usa para todos los dispositivos.
- Valide la conectividad de datos móviles y cualquier configuración APN requerida por la SIM instalada.
- Aplique y guarde los ajustes mediante el método de configuración de Fortuna Impex y reinicie el rastreador si así lo solicita.
- Confirme que el dispositivo sea visible y esté reportando en Plaspy tras completar la configuración.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el Disha 9310:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta al endpoint configurado.

## Requisitos típicos antes de la configuración

- Confirme que el Disha 9310 esté alimentado e instalado según las instrucciones del fabricante, con visibilidad adecuada de la antena GPS.
- Asegúrese de que haya una tarjeta SIM válida con datos móviles activos y la información APN necesaria en el dispositivo.
- Tenga acceso al método de configuración oficial de Fortuna Impex o al software para el Disha 9310.
- Reúna identificadores del dispositivo como IMEI o ID necesarios para el registro o verificación en Plaspy.
- Prepárese para aplicar ajustes y reiniciar el rastreador si el proceso de configuración o el firmware lo requiere.
- Verifique el acceso a la documentación de soporte de Plaspy o con el responsable de su cuenta Plaspy para confirmar la visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El Disha 9310 está diseñado para enviar actualizaciones periódicas de posición y mensajes de eventos al endpoint compartido de Plaspy. Una vez que el dispositivo esté apuntando al servidor de Plaspy y el transporte y puerto estén configurados correctamente, Plaspy detectará e interpretará automáticamente el protocolo del rastreador.

- Los reportes del dispositivo se dirigen a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El rastreador puede configurarse para usar UDP o TCP según el firmware o la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos, por lo que no es necesario seleccionar el protocolo manualmente en la plataforma.
- Las posiciones regulares, alertas y mensajes de eventos serán visibles en Plaspy una vez establecida la comunicación.
- El monitoreo en tiempo real y el seguimiento histórico están disponibles en Plaspy después de que el dispositivo se registre correctamente y envíe sus primeros mensajes.

## Flujo de trabajo de configuración habitual

1. Acceda al método de configuración oficial de Fortuna Impex o al software del Disha 9310 proporcionado por el proveedor.
2. En los ajustes del servidor del dispositivo ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su red o la preferencia del instalador.
5. Aplique o guarde la configuración en la herramienta del dispositivo y siga cualquier indicación para confirmar los cambios.
6. Reinicie el equipo si las instrucciones del fabricante exigen un reinicio para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando el estado en la plataforma o confirmando la llegada de mensajes con el responsable de su cuenta Plaspy.

## Ejemplos de comandos de configuración

Las herramientas y el firmware del fabricante pueden diferir, por lo que la sintaxis exacta de los comandos puede variar. Como los comandos de configuración del fabricante no se incluyen aquí, utilice la utilidad de configuración oficial de Fortuna Impex o la lista de comandos SMS del proveedor para obtener los comandos precisos. Las acciones públicas importantes son establecer el servidor en d.plaspy.com o 54.85.159.138, fijar el puerto en 8888 y escoger UDP o TCP si es necesario.

Si dispone de una lista de comandos de Fortuna Impex, siga el mismo orden lógico al enviar comandos:

- set server to d.plaspy.com or 54.85.159.138
- set port to 8888
- set transport to UDP or TCP
- save and reboot the device if required

Conserve cualquier marcador de posición que indique el fabricante, como valores APN, al introducir la configuración de datos móviles. Consulte la documentación de Fortuna Impex para la sintaxis exacta de comandos o patrones de SMS.

## Notas de configuración

- El firmware y las interfaces de configuración pueden variar entre lotes de producción y revisiones de firmware; confirme los comandos exactos en la documentación del fabricante.
- La elección entre UDP o TCP puede afectar la semántica de entrega y los requisitos de firewall. Pruebe ambas opciones si observa comportamientos distintos en su red.
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, por lo que confirme que las conexiones salientes desde la red del dispositivo estén permitidas a ese puerto.
- El Disha 9310 incluye antenas GPS y GPRS integradas, lo que simplifica la instalación, pero siga las recomendaciones de montaje para garantizar la visibilidad del GPS.
- Mantenga un registro del IMEI del dispositivo o identificador y de cualquier contraseña administrativa utilizada durante la configuración para la gestión y solución de problemas futura.

## Por qué usar Plaspy con esta configuración

Usar el Fortuna Impex Disha 9310 con Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad en tiempo real y histórica, alertas de eventos y monitoreo centralizado sin gestionar múltiples endpoints de servidor. Apuntar el dispositivo a Plaspy con los ajustes públicos indicados arriba permite que el rastreador transmita datos de posición y eventos a una plataforma única donde los operadores de flotas pueden supervisar movimientos de activos y recibir notificaciones.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Verifique los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante con Fortuna Impex en http://fortunaindia.com/ porque las instrucciones del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
