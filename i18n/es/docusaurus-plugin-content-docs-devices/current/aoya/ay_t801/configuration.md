---
slug: /aoya/ay_t801/configuration
id: ay_t801-configuration
sidebar_label: Configuration
title: AoYa - AY-T801 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador AoYa AY-T801 y dirigirlo a Plaspy para visibilidad del vehículo
keywords:
  - Configuración AoYa AY-T801
  - Configuración inicial AoYa AY-T801
  - AoYa AY-T801 Plaspy
  - Configuración servidor AY-T801
  - Configuración rastreador GPS AY-T801
  - Configuración rastreador AoYa
  - Configuración rastreador vehículo Plaspy
  - Configuración dispositivo Plaspy
  - Configuración plataforma GPS
  - Rastreo de flotas AY-T801
---

# AoYa - AY-T801 Configuración

Esta página ofrece una guía pública para configurar el rastreador vehicular AoYa AY-T801 con la plataforma Plaspy. Resume los ajustes de servidor esenciales y el proceso general de configuración para que pueda preparar el equipo y hacer que se comunique con Plaspy. El contenido se basa en la información pública del fabricante y en los ajustes de servidor disponibles en Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AY-T801 admite canales comunes de configuración documentados públicamente; cuando los detalles del fabricante aparecen como comandos SMS o en software del proveedor, esta guía resume los pasos generales sin reproducir la sintaxis de comandos crudos.

## Resumen de la configuración

El objetivo al configurar el AY-T801 para Plaspy es apuntar el rastreador al endpoint del servidor de Plaspy, confirmar conectividad de red y habilitar el envío confiable de reportes para que la unidad sea visible y gestionable en la plataforma. Esto implica suministrar la dirección y el transporte correctos, verificar la conectividad y guardar la configuración para que el rastreador reporte a Plaspy.

- Prepare el equipo para que pueda alcanzar el endpoint y el puerto del servidor de Plaspy destinados a reportes de datos.
- Configure el transporte del dispositivo para usar UDP o TCP según lo permita la interfaz del rastreador.
- Valide que el rastreador se registre y envíe datos correctamente a Plaspy.
- Confirme la visibilidad del equipo en Plaspy y supervise los reportes iniciales para verificar el comportamiento esperado.
- Utilice los métodos de configuración del fabricante (SMS o herramientas del proveedor) cuando sea necesario y consulte la documentación oficial para los comandos exactos.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices use the same port

Estos valores son los ajustes públicos del endpoint de Plaspy utilizados para enrutar los datos del dispositivo hacia la plataforma. Apuntar el AY-T801 a d.plaspy.com o a la IP y el puerto proporcionados es el paso clave para habilitar el envío de reportes.

## Requisitos típicos antes de la configuración

- Asegúrese de que el rastreador cuente con capacidad de datos celulares activa y una SIM instalada con datos habilitados si el dispositivo lo requiere.
- Acceso al método o software de configuración del fabricante (por ejemplo, herramientas del proveedor o comandos vía SMS) para actualizar la dirección de servidor y el transporte.
- El rastreador debe estar alimentado y tener una vista despejada durante la fijación inicial de posición al verificar conectividad.
- Un método para recibir confirmación de que el dispositivo aplicó los ajustes, como respuestas por SMS del equipo o el estado en la herramienta del proveedor.
- Conocimiento de la versión de firmware o la revisión de hardware del dispositivo para consultar la documentación correcta si el comportamiento difiere.
- Acceso a una cuenta de Plaspy o a un administrador que confirme que el dispositivo aparece en la plataforma tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El AY-T801 se configura para enviar su posición y los datos de eventos al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo aparezca en la plataforma y pueda ser monitoreado. La infraestructura de Plaspy gestiona múltiples protocolos de rastreadores e identifica automáticamente el protocolo correcto al recibir datos.

- El rastreador se apunta al endpoint de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.  
- El transporte del dispositivo se establece en UDP o TCP según las opciones de configuración de la unidad.  
- El equipo envía reportes periódicos o basados en eventos al servidor de Plaspy para su procesamiento.  
- Plaspy recibe los datos, detecta el protocolo automáticamente y normaliza los reportes para su visualización en la plataforma.  
- Una vez establecido el envío, Plaspy provee seguimiento en tiempo real, historial y alertas basadas en los mensajes del dispositivo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software provisto para el AY-T801 (por ejemplo, herramientas del proveedor o comandos SMS documentados).  
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del dispositivo a 8888 como puerto de destino para los reportes de datos.  
4. Seleccione el modo de transporte UDP o TCP si el equipo requiere elegir el transporte.  
5. Guarde o aplique la configuración mediante el canal de configuración del dispositivo.  
6. Valide que el equipo reporte a Plaspy y aparezca en su cuenta de Plaspy o que sea confirmada su conexión en los registros de la plataforma.

Si el equipo admite configuración por SMS o por software del proveedor, siga las instrucciones públicas del fabricante para aplicar la dirección de servidor y los ajustes de transporte en lugar de reproducir sintaxis de comandos no documentados aquí.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware del fabricante pueden cambiar los comandos disponibles y la disposición de menús; confirme siempre el método correcto para su unidad.  
- Algunos instaladores prefieren el software del proveedor y otros usan la configuración por SMS; la documentación pública del AY-T801 indica que la configuración por SMS está soportada, pero los comandos no se reproducen aquí.  
- Elija TCP o UDP según las preferencias de instalación y el soporte del dispositivo; Plaspy acepta ambos en el puerto compartido 8888 y detectará automáticamente el protocolo entrante.  
- Variaciones de mercado o requisitos del operador (APN y ajustes de operador) pueden ser necesarios para que los datos celulares funcionen; consulte la documentación del fabricante y del operador.  
- Verifique siempre que haya cambiado y guardado los ajustes del servidor y confirme el envío de reportes en Plaspy antes de dar por finalizada la instalación.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el AoYa AY-T801 permite centralizar la visibilidad de la posición de los vehículos, los reportes de eventos y las alertas desde un rastreador compacto con soporte Beidou y GPS. Apuntar el rastreador al endpoint compartido de Plaspy simplifica la integración entre múltiples equipos porque la plataforma utiliza un solo puerto y detección automática de protocolos para agilizar la incorporación de dispositivos.

Conozca más sobre Plaspy y cómo la plataforma admite una amplia gama de rastreadores en https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware e instrucciones de instalación del AY-T801, consulte la documentación del fabricante en http://www.aoyagps.com/ para verificar cualquier detalle que pueda cambiar con el tiempo.
