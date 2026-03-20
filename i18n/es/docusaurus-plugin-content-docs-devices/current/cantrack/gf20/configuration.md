---
slug: /cantrack/gf20/configuration
id: gf20-configuration
sidebar_label: Configuration
title: CanTrack - GF20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CanTrack GF20 con los ajustes de servidor Plaspy y pasos prácticos para conectarlo a la plataforma
keywords:
  - Configuración CanTrack GF20
  - Instalación CanTrack GF20
  - Integración GF20 con Plaspy
  - Configuración rastreador GPS GF20
  - Configuración servidor GF20
  - Ajustes plataforma GF20
  - Guía instalación rastreador CanTrack
  - Instrucciones GPS GF20
  - seguimiento de vehículos GF20
  - seguimiento de activos GF20
---

# CanTrack - Configuración del GF20

Esta página describe el contexto público de configuración para usar el rastreador GPS magnético CanTrack GF20 con Plaspy. Se enfoca en los ajustes prácticos y no propietarios necesarios para apuntar el dispositivo al servidor de Plaspy y comprobar la conectividad, de modo que el equipo sea visible y pueda administrarse desde la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del vendedor, por lo que esta página explica los ajustes comunes del servidor y el flujo de trabajo recomendado, invitando a verificar en la documentación oficial de CanTrack.

## Resumen de configuración

El objetivo es preparar el GF20 para que envíe datos de ubicación y eventos a Plaspy y así el dispositivo aparezca en la plataforma para su monitoreo. Esto incluye ingresar el endpoint correcto del servidor, seleccionar el transporte si el equipo lo requiere y verificar los reportes en Plaspy.

- Configure el rastreador para que reporte al endpoint del servidor de Plaspy para que los datos de ubicación lleguen a la plataforma.
- Seleccione UDP o TCP en el dispositivo si el firmware exige una elección explícita.
- Establezca el puerto compartido de Plaspy para que el rastreador use el estándar de la plataforma y sea reconocido automáticamente.
- Valide que los reportes lleguen a Plaspy y confirme la visibilidad en la plataforma.
- Use las herramientas del fabricante o los comandos SMS que provea CanTrack para aplicar los ajustes.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

Estos son los valores públicos de servidor que debe usar al apuntar un rastreador a Plaspy. Ingrese ya sea el dominio d.plaspy.com o la IP 54.85.159.138 y configure el puerto en 8888. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte. Plaspy detectará automáticamente el protocolo entrante.

## Requisitos típicos antes de la configuración

- Una unidad GF20 cargada con batería suficiente o conectada a alimentación para la configuración inicial.
- Una SIM activa y válida en el dispositivo si el rastreador requiere reporte por SMS o celular.
- Acceso al método oficial de configuración de CanTrack, como comandos SMS o el software del proveedor para el GF20.
- Una cuenta o acceso a la plataforma Plaspy donde pueda verificar los reportes y la visibilidad del dispositivo.
- Capacidad para recibir respuestas SMS del dispositivo si va a usar comandos SMS para la configuración.
- Conocimientos básicos de los modos de funcionamiento del dispositivo y cómo cambiarlos en el GF20 según lo describe el fabricante.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GF20 envía su posición y datos de eventos al endpoint y puerto compartidos de Plaspy para que la plataforma procese y muestre la información de seguimiento. Plaspy interpreta el protocolo de forma automática y hace visible el dispositivo en la cuenta asociada al equipo o a la SIM.

- El rastreador envía reportes de ubicación a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Los reportes pueden enviarse por UDP o TCP según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes al equipo correcto.
- Informes de eventos como geocerca, batería baja o alertas por vibración se entregan a Plaspy cuando el dispositivo los envía.
- La visibilidad en la plataforma y el seguimiento en tiempo real aparecen después de que el dispositivo transmita correctamente al endpoint compartido de Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del CanTrack GF20 o al software del fabricante proporcionado, normalmente mediante comandos SMS o la utilidad del proveedor.
2. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del rastreador.
3. Configure el puerto del servidor en 8888 en la configuración del dispositivo.
4. Si el equipo requiere seleccionar el transporte, elija UDP o TCP según corresponda para su instalación.
5. Aplique o guarde los cambios de configuración mediante la herramienta del fabricante o enviando el comando SMS al dispositivo.
6. Reinicie o corte y restablezca la alimentación del GF20 si el firmware lo exige para aplicar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y la hora del último reporte en su cuenta Plaspy.

## Comandos de configuración de ejemplo

Los comandos SMS exactos o cadenas de configuración para el GF20 dependen del firmware de CanTrack y del conjunto de herramientas del vendedor. Dado que los juegos de comandos del fabricante varían, consulte el manual del CanTrack GF20 para la sintaxis exacta usada para establecer servidor, puerto y transporte. Los flujos típicos del fabricante permiten establecer servidor y puerto por SMS o por la app del proveedor, pero el formato de comandos difiere según el firmware.

Si dispone del conjunto oficial de comandos de CanTrack, utilice los comandos proporcionados por el fabricante para:
- establecer el host del servidor a d.plaspy.com o 54.85.159.138
- establecer el puerto del servidor a 8888
- configurar el transporte a UDP o TCP si es necesario

Consulte el manual del usuario del CanTrack GF20 para los comandos SMS o de software exactos y los marcadores permitidos para APN o credenciales si esos pasos son necesarios.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y los ajustes disponibles; siempre revise el manual del GF20 para las instrucciones vigentes.
- Algunos instaladores prefieren la configuración por SMS y otros usan el software del proveedor; siga el método provisto con su dispositivo.
- La elección entre UDP y TCP puede afectar el comportamiento en redes con cobertura deficiente; seleccione el transporte que mejor se ajuste a sus necesidades operativas y pruebe el comportamiento con Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que configurar el puerto 8888 es necesario para la detección automática correcta.
- Si el GF20 almacena datos cuando se pierde la señal GSM, verifique cómo se cargan los registros almacenados tras la restauración de la señal según la documentación del fabricante.

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack GF20 para apuntar a Plaspy ofrece una forma sencilla de centralizar reportes de ubicación, eventos y alarmas para el monitoreo de activos o el seguimiento temporal de vehículos. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad por dispositivo y le permiten enfocarse en el despliegue y la operación.

Para más información sobre Plaspy visite https://www.plaspy.com y consulte las referencias más recientes de instalación y comandos del CanTrack GF20 en https://www.cantrackgps.com/ para confirmar los métodos específicos de configuración del dispositivo y el comportamiento del firmware antes del despliegue.
