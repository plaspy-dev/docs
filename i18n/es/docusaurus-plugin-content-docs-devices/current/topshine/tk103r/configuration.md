---
slug: /topshine/tk103r/configuration
id: tk103r-configuration
sidebar_label: Configuration
title: TopShine - TK103R Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para TopShine TK103R con ajustes de servidor Plaspy y comandos SMS para integración GPRS
keywords:
  - configuración TopShine TK103R
  - instalación TopShine TK103R
  - TopShine TK103R Plaspy
  - configuración de rastreador Plaspy
  - configuración de rastreador GPS
  - configuración de rastreo de vehículos
  - configuración de servidor para TK103R
  - configuración GPRS TK103R
  - comandos SMS TK103R
  - rastreo de flotas TopShine
---

# TopShine - TK103R Configuración

Esta página ofrece el contexto público de configuración para usar el TopShine TK103R con Plaspy. Reúne la información práctica y pública necesaria para apuntar el TK103R a los servidores de Plaspy, incluyendo ejemplos de comandos SMS provistos por el fabricante y los valores de servidor de Plaspy requeridos para el reporte por GPRS.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK103R soporta métodos de configuración por SMS y GPRS según la documentación pública, por lo que esta guía explica el flujo típico y conserva las plantillas de comandos SMS del fabricante cuando están disponibles.

## Resumen de configuración

El objetivo de configurar el TK103R para Plaspy es preparar el equipo para que envíe datos de posición y eventos a la plataforma Plaspy, de modo que el rastreador aparezca y reporte correctamente en su cuenta de Plaspy. El fabricante proporciona comandos SMS para ajustar APN, servidor y modo de reporte; éstos pueden usarse durante la instalación inicial o para solución de problemas.

- Configure el dispositivo para que use Plaspy como su servidor de reporte GPRS y así las actualizaciones de ubicación lleguen a la plataforma.
- Establezca el APN del operador y, si es necesario, el usuario y la contraseña del APN para que el dispositivo tenga acceso a datos móviles.
- Valide la conectividad y el reporte con un mensaje de prueba o verificando la visibilidad del equipo en Plaspy.
- Use el IMEI del dispositivo como identificador principal al registrar o solucionar problemas en Plaspy.
- Mantenga a mano los comandos SMS del fabricante y la contraseña por defecto durante la configuración para recuperación y reinstalaciones repetibles.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos son los valores públicos del endpoint de Plaspy que debe usar al apuntar el TK103R a Plaspy. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888.

## Requisitos típicos antes de la configuración

- Una fuente de alimentación estable al TK103R para realizar la configuración y las pruebas.
- Una tarjeta SIM con plan de datos activo y capacidad de SMS, configurada con el APN correcto del operador móvil.
- Acceso al IMEI del dispositivo (a menudo disponible en la etiqueta del equipo o mediante un comando SMS de verificación).
- Conocimiento de la contraseña SMS por defecto del equipo para ejecutar comandos (el ejemplo del fabricante usa 000000).
- Acceso al método de configuración del fabricante, como la interfaz por SMS o la herramienta oficial de configuración.
- Un método para probar el reporte, como verificar el equipo en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TK103R puede configurarse para enviar datos de ubicación y eventos a Plaspy mediante GPRS. Una vez que el dispositivo esté apuntando al endpoint de Plaspy y tenga acceso a datos móviles, Plaspy recibirá la telemetría del equipo y la mostrará en la plataforma.

- El rastreador reporta al endpoint y puerto compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Plaspy recibe las conexiones de los dispositivos en el mismo puerto para todos los equipos compatibles y detecta el protocolo automáticamente.
- El TK103R puede enviar actualizaciones periódicas de ubicación y eventos de alarma a Plaspy una vez que se apliquen el modo GPRS y los ajustes de servidor.
- Eventos como alertas de movimiento, apertura de puertas, encendido del motor y geocercas se envían como mensajes del dispositivo al servidor configurado.
- La visibilidad en la plataforma se logra después de que el dispositivo complete el registro inicial y comience a reportar con regularidad a Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante, como comandos SMS o la herramienta de configuración del proveedor, según la documentación de TopShine.
2. Obtenga el IMEI del dispositivo y la contraseña del instalador o dispositivo (el ejemplo del fabricante usa 000000 como contraseña por defecto).
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en el campo de configuración del servidor.
4. Configure el puerto en 8888 y seleccione UDP o TCP si el dispositivo requiere la selección manual del transporte.
5. Configure el APN del operador, incluyendo usuario y contraseña del APN si son necesarios, y luego aplique o guarde la configuración.
6. Reinicie o corte la alimentación del dispositivo si el fabricante lo recomienda para activar los ajustes GPRS.
7. Valide que el equipo reporte a Plaspy revisando la lista de dispositivos y las posiciones recientes en Plaspy.

## Ejemplos de comandos de configuración

El fabricante proporciona plantillas de comandos SMS para el TK103R. Los comandos de ejemplo abajo usan la contraseña por defecto del dispositivo 000000. Mantenga los marcadores tal como se muestran y reemplácelos por los valores reales para su instalación.

1. Reinicio opcional a fábrica (usar solo si necesita restablecer el dispositivo a valores predeterminados):
```
W000000,990,099###
```
2. Establecer el ID del dispositivo usando los primeros 14 dígitos del IMEI (plantilla del fabricante). Reemplace \<IMEI14> con los primeros 14 dígitos del IMEI del dispositivo. Tenga en cuenta que Plaspy identifica los equipos por el IMEI completo de 15 dígitos al registrarlos en la plataforma.
```
W000000,010,<IMEI14>
```
3. Configurar el APN del operador. Reemplace [apn] con el APN de su operador e incluya [apnu] y [apnp] únicamente si su operador requiere usuario y contraseña del APN. Mantenga los marcadores si planea sustituirlos más adelante.
```
W000000,011,[apn][,[apnu],[apnp]]
```
(Si su APN requiere usuario y contraseña, inclúyalos separados por comas. Si no, envíe solo el campo APN.)

4. Establecer el servidor GPRS para apuntar el dispositivo a Plaspy. Esto usa la IP y el puerto del servidor Plaspy.
```
W000000,012,54.85.159.138,8888
```
5. Cambiar el dispositivo a modo GPRS (este comando habilita el modo de reporte por datos en muchos firmwares del TK103R):
```
W000000,013,2
```
6. Establecer el intervalo de actualización/reporte (el ejemplo usa el valor de intervalo 6 según la muestra del fabricante; ajústelo según sus necesidades):
```
W000000,014,6
```
7. Consultar el IMEI del dispositivo (comando de verificación para solicitar el IMEI del dispositivo vía SMS):
```
W000000,601
```

Explicación de los marcadores:
- [apn] — cadena APN del operador móvil requerida para la conexión de datos.
- [apnu] — usuario del APN si el operador lo exige.
- [apnp] — contraseña del APN si el operador la exige.
- \<IMEI14> — primeros 14 dígitos del IMEI del dispositivo según la plantilla de comando del fabricante. Use el IMEI completo de 15 dígitos al registrar el dispositivo en Plaspy.

## Notas de configuración

- Los comandos SMS y el orden de los parámetros del fabricante pueden variar según la versión de firmware. Confirme siempre los formatos de comando con el manual del dispositivo correspondiente a su versión de firmware.
- El TK103R soporta rutas de configuración por SMS y por GPRS. Use comandos SMS cuando no tenga acceso a una herramienta de configuración o cuando el dispositivo no tenga conectividad de datos.
- Al seleccionar el transporte, tanto UDP como TCP son compatibles para reportar a Plaspy. Pruebe ambos si surgen problemas de conectividad; Plaspy detectará automáticamente el protocolo del rastreador.
- Plaspy usa el mismo puerto para todos los dispositivos, así que configure el puerto 8888 en el equipo al apuntar a Plaspy.
- Mantenga un registro del IMEI del dispositivo y de la contraseña SMS utilizada durante la configuración para facilitar mantenimiento y solución de problemas futuros.

## Por qué usar Plaspy con esta configuración

Configurar el TopShine TK103R para que reporte a Plaspy ofrece a las organizaciones visibilidad confiable de la ubicación de vehículos y reporte de eventos a través de un único endpoint de servidor compartido. Con el dispositivo apuntando a Plaspy, los responsables de flota y los propietarios de vehículos pueden centralizar el rastreo, monitorear alertas y mantener supervisión operativa sin gestionar múltiples ajustes de servidor por dispositivo.

Si desea conocer más sobre cómo Plaspy maneja las conexiones de dispositivos y ver las capacidades de la plataforma, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles de instalación del TopShine TK103R, verifique la información vigente con el fabricante en https://www.gztopshine.com/ ya que el comportamiento del equipo y los métodos de configuración pueden cambiar con el tiempo.
