---
slug: /sentar/mini/configuration
id: mini-configuration
sidebar_label: Configuration
title: Sentar - Mini Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GPS Sentar Mini y conectarlo a Plaspy con los ajustes de servidor compartidos
keywords:
  - Configuración Sentar Mini
  - Instalación Sentar Mini
  - Sentar Mini Plaspy
  - Configuración rastreador GPS Mini
  - Configuración rastreador Sentar
  - Configuración dispositivo Plaspy
  - Guía instalación rastreador GPS
  - Configuración rastreador personal
  - Comandos SMS rastreador
  - Ajustes servidor Sentar Mini
---

# Sentar - Configuración del Mini

Esta página documenta el contexto público de configuración para usar el rastreador GPS Sentar Mini con Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de comandos para apuntar un Mini a los puntos de ingestión de Plaspy y validar la conectividad. Utilice esta guía junto con las instrucciones del dispositivo y las herramientas del proveedor para completar la configuración.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador para conexiones entrantes. Los pasos de configuración en el lado del fabricante para el Mini pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y la herramienta del proveedor; los ejemplos que siguen son comandos SMS públicos y orientaciones de flujo de trabajo comúnmente usados para el aprovisionamiento inicial.

## Resumen de la configuración

El proceso prepara al Mini para comunicar telemetría y actualizaciones de ubicación a Plaspy configurando el endpoint de servidor, el transporte y el comportamiento básico de reporte. Cuando está correctamente configurado, el Mini enviará cargas regulares al servidor de Plaspy para que el dispositivo sea visible en el panel de Plaspy y pueda participar en alertas y geocercas.

- Configure el endpoint del servidor apuntando a Plaspy por dominio o IP para que el tráfico del dispositivo llegue a Plaspy.
- Elija el transporte (UDP o TCP) y configure el puerto compartido que usa Plaspy para los datos del dispositivo.
- Verifique la SIM y los ajustes de datos móviles, como el APN, para que el dispositivo pueda acceder a internet.
- Confirme el intervalo de reporte y los ajustes de telemetría del dispositivo para que Plaspy reciba actualizaciones oportunas.
- Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma antes del despliegue.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (este es el mismo puerto usado para todos los dispositivos en Plaspy)  
- Transport: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador para las conexiones entrantes

Estos valores son los datos públicos de Plaspy que debe usar al configurar el Mini para que reporte a la plataforma.

## Requisitos previos habituales

- Un dispositivo Sentar Mini cargado y accesible con capacidad para recibir comandos SMS o utilizar las herramientas de configuración del proveedor.
- Una tarjeta SIM activa con un plan de datos y el APN correcto del operador para conectividad GPRS/4G.
- Conocimiento de la contraseña por defecto del dispositivo (en los ejemplos del Mini abajo se usa 123456 como contraseña por defecto).
- Acceso a la lista de comandos SMS del fabricante o a la herramienta oficial de configuración del Mini.
- Una forma de verificar el reporte del dispositivo (visibilidad en el panel de Plaspy o en los registros de la plataforma).

## Cómo se conecta este rastreador a Plaspy

El Mini envía ubicación y telemetría del dispositivo a través de la red celular al endpoint y puerto compartidos del servidor de Plaspy, de modo que los dispositivos sean visibles y rastreables en los paneles de Plaspy. Plaspy recibe los uplinks y los utiliza para seguimiento en vivo, historial de rutas y notificaciones de eventos.

- El dispositivo se configura para reportar al endpoint del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138.
- Todo el tráfico del dispositivo se envía al puerto 8888; Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- El rastreador puede usar transporte UDP o TCP; seleccione el transporte que soporte el dispositivo y la red.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta al servidor y comienza a enviar datos.
- Los intervalos regulares de carga permiten a Plaspy ofrecer ubicación en tiempo real, estado y historial.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del Sentar Mini (para este modelo el dispositivo soporta configuración por SMS como se muestra más abajo).  
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del dispositivo en 8888 (Plaspy usa este mismo puerto para todos los dispositivos).  
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.  
5. Aplique o guarde los cambios de configuración en el dispositivo (confirmación por SMS o por la herramienta).  
6. Reinicie el dispositivo si el fabricante recomienda un reboot tras la configuración.  
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma, y verifique las telemetrías y actualizaciones de ubicación esperadas.

Si utiliza los comandos SMS que aparecen a continuación, siga la guía del fabricante sobre la sintaxis y el orden de los comandos.

## Ejemplos de comandos de configuración

El Mini puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos son ejemplos públicos proporcionados para el Sentar Mini. La configuración de ejemplo usa la contraseña por defecto del dispositivo 123456. Conserve los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por los valores específicos del operador cuando sea necesario.

- Restauración de fábrica (opcional en configuración inicial):
```text
pw,123456,factory#
```

- Establecer la zona horaria a UTC+0:
```text
pw,123456,lz,0,0#
```

- Verificar IMSI de la SIM (MCC y MNC) para confirmar los códigos del operador:
```text
pw,123456,imsi#
```

- Establecer APN del operador donde xxx es MCC y yy es MNC. Reemplace [apn], [apnu], [apnp] con su APN, usuario y contraseña del operador según se requiera:
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explicación: [apn] es la cadena APN del operador móvil, [apnu] es el usuario del APN si se requiere, y [apnp] es la contraseña del APN si se requiere. El sufijo xxxyy es un marcador que combina MCC y MNC cuando el dispositivo espera ese formato.

- Establecer el servidor GPRS a Plaspy por IP y puerto (según los ajustes públicos):
```text
pw,123456.ip,54.85.159.138,8888#
```

- Establecer intervalo de subida (reporte) a 300 segundos:
```text
pw123456,upload,300#
```

- Verificar ajustes actuales (comprobación de estado):
```text
pw,123456,ts#
```

Nota: Estos comandos se extraen de ejemplos públicos de configuración del dispositivo. La sintaxis exacta y los separadores deben coincidir con lo que espera el firmware del dispositivo. Si un comando falla, consulte la documentación de Sentar o el soporte del proveedor para el formato exacto de los SMS.

## Notas de configuración

- La configuración por SMS está soportada por el Mini en ejemplos públicos; use los comandos SMS con precaución y verifique la sintaxis para la versión de firmware de su dispositivo.
- La contraseña por defecto que aparece en los ejemplos públicos es 123456; cambie las contraseñas del dispositivo según sus requisitos de seguridad después del aprovisionamiento inicial.
- Las versiones de firmware y los parsers de comandos del fabricante pueden variar; comandos que funcionan en una revisión de firmware pueden requerir separadores u orden diferente en otra.
- Elija transporte TCP o UDP según el comportamiento de la red y el soporte del dispositivo; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Siempre valide que el dispositivo aparezca en Plaspy después de la configuración usando el panel de la plataforma o los registros del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Sentar Mini con Plaspy ofrece una integración sencilla para el rastreo personal y de pequeños activos cuando se necesita hardware compacto y reportes de ubicación continuos. Apuntar el Mini al endpoint y puerto compartidos de Plaspy permite a las organizaciones centralizar la ubicación, el estado de batería y la telemetría en Plaspy para monitoreo, geocercas y revisión histórica.

Learn more about Plaspy at https://www.plaspy.com. For the latest device-specific commands, firmware behavior, and manufacturer details, verify setup information on the Sentar website http://www.sentarsmart.com/ since manufacturer procedures and firmware may change over time.
