---
slug: /autoseeker/at_1/configuration
id: at_1-configuration
sidebar_label: Configuration
title: Autoseeker - AT-1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Autoseeker AT-1 con valores de servidor Plaspy y pasos prácticos para un rastreo fiable
keywords:
  - Configuración Autoseeker AT-1
  - Instalación Autoseeker AT-1
  - Configuración AT-1 Plaspy
  - Configuración rastreador GPS Autoseeker
  - Configuración servidor AT-1
  - Configuración rastreador GPS personal
  - Integración rastreador Plaspy
  - Configuración rastreador LTE-M
  - Configuración rastreador NB-IoT
  - Configuración geocerca y SOS rastreador
---

# Autoseeker - Configuración AT-1

Esta página describe el contexto público de configuración para usar el Autoseeker AT-1 4G Mini Micro GPS Tracker con Plaspy. Se concentra en los ajustes prácticos de servidor y en el flujo de configuración habitual que permiten que el AT-1 reporte ubicación, eventos SOS, disparos de geocerca y telemetría hacia la plataforma Plaspy. Use esta guía junto con la documentación del fabricante para los comandos específicos del dispositivo y notas de firmware.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador para que los registros de dispositivo aparezcan en la plataforma con mínima selección manual de protocolo por dispositivo. Los pasos exactos en el lado del fabricante para el AT-1 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello siempre confirme cualquier comando de dispositivo o interfaz con la documentación de Autoseeker.

## Resumen de la configuración

Esta configuración prepara el AT-1 para enviar su telemetría al endpoint de ingestión de Plaspy, de modo que el dispositivo sea visible en el panel de Plaspy y en las APIs. El objetivo principal es apuntar el rastreador al servidor de Plaspy, elegir el transporte cuando sea necesario y verificar que Plaspy reciba y procese los paquetes.

- Configure el dispositivo para que reporte al endpoint de servidor de Plaspy, de modo que las ubicaciones y eventos se enruten a Plaspy.
- Seleccione el modo de transporte si la interfaz del AT-1 requiere elegir entre UDP o TCP.
- Asegúrese de que la conectividad celular y los intervalos de reporte sean adecuados para la autonomía de la batería y las necesidades de monitoreo.
- Verifique que el dispositivo sea visible en la plataforma Plaspy y confirme que se reciben eventos SOS y de geocerca.
- Guarde y, si es necesario, reinicie el rastreador para que los nuevos ajustes de servidor surtan efecto.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el AT-1. Estos son los valores compartidos que Plaspy utiliza para los rastreadores compatibles.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device configuration interface
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos típicos antes de configurar

- Confirme que el AT-1 tiene la batería interna cargada y está encendido.
- Verifique que el dispositivo tenga conexión celular activa en una red compatible para LTE‑M, NB‑IoT o con conmutación a GSM cuando haga falta.
- Obtenga acceso al método oficial de configuración de Autoseeker, como la app del fabricante, la herramienta web o la lista de comandos por SMS.
- Tenga a mano las credenciales necesarias, el identificador del dispositivo o el IMEI para el registro del equipo en Plaspy.
- Asegúrese de poder aplicar y guardar los ajustes en el rastreador y realizar un reinicio si el firmware del dispositivo lo requiere.
- Prepare un plan de pruebas para validar la visibilidad de ubicación, SOS y eventos de geocerca en Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el AT-1 enviará su telemetría y paquetes de eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar los datos. La detección automática de protocolo de Plaspy reduce la necesidad de seleccionar manualmente el protocolo en muchos casos, aunque la selección del transporte (UDP o TCP) puede seguir siendo requerida en los ajustes del dispositivo.

- El rastreador reporta fijaciones de ubicación a d.plaspy.com o 54.85.159.138 en los intervalos de reporte configurados.
- La telemetría como estado de batería, eventos del botón SOS y disparos de geocerca se incluyen en los paquetes enviados a Plaspy.
- Elegir UDP o TCP en la configuración del dispositivo determina cómo se transportan los paquetes hacia el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los paquetes llegan al puerto 8888, de modo que el dispositivo se parsea correctamente en la plataforma.
- Tras una configuración exitosa, el dispositivo queda visible en Plaspy para monitoreo en tiempo real, alertas y reproducción histórica.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración de Autoseeker para el AT-1, como la app del fabricante, la herramienta web o la interfaz documentada de SMS/comandos.
2. Ingrese el host del servidor Plaspy ya sea como d.plaspy.com o como la dirección IP 54.85.159.138 según prefiera la herramienta del dispositivo.
3. Configure el dispositivo para usar el puerto 8888 para reportar a Plaspy.
4. Elija UDP o TCP si el dispositivo solicita seleccionar el transporte antes de guardar los ajustes.
5. Aplique o guarde la configuración en el rastreador usando la herramienta o interfaz de comandos del fabricante.
6. Reinicie el dispositivo si el procedimiento de configuración o el firmware requiere un reinicio para que los nuevos ajustes de red tengan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y la telemetría de ejemplo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos de configuración del modelo Autoseeker AT-1 varían según el firmware y la herramienta del proveedor en uso. Los comandos exactos o los formatos de mensaje los proporciona Autoseeker y pueden incluir SMS o comandos serial en algunas versiones de firmware. Dado que los comandos y formatos son específicos del fabricante y no se proporcionaron aquí, consulte la documentación de Autoseeker o la interfaz de configuración del dispositivo para la sintaxis exacta de los comandos para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.

Si cuenta con una lista de comandos del fabricante de Autoseeker que incluya ejemplos para establecer servidor, puerto o comandos de verificación, incluya esos comandos exactos al seguir su proceso interno de configuración.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los pasos de configuración y la sintaxis exacta de los comandos. Verifique los comandos según la versión de firmware instalada.
- Muchos dispositivos permiten seleccionar UDP o TCP. Elija según la guía del fabricante; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detectará automáticamente el protocolo.
- Las prácticas de instalación varían según el mercado y el proveedor. Use la herramienta de configuración oficial de Autoseeker o su documentación para obtener los pasos más precisos.
- Confirme la compatibilidad de la red celular al usar LTE‑M o NB‑IoT y revise el comportamiento de conmutación a GSM en áreas donde la cobertura LTE‑M o NB‑IoT sea limitada.
- Tras aplicar los ajustes, valide el reporte en Plaspy para confirmar que geocercas, SOS y telemetría se parsean como se espera.

## Por qué usar Plaspy con esta configuración

Configurar el Autoseeker AT-1 para reportar a Plaspy ofrece a cuidadores y equipos de operaciones visibilidad centralizada de ubicaciones, alertas SOS y eventos de geocerca en una sola plataforma. La combinación de las conexiones celulares de bajo consumo del AT-1 y el endpoint de ingestión de Plaspy permite un monitoreo práctico de larga duración con alertas accionables y reproducción histórica para revisión de incidentes.

Para obtener más información sobre Plaspy y cómo la plataforma integra telemetría de dispositivos como el AT-1 visite https://www.plaspy.com. Para la sintaxis de comandos específicos del dispositivo, notas de firmware y las instrucciones de configuración más recientes confirme los detalles en el sitio del fabricante https://autoseekergps.com/ ya que el comportamiento y los métodos de configuración del dispositivo pueden cambiar con el tiempo.
