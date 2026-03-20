---
slug: /globalsat/lw_360hr/configuration
id: lw_360hr-configuration
sidebar_label: Configuration
title: GlobalSat - LW-360HR Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador wearable GlobalSat LW-360HR a Plaspy usando la configuración compartida del servidor Plaspy
keywords:
  - configuración GlobalSat LW-360HR
  - configurar LW-360HR Plaspy
  - configuración rastreador GPS GlobalSat
  - ajustes servidor Plaspy
  - configuración LoRaWAN rastreador GPS
  - configuración GPS wearable
  - configuración SMS LW 360HR
  - configuración IMEI rastreador
  - integración rastreador Plaspy
  - configuración plataforma rastreo GPS
---

# GlobalSat - LW-360HR Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS wearable GlobalSat LW-360HR con Plaspy. Se centra en los ajustes de servidor prácticos y en ejemplos de comandos públicos que permiten preparar el dispositivo para enviar datos a Plaspy. Utilice esto como referencia técnica para integrar el LW-360HR en la plataforma Plaspy, siempre siguiendo las instrucciones adicionales del fabricante cuando corresponda.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo que se muestran aquí provienen de contenidos públicos de configuración y demuestran el flujo de comandos SMS que el LW-360HR puede aceptar para configurar el reporte hacia Plaspy.

## Resumen de la configuración

El objetivo de configurar el LW-360HR para Plaspy es apuntar el rastreador al servidor de Plaspy, establecer los parámetros de transporte y validar que la ubicación y la telemetría sean visibles en la plataforma. Cuando sea posible, la configuración puede realizarse mediante comandos SMS o mediante la herramienta de aprovisionamiento que suministra el fabricante.

- Configure el dispositivo para que envíe telemetría y ubicación al endpoint del servidor de Plaspy.
- Defina los parámetros de transporte y puerto requeridos por Plaspy y el firmware del rastreador.
- Proporcione el APN o valores de conectividad cuando el dispositivo requiera configuración de datos celulares vía SMS.
- Reinicie o guarde la configuración para que el rastreador comience a reportar a Plaspy.
- Verifique el IMEI del dispositivo y confirme que Plaspy muestra el dispositivo en línea y enviando datos.
- Mantenga el checksum y el formato de comando del fabricante al enviar comandos SMS de configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP según la selección del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los detalles públicos del endpoint de Plaspy que deben ingresarse en los campos de configuración del LW-360HR o en los comandos SMS al preparar el dispositivo para su uso con Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará el protocolo del rastreador automáticamente.

## Requisitos típicos antes de la configuración

- Conocer el IMEI del dispositivo y tenerlo a mano para los comandos de configuración.
- Acceso al método oficial de configuración del fabricante, como SMS, la app de aprovisionamiento del proveedor o una herramienta de configuración local.
- Un teléfono o servicio con capacidad de enviar SMS si va a usar comandos SMS para configurar el rastreador.
- Dispositivo cargado y con alimentación para aceptar comandos de configuración.
- Acceso a la red o a una pasarela LoRaWAN y una cuenta de Plaspy para validar el reporte una vez configurado el dispositivo.
- Conocimientos básicos sobre los marcadores de posición como APN, usuario APN y contraseña APN cuando se requieran parámetros celulares.

## Cómo se conecta este rastreador a Plaspy

El LW-360HR se configura para enviar ubicación y telemetría al endpoint y puerto compartidos de Plaspy. Para Plaspy, el dispositivo se apunta al servidor y al protocolo de transporte seleccionado para que la plataforma pueda recibir y parsear los mensajes automáticamente.

- El rastreador se configura para usar el dominio o la IP del servidor Plaspy y el puerto para enviar la telemetría.
- Plaspy recibe y detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el IMEI del dispositivo.
- Una vez que el dispositivo reporta, la ubicación, SOS y telemetría se muestran en Plaspy para monitoreo y alertas.
- El transporte puede configurarse como UDP o TCP en el puerto 8888 según la opción de configuración del rastreador.
- La confirmación de conexión exitosa se realiza observando el latido (heartbeat) del dispositivo o los primeros informes de posición en Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de GlobalSat para el LW-360HR, como comandos SMS o la herramienta de aprovisionamiento del fabricante.
2. Prepare el IMEI del dispositivo y los datos APN necesarios para la conectividad de datos del dispositivo.
3. Ingrese el endpoint del servidor Plaspy por nombre o IP. Use d.plaspy.com o 54.85.159.138 en el ajuste de servidor.
4. Configure el puerto en 8888 en la configuración del dispositivo.
5. Seleccione el transporte UDP o TCP si el dispositivo requiere elegir un modo de transporte.
6. Aplique o guarde la configuración y realice un reinicio del dispositivo o envíe el comando de reinicio si es necesario.
7. Valide que el dispositivo reporte en Plaspy y que la ubicación y la telemetría aparezcan en la interfaz de Plaspy.

Si usa configuración por SMS, siga exactamente el formato de comando del fabricante e incluya el IMEI y el checksum según lo requiera el firmware del dispositivo.

## Comandos de configuración de ejemplo

El contenido público de configuración para el LW-360HR muestra comandos SMS que pueden enviarse para configurar el rastreador y que reporte a Plaspy. En la nota del formato del fabricante se indica que se requiere un encuadre específico del comando. Mantenga los marcadores de posición exactamente cuando prepare los comandos.

Nota: Los comandos de ejemplo abajo usan marcadores de posición. Reemplace {{imei}} por el IMEI del dispositivo y complete {{apn}}, {{apnu}} y {{apnp}} con el APN, usuario APN y contraseña APN si su despliegue requiere parámetros celulares. Los marcadores {{checksum}} y {{checksumreeboot}} representan el checksum hexadecimal calculado sobre el texto del comando antes del asterisco según lo exige el dispositivo.

Format header used in public examples
TSPRXAB27GHKLMnaicz*U!

1) Comando de configuración para apuntar el rastreador a Plaspy y establecer placeholders de APN y valores de servidor
```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Explicación:
  - Reemplace {{imei}} por el IMEI del rastreador.
  - D1, D2, D3 corresponden a los marcadores de APN, usuario APN y contraseña APN.
  - E0 establece la IP del servidor en 54.85.159.138 y E1 configura el puerto en 8888.
  - A1=1 es un parámetro incluido en la cadena pública; manténgalo tal cual a menos que la documentación del fabricante indique lo contrario.
  - {{checksum}} es el valor checksum del dispositivo calculado sobre la porción de comando anterior al asterisco.

2) Comando opcional de reinicio para reiniciar el dispositivo después de la configuración
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

- Explicación:
  - Este comando de reinicio aparece en el flujo público de configuración y es opcional cuando se requiere un reinicio para aplicar los cambios.
  - Reemplace {{imei}} y calcule {{checksumreeboot}} según corresponda.

Resumen del cálculo de checksum
- El ejemplo público incluye una rutina de checksum sencilla: calcule un checksum XOR sobre los caracteres de la cadena de comando hasta, pero sin incluir, el carácter '*'; convierta el resultado a un valor hexadecimal de dos caracteres en mayúsculas e inserte ese valor donde se indica {{checksum}} o {{checksumreeboot}}. Muchas herramientas del fabricante calculan esto automáticamente por usted.

## Notas de configuración

- Los comandos públicos del LW-360HR demuestran un flujo de configuración vía SMS; utilice un teléfono con capacidad SMS o una herramienta de aprovisionamiento para enviar los comandos exactamente con el formato mostrado.
- El checksum y el encuadre exacto importan. Si usa una app o herramienta del fabricante, esta puede calcular el checksum y formatear automáticamente los comandos.
- La selección TCP versus UDP afecta el transporte; Plaspy soporta ambos, pero asegúrese de que la selección de transporte en el rastreador coincida con el protocolo elegido.
- Las revisiones de firmware y hardware pueden cambiar nombres de comandos y parámetros. Verifique siempre los nombres de comandos y parámetros con la documentación oficial de GlobalSat para la versión de su dispositivo.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador una vez que el dispositivo envíe datos al endpoint configurado.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el LW-360HR ofrece un endpoint unificado para la ubicación wearable, SOS y el envío de telemetría, de manera que las organizaciones puedan monitorear ubicaciones y datos de salud junto con otros activos en una sola plataforma. Los ajustes compartidos del servidor Plaspy simplifican el aprovisionamiento, ya que se utiliza el mismo puerto y los mismos mecanismos de detección en los dispositivos soportados.

Learn more about Plaspy and how it can organize device reporting and alerts at https://www.plaspy.com. For the latest device specific configuration steps, firmware notes, and command references verify current information with the manufacturer at https://www.globalsat.com.tw/ as methods and firmware behavior can change over time.
