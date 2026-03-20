---
slug: /tzone/tz_bt07/configuration
id: tz_bt07-configuration
sidebar_label: Configuration
title: TZone - TZ-BT07 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para TZone TZ-BT07 con ajustes de servidor Plaspy y comandos SMS para conectividad
keywords:
  - Configuración TZone TZ-BT07
  - Configuración TZ-BT07
  - Configuración de rastreador Plaspy
  - Configuración SMS TZ-BT07
  - Ajustes de servidor para rastreador GPS
  - Configuración del servidor Plaspy
  - Configuración de seguimiento de vehículos
  - Configuración APN TZ-BT07
  - Guía de compatibilidad Plaspy
  - Detección de protocolo de rastreador
---

# TZone - Configuración del TZ-BT07

Esta página describe el contexto público de configuración para usar el rastreador TZone TZ-BT07 con Plaspy. Se enfoca en los ajustes compartidos de servidor que requiere Plaspy, los pasos típicos de preparación y los comandos SMS prácticos publicados para el TZ-BT07, de modo que el dispositivo pueda reportar a la plataforma de Plaspy.

Plaspy utiliza un endpoint de servidor compartido y un único puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador utilizado por cada equipo. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página se concentra en los pasos públicos y prácticos que preparan al TZ-BT07 para comunicarse con Plaspy.

## Resumen de la configuración

El proceso de configuración prepara el TZ-BT07 para enviar mensajes de ubicación y estado a Plaspy y asegura que el equipo sea alcanzable y visible en la plataforma. Para unidades TZ-BT07 que soportan configuración por SMS/GPRS, la configuración normalmente incluye establecer el APN de datos móviles, apuntar el dispositivo al servidor de Plaspy y activar el reporte por GPRS.

- Prepare el dispositivo para que pueda enviar datos a Plaspy configurando APN y parámetros de servidor
- Establezca un intervalo de reporte apropiado para que el dispositivo informe como se espera
- Apunte el dispositivo al endpoint del servidor de Plaspy para que los datos lleguen al destino correcto
- Active el modo GPRS o reporte por datos cuando sea necesario para que el dispositivo envíe paquetes a Plaspy
- Valide que el dispositivo esté reportando en Plaspy después de la configuración para confirmar visibilidad y manejo correcto del protocolo

## Ajustes de servidor para Plaspy

Para configurar el TZ-BT07 para funcionar con Plaspy, utilice los siguientes ajustes públicos de servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según la capacidad del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que usan formatos estándar son reconocidos

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y se basa en la detección automática de protocolo para interpretar los mensajes entrantes.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM en funcionamiento con un plan de datos activo y el APN correcto para el operador móvil
- Acceso al número de teléfono del dispositivo o al canal SMS para enviar comandos de configuración por SMS
- El TZ-BT07 encendido y dentro de cobertura para recibir SMS y usar GPRS
- Conocimiento de la contraseña del dispositivo si utiliza una para la configuración por SMS (los comandos mostrados abajo usan un token de contraseña común como parte del formato)
- Acceso a la documentación oficial del fabricante o a la herramienta de configuración como referencia
- Capacidad para probar y validar el reporte en Plaspy luego de la configuración

## Cómo se conecta este rastreador a Plaspy

El TZ-BT07 puede configurarse para enviar sus datos al endpoint y puerto compartido de Plaspy para que la plataforma reciba y procese mensajes de ubicación y estado. Cuando está correctamente configurado, Plaspy aceptará los datos del dispositivo y lo hará visible en la plataforma mediante su detección automática de protocolo.

- El rastreador se apunta al dominio o IP del servidor de Plaspy para que los datos salientes se enruten a Plaspy
- El dispositivo usa el puerto 8888 para enviar paquetes de reporte a Plaspy
- La comunicación puede usar UDP o TCP según la configuración y el soporte de firmware del rastreador
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes en consecuencia
- Una vez que comienzan los reportes, Plaspy ofrece visibilidad e informes de eventos basados en los datos recibidos

## Flujo común de configuración

1. Acceda al método o herramienta de configuración oficial del fabricante para el TZ-BT07 (los comandos SMS son comúnmente usados en este modelo).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 según el formato requerido por el comando del dispositivo.
3. Configure el puerto en 8888 como lo requiere Plaspy.
4. Elija UDP o TCP si el dispositivo exige selección de transporte; seleccione el transporte soportado por su firmware o red.
5. Aplique o guarde la configuración en el dispositivo (para configuración por SMS esto se completa cuando el comando SMS es aceptado por el dispositivo).
6. Reinicie el dispositivo si el fabricante lo requiere o si no observa reportes inmediatos.
7. Valide que el dispositivo informe a Plaspy y aparezca en la plataforma con el intervalo de actualización esperado.

## Ejemplos de comandos de configuración

Los pasos públicos de configuración del TZ-BT07 que siguen se publican como ejemplos de comandos SMS. Envíe estos mensajes SMS al número del dispositivo en el orden mostrado. Conserve los marcadores de posición y reemplácelos con los valores de su operador según sea necesario.

1. Configurar el APN del operador
- Reemplace {{apn}} por el APN de su operador. Si requiere, use {{apnu}} y {{apnp}} para usuario y contraseña del APN.
```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```
(Si su dispositivo o firmware acepta un formato más corto sin usuario ni contraseña, puede omitir los marcadores finales dejando el comando como *000000,011,{{apn}}#.)

2. Establecer el intervalo de actualización a 60 segundos
```text
*000000,018,60,999#
```

3. Configurar el servidor GPRS a Plaspy usando la IP del servidor y el puerto
```text
*000000,015,0,54.85.159.138,8888#
```
(Puede reemplazar la IP por d.plaspy.com si el dispositivo acepta nombres de dominio en el formato del comando.)

4. Activar el modo GPRS para que el dispositivo comience a reportar datos
```text
*000000,016,1#
```

Notas sobre estos comandos:
- El valor de prefijo 000000 en estos ejemplos es el token de contraseña del dispositivo mostrado en el formato público del comando. Reemplácelo por la contraseña de su dispositivo si se ha cambiado del código de fábrica.
- {{apn}}, {{apnu}} y {{apnp}} son marcadores de posición para el APN, usuario de APN y contraseña de APN de su operador móvil respectivamente. Mantenga los marcadores intactos y sustituya los valores reales antes de enviar.
- Estos comandos son los ejemplos públicos de configuración por SMS proporcionados para el TZ-BT07. Siempre verifique la sintaxis del comando contra la documentación de firmware del dispositivo si observa un comportamiento diferente.

## Observaciones de configuración

- Las versiones de firmware del fabricante y las variantes regionales de hardware pueden cambiar la sintaxis exacta de los SMS o los parámetros disponibles; consulte la documentación del fabricante si un comando no es aceptado.
- La configuración por SMS se muestra en los ejemplos públicos anteriores; algunos instaladores pueden preferir herramientas del fabricante o un portal de configuración si está disponible para configuraciones masivas.
- Elija UDP o TCP según la confiabilidad de la red y el soporte del firmware del dispositivo; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Asegúrese de que el APN y cualquier credencial del operador sean correctos antes de habilitar el modo GPRS para evitar problemas de conectividad.
- Si el dispositivo no reporta de inmediato, verifique la aceptación del SMS, espere un breve periodo tras habilitar GPRS y reinicie el dispositivo si es necesario.

## Por qué usar Plaspy con esta configuración

Configurar el TZ-BT07 para que reporte a Plaspy ofrece a las organizaciones una manera sencilla de integrar rastreadores compactos en una única plataforma para visibilidad, monitoreo y supervisión operativa. Con los ajustes públicos del servidor y los comandos SMS arriba indicados, el dispositivo puede prepararse para enviar datos a Plaspy, donde se reconoce y procesa automáticamente.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones de dispositivos y los datos de seguimiento, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles del fabricante, verifique la información actual en la documentación oficial de TZone en http://www.tzonedigital.com/ .
