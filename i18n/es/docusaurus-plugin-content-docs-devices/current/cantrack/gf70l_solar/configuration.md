---
slug: /cantrack/gf70l_solar/configuration
id: gf70l_solar-configuration
sidebar_label: Configuration
title: CanTrack - GF70L-Solar Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack GF70L-Solar para Plaspy, con ajustes de servidor y flujo práctico de instalación
keywords:
  - Configuración CanTrack GF70L-Solar
  - Configuración GF70L-Solar Plaspy
  - Configuración rastreador de activos CanTrack
  - Ajustes de servidor GF70L-Solar
  - Configuración GPS GF70L-Solar
  - Configuración de dispositivo Plaspy
  - Integración rastreador GPS Plaspy
  - Configuración de seguimiento GF70L-Solar
  - Configuración plataforma GPS CanTrack
  - Compatibilidad rastreador de activos Plaspy
---

# CanTrack - Configuración GF70L-Solar

Esta página documenta el contexto público de configuración para usar el rastreador CanTrack GF70L-Solar con la plataforma Plaspy. Se centra en el endpoint del servidor y en el flujo práctico de instalación que permiten al GF70L-Solar subir posiciones y alarmas a Plaspy para su monitoreo y gestión de activos. El contenido está pensado para instaladores técnicos y equipos de TI que necesiten preparar el dispositivo y verificar la conectividad con Plaspy usando información pública de configuración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Los pasos exactos del fabricante para configurar el GF70L-Solar pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del distribuidor, por lo que esta página se concentra en los valores del lado de Plaspy y en las acciones prácticas más comunes para aplicar dichos valores mediante los métodos oficiales de CanTrack.

## Resumen de la configuración

Configurar un GF70L-Solar para Plaspy implica apuntar el dispositivo a los endpoints de servidor de Plaspy, confirmar los ajustes de transporte y validar que los mensajes de ubicación y alarma sean visibles en la plataforma. El proceso prepara el rastreador para cargas fiables de posición y garantiza que Plaspy reciba la telemetría necesaria para monitoreo en tiempo real, alertas e informes históricos.

- Asegúrese de que el rastreador tenga una fuente de energía adecuada y conectividad celular activa para poder enviar datos a Plaspy.
- Ingrese la dirección y puerto del servidor Plaspy en el dispositivo usando el método de configuración del fabricante.
- Seleccione la opción de transporte (UDP o TCP) si fuera necesario y guarde la configuración en el rastreador.
- Verifique que el dispositivo alcance Plaspy y aparezca en la plataforma con actualizaciones de ubicación y eventos de alarma correctos.
- Ajuste los modos de reporte en el dispositivo para balancear la duración de la batería con la frecuencia de actualización según las necesidades de rastreo de activos.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el GF70L-Solar. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecte.

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transportes: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Un dispositivo CanTrack GF70L-Solar con batería cargada y, si aplica, exposición solar adecuada.
- Una tarjeta SIM activa con un plan de datos aprovisionado para el dispositivo y los detalles del APN si el operador lo requiere.
- Acceso al método oficial de configuración de CanTrack para el GF70L-Solar, como comandos SMS o la herramienta de configuración del proveedor.
- Una cuenta en Plaspy y la capacidad de registrar o identificar el dispositivo en la plataforma una vez que comience a reportar.
- Condiciones básicas de prueba que incluyan una vista despejada del cielo para la adquisición GNSS y un entorno de prueba para validar la conectividad.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para apuntar a Plaspy, el GF70L-Solar envía posiciones GPS y eventos de alarma al endpoint compartido del servidor Plaspy y al puerto indicado. Plaspy recibe los datos, reconoce automáticamente el protocolo del dispositivo y presenta flujos de posiciones y eventos en la plataforma para monitoreo y alertas.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 mediante el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP según los ajustes del fabricante y las condiciones de la red.
- Las actualizaciones de posición, eventos de movimiento y alarmas configuradas se suben a Plaspy para visibilidad en tiempo real.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los datos entrantes al tipo de dispositivo y manejadores de eventos correctos.
- Una vez que reporta, el dispositivo es visible en los paneles de Plaspy para monitoreo operativo y flujos de gestión de incidentes.

## Flujo común de configuración

Siga estos pasos prácticos y públicos al configurar un GF70L-Solar para integrarlo con Plaspy. Los nombres exactos de menús y el formato de comandos dependen del firmware de CanTrack y del canal de configuración seleccionado.

1. Acceda al método o software oficial de configuración de CanTrack para el GF70L-Solar, por ejemplo la interfaz de comandos SMS o la herramienta de configuración del proveedor.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de dirección IP o dirección central del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto utilizado por Plaspy para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere especificarlo.
5. Ingrese los detalles del APN u otros ajustes del operador según lo requiera la SIM instalada y guarde esos parámetros.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante recomienda hacerlo.
7. Verifique que el dispositivo reporta a Plaspy consultando la lista de dispositivos y las actualizaciones en vivo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El GF70L-Solar se configura normalmente usando comandos SMS de CanTrack o la herramienta de configuración del fabricante. Las cadenas de comando y la sintaxis exacta varían según la versión de firmware y la variante regional. Dado que los comandos del fabricante no se incluyen en este resumen público, consulte el conjunto de comandos oficial de CanTrack o la documentación de su proveedor para los formatos SMS precisos y ejemplos.

Al usar SMS o una herramienta de configuración, los valores públicos clave a establecer son el dominio o la IP del servidor d.plaspy.com o 54.85.159.138 y el puerto 8888, además de seleccionar UDP o TCP según corresponda. Tras aplicar estos valores, confirme que el dispositivo puede alcanzar el endpoint de Plaspy y que Plaspy detecta automáticamente el protocolo del rastreador.

## Notas de configuración

- Las variantes de firmware y de hardware regional pueden cambiar la sintaxis de los comandos y las opciones de menú disponibles. Verifique los comandos correctos para su revisión del dispositivo en la guía oficial de CanTrack.
- Elegir UDP o TCP puede afectar la fiabilidad y el comportamiento en la red. Seleccione el transporte que soporte su firmware y pruebe la conectividad hacia Plaspy.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y realiza detección automática de protocolos, por lo que la configuración crítica es la dirección correcta del servidor y la selección del transporte.
- Si configura mediante SMS, permita tiempo para las respuestas de confirmación de los comandos y asegúrese de que el dispositivo envíe mensajes de éxito según el comportamiento documentado por CanTrack.
- Pruebe un dispositivo en un entorno controlado antes de un despliegue masivo para confirmar que los intervalos de reporte y el comportamiento de las alarmas cumplen con los requisitos operativos.

## Por qué usar Plaspy con esta configuración

Usar el GF70L-Solar con Plaspy ofrece una solución práctica para obtener visibilidad de activos a largo plazo, combinando la autonomía extendida por panel solar y el reporte basado en movimiento con un monitoreo centralizado. Apuntar el rastreador al endpoint y puerto de Plaspy permite la ingesta automática de posiciones y alarmas, de modo que los equipos operativos puedan recibir alertas, ver ubicaciones en vivo y analizar movimientos históricos para recuperación y gestión de activos.

Para obtener más información sobre Plaspy y cómo puede ingerir datos del GF70L-Solar para flujos de trabajo de gestión de flotas y recuperación de activos visite https://www.plaspy.com. Para los comandos específicos más actuales del dispositivo, notas de firmware y detalles de configuración verifique la información en el sitio del fabricante https://www.cantrackgps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
