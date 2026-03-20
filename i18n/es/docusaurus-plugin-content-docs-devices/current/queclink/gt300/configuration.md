---
slug: /queclink/gt300/configuration
id: gt300-configuration
sidebar_label: Configuration
title: QuecLink - GT300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GT300 y reportar a Plaspy con comandos SMS de ejemplo y ajustes de servidor
keywords:
  - Configuración QuecLink GT300
  - Configuración GT300 QuecLink
  - GT300 configuración Plaspy
  - Configuración servidor GT300
  - Configuración GPS QuecLink GT300
  - Comandos SMS QuecLink GT300
  - Ajustes APN GT300
  - Configuración GPRS GT300
  - Configuración plataforma seguimiento QuecLink GT300
  - Configuración protocolo GT300
---

# QuecLink - Configuración del GT300

Esta página describe el contexto público de configuración para usar el QuecLink GT300 con Plaspy. Explica los pasos prácticos y los comandos SMS públicos de ejemplo para apuntar el GT300 a los servidores de Plaspy, así como cómo se aplican esos ajustes para que el dispositivo reporte ubicaciones y eventos a la plataforma Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El modelo GT300 admite configuración por comandos SMS como se muestra en los ejemplos públicos a continuación; use la documentación del fabricante y el método de aprovisionamiento elegido para confirmar la sintaxis exacta de los comandos según el firmware de su unidad.

## Resumen de la configuración

Esta configuración prepara el GT300 para comunicarse de forma confiable con Plaspy para que el dispositivo entregue informes de GPS y eventos a la plataforma. El objetivo práctico es establecer el APN y las entradas del servidor GPRS, asegurarse de que el intervalo de reporte sea adecuado y habilitar cualquier entrada o reporte de alarma que necesite monitorear en Plaspy.

- Configurar el APN y el servidor GPRS para que apunten a Plaspy y el rastreador pueda enviar datos
- Definir el intervalo de reporte para equilibrar la frecuencia de actualización y el consumo de batería
- Habilitar las entradas o el reporte SOS que necesite visualizar en Plaspy
- Confirmar la zona horaria del dispositivo y la registro en la red para marcas de tiempo precisas
- Validar la entrega exitosa de paquetes a Plaspy y la visibilidad del dispositivo en la plataforma

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los ajustes públicos y compartidos usados por Plaspy para los dispositivos compatibles. Todos los dispositivos configurados para Plaspy usan el mismo puerto y la plataforma realiza detección automática del protocolo.

## Requisitos típicos antes de configurar

- Un dispositivo GT300 cargado y alimentado accesible para la configuración
- Acceso al método de configuración que soporte su unidad, como comandos SMS o una herramienta del fabricante
- Una SIM válida con datos habilitados y los datos APN apropiados de su operador móvil
- Acceso a la contraseña por defecto del GT300 si se requiere para la configuración (el ejemplo público usa la contraseña queclink)
- Cobertura de red en el área de instalación para que el dispositivo pueda registrarse en la red móvil
- Una cuenta en Plaspy y la capacidad de identificar el dispositivo después de que empiece a reportar en la plataforma

## Cómo se conecta este rastreador a Plaspy

El GT300 se configura para enviar mensajes de ubicación y eventos al endpoint y puerto del servidor Plaspy para que la plataforma pueda ingerir y mostrar los datos del dispositivo. Plaspy usa el dominio o la IP de servidor compartidos y el mismo puerto de escucha para todos los dispositivos, a la vez que determina automáticamente el protocolo correcto.

- El dispositivo envía paquetes GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El rastreador reporta posiciones GPS periódicas según el intervalo configurado
- Eventos de entrada como SOS o alarmas se envían a Plaspy para generación de alertas
- Plaspy recibe los datos entrantes y mapea los mensajes del GT300 al protocolo de la plataforma automáticamente
- La conectividad exitosa se valida cuando el dispositivo aparece en línea y envía actualizaciones de posición a Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración QuecLink para su unidad GT300, por ejemplo aprovisionamiento por comandos SMS o la herramienta del proveedor.
2. Introduzca la dirección del servidor Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor GPRS del dispositivo.
3. Establezca el puerto del servidor en 8888.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según su preferencia o requisitos de red.
5. Configure el APN y cualquier nombre de usuario o contraseña de APN que su operador móvil requiera.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método de configuración o el firmware lo exige.
7. Verifique que el GT300 reporte a Plaspy comprobando la conectividad del dispositivo y las actualizaciones de posición en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GT300 puede configurarse a través de comandos SMS. Los siguientes comandos de ejemplo públicos fueron proporcionados como una muestra de configuración por SMS. La muestra asume que la contraseña del dispositivo es queclink, que suele ser la predeterminada. Úselos en el orden indicado durante el aprovisionamiento inicial; restaurar valores de fábrica es opcional y se usa comúnmente solo en la configuración inicial o para resolución de problemas.

- Restaurar valores de fábrica (opcional en la configuración inicial)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Establecer la zona horaria a UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Establecer el APN del operador (reemplace los marcadores por los valores de su operador)
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Nota: [apn] es el APN del operador, [apnu] es el usuario del APN si se requiere y [apnp] es la contraseña del APN si se requiere. Mantenga los marcadores y reemplácelos por las credenciales de su operador.

- Configurar el servidor GPRS para Plaspy (se muestran dominio e IP; se usa el puerto 8888)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando configura el dispositivo para reportar a d.plaspy.com e incluye la IP del servidor 54.85.159.138. El puerto 8888 es el puerto configurado para Plaspy.

- Establecer el intervalo de actualización a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Estos comandos son ejemplos públicos. La sintaxis exacta y los parámetros pueden variar según el firmware. Conserve el parámetro de contraseña del dispositivo y reemplace los marcadores del APN por los valores de su operador antes de enviar los SMS.

## Notas de configuración

- El GT300 admite configuración vía SMS como se muestra en los comandos de ejemplo; algunas instalaciones utilizan una herramienta del proveedor o un portal de configuración en su lugar.
- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles, los parámetros requeridos o las contraseñas predeterminadas; verifique la sintaxis correcta para su unidad.
- Plaspy acepta conexiones por UDP o TCP en el puerto 8888 y realiza detección automática del protocolo para los rastreadores entrantes.
- Si cambia la contraseña del dispositivo desde la predeterminada queclink, asegúrese de usar la nueva contraseña en los comandos SMS posteriores.
- Al usar nombres de dominio en las entradas de servidor, confirme que la resolución DNS esté disponible en el dispositivo o utilice la IP del servidor como alternativa.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el QuecLink GT300 ofrece una forma práctica de centralizar ubicación, alertas y estado del dispositivo para el monitoreo de trabajadores en solitario, personas mayores o activos móviles. Apuntar el GT300 a Plaspy usando los ajustes de servidor compartidos y los ejemplos anteriores ayuda a garantizar que los dispositivos reporten de forma confiable a una plataforma única donde es posible la visibilidad y la gestión de eventos.

Para saber más sobre Plaspy y cómo maneja las conexiones de dispositivos, visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, notas de firmware y capacidades, confirme los detalles con el fabricante en https://www.queclink.com/ ya que los pasos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
