---
slug: /neomatica/adm700/configuration
id: adm700-configuration
sidebar_label: Configuration
title: Neomatica - ADM700 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Neomatica ADM700 con Plaspy, incluyendo ajustes de servidor y pasos prácticos
keywords:
  - configuración Neomatica ADM700
  - configuración ADM700 para Plaspy
  - ajustes de servidor Neomatica ADM700
  - configuración rastreador GPS ADM700
  - configuración rastreador vehicular Neomatica
  - configuración gestión de flotas ADM700
  - configuración de rastreador Plaspy
  - configuración GSM GPRS ADM700
  - integración Neomatica ADM700
  - configuración telemetría ADM700
---

# Neomatica - Configuración del ADM700

Esta página describe el contexto público de configuración para usar el rastreador Neomatica ADM700 con Plaspy. Resume los ajustes de servidor y el flujo de trabajo práctico necesarios para apuntar un ADM700 a Plaspy, de modo que el dispositivo pueda enviar posiciones, telemetría y eventos para seguimiento y reportes en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el ADM700 para la integración con Plaspy y consulte la documentación de Neomatica para comandos y comportamientos específicos del dispositivo.

## Visión general de la configuración

El objetivo de la configuración es preparar el ADM700 para una entrega fiable de datos a Plaspy y validar la conectividad para que la unidad aparezca en la plataforma para monitoreo e informes. El transporte GSM GPRS del ADM700 y su capacidad de doble SIM lo hacen adecuado para uso continuo en flotas; además, el registro a bordo conserva datos cuando la cobertura es intermitente.

- Configure el ADM700 para que informe al endpoint de Plaspy y así recibir ubicación y telemetría de forma confiable.
- Seleccione el método de transporte y ajuste el puerto de Plaspy para que el dispositivo pueda establecer sesión por GPRS.
- Verifique que el dispositivo tenga conexión de datos activa y que la SIM permita cargas GPRS.
- Valide que el ADM700 suba los registros almacenados a Plaspy después de restaurarse la conectividad.
- Confirme que la unidad sea visible en Plaspy y que se reciban telemetrías críticas como CAN y entradas de pulso.
- Guarde y documente la configuración para mantenimiento futuro y actualizaciones de firmware.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so a single server and port work for supported devices

Estos valores son los ajustes públicos que debe ingresar al configurar el ADM700 para que reporte a Plaspy.

## Requisitos previos habituales

- Un ADM700 instalado y alimentado con acceso al método o software de configuración del fabricante
- Una o dos tarjetas SIM activas con plan de datos habilitado para cargas GSM GPRS
- Acceso físico a la unidad o canal de configuración remota habilitado por el instalador
- Conocimiento de la versión de firmware del dispositivo y de las herramientas del fabricante necesarias para cambiar servidor y puerto
- Confirmación de que el dispositivo cuenta con cobertura GSM adecuada en el sitio de instalación para validar la conectividad inicial
- microSD opcional o suficiente almacenamiento interno para conservar registros hasta que se verifiquen las subidas

## Cómo se conecta este rastreador a Plaspy

El ADM700 envía ubicaciones, telemetría y registros de eventos vía GSM GPRS al endpoint de ingesta de Plaspy. Una vez configurado con el servidor y puerto de Plaspy, el dispositivo reenviará datos en vivo y los registros almacenados cuando la conectividad lo permita.

- El dispositivo se configura para reportar a d.plaspy.com o a 54.85.159.138 usando el puerto 8888
- Puede seleccionar UDP o TCP en el equipo cuando sea necesario elegir el transporte; Plaspy acepta ambos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que su unidad será interpretada correctamente una vez que los mensajes lleguen al servidor
- Los registros de ruta y eventos almacenados se cargan a Plaspy tras restaurarse la conectividad para evitar pérdidas de datos
- La telemetría desde CAN, entradas analógicas y entradas de pulso se reenvía según su configuración para que Plaspy pueda mapear entradas a alarmas e informes

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del Neomatica ADM700 proporcionado por el fabricante o su proveedor.
2. En los ajustes de servidor o envío de datos, ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138.
3. Configure el puerto del servidor en 8888 para coincidir con la ingesta de Plaspy.
4. Elija el método de transporte UDP o TCP si el dispositivo requiere seleccionar uno.
5. Aplique o guarde los parámetros de configuración en la herramienta de gestión del ADM700.
6. Reinicie el equipo si el fabricante recomienda un reboot para que los nuevos ajustes entren en efecto.
7. Valide que el dispositivo reporte a Plaspy revisando la llegada de datos en la plataforma Plaspy o confirmando el establecimiento de sesión en los registros del equipo.

## Ejemplos de comandos de configuración

El ADM700 permite configuraciones a través de las utilidades Neomatica, USB, SMS o GPRS según el firmware y los procedimientos del instalador. La sintaxis exacta de los comandos y las herramientas varían según el firmware del fabricante y las variantes regionales del producto, por lo que la documentación del fabricante es la fuente autorizada para cadenas de comando y formatos SMS específicos.

Si utiliza una utilidad de configuración de Neomatica o comandos SMS proporcionados por su proveedor, los ajustes públicos clave que aplicará son el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 y el puerto 8888, seleccionando UDP o TCP según corresponda. Para configuraciones por SMS, conserve cualquier marcador de posición (placeholders) que proporcione su proveedor, como credenciales APN, y explíquelos al operador o instalador.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ruta de menú o la sintaxis de comando exacta para actualizar servidor y puerto; revise siempre las notas de la versión del firmware.
- Elija UDP o TCP según la preferencia del instalador o la confiabilidad de la red local; Plaspy soporta ambos transportes en el mismo puerto 8888 y realiza detección automática de protocolo.
- El comportamiento de doble SIM y el failover dependen de la configuración de las SIM y del firmware; asegúrese de que ambas SIM estén correctamente aprovisionadas si planea usar failover.
- Para equipos que usan métodos de configuración por SMS, confirme que los comandos SMS estén soportados y que la SIM tenga permisos para enviar y recibir SMS.
- Los registros grandes almacenados sin conexión se subirán cuando la conectividad GPRS se reanude; confirme que el dispositivo retenga el historial necesario en la memoria interna o en la microSD.

## Por qué usar Plaspy con esta configuración

Usar el ADM700 con Plaspy brinda a los operadores de flotas visibilidad continua sobre vehículos y equipos, combinando el diseño robusto del dispositivo y sus amplias interfaces de telemetría con el seguimiento centralizado y los informes de Plaspy. Apuntar el ADM700 a Plaspy con los ajustes de servidor compartidos garantiza una vía de ingesta consistente que soporta monitoreo en tiempo real, alertas de eventos y reproducción histórica de rutas.

Para conocer más sobre Plaspy y los dispositivos compatibles visite https://www.plaspy.com. Para métodos de configuración específicos, comportamiento de firmware y guías del fabricante verifique la información en el sitio de Neomatica https://neomatica.com/ ya que la documentación del proveedor puede actualizarse con el tiempo.
