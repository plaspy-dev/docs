---
slug: /meitrack/p99l/configuration
id: p99l-configuration
sidebar_label: Configuration
title: Meitrack - P99L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack P99L para usar con el servidor Plaspy d.plaspy.com mediante SMS y ajustes de red
keywords:
  - Configuración Meitrack P99L
  - Instalación Meitrack P99L
  - Configuración P99L Plaspy
  - Ajustes servidor P99L
  - Configuración rastreador GPS Meitrack
  - Configuración SMS P99L
  - Configuración rastreador Plaspy
  - Configuración servidor rastreador GPS
  - Ajustes APN Meitrack P99L
  - Configuración de red P99L
---

# Meitrack - Configuración del P99L

Esta página documenta el contexto público de configuración para usar el Meitrack P99L con Plaspy. Explica los pasos prácticos orientados al instalador y los comandos SMS más comunes para apuntar el P99L a Plaspy, de modo que el dispositivo envíe posición, estado de batería y telemetría básica para monitoreo en tiempo real y reproducción histórica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos y el flujo descritos a continuación deben considerarse una guía práctica basada en los métodos de configuración disponibles para el dispositivo.

## Resumen de la configuración

El objetivo de este proceso es dejar el P99L preparado para comunicarse de manera fiable con la plataforma Plaspy para seguimiento y telemetría. Las tareas típicas incluyen establecer el endpoint del servidor, confirmar parámetros de transporte y red, y validar que el dispositivo reporte correctamente a Plaspy.

- Configure el rastreador para que apunte al endpoint y puerto del servidor Plaspy para que la posición y la telemetría lleguen a la plataforma.
- Ajuste el APN y, si aplica, las credenciales de la SIM para que el P99L pueda establecer una sesión de datos GPRS/4G.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere elegirlo y guarde el ajuste.
- Verifique la zona horaria del dispositivo y el intervalo de reporte para alinear las actualizaciones de ubicación con los paneles de Plaspy.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos soportados)  
- Transporte soportado UDP o TCP (el dispositivo puede permitir seleccionar UDP o TCP)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

## Requisitos previos a la configuración

- Un dispositivo P99L cargado con acceso a la configuración por SMS o a la herramienta de configuración del fabricante.
- Una tarjeta SIM activa con datos móviles y el APN correcto del operador.
- Conocimiento de la contraseña del equipo o la contraseña por defecto (en los ejemplos se usa 0000).
- Acceso a la documentación o materiales de soporte oficiales de Meitrack para el P99L.
- Un teléfono capaz de enviar comandos SMS al dispositivo si se utiliza la configuración por SMS.

## Cómo se conecta este rastreador a Plaspy

El P99L se configura para enviar ubicación y telemetría básica a Plaspy apuntando el dispositivo al endpoint y puerto compartidos de Plaspy. Una vez configurado, Plaspy recibe los reportes del dispositivo y los normaliza para mapas en tiempo real, historial y alertas.

- El dispositivo envía fijaciones GNSS y posicionamientos asistidos a Plaspy a través de la conexión de datos celulares configurada.
- La telemetría como estado de batería y salud del dispositivo se sube al endpoint de Plaspy para su monitoreo.
- Eventos y actualizaciones periódicas de posición se envían a la dirección y puerto del servidor Plaspy.
- Plaspy detecta automáticamente el protocolo del dispositivo e ingiere los mensajes entrantes sin necesidad de cambiar puertos por dispositivo.
- La visibilidad del dispositivo y la reproducción histórica están disponibles en Plaspy una vez que el rastreador se conecta y envía datos correctamente.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Meitrack para el P99L, ya sea comandos SMS o una herramienta de configuración aprobada.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como dirección del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 que Plaspy usa para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere la selección del transporte.
5. Proporcione el APN de la SIM y, si aplica, el usuario y la contraseña del APN según lo requiera su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo exige.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo y las actualizaciones recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El P99L soporta configuración por SMS. A continuación se muestran comandos SMS públicos de ejemplo usados para configurar el dispositivo con Plaspy. Los comandos de muestra usan la contraseña por defecto del dispositivo 0000. Reemplace los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} con el APN y las credenciales de su operador.

- Restauración inicial opcional a valores de fábrica o a una base conocida (usar sólo cuando sea necesario):
```text
0000,F11
```
- Establecer el servidor GPRS para usar Plaspy por IP y puerto. Forma básica con solo APN:
```text
0000,A21,2,54.85.159.138,8888,{{apn}}
```
- Comando alternativo de servidor incluyendo nombre de usuario y contraseña del APN:
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- Establecer la zona horaria a UTC 0:
```text
0000,B36,0
```
- Establecer el intervalo de actualización de posición a cada 1 minuto:
```text
0000,A12,6,0
```
- Configurar el reporte de eventos básicos:
```text
0000,C03,0
```

Notas sobre los marcadores de posición:
- {{apn}} — reemplace con el APN del operador de su SIM.
- {{apnu}} — reemplace con el usuario del APN si el operador lo requiere; omita si no es necesario.
- {{apnp}} — reemplace con la contraseña del APN si el operador lo requiere; omita si no es necesario.

## Notas de configuración

- La configuración vía SMS es un método común y soportado para dispositivos Meitrack; las diferencias de firmware pueden cambiar los comandos soportados o el formato de parámetros.
- Elija UDP o TCP según su preferencia operativa; Plaspy soporta ambos y detecta automáticamente el protocolo entrante.
- Confirme siempre y reemplace marcadores como {{apn}}, {{apnu}} y {{apnp}} con los valores específicos de su operador.
- La contraseña por defecto usada en los ejemplos es 0000; cambie la contraseña del dispositivo después de la configuración inicial por seguridad operativa.
- Variantes regionales de firmware y modulaciones de radio pueden cambiar la sintaxis exacta de comandos o parámetros disponibles; consulte la documentación del fabricante cuando tenga dudas.

## Por qué usar Plaspy con esta configuración

Configurar el Meitrack P99L para que reporte a Plaspy ofrece a las organizaciones una forma fiable de capturar posicionamiento híbrido, estado de dispositivo y datos de eventos desde rastreadores portátiles resistentes. Usar los ajustes compartidos de Plaspy y los ejemplos anteriores ayuda a poner el P99L en línea rápidamente para que los equipos puedan monitorear ubicación y telemetría, recibir alertas y revisar rutas históricas a través de Plaspy.

Para saber más sobre Plaspy y los flujos de trabajo de seguimiento soportados visite https://www.plaspy.com. Para la información más actual sobre la configuración específica del P99L, detalles de firmware y referencia de comandos, verifique la documentación del fabricante en https://www.meitrack.com/ ya que los métodos y parámetros pueden cambiar con el tiempo.
