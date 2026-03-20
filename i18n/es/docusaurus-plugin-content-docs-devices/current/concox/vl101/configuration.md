---
slug: /concox/vl101/configuration
id: vl101-configuration
sidebar_label: Configuration
title: Concox - VL101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Concox VL101 con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración Concox VL101
  - Instalación Concox VL101
  - Concox VL101 Plaspy
  - Rastreador GPS VL101
  - Configuración servidor Concox VL101
  - Configuración rastreador VL101
  - Configuración rastreador vehicular Concox
  - Configuración Plaspy VL101
  - Configuración plataforma GPS VL101
  - Instalación rastreador Concox
---

# Concox - Configuración VL101

Esta página describe la configuración pública necesaria para usar el rastreador Concox VL101 con Plaspy. Se centra en los ajustes y comandos prácticos que puede emplear para apuntar un dispositivo VL101 a Plaspy, de modo que el rastreador informe posición y estado a su cuenta. Cuando están disponibles, incluimos comandos SMS de ejemplo según las notas públicas de configuración de Concox.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y las herramientas del proveedor. Use la información aquí para preparar el dispositivo para Plaspy y confirme detalles con la documentación de Concox cuando sea necesario.

## Resumen de la configuración

Este proceso deja al VL101 listo para comunicarse con Plaspy configurando el APN celular, el endpoint del servidor, el intervalo de reporte y habilitando el canal de datos del dispositivo. Para el VL101, Concox ofrece comandos de configuración por SMS que se usan comúnmente durante la instalación y las pruebas.

- Apunte el rastreador al dominio o IP del servidor de Plaspy para que pueda subir datos de posición y eventos.
- Configure el APN del dispositivo para que pueda usar datos GPRS o LTE para el reporte.
- Establezca un intervalo de actualización adecuado para que el dispositivo informe ubicación con la frecuencia deseada.
- Habilite el modo GPRS o el canal de datos del dispositivo para que el rastreador pueda conectarse a la nube.
- Verifique la configuración con el comando de verificación proporcionado para confirmar que el equipo está reportando como se espera.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el VL101. Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP — el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta al servidor

## Requisitos habituales antes de la configuración

- Un dispositivo VL101 con alimentación instalado o accesible para la configuración inicial
- Una SIM activa con plan de datos y los datos correctos del APN del operador móvil
- Capacidad para enviar comandos SMS al rastreador si usa configuración por SMS
- Acceso a las instrucciones oficiales de Concox o software de configuración como referencia
- Una herramienta básica de instalación o un teléfono para enviar SMS y verificar respuestas
- Conocimiento de si su implementación prefiere transporte UDP o TCP

## Cómo se conecta este rastreador a Plaspy

El VL101 se configura para reportar ubicación y datos del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez aplicados los ajustes de servidor y APN, el rastreador establece una conexión IP y sube actualizaciones periódicas de ubicación y eventos a Plaspy, donde son visibles en la plataforma.

- El rastreador se configura para enviar reportes a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy escucha en un único puerto para todos los dispositivos y determina automáticamente el protocolo del equipo
- La cadencia de reporte la controla el ajuste TIMER del dispositivo para equilibrar frescura de ubicación y uso de datos
- Tras la conexión exitosa, los datos de ubicación y eventos aparecen en la plataforma Plaspy para su monitoreo
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador y las condiciones de la red

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Concox o al software correspondiente y revise las instrucciones del fabricante para su versión de firmware y revisión de hardware del VL101.
2. Asegúrese de que el dispositivo tenga alimentación y una SIM funcional con los datos de APN correctos.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Configure el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración y habilite el modo de datos del dispositivo, como GPRS, en el VL101.
6. Reinicie el dispositivo si el fabricante lo recomienda o después de guardar los ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de rastreadores o los mensajes recientes en Plaspy y utilizando el comando de verificación del dispositivo si está disponible.

## Comandos de configuración de ejemplo

El VL101 puede configurarse por SMS usando los siguientes comandos públicos. Conserve los marcadores de posición al enviar los comandos. Los comandos se muestran en el orden típico de la configuración inicial.

- Reset de fábrica inicial opcional (usar solo cuando sea necesario o para instalación inicial):
```
FACTORY#
```

- Establecer la zona horaria en UTC 0:
```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace {{apn}} con el APN de su red. Si es necesario, incluya {{apnu}} y {{apnp}} para usuario y contraseña del APN.
```
APN,{{apn}}#
```
O con usuario y contraseña opcionales:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS al dominio de Plaspy usando el puerto 8888:
```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativamente, configurar el servidor GPRS a la IP de Plaspy usando el puerto 8888:
```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos. El dispositivo soporta una forma de un solo parámetro o de dos parámetros:
```
TIMER,60#
```
O:
```
TIMER,60,60#
```

- Habilitar el modo GPRS en el dispositivo:
```
GPRSON,1#
```

- Para comprobar los parámetros actuales use el comando de verificación:
```
GPRSSET#
```

Notas sobre marcadores de posición y uso:
- {{apn}} debe reemplazarse por la cadena APN de su operador.
- {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN y solo deben incluirse si su operador los requiere.
- Use el comando SERVER con la forma de dominio o la de IP según su preferencia; ambas apuntan el dispositivo a Plaspy en el puerto 8888.
- El reset de fábrica es opcional y solo debe usarse cuando sea necesario.

## Notas de configuración

- La configuración por SMS está soportada por estos comandos públicos, pero algunos instaladores pueden preferir las herramientas o el software de configuración de Concox cuando estén disponibles.
- Las versiones de firmware o las revisiones de hardware pueden cambiar la disponibilidad o sintaxis de los comandos. Confirme la sintaxis exacta contra la documentación de Concox para el firmware de su VL101.
- Elija UDP o TCP según la estabilidad de la red, las reglas de firewall y la preferencia del instalador. Plaspy acepta cualquiera de los dos transportes en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.
- Después de la configuración, verifique la conectividad con GPRSSET# y confirmando que el dispositivo aparece y envía mensajes en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el Concox VL101 para reportar a Plaspy ofrece una forma directa de obtener visibilidad de vehículos y monitoreo operativo. Con los ajustes de servidor compartidos y la detección automática de protocolo, los instaladores pueden usar valores de servidor consistentes y concentrarse en ajustar el APN y los intervalos de reporte para cumplir con las necesidades operativas.

Learn more about Plaspy and how it supports fleet visibility at https://www.plaspy.com. For device specific documentation, firmware updates, and the latest configuration instructions verify details on the manufacturer website https://www.iconcox.com/ as methods and firmware behavior can change over time.
