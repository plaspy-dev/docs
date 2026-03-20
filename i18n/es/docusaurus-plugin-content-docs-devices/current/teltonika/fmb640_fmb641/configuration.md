---
slug: /teltonika/fmb640_fmb641/configuration
id: fmb640_fmb641-configuration
sidebar_label: Configuration
title: Teltonika - FMB640-FMB641 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FMB640 y FMB641 con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Teltonika FMB640 FMB641
  - Configuración Teltonika FMB640
  - Configuración FMB641 para Plaspy
  - Configuración rastreador Teltonika
  - Configuración servidor FMB640
  - Configuración GPS Plaspy
  - Configuración plataforma GPS Teltonika
  - Guía instalación FMB640 FMB641
  - Integración Teltonika con Plaspy
  - Rastreo de flotas Teltonika
---

# Teltonika - Configuración FMB640 y FMB641

Esta página documenta el contexto de configuración pública para usar los rastreadores Teltonika FMB640 y FMB641 con Plaspy. Se centra en los ajustes de servidor compartido de Plaspy, los pasos prácticos para apuntar un equipo a Plaspy y el comando de ejemplo que el fabricante publica para una configuración básica de parámetros.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración Teltonika que utilice. El comando de ejemplo incluido en esta página es un formato público de Teltonika para configurar el APN y los parámetros del servidor y debe ajustarse a su entorno.

## Resumen de la configuración

Este proceso prepara el rastreador para comunicarse con Plaspy, verifica la conectividad y hace que el equipo sea visible en la plataforma Plaspy. El objetivo es definir el APN del equipo y el endpoint del servidor, confirmar el protocolo de transporte y validar que Plaspy está recibiendo reportes de la unidad.

- Configure el APN y las credenciales de red del equipo para que pueda establecer conexión de datos.
- Apunte el rastreador al endpoint del servidor Plaspy para telemetría y reportes de eventos.
- Seleccione el transporte requerido (UDP o TCP) y use el puerto común de Plaspy para todos los dispositivos.
- Aplique o envíe la configuración usando las herramientas Teltonika o comandos SMS/GPRS.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy y reporta ubicación y eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto del rastreador.

## Requisitos típicos antes de la configuración

- Acceso al equipo o a la interfaz del instalador (Teltonika Configurator, SMS u otra herramienta del fabricante).
- Equipo alimentado y accesible para configuración, o un instalador que realice la puesta en marcha in situ.
- SIM o eSIM activa con plan de datos y la configuración APN correcta del operador móvil.
- Conocimiento de la versión de firmware del equipo; debe ser lo suficientemente reciente para aceptar comandos remotos si va a usar SMS o comandos GPRS.
- Acceso a su cuenta Plaspy o consola organizacional para verificar que el equipo reporta tras la configuración.
- Conocimientos básicos para enviar comandos Teltonika por el método elegido (Configurator, SMS o GPRS).

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMB640 o FMB641 establecerá una conexión de datos usando el APN del equipo y enviará telemetría al endpoint y puerto compartidos de Plaspy. Plaspy luego analiza los datos entrantes mediante detección automática de protocolo para mostrar ubicación, eventos y estado.

- El rastreador usa datos móviles configurados para conectarse a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección realizada durante la configuración.
- Plaspy detecta automáticamente el protocolo y procesa los mensajes del rastreador.
- Los reportes de ubicación y eventos enviados por el equipo se hacen visibles en la plataforma Plaspy para monitoreo y alertas.
- Tras una configuración exitosa, el dispositivo debería aparecer en Plaspy en un breve período si la conectividad de red es válida.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Teltonika o al software correspondiente, como Teltonika Configurator, o use el método de comandos SMS/GPRS soportado.
2. Ingrese el servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del equipo.
3. Configure el puerto 8888 para la entrada del servidor principal (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP si el equipo requiere una selección explícita del transporte.
5. Agregue las credenciales APN y cualquier parámetro de red necesario para que el equipo pueda acceder a Internet.
6. Aplique o guarde la configuración en el equipo y reinícielo si el firmware lo requiere.
7. Valide que el equipo reporta a Plaspy y que la ubicación y la telemetría básica son visibles en su cuenta Plaspy.

## Comandos de ejemplo de configuración

Teltonika proporciona un comando de ejemplo público para establecer parámetros básicos de red y servidor. El formato del comando que se muestra a continuación se usa comúnmente por SMS o por las herramientas del fabricante. Mantenga los marcadores de posición y reemplácelos por los valores de su operador.

- Ejemplo de comando Teltonika setparam:

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Notas sobre los marcadores de posición y su uso:
  - [apn] es el nombre del APN del operador móvil requerido para la conectividad de datos.
  - [apnu] es el nombre de usuario del APN si su operador lo requiere; dejar en blanco si no es necesario.
  - [apnp] es la contraseña del APN si la requiere el operador; dejar en blanco si no es necesario.
  - d.plaspy.com y 8888 son el dominio y el puerto del servidor Plaspy al que el rastreador enviará los reportes.
  - El comando puede enviarse vía Teltonika Configurator, SMS o por un canal de comando GPRS soportado, según la configuración del dispositivo y su firmware.
  - Verifique el significado de los parámetros y cualquier bandera de transporte en la documentación Teltonika para la versión de firmware de su equipo antes de enviar comandos.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los números de parámetro o los formatos de comando; siempre verifique la documentación Teltonika para el firmware exacto que tenga instalado.
- Elija UDP o TCP según sus necesidades de red y fiabilidad. Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- La configuración por SMS es comúnmente soportada por los equipos Teltonika; use canales seguros y limite la exposición de SMS en entornos de producción.
- Si prefiere usar la IP del servidor Plaspy en lugar del dominio, puede sustituir 54.85.159.138 por d.plaspy.com en su configuración, pero verifique límites de longitud de comando o formato en firmwares antiguos.
- Mantenga un registro de los ajustes aplicados y pruebe cada equipo después de la configuración para confirmar conectividad y reportes.

## Por qué usar Plaspy con esta configuración

Usar los Teltonika FMB640 o FMB641 con Plaspy ofrece a las organizaciones una forma práctica de centralizar la telemetría de dispositivos, rastrear movimientos de vehículos y monitorear eventos críticos con una configuración de servidor consistente. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican el despliegue al reducir las variaciones de configuración por dispositivo.

Para obtener más información sobre Plaspy y cómo funciona con los rastreadores Teltonika, visite https://www.plaspy.com. Para las instrucciones más recientes específicas por dispositivo, notas de firmware y referencias de comandos del fabricante, consulte https://www.teltonika-gps.com/ ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.
