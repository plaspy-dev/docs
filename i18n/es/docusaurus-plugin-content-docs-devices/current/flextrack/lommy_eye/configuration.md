---
slug: /flextrack/lommy_eye/configuration
id: lommy_eye-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Eye Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Flextrack Lommy Eye con ajustes de servidor Plaspy y pasos prácticos para un rastreo fiable
keywords:
  - Configuración Flextrack Lommy Eye
  - Configuración Lommy Eye
  - Flextrack Lommy Eye Plaspy
  - Configuración de servidor Lommy Eye
  - Configuración del rastreador GPS Lommy Eye
  - Configuración de rastreadores Plaspy
  - Guía de configuración Flextrack Lommy Eye
  - Configuración UDP Lommy Eye
  - Configuración TCP Lommy Eye
  - Rastreo de activos Lommy Eye
---

# Flextrack - Configuración de Lommy Eye

Esta página describe el contexto público de configuración necesario para conectar el rastreador Flextrack Lommy Eye a la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera, cómo Lommy Eye suele enviar posiciones y eventos, y ofrece orientaciones prácticas que puede usar al preparar dispositivos para la integración con Plaspy.

Plaspy utiliza ajustes de servidor comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta al servidor. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor; por eso use esta guía junto con la documentación de Flextrack y el método de aprovisionamiento específico de su dispositivo.

## Resumen de la configuración

Esta sección resume por qué debe configurar Lommy Eye para Plaspy y qué se consigue con la configuración. El objetivo es preparar el dispositivo para que alcance el endpoint de Plaspy de forma confiable y validar que los reportes aparecen en la plataforma.

- Configure el dispositivo para enviar reportes programados y eventos al endpoint del servidor Plaspy.
- Asegúrese de que el dispositivo use el host y puerto compartidos de Plaspy para que la plataforma pueda ingerir datos y detectar automáticamente el protocolo del rastreador.
- Seleccione el método de transporte que soporte el firmware del dispositivo para obtener la mayor fiabilidad según su escenario de instalación.
- Valide la conectividad y la visibilidad en Plaspy después de guardar los ajustes para confirmar la recepción de posiciones y notificaciones de eventos.
- Opcionalmente, habilite reportes por movimiento o aumente la frecuencia de envío de forma remota para seguimiento casi en tiempo real cuando se detecte movimiento.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar Lommy Eye. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo del rastreador automáticamente cuando este se conecta.

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al servidor

## Requisitos típicos antes de la configuración

Antes de comenzar la configuración, confirme estos prerequisitos para reducir problemas y acelerar la verificación.

- Batería del dispositivo cargada o alimentación conectada y listo para la configuración y el primer registro.
- Conectividad celular válida y SIM activa si utiliza transmisión móvil, ya que Lommy Eye emplea LTE Cat M1 con fallback a 2G para acceso a la red.
- Acceso al método o herramienta oficial de configuración de Flextrack necesaria para cambiar servidor, puerto y transporte.
- Identificador del dispositivo como IMEI disponible para poder identificarlo en Plaspy después del registro.
- Una cuenta de Plaspy o acceso al proyecto de Plaspy donde aparecerá el rastreador para validar los reportes entrantes.
- Si utiliza configuración vía SMS, asegúrese de tener el formato correcto de comandos SMS según la documentación de Flextrack.

## Cómo se conecta este rastreador a Plaspy

Lommy Eye envía datos de ubicación y eventos a Plaspy usando transmisión UDP o, según el caso, mediante configuración por SMS. Una vez configurado, el dispositivo utiliza el endpoint y puerto compartidos de Plaspy para entregar posiciones programadas y actualizaciones por eventos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP dependiendo del firmware del dispositivo y la preferencia del instalador.
- Plaspy recibe reportes programados y reportes activados por movimiento, y determina automáticamente el protocolo del dispositivo para su parseo.
- Plaspy muestra los datos GNSS y los eventos entrantes en el panel para historial de posiciones, alertas y procesos de recuperación.
- Si la conectividad se interrumpe, el registro local de Lommy Eye guarda el historial de posiciones, que se sincronizará con Plaspy cuando se restablezca el servicio.

## Flujo común de configuración

Siga estos pasos prácticos al preparar una unidad Lommy Eye para Plaspy. Los comandos exactos y los nombres de menú dependen de la herramienta de configuración de Flextrack o de la sintaxis SMS.

1. Acceda al método oficial de configuración de Flextrack o al software proporcionado por el proveedor según la documentación del instalador.
2. En los ajustes de servidor o endpoint, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888, que Plaspy usa para todos los dispositivos.
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte.
5. Guarde o aplique la configuración en la herramienta del dispositivo y espere la confirmación del cambio.
6. Reinicie el dispositivo si el firmware lo exige o si así lo recomienda la documentación de Flextrack.
7. Valide que el dispositivo reporte a Plaspy verificando el IMEI o el identificador en su proyecto Plaspy y confirmando la recepción de reportes de posición.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y la sintaxis SMS varían según el firmware y la herramienta del fabricante. Los dispositivos Flextrack suelen soportar configuración remota vía UDP y SMS, y el método que utilice debe seguir la guía de Flextrack. Debido a que los comandos difieren entre versiones de firmware y herramientas de aprovisionamiento, consulte el manual de usuario de Flextrack para obtener las cadenas de comandos o el formato de archivo de configuración necesarios para apuntar a d.plaspy.com o 54.85.159.138 con puerto 8888.

Si su proveedor facilita cadenas de configuración por SMS o una interfaz de línea de comandos, aplique el equivalente de estas acciones públicas en el formato que su proveedor requiera:

- dirigir el rastreador a d.plaspy.com o 54.85.159.138
- establecer el puerto en 8888
- seleccionar UDP o TCP si es necesario
- guardar y reiniciar el dispositivo

Consulte las instrucciones de Flextrack para la sintaxis exacta de SMS o comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menú y los formatos exactos de comando. Confirme siempre la sintaxis correcta para la revisión de firmware de su dispositivo.
- Elegir UDP o TCP depende de la fiabilidad de la red y de la preferencia del instalador. UDP es común para reportes de bajo overhead, mientras que TCP puede utilizarse para entrega garantizada en algunos firmwares.
- Lommy Eye soporta configuración remota vía SMS como alternativa a las herramientas de configuración por UDP. Use SMS sólo cuando esté autorizado y disponga del conjunto correcto de comandos de Flextrack.
- El servidor Plaspy usa el mismo puerto para todos los rastreadores compatibles, lo que simplifica el aprovisionamiento en flotas con modelos mixtos.
- Confirme siempre el IMEI o el identificador del dispositivo en Plaspy tras la configuración para evitar entradas duplicadas o faltantes.

## Por qué usar Plaspy con esta configuración

Usar Lommy Eye con Plaspy brinda a las organizaciones visibilidad remota confiable para activos alimentados por batería al combinar las capacidades del rastreador con una plataforma que acepta ajustes de servidor compartidos y detecta automáticamente los protocolos. El endpoint y puerto compartidos de Plaspy simplifican el aprovisionamiento en flotas, mientras que la plataforma procesa reportes programados y por eventos para mapeo, historial y alertas.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para obtener los comandos de configuración específicos más recientes, notas de firmware e instrucciones del fabricante, verifique los detalles en el sitio de Flextrack https://flextrack.dk. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que siempre confirme la información actual con Flextrack al aplicar configuraciones a sus dispositivos.
