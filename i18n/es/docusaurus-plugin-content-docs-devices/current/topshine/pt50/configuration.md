---
slug: /topshine/pt50/configuration
id: pt50-configuration
sidebar_label: Configuration
title: TopShine - PT50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador TopShine PT50, ajustes del servidor Plaspy, comandos SMS y flujo práctico de integración
keywords:
  - configuración TopShine PT50
  - instalación TopShine PT50
  - configuración PT50 en Plaspy
  - configuración de servidor PT50
  - comandos SMS PT50
  - configuración rastreador GPS PT50
  - ajustes servidor Plaspy
  - integración rastreador GPS Plaspy
  - configuración rastreador de activos PT50
  - seguimiento de flotas PT50
---

# TopShine - Configuración PT50

Esta página describe el contexto público de configuración para usar el rastreador TopShine PT50 con la plataforma Plaspy. Se centra en los pasos prácticos y en los comandos SMS públicos que preparan el dispositivo para enviar ubicación y eventos a Plaspy, además de explicar los ajustes de servidor que Plaspy requiere para la conectividad.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando se muestran comandos SMS públicos para el PT50 se incluyen más abajo; confirme siempre el comportamiento del dispositivo con la documentación del fabricante para su revisión de hardware y firmware.

## Resumen de la configuración

El proceso de configuración prepara el PT50 para comunicarse de forma fiable con Plaspy y para que sea visible en la plataforma para monitoreo en tiempo real, alertas y reproducción histórica. Para despliegues con PT50 esto normalmente implica definir los valores APN de la red, apuntar el dispositivo al servidor Plaspy, seleccionar el modo de transporte y validar que los informes llegan a la plataforma.

- Configure el APN del dispositivo para que use datos celulares (GPRS o 4G).
- Apunte el rastreador al endpoint del servidor Plaspy y establezca el puerto compartido de Plaspy.
- Seleccione UDP o TCP en el dispositivo si es necesario y guarde la configuración.
- Verifique la identidad del dispositivo y el mapeo del IMEI para que el rastreador aparezca correctamente en Plaspy.
- Valide los reportes y las alarmas para que la ubicación, el movimiento y eventos SOS sean visibles en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Estos ajustes son el endpoint público y el puerto al que el PT50 debe enviar datos cuando se usa con Plaspy. Use la IP o el dominio según lo soporte su dispositivo o firmware y establezca el puerto 8888 para todos los dispositivos Plaspy.

## Requisitos típicos antes de la configuración

- Una unidad PT50 con alimentación por batería o una fuente temporal de energía para la configuración inicial.
- Una SIM celular válida con datos habilitados y las credenciales APN correctas del operador.
- Acceso al método de configuración del fabricante para su modelo PT50, como comandos SMS o software del proveedor.
- Conocimiento del IMEI del dispositivo y de la contraseña del mismo (el ejemplo público abajo usa 000000 como contraseña predeterminada).
- Manera de enviar y recibir SMS desde el dispositivo si utiliza configuración por SMS.
- Acceso a la cuenta Plaspy o a la lista de dispositivos para confirmar que el rastreador aparece tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El PT50 envía telemetría de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que Plaspy normalice y presente los datos en paneles y alertas. La comunicación normalmente fluye desde el dispositivo por la red celular hasta el endpoint de Plaspy para que las actualizaciones y las alarmas sean visibles en tiempo real.

- El dispositivo se configura para enviar telemetría GPRS o 4G a 54.85.159.138 en el puerto 8888.
- Si el dispositivo soporta nombres de dominio, d.plaspy.com es el dominio publicado de Plaspy para el mismo endpoint.
- Elija UDP o TCP en el dispositivo según sea necesario; Plaspy soporta ambos y detecta automáticamente el protocolo utilizado.
- Una vez que comienzan los reportes, Plaspy mapea el rastreador por IMEI o id de dispositivo para que eventos y ubicación aparezcan en la plataforma.
- Las alarmas y eventos de geocerca o SOS enviados por el PT50 se entregan a Plaspy para su procesamiento inmediato.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el PT50 (comandos SMS o herramienta del proveedor).
2. Configure el APN del dispositivo con las credenciales de su operador móvil para que el rastreador pueda conectarse por datos celulares.
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto a 8888.
4. Seleccione UDP o TCP en el dispositivo si requiere elegir el transporte.
5. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si su firmware lo solicita.
6. Valide que el dispositivo reporte a Plaspy y que el IMEI o id de dispositivo aparezca en la lista de dispositivos de su cuenta Plaspy.
7. Pruebe eventos como movimiento o un SOS para confirmar que las alertas llegan a Plaspy.

## Comandos de configuración de ejemplo

El PT50 admite configuración mediante SMS. Las plantillas de comandos SMS públicas siguientes se toman de contenido suministrado por el fabricante y se conservan con marcadores de posición. El ejemplo usa la contraseña predeterminada 000000. Reemplace los marcadores antes de enviar.

- Resetear a valores de fábrica (paso inicial opcional)
```text
W000000,990,099###
```
Etiqueta: reinicio inicial opcional. La porción de contraseña en estos comandos es la contraseña del dispositivo, el ejemplo público muestra 000000 como valor de fábrica.

- Establecer el id del dispositivo (use los primeros 14 dígitos del IMEI cuando se requiera)
```text
W000000,010,[first14_IMEI]
```
Nota: El ejemplo del fabricante usa los primeros 14 dígitos del IMEI en este comando. Plaspy utiliza el IMEI completo como identificador en la plataforma; confirme cómo mapea el IMEI a dispositivos en Plaspy.

- Establecer el APN del operador (con marcadores)
```text
W000000,011,[apn]
```
Si el operador requiere usuario y contraseña del APN inclúyalos así:
```text
W000000,011,[apn],[apnu],[apnp]
```
Marcadores:
- [apn] = el APN de su operador de red
- [apnu] = usuario APN si es requerido
- [apnp] = contraseña APN si es requerida

- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto
```text
W000000,012,54.85.159.138,8888
```
Este comando configura el dispositivo para reportar a la IP y puerto de Plaspy. Si el firmware admite nombres de dominio, puede usar d.plaspy.com en lugar de la IP; verifique el soporte en su firmware PT50.

- Cambiar a modo GPRS
```text
W000000,013,2
```

- Establecer el intervalo de actualización (valor de ejemplo)
```text
W000000,014,6
```
Ajuste el último parámetro para cambiar el intervalo de rastreo según los requisitos de su despliegue.

- Obtener IMEI del dispositivo (verificar identidad)
```text
W000000,601
```
Este comando devuelve el IMEI para que pueda confirmar la identidad del dispositivo antes de establecer el id del mismo o registrarlo en Plaspy.

## Notas de configuración

- La configuración por SMS mostrada arriba usa la contraseña del dispositivo; los ejemplos públicos usan 000000 como contraseña predeterminada. Si es posible, cambie la contraseña del dispositivo después de la configuración inicial.
- Las variantes de firmware y regionales pueden cambiar la sintaxis exacta de los SMS o el soporte para nombres de dominio frente a IPs. Confirme los comandos exactos para su versión de firmware con el fabricante.
- Elija UDP o TCP según su red y el comportamiento del dispositivo. Plaspy soporta ambos transportes y detectará automáticamente el protocolo cuando el dispositivo reporte.
- Usar consistentemente el IMEI del dispositivo como identificador en la plataforma simplifica el mapeo en Plaspy; siga las instrucciones del fabricante para establecer el id del dispositivo cuando sea aplicable.
- Mantenga un registro del APN y de las credenciales utilizadas para poder reproducir o solucionar despliegues.

## Por qué usar Plaspy con esta configuración

Configurar el TopShine PT50 para reportar a Plaspy ofrece una vía directa para tener visibilidad de ubicación en tiempo real, procesamiento de alarmas y reproducción histórica de rutas para el monitoreo a largo plazo de activos. La combinación de autonomía solar y reporte celular hace al PT50 adecuado para activos remotos o desatendidos, mientras que Plaspy ingiere la telemetría y la expone mediante paneles y flujos de notificación.

Para saber más sobre Plaspy y cómo soporta el PT50, visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos del dispositivo, el comportamiento del firmware y las instrucciones del fabricante en el sitio de TopShine https://www.gztopshine.com/ para asegurarse de utilizar los comandos correctos según su hardware y versión de firmware.
