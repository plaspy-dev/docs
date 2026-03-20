---
slug: /concox/bl10/configuration
id: bl10-configuration
sidebar_label: Configuration
title: Concox - BL10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía rápida para configurar Concox BL10 con Plaspy usando ajustes públicos SMS y GPRS
keywords:
  - concox bl10 configuración
  - concox bl10 instalación
  - bl10 configuración plaspy
  - bl10 configuración servidor
  - configuración rastreador gps bl10
  - configuración rastreador plaspy
  - configuración rastreador micromovilidad
  - configuración rastreador bloqueo bicicleta
  - comandos sms bl10
  - configuración gprs bl10
---

# Concox - Configuración del BL10

Esta página documenta el contexto de configuración pública para usar el rastreador Concox BL10 con Plaspy. Se concentra en los ajustes prácticos y públicos y en el flujo de trabajo que normalmente siguen los operadores para apuntar un BL10 a Plaspy y verificar que el dispositivo esté reportando ubicación y eventos correctamente. Cuando están disponibles, se incluyen ejemplos públicos de comandos SMS y ajustes GPRS para que pueda aplicarlos directamente o adaptarlos a sus herramientas de instalación.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo, aunque los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El BL10 admite configuración por SMS y GPRS según documentación pública, por lo que esta guía incluye esos ejemplos de comandos SMS y los valores del servidor Plaspy que debe ingresar para integrar el dispositivo.

## Resumen de la configuración

Configurar el BL10 para Plaspy implica preparar el dispositivo para comunicarse por datos celulares y asegurarse de que reporte al endpoint y puerto del servidor Plaspy usados por todos los dispositivos. Los comandos públicos de configuración del BL10 permiten ajustar el APN, la dirección del servidor, los intervalos de reporte y activar el modo GPRS por SMS. Después de configurar, valide la conectividad y confirme que el dispositivo aparece en su cuenta de Plaspy.

- Configure el BL10 con un APN válido del operador para que los datos GPRS estén disponibles.
- Apunte el dispositivo al endpoint de Plaspy para que los datos de GPS y eventos se envíen a la plataforma.
- Defina un intervalo de reporte razonable para que las actualizaciones de posición cumplan sus necesidades operativas.
- Active el modo GPRS y verifique que el dispositivo pueda establecer sesión de datos.
- Valide los reportes en Plaspy y ajuste temporizadores o parámetros del APN si es necesario.

## Ajustes del servidor Plaspy

Los siguientes ajustes públicos de servidor son necesarios para que los dispositivos Concox BL10 envíen datos a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar los formatos compatibles sin selección de protocolo por dispositivo

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará el protocolo automáticamente, así que use el puerto 8888 al apuntar el BL10 al endpoint de Plaspy.

## Requisitos típicos antes de la configuración

- Un BL10 cargado y el hardware de instalación necesario para su bicicleta o base.
- Una Micro SIM activa y provisionada para datos con un APN válido de su operador móvil.
- Capacidad para enviar y recibir mensajes SMS para la configuración por SMS si fuera necesario.
- Acceso al método oficial de configuración de Concox o a la herramienta del proveedor para acciones específicas del dispositivo y diferencias de firmware.
- Conocimientos básicos de los valores APN de su operador y de cualquier usuario o contraseña requeridos por el APN.

## Cómo se conecta este rastreador a Plaspy

El BL10 envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que los encargados de flota puedan ver la telemetría del dispositivo, el estado del cierre y las alertas de manera centralizada. Una vez que el BL10 tenga una sesión GPRS funcional y se apliquen los ajustes del servidor, enviará actualizaciones de posición y eventos a Plaspy para su procesamiento y visualización.

- El rastreador se configura para enviar datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP para transmitir datos a Plaspy.
- Plaspy identifica automáticamente el protocolo del dispositivo e ingiere los mensajes GPS y de eventos.
- Los datos reportados se muestran en Plaspy para alertas por geocerca, notificaciones de manipulación y monitoreo.
- Los operadores validan el dispositivo confirmando las actualizaciones recibidas en la interfaz de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Concox o a los procedimientos de comandos SMS del BL10 que le proporcione su proveedor o la documentación de firmware.
2. Asegúrese de que el BL10 tenga una Micro SIM funcional y que conozca los valores APN de su operador para la conectividad de datos.
3. Ingrese el endpoint del servidor Plaspy ya sea como d.plaspy.com o como 54.85.159.138 y establezca el puerto en 8888 en la configuración del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita de transporte.
5. Guarde o aplique la configuración y active el modo GPRS en el dispositivo.
6. Reinicie el dispositivo si el firmware lo requiere o después de guardar la configuración.
7. Valide que el BL10 reporte a Plaspy confirmando que las actualizaciones de ubicación y eventos aparezcan en la plataforma.

Si usa comandos SMS para la configuración, siga el orden del fabricante y verifique cada paso leyendo las respuestas del dispositivo o utilizando los comandos de verificación provistos.

## Ejemplos de comandos de configuración

El BL10 puede configurarse enviando mensajes SMS con comandos específicos. La siguiente secuencia de comandos públicos se presenta en el mismo orden que la documentación común del BL10. Indique cualquier comando de restablecimiento como opcional o parte de la configuración inicial si necesita una base de fábrica.

- Restablecimiento de fábrica opcional
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador
```text
APN,[apn]{{apnu ? ',' + [apnu] : ''}}{{apnp ? ',' + [apnp] : ''}}#
```
Nota: Reemplace [apn] con el APN de su operador. Si su operador requiere usuario o contraseña para el APN, introdúzcalos en lugar de [apnu] y [apnp] respectivamente. La cadena de comando original del dispositivo admite campos opcionales de usuario y contraseña.

- Configurar el servidor GPRS usando dominio (recomendado por claridad)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS usando IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos (dos formatos aceptados)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Activar el modo GPRS
```text
GPRSON,1#
```

- Verificar los ajustes relacionados con GPRS
```text
GPRSSET#
```

Mantenga el orden de comandos al realizar la configuración inicial. Después de enviar los SMS de configuración, espere que el dispositivo aplique los cambios y que la sesión GPRS se establezca.

## Notas de configuración

- La configuración por SMS es compatible y se usa comúnmente para la puesta en marcha inicial o ajustes remotos; siga la sintaxis exacta de comandos que Concox indique para su firmware BL10.
- Las diferencias de firmware y revisiones de hardware pueden cambiar los comandos disponibles o los parámetros requeridos; confirme con la documentación de Concox o con su proveedor.
- Elija UDP o TCP según su entorno de conectividad; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- El BL10 debe tener un APN válido configurado y una sesión de datos activa para que el reporte por GPRS funcione con Plaspy.
- Siempre guarde y, si el fabricante lo recomienda, reinicie el dispositivo después de aplicar nuevos ajustes para asegurar que tengan efecto.

## Por qué usar Plaspy con esta configuración

Usar el BL10 con Plaspy brinda a los operadores de micromovilidad visibilidad centralizada de la ubicación, el estado del bloqueo y las alertas de eventos a través de una flota de bicicletas compartidas. Los pasos públicos de configuración del BL10 y los comandos SMS permiten a los operadores apuntar rápidamente los dispositivos a Plaspy, estandarizar los intervalos de reporte y validar la conectividad para que la monitorización de flota, las reglas de geocerca y las notificaciones por manipulación funcionen de forma confiable.

Para obtener más información sobre Plaspy y cómo consolida los datos de rastreadores para la gestión de flotas visite https://www.plaspy.com. Para los comandos específicos más actuales, notas de firmware y la guía del fabricante, verifique los detalles en el sitio de Concox https://www.iconcox.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
