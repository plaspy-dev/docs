---
slug: /cantrack/g09l/configuration
id: g09l-configuration
sidebar_label: Configuration
title: CanTrack - G09L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack G09L para conectarlo a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración CanTrack G09L
  - Instalación CanTrack G09L
  - Configuración servidor G09L
  - G09L Plaspy
  - Rastreador GPS G09L
  - Configuración rastreador CanTrack
  - Seguimiento de vehículos G09L
  - Seguimiento de flotas CanTrack
  - Guía de instalación G09L
  - Configuración rastreador Plaspy
---

# CanTrack - Configuración del G09L

Esta página describe el contexto público de configuración para usar el CanTrack G09L con Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera y ofrece pasos prácticos y consideraciones para preparar el equipo, de modo que la ubicación, los eventos del sensor G y el estado del dispositivo sean visibles en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se comunica con el endpoint de Plaspy. Los pasos exactos del fabricante pueden variar según la revisión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor (por ejemplo portal o comandos SMS), por lo que conviene usar esta guía junto con el manual del dispositivo y los recursos del fabricante.

## Resumen de la configuración

El proceso de configuración prepara el G09L para enviar su ubicación y telemetría a Plaspy y valida que el dispositivo sea visible en la plataforma. Estos pasos se enfocan en establecer el endpoint del servidor Plaspy, elegir el transporte que el dispositivo soporte, confirmar la conectividad y asegurarse de que el equipo reporte los eventos correctamente.

- Configure la dirección del servidor del dispositivo para que reenvíe GPS y telemetría de sensores a Plaspy.
- Ajuste el G09L para usar el puerto de Plaspy y que los datos entrantes lleguen al colector de Plaspy.
- Seleccione UDP o TCP en el dispositivo si el firmware requiere elegir un transporte.
- Guarde y aplique los ajustes mediante el portal del fabricante o con comandos SMS, y reinicie si es necesario.
- Verifique que el dispositivo muestre posiciones en vivo y reportes de eventos en Plaspy para confirmar la correcta configuración.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el G09L:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y se basa en la detección automática del protocolo para identificar el protocolo del rastreador cuando el dispositivo comienza a enviar datos.

## Requisitos típicos antes de la configuración

- Asegúrese de que el G09L tenga alimentación del vehículo o una batería interna cargada y esté encendido para la configuración.
- Tenga acceso físico o remoto al equipo para la instalación, la configuración por SMS o el uso del portal.
- Instale una SIM celular funcional con datos y el APN correcto del operador móvil si el dispositivo lo requiere.
- Obtenga el método de configuración del fabricante, como comandos SMS, el portal de CanTrack o la herramienta de configuración del proveedor.
- Conozca el IMEI del dispositivo y cualquier contraseña de configuración necesaria para enviar comandos o acceder al portal del dispositivo.
- Confirme que tiene una cuenta en Plaspy o instrucciones de su administrador de Plaspy para verificar la visibilidad del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con los ajustes de servidor de Plaspy, el G09L reenvía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar seguimiento en vivo, alertas e historial. El dispositivo transmitirá actualizaciones periódicas de posición y mensajes de evento que Plaspy ingiere y muestra en paneles y reportes.

- Envía posiciones GPS y BeiDou al endpoint del servidor Plaspy
- Reporta eventos del sensor G, como aceleraciones bruscas, frenadas fuertes y alarmas por choque a Plaspy
- Transmite actualizaciones de estado del dispositivo para que el activo aparezca en línea en Plaspy
- Envía alertas de geocerca y otras alarmas configuradas a la cuenta de Plaspy
- Usa el dominio o la IP y el puerto compartidos de Plaspy para que la plataforma reciba todos los mensajes del dispositivo

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de CanTrack, como el portal del fabricante, la interfaz de comandos SMS o la herramienta de configuración del proveedor.
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Configure el puerto en 8888 según lo requiere Plaspy.
4. Seleccione UDP o TCP si el dispositivo solicita elegir un protocolo de transporte.
5. Aplique o guarde la configuración en el dispositivo o en el portal.
6. Reinicie el G09L si el firmware requiere un reinicio para aplicar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy y que las ubicaciones y eventos aparezcan en su cuenta de Plaspy.

## Comandos de configuración de ejemplo

El G09L soporta métodos de configuración por SMS y por portal, según la documentación del fabricante. Los comandos exactos y su sintaxis varían según el firmware y la herramienta del proveedor, por lo que consulte la referencia de comandos oficial de CanTrack o la ayuda del portal para formatos y ejemplos precisos. Si utiliza comandos SMS, conserve los marcadores de posición como las variables de APN y reemplácelos por los valores de su operador conforme a la documentación de CanTrack.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware regionales pueden cambiar la sintaxis de los comandos y las opciones disponibles; siempre consulte el manual del dispositivo para su unidad.
- La elección entre UDP o TCP puede afectar las características de entrega; Plaspy acepta ambos transportes en el puerto compartido y detectará el protocolo automáticamente.
- Use el IMEI del dispositivo y cualquier contraseña de configuración exactamente como lo proporcione el fabricante al emitir comandos.
- La configuración por SMS y por portal suele estar disponible para el G09L; siga las indicaciones del fabricante para el método que planee usar.
- Confirme el APN y los ajustes celulares con su operador móvil antes de cambiar los ajustes del servidor para evitar interrupciones de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G09L con Plaspy permite a las flotas disponer de un rastreador discreto certificado DOT montado en la luz trasera que reporta ubicación, choques y comportamiento de conducción a una plataforma centralizada. Configurar el dispositivo para que apunte a Plaspy permite a los operadores consolidar ubicación en vivo, alarmas y reproducción de historial en un solo panel para monitoreo operativo, recuperación ante robos y análisis de seguridad.

Para obtener más información sobre cómo Plaspy puede centralizar el rastreo del G09L y otros dispositivos visite https://www.plaspy.com. El comportamiento del firmware del fabricante y los métodos de configuración específicos del dispositivo pueden cambiar con el tiempo, por lo que verifique las últimas instrucciones de configuración en el sitio de CanTrack en https://www.cantrackgps.com/ antes de completar un despliegue a gran escala.
