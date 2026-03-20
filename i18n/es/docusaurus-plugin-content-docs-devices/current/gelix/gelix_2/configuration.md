---
slug: /gelix/gelix_2/configuration
id: gelix_2-configuration
sidebar_label: Configuration
title: Gelix - Gelix 2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Gelix 2 con el servidor Plaspy y lista de verificación
keywords:
  - Gelix Gelix 2 configuración
  - Configuración Gelix 2
  - Gelix 2 Plaspy
  - Configuración rastreador Gelix
  - Configuración GPS Gelix
  - Configuración servidor Gelix 2
  - Rastreo vehicular Gelix
  - Compatibilidad rastreador GPS Plaspy
  - Configuración firmware Gelix
  - Configuración plataforma de rastreo
---

# Gelix - Configuración de Gelix 2

Esta página describe el contexto público de configuración para utilizar el rastreador GPS Gelix 2 con la plataforma Plaspy. Explica los ajustes compartidos del servidor que Plaspy espera y ofrece orientación práctica para preparar un dispositivo Gelix 2 para que envíe ubicación, eventos y alarmas a Plaspy. El material aquí está pensado como una referencia útil y accionable para instaladores y administradores que configuran dispositivos Gelix 2 para su visualización en una plataforma de rastreo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Gelix 2 soporta rastreo activo, mensajes de alarma y eventos, funciones de voz/escucha y múltiples opciones de conectividad como GSM, SMS, CSD, GPRS y serie RS232; use esta página para aplicar los ajustes del servidor Plaspy al dispositivo siguiendo el método oficial de configuración proporcionado por el fabricante.

## Resumen de la configuración

Configurar un Gelix 2 para Plaspy consiste principalmente en dirigir el dispositivo al servidor de Plaspy, confirmar la conectividad de red y del SIM cuando corresponda, y validar que el dispositivo aparece y reporta correctamente en Plaspy. Los pasos a continuación describen los objetivos prácticos del proceso de configuración.

- Apuntar el Gelix 2 al endpoint del servidor Plaspy para que la telemetría se envíe a la plataforma.
- Seleccionar el transporte adecuado (UDP o TCP) y ajustar el puerto correcto utilizado por Plaspy.
- Asegurar que el dispositivo cuenta con conectividad de red y que la tarjeta SIM o los ajustes de datos necesarios están activos.
- Guardar y aplicar la configuración y reiniciar el dispositivo si el procedimiento del fabricante lo requiere.
- Verificar que el dispositivo sea visible en Plaspy y que se reciban mensajes de posición y eventos.

## Ajustes del servidor de Plaspy

Al configurar dispositivos Gelix 2 para Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (configure whichever transport the device requires)
- Automatic protocol detection in Plaspy (Plaspy detects the tracker protocol automatically)

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y la plataforma detectará automáticamente el protocolo del rastreador una vez que el dispositivo envíe datos al endpoint configurado.

## Requisitos típicos antes de la instalación

- Acceso al método o software de configuración oficial de Gelix proporcionado por el fabricante o el proveedor.
- Dispositivo alimentado y conectado al vehículo o a una fuente de alimentación de banco según lo recomiende Gelix.
- Tarjeta SIM válida y servicio de datos móviles activo si se usan canales GSM/GPRS para el reporte.
- Conocimiento de los valores APN o credenciales requeridas por la red móvil si el dispositivo usa datos celulares.
- Acceso físico al dispositivo para la configuración inicial, o herramientas de gestión remota proporcionadas por Gelix si están disponibles.
- Acceso administrativo a la cuenta o despliegue de Plaspy para verificar la visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El Gelix 2 envía mensajes de ubicación, eventos y alarmas al endpoint de Plaspy configurado para que la plataforma pueda mostrar la telemetría en tiempo real y el historial de eventos. Configure el dispositivo para reportar al servidor y puerto compartidos de Plaspy y luego valide los mensajes desde el lado de Plaspy.

- El dispositivo debe estar configurado para reportar al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138).
- Todos los Gelix 2 deben usar el puerto 8888 al enviar datos a Plaspy.
- El transporte puede ser UDP o TCP según las opciones de configuración del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al servidor.
- Una vez en reporte, Plaspy recibe actualizaciones de posición, mensajes de alarma y notificaciones de eventos para monitoreo operativo.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de Gelix proporcionado por el fabricante o su proveedor.
2. En los ajustes de red/servidor del dispositivo, introduzca d.plaspy.com o la IP 54.85.159.138 como destino.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP según las opciones disponibles.
5. Aplique o guarde la configuración en la herramienta Gelix o en el menú del dispositivo.
6. Reinicie el dispositivo si el procedimiento del fabricante exige un reinicio para aplicar los cambios de red.
7. Verifique que el dispositivo reporte a Plaspy, que aparezca en la plataforma y que se reciban mensajes de posición y eventos.

## Ejemplos de comandos de configuración

El Gelix 2 admite múltiples métodos de configuración según el firmware y las herramientas del proveedor. Los comandos exactos o las cadenas SMS varían según la revisión del modelo y la utilidad de configuración Gelix. Use el software oficial de configuración de Gelix o los comandos documentados por el fabricante para obtener la sintaxis concreta. Si necesita ejemplos de comandos, consulte la documentación del producto Gelix o el canal de soporte del proveedor para la versión de firmware en uso.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración disponibles; siempre confirme la versión de firmware al seguir las instrucciones del fabricante.
- Algunos instaladores prefieren TCP para una entrega más fiable, mientras que otros usan UDP por menor sobrecarga; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Si utiliza datos celulares, asegúrese de que el APN y las credenciales de red estén configurados conforme al operador móvil y a las indicaciones de Gelix.
- Cuando esté disponible, utilice la herramienta de configuración del fabricante en lugar de comandos SMS improvisados para reducir el riesgo de una configuración incorrecta.
- Mantenga un registro de los identificadores del dispositivo y los valores IMEI para poder cotejar los equipos con las entradas en Plaspy durante la verificación.

## Por qué usar Plaspy con esta configuración

Usar el Gelix 2 con Plaspy ofrece a los administradores de flotas visibilidad centralizada de la ubicación de los vehículos, alarmas e historial de eventos. Apuntar los Gelix 2 al servidor y puerto compartidos de Plaspy permite que la plataforma interprete automáticamente los mensajes entrantes y presente los datos para monitoreo, reportes y toma de decisiones operativas.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y detalles del fabricante verifique la información en el sitio oficial de Gelix http://www.gelix.com/ ya que las instrucciones del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
