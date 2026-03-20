---
slug: /navtelekom/signal_s_2114/configuration
id: signal_s_2114-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2114 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para conectar Navtelekom СИГНАЛ S-2114 a Plaspy con ajustes de servidor compartido y flujo recomendado
keywords:
 - Configuración Navtelekom СИГНАЛ S-2114
 - Instalación Navtelekom S-2114
 - Compatibilidad S-2114 con Plaspy
 - Configuración rastreador GPS S-2114
 - Ajustes de servidor rastreador Navtelekom
 - Rastreo vehicular S-2114
 - Configuración de rastreadores antiguos
 - Configuración rastreador en Plaspy
 - Configuración plataforma GPS S-2114
 - Configuración sensor de combustible RS-232
---

# Navtelekom - Configuración de СИГНАЛ S-2114

Esta página documenta el contexto público de configuración para usar el Navtelekom СИГНАЛ S-2114 con Plaspy. Se centra en los ajustes de servidor prácticos y el flujo de trabajo necesario para enviar posiciones GPS, eventos de alarma y telemetría de sensor de combustible RS-232 a la plataforma Plaspy. El СИГНАЛ S-2114 es un rastreador GPS GSM compatible con Plaspy, diseñado para instalaciones vehiculares heredadas y soporte de mantenimiento.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor. El S-2114 soporta conectividad GSM/GPRS, entrada de sensor de combustible por RS-232, configuración local por USB, actualizaciones remotas vía GPRS y reporte de alarmas por llamada de voz y SMS; use esta guía junto con la documentación oficial de Navtelekom para detalles específicos del dispositivo.

## Visión general de la configuración

El objetivo de la configuración es preparar el S-2114 para comunicarse de forma fiable con Plaspy, de modo que la ubicación, las alarmas y la telemetría de combustible sean visibles en su espacio de trabajo de flota. La configuración vincula el dispositivo al endpoint del servidor Plaspy y verifica el transporte y el comportamiento de reporte para que los equipos aparezcan y permanezcan en línea en la plataforma.

- Configure el endpoint del servidor del dispositivo y el transporte para que los paquetes se enruten a Plaspy.
- Confirme la conectividad celular GPRS para que el rastreador pueda enviar actualizaciones a la plataforma.
- Valide el cableado del sensor de combustible RS-232 y el mapeo de telemetría si necesita datos de combustible en Plaspy.
- Guarde y aplique la configuración, luego verifique que el dispositivo se registre y reporte en Plaspy.
- Documente la versión de firmware y la configuración para el mantenimiento futuro de unidades heredadas.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes de servidor de Plaspy al configurar el СИГНАЛ S-2114. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

Configure en el dispositivo el nombre de dominio o la dirección IP, establezca el puerto 8888 y elija UDP o TCP si el dispositivo requiere selección explícita del transporte.

## Requisitos previos típicos

- Asegúrese de que el S-2114 tenga alimentación y sea accesible físicamente para la configuración o la conexión USB.
- Inserte y active una SIM celular con datos (GPRS) para que el rastreador alcance Plaspy a través de la red móvil.
- Tenga disponibles las herramientas de configuración del fabricante, como software local por USB o los formatos de comandos SMS/documentados por Navtelekom.
- Confirme que dispone del IMEI/identificador del dispositivo para asociar el rastreador en Plaspy una vez que se conecte.
- Si planea usar telemetría de combustible, verifique la compatibilidad del sensor RS-232 y el cableado antes de habilitar la telemetría.
- Obtenga cualquier archivo de firmware archivado o notas de versión si necesita reproducir un comportamiento de firmware específico en unidades heredadas.

## Cómo se conecta este rastreador a Plaspy

El СИГНАЛ S-2114 envía datos de posición, eventos de alarma y telemetría de sensores mediante GPRS celular al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo esté configurado para apuntar al servidor compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888), Plaspy detectará automáticamente el protocolo del rastreador y empezará a procesar los reportes.

- Las actualizaciones de posición GPS se transmiten por GPRS a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Los eventos de alarma reportados por llamada de voz o SMS en el dispositivo pueden capturarse y registrarse en los flujos de trabajo de Plaspy.
- Las lecturas del sensor de combustible RS-232 se envían como telemetría al mismo endpoint de Plaspy para supervisión de combustible.
- El dispositivo puede usar UDP o TCP para enviar paquetes al puerto 8888; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Después de la configuración, valide que el dispositivo aparezca en línea y que las actualizaciones de telemetría sean visibles en Plaspy.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de Navtelekom para el СИГНАЛ S-2114 (herramienta local por USB, comandos SMS o utilidad del fabricante).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo server/host del dispositivo.
3. Establezca el puerto del dispositivo en 8888, el puerto compartido de Plaspy para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte; Plaspy admite ambos.
5. Configure cualquier APN o ajustes de datos necesarios para que el dispositivo establezca la conexión GPRS (siga las indicaciones de Navtelekom para el APN).
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo requieren.
7. Verifique que el rastreador reporte a Plaspy y que GPS, alarmas y telemetría RS-232 aparezcan en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El СИГНАЛ S-2114 soporta configuración local por USB y herramientas del fabricante; los comandos exactos y los formatos de SMS varían según el firmware y la utilidad de configuración de Navtelekom. Dado que los formatos de comando específicos del modelo son proporcionados por el fabricante y pueden diferir entre versiones de firmware, siga la documentación de Navtelekom o el software incluido para la sintaxis exacta de comandos y ejemplos. Si dispone de cadenas de comandos oficiales de Navtelekom, aplíquelas en el orden que recomiende el fabricante y luego verifique la conectividad con d.plaspy.com en el puerto 8888.

## Notas de configuración

- Las diferencias de firmware pueden alterar los formatos de comando y las opciones disponibles; registre siempre la versión de firmware antes y después de realizar cambios.
- Elija UDP o TCP según los requisitos de la instalación y las recomendaciones del firmware del dispositivo; ambos transportes son aceptados por Plaspy en el puerto 8888.
- Las unidades heredadas archivadas pueden requerir un firmware histórico específico o la utilidad de configuración original de Navtelekom para operar correctamente.
- Al habilitar la telemetría RS-232 de combustible, verifique el tipo de sensor y la escala en la configuración del dispositivo para que Plaspy reciba valores de combustible significativos.
- Mantenga una copia de seguridad de archivos de configuración que funcionen o documentación de comandos SMS para el mantenimiento de unidades descontinuadas.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom СИГНАЛ S-2114 con Plaspy ofrece una vía sencilla para recopilar ubicación, alarmas y telemetría de combustible de vehículos heredados en una plataforma centralizada de gestión de flotas. Para organizaciones que mantienen instalaciones antiguas, esta combinación favorece la continuidad: la conectividad GSM/GPRS y las entradas de sensor RS-232 del S-2114 se integran de forma natural en los flujos de ingestión e informes de Plaspy para soportar rastreo, alertas antirrobo y monitoreo de combustible.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de Navtelekom https://www.navtelecom.ru/ ya que las especificaciones y los procedimientos de instalación pueden cambiar con el tiempo.
