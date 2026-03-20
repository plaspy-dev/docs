---
slug: /jointech/jt709c/configuration
id: jt709c-configuration
sidebar_label: Configuration
title: Jointech - JT709C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Jointech JT709C con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de trabajo
keywords:
  - Configuración Jointech JT709C
  - Instalación JT709C
  - JT709C Plaspy
  - configuración de rastreador Jointech
  - configuración de rastreador GPS
  - configuración de bloqueo de seguimiento
  - configuración gestión de flotas
  - configuración dispositivo Plaspy
  - rastreador seguridad de activos
  - configuración sello de contenedor
---

# Jointech - JT709C Configuración

Esta página documenta el contexto público de configuración para usar el Jointech JT709C con Plaspy. Describe los ajustes compartidos del servidor que Plaspy requiere, explica los pasos de instalación prácticos que se usan con frecuencia y muestra ejemplos de comandos SMS públicos disponibles para el JT709C. Utilice esta guía para preparar el dispositivo para la integración con Plaspy y para verificar su flujo de instalación.

Plaspy emplea los mismos ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando estén disponibles, en esta página se incluyen ejemplos de comandos SMS del JT709C que se usan para establecer el servidor GPRS y los valores de APN.

## Resumen de configuración

El proceso de configuración prepara al JT709C para enviar datos de ubicación y eventos a la plataforma Plaspy y garantiza que el dispositivo sea accesible y visible en su cuenta de Plaspy. Para el JT709C, el fabricante proporciona comandos de configuración por SMS para establecer el servidor GPRS y el APN, de modo que el dispositivo pueda utilizar datos móviles para reportar.

- Configure el dispositivo para que informe al endpoint del servidor Plaspy y así los eventos de ubicación y desbloqueo aparezcan en Plaspy.
- Establezca el APN y, si aplica, las credenciales del APN para que el rastreador use datos móviles y pueda reportar en tiempo real.
- Elija el protocolo de transporte UDP o TCP según lo requiera su instalación y red.
- Valide la conectividad del dispositivo y confirme que el rastreador aparece en los paneles de Plaspy.
- Guarde y aplique los ajustes en el dispositivo y reinícielo si es necesario para comenzar el envío de datos.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos habituales antes de la instalación

- Un JT709C con batería cargada y una instalación física correcta según las instrucciones de Jointech
- Una tarjeta SIM activa con datos móviles y capacidad de SMS instalada en el dispositivo si se va a usar reporte por GPRS
- El ID del dispositivo o IMEI del rastreador necesario para los comandos SMS y las herramientas de configuración de Jointech
- El valor del APN y, opcionalmente, el usuario y la contraseña del APN proporcionados por el operador móvil
- Acceso al método oficial de configuración de Jointech, como comandos SMS o software del proveedor
- Una forma de recibir y confirmar los reportes del dispositivo en Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el JT709C envía datos de ubicación y eventos al endpoint compartido del servidor Plaspy y al puerto indicado. Plaspy recibe la conexión entrante por el transporte seleccionado y encamina el feed del dispositivo dentro de la plataforma donde la detección del protocolo ocurre de forma automática.

- El rastreador se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- Los datos pueden enviarse mediante UDP o TCP según las opciones del dispositivo y los requisitos de la red
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el dispositivo correcto
- Las actualizaciones de ubicación y los registros de eventos de desbloqueo se ingresan en Plaspy para visibilidad y alertas
- Después de una configuración exitosa, el dispositivo debería aparecer en Plaspy y comenzar a subir eventos

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Jointech o al software correspondiente y confirme el ID del dispositivo requerido para los comandos SMS.
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los campos de configuración del dispositivo.
3. Establezca el puerto en 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Configure el APN y, si corresponde, el usuario y la contraseña del APN para que el dispositivo use datos móviles.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante lo exige.
7. Valide que el dispositivo reporte a Plaspy y que los datos de ubicación y eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

El Jointech JT709C puede configurarse mediante comandos SMS. A continuación aparecen ejemplos de comandos SMS públicos tal como los provee el fabricante. Reemplace los marcadores por sus valores reales.

1. Establecer el servidor GPRS y el APN
- Envíe este SMS reemplazando [trackerID] con el ID del dispositivo y [apn] con el APN de su operador móvil.

```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```

2. Opcionalmente establecer usuario y contraseña del APN
- Envíe este SMS solo si su APN requiere usuario y contraseña. Reemplace [apnu] y [apnp] con el usuario y la contraseña del APN.

```
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Notas sobre los marcadores
- [trackerID]: el ID del dispositivo o IMEI que se inserta en el SMS según lo requiera Jointech
- [apn]: la cadena APN de su operador móvil necesaria para la conectividad de datos
- [apnu] y [apnp]: usuario y contraseña del APN opcionales si el operador exige autenticación

Envíe cada comando como un único SMS al número telefónico del dispositivo JT709C usando el método SMS estándar soportado por Jointech. El segundo comando no es necesario si el APN no requiere credenciales.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato de los comandos o los parámetros soportados; verifique la sintaxis exacta para el firmware de su dispositivo.
- El JT709C soporta la configuración vía SMS como se muestra arriba cuando se usa reporte por GPRS y ajustes de APN.
- Elija UDP o TCP en función de la fiabilidad de la red y del comportamiento de transporte que prefiera; Plaspy admite ambos en el puerto compartido.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo entrante, por lo que no necesita puertos diferentes por dispositivo.
- Confirme siempre la conectividad final comprobando que el dispositivo aparece y reporta en Plaspy después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el JT709C con Plaspy combina las capacidades del dispositivo de sellado a prueba de manipulación y el registro de auditoría de desbloqueos con la telemetría centralizada y la gestión de flotas de Plaspy. Esto facilita correlacionar ubicación, eventos de acceso y alertas desde una sola plataforma para mejorar la supervisión operativa y los flujos de seguridad.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Los métodos de configuración específicos de dispositivos y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique los detalles actuales de configuración y la sintaxis de comandos con Jointech en https://www.jointcontrols.com/ antes de desplegar.
