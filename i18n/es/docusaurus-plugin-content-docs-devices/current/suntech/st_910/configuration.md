---
slug: /suntech/st_910/configuration
id: st_910-configuration
sidebar_label: Configuration
title: Suntech - ST 910 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Suntech ST 910 y reportar a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Suntech ST 910
  - Configuración ST 910 para Plaspy
  - Configuración servidor ST 910
  - Configuración rastreador GPS ST 910
  - Configuración SMS Suntech
  - Configuración de dispositivo Plaspy
  - Configuración plataforma rastreo GPS
  - Configuración GPRS ST 910
  - Guía configuración rastreador de activos
  - Configuración seguimiento de vehículos
---

# Suntech - Configuración ST 910

Esta página explica el contexto público de configuración para usar el rastreador Suntech ST 910 con Plaspy. Se enfoca en los pasos prácticos y públicamente disponibles para preparar el equipo y que reporte a Plaspy utilizando la configuración de servidor compartido de la plataforma y los comandos publicados por el fabricante. Donde se muestran comandos del fabricante, se presentan como comandos SMS públicos para mayor claridad.

Plaspy usa ajustes de servidor compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Las acciones del lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El ST 910 soporta configuración por SMS y por GPRS; los ejemplos de comandos SMS a continuación muestran cómo establecer el APN, el servidor y el intervalo de reporte para usar con Plaspy.

## Resumen de la configuración

Este proceso hace que el ST 910 se comunique con el servidor de Plaspy para que las ubicaciones y eventos sean visibles en la plataforma. Los comandos mostrados son comandos públicos en estilo SMS publicados para este modelo e ilustran los campos típicos que deberá ajustar: id del dispositivo, APN del operador, endpoint del servidor de Plaspy, puerto de transporte e intervalo de reporte.

- Calcule el id del dispositivo a partir del IMEI y úselo en los comandos SMS.
- Configure la SIM/APN para que el rastreador use GPRS y alcance Plaspy.
- Apunte el rastreador al endpoint y puerto compartidos de Plaspy para enrutar los datos a la plataforma.
- Establezca un intervalo de reporte acorde con sus necesidades de monitoreo.
- Valide la configuración con el comando de verificación del dispositivo o comprobando que el equipo aparece en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP (configure UDP o TCP en el dispositivo si el rastreador requiere selección de transporte)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor y puerto compartidos
- Todos los dispositivos en Plaspy usan el mismo puerto para ingestión de datos

## Requisitos típicos antes de la configuración

- Un ST 910 con batería cargada o alimentación conectada y una SIM activa con datos GPRS habilitados y permiso para recibir SMS para configuración remota.
- Acceso al IMEI del dispositivo para poder derivar el id que se usará en los comandos SMS.
- Capacidad para enviar mensajes SMS al número de la SIM del equipo para configuración vía SMS, o acceso a la herramienta de configuración del fabricante si prefiere ese método.
- El APN correcto y, si aplica, usuario y contraseña del APN provistos por el operador móvil.
- Familiaridad básica con el envío de comandos SMS e interpretación de las respuestas del dispositivo.
- Acceso a la documentación de Suntech para notas específicas de firmware y comportamiento del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El ST 910 se configura para reportar al endpoint y puerto compartidos de Plaspy. En la práctica esto significa que el dispositivo usa GPRS para abrir una conexión TCP o UDP a Plaspy y transmitir información de posición y eventos para que el equipo sea visible en la plataforma. El SMS también puede usarse para alertas y para iniciar la configuración.

- El rastreador se apunta a d.plaspy.com o a la IP 54.85.159.138.
- El puerto 8888 se utiliza en el lado del dispositivo para todas las integraciones con Plaspy.
- Puede seleccionar UDP o TCP en el rastreador cuando el firmware lo requiera.
- Plaspy detectará automáticamente el protocolo del rastreador cuando éste se conecte al endpoint y puerto compartidos.
- Una vez conectado, el dispositivo reportará según el intervalo y las reglas de eventos configuradas.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Suntech para el ST 910, normalmente vía SMS o usando la herramienta/instrucciones del proveedor.
2. Derive el id del dispositivo a partir del IMEI (vea el ejemplo abajo) y prepárelo para usarlo en los comandos SMS.
3. Ingrese la dirección del servidor de Plaspy especificando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor.
4. Configure el puerto en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
5. Seleccione UDP o TCP en el dispositivo si el firmware exige una opción de transporte.
6. Aplique o guarde la configuración y, si es necesario, reinicie el rastreador.
7. Valide que el dispositivo envía datos a Plaspy usando el comando de verificación o confirmando que el equipo aparece en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los comandos públicos del ST 910 pueden enviarse como mensajes SMS al equipo. El id del dispositivo se obtiene del IMEI como los 9 dígitos excluyendo el dígito de control final del IMEI (los 9 dígitos que comienzan en la posición 6 y terminan en la posición 14 contando desde 1). Ejemplo según la documentación del proveedor: si el IMEI es 123456789012345 el id del dispositivo es 678901234.

1. Comando opcional de reinicio a configuración de fábrica (usar sólo si necesita restablecer la configuración):
```
ST300CMD;{{device_id}};02;Reset
```
Etiqueta: Reinicio inicial opcional para borrar configuraciones previas.

2. Establecer APN del operador y servidor GPRS de Plaspy
- El cuarto parámetro después del id del dispositivo es una bandera de APN: use 1 si provee usuario o contraseña de APN, de lo contrario use 0.
- Reemplace los marcadores {{apn}}, {{apnu}}, {{apnp}} con el APN del operador, usuario APN y contraseña APN según corresponda.
```
ST300NTW;{{device_id}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
Si no tiene usuario ni contraseña de APN, ajuste la bandera de APN a 0:
```
ST300NTW;{{device_id}};02;0;{{apn}};;;54.85.159.138;8888;;;;
```

3. Establecer intervalo de reporte a 60 segundos (ejemplo)
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4. Comando de verificación para comprobar la configuración actual predeterminada
```
ST300CMD;{{device_id}};02;PresetA
```

Notas sobre los marcadores:
- {{device_id}} — el id de 9 dígitos derivado del IMEI (dígitos 6 a 14 del IMEI completo).
- {{apn}} — cadena APN del operador.
- {{apnu}} — marcador para el usuario APN.
- {{apnp}} — marcador para la contraseña APN.

Envíe cada línea anterior como un SMS al número de la SIM del dispositivo. Mantenga el orden al realizar la configuración inicial: reinicio (opcional), configuración de red/servidor, intervalo de reporte y luego verificación.

## Consideraciones de configuración

- La configuración por SMS es compatible con el ST 910 y es un método práctico para instalaciones remotas cuando el acceso local es limitado.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o el comportamiento de los parámetros; siempre verifique el soporte de comandos según el firmware específico del dispositivo.
- Al usar el comando ST300NTW, ponga la bandera de APN en 1 solo si incluye los campos de usuario o contraseña del APN, de lo contrario utilice 0.
- Elija TCP o UDP según la preferencia del instalador y el comportamiento de la red; Plaspy acepta ambos transportes y detecta el protocolo automáticamente.
- El equipo incluye un puerto mini USB para opciones de conectividad adicionales, pero los comandos mostrados son los publicados por el fabricante y están basados en SMS.

## Por qué usar Plaspy con esta configuración

Configurar el Suntech ST 910 para reportar a Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación de activos y la actividad de eventos usando un endpoint y puerto compartidos y consistentes. El soporte del ST 910 para GPRS y configuración por SMS lo hace flexible para instalaciones en campo, mientras que la detección automática de protocolos de Plaspy reduce la necesidad de gestionar configuraciones a nivel de protocolo tras la conexión.

Para saber más sobre Plaspy y cómo aparecen sus dispositivos en la plataforma, visite https://www.plaspy.com. Los comandos específicos de dispositivo, el comportamiento del firmware y los métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles más recientes en el sitio oficial de Suntech http://www.suntechint.com/ antes de desplegar a gran escala.
