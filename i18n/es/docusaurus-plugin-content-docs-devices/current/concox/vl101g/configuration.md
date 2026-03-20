---
slug: /concox/vl101g/configuration
id: vl101g-configuration
sidebar_label: Configuration
title: Concox - VL101G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Concox VL101G con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Concox VL101G
  - Configuración VL101G
  - Configuración servidor VL101G
  - Configuración rastreador GPS VL101G
  - Rastreador GPS Concox Plaspy
  - Configuración telemática VL101G
  - Configuración rastreador de vehículo
  - Configuración rastreador para gestión de flotas
  - Configuración plataforma GPS
  - Configuración SMS VL101G
---

# Concox - Configuración VL101G

Esta página detalla el contexto público de configuración para usar el rastreador Concox VL101G con Plaspy. Explica los ajustes compartidos del servidor Plaspy que debe aplicar en el dispositivo y ofrece ejemplos prácticos de comandos SMS basados en la secuencia típica de configuración del fabricante cuando están disponibles. Use esta guía como referencia para integrar el VL101G con la plataforma Plaspy.

Plaspy utiliza un único endpoint y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el VL101G pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme los detalles específicos del equipo con la documentación oficial de Concox cuando sea necesario.

## Resumen de la configuración

El proceso de configuración prepara al VL101G para que envíe posiciones GNSS, telemetría y eventos de entradas/salidas a Plaspy de forma fiable a través de redes celulares. Para este modelo, la ruta de configuración más habitual usa SMS o la herramienta del fabricante para establecer el APN, la información del servidor, los temporizadores de mensajes y habilitar el reporte por GPRS.

- Configure el APN del dispositivo para que el VL101G pueda establecer una conexión de datos GPRS.
- Apunte el rastreador al servidor de Plaspy usando el dominio compartido o la IP y el puerto común.
- Ajuste el temporizador de reporte para que el dispositivo suba ubicación y telemetría con el intervalo deseado.
- Habilite el reporte por GPRS y verifique el modo de transporte si el dispositivo requiere seleccionar UDP o TCP.
- Valide la conectividad y el reporte del dispositivo para asegurarse de que el rastreador aparezca en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporta transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un VL101G con alimentación, instalado o alimentado temporalmente para la configuración.
- Una tarjeta Micro SIM activa con plan de datos y capacidad SMS y un APN conocido.
- Acceso al método de configuración del fabricante para esta unidad, como comandos SMS o el software de Concox.
- Conocimiento de los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y del puerto 8888.
- Una cuenta en Plaspy y el flujo de registro de dispositivos listo para aceptar la alimentación del rastreador en la plataforma.
- Herramientas básicas para enviar SMS al dispositivo o acceso a una terminal de configuración según la preferencia del instalador.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el VL101G utiliza su enlace celular para abrir una sesión de datos hacia el endpoint de Plaspy y luego entrega posiciones GNSS y telemetría en los intervalos configurados. Plaspy procesa el tráfico entrante en el endpoint y puerto compartidos, reconociendo automáticamente el protocolo del dispositivo, por lo que no se requiere seleccionar un protocolo por dispositivo en el servidor.

- El VL101G reporta posiciones GNSS y telemetría con sello de tiempo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La telemetría y los estados de eventos E/S, como encendido de vehículo o entradas digitales, se reenvían a Plaspy para alertas e historial.
- El intervalo de reporte se controla en el dispositivo, de modo que Plaspy recibe actualizaciones con la frecuencia configurada.
- El dispositivo puede utilizar UDP o TCP para enviar sus mensajes según la preferencia del instalador o las opciones de firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede apuntar al endpoint compartido sin registro de protocolo personalizado.

## Flujo de configuración común

1. Acceda al método de configuración oficial de Concox para el VL101G, como comandos SMS o el software del fabricante.
2. Configure el APN del equipo usando el valor requerido por su proveedor de SIM.
3. Introduzca d.plaspy.com o la IP del servidor 54.85.159.138 como servidor GPRS y establezca el puerto 8888.
4. Elija UDP o TCP si el firmware del VL101G requiere selección de transporte para el reporte GPRS.
5. Aplique o guarde la configuración y habilite el reporte por GPRS en el dispositivo.
6. Reinicie el equipo si el firmware lo exige o tras aplicar cambios en el servidor.
7. Verifique que el rastreador está reportando a Plaspy y que posiciones y eventos son visibles en la plataforma.

## Ejemplo de comandos de configuración

Los siguientes comandos SMS son un ejemplo público de secuencia para configurar el VL101G. Preserve los marcadores de posición al enviar comandos y reemplace {{apn}} {{apnu}} y {{apnp}} con los valores de su operador según corresponda. Tenga en cuenta que el comando de reinicio inicial es opcional y debe usarse solo si desea restaurar los valores de fábrica.

1. Reinicio de fábrica opcional
```
FACTORY#
```

2. Ajustar la zona horaria a UTC 0
```
GMT,E,0#
```

3. Establecer el APN del operador
Reemplace {{apn}} con su APN. Si su proveedor requiere usuario y contraseña incluya {{apnu}} y {{apnp}} respectivamente.
```
APN,{{apn}}# 
```
O con marcadores de usuario y contraseña
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

4. Establecer el servidor GPRS usando el dominio de Plaspy en el puerto 8888 (UDP o TCP puede seleccionarse en el equipo si es necesario)
```
SERVER,1,d.plaspy.com,8888,0#
```
O establecer el servidor por IP
```
SERVER,0,54.85.159.138,8888,0#
```

5. Configurar el intervalo de actualización de ubicación cada 60 segundos
```
TIMER,60#
```
O formato alternativo
```
TIMER,60,60#
```

6. Habilitar modo GPRS
```
GPRSON,1#
```

Comando de verificación para comprobar los parámetros actuales
```
GPRSSET#
```

Estos comandos se presentan en el orden comúnmente usado para la puesta a punto inicial. Reemplace los marcadores con los valores de su operador y recuerde que Plaspy acepta la alimentación del dispositivo en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detectará el protocolo automáticamente.

## Notas de configuración

- Las revisiones de firmware de Concox o las variantes regionales de hardware pueden cambiar los comandos SMS disponibles o el formato de los parámetros. Confirme la sintaxis exacta de los comandos con la referencia oficial de Concox.
- El VL101G soporta reporte por UDP y TCP cuando el firmware expone la selección de transporte. Elija el transporte que se adapte a su red y requisitos de firewall. Plaspy soporta ambos y detecta el protocolo automáticamente.
- La configuración por SMS se utiliza ampliamente en instalaciones de campo, pero las herramientas del fabricante o la configuración por USB también pueden estar disponibles según el lote del dispositivo y el firmware.
- Tenga listas las credenciales de APN y los detalles de provisión de la SIM antes de enviar los comandos de configuración del servidor para evitar demoras en la conectividad.
- Después de aplicar la configuración, valide la aparición del dispositivo y la telemetría en Plaspy para asegurarse de que los temporizadores y los reportes de eventos funcionan como se espera.

## Por qué usar Plaspy con esta configuración

Usar el VL101G con Plaspy ofrece un camino directo para incorporar datos de posición GNSS de alta precisión, telemetría vehicular y reportes de eventos de entrada en una única plataforma de gestión de flotas. Con el endpoint de servidor compartido de Plaspy y la detección automática de protocolos, los instaladores pueden estandarizar las alimentaciones de dispositivos y simplificar la incorporación en flotas usando el mismo puerto y ajustes de servidor.

Aprenda más sobre Plaspy y cómo maneja la integración de dispositivos en https://www.plaspy.com. Para las instrucciones específicas de dispositivo más recientes, notas de firmware y sintaxis de comandos, confirme los detalles con la documentación oficial de Concox en https://www.iconcox.com/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que siempre verifique la documentación vigente antes de finalizar una instalación.
