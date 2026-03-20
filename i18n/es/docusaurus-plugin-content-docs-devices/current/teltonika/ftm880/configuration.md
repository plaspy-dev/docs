---
slug: /teltonika/ftm880/configuration
id: ftm880-configuration
sidebar_label: Configuration
title: Teltonika - FTM880 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Teltonika FTM880 a Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FTM880
  - Configuración FTM880
  - Configuración Plaspy FTM880
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS Teltonika
  - Configuración servidor FTM880
  - Configuración rastreo de flotas
  - Configuración rastreador de activos
  - Integración rastreador GPS
  - Plataforma seguimiento de vehículos
---

# Teltonika - Configuración del FTM880

Esta página documenta el contexto público de configuración para usar el Teltonika FTM880 con Plaspy. Se centra en los ajustes de servidor compartidos por Plaspy, los pasos prácticos necesarios para preparar el rastreador y un comando de ejemplo comúnmente usado para escribir parámetros básicos de conexión en dispositivos Teltonika.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando es posible, incluimos comandos de ejemplo de Teltonika y explicamos los marcadores de posición para que usted los adapte a su entorno.

## Resumen de la configuración

El proceso de configuración prepara el FTM880 para enviar su posición y telemetría a Plaspy y garantiza que el dispositivo sea visible y gestionable desde la plataforma. Normalmente esto implica definir parámetros de acceso a la red, apuntar el dispositivo al servidor de Plaspy, seleccionar el transporte y validar que los reportes lleguen a la plataforma.

- Configure el APN y las credenciales de red para que el dispositivo pueda alcanzar Plaspy mediante la red móvil.
- Establezca el endpoint del servidor del dispositivo en el servidor de Plaspy y configure el puerto que usa Plaspy.
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Guarde o aplique los ajustes y reinicie el rastreador cuando sea necesario para que los nuevos parámetros entren en vigor.
- Valide la conectividad confirmando que el dispositivo aparece y reporta en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (este es el puerto que usa Plaspy para todos los dispositivos compatibles)  
- Soporte de transporte: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son los endpoints públicos de Plaspy que debe usar al configurar el FTM880 para el envío de reportes.

## Requisitos típicos antes de la configuración

- Confirme que el FTM880 está energizado y accesible para la configuración y que su batería cuenta con carga suficiente para el proceso de puesta en marcha.  
- Asegúrese de tener una SIM compatible con un plan de datos habilitado para LTE Cat M1 o NB‑IoT según el SKU lo requiera; confirme las credenciales APN con el operador.  
- Obtenga el método de configuración de Teltonika que utilizará (comandos SMS, herramienta de configuración de Teltonika o la plataforma FT) y la documentación del dispositivo para su versión de firmware.  
- Si usa configuración por SMS, verifique que el dispositivo pueda recibir SMS y que dispone del número móvil que enviará los comandos.  
- Tenga acceso a una cuenta Plaspy o al contacto de soporte de la plataforma para confirmar los flujos de registro o activación del dispositivo tras los reportes iniciales.  

## Cómo se conecta este rastreador a Plaspy

El FTM880 envía ubicación y telemetría disponible al endpoint compartido de Plaspy para que la plataforma pueda mostrar posiciones en vivo, generar alertas y conservar registros históricos. Configure el dispositivo para que reporte al servidor de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888 usando el transporte que el dispositivo soporte.

- El rastreador transmite posición y telemetría por la red móvil a d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- Plaspy recibe y detecta automáticamente el protocolo del rastreador para interpretar los mensajes entrantes.  
- La plataforma procesa eventos de geocercas, alertas y telemetría para monitoreo en tiempo real e informes.  
- Los flujos de gestión remota, como actualizaciones de firmware y aprovisionamiento, pueden coordinarse a través de plataformas Teltonika y reflejarse en Plaspy cuando existan integraciones soportadas.  
- Para validar la conectividad debe confirmar que el dispositivo está listado y enviando reportes dentro de la interfaz de Plaspy después de la configuración.

## Flujo de configuración común

1. Acceda al método oficial de configuración de Teltonika para su dispositivo y firmware (por ejemplo comandos por lotes SMS, herramientas de configuración de Teltonika o la plataforma FT).  
2. Configure el APN y las credenciales de red del dispositivo para que pueda acceder a Internet.  
3. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.  
4. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
5. Elija UDP o TCP si el dispositivo requiere selección de transporte.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante o el método de configuración lo exige.  
7. Valide que el FTM880 reporta a Plaspy revisando el estado del dispositivo y los mensajes entrantes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El siguiente ejemplo muestra el formato de comando por lotes SMS de Teltonika comúnmente usado para escribir parámetros básicos. Conserve los marcadores de posición y reemplácelos con los valores de su operador y cuenta antes de enviar.

- Propósito: establecer APN, usuario APN, contraseña APN, dominio del servidor Plaspy, puerto Plaspy y selección de transporte.
- Reemplace {{apn}}, {{apnu}} y {{apnp}} con el APN, el usuario APN y la contraseña APN de su operador respectivamente.

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores de posición y campos:
- {{apn}} = el APN de su red móvil.  
- {{apnu}} = usuario APN si lo requiere su operador, de lo contrario deje vacío.  
- {{apnp}} = contraseña APN si lo requiere su operador, de lo contrario deje vacío.  
- 2004 en este comando establece la dirección del servidor Plaspy a d.plaspy.com.  
- 2005 establece el puerto en 8888 usado por Plaspy.  
- 2006 se utiliza aquí para indicar la selección de transporte cuando aplica; consulte la documentación de parámetros de Teltonika para el valor correcto para UDP o TCP en su firmware.

Si utiliza el software de configuración de Teltonika o la plataforma FT en lugar de SMS, aplique el mismo dominio o IP del servidor y los valores de puerto en los campos correspondientes de conexión al servidor.

## Notas de configuración

- Los IDs de parámetros y la sintaxis de comandos de Teltonika pueden diferir según el firmware y la variante del dispositivo; siempre consulte la documentación del equipo para su revisión de firmware.  
- El comando de ejemplo mostrado usa la sintaxis por lotes SMS, que es compatible con muchos dispositivos Teltonika; las herramientas de software ofrecen un método alternativo con interfaz gráfica para los mismos parámetros.  
- Elija UDP o TCP según sus requisitos de instalación y el soporte del firmware del dispositivo; algunas redes o operadores presentan comportamientos distintos con cada transporte.  
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando se conecte el dispositivo.  
- Para implementaciones a gran escala, prefiera métodos de aprovisionamiento remoto como Teltonika FOTA WEB o el aprovisionamiento por plataforma para escalar la configuración y la gestión de firmware.

## Por qué usar Plaspy con esta configuración

Configurar el Teltonika FTM880 para reportar a Plaspy ofrece visibilidad centralizada para activos remotos alimentados por batería y maquinaria pesada. Con el FTM880 configurado para enviar telemetría al endpoint y puerto compartidos de Plaspy, los equipos de operaciones pueden recibir actualizaciones de posición en vivo, alertas de geocerca y estado del dispositivo en una única plataforma de gestión de flotas.

Aprenda más sobre Plaspy y cómo se integra con rastreadores como el FTM880 en https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, comportamiento del firmware y la documentación de parámetros más reciente, verifique la información con el fabricante en https://www.teltonika-gps.com/ para asegurarse de que su configuración coincida con las recomendaciones actuales de Teltonika.
