---
slug: /gotop/tk_120/configuration
id: tk_120-configuration
sidebar_label: Configuration
title: GOTOP - TK-120 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP TK-120 con Plaspy, incluye ajustes de servidor y flujo práctico para rastreo por GPRS y SMS
keywords:
  - Configuración GOTOP TK-120
  - Instalación GOTOP TK-120
  - GOTOP TK-120 Plaspy
  - Configuración rastreador GPS GOTOP
  - Configuración servidor TK-120
  - Configuración GPRS TK-120
  - Configuración rastreador GOTOP
  - Rastreo vehicular TK-120
  - Rastreador de activos TK-120
  - Configuración de dispositivo Plaspy
---

# GOTOP - Configuración del TK-120

Esta página explica el contexto público de configuración para usar el GOTOP TK-120 con la plataforma Plaspy. Aquí se detalla cómo preparar el rastreador para que envíe datos de ubicación a Plaspy mediante GPRS y cómo las funciones de reporte por SMS se relacionan con la visibilidad en la plataforma. El TK-120 es un rastreador GPS compacto que utiliza la red GSM y satélites GPS, admite respuestas de ubicación por SMS con enlaces a Google Maps y puede transmitir posiciones a software de rastreo vía GPRS.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a la plataforma. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página se centra en los ajustes públicos de Plaspy y en un flujo práctico para aplicarlos al TK-120.

## Visión general de la configuración

El objetivo de esta configuración es preparar el TK-120 para que se comunique de forma fiable con Plaspy y sea visible en la plataforma para supervisión en tiempo real y generación de eventos. El proceso generalmente implica colocar las configuraciones de red correctas en el equipo, elegir el protocolo de transporte y validar que Plaspy reciba datos.

- Configure el TK-120 para usar Plaspy como punto de reporte, de modo que los paquetes de posición por GPRS lleguen a la plataforma.
- Seleccione el método de transporte apropiado y asegúrese de que el dispositivo esté configurado para usar el puerto 8888 al reportar.
- Verifique la conectividad de red y la configuración del APN o datos de la SIM para que el rastreador tenga acceso a la red de datos móviles.
- Valide el reporte del dispositivo en Plaspy y confirme que los puntos de ubicación aparecen en la plataforma.
- Conserve una copia de las configuraciones del equipo y registre la versión de firmware para facilitar la resolución de problemas en el futuro.

## Configuración del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el TK-120 para reportar datos de posición a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; configure el rastreador en UDP o TCP según sea necesario
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que el puerto 8888 es el estándar a aplicar para el TK-120 cuando informa a Plaspy.

## Requisitos habituales antes de comenzar

- Un TK-120 con alimentación y batería en buen estado, correctamente instalado en el vehículo o activo.
- Una tarjeta SIM activa con datos móviles habilitados y el APN correcto para su operador.
- Acceso al método de configuración del GOTOP TK-120, como la interfaz de comandos por SMS o la herramienta oficial de configuración o el manual.
- Conocimiento de los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) y si su despliegue prefiere UDP o TCP.
- Un dispositivo que pueda enviar y recibir SMS para confirmaciones iniciales si usa configuración por SMS.
- Acceso a Plaspy para verificar que el dispositivo aparece y transmite datos de ubicación después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TK-120 puede configurarse para enviar actualizaciones de ubicación por GPRS al punto de enlace y puerto del servidor Plaspy. Cuando está correctamente configurado, el rastreador transmite paquetes de posición periódicos a Plaspy, donde la plataforma analiza los datos entrantes y hace visible el dispositivo para los usuarios.

- El rastreador reporta datos de posición y movimiento al punto de enlace compartido de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP en el puerto 8888 según las opciones del equipo y el entorno de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los paquetes, de modo que la plataforma selecciona el manejador de protocolo correcto.
- Tras el reporte exitoso del dispositivo, Plaspy ofrece visibilidad para monitoreo, alertas de eventos y datos históricos de posición.
- El TK-120 puede seguir enviando respuestas de ubicación por SMS a un número de teléfono, pero para supervisión desde la plataforma se recomienda usar el reporte por GPRS hacia Plaspy.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del GOTOP TK-120 según lo documentado por el fabricante.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del equipo.
3. Configure el puerto de reporte en 8888 para el perfil de reporte del dispositivo.
4. Elija el protocolo de transporte UDP o TCP si el equipo requiere seleccionar un método de transporte.
5. Aplique o guarde la configuración en el TK-120 usando la herramienta del fabricante o un comando SMS.
6. Reinicie el dispositivo si el equipo o el firmware lo requieren para aplicar los ajustes de red.
7. Valide que el dispositivo reporta a Plaspy y que las actualizaciones de posición aparecen en la plataforma.

## Ejemplo de comandos de configuración

Los comandos exactos y la sintaxis de configuración para el GOTOP TK-120 dependen del firmware y de las herramientas del proveedor que utilice. Los dispositivos TK-120 comúnmente admiten configuración por SMS y utilidades del proveedor, pero el conjunto de comandos específico varía según la versión de firmware. Consulte el manual oficial de configuración de GOTOP para los comandos SMS precisos o los pasos en el software.

Si prefiere configurar por SMS, los flujos públicos típicos implican enviar comandos SMS para establecer el APN, servidor y puerto, y luego consultar el dispositivo para confirmar los ajustes. Debido a que los formatos de los comandos varían por firmware, consulte el manual de GOTOP para las cadenas SMS exactas requeridas por su dispositivo.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos y menús disponibles; siempre registre la versión de firmware del equipo antes de realizar configuraciones masivas.
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del operador; UDP es común por su menor sobrecarga, mientras que TCP puede ofrecer entrega más fiable en algunas redes.
- La configuración por SMS es práctica para equipos remotos, pero asegúrese de que el APN y el servicio GPRS funcionen para que el dispositivo pueda alcanzar el servidor Plaspy.
- Mantenga documentación de los ajustes exactos usados en cada dispositivo para poder reproducir o solucionar configuraciones en toda la flota.
- Confirme que las herramientas o utilidades específicas del proveedor sean las versiones oficiales proporcionadas por GOTOP para evitar problemas de compatibilidad.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP TK-120 con Plaspy ofrece una forma práctica de combinar el formato compacto del rastreador y la telemetría basada en GSM con una plataforma centralizada de monitoreo de flotas y activos. Configurar el dispositivo para reportar a Plaspy permite a las organizaciones ver ubicaciones en tiempo real, revisar el historial de eventos y centralizar la visibilidad de múltiples dispositivos en un solo lugar.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration details, firmware behavior, and official instructions on the manufacturer website https://www.gotop.cc/ as vendor specifications and setup methods may change over time.
