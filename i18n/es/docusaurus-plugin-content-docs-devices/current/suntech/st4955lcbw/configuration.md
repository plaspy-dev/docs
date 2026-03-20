---
slug: /suntech/st4955lcbw/configuration
id: st4955lcbw-configuration
sidebar_label: Configuration
title: Suntech - ST4955LCBW Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST4955LCBW con ajustes de servidor Plaspy y ejemplos SMS para integración rápida
keywords:
  - Configuración Suntech ST4955LCBW
  - Configuración inicial Suntech ST4955LCBW
  - ST4955LCBW con Plaspy
  - Configuración rastreador GPS Suntech
  - Configuración servidor ST4955LCBW
  - Configuración SMS rastreador Suntech
  - Configuración rastreador Plaspy
  - rastreo de activos ST4955LCBW
  - rastreo de remolques y contenedores
  - Configuración rastreador GPS solar
---

# Suntech - Configuración ST4955LCBW

Esta página documenta el contexto público de configuración para usar el Suntech ST4955LCBW con Plaspy. Se centra en los ajustes de servidor prácticos y en los comandos de configuración públicos que permiten que el ST4955LCBW envíe ubicación y telemetría a la plataforma Plaspy. Cuando el fabricante proporciona plantillas SMS o campos de configuración, esos ejemplos se conservan aquí como referencia de implementación.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Utilice esta guía para aplicar los ajustes necesarios de Plaspy y consulte la documentación oficial de Suntech para detalles específicos del dispositivo y el comportamiento del firmware más reciente.

## Resumen de configuración

El objetivo del proceso de configuración es preparar el ST4955LCBW para que transmita ubicaciones GNSS y telemetría a Plaspy de manera confiable. El contenido público de configuración para este modelo incluye plantillas SMS para ajustar el APN y el servidor remoto, además de un comando de perfil de reporte para controlar los intervalos de envío.

- Configure la red del dispositivo y el APN para que el rastreador tenga conectividad celular.  
- Apunte el rastreador al endpoint del servidor de Plaspy para que los paquetes lleguen al servicio de ingestión de Plaspy.  
- Establezca los intervalos de reporte y el perfil de telemetría para que Plaspy reciba las actualizaciones de ubicación con la cadencia deseada.  
- Verifique el ID del dispositivo y utilice el comando de verificación por SMS provisto para confirmar los ajustes.  
- Valide que el rastreador aparezca en Plaspy y que esté enviando datos en tiempo real tras la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Transporte soportado UDP o TCP en el puerto 8888 según la preferencia o configuración del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un ST4955LCBW con batería cargada y operativo, con una SIM válida y servicio celular habilitado para datos y SMS si va a usar configuración por SMS.  
- Acceso al IMEI del dispositivo para poder derivar el ID de dispositivo que se usa en las plantillas SMS.  
- Conocimiento de los ajustes APN de su operador, incluyendo usuario y contraseña opcionales si el operador los requiere.  
- El método de configuración del fabricante disponible para su unidad, por ejemplo acceso por comandos SMS o la herramienta del proveedor.  
- Una forma de enviar mensajes SMS al dispositivo si aplicará ajustes mediante plantillas SMS.  
- Una cuenta en Plaspy y conocimiento del ID de dispositivo destino que utilizará dentro de Plaspy para el registro y la verificación.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el ST4955LCBW transmite las posiciones y la telemetría al endpoint y puerto del servidor Plaspy. Plaspy ingiere esos paquetes y los asocia al registro del dispositivo para que la ubicación, el movimiento y los datos de sensores sean visibles en la plataforma.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.  
- El dispositivo puede usar UDP o TCP como transporte, según su configuración; Plaspy acepta ambos en el puerto compartido.  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, simplificando la configuración del lado servidor.  
- Los intervalos regulares de reporte y los mensajes de telemetría permiten a Plaspy ofrecer seguimiento en vivo, alertas de eventos y reproducción histórica.  
- Puede usarse un comando de verificación para solicitar los ajustes actuales del rastreador y confirmar que el servidor está configurado correctamente.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Suntech para su unidad (plantillas SMS, herramienta del proveedor o aprovisionamiento local) para preparar el dispositivo.  
2. Determine el ID del dispositivo a partir del IMEI (el ID son los seis dígitos inmediatamente antes del último dígito del IMEI). Use ese ID en las plantillas SMS o en los campos de la herramienta del proveedor.  
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto remoto en 8888.  
4. Elija UDP o TCP si el dispositivo requiere la selección del transporte y guarde la preferencia. Plaspy acepta ambos transportes.  
5. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si el fabricante lo requiere.  
6. Valide que el rastreador reporte a Plaspy revisando los paquetes entrantes o utilizando el comando de verificación del dispositivo.  
7. Confirme la visibilidad en su cuenta Plaspy y ajuste los intervalos de reporte o el perfil de telemetría según sea necesario.

## Ejemplos de comandos de configuración

Las siguientes plantillas SMS se toman del contenido público de Suntech y muestran cómo establecer el APN, el servidor Plaspy, los intervalos de reporte y cómo solicitar una comprobación de presets. Reemplace DEVICEID por el ID de seis dígitos derivado del IMEI como se describió arriba. Conserve marcadores como [apn], [apnu] y [apnp] y sustitúyalos por los valores de su operador.

- Establecer APN del operador y servidor GPRS (servidor configurado a la IP y puerto de Plaspy). El cuarto campo es 1 cuando se provee usuario o contraseña del APN, de lo contrario 0.

```
SA200NTW;DEVICEID;02;[0 or 1];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Establecer el intervalo de actualización a 60 segundos (perfil de reporte de ejemplo).

```
SA200RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

- Comprobar los presets actuales (comando de verificación).

```
SA200CMD;DEVICEID;02;PresetA
```

Notas sobre los marcadores y el ID del dispositivo:
- DEVICEID: los seis dígitos inmediatamente antes del último dígito del IMEI. Por ejemplo, si el IMEI es 123456789012345 el DEVICEID sería 901234 según el ejemplo proporcionado por el fabricante.  
- [apn]: la cadena APN de su operador.  
- [apnu]: usuario del APN si el operador lo requiere; deje en blanco si no se usa.  
- [apnp]: contraseña del APN si el operador la requiere; deje en blanco si no se usa.  
- Los campos de transporte, IP del servidor y puerto del servidor anteriores apuntan el rastreador a Plaspy usando los valores públicos 54.85.159.138 y 8888. Alternativamente puede usarse el dominio d.plaspy.com cuando el dispositivo admite resolución de dominio.

## Notas de configuración

- Los fabricantes pueden ofrecer múltiples métodos de configuración; el contenido público del ST4955LCBW incluye plantillas SMS, pero también pueden existir herramientas del proveedor o aprovisionamiento por BLE. Use el método apropiado para su despliegue.  
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los campos disponibles. Si una plantilla SMS falla, verifique la versión de firmware del dispositivo y consulte la documentación de Suntech.  
- Elija UDP o TCP según las necesidades de su despliegue; Plaspy acepta ambos en el puerto compartido y detectará el protocolo automáticamente.  
- Dado que Plaspy usa un puerto consistente para todos los dispositivos, asegúrese de que las reglas de firewall o de red permitan conexiones salientes de los dispositivos al puerto 8888.  
- Mantenga las credenciales del APN y las plantillas SMS seguras. Pruebe los comandos en un solo dispositivo antes de desplegar masivamente.

## Por qué usar Plaspy con esta configuración

Combinar el Suntech ST4955LCBW con Plaspy ofrece una ruta práctica para obtener visibilidad de activos en exteriores a largo plazo. El diseño de bajo consumo del dispositivo y sus opciones de telemetría extendida lo hacen adecuado para activos distribuidos, y apuntar el rastreador a los valores compartidos de servidor de Plaspy es sencillo utilizando las plantillas SMS públicas o las herramientas del proveedor. Una vez configurado, Plaspy ingiere la ubicación y la telemetría para que flotas y administradores de activos puedan monitorear el estado, recibir alertas y analizar el movimiento histórico.

Para aprender más sobre Plaspy y cómo se integra con dispositivos como el ST4955LCBW visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware e información de soporte del fabricante, verifique los detalles con Suntech en http://www.suntechint.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
