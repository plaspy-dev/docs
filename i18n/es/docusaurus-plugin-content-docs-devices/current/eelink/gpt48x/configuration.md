---
slug: /eelink/gpt48x/configuration
id: gpt48x-configuration
sidebar_label: Configuration
title: EElink - GPT48‑X Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink GPT48‑X con ajustes de servidor Plaspy y comandos SMS para integración
keywords:
  - Configuración EElink GPT48‑X
  - Configuración GPT48‑X
  - Rastreador EElink Plaspy
  - Configuración servidor GPT48‑X
  - Guía configuración rastreador GPS
  - Configuración dispositivo Plaspy
  - Configuración protocolo EELINK
  - Integración rastreador de activos
  - Configuración plataforma GPS
  - Configuración SMS del rastreador
---

# EElink - GPT48‑X Configuración

Esta página recopila la información pública de configuración para usar el rastreador EElink GPT48‑X con la plataforma Plaspy. Aquí encontrará los ajustes de servidor prácticos, ejemplos de comandos SMS y la guía de trabajo necesaria para preparar el dispositivo para la ingestión en Plaspy, manteniendo los detalles de configuración del fabricante que son de acceso público.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del dispositivo, pero la configuración exacta en el equipo del fabricante puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El GPT48‑X admite configuración remota vía plataforma, aplicación móvil o SMS; los ejemplos siguientes incluyen los comandos SMS más comunes publicados por el fabricante para la puesta en marcha.

## Resumen de configuración

Configurar el GPT48‑X para Plaspy garantiza que el rastreador pueda autenticarse en la red, establecer una sesión de datos con el endpoint de Plaspy y comenzar a reportar posiciones GNSS y eventos del dispositivo. Los elementos públicos más importantes son el endpoint del servidor, la selección del transporte y la verificación de que el rastreador informe correctamente a Plaspy.

- Apunte el servidor del dispositivo a Plaspy para que las ubicaciones y la telemetría se entreguen a la plataforma.
- Configure el APN del dispositivo y confirme que la SIM tenga datos y soporte SMS para la configuración remota y la conectividad.
- Elija UDP o TCP como transporte y configure el puerto estándar de Plaspy para permitir paquetes entrantes a la plataforma.
- Use los comandos SMS provistos o las herramientas del fabricante para aplicar y guardar los ajustes cuando sea necesario.
- Verifique que el dispositivo reporte a Plaspy y revise el estado y los eventos en la plataforma para confirmar la conectividad.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — Plaspy usa el mismo puerto para todos los dispositivos compatibles  
- Transport support: UDP or TCP may be used depending on device requirement  
- Plaspy automáticamente detecta el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos habituales antes de la configuración

- Un GPT48‑X con alimentación suficiente o una fuente externa de energía para la configuración inicial.  
- Una tarjeta SIM provisionada para datos celulares y SMS en la red regional LTE Cat‑M o NB‑IoT utilizada por el dispositivo.  
- Acceso al método de configuración del fabricante, como la app oficial, el portal web o un teléfono con capacidad para enviar SMS.  
- Los ajustes APN correctos del operador móvil para permitir sesiones de datos GPRS o IP.  
- Una cuenta en Plaspy e instrucciones para confirmar que el dispositivo aparece en la plataforma tras la configuración.  
- Documentación del fabricante o notas de la versión para la versión de firmware en uso.

## Cómo se conecta este rastreador a Plaspy

El GPT48‑X se configura para reportar posiciones GNSS y telemetría de dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy procesa las cargas útiles del protocolo EELINK y decodifica eventos como estado de batería, alertas por manipulación y reportes de emergencia para que los dispositivos aparezcan en los paneles y disparen alertas.

- El dispositivo envía datos GNSS y telemetría a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.  
- El transporte del rastreador puede configurarse en UDP o TCP según el firmware y el entorno de red.  
- Plaspy detecta automáticamente el protocolo EELINK y decodifica los mensajes entrantes para su visualización.  
- Los eventos reportados, como manipulación, movimiento y modo de emergencia, quedan disponibles como alertas en Plaspy.  
- Se usan intervalos de reporte regulares y de emergencia para equilibrar la vida de la batería y la frecuencia de actualizaciones.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante, como la app de EElink, el portal web o la interfaz de comandos SMS.  
2. Ingrese el endpoint del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138.  
3. Establezca el puerto del servidor en 8888 — Plaspy usa este mismo puerto para los dispositivos compatibles.  
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere elección de transporte.  
5. Configure el APN del operador y cualquier credencial opcional de APN que requiera la SIM.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento lo exige.  
7. Valide que el dispositivo reporte a Plaspy y que aparezca en su panel o lista de dispositivos en Plaspy.

## Ejemplos de comandos de configuración

El GPT48‑X admite configuración por SMS. Los siguientes comandos públicos son proporcionados por el fabricante y deben enviarse como mensajes SMS al dispositivo. Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} al suministrar los valores específicos del operador.

- Restablecer el dispositivo a configuración de fábrica (paso inicial opcional):
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Configurar el APN del operador (reemplazar {{apn}} por el APN de su operadora; si el APN requiere usuario o contraseña incluya {{apnu}} y {{apnp}}):
```text
APN,{{apn}}# 
```
Si su APN requiere usuario y contraseña use:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Establecer el servidor GPRS a Plaspy por dominio (recomendado):
```text
SERVER,1,d.plaspy.com,8888#
```

- O establecer el servidor GPRS a Plaspy por dirección IP:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de ubicación a 60 segundos:
```text
TIMER,60#
```

- Verificar los parámetros actuales:
```text
PARAM#
```

Notas sobre los marcadores de posición:
- {{apn}} es la cadena APN del operador móvil requerida para la conectividad de datos.  
- {{apnu}} y {{apnp}} son los campos opcionales de usuario y contraseña del APN cuando el operador los exige.

Si utiliza el comando SERVER,1,d.plaspy.com,8888# el rastreador resolverá el dominio a la IP de Plaspy y se conectará al puerto 8888. Tanto el dominio como la IP mostrados arriba son opciones públicas de configuración.

## Observaciones sobre la configuración

- Las revisiones de firmware y hardware pueden modificar la sintaxis exacta de los comandos SMS o las funciones disponibles; siempre verifique los comandos con las notas de la versión del firmware del dispositivo.  
- El GPT48‑X soporta configuración por SMS según la documentación pública, lo que resulta útil en instalaciones de campo sin acceso por cable directo.  
- Cuando el dispositivo requiera seleccionar TCP o UDP, elija el transporte que mejor se ajuste a la fiabilidad de su red y a la recomendación del fabricante.  
- Plaspy detecta automáticamente el protocolo del dispositivo al conectarse y utiliza el puerto 8888 de forma consistente para todos los equipos.  
- Mantenga un registro de los ajustes aplicados y pruebe el reporte a Plaspy después de los cambios para confirmar la conectividad y la decodificación de eventos.

## Por qué usar Plaspy con esta configuración

Usar el GPT48‑X con Plaspy proporciona seguimiento continuo de ubicación y reporte de eventos mientras minimiza el mantenimiento en sitio. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy simplifican la incorporación y reducen la complejidad de configuración en despliegues grandes, permitiendo un reporte consistente de posiciones, alertas por manipulación y eventos de emergencia en una única plataforma operativa.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions and firmware information on the manufacturer site https://www.eelink.com.cn/.
