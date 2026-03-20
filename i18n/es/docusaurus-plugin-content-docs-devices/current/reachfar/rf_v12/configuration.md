---
slug: /reachfar/rf_v12/configuration
id: rf_v12-configuration
sidebar_label: Configuration
title: Reachfar - RF-V12 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Reachfar RF-V12 para Plaspy, con ajustes de servidor y flujo de trabajo
keywords:
  - configuración Reachfar RF-V12
  - instalación Reachfar RF-V12
  - RF-V12 Plaspy
  - configuración localizador GPS Reachfar
  - configuración servidor RF-V12
  - configuración rastreador Plaspy
  - configuración seguimiento RF-V12
  - guía dispositivo Reachfar
  - configuración plataforma GPS RF-V12
  - integración dispositivos Plaspy
---

# Reachfar - Configuración RF-V12

Esta página describe el contexto de configuración pública para usar el rastreador Reachfar RF-V12 con Plaspy. Está orientada a los ajustes de servidor y al flujo de trabajo prácticos necesarios para apuntar dispositivos RF-V12 hacia Plaspy, de modo que la ubicación, las alertas y la telemetría sean visibles en la plataforma. Use esta guía junto con la documentación del producto RF-V12 para completar la puesta en servicio del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere las instrucciones aquí como una referencia práctica centrada en la plataforma y no como un reemplazo de la documentación de Reachfar.

## Resumen de configuración

Este proceso prepara su RF-V12 para enviar datos GPS y eventos a Plaspy, de forma que el dispositivo aparezca en su cuenta de Plaspy y comience a reportar ubicaciones y alarmas. Los pasos que siguen describen los objetivos principales que deberá completar al integrar dispositivos RF-V12 con Plaspy.

- Configure el RF-V12 para enviar datos al endpoint del servidor de Plaspy para que la telemetría llegue a la plataforma.
- Seleccione el protocolo de transporte soportado por el dispositivo y apúntele al puerto de la Plataforma que usa Plaspy.
- Valide que las actualizaciones de posición y los eventos de alarma aparezcan en Plaspy después de reiniciar el dispositivo o guardar la configuración.
- Confirme que las notificaciones, los disparos de geocercas y la reproducción del historial funcionan en el panel de Plaspy.
- Use las herramientas del proveedor o los comandos SMS de Reachfar para modificar el dispositivo cuando corresponda.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com  
- Dirección IP del servidor: 54.85.159.138  
- Puerto: 8888  
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Plaspy detectará automáticamente el protocolo del rastreador cuando lleguen los datos

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y confía en la detección automática de protocolos para identificar el formato entrante del rastreador.

## Requisitos típicos antes de la configuración

- Un rastreador RF-V12 cargado e instalado, accesible para configuración y pruebas.  
- Una SIM celular válida con datos habilitados para GPRS y SMS si planea usar comandos SMS.  
- Acceso al método oficial de configuración de Reachfar, como el portal del proveedor, la app móvil o el conjunto de comandos SMS.  
- Una cuenta de Plaspy con permisos para agregar y ver dispositivos, para que pueda validar los reportes del equipo.  
- Conocimientos básicos sobre si el dispositivo requiere seleccionar UDP o TCP durante la configuración.  
- Si es posible, un vehículo de prueba temporal o una fuente de alimentación de banco para verificar el reporte durante la puesta a punto.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el RF-V12 sube coordenadas GPS y datos de eventos mediante GSM GPRS al endpoint y puerto compartido de Plaspy. Plaspy ingiere los mensajes entrantes, detecta el protocolo automáticamente y muestra las ubicaciones y eventos de alarma en la plataforma para monitoreo y análisis histórico.

- El rastreador envía reportes periódicos de posición a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- Puede configurar el dispositivo para usar UDP o TCP según las opciones del equipo.  
- Eventos de alarma, como vibración, sonido o corte de línea, se envían al mismo endpoint de Plaspy para notificación inmediata.  
- Plaspy procesa los datos entrantes y proporciona ubicación en tiempo real, reproducción de trazas y alertas configurables.  
- La detección automática de protocolos en Plaspy permite reconocer muchos modelos de rastreadores sin necesidad de seleccionar manualmente el protocolo en la plataforma.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración de Reachfar provisto por el vendedor o el manual.  
2. Ubique la sección de ajustes de servidor o APN para reporte e ingrese el dominio del servidor Plaspy d.plaspy.com o alternativamente la IP 54.85.159.138.  
3. Configure el puerto de reporte del equipo en 8888, según lo requiere Plaspy.  
4. Elija el protocolo de transporte UDP o TCP si el dispositivo exige selección explícita.  
5. Aplique o guarde los cambios de configuración en la herramienta del proveedor o envíe el comando SMS equivalente si el equipo usa configuración por SMS.  
6. Reinicie el dispositivo RF-V12 si el método de configuración lo solicita para activar los nuevos ajustes de servidor.  
7. Valide que el dispositivo reporta a Plaspy revisando la lista de dispositivos y el mapa en vivo en su cuenta Plaspy y confirmando que aparecen posiciones o mensajes de evento.

## Comandos de configuración de ejemplo

El RF-V12 admite configuración mediante herramientas del proveedor y por comandos SMS según el firmware y la entrega del fabricante. Los comandos exactos y su formato varían según el firmware de Reachfar y no se incluyen aquí. Use el manual de Reachfar o el portal del proveedor para la estructura precisa de comandos SMS o la secuencia de software para establecer dominio de servidor, IP, puerto y transporte.

Si dispone de una referencia de comandos SMS proporcionada por el proveedor, siga esa secuencia para:
- establecer el dominio del servidor en d.plaspy.com o la IP 54.85.159.138
- fijar el puerto de reporte en 8888
- seleccionar UDP o TCP si es necesario
- guardar ajustes y reiniciar el dispositivo si procede

Conserve cualquier marcador de posición en los comandos del proveedor como [apn] para APN, [apnu] para usuario APN y [apnp] para contraseña APN cuando esos valores sean requeridos por su operador. Consulte la documentación de Reachfar para la sintaxis exacta de los comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos SMS o las etiquetas de los menús de configuración; confirme siempre con el manual de Reachfar para la revisión de su dispositivo.  
- Para equipos que permiten tanto UDP como TCP, pruebe ambos protocolos si presenta problemas de conexión; Plaspy soporta cualquiera de los dos en el puerto compartido.  
- Si configura el dispositivo con el dominio d.plaspy.com, el rastreador resolverá ese dominio a la IP del servidor Plaspy en tiempo de ejecución; usar la IP 54.85.159.138 es una alternativa durante las pruebas.  
- Algunos proveedores ofrecen tanto SMS como herramientas de software para la configuración; prefiera el método recomendado por su proveedor para flotas en producción.  
- Recuerde que Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles en la plataforma, por lo que mantener consistencia en la configuración de la flota facilita la gestión.

## Por qué usar Plaspy con esta configuración

Usar el Reachfar RF-V12 con Plaspy le brinda una forma sencilla de centralizar datos de ubicación en tiempo real y alarmas para bicicletas eléctricas y motocicletas. Plaspy ingiere los reportes del RF-V12 y los pone a disposición para monitoreo en vivo, reproducción histórica de trazas y alertas configurables, lo que ayuda a mejorar la seguridad y la visibilidad operativa de los equipos.

Learn more about Plaspy and how it integrates with compatible devices at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the official Reachfar website https://www.reachfargps.com/
