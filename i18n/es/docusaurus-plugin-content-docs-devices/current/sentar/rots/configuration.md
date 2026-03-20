---
slug: /sentar/rots/configuration
id: rots-configuration
sidebar_label: Configuration
title: Sentar - ROTS Configuration
sidebar_class_name: menu_item_tracker
description: Instrucciones públicas para configurar el rastreador GPS Sentar ROTS y que informe a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración Sentar ROTS
  - instalación Sentar ROTS
  - configuración de servidor Sentar ROTS
  - configuración de rastreador Plaspy
  - configuración rastreador GPS ROTS
  - configuración rastreador GPS para mascotas
  - configuración por SMS ROTS
  - ajustes de servidor GPRS
  - configuración APN ROTS
  - integración de dispositivos Plaspy
---

# Sentar - Configuración ROTS

Esta página documenta el contexto público de configuración para utilizar el rastreador GPS para mascotas Sentar ROTS con Plaspy. Describe los parámetros de servidor necesarios, los prerrequisitos habituales y los comandos SMS públicos que comúnmente se usan para aprovisionar el dispositivo y permitir que envíe ubicación y telemetría a Plaspy. Use esta guía como referencia operativa al preparar el ROTS para su integración con la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El ROTS soporta configuración por SMS y ajuste de servidor GPRS como se muestra en el conjunto de comandos públicos a continuación; siga el manual del fabricante y las instrucciones del proveedor para detalles específicos del dispositivo y la sintaxis exacta requerida por su firmware.

## Resumen de la configuración

El objetivo de este proceso de configuración es preparar el rastreador ROTS para que se conecte de forma fiable a Plaspy y aparezca en su cuenta Plaspy para seguimiento en tiempo real e historial. Esto incluye ajustar el APN del operador, apuntar el dispositivo a los endpoints de servidor de Plaspy, seleccionar el tipo de transporte cuando sea necesario y validar que el rastreador esté reportando según lo esperado.

- Configure el APN y los parámetros del operador para que se pueda enviar datos por GPRS.
- Apunte el rastreador al endpoint del servidor Plaspy y al puerto compartido usado por todos los dispositivos Plaspy.
- Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte.
- Valide la conectividad y confirme que el dispositivo reporta actualizaciones a Plaspy.
- Use los comandos SMS proporcionados como método práctico de aprovisionamiento cuando no esté disponible una herramienta del fabricante.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported on port 8888  
- Plaspy automatically detects the tracker protocol and all devices use the same port

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del dispositivo una vez que el rastreador envíe datos al dominio o IP del servidor en el puerto 8888.

## Requisitos típicos antes de la configuración

- Una unidad ROTS con batería cargada y encendida, con una Nano SIM activa y un plan de datos que permita GPRS o datos móviles.
- APN, usuario APN y contraseña APN proporcionados por el operador móvil para la configuración por SMS o GPRS.
- Acceso para enviar SMS desde un número telefónico autorizado por el dispositivo si se utiliza el aprovisionamiento por SMS.
- Conocimiento de la contraseña por defecto del dispositivo que aparece en los comandos públicos (por defecto 123456 según el conjunto de comandos públicos).
- Acceso al manual del fabricante o a la herramienta de configuración del proveedor para la sintaxis específica del firmware y procedimientos de recuperación.
- Una cuenta en Plaspy o información de aprovisionamiento de Plaspy para confirmar la visibilidad del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El rastreador ROTS envía actualizaciones de ubicación y telemetría a Plaspy a través de la red de datos móviles una vez que se configura con el APN del operador y el endpoint del servidor Plaspy. Cuando el rastreador comienza a reportar al endpoint y puerto compartido de Plaspy, Plaspy detectará el protocolo automáticamente y empezará a procesar los datos entrantes.

- El rastreador se apunta a d.plaspy.com o a 54.85.159.138 y utiliza el puerto 8888 para los reportes salientes.
- El transporte puede establecerse en UDP o TCP en el dispositivo cuando se requiere selección de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al puerto 8888.
- Plaspy recibe actualizaciones de ubicación y mensajes del dispositivo para seguimiento en vivo y gestión de eventos.
- La validación del reporte se realiza comprobando que el dispositivo aparezca en Plaspy y que las marcas de tiempo se actualicen como corresponde.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Sentar o al software suministrado por el proveedor, o prepárese para enviar comandos SMS según lo permita el firmware del dispositivo.  
2. Ingrese en la configuración de servidor del dispositivo el dominio d.plaspy.com o la IP del servidor Plaspy 54.85.159.138.  
3. Ajuste el puerto del dispositivo a 8888. Plaspy usa este único puerto para todos los dispositivos compatibles.  
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y guarde la opción.  
5. Configure el APN del operador, el usuario APN y la contraseña APN mediante el método del fabricante o por comandos SMS, incluida cualquier MCC y MNC si son necesarios.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware exige reinicio para que los ajustes surtan efecto.  
7. Valide que el dispositivo reporte a Plaspy verificando la visibilidad del dispositivo y la telemetría reciente en Plaspy después de que el dispositivo se reinicie o comience a reportar.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS se toman del conjunto de comandos públicos del fabricante para el ROTS. Se presentan en el mismo orden que la guía pública. Los comandos se envían por SMS al dispositivo y con frecuencia requieren la contraseña por defecto del dispositivo. La contraseña por defecto en estos ejemplos es 123456. El etiquetado y las comas se preservan de los comandos públicos; si su firmware espera una sintaxis ligeramente diferente, consulte el manual del dispositivo.

- Optional initial factory reset (use only when needed):
```
pw,123456,factory#
```

- Set the time zone to UTC 0:
```
pw,123456,lz,0,0#
```

- Check the IMSI or MCC and MNC:
```
pw,123456,imsi#
```

- Set operator APN where xxx is MCC and yy is MNC. Placeholders:
  - [apn] = operator APN
  - [apnu] = APN username
  - [apnp] = APN password
  - xxxyy = combined MCC and MNC when required
```
pw,123456,[apn],[apnu],[apnp],xxxyy#
```

- Set GPRS server to Plaspy using the Plaspy server IP and shared port 8888:
```
pw,123456.ip,54.85.159.138,8888#
```

- Set update interval to 300 seconds:
```
pw123456,upload,300#
```

- Check current settings or timestamp status:
```
pw,123456,ts#
```

Notas sobre los comandos anteriores:
- La contraseña por defecto mostrada es 123456 en el conjunto de comandos públicos. Reemplace la porción de la contraseña por su contraseña de dispositivo si la ha cambiado.
- Preserve los marcadores de posición como [apn], [apnu] y [apnp] al reemplazarlos por valores reales del operador.
- Algunos comandos en la guía pública usan convenciones de puntuación ligeramente distintas. Si un comando falla, consulte el manual de Sentar para la sintaxis específica del firmware o use la herramienta del proveedor cuando esté disponible.

## Observaciones de configuración

- Las diferencias de firmware y las variaciones regionales pueden cambiar la sintaxis exacta de los comandos SMS y las palabras clave soportadas. Confirme la sintaxis correcta para su versión de firmware.
- El ROTS soporta aprovisionamiento por SMS y configuración de servidor GPRS según se muestra en el conjunto de comandos públicos. Use SMS solo desde números autorizados según la configuración de seguridad de su dispositivo.
- Elegir TCP o UDP puede afectar las características de entrega; pruebe ambos transportes si experimenta reportes intermitentes, pero recuerde que Plaspy escucha en el puerto 8888 y detectará el protocolo automáticamente.
- Verifique los valores APN, MCC y MNC con su operador móvil antes de configurarlos en el dispositivo para asegurar la conectividad de datos móviles.
- Cuando esté disponible, prefiera la herramienta del fabricante o el software de aprovisionamiento del proveedor para despliegues masivos o actualizaciones de firmware en lugar de comandos SMS manuales.

## Por qué usar Plaspy con esta configuración

Usar el rastreador Sentar ROTS con Plaspy centraliza la telemetría de ubicación de mascotas y ofrece visibilidad coherente entre dispositivos gracias al endpoint de servidor compartido de Plaspy y la detección automática de protocolos. Los ajustes públicos en esta guía permiten que el dispositivo ROTS envíe su ubicación a Plaspy en el mismo puerto que usan todos los dispositivos compatibles, lo que simplifica el aprovisionamiento y facilita escalar despliegues.

Learn more about Plaspy and how it handles device connections and tracking at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so please verify the latest setup instructions with Sentar at http://www.sentarsmart.com/.
