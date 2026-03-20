---
slug: /tzone/tz_avl301/configuration
id: tz_avl301-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL301 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el TZone TZ-AVL301 para usar con Plaspy con ajustes públicos de servidor y ejemplos de comandos SMS
keywords:
  - Configuración TZone TZ-AVL301
  - Configuración TZ-AVL301 Plaspy
  - Configuración rastreador GPS TZone
  - Configuración servidor TZ-AVL301
  - Comandos SMS TZ-AVL301
  - Configuración rastreador TZone
  - Configuración software rastreo TZ-AVL301
  - Integración rastreador GPS Plaspy
  - Configuración GPRS TZ-AVL301
  - Rastreo vehicular TZ-AVL301
---

# TZone - TZ-AVL301 Configuración

Esta página reúne el contexto público de configuración para usar el rastreador TZone TZ-AVL301 con Plaspy. Aquí encontrará los ajustes de servidor y ejemplos de comandos SMS que se usan habitualmente para apuntar el dispositivo a Plaspy y permitir que el rastreador envíe ubicación y estado a la plataforma. Cuando los comandos del fabricante están disponibles públicamente, se incluyen en el orden original como referencia.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El TZ-AVL301 admite configuración por SMS y reporte por GPRS según los comandos públicos mostrados aquí; siempre confirme el método definitivo para sus unidades consultando el firmware y la documentación del fabricante.

## Resumen de la configuración

El proceso de configuración prepara el TZ-AVL301 para comunicarse con Plaspy y garantiza que el equipo sea visible y reporte correctamente en la plataforma. Para este modelo, la configuración suele incluir establecer el APN del operador, configurar el endpoint y puerto del servidor GPRS, activar el reporte por GPRS y seleccionar el intervalo de actualización deseado.

- Configure el APN del operador de la SIM y, si aplica, nombre de usuario y contraseña para que el rastreador pueda abrir una conexión de datos.
- Configure el dispositivo para que reporte a Plaspy ingresando los detalles del servidor compartido de Plaspy.
- Active el modo GPRS y defina un intervalo de actualización apropiado para controlar la frecuencia de reporte.
- Valide la conectividad confirmando que el dispositivo se registre en Plaspy y aparezca en su cuenta.
- Use comandos SMS o la herramienta del fabricante según el firmware del equipo y la preferencia del instalador.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los detalles públicos del endpoint que Plaspy utiliza para los dispositivos. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo que el rastreador use al conectarse.

## Requisitos previos típicos antes de la configuración

- Un TZ-AVL301 alimentado con batería cargada o alimentación por cable.
- Una tarjeta SIM activa con datos (GPRS) y capacidad de SMS insertada en el rastreador.
- El APN del operador móvil y, opcionalmente, usuario y contraseña del APN.
- Acceso al número de teléfono del dispositivo para enviar comandos SMS de configuración.
- Acceso a las instrucciones oficiales de TZone o a la herramienta de instalador para referencia.
- Una cuenta Plaspy para verificar que el dispositivo aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TZ-AVL301 se configura para enviar actualizaciones de ubicación y estado al endpoint y puerto compartidos de Plaspy para que la plataforma muestre la telemetría y los eventos. La detección automática de protocolo de Plaspy maneja muchos protocolos de rastreadores, permitiendo que el equipo use UDP o TCP en el puerto asignado.

- El dispositivo abre una conexión de datos GPRS usando el APN configurado.
- Envía paquetes de posición y estado al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El rastreador puede usar UDP o TCP según su configuración y firmware.
- Plaspy detecta el protocolo entrante y parsea los datos para que la unidad aparezca en su cuenta.
- Una vez que el reporte está activo, la plataforma ofrece visibilidad de ubicación y reporte de eventos para monitoreo operativo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TZone para su unidad TZ-AVL301 (comandos SMS, herramienta del distribuidor o software de instalador) tal como lo provea el fabricante.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888.
4. Elija el método de transporte (UDP o TCP) si el dispositivo requiere seleccionar uno.
5. Configure el APN del operador y las credenciales APN necesarias para la conectividad de datos.
6. Aplique o guarde la configuración y active el reporte por GPRS o el modo de datos en el equipo.
7. Reinicie o haga un ciclo de alimentación del rastreador si el dispositivo requiere un reinicio para que los cambios surtan efecto.
8. Valide que el dispositivo reporte a Plaspy revisando su cuenta Plaspy y verificando actualizaciones de posición recientes.

Si utiliza la configuración por SMS, siga la sintaxis de comandos proporcionada por el fabricante; a continuación se muestra un conjunto de ejemplo.

## Comandos de configuración de ejemplo

Para configurar el rastreador por SMS, envíe los siguientes comandos al número del dispositivo en el orden indicado. Estos comandos se toman de ejemplos públicos de configuración de TZone.

1. Establecer el APN del operador. El comando incluye marcadores opcionales para usuario y contraseña del APN:
```text
*000000,011,[apn]{{,[apnu],[apnp]}}#
```
- Explicación: Reemplace [apn] por el APN de su operador. Si su APN requiere usuario y contraseña, incluya [apnu] y [apnp] respectivamente. En algunas variantes de firmware la sintaxis usa campos separados por comas después del APN.

2. Establecer el intervalo de actualización a 60 segundos:
```text
*000000,018,60,999#
```
- Explicación: Esto fija el intervalo de reporte y parámetros relacionados. Confirme el significado de cada campo con el manual del dispositivo si necesita un intervalo distinto.

3. Establecer el servidor GPRS con la IP y el puerto de Plaspy:
```text
*000000,015,0,54.85.159.138,8888#
```
- Explicación: Este comando explícito usa la IP y el puerto de Plaspy. Si su firmware acepta un nombre de dominio en lugar de IP, puede configurar d.plaspy.com en lugar de la IP según el manual del dispositivo.

4. Activar el modo de reporte por GPRS:
```text
*000000,016,1#
```
- Explicación: Habilita el modo GPRS para que el dispositivo use el APN y los ajustes de servidor configurados para enviar datos.

Notas sobre los comandos anteriores:
- El prefijo "000000" en estos ejemplos se utiliza como token o contraseña administrativa en el formato de comando SMS mostrado. Use la contraseña o token correcto para su equipo si difiere de este ejemplo.
- Preserve marcadores como [apn], [apnu] y [apnp] al preparar el texto SMS y reemplace con los datos reales de su proveedor.
- Los comandos deben enviarse en el orden requerido por la guía del instalador; el orden mostrado aquí coincide con la secuencia de ejemplo pública.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS y los parámetros disponibles; confirme siempre los formatos de comando con el manual del dispositivo.
- Algunas versiones de firmware aceptan un nombre de dominio (d.plaspy.com) mientras que otras pueden requerir la IP numérica; utilice el método que su equipo soporte.
- La configuración por SMS es conveniente para unidades remotas, pero asegúrese de que la entrega de SMS y la conectividad de la SIM estén funcionando antes de depender del reporte por GPRS.
- Elegir UDP o TCP afecta cómo el dispositivo abre sesiones hacia Plaspy; seleccione el transporte soportado y recomendado para su firmware y entorno de red.
- Después de aplicar los ajustes, permita tiempo para que la conexión GPRS se establezca y verifique el reporte en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TZ-AVL301 con Plaspy ofrece a las organizaciones una forma directa de obtener visibilidad y supervisión operativa al dirigir la telemetría del dispositivo a un endpoint compartido. Con los ajustes públicos de servidor y los ejemplos de SMS anteriores, los instaladores pueden preparar los equipos para que reporten a Plaspy y así los gestores de flota puedan monitorear posición, estado y eventos desde una plataforma central.

Learn more about Plaspy and view platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information and command syntax with the manufacturer at http://www.tzonedigital.com/.
