---
slug: /laipac/s911_lola/configuration
id: s911_lola-configuration
sidebar_label: Configuration
title: Laipac - S911 Lola Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Laipac S911 Lola con ajustes de servidor Plaspy y pasos prácticos de instalación
keywords:
  - Laipac S911 Lola
  - Configuración Laipac S911
  - Configuración S911 Lola
  - Configuración servidor S911
  - Configuración dispositivo Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS Laipac
  - Configuración rastreador GPS personal
  - Configuración mPERS S911
  - Configuración S911 Lola Plaspy
---

# Laipac - S911 Lola — Configuración

Esta página describe el contexto público de configuración para usar el Laipac S911 Lola con Plaspy. Incluye los ajustes de servidor prácticos y el flujo de trabajo general necesario para apuntar el S911 Lola a Plaspy, de modo que el equipo pueda reportar ubicaciones y eventos a la plataforma. Use esta guía en conjunto con el manual del dispositivo y las herramientas del proveedor para los pasos específicos del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que provea Laipac o los revendedores. Los detalles a continuación se enfocan en los ajustes públicos del servidor y las acciones prácticas que comúnmente realizará al integrar este dispositivo mPERS con Plaspy.

## Resumen de configuración

Configurar el S911 Lola para Plaspy consiste principalmente en apuntar el dispositivo para que envíe sus mensajes de ubicación y alertas al endpoint compartido de Plaspy y en validar que esos datos lleguen a la plataforma. Una vez que el dispositivo está dirigido al endpoint de Plaspy y la configuración se guarda, verifique la conectividad para que el equipo sea visible y gestionable dentro de Plaspy.

- Configure la dirección del servidor del dispositivo para que los reportes vayan a Plaspy
- Seleccione el tipo de transporte si el equipo requiere UDP o TCP
- Establezca el puerto compartido que usa Plaspy y guarde la configuración
- Valide que el dispositivo envíe mensajes periódicos y eventos a Plaspy
- Confirme que alertas como SOS también sean visibles en la plataforma una vez que el dispositivo esté conectado

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor al configurar el S911 Lola para Plaspy:

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta  
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de la configuración

- Asegúrese de que el S911 Lola tenga la batería cargada y esté encendido  
- Inserte una tarjeta micro SIM activa con voz y datos habilitados si el dispositivo lo requiere  
- Tenga disponible el IMEI o identificador único del dispositivo para su registro en Plaspy  
- Acceso al método oficial de configuración de Laipac o al software suministrado por el proveedor  
- Acceso administrativo a su cuenta de Plaspy o la persona que registrará el dispositivo  
- Cobertura celular fiable en el lugar de instalación o de pruebas del dispositivo

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el S911 Lola enviará reportes de ubicación, eventos SOS y otras alertas del dispositivo al endpoint y puerto compartido de Plaspy. Plaspy recibe esos reportes, determina automáticamente el protocolo del dispositivo y hace que el equipo sea visible en la plataforma para monitoreo y manejo de eventos.

- El dispositivo envía reportes de posición periódicos a d.plaspy.com o 54.85.159.138 en el puerto 8888  
- El equipo puede usar transporte UDP o TCP según la configuración y el soporte del firmware  
- Plaspy detecta el protocolo automáticamente y analiza los datos entrantes para mostrarlos  
- Los mensajes SOS y otras alertas se envían a Plaspy para que puedan enrutarse a los contactos o flujos de trabajo configurados  
- Una vez que el dispositivo se registra con el servidor, aparece en la interfaz de Plaspy para su monitoreo

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Laipac o al software provisto con el S911 Lola (comandos SMS, herramienta web o utilidad del proveedor según corresponda).  
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo.  
3. Configure el puerto del dispositivo en 8888 (Plaspy utiliza el mismo puerto para todos los equipos).  
4. Elija UDP o TCP como transporte si la configuración requiere selección de transporte.  
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe los comandos de configuración al equipo.  
6. Reinicie o ciclo de energía el dispositivo si el fabricante lo exige para aplicar los cambios.  
7. Valide que el dispositivo reporte a Plaspy verificando el estado en la plataforma y observando la posición inicial o los mensajes de evento.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el S911 Lola dependen del firmware de Laipac y de las herramientas del proveedor que utilice. Los conjuntos de comandos suministrados por el fabricante pueden usar SMS, conexión serial o una utilidad de configuración. Como los comandos varían según firmware y herramienta, consulte el manual del dispositivo o la guía de configuración de Laipac para la sintaxis exacta necesaria para establecer servidor, puerto y transporte. Si su proveedor le facilita una lista de comandos, aplique los pasos del Flujo típico de configuración para ingresar:

- dirección del servidor como d.plaspy.com o 54.85.159.138  
- puerto como 8888  
- transporte como UDP o TCP si corresponde  

Si recibe una lista de comandos del fabricante, siga el orden indicado e incluya los marcadores de posición necesarios exactamente como los muestre Laipac.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y los ajustes disponibles; confirme siempre los comandos con el manual del dispositivo.  
- La elección entre UDP y TCP puede afectar el comportamiento de entrega; seleccione el tipo de transporte que su instalación soporte y pruebe la conectividad.  
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y realiza la detección automática del protocolo en las conexiones entrantes.  
- Si el dispositivo admite configuración vía SMS, asegúrese de que los comandos SMS estén formateados de forma precisa y de que la SIM tenga SMS habilitado.  
- Mantenga un registro del IMEI y de los ajustes aplicados para poder solucionar problemas de registro o conectividad con el soporte de Plaspy o con el proveedor del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Laipac S911 Lola permite a las organizaciones centralizar la visibilidad de ubicaciones y eventos de emergencia de pequeños rastreadores personales en una plataforma de monitoreo única. Esta configuración facilita alertas oportunas, visibilidad de ubicación y supervisión operativa útil para programas de seguridad de trabajadores solitarios, seguridad en campus, seguimiento de jóvenes y familias, y escenarios de protección de activos.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre configuración específica del dispositivo, notas de firmware y sintaxis de comandos consulte el sitio de Laipac en https://laipac.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
