---
slug: /reachfar/rf_v6/configuration
id: rf_v6-configuration
sidebar_label: Configuration
title: Reachfar - RF-V6+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Reachfar RF-V6+ con ajustes de servidor Plaspy y pasos prácticos de integración
keywords:
  - Configuración Reachfar RF-V6+
  - Configuración RF-V6+
  - Configuración rastreador GPS Reachfar RF-V6+
  - Configuración rastreador Plaspy
  - Configuración servidor RF-V6+
  - Integración Reachfar Plaspy
  - Configuración GPRS RF-V6+
  - Compatibilidad rastreador GPS con Plaspy
  - Guía de instalación RF-V6+
  - Configuración de rastreador Reachfar
---

# Reachfar - Configuración RF-V6+

Esta página describe el contexto público de configuración para usar el rastreador Reachfar RF-V6+ con la plataforma de gestión de flotas y activos Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y detalla pasos prácticos y recomendaciones de verificación que usted puede seguir al integrar el RF-V6+ para seguimiento en tiempo real y reporte de alarmas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice la guía siguiente para preparar el RF-V6+ para Plaspy y consulte la documentación de Reachfar para comandos específicos del dispositivo y el comportamiento del firmware más reciente.

## Resumen de la configuración

Este proceso prepara el RF-V6+ para enviar datos de posición, alarmas y estado a Plaspy, de modo que el dispositivo sea visible y utilizable dentro de la plataforma. Los pasos se centran en apuntar el equipo al endpoint de Plaspy, validar la conectividad y asegurar que los datos aparezcan en la plataforma.

- Configure el RF-V6+ para reportar vía GPRS TCP/IP al endpoint y puerto compartidos de Plaspy.
- Seleccione el transporte (UDP o TCP) si el dispositivo exige una elección explícita.
- Valide la conectividad de red y los ajustes APN para que el reporte por GPRS funcione correctamente.
- Guarde y aplique la configuración, luego verifique que el dispositivo reporte a Plaspy y que las alarmas sean visibles.
- Use SMS o los controles de la app como métodos alternativos de verificación o cuando GPRS no esté disponible.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el RF-V6+ para que reporte a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según la selección del dispositivo
- Detección automática de protocolo en Plaspy, por lo que no se requiere registrar protocolos por dispositivo en la plataforma

## Requisitos típicos antes de la configuración

- Un RF-V6+ cargado y acceso al método de configuración del fabricante mediante la app, comandos SMS o la herramienta del proveedor.
- Una SIM válida habilitada para datos GPRS 2G y SMS si planea usar reporte GPRS TCP/IP y controles por SMS.
- Conocimiento del APN del operador y las credenciales de autenticación necesarias para la SIM; tenga los datos del APN listos para configurar.
- Acceso a las instrucciones o al software de configuración de Reachfar proporcionados por el vendedor o distribuidor para el conjunto de comandos exacto.
- Un plan de pruebas básico para confirmar alimentación, registro en la red, establecimiento de sesión GPRS y reporte al endpoint de Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reporte GPRS TCP/IP, el RF-V6+ abre una sesión de datos y envía paquetes periódicos de posición y eventos al endpoint y puerto del servidor Plaspy. Plaspy recibe el flujo, detecta automáticamente el protocolo del rastreador y presenta los datos del dispositivo en la plataforma para monitoreo y alertas.

- El dispositivo envía actualizaciones de ubicación y telemetría al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy acepta transporte UDP o TCP según la configuración del dispositivo y detecta automáticamente el protocolo.
- Las alarmas como SOS, vibración o manipulación y eventos de geocerca se reportan como mensajes discretos a Plaspy para su alertado.
- Las consultas y mensajes de alarma vía SMS pueden usarse como respaldo cuando el reporte por GPRS no esté disponible o para verificación remota.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Reachfar o al software proporcionado por el fabricante o su proveedor.
2. En los ajustes TCP IP o de servidor, introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888. Tenga en cuenta que Plaspy emplea el mismo puerto para todos los dispositivos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia de despliegue.
5. Configure el APN y las credenciales de la SIM necesarias para la conectividad GPRS, luego aplique o guarde los ajustes.
6. Reinicie el dispositivo si las instrucciones del proveedor indican que se requiere un reboot para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy revisando las actualizaciones de posición entrantes y probando eventos de alarma en la plataforma.

## Ejemplos de comandos de configuración

La sintaxis exacta de comandos y los métodos para el RF-V6+ dependen del firmware de Reachfar y de la interfaz de configuración que utilice. Como los comandos específicos de modelo los proporciona Reachfar o los distribuidores, aquí no se incluyen comandos SMS o de software concretos. Los métodos típicos de configuración incluyen:

- Usar la app móvil o la herramienta web de Reachfar para establecer servidor, puerto, APN y transporte.
- Enviar comandos SMS del fabricante para fijar la dirección del servidor, la IP del servidor, el puerto y el APN cuando se admite la configuración por SMS.

Consulte la guía oficial de configuración de Reachfar o al proveedor del dispositivo para los comandos y ejemplos exactos necesarios para su versión de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar los comandos SMS o los menús usados para ajustar el servidor y el APN. Confirme siempre los comandos con la documentación del fabricante.
- Elija TCP o UDP según la estabilidad de la red y sus preferencias; Plaspy soporta ambos transportes y detectará automáticamente el protocolo del rastreador.
- Si usa SMS para configuración o como reporte alternativo, verifique los formatos de SMS y las reglas de firewall con su proveedor de SIM para asegurar la entrega de mensajes.
- Algunas variantes antiguas de firmware del RF-V6+ pueden requerir formatos o un orden de comandos diferente al aplicar parámetros de servidor; pruebe en un solo equipo antes de desplegar en masa.
- Mantenga un registro de los credenciales del APN y la SIM para facilitar la configuración masiva y la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Configurar el Reachfar RF-V6+ para reportar a Plaspy ofrece una opción compacta y confiable para el rastreo discreto de activos y vehículos con ubicación en tiempo real y reporte de alarmas. Plaspy agrega actualizaciones de posición, eventos de alarma y recorridos históricos para que los operadores puedan monitorear activos, revisar el historial de incidentes y construir flujos de trabajo basados en ubicación desde una plataforma central.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para los detalles más recientes de configuración por dispositivo y notas de firmware consulte el sitio oficial de Reachfar https://www.reachfargps.com/. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo, por lo que verifique los comandos de configuración actuales y el comportamiento del firmware con la documentación de Reachfar antes de un despliegue a gran escala.
