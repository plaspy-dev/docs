---
slug: /teltonika/msp500/configuration
id: msp500-configuration
sidebar_label: Configuration
title: Teltonika - MSP500 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Teltonika MSP500 para su uso con Plaspy usando ajustes públicos de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika MSP500
  - Configuración MSP500
  - Configuración servidor Teltonika MSP500
  - Configuración MSP500 para Plaspy
  - Configuración de rastreador Plaspy
  - Rastreador GPS MSP500
  - Seguimiento de vehículos MSP500
  - Guía de configuración Teltonika
  - Configuración SMS MSP500
  - Configuración telemetría MSP500
---

# Teltonika - Configuración del MSP500

Esta página ofrece la información pública necesaria para conectar un rastreador Teltonika MSP500 a la plataforma Plaspy. Se centra en los ajustes de servidor compartidos por Plaspy, los requisitos habituales y pasos prácticos que puede aplicar usando métodos de configuración de Teltonika como Teltonika Configurator, SMS o comandos GPRS cuando estén disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en su lado. Los pasos de configuración en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que tome estas instrucciones como guía pública práctica y verifique los controles específicos del dispositivo con la documentación oficial de Teltonika.

## Resumen de la configuración

Configurar el MSP500 para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos de forma fiable a la plataforma usando el endpoint y puerto compartidos de Plaspy. El objetivo es asegurar que el rastreador tenga APN y ajustes de servidor correctos, que se elija el tipo de transporte si es necesario y que el dispositivo sea visible en Plaspy después de reportar.

- Actualice o confirme los ajustes de APN y conectividad para que el rastreador pueda acceder a redes GPRS.
- Configure el dispositivo para que reporte a Plaspy usando el dominio o IP del servidor compartido y el puerto correcto.
- Seleccione UDP o TCP en el dispositivo si el hardware requiere una selección explícita de transporte.
- Aplique y guarde los ajustes, y reinicie el equipo si el procedimiento del fabricante lo requiere.
- Verifique que el rastreador aparezca y reporte en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol so the platform handles protocol parsing after the device connects

## Requisitos habituales antes de la configuración

- Asegúrese de que el MSP500 tenga energía y una batería interna o suministro externo en buen estado para la configuración inicial y las pruebas.  
- Una SIM válida con un APN funcional para acceso de datos GPRS si va a usar datos móviles (el MSP500 admite comandos GPRS y configuración por SMS).  
- Acceso al método de configuración del fabricante que prefiera, como Teltonika Configurator vía USB o Bluetooth, o comandos SMS/GPRS.  
- Conozca los ajustes de APN de su SIM, incluyendo el nombre del APN y cualquier usuario o contraseña necesarios; en los ejemplos abajo se usan marcadores de posición.  
- Confirme la revisión de firmware del dispositivo y revise las notas de la versión de Teltonika si es necesario actualizar antes del despliegue.  
- Planifique validar la conectividad desde el rastreador hacia Plaspy después de aplicar los ajustes.

## Cómo se conecta este rastreador a Plaspy

El MSP500 se configura para enviar mensajes de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar los dispositivos y entregar la telemetría. Una vez que el dispositivo tenga acceso a la red y los ajustes de servidor correctos, Plaspy recibirá y detectará automáticamente el protocolo del dispositivo.

- El rastreador envía paquetes de ubicación GNSS y de eventos al endpoint configurado de Plaspy.  
- Los datos se dirigen a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.  
- Puede elegir UDP o TCP en el rastreador si el dispositivo requiere selección de transporte.  
- Plaspy recibe la conexión y detecta automáticamente el protocolo del rastreador para su análisis.  
- Una vez que reporte, la visibilidad del dispositivo y el envío de eventos estarán disponibles dentro de Plaspy para monitoreo y alertas.

## Flujo de configuración habitual

1. Acceda al método o software de configuración oficial del fabricante (Teltonika Configurator, herramientas USB/Bluetooth o comandos SMS/GPRS).  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o use la IP del servidor Plaspy 54.85.159.138 en el campo de dirección del servidor.  
3. Establezca el puerto del servidor en 8888.  
4. Seleccione UDP o TCP en el dispositivo si el rastreador requiere elección de transporte.  
5. Configure los datos del APN para la SIM usando los valores de su operador (reemplace marcadores como [apn], [apnu] y [apnp]).  
6. Aplique o guarde la configuración y reinicie el equipo si el procedimiento del fabricante requiere un reinicio para que los cambios surtan efecto.  
7. Valide que el MSP500 reporte a Plaspy verificando la conectividad y la visibilidad del dispositivo en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El MSP500 permite enviar la configuración como un comando en bloque. El ejemplo público abajo muestra un patrón setparam común usado para establecer APN y ajustes del servidor. Reemplace los marcadores de APN con los valores de su operador móvil.

- Example bulk setparam command (preserve placeholders and replace before use):

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando:
- [apn] = nombre del APN de su operador.  
- [apnu] = nombre de usuario del APN si se requiere; de lo contrario dejar vacío.  
- [apnp] = contraseña del APN si se requiere; de lo contrario dejar vacío.  
- Los parámetros 2004 y 2005 en este ejemplo establecen el dominio del servidor y el puerto con los valores de Plaspy mostrados arriba.  
- 2006 aparece como una opción adicional del dispositivo en este ejemplo público; consulte la documentación de Teltonika para el significado exacto de cada parámetro numérico.  
- Este comando puede enviarse por SMS, GPRS o aplicarse mediante Teltonika Configurator según el método de configuración que prefiera.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de parámetros y las identificaciones numéricas; confirme siempre los mapeos de parámetros en la documentación específica de su firmware MSP500.  
- El MSP500 admite Teltonika Configurator vía USB o Bluetooth así como comandos SMS/GPRS; elija el método que mejor se adapte a su entorno de instalación.  
- Cuando un dispositivo requiere selección explícita de transporte, puede elegir UDP o TCP en el equipo; Plaspy acepta conexiones por cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo automáticamente.  
- Tenga a mano las credenciales del APN y los detalles de aprovisionamiento de la SIM durante la configuración para minimizar tiempos de inactividad.  
- Si utiliza comandos por SMS, verifique las longitudes de SMS y el comportamiento de agrupamiento según la guía de Teltonika.

## Por qué usar Plaspy con esta configuración

Usar el MSP500 con Plaspy ofrece un camino sencillo para obtener visibilidad de flotas, monitoreo de eventos y supervisión operativa al dirigir los datos del dispositivo a un único endpoint y puerto compartidos. Con los ajustes públicos del servidor mostrados aquí y la capacidad del MSP500 de aceptar configuración mediante Configurator o SMS/GPRS, las organizaciones pueden desplegar rastreadores y poner dispositivos en línea en Plaspy de forma eficiente.

Learn more about Plaspy and how it manages device connections at https://www.plaspy.com. For device specific controls, exact parameter meanings, and the latest firmware instructions, verify details on the manufacturer site https://www.teltonika-gps.com/ as Teltonika documentation is the authoritative source for MSP500 configuration and parameter definitions.
