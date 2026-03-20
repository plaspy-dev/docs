---
slug: /gotop/vt_391/configuration
id: vt_391-configuration
sidebar_label: Configuration
title: GOTOP - VT-391 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP VT-391 y conectarlo a Plaspy usando servidor compartido y pasos prácticos
keywords:
  - GOTOP VT-391
  - Configuración GOTOP VT-391
  - Configuración VT-391
  - Configuración Plaspy VT-391
  - Configuración de servidor VT-391
  - Configuración de rastreador GPS GOTOP
  - Rastreo vehicular VT-391
  - Configuración VT-391 WiFi
  - Rastreo de flotas GOTOP VT-391
  - Identificación de conductor RFID VT-391
---

# GOTOP - Configuración VT-391

Esta página presenta la información pública necesaria para usar el rastreador GOTOP VT-391 con Plaspy. Resume los ajustes prácticos que debe aplicar para que el VT-391 envíe su ubicación y datos del dispositivo a Plaspy. Aquí se toma en cuenta la capacidad WiFi del equipo, soporte de cámara, identificación de conductor por RFID, almacenamiento en tarjeta SD, audio bidireccional, entradas analógicas y digitales, y la posibilidad de reporte vía GPRS, SMS y WiFi.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Esta página se concentra en los valores públicos del servidor Plaspy y en un flujo de trabajo práctico para configurar un VT-391 y que sea visible en la plataforma, recomendando verificar la documentación de GOTOP para comandos específicos de firmware.

## Resumen de la configuración

Preparar el VT-391 para trabajar con Plaspy implica aplicar el endpoint del servidor compartido de Plaspy y los ajustes de transporte, y luego validar que el rastreador alcance la plataforma. El objetivo es garantizar que el dispositivo envíe sus informes de ubicación (GPS/WiFi) y eventos a Plaspy de forma confiable para que aparezca en la plataforma y reporte alarmas y telemetría.

- Configure el rastreador para enviar datos al endpoint de Plaspy d.plaspy.com o a la dirección IP equivalente.
- Ajuste el puerto del dispositivo al puerto de Plaspy para que la plataforma reciba los paquetes del rastreador.
- Elija UDP o TCP en el VT-391 si el equipo requiere selección de transporte.
- Valide la conectividad para que el VT-391 aparezca en Plaspy y reporte estado y eventos.
- Si usa WiFi o GPRS, confirme credenciales de red y la conectividad de la SIM según corresponda.

## Valores del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP address: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Use estos valores exactos al ingresar el endpoint del servidor en la herramienta de configuración del VT-391 o en la interfaz del fabricante. La detección automática de protocolo de Plaspy significa que normalmente solo necesita apuntar el rastreador al dominio o IP y establecer el puerto y el transporte.

## Requisitos típicos antes de la configuración

- Confirme que el VT-391 tiene alimentación y está instalado o temporalmente alimentado para la configuración.
- Tenga acceso al método de configuración oficial de GOTOP o al software utilizado para este modelo.
- Si va a reportar vía celular, asegúrese de que haya una SIM con datos habilitada y activa para el reporte GPRS.
- Si usará reporte por WiFi, tenga a mano el SSID y la contraseña y verifique la disponibilidad de la red.
- Conozca el IMEI del dispositivo o su identificador único para poder relacionar la unidad física con Plaspy cuando empiece a reportar.
- Revise la versión de firmware del equipo y tenga en cuenta que las opciones de configuración pueden variar según la versión.

## Cómo se conecta este rastreador a Plaspy

El VT-391 envía ubicación y eventos del dispositivo al endpoint compartido de Plaspy en el puerto 8888 usando UDP o TCP según la configuración del equipo. Una vez que el rastreador apunte a Plaspy y se seleccione el transporte, Plaspy detectará el protocolo del rastreador y analizará los mensajes entrantes para que el dispositivo sea visible en la plataforma.

- El rastreador envía actualizaciones periódicas de ubicación por GPS o WiFi a d.plaspy.com o 54.85.159.138.
- Eventos como SOS, geocerca, exceso de velocidad y conducción brusca se envían al mismo endpoint y puerto de Plaspy.
- Plaspy detecta automáticamente el protocolo utilizado por el VT-391 e ingiere los mensajes sin requerir puertos de servidor distintos por dispositivo.
- El transporte de red puede ser UDP o TCP según la configuración del equipo y consideraciones de fiabilidad de la red.
- Tras una configuración exitosa, Plaspy muestra la telemetría del dispositivo y el historial de eventos para monitoreo y gestión de flotas.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del GOTOP VT-391 o al software provisto por el fabricante o distribuidor.  
2. En los ajustes de servidor ingrese el dominio de Plaspy d.plaspy.com o la IP 54.85.159.138.  
3. Establezca el puerto del dispositivo en 8888 para que coincida con el puerto del servidor Plaspy.  
4. Seleccione UDP o TCP si el equipo le solicita elegir un modo de transporte.  
5. Aplique o guarde la configuración en la herramienta del dispositivo o en la interfaz del equipo.  
6. Reinicie el VT-391 si el fabricante lo requiere para aplicar los nuevos ajustes de red.  
7. Valide que el equipo reporta a Plaspy comprobando la presencia del dispositivo y los mensajes recientes en la plataforma.

Siga las instrucciones del proveedor en cada paso y tenga a mano los identificadores del dispositivo cuando deba emparejarlos en Plaspy.

## Ejemplos de comandos de configuración

El fabricante del VT-391 puede proporcionar comandos por SMS, serie o mediante software para la configuración de servidor y red. En esta página no se ofrece un conjunto público específico de comandos para este modelo. El formato exacto de los comandos y el método pueden variar según el firmware y las herramientas del proveedor, así que utilice la utilidad de configuración de GOTOP o la documentación para enviar los ajustes del servidor.

Al configurar, use los valores de Plaspy mostrados arriba:
- Server domain d.plaspy.com or IP 54.85.159.138
- Port 8888
- Transport UDP or TCP

Si obtiene ejemplos de comandos GOTOP de la documentación oficial o de las herramientas del proveedor, aplíquelos en el orden que el fabricante recomiende y conserve los marcadores de posición como APN, usuario o contraseña cuando sean necesarios.

## Notas de configuración

- Las diferencias de firmware pueden modificar las opciones de configuración disponibles y la sintaxis de los comandos. Revise siempre las notas de la versión de firmware del VT-391 antes de aplicar ajustes.
- Elija UDP para menor overhead y tolerancia a pérdida de paquetes, o TCP para un enfoque orientado a conexión cuando el dispositivo soporte ambos transportes.
- Use configuración WiFi en ubicaciones con acceso inalámbrico confiable y GPRS celular para cobertura amplia. Asegúrese de que el servicio de datos de la SIM esté activo para reportes GPRS.
- Las funciones de cámara, registro en tarjeta SD y RFID se gestionan mediante ajustes específicos de GOTOP; esto no cambia el endpoint de Plaspy pero puede afectar el volumen de datos y el comportamiento de los reportes.
- Las actualizaciones OTA de firmware pueden modificar los flujos de configuración; confirme el soporte de actualizaciones con el fabricante.

## Por qué usar Plaspy con esta configuración

Configurar un GOTOP VT-391 para enviar datos a d.plaspy.com en el puerto 8888 ofrece a las organizaciones una plataforma consistente para visibilidad de flota, monitoreo de alarmas y supervisión operativa. La capacidad WiFi del VT-391, el soporte de cámara y sus múltiples interfaces I/O lo convierten en un equipo versátil para entornos con conectividad mixta, mientras que Plaspy procesa los mensajes entrantes del dispositivo y los presenta para su monitoreo y análisis.

Learn more about Plaspy at https://www.plaspy.com and verify any device specific configuration details or firmware instructions with the manufacturer at https://www.gotop.cc/. Manufacturer specifications and setup steps can change over time so always confirm the latest instructions on the official GOTOP site.
