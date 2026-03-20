---
slug: /lk_gps/lk930/configuration
id: lk930-configuration
sidebar_label: Configuration
title: LK-GPS - LK930 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK-GPS LK930 con ajustes del servidor Plaspy y flujo práctico para rastreo de vehículos
keywords:
  - Configuración LK-GPS LK930
  - Configuración LK930 Plaspy
  - Configuración de servidor LK-GPS
  - Configuración rastreador GPS
  - Configuración rastreo de vehículos
  - Configuración de rastreador Plaspy
  - Configuración GPRS rastreador GPS
  - Configuración seguimiento en tiempo real
  - Rastreo de flotas LK930
  - Guía de configuración LK-GPS
---

# LK-GPS - Configuración del LK930

Esta página describe el contexto público de configuración para usar el rastreador LK-GPS LK930 con Plaspy. Resume los ajustes prácticos del servidor y el flujo de trabajo necesario para dirigir el tráfico del LK930 hacia Plaspy, y explica qué verificar antes de intentar añadir el dispositivo a su cuenta Plaspy. La descripción del LK930 incluye conectividad GSM y GPRS, localización asistida por AGPS y WiFi, funcionamiento con batería en modo de bajo consumo por largos periodos y alertas comunes que lo hacen adecuado para monitoreo de vehículos y activos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice la guía a continuación para preparar el dispositivo y aplicar los ajustes públicos del endpoint de Plaspy; siempre confirme cualquier menú o comando específico del dispositivo con la documentación del fabricante.

## Resumen de configuración

El objetivo al configurar un LK930 para Plaspy es apuntar el equipo al endpoint compartido de Plaspy y verificar que reporte de forma confiable para que la unidad sea visible y manejable en la plataforma. Este proceso se centra en la preparación de la red, la aplicación del endpoint y transporte del servidor, y la validación de la conectividad desde el dispositivo hasta Plaspy.

- Configure el LK930 para que reporte al endpoint del servidor Plaspy y así los datos de ubicación y eventos lleguen a la plataforma.
- Asegúrese de que el dispositivo tenga conectividad celular, una SIM funcional y el APN correcto si su operador lo requiere.
- Seleccione el transporte (UDP o TCP) si el dispositivo necesita una selección explícita y establezca el puerto compartido de Plaspy.
- Guarde y aplique los cambios en el rastreador usando la herramienta de configuración del fabricante o el método por SMS.
- Valide que el dispositivo aparezca en Plaspy y que las actualizaciones periódicas de posición y alertas lleguen según lo esperado.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el LK930:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP según las opciones de configuración del rastreador
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto se usa para todos los dispositivos compatibles

Estos valores corresponden al endpoint y puerto compartidos que Plaspy provee para rastreadores compatibles, incluido el LK930.

## Requisitos típicos antes de la configuración

- Un LK930 con batería cargada o conectado a alimentación para que el dispositivo pueda registrarse en la red celular.
- Una tarjeta SIM activa con datos habilitados y la información APN requerida por su operador móvil.
- Acceso al método oficial de configuración de LK-GPS, como la app del proveedor, herramienta web o el conjunto de comandos SMS.
- Una cuenta de Plaspy y acceso a la plataforma para confirmar la visibilidad del dispositivo después de la configuración.
- Información básica del dispositivo, como el IMEI y el intervalo de reporte esperado, para facilitar la verificación.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el LK930 enviará sus mensajes de ubicación y eventos al endpoint del servidor Plaspy para que la plataforma pueda mostrar posiciones, alertas e historial de eventos. El comportamiento habitual es el reporte directo del dispositivo al servidor y puerto configurados.

- El LK930 se apunta a d.plaspy.com o 54.85.159.138 y utiliza el puerto 8888 para el transporte de datos.
- El rastreador utiliza UDP o TCP para enviar paquetes según el transporte seleccionado en la configuración del dispositivo.
- Plaspy recibe los datos y detecta automáticamente el protocolo del rastreador, por lo que no necesita definir un protocolo por dispositivo en Plaspy.
- Una vez que el dispositivo reporta, Plaspy mostrará las actualizaciones de ubicación y las alertas compatibles que el dispositivo transmita.
- La validación en Plaspy confirma que el equipo es accesible y está reportando en el puerto compartido de Plaspy.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración de LK-GPS proporcionado por el fabricante (por ejemplo la app del proveedor, el portal web o la interfaz de comandos SMS).
2. En las opciones de servidor o IP del dispositivo, ingrese d.plaspy.com o 54.85.159.138 como endpoint del servidor.
3. Establezca el puerto en 8888 para que coincida con el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere que elija un protocolo de transporte.
5. Aplique o guarde los cambios de configuración usando la herramienta del dispositivo o envíe los comandos SMS configurados según indique el fabricante.
6. Reinicie el LK930 si el firmware del dispositivo requiere un reinicio para que los ajustes surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de actualizaciones de posición y mensajes de eventos en su cuenta Plaspy.

## Ejemplo de comandos de configuración

No se proporciona aquí un conjunto público de comandos específico del fabricante. Los comandos exactos y el método para aplicarlos pueden variar entre versiones de firmware y herramientas del proveedor. Si usa configuración vía SMS o una utilidad del proveedor, siga las instrucciones oficiales de LK-GPS y sustituya el dominio o la IP del servidor y el puerto indicados arriba.

Si encuentra un conjunto oficial de comandos de LK-GPS que use texto plano o comandos por SMS, los elementos clave a incluir en cualquier comando son el endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) y el puerto 8888, además del tipo de transporte si es necesario. Mantenga los valores de marcador de posición como el APN intactos al aplicar esos comandos.

## Notas de configuración

- Las variaciones de firmware y herramientas pueden cambiar los nombres de menús y formatos de comando; consulte la documentación de LK-GPS para la sintaxis exacta.
- Si su operador requiere un APN, configure el APN del dispositivo antes de intentar reportar al servidor Plaspy para que los datos GPRS estén disponibles.
- Elegir UDP puede consumir menos recursos y es común para reportes de rastreadores, mientras que TCP proporciona un transporte orientado a conexión; seleccione el transporte que se ajuste al comportamiento de su dispositivo y a la confiabilidad de la red.
- Debido a que Plaspy utiliza un solo puerto para todos los dispositivos compatibles y detecta los protocolos automáticamente, el foco principal de la configuración es ingresar correctamente el servidor y el puerto en el rastreador.
- Las versiones de mercado del LK930 pueden incluir accesorios opcionales como WiFi o imanes; verifique las características y pasos de configuración para su modelo exacto de hardware.

## Por qué usar Plaspy con esta configuración

Usar el LK930 con Plaspy permite a organizaciones y particulares centralizar los reportes de ubicación, alertas e historial en una única plataforma. Configurar el dispositivo para apuntar al endpoint y puerto compartidos de Plaspy ofrece una integración sencilla que favorece la visibilidad del movimiento de flotas o activos y notificaciones oportunas cuando el rastreador envía eventos compatibles.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los manuales del dispositivo LK930, notas de firmware y comandos exactos de configuración consulte el sitio del fabricante en https://www.lk-gps.com para verificar los detalles e instrucciones de configuración más actuales.
