---
slug: /sinotrack/st_905_915/configuration
id: st_905_915-configuration
sidebar_label: Configuration
title: SinoTrack - ST-905/915 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack ST-905/915 y apuntarlo a Plaspy usando ajustes de servidor compartido
keywords:
  - Configuración SinoTrack ST-905 915
  - Configuración SinoTrack Plaspy
  - Configurar ST-905 Plaspy
  - Configuración rastreador GPS ST-915
  - Configuración servidor SinoTrack
  - Comandos SMS para rastreador GPS
  - Configuración GPRS rastreador
  - Rastreo de vehículos Plaspy
  - Configuración rastreador de activos
  - Guía configuración Sinotrack
---

# SinoTrack - ST-905/915 Configuración

Esta página describe el contexto público de configuración para usar el SinoTrack ST-905/915 con Plaspy. Resume los pasos y comandos de configuración prácticos y de acceso público que se usan para apuntar el rastreador a Plaspy, de modo que el dispositivo pueda reportar ubicación y estado a la plataforma. Use esta guía junto con la documentación del fabricante cuando sea necesario.

Plaspy emplea ajustes de servidor compartidos para los rastreadores soportados y detecta automáticamente el protocolo cuando el dispositivo se conecta. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos y ejemplos aquí deben tomarse como orientación general y debe verificar los detalles con la documentación de su firmware y proveedor.

## Resumen de la configuración

Configurar el ST-905/915 para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos al servidor de Plaspy y garantiza que el equipo sea alcanzable y visible en la plataforma. El flujo público de configuración del ST-905/915 se suele realizar enviando comandos SMS desde un teléfono móvil al rastreador o utilizando la herramienta de configuración del fabricante, según lo disponible.

- Restablezca o confirme los ajustes de fábrica si es necesario para asegurar un estado de configuración conocido antes de añadir los ajustes de Plaspy.
- Configure la zona horaria y el APN correctos para que el rastreador pueda conectarse a la red GPRS del operador móvil.
- Apunte el rastreador al endpoint y puerto del servidor de Plaspy para que los datos lleguen a la plataforma.
- Habilite el modo GPRS y ajuste los intervalos de reporte para que el rastreador suba actualizaciones a Plaspy.
- Verifique los ajustes actuales del dispositivo con el comando de verificación para confirmar el ID RCONF y la configuración del servidor.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de servidor al configurar el ST-905/915 para Plaspy. Plaspy usa el mismo puerto para todos los dispositivos soportados y realiza detección automática del protocolo cuando un rastreador se conecta.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporta transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un dispositivo ST-905/915 con batería cargada y encendido, con una tarjeta SIM activa y servicio GPRS habilitado.
- Capacidad de enviar SMS para mandar comandos de configuración al rastreador si se usa la configuración por SMS.
- El APN del operador, y usuarios y contraseña del APN si son necesarios para la tarjeta SIM, para configurar el acceso GPRS.
- Acceso al método de configuración oficial del fabricante o a la documentación del ST-905/915 para conocer la sintaxis de los comandos y el comportamiento del dispositivo.
- Herramientas básicas para monitorear la conectividad, como recibir respuestas SMS de estado del rastreador o revisar los registros de conexiones entrantes en la plataforma.
- Paciencia por posibles demoras de propagación y registro en la red mientras el dispositivo cambia a modo GPRS.

## Cómo se conecta este rastreador a Plaspy

El ST-905/915 se configura para reportar al endpoint y puerto compartido de Plaspy a través de la red de datos móviles. Una vez que el GPRS esté habilitado y el servidor configurado, el rastreador intentará abrir una sesión TCP o UDP hacia Plaspy y la plataforma detectará automáticamente el protocolo para que el dispositivo aparezca en el sistema.

- El rastreador usa el APN configurado para registrarse en la red GPRS del operador móvil.
- El dispositivo se apunta a Plaspy mediante la configuración del dominio del servidor o la IP del servidor y el puerto compartido.
- Tras cambiar a modo GPRS, el rastreador abrirá una conexión a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy recibe las conexiones entrantes y utiliza detección automática de protocolo para interpretar los mensajes del rastreador.
- Una conexión y reporte exitosos hacen que el dispositivo sea visible y utilizable en Plaspy para el monitoreo de ubicación y eventos.

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante para el ST-905/915 (comandos SMS o herramienta del proveedor) y confirme la sintaxis de los comandos.
2. Restablezca la configuración de fábrica si necesita una base limpia o si así lo recomienda el instalador.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración de servidor del dispositivo.
4. Establezca el puerto del dispositivo en 8888.
5. Seleccione el transporte UDP o TCP en el dispositivo si este requiere elegir el tipo de transporte.
6. Configure el APN del dispositivo y los parámetros GPRS usando los valores del operador APN, usuario y contraseña donde corresponda.
7. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para activar los cambios de GPRS.
8. Valide que el dispositivo reporte a Plaspy revisando la conectividad en la plataforma Plaspy y usando cualquier comando de verificación del dispositivo como RCONF.

## Comandos de configuración de ejemplo

Los comandos públicos de configuración del ST-905/915 mostrados a continuación se envían comúnmente al dispositivo vía SMS. Conserve los marcadores de posición y reemplácelos por los valores de su operador cuando corresponda. Los comandos se muestran en el orden recomendado para la configuración inicial.

- Restablecimiento inicial opcional a valores de fábrica (use solo si necesita restaurar los valores por defecto)
```text
RESET
```

- Establecer la zona horaria a UTC 0
```text
8960000E00
```

- Configurar el APN para la conectividad del operador. Reemplace los marcadores según corresponda:
  - [apn] es el APN del operador móvil
  - [apnu] es el usuario del APN si se requiere (dejar en blanco si no aplica)
  - [apnp] es la contraseña del APN si se requiere (dejar en blanco si no aplica)
```text
8030000 [apn] [apnu] [apnp]
```

- Configurar el servidor GPRS para apuntar a Plaspy usando la IP del servidor y el puerto 8888
```text
8040000 54.85.159.138 8888
```

- Establecer intervalo de reporte cuando el dispositivo está encendido
```text
8050000 60
```

- Establecer intervalo de reporte cuando el dispositivo está apagado
```text
8090000 60
```

- Cambiar el rastreador a modo GPRS para que intente la conexión de datos
```text
7100000
```

- Verificar la configuración actual y obtener el ID del dispositivo usado para la identificación en Plaspy
```text
RCONF
```

Nota: Los comandos se muestran como ejemplos públicos proporcionados por el fabricante. Al enviar comandos SMS, confirme la sintaxis exacta con la versión de firmware de su equipo y la documentación del proveedor.

## Notas de configuración

- La configuración por SMS es compatible con el ST-905/915 y se muestra arriba; las herramientas de proveedor también pueden ofrecer las mismas opciones a través de una interfaz de configuración.
- Diferentes versiones de firmware o revisiones de hardware pueden usar formatos de comando ligeramente distintos o requerir un orden de parámetros diferente. Confirme con la documentación oficial del fabricante antes de desplegar en masa.
- Elija UDP o TCP según la preferencia de la red o del instalador; Plaspy acepta cualquiera de los dos transportes en el puerto compartido y detectará el protocolo automáticamente.
- Verifique siempre los valores de APN de su operador antes de configurar el dispositivo para garantizar la conectividad GPRS.
- Permita varios minutos para el registro en la red y el establecimiento de la sesión GPRS después de cambiar a modo GPRS.

## Por qué usar Plaspy con esta configuración

Utilizar el ST-905/915 con Plaspy ofrece una forma sencilla de recibir reportes de ubicación y estado desde dispositivos en campo, apoyándose en un único endpoint y puerto de servidor compartido. Configurar el dispositivo con los ajustes de servidor de Plaspy y cambiar a modo GPRS permite un reporte continuo de datos y visibilidad en la plataforma para que administradores de flotas y activos puedan monitorear los dispositivos en casi tiempo real.

Para saber más sobre Plaspy y cómo se integra con una amplia gama de rastreadores visite https://www.plaspy.com. Para los comandos específicos más actualizados del equipo Sinotrack, notas de firmware y guías de instalación, confirme los detalles en el sitio del fabricante https://www.sinotrackgps.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
