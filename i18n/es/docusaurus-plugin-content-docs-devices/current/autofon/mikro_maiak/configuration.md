---
slug: /autofon/mikro_maiak/configuration
id: mikro_maiak-configuration
sidebar_label: Configuration
title: AutoFon - Микро-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon Микро-Маяк y ajustes del servidor Plaspy para integración y rastreo confiables
keywords:
  - AutoFon
  - Микро-Маяк
  - configuración AutoFon Микро-Маяк
  - instalación AutoFon Микро-Маяк
  - integración Plaspy
  - configuración rastreador GPS
  - configuración rastreo de vehículos
  - configuración servidor Plaspy
  - rastreador para gestión de flotas
  - integración plataforma de seguimiento
---

# AutoFon - Configuración del Микро-Маяк

Esta página resume el contexto público de configuración para usar el rastreador AutoFon Микро-Маяк (Micro Beacon) con la plataforma telemática Plaspy. Se centra en los ajustes de servidor prácticos y el flujo de trabajo necesario para apuntar el equipo a Plaspy, de modo que el dispositivo entregue datos GNSS y telemetría a su instancia de monitoreo de flotas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página documenta los ajustes públicos de Plaspy y un flujo de trabajo general, recomendando verificar los pasos específicos del dispositivo con la documentación oficial de AutoFon.

## Resumen de la configuración

Preparar el AutoFon Микро-Маяк para integrarlo con Plaspy implica configurar el equipo para que envíe su telemetría GPRS al endpoint del servidor Plaspy, verificar la conectividad y confirmar que el dispositivo aparece en la plataforma. El equipo viene normalmente preconfigurado para operación automática y soporta telemetría GPRS, por lo que la integración suele consistir en actualizar los campos de servidor y transporte en la herramienta de configuración del fabricante o mediante comandos SMS/GPRS.

- Apunte el dispositivo al endpoint del servidor Plaspy para que los paquetes de ubicación lleguen a la plataforma.  
- Asegúrese de seleccionar el transporte y el puerto correctos en el dispositivo para que coincidan con lo que espera Plaspy.  
- Verifique que el equipo tenga una SIM operativa y conectividad de red para las cargas GPRS.  
- Confirme que los paquetes en memoria (black box) se carguen correctamente una vez que se restablezca la conectividad.  
- Verifique que el dispositivo sea visible en Plaspy y que se reciban eventos y actualizaciones de posición.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888 y tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles  
- soporte de transporte UDP o TCP según preferencia del dispositivo o las opciones de firmware  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpretará los paquetes entrantes sin necesidad de seleccionar un protocolo específico en el servidor

## Requisitos típicos antes de la configuración

- Dispositivo encendido y cargado o conectado a la alimentación del vehículo con la batería interna funcionando según corresponda.  
- SIM activa con datos instalada si el equipo requiere conectividad GPRS. El Micro Beacon puede suministrarse preconfigurado y con una SIM M2M.  
- Acceso al método oficial de configuración AutoFon para el Микро-Маяк, o al conjunto de comandos SMS/GPRS si el modelo admite configuración remota.  
- Cobertura GSM adecuada en la ubicación del dispositivo para permitir la subida de paquetes GPRS.  
- Acceso administrativo a su cuenta Plaspy o a la plataforma para validar la visibilidad del dispositivo y revisar la telemetría entrante después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El AutoFon Микро-Маяк transmite coordenadas GNSS y telemetría por GSM/GPRS a un endpoint de monitoreo. Al configurarlo para Plaspy, el rastreador envía sus datos al endpoint y puerto compartidos de Plaspy para que la plataforma procese actualizaciones de ubicación, eventos y registros almacenados en el dispositivo.

- El equipo envía mensajes de ubicación GNSS y ubicación por LBS como fallback sobre GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según lo que soporte el dispositivo y la elección de configuración; debe establecerse el transporte elegido en la configuración del equipo.  
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los paquetes, por lo que no se requiere registro de protocolo por dispositivo en el servidor.  
- Los paquetes del black box almacenados durante la pérdida de conectividad se cargan a Plaspy cuando la GPRS se restablece.  
- Los mensajes de eventos como movimiento, manipulación y alertas de alimentación se reenviarán a Plaspy para reglas, notificaciones y registro histórico.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración AutoFon o al software para el Микро-Маяк, o utilice la interfaz de comandos SMS/GPRS documentada si está disponible.  
2. En la herramienta del fabricante o en el conjunto de comandos, ingrese el endpoint del servidor Plaspy como d.plaspy.com o use la IP 54.85.159.138.  
3. Configure el puerto del equipo en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.  
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según la preferencia del instalador o las opciones del firmware.  
5. Aplique o guarde los cambios de configuración en la interfaz del dispositivo o envíe los comandos SMS/GPRS de guardar/aplicar que exija el dispositivo.  
6. Reinicie el equipo si las instrucciones del fabricante recomiendan un reinicio para aplicar las configuraciones de red.  
7. Valide que el dispositivo reporte a Plaspy revisando posiciones y eventos entrantes en su cuenta Plaspy y confirmando que se recibieron paquetes recientes.

## Ejemplos de comandos de configuración

El AutoFon Микро-Маяк utiliza herramientas y conjuntos de comandos suministrados por el fabricante. La sintaxis exacta de los comandos y los campos disponibles varían según el firmware y las herramientas del proveedor. Al configurar el equipo para Plaspy, asegúrese de introducir el servidor como d.plaspy.com o 54.85.159.138 y establecer el puerto en 8888, eligiendo UDP o TCP si el dispositivo requiere la selección de transporte. Plaspy detectará automáticamente el protocolo del rastreador cuando lleguen los datos.

Si utiliza utilidades de configuración AutoFon o comandos SMS provistos por el fabricante, consulte esos recursos para conocer la secuencia y los comandos exactos requeridos por el firmware de su dispositivo.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden modificar la interfaz de configuración o la sintaxis de comandos SMS/GPRS; siempre confirme los comandos para la revisión exacta de su dispositivo.  
- Elija UDP para menor sobrecarga y entrega de paquetes ligeramente más rápida cuando esté soportado, o TCP cuando prefiera confirmación de transporte más confiable. La elección debe guiarse por el dispositivo y las condiciones de red.  
- El Micro Beacon soporta detección automática de APN y configuración remota vía GPRS y SMS, pero puede configurar el APN manualmente si la SIM lo requiere.  
- Debido a que el dispositivo incluye un buffer black box amplio, valide que los registros almacenados se carguen correctamente tras la recuperación de la conectividad examinando el historial reciente en Plaspy.  
- Los dispositivos entregados pre registrados en un servidor AutoFon pueden requerir la actualización de los campos de servidor para apuntar a Plaspy; verifique cualquier estado de preregistro y siga las instrucciones de AutoFon para cambiar el servidor de monitoreo.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon Микро-Маяк con Plaspy ofrece una canalización de telemetría práctica para despliegues de rastreo discretos y de bajo mantenimiento. La posición GLONASS/GPS con fallback por LBS, la telemetría GPRS robusta y el gran buffer black box permiten que los datos de posición y eventos se recolecten e ingresen en Plaspy de forma fiable incluso con condiciones de red variables.

Para conocer más sobre Plaspy y cómo procesa la telemetría de los dispositivos, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre la configuración específica del dispositivo, notas de firmware y conjuntos de comandos del fabricante para el AutoFon Микро-Маяк, verifique la documentación oficial de AutoFon en https://www.autofon.ru/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
