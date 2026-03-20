---
slug: /cantrack/10000mah/configuration
id: 10000mah-configuration
sidebar_label: Configuration
title: CanTrack - 10000mAh Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el CanTrack 10000mAh con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
- configuración CanTrack
- configuración 10000mAh CanTrack
- configuración servidor CanTrack
- configuración dispositivo Plaspy
- integración rastreador GPS
- configuración serie GF60
- configuración rastreador magnético
- configuración seguimiento de flotas
- rastreador recuperación vehículos robados
- integración plataforma GPS
---

# CanTrack - Configuración 10000mAh

Esta página documenta el contexto público de configuración para usar el rastreador magnético CanTrack 10000mAh (serie GF60) con la plataforma Plaspy. Se centra en los ajustes compartidos del servidor y en los pasos prácticos que normalmente deberá aplicar al apuntar el dispositivo a Plaspy para que el rastreador envíe ubicaciones y alarmas a la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los procedimientos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Esta guía describe los valores específicos de Plaspy que deberá introducir en el dispositivo y propone un flujo de trabajo práctico para configurar y verificar la conectividad.

## Resumen de la configuración

Esta sección explica el propósito principal de configurar el CanTrack 10000mAh para uso con Plaspy y qué resultados prácticos consigue el proceso.

Configurar el rastreador para Plaspy prepara el dispositivo para enviar mensajes de posición y estado a la plataforma, de modo que usted pueda ver ubicación en tiempo real, alarmas y rutas históricas. La configuración normalmente incluye establecer el APN de la red móvil y apuntar el uploader TCP/IP al punto final y puerto compartidos de Plaspy, y luego comprobar que los mensajes llegan a la plataforma.

- Apuntar el dispositivo a los ajustes del servidor de Plaspy para que la telemetría se dirija a la plataforma
- Configurar el APN y los parámetros GPRS/4G necesarios para las subidas de datos móviles
- Seleccionar el transporte (UDP o TCP) y establecer el puerto del dispositivo al puerto compartido de Plaspy
- Guardar y aplicar los cambios, y verificar que el dispositivo aparece y reporta en Plaspy
- Utilizar SMS o las herramientas del fabricante para actualizaciones en campo cuando el acceso por red o las herramientas de instalación sean limitados

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el CanTrack 10000mAh. Estos son los valores compartidos que Plaspy requiere para las subidas de datos del dispositivo.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando las subidas llegan al servidor

Nota: Todos los dispositivos en Plaspy usan el mismo puerto y la detección de protocolo se realiza automáticamente una vez que el dispositivo comienza a enviar datos.

## Requisitos habituales antes de la configuración

Antes de comenzar la configuración, confirme los siguientes prerrequisitos para reducir el tiempo de instalación y asegurar una conectividad fiable.

- El dispositivo está encendido y cuenta con batería suficiente para la configuración y las subidas iniciales
- Hay conexión de datos móviles funcionando y el APN correcto para la tarjeta SIM instalada
- Acceso al método o software oficial de configuración CanTrack para la serie GF60
- Posibilidad de enviar comandos SMS si va a usar configuración por SMS en campo
- Acceso a credenciales o cuenta de Plaspy para verificar la visibilidad del dispositivo tras la configuración
- Conocimientos básicos sobre si el firmware del equipo requiere seleccionar UDP o TCP como transporte

## Cómo se conecta este rastreador a Plaspy

La serie CanTrack GF60 envía datos de posición y estado por TCP/IP celular al servidor configurado. Cuando se apunta al endpoint de Plaspy, las subidas son recibidas por Plaspy y procesadas para su visualización, reproducción y gestión de alarmas.

- El dispositivo envía telemetría al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138
- El dispositivo usa el puerto 8888 para las subidas y puede operar por UDP o TCP según sea necesario
- Plaspy detecta automáticamente el protocolo del rastreador a partir del flujo de datos entrante
- Los mensajes subidos se muestran en Plaspy como puntos de ubicación en vivo, alarmas e informes de estado
- Si el acceso a la red es limitado, se puede usar la configuración por SMS para ajustar APN y parámetros de servidor

## Flujo típico de configuración

Los siguientes pasos ordenados reflejan un flujo de configuración público típico para integrar un rastreador CanTrack 10000mAh con Plaspy.

1. Acceda al método de configuración oficial del fabricante o al software para la serie GF60 (herramienta web, aplicación de escritorio o lista de comandos SMS proporcionada por el proveedor).
2. Configure el APN del dispositivo para que coincida con el operador móvil de la SIM instalada y así pueda establecer conexión de datos.
3. Introduzca el servidor de Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
5. Elija UDP o TCP como tipo de transporte si el dispositivo requiere selección; Plaspy soporta ambos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware necesita un reinicio para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo y los puntos en vivo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

La serie CanTrack GF60 admite configuración mediante comandos SMS y herramientas del fabricante para APN y parámetros de servidor; no obstante, las cadenas SMS exactas y los comandos de las herramientas de escritorio son suministrados por el fabricante y pueden variar según el firmware. Dado que la sintaxis específica la proporciona CanTrack y puede diferir entre versiones de firmware, consulte la lista oficial de comandos o la herramienta de configuración de CanTrack para los comandos precisos.

Si prefiere la configuración por SMS en campo, consulte la documentación de CanTrack para las plantillas SMS exactas para establecer APN, servidor IP/dominio, puerto y transporte. Los pasos anteriores indican los valores que deben ingresarse: servidor d.plaspy.com o 54.85.159.138 y puerto 8888, con UDP o TCP seleccionado si es necesario.

## Notas de configuración

- Diferencias de firmware: la sintaxis de comandos y las etiquetas de menú pueden variar entre revisiones de firmware; siempre verifique la documentación de la serie GF60 para su revisión de dispositivo.
- Elección de transporte: Plaspy acepta UDP y TCP en el puerto 8888; elija según la recomendación del proveedor o la estabilidad de la red.
- Configuración de APN: utilice el APN del operador móvil de la SIM en el dispositivo; algunos instaladores lo configuran por SMS y otros con la herramienta del fabricante.
- SMS vs software: la configuración por SMS es útil para ajustes en campo, mientras que el software del fabricante suele ofrecer opciones de configuración masiva o por lote.
- Referencia del fabricante: cuando tenga dudas, consulte el manual y la lista de comandos de la serie CanTrack GF60 para instrucciones autorizadas y específicas del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el rastreador CanTrack 10000mAh con Plaspy ofrece una forma práctica de obtener visibilidad en tiempo real y seguimiento histórico para activos que requieren montaje magnético resistente y larga autonomía en reposo. Apuntar el dispositivo a Plaspy con los ajustes de servidor compartidos permite una integración inmediata de actualizaciones de ubicación, alarmas y telemetría en los flujos de trabajo de Plaspy para supervisión de flotas, recuperación de vehículos robados y monitoreo de contenedores.

Para aprender más sobre Plaspy y cómo la plataforma gestiona los datos de los dispositivos, visite https://www.plaspy.com. Para comandos específicos del dispositivo, detalles de firmware y la documentación más reciente de la serie GF60, confirme la información actual en el sitio del fabricante https://www.cantrackgps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
