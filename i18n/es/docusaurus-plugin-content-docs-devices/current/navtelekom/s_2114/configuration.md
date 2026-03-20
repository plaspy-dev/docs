---
slug: /navtelekom/s_2114/configuration
id: s_2114-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2114 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Navtelekom СИГНАЛ S-2114 a Plaspy con los ajustes de servidor y pasos necesarios
keywords:
  - Configuración Navtelekom S-2114
  - Configuración СИГНАЛ S-2114
  - Configuración S-2114 para Plaspy
  - Configurar rastreador GPS Navtelekom
  - Configuración de servidor S-2114
  - Rastreo de vehículos S-2114
  - Configuración GSM GPRS S-2114
  - Configuración de rastreador para Plaspy
  - Soporte para rastreadores heredados
  - Configuración de sensor de combustible RS-232
---

# Navtelekom - Configuración del СИГНАЛ S-2114

Esta página presenta el contexto público de configuración para usar el rastreador Navtelekom СИГНАЛ S-2114 con la plataforma Plaspy. Resume los ajustes compartidos del servidor Plaspy a los que debe apuntar el dispositivo, los pasos prácticos que comúnmente seguirá y qué verificar al integrar el S-2114 en una implementación existente de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el equipo y consulte la documentación oficial de Navtelekom para detalles específicos del dispositivo y archivos de firmware.

## Resumen de la configuración

El proceso de configuración prepara el SIGNAL S-2114 para reportar posición GPS, telemetría y eventos de alarma a Plaspy mediante GPRS celular. El objetivo es configurar el punto final y el transporte de red, confirmar la conectividad celular y verificar que el dispositivo aparezca y reporte correctamente en Plaspy.

- Configure el dispositivo para enviar datos al endpoint del servidor Plaspy para que la posición y la telemetría lleguen a su cuenta.  
- Verifique que el S-2114 tenga conexión de datos celular activa y los ajustes APN correctos cuando el operador de la SIM lo requiera.  
- Conecte y configure las entradas del sensor de combustible RS-232 si su monitoreo requiere telemetría de combustible.  
- Confirme que el reporte de alarmas y el comportamiento por SMS estén habilitados para que los eventos se registren y sean visibles en Plaspy.  
- Aplique actualizaciones de firmware o locales según sea necesario usando USB o métodos remotos por GPRS que el dispositivo soporte.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 for all devices supported by Plaspy  
- Transport support over UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol so devices can use the shared Plaspy endpoint and port

Todos los dispositivos compatibles con Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador cuando este reporte al servidor.

## Requisitos habituales antes de la configuración

- Dispositivo encendido y accesible para configuración, ya sea localmente vía USB o de forma remota por GPRS  
- Una tarjeta SIM funcional con plan de datos activo y capacidad de SMS si se requiere reporte por SMS o manejo remoto  
- Acceso a la herramienta de configuración oficial de Navtelekom o a la interfaz local del dispositivo y al cable USB cuando sea necesario  
- Conocimiento del IMEI del dispositivo o identificador único para registrar o identificar la unidad en Plaspy si su flujo de trabajo lo requiere  
- Cableado RS-232 completado para la integración del sensor de combustible y datos de calibración del sensor disponibles  
- Acceso a la cuenta Plaspy y posibilidad de validar las conexiones entrantes del dispositivo en la plataforma

## Cómo se conecta este rastreador a Plaspy

El S-2114 envía datos de posición y telemetría por GPRS celular al endpoint y puerto del servidor Plaspy. Una vez configurado con los ajustes de Plaspy, los reportes del dispositivo son procesados por Plaspy, que interpreta el protocolo del rastreador automáticamente y muestra la posición, combustible y eventos en la plataforma.

- El rastreador reporta posición GPS y telemetría periódica a d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.  
- El transporte puede seleccionarse como UDP o TCP según la opción de configuración del dispositivo y las condiciones de red.  
- Los datos de sensores RS-232, como el nivel de combustible, se transmiten y se agrupan con la telemetría del dispositivo para su visualización en Plaspy.  
- Los eventos de alarma reportados por el dispositivo vía llamada de voz o SMS pueden registrarse y asociarse a la línea temporal del dispositivo en Plaspy.  
- El dispositivo admite actualizaciones remotas de firmware y configuración por GPRS, permitiendo mantenimiento sin acceso físico cuando la red lo permite.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Navtelekom o al software proporcionado por el fabricante mediante la interfaz USB o la utilidad de configuración.  
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888, que es el puerto estándar que usa Plaspy para todos los dispositivos.  
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.  
5. Aplique o guarde la configuración en la herramienta del dispositivo y envíe los cambios al rastreador.  
6. Reinicie el equipo si las instrucciones del fabricante indican que se requiere un reinicio para aplicar los cambios.  
7. Valide que el dispositivo reporta a Plaspy comprobando el IMEI o identificador en su cuenta Plaspy y confirmando la llegada de telemetría y actualizaciones de posición.

## Ejemplos de comandos de configuración

El SIGNAL S-2114 admite tanto configuración local por USB como configuración remota por GPRS. Los comandos exactos o las cadenas SMS varían según el firmware y la herramienta del fabricante. La configuración común del S-2114 se realiza normalmente usando la utilidad de configuración de Navtelekom o mediante el conjunto de comandos SMS documentado en el manual oficial. Consulte la documentación de Navtelekom para el conjunto exacto de comandos y el orden requerido por el firmware de su dispositivo.

## Notas de configuración

- El S-2114 es un modelo archivado y el comportamiento del firmware puede diferir entre versiones; verifique la versión de firmware antes de aplicar cambios.  
- Elija UDP o TCP según la fiabilidad de la red y las indicaciones de su operador celular; UDP suele usarse por menor overhead y TCP puede ser más fiable en enlaces inestables.  
- Asegúrese de que el APN de la SIM y los ajustes del operador estén correctamente configurados en el dispositivo para que los datos GPRS lleguen a Plaspy.  
- Al integrar sensores de combustible RS-232, confirme el cableado y la escala para que las lecturas se muestren correctamente en los paneles de Plaspy.  
- Utilice herramientas y firmware proporcionados por el fabricante desde los archivos oficiales de Navtelekom para mantener compatibilidad en despliegues legacy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Navtelekom СИГНАЛ S-2114 ofrece a los operadores de flota una vía sencilla para centralizar posición GPS, telemetría de combustible y eventos de alarma provenientes de rastreadores legacy en una única plataforma para monitoreo e informes. Para mantenimiento o soporte de reemplazo en instalaciones existentes, esta configuración permite seguir aprovechando el hardware actual mientras centraliza la visibilidad y la gestión de eventos en Plaspy.

Learn more about Plaspy and how to manage connected devices at https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware releases, and manufacturer instructions on the official Navtelekom site https://www.navtelecom.ru/ since setup details and firmware behavior can change over time.
