---
slug: /navis/ch_5703/configuration
id: ch_5703-configuration
sidebar_label: Configuration
title: Navis - CH -5703 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Navis CH -5703 y enviar datos de ubicación a Plaspy con ajustes de servidor compartido
keywords:
  - configuración Navis CH -5703
  - instalación Navis CH -5703
  - Navis CH -5703 Plaspy
  - configuración rastreador GPS Navis
  - configuración rastreo de embarcaciones
  - configuración receptor GNSS marino
  - configuración servidor CH -5703
  - ajustes servidor Plaspy
  - integración rastreador GPS
  - configuración monitoreo de buques
---

# Navis - CH -5703 Configuración

Esta página describe el contexto público de configuración para usar el Navis CH -5703 con Plaspy. Resume los ajustes prácticos del servidor y los pasos típicos necesarios para apuntar un CH -5703 a la plataforma Plaspy, de modo que el equipo pueda enviar datos de posición y mensajes al sistema de monitoreo. La información aquí se centra en patrones de configuración de acceso público más que en procedimientos propietarios del fabricante.

Plaspy utiliza un punto de acceso y puerto compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante para el CH -5703 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de Navis y las herramientas de configuración específicas del equipo.

## Resumen de configuración

El objetivo al configurar un Navis CH -5703 para Plaspy es garantizar que el equipo comunique de forma fiable datos de navegación y estado al punto de acceso de Plaspy, de modo que el dispositivo aparezca y reporte correctamente dentro de la plataforma. La configuración suele incluir el punto de conexión del servidor, el modo de transporte y las opciones de mensajería del dispositivo para que el CH -5703 envíe su salida de navegación y las actualizaciones de estado a Plaspy.

- Configure el dispositivo para que reporte al servidor de Plaspy y así la ubicación y los mensajes lleguen a la plataforma.
- Seleccione el modo de transporte apropiado en el equipo si el firmware requiere elegir entre TCP o UDP.
- Ingrese y guarde la información del servidor y del puerto en la utilidad de configuración del fabricante o en la interfaz del dispositivo.
- Verifique que el rastreador arranque correctamente y que tenga la conectividad necesaria para alcanzar d.plaspy.com.
- Confirme que el dispositivo aparece en Plaspy y que envía las actualizaciones de posición y mensajes esperadas.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor Plaspy al configurar el Navis CH -5703:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según los requisitos del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tome en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que el puerto 8888 es el valor universal que debe configurar en el rastreador.

## Requisitos previos

- Asegúrese de que el CH -5703 tenga alimentación estable y esté instalado conforme a las instrucciones de Navis.
- Tenga acceso al método o software de configuración oficial de Navis para el CH -5703.
- Confirme la conectividad de red desde la embarcación para que el dispositivo pueda alcanzar d.plaspy.com.
- Prepare cualquier identificador de dispositivo o credenciales que requieran las herramientas de Navis para editar los ajustes de red.
- Verifique que dispone de una cuenta o acceso en la plataforma Plaspy donde pueda validar la visibilidad y el reporte del dispositivo.
- Anote el número de serie o ID único del dispositivo para poder identificarlo en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el CH -5703 envía su salida de navegación, mensajes de eventos y datos de monitoreo al punto de acceso compartido de Plaspy y al puerto indicado. La plataforma recibe las conexiones entrantes e interpreta automáticamente el protocolo del rastreador para que los datos reportados sean visibles para los operadores y sistemas de monitoreo.

- La unidad reporta posición e información temporal al endpoint de Plaspy en d.plaspy.com usando el puerto 8888.
- La selección de transporte en el dispositivo (UDP o TCP) se usa según lo requiera el firmware; Plaspy acepta ambos.
- Mensajes cortos o codificados generados por el CH -5703 se envían al endpoint del centro de control y se muestran en Plaspy cuando están soportados.
- Las actualizaciones de estado del dispositivo y las alarmas se reenvían a Plaspy para monitoreo operativo y registro.
- Plaspy asocia los reportes entrantes con el registro correcto del dispositivo y pone la telemetría a disposición en la plataforma.

## Flujo habitual de configuración

1. Acceda al método o software de configuración oficial de Navis apropiado para el CH -5703.
2. Localice la sección de ajustes de red o servidor en la interfaz del dispositivo.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
4. Establezca el puerto 8888 como el puerto de destino usado por Plaspy.
5. Elija el transporte UDP o TCP si el equipo requiere una selección del tipo de conexión.
6. Aplique o guarde los cambios de configuración en la herramienta Navis o en el menú del dispositivo.
7. Reinicie el equipo si el fabricante lo exige para activar los nuevos ajustes de red.
8. Valide que el dispositivo reporte correctamente a Plaspy y que la posición y los mensajes aparezcan en la plataforma.

## Ejemplos de comandos de configuración

El método de configuración de Navis para el CH -5703 puede variar según la herramienta de software, el firmware y la instalación. Debido a que los comandos de Navis difieren entre herramientas y versiones de firmware, no se proporciona un conjunto universal de comandos aquí. Use la utilidad de configuración oficial de Navis o la interfaz suministrada por el fabricante para ingresar d.plaspy.com o 54.85.159.138 y el puerto 8888, y seleccione UDP o TCP si se le solicita.

Si dispone de una lista específica de comandos Navis en el manual del dispositivo o en la herramienta de configuración, siga esos comandos en el orden que indique Navis y luego verifique la conectividad con Plaspy.

## Notas de configuración

- Las diferencias de firmware pueden cambiar dónde y cómo se ingresan los ajustes de servidor y transporte; consulte el manual del dispositivo para la revisión de firmware de su CH -5703.
- La elección entre TCP y UDP depende del comportamiento del firmware y de las condiciones de la red; Plaspy acepta ambos.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que mantener el puerto consistente simplifica despliegues con múltiples equipos.
- El CH -5703 admite la transmisión de mensajes cortos y codificados al centro de control; confirme cómo se habilitan estos tipos de mensajes en la herramienta de configuración de Navis.
- Siempre haga una copia de seguridad de los ajustes existentes antes de realizar cambios y anote cualquier paso específico del proveedor necesario para confirmar los cambios de configuración.

## Por qué usar Plaspy con esta configuración

Apuntar un Navis CH -5703 a Plaspy ofrece un camino sencillo para el monitoreo de embarcaciones y la supervisión operativa. Para organizaciones que dependen de datos GNSS precisos y de mensajería a bordo, configurar el CH -5703 para reportar a Plaspy proporciona visibilidad centralizada de la posición, el movimiento y los mensajes del centro de control a través de una flota de buques.

Para saber más sobre Plaspy y cómo soporta la integración de dispositivos y el monitoreo de flotas visite https://www.plaspy.com. Por favor verifique los métodos específicos de configuración del dispositivo y el comportamiento del firmware con el fabricante en http://navis.ru/ ya que los procedimientos del proveedor y las características del firmware pueden cambiar con el tiempo.
