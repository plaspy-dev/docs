---
slug: /goome/ev02/configuration
id: ev02-configuration
sidebar_label: Configuration
title: Goome - EV02 Configuration
sidebar_class_name: menu_item_tracker
description: Configuración pública y ajustes de servidor para usar el Goome EV02 con Plaspy
keywords:
  - configuración Goome EV02
  - configuración EV02
  - configuración servidor EV02
  - configuración Plaspy EV02
  - configuración rastreador GPS Plaspy
  - configuración rastreador GPS Goome
  - configuración software seguimiento EV02
  - seguimiento vehicular EV02
  - configuración plataforma GPS EV02
  - integración Goome EV02
---

# Goome - Configuración del EV02

Esta página describe el contexto público de configuración para usar el rastreador Goome EV02 con Plaspy. Explica los valores compartidos de servidor que debe usar para apuntar un EV02 a Plaspy, los comandos SMS comunes del modelo y el flujo general para validar la conectividad hasta que el dispositivo quede visible en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; trate los comandos de esta página como guía práctica y pública y verifique cualquier detalle específico del dispositivo en la documentación del fabricante.

## Resumen de la configuración

El objetivo de configurar el EV02 para Plaspy es dirigir el rastreador al endpoint del servidor de Plaspy, confirmar la configuración de GPRS y SMS, y validar que las actualizaciones de ubicación aparezcan en la plataforma Plaspy. En el EV02 esto se realiza comúnmente mediante comandos SMS proporcionados por Goome o con la herramienta del fabricante cuando esté disponible.

- Configure el EV02 para que apunte al dominio o IP del servidor de Plaspy para que la telemetría se entregue a Plaspy.
- Ajuste el APN del dispositivo para que el tráfico GPRS pueda alcanzar la red y Plaspy.
- Defina el transporte y puerto del dispositivo para que los paquetes se envíen a Plaspy usando el mismo puerto compartido que usan todos los dispositivos Plaspy.
- Establezca el intervalo de reporte o temporizadores para que el dispositivo envíe actualizaciones con la frecuencia deseada.
- Verifique la configuración y el estado del dispositivo usando los comandos de consulta incorporados y confirme la visibilidad en Plaspy.
- Mantenga un registro de las versiones de firmware o de herramientas del proveedor usadas durante la configuración para facilitar la resolución de problemas en el futuro.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de comenzar

- Un dispositivo EV02 alimentado y accesible, listo para configurarse.
- Una tarjeta SIM válida con datos habilitados y capacidad de SMS, ya que la configuración del EV02 puede hacerse por SMS y utiliza conectividad GSM GPRS.
- La información correcta del APN del operador de la SIM (APN y, opcionalmente, nombre de usuario y contraseña).
- Acceso a la lista de comandos SMS del fabricante o a la herramienta oficial de configuración del EV02.
- Un método para recibir o ver las respuestas del dispositivo (SMS o consultas de estado) durante la configuración.
- Conocimiento del intervalo de reporte deseado para su caso de uso de monitoreo.

## Cómo se conecta este rastreador a Plaspy

El EV02 envía datos de ubicación y estado por GPRS al endpoint y puerto del servidor de Plaspy. Una vez configurado para apuntar a Plaspy, el dispositivo entregará la telemetría a Plaspy, donde será visible en la plataforma para monitoreo en tiempo real y reproducción de trazas.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El transporte puede establecerse en UDP o TCP según las opciones del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Se envían actualizaciones periódicas de posición e informes de eventos a Plaspy para que el dispositivo aparezca en la plataforma.
- Plaspy ofrece visibilidad y reproducción de trazas a partir de los informes entrantes.
- Use los comandos de estado y las consultas al servidor del dispositivo para confirmar que el rastreador se está comunicando con Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o a su software, o prepárese para enviar comandos SMS según lo provisto por Goome.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 (Plaspy usa este único puerto para todos los dispositivos).
4. Elija UDP o TCP si el EV02 le solicita seleccionar un protocolo de transporte.
5. Configure el APN del operador y cualquier nombre de usuario o contraseña de APN que requiera la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporte a Plaspy usando los comandos de consulta del EV02 y comprobando la visibilidad del dispositivo en Plaspy.

## Comandos de configuración de ejemplo

El Goome EV02 puede configurarse por SMS. Los siguientes comandos SMS públicos aparecen en la documentación de Goome y muestran un orden típico para la configuración. Conserve los marcadores de posición cuando envíe los comandos.

- Reinicio opcional a valores de fábrica (use solo si necesita devolver el dispositivo a la configuración inicial):
```text
FACTORY#
```

- Configure el APN del operador. Reemplace los marcadores de posición con los valores de su operador:
```text
APN,{{apn}}{{# if apnu or apnp }},{{apnu}},{{apnp}}{{/ if }}#
```
Explicación: {{apn}} es el APN de su operador. {{apnu}} y {{apnp}} son opcionales para el nombre de usuario y la contraseña del APN cuando el operador móvil los requiere.

- Configure el servidor GPRS a Plaspy usando la IP pública y el puerto proporcionados por Plaspy:
```text
GPRSSET,54.85.159.138,8888#
```
Nota: Alternativamente puede especificar el dominio d.plaspy.com en herramientas de fabricante que acepten dominios en lugar de IPs.

- Establezca el intervalo de reporte (el ejemplo establece actualizaciones cada 60 segundos):
```text
TIMER,60#
```

- Para consultar la configuración actual del servidor GPRS en el dispositivo:
```text
GPRSSET#
```

- Para consultar el estado general del dispositivo:
```text
STATUS#
```

Siga las indicaciones del fabricante al enviar comandos SMS; algunos dispositivos requieren un prefijo de contraseña específico o un formato de comando diferente según el firmware.

## Notas sobre la configuración

- Las versiones de firmware y las variaciones regionales de hardware pueden cambiar los comandos disponibles o la sintaxis exacta; siempre verifique con la documentación actual de Goome.
- La configuración por SMS es comúnmente soportada en el EV02; si usa SMS, asegúrese de que la SIM pueda recibir y enviar SMS y que usted pueda ver las respuestas.
- Si su herramienta acepta un dominio en lugar de una IP, puede ingresar d.plaspy.com; de lo contrario la IP pública 54.85.159.138 es un endpoint válido de Plaspy.
- Elija UDP o TCP según las opciones del dispositivo; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que debe usar el puerto 8888 al configurar el EV02.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un Goome EV02 configurado ofrece a las organizaciones una forma directa de centralizar la visibilidad de vehículos, monitorear el movimiento en tiempo real y revisar trazas históricas para análisis operativos. Apuntar el EV02 a Plaspy y validar la configuración de GPRS y APN asegura que el dispositivo reporte de manera fiable a la plataforma para alertas, reproducción y monitoreo.

Para conocer más sobre Plaspy y las configuraciones compatibles visite https://www.plaspy.com. Las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo, así que verifique los detalles actuales de configuración y la sintaxis de comandos del EV02 en el sitio oficial de Goome http://www.goomegpstracker.com.
