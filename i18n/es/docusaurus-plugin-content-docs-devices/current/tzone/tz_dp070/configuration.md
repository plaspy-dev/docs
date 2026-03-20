---
slug: /tzone/tz_dp070/configuration
id: tz_dp070-configuration
sidebar_label: Configuration
title: TZone - TZ-DP070 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el TZone TZ-DP070 con Plaspy usando servidor compartido y comandos SMS GPRS
keywords:
  - Configuración TZone TZ-DP070
  - Configuración TZ DP070 Plaspy
  - Configuración rastreador TZone
  - Configuración servidor TZ DP070
  - Configuración APN TZ DP070
  - Comandos SMS TZ DP070
  - Integración dispositivo Plaspy
  - Configuración red monitor de temperatura
  - Configuración GPRS TZ DP070
  - Documentación dispositivo TZone
---

# TZone - Configuración TZ-DP070

Esta página describe el contexto público de configuración para usar el TZone TZ-DP070 con Plaspy. Explica los ajustes de servidor que Plaspy espera y los pasos prácticos que se emplean habitualmente para preparar el TZ-DP070 para reportar al servicio Plaspy usando los comandos públicos disponibles. La información del dispositivo y los ejemplos de SMS que se muestran aquí reflejan el contenido de configuración publicado por el fabricante.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El modelo TZ-DP070 admite flujos de configuración por SMS y GPRS como se muestran en los comandos públicos más abajo, por lo que esta página se centra en aplicar la información del servidor de Plaspy a esos métodos de configuración del fabricante.

## Resumen de configuración

El objetivo de este proceso es preparar el TZ-DP070 para comunicarse de forma confiable con la plataforma Plaspy, de modo que los datos del dispositivo sean visibles en Plaspy. Usando el método de configuración soportado por el fabricante, usted establecerá los parámetros de red, apuntará el dispositivo al endpoint de Plaspy y activará el modo de reporte para que Plaspy pueda detectar y parsear el protocolo del dispositivo automáticamente.

- Configure el APN del dispositivo para que el rastreador pueda establecer una sesión de datos GPRS.
- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos se enruten a la plataforma.
- Establezca el intervalo de reporte para que las actualizaciones de ubicación o telemetría lleguen en intervalos previsibles.
- Active el modo de reporte GPRS para que el dispositivo envíe datos a través de la red celular.
- Verifique que Plaspy recibe mensajes y que el dispositivo aparece como en línea en la plataforma.

## Ajustes del servidor de Plaspy

Al configurar el TZ-DP070 para Plaspy utilice estos ajustes públicos del servidor exactamente como se indican:

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP depending on device requirement  
- Plaspy automatically detects the tracker protocol so the platform can accept many supported device formats

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y la plataforma detectará automáticamente el protocolo del rastreador después de que el dispositivo se conecte correctamente.

## Requisitos típicos antes de la configuración

- Una unidad TZ-DP070 con energía y acceso a la interfaz de configuración del fabricante o capacidad para recibir comandos SMS.  
- Una tarjeta SIM con datos habilitados y el APN correcto del operador para acceso GPRS.  
- El número telefónico del dispositivo o un método para enviar SMS de configuración al rastreador.  
- Conocimiento de la contraseña del dispositivo o del prefijo de comando SMS que el TZ-DP070 requiere para la configuración remota.  
- Acceso a la documentación o herramientas del fabricante para confirmar el comportamiento del firmware y cualquier requisito específico del dispositivo.  
- Una cuenta y un proyecto en Plaspy listos para recibir el dispositivo una vez que empiece a reportar a la plataforma.

## Cómo se conecta este rastreador a Plaspy

El TZ-DP070 se configura para enviar datos al endpoint y puerto del servidor Plaspy para que la plataforma pueda ingerir y mostrar la telemetría del dispositivo. Después de apuntar el dispositivo al servidor y habilitar el reporte, Plaspy detectará automáticamente qué protocolo está usando el dispositivo y comenzará a procesar los mensajes.

- El dispositivo usa GPRS para alcanzar la red de datos móviles después de configurar el APN y las credenciales.  
- El rastreador se apunta a Plaspy usando el dominio del servidor o la IP y el puerto 8888.  
- El dispositivo envía reportes usando UDP o TCP según el transporte seleccionado en el equipo.  
- Plaspy recibe los mensajes entrantes en el puerto 8888 y detecta automáticamente el protocolo del dispositivo para su análisis.  
- Una vez que llegan los mensajes, el dispositivo se vuelve visible y los eventos de reporte aparecen en la interfaz de Plaspy.

## Flujo de configuración típico

1. Confirme que tiene la documentación del TZ-DP070 o el método de configuración del fabricante disponible para su unidad.  
2. Verifique que la tarjeta SIM esté instalada, activa y que se conozca el APN correcto del operador.  
3. Usando el método del fabricante o comandos SMS, ingrese d.plaspy.com o 54.85.159.138 como la dirección del servidor GPRS.  
4. Configure el puerto del servidor a 8888 y seleccione UDP o TCP si el dispositivo le exige elegir un transporte.  
5. Aplique o guarde la configuración y habilite el reporte GPRS o el modo operativo equivalente en el dispositivo.  
6. Reinicie el equipo si el fabricante lo requiere para aplicar los ajustes.  
7. Valide que el dispositivo está reportando y que Plaspy recibe mensajes y detecta el protocolo del dispositivo.

## Ejemplos de comandos de configuración

El TZ-DP070 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos públicos por SMS están tomados del contenido del fabricante y se muestran en el orden en que deben aplicarse. Reemplace los marcadores y la contraseña del dispositivo según corresponda para su instalación.

- Configure el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su APN requiere usuario o contraseña, incluya {{apnu}} y {{apnp}} respectivamente. Envíe este SMS al número del dispositivo:
```text
*000000,011,{{apn}}{{# if apnu or apnp then }},{{apnu}},{{apnp}}{{# end }}#
```
Ejemplo sin usuario y contraseña:
```text
*000000,011,{{apn}}#
```

- Establezca el intervalo de actualización a 60 segundos (y un segundo parámetro usado por el dispositivo). Envíe:
```text
*000000,018,60,999#
```

- Configure el servidor GPRS con la IP y el puerto de Plaspy. Este comando usa la IP de Plaspy y el puerto 8888 según lo publicado:
```text
*000000,015,0,54.85.159.138,8888#
```
Como alternativa, puede apuntar al dominio d.plaspy.com si su dispositivo acepta nombres de dominio.

- Active el modo GPRS para que el dispositivo utilice GPRS para conectarse:
```text
*000000,016,1#
```

Notas sobre el formato de los comandos
- Los comandos de ejemplo usan 000000 como la contraseña de configuración por SMS mostrada en el contenido público. Reemplace 000000 por la contraseña de su dispositivo si se ha cambiado.  
- Los marcadores entre llaves como {{apn}}, {{apnu}} y {{apnp}} deben sustituirse por el APN del operador, el usuario del APN y la contraseña del APN respectivamente. Omita campos opcionales si no los requiere su operador.  
- Envíe los comandos como mensajes SMS normales al número de control del dispositivo. Espere un breve intervalo después de cada comando para que el dispositivo procese y aplique los ajustes.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros requeridos. Siempre confirme los comandos con la documentación de su dispositivo.  
- Los comandos TXT anteriores demuestran la configuración por SMS, que es habitual en dispositivos con capacidad GPRS. Si su unidad admite una utilidad de software o una interfaz web, siga los pasos equivalentes allí.  
- Elija UDP o TCP según las necesidades de su instalación; Plaspy acepta ambos en el puerto 8888, pero el comportamiento como reintentos y gestión de sesión difiere según el protocolo.  
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que debe apuntar todos los dispositivos compatibles al puerto 8888 al integrarlos con Plaspy.  
- Si encuentra problemas de conectividad, verifique el APN, el estado de datos de la SIM y la calidad de la señal antes de cambiar los ajustes del servidor.

## Por qué usar Plaspy con esta configuración

Configurar el TZ-DP070 para reportar a Plaspy permite a las organizaciones centralizar la telemetría y la visibilidad operativa de dispositivos repartidos en su flota o instalaciones. Al apuntar el dispositivo a Plaspy y habilitar el reporte GPRS, los eventos y datos de sensores se pueden recopilar en un solo lugar para su monitoreo, análisis y uso en la toma de decisiones operativas.

To learn more about Plaspy visit https://www.plaspy.com and review the latest device specific guidance from the manufacturer at http://www.tzonedigital.com/ to verify firmware dependent details and ensure you are using the most current setup methods.
