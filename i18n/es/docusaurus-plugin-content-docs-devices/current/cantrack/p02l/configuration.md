---
slug: /cantrack/p02l/configuration
id: p02l-configuration
sidebar_label: Configuration
title: CanTrack - P02L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CanTrack P02L y apuntarlo a Plaspy para validar conectividad
keywords:
  - Configuración CanTrack P02L
  - Configuración GPS P02L
  - CanTrack P02L Plaspy
  - Configuración del rastreador P02L
  - Guía de configuración CanTrack
  - Configuración de servidor P02L
  - Compatibilidad rastreador GPS Plaspy
  - Guía de instalación P02L
  - Configuración rastreador personal
  - Configuración walkie talkie rastreador
---

# CanTrack - Configuración del P02L

Esta página aborda el contexto público de configuración para usar el CanTrack P02L Smart Walkie-Talkie Tracker con la plataforma Plaspy. Está orientada a los ajustes prácticos del servidor y a los pasos habituales para configurar el P02L de modo que reporte ubicación, telemetría y alarmas a Plaspy para su monitoreo en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El P02L emplea canales de datos LTE y GPRS, admite comandos SMS y OTA para gestión remota, y puede enviar posición, estado y alarmas a Plaspy una vez que el dispositivo esté apuntando al endpoint de Plaspy.

## Resumen de configuración

El objetivo es preparar el P02L para que comunique de manera fiable con Plaspy y así los posicionamientos, las alarmas y los eventos de intercomunicador aparezcan en la plataforma. La configuración se centra en un único endpoint y puerto compartido por todos los dispositivos compatibles; Plaspy detectará automáticamente el protocolo del dispositivo cuando empiece a enviar datos.

- Apunte el P02L al endpoint de Plaspy d.plaspy.com o a la IP de servidor equivalente y al puerto compartido de Plaspy 8888.
- Seleccione el modo de transporte que requiere el dispositivo, UDP o TCP, y guarde ese ajuste en el equipo.
- Verifique la conectividad de datos móviles y los ajustes APN si son necesarios para que el P02L alcance el endpoint de Plaspy.
- Aplique la configuración y reinicie o active el dispositivo si el procedimiento del fabricante lo requiere.
- Valide que los mensajes de posición, estado y alarma llegan a Plaspy para que el dispositivo sea visible en la plataforma.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el P02L para enviar datos a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- El transporte puede ser UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos previos antes de la configuración

- Un P02L con batería cargada, con alimentación activa y con los accesorios necesarios conectados
- Una SIM con datos 4G activa y capacidad de SMS si tiene previsto usar comandos por SMS
- Acceso al método oficial de configuración de CanTrack, como la app del fabricante, la herramienta web o la lista de comandos SMS
- Ajustes APN configurados en el dispositivo si el operador móvil los exige para conexiones de datos
- Una cuenta de Plaspy o credenciales de acceso para confirmar que el dispositivo aparece en la plataforma después de la configuración
- Identificadores del dispositivo e información de registro que Plaspy o el administrador de su cuenta puedan requerir

## Cómo se conecta este rastreador a Plaspy

Cuando está correctamente configurado, el P02L utiliza su canal de datos LTE/GPRS para enviar informes de posición, telemetría y eventos de alarma al endpoint y puerto compartidos de Plaspy. Plaspy recibe y analiza los datos del dispositivo y los pone a disposición para mapeo, alertas y recorridos históricos.

- El P02L envía paquetes de ubicación y telemetría a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que la plataforma aceptará los informes estándar sin cambios de puerto por modelo
- Los posicionamientos, eventos SOS/pánico y detección de caídas se reenvían a Plaspy para visibilidad inmediata
- Los cambios de configuración remota y la gestión OTA se manejan por separado mediante las herramientas del fabricante, mientras que la telemetría operativa fluye hacia Plaspy

## Flujo de configuración típico

1. Acceda al método oficial de configuración de CanTrack para el P02L, como la app del fabricante, el portal web o la interfaz de comandos por SMS.
2. Ingrese el endpoint de Plaspy especificando d.plaspy.com o introduciendo la IP del servidor 54.85.159.138 cuando la herramienta solicite la dirección del servidor.
3. Establezca el puerto del servidor en 8888, según lo requiere Plaspy.
4. Seleccione UDP o TCP como transporte si el dispositivo solicita una selección explícita.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe los comandos SMS tal como los documenta CanTrack.
6. Reinicie o ciclo de energía el dispositivo si las instrucciones del fabricante indican que se necesita reinicio para aplicar los ajustes.
7. Valide que el dispositivo está reportando a Plaspy confirmando su visibilidad en su cuenta de Plaspy y comprobando los primeros mensajes de ubicación o estado.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta para ajustar la dirección del servidor, el APN y el transporte varían según el firmware de CanTrack y el método de configuración que utilice. Dado que las herramientas del fabricante y los conjuntos de comandos SMS pueden cambiar con el tiempo, consulte la documentación oficial de CanTrack para la lista de comandos del P02L.

Para muchos dispositivos CanTrack se aplican conceptualmente los mismos pasos públicos: configurar el servidor en d.plaspy.com o en 54.85.159.138, establecer el puerto 8888, seleccionar UDP o TCP si se solicita, y luego guardar y reiniciar el equipo. Si va a configurar el dispositivo por SMS, use la referencia de comandos SMS de CanTrack para construir los mensajes correctos e incluya los valores de APN u otros marcadores que se requieran.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las etiquetas de menú o la sintaxis SMS exacta para servidor, puerto y APN; revise siempre las notas de la versión del firmware del P02L.
- El P02L admite gestión remota OTA y basada en SMS para muchos parámetros, incluidos ajustes de IP y APN, según la documentación del fabricante.
- Elegir TCP frente a UDP puede afectar las garantías de entrega de mensajes y el comportamiento de la red; seleccione el transporte que coincida con su red y con la guía del fabricante.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no es necesario solicitar puertos por dispositivo.
- Si usa configuración por SMS, asegúrese de que el dispositivo tenga cobertura de red y crédito para SMS si su operador lo exige.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack P02L con Plaspy centraliza la ubicación, las alarmas y la telemetría de rastreadores personales en una sola plataforma para monitoreo y respuesta a incidentes. La combinación de posicionamiento multiconstelación preciso, SOS y detección de caídas, y soporte global de intercomunicador por voz convierte al P02L en una opción práctica para organizaciones y familias que necesitan visibilidad de ubicación y comunicación por voz.

Learn more about Plaspy and how it collects device telemetry at https://www.plaspy.com. For the latest device specific commands, firmware changes and detailed configuration procedures for the P02L consult the official CanTrack documentation at https://www.cantrackgps.com/ to verify current manufacturer guidance.
