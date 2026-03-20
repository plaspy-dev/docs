---
slug: /riti/idu_300/configuration
id: idu_300-configuration
sidebar_label: Configuration
title: Riti - IDU-300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Riti IDU-300 con ajustes del servidor Plaspy y pasos prácticos para integración de flotas
keywords:
  - Configuración Riti IDU-300
  - Instalación Riti IDU-300
  - Riti IDU-300 Plaspy
  - Configuración servidor IDU-300
  - Rastreador GPS IDU-300
  - Rastreador de flota Riti
  - Configuración rastreador 3G vehículos
  - Configuración rastreador GPS
  - Rastreador gestión de flotas
  - Integración eLocation
---

# Riti - Configuración del IDU-300

Esta página documenta el contexto público de configuración para usar el Riti IDU-300 con la plataforma Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, los pasos prácticos de configuración y las comprobaciones más habituales que realizan técnicos e administradores al poner un IDU-300 en línea para seguimiento de flotas. La información aquí pretende ayudar a preparar el dispositivo y validar la conectividad con Plaspy, confiando en las herramientas del fabricante para acciones específicas del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El IDU-300 es una Unidad de Datos Inteligente 3G compatible con accesorios de vehículo y con el sistema Riti eLocation; confirme los procedimientos específicos con la documentación de Riti cuando aplique los ajustes públicos de Plaspy que se describen a continuación.

## Resumen de configuración

Configurar un IDU-300 para Plaspy se centra en dirigir el dispositivo al endpoint del servidor de Plaspy, seleccionar el transporte apropiado y confirmar que el equipo informe sus datos correctamente a la plataforma. El objetivo es que la unidad sea visible en Plaspy sin afectar la transmisión de eventos o telemetría de accesorios que el dispositivo soporte.

- Señale el IDU-300 al endpoint del servidor de Plaspy por dominio o IP y configure el puerto compartido de Plaspy.
- Elija el método de transporte que requiera el firmware del dispositivo, generalmente UDP o TCP.
- Guarde y aplique la configuración usando las herramientas o procedimientos de Riti.
- Reinicie el dispositivo si es necesario y verifique la transmisión hacia Plaspy.
- Valide en la plataforma los datos de accesorios o el reporte de eventos una vez confirmada la conectividad.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el IDU-300. Estos son los valores compartidos que Plaspy utiliza para todos los dispositivos soportados.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device firmware and choice
- Plaspy automatically detects the tracker protocol so the platform can accept connections from the IDU-300 once the server and port are set

Nota: deje exactamente el dominio o la IP y el puerto como se indican; Plaspy detecta automáticamente el protocolo del rastreador.

## Requisitos típicos antes de la configuración

- Asegúrese de que el IDU-300 esté alimentado e instalado según las instrucciones de Riti.
- Confirme una conexión de datos 3G activa y un plan de datos en la SIM adecuado para telemetría.
- Tenga acceso al método o software oficial de configuración de Riti necesario para cambiar ajustes de red y endpoints de servidor.
- Anote el identificador del equipo, como IMEI o número de serie, para poder relacionar el dispositivo con el vehículo en Plaspy.
- Verifique la cobertura de radio local y que los accesorios requeridos estén conectados si planea reenviar telemetría de accesorios.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el IDU-300 envía datos de ubicación y telemetría al endpoint y puerto del servidor Plaspy especificados en la configuración del dispositivo. Plaspy recibe la telemetría entrante y detecta automáticamente el protocolo, permitiendo registrar y monitorear el dispositivo en la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte de datos se envía por UDP o TCP según la configuración del equipo.
- Actualizaciones de ubicación, alarmas y telemetría de accesorios se reenvían a Plaspy para su visibilidad y reporte.
- Plaspy detecta automáticamente el protocolo del rastreador para normalizar los datos entrantes del IDU-300.
- Una vez que comienza el envío de datos, el dispositivo será visible en la vista de flota y en los registros de eventos de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Riti o al software para el IDU-300 según la documentación de Riti.
2. Ubique la sección de ajustes de red o servidor donde se introduce el dominio o la IP del servidor.
3. Ingrese d.plaspy.com o, alternativamente, la IP del servidor 54.85.159.138 si su herramienta prefiere una dirección IP.
4. Establezca el puerto en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
5. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte según el soporte de firmware.
6. Aplique o guarde la configuración dentro de la herramienta de Riti o el menú del dispositivo.
7. Reinicie el IDU-300 si la herramienta o el firmware lo requieren para activar los nuevos ajustes de servidor.
8. Valide la conectividad confirmando que el dispositivo reporte a Plaspy y aparezca en la plataforma.

## Ejemplo de comandos de configuración

El IDU-300 puede configurarse mediante el software proporcionado por Riti, una interfaz web o, en algunos casos, herramientas del fabricante. Los comandos y pasos exactos varían según el firmware y la interfaz de configuración que Riti ofrezca. Dado que esta guía pública no incluye cadenas de comandos específicas del dispositivo, siga las instrucciones de la herramienta de configuración de Riti y aplique los ajustes de Plaspy indicados arriba (d.plaspy.com o 54.85.159.138 y puerto 8888, UDP o TCP). Si dispone de comandos SMS o de consola suministrados por Riti en la documentación oficial, aplique allí los valores de servidor y puerto en el orden recomendado por el fabricante.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar la estructura de menús de configuración y la redacción exacta de las opciones de servidor y transporte; verifique siempre la versión de firmware instalada.
- Elegir UDP o TCP puede afectar la fiabilidad y la latencia según las condiciones de red y el comportamiento del firmware; pruebe ambas opciones si tiene dudas.
- Como Plaspy utiliza un puerto compartido para todos los dispositivos soportados, se introduce el mismo puerto independientemente del modelo del rastreador.
- La telemetría de accesorios del IDU-300, como paneles de despacho o sensores de temperatura, seguirá el comportamiento de reporte configurado por Riti.
- Conserve una copia de cualquier respaldo de configuración exportado desde las herramientas de Riti para poder restaurar ajustes conocidos en caso necesario.

## Por qué usar Plaspy con esta configuración

Usar el Riti IDU-300 con Plaspy ofrece a las organizaciones una vía directa para integrar la telemetría 3G de los vehículos en una plataforma de flota única. Dirigir el IDU-300 al endpoint y puerto compartidos de Plaspy permite consolidar ubicación, eventos y datos de accesorios para monitoreo operativo, despacho y análisis histórico.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de versiones de firmware y las herramientas de configuración más recientes, siempre verifique la información actual en el sitio del fabricante https://www.riti.com.tw/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
