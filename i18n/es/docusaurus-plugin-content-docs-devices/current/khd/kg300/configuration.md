---
slug: /khd/kg300/configuration
id: kg300-configuration
sidebar_label: Configuration
title: KHD - KG300 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador KHD KG300 para usar con Plaspy con ajustes de servidor compartido y flujo de configuración práctico
keywords:
  - configuración KHD KG300
  - configuración KG300
  - configuración KG300 Plaspy
  - configuración servidor KG300
  - configuración rastreador GPS KHD
  - configuración GPRS KG300
  - seguimiento vehicular KG300
  - KG300 rastreador Plaspy
  - configuración rastreador Plaspy
  - configuración plataforma GPS KG300
---

# KHD - Configuración del KG300

Esta página documenta el contexto público de configuración para utilizar el rastreador KHD KG300 con la plataforma Plaspy. Se centra en la información de servidor y en el flujo de configuración general necesario para apuntar un KG300 a Plaspy, de modo que el equipo pueda enviar posición, alertas y datos programados a la plataforma. Las indicaciones aquí se basan únicamente en información pública y en pasos prácticos típicos para integrar rastreadores GNSS con servicios de backend.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador para simplificar la integración. Los pasos de configuración del fabricante pueden variar según la versión de firmware del KG300, la revisión de hardware, el tipo de instalación y las herramientas que usen los proveedores o instaladores, por lo que siempre conviene contrastar con el manual del dispositivo y los recursos de KHD al aplicar los ajustes.

## Resumen de la Configuración

Esta sección explica los objetivos prácticos al configurar un KG300 para Plaspy. El objetivo principal es preparar el rastreador para que se comunique de forma confiable con el backend de Plaspy, de modo que los datos del dispositivo aparezcan en la plataforma y las alertas se entreguen según lo esperado.

- Configurar el equipo para que envíe datos a Plaspy usando el endpoint y puerto compartidos de Plaspy.
- Asegurar la conectividad de la red móvil y los ajustes de APN o la SIM correctos para que el reporte por GPRS/GSM funcione.
- Seleccionar el modo de transporte que requiere el dispositivo (UDP o TCP) y ajustar el puerto para que coincida con la configuración de Plaspy.
- Validar que el dispositivo envía informes de posición o eventos con regularidad y que esos informes son visibles en Plaspy.
- Verificar que la plataforma reciba reportes de eventos como alertas de emergencia y activaciones de geocerca.

## Ajustes del Servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el KG300 para reportar a la plataforma. Plaspy usa el mismo puerto para todos los dispositivos soportados y realiza detección automática del protocolo.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma puede aceptar informes de muchos tipos de dispositivos

## Requisitos Típicos Antes de la Configuración

- Energice el KG300 y confirme que el dispositivo completa su secuencia de arranque según la documentación de KHD.
- Tarjeta SIM activa con datos habilitados y crédito suficiente o un plan de datos para el reporte por GPRS.
- APN correcto y cualquier credencial de autenticación de la SIM que requiera el operador móvil.
- Acceso al método de configuración oficial de KHD, como la herramienta para PC del fabricante, la app móvil o el conjunto de comandos SMS.
- Un método para leer el estado y los registros del dispositivo tras la configuración, ya sea mediante la herramienta de KHD o comprobando los informes que lleguen a Plaspy.
- Conocimiento de la versión de firmware del dispositivo y de cualquier personalización del proveedor que pueda afectar la sintaxis de comandos u opciones de menú.

## Cómo se Conecta Este Rastreador a Plaspy

Cuando el KG300 está configurado para Plaspy, utiliza la red GPRS/GSM para enviar sus reportes de posición y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos mensajes y los asocia con la cuenta o el registro de dispositivo correctos en función de la identificación incluida en el informe.

- El KG300 envía datos a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo y analiza los mensajes entrantes del rastreador.
- Los reportes de eventos, como alertas de emergencia, cruces de geocerca y registros programados, se reenvían a la plataforma para su monitorización y generación de alertas.
- Una vez conectado, la visibilidad y el estado de reporte del dispositivo pueden validarse en Plaspy.

## Flujo de Configuración Común

1. Acceda al método o software oficial de configuración de KHD según lo documente el fabricante.
2. Localice la sección de ajustes de servidor o APN en la herramienta de configuración del dispositivo o en la lista de comandos SMS.
3. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor en la configuración del dispositivo.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el tipo de transporte.
5. Configure el APN del dispositivo y las credenciales de la SIM necesarias para que el rastreador pueda establecer la conexión GPRS.
6. Aplique o guarde la configuración y siga cualquier indicación del fabricante para confirmar los cambios.
7. Reinicie el equipo si el procedimiento de KHD exige un reinicio para que los ajustes de red surtan efecto.
8. Valide que el KG300 está reportando a Plaspy comprobando los mensajes entrantes y el estado del dispositivo en la plataforma Plaspy.

## Ejemplos de Comandos de Configuración

El KG300 admite configuración mediante herramientas del fabricante y comandos SMS, pero los comandos exactos y la sintaxis varían según el firmware y la personalización del proveedor. Dado que los conjuntos de comandos específicos del modelo son controlados por KHD, el enfoque público de configuración consiste en usar el software oficial de KHD o los comandos SMS documentados en el manual del KG300.

Si necesita el conjunto de comandos SMS del equipo o ejemplos concretos de comandos, consulte el manual de usuario de KHD o la herramienta de configuración proporcionada por KHD. Plaspy requiere que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que utilice UDP o TCP según lo configure el dispositivo.

## Notas de Configuración

- Las diferencias de firmware y las personalizaciones del proveedor pueden cambiar los nombres exactos de menús, comandos SMS u opciones de la herramienta utilizadas para establecer valores de servidor y APN.
- TCP puede ser preferible cuando se requiere entrega fiable, mientras que UDP se utiliza para menor sobrecarga; confirme según la documentación de KHD y las necesidades operacionales.
- La configuración vía SMS puede ser útil cuando el equipo aún no puede usar GPRS, pero la sintaxis de los comandos SMS varía según el firmware.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador en las conexiones entrantes.
- Siempre confirme el APN, las credenciales de la SIM y el estado de registro en la red antes de validar la conectividad con la plataforma.

## Por qué Usar Plaspy con Esta Configuración

Utilizar el KHD KG300 con Plaspy ofrece a las organizaciones una vía sencilla para capturar posiciones de vehículos, alertas y telemetría programada en un único endpoint compartido de backend. La combinación del reporte GPRS/GSM del KG300 y la detección automática de protocolos de Plaspy facilita la integración y reduce la necesidad de adaptar configuraciones de servidor individuales por modelo de rastreador.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos como el KG300 visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware e instrucciones de instalación, siempre verifique la información actual en el sitio del fabricante http://www.khd.hk. Los métodos de configuración del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es importante consultar la documentación del fabricante al aplicar los pasos de configuración.
