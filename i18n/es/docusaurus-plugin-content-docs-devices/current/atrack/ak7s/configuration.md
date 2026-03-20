---
slug: /atrack/ak7s/configuration
id: ak7s-configuration
sidebar_label: Configuration
title: ATrack - AK7S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el ATrack AK7S con Plaspy y verificar conectividad para monitoreo de flotas
keywords:
  - Configuración ATrack AK7S
  - Configuración AK7S Plaspy
  - Configuración servidor ATrack AK7S
  - Configuración rastreador GPS AK7S
  - Configuración dispositivo Plaspy
  - Configuración software seguimiento AK7S
  - Configuración plataforma GPS ATrack AK7S
  - Configuración telemática AK7S
  - Guía rastreador vehicular AK7S
  - Configuración APN GPRS AK7S
---

# ATrack - AK7S Configuración

Esta página explica el contexto público para configurar el rastreador ATrack AK7S con la plataforma Plaspy. Se concentra en los ajustes prácticos del servidor y en comandos de ejemplo que se usan habitualmente para conectar un AK7S a Plaspy, además de cómo validar que el dispositivo esté reportando correctamente.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando está disponible, esta página incluye comandos AT$ de ejemplo extraídos de documentación pública del AK7S y aclara los marcadores de posición como APN y credenciales de APN.

## Visión general de la configuración

Esta configuración prepara el AK7S para enviar datos de ubicación y eventos a Plaspy y hacerse visible en la plataforma. El objetivo es definir reglas de reporte, aplicar un endpoint GPRS que apunte a Plaspy y verificar que el dispositivo esté conectado y enviando información.

- Configure el reporte de eventos y el intervalo de rastreo para que el AK7S transmita telemetría útil a Plaspy.
- Ajuste el formato y el modo de datos del dispositivo para que coincidan con lo que Plaspy espera y los paquetes se analicen correctamente.
- Aplique la configuración del servidor GPRS que apunte a Plaspy para que el rastreador abra una sesión de datos hacia el host de monitoreo.
- Valide la conectividad y el estado mediante consultas de estado del dispositivo para confirmar el registro en Plaspy.
- Verifique que el APN y el plan de datos de la SIM sean correctos para que el rastreador pueda establecer una conexión móvil.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para reporte de dispositivos e ingestión en la plataforma
- IP del servidor 54.85.159.138 como endpoint público para los dispositivos
- Puerto 8888 que Plaspy utiliza para todos los dispositivos compatibles
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar cualquiera de los protocolos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

## Requisitos comunes antes de comenzar

- Una SIM funcional con plan de datos móviles y los ajustes APN correctos para el operador desplegado
- Alimentación para el AK7S y acceso a la interfaz de configuración del dispositivo o a la herramienta oficial de ATrack
- Documentación del fabricante o un canal de configuración que permita enviar los comandos AT$ del AK7S que se muestran más abajo
- Confirmación de la revisión de firmware del dispositivo cuando sea posible, ya que la disponibilidad y el comportamiento de los comandos pueden variar con el firmware
- Acceso a una cuenta de Plaspy o vista de administrador para confirmar que el dispositivo aparece después de la configuración

## Cómo se conecta este rastreador a Plaspy

El AK7S se configura para abrir una sesión de datos GPRS y enviar paquetes binarios o con formato de protocolo al endpoint y puerto del servidor Plaspy. Plaspy usa el endpoint y puerto compartidos para recibir datos y determinar automáticamente el protocolo del rastreador.

- El dispositivo transmite registros de ubicación y eventos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Plaspy inspecciona las conexiones entrantes y los datos para detectar automáticamente el protocolo correcto del rastreador
- Las reglas de eventos configuradas en el AK7S (por ejemplo eventos ACC) se envían a Plaspy para alertas y monitoreo
- Los intervalos regulares de rastreo mantienen la visibilidad de la ubicación actualizada en la plataforma cuando el reporte está activo
- La elección del transporte (UDP o TCP) se configura en el dispositivo, pero Plaspy acepta cualquiera en el mismo puerto

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de ATrack o al software que soporte el envío de comandos AT$ para AK7S.
2. Ingrese la información del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto en 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte en el dispositivo si necesita seleccionar un protocolo.
5. Configure el reporte de eventos y parámetros de rastreo como eventos ACC e intervalo de reporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware requieren un reinicio.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del dispositivo y confirmando su aparición en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos de ejemplo provienen de contenido público de configuración del AK7S. Muestran una secuencia típica y deben adaptarse a los valores de APN de su operador y al método de configuración que utilice. Conserva los marcadores de posición y reemplácelos por sus valores reales del operador.

- Configure reporte de eventos ACC y acciones
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establezca el intervalo de rastreo a 60 segundos
```text
AT$TRAC=1,60,,,,,2
```

- Ponga el dispositivo en modo binario (forma de protocolo)
```text
AT$FORM=1,@P,0,""
```

- Configure el servidor GPRS con marcadores de APN y la IP y puerto de Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Explicación de los marcadores de posición:
- [apn] es el nombre del APN del operador móvil
- [apnu] es el nombre de usuario del APN si lo requiere el operador; dejar vacío si no es necesario
- [apnp] es la contraseña del APN si lo requiere el operador; dejar vacío si no es necesario

- Verificar estado del dispositivo
```text
AT$INFO=?
```

Nota: Reemplace los marcadores con su APN real, usuario APN y contraseña APN antes de guardar.

## Notas de configuración

- Los comandos anteriores son ilustrativos y reflejan un patrón de configuración público común para el AK7S; la disponibilidad de comandos puede variar según el firmware.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta cualquiera en el puerto compartido 8888 y detectará el protocolo automáticamente.
- Mantenga el APN y las credenciales confidenciales y confirme los datos con su operador móvil si no se establecen las sesiones de datos.
- Si utiliza una herramienta de configuración del fabricante, prefiera esa herramienta para aprovisionamiento masivo o remoto cuando sea posible.
- Valide la configuración después del reinicio emitiendo AT$INFO=? o revisando el latido del dispositivo en la plataforma Plaspy.

## Por qué usar Plaspy con esta configuración

Emplear el ATrack AK7S con Plaspy brinda a las organizaciones una forma directa de centralizar la ubicación de vehículos, alertas de eventos y supervisión operativa. Apuntar el AK7S a Plaspy usando los ajustes de servidor compartidos y los comandos de reporte estándar permite que la plataforma reciba e interprete los datos del rastreador de manera confiable.

To learn more about deploying Plaspy for fleet tracking visit https://www.plaspy.com. For the most current device specific setup instructions, firmware notes, and technical documentation for the AK7S please verify details on the manufacturer site https://www.atrack.com.tw/ as setup methods and firmware behavior can change over time.
