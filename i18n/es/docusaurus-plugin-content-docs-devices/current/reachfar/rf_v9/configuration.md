---
slug: /reachfar/rf_v9/configuration
id: rf_v9-configuration
sidebar_label: Configuration
title: Reachfar - RF-V9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el tracker Reachfar RF V9 con Plaspy, con instrucciones prácticas de servidor y puesta en marcha
keywords:
  - Configuración Reachfar RF V9
  - Instalación Reachfar RF V9
  - Reachfar RF V9 Plaspy
  - Configuración RF V9
  - Instalación RF V9
  - Configuración de rastreo Reachfar
  - Configuración de tracker para Plaspy
  - Configuración de rastreador GPS
  - Configuración de rastreo de vehículos
  - Rastreador para gestión de flotas
---

# Reachfar - Configuración RF-V9

Esta página explica el contexto público de configuración para usar el tracker GPS Reachfar RF-V9 con Plaspy. Resume los ajustes de servidor y los pasos prácticos que normalmente se emplean para apuntar un RF-V9 a un endpoint de Plaspy, de modo que el dispositivo pueda enviar ubicación, alertas de movimiento y telemetría básica a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando se conecta. Los pasos concretos en el lado del fabricante para el RF-V9 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que debe emplear esta guía junto con la documentación oficial de Reachfar para comandos o utilidades específicas del dispositivo.

## Resumen de la configuración

Preparar un RF-V9 para integrarlo con Plaspy se centra en apuntar el dispositivo al endpoint compartido de Plaspy, verificar la conectividad celular y confirmar que el tracker envía los mensajes esperados a la plataforma.

- Configure el servidor del dispositivo para apuntar a Plaspy usando el dominio o la IP y el puerto compartido de Plaspy.
- Seleccione el modo de transporte soportado por el RF-V9 (UDP o TCP) si el dispositivo requiere elegir transporte.
- Valide que el dispositivo tenga conectividad celular y que pueda enviar mensajes a Internet.
- Aplique y guarde los ajustes en el tracker, reinicie si es necesario y confirme que la unidad aparece en Plaspy.
- Utilice las herramientas del fabricante o comandos SMS que provea Reachfar para realizar la configuración y la verificación.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP (the RF-V9 may be configured to use either transport on port 8888)  
- Plaspy automatically detects the tracker protocol when a device connects to the server

Estos son los valores públicos que Plaspy facilita para integrar trackers compatibles como el RF-V9.

## Requisitos habituales antes de la configuración

- Un RF-V9 con alimentación, batería interna cargada o alimentación externa conectada.  
- Una SIM celular activa con datos habilitados y cobertura de red adecuada para su región.  
- El método oficial de configuración Reachfar disponible (herramienta de PC, USB o conjunto de comandos SMS) o acceso a la herramienta del instalador proporcionada por el proveedor.  
- Acceso a credenciales de la plataforma Plaspy o a una cuenta de su organización para confirmar la visibilidad del dispositivo tras la configuración.  
- Acceso físico al equipo o acceso remoto al método de configuración para introducir los ajustes de servidor y transporte.  
- Paciencia para verificar la versión de firmware y seguir las instrucciones específicas del dispositivo proporcionadas por Reachfar.

## Cómo se conecta este tracker a Plaspy

Cuando se configura para Plaspy, el RF-V9 envía sus mensajes de posición y estado al endpoint y puerto del servidor Plaspy para que la plataforma pueda mostrar seguimiento en vivo, alertas e historial.

- El dispositivo se apunta al endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.  
- Los mensajes se transmiten por el puerto 8888 usando el transporte seleccionado (UDP o TCP).  
- Plaspy detecta automáticamente el protocolo del tracker y enruta los mensajes entrantes al pipeline de procesamiento apropiado.  
- Actualizaciones de ubicación, alertas de manipulación o movimiento y reportes de batería llegan a Plaspy para su visualización, notificaciones y reproducción de trazas.  
- Una configuración exitosa permite la visibilidad del equipo en la plataforma para tareas de monitoreo y operación.

## Flujo típico de configuración

1. Obtenga el método o software oficial de configuración Reachfar desde el proveedor o la documentación del instalador.  
2. Acceda a la interfaz de configuración del dispositivo (herramienta de PC, USB o SMS según soporte del RF-V9).  
3. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo.  
4. Ajuste el puerto a 8888 en la configuración del tracker.  
5. Elija UDP o TCP si el dispositivo requiere una selección explícita de transporte. Plaspy soporta ambos y detecta el protocolo al establecer la conexión.  
6. Aplique o guarde la configuración en la herramienta del dispositivo y reinicie el tracker si el equipo lo exige.  
7. Valide que el RF-V9 reporte a Plaspy confirmando que la unidad aparece y envía actualizaciones en la plataforma Plaspy.

## Ejemplo de comandos de configuración

La sintaxis exacta de comandos o los pasos en la herramienta varían según el firmware Reachfar y la interfaz de configuración que esté usando. Algunos instaladores usan una herramienta de PC y otros comandos SMS; ambos métodos suelen requerir los mismos valores de servidor y puerto.

Como ejemplo de lo que debe ingresar en una herramienta de configuración o en un SMS, debe apuntar el dispositivo al endpoint y puerto de Plaspy así en los ajustes del equipo: server = d.plaspy.com (or 54.85.159.138), port = 8888, transport = UDP or TCP.

Dado que los comandos específicos del modelo RF-V9 los proporciona Reachfar y pueden diferir según el firmware, consulte el manual oficial de Reachfar para conocer el formato exacto de los comandos SMS o las etiquetas de los botones en la herramienta de PC para establecer servidor, puerto y transporte.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos o la ubicación de menús en la herramienta de configuración Reachfar; confirme siempre primero la versión de firmware del dispositivo.  
- Elegir UDP o TCP puede afectar el comportamiento de entrega; UDP es común para telemetría de baja sobrecarga, mientras que TCP puede ofrecer confirmación de conexión según el firmware del dispositivo. Plaspy acepta ambos y detectará el protocolo automáticamente.  
- Si la configuración se realiza por SMS, asegúrese de que la sintaxis del mensaje coincida con el formato esperado del firmware y que la SIM tenga habilitada la capacidad de enviar y recibir SMS.  
- Tras aplicar los ajustes, reiniciar el dispositivo suele ayudar a garantizar que se utilicen inmediatamente el nuevo servidor y puerto.  
- Mantenga una copia de los ajustes originales del dispositivo y documente los cambios en despliegues grandes para simplificar la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Usar el RF-V9 con Plaspy ofrece a las organizaciones una forma directa de obtener visibilidad de ubicación en tiempo real, reportes básicos de alarmas y reproducción de trazas sin necesitar endpoints de servidor personalizados por dispositivo. Apuntar los RF-V9 al servidor y puerto compartidos de Plaspy centraliza la telemetría y simplifica la incorporación de múltiples trackers.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique las instrucciones de configuración más recientes en el sitio oficial de Reachfar https://www.reachfargps.com/ antes de realizar despliegues a gran escala.
