---
slug: /sinotrack/st_909l/configuration
id: st_909l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-909L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack ST-909L con el servidor Plaspy y ajustes compartidos
keywords:
  - Configuración SinoTrack ST-909L
  - Instalación ST-909L
  - SinoTrack ST-909L Plaspy
  - Configuración servidor ST-909L
  - Configuración SMS ST-909L
  - Configuración rastreador GPS SinoTrack
  - Ajustes APN ST-909L
  - Configuración rastreador Plaspy
  - Configuración rastreo vehicular
  - Rastreo de flotas ST-909L
---

# SinoTrack - Configuración ST-909L

Esta página describe el contexto público de configuración para usar el SinoTrack ST-909L con Plaspy. Resume los pasos prácticos y de acceso público para apuntar un ST-909L a Plaspy, de modo que el dispositivo pueda transmitir ubicaciones y telemetría de alarmas a su cuenta de Plaspy. El contenido aquí está pensado para ayudar a técnicos y responsables de flotas a preparar el dispositivo para la integración con Plaspy mediante comandos SMS del fabricante y prácticas comunes de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, esta página incluye los comandos SMS del ST-909L que publica el fabricante para APN, servidor y verificación, para que pueda aplicar los ajustes públicos de Plaspy y validar la conectividad.

## Resumen de la configuración

El objetivo de la configuración es preparar el ST-909L para que se comunique de forma fiable con Plaspy y reporte ubicación en tiempo real, alarmas y actualizaciones de estado. La configuración suele implicar establecer el APN de datos móviles, apuntar el dispositivo al endpoint y puerto del servidor Plaspy, seleccionar el tipo de transporte si es necesario y verificar que el dispositivo reporta correctamente.

- Configure las credenciales APN para que el dispositivo use la SIM del vehículo para reportes GPRS.
- Establezca el endpoint del servidor Plaspy para que la telemetría se envíe directamente a Plaspy.
- Seleccione UDP o TCP en el dispositivo si se solicita y use el puerto 8888.
- Verifique los ajustes del dispositivo usando el comando de verificación del fabricante y compruebe que los datos llegan a Plaspy.
- Confirme que las alarmas y las actualizaciones periódicas aparezcan en Plaspy para visibilidad operativa.

## Ajustes de servidor de Plaspy

Use estos ajustes públicos de Plaspy al configurar el ST-909L:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un ST-909L con alimentación instalado o conectado a la energía del vehículo para que el dispositivo pueda recibir comandos SMS y registrarse en la red móvil.
- Una tarjeta SIM activa y compatible con datos móviles y las credenciales APN correctas del operador móvil elegido.
- Acceso al método de configuración por SMS del dispositivo o a la herramienta de configuración oficial de SinoTrack si el proveedor la facilita.
- La cuenta de Plaspy lista para recibir reportes de nuevos dispositivos, de modo que pueda validar el registro y la llegada de datos.
- Conocimiento del APN, usuario APN y contraseña APN que requiere su operador móvil.
- Un plan de pruebas para confirmar actualizaciones de ubicación, alarmas e informes periódicos después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El ST-909L se configura para enviar datos de ubicación y alarmas al endpoint y puerto compartidos del servidor Plaspy. Tras aplicar los ajustes de APN y servidor, el rastreador abre una conexión GPRS y transmite la telemetría a Plaspy para visibilidad en tiempo real en el mapa y procesamiento de eventos.

- El dispositivo envía paquetes periódicos de GPS y estado a la dirección del servidor Plaspy configurada.
- Eventos de alarma como violaciones de geocerca y exceso de velocidad se reenvían a Plaspy como alertas.
- El ST-909L se puede apuntar al servidor Plaspy mediante comandos SMS para establecer APN e IP/puerto del servidor.
- Plaspy recibe datos en el puerto compartido 8888 y detecta automáticamente el protocolo usado por el rastreador.
- Una vez reportando, el dispositivo es visible en Plaspy para historial de rutas, seguimiento en vivo y monitoreo de alarmas.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software, o prepárese para enviar comandos SMS de configuración según lo proporcionado por SinoTrack.
2. Ingrese el dominio o la IP del servidor Plaspy (d.plaspy.com o 54.85.159.138) en los ajustes de servidor del dispositivo.
3. Configure el puerto en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP en el dispositivo si el rastreador requiere elegir un tipo de transporte.
5. Aplique o guarde la configuración en el rastreador y, si usa SMS, asegúrese de que las respuestas del comando confirmen el éxito.
6. Reinicie el dispositivo si el firmware lo requiere o después de aplicar cambios en servidor/APN.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del dispositivo en la plataforma y confirmando que llegan las actualizaciones periódicas y las alarmas.

## Comandos de configuración de ejemplo

El ST-909L admite configuración por SMS. Los siguientes comandos son los comandos SMS públicos publicados por SinoTrack para configurar servidor, APN y verificación. Envíe estos comandos desde el número autorizado definido para el dispositivo.

- Paso inicial opcional o de recuperación para restaurar ajustes de fábrica (usar solo si es necesario):
```
RESET
```
- Ajustar la zona horaria del dispositivo a UTC 0:
```
8960000E00
```
- Establecer el APN del operador móvil (reemplace los marcadores con los valores de su operador):
```
8030000 {{apn}} {{apnu}} {{apnp}}
```
  - {{apn}} es el nombre APN proporcionado por el operador móvil.
  - {{apnu}} es el nombre de usuario APN si se requiere, dejar en blanco si no aplica.
  - {{apnp}} es la contraseña APN si se requiere, dejar en blanco si no aplica.

- Configurar el servidor GPRS para apuntar a Plaspy por IP y puerto:
```
8040000 54.85.159.138 8888
```
  - Esto configura el dispositivo para reportar directamente a Plaspy usando la IP pública y el puerto compartido 8888.
  - También puede usar d.plaspy.com si el dispositivo acepta nombres de dominio en los comandos de servidor.

- Establecer el intervalo de subida con motor encendido a 60 segundos:
```
8050000 60
```
- Establecer el intervalo de subida con motor apagado a 60 segundos:
```
8090000 60
```
- Cambiar el dispositivo al modo de datos GPRS:
```
7100000
```
- Verificar la configuración actual del dispositivo:
```
RCONF
```
  - El comando RCONF devuelve la configuración del dispositivo incluyendo el ID usado por el equipo y los ajustes actuales de servidor/APN para verificación.

## Notas de configuración

- Los comandos SMS anteriores son los comandos públicos disponibles proporcionados por SinoTrack. El comportamiento exacto y las respuestas pueden variar según la versión de firmware y la revisión del dispositivo.
- Puede configurar el dispositivo para usar UDP o TCP en el puerto 8888; elija el transporte si el firmware del dispositivo requiere una selección explícita. Plaspy detectará automáticamente el protocolo usado.
- Al usar los marcadores del APN, mantenga las llaves dobles como marcadores hasta que las reemplace con los valores reales del operador.
- Si utiliza el comando RESET, trátelo como un paso inicial o de recuperación ya que restaura la configuración de fábrica y puede borrar otros parámetros personalizados.
- La configuración por SMS es el método público soportado para este dispositivo; consulte el soporte de SinoTrack si su equipo admite herramientas de configuración adicionales.

## Por qué usar Plaspy con esta configuración

Configurar el SinoTrack ST-909L para reportar a Plaspy ofrece visibilidad centralizada para flotas y vehículos individuales, consolidando ubicación en tiempo real, alarmas e historial de rutas en una sola plataforma. Para organizaciones que requieren monitoreo profesional de flotas, gestión de alarmas y análisis histórico, apuntar dispositivos ST-909L a Plaspy permite operaciones más eficientes sin necesidad de cambiar la forma física del dispositivo ni la instalación básica.

Learn more about Plaspy and how it handles device telemetry and fleet management at https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and manufacturer instructions verify the latest documentation from SinoTrack at https://www.sinotrackgps.com/
