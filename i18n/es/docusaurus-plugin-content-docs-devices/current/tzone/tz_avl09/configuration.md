---
slug: /tzone/tz_avl09/configuration
id: tz_avl09-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL09 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el TZone TZ-AVL09 con Plaspy, incluidos ajustes de servidor y comandos SMS
keywords:
  - Configuración TZone TZ-AVL09
  - Configuración TZ-AVL09 Plaspy
  - Configuración rastreador GPS TZone
  - Configuración servidor TZ-AVL09
  - Configuración seguimiento vehículo Plaspy
  - Configuración APN rastreador GPS
  - Configuración GPRS rastreador
  - Comandos SMS TZone
  - Configuración rastreador gestión de flotas
  - Configuración dispositivo Plaspy
---

# TZone - TZ-AVL09: Configuración

Esta página documenta cómo preparar y configurar el rastreador GPS TZone TZ-AVL09 para integrarlo con Plaspy. Aquí encontrará los ajustes de servidor que Plaspy requiere, pasos prácticos de instalación y ejemplos de comandos SMS que habitualmente se usan para dirigir el equipo hacia Plaspy. El objetivo es que personal técnico pueda dejar el dispositivo listo y confirmar la conectividad con la plataforma.

Plaspy utiliza parámetros de servidor compartidos entre dispositivos compatibles y detecta el protocolo del rastreador automáticamente. Las instrucciones exactas del fabricante pueden variar según la versión de firmware, la revisión hardware, el tipo de instalación y las herramientas del proveedor. El TZ-AVL09 permite GPRS por TCP o UDP y también SMS; los ejemplos abajo muestran un flujo típico por SMS para configurar APN, intervalo de reporte y servidor GPRS hacia Plaspy.

## Resumen de la configuración

El proceso de configuración prepara al TZ-AVL09 para enviar su ubicación y eventos a Plaspy y asegura que el dispositivo pueda ser visto y gestionado desde la plataforma. Normalmente incluye definir parámetros de datos móviles, seleccionar el transporte al servidor y activar el reporte por GPRS.

- Definir el APN del operador móvil y, si corresponde, las credenciales APN para que el dispositivo use datos móviles.
- Ajustar el intervalo de reporte para controlar la frecuencia de actualizaciones hacia Plaspy.
- Apuntar el dispositivo al endpoint y puerto de servidor de Plaspy para que los datos lleguen al destino correcto.
- Habilitar el modo GPRS en el rastreador para que envíe telemetría por TCP o UDP a Plaspy.
- Validar la conectividad para que el dispositivo aparezca en Plaspy y comience a enviar ubicaciones.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Todos los dispositivos que reportan a Plaspy usan el mismo puerto y la plataforma detecta el protocolo automáticamente, lo que permite aceptar datos de una amplia variedad de protocolos de rastreadores.

## Requisitos típicos antes de la configuración

- Un TZ-AVL09 con alimentación y accesible, correctamente instalado en el vehículo o en un banco de pruebas.
- Una tarjeta SIM con datos habilitados y el APN correcto según el operador móvil.
- Capacidad para enviar comandos SMS al dispositivo desde el número administrador autorizado, o acceso a la herramienta del fabricante si está disponible.
- Conocimiento básico de la contraseña por defecto para comandos SMS del dispositivo, si se requiere para configurar.
- Una cuenta Plaspy o acceso a la plataforma Plaspy para confirmar que el dispositivo aparece y reporta tras la configuración.
- Documentación del fabricante para la revisión de firmware específica y verificar la sintaxis de comandos SMS y parámetros opcionales.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TZ-AVL09 utiliza GPRS para entregar datos de ubicación y eventos a través del endpoint y puerto compartidos de la plataforma. Plaspy recibe la conexión en el puerto 8888 y determina el protocolo del rastreador de forma automática, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma.

- El rastreador envía datos GPRS al endpoint y puerto configurados de Plaspy.
- La transmisión puede ser por UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Plaspy detecta el protocolo automáticamente para aceptar el formato de datos del rastreador sin configuraciones adicionales en la plataforma.
- Los intervalos de reporte y los eventos de alarma determinan la frecuencia con la que el rastreador envía actualizaciones a Plaspy.
- Una vez configurado el servidor GPRS y el modo, el dispositivo debería aparecer en Plaspy y empezar a enviar mensajes de ubicación y estado.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante para el TZ-AVL09, normalmente comandos SMS o software del proveedor, y confirme la contraseña admin de SMS o las credenciales de la herramienta.
2. Ingrese el endpoint de Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo que acepte el equipo.
3. Establezca el puerto en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el dispositivo si requiere elegir explícitamente el transporte; ambos son aceptados por Plaspy en el puerto 8888.
5. Aplique o guarde la configuración y habilite el modo GPRS en el rastreador para que empiece a reportar.
6. Reinicie o corte la alimentación del dispositivo si el firmware lo exige para aplicar los nuevos ajustes GPRS.
7. Verifique que el dispositivo reporte a Plaspy y sea visible en la plataforma, confirmando que APN, servidor, transporte e intervalo están correctos.

## Ejemplos de comandos de configuración

Para configurar el TZ-AVL09 por SMS, envíe los siguientes comandos en el orden indicado. Estos ejemplos respetan el prefijo admin por defecto del fabricante. Reemplace los marcadores por los valores de su operador.

1. Configurar el APN del operador
   - Reemplace {{apn}} por el APN de su operador móvil
   - Opcionalmente {{apnu}} es el usuario APN y {{apnp}} la contraseña APN si su operador lo requiere

```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

Nota: Si no se requiere usuario ni contraseña APN omita la porción ,{{apnu}},{{apnp}} para que el comando quede así:

```text
*000000,011,{{apn}}#
```

2. Establecer el intervalo de actualización a 60 segundos
```text
*000000,018,60,999#
```

3. Configurar el servidor GPRS con la IP y puerto de Plaspy
```text
*000000,015,0,54.85.159.138,8888#
```

Si el rastreador acepta un nombre DNS en lugar de la IP, puede configurar d.plaspy.com en la interfaz del dispositivo o en la herramienta del fabricante.

4. Activar el modo GPRS
```text
*000000,016,1#
```

Envíe estos comandos desde un número autorizado para controlar el rastreador y espere los SMS de confirmación cuando el dispositivo responda. Mantenga el orden indicado: primero APN y servidor, y luego active el reporte GPRS.

## Notas de configuración

- Este modelo admite configuración por SMS, por lo que puede realizar la puesta en marcha inicial enviando comandos desde un número autorizado.
- Revisiones de firmware y variantes regionales pueden cambiar la sintaxis de los SMS o los prefijos de comando. Verifique el formato exacto de comandos para su versión de firmware antes de enviar comandos.
- Cuando sea posible, prefiera usar el dominio d.plaspy.com si el dispositivo soporta nombres DNS. De lo contrario, la IP 54.85.159.138 es una alternativa válida.
- Plaspy acepta TCP y UDP en el puerto 8888 y detecta automáticamente el protocolo del rastreador.
- Siempre confirme las credenciales APN con su operador móvil y pruebe la conectividad de datos antes de habilitar reportes continuos.

## Por qué usar Plaspy con esta configuración

Integrar el TZ-AVL09 con Plaspy ofrece una forma sencilla de centralizar la ubicación de vehículos, alarmas y estado en una única plataforma de gestión de flotas. Gracias a los ajustes de servidor compartidos y la detección automática del protocolo, las organizaciones pueden estandarizar la provisión de dispositivos y reducir la configuración individual en la plataforma.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Verifique la guía de configuración específica del dispositivo y el comportamiento del firmware con el fabricante en http://www.tzonedigital.com/ ya que los métodos de instalación y las funciones de firmware pueden cambiar con el tiempo.
