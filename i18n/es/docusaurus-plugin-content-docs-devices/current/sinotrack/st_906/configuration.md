---
slug: /sinotrack/st_906/configuration
id: st_906-configuration
sidebar_label: Configuration
title: SinoTrack - ST-906 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SinoTrack ST-906 para apuntarlo a Plaspy mediante comandos SMS y ajustes de servidor
keywords:
  - Configuración SinoTrack ST-906
  - Configuración ST-906 Plaspy
  - Configuración SinoTrack SMS
  - Configuración de servidor ST-906
  - Configuración rastreador GPS ST-906
  - Configuración de rastreador Plaspy
  - Comandos SMS rastreador vehicular
  - Configuración APN ST-906
  - Integración plataforma GPS
  - Configuración rastreo de flotas
---

# SinoTrack - Configuración del ST-906

Esta página recoge el contexto público de configuración para utilizar el SinoTrack ST-906 con Plaspy. Aquí encontrará los pasos prácticos y los parámetros de servidor públicamente disponibles que puede aplicar para que el dispositivo reporte ubicación y telemetría a Plaspy, permitiendo mapeo, alertas y visibilidad de la flota.

Plaspy utiliza valores de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El ST-906 permite la configuración por SMS para APN, servidor y comportamiento de reporte; esta guía explica cómo direccionar esos ajustes a Plaspy usando los comandos públicos y los valores indicados aquí.

## Resumen de la configuración

El objetivo de la configuración es preparar el ST-906 para que se comunique de forma fiable con el endpoint de ingestión de Plaspy y aparezca en la plataforma para seguimiento en tiempo real y reproducción de historial. En el ST-906 esto se logra principalmente enviando los comandos SMS del fabricante que establecen el APN y el servidor.

- Configure el APN del dispositivo para que pueda establecer una sesión de datos GPRS con su operador móvil.
- Apunte el rastreador a Plaspy actualizando la IP o el dominio del servidor y el puerto.
- Asegúrese de habilitar los intervalos de reporte y el modo GPRS para que los mensajes de ubicación se envíen a Plaspy.
- Verifique la identidad del dispositivo con el comando RCONF para que Plaspy reconozca el ID del rastreador.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy tras aplicar los ajustes.

## Ajustes de servidor para Plaspy

- Use el dominio servidor de Plaspy d.plaspy.com cuando se requiera un nombre de dominio.
- También puede usar la IP 54.85.159.138 como endpoint de la plataforma.
- Todos los dispositivos en Plaspy reportan al mismo puerto 8888 para ingestión.
- El ST-906 puede configurarse para usar transporte UDP o TCP en el puerto 8888 según la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda procesar mensajes de dispositivos compatibles sin configuración de protocolo por dispositivo.

## Requisitos típicos antes de empezar

- Una unidad SinoTrack ST-906 alimentada e instalada con acceso al instalador o al cableado del dispositivo.
- Una tarjeta SIM con plan de datos activo y los datos APN correctos de su operador móvil.
- Un teléfono con capacidad SMS o una herramienta de gestión para enviar los comandos SMS de configuración al dispositivo.
- Acceso a la documentación oficial de SinoTrack o a la guía del instalador para formatos de comandos específicos y posibles códigos de desbloqueo.
- Una cuenta en Plaspy o acceso a una instancia de Plaspy para verificar que el dispositivo aparece tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con el APN y los datos de servidor correctos, el ST-906 establece una conexión GPRS y envía periódicamente mensajes de posición y estado al endpoint configurado. Para Plaspy, el rastreador se configura para reportar al dominio o IP compartidos de Plaspy y al puerto común para que la plataforma pueda ingerir los mensajes y mostrarlos en el mapa.

- El rastreador queda apuntando al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Los mensajes se envían al puerto 8888, que es el puerto estándar de ingestión usado por los dispositivos soportados en Plaspy.
- El equipo puede usar transporte UDP o TCP en el puerto 8888 según la configuración seleccionada.
- Plaspy detecta automáticamente el protocolo del rastreador para parsear los mensajes y asociarlos con el ID del dispositivo.
- Tras una configuración exitosa, el rastreador aparecerá en Plaspy para seguimiento en vivo, reproducción de historial y monitoreo de eventos.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de SinoTrack, normalmente comandos SMS documentados en el manual del dispositivo.
2. Prepare los valores de APN de su operador y téngalos listos para el comando de APN.
3. Ingrese d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del rastreador según su preferencia.
4. Configure el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
5. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
6. Aplique o guarde la configuración enviando los SMS correspondientes o usando la herramienta del fabricante.
7. Reinicie el dispositivo si lo requiere el procedimiento del fabricante o después de aplicar los ajustes de servidor.
8. Valide que el dispositivo reporte a Plaspy comprobando el ID del dispositivo en Plaspy y confirmando reportes de posición recientes.

## Ejemplos de comandos de configuración

El ST-906 admite configuración por SMS. Los comandos siguientes son las secuencias públicas proporcionadas por el fabricante. Preserve los marcadores de posición cuando reemplace valores. Envíe cada comando como un mensaje de texto estándar al número del dispositivo.

- Restaurar valores de fábrica (opcional en la instalación inicial)
```text
RESET
```

- Ajustar la zona horaria a UTC 0
```text
8960000E00
```

- Configurar el APN del operador
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explicación: mantenga los marcadores {{apn}} para el nombre del APN, {{apnu}} para el usuario del APN si su operador lo requiere, y {{apnp}} para la contraseña del APN si corresponde.

- Configurar el servidor GPRS hacia Plaspy usando la IP y el puerto
```text
8040000 54.85.159.138 8888
```
Opcionalmente puede apuntar el dispositivo al dominio en lugar de a la IP si la interfaz de configuración del equipo lo permite (el ejemplo usa la IP de Plaspy proporcionada).

- Establecer intervalo de actualización cuando el dispositivo está encendido
```text
8050000 60
```

- Establecer intervalo de actualización cuando el dispositivo está apagado
```text
8090000 60
```

- Cambiar el dispositivo a modo de reporte por GPRS
```text
7100000
```

- Consultar la configuración actual y el ID del dispositivo
```text
RCONF
```
Nota: Plaspy utiliza el ID del dispositivo que aparece en la respuesta RCONF para asociar el rastreador con la cuenta o el registro del vehículo en la plataforma.

## Notas de configuración

- La configuración por SMS es el método público mostrado aquí; algunos instaladores pueden usar una herramienta de PC o una caja de configuración si el proveedor la facilita.
- Las versiones de firmware y las revisiones de hardware pueden modificar la sintaxis o el comportamiento de los comandos; confirme siempre los comandos con el manual del dispositivo o las notas del proveedor.
- Elija UDP o TCP según su preferencia de instalación; ambos son compatibles en Plaspy en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888 y Plaspy detecta automáticamente el protocolo, por lo que utilice de forma consistente los valores de servidor de Plaspy.
- Si no está seguro sobre las credenciales del APN, consulte la documentación del operador o pruebe con un smartphone usando la misma SIM.

## Por qué usar Plaspy con esta configuración

Apuntar el SinoTrack ST-906 a Plaspy permite a las organizaciones recibir actualizaciones de posición en vivo, reproducir historial y obtener reportes de eventos en una plataforma centralizada que detecta de forma automática los protocolos de rastreadores compatibles. El flujo de configuración por SMS del ST-906 facilita establecer el APN y los valores de servidor en campo para que los dispositivos comiencen a reportar a Plaspy sin herramientas especializadas.

Para obtener más información sobre Plaspy y las funcionalidades de la plataforma para gestión de flotas y rastreo de vehículos visite https://www.plaspy.com. Para los comandos específicos del dispositivo, notas de firmware y la guía del fabricante, verifique los detalles en el sitio oficial de SinoTrack https://www.sinotrackgps.com/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
