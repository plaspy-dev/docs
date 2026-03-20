---
slug: /teltonika/fmc640/configuration
id: fmc640-configuration
sidebar_label: Configuration
title: Teltonika - FMC640 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Teltonika FMC640 y reportarlo a Plaspy con ajustes de servidor compartido y comandos de ejemplo
keywords:
  - Configuración Teltonika FMC640
  - Instalación Teltonika FMC640
  - FMC640 Plaspy
  - Configuración de servidor FMC640
  - Configuración de rastreador Teltonika
  - Configuración GPS FMC640
  - Configuración de software de rastreo FMC640
  - Rastreo de flotas FMC640
  - Configuración plataforma GPS Teltonika
  - Configuración de dispositivo Plaspy
---

# Teltonika - FMC640: Configuración

Esta página documenta el contexto público de configuración para usar el Teltonika FMC640 con Plaspy. Se enfoca en los ajustes compartidos del servidor Plaspy y en los pasos prácticos y comandos de ejemplo que puede usar para apuntar un dispositivo FMC640 al endpoint de Plaspy. Cuando aplica, incluimos un comando SMS de ejemplo tomado de notas públicas de configuración del modelo.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el dispositivo fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor como Teltonika Configurator o comandos SMS. Use esta página como un punto de partida práctico y verifique los detalles específicos del dispositivo con la documentación oficial de Teltonika cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es preparar el FMC640 para que reporte de forma confiable posición y estado a la plataforma Plaspy. Esto implica configurar el APN y el endpoint del servidor, elegir el método de transporte si es necesario y validar la conectividad para que el activo sea visible en Plaspy.

- Configure las credenciales APN para que el dispositivo tenga conexión de datos activa o capacidad SMS para comandos remotos.
- Apunte el dispositivo al dominio o IP del servidor de Plaspy y establezca el puerto compartido que utiliza Plaspy.
- Seleccione el modo de transporte soportado por su instalación si el dispositivo requiere elección de transporte.
- Aplique y guarde la configuración usando Teltonika Configurator, SMS u otro método oficial, y luego valide el reporte en Plaspy.
- Confirme la visibilidad del dispositivo y la telemetría básica en la plataforma Plaspy tras una conexión exitosa.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los ajustes públicos de conexión de Plaspy usados para dispositivos FMC640. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles e intentará detectar el protocolo del rastreador de forma automática.

## Requisitos típicos antes de la configuración

- Alimentación confiable al FMC640 y una instalación de hardware completada según las indicaciones de Teltonika.
- Una SIM activa con datos y opcionalmente capacidad SMS si planea usar comandos SMS para la configuración.
- Acceso al método oficial de configuración de Teltonika que prefiera, por ejemplo Teltonika Configurator, FOTA Web o comandos SMS.
- Credenciales APN del operador móvil representadas por marcadores como [apn], [apnu] y [apnp].
- Acceso a la cuenta Plaspy o a los datos de incorporación para poder confirmar que el dispositivo aparece después de la configuración.
- Conocimientos básicos sobre si su instalación usará transporte UDP o TCP para la comunicación rastreador-servidor.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMC640 envía datos de dispositivo y posición al endpoint y puerto compartido de Plaspy para que el dispositivo sea visible y rastreable en la plataforma. Plaspy se encarga de detectar el protocolo del dispositivo y permite que los datos entrantes se procesen para monitoreo e informes.

- El dispositivo reporta a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- Los datos se transmiten por el transporte elegido, UDP o TCP, según la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el registro del dispositivo.
- Una vez conectado, las actualizaciones de ubicación y los eventos del dispositivo estarán disponibles para monitoreo de flotas y supervisión operativa.

## Flujo de configuración común

1. Acceda al método oficial de configuración de Teltonika como Teltonika Configurator, FOTA Web o la interfaz de comandos SMS.
2. Configure las credenciales APN del dispositivo usando los marcadores proporcionados para su operador (por ejemplo [apn], [apnu], [apnp]).
3. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 según su preferencia.
4. Establezca el puerto en 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
5. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del fabricante lo requiere.
7. Valide que el FMC640 reporte correctamente a Plaspy y que el dispositivo aparezca en su cuenta Plaspy.

Si utiliza SMS para la configuración, siga las instrucciones de Teltonika para enviar comandos SMS de forma segura. Si usa el Configurator, atienda el flujo de trabajo recomendado y las notas de compatibilidad de firmware.

## Comandos de configuración de ejemplo

La configuración pública del modelo proporciona un comando SMS de ejemplo para establecer parámetros básicos en el dispositivo. Preserve los marcadores y reemplácelos con los valores específicos de su operador al enviar el comando.

- Ejemplo de comando de configuración por SMS

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando de ejemplo:
- [apn] es el nombre del APN del operador móvil.
- [apnu] es el nombre de usuario del APN cuando el operador lo exige.
- [apnp] es la contraseña del APN cuando el operador lo exige.
- El comando incluye d.plaspy.com como servidor y 8888 como puerto para apuntar el dispositivo al endpoint de Plaspy.
- El parámetro 2006 se relaciona con la selección de transporte o ajustes de protocolo en el dispositivo. Confirme el valor correcto para su firmware y elección de transporte consultando la documentación de Teltonika antes de cambiarlo.

Envíe el comando vía SMS al número de teléfono del dispositivo o use Teltonika Configurator si prefiere una interfaz por software. Siempre confirme que el dispositivo aceptó los nuevos parámetros y se reinició si es necesario.

## Notas de configuración

- Las versiones de firmware de Teltonika y el mapeo de parámetros pueden diferir. Verifique los números de parámetros y los valores permitidos en la documentación del Teltonika FMC640 antes de enviar comandos.
- La configuración por SMS es una opción pública y conveniente, pero confirme el acceso al dispositivo y la autorización de comandos para evitar cambios no deseados.
- Elija UDP o TCP según sus requisitos de red y servidor; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que no necesita puertos únicos por rastreador.
- Mantenga siempre el firmware y las herramientas actualizadas según las notas de lanzamiento de Teltonika para asegurar compatibilidad.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMC640 con Plaspy ofrece una vía sencilla para obtener visibilidad de flota y monitoreo operativo. Apuntar el dispositivo al endpoint y puerto compartido de Plaspy permite que las actualizaciones de ubicación y los eventos del dispositivo fluyan hacia una única plataforma donde pueden ser monitoreados, analizados y utilizados para mejorar la asignación, la planificación de rutas y la seguridad de los activos.

Para saber más sobre Plaspy y cómo procesa los datos de los rastreadores visite https://www.plaspy.com. Para métodos específicos del dispositivo, comportamiento de firmware y definiciones de parámetros verifique los detalles actuales en el sitio del fabricante https://www.teltonika-gps.com/
