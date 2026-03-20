---
slug: /teltonika/fmm001/configuration
id: fmm001-configuration
sidebar_label: Configuration
title: Teltonika - FMM001 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FMM001 con Plaspy, incluyendo ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración Teltonika FMM001
  - FMM001 configuración Plaspy
  - configuración rastreador Teltonika
  - configuración servidor FMM001
  - rastreador OBD Teltonika
  - comandos SMS FMM001
  - configuración dispositivo Plaspy
  - rastreo vehicular FMM001
  - configuración rastreador GNSS
  - gestor de flotas rastreador
---

# Teltonika - Configuración del FMM001

Esta página describe la información pública necesaria para usar el rastreador Teltonika FMM001 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, muestra cómo se aplican esos parámetros en el dispositivo y presenta un ejemplo de comando SMS que aparece en la documentación pública de Teltonika.

Plaspy utiliza ajustes de servidor comunes entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como Teltonika Configurator, FOTA o comandos SMS. Use esta guía como referencia práctica de configuración pública y verifique los detalles específicos del equipo en la documentación oficial de Teltonika.

## Resumen de la configuración

Esta configuración prepara el FMM001 para enviar ubicación y datos de dispositivo a Plaspy configurando el APN del dispositivo y apuntando el rastreador a los endpoints de Plaspy en el puerto 8888. El comando de ejemplo incluido abajo muestra cómo aplicar parámetros básicos con una sola instrucción que contiene marcadores para el APN y la dirección del servidor Plaspy.

- Proporcionar credenciales APN para que el rastreador tenga conectividad GPRS o LTE CAT M1
- Establecer el dominio o IP del servidor Plaspy para que el rastreador envíe telemetría a Plaspy
- Configurar el puerto 8888 y seleccionar el método de transporte si el dispositivo lo requiere
- Validar que el dispositivo esté reportando activamente al servicio Plaspy y sea visible en su cuenta
- Usar herramientas del fabricante o comandos SMS para aplicar y verificar los ajustes

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

## Requisitos habituales antes de la configuración

- Un dispositivo Teltonika FMM001 alimentado y accesible que soporte SMS y datos GPRS o LTE
- Una SIM activa con datos y SMS habilitados y un APN disponible
- Acceso a métodos de configuración de Teltonika como Teltonika Configurator, herramientas FOTA, la app FMBT o la capacidad de enviar comandos SMS
- Credenciales y acceso a su cuenta Plaspy para confirmar la visibilidad del dispositivo tras la configuración
- Conocimiento básico del IMEI o identificador del equipo para poder vincular el dispositivo físico a la plataforma Plaspy
- Nota: la versión de firmware y la disponibilidad de herramientas pueden afectar pasos específicos

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMM001 envía ubicación, eventos y estado del dispositivo al endpoint compartido de Plaspy y al puerto indicado. Plaspy recibe estos mensajes y usa la detección automática de protocolo para interpretar los datos del rastreador y mostrarlos en la plataforma.

- El rastreador envía telemetría a d.plaspy.com o directamente a 54.85.159.138
- Todos los mensajes se envían al puerto 8888, que Plaspy monitorea para recibir dispositivos
- El dispositivo puede configurarse para usar transporte UDP o TCP en el mismo puerto según sea necesario
- Plaspy detecta automáticamente el protocolo del rastreador e interpreta los datos entrantes
- Una vez reportando, el dispositivo queda visible en Plaspy para monitoreo e informes de eventos

## Flujo típico de configuración

1. Acceda al método oficial de configuración Teltonika que prefiera, como Teltonika Configurator, FOTA Web, la app FMBT o comandos SMS.
2. Ingrese el dominio de servidor d.plaspy.com o la IP 54.85.159.138 en el campo de host del servidor.
3. Configure el puerto del servidor en 8888, que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Proporcione los ajustes APN para la SIM usando los campos APN, APN user y APN password según sea necesario.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si la herramienta lo indica.
7. Valide que el dispositivo esté reportando a Plaspy revisando la actividad en su cuenta y verificando ubicaciones o eventos recientes.

## Comandos de configuración de ejemplo

Para establecer los parámetros básicos en su equipo Teltonika, envíe el siguiente comando SMS o ingréselo en el terminal en el formato soportado por el fabricante. Este comando público define valores de APN y apunta el dispositivo a Plaspy.

- Explicación de los marcadores
  - {{apn}} = el APN de datos de su SIM
  - {{apnu}} = usuario APN si su operador lo requiere
  - {{apnp}} = contraseña APN si su operador la requiere

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Notas sobre el comando de ejemplo
  - El comando anterior se proporciona como guía pública de Teltonika para establecer conectividad básica y parámetros de servidor.
  - Reemplace los marcadores de APN por los valores proporcionados por su operador móvil.
  - El host del servidor es d.plaspy.com y el puerto del servidor es 8888 según lo requiere Plaspy.
  - Envíe este comando mediante el método soportado por Teltonika para su dispositivo, como SMS o una utilidad de configuración.

## Notas de configuración

- Teltonika ofrece múltiples canales de configuración, incluyendo herramientas Configurator, FOTA y comandos SMS; elija el método que se ajuste a su despliegue y firmware.
- Las versiones de firmware y las revisiones de dispositivo pueden cambiar los IDs de parámetros o los comandos disponibles; confirme siempre los nombres e IDs de parámetros en la documentación de Teltonika para su versión.
- Cuando exista la opción, UDP puede ser más simple para telemetría de baja latencia, mientras que TCP ofrece fiabilidad de sesión; seleccione el transporte que se adecue a su red y requisitos de monitoreo.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el equipo al endpoint compartido.
- Si usa comandos SMS para la configuración, confirme el acceso SMS y los formatos de comando en el dispositivo antes de enviar actualizaciones masivas.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Teltonika FMM001 ayuda a las organizaciones a consolidar la visibilidad de vehículos, la notificación de eventos y el monitoreo de dispositivos bajo una configuración de servidor única. Al apuntar el FMM001 al endpoint compartido de Plaspy y usar el mismo puerto en todos los dispositivos, las implementaciones son más fáciles de estandarizar y mantener.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad y la telemetría de dispositivos, visite https://www.plaspy.com. Para detalles específicos de configuración por dispositivo, comportamiento de firmware y referencias oficiales de comandos del Teltonika FMM001, verifique la información actual en el sitio del fabricante https://www.teltonika-gps.com/
