---
slug: /arusnavi/arnavi_6/configuration
id: arnavi_6-configuration
sidebar_label: Configuration
title: Arusnavi - ARNAVI 6 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador ARNAVI 6 a Plaspy usando la configuración de servidor compartida y pasos comunes de instalación
keywords:
  - Configuración Arusnavi ARNAVI 6
  - Configuración del servidor ARNAVI 6
  - Configuración Arusnavi para Plaspy
  - Configuración software ARNAVI 6
  - Configuración plataforma GPS ARNAVI 6
  - Integración de rastreador con Plaspy
  - Rastreo de vehículos ARNAVI 6
  - Configuración rastreador gestión de flotas
  - Guía rastreador GPS Plaspy
  - Configuración remota de rastreador
---

# Arusnavi — Configuración ARNAVI 6

Esta página ofrece contexto público de configuración para usar el rastreador Arusnavi ARNAVI 6 con Plaspy. Resume los parámetros de servidor compartidos que Plaspy requiere y explica los pasos prácticos para apuntar los dispositivos ARNAVI 6 al endpoint de Plaspy, de modo que envíen ubicación y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se comunica. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor, por lo que siempre confirme las acciones específicas del dispositivo en la documentación oficial de Arusnavi.

## Resumen de la configuración

Este proceso prepara una unidad ARNAVI 6 para enviar datos GNSS y telemetría a Plaspy, de modo que el dispositivo sea visible y administrable en la plataforma. El enfoque está en apuntar el dispositivo a Plaspy, seleccionar el transporte y validar que los datos lleguen al endpoint compartido.

- Configure la dirección del servidor del dispositivo al endpoint de Plaspy para que los datos uplink se entreguen a la plataforma.
- Establezca el puerto y el modo de transporte para que el rastreador abra sesión en Plaspy en el puerto monitoreado.
- Guarde y aplique la configuración mediante el configurador web del ARNAVI 6 o la herramienta del fabricante compatible.
- Reinicie o ciclé el dispositivo si es necesario para que comience a reportar a Plaspy.
- Valide la conectividad del dispositivo y la telemetría en Plaspy después de la configuración.

## Parámetros del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan
- tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Asegúrese de que el ARNAVI 6 tenga alimentación y, si corresponde, batería de respaldo o cableado protegido.
- Conectividad celular activa con SIM(s) operativas y plan de datos si la conectividad celular es el canal principal. ARNAVI 6 soporta operación con doble SIM.
- Si utiliza Wi‑Fi como respaldo, asegúrese del acceso a la red local y de las credenciales necesarias para ese canal.
- Acceso al método oficial de configuración de Arusnavi, como el configurador web, herramientas USB o Bluetooth, o el software provisto por el vendedor.
- Confirme la versión de firmware del dispositivo y regístrela, ya que las instrucciones del proveedor pueden variar según el firmware.
- Antenas y cableado instalados según la guía de instalación del dispositivo para garantizar señal GNSS y celular adecuada.

## Cómo se conecta este rastreador a Plaspy

ARNAVI 6 empaqueta datos GNSS y telemetría y los envía al endpoint y puerto compartidos de Plaspy mediante el canal de transporte seleccionado. Plaspy recibe estos mensajes, detecta automáticamente el protocolo del rastreador y hace que el dispositivo sea visible en la plataforma para seguimiento en vivo y procesamiento de eventos.

- El dispositivo envía fixes de posición y telemetría a d.plaspy.com en el puerto 8888 usando UDP o TCP.
- Plaspy detecta automáticamente el protocolo usado por el dispositivo y parsea los datos entrantes.
- La telemetría proveniente de GNSS, CAN, sensores seriales, sensores BLE e entradas digitales se incluye en los mensajes uplink.
- Cuando no hay disponibilidad celular, ARNAVI 6 puede usar Wi‑Fi como canal de respaldo opcional si está configurado.
- Plaspy utiliza el puerto común para centralizar los datos entrantes de todos los dispositivos soportados, simplificando el enrutamiento y la detección.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración de Arusnavi, como el configurador web del ARNAVI 6, la utilidad USB o la herramienta de aprovisionamiento por Bluetooth.
2. Ingrese la dirección del servidor de Plaspy ya sea como el dominio d.plaspy.com o como la IP del servidor 54.85.159.138 en el campo de servidor.
3. Establezca el puerto del dispositivo en 8888 como puerto de destino para los mensajes uplink.
4. Elija UDP o TCP para el transporte si el dispositivo requiere selección explícita del tipo de transporte.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
6. Reinicie o haga un ciclo de energía del ARNAVI 6 si el firmware lo requiere para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy confirmando la presencia del dispositivo y la telemetría reciente en la plataforma Plaspy.

## Ejemplo de parámetros de configuración

Los comandos y la secuencia exacta de configuración varían según el firmware del ARNAVI 6 y las herramientas de Arusnavi empleadas. Las utilidades del fabricante pueden ofrecer campos en GUI, modos de comando por USB o perfiles de configuración por Bluetooth para establecer el dominio del servidor, la IP del servidor, el transporte y el puerto. Use el configurador web oficial de Arusnavi o la utilidad para PC e ingrese los siguientes parámetros públicos de Plaspy:

- Server domain: d.plaspy.com
- Server IP address: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Debido a que las herramientas del fabricante difieren, consulte la interfaz de configuración del ARNAVI 6 para conocer los campos exactos y la sintaxis de comandos que requiere su firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús y la sintaxis de los comandos. Verifique la versión de firmware antes de seguir las instrucciones.
- Elija UDP o TCP según la preferencia del instalador o la orientación del proveedor; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Si utiliza la configuración por nombre de dominio, establezca d.plaspy.com para que la resolución DNS proporcione el endpoint correcto de Plaspy.
- Use el configurador web del ARNAVI 6, la herramienta USB o el aprovisionamiento por Bluetooth según lo que su dispositivo y firmware soporten para obtener la configuración más fiable.
- Registre los cambios de configuración y reinicie el dispositivo después de guardar para asegurar que los ajustes entren en vigor.

## Por qué usar Plaspy con esta configuración

Conectar ARNAVI 6 a Plaspy ofrece una vía directa para obtener visibilidad continua de ubicación y consolidación de telemetría para monitoreo de flotas y activos. Al enviar el dispositivo datos GNSS, CAN, seriales y de sensores BLE al endpoint compartido de Plaspy, las organizaciones pueden centralizar alertas, informes históricos y flujos de trabajo de seguimiento en tiempo real en flotas mixtas.

Learn more about Plaspy and how it handles device connections at https://www.plaspy.com. For the most current device specific setup steps, firmware behavior, and manufacturer guidance always verify details on the official Arusnavi site https://www.arusnavi.ru.
