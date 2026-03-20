---
slug: /v_sun/tlt_7b/configuration
id: tlt_7b-configuration
sidebar_label: Configuration
title: V-SUN - TLT-7B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el V-SUN TLT-7B con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - configuración V-SUN TLT-7B
  - instalación V-SUN TLT-7B
  - configuración V-SUN Plaspy
  - configuración servidor TLT-7B
  - comandos SMS TLT-7B
  - configuración GPRS TLT-7B
  - instalación rastreador GPS V-SUN
  - configuración rastreador Plaspy
  - rastreo vehicular TLT-7B
  - configuración rastreador 3G
---

# V-SUN - TLT-7B Configuración

Esta página documenta el contexto público de configuración para usar el rastreador V-SUN TLT-7B con Plaspy. Se enfoca en los ajustes prácticos publicados y en los comandos SMS más comunes necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar posición y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguir los comandos del dispositivo que aparecen abajo y verificar cualquier diferencia con la documentación oficial de V-SUN.

## Resumen de configuración

El objetivo de esta configuración es preparar un dispositivo TLT-7B para que se comunique de forma fiable con Plaspy y aparezca en la plataforma para monitoreo e informes históricos. El flujo público de configuración para este equipo normalmente se basa en comandos SMS para ajustar APN, servidor e intervalos de reporte, seguidos de la activación de GPRS y GPS.

- Configure el APN y las credenciales para que el equipo use datos móviles para reportes por GPRS.
- Apunte el rastreador al endpoint del servidor de Plaspy para que los paquetes de ubicación lleguen a la plataforma.
- Defina intervalos de reporte para condiciones de movimiento y reposo para controlar la frecuencia de actualizaciones.
- Habilite los modos GPRS y GPS para que el equipo transmita datos de localización en tiempo real.
- Valide la conectividad y la visibilidad en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en dominio.
- IP del servidor 54.85.159.138 como endpoint numérico.
- Puerto 8888 usado para todos los dispositivos en Plaspy.
- Soporte de transporte por UDP o TCP según la selección del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto funciona en los dispositivos soportados.

## Requisitos previos

- Un TLT-7B alimentado y en funcionamiento con acceso a su interfaz de configuración por SMS o al software del fabricante.
- Una tarjeta SIM válida instalada con un plan de datos y un APN que permita conexiones GPRS/TCP.
- Conocimiento de la contraseña por defecto del equipo 0000 para la configuración por SMS (la misma que se usa en los comandos a continuación).
- Cobertura de red GSM/WCDMA en la ubicación del dispositivo.
- Acceso al manual del dispositivo o a las herramientas del proveedor V-SUN para confirmar la sintaxis de los comandos y detalles de firmware.
- Una cuenta en Plaspy o acceso a un administrador de Plaspy para verificar que el dispositivo aparezca en la plataforma tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El TLT-7B puede configurarse para enviar información de ubicación vía GPRS al endpoint del servidor de Plaspy y también puede soportar reportes por SMS para ciertas consultas o alertas. Cuando está configurado para reportes por GPRS, el equipo envía paquetes periódicos de posición a la dirección y puerto compartidos de Plaspy para que la plataforma presente datos de seguimiento en tiempo real e históricos.

- El dispositivo se apunta al dominio o IP del servidor de Plaspy para que los paquetes lleguen a d.plaspy.com o 54.85.159.138.
- Los paquetes se envían al puerto 8888, que Plaspy usa para todos los dispositivos.
- Puede elegir UDP o TCP cuando el equipo requiere una selección explícita de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador y se encarga de la decodificación al recibir los datos.
- Una vez que el reporte esté activo, usted podrá validar la visibilidad y la telemetría dentro de Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante, normalmente comandos SMS o el software de configuración de V-SUN, y confirme la contraseña del equipo.
2. Opcionalmente realice un reset de fábrica si necesita volver a los valores por defecto antes de provisionar.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y establezca el puerto 8888.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para reportes GPRS.
5. Configure el APN y las credenciales del APN que requiera el operador móvil.
6. Aplique o guarde la configuración y habilite los modos GPRS y GPS en el rastreador.
7. Reinicie el dispositivo si el firmware lo exige y luego valide que el equipo reporte a Plaspy y aparezca en la plataforma.

## Ejemplos de comandos de configuración

El TLT-7B suele configurarse enviando mensajes SMS desde un teléfono al dispositivo. Los comandos SMS públicos que se muestran a continuación están ordenados según el uso típico. La contraseña por defecto del equipo indicada en estos comandos es 0000.

1. Reset de fábrica opcional al inicio del proceso
```
*RESET#0000##
```

2. Configurar el APN del operador móvil
- Reemplace [apn] con el APN de su operador.
- Opcionalmente incluya [apnu] y [apnp] para usuario y contraseña del APN si el operador los requiere.
```
#803#0000#[apn]#[apnu]#[apnp]##
```
(Si su operador no requiere usuario ni contraseña del APN, envíe el comando sin los campos opcionales:
```
#803#0000#[apn]##
```)

3. Establecer el servidor GPRS a Plaspy usando la IP numérica y el puerto
```
#804#0000#54.85.159.138#8888##
```

4. Establecer el intervalo de actualización en movimiento (ejemplo según datos públicos del equipo)
```
#805#0000#120#1##
```

5. Establecer el intervalo de actualización en reposo (ejemplo según datos públicos del equipo)
```
#809#0000#120#1##
```

6. Habilitar modo GPRS para que el dispositivo envíe paquetes de datos
```
7100000
```

7. Habilitar modo GPS
```
2220000
```

Nota sobre los marcadores de posición
- [apn] es la cadena APN de su operador móvil.
- [apnu] y [apnp] son opcionales y corresponden al usuario y la contraseña del APN; sólo inclúyalos si su operador los requiere.

## Notas de configuración

- La sintaxis exacta de los SMS, los campos requeridos y los comandos disponibles pueden variar según la versión de firmware y la revisión de hardware. Siempre confirme los formatos de comando con el manual del dispositivo.
- Esta configuración pública del TLT-7B utiliza aprovisionamiento por SMS; algunos instaladores pueden usar una herramienta de configuración o conexión USB si el equipo lo soporta.
- Elija UDP o TCP según las condiciones de red y las capacidades del dispositivo. Plaspy acepta cualquiera de los dos y detectará automáticamente el protocolo del rastreador.
- Use exactamente los ajustes del servidor Plaspy mostrados arriba: dominio d.plaspy.com o IP 54.85.159.138 y puerto 8888.
- Tras aplicar los cambios, espere un breve periodo para que el dispositivo se registre en la red y comience a enviar paquetes GPRS antes de iniciar la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Configurar el V-SUN TLT-7B para que reporte a Plaspy ofrece una forma sencilla de centralizar la visibilidad de vehículos o activos. La combinación de aprovisionamiento por SMS y reportes por GPRS permite una configuración práctica en campo, mientras que Plaspy se encarga de la detección del protocolo y la presentación en plataforma para que los gestores de flota puedan monitorear ubicación, alertas e historial.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Por favor verifique los métodos específicos de configuración del dispositivo y el comportamiento del firmware más reciente con el fabricante en http://www.v-sun.cc/ ya que los pasos de instalación y la sintaxis de los comandos pueden cambiar con el tiempo.
