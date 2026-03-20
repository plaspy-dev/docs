---
slug: /suntech/st4932/configuration
id: st4932-configuration
sidebar_label: Configuration
title: Suntech - ST4932 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST4932 con ajustes de servidor Plaspy, comandos SMS y pasos de verificación
keywords:
  - configuración Suntech ST4932
  - instalación Suntech ST4932
  - configuración ST4932 Plaspy
  - configuración tracker Suntech
  - ajustes servidor ST4932
  - configuración rastreador GPS Suntech
  - configuración APN ST4932
  - comandos SMS Suntech ST4932
  - configuración servidor rastreador GPS
  - configuración dispositivo Plaspy
---

# Suntech - Configuración del ST4932

Esta página documenta el contexto público de configuración para usar el rastreador Suntech ST4932 con Plaspy. Reúne los ajustes prácticos del servidor y ejemplos de comandos SMS de acceso público para que pueda preparar el dispositivo y permitir la comunicación con Plaspy para rastreo en tiempo real, reportes de eventos e ingestión de telemetría.

Plaspy utiliza un endpoint de servidor compartido y un puerto consistente entre los dispositivos compatibles, y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; donde esté disponible, esta página incluye los comandos SMS públicos y explica los marcadores de posición como el ID del dispositivo y los valores APN.

## Panorama de la configuración

El ST4932 se configura para enviar datos de ubicación y eventos a Plaspy usando el endpoint del servidor de la plataforma. El propósito de este proceso es garantizar que el rastreador pueda registrarse en Plaspy, autenticarse, establecer una ruta de datos estable y enviar actualizaciones periódicas en el intervalo requerido.

- Configure los ajustes de red del dispositivo para que pueda alcanzar el servidor de Plaspy mediante datos celulares.
- Proporcione el APN correcto y, si es necesario, las credenciales de APN del operador móvil.
- Apunte el dispositivo al dominio o IP del servidor Plaspy y establezca el puerto compartido para permitir el envío de datos.
- Defina el intervalo de reporte y confirme que el dispositivo acepte la configuración.
- Valide la conectividad y la visibilidad del dispositivo en Plaspy tras aplicar la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y el mismo puerto se usa para todos los dispositivos soportados por Plaspy

## Requisitos habituales antes de la configuración

- Una unidad ST4932 encendida con capacidad para enviar y recibir comandos SMS si va a usar la provisión por SMS.
- Una tarjeta SIM con servicio de datos activo y capacidad de SMS, además de los valores APN correctos del operador.
- El IMEI del dispositivo para poder derivar el ID del equipo requerido en los comandos SMS de Suntech.
- Acceso al método de configuración oficial de Suntech o a la herramienta del proveedor y al manual del usuario del dispositivo.
- Una red celular estable con cobertura LTE Cat M1, NB2 o 2G como fallback donde vaya a operar el dispositivo.
- Un método para verificar el reporte del dispositivo en Plaspy una vez aplicada la configuración.

## Cómo se conecta este rastreador a Plaspy

El ST4932 envía posiciones GNSS y telemetría de eventos a través de su conexión celular hacia el endpoint y puerto del servidor Plaspy. Plaspy recibe el flujo de datos entrante, identifica automáticamente el protocolo del rastreador y hace que el dispositivo sea visible en la plataforma para mapas, alertas e historial.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a su IP 54.85.159.138 en el puerto 8888.
- Los datos pueden transportarse por UDP o TCP según la preferencia del dispositivo y el comportamiento de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita especificar el protocolo en la plataforma.
- Las posiciones, eventos de movimiento o manipulación y otra telemetría se envían desde el rastreador a Plaspy para monitoreo operativo.
- Tras un registro exitoso, el estado y la telemetría del dispositivo aparecen en Plaspy para geocercas, alertas e informes.

## Flujo de trabajo típico de configuración

1. Obtenga el IMEI del dispositivo y confirme que esté encendido y accesible por SMS o mediante la herramienta de provisión del fabricante.
2. Acceda al método de configuración oficial de Suntech, como comandos SMS o software del proveedor según la documentación de Suntech.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración de servidor del dispositivo.
4. Establezca el puerto en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Proporcione el APN del operador y las credenciales de APN opcionales según lo requiera la SIM.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el procedimiento del fabricante lo requiere.
7. Verifique que el dispositivo reporte a Plaspy y que aparezca en la plataforma con las actualizaciones esperadas.

## Ejemplos de comandos de configuración

Las instrucciones públicas de configuración del ST4932 incluyen comandos SMS. El ID del dispositivo usado en estos comandos se deriva del IMEI: tome el IMEI, elimine el dígito final y use los últimos 6 dígitos de la cadena restante. Ejemplo: si el IMEI es 123456789012345, el ID del dispositivo es 901234.

Marcadores importantes:
- {{device_id}} — reemplace con el ID de 6 dígitos derivado del IMEI según lo descrito arriba.
- [apn] — nombre del APN del operador.
- [apnu] — usuario del APN si el operador lo requiere.
- [apnp] — contraseña del APN si el operador lo requiere.
- Para la bandera de usuario APN, establezca 1 si se requiere usuario o contraseña, de lo contrario 0.

1. Configure el APN del operador y el servidor GPRS. Reemplace los marcadores al enviar como SMS al dispositivo:
```text
SA200NTW;{{device_id}};02;{{apn_user_flag}};[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- {{apn_user_flag}} debe ser 1 si proporciona un nombre de usuario o contraseña en [apnu] o [apnp]; de lo contrario, establezca 0.

2. Ajuste el intervalo de actualización a 60 segundos:
```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3. Compruebe la configuración actual o solicite el preset A para verificar:
```text
SA200CMD;{{device_id}};02;PresetA
```

Envíe estos comandos como mensajes SMS al rastreador siguiendo el flujo de provisión SMS estándar de Suntech. Mantenga el orden de los comandos al aplicar los ajustes: primero los parámetros de red, luego el intervalo de reporte y, finalmente, la verificación.

## Notas de configuración

- Las versiones de firmware de Suntech y las herramientas del proveedor pueden cambiar la sintaxis de los comandos y los parámetros disponibles; confirme siempre el formato de comandos con la documentación más reciente de Suntech.
- Este rastreador admite provisión por SMS según el ejemplo público proporcionado. Si usa una herramienta de configuración de software del proveedor, normalmente habrá campos equivalentes para APN, servidor, puerto, transporte e intervalo de reporte.
- Puede especificar d.plaspy.com o la IP numérica 54.85.159.138 en el dispositivo; ambos apuntan al endpoint de Plaspy en el puerto 8888.
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del operador; Plaspy aceptará cualquiera de los dos transportes y detectará el protocolo automáticamente.
- Si el dispositivo requiere reinicio tras aplicar los ajustes, realice el reinicio para asegurarse de que los nuevos parámetros estén activos antes de verificar en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el ST4932 con Plaspy permite a las organizaciones recopilar datos fiables de posición y eventos desde un rastreador robusto de grado industrial y visualizar esos datos en una única plataforma para monitoreo, alertas e informes. Los comandos públicos mostrados aquí se enfocan en establecer una ruta de datos entre el rastreador y Plaspy para que el dispositivo pueda entregar actualizaciones periódicas y notificaciones de eventos a su cuenta.

Para obtener más información sobre Plaspy y cómo la plataforma puede gestionar dispositivos como el ST4932 visite https://www.plaspy.com. Los pasos específicos de configuración por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar las instrucciones de configuración más recientes en el sitio oficial de Suntech http://www.suntechint.com/ antes de desplegar.
