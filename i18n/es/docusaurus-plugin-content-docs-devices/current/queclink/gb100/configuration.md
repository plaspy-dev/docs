---
slug: /queclink/gb100/configuration
id: gb100-configuration
sidebar_label: Configuration
title: QuecLink - GB100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GB100 para Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - configuración QuecLink GB100
  - instalación QuecLink GB100 Plaspy
  - configuración rastreador GPS GB100
  - configuración servidor Plaspy
  - instalación rastreador de vehículo
  - comandos SMS GB100
  - configuración TCP UDP GB100
  - configuración dispositivo de flota
  - integración plataforma GPS Plaspy
  - configuración dispositivo QuecLink
---

# QuecLink - Configuración del GB100

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GB100 con Plaspy. Resume los ajustes de servidor prácticos, el flujo de trabajo típico de puesta en marcha y ejemplos de comandos SMS de dominio público cuando el dispositivo admite configuración por SMS. Use esta guía para preparar el dispositivo para reportar a Plaspy y comprender los pasos clave antes de la integración completa.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que usted utilice. Los comandos de ejemplo a continuación reflejan la sintaxis pública de configuración por SMS y conservan los marcadores de posición y la contraseña por defecto del dispositivo que aparecen en ese contenido público.

## Resumen de configuración

El objetivo de la configuración es garantizar que el GB100 entregue de forma confiable datos de posición y telemetría a Plaspy y sea visible en la plataforma. Para los dispositivos GB100 esto normalmente implica usar el canal de configuración del fabricante disponible, proporcionar los detalles APN de la red y apuntar el dispositivo a los ajustes de servidor de Plaspy para que el rastreador pueda establecer la conexión de datos.

- Prepare la alimentación y el acceso a la red del dispositivo para que pueda registrarse en la red móvil y recibir la configuración.
- Configure el APN y los parámetros GPRS para que el GB100 pueda abrir una sesión de datos por TCP o UDP.
- Configure el dispositivo con el endpoint del servidor de Plaspy para que la telemetría se envíe al backend compartido de Plaspy.
- Verifique que el dispositivo informe de forma regular y que la telemetría aparezca en los paneles de Plaspy.
- Opcionalmente active entradas de evento como SOS o alertas del acelerómetro según su caso de uso.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy so the platform detects the tracker protocol on connection

Estos valores son los ajustes públicos de Plaspy que se deben usar al configurar el GB100 para reportes en vivo.

## Requisitos habituales antes de la configuración

- Un dispositivo GB100 con batería cargada y alimentado, instalado o temporalmente habilitado para la configuración.
- Una tarjeta SIM activa con datos habilitados y el APN correcto del operador móvil.
- Acceso al método de configuración del GB100 que vaya a usar, como comandos SMS, software del fabricante o una herramienta MDM.
- Conocimiento de la contraseña del dispositivo cuando sea necesario; los ejemplos públicos por SMS usan la contraseña por defecto queclink.
- Un medio para recibir mensajes de confirmación del dispositivo, por ejemplo respuestas SMS o registros de conectividad.
- Los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888 deben estar disponibles desde su red para conexiones salientes.

## Cómo se conecta este rastreador a Plaspy

El GB100 envía posición y telemetría al endpoint de Plaspy usando sesiones de datos GPRS o mediante mensajes SMS como respaldo si así se configura. Una vez configurado con la información del servidor Plaspy, el rastreador establece una conexión con el endpoint compartido de Plaspy y comienza a enviar actualizaciones periódicas y mensajes de evento que la plataforma ingiere y utiliza en paneles y alertas.

- Se configura al dispositivo con el dominio o la IP del servidor Plaspy y el puerto para que pueda abrir conexiones salientes TCP o UDP.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, por lo que el GB100 se configura para usar el puerto 8888.
- El rastreador puede enviar mensajes periódicos de ubicación y reportes de eventos a Plaspy para visibilidad en tiempo real.
- Si se usan configuración por SMS o mecanismos de respaldo por SMS, las alertas críticas pueden enviarse por SMS en casos de cobertura límite.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, por lo que a menudo no es necesario seleccionar explícitamente el protocolo en la plataforma.

## Flujo de trabajo de configuración común

1. Acceda al método de configuración oficial de QuecLink que tenga disponible, como comandos SMS o la herramienta del proveedor.
2. Proporcione o confirme la contraseña del dispositivo; los ejemplos públicos por SMS usan la contraseña por defecto queclink.
3. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o como la IP del servidor 54.85.159.138.
4. Establezca el puerto de destino a 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN y los ajustes del operador usando los marcadores de posición [apn], [apnu] y [apnp] para su operador.
6. Aplique o guarde la configuración y reinicie el dispositivo cuando el procedimiento del proveedor lo requiera.
7. Valide que el dispositivo informe a Plaspy verificando los registros de conectividad o la plataforma para la telemetría entrante.

## Comandos de configuración de ejemplo

El GB100 puede configurarse vía SMS usando comandos estilo AT. La secuencia de ejemplo siguiente se toma de contenido público de configuración. Los comandos de muestra usan la contraseña del dispositivo queclink, indicada como valor por defecto en ese contenido público. El primer comando restablece la configuración y es opcional o se usa en la puesta a cero inicial cuando desea una línea de base conocida.

1. Restauración inicial opcional a valores de fábrica
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] es el nombre del APN de datos móviles para su SIM.
- [apnu] es el usuario del APN si el operador lo requiere; deje en blanco si no es necesario.
- [apnp] es la contraseña del APN si el operador la requiere; deje en blanco si no es necesaria.

4. Configurar el servidor GPRS a Plaspy usando ejemplos de dominio e IP y el puerto 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de actualización a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe cada comando SMS al número del dispositivo y espere cualquier respuesta de confirmación. Modifique los marcadores de posición y parámetros para que coincidan con los requisitos de su despliegue y los detalles del operador.

## Notas de configuración

- La configuración por SMS está soportada en los ejemplos públicos mostrados aquí, pero también pueden estar disponibles herramientas del fabricante o métodos OTA; elija el método que se ajuste a su flujo de trabajo.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos y el orden de los parámetros; siempre verifique el conjunto de comandos frente a la documentación actual de QuecLink cuando sea posible.
- Puede elegir transporte UDP o TCP en el GB100; Plaspy acepta ambos y la plataforma detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos en su configuración pública, así que asegúrese de que el tráfico saliente hacia el puerto 8888 esté permitido en su ruta móvil y de red.
- Si realiza una restauración de fábrica como paso inicial, tenga en cuenta que esto puede borrar otros ajustes personalizados, por lo que deberá aplicar los parámetros necesarios nuevamente.

## Por qué usar Plaspy con esta configuración

Usar el GB100 con Plaspy ofrece una ruta práctica para organizaciones que necesitan ubicación en tiempo real, telemetría de comportamiento del conductor y alertas de eventos en una sola plataforma. La telemetría del GB100, combinada con la detección de protocolo de dispositivos de Plaspy y un endpoint de servidor compartido, simplifica despliegues a gran escala al estandarizar los ajustes de servidor y reducir la carga de configuración por dispositivo.

Learn more about Plaspy and how it supports device integrations and fleet workflows at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and detailed technical specifications always verify setup and command reference information on the official QuecLink website https://www.queclink.com/ as manufacturer methods and firmware may change over time.
