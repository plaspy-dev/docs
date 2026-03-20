---
slug: /cantrack/gf200ls/configuration
id: gf200ls-configuration
sidebar_label: Configuration
title: CanTrack - GF200LS Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para CanTrack GF200LS con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - Configuración CanTrack GF200LS
  - Configuración GF200LS Plaspy
  - Configuración servidor GF200LS
  - Configuración rastreador GPS GF200LS
  - Configuración rastreador Plaspy
  - Rastreador GPS para activos GF200LS
  - Rastreador GPS con imán GF200LS
  - Configuración modo de espera prolongado GF200LS
  - Configuración APN GF200LS
  - Configuración SMS GF200LS
---

# CanTrack - Configuración del GF200LS

Esta página describe el contexto público de configuración para usar el CanTrack GF200LS con la plataforma Plaspy. Resume los ajustes de servidor prácticos y el flujo típico de configuración para enviar datos de ubicación y eventos desde el GF200LS a Plaspy, aprovechando las funciones del equipo señaladas por el fabricante, como modos de espera prolongados, montaje con imán, alertas por sensor de luz y opciones de configuración por SMS o APN.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Las instrucciones exactas del lado del fabricante pueden variar según la revisión de firmware, el lote de hardware, el estilo de instalación y las herramientas del proveedor. Use las indicaciones aquí junto con la documentación del GF200LS para obtener instrucciones específicas y fiables del dispositivo.

## Resumen de la configuración

Este proceso prepara el GF200LS para reportar posición y eventos a Plaspy, de modo que los activos sean visibles en los paneles y aplicaciones móviles. La acción clave es indicar al equipo que reporte al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888 usando UDP o TCP, de forma que Plaspy pueda ingerir datos y detectar automáticamente el protocolo del dispositivo.

- Configure el servidor del equipo para apuntar a Plaspy usando la información de endpoint compartida.
- Ajuste el acceso de red, como APN o parámetros de la SIM, para que el GF200LS alcance Plaspy por GPRS o IP celular.
- Elija un modo de reporte que equilibre la vida útil de la batería y las necesidades de seguimiento, y guarde esos ajustes en el dispositivo.
- Valide la conectividad para que el equipo aparezca en Plaspy y envíe posiciones y notificaciones de manipulación.
- Use SMS o la herramienta del fabricante para actualizar servidor, APN y modo según sea necesario.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com como host principal para ingestión en Plaspy
- IP del servidor 54.85.159.138 como endpoint alterno para configuración por IP directa
- Puerto 8888 que es el puerto común que Plaspy usa para todos los dispositivos compatibles
- Soporte de transporte UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar reportes sin registro de protocolo por dispositivo

## Requisitos típicos antes de configurar

- Un GF200LS con alimentación y baterías instaladas, accesible para la configuración inicial
- Una tarjeta SIM y un plan de datos activo o conectividad GSM apropiada para el funcionamiento celular del equipo
- Datos del APN y, si procede, usuario y contraseña del APN proporcionados por el operador móvil
- Acceso al método oficial de configuración de CanTrack, como comandos SMS o las herramientas del proveedor
- Conocimiento de la contraseña de administrador del dispositivo si la configuración por SMS la requiere y el valor por defecto figura en la documentación del fabricante
- Un lugar de montaje seguro y una breve prueba in situ para confirmar la fijación GNSS y la conectividad celular

## Cómo se conecta este rastreador a Plaspy

El GF200LS envía sus reportes de ubicación y eventos al endpoint y puerto del servidor Plaspy para que la plataforma pueda mostrar posiciones en tiempo real, trayectorias históricas y alertas. El equipo usa la conexión de datos celular para abrir una sesión TCP o UDP hacia el servidor Plaspy y luego transmite reportes de posición, eventos de manipulación y mensajes de estado.

- Los reportes del dispositivo se dirigen a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy recibe las actualizaciones de posición y las asocia al registro del dispositivo mediante detección automática de protocolo
- Los modos de trabajo periódicos o en tiempo real controlan la frecuencia de reporte para equilibrar la batería y la actualidad de las actualizaciones
- Eventos de manipulación y de estado, como las alertas del sensor de luz, se envían como mensajes de evento a Plaspy
- Tras la configuración y con un enlace de datos operativo, los paneles y notificaciones de Plaspy reflejarán la actividad del dispositivo

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de CanTrack, como comandos SMS o el software del proveedor, según se describe en la documentación del GF200LS.
2. Introduzca el host del servidor de Plaspy configurando d.plaspy.com o ingresando la IP del servidor 54.85.159.138 en los ajustes del equipo.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo lo requiere.
5. Configure el APN y las credenciales del APN necesarias para su SIM para que el equipo pueda abrir un enlace GPRS/TCP IP.
6. Aplique o guarde la configuración y, si el equipo lo requiere, reinícielo para que los cambios de red surtan efecto.
7. Valide la conectividad confirmando que el dispositivo aparece en Plaspy y reporta posiciones o mensajes de estado.

## Comandos de ejemplo para configuración

El GF200LS soporta comandos de configuración por SMS y la contraseña SMS de administrador por defecto está documentada por el fabricante. La sintaxis exacta de los comandos y los parámetros disponibles varían según la versión de firmware y la herramienta. Como los conjuntos de comandos del fabricante pueden cambiar, consulte la lista de comandos SMS del CanTrack GF200LS o el manual de configuración para los mensajes precisos que establecen IP de servidor, dominio, puerto, APN y modos.

Si prefiere usar SMS para la configuración básica, los pasos públicos habituales son:
- Envíe los comandos SMS documentados por el proveedor o use la herramienta del proveedor para establecer el host del servidor en d.plaspy.com o 54.85.159.138
- Configure el puerto en 8888
- Ajuste los parámetros del APN
- Opcionalmente, reinicie el equipo o solicite un reporte de estado

Consulte la guía oficial de comandos del GF200LS de CanTrack para la sintaxis exacta de los SMS y los marcadores como APN, usuario APN y contraseña APN cuando sean necesarios.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y las funciones disponibles; siempre verifique el manual del GF200LS para comandos específicos de su firmware.
- Plaspy acepta tanto UDP como TCP en el puerto 8888; elija TCP o UDP según la preferencia del instalador y la compatibilidad del dispositivo.
- Los ajustes del servidor Plaspy usan el mismo puerto para todos los dispositivos y Plaspy detecta automáticamente el protocolo del rastreador para simplificar la incorporación.
- Si usa configuración por SMS, tenga a mano la contraseña de administrador del fabricante y confirme cualquier valor por defecto.
- Considere realizar una prueba breve en el sitio después de la instalación para confirmar la fijación GNSS, el registro celular y que los reportes llegan a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el GF200LS con Plaspy ofrece una solución práctica para el rastreo de activos a largo plazo cuando la baja necesidad de mantenimiento y la larga vida en espera son prioridades. Configurar el equipo para reportar a Plaspy proporciona a administradores de flotas y responsables de activos visibilidad centralizada, alertas por condiciones de manipulación y modos de reporte flexibles que se adaptan a las necesidades operativas.

Para saber más sobre Plaspy y cómo gestiona la ingestión de dispositivos y la visibilidad de la flota, visite https://www.plaspy.com. Para los comandos específicos más recientes del GF200LS, notas de firmware e instrucciones detalladas de configuración, verifique la información actual en el sitio del fabricante https://www.cantrackgps.com/. Los métodos de configuración, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que siempre confirme la guía más reciente de CanTrack antes de un despliegue masivo.
