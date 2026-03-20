---
slug: /coban/gps104/configuration
id: gps104-configuration
sidebar_label: Configuration
title: Coban - GPS104 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Coban GPS104 con Plaspy usando servidor compartido y comandos SMS
keywords:
  - configuración Coban GPS104
  - instalación Coban GPS104
  - configuración servidor Coban GPS104
  - Coban GPS104 Plaspy
  - comandos SMS Coban GPS104
  - configuración rastreador GPS104
  - guía instalación rastreador Coban
  - configuración rastreo vehicular
  - rastreo flotas Coban GPS104
  - configuración GPRS GPS104
---

# Coban - GPS104 Configuration

Esta página explica el contexto de configuración pública para usar el rastreador Coban GPS104 con Plaspy. Presenta los pasos y ajustes prácticos y públicos necesarios para apuntar los dispositivos GPS104 al servidor de Plaspy, y detalla lo que debe preparar antes de registrar el dispositivo en la plataforma Plaspy.

Plaspy utiliza parámetros de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Las instrucciones del fabricante para el GPS104 pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del vendedor, por lo que esta página se enfoca en ajustes públicos universales y en los comandos SMS que aparecen en la documentación oficial.

## Resumen de la configuración

Configurar un GPS104 para Plaspy prepara el rastreador para enviar datos de posición y eventos a la plataforma, asegurando que el dispositivo tenga las credenciales de red y los intervalos de reporte correctos. Los objetivos prácticos del proceso de configuración son los siguientes.

- Apuntar el GPS104 al servidor de Plaspy para que la telemetría llegue a la plataforma para mapas y alertas.
- Configurar el APN y las credenciales GPRS para que el dispositivo tenga una conexión de datos funcional.
- Establecer intervalos de reporte y modo de seguimiento para controlar la frecuencia de actualizaciones y el uso de datos.
- Validar la configuración con una verificación de estado para que el dispositivo aparezca en Plaspy.
- Habilitar opciones de protocolo e informes de sensores necesarios para monitoreo y alarmas vehiculares.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma puede aceptar muchos protocolos comunes en el mismo puerto

## Requisitos típicos antes de la configuración

- Un Coban GPS104 con alimentación y en funcionamiento, instalado o accesible para configurar
- Una tarjeta SIM con datos GPRS habilitados y, si aplica, credenciales APN válidas
- La contraseña por defecto del dispositivo 123456 para la configuración inicial vía SMS tal como se indica en los comandos públicos abajo
- Capacidad para enviar comandos SMS al rastreador o acceso a la herramienta de configuración del fabricante cuando esté disponible
- Cobertura de red GPRS para que el dispositivo establezca una sesión de datos con el servidor Plaspy
- Acceso a la documentación oficial del fabricante para confirmar comandos específicos según firmware

## Cómo se conecta este rastreador a Plaspy

El GPS104 se configura para reportar ubicación y estado mediante GPRS a Plaspy usando el endpoint y puerto compartidos. Una vez aplicados el APN y los ajustes del servidor, el rastreador abrirá una sesión de datos y transmitirá mensajes de ubicación y eventos que Plaspy ingiere y muestra.

- El dispositivo envía posiciones periódicas y reportes de eventos al endpoint configurado de Plaspy en el puerto 8888
- El transporte de datos puede ser UDP o TCP según la configuración del rastreador y las condiciones de red
- Plaspy identifica automáticamente el protocolo entrante y procesa la telemetría para su uso en la plataforma
- Los reportes incluyen actualizaciones de posición y alarmas configuradas para que el dispositivo sea visible en las herramientas de monitoreo de Plaspy
- La conexión exitosa habilita seguimiento en vivo, alertas y monitoreo operativo dentro de Plaspy

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración del Coban GPS104, o prepárese para enviar comandos SMS al dispositivo usando la contraseña por defecto.
2. Ingrese el destino del servidor Plaspy en la configuración del dispositivo como d.plaspy.com o 54.85.159.138 según la interfaz disponible.
3. Configure el puerto del servidor en 8888 ya que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; ambos son compatibles para comunicarse con Plaspy.
5. Configure el APN y las credenciales del APN para la SIM para que el dispositivo pueda establecer una sesión GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del GPS104 lo requiere.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación del equipo o confirmando que el dispositivo aparece en la plataforma.

## Comandos de ejemplo para configuración

El GPS104 soporta configuración vía SMS. Los siguientes comandos SMS públicos aparecen en la documentación del fabricante. La contraseña por defecto en estos ejemplos es 123456. Reemplace los marcadores y valores según su instalación.

- Restaurar valores de fábrica (paso inicial opcional)
```text
begin123456
```

- Ajustar la zona horaria a UTC 0
```text
time zone123456 0
```

- Establecer el APN del operador
```text
apn123456 [apn]
```
Explicación: Reemplace [apn] con la cadena APN de su operador móvil.

- Establecer usuario y contraseña del APN
```text
up123456 [apnu] [apnp]
```
Explicación: Reemplace [apnu] y [apnp] con el usuario y la contraseña del APN si su operador los requiere. Deje en blanco u omita si no son necesarios.

- Establecer el servidor GPRS usando la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
Nota: Este comando usa la IP numérica del servidor y el puerto 8888 de Plaspy tal como se muestra en los ajustes públicos.

- Establecer intervalo de actualización y modo de rastreo (ejemplo)
```text
fix060s060s***n123456
```
Este comando configura un patrón de intervalos de posicionamiento como ejemplo público. Ajuste según sus necesidades de telemetría y la sintaxis del firmware.

- Cambiar a modo GPRS y seleccionar transporte
```text
gprs123456,1,1
```
o, si aplica una variante más simple:
```text
gprs123456
```
Explicación: use la variante que su firmware requiera para cambiar de modo SMS a GPRS y, cuando corresponda, seleccionar UDP o TCP.

- Consultar ajustes actuales
```text
check123456
```

- Habilitar reporte de protocolo mejorado para sensores o estado de combustible
```text
protocol123456 18
```
Explicación: Este comando activa comportamientos de protocolo específicos según la documentación pública para mejorar los informes de sensores.

## Notas de configuración

- Los comandos mostrados corresponden a la sintaxis SMS pública documentada para el GPS104 y suponen la contraseña por defecto 123456; si la contraseña del dispositivo fue cambiada use la contraseña actual.
- Las versiones de firmware y las revisiones de hardware pueden modificar la sintaxis de los comandos y las opciones disponibles. Confirme los comandos con la documentación oficial de Coban GPS104 antes de aplicarlos.
- El GPS104 soporta tanto TCP como UDP. Elija el transporte que mejor se adapte a su red y necesidades; Plaspy acepta cualquiera en el puerto 8888.
- La configuración vía SMS es útil para instalaciones en campo, pero las herramientas del fabricante o la configuración por USB pueden ser preferibles para programación masiva u offline.
- Cuando use el comando adminip mostrado arriba, el dispositivo se dirige a la IP del servidor Plaspy. Si su interfaz de configuración acepta un dominio, siga las instrucciones de la herramienta del dispositivo para ingresar d.plaspy.com cuando esté soportado.

## Por qué usar Plaspy con esta configuración

Usar el Coban GPS104 con Plaspy ofrece una forma sencilla de centralizar la telemetría de vehículos y activos en una sola plataforma de monitoreo. Al aplicar los ajustes públicos de servidor y red descritos aquí, las organizaciones pueden habilitar seguimiento en tiempo real, alertas y supervisión operativa mientras minimizan las diferencias de configuración por dispositivo gracias a la detección automática de protocolos de Plaspy.

Para saber más sobre Plaspy y cómo su flota puede utilizar esta configuración visite https://www.plaspy.com. Para los comandos más recientes del GPS104, notas de firmware y orientación del fabricante, verifique los detalles específicos de configuración en https://www.coban.net/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
