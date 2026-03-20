---
slug: /gotop/tv_690/configuration
id: tv_690-configuration
sidebar_label: Configuration
title: GOTOP - TV-690 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP TV-690 y conectarlo a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración GOTOP TV-690
  - Instalación GOTOP TV-690
  - Configuración de servidor GOTOP TV-690
  - Configuración de rastreador GPS GOTOP
  - Configuración de rastreador Plaspy
  - GOTOP TV-690 Plaspy
  - Instalación rastreador personal TV-690
  - Configuración plataforma GPS GOTOP
  - Configuración software seguimiento TV-690
  - Configuración seguimiento GOTOP
---

# GOTOP - Configuración TV-690

Esta página documenta el contexto público de configuración para conectar el rastreador personal GOTOP TV-690 con la plataforma Plaspy. Se centra en los detalles prácticos del servidor y del flujo de trabajo que necesitará para apuntar el TV-690 a Plaspy, de modo que el dispositivo pueda enviar posición y estado a la plataforma. Este contenido es un complemento práctico al manual del equipo y a las notas de compatibilidad de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los datos llegan a la plataforma. Los pasos exactos del lado del fabricante para el TV-690 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguir el manual del equipo o las instrucciones del proveedor para controles específicos del dispositivo mientras usa los ajustes de Plaspy que se muestran aquí.

## Resumen de la configuración

El objetivo de esta configuración es preparar el TV-690 para que envíe de forma confiable información de ubicación y estado a Plaspy a través de la red de datos móviles. Debe apuntar el rastreador al endpoint compartido de Plaspy y confirmar el transporte y la conectividad para que el dispositivo sea visible y gestionable en la plataforma Plaspy.

- Apuntar el TV-690 al endpoint del servidor de Plaspy para que los datos lleguen a la plataforma.
- Asegurar que el dispositivo tenga una SIM activa y acceso a datos móviles para que el reporte por GPRS alcance a Plaspy.
- Configurar el transporte en UDP o TCP y usar el puerto compartido de Plaspy para que coincida con lo que espera la plataforma.
- Aplicar y guardar la configuración en el rastreador y reiniciarlo si es necesario para habilitar el reporte.
- Verificar que el dispositivo aparezca en Plaspy después de configurar y que se reciban actualizaciones periódicas de posición.

## Ajustes de servidor de Plaspy

Use estos ajustes públicos de Plaspy al configurar el TV-690. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y la plataforma detecta automáticamente el protocolo del rastreador cuando llegan los datos.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

## Requisitos típicos antes de la configuración

- Un GOTOP TV-690 alimentado y operativo con acceso físico al método de configuración.
- Una tarjeta SIM activa instalada con servicio de datos habilitado y el APN requerido configurado para datos móviles.
- Acceso al método de configuración oficial de GOTOP, como comandos SMS, una herramienta de configuración o software del proveedor según lo suministre el fabricante.
- Conocimientos básicos de las credenciales o códigos de acceso del rastreador necesarios para cambiar los ajustes del servidor.
- Una cuenta de Plaspy u acceso organizacional para que pueda confirmar que el dispositivo se registra y reporta tras la configuración.
- Un periodo corto de prueba para validar el reporte en vivo después de aplicar los ajustes.

## Cómo se conecta este rastreador a Plaspy

El TV-690 usa su radio GSM/GPRS para enviar posiciones y mensajes de estado a un servidor configurado. Para la integración con Plaspy, el rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma reciba e interprete la telemetría entrante.

- El rastreador envía fixes GPS y mensajes de estado por GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede seleccionar UDP o TCP como transporte en el dispositivo si el menú de configuración exige una elección.
- Plaspy detecta automáticamente el protocolo del rastreador en la plataforma, por lo que el dispositivo puede procesarse sin un endpoint personalizado por unidad.
- Una vez que el dispositivo reporta, Plaspy mostrará actualizaciones de ubicación y datos operativos básicos para monitoreo y revisión histórica.
- Las respuestas por SMS siguen siendo útiles para comprobaciones puntuales rápidas de ubicación, pero el reporte continuo hacia Plaspy utiliza la ruta de datos IP.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial del GOTOP TV-690 recomendado por el fabricante.
2. Localice la sección de ajustes de servidor o servidor APN en la interfaz de configuración del equipo.
3. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o 54.85.159.138.
4. Configure el puerto del servidor a 8888, ya que Plaspy utiliza este puerto para todos los dispositivos compatibles.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte.
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si la herramienta o el manual indican hacerlo.
7. Valide que el dispositivo esté reportando a Plaspy comprobando los mensajes entrantes y las actualizaciones de posición en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El TV-690 admite métodos de configuración provistos por el fabricante que pueden incluir comandos SMS, una herramienta de configuración por USB o serie, o software del proveedor. Los conjuntos de comandos y la sintaxis exacta varían según el firmware y la herramienta del proveedor; consulte la documentación de GOTOP o al proveedor para obtener los comandos precisos para su unidad.

Si su equipo admite configuración por SMS, un enfoque habitual es enviar comandos de configuración o utilizar las herramientas del proveedor para establecer el host y el puerto del servidor con los valores de Plaspy indicados anteriormente. Debido a que los formatos de comando difieren por firmware, no confíe en ejemplos genéricos sin confirmarlos con el manual de GOTOP.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de los menús, la sintaxis de comandos y las opciones de transporte disponibles. Consulte siempre el manual de su unidad.
- Elija UDP o TCP según las opciones que presente el dispositivo; Plaspy acepta ambos y detectará el protocolo automáticamente.
- La configuración por SMS suele estar disponible para configuraciones rápidas o recuperación, pero el reporte persistente a Plaspy requiere la correcta configuración del servidor y puerto para el reporte por datos GPRS.
- Recuerde que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración de servidor entre distintos modelos de rastreadores.
- Si encuentra problemas de conectividad, verifique el plan de datos de la SIM, los ajustes de APN y que el rastreador pueda alcanzar direcciones IP externas antes de volver a comprobar la conectividad con Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP TV-690 para que reporte a Plaspy ofrece a organizaciones y cuidadores una forma centralizada de monitorear la ubicación y el estado operativo sin gestionar endpoints de servidor personalizados por dispositivo. Usar el endpoint compartido de Plaspy y la detección automática de protocolos reduce la complejidad de configuración y acelera la puesta en marcha de los equipos.

Learn more about Plaspy and how it can collect and display location data from the TV-690 by visiting https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and manufacturer guidance verify current information at the GOTOP website https://www.gotop.cc/.
