---
slug: /coban/gps_401/configuration
id: gps_401-configuration
sidebar_label: Configuration
title: Coban - GPS-401 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar Coban GPS-401 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración Coban GPS 401
  - Configuración GPS 401
  - Integración GPS 401 Plaspy
  - Configuración rastreador Coban
  - Configuración seguimiento vehicular
  - Configuración GPRS rastreador
  - Comandos SMS configuración
  - Ajustes servidor rastreador
  - Gestión de flotas Plaspy
  - Guía configuración rastreador
---

# Coban - Configuración del GPS-401

Esta página documenta el contexto público de configuración para usar el rastreador Coban GPS-401 con Plaspy. Incluye los ajustes de servidor prácticos, los pasos habituales del flujo de trabajo y los comandos SMS públicos que permiten preparar el equipo para reportar a Plaspy. Use esta guía para entender qué debe configurarse en el lado del rastreador antes de que el dispositivo aparezca en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que muchos equipos, incluido el GPS-401, pueden apuntar al mismo endpoint y puerto para integrarse. Los pasos exactos en el equipo del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos a continuación como ejemplos públicos y verifique detalles con la documentación de Coban cuando sea necesario.

## Resumen de la configuración

Configurar el GPS-401 para Plaspy prepara el rastreador para enviar datos de ubicación y estado al backend de Plaspy. El proceso generalmente utiliza el método de configuración del fabricante o comandos SMS para establecer el APN, el endpoint del servidor, el modo de transporte y los intervalos de reporte.

- Establecer el APN y las credenciales del operador para que el dispositivo use datos GPRS
- Configurar el rastreador para que reporte al endpoint y puerto del servidor Plaspy
- Seleccionar el modo de transporte UDP o TCP si el dispositivo lo requiere
- Definir el intervalo de reporte o latido para que la plataforma reciba actualizaciones regulares
- Verificar la conectividad del dispositivo y confirmar que aparece en Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el Coban GPS-401. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

## Requisitos previos habituales

- Un dispositivo GPS-401 con alimentación, acceso a la ranura de la SIM y conexiones de antena según la instalación
- Una tarjeta SIM válida con datos GPRS habilitados y el APN configurado para el operador móvil
- La contraseña por defecto del dispositivo o la contraseña SMS de administrador para acceder a la configuración (el ejemplo por defecto mostrado abajo es 123456)
- Posibilidad de enviar mensajes SMS al dispositivo o acceso a la herramienta de configuración del fabricante si está disponible
- Conocimientos básicos sobre si su entorno requiere transporte UDP o TCP para el rastreador

## Cómo se conecta este rastreador a Plaspy

El GPS-401 normalmente usa GPRS a través de la red celular para conectarse a Plaspy. Después de configurar el APN y la información del servidor, el rastreador abrirá una conexión hacia Plaspy y enviará reportes de posición y estado al endpoint y puerto compartidos del servidor.

- El rastreador envía datos mediante GPRS y se conecta al endpoint del servidor Plaspy
- Los reportes del dispositivo se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Puede elegir transporte UDP o TCP en el rastreador cuando esté soportado
- Plaspy detecta automáticamente el protocolo del rastreador para las conexiones entrantes
- Se usan actualizaciones regulares de ubicación, paquetes de latido y notificaciones de eventos para mantener la visibilidad en Plaspy

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Coban, ya sea la interfaz de comandos SMS del fabricante o una herramienta de configuración autorizada
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o como 54.85.159.138 en los ajustes de servidor
3. Establezca el puerto del servidor en 8888, que Plaspy utiliza para todos los dispositivos compatibles
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita
5. Configure el APN, el nombre de usuario y la contraseña requeridos por su operador móvil
6. Aplique o guarde la configuración y reinicie el dispositivo cuando el procedimiento del fabricante lo solicite
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma Plaspy

## Ejemplos de comandos de configuración

El GPS-401 soporta configuración vía SMS. Los siguientes comandos SMS públicos se proporcionan en el orden típico de uso. La contraseña por defecto mostrada aquí es 123456. Reemplace los marcadores y valores según lo requiera su instalación.

- Comando de restauración de fábrica (paso inicial opcional)
``` 
begin123456
```

- Establecer la zona horaria a UTC 0
```
time zone123456 0
```

- Establecer el APN del operador
```
apn123456 {{apn}}
```
Explicación: reemplace {{apn}} con la cadena APN de su operador móvil.

- Establecer nombre de usuario y contraseña del APN
```
up123456 {{apnu}} {{apnp}}
```
Explicación: reemplace {{apnu}} con el usuario del APN y {{apnp}} con la contraseña del APN. Si su operador no requiere credenciales, déjelos en blanco u omítalos según lo permita el firmware.

- Configurar el servidor GPRS hacia Plaspy usando la IP y el puerto proporcionados
```
adminip123456 54.85.159.138 8888
```
Nota: el dispositivo puede aceptar un nombre de dominio en algunas versiones de firmware, pero el ejemplo público usa la IP y el puerto del servidor Plaspy.

- Ejemplo para establecer intervalo de actualización
```
fix060s060s***n123456
```
Explicación: este ejemplo ajusta los parámetros de fix y reporte según se muestra en el contenido público de configuración. Ajuste los intervalos para que coincidan con su política de reporte.

- Cambiar a modo GPRS y seleccionar transporte
```
gprs123456,1,1
```
o
```
gprs123456
```
Explicación: use la variante que soporte su firmware para habilitar GPRS. La primera forma puede indicar selección de modo de transporte como UDP o TCP según el comportamiento del firmware.

- Verificar ajustes actuales
```
check123456
```

- Habilitar estado de sensor de combustible o mejorar la transmisión de sensores digitales
```
protocol123456 18
```

## Notas de configuración

- Los comandos son por SMS y se aplican a los ejemplos de firmware público proporcionados. Algunas revisiones de firmware o herramientas de proveedores pueden usar sintaxis diferente
- Es posible usar el dominio d.plaspy.com en lugar de la IP en herramientas de configuración; siga la guía del fabricante para el soporte de dominios
- Elija UDP o TCP según las necesidades de su instalación; Plaspy acepta ambos y detecta el protocolo automáticamente
- Mantenga la contraseña del dispositivo segura y cámbiela desde el valor por defecto cuando corresponda, siguiendo las mejores prácticas del instalador
- Verifique APN, usuario y contraseña con su operador móvil antes de configurar el dispositivo

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Coban GPS-401 ofrece una vía sencilla para consolidar los reportes de los dispositivos en un único endpoint de plataforma. Al configurar el equipo para apuntar a Plaspy y definir intervalos de reporte apropiados, las organizaciones obtienen visibilidad consistente de ubicación y monitoreo operativo entre sus dispositivos.

To learn more about Plaspy and how it integrates with supported trackers visit https://www.plaspy.com. Please verify the latest device specific configuration details, firmware behavior, and manufacturer guidance on the official Coban website https://www.coban.net/ as these items can change over time.
