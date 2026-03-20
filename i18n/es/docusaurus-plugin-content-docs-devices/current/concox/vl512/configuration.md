---
slug: /concox/vl512/configuration
id: vl512-configuration
sidebar_label: Configuration
title: Concox - VL512 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox VL512 con ajustes de servidor Plaspy y comandos SMS para una puesta en marcha rápida
keywords:
  - configuración Concox VL512
  - instalación Concox VL512
  - configuración servidor Concox VL512
  - configuración VL512 Plaspy
  - configuración rastreador GPS VL512
  - configuración rastreador Plaspy
  - configuración rastreador OBDII
  - configuración seguimiento de vehículos
  - configuración rastreo para gestión de flotas
  - instrucciones rastreador Concox
---

# Concox - Configuración del VL512

Esta página reúne la información pública necesaria para usar el rastreador Concox VL512 con Plaspy. Contiene los ajustes de servidor prácticos y los comandos SMS del fabricante que se usan comúnmente para apuntar un equipo VL512 a Plaspy y habilitar el seguimiento en tiempo real, las alertas por eventos y la ingesta de telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Utilice los comandos y el flujo de trabajo que se muestran aquí como referencia práctica y confirme los detalles más recientes con Concox cuando sea necesario.

## Resumen de la configuración

Configurar el VL512 para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos al endpoint compartido de Plaspy, de modo que aparezca en la plataforma para monitoreo e informes. Los comandos de ejemplo que siguen son los comandos públicos basados en SMS que facilita el fabricante y muestran los valores típicos que debe establecer para la integración con Plaspy.

- Configure el APN y el modo GPRS del equipo para que el VL512 pueda abrir una conexión de datos.
- Apunte el dispositivo al dominio o IP del servidor Plaspy y al puerto compartido para que los mensajes lleguen a Plaspy.
- Ajuste los intervalos de reporte para que el equipo envíe actualizaciones de ubicación periódicas y eventos a Plaspy.
- Verifique y consulte el dispositivo para confirmar que se aplicaron los parámetros GPRS y del servidor.
- Use el método de configuración oficial de Concox (comandos SMS o herramientas del proveedor) para evitar comandos incompatibles o diferencias de firmware.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888 (es el mismo puerto que usan todos los dispositivos en Plaspy)
- Soporte de transporte por UDP o TCP en el puerto 8888
- Plaspy realiza detección automática del protocolo para identificar el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Acceso al puerto OBDII del vehículo para la instalación física y la alimentación si usa la forma OBDII.
- Una nano SIM instalada con un plan de datos activo y capacidad SMS para enviar comandos de configuración cuando se requiera.
- Datos del APN del operador (APN, usuario, contraseña) para el servicio SIM, para poder configurar el APN en el equipo.
- Capacidad para enviar y recibir SMS al dispositivo desde el número de administrador utilizado para la configuración.
- El dispositivo encendido y reportando estado de batería o alimentación OBDII para que los mensajes de configuración surtan efecto.
- Acceso a la documentación oficial de Concox o a herramientas del proveedor, si están disponibles para su firmware y región.

## Cómo se conecta este rastreador a Plaspy

El VL512 se configura para transmitir su telemetría a través de la red de datos móviles al endpoint y puerto compartidos de Plaspy. Plaspy ingiere mensajes de posición, eventos y estado y mapea automáticamente el protocolo del dispositivo, por lo que el rastreador queda visible en la plataforma sin diferencias de servidor por equipo.

- El equipo usa la configuración GPRS y el APN definidos para establecer una sesión de datos móviles.
- La configuración del servidor indica al dispositivo que envíe paquetes a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El rastreador envía mensajes periódicos de ubicación y eventos según el intervalo TIMER configurado para seguimiento en tiempo real e histórico.
- Plaspy identifica automáticamente el protocolo cuando el dispositivo se conecta al puerto compartido.
- El transporte puede ser UDP o TCP según la configuración del equipo o el soporte del firmware; Plaspy acepta ambos.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Concox para el VL512 (comandos SMS o herramienta del proveedor) que coincida con su firmware.
2. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 al configurar el parámetro SERVER.
3. Establezca el puerto del servidor en 8888 según lo requiere Plaspy y asegúrese de que el dispositivo esté configurado para usar UDP o TCP si se solicita elegir transporte.
4. Configure los parámetros APN para la SIM instalada usando el comando APN e incluya usuario y contraseña si el operador los solicita.
5. Aplique o guarde la configuración mediante el método del dispositivo y reinicie el equipo si el firmware necesita un reboot para activar los nuevos ajustes.
6. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y usando el comando de verificación mostrado más abajo o observando el equipo en la plataforma Plaspy.
7. Si es necesario, repita o ajuste los parámetros en función de las respuestas del firmware, el comportamiento del operador de red o los requisitos del instalador.

## Comandos de configuración de ejemplo

El VL512 admite configuración mediante SMS. Los comandos que siguen son los ejemplos públicos del fragmento de configuración de Concox. Envíe cada comando como SMS al equipo en el orden mostrado para la configuración inicial. Marque el comando de restauración de fábrica como opcional o solo para configurar desde cero.

1. Restauración de fábrica opcional (usar solo si necesita restaurar valores por defecto)
```
FACTORY#
```

2. Ajustar la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador
- Reemplace {{apn}} por el valor APN de su operador.
- Si su operador requiere usuario o contraseña del APN, incluya {{apnu}} y {{apnp}} según lo proporcione su operador.
```
APN,{{apn}}[,{{apnu}},{{apnp}}]#
```
(Ejemplo con marcadores de usuario y contraseña conservados para mayor claridad: APN,{{apn}},{{apnu}},{{apnp}}#)

4. Establecer el servidor GPRS usando el dominio de Plaspy (ejemplo con dominio)
```
SERVER,1,d.plaspy.com,8888,0#
```
O establecer el servidor GPRS usando la IP de Plaspy (ejemplo con IP)
```
SERVER,0,54.85.159.138,8888,0#
```
Nota: Puede usar la variante con dominio o con IP para apuntar el equipo a Plaspy en el puerto 8888.

5. Establecer el intervalo de actualización cada 60 segundos
- Variante de parámetro simple:
```
TIMER,60#
```
- Variante de dos parámetros:
```
TIMER,60,60#
```

6. Habilitar modo GPRS
```
GPRSON,1#
```

7. Consultar parámetros GPRS actuales y ajustes del servidor
```
GPRSSET#
```

Notas sobre los marcadores:
- {{apn}} es la cadena APN del operador necesaria para datos móviles.
- {{apnu}} es el usuario del APN cuando lo requiere el operador.
- {{apnp}} es la contraseña del APN cuando lo requiere el operador.

Estos comandos reflejan el ejemplo público de configuración por SMS del fabricante. Si su firmware o herramienta del proveedor usa una sintaxis distinta, prefiera el método oficial del proveedor para su unidad.

## Observaciones sobre la configuración

- Las variantes de firmware y región pueden cambiar la sintaxis exacta de los SMS o los parámetros disponibles; confirme siempre con la documentación de Concox correspondiente a su firmware VL512.
- El dispositivo admite transporte UDP o TCP en el puerto 8888; seleccione la opción de transporte que requiera su despliegue o deje el valor por defecto si Plaspy puede detectar el protocolo automáticamente.
- La configuración por SMS es un método común y ampliamente soportado para el VL512, pero también pueden existir herramientas del proveedor y opciones de configuración por USB según el modelo y la revisión del equipo.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática del protocolo, solo necesita configurar el endpoint y el puerto del servidor como se indica.
- Tras la configuración, valide la conectividad tanto con el comando de verificación GPRSSET# como confirmando que el dispositivo aparece y reporta en la plataforma Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el VL512 con Plaspy ofrece a los operadores de flotas un camino rápido y plug-and-play hacia la visibilidad en tiempo real del vehículo y alertas basadas en eventos. La forma OBDII del VL512 y su conectividad LTE con respaldo GSM, combinadas con el servidor compartido y la detección automática de protocolo de Plaspy, simplifican el despliegue y reducen la carga de configurar servidores por cada equipo.

Learn more about Plaspy and how the platform can manage devices like the Concox VL512 at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details, review the official Concox resources at https://www.iconcox.com/.
