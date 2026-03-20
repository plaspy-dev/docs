---
slug: /queclink/gl100/configuration
id: gl100-configuration
sidebar_label: Configuration
title: QuecLink - GL100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GL100 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración QuecLink GL100
  - instalación QuecLink GL100
  - QuecLink GL100 Plaspy
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - configuración servidor QuecLink
  - configuración SMS rastreador
  - configuración rastreador GPRS
  - QuecLink GL100 APN
  - integración plataforma de rastreo
---

# QuecLink - GL100 Configuración

Esta página documenta el contexto público de configuración para usar el QuecLink GL100 con Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de configuración por SMS que comúnmente se usan para apuntar dispositivos GL100 al backend de Plaspy. Úsela como referencia práctica al preparar el dispositivo y enviar comandos de configuración; confirme siempre los detalles específicos del equipo en la documentación oficial de QuecLink.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El GL100 puede configurarse mediante comandos SMS o con la herramienta del fabricante según su instalación y firmware. Los pasos del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor, así que verifique con QuecLink si algo se comporta de manera distinta.

## Resumen de la configuración

A continuación encontrará un resumen conciso de los objetivos de configuración al preparar un GL100 para Plaspy. Los comandos SMS suministrados en esta guía establecen APN, endpoints de servidor, intervalos de reporte y entradas básicas para que el rastreador informe al backend de Plaspy.

- Apuntar el GL100 al endpoint de servidor de Plaspy para que los mensajes del dispositivo lleguen a la plataforma.
- Configurar el APN y parámetros GPRS del operador para que el dispositivo pueda establecer conexión de datos.
- Definir el intervalo de reporte y las entradas (por ejemplo SOS) para que los eventos lleguen a Plaspy de forma fiable.
- Validar la conectividad y la visibilidad en Plaspy después de aplicar los ajustes.
- Usar los comandos SMS proporcionados como ejemplos; confirme la sintaxis según el firmware de su dispositivo.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el GL100. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Un GL100 con batería cargada y encendido, con acceso para enviar/recibir SMS o la herramienta de configuración del fabricante.
- SIM activa con datos y servicio SMS y la información APN correcta del operador.
- El IMEI del dispositivo y la contraseña del equipo (los comandos de ejemplo usan la contraseña por defecto queclink).
- Acceso a las instrucciones o al software oficial de QuecLink para su versión de firmware.
- Conocimientos básicos para enviar comandos SMS si usa configuración por SMS, o acceso a la herramienta del proveedor para configuraciones masivas.
- Una cuenta en Plaspy o acceso a la plataforma para confirmar que el dispositivo aparece e informa después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El GL100 se configura para reportar su posición y eventos al endpoint y puerto compartidos de Plaspy. Una vez que el servidor y el APN estén configurados, el dispositivo usará GPRS para conectarse y enviar reportes periódicos y alertas a Plaspy para su visualización en la plataforma.

- El dispositivo usa el APN configurado para establecer conectividad GPRS con la red móvil.
- El rastreador apunta a d.plaspy.com (o a la IP proporcionada) en el puerto 8888 para que los mensajes se enruten hacia Plaspy.
- Los mensajes pueden enviarse por UDP o TCP según la configuración; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Actualizaciones periódicas de ubicación y notificaciones de eventos (por ejemplo SOS o cambios en entradas) se entregan al backend de Plaspy.
- Tras una conexión exitosa, el estado del dispositivo y los datos de posición quedan visibles en Plaspy para monitoreo e informes.

## Flujo común de configuración

1. Acceda al método de configuración oficial de QuecLink para su GL100 (comandos SMS, herramienta del proveedor o software de configuración) y confirme la contraseña del equipo y la versión del firmware.
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija la opción de transporte UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure los valores del APN del operador y cualquier autenticación que requiera la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o la respuesta SMS lo requieren.
7. Valide que el GL100 informe a Plaspy comprobando la conectividad del dispositivo y las actualizaciones de posición recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GL100 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos están tomados de ejemplos públicos de tipo QuecLink. La contraseña por defecto del dispositivo usada en estos ejemplos es queclink. Preserve los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por los valores del APN de su operador.

Nota: El primer comando es una restauración de fábrica y debe usarse solo cuando sea necesario como paso inicial.

- Restaurar ajustes de fábrica (paso inicial opcional)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Establecer la zona horaria UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador (reemplace los marcadores por los valores de su operador)
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explicación de los marcadores:
- [apn] = APN de su operador móvil
- [apnu] = nombre de usuario del APN si es requerido (dejar en blanco si no aplica)
- [apnp] = contraseña del APN si es requerida (dejar en blanco si no aplica)

- Establecer el servidor GPRS a Plaspy (incluye dominio e IP; el dispositivo usará el puerto 8888)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Establecer el intervalo de actualización/reporte a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Activar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe cada comando como un mensaje SMS desde un número autorizado o utilice la herramienta de configuración del proveedor según la guía de QuecLink. Si su dispositivo requiere un prefijo de comando o contraseña diferente, adáptelo en consecuencia.

## Notas de configuración

- La configuración por SMS es comúnmente compatible con el GL100, pero la sintaxis exacta de los comandos y las respuestas pueden variar según la versión de firmware y la revisión de hardware.
- Puede especificar el servidor de Plaspy por nombre de host d.plaspy.com o por IP 54.85.159.138; incluya el puerto 8888 en los ajustes del servidor. Plaspy usa el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente.
- Elija UDP o TCP según su preferencia de instalación; Plaspy acepta ambos transportes y gestiona la detección del protocolo automáticamente.
- Mantenga la contraseña del dispositivo segura y confirme la contraseña por defecto antes de enviar comandos; algunos despliegues requieren cambiar la contraseña por defecto después de la configuración.
- Cuando use marcadores como [apn], [apnu] y [apnp], asegúrese de reemplazarlos con los valores exactos del operador o deje usuario/contraseña vacíos si el operador no los requiere.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GL100 con Plaspy ofrece una forma directa de obtener datos confiables de posición y eventos en una plataforma de monitoreo centralizada. Al apuntar el rastreador al endpoint compartido de Plaspy y usar intervalos de reporte consistentes, las organizaciones obtienen visibilidad en tiempo real, manejo centralizado de eventos y gestión homogénea de dispositivos a lo largo de flotas de equipos similares.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific configuration details, firmware behavior, and command syntax on the manufacturer site https://www.queclink.com/ to ensure accuracy with your GL100 firmware and installation.
