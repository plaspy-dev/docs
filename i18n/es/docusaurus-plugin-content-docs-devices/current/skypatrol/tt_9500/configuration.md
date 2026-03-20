---
slug: /skypatrol/tt_9500/configuration
id: tt_9500-configuration
sidebar_label: Configuration
title: SkyPatrol - TT 9500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar SkyPatrol TT 9500 y reportar a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - Configuración SkyPatrol TT 9500
  - Configuración TT 9500 SkyPatrol
  - Configuración TT 9500 Plaspy
  - Configuración rastreador GPS SkyPatrol
  - Ajustes de servidor TT 9500
  - Configuración de rastreo TT 9500
  - Configuración de dispositivo Plaspy
  - Configuración de rastreador Plaspy
  - Configuración plataforma GPS TT 9500
  - Rastreo de vehículo TT 9500
---

# SkyPatrol - Configuración TT 9500

Esta página ofrece orientación pública para usar el SkyPatrol TT 9500 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy espera y presenta un flujo de trabajo práctico, orientado a la plataforma, para preparar el TT 9500 para el reporte. Utilice esta guía junto con la documentación del dispositivo y las herramientas del proveedor que emplee para configurar el rastreador.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que utilice el vendedor o el instalador. Verifique siempre los comandos y procedimientos específicos del dispositivo con la documentación de SkyPatrol para su firmware y hardware.

## Resumen de la configuración

El objetivo del proceso de configuración es apuntar el TT 9500 a Plaspy y validar que el rastreador envíe datos de ubicación y eventos de forma confiable. Dado que el TT 9500 soporta el protocolo EDDIE+ y cuenta con un módem cuatribanda, la configuración suele centrarse en el acceso a la red y en los ajustes del endpoint de servidor que requiere Plaspy.

- Configure el rastreador para que reporte al endpoint del servidor de Plaspy y así la plataforma pueda recibir datos.
- Seleccione el protocolo de transporte si el dispositivo exige elegir entre UDP o TCP.
- Establezca la dirección y el puerto del servidor correctos y guarde la configuración en el equipo.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después del reinicio o la conexión a la red.
- Use las herramientas del fabricante o los comandos SMS documentados por SkyPatrol para una configuración persistente.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el TT 9500 para que reporte a Plaspy. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos habituales

- Confirme que el TT 9500 tiene una tarjeta SIM compatible y activa y un plan de datos del operador adecuado para su región.
- Asegúrese de que el dispositivo tenga alimentación, esté instalado según las indicaciones del fabricante y, de ser posible, tenga vista despejada al cielo para una primera fijación GPS.
- Obtenga acceso al método oficial de configuración de SkyPatrol, como la herramienta del proveedor, la interfaz web o el conjunto de comandos SMS correspondiente a su firmware.
- Anote el IMEI del dispositivo y cualquier identificador que Plaspy requiera para el registro o soporte.
- Verifique que dispone del APN y los ajustes del operador correctos si el módem los necesita para conectividad de datos.
- Esté preparado para reiniciar o cortar y restaurar la alimentación del rastreador después de guardar los ajustes para que los cambios surtan efecto.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TT 9500 envía reportes de ubicación y eventos a Plaspy usando el endpoint y puerto compartidos. Plaspy recibe e interpreta los mensajes del dispositivo y pone los datos a disposición en la plataforma para monitoreo e informes.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy.
- Los mensajes se envían por el protocolo de transporte seleccionado, UDP o TCP, al puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al parser correcto.
- Eventos del dispositivo como entradas y salidas de geocerca y acciones de relé son reenviados a Plaspy cuando el TT 9500 está configurado para reportarlos.
- Un reporte exitoso hace que el dispositivo sea visible y activo en la plataforma Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de SkyPatrol para el TT 9500 proporcionado por el fabricante o el distribuidor.
2. Introduzca la dirección del servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 según la opción de configuración disponible.
3. Configure el puerto del dispositivo en 8888 para que coincida con la configuración de puerto compartido de Plaspy.
4. Elija UDP o TCP si el rastreador solicita seleccionar el protocolo de transporte y la interfaz de configuración lo muestra.
5. Aplique o guarde la configuración en la interfaz del equipo o mediante la herramienta del proveedor o comandos SMS.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el proceso de configuración de SkyPatrol lo requiere para que los nuevos ajustes entren en vigor.
7. Valide que el TT 9500 reporte a Plaspy y se muestre en la plataforma comprobando la conectividad y la llegada de mensajes.

## Ejemplos de comandos de configuración

Los comandos exactos y el método para enviarlos varían según el firmware de SkyPatrol y la herramienta de configuración empleada. Los dispositivos SkyPatrol a menudo se configuran mediante una aplicación de configuración del proveedor o mediante cadenas de comandos SMS documentadas por el fabricante. Debido a que la sintaxis y los comandos difieren según el firmware, consulte la documentación de SkyPatrol para el formato correcto en su versión.

Si utiliza un flujo de comandos SMS proporcionado por el fabricante o una app de configuración, los valores públicos clave a incluir son d.plaspy.com o 54.85.159.138 y el puerto 8888, además del transporte elegido UDP o TCP. Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Notas de configuración

- Las versiones de firmware pueden cambiar la sintaxis de los comandos y las funciones disponibles. Confirme los comandos SMS exactos o los campos de la app para su firmware del TT 9500.
- Si la configuración del dispositivo ofrece tanto UDP como TCP, pruebe la opción de transporte que mejor se adapte a su red y al entorno del operador; Plaspy aceptará cualquiera en el puerto 8888.
- Asegúrese de que el APN y los ajustes del operador sean correctos para que el TT 9500 pueda establecer una conexión de datos antes de probar el reporte al servidor.
- Las funciones de geocerca y relé descritas por SkyPatrol se configuran en el dispositivo y luego se informan a Plaspy una vez establecida la comunicación.
- Las prácticas de instalación y las revisiones de hardware pueden afectar la colocación y los procedimientos de alimentación del TT 9500; siga la guía de instalación de SkyPatrol para obtener resultados duraderos.

## Por qué usar Plaspy con esta configuración

Usar el SkyPatrol TT 9500 con Plaspy ofrece una forma sencilla de centralizar los datos de ubicación y eventos en una única plataforma para monitoreo, notificaciones de geocerca y supervisión operativa. Las capacidades de rastreo del TT 9500, combinadas con la detección automática de protocolos y el endpoint unificado de Plaspy, facilitan las implementaciones a gran escala y reducen la complejidad de configuración por dispositivo.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio de SkyPatrol https://www.skypatrol.com/ ya que las funciones y comandos del dispositivo pueden cambiar con el tiempo.
