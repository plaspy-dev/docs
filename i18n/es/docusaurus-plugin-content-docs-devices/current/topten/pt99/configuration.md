---
slug: /topten/pt99/configuration
id: pt99-configuration
sidebar_label: Configuration
title: TopTen - PT99 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopTen PT99 para conectar el dispositivo con Plaspy
keywords:
  - Configuración TopTen PT99
  - Configuración PT99 para Plaspy
  - Configuración rastreador GPS TopTen PT99
  - Configuración de servidor PT99
  - Configuración de rastreador Plaspy
  - Configuración plataforma GPS PT99
  - ID rastreador IMEI PT99
  - Configuración SMS PT99
  - Configuración rastreador vehicular PT99
  - Compatibilidad rastreador GPS Plaspy
---

# TopTen - Configuración del PT99

Esta página documenta el contexto público de configuración para usar el rastreador TopTen PT99 con Plaspy. Reúne los ajustes públicos del servidor Plaspy, el flujo de trabajo habitual para preparar el equipo y los comandos SMS públicos que el fabricante proporciona para configurar el APN y los parámetros de servidor. Use esta guía para preparar un PT99 y permitir su comunicación con Plaspy, manteniendo a mano la documentación del fabricante para pasos específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los datos llegan a la plataforma. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PT99 soporta configuración por SMS según los comandos públicos que se muestran más abajo y requiere los valores correctos de APN y servidor para reportar a Plaspy.

## Resumen de la configuración

El proceso de configuración prepara el PT99 para enviar datos de ubicación y estado a Plaspy, y garantiza que el dispositivo sea accesible y visible en la plataforma. Con el PT99 esto normalmente implica configurar el APN, apuntar el dispositivo al endpoint del servidor Plaspy y confirmar el identificador del dispositivo que usará Plaspy.

- Configure el APN y los parámetros GPRS en el PT99 para que pueda establecer conexión de datos.
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy para que los reportes lleguen a la plataforma.
- Verifique que el identificador que usará Plaspy sea el ID del rastreador derivado del IMEI, como se muestra en la respuesta PAR.
- Valide la conectividad y los intervalos de reporte para que el rastreador aparezca y se actualice correctamente en Plaspy.
- Opcionalmente, restaure la configuración de fábrica antes de una configuración nueva si su proceso de despliegue lo requiere.

## Ajustes de servidor Plaspy

Use los siguientes valores públicos de Plaspy al configurar los parámetros de servidor y transporte en el PT99:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy utiliza el mismo puerto para todos los dispositivos soportados y aceptará tráfico TCP o UDP en el puerto 8888, realizando la detección de protocolo sobre las conexiones entrantes.

## Requisitos típicos antes de la configuración

- Un dispositivo PT99 con batería cargada o una fuente de alimentación adecuada para la configuración.
- Una tarjeta SIM habilitada para datos móviles y SMS si va a usar la configuración basada en SMS como se muestra en los comandos públicos.
- El IMEI del dispositivo disponible para determinar el ID de rastreador que Plaspy usará (el ID del PT99 corresponde a los últimos 14 dígitos del IMEI).
- Un teléfono o servicio capaz de enviar mensajes SMS al PT99 para la configuración por SMS.
- Acceso a la documentación oficial de TopTen o a la herramienta del proveedor para instrucciones específicas de firmware y para resolver problemas.
- Tiempo para verificar que el dispositivo reporta al endpoint Plaspy después de aplicar la configuración.

## Cómo se conecta este rastreador a Plaspy

El PT99 se configura para reportar al endpoint y puerto compartidos de Plaspy para que eventos, actualizaciones de ubicación y mensajes de estado lleguen a la plataforma para su procesamiento y visualización. Plaspy asocia el dispositivo con un identificador derivado del IMEI del PT99 y maneja la detección de protocolo automáticamente.

- El rastreador se ajusta para enviar datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El PT99 puede configurarse para usar transporte UDP o TCP para alcanzar Plaspy en el puerto 8888.
- Plaspy realiza detección automática de protocolo cuando recibe tráfico del rastreador, por lo que la plataforma reconocerá el protocolo del PT99 sin acción adicional del usuario.
- El identificador del dispositivo que usa Plaspy corresponde a los últimos 14 dígitos del IMEI tal como se devuelve en la respuesta PAR del PT99.
- Se pueden establecer intervalos de reporte y de sueño en el PT99 para que el dispositivo envíe datos a la frecuencia deseada hacia Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración TopTen para su modelo PT99, como los comandos SMS del fabricante o la herramienta de configuración del proveedor.
2. Confirme el IMEI del dispositivo y determine el ID de rastreador que Plaspy usará (el ID del PT99 son los últimos 14 dígitos del IMEI).
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la pantalla de configuración del dispositivo o en el comando SMS.
4. Establezca el puerto a 8888 en la configuración del dispositivo.
5. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar una opción de transporte.
6. Configure el APN y cualquier usuario o contraseña APN requerida y aplique o guarde la configuración en el dispositivo.
7. Reinicie o corte la alimentación del PT99 si el firmware del dispositivo lo requiere para aplicar los ajustes.
8. Verifique que el dispositivo reporte a Plaspy comprobando el identificador del rastreador y la telemetría reciente en su instancia de Plaspy.

## Comandos de configuración de ejemplo

El PT99 soporta configuración por SMS. Los siguientes comandos SMS públicos se muestran en las notas de configuración suministradas por el fabricante. Reemplace 111111 por la contraseña SMS de su dispositivo si su unidad usa una contraseña administrativa diferente. Mantenga el orden mostrado al configurar APN y valores de servidor.

- Comando opcional de reinicio o limpieza inicial
```text
111111CLR
```
Etiqueta: reinicio de fábrica opcional cuando su proceso de despliegue lo requiera.

- Comando de configuración de APN y servidor GPRS
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:[apn],[apnu],[apnp];RPT:60;SLP:60;RUN:2;
```
Explicación:
- Reemplace [apn] con el nombre del APN de su operador móvil.
- Reemplace [apnu] con el usuario APN si su operador lo requiere, o deje en blanco si no aplica.
- Reemplace [apnp] con la contraseña APN si su operador lo requiere, o deje en blanco si no aplica.
- Este comando apunta el dispositivo a la IP del servidor Plaspy 54.85.159.138 y al puerto 8888, y establece parámetros de reporte y sueño según el ejemplo del fabricante.

- Comando de verificación para consultar la configuración WWW actual
```text
111111WWW:
```
Esta consulta devuelve los ajustes actuales de APN y servidor registrados en el dispositivo.

Nota: El ejemplo del fabricante usa la IP del servidor 54.85.159.138 en lugar del dominio d.plaspy.com. Puede usar el dominio d.plaspy.com o la dirección IP 54.85.159.138 al configurar el dispositivo. Plaspy acepta conexiones hacia d.plaspy.com y el mismo tráfico en 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según lo requiera el firmware del equipo.

## Observaciones de configuración

- Las revisiones de firmware y del sistema operativo pueden cambiar la sintaxis exacta de los SMS y los parámetros disponibles; confirme siempre con la documentación TopTen para el firmware de su dispositivo.
- El ejemplo del PT99 utiliza SMS para la configuración; algunos despliegues también pueden disponer de una herramienta del proveedor o utilidad de configuración—use el método oficial que tenga disponible.
- Cuando un dispositivo requiere selección de transporte, pruebe UDP o TCP en el puerto 8888 según la preferencia del instalador; Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente.
- Mantenga los marcadores de APN [apn], [apnu] y [apnp] tal como se muestran; reemplácelos por los valores de su operador móvil.
- El identificador del dispositivo que usa Plaspy se deriva del IMEI; el ID del rastreador PT99 corresponde a los últimos 14 dígitos devueltos en la respuesta PAR.

## Por qué usar Plaspy con esta configuración

Usar el PT99 con Plaspy ofrece una forma práctica de centralizar reportes de ubicación, alertas y monitoreo de dispositivos. Apuntar el PT99 al endpoint compartido de Plaspy y al puerto estándar simplifica la incorporación y permite que Plaspy maneje la detección del protocolo y el mapeo del dispositivo basado en el ID derivado del IMEI.

Si desea obtener más información sobre cómo Plaspy soporta integraciones de dispositivos y visibilidad de flotas, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y los detalles de configuración del PT99 más actualizados, consulte al fabricante en http://www.t10.cn ya que los pasos de configuración del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
