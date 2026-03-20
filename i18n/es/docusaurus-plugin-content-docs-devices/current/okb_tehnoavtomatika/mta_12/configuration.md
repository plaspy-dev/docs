---
slug: /okb_tehnoavtomatika/mta_12/configuration
id: mta_12-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - MTA-12 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador OKB Tehnoavtomatika MTA-12 en Plaspy, con ajustes de servidor y pasos prácticos
keywords:
  - configuración OKB Tehnoavtomatika MTA-12
  - configuración MTA-12 para Plaspy
  - configuración de servidor MTA-12
  - configuración rastreador GPS MTA-12
  - configuración GPRS MTA-12
  - configuración software seguimiento OKB Tehnoavtomatika
  - configuración telemetría CAN MTA-12
  - configuración plataforma rastreo vehicular
  - integración rastreador Plaspy
  - guía configuración rastreador GPS
---

# OKB Tehnoavtomatika - Configuración del MTA-12

Esta página describe el contexto público de configuración para usar el rastreador OKB Tehnoavtomatika MTA-12 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y detalla los pasos prácticos para apuntar un equipo MTA-12 al servicio de Plaspy. Use esto como referencia centrada en la plataforma y consulte la documentación del fabricante para comandos e interfaces específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante para el MTA-12 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione su proveedor. El MTA-12 admite reporte por GPRS y notificaciones vía SMS además de telemetría CAN para información del vehículo, por lo que debe elegir el método de configuración que coincida con su instalación y capacidades de firmware.

## Resumen de la configuración

Configurar el MTA-12 para Plaspy prepara el equipo para enviar datos de ubicación y estado a un único endpoint y puerto de Plaspy. El objetivo es asegurar una conectividad GPRS fiable, seleccionar correctamente el endpoint y el transporte, y validar que el dispositivo sea visible y reporte correctamente en Plaspy.

- Apuntar el rastreador al endpoint de Plaspy para enrutar los datos a la plataforma
- Seleccionar el protocolo de transporte compatible con el dispositivo y Plaspy, UDP o TCP en el puerto compartido
- Verificar la conectividad GPRS o la configuración de SMS según cómo envíe datos el dispositivo
- Confirmar los mapeos CAN si necesita telemetría del vehículo como combustible o estado de ignición
- Validar que el rastreador aparezca y reporte en Plaspy después de guardar la configuración

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy cuando configure el dispositivo MTA-12:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y que el MTA-12 puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del firmware del dispositivo y las opciones de la herramienta del proveedor.

## Requisitos típicos antes de la instalación

- Confirmar que el MTA-12 tiene una conexión de alimentación estable y está instalado según las indicaciones del fabricante
- Contar con una SIM operativa con datos habilitados si va a usar GPRS para el reporte por Internet
- Tener acceso a la interfaz oficial de configuración de OKB Tehnoavtomatika o a la herramienta de configuración del proveedor
- Saber si su instalación usará reporte por GPRS o notificaciones por SMS y preparar los ajustes según corresponda
- Tener a mano la versión de firmware y la revisión de hardware del equipo por si el comportamiento difiere
- Preparar los requisitos de mapeo CAN si piensa enviar telemetría del vehículo como combustible o estado de ignición

## Cómo se conecta este rastreador a Plaspy

El MTA-12 puede configurarse para enviar reportes periódicos de posición y estado a Plaspy mediante GPRS. Una vez que el dispositivo apunta al endpoint de Plaspy y se selecciona el transporte, la plataforma detectará el protocolo y comenzará a ingerir los datos para su visualización y monitoreo.

- El rastreador envía ubicación y telemetría al endpoint de Plaspy d.plaspy.com o a 54.85.159.138
- Los datos se envían por el puerto 8888 usando UDP o TCP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del dispositivo cuando llega el primer paquete válido
- La telemetría CAN reportada, como combustible y estado de ignición, puede procesarse si el dispositivo está configurado para enviarla
- La visibilidad en Plaspy confirma la comunicación exitosa y permite el monitoreo operativo

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de OKB Tehnoavtomatika o al software del proveedor para el MTA-12
2. En los ajustes de servidor del dispositivo ingrese el dominio de Plaspy d.plaspy.com o alternativamente la IP 54.85.159.138
3. Establezca el puerto de destino en 8888
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar el transporte
5. Configure cualquier APN o parámetro GPRS necesario para que el equipo acceda a Internet si utiliza reporte por GPRS
6. Aplique o guarde la configuración en la herramienta del dispositivo y, si es necesario, reinicie el rastreador para activar los ajustes
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma mediante monitoreo operativo o un reporte de prueba

## Ejemplos de comandos de configuración

Los comandos exactos y las cadenas de configuración para el MTA-12 dependen de la utilidad del fabricante, el firmware y las herramientas del proveedor. Los dispositivos de OKB Tehnoavtomatika suelen admitir configuración mediante una herramienta de software del proveedor y también pueden permitir el ajuste de parámetros por SMS. Dado que los métodos varían, consulte la documentación oficial de OKB Tehnoavtomatika para la sintaxis y ejemplos de comandos específicos del equipo.

Si su proveedor facilita plantillas de comandos por SMS o un SDK de configuración, siga esas plantillas para establecer el dominio del servidor o la IP y el puerto con los valores de Plaspy indicados arriba. Por ejemplo, muchos rastreadores requieren una secuencia como establecer servidor, establecer puerto, establecer transporte y luego guardar, pero los nombres exactos de los comandos son específicos del proveedor.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración y la sintaxis de los comandos; confirme siempre el nivel de firmware antes de aplicar un procedimiento
- Elija UDP o TCP según la compatibilidad con su firmware y las consideraciones de estabilidad de la red; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente
- Si usa GPRS, asegúrese de que el APN y los ajustes relacionados sean correctos para la SIM en uso; las herramientas del proveedor normalmente exponen estos campos
- Las rutas de configuración por SMS suelen ser compatibles para ajustes iniciales o de respaldo, pero consulte la documentación de OKB Tehnoavtomatika para los formatos exactos de comandos SMS
- Todos los equipos configurados para enviar datos a Plaspy deben usar el puerto compartido 8888 para mantener la consistencia entre dispositivos

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el OKB Tehnoavtomatika MTA-12 ofrece una forma directa de recopilar datos de ubicación y telemetría de vehículos en una plataforma centralizada. Para organizaciones que requieren visibilidad de flota, alertas operativas y telemetría como combustible y estado de ignición desde CAN, dirigir el MTA-12 al servidor de Plaspy permite la supervisión y los informes consolidados.

Para obtener más información sobre Plaspy y cómo organiza los datos de dispositivos y la supervisión de flotas visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y referencias de comandos más recientes, verifique la documentación del fabricante en http://www.okb-ta.ru/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
