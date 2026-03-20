---
slug: /yulongda/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: YulongDa - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el YulongDa TK103 con Plaspy, incluye servidor, puerto y ejemplos de comandos SMS
keywords:
  - configuración YulongDa TK103
  - instalación YulongDa TK103
  - integración TK103 Plaspy
  - configuración servidor TK103
  - configuración rastreador GPS Plaspy
  - rastreo vehicular TK103
  - configuración SMS TK103
  - ajustes rastreador Plaspy
  - configuración plataforma GPS
  - configuración informes rastreador
---

# YulongDa - Configuración del TK103

Esta página describe el contexto público de configuración para usar el rastreador GPS YulongDa TK103 con Plaspy. Reúne los ajustes esenciales y comandos de ejemplo disponibles públicamente que puede usar para apuntar un TK103 a Plaspy y permitir que el dispositivo informe su ubicación y eventos básicos. Cuando los comandos del fabricante están documentados públicamente, se incluyen como ejemplos prácticos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión del firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar la configuración común del endpoint de Plaspy y comprender el flujo típico para configurar un TK103 en la plataforma Plaspy.

## Resumen de la configuración

Esta configuración prepara el TK103 para comunicarse con Plaspy estableciendo el APN de la red, el punto de conexión del servidor de Plaspy y intervalos de reporte adecuados para que el dispositivo aparezca y envíe datos de forma fiable en la plataforma.

- Configure el APN del equipo para activar datos móviles o para permitir configuración por SMS según lo requiera el rastreador.
- Apunte el rastreador al servidor de Plaspy usando dominio o IP y establezca el puerto de la plataforma.
- Seleccione el modo de transporte si el equipo exige elegir entre UDP y TCP.
- Defina intervalos de reporte para movimiento e inmovilizado para que el rastreador envíe actualizaciones con la frecuencia deseada.
- Valide la conectividad para que el dispositivo pueda ser detectado y visualizado dentro de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario mapear el protocolo manualmente

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto. Use 8888 al configurar el TK103 para la plataforma.

## Requisitos habituales antes de la configuración

- Un TK103 encendido y accesible con batería suficiente o con alimentación del vehículo conectada
- Una tarjeta SIM válida con datos o capacidad de SMS y el APN correcto para el operador móvil
- Conocimiento de la contraseña SMS del dispositivo o acceso a la herramienta de configuración del fabricante
- Acceso a los comandos SMS documentados públicamente o al software del proveedor
- Capacidad para recibir respuestas del dispositivo y confirmar el reporte en Plaspy

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TK103 envía datos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar mensajes de posición y eventos. Plaspy detectará automáticamente el protocolo del rastreador y procesará los mensajes entrantes.

- El rastreador se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- Según el firmware, el rastreador usará transporte UDP o TCP en el puerto 8888 según la configuración
- Las actualizaciones de posición y los eventos del dispositivo se reenvían a Plaspy y se muestran en la plataforma
- Plaspy detecta automáticamente el protocolo usado por el TK103, por lo que no es necesaria una selección de protocolo por separado dentro de Plaspy
- Es imprescindible un APN correcto y conectividad celular para que el rastreador establezca una conexión GPRS con el servidor de Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial del YulongDa TK103, como los comandos SMS del fabricante o el software del proveedor.
2. Verifique que el APN del dispositivo esté configurado para la SIM instalada, de modo que GPRS o comandos SMS funcionen correctamente.
3. Ingrese el endpoint de Plaspy usando d.plaspy.com o 54.85.159.138.
4. Configure el puerto 8888 como puerto del servidor del dispositivo y elija UDP o TCP si el equipo solicita la selección de transporte.
5. Aplique o guarde la configuración en el rastreador según el procedimiento del fabricante.
6. Reinicie el dispositivo si el firmware lo exige para activar la nueva configuración.
7. Valide que el TK103 reporte correctamente a Plaspy y que aparezca en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS de ejemplo se toman de guías públicas de configuración del TK103. Estos comandos asumen que la contraseña SMS del dispositivo es 000000, que es la contraseña inicial de fábrica común en muchas unidades TK103. Reemplace los marcadores de posición por el APN de su operador y, si es necesario, por el usuario y la contraseña del APN.

- Establecer el APN del operador
  - Forma solo APN
  ```
  *APN#000000#{{apn}}#
  ```
  - Forma APN con usuario y contraseña
  ```
  *APN#000000#{{apn}}#{{apnu}}#{{apnp}}#
  ```
  Explicación de los marcadores
  - {{apn}} es el APN del operador móvil requerido para datos GPRS
  - {{apnu}} es el usuario del APN opcional si su operador lo requiere
  - {{apnp}} es la contraseña del APN opcional si su operador lo requiere

- Establecer el servidor GPRS a Plaspy por IP y puerto
```
*IP#000000#54.85.159.138#8888#
```
  Puede usar el dominio d.plaspy.com en lugar de la IP si el equipo soporta nombres de dominio.

- Establecer intervalo de reporte en movimiento a 60 segundos
```
XT60
```

- Establecer intervalo de reporte en detenido a 60 segundos
```
NXT60
```

Envíe estos comandos SMS desde un número autorizado al TK103 según las instrucciones del fabricante. Se recomienda el orden anterior: configure primero el APN, luego los ajustes del servidor y, finalmente, los intervalos de reporte. Si su dispositivo utiliza una contraseña diferente a 000000, reemplácela en cada comando.

## Notas de configuración

- Algunas versiones de firmware del TK103 pueden usar una sintaxis SMS ligeramente distinta o exigir una contraseña inicial diferente. Verifique el formato de comandos para el firmware de su equipo.
- La configuración puede realizarse por SMS o mediante herramientas de configuración del fabricante cuando estén disponibles. Use el método recomendado por el proveedor.
- Elija UDP o TCP según la preferencia del instalador y la compatibilidad. Plaspy acepta ambos transportes en el puerto 8888.
- Use d.plaspy.com o 54.85.159.138 con el puerto 8888. Todos los dispositivos de Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador.
- Tras aplicar los ajustes, confirme que el dispositivo está reportando revisando la plataforma Plaspy por mensajes de posición entrantes.

## Por qué usar Plaspy con esta configuración

Usar el YulongDa TK103 con Plaspy ofrece una forma directa de centralizar la visibilidad de vehículos y el reporte de eventos. Al apuntar el rastreador al endpoint compartido de Plaspy y fijar intervalos de reporte adecuados, las organizaciones pueden monitorear movimientos de vehículos, recibir alertas y mantener supervisión operativa en una flota heterogénea.

Para más información sobre Plaspy visite https://www.plaspy.com. Verifique siempre los métodos de configuración y el comportamiento del firmware en el sitio del fabricante en http://www.yulongdatechnology.com, ya que las especificaciones y los pasos de instalación pueden cambiar con el tiempo.
