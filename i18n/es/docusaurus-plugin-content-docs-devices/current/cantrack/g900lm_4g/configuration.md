---
slug: /cantrack/g900lm_4g/configuration
id: g900lm_4g-configuration
sidebar_label: Configuration
title: CanTrack - G900LM-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CanTrack G900LM-4G y los ajustes de servidor Plaspy necesarios para integrar el dispositivo
keywords:
  - Configuración CanTrack G900LM-4G
  - Instalación G900LM-4G
  - Rastreador CanTrack Plaspy
  - Configuración rastreador Plaspy
  - Configuración servidor G900LM-4G
  - Configuración GT06 G900LM-4G
  - Guía configuración rastreador GPS
  - Instalación rastreador vehicular Plaspy
  - Seguimiento de flotas G900LM-4G
  - Guía configuración CanTrack
---

# CanTrack - Configuración G900LM-4G

Esta página explica el contexto público de configuración para usar el CanTrack G900LM-4G con Plaspy. Resume los ajustes de servidor de Plaspy requeridos, los prerrequisitos habituales para la instalación y recomendaciones prácticas de configuración basadas en las características de la familia de dispositivos y el conjunto de comandos publicado. Use esta guía para preparar el equipo y que pueda comunicarse con Plaspy para el rastreo en tiempo real y la supervisión de flotas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el cableado de instalación (4 pines o 8 pines) y las herramientas de configuración del proveedor. El G900LM-4G es un rastreador vehicular cableado con conectividad LTE/GSM, compatible con el protocolo estilo GT06 y con soporte para comandos remotos; siga la documentación del fabricante para la sintaxis específica de comandos y las precauciones de seguridad.

## Resumen de la configuración

Configurar el G900LM-4G para Plaspy significa preparar el rastreador para que reporte ubicación y estado al endpoint compartido de Plaspy, validar la conectividad de red y asegurar que el dispositivo aparezca en la plataforma Plaspy para mapas en vivo y alertas. El objetivo es un procedimiento fiable y reproducible que sitúe el equipo en el servidor y puerto comunes de Plaspy sin afectar las funciones de alarma y relé del dispositivo.

- Configure el dispositivo para que reporte al endpoint compartido de Plaspy y así la telemetría llegue a la plataforma.
- Ajuste el acceso a la red, incluyendo APN y cualquier configuración de la SIM que requiera el rastreador.
- Seleccione el modo de transporte que el dispositivo requiera (UDP o TCP) y configure el puerto de Plaspy.
- Verifique los reportes y las alarmas para que la ubicación y los eventos en vivo aparezcan en Plaspy.
- Guarde y, si es necesario, reinicie el equipo para que los cambios se apliquen.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el G900LM-4G para que reporte a Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores corresponden al endpoint público y al puerto que utilizan los dispositivos Plaspy. Ingrese el dominio o la IP según lo permita la configuración del rastreador y asegúrese de que el equipo esté configurado para usar el puerto 8888.

## Requisitos habituales antes de la instalación

- Una tarjeta SIM compatible con un plan de datos activo y los ajustes APN correctos para el operador móvil.
- Acceso al cableado del dispositivo (variante de 4 pines o 8 pines) y una conexión de alimentación estable dentro del rango de voltaje operativo del equipo.
- El método de configuración del fabricante: comandos SMS, herramienta local de configuración o software del proveedor según entregue CanTrack.
- Conocimientos básicos del conjunto de comandos del dispositivo y de los valores que requieran marcadores de posición (por ejemplo, valores de APN).
- Un entorno de prueba seguro para validar el reporte a Plaspy antes del despliegue completo.
- Acceso a las credenciales o la cuenta de Plaspy para verificar que el dispositivo aparezca en la plataforma.

## Cómo se conecta este rastreador a Plaspy

El G900LM-4G envía datos de ubicación y estado a Plaspy a través de GPRS/TCP-IP utilizando compatibilidad con protocolo del estilo GT06. Cuando se configura para reportar al servidor y puerto de Plaspy, los paquetes de telemetría y alarma llegan a Plaspy, donde la plataforma detecta automáticamente el protocolo del rastreador e interpreta los mensajes para el seguimiento en vivo y el registro de eventos.

- El rastreador transmite paquetes de ubicación periódicos al endpoint del servidor Plaspy.
- Alarmas como encendido, movimiento, exceso de velocidad y corte de alimentación se reportan a Plaspy para visibilidad inmediata.
- El control remoto del relé y las respuestas a comandos se envían por el mismo endpoint y puerto.
- Plaspy recibe la telemetría en el puerto compartido y asigna automáticamente los mensajes al protocolo correcto.
- Tras la configuración, el estado del dispositivo y los datos históricos estarán disponibles en la plataforma Plaspy para monitoreo e informes.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración CanTrack o al software proporcionado por el fabricante o vendedor (comandos SMS, herramienta de PC o utilidad móvil).
2. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del equipo.
3. Configure el puerto del servidor en 8888 en la configuración del rastreador.
4. Si el equipo requiere elegir un transporte, seleccione UDP o TCP y asegúrese de que coincida con la capacidad del dispositivo.
5. Configure el APN y cualquier valor relacionado con la SIM que el rastreador necesite para registrarse en la red móvil.
6. Aplique o guarde la configuración y, si la documentación del dispositivo lo indica, reinicie el equipo para que los cambios surtan efecto.
7. Valide que el equipo reporte a Plaspy verificando las actualizaciones de ubicación y estado entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

La familia G900LM-4G normalmente soporta comandos por SMS y comandos de plataforma para APN, servidor, consultas de posición, timers, control de relé y alarmas. La sintaxis exacta de los comandos puede variar según el firmware y las versiones regionales. Los ejemplos que siguen son nombres representativos de comandos y formas de ejemplo extraídas de la documentación de la familia de dispositivos; confirme la sintaxis exacta con la documentación del fabricante antes de su uso.

- Set APN (reemplazar {{apn}} por el APN de su operadora):
```
APN,{{apn}}
```
- Set server by domain or IP and port (reemplazar marcadores por valores reales si su firmware requiere sintaxis específica):
```
SERVER,d.plaspy.com,8888
```
o
```
SERVER,54.85.159.138,8888
```
- Query current position (ejemplo de comando de consulta):
```
WHERE#
```
- Request device status or version:
```
STATUS#
```
- Configure reporting timers (forma de ejemplo):
```
TIMER,T1,T2#
```
- Remote relay control example (etiquetado como familia de comandos RELAY en la documentación):
```
RELAY,A#
```
- Alarm toggles and basic alarm commands (ejemplos de etiquetas disponibles):
```
SENALM#
POWERALM#
ACCALM#
```

Nota: Los prefijos, delimitadores y terminadores exactos pueden variar según el firmware. Use estos ejemplos como referencia y verifique el formato SMS o de la herramienta con la documentación de CanTrack.

## Notas de configuración

- Las variantes de firmware y de hardware regional pueden modificar la sintaxis de comandos y las funciones soportadas; confirme siempre con la documentación vigente de CanTrack para su variante de dispositivo.
- Elija UDP o TCP conforme a las indicaciones del instalador y a las limitaciones de la red; Plaspy acepta ambos en el puerto compartido 8888 y detecta automáticamente el protocolo del rastreador.
- Al usar configuración por SMS, asegúrese de que la SIM tenga permisos suficientes para enviar y recibir SMS y de que los comandos remotos estén habilitados en los ajustes del dispositivo si fuera necesario.
- Guarde los cambios y realice un reinicio controlado cuando el fabricante lo indique para asegurar que los ajustes se apliquen.
- Valide la conectividad monitorizando la entrada del dispositivo y las actualizaciones en vivo en Plaspy después de la configuración.

## Por qué usar Plaspy con esta configuración

Utilizar el CanTrack G900LM-4G con Plaspy ofrece a las organizaciones visibilidad continua de la ubicación de los vehículos, su estado y los eventos de alarma mediante un único endpoint de servidor compartido. Las opciones de instalación cableada del rastreador, su compatibilidad con el protocolo estilo GT06 y las capacidades de comando remoto encajan bien con la detección automática de protocolos y el manejo centralizado de telemetría de Plaspy para la supervisión de flotas y flujos de trabajo anti-robo.

To learn more about how Plaspy works with compatible trackers and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation instructions consult the official CanTrack documentation at https://www.cantrackgps.com/ to verify current setup details and manufacturer guidance.
