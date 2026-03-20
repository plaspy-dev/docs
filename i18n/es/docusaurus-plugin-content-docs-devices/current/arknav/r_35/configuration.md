---
slug: /arknav/r_35/configuration
id: r_35-configuration
sidebar_label: Configuration
title: ArkNav - R-35 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador ArkNav R-35 a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración ArkNav R-35
  - Configuración ArkNav R-35 para Plaspy
  - Configuración rastreador GPS ArkNav
  - Configuración servidor R-35
  - Configuración software de rastreo R-35
  - Configuración R-35 rastreo vehicular
  - Configuración de rastreador para Plaspy
  - Configuración GPRS R-35
  - Configuración plataforma rastreo GPS
  - Guía de integración R-35
---

# ArkNav - R-35 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS ArkNav R-35 con Plaspy. Explica los valores de servidor compartido de Plaspy a los que debe apuntar el dispositivo y detalla los pasos prácticos que la mayoría de los instaladores usan para preparar el tracker y conectarlo a la plataforma. Es un documento técnico complementario y no sustituye las instrucciones del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre verifique los detalles con la documentación de ArkNav cuando esté disponible.

## Resumen de la configuración

El objetivo de este proceso es garantizar que el ArkNav R-35 pueda enviar de forma fiable datos de ubicación y estado a la plataforma Plaspy usando el punto de conexión y el puerto compartido de Plaspy. Debe configurar el equipo para usar el servidor de Plaspy, seleccionar el transporte correcto y luego validar que la unidad aparezca y reporte correctamente en Plaspy.

- Apunte el R-35 al dominio o IP del servidor de Plaspy para que el dispositivo pueda entregar la telemetría a Plaspy.
- Seleccione el método de transporte requerido (UDP o TCP) en el tracker si el dispositivo lo requiere.
- Configure el puerto común de Plaspy para que la plataforma reciba los mensajes de forma consistente; Plaspy usa el mismo puerto para todos los dispositivos compatibles.
- Aplique y guarde la configuración del dispositivo y, si es necesario, reinicie el tracker para activar los ajustes.
- Confirme la conectividad y la visibilidad del dispositivo en Plaspy después de la configuración.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Nota: Todos los dispositivos en Plaspy usan el mismo puerto, por lo que solo necesita establecer el puerto 8888 en el lado del dispositivo.

## Requisitos típicos antes de la instalación

- Una unidad ArkNav R-35 cargada y funcionando con la interfaz de configuración accesible.
- Una tarjeta SIM activa y plan de datos móviles si va a usar comunicaciones GSM/GPRS según las capacidades del dispositivo.
- Acceso al método oficial de configuración de ArkNav o al software correspondiente (herramienta para PC, comandos SMS o utilidad web/móvil que proporcione el fabricante).
- Una cuenta en Plaspy o un administrador que pueda confirmar el registro y la visibilidad del dispositivo en la plataforma.
- Información básica sobre la instalación, como fuente de alimentación, ubicación física y observaciones del instalador relevantes para ocultamiento o montaje.
- Medios para supervisar la salida del dispositivo durante las pruebas, por ejemplo, un registro serial, respuestas SMS o la consola de dispositivo en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El ArkNav R-35 envía sus mensajes de ubicación y estado al endpoint del servidor Plaspy, donde Plaspy identifica automáticamente el protocolo e ingiere los datos. Una vez configurado, el dispositivo reportará periódica o event-driven al endpoint compartido de Plaspy para que la plataforma pueda ofrecer ubicación, historial y alertas.

- Configure el R-35 para usar d.plaspy.com o 54.85.159.138 como dirección del servidor.
- Ajuste el puerto del dispositivo a 8888 para que Plaspy reciba la telemetría en su puerto estándar.
- Elija UDP o TCP como transporte en el dispositivo si la interfaz de configuración lo requiere.
- El dispositivo transmite mensajes a través de su enlace GSM/GPRS al endpoint de Plaspy para su procesamiento.
- Plaspy realiza la detección de protocolo para interpretar automáticamente los mensajes del R-35 y mostrar el dispositivo en la plataforma.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de ArkNav o al software proporcionado por el fabricante (herramienta para PC, conjunto de comandos SMS o aplicación de instalador).
2. En el campo de servidor o host remoto ingrese d.plaspy.com o alternativamente la IP del servidor 54.85.159.138.
3. Establezca el valor del puerto en 8888 según lo requiere Plaspy.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según la preferencia del instalador o la capacidad del equipo.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante.
6. Reinicie el dispositivo si la herramienta de configuración o la documentación del equipo recomienda un reinicio para aplicar los ajustes.
7. Valide que el R-35 reporte a Plaspy comprobando la consola de dispositivos de Plaspy o la lista de dispositivos en busca de datos entrantes.

## Ejemplo de comandos de configuración

El método de configuración del ArkNav R-35 puede variar según el firmware y las herramientas que proporcione el fabricante. Dado que los conjuntos de comandos y las interfaces del fabricante difieren entre versiones de software, los comandos exactos que utilice dependerán de la documentación de ArkNav o de la utilidad del proveedor que tenga.

Si dispone de comandos SMS o de la herramienta de ArkNav según la documentación oficial, use esos comandos para establecer el servidor y el puerto a d.plaspy.com o 54.85.159.138 y puerto 8888, y seleccione UDP o TCP según se requiera. Siga siempre el orden recomendado en el manual de ArkNav y conserve los marcadores de posición que el fabricante use para APN o credenciales.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los pasos exactos o la sintaxis de los comandos; confirme la sintaxis en el manual oficial de ArkNav para la versión de firmware de su R-35.
- Si le dan a elegir, UDP puede ser más simple para una configuración mínima, pero TCP puede ofrecer persistencia de conexión según el soporte del dispositivo y las condiciones de la red.
- Si el dispositivo usa ajustes APN para GPRS, asegúrese de ingresar correctamente esos valores en las herramientas de configuración de ArkNav antes de probar la conectividad.
- El R-35 cuenta con antenas internas y una batería de respaldo; tenga en cuenta estas características durante la instalación y las pruebas de alimentación.
- Mantenga una copia de cualquier respuesta de comandos SMS o registros de configuración para ayudar a solucionar la conectividad hacia d.plaspy.com en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el ArkNav R-35 con Plaspy brinda a las organizaciones una forma simple de integrar rastreadores de tamaño reducido en una plataforma centralizada de visibilidad de flotas y activos. Apuntar el R-35 al servidor y puerto compartidos de Plaspy permite que el dispositivo reporte ubicación y estado con una configuración por dispositivo mínima, y la detección automática de protocolos de Plaspy reduce los pasos manuales de mapeo de protocolos.

Para obtener más información sobre Plaspy y las integraciones de rastreadores compatibles visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y utilidades de configuración del ArkNav R-35, verifique los detalles con los recursos oficiales del fabricante en https://www.arknavgps.com.tw/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
