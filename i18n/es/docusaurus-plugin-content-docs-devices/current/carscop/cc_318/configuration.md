---
slug: /carscop/cc_318/configuration
id: cc_318-configuration
sidebar_label: Configuration
title: Carscop - CC-318 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Carscop CC-318 con ajustes del servidor Plaspy y comandos SMS
keywords:
  - Configuración Carscop CC-318
  - Instalación Carscop CC-318
  - Carscop CC-318 Plaspy
  - Configuración rastreador GPS CC-318
  - Configuración servidor CC-318
  - Comandos SMS configuración CC-318
  - Configuración servidor rastreador GPS Plaspy
  - Configuración rastreador vehicular Plaspy
  - Configuración flota CC-318
  - Configuración software seguimiento Carscop
---

# Carscop - Configuración CC-318

Esta página documenta la configuración pública para integrar el rastreador Carscop CC-318 con la plataforma Plaspy. Resume los ajustes del servidor Plaspy y muestra los comandos SMS públicos usados por el CC-318, para que usted pueda preparar el dispositivo y envíe telemetría y posiciones a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante para el CC-318 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos que siguen presentan comandos SMS comúnmente documentados públicamente y sirven como punto de partida práctico; confirme siempre los detalles específicos del dispositivo con el fabricante.

## Resumen de la configuración

El objetivo de este proceso es dejar al CC-318 listo para comunicarse de forma fiable con Plaspy, de modo que la ubicación del vehículo, las alarmas y los eventos se registren en la plataforma. Esto incluye configurar el APN del dispositivo, apuntarlo al endpoint de Plaspy y garantizar que el rastreador permanezca en línea para subir datos.

- Configure el APN del dispositivo y, si corresponde, las credenciales APN para que el tracker use datos móviles.
- Indique el endpoint y puerto del servidor Plaspy para que la plataforma reciba la telemetría.
- Elija UDP o TCP en el dispositivo si el firmware lo requiere y use el puerto compartido de Plaspy.
- Valide la conectividad y mantenga el dispositivo en línea para que las actualizaciones periódicas y alertas lleguen a Plaspy.
- Opcionalmente, restaure los valores de fábrica y aplique la contraseña predeterminada recomendada por el proveedor antes de introducir nuevos ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en host cuando el dispositivo lo soporte
- IP del servidor 54.85.159.138 como endpoint de Plaspy cuando se requiera IP
- Puerto 8888, único puerto utilizado por Plaspy para todos los dispositivos soportados
- Soporte de transporte: configure UDP o TCP en el rastreador según las opciones del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos solo deben apuntar al host y puerto correctos

## Requisitos habituales antes de la configuración

- Un dispositivo CC-318 alimentado y accesible, instalado según las instrucciones del fabricante
- Una SIM GSM activa con plan de datos y GPRS habilitado para las cargas por internet
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del proveedor
- Conocimiento de la contraseña del dispositivo (el valor predeterminado aparece en los comandos públicos abajo) y de cualquier política de contraseñas del sitio
- Confirmación del comportamiento del firmware del equipo y si requiere reinicio para aplicar cambios

## Cómo se conecta este rastreador a Plaspy

El CC-318 envía ubicación, alarmas y telemetría mediante datos móviles al endpoint y puerto de Plaspy. Una vez configurado para usar el endpoint de Plaspy, el dispositivo se hace visible en la plataforma para monitoreo y manejo de eventos.

- Los reportes del dispositivo se envían al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888
- El rastreador puede usar UDP o TCP según la configuración en el dispositivo
- Plaspy recibe cargas periódicas de ubicación y mensajes de alarma/evento y los asocia al dispositivo
- Mantener el dispositivo en línea asegura visibilidad continua y alertas oportunas en Plaspy
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesaria selección de protocolo en el servidor

## Flujo de configuración típico

1. Acceda al método oficial de configuración Carscop para el CC-318 (comandos SMS o herramienta del fabricante) tal como lo documenta el proveedor.
2. Si va a configurar por interfaz del dispositivo o SMS, prepare los valores APN y cualquier usuario y contraseña APN que exija su operador móvil.
3. Ingrese d.plaspy.com o 54.85.159.138 como nombre de host del servidor o IP del servidor en la pantalla de configuración del dispositivo o por SMS.
4. Establezca el puerto 8888 en el dispositivo y elija UDP o TCP si el equipo exige selección de transporte.
5. Aplique o guarde la configuración en el dispositivo y reinícielo si el firmware requiere un reboot para activar los cambios.
6. Valide que el dispositivo reporte a Plaspy comprobando que aparezca en línea y envíe actualizaciones de ubicación en la plataforma.

## Ejemplos de comandos de configuración

El CC-318 soporta configuración vía SMS. Los siguientes comandos proceden de ejemplos públicos de configuración del CC-318. La contraseña predeterminada del dispositivo utilizada en estos comandos es 123456. Reemplace los marcadores según corresponda.

- Reseteo inicial opcional (usar solo cuando sea necesario):
```text
RESET*123456
```

- Ajustar la zona horaria a UTC+0:
```text
TIMEZONE*123456*+00
```

- Configurar el APN del operador móvil (reemplazar [apn] por el APN de su operador):
```text
APN*123456*[apn]
```

- Establecer usuario y contraseña APN si son requeridos (reemplazar [apnu] y [apnp] por las credenciales del operador):
```text
USERNAME*123456*[apnu]*[apnp]
```

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto:
```text
IP*123456*54.85.159.138,8888
```

- Mantener el rastreador en línea (comando común para preservar conectividad persistente):
```text
KEEPONLINE*123456
```

Notas sobre los marcadores y la contraseña
- [apn] es el APN proporcionado por su operador móvil.
- [apnu] y [apnp] son opcionales y corresponden al usuario y contraseña APN que algunos operadores exigen.
- 123456 aparece como la contraseña predeterminada en ejemplos públicos del CC-318; confirme o cambie la contraseña conforme a su política de seguridad.

## Notas de configuración

- La configuración por SMS es comúnmente soportada por el CC-318; use la sintaxis de comandos SMS del proveedor exactamente y conserve la contraseña del dispositivo al editar comandos.
- Algunas versiones de firmware pueden aceptar un nombre de host como d.plaspy.com en lugar de una IP; el ejemplo público usa la IP 54.85.159.138,8888. Confirme qué formato admite su firmware.
- Elija UDP o TCP según las opciones del dispositivo y el comportamiento de la red; Plaspy admite ambos transportes y usa el puerto 8888 para todos los equipos.
- Restaurar ajustes de fábrica con RESET*123456 es opcional y suele emplearse solo al resolver problemas o preparar un equipo para reasignación.
- Verifique siempre las credenciales APN y pruebe la conectividad tras aplicar los ajustes; algunos firmwares pueden requerir reinicio para aplicar los cambios.

## Por qué usar Plaspy con esta configuración

Configurar el CC-318 para que reporte a Plaspy ofrece a operadores de flota y de alquiler visibilidad consistente a nivel de plataforma sobre la ubicación del vehículo, alarmas y estado. Usar Plaspy con el endpoint compartido y la detección automática de protocolo simplifica la incorporación de dispositivos y reduce la complejidad por unidad, al tiempo que habilita monitoreo, reglas de eventos y acciones remotas cuando están disponibles.

Learn more about Plaspy and how it supports fleet telemetry and device integrations at https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and manufacturer instructions, check the official Carscop site http://www.carscop.com/ since setup methods and firmware behavior can change over time.
