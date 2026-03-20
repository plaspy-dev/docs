---
slug: /autofon/d_maiak/configuration
id: d_maiak-configuration
sidebar_label: Configuration
title: AutoFon - D-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon D‑Маяк con ajustes del servidor Plaspy y pasos prácticos para seguimiento en tiempo real
keywords:
  - Configuración AutoFon D‑Маяк
  - Configuración AutoFon D Beacon
  - Configuración D‑Маяк para Plaspy
  - Configuración rastreador GPS D‑Маяк
  - Ajustes de servidor rastreador AutoFon
  - Integración de dispositivos con Plaspy
  - Guía de configuración rastreador GPS
  - Configuración beacon encubierto
  - Configuración reporte GPRS y SMS
  - Configuración rastreador recuperación de vehículos
---

# AutoFon - Configuración de D‑Маяк

Esta página documenta el contexto público de configuración para usar el AutoFon D‑Маяк con Plaspy. Resume los ajustes compartidos del servidor Plaspy, el flujo de configuración habitual y los pasos prácticos de validación que puede seguir para dirigir un rastreador D‑Маяк a la plataforma Plaspy y habilitar seguimiento en tiempo real, alertas y telemetría histórica. La información se centra en los ajustes públicos y agnósticos del fabricante necesarios para integrar el equipo con Plaspy, así como en la forma en que el dispositivo suele comunicarse con la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Antes de aplicar cambios, revise la guía del usuario del D‑Маяк y la herramienta de configuración de AutoFon, y considere esta página como un complemento práctico a esas instrucciones oficiales.

## Visión general de la configuración

El objetivo al configurar un D‑Маяк para Plaspy es preparar la unidad para que envíe su telemetría de forma fiable al endpoint de ingestión de Plaspy, de modo que el dispositivo quede visible y sea gestionable desde sus paneles Plaspy. Este proceso se centra en establecer el endpoint correcto, el transporte y el modo de reporte, y en validar que el GPRS y cualquier mecanismo de respaldo por SMS funcionen como se espera.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los mensajes GPRS lleguen a Plaspy.
- Seleccionar el método de transporte que requiera el firmware del equipo, UDP o TCP, en el puerto de Plaspy.
- Configurar intervalos de reporte y condiciones de evento para que la ubicación y las alarmas se envíen según sus necesidades.
- Validar la conectividad y que Plaspy esté recibiendo y decodificando los mensajes del dispositivo.
- Asegurar el comportamiento de respaldo, como la caída a SMS o el buffer tipo “black box”, según los requisitos operativos.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Estos mismos valores de servidor se aplican a todos los dispositivos configurados para Plaspy. Use el dominio o la IP al ingresar los detalles del servidor en la herramienta del fabricante o en comandos SMS si el rastreador exige un endpoint numérico.

## Requisitos previos típicos

- Una unidad D‑Маяк con alimentación y accesible, con firmware que soporte reporte remoto por GPRS.
- SIM activa y válida para datos GPRS y SMS si se requiere respaldo por SMS.
- Acceso al método oficial de configuración de AutoFon, como la herramienta web del proveedor, la utilidad de escritorio o el conjunto de comandos SMS documentado.
- Conocimientos básicos del modo de reporte que desea utilizar (reportes periódicos, activación por movimiento, reporte continuo en movimiento).
- Un plan de pruebas para verificar que el dispositivo llegue a Plaspy y que eventos como SOS o alarmas se reenvíen correctamente.
- Si es posible, una SIM de prueba con datos para validar el reporte GPRS sin afectar recursos de producción.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el D‑Маяк envía sus mensajes GPRS al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar la telemetría. El reporte por SMS puede configurarse como canal de respaldo cuando está soportado. Plaspy maneja la detección del protocolo para que la plataforma pueda parsear los mensajes del rastreador una vez que lleguen al puerto compartido.

- El dispositivo envía paquetes GPRS a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las opciones del firmware.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes entrantes para mapas y líneas de tiempo de eventos.
- Mensajes de evento como SOS, detección de impacto y entradas de alarma se reenvían a Plaspy como alertas.
- El buffer tipo “black box” del D‑Маяк ayuda a garantizar que los paquetes almacenados se suban a Plaspy cuando se restablezca la conectividad.

## Flujo típico de configuración

1. Acceda al método o software oficial de AutoFon recomendado para la versión de firmware y revisión de hardware de su D‑Маяк.
2. En los ajustes de servidor o GPRS, ingrese d.plaspy.com o, alternativamente, 54.85.159.138.
3. Configure el puerto del servidor en 8888 según lo exige Plaspy.
4. Elija el transporte UDP o TCP si el dispositivo requiere seleccionar el protocolo de transporte.
5. Configure los intervalos de reporte, los modos de reporte por movimiento y los disparadores de evento que necesite para la operación.
6. Aplique o guarde la configuración en la herramienta del fabricante o envíe los comandos SMS de configuración si usa ese método.
7. Reinicie el rastreador si el procedimiento lo requiere o si los cambios no se aplican de inmediato.
8. Valide que el dispositivo está reportando a Plaspy verificando que la unidad aparezca en la plataforma Plaspy y que se reciban telemetría y eventos.

## Ejemplos de comandos de configuración

Los comandos exactos y las cadenas de configuración para el D‑Маяк dependen del firmware de AutoFon y del método de configuración elegido. Los dispositivos AutoFon admiten comúnmente configuración vía utilidad de escritorio o web del proveedor y mediante conjuntos de comandos SMS publicados por el fabricante. Debido a que la sintaxis de comandos puede cambiar entre versiones de firmware, consulte la documentación oficial de AutoFon para la lista definitiva de comandos.

Si su instalación utiliza comandos SMS o la herramienta del proveedor, siga la documentación de AutoFon para formatear los parámetros de servidor, puerto y transporte, usando d.plaspy.com o 54.85.159.138 y el puerto 8888 como destino. Por ejemplo, el flujo público suele requerir ingresar el dominio o la IP del servidor, establecer el puerto 8888 y seleccionar UDP o TCP si se solicita. Siempre verifique la sintaxis exacta en los manuales oficiales de AutoFon.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden alterar las opciones de configuración disponibles y la sintaxis exacta de los comandos; consulte la documentación de AutoFon para la revisión de su dispositivo.
- Elija UDP o TCP según las opciones que exponga el firmware del equipo. Plaspy acepta ambos transportes en el mismo puerto y detectará el protocolo automáticamente.
- La configuración por SMS es una alternativa habitual para el aprovisionamiento inicial o ajustes remotos cuando no hay GPRS disponible; use el conjunto de comandos SMS publicado por el fabricante cuando esté disponible.
- El buffer tipo “black box” del D‑Маяк aporta resiliencia durante cortes de red, pero pruebe el comportamiento de recuperación para asegurarse de que los paquetes almacenados se suban a Plaspy como se espera.
- Las mejores prácticas del instalador incluyen probar con una SIM conocida y funcional y en un entorno de pruebas controlado antes de desplegar la unidad en una ubicación encubierta.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon D‑Маяк con Plaspy ofrece a las organizaciones una opción de rastreo compacta y de larga autonomía que reenvía ubicación y telemetría de eventos a una plataforma de monitoreo unificada. Para recuperación encubierta, protección remota de activos o telemetría complementaria de flotas, configurar el rastreador para que reporte a d.plaspy.com en el puerto 8888 garantiza que los mensajes del dispositivo sean recibidos y decodificados por Plaspy para mapas, líneas de tiempo y alertas.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official command syntax consult the manufacturer at https://www.autofon.ru/. Manufacturer configuration methods and firmware behavior can change over time so verify current instructions on the official AutoFon site before applying configuration in production.
