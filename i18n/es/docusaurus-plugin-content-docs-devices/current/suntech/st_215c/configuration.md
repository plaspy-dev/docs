---
slug: /suntech/st_215c/configuration
id: st_215c-configuration
sidebar_label: Configuration
title: Suntech - ST 215C Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Suntech ST 215C para Plaspy usando servidor público y comandos SMS para informes GPRS TCP o UDP
keywords:
  - configuración Suntech ST 215C
  - instalación Suntech ST 215C
  - configuración servidor ST 215C
  - configuración ST 215C Plaspy
  - configuración rastreador GPS Suntech
  - configuración rastreador vehicular Plaspy
  - configuración SMS ST 215C
  - configuración GPRS TCP UDP rastreador
  - seguimiento de flotas ST 215C
  - ajustes servidor tracker Suntech
---

# Suntech - ST 215C: Configuración

Esta página documenta el contexto público de configuración para conectar un rastreador GPS Suntech ST 215C a Plaspy. Reúne los parámetros de servidor públicos conocidos y las plantillas de comandos SMS usadas para el ST 215C, de modo que usted pueda preparar el equipo para comunicarse con Plaspy. Use esta información junto con los manuales del dispositivo y las herramientas del proveedor al configurar unidades en campo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST 215C admite GPRS con transporte TCP y UDP; los ejemplos abajo muestran comandos de configuración vía SMS comúnmente usados para definir el APN, el endpoint del servidor, el puerto y los intervalos de reporte.

## Resumen de configuración

El objetivo de los pasos de configuración que siguen es preparar el rastreador para enviar datos de posición y eventos de forma fiable a Plaspy, validar la conectividad y asegurar que el equipo aparezca visible en la plataforma. Las plantillas de comando SMS incluidas en esta página son ejemplos públicos que muchos instaladores usan para configurar unidades ST 215C para informes por GPRS.

- Configure el APN del operador móvil y, si corresponde, las credenciales APN para que el dispositivo pueda usar datos GPRS.
- Defina el endpoint del servidor Plaspy y el puerto compartido para que el rastreador informe a Plaspy.
- Configure intervalos regulares de reporte de posición para que el dispositivo transmita actualizaciones de ubicación oportunas.
- Valide los ajustes usando el comando de verificación del dispositivo y confirme que la unidad aparece en línea en Plaspy.
- Utilice el método recomendado por el fabricante, como comandos SMS o software del proveedor, según las herramientas disponibles.

## Ajustes del servidor Plaspy

- Use el dominio de servidor d.plaspy.com para la configuración del rastreador.
- También puede usar la IP del servidor 54.85.159.138 como endpoint alternativo.
- Todos los dispositivos Plaspy usan el mismo puerto 8888 para reportes.
- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que es aceptable elegir TCP o UDP y la plataforma interpretará las conexiones entrantes.

## Requisitos típicos antes de la configuración

- Acceso al IMEI del dispositivo para calcular el ID requerido por el formato de comando Suntech.
- Una tarjeta SIM con plan de datos activo y credenciales APN correctas para el operador móvil.
- Capacidad para enviar SMS al número del dispositivo cuando utilice configuración vía SMS.
- Fuente de alimentación estable o conexión a la alimentación del vehículo mientras aplica la configuración.
- Acceso al método de configuración oficial de Suntech o al conjunto de herramientas del proveedor cuando no se prefiera usar SMS.
- Confirmación de la versión de firmware del equipo si está disponible, ya que el soporte de comandos y la sintaxis pueden variar según el firmware.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el ST 215C usa su conexión GPRS para transmitir telemetría y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe los paquetes entrantes en el puerto 8888 y mapea el dispositivo usando su identificador para que la unidad sea visible en la cuenta.

- El rastreador se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El equipo envía actualizaciones periódicas de ubicación según el intervalo de reporte configurado.
- Eventos y cambios en entradas digitales se transmiten a Plaspy para monitoreo y alertas.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los paquetes TCP o UDP entrantes se manejan correctamente.
- Una vez recibidos los datos, el dispositivo aparece en la plataforma Plaspy para monitoreo y generación de informes.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software del proveedor, o prepárese para enviar mensajes SMS de configuración según la guía de Suntech.
2. Calcule el ID del dispositivo a partir del IMEI (ver ejemplos abajo) y prepare los valores de APN para el dispositivo.
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo o en el comando SMS.
4. Establezca el puerto en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte e incluya esa opción en la configuración.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador requiere reboot para aceptar nuevos ajustes.
7. Valide que el dispositivo informe a Plaspy y aparezca en línea en su cuenta revisando la salida del comando de verificación y la plataforma.

## Ejemplos de comandos de configuración

Las siguientes plantillas públicas de comandos SMS se derivan de ejemplos proporcionados por el fabricante. El ST 215C utiliza un ID de dispositivo que se obtiene de los dígitos 9 a 14 del IMEI (es decir, los seis dígitos inmediatamente antes del último dígito del IMEI). Por ejemplo, si el IMEI es 12345678 901234 5 entonces el ID del dispositivo es 901234.

Notas sobre los marcadores usados abajo:
- [device_id] = ID de dispositivo de seis dígitos derivado de los dígitos 9 a 14 del IMEI como se describió arriba.
- [apn] = nombre del APN de la red móvil para el operador de la SIM.
- [apnu] = usuario del APN si lo requiere el operador, de lo contrario dejar vacío.
- [apnp] = contraseña del APN si lo requiere el operador, de lo contrario dejar vacío.
- \<APN_FLAG> = usar 1 si suministra usuario o contraseña, de lo contrario 0. Esta bandera habilita el envío de credenciales en el comando APN.

1) Configure el APN del operador y el servidor GPRS
- Plantilla (enviar como SMS al número del dispositivo):

```
SA200NTW;[device_id];02;<APN_FLAG>;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Explicación
  - Reemplace [device_id] con el ID de seis dígitos del IMEI.
  - Reemplace [apn], [apnu] y [apnp] con el APN del operador y las credenciales opcionales.
  - Ajuste \<APN_FLAG> a 1 cuando proporcione usuario o contraseña, de lo contrario ponga 0.
  - El comando apunta el dispositivo a la IP del servidor Plaspy 54.85.159.138 y al puerto 8888. Puede sustituir d.plaspy.com en herramientas del dispositivo que acepten nombres de host en lugar de la IP.

2) Establezca el intervalo de actualización a 60 segundos
- Plantilla:

```
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

- Explicación
  - Esto ajusta los intervalos de reporte periódico. Modifique los parámetros numéricos según su instalación y requisitos de cumplimiento.

3) Comprobar ajustes o verificar la configuración
- Plantilla:

```
SA200CMD;[device_id];02;PresetA
```

- Explicación
  - Este comando solicita al dispositivo que devuelva detalles de la configuración predeterminada para que usted pueda verificar APN, servidor y ajustes de reporte.

Si utiliza software de configuración del proveedor en lugar de SMS, ingrese los mismos valores para el servidor (d.plaspy.com o 54.85.159.138), puerto 8888, ajustes de APN y los intervalos de reporte en la interfaz del software y guarde.

## Notas de configuración

- El ST 215C admite tanto TCP como UDP sobre GPRS. Elija el transporte que se ajuste a su red y requisitos de confiabilidad; Plaspy aceptará ambos y detectará el protocolo automáticamente.
- La configuración vía SMS se usa habitualmente para la puesta en marcha en campo cuando no hay un computador o una herramienta del proveedor disponible. Asegúrese de enviar los comandos SMS desde un número que el dispositivo acepte como origen de configuración si aplica.
- Diferentes revisiones de firmware o lotes de hardware pueden esperar un orden de parámetros o banderas ligeramente distinto. Verifique siempre la sintaxis de los comandos con el manual del equipo que está configurando.
- Cuando suministre usuario o contraseña del APN, asegúrese de establecer la bandera APN (el parámetro del comando indicado como \<APN_FLAG>) para que el dispositivo incluya las credenciales.
- Tras aplicar nuevos ajustes, puede ser necesario reiniciar el dispositivo para que los cambios surtan efecto. Confirme con la respuesta del equipo o observando que el dispositivo aparece en línea en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST 215C con Plaspy ofrece una vía directa para la visibilidad de flotas y el monitoreo operacional. El soporte del ST 215C para GPRS con TCP y UDP, combinado con la detección automática de protocolo de Plaspy, simplifica la integración: una vez que el dispositivo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888 y se configuran los intervalos de reporte, los datos fluyen hacia la plataforma para seguimiento, monitoreo de eventos y generación de informes.

Learn more about how Plaspy can receive and process data from compatible trackers at https://www.plaspy.com. For the latest device specific commands, firmware notes, and hardware details verify the current documentation on the manufacturer website http://www.suntechint.com/ as setup methods and firmware behavior can change over time.
