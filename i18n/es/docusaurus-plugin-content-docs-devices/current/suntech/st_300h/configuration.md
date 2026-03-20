---
slug: /suntech/st_300h/configuration
id: st_300h-configuration
sidebar_label: Configuration
title: Suntech - ST 300H Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Suntech ST 300H con Plaspy mediante SMS y ajustes de servidor compartido
keywords:
  - Configuración Suntech ST 300H
  - Instalación Suntech ST 300H
  - Configuración ST 300H para Plaspy
  - Configuración servidor rastreador GPS
  - Configuración GPS Suntech
  - Comandos SMS ST300H
  - Configuración APN y servidor GPRS
  - Integración rastreador Plaspy
  - Extracción ID dispositivo IMEI
  - Configuración rastreo de flotas
---

# Suntech - Configuración del ST 300H

Esta página describe el contexto público de configuración para utilizar el rastreador Suntech ST 300H con Plaspy. Se enfoca en los pasos prácticos y en las plantillas de comandos públicas usadas para apuntar el dispositivo a Plaspy, cómo se obtiene el ID del equipo para el registro y cómo validar la conectividad para que el rastreador aparezca en la plataforma Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST 300H comúnmente acepta comandos SMS de configuración para establecer APN, servidor GPRS e intervalos de reporte; esta página conserva esas plantillas públicas y explica cómo aplicarlas para la integración con Plaspy.

## Resumen de la configuración

El objetivo de esta configuración es preparar un ST 300H para comunicarse de forma fiable con Plaspy y confirmar que el dispositivo sea visible en la plataforma de flotas. Para el ST 300H esto normalmente implica usar la interfaz de comandos SMS del fabricante para configurar APN y servidor, ajustar los intervalos de reporte y verificar los parámetros.

- Apuntar los ajustes de servidor GPRS del equipo al endpoint de Plaspy para que el dispositivo pueda abrir el enlace de datos.
- Configurar el APN y las credenciales del operador para que el rastreador establezca conectividad móvil.
- Establecer un intervalo de reporte práctico para asegurar envíos regulares de posición a Plaspy.
- Usar el IMEI del dispositivo para derivar el ID necesario en el formato de comandos SMS del rastreador.
- Verificar la configuración con el comando de verificación del rastreador y confirmar que el dispositivo aparece en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automáticamente detecta el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Estos valores son la información pública del endpoint de Plaspy que deben usarse para configurar el servidor GPRS del ST 300H.

## Requisitos típicos antes de empezar

- Un rastreador ST 300H alimentado y accesible con un número IMEI válido
- Una tarjeta SIM operativa con plan de datos y capacidad SMS insertada en el rastreador
- Un teléfono o herramienta de gestión capaz de enviar comandos SMS al rastreador
- El IMEI del dispositivo para calcular el ID de equipo que se usa en las plantillas SMS
- Detalles de APN, usuario APN y contraseña APN del operador móvil
- Acceso a las instrucciones de configuración de Suntech o recursos de soporte para su versión de firmware

## Cómo se conecta este rastreador a Plaspy

El ST 300H se configura para enviar sus datos de ubicación y estado a Plaspy estableciendo la entrada de servidor GPRS del dispositivo al endpoint y puerto de Plaspy. Plaspy recibe los mensajes del dispositivo y reconoce automáticamente el protocolo del rastreador para que éste pueda visualizarse y supervisarse en la plataforma.

- El rastreador se configura para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP según lo requiera el equipo o la red local.
- Plaspy detecta automáticamente el protocolo entrante y asocia los mensajes con el dispositivo correcto.
- Los intervalos de reporte regulares permiten a Plaspy mostrar ubicaciones actualizadas y visibilidad de eventos del dispositivo.
- El ID de dispositivo usado en los comandos se deriva del IMEI y sirve para la identificación en el conjunto de comandos de configuración.

## Flujo común de configuración

1. Acceda al método oficial de configuración de Suntech para su ST 300H, normalmente comandos SMS o la herramienta del proveedor documentada por Suntech.
2. Determine el ID del dispositivo a partir del IMEI (vea la guía de ID desde el IMEI más abajo) y prepare sus plantillas de SMS.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor GPRS del equipo.
4. Establezca el puerto de destino en 8888.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte.
6. Aplique o guarde la configuración enviando los comandos SMS o usando la herramienta de Suntech y luego reinicie el dispositivo si es necesario.
7. Valide que el dispositivo informe a Plaspy comprobando el equipo en la plataforma Plaspy o usando el comando de verificación del rastreador.

## Ejemplos de comandos de configuración

El ST 300H puede configurarse enviando comandos SMS al dispositivo. El ID de dispositivo usado en estas plantillas son los últimos 9 dígitos del IMEI excluyendo el dígito de verificación final del IMEI. Ejemplo: si el IMEI es 123456789012345, el ID será la subcadena de dígitos comenzando en la posición 6 y terminando antes del último dígito según la convención del fabricante; para el IMEI de ejemplo 123456789012345 el ID de dispositivo mostrado en el contenido del fabricante fue 678901234.

Use estas plantillas SMS públicas tal como las provee Suntech. Reemplace [device_id] con el ID de 9 dígitos calculado y mantenga los marcadores de APN [apn], [apnu] y [apnp] según corresponda.

1. Reset de fábrica inicial opcional (usar cuando se inicia una configuración desde cero)
```
ST300CMD;[device_id];02;Reset
```
2. Establecer APN del operador y servidor GPRS apuntando a Plaspy
```
ST300NTW;[device_id];02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- Nota: el `1` después de la porción `02;` indica que se incluyen credenciales APN. Si no se usa usuario o contraseña APN, los marcadores correspondientes pueden dejarse en blanco.

3. Establecer intervalos de reporte (ejemplo establece intervalo de 60 segundos)
```
ST300RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

4. Verificar ajustes del dispositivo
```
ST300CMD;[device_id];02;PresetA
```

Explicación de los marcadores:
- [device_id] — los últimos 9 dígitos del IMEI excluyendo su dígito de verificación final según requiere el formato SMS del ST 300H.
- [apn] — el APN de su operador móvil.
- [apnu] — usuario APN si el operador lo requiere; dejar en blanco si no aplica.
- [apnp] — contraseña APN si el operador lo requiere; dejar en blanco si no aplica.

Envíe estos SMS desde un teléfono al número del rastreador en el orden indicado cuando el orden sea importante: realice el reset solo si es necesario, luego los ajustes de red y servidor, después el intervalo de reporte y finalmente la verificación.

## Notas de configuración

- El firmware del fabricante y la sintaxis de comandos pueden variar según la región y el lote de producción; siempre verifique las plantillas SMS exactas para su revisión de firmware.
- El ST 300H admite configuración por SMS según las plantillas públicas anteriores; también pueden estar disponibles herramientas de software de Suntech que deben usarse cuando se proporcionen.
- Elija UDP o TCP según las condiciones de la red; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Confirme las credenciales APN con el operador móvil antes de enviar comandos para evitar problemas de conectividad.
- Calcular correctamente el ID del dispositivo a partir del IMEI es crítico para que los comandos sean aceptados por el rastreador.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Suntech ST 300H ofrece a las organizaciones una forma sencilla de centralizar la telemetría de la flota y supervisar dispositivos configurados para informar al endpoint compartido de Plaspy. Al apuntar el ST 300H a d.plaspy.com o 54.85.159.138 en el puerto 8888 y configurar intervalos de reporte, las flotas obtienen visibilidad continua y la capacidad de analizar datos operativos mediante la plataforma Plaspy.

To learn more about Plaspy and supported device configuration approaches visit https://www.plaspy.com. Device specific configuration methods, command syntax, and firmware behavior can change over time, so please verify the latest details on the manufacturer site http://www.suntechint.com/ before deploying devices.
