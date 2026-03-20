---
slug: /jointech/gp_5000/configuration
id: gp_5000-configuration
sidebar_label: Configuration
title: Jointech - GP 5000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Jointech GP 5000 para Plaspy, incluyendo ajustes de servidor, comandos SMS y pasos prácticos de instalación
keywords:
  - configuración Jointech GP 5000
  - configuración GP 5000
  - configuración rastreador GPS Jointech
  - configuración GP 5000 Plaspy
  - configuración servidor rastreador GPS
  - configuración seguimiento de vehículos
  - configuración rastreo de flotas
  - configuración SMS GP 5000
  - configuración GPRS TCP UDP rastreador
  - manual Jointech GP 5000
---

# Jointech - Configuración GP 5000

Esta página explica el contexto público de configuración para usar el rastreador Jointech GP 5000 con Plaspy. Se centra en los ajustes de servidor prácticos y en los pasos habituales del fabricante necesarios para apuntar el equipo a Plaspy, de modo que el rastreador pueda reportar ubicación y datos operativos para visibilidad y monitoreo de la flota.

El GP 5000 admite comunicación por SMS y GPRS TCP/UDP; esta guía detalla cómo aplicar los ajustes compartidos del servidor de Plaspy. Plaspy utiliza el mismo puerto en los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor.

## Resumen de la configuración

El objetivo al configurar un GP 5000 para Plaspy es preparar el rastreador para comunicarse de forma confiable con el endpoint de datos de Plaspy, de modo que el dispositivo sea visible en la plataforma y reporte ubicación y eventos en tiempo real. La configuración normalmente implica establecer el APN y el endpoint del servidor, elegir el transporte y validar la conexión.

- Apunte el GP 5000 al endpoint del servidor de Plaspy para que los datos se dirijan a la plataforma
- Configure el APN y, si corresponde, las credenciales del APN para conectividad de datos GPRS
- Seleccione UDP o TCP como transporte en el equipo cuando la configuración del dispositivo lo requiera
- Aplique los cambios y verifique que el rastreador sea visible y esté reportando en Plaspy
- Use comandos SMS o la herramienta de configuración del fabricante según las indicaciones de Jointech

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con plan de datos y capacidad de SMS instalada en el GP 5000 según sea necesario
- El dispositivo con alimentación y accesible para la configuración (alimentación del vehículo o banco de pruebas)
- El ID del dispositivo (trackerID) disponible para configuración por SMS o requerido por la herramienta del fabricante
- Nombre del APN del operador móvil, y usuario y contraseña del APN si el operador los exige
- Acceso a un teléfono con capacidad de enviar SMS o al software de configuración de Jointech para enviar comandos
- Documentación del fabricante para conocer la sintaxis exacta de los SMS o la guía de la utilidad de configuración

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GP 5000 usará su enlace GPRS para enviar paquetes de datos al endpoint y puerto compartido del servidor de Plaspy, de modo que Plaspy pueda ingerir datos de ubicación y eventos para monitoreo e informes.

- El rastreador envía datos a d.plaspy.com o a la IP del servidor 54.85.159.138
- Todos los datos se dirigen al puerto 8888, que Plaspy utiliza para los dispositivos soportados
- El dispositivo puede usar UDP o TCP en el puerto 8888 según el transporte seleccionado
- Plaspy detecta automáticamente el protocolo, por lo que la plataforma interpreta los mensajes entrantes del dispositivo
- Una vez registrado en Plaspy, el dispositivo queda visible para seguimiento en vivo y alertas de eventos

## Flujo de configuración común

1. Acceda al método de configuración oficial de Jointech o al software correspondiente, o prepárese para enviar comandos SMS según la documentación del equipo
2. Ingrese el endpoint del servidor de Plaspy usando d.plaspy.com o 54.85.159.138
3. Configure el puerto del servidor en 8888 (tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos)
4. Seleccione UDP o TCP como transporte en el equipo si la selección es requerida
5. Configure el APN y las credenciales del APN si el operador móvil las exige
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren reboot
7. Verifique que el GP 5000 reporte a Plaspy y aparezca en los registros de conexión o reportes de la plataforma

## Ejemplo de comandos de configuración

Para configurar el rastreador, envíe los siguientes comandos por SMS. Inicie cada SMS con el ID del dispositivo (trackerID) según la sintaxis SMS de Jointech. Reemplace los marcadores por sus valores reales.

- Escriba el ID del dispositivo donde se indica {{trackerID}}.

1) Establecer servidor GPRS y APN
```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,[apn])
```

2) Establecer usuario y contraseña del APN (envíe solo si su APN requiere usuario o contraseña)
```
({{trackerID}},2,S24,129,1,[apnu],[apnp])
```

Notas sobre los marcadores:
- {{trackerID}} — el ID del dispositivo o prefijo IMEI requerido por el formato de comando SMS del GP 5000
- [apn] — el nombre del APN de su operador móvil
- [apnu] — usuario del APN si el operador lo requiere; deje vacío si no aplica
- [apnp] — contraseña del APN si el operador la requiere; deje vacío si no aplica

Envíe estos comandos SMS desde un número autorizado al número de la SIM del dispositivo. Confirme el éxito revisando la respuesta por SMS del dispositivo (si está disponible) o validando que el equipo aparezca en Plaspy después de aplicar la configuración.

## Notas de configuración

- La sintaxis de SMS de Jointech puede variar según la versión de firmware y las variantes regionales; siempre confirme el formato exacto en el manual oficial
- Si su operador móvil requiere credenciales de APN, incluya el segundo comando; de lo contrario, generalmente basta con el comando que solo establece el APN
- Elegir UDP frente a TCP puede afectar cómo se empaquetan y reintentan los paquetes de datos; seleccione el transporte que mejor se adapte a su instalación
- Dado que Plaspy usa el mismo puerto para todos los dispositivos soportados, asegúrese de configurar exactamente el puerto 8888
- Si utiliza el software de configuración de Jointech en lugar de SMS, ingrese el mismo servidor, IP, puerto y ajustes de APN en la herramienta correspondiente

## Por qué usar Plaspy con esta configuración

Configurar el Jointech GP 5000 para reportar a Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad en tiempo real, monitoreo de eventos y supervisión de flota sin necesidad de endpoints específicos por dispositivo. Usar el endpoint compartido de Plaspy y la detección automática de protocolos reduce la complejidad de la puesta en marcha y facilita la incorporación rápida de equipos.

Para obtener más información sobre Plaspy y ver las funciones soportadas, visite https://www.plaspy.com. Para procedimientos específicos más recientes, notas de firmware y sintaxis de comandos, consulte los recursos del fabricante en https://www.jointcontrols.com/ ya que el comportamiento y los métodos de configuración de los dispositivos pueden cambiar con el tiempo.
