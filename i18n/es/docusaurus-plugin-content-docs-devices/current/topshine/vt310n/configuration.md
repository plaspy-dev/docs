---
slug: /topshine/vt310n/configuration
id: vt310n-configuration
sidebar_label: Configuration
title: TopShine - VT310N Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopShine VT310N con ajustes de servidor Plaspy, comandos SMS y pasos prácticos para integrar el rastreador
keywords:
  - TopShine VT310N
  - Configuración VT310N
  - Configurar rastreador TopShine
  - Configuración Plaspy
  - Configuración de rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración servidor VT310N
  - Configuración GPRS
  - Rastreador para gestión de flotas
  - Configuración servidor TopShine
---

# TopShine - Configuración del VT310N

Esta página explica la configuración pública necesaria para usar el rastreador TopShine VT310N con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor, los comandos SMS que expone el dispositivo y los pasos que puede seguir para registrar y reportar el dispositivo a Plaspy para rastreo en vivo y telemetría.

Plaspy utiliza ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del equipo cuando este se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor, por lo que esta guía resalta las acciones públicas más comunes y le recomienda verificar los pasos exactos con el fabricante cuando sea necesario.

## Visión general de la configuración

El objetivo al configurar el VT310N para Plaspy es preparar el dispositivo para que envíe posiciones y eventos al endpoint compartido de Plaspy, de modo que los vehículos aparezcan correctamente en los mapas y reportes de la plataforma. La configuración pública que se realiza con más frecuencia utiliza comandos SMS o la herramienta del proveedor para establecer el APN, el servidor, el modo de transporte y los parámetros de reporte.

- Configure el APN del dispositivo y las credenciales para que acceda al servicio de datos GPRS.
- Apunte el dispositivo al endpoint del servidor de Plaspy para que la telemetría sea reenviada a la plataforma.
- Seleccione el modo de transporte (UDP o TCP) y ajuste el puerto compartido de Plaspy que usan todos los dispositivos.
- Verifique la identidad del dispositivo usando el IMEI como identificador y confirme que el rastreador reporta a Plaspy.
- Active el intervalo de reporte periódico para que las actualizaciones de posición aparezcan en los mapas en vivo de Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el dispositivo si debe seleccionarse
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un VT310N con alimentación, acceso a la ranura SIM del dispositivo y una SIM con plan de datos y capacidad de SMS.
- Tener disponible el IMEI del dispositivo para usarlo como identificador y en los comandos del fabricante.
- Posibilidad de enviar comandos SMS desde un número autorizado para configurar el dispositivo o acceso a la herramienta de configuración del fabricante.
- El APN correcto y, opcionalmente, el nombre de usuario y la contraseña del APN del operador móvil que provee servicio a la SIM.
- Saber si el firmware del equipo requiere seleccionar UDP o TCP para el reporte por GPRS.

## Cómo se conecta este rastreador a Plaspy

El VT310N se configura para enviar datos GNSS y de sensores vía GPRS al endpoint y puerto compartido de Plaspy. Una vez aplicados el APN y los ajustes del servidor, el dispositivo envía mensajes periódicos de posición y eventos para que Plaspy pueda renderizar la ubicación en vivo, las alertas y el historial.

- El rastreador se apunta al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según la opción del dispositivo; Plaspy detectará el protocolo automáticamente.
- Se envían actualizaciones periódicas de posición para que los mapas en vivo y la reproducción histórica funcionen en la plataforma.
- Los eventos de alarma y la telemetría de sensores se reenvían a Plaspy para el manejo de eventos y notificaciones.
- Si no hay GPRS disponible, el dispositivo puede usar su registrador de datos para almacenar posiciones y subirlas cuando la conectividad se restablezca.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TopShine para el VT310N, como comandos SMS o la herramienta de configuración del proveedor suministrada por el fabricante.
2. Prepare los identificadores del equipo y los datos del operador, por ejemplo el IMEI del dispositivo y el APN, además del usuario y contraseña del APN si son necesarios.
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 según el método de configuración que utilice.
4. Establezca el puerto en 8888 y elija UDP o TCP en el dispositivo si debe seleccionarse un modo de transporte.
5. Aplique o guarde los cambios de configuración y reinicie el equipo si el firmware requiere reboot para aplicar los ajustes.
6. Valide que el dispositivo reporta a Plaspy revisando el estado del equipo en Plaspy y confirmando que las posiciones periódicas y los eventos son visibles.

## Ejemplos de comandos de configuración

El VT310N soporta configuración mediante SMS. Los comandos de ejemplo del fabricante abajo usan la contraseña por defecto 000000. Reemplace los marcadores según se indica y envíe cada comando como SMS desde un número autorizado. Los comandos se presentan en el orden recomendado.

- Reinicio opcional a ajustes de fábrica (usar solo si es necesario como parte de la configuración inicial)
```text
W000000,990,099###
```

- Establecer el ID del dispositivo usando los primeros 14 dígitos del IMEI
```text
W000000,010,<14-digit-device-id>
```
Reemplace \<14-digit-device-id> con los primeros 14 dígitos del IMEI del dispositivo. Plaspy utiliza el IMEI completo de 15 dígitos como identificador en la plataforma, por lo que confirme el registro del IMEI en Plaspy después de configurar el ID de 14 dígitos si su flujo de aprovisionamiento lo requiere.

- Configurar el APN del operador (básico y con credenciales opcionales)
```text
W000000,011,[apn]
```
o si el APN requiere usuario y contraseña:
```text
W000000,011,[apn],[apnu],[apnp]
```
Explicación de los marcadores:
- [apn] es el nombre del punto de acceso de la red móvil para la SIM.
- [apnu] es el usuario del APN si es requerido.
- [apnp] es la contraseña del APN si es requerida.

- Establecer el servidor GPRS a Plaspy por IP y puerto
```text
W000000,012,54.85.159.138,8888
```
Este comando apunta el VT310N a la IP y puerto del servidor Plaspy. En algunas herramientas del proveedor puede usarse d.plaspy.com, pero el comando SMS del dispositivo establece el servidor por IP.

- Cambiar el dispositivo al modo de reporte por GPRS
```text
W000000,013,2
```

- Establecer el intervalo de actualización de ubicación (valor de ejemplo usado por el proveedor)
```text
W000000,014,6
```
Consulte la documentación del fabricante para saber a qué corresponde numéricamente el intervalo en segundos o minutos según su firmware.

- Consultar IMEI para verificación
```text
W000000,601
```
Este comando de verificación devuelve el IMEI para que pueda confirmar la identidad del dispositivo antes o después de la configuración.

Notas importantes sobre los comandos SMS:
- La contraseña por defecto en el ejemplo del fabricante es 000000. Si la contraseña del dispositivo fue cambiada, utilice la contraseña actual en lugar de 000000.
- Preserve exactamente los marcadores al preparar los comandos y sustitúyalos por los valores de su operador o por el ID derivado del IMEI.

## Notas de configuración

- Las diferencias de firmware y revisiones de hardware pueden modificar el formato de los comandos y el significado de los parámetros; confirme siempre la sintaxis de los comandos con la documentación del fabricante para el firmware de su equipo.
- El VT310N permite la selección de transporte entre UDP y TCP en algunos flujos de configuración; elija el transporte requerido por su aprovisionamiento y tenga en cuenta que Plaspy detectará automáticamente el protocolo entrante cuando el dispositivo se conecte.
- La configuración mediante SMS es común para instalaciones en campo; si usa una herramienta de PC del proveedor o un método de configuración por USB, debe emplear los mismos valores de servidor y puerto (d.plaspy.com o 54.85.159.138 y puerto 8888).
- Al usar el comando de servidor por IP, el ejemplo emplea la IP del servidor Plaspy. Algunos instaladores prefieren usar d.plaspy.com si la herramienta de configuración resuelve DNS.
- Confirme el APN y las credenciales con el operador móvil antes de intentar activar GPRS para evitar demoras en la conectividad.

## Por qué usar Plaspy con esta configuración

Configurar el VT310N para que reporte a Plaspy brinda a los operadores de flota visibilidad consolidada de la ubicación del vehículo, la telemetría y las alertas de eventos en una sola plataforma. Usar el endpoint compartido de Plaspy simplifica el despliegue porque todos los dispositivos Plaspy usan el puerto 8888 y la plataforma detecta automáticamente el protocolo del rastreador, reduciendo la complejidad de configuración por equipo.

Para obtener más información sobre Plaspy y cómo gestionar rastreadores a escala visite https://www.plaspy.com. Para los pasos de configuración más recientes específicos del dispositivo, notas de firmware e información de accesorios verifique la documentación actual del fabricante en https://www.gztopshine.com/ ya que los métodos de instalación y el comportamiento del firmware pueden cambiar con el tiempo.
