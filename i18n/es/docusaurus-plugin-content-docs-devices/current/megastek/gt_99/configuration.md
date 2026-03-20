---
slug: /megastek/gt_99/configuration
id: gt_99-configuration
sidebar_label: Configuration
title: Megastek - GT-99 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Megastek GT-99 para reportar a Plaspy con ajustes de servidor públicos y ejemplos de comandos SMS
keywords:
- Configuración Megastek GT-99
- Configurar Megastek GT-99
- Megastek GT-99 Plaspy
- Configuración servidor GT-99
- Comandos SMS GT-99
- Configuración GPRS GT-99
- Configurar rastreador GPS GT-99
- Configuración rastreador Megastek
- Rastreo vehicular GT-99
- Integración GT-99 con plataforma
---

# Megastek - GT-99 Configuración

Esta página describe el contexto público de configuración para usar el Megastek GT-99 con Plaspy. Reúne los valores de servidor prácticos y ejemplos de comandos SMS publicados para este modelo, de modo que usted pueda preparar el dispositivo para que reporte a Plaspy. El contenido está dirigido a usuarios técnicos e integradores que necesiten aplicar los ajustes compartidos por Plaspy y verificar la conectividad.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se concentra en los valores públicos de configuración y en los comandos SMS de ejemplo que se usan comúnmente con el GT-99.

## Resumen de la configuración

El GT-99 debe configurarse para alcanzar el endpoint de servidor compartido de Plaspy y enviar actualizaciones periódicas de posición. Los comandos SMS de ejemplo que proporciona el fabricante muestran un flujo típico de configuración vía SMS que define el ID del equipo, el APN, el intervalo de reporte y el servidor GPRS hacia Plaspy.

- Configure el identificador del equipo para que el rastreador reporte con un ID conocido en Plaspy.
- Configure el APN de la operadora y, opcionalmente, el usuario y la contraseña del APN para permitir la conexión GPRS.
- Apunte el rastreador a los ajustes de servidor de Plaspy para que el dispositivo abra una sesión de datos hacia la plataforma.
- Establezca el intervalo de reporte adecuado a sus requisitos de seguimiento y al presupuesto de energía.
- Habilite el modo GPRS para que el dispositivo envíe telemetría a Plaspy en lugar de usar solo SMS.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y la plataforma detectará el protocolo automáticamente.

## Requisitos habituales antes de la configuración

- Un GT-99 cargado e instalado con el número IMEI conocido para la configuración
- Una SIM celular funcional con acceso a datos y el APN correcto para la operadora móvil
- Capacidad para enviar comandos SMS al rastreador o acceso a la herramienta oficial de configuración del fabricante
- Conocimiento de la contraseña del equipo si se ha cambiado respecto al valor predeterminado
- Conceptos básicos sobre si el dispositivo usará TCP o UDP para su conexión de datos
- Acceso a una cuenta de Plaspy para confirmar que el dispositivo aparece tras la configuración

## Cómo se conecta este rastreador a Plaspy

El GT-99 se configura para usar GPRS y establecer una conexión de datos con Plaspy, y luego enviar datos de ubicación y eventos al endpoint compartido de la plataforma. Una vez que el dispositivo apunta a Plaspy y el modo GPRS está habilitado, la plataforma recibirá actualizaciones periódicas según el intervalo configurado.

- El rastreador abre una sesión de datos al endpoint del servidor de Plaspy usando el APN y las credenciales configuradas.
- El dispositivo envía reportes de posición periódicos según el intervalo configurado en el GT-99.
- Eventos como alarmas SOS, alertas de geocerca y avisos de exceso de velocidad se envían a Plaspy cuando el dispositivo los soporta.
- El rastreador reporta al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mapear las conexiones entrantes al equipo correcto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo específico en la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración recomendado por el fabricante para el GT-99, normalmente comandos SMS o la herramienta oficial de Megastek.
2. Prepare el IMEI del dispositivo y confirme o restablezca la contraseña del equipo si va a usar la predeterminada mostrada en los ejemplos del fabricante.
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo.
4. Establezca el puerto en 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos.
5. Elija UDP o TCP en los dispositivos que requieran selección de transporte según su red y preferencia.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador lo solicita.
7. Valide que el GT-99 reporte a Plaspy comprobando la lista de dispositivos o el feed en vivo en su cuenta de Plaspy y confirmando las actualizaciones entrantes.

## Comandos de configuración de ejemplo

El GT-99 puede configurarse enviando comandos SMS al dispositivo. Los comandos de ejemplo del fabricante que siguen usan la contraseña por defecto 000000 tal como aparece en la configuración pública. Reemplace 000000 por su contraseña si la ha cambiado.

- Establecer el ID del equipo usando el IMEI o un identificador de 15 dígitos. El ejemplo del fabricante construye un ID de 15 dígitos a partir del IMEI. Reemplace {{IMEI_LAST15}} por los últimos 15 dígitos del IMEI del dispositivo.

```
M000000,22,{{IMEI_LAST15}}
```

- Configurar el APN del operador. Use [apn] como el nombre del APN. Si su operador requiere usuario o contraseña de APN incluya [apnu] y [apnp] según sea necesario.

```
M000000,23,[apn]
```

o con usuario y contraseña del APN

```
M000000,23,[apn],[apnu],[apnp]
```

- Establecer el intervalo de actualización a 60 segundos

```
M000000,25,60
```

- Configurar el servidor GPRS para apuntar el dispositivo a Plaspy. El ejemplo del fabricante usa la IP y el puerto de Plaspy. También puede usar el dominio d.plaspy.com en lugar de la IP si el dispositivo acepta un hostname.

Usando la IP de los ajustes públicos de Plaspy

```
M000000,24,56 54.85.159.138,8888
```

O usando el dominio

```
M000000,24,56 d.plaspy.com,8888
```

- Habilitar el modo GPRS para que el dispositivo use reporte por datos

```
M000000,21,2
```

Notas sobre los marcadores
- {{IMEI_LAST15}} significa el identificador de 15 dígitos derivado del IMEI del dispositivo tal como se muestra en los ejemplos del fabricante.
- [apn] es la cadena APN de la operadora necesaria para GPRS.
- [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN si su operadora los requiere.
- Reemplace M000000 por M\<su_contraseña> si la contraseña del dispositivo no es la predeterminada 000000.

## Observaciones de configuración

- El firmware del fabricante y los formatos de comandos pueden variar según el lote de producción y el nivel de firmware. Confirme siempre la sintaxis exacta de SMS para su versión de firmware.
- El ejemplo del GT-99 anterior usa comandos vía SMS tal como aparecen en ejemplos públicos. Algunos instaladores prefieren la herramienta oficial de configuración cuando está disponible.
- Plaspy soporta tanto transportes UDP como TCP. Elija el transporte que coincida con la política de su red o con la capacidad del rastreador.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador al conectarse.
- Si el dispositivo no se conecta después de la configuración, verifique las credenciales del APN, la calidad de la señal, el IMEI o ID correctos del equipo y que la contraseña del dispositivo se haya introducido correctamente en los comandos.

## Por qué usar Plaspy con esta configuración

Usar el Megastek GT-99 con Plaspy ofrece una forma sencilla de incorporar la telemetría de los equipos en una plataforma única para visibilidad y monitoreo operativo. Al apuntar el rastreador al endpoint y puerto compartidos de Plaspy y habilitar el reporte por GPRS, las organizaciones pueden recibir actualizaciones de posición, rastrear eventos y supervisar el estado de los dispositivos de manera centralizada.

Para obtener más información sobre Plaspy y las opciones de integración compatibles visite https://www.plaspy.com. Para la sintaxis de comandos específica más reciente, notas de firmware y la documentación oficial de Megastek confirme los detalles actuales en https://www.megastek.com/ ya que los procedimientos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
