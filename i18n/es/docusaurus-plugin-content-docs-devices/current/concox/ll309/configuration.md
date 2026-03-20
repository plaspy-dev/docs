---
slug: /concox/ll309/configuration
id: ll309-configuration
sidebar_label: Configuration
title: Concox - LL309 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para el rastreador Concox LL309 y su compatibilidad con Plaspy, incluye servidor y configuración por SMS
keywords:
  - Configuración Concox LL309
  - Instalación Concox LL309
  - Configuración LL309 Plaspy
  - Configuración servidor LL309
  - Configuración rastreador Concox
  - Comandos SMS LL309
  - Configuración APN LL309
  - Integración GPS Plaspy
  - Configuración rastreador cadena de frío
  - Configuración telemetría LL309
---

# Concox - LL309 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS Concox LL309 con Plaspy. Se concentra en los ajustes prácticos del servidor y en comandos de ejemplo que permiten al LL309 reportar ubicación y telemetría ambiental hacia la plataforma Plaspy. Cuando se requieren pasos del lado del fabricante, aquí se resumen los comandos públicos y el flujo de trabajo sin sustituir el manual oficial del producto.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El LL309 soporta configuración por SMS como se muestra a continuación y también ofrece opciones BLE y USB para comisionado local según su flujo de trabajo.

## Resumen de la configuración

Preparar el LL309 para trabajar con Plaspy significa configurar el dispositivo para que envíe su ubicación y la telemetría de sus sensores al endpoint del servidor de Plaspy y validar que el dispositivo aparezca en su cuenta de Plaspy. El proceso de configuración alinea los ajustes de red del dispositivo, el servidor de destino, los intervalos de reporte y la selección de transporte cuando sea necesario.

- Configure el dispositivo para apuntar al endpoint y puerto del servidor de Plaspy para que la telemetría llegue a los paneles de Plaspy.
- Proporcione el APN correcto y active GPRS o datos móviles para que el LL309 pueda subir datos por LTE.
- Establezca los intervalos de reporte y los parámetros de temporizador según el equilibrio deseado entre visibilidad y duración de batería.
- Valide la conectividad y confirme que el dispositivo informe a Plaspy tras la configuración.
- Opcionalmente utilice SMS, BLE o herramientas de PC según el método de aprovisionamiento local disponible.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el LL309. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Un dispositivo LL309 con batería cargada y una Nano SIM funcional con datos habilitados en el plan.
- Acceso al método de configuración del fabricante, como comandos SMS, comisionado por BLE o herramientas de PC.
- Información del APN del operador móvil para habilitar la conectividad de datos celulares.
- Un medio para enviar mensajes SMS al dispositivo si utiliza configuración basada en SMS.
- Conocimientos básicos sobre los intervalos de reporte deseados y la zona horaria regional si aplica.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el LL309 envía ubicación y telemetría ambiental al endpoint y puerto del servidor de Plaspy para que la telemetría, las alertas y el estado estén disponibles en los paneles y reglas de Plaspy. Plaspy ingiere esos mensajes y los asocia al registro del dispositivo usando el protocolo detectado.

- El dispositivo reporta GNSS y telemetría de sensores a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Mensajes periódicos de ubicación, temperatura, humedad, manipulación y estado de batería se envían según la configuración del TIMER o los intervalos de reporte.
- Eventos y alertas de excepción se integran en los conjuntos de reglas de Plaspy para notificaciones y flujos operativos.
- Los registros en caché mientras el dispositivo está offline se suben cuando se restablece la conectividad o pueden exportarse localmente si es necesario.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante, como comandos SMS, la app de comisionado BLE o la herramienta de PC provista por Concox.
2. Introduzca el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP de servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888.
4. Seleccione UDP o TCP para transporte si el dispositivo requiere una selección explícita.
5. Configure el APN y las credenciales del operador si es necesario, habilite GPRS o el modo de datos y ajuste los intervalos de reporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta del fabricante lo exige.
7. Valide que el LL309 reporte a Plaspy y que los datos de ubicación y sensores aparezcan en su instancia de Plaspy.

## Comandos de configuración de ejemplo

Envíe los siguientes comandos por SMS al dispositivo en el orden indicado. Estos comandos son ejemplos públicos documentados para la configuración SMS del LL309. Si utiliza BLE o una herramienta de PC, los mismos valores aplican pero el método será distinto.

1. Reinicio de fábrica opcional
```
FACTORY#
```
(Use solo si desea restaurar los valores de fábrica antes del aprovisionamiento.)

2. Ajustar la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador
```
APN,[apn]{{,[apnu],[apnp]}}#
```
- [apn] es el nombre del APN proporcionado por su operador móvil.
- [apnu] es el usuario del APN si se requiere.
- [apnp] es la contraseña del APN si se requiere.
- Si no se necesita usuario ni contraseña envíe APN,[apn]#.

4. Configurar el servidor GPRS usando el dominio de Plaspy
```
SERVER,1,d.plaspy.com,8888,0#
```

Alternativamente, definir el servidor GPRS usando la IP del servidor Plaspy
```
SERVER,0,54.85.159.138,8888,0#
```

5. Establecer el intervalo de actualización cada 60 segundos
```
TIMER,60#
```
O en un formato de temporizador alternativo
```
TIMER,60,60#
```

6. Habilitar el modo de datos GPRS
```
GPRSON,1#
```

Comando de verificación para revisar los parámetros
```
GPRSSET#
```

Envíe cada comando como SMS al número del dispositivo LL309. Los comandos deberían enviarse en la secuencia anterior durante el aprovisionamiento inicial. Los formatos exactos de SMS pueden variar según la revisión de firmware, por lo que confirme la sintaxis si un comando es rechazado.

## Notas de configuración

- Diferentes versiones de firmware o revisiones de hardware pueden cambiar la sintaxis de los comandos SMS o las funciones disponibles; verifique la sintaxis si un comando no es aceptado.
- Elija UDP o TCP según su preferencia operativa; Plaspy soporta ambos y detectará automáticamente el protocolo entrante en el puerto 8888.
- El aprovisionamiento por SMS es un método común para la puesta en marcha; BLE o herramientas de PC pueden ofrecer una experiencia de aprovisionamiento masivo más conveniente.
- Conserve los marcadores de posición [apn], [apnu] y [apnp] al preparar los comandos SMS y sustitúyalos por los valores del operador antes de enviar.
- Activar GPRS o el modo de datos es obligatorio para subidas en tiempo real a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el LL309 con Plaspy integra ubicación y telemetría ambiental en un único entorno de gestión de flotas, de modo que los equipos puedan monitorear condiciones de cadena de frío, recibir alertas por excepciones y seguir el movimiento de activos en tiempo casi real. Los ajustes de servidor compartidos de Plaspy simplifican el aprovisionamiento porque se usa el mismo puerto para los dispositivos soportados y la plataforma maneja la detección de protocolo automáticamente.

Para saber más sobre Plaspy visite https://www.plaspy.com y revise la documentación más reciente del fabricante en https://www.iconcox.com/ para confirmar comandos específicos del dispositivo, comportamiento de firmware y cualquier cambio reciente en los procedimientos de aprovisionamiento.
