---
slug: /gotop/g35/configuration
id: g35-configuration
sidebar_label: Configuration
title: GOTOP - G35 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP G35 para integrarlo con Plaspy mediante ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración GOTOP G35
  - Configurar G35 Plaspy
  - Configuración rastreador G35
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS animal
  - Configuración collar GPS
  - Configuración servidor G35
  - Integración G35 Plaspy
  - Configuración plataforma GPS
  - Configuración rastreador GOTOP
---

# GOTOP - Configuración del G35

Esta página presenta el contexto público de configuración para usar el rastreador GPS para animales GOTOP G35 con Plaspy. Explica los ajustes de servidor compartido a los que debe apuntar el dispositivo, describe los pasos prácticos que normalmente se usan para integrarlo en Plaspy y señala qué verificar antes y después de la configuración. Las indicaciones se basan en la descripción del rastreador y en la información pública de configuración de servidores de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El G35 admite alimentación por SMS y datos LTE y por lo general se configura mediante la aplicación o el backend del fabricante, así que confirme siempre el flujo de configuración específico para su unidad y versión de firmware.

## Resumen de la configuración

Configurar el G35 para Plaspy prepara el dispositivo para enviar datos de ubicación y estado al endpoint central de Plaspy y asegura que la unidad aparezca en su panel y reglas de alerta. El núcleo del proceso es apuntar el dispositivo al servidor de Plaspy usando la dirección, el transporte y el puerto correctos, y luego validar la conectividad y el reporte de eventos.

- Apunte el dispositivo al endpoint de Plaspy para que la telemetría en tiempo real llegue a la plataforma.
- Configure el transporte y el puerto en el dispositivo o en la herramienta del fabricante para usar el puerto compartido de Plaspy.
- Verifique el APN y la conectividad móvil cuando utilice datos LTE para que los mensajes lleguen correctamente a Plaspy.
- Confirme que las alarmas y eventos de geocerca se reenvíen a Plaspy y sean visibles en la plataforma.
- Valide la carga o sincronización de waypoints históricos si necesita reproducción de rutas en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del dispositivo automáticamente cuando este envíe telemetría al endpoint configurado.

## Requisitos habituales antes de configurar

- Batería del dispositivo cargada o alimentación conectada para la configuración inicial y las pruebas.
- Tarjeta micro SIM activa con un plan de datos válido si usa LTE para telemetría, o capacidad de SMS si va a usar mensajería por SMS.
- Acceso al método oficial de configuración del fabricante GOTOP, como la app del proveedor, el backend web o la lista de comandos por SMS.
- Datos del identificador del dispositivo (IMEI o ID del equipo) disponibles para cualquier registro en Plaspy.
- Una cuenta en Plaspy y conocimiento de cómo agregar o verificar un dispositivo en su espacio de trabajo.
- Un área de prueba con cobertura móvil confiable para validar el reporte en vivo.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el G35 envía mensajes periódicos de ubicación y estado al endpoint y puerto compartidos de Plaspy, donde la plataforma procesa la telemetría y genera alertas. Plaspy expone entonces las actualizaciones de ubicación, las alarmas y el estado del dispositivo en su panel centralizado y en las reglas de notificación.

- El G35 reporta posición y telemetría vía datos LTE a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Si el dispositivo permite seleccionar el transporte, puede usar UDP o TCP para comunicarse con Plaspy.
- Plaspy detecta automáticamente el protocolo utilizado cuando recibe mensajes en el puerto compartido.
- Las alarmas como geocerca, movimiento y batería baja se reenvían a Plaspy para su notificación.
- La memoria de waypoints y los registros históricos del dispositivo pueden sincronizarse a través de las herramientas del fabricante y hacerse visibles en Plaspy para reproducción de rutas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración GOTOP para su unidad G35, ya sea la app del fabricante, el backend web o la interfaz de comandos por SMS.
2. Introduzca la dirección del servidor de Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Establezca el puerto de destino en 8888, teniendo en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo solicita seleccionar un protocolo de transporte.
5. Configure el APN y los parámetros de red móvil en la herramienta del fabricante si el rastreador utiliza datos LTE.
6. Aplique o guarde la configuración y, si el fabricante lo requiere, reinicie el dispositivo para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy confirmando que las actualizaciones de posición y los eventos de alarma aparezcan en su panel o en la lista de dispositivos de Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y la sintaxis SMS para el GOTOP G35 varían según el firmware y las herramientas del fabricante. Dado que los conjuntos de comandos del fabricante difieren y el G35 se configura habitualmente mediante la app o el backend proporcionado, aquí no se incluyen cadenas de comandos específicas. Consulte el manual de usuario GOTOP o la referencia de comandos SMS del proveedor para ejemplos y sintaxis concretos del dispositivo.

Si prefiere la configuración por SMS para pruebas iniciales, consulte la documentación de GOTOP para conocer las plantillas SMS correctas y los parámetros necesarios para establecer la dirección del servidor, el puerto, el APN y el protocolo de transporte.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones disponibles de configuración y la sintaxis de los comandos; confirme el método correcto para su unidad y versión de firmware.
- Al elegir entre UDP y TCP, considere el comportamiento de la red y las preferencias de entrega de paquetes; Plaspy detectará automáticamente el protocolo cuando lleguen mensajes al puerto 8888.
- El APN y los parámetros de la red móvil suelen ser necesarios para la operación por datos LTE; estos se configuran mediante la herramienta del fabricante o comandos SMS según el dispositivo.
- La configuración vía SMS suele estar soportada por los dispositivos GOTOP para ajustes básicos de servidor y alarmas, pero los datos LTE son necesarios para telemetría en tiempo real e integración más completa con Plaspy.
- Mantenga un plan de pruebas para verificar tanto las actualizaciones de posición como las notificaciones de alarma en Plaspy después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G35 con Plaspy ofrece una forma centralizada de monitorear despliegues de animales con hardware diseñado para largas duraciones y uso en exteriores exigentes. Apuntar el G35 al endpoint compartido de Plaspy garantiza que las actualizaciones de ubicación, las alarmas y el estado se consoliden en una única plataforma donde usted puede gestionar notificaciones, reproducción histórica y supervisión operativa.

Para obtener más información sobre Plaspy y cómo soporta rastreadores compatibles como el G35, visite https://www.plaspy.com. Para los pasos de configuración específicos más recientes, notas de firmware y referencias oficiales de comandos para el GOTOP G35, verifique los detalles con el fabricante en https://www.gotop.cc/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
