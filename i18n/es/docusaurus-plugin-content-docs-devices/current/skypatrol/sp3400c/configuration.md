---
slug: /skypatrol/sp3400c/configuration
id: sp3400c-configuration
sidebar_label: Configuration
title: SkyPatrol - SP3400C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el SkyPatrol SP3400C a Plaspy con detalles prácticos de servidor y configuración
keywords:
  - Configuración SkyPatrol SP3400C
  - Configuración SP3400C
  - SkyPatrol SP3400C Plaspy
  - Configuración rastreador GPS SkyPatrol
  - Configuración servidor SP3400C
  - Configuración software seguimiento SP3400C
  - Configuración plataforma GPS SP3400C
  - Configuración dispositivo Plaspy
  - Rastreo vehicular SP3400C
  - Gestión de flotas SP3400C
---

# SkyPatrol - Configuración del SP3400C

Esta página describe el contexto público de configuración para usar el SkyPatrol SP3400C con Plaspy. Se centra en los detalles prácticos de servidor y flujo de trabajo necesarios para apuntar el rastreador a Plaspy y que el dispositivo reporte ubicación y eventos. El contenido está pensado para instaladores, integradores y operadores técnicos que requieren instrucciones claras y específicas basadas en información pública.

El SP3400C es un dispositivo CDMA 1xRTT con pila TCP/IP integrada, soporte UDP, opciones SMS y capacidad de firmware por aire (OTA). Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que use esta guía junto con la documentación oficial de SkyPatrol para instrucciones específicas del equipo.

## Resumen de la configuración

Este proceso prepara al SP3400C para comunicarse con Plaspy, de modo que el dispositivo quede visible en la plataforma y reporte ubicación y eventos de forma confiable. El objetivo es asegurar que el rastreador apunte al endpoint de Plaspy, use el transporte correcto y validar la conectividad después de aplicar la configuración.

- Configure el SP3400C para enviar telemetría al endpoint y puerto del servidor Plaspy
- Seleccione el método de transporte requerido por el dispositivo y firmware, normalmente UDP o TCP
- Guarde y aplique los ajustes y, si es necesario, reinicie el dispositivo o envíe actualizaciones OTA
- Verifique que el dispositivo aparezca en Plaspy y esté reportando ubicación y estado
- Utilice las herramientas del fabricante o comandos SMS cuando aplique para realizar la configuración

## Ajustes del servidor Plaspy

Use los siguientes valores públicos de Plaspy al configurar los ajustes de servidor del rastreador:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y la plataforma detectará automáticamente el protocolo del rastreador una vez que el dispositivo envíe datos al endpoint configurado.

## Requisitos típicos antes de la instalación

- Dispositivo alimentado e instalado con buena colocación de antena para recepción celular y GPS
- Registro en la red CDMA activo o activación del operador según lo requiera el SP3400C
- Acceso a la herramienta de configuración SkyPatrol, interfaz de comandos SMS o documentación de instalador
- Versión de firmware actual documentada para seguir los pasos adecuados de configuración
- Cuenta en Plaspy o flujo de registro de flota listo para recibir el identificador del dispositivo (IMEI o ID del equipo)
- Herramientas para monitorear la conectividad del dispositivo, como consola serial, registros OTA o respuestas SMS cuando estén disponibles

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el SP3400C envía sus datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe la telemetría entrante, detecta automáticamente el protocolo del dispositivo y mapea los datos en la plataforma para que los activos puedan supervisarse en tiempo real.

- El rastreador apunta a d.plaspy.com o 54.85.159.138 como host de destino
- El dispositivo envía mensajes al puerto 8888, que es el puerto compartido que usa Plaspy para todos los equipos
- El transporte se configura en UDP o TCP según el firmware del dispositivo y la elección del instalador
- Plaspy realiza detección automática del protocolo en las conexiones entrantes y analiza los protocolos compatibles
- El reporte exitoso permite la visibilidad de la ubicación y el monitoreo de eventos dentro de la plataforma Plaspy

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración SkyPatrol para el SP3400C según lo documente el fabricante.
2. Ingrese la dirección del servidor Plaspy especificando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Ajuste el puerto de destino a 8888. Recuerde que Plaspy usa el mismo puerto para todos los dispositivos.
4. Seleccione la opción de transporte UDP o TCP si el firmware del dispositivo requiere elegir un transporte.
5. Aplique o guarde la configuración en el SP3400C mediante la herramienta del fabricante, comando SMS o método OTA.
6. Reinicie el dispositivo si el firmware exige un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy confirmando la visibilidad del equipo y los datos recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El SP3400C admite múltiples métodos de configuración según el firmware y las herramientas del instalador. Los formatos exactos de comandos y las cadenas SMS son específicos del fabricante y pueden variar por versión de firmware y herramienta del proveedor. Dado que esos comandos los proporciona la documentación de SkyPatrol o las interfaces de instalador, consulte la guía oficial de SkyPatrol para las cadenas SMS o comandos seriales exactos necesarios para establecer servidor, puerto y transporte. Al usar una herramienta de configuración, ingrese d.plaspy.com o 54.85.159.138 y el puerto 8888 y seleccione UDP o TCP según corresponda, luego aplique y reinicie el dispositivo si es requerido.

Si su herramienta de instalación o firmware utiliza marcadores de posición para APN o credenciales, puede ver variables como {{apn}} o {{apnu}} en los ejemplos del fabricante. Mantenga estos marcadores intactos y reemplácelos por los valores de su operador según las indicaciones de la documentación de SkyPatrol.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ruta exacta del menú o el conjunto de comandos SMS necesarios para establecer servidor y opciones de transporte; confirme siempre los comandos para su compilación de firmware.
- Elija UDP o TCP según las necesidades del entorno y las recomendaciones del fabricante; UDP se usa comúnmente para telemetría, pero TCP está disponible cuando se requiere entrega confiable.
- El SP3400C soporta configuración por SMS y por software según las herramientas que proporcione SkyPatrol; siga la sintaxis SMS oficial si utiliza ese método.
- Todos los dispositivos que envíen datos a Plaspy deben apuntar a d.plaspy.com o 54.85.159.138 y usar el puerto 8888 para asegurar un enrutamiento consistente hacia la plataforma.
- Después de la configuración, valide la conectividad confirmando que los primeros reportes del dispositivo sean recibidos y parseados por Plaspy.

## Por qué usar Plaspy con esta configuración

Conectar el SkyPatrol SP3400C a Plaspy ofrece una forma directa de agregar rastreadores CDMA de vehículos a una única plataforma de gestión de flotas. Usar el endpoint y puerto compartidos de Plaspy simplifica el despliegue porque todos los dispositivos compatibles usan los mismos datos de destino y Plaspy detecta automáticamente el protocolo en uso. Esto reduce la complejidad de configuración por dispositivo y ayuda a que los equipos comiencen a reportar sin largos procesos de negociación de protocolo.

Para obtener más información sobre Plaspy y cómo gestiona la incorporación y el reporte de dispositivos, visite https://www.plaspy.com. Para instrucciones específicas más recientes del SP3400C, comportamiento de firmware y referencia de comandos del fabricante, verifique los detalles en el sitio oficial de SkyPatrol https://www.skypatrol.com/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
