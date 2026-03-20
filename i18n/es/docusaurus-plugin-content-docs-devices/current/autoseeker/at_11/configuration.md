---
slug: /autoseeker/at_11/configuration
id: at_11-configuration
sidebar_label: Configuration
title: Autoseeker - AT-11 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS Autoseeker AT-11 con los servidores de Plaspy y habilitar su visibilidad en la plataforma
keywords:
  - Configuración Autoseeker AT-11
  - Instalación Autoseeker AT-11
  - Autoseeker AT-11 Plaspy
  - Configuración rastreador GPS AT-11
  - Ajustes servidor AT-11
  - Configuración rastreo flota AT-11
  - Configuración rastreador Plaspy
  - Compatibilidad servidor Plaspy
  - Configuración rastreador de vehículo AT-11
  - Configuración plataforma rastreador GPS
---

# Autoseeker - Configuración del AT-11

Esta página ofrece el contexto público de configuración para usar el rastreador GPS Autoseeker AT-11 4G Car Charger con Plaspy. Se centra en los ajustes de servidor compartidos y los pasos prácticos necesarios para apuntar el AT-11 a Plaspy, de modo que el dispositivo pueda reportar ubicación, alertas y telemetría en la plataforma. Use esta guía junto con la documentación del fabricante para completar su configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT-11 es un rastreador compacto tipo cargador de auto que ofrece posicionamiento GPS y Beidou, conectividad global 4G, batería interna de respaldo y cargador integrado para teléfono móvil. Este documento muestra cómo aplicar el endpoint público y el puerto de Plaspy para habilitar la visibilidad en la plataforma.

## Resumen de la configuración

El objetivo al configurar el AT-11 para Plaspy es dirigir el dispositivo al endpoint del servidor de Plaspy y garantizar la conectividad continua para que los datos de ubicación y eventos sean visibles en la plataforma. La configuración prepara el rastreador para enviar posiciones GNSS en tiempo real y alarmas a Plaspy y valida que los reportes y alertas aparezcan según lo esperado.

- Apunte el AT-11 al endpoint del servidor Plaspy y confirme los ajustes de transporte.
- Asegúrese de que el dispositivo tenga alimentación, una SIM activa y acceso a la red para reportes en tiempo real.
- Guarde y aplique la configuración en el equipo usando el método del fabricante.
- Valide que las actualizaciones de ubicación, alarmas y estado del dispositivo lleguen a Plaspy.
- Use los paneles de Plaspy para confirmar la recepción de geocercas, exceso de velocidad, desconexión de alimentación y otras alarmas.

## Ajustes del servidor Plaspy

Al configurar el AT-11 para Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores son el endpoint público y el puerto de Plaspy al que el AT-11 debe reportar. Use el dominio o la IP cuando ingrese la información del servidor en la herramienta de configuración del dispositivo. Recuerde que todos los dispositivos en Plaspy usan el mismo puerto y que la detección de protocolo es automática en el lado de Plaspy.

## Requisitos típicos antes de empezar

- Asegúrese de que el AT-11 esté alimentado e insertado en el encendedor del vehículo o alimentado según las instrucciones del fabricante.
- Verifique que haya una Nano SIM válida con un plan de datos activo instalada y que el dispositivo tenga conectividad celular.
- Tenga acceso al método oficial de configuración del fabricante o al software utilizado para establecer el servidor y los ajustes de transporte.
- Confirme la versión de firmware y la revisión de hardware si está disponible, ya que los menús y comandos pueden variar según la versión.
- Prepare identificadores del dispositivo como IMEI o número de serie para poder localizar y verificar el equipo en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El AT-11 transmite posiciones GNSS y telemetría de eventos al endpoint del servidor Plaspy para que el dispositivo aparezca en los mapas en vivo y genere alarmas e historial en la plataforma. La configuración asegura que el equipo reenvíe ubicación, estado y eventos de alarma al servidor y puerto compartidos de Plaspy.

- El rastreador se configura para reportar al endpoint compartido d.plaspy.com o a 54.85.159.138.
- Los datos se envían al puerto 8888, que Plaspy usa para todos los dispositivos compatibles.
- El transporte puede configurarse en UDP o TCP según las opciones del dispositivo; Plaspy realiza la detección automática del protocolo.
- Los datos reportados incluyen actualizaciones de posición, eventos de alarma como desconexión o exceso de velocidad, y el estado del dispositivo necesario para el monitoreo.
- Una vez configurado y en línea, el dispositivo será visible en Plaspy para seguimiento en tiempo real y reproducción histórica.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el AT-11 provisto por el vendedor.
2. Asegúrese de que el dispositivo esté alimentado y tenga una Nano SIM activa y conectividad de red.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo correspondiente.
4. Configure el puerto del servidor en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
5. Seleccione el tipo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
6. Aplique o guarde la configuración según la herramienta del fabricante y confirme que los ajustes se hayan escrito en el dispositivo.
7. Reinicie o desconecte y vuelva a conectar la alimentación del AT-11 si las instrucciones del proveedor lo requieren para activar la nueva configuración.
8. Valide que el dispositivo reporte a Plaspy y que los datos de ubicación y eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

El AT-11 suele configurarse usando la plataforma web del proveedor o la herramienta de configuración del fabricante incluida con el dispositivo. Los comandos exactos o los formatos SMS pueden variar según el firmware y la herramienta. Dado que los métodos del fabricante difieren, consulte la guía de configuración oficial de Autoseeker o la herramienta del vendedor para el conjunto preciso de comandos necesario para establecer el servidor y el puerto.

Si su herramienta de proveedor acepta entradas directas de servidor, use los valores de Plaspy mostrados en la sección Ajustes del servidor Plaspy y siga los pasos de la herramienta del vendedor para guardar y aplicar los cambios.

## Notas de configuración

- Los menús de configuración, la sintaxis de comandos y los métodos remotos varían según la versión de firmware y la revisión de hardware; siempre verifique la versión de firmware antes de realizar cambios.
- Elija UDP o TCP de acuerdo con la opción disponible en el dispositivo; Plaspy detectará automáticamente el protocolo cuando lleguen los datos al puerto 8888.
- El AT-11 admite instalación plug-and-play, pero puede requerir un reinicio o reconexión después de aplicar los ajustes del servidor.
- Las alarmas por desconexión o falla de alimentación son reportadas por el AT-11 y aparecerán en Plaspy una vez que el servidor y el puerto sean correctos y el dispositivo esté en línea.
- Siga siempre la guía del fabricante para la provisión de la SIM y los ajustes APN al configurar la conectividad celular si esa información es requerida por la herramienta del proveedor.

## Por qué usar Plaspy con esta configuración

Usar el AT-11 con Plaspy ofrece a organizaciones y propietarios de vehículos una forma sencilla de acceder a seguimiento de posición en tiempo real, gestión de alarmas e informes históricos sin la complejidad de administrar servidores por dispositivo. Apuntar el AT-11 al endpoint y puerto compartidos de Plaspy permite una integración rápida para que alertas de ubicación, exceso de velocidad, geocercas y desconexión estén disponibles en la plataforma Plaspy para monitoreo y operaciones.

Para obtener más información sobre Plaspy y sus capacidades de gestión de flotas visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes del dispositivo, notas de firmware e instrucciones del fabricante, verifique los detalles en el sitio oficial de Autoseeker https://autoseekergps.com/ ya que los procedimientos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
