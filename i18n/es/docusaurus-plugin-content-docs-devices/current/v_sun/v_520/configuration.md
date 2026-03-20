---
slug: /v_sun/v_520/configuration
id: v_520-configuration
sidebar_label: Configuration
title: V-SUN - V-520 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública precisa para configurar el V-SUN V-520 con la plataforma Plaspy
keywords:
  - Configuración V-SUN V-520
  - Instalación V-SUN V-520
  - Configuración servidor V-SUN V-520
  - V-SUN V-520 Plaspy
  - Configuración rastreador GPS V-SUN
  - Configuración SMS V-520
  - Configuración GPRS V-520
  - Configuración APN V-SUN
  - Plataforma de seguimiento V-SUN V520
  - Configuración plataforma GPS V-SUN V-520
---

# V-SUN - Configuración del V-520

Esta página describe el contexto público de configuración para utilizar el rastreador V-SUN V-520 con la plataforma Plaspy. Resume los pasos prácticos que suelen emplearse para preparar el V-520 para enviar datos de ubicación a Plaspy y reproduce los comandos SMS de configuración públicos que algunos instaladores e integradores usan. El V-520 soporta reportes por SMS y por GPRS TCP, y el fabricante proporciona la sintaxis de comandos SMS para muchas tareas habituales de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de V-SUN y las notas de instalación de su proveedor.

## Resumen de configuración

El objetivo de configurar el V-SUN V-520 para Plaspy es dirigir el dispositivo al punto de conexión del servidor de Plaspy, confirmar la conectividad de datos y permitir que el rastreador reporte ubicación y estado de forma fiable a la plataforma. Las configuraciones típicas del V-520 usan comandos SMS para establecer el APN y los parámetros del servidor GPRS, y luego habilitan el modo GPRS para que el dispositivo suba datos de posición.

- Configure el APN del operador y las credenciales de APN opcionales para que el V-520 pueda conectarse a datos móviles.
- Señale el dispositivo al endpoint del servidor Plaspy para que los reportes de ubicación se suban.
- Elija el protocolo de transporte y el puerto que usa Plaspy y guarde la configuración.
- Active el reporte por GPRS y verifique que el dispositivo sea visible en Plaspy.
- Opcionalmente, ajuste los intervalos de actualización en movimiento y en reposo para controlar la frecuencia de los reportes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son las configuraciones compartidas de Plaspy usadas para todos los dispositivos compatibles en la plataforma. Al configurar el V-520, apunte sus ajustes del servidor GPRS a d.plaspy.com o a 54.85.159.138 y use el puerto 8888. Seleccione UDP o TCP según lo requiera su equipo; Plaspy detectará el protocolo automáticamente.

## Requisitos típicos antes de la configuración

- Un V-SUN V-520 cargado y alimentado con una tarjeta SIM funcional insertada.
- Una SIM con datos móviles activos y los ajustes APN correctos proporcionados por el operador.
- Acceso al canal de comandos SMS del equipo o a la herramienta de configuración del fabricante que facilite su proveedor.
- Conocimiento de la contraseña del dispositivo si difiere del valor por defecto 0000.
- Un entorno de red que permita conexiones salientes hacia el dominio o la IP del servidor Plaspy.
- Acceso a la documentación oficial de V-SUN para diferencias específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

El V-520 puede enviar datos de posicionamiento a Plaspy mediante GPRS TCP o UDP. Una vez que el dispositivo está configurado con el endpoint del servidor Plaspy y el APN móvil, establece una sesión de datos y comienza a enviar reportes periódicos de ubicación al servidor compartido de Plaspy en el puerto 8888.

- El rastreador se configura para reportar a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- El transporte puede ser UDP o TCP según la elección de configuración del dispositivo.
- Plaspy determina automáticamente el protocolo del rastreador cuando recibe la conexión.
- Plaspy recibe actualizaciones periódicas de posición y las muestra en la plataforma para monitoreo e historial.
- El reporte de eventos y las actualizaciones por movimiento se producen conforme a los intervalos de actualización que usted configure en el dispositivo.

## Flujo habitual de configuración

1. Acceda al método de configuración oficial del fabricante o a la herramienta provista, normalmente comandos SMS para el V-520 o software del proveedor si está disponible.
2. Configure el APN del operador y cualquier usuario o contraseña de APN que requiera la SIM.
3. Introduzca d.plaspy.com o la IP del servidor 54.85.159.138 como la dirección del servidor GPRS.
4. Ajuste el puerto a 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Aplique o guarde la configuración y habilite el reporte por GPRS en el equipo.
6. Reinicie o desconecte y vuelva a conectar la alimentación del dispositivo si el firmware lo requiere para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando su visibilidad y las posiciones recientes en la plataforma.

## Comandos de configuración de ejemplo

El V-520 admite configuración mediante SMS usando la contraseña del equipo. Los comandos públicos que siguen se presentan en el orden que aparecen en el contenido suministrado por el fabricante. La contraseña por defecto mostrada en estos ejemplos es 0000. Si la contraseña de su dispositivo ha sido cambiada, reemplace 0000 por la contraseña actual.

- Restaurar de fábrica (opcional, para inicio)
```text
*RESET#0000##
```
- Establecer el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su APN requiere usuario o contraseña, reemplace {{apnu}} y {{apnp}} respectivamente. Use el formato indicado e incluya los campos adicionales solo si los requiere su operador.
```text
#803#0000#{{apn}}#{{apnu}}#{{apnp}}##
```
- Establecer el servidor GPRS a la IP y puerto de Plaspy. Esto apunta el rastreador a Plaspy para las subidas por GPRS.
```text
#804#0000#54.85.159.138#8888##
```
- Establecer el intervalo de actualización en movimiento. El ejemplo fija el intervalo que se usa cuando el equipo está en movimiento.
```text
#805#0000#120#1##
```
- Establecer el intervalo de actualización en reposo. El ejemplo fija el intervalo que se usa cuando el dispositivo está estacionario.
```text
#809#0000#120#1##
```
- Habilitar el modo GPRS para que el dispositivo suba datos a través de los servicios de datos móviles.
```text
7100000
```
- Habilitar el modo GPS en el rastreador si lo requiere el firmware o la instalación.
```text
2220000
```

Notas sobre los marcadores
- {{apn}} es la cadena del APN del operador necesaria para la conectividad de datos móviles.
- {{apnu}} es el usuario del APN cuando lo exige el operador.
- {{apnp}} es la contraseña del APN cuando lo exige el operador.

Envíe cada SMS desde un número autorizado si el dispositivo está configurado para aceptar comandos solo desde números predefinidos. Después de enviar los ajustes del servidor y del APN, habilitar el modo GPRS y reiniciar el equipo suele ayudar a garantizar que los nuevos ajustes entren en vigor.

## Notas de configuración

- La configuración del V-520 se realiza frecuentemente mediante comandos SMS, pero también pueden estar disponibles herramientas del proveedor o software de PC según el firmware.
- Las revisiones de firmware y las variantes de hardware pueden cambiar el formato de los comandos o los parámetros requeridos; confirme con la documentación de V-SUN para su versión exacta de firmware.
- Elija UDP o TCP según su preferencia operativa; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración del servidor en flotas con equipos mixtos.
- Al usar comandos SMS, la contraseña del equipo debe ser la correcta; los ejemplos anteriores muestran el 0000 por defecto usado en la guía pública.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el V-SUN V-520 le proporciona una plataforma centralizada para ver ubicaciones en tiempo real, trayectos históricos y el estado de los dispositivos portátiles. Apuntar el V-520 al endpoint compartido de Plaspy simplifica la incorporación de flotas o activos porque los mismos ajustes de servidor aplican a múltiples dispositivos y Plaspy se encarga de la detección automática del protocolo.

Learn more about Plaspy and platform features at https://www.plaspy.com. Verify device specific setup details, firmware behavior, and the latest manufacturer commands with V-SUN at http://www.v-sun.cc/ since manufacturer specifications and setup steps can change over time.
