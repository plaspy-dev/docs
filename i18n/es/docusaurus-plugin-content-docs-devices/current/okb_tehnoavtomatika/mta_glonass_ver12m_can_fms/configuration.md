---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_fms/configuration
id: mta_glonass_ver12m_can_fms-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del OKB Tehnoavtomatika MTA-Glonass ver12M CAN FMS con ajustes de servidor Plaspy y flujo de instalación
keywords:
  - Configuración OKB Tehnoavtomatika MTA Glonass
  - Configuración MTA Glonass ver12M CAN FMS
  - Configuración MTA Glonass Plaspy
  - Guía ajustes servidor Plaspy
  - Configuración rastreador vehicular Plaspy
  - Configuración telemetría CAN FMS
  - Guía configuración rastreador GNSS
  - Rastreo de flotas MTA Glonass
  - Integración GPS Plaspy
  - Configuración telemetría y control de combustible
---

# OKB Tehnoavtomatika - Configuración de MTA-Glonass (ver.12M-CAN FMS)

Esta página describe el contexto público de configuración para utilizar el OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN FMS) con Plaspy. Se centra en la información práctica de servidor y en el flujo de trabajo necesario para enviar coordenadas GNSS y telemetría del vehículo desde el dispositivo hacia Plaspy, usando los detalles de integración públicos y los ajustes de servidor compartidos de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el backend. Los pasos de configuración por parte del fabricante para el MTA-Glonass pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; por ello use esta guía junto con el manual del dispositivo y los recursos oficiales del fabricante.

## Visión general de la configuración

Este proceso prepara la terminal MTA-Glonass para comunicarse de forma fiable con Plaspy, de modo que la posición GNSS, la telemetría CAN FMS y las entradas de sensores sean visibles en los paneles y reportes de Plaspy. El objetivo es apuntar el terminal al endpoint de reporte, validar transporte y conectividad, y confirmar el envío de eventos en la plataforma Plaspy.

- Configure el endpoint de reporte del dispositivo para que apunte al servidor Plaspy y se entreguen los paquetes de posición y telemetría.  
- Seleccione y verifique el método de transporte que soporta el rastreador, UDP o TCP, y ajuste el transporte elegido en el dispositivo.  
- Asegúrese de que el dispositivo tenga una SIM operativa y un canal de datos activo para que las transmisiones GPRS o DATA lleguen a Plaspy, con SMS como método alternativo si aplica.  
- Valide la conectividad y el envío de eventos para que el dispositivo aparezca como un activo activo en Plaspy y los campos de telemetría se mapeen correctamente.  
- Guarde y aplique la configuración en la herramienta del fabricante y realice una prueba para confirmar la entrega de ubicación y telemetría.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com es el endpoint público de Plaspy para el reporte de dispositivos.  
- La IP del servidor 54.85.159.138 puede utilizarse cuando se requieran endpoints numéricos directos.  
- El puerto 8888 es el puerto único que Plaspy usa para conexiones de dispositivos. Todos los dispositivos en Plaspy usan el mismo puerto.  
- Se admite transporte por UDP o TCP; configure UDP o TCP en el dispositivo si la herramienta de configuración lo requiere.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor acepta múltiples protocolos de rastreadores en el puerto compartido y los identifica en el servidor.

## Requisitos típicos antes de la configuración

- Confirme que el equipo MTA-Glonass esté alimentado y accesible, con el cableado correcto y una batería interna activa si se necesita para pruebas fuera de línea.  
- Prepare una tarjeta SIM con un plan de datos habilitado para GPRS o transferencia de datos móviles y verifique cobertura en el sitio de instalación.  
- Obtenga la herramienta de configuración oficial del fabricante, la lista de comandos SMS o el método de acceso de OKB Tehnoavtomatika para este modelo.  
- Disponga de información básica del cableado CAN FMS y de la integración con el vehículo para poder habilitar y mapear la telemetría CAN.  
- Tenga acceso a una cuenta Plaspy o a un administrador del sistema que pueda verificar que el dispositivo aparece y envía telemetría a Plaspy.  
- Use el manual del dispositivo para confirmar la versión de firmware y cualquier paso específico que afecte parámetros de servidor o APN.

## Cómo se conecta este rastreador a Plaspy

El MTA-Glonass envía coordenadas GNSS y telemetría del vehículo a través del canal de datos celular hacia Plaspy, con SMS como respaldo donde esté soportado para mensajes o configuración remota. El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir la telemetría y mostrarla en sus paneles.

- La posición GNSS y la telemetría CAN FMS se transmiten por el canal GPRS o DATA al endpoint de Plaspy.  
- El respaldo por SMS puede usarse para configuración o para entrega limitada de telemetría cuando el firmware del dispositivo lo permite.  
- El rastreador reporta al servidor Plaspy en d.plaspy.com (o 54.85.159.138) usando el puerto 8888.  
- El transporte se puede configurar como UDP o TCP en el dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Una vez activo el reporte, Plaspy recibe eventos de ubicación, parámetros CAN, entradas de combustible y alertas configuradas.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración de OKB Tehnoavtomatika para el MTA-Glonass, como el software del proveedor o el conjunto de comandos SMS.  
2. En la herramienta de configuración o en el comando SMS, introduzca la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 según los requisitos del dispositivo.  
3. Configure el puerto del dispositivo en 8888, que es el puerto estándar de Plaspy para todos los dispositivos.  
4. Seleccione UDP o TCP si el dispositivo requiere elegir explícitamente el transporte y adecue la selección a la política de red.  
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los cambios fueron escritos en el dispositivo.  
6. Reinicie el dispositivo si el firmware lo requiere o si el fabricante lo recomienda para activar los nuevos ajustes de servidor.  
7. Valide que el dispositivo está reportando a Plaspy revisando la actividad y la telemetría en la plataforma Plaspy o utilizando las herramientas de diagnóstico de Plaspy.

## Ejemplo de comandos de configuración

El conjunto exacto de comandos y la sintaxis los proporciona OKB Tehnoavtomatika y pueden variar según la versión de firmware o la utilidad de configuración usada. Por esta razón no se incluye aquí una lista universal de comandos. Use el manual del dispositivo o la herramienta oficial del proveedor para establecer el servidor a d.plaspy.com o 54.85.159.138 y el puerto a 8888, seleccionando UDP o TCP según corresponda.

Si su herramienta de proveedor admite configuración por SMS para ajustes remotos, los pasos públicos típicos incluyen reemplazar los parámetros de host y puerto en los comandos SMS oficiales y enviarlos desde un número autorizado. Siempre confirme la sintaxis de los comandos con la referencia del MTA-Glonass suministrada por OKB Tehnoavtomatika.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración disponibles y la sintaxis exacta de los comandos; consulte siempre el manual del dispositivo para su firmware específico.  
- Elija TCP cuando necesite entrega orientada a la conexión y UDP cuando prefiere menor latencia y menor sobrecarga, según indicaciones del instalador y de la red.  
- Para el mapeo de CAN FMS y las entradas de sensores de combustible, consulte los diagramas de cableado del vehículo y confirme el tipo de sensor (pulso o analógico) antes de configurar los campos de telemetría.  
- Aplicar la configuración de forma remota por SMS o por aire puede requerir que el remitente esté listado como autorizado en la configuración del dispositivo.  
- Consulte la documentación y los canales de soporte del fabricante OKB Tehnoavtomatika para comandos avanzados o específicos del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el MTA-Glonass (ver.12M-CAN FMS) con Plaspy aporta a los operadores de flota la combinación de ubicación GNSS y telemetría del bus de vehículo en una sola integración. Esta combinación permite seguimiento en tiempo real, ingestión de parámetros CAN FMS para métricas de motor y vehículo, monitoreo de combustible mediante entradas analógicas o por pulso, y generación de eventos que alimentan las alertas y los informes históricos de Plaspy.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más recientes sobre la configuración específica del dispositivo, la sintaxis de comandos y notas de firmware verifique la información con el fabricante en http://www.okb-ta.ru/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
