---
slug: /navtelekom/smart_s_2333a_hit/configuration
id: smart_s_2333a_hit-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-2333A HIT Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Navtelekom СМАРТ S-2333A HIT con Plaspy, con ajustes de servidor y flujo de instalación
keywords:
  - Navtelekom СМАРТ S-2333A HIT
  - Configuración de rastreador Navtelekom
  - Configuración SMART S-2333A HIT
  - Configuración de rastreador Plaspy
  - Configuración de rastreador GPS
  - Configuración de seguimiento de vehículos
  - NTC Configurator
  - Rastreador GLONASS GPS
  - Integración de rastreadores heredados
  - Configuración telemática GSM
---

# Navtelekom - СМАРТ S-2333A HIT Configuración

Esta página documenta el contexto público de configuración para usar el Navtelekom СМАРТ S-2333A HIT con Plaspy. Resume los ajustes de servidor prácticos, las comprobaciones previas necesarias y el flujo de trabajo típico que los integradores emplean para preparar este rastreador GLONASS/GPS legacy para monitoreo en tiempo real en la plataforma Plaspy. Las indicaciones que siguen se basan en las capacidades publicadas del equipo y en la información pública de ingestión de Plaspy.

Plaspy utiliza un conjunto compartido de ajustes de servidor entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que provea Navtelekom, como la utilidad NTC Configurator. Siempre consulte el manual del dispositivo y la documentación del NTC Configurator para pantallas específicas de la interfaz o formatos de comandos SMS cuando estén disponibles.

## Resumen de la configuración

Para integrar el СМАРТ S-2333A HIT con Plaspy debe preparar el equipo para que envíe sus datos GNSS y telemetría a los endpoints de ingestión de Plaspy y luego verificar la conectividad y el reporte en la plataforma. El endpoint y el puerto del servidor Plaspy son coherentes entre dispositivos y Plaspy detectará automáticamente el protocolo del rastreador una vez que el equipo comience a reportar.

- Configure el rastreador para que reporte al endpoint del servidor Plaspy para que los paquetes de posición y eventos se enruten correctamente.
- Seleccione el modo de transporte apropiado (UDP o TCP) si el equipo requiere una elección y establezca el puerto común de Plaspy.
- Utilice el método de configuración del fabricante, por ejemplo el NTC Configurator o los comandos SMS aprobados, para aplicar los ajustes.
- Aplique y guarde los cambios, luego verifique que el dispositivo alcance el servidor Plaspy y aparezca en la plataforma.
- Valide el reporte de eventos desde entradas digitales, sensores analógicos y periféricos RS-485 o 1-Wire según corresponda.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo comience a reportar

Estos valores corresponden al endpoint público de ingestión de Plaspy y deben ingresarse en la configuración del rastreador usando la herramienta del fabricante o los métodos soportados por el dispositivo.

## Requisitos típicos antes de la configuración

- Acceso a la documentación oficial de Navtelekom para el СМАРТ S-2333A HIT y a la utilidad NTC Configurator cuando sea necesario
- Batería del dispositivo cargada o conexión a la alimentación del vehículo para asegurar que la unidad pueda arrancar y registrarse en la red
- Una tarjeta SIM operativa provisionada para datos y conectividad básica compatible con el módem 2G del dispositivo y con los operadores locales
- El IMEI del dispositivo o identificador único para registrar o identificar la unidad en Plaspy después de que reporte
- Un equipo PC o cable de interfaz si se usa software de configuración local, o acceso al conjunto de comandos SMS si se configura de forma remota
- Confirmación de una versión de firmware o del NTC Configurator compatible que soporte las opciones de servidor, puerto y transporte

## Cómo se conecta este rastreador a Plaspy

El СМАРТ S-2333A HIT transmite posición GNSS y telemetría desde su receptor GLONASS/GPS integrado a través del módem GSM 2G del dispositivo hacia Plaspy. Al configurarse para usar el endpoint de Plaspy, el rastreador envía mensajes telemáticos estándar para que Plaspy pueda ingerir ubicación, entradas y datos de sensores periféricos.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888
- Elija UDP o TCP como transporte en el dispositivo si se solicita; ambos transportes son aceptados por Plaspy en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecte y comience a enviar datos
- Las entradas digitales, lecturas analógicas y contadores de pulsos se reenvían a Plaspy para el procesamiento de eventos y telemetría
- Los sensores conectados por RS-485 y 1-Wire reportan a través del rastreador hacia Plaspy cuando el firmware y la configuración de sensores del dispositivo lo permiten

## Flujo de configuración típico

1. Acceda al método o software de configuración oficial del fabricante, como la utilidad NTC Configurator o el conjunto de comandos SMS recomendado por el proveedor.
2. Identifique el dispositivo objetivo por IMEI u otro identificador dentro de la herramienta de configuración.
3. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo permita la herramienta.
4. Establezca el puerto del dispositivo en 8888.
5. Elija UDP o TCP si la configuración del equipo requiere seleccionar el transporte.
6. Aplique o guarde los cambios de configuración en la herramienta del fabricante y súbalos al dispositivo.
7. Reinicie o desconecte y vuelva a conectar la alimentación del equipo si el firmware lo exige para activar los nuevos ajustes de red.
8. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma, confirmando que la detección automática del protocolo se completó y que la telemetría es visible.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y los pasos varían según la versión de firmware de Navtelekom y la versión del NTC Configurator. Algunos integradores usan la utilidad de escritorio NTC Configurator para establecer servidor, puerto y transporte, mientras que otros pueden usar un conjunto de comandos SMS si el firmware lo soporta. Debido a que la sintaxis de comandos es específica del fabricante y puede cambiar entre versiones de firmware, consulte el manual del usuario de Navtelekom o la ayuda del NTC Configurator para formatos y ejemplos precisos para el СМАРТ S-2333A HIT.

Si dispone de ejemplos de comandos proporcionados por el fabricante, siga el orden documentado para establecer servidor, puerto, seleccionar transporte y guardar o reiniciar. Conserve cualquier marcador de posición que use el fabricante, como [apn] u otros, y reemplácelos por los valores APN de su operador cuando sea necesario.

## Notas de configuración

- La versión de firmware importa: diferentes compilaciones de firmware y versiones del NTC Configurator pueden mostrar menús o sintaxis SMS distintas para los ajustes de servidor y transporte.
- TCP versus UDP: elija el transporte que se ajuste a sus necesidades de despliegue; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo.
- Use d.plaspy.com o 54.85.159.138 al ingresar la información del servidor según lo que acepte la herramienta de configuración.
- Tenga a mano el IMEI del dispositivo y cualquier identificador del equipo para registro y verificación en Plaspy después de la configuración.
- Revise la ficha técnica y el manual de usuario de Navtelekom para cualquier paso de configuración específico del dispositivo o notas sobre revisiones de hardware.

## Por qué usar Plaspy con esta configuración

Utilizar el Navtelekom СМАРТ S-2333A HIT con Plaspy permite incorporar hardware de seguimiento GLONASS/GPS legacy a un flujo de monitoreo moderno. Para flotas y propietarios de activos que mantienen equipos antiguos, esta configuración habilita el reporte de posición en vivo, alertas basadas en eventos desde entradas digitales y telemetría ampliada de sensores analógicos y periféricos, todo consolidado en la plataforma Plaspy para supervisión operativa.

Para saber más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para obtener las instrucciones de configuración específicas más recientes, notas de firmware y documentación del fabricante verifique los detalles en el sitio web de Navtelekom https://www.navtelecom.ru/ ya que las revisiones de hardware y el comportamiento del firmware pueden cambiar con el tiempo.
