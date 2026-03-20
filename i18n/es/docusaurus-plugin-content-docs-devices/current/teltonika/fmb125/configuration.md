---
slug: /teltonika/fmb125/configuration
id: fmb125-configuration
sidebar_label: Configuration
title: Teltonika - FMB125 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB125 con Plaspy, con ajustes de servidor, comandos y pasos para registrar el equipo en la plataforma
keywords:
  - configuración Teltonika FMB125
  - instalación FMB125 Plaspy
  - configuración rastreador Teltonika
  - configuración servidor FMB125
  - configuración rastreador GPS Teltonika
  - configuración software seguimiento FMB125
  - configuración plataforma GPS FMB125
  - instrucciones Teltonika FMB125
  - configuración SMS FMB125
  - integración Teltonika FMB125
---

# Teltonika - Configuración del FMB125

Esta página ofrece una guía pública para usar el tracker Teltonika FMB125 con Plaspy. Se concentra en los ajustes prácticos del servidor y en el flujo de configuración habitual necesarios para encaminar la telemetría y las posiciones GNSS al sistema Plaspy, y explica el ejemplo público de comando SMS para la configuración básica de parámetros.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker en la plataforma. Los pasos exactos en el lado del fabricante para aplicar estos ajustes pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración Teltonika que utilice, como comandos SMS, Teltonika Configurator o FOTA WEB.

## Resumen de configuración

Preparar un FMB125 para Plaspy implica configurar el dispositivo para que reporte al endpoint compartido de Plaspy y validar la conectividad para que el equipo aparezca en la plataforma. El proceso suele ser rápido cuando se conoce la dirección del servidor, el puerto y el transporte correcto, y cuando dispone de los datos APN y de acceso de la SIM instalada.

- Configure el equipo para enviar datos a Plaspy usando el endpoint y puerto compartidos.
- Proporcione o verifique los parámetros de conectividad celular como el APN para que el tracker pueda acceder a la red.
- Seleccione UDP o TCP como transporte en el tracker cuando la herramienta de configuración lo requiera.
- Aplique y guarde los ajustes en el dispositivo y reinícielo si el equipo o el firmware lo exige.
- Verifique que el tracker reporte a Plaspy y sea visible en la plataforma mediante la detección automática de protocolo de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos en Plaspy usan el mismo puerto

Estos valores son los ajustes públicos de Plaspy que debe usar al configurar el FMB125 para que la telemetría y las actualizaciones GNSS se entreguen a la plataforma.

## Requisitos habituales antes de la configuración

- Una unidad Teltonika FMB125 alimentada e instalada con el cableado y la antena adecuados.
- Una tarjeta SIM operativa y los datos de conectividad celular, incluido el APN, nombre de usuario y contraseña si son necesarios.
- Acceso a un método de configuración Teltonika, como comandos SMS, Teltonika Configurator o FOTA WEB.
- Conocimientos básicos sobre si en su entorno es preferible usar UDP o TCP como transporte.
- Acceso a una cuenta o a la plataforma Plaspy para confirmar que el dispositivo aparece tras la configuración.
- Conocer la versión de firmware del dispositivo para poder seguir el procedimiento de configuración correspondiente en la documentación de Teltonika.

## Cómo se conecta este tracker a Plaspy

Cuando se configura, el FMB125 envía paquetes de localización y telemetría al endpoint compartido y al puerto de Plaspy. Plaspy inspecciona los datos entrantes, determina automáticamente el protocolo e incorpora el flujo de datos del dispositivo para mapeo, alertas e informes históricos.

- Los reportes del dispositivo se dirigen a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- El tracker puede usar UDP o TCP como transporte según la opción configurada.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que no es necesario seleccionar el protocolo en la plataforma.
- Una vez que el equipo reporta, las posiciones GNSS y la telemetría quedan visibles en Plaspy para seguimiento en tiempo real, eventos y diagnósticos.
- El enfoque de puerto compartido implica que todos los dispositivos soportados por Plaspy usan el puerto 8888 y se gestionan mediante el mismo endpoint de ingestión.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Teltonika que prefiera, como enviar comandos SMS, usar Teltonika Configurator o FOTA WEB.
2. Ingrese la dirección del servidor d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto a 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Seleccione UDP o TCP como transporte en el equipo si la interfaz de configuración lo solicita.
5. Proporcione el APN y los parámetros celulares relacionados para que el dispositivo pueda conectarse a la red móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reinicio para aplicar cambios.
7. Valide que el equipo reporte a Plaspy y aparezca en la plataforma; verifique la llegada de telemetría y actualizaciones GNSS.

## Comandos de configuración de ejemplo

Los dispositivos Teltonika suelen soportar la configuración por SMS para parámetros básicos. El ejemplo público para establecer valores APN y parámetros del servidor Plaspy se muestra a continuación. Conserve los marcadores de posición y sustitúyalos por las credenciales APN de su operador.

- Ejemplo de comando SMS para configuración básica:
```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de marcadores y campos:
  - [apn] — reemplace por el APN de la tarjeta SIM (access point name) requerido por su operador móvil.
  - [apnu] — reemplace por el nombre de usuario del APN si su operador lo requiere; deje en blanco si no se usa.
  - [apnp] — reemplace por la contraseña del APN si es necesaria; deje en blanco si no se usa.
  - 2004:d.plaspy.com — establece el dominio del servidor en el endpoint de Plaspy.
  - 2005:8888 — establece el puerto del servidor en el puerto de Plaspy.
  - 2006:1 — parámetro de ejemplo usado comúnmente para habilitar la entrada del servidor o asignar prioridad según el firmware; consulte la documentación de Teltonika para el significado exacto en su versión de firmware.

Nota: También puede realizar la configuración equivalente usando Teltonika Configurator o FOTA WEB, donde los campos se presentarán en una interfaz gráfica en lugar de una única cadena SMS.

## Notas de configuración

- Las versiones de firmware y del Configurator varían; los IDs de parámetros y su comportamiento pueden diferir entre releases de firmware. Confirme el significado de cada parámetro en la documentación de Teltonika para su versión de firmware.
- Elija UDP o TCP según sus necesidades de red; ambos son aceptados por Plaspy, pero pueden comportarse de forma distinta sobre redes celulares.
- El comando SMS de ejemplo usa marcadores para las credenciales APN; complete estos valores con los datos de su operador antes de enviarlo.
- Plaspy requiere d.plaspy.com o 54.85.159.138 y el puerto 8888 para la ingestión. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo.
- Si usa SMS para la configuración, asegúrese de que el dispositivo sea accesible y de que la configuración por SMS esté habilitada en su firmware y en la SIM.

## Por qué usar Plaspy con esta configuración

Configurar el FMB125 para que reporte a Plaspy ofrece una vía directa para la localización en tiempo real del vehículo, la telemetría y el reporte de eventos en una sola plataforma. Para flotas que ya utilizan hardware Teltonika, esta configuración permite integrar el seguimiento GNSS, entradas por impulso y datos de sensores serie en Plaspy para monitoreo, geocercas y análisis histórico.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos Teltonika visite https://www.plaspy.com. Para los pasos específicos de configuración por dispositivo, notas de firmware y definiciones de parámetros consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ ya que los detalles de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
