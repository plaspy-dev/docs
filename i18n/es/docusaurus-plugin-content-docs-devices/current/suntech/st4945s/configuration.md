---
slug: /suntech/st4945s/configuration
id: st4945s-configuration
sidebar_label: Configuration
title: Suntech - ST4945(S) Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Suntech ST4945(S) y reportar a Plaspy mediante SMS y ajustes de servidor
keywords:
  - configuración Suntech ST4945S
  - instalación Suntech ST4945S
  - configuración ST4945S Plaspy
  - configuración rastreador GPS Suntech
  - configuración de servidor ST4945S
  - configuración plataforma GPS Suntech
  - integración rastreador Plaspy
  - comandos SMS ST4945S
  - configuración seguimiento de activos Suntech
  - seguimiento vehicular ST4945S
---

# Suntech - Configuración ST4945(S)

Esta página cubre el contexto público de configuración para usar el rastreador Suntech ST4945(S) con Plaspy. Explica los ajustes prácticos de servidor y el flujo de configuración que puede aplicarse públicamente para apuntar un dispositivo a Plaspy, e incluye ejemplos de comandos SMS en formato de fabricante mostrados en guías públicas. Utilice esta página como referencia práctica para preparar un dispositivo ST4945 o ST4945S y que se comunique con Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST4945(S) puede configurarse mediante comandos SMS como se muestra en guías públicas del modelo, pero los nombres exactos de los parámetros y su comportamiento pueden diferir según el firmware o la herramienta del proveedor, por lo que confirme detalles específicos del equipo con el fabricante cuando sea necesario.

## Resumen de configuración

El objetivo al configurar un ST4945(S) para Plaspy es preparar el rastreador para que alcance de forma confiable el punto de ingestión de Plaspy, reporte datos de ubicación y eventos, y aparezca en su panel de flota en Plaspy. Los comandos públicos para este modelo suelen establecer el APN de red, el servidor GPRS, los intervalos de reporte y verificar configuraciones preset mediante SMS.

- Configure los parámetros de red del dispositivo y el servidor GPRS para apuntar a Plaspy y que los datos se enruten a la plataforma.
- Ajuste los intervalos de reporte y las reglas de reporte por movimiento o periódicas según sus necesidades de monitoreo.
- Verifique la identidad del dispositivo y la configuración del APN para que los datos móviles o los comandos SMS sean aceptados por el rastreador.
- Confirme que el rastreador alcance el servidor Plaspy y aparezca en la plataforma, luego ajuste la cadencia de reporte o las alertas.
- Use los ejemplos de comandos SMS como plantilla y reemplace los marcadores de posición como el id del dispositivo y los valores de APN.

## Configuración del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos

Estos valores son la información pública del endpoint de Plaspy que debe ingresar en el dispositivo o en los comandos SMS de configuración para que el ST4945(S) reporte al servidor y puerto correctos.

## Requisitos típicos antes de la configuración

- Un dispositivo ST4945 o ST4945S cargado y con acceso a su IMEI y controles básicos.
- Una SIM celular activa con datos provisionados y un APN válido para la red móvil objetivo.
- Capacidad para enviar mensajes SMS al dispositivo para la configuración por SMS o acceso a la herramienta de configuración del fabricante si está disponible.
- Conocimiento del IMEI del dispositivo para derivar el id del equipo usado en los comandos SMS públicos.
- Opcional: un entorno de pruebas o un equipo de repuesto para confirmar ajustes antes de un despliegue masivo.

## Cómo se conecta este rastreador a Plaspy

El ST4945(S) se configura para reportar su ubicación y telemetría a un endpoint compartido de servidor y puerto de Plaspy para que la plataforma pueda ingerir y mostrar los datos. Los reportes y eventos se envían por el transporte elegido al listener de Plaspy, donde el protocolo se detecta automáticamente.

- Los ajustes de red del dispositivo apuntan a d.plaspy.com o a la IP 54.85.159.138 y puerto 8888.
- El dispositivo envía paquetes de posición periódicos y eventos a Plaspy usando UDP o TCP según la configuración.
- Plaspy ingiere las actualizaciones de ubicación y estado y las presenta en paneles, alertas y APIs para monitoreo.
- Los reportes de eventos como SOS, encendido de ignición o batería baja se reenvían a Plaspy para alertas y automatización de flujos de trabajo.
- Plaspy detecta el protocolo del rastreador de forma automática, por lo que no es necesario preseleccionar un protocolo en la plataforma.

## Flujo de configuración común

1. Acceda al método de configuración recomendado por el fabricante para su unidad, típicamente comandos SMS o la herramienta de aprovisionamiento del proveedor.
2. Determine el id del dispositivo a partir del IMEI y tenga listos los datos del APN.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS o dominio del servidor en la configuración del dispositivo.
4. Establezca el puerto en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Aplique o envíe la configuración al dispositivo y guarde los ajustes.
6. Reinicie o haga un ciclo de alimentación al rastreador si el dispositivo requiere reboot para aplicar nuevos parámetros de red.
7. Valide que el dispositivo reporte a Plaspy revisando conexiones entrantes o usando el comando de verificación del dispositivo que se muestra abajo.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del ST4945(S) usan comandos SMS. Primero, determine el id del dispositivo como se muestra en el ejemplo público: tome el IMEI, elimine el último dígito de control del IMEI y luego use los últimos seis dígitos de la cadena restante. Ejemplo: con IMEI 123456789012345, elimine el último dígito para obtener 12345678901234, entonces el id del dispositivo es 901234.

Marcadores de posición usados abajo:
- {{device_id}} = el id de seis dígitos derivado del IMEI como se describió arriba
- [apn] = el APN de su red móvil
- [apnu] = nombre de usuario del APN si su operador lo requiere (dejar vacío si no se usa)
- [apnp] = contraseña del APN si su operador lo requiere (dejar vacío si no se usa)
- Para campos condicionales, establezca el indicador en 1 si se proporciona un usuario o contraseña, de lo contrario ponga 0

1) Configure el APN del operador y el servidor GPRS para apuntar a Plaspy
- Envíe este SMS al dispositivo, reemplazando los marcadores de posición y estableciendo la bandera de usuario en 1 si apnu o apnp están provistos, de lo contrario 0.

```
SA200NTW;{{device_id}};02;<username_flag>;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

2) Establezca el intervalo de reporte a 60 segundos (ejemplo público)
- Este SMS configura la cadencia de reporte periódico.

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Verifique las configuraciones preset actuales
- Use este SMS para solicitar la configuración preset A y revisarla.

```
SA200CMD;{{device_id}};02;PresetA
```

Notas sobre marcadores de posición y banderas
- [apn] es obligatorio para el reporte por datos. Si su APN requiere credenciales, suministre [apnu] y [apnp] y establezca \<username_flag> en 1. Si no se requieren credenciales, establezca \<username_flag> en 0.
- Reemplace {{device_id}} por el id de seis dígitos calculado a partir del IMEI como se describió arriba.
- Estos comandos son ejemplos en formato público; adapte el orden exacto de campos para que coincida con la versión de firmware de su unidad y confirme la sintaxis del comando en la documentación oficial de Suntech si tiene dudas.

## Notas de configuración

- Las variaciones de firmware y las revisiones regionales de hardware pueden cambiar la sintaxis de los comandos o los campos disponibles; siempre confirme los formatos de comando según el nivel de firmware del dispositivo.
- La configuración por SMS está soportada en los ejemplos públicos anteriores y es útil cuando no hay herramientas de software directas disponibles, pero considere herramientas de aprovisionamiento seguras para despliegues a gran escala.
- Cuando el dispositivo requiera elegir entre TCP y UDP, seleccione el transporte más apropiado para su entorno; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente en su lado.
- El paso de derivación del id del dispositivo es importante para dirigir los comandos; asegúrese de usar las cifras correctas o el rastreador ignorará la configuración por SMS.
- La documentación del fabricante puede incluir parámetros opcionales adicionales o ajustes de servidor de mantenimiento no cubiertos en los ejemplos públicos.

## Por qué usar Plaspy con esta configuración

Usar el ST4945(S) con Plaspy le proporciona un proceso conciso y repetible para enviar mensajes de ubicación, telemetría y eventos a un único endpoint de ingestión de Plaspy. Los comandos públicos de configuración mostrados aquí le permiten apuntar dispositivos a Plaspy rápidamente, validar la conectividad y estandarizar los intervalos de reporte para que los activos sean visibles en su plataforma para monitoreo, alertas y flujos operativos.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so also verify the latest setup information and command syntax with the manufacturer at http://www.suntechint.com/ before large scale deployment.
