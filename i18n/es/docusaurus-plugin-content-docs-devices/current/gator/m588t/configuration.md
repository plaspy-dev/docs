---
slug: /gator/m588t/configuration
id: m588t-configuration
sidebar_label: Configuration
title: Gator - M588T Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Gator M588T para conectarlo a Plaspy usando servidor compartido y configuración por SMS
keywords:
  - Configuración Gator M588T
  - Instalación Gator M588T
  - Gator M588T Plaspy
  - Configuración servidor rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración por SMS del rastreador
  - Guía de rastreadores Gator
  - Configuración gestión de flotas
  - Configuración servidor GPRS
  - Configuración plataforma de rastreo
---

# Gator - Configuración del M588T

Esta página recoge el contexto público de configuración para usar el rastreador Gator M588T con Plaspy. Consolida los ajustes públicos conocidos y ofrece orientación práctica para preparar el dispositivo y que reporte ubicación y estado a la plataforma Plaspy. Utilice esta guía junto con la documentación oficial de Gator para detalles específicos del dispositivo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no es necesario especificar un protocolo en la plataforma. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; los ejemplos que siguen reflejan los comandos públicos y los marcadores que suelen utilizarse para el M588T.

## Resumen de la configuración

Este proceso prepara el M588T para comunicarse con Plaspy y hace que el dispositivo sea visible en la plataforma. El objetivo principal es definir el servidor GPRS/SMS, el transporte y la identificación del dispositivo para que el rastreador envíe su telemetría a Plaspy de forma fiable.

- Apuntar el dispositivo al endpoint y puerto del servidor Plaspy para que los reportes de ubicación lleguen a la plataforma.
- Proveer la identidad del dispositivo y un número de contacto o teléfono administrativo según lo solicite el flujo de configuración.
- Configurar parámetros GPRS, incluyendo los datos APN cuando el proveedor de SIM lo requiera.
- Seleccionar la opción de transporte (UDP o TCP) si el firmware solicita elegirlo.
- Verificar que el dispositivo esté reportando a Plaspy y sea visible en la plataforma después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporta UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son el endpoint público y el puerto que utiliza Plaspy para todos los dispositivos de la plataforma. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que lo esencial en el equipo es configurar el dominio o la IP del servidor y el puerto.

## Requisitos habituales antes de configurar

- Un dispositivo M588T con alimentación y accesible, correctamente cableado o con fuente de energía aplicada.
- Una tarjeta SIM activa con un plan de datos adecuado y los datos APN del operador móvil.
- Conocer el ID del dispositivo (IMEI), ya que algunos comandos requieren incluirlo.
- Acceso al método de configuración soportado por el fabricante, como comandos SMS o la herramienta oficial de configuración.
- La contraseña por defecto del dispositivo si es necesaria para la configuración (los ejemplos públicos abajo usan 123456 como contraseña por defecto).
- Un número de teléfono para verificación administrativa por SMS cuando la configuración del dispositivo incluya un campo de contacto.

## Cómo se conecta este rastreador a Plaspy

El M588T utiliza su conectividad GSM/GPRS para enviar datos de ubicación y eventos al endpoint y puerto configurados. Al apuntar a Plaspy, el dispositivo dirigirá su telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma gestione automáticamente el protocolo.

- El rastreador envía actualizaciones de posición y alarmas a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección del firmware del dispositivo; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se necesita elegir un protocolo en la plataforma.
- Tras una configuración exitosa, el dispositivo será visible en Plaspy para seguimiento en tiempo real y monitoreo de eventos.
- Verificaciones y pruebas periódicas aseguran que el intervalo de reporte y las alarmas se comporten como se espera.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Gator para el M588T (comandos SMS o la herramienta de configuración de Gator) según la documentación del fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 en el dispositivo.
4. Elija UDP o TCP en el dispositivo si el firmware requiere seleccionar el transporte.
5. Proporcione los ajustes APN necesarios y el ID del dispositivo o el número de teléfono administrativo según el formato de comando del fabricante.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para activar los cambios.
7. Valide que el dispositivo esté reportando a Plaspy y aparezca en la lista de dispositivos de la plataforma.

## Comandos de configuración de ejemplo

El M588T puede configurarse mediante comandos SMS. Los ejemplos públicos que siguen usan la contraseña por defecto 123456 y muestran dos variantes según si se requieren usuario y contraseña del APN.

- Si su operador requiere usuario y contraseña del APN incluya los marcadores [apnu] y [apnp]:

```
SS,*[apn]*,*[apnu]*,*[apnp]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

- Si el operador solo requiere el nombre del APN y no usuario/contraseña utilice:

```
S,*[apn]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

Explicación de los marcadores:
- [apn] — el nombre del APN proporcionado por su operador móvil.
- [apnu] — usuario del APN cuando lo requiera el operador.
- [apnp] — contraseña del APN cuando lo requiera el operador.
- {{DeviceID}} — el ID del dispositivo o IMEI que exija el formato del comando.
- {{phoneNumberUser}} — su número de teléfono administrativo para incluir donde se solicite en la configuración.

Nota: 123456 se muestra en el ejemplo público como la contraseña por defecto del dispositivo. Reemplace los marcadores por sus valores reales antes de enviar los SMS.

## Notas de configuración

- Las variaciones de firmware y de modelos regionales pueden cambiar la sintaxis exacta de los SMS o los parámetros disponibles; confirme siempre la sintaxis con la documentación oficial de Gator para su firmware.
- El M588T soporta tanto la configuración por SMS como las herramientas PC del fabricante según el flujo de provisión del proveedor; elija el método que coincida con su dispositivo e instalación.
- Cuando el dispositivo requiera seleccionar el tipo de transporte, pruebe tanto UDP como TCP para confirmar la entrega fiable; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Mantenga un registro del ID del dispositivo y de los números de teléfono administrativos configurados para facilitar la verificación y resolución de problemas tras la configuración.
- Se recomienda cambiar la contraseña por defecto después del aprovisionamiento inicial según las indicaciones del fabricante.

## Por qué usar Plaspy con esta configuración

Usar el Gator M588T con Plaspy ofrece una forma sencilla de centralizar los reportes de ubicación y el monitoreo de eventos en una flota. Al apuntar el dispositivo al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen visibilidad consistente de la posición de los vehículos y de los eventos de alarma sin necesidad de configurar la plataforma por cada dispositivo.

Para obtener más información sobre Plaspy y sus capacidades visite https://www.plaspy.com. Para instrucciones específicas de dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de Gator http://en.gatorgroup.cn.
