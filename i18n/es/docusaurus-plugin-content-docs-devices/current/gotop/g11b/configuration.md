---
slug: /gotop/g11b/configuration
id: g11b-configuration
sidebar_label: Configuration
title: GOTOP - G11B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GOTOP G11B con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - configuración GOTOP G11B
  - instalación GOTOP G11B
  - GOTOP G11B Plaspy
  - configuración rastreador GOTOP
  - configuración GPS G11B
  - configuración rastreador para mascotas
  - configuración rastreador animal
  - ajustes servidor GOTOP G11B
  - configuración dispositivo Plaspy
  - integración rastreador GPS
---

# GOTOP - Configuración del G11B

Esta página describe el contexto público de configuración para usar el rastreador GOTOP G11B con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, resume los pasos prácticos para apuntar un G11B al endpoint de Plaspy y señala qué verificar antes de integrar el dispositivo. La información aquí se centra en procedimientos públicos para conectar el G11B a la plataforma Plaspy y permitir la monitorización en tiempo real de animales y despliegues mixtos pequeños.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante para configurar el G11B pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use estos ajustes públicos como referencia y confirme procedimientos específicos con la documentación o herramientas de GOTOP.

## Resumen de configuración

El objetivo del proceso de configuración es dejar el G11B listo para que comunique de forma fiable la ubicación y el estado a Plaspy. Esto incluye aplicar el endpoint del servidor de Plaspy, garantizar acceso de red desde el rastreador y comprobar que el dispositivo aparece en la plataforma Plaspy. Los elementos prácticos que normalmente se abordan durante la configuración son:

- Ingresar el endpoint del servidor Plaspy en el dispositivo o mediante las herramientas de configuración GOTOP para que la telemetría se dirija a la plataforma.
- Seleccionar el modo de transporte que soporte el dispositivo (UDP o TCP) cuando sea necesario en la interfaz del dispositivo o mediante comandos SMS.
- Configurar el puerto usado por Plaspy para que el rastreador transmita al puerto correcto.
- Validar la conectividad y confirmar que el rastreador muestra telemetría y actualizaciones de ubicación en Plaspy.
- Probar el reporte de alarmas y eventos de geocerca para asegurarse de que las alertas lleguen a la plataforma según lo esperado.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el G11B para reportar a Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the transport that the device supports
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y se apoya en la detección automática de protocolo para manejar distintos formatos de rastreadores.

## Requisitos habituales antes de la configuración

- Asegúrese de que el G11B tenga carga de batería suficiente o esté conectado a la fuente de alimentación prevista para la configuración y las pruebas iniciales.
- Confirme que el dispositivo tiene una SIM 4G activa y acceso a la red si la conectividad celular es necesaria para el reporte.
- Tenga acceso al método oficial de configuración GOTOP, como la app GOTOP, el portal web o la interfaz de comandos SMS.
- Prepare los identificadores del dispositivo requeridos por Plaspy o su administrador, como IMEI o número de serie, para registrar y correlacionar la telemetría.
- Verifique que dispone de notas de firmware o instrucciones del proveedor en caso de pasos específicos según la versión del firmware.
- Planifique una breve prueba in situ para validar el seguimiento en vivo, las alarmas y el comportamiento de geocercas después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GOTOP G11B envía sus posiciones GPS, actualizaciones de estado y eventos de alarma al endpoint y puerto del servidor Plaspy para que la plataforma pueda mostrar ubicación en tiempo real, alertas e historial. La plataforma recoge y muestra la telemetría en paneles y mapas para monitoreo y revisión.

- El rastreador se configura para reportar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Todas las conexiones de dispositivo usan el puerto compartido de Plaspy 8888, lo que garantiza un enrutamiento consistente.
- Seleccione el transporte UDP o TCP en el dispositivo si se requiere una selección; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, permitiendo identificar distintos formatos de mensaje cuando el dispositivo se conecta.
- Una vez conectado, la ubicación del dispositivo, las alarmas de movimiento y el estado de batería son visibles en Plaspy para monitoreo y reproducción de historial.

## Flujo típico de configuración

1. Acceda al método oficial de configuración GOTOP, como la aplicación móvil GOTOP, el portal web GOTOP o la interfaz de configuración por SMS.
2. Localice los ajustes de servidor o reporte remoto para el G11B en la herramienta del fabricante o en los comandos SMS.
3. Introduzca el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138.
4. Configure el puerto del servidor en 8888.
5. Elija el transporte UDP o TCP si el dispositivo requiere una selección de transporte.
6. Aplique o guarde la configuración en la herramienta GOTOP o envíe el comando SMS para confirmar los ajustes.
7. Reinicie el dispositivo si el fabricante lo recomienda o si es necesario para que los cambios surtan efecto.
8. Valide que el dispositivo reporte a Plaspy revisando en la plataforma los primeros paquetes de telemetría y las actualizaciones de ubicación.

## Ejemplos de comandos de configuración

Los comandos exactos o las rutas de menú para configurar el GOTOP G11B dependen de las herramientas que proporcione GOTOP, del firmware y de la región. Los métodos pueden incluir comandos SMS, la app GOTOP o ajustes en el portal web. Dado que las herramientas del fabricante y los formatos de comando varían por firmware, consulte la guía del usuario de GOTOP para la sintaxis y ejemplos precisos.

Al usar SMS o enfoques por línea de comandos suministrados por GOTOP, siga los ejemplos del fabricante para establecer el dominio o IP del servidor y el puerto, sustituyendo los marcadores por los valores indicados en esta guía (d.plaspy.com o 54.85.159.138 y puerto 8888). Si recibe un conjunto de comandos de ejemplo de la documentación de GOTOP, aplíquelos en el orden que especifique el fabricante y verifique los resultados en Plaspy.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de menús, el formato de comandos SMS y las opciones de transporte disponibles; consulte siempre las notas de la versión de GOTOP.
- Si el dispositivo soporta tanto UDP como TCP, elija según la recomendación del dispositivo o las condiciones de red; Plaspy soporta ambos transportes en el puerto 8888.
- Al utilizar configuración por SMS, asegúrese de que el dispositivo acepte comandos SMS en su región y de que la sintaxis de los comandos coincida con la versión de firmware del dispositivo.
- Utilice el IMEI o el identificador del dispositivo para vincular el rastreador físico con el registro del dispositivo en Plaspy después de la configuración.
- Si no aparece telemetría tras la configuración, verifique la conectividad celular, las entradas del servidor (dominio o IP), la selección de transporte y, si es necesario, reinicie el dispositivo antes de continuar con la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Dirigir la telemetría del GOTOP G11B a Plaspy centraliza la información de ubicación y eventos de animales para que los equipos puedan monitorear mascotas o ganado desde un único tablero. Esta configuración permite a las organizaciones consolidar alertas, ver historial y gestionar eventos de geocerca en despliegues mixtos, manteniendo además las funciones de localización por SMS del dispositivo como respaldo rápido.

Para conocer más sobre cómo Plaspy puede trabajar con el GOTOP G11B y otros dispositivos, visite https://www.plaspy.com. Para detalles más actuales sobre el dispositivo GOTOP, notas de firmware y referencias de comandos, verifique la información específica del dispositivo en el sitio del fabricante https://www.gotop.cc/.
