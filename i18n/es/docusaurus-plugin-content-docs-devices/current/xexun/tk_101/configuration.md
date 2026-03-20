---
slug: /xexun/tk_101/configuration
id: tk_101-configuration
sidebar_label: Configuration
title: Xexun - TK-101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Xexun TK-101 con Plaspy mediante comandos SMS o ajustes GPRS
keywords:
  - Configuración Xexun TK-101
  - Instalación Xexun TK-101
  - TK-101 Plaspy
  - Configuración de rastreador GPS
  - Configuración de seguimiento de vehículos
  - Configuración SMS TK-101
  - Configuración GPRS rastreador
  - Configuración servidor Plaspy
  - Configuración plataforma GPS Xexun
  - Ajustes APN TK-101
---

# Xexun - Configuración del TK-101

Esta página describe el contexto público de configuración para usar el rastreador Xexun TK-101 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y ofrece comandos públicos del fabricante y orientación práctica para poner un TK-101 en línea y que reporte a Plaspy para monitoreo y seguimiento.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo. No obstante, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK-101 admite configuración por SMS y GPRS; esta página usa ejemplos públicos de comandos SMS como método principal y muestra cómo apuntar el dispositivo a Plaspy.

## Resumen de la configuración

El objetivo es preparar el TK-101 para que se comunique de forma confiable con la plataforma Plaspy y pueda mostrar datos de ubicación y eventos. Con la contraseña por defecto del dispositivo y comandos SMS usted puede establecer valores APN, habilitar el modo GPRS y apuntar el rastreador a Plaspy para que reporte automáticamente.

- Configurar el APN del operador móvil para que el rastreador use datos GPRS.
- Ajustar el servidor y puerto para que el rastreador envíe datos a Plaspy.
- Habilitar o verificar el modo de reporte por GPRS para el envío de actualizaciones de ubicación.
- Ajustar el intervalo de reporte según las necesidades operativas para equilibrar visibilidad y autonomía de batería.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Configure el TK-101 para enviar datos al servidor Plaspy usando los siguientes ajustes públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP cuando el dispositivo requiera selección
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

Estos valores son los ajustes públicos de Plaspy que debe ingresar en el dispositivo o mediante comandos SMS para que el rastreador alcance la plataforma.

## Requisitos típicos antes de la configuración

- Unidad TK-101 cargada y con energía lista para configurar.
- Tarjeta SIM con plan de datos activo o capacidad de SMS y la información APN correcta provista por el operador móvil.
- Conocimiento de la contraseña del dispositivo usada para la configuración por SMS; el ejemplo público abajo utiliza la contraseña por defecto 123456.
- Acceso a la interfaz de comandos SMS del dispositivo o al software oficial de configuración Xexun si está disponible.
- Cobertura de red móvil para datos GPRS para que el rastreador pueda conectar al servidor Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el TK-101 usa GPRS sobre GSM para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos reportes y mapea la información del dispositivo dentro de la plataforma para monitoreo y alertas.

- El rastreador se apunta al endpoint y puerto de Plaspy para que los datos GPRS fluyan hacia la plataforma.
- Las actualizaciones de ubicación se envían según el intervalo de reporte configurado y el dispositivo pasa a ser visible en Plaspy.
- Alertas como SOS, geocerca, movimiento y batería baja pueden reenviarse a Plaspy cuando están correctamente configuradas.
- Si no hay señal GPS disponible, el rastreador puede proporcionar la última ubicación conocida, que seguirá visible en Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador y usa el puerto compartido para aceptar conexiones de dispositivos.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del Xexun TK-101, normalmente comandos SMS o la herramienta de proveedor suministrada por el fabricante.
2. Asegúrese de que la SIM esté instalada y que conozca los valores APN; luego ingrese el APN del operador en el rastreador.
3. Apunte el dispositivo a d.plaspy.com o a la IP 54.85.159.138 y establezca el puerto en 8888.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte para el reporte GPRS.
5. Aplique o guarde la configuración enviando los comandos SMS apropiados o usando la herramienta del fabricante.
6. Reinicie el dispositivo si el firmware lo requiere o tras el cambio de configuración.
7. Valide que el equipo está reportando a Plaspy y que aparece en la plataforma con las actualizaciones esperadas.

El flujo anterior refleja el enfoque público por comandos SMS y los ajustes de servidor Plaspy que deben aplicarse.

## Ejemplos de comandos de configuración

El TK-101 se puede configurar por SMS usando la contraseña del dispositivo. El ejemplo público a continuación usa la contraseña por defecto 123456. Envíe cada comando como un SMS separado desde un número autorizado.

- Reinicio opcional a valores de fábrica (usar solo si necesita restaurar valores por defecto):
```text
begin123456
```

- Establecer el APN del operador (reemplazar [apn] por el APN proporcionado por su operador):
```text
apn123456 [apn]
```

- Establecer el nombre de usuario del APN si su operador lo requiere (reemplazar [apnu] por el usuario del APN). Enviar solo si el APN exige usuario:
```text
apnuser123456 [apnu]
```

- Establecer la contraseña del APN si su operador la requiere (reemplazar [apnp] por la contraseña del APN). Enviar solo si el APN exige contraseña:
```text
apnpasswd123456 [apnp]
```

- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto indicados en esta guía:
```text
adminip123456 54.85.159.138 8888
```
Note: Some firmware versions accept a domain instead of an IP. In the general workflow you may enter d.plaspy.com rather than the IP if your device accepts domain names.

- Habilitar o configurar el modo de reporte GPRS:
```text
gprsmode123456
```

- Establecer el intervalo de actualización a 60 segundos (este ejemplo fija 60 segundos de intervalo de reporte):
```text
t060s***n123456
```
Explicación de los marcadores:
- [apn] — cadena APN de su operador móvil
- [apnu] — nombre de usuario del APN si lo exige el operador
- [apnp] — contraseña del APN si lo exige el operador
Mantenga la contraseña de configuración del dispositivo (123456 en los ejemplos) igual a la contraseña del rastreador. Si su dispositivo usa una contraseña distinta, utilice esa contraseña en el texto del comando.

## Notas de configuración

- Las diferencias de firmware y revisiones de hardware pueden cambiar la sintaxis exacta de los comandos SMS o los comandos disponibles; confirme los comandos para su versión de firmware si observa un comportamiento distinto.
- El TK-101 admite configuración por SMS como se muestra; algunos instaladores pueden preferir herramientas del fabricante o software de configuración cuando estén disponibles.
- Elija UDP o TCP según sus necesidades operativas; Plaspy acepta ambos y detecta automáticamente el protocolo en el puerto compartido.
- Si usa el comando adminip con la dirección IP, el dispositivo apunta directamente a Plaspy. Algunas variantes de firmware aceptan un nombre de dominio en su lugar.
- Preserve la contraseña del dispositivo al enviar comandos SMS y actualícela si su política de seguridad lo requiere.

## Por qué usar Plaspy con esta configuración

Usar el Xexun TK-101 con Plaspy ofrece un camino sencillo para integrar reportes de ubicación y eventos en una plataforma centralizada. Al configurar el APN y los ajustes del servidor GPRS para apuntar a Plaspy, las organizaciones obtienen visibilidad consistente de la posición de los activos, eventos de movimiento y alertas que se entregan en Plaspy para monitoreo y supervisión operativa.

To learn more about Plaspy and the services it provides visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest device instructions and command references on the official manufacturer site https://www.xexun.com/.
