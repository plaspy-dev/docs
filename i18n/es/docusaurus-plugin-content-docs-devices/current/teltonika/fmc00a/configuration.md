---
slug: /teltonika/fmc00a/configuration
id: fmc00a-configuration
sidebar_label: Configuration
title: Teltonika - FMC00A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Teltonika FMC00A y enviar datos a Plaspy con comandos y ajustes de servidor
keywords:
  - Teltonika FMC00A
  - configuración FMC00A
  - configuración Teltonika
  - instalación FMC00A
  - configuración servidor FMC00A
  - configuración rastreador Plaspy
  - integración GPS Plaspy
  - rastreador OBD Teltonika
  - seguimiento vehicular FMC00A
  - compatibilidad FMC00A Plaspy
---

# Teltonika - Configuración FMC00A

Esta página describe el contexto de configuración público para usar el rastreador Teltonika FMC00A con la plataforma Plaspy. Se enfoca en los ajustes de servidor prácticos y en ejemplos de comandos que suelen emplearse para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicación y datos OBD a la plataforma. Las indicaciones aquí están pensadas para usuarios técnicos que preparan el equipo para visibilidad de flota e integración con la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos exactos en el equipo fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas Teltonika que usted use, como Teltonika Configurator, FOTA, FOTA WEB o la app móvil FMBT. Use esta página como punto de partida práctico y confirme las acciones específicas del dispositivo contra la documentación oficial de Teltonika cuando sea necesario.

## Visión general de la configuración

El objetivo de esta configuración es preparar el FMC00A para comunicarse de forma fiable con Plaspy, de modo que la telemetría del vehículo y los parámetros OBD sean visibles en la plataforma. La configuración se centra en ajustar el APN y los detalles del servidor de red, seleccionar el transporte cuando sea necesario y validar que el dispositivo alcance el endpoint de Plaspy en el puerto compartido.

- Apuntar el rastreador al endpoint del servidor Plaspy para que envíe datos al host correcto.  
- Configurar el APN y cualquier autenticación de la SIM necesaria para la conexión celular del dispositivo.  
- Establecer el transporte y el puerto a los valores que Plaspy espera para que el servidor acepte los datos entrantes.  
- Validar que el equipo esté reportando a Plaspy y sea visible en la plataforma.  
- Utilizar las herramientas provistas por Teltonika o comandos SMS según corresponda a su despliegue y firmware.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP (your device may allow choosing one)  
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

## Requisitos típicos antes de la configuración

- Un dispositivo FMC00A instalado y con alimentación en el vehículo, con el puerto OBD disponible para conexión Plug & Play.  
- Una SIM celular activa con datos habilitados y los ajustes APN correctos para su operador móvil.  
- Acceso a las herramientas oficiales de configuración Teltonika o la posibilidad de enviar comandos SMS según sus prácticas de instalación.  
- Confirmación de la versión de firmware del dispositivo y cualquier orientación de Teltonika sobre los IDs de parámetros o la sintaxis SMS para su firmware.  
- Un método para monitorear la conectividad del dispositivo y validar que el equipo sea visible en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El FMC00A envía su telemetría y los datos derivados del OBD al endpoint del servidor Plaspy configurado en el dispositivo. Una vez que el servidor, el puerto y el transporte correctos estén establecidos, Plaspy recibe los mensajes entrantes y detecta automáticamente el protocolo del rastreador, de modo que el dispositivo aparece en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy.  
- Los datos del dispositivo se envían por el transporte elegido (UDP o TCP) al puerto 8888.  
- Plaspy realiza detección automática de protocolo para los rastreadores conectados.  
- Una conexión exitosa permite que posición del vehículo, parámetros OBD y mensajes de eventos aparezcan en Plaspy.  
- Si falla la conectividad, valide el APN y el estado de la SIM y luego verifique nuevamente la configuración del servidor y el puerto.

## Flujo de trabajo común para la configuración

1. Acceda al método o software de configuración oficial de Teltonika apropiado para su dispositivo y firmware (por ejemplo Teltonika Configurator, la app móvil FMBT o la interfaz de comandos por SMS).  
2. Ingrese el host del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos.  
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.  
5. Configure el APN y cualquier parámetro de autenticación de SIM requerido por su operador móvil.  
6. Aplique o guarde la configuración y reinicie el dispositivo si las herramientas Teltonika o el firmware lo requieren.  
7. Valide que el dispositivo reporte correctamente a Plaspy y aparezca en la plataforma.

## Comandos de configuración de ejemplo

A continuación se muestra un ejemplo público en formato de comando SMS, tomado de la guía del fabricante, para establecer parámetros clave. Los marcadores de posición se han preservado para los valores que usted debe suministrar.

- Example SMS command using domain name
```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Example SMS command using Plaspy server IP
```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:54.85.159.138;2005:8888;2006:1
```

Notas sobre los marcadores de posición y el uso del comando:
- {{apn}} es el nombre del APN del operador móvil requerido para datos.  
- {{apnu}} es el usuario del APN si su operador lo exige; dejar vacío si no aplica.  
- {{apnp}} es la contraseña del APN si se requiere; dejar vacío si no aplica.  
- El comando configura el servidor del dispositivo a d.plaspy.com o a la IP 54.85.159.138 y el puerto a 8888 tal como se muestra.  
- 2006 es un parámetro de transporte o protocolo usado por el conjunto de parámetros del dispositivo; el valor numérico y las opciones válidas pueden variar según el firmware, por lo que confirme el mapeo exacto en la documentación de firmware de su dispositivo.  
- Envíe comandos SMS desde un número autorizado o utilice las herramientas Teltonika según corresponda a su despliegue. Verifique siempre que el dispositivo reconozca el comando.

## Notas de configuración

- Los IDs de parámetros y la sintaxis SMS de Teltonika pueden cambiar entre versiones de firmware; confirme el mapeo de parámetros para su firmware específico antes de aplicar comandos.  
- Cuando tenga opción, UDP generalmente ofrece menor overhead mientras que TCP brinda mayor fiabilidad de conexión; seleccione el transporte que se ajuste a sus necesidades operativas y valide en Plaspy.  
- La configuración por SMS es útil para unidades remotas, pero también utilice Teltonika Configurator, FMBT o FOTA WEB para actualizaciones masivas o para operaciones conscientes del firmware.  
- Use el dominio de servidor d.plaspy.com cuando sea posible para permitir conmutación por DNS; la IP 54.85.159.138 está disponible como alternativa explícita.  
- Siempre pruebe con un solo dispositivo primero y confirme que el rastreador aparece en Plaspy antes de aplicar cambios a toda la flota.

## Por qué usar Plaspy con esta configuración

Configurar el Teltonika FMC00A para reportar a Plaspy brinda a las organizaciones una vía sencilla para recolectar la ubicación del vehículo y parámetros derivados del OBD en una plataforma centralizada. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad de configuración por dispositivo, ayudando a que las flotas logren incorporación más rápida y visibilidad fiable.

To learn more about Plaspy and how it integrates with trackers like the Teltonika FMC00A visit https://www.plaspy.com. For device specific configuration methods, firmware behavior, and the latest manufacturer guidance verify details on the official Teltonika site https://www.teltonika-gps.com/ as hardware and firmware can change over time.
