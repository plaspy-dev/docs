---
slug: /cantrack/gf20_mini/configuration
id: gf20_mini-configuration
sidebar_label: Configuration
title: CanTrack - GF20-Mini Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack GF20-Mini con ajustes de servidor compatibles con Plaspy y flujo de trabajo para rastreo confiable
keywords:
  - CanTrack GF20 Mini
  - Configuración GF20 Mini
  - Configuración GF20 Mini para Plaspy
  - Configuración CanTrack
  - Ajustes de servidor GF20 Mini
  - Configuración de rastreador Plaspy
  - Configuración de rastreador GPS
  - Configuración de rastreo de activos
  - Configuración de rastreo de vehículos
  - Integración GF20 Mini
---

# CanTrack - GF20-Mini Configuración

Esta página documenta el contexto público de configuración para usar el CanTrack GF20-Mini con Plaspy. Resume los ajustes de servidor compartidos por Plaspy que deberá usar al integrar el GF20-Mini, destaca los pasos prácticos de configuración y explica qué verificar antes de activar el dispositivo en su cuenta de Plaspy. Utilice esta guía como referencia técnica para la configuración y verificación básicas; no sustituye el manual de usuario del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta. Los pasos del fabricante para configurar el GF20-Mini pueden variar según la versión de firmware, la revisión de hardware, el mercado geográfico y la herramienta de configuración o los comandos SMS que utilice el proveedor. Siga la documentación del fabricante en paralelo con estos pasos enfocados en Plaspy para garantizar una integración correcta y segura.

## Resumen de la configuración

Configurar el GF20-Mini para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos a un único endpoint de Plaspy, de modo que la plataforma pueda mostrar posición en vivo, historial y alertas. El proceso generalmente consiste en indicar al rastreador dónde reportar, seleccionar el método de transporte si es necesario y validar que los mensajes lleguen al servidor de Plaspy.

- Apunte el rastreador al endpoint del servidor Plaspy para que los mensajes de posición y eventos se enruten a su cuenta de Plaspy.
- Elija el método de transporte soportado por el dispositivo, UDP o TCP, y configure el puerto correcto.
- Guarde y aplique la configuración del rastreador y reinicie el dispositivo si es necesario para comenzar a reportar.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy y envía actualizaciones de ubicación y notificaciones de eventos.
- Tenga en cuenta el firmware del dispositivo y las herramientas del proveedor, ya que comandos SMS o instrucciones específicas pueden variar.

## Ajustes del servidor Plaspy

Use los siguientes valores del servidor Plaspy al configurar el GF20-Mini. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo envíe datos.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Confirme que el GF20-Mini tiene la batería interna cargada o está alimentado según las instrucciones del dispositivo.
- Asegúrese de que el dispositivo tenga servicio celular y una SIM válida cuando sea necesario para reportes por SMS o GPRS, según lo soporte la unidad.
- Obtenga acceso al método oficial de configuración CanTrack para este modelo, como comandos SMS del proveedor, software del fabricante o una herramienta de configuración provista por su distribuidor.
- Conozca el IMEI del dispositivo y cualquier credencial de acceso que el proveedor utilice para la gestión del dispositivo.
- Elija la ubicación de instalación de modo que el dispositivo pueda obtener una fijación GNSS y mantener conectividad celular para reportar a Plaspy.
- Tenga acceso a los detalles de su cuenta Plaspy para verificar que el dispositivo aparezca y reporte correctamente después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GF20-Mini envía fixes de ubicación y mensajes de eventos a un único endpoint y puerto de Plaspy para que la plataforma procese y muestre telemetría, alertas e historial. La plataforma recibe los datos y los correlaciona con geocercas, alertas y paneles de flota configurados.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- El reporte usa el puerto 8888, que es el puerto común de Plaspy para los dispositivos soportados.
- El transporte puede ser UDP o TCP según las opciones de configuración del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos, por lo que no necesita seleccionar un protocolo en la plataforma Plaspy.
- Las notificaciones de eventos como activaciones de geocerca, alarmas por vibración y avisos de batería baja se reenvían a Plaspy como parte del flujo de datos del dispositivo.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del CanTrack GF20-Mini proporcionado por el fabricante o distribuidor. Esto puede ser comandos SMS, una herramienta para Windows o web, u otra utilidad del proveedor.
2. Introduzca la dirección del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en los campos de servidor del rastreador.
3. Configure el puerto en 8888, que Plaspy utiliza para todos los dispositivos soportados.
4. Seleccione UDP o TCP como tipo de transporte si el dispositivo requiere una selección de transporte.
5. Aplique o guarde la configuración usando la herramienta o la secuencia de comandos del fabricante.
6. Reinicie el dispositivo si el método de configuración o el manual del dispositivo indica hacerlo.
7. Valide que el dispositivo reporte revisando que aparezca y tenga posiciones recientes en Plaspy y verificando que las notificaciones de eventos se muestren como se espera.

## Ejemplos de comandos de configuración

El GF20-Mini puede configurarse usando los métodos proporcionados por el fabricante, los cuales varían según el firmware y el proveedor. La sintaxis exacta de los comandos puede diferir y normalmente se especifica en el manual del dispositivo o por su proveedor. Dado que los comandos de configuración y los formatos SMS dependen del proveedor y del firmware, no listamos un conjunto universal de comandos aquí. Utilice la documentación de CanTrack o las plantillas SMS proporcionadas por su proveedor para:

- Establecer la dirección del servidor a d.plaspy.com o 54.85.159.138
- Establecer el puerto de reporte a 8888
- Elegir el transporte UDP o TCP si es requerido
- Guardar y reiniciar el dispositivo

Si su proveedor facilita comandos SMS o un archivo de configuración, aplique esos comandos en el orden recomendado por CanTrack y luego verifique el reporte hacia el servidor Plaspy.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los formatos de comandos SMS y las opciones disponibles. Verifique siempre la documentación del GF20-Mini para su revisión de firmware.
- Elija UDP para una entrega de paquetes más simple en redes con pérdida, o TCP cuando se requiera fiabilidad de sesión, guiado por las recomendaciones del proveedor y las condiciones de red.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo entrante del rastreador, lo que simplifica la configuración del servidor.
- Si configura el rastreador por SMS, conserve un registro de cualquier valor de marcador de posición como configuraciones APN que le proporcione el proveedor y reemplace los marcadores según corresponda.
- Verifique la sincronización de posiciones almacenadas después de restaurar conectividad para que la memoria interna registradas durante cortes se suba a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack GF20-Mini con Plaspy ofrece a las organizaciones una solución compacta y discreta de rastreo de activos que envía datos de posición, eventos y alertas a una plataforma consolidada. Esto permite visibilidad en tiempo real, reportes históricos y alertas para flujos de trabajo antirobo, monitoreo temporal de vehículos y seguridad de activos sin configuraciones de servidor por dispositivo complejas.

Para saber más sobre Plaspy y cómo puede centralizar la telemetría de sus dispositivos visite https://www.plaspy.com. Para los métodos específicos de configuración del dispositivo, notas de firmware e información de soporte verifique los detalles en el sitio del fabricante https://www.cantrackgps.com/. Las especificaciones del fabricante y los procedimientos de instalación pueden cambiar con el tiempo, así que confirme siempre las instrucciones vigentes con la documentación oficial de CanTrack.
