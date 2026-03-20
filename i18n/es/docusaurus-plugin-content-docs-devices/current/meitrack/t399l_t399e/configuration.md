---
slug: /meitrack/t399l_t399e/configuration
id: t399l_t399e-configuration
sidebar_label: Configuration
title: Meitrack - T399L/T399E Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack T399L/T399E para Plaspy, con servidor, comandos SMS y pasos para integrar flotas
keywords:
  - Configuración Meitrack T399L
  - Configuración Meitrack T399E
  - T399L T399E Plaspy
  - Configuración servidor Meitrack
  - Configuración GPS Plaspy
  - Configuración rastreador vehicular
  - Configuración rastreo para flotas
  - Configuración GPRS Meitrack
  - Configuración serie T399
  - Compatibilidad rastreadores Plaspy
---

# Meitrack - Configuración T399L/T399E

Esta página documenta el contexto público de configuración para usar los rastreadores Meitrack T399L y T399E con Plaspy. Describe los ajustes de servidor compartidos que Plaspy requiere, el flujo de trabajo habitual de configuración y comandos SMS públicos de uso común. Use esta guía para preparar los dispositivos y confirmar la conectividad antes de incorporarlos a su entorno de flota en Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La serie T399 admite configuración por SMS y reporte por GPRS; los comandos SMS de ejemplo a continuación muestran el patrón público habitual para apuntar un dispositivo a Plaspy.

## Visión general de la configuración

Este proceso prepara un T399L o T399E para que reporte posiciones GNSS y eventos a Plaspy, de modo que el rastreador sea visible en la plataforma. Los comandos públicos que siguen demuestran cómo establecer el endpoint del servidor, el intervalo de reporte, la zona horaria y el comportamiento básico de eventos mediante SMS, que es uno de los métodos provistos por el fabricante.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que envíe ubicación y telemetría.
- Configurar el intervalo de reporte y el envío de eventos para que los datos lleguen con frecuencias previsibles.
- Confirmar APN y conectividad celular para permitir sesiones GPRS.
- Validar que el dispositivo reporte a Plaspy y sea visible en la plataforma.
- Opcionalmente devolver el dispositivo a ajustes de fábrica antes de un despliegue masivo para obtener una configuración base consistente.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port for reporting

## Requisitos habituales antes de configurar

- El dispositivo está alimentado y ha sido instalado o conectado a una fuente de prueba
- Tarjeta SIM activa insertada y habilitada para datos con el APN correcto
- Capacidad para enviar comandos SMS al número del rastreador si va a usar configuración por SMS
- Acceso al método oficial de configuración Meitrack o al software adecuado para su firmware
- Conocimiento de la contraseña del dispositivo para comandos SMS; la contraseña por defecto en los ejemplos públicos es 0000
- Plan de pruebas para validar el reporte al endpoint del servidor Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

El T399L/T399E se configura para enviar datos de posición y eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir telemetría en tiempo real. Una vez configurado, el dispositivo abre una sesión GPRS y envía mensajes periódicos empleando el transporte seleccionado.

- El rastreador envía actualizaciones periódicas de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la selección del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo desde la plataforma
- Los reportes de eventos y alarmas se entregan a Plaspy y aparecen como incidentes, activaciones de geocerca o actualizaciones de telemetría
- Una integración correcta proporciona visibilidad continua y registro histórico dentro de Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Meitrack para la unidad: comandos SMS, software del fabricante o herramienta de instalador adecuada para su firmware.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el dispositivo solicita seleccionar uno.
5. Configure el APN y cualquier usuario o contraseña necesarios para GPRS y luego aplique o guarde la configuración.
6. Reinicie el dispositivo si el firmware lo requiere para aplicar los nuevos ajustes de servidor GPRS.
7. Valide que el dispositivo reporte a Plaspy confirmando mensajes entrantes o la visibilidad del dispositivo en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El T399L/T399E puede configurarse por SMS usando la contraseña del dispositivo y el formato de comando público. La contraseña por defecto usada en estos ejemplos públicos es 0000. Envíe estos comandos como mensajes SMS al número del dispositivo. Conserve los marcadores de posición al reemplazarlos por sus valores reales.

- Comando opcional de restablecimiento de fábrica inicial
```text
0000,F11
```
Nota: El comando de restablecimiento de fábrica puede usarse durante la configuración inicial si desea asegurar ajustes por defecto. Empléelo sólo cuando sea necesario.

- Establecer el servidor GPRS a Plaspy usando la IP del servidor y el puerto con marcador de APN
```text
0000,A21,2,54.85.159.138,8888,[apn]
```
- Si su APN requiere usuario y contraseña incluya los marcadores opcionales [apnu] y [apnp] después del APN
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Explicación de los marcadores de posición
- [apn] es el APN de datos móviles para la tarjeta SIM
- [apnu] es el nombre de usuario del APN si lo requiere su operador móvil
- [apnp] es la contraseña del APN si lo requiere su operador móvil

- Establecer la zona horaria a UTC 0
```text
0000,B36,0
```

- Establecer el intervalo de actualización a cada 1 minuto
```text
0000,A12,6,0
```

- Configurar eventos usando un comando de ejemplo público
```text
0000,C03,0
```

Mantenga los comandos en el mismo orden cuando una secuencia sea requerida para el aprovisionamiento inicial. Reemplace la contraseña 0000 si ya la ha cambiado desde el valor de fábrica.

## Notas de configuración

- Las versiones de firmware del fabricante y las variantes regionales de hardware pueden cambiar la sintaxis y el comportamiento de los comandos. Confirme siempre con la documentación del dispositivo correspondiente a su firmware.
- Elija UDP o TCP según sus requisitos de red y operativos. Ambos transportes son compatibles con Plaspy y con el dispositivo, pero difieren en la retransmisión y manejo de sesión.
- La configuración por SMS se muestra como ejemplo público, pero Meitrack suele ofrecer herramientas de configuración para PC o móviles que pueden facilitar aprovisionamiento masivo y actualizaciones OTA cuando están soportadas.
- Plaspy escucha en el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que no es necesario cambiar el puerto por dispositivo en la plataforma.
- Si usa el comando de restablecimiento de fábrica, considérelo opcional y úselo únicamente si necesita borrar una configuración previa.

## Por qué usar Plaspy con esta configuración

Desplegar el Meitrack T399L o T399E con Plaspy ofrece a los operadores de flota un camino sencillo hacia el rastreo en tiempo real, la monitorización de eventos y la telemetría integrada. Apuntar un dispositivo a Plaspy con el endpoint y puerto compartidos estandariza la conectividad en una flota mixta y permite que la plataforma detecte protocolos automáticamente para acelerar la incorporación.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific setup details, firmware behavior, and manufacturer guidance at https://www.meitrack.com/ since manufacturer specifications and configuration methods can change over time.
