---
slug: /queclink/gl52lp/configuration
id: gl52lp-configuration
sidebar_label: Configuration
title: QuecLink - GL52LP Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador QuecLink GL52LP con Plaspy incluyendo ajustes de servidor comandos SMS y flujo de instalación
keywords:
  - Configuración QuecLink GL52LP
  - Configuración GL52LP Plaspy
  - Configuración rastreador QuecLink
  - Configuración LoRa GL52LP
  - Instalación rastreador GPS GL52LP
  - Configuración servidor GL52LP
  - Integración QuecLink Plaspy
  - Configuración plataforma GL52LP
  - Configuración software seguimiento QuecLink
  - Guía configuración QuecLink GL52LP
---

# QuecLink - Configuración del GL52LP

Esta página describe el contexto público de configuración para usar el QuecLink GL52LP con Plaspy. Se centra en los ajustes de servidor y en los pasos prácticos necesarios para que el dispositivo informe a Plaspy, e incluye ejemplos públicos de comandos SMS cuando corresponde.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta del proveedor; por ello, trate los comandos a continuación como ejemplos públicos que debe adaptar a su firmware y despliegue específicos.

## Resumen de la configuración

El objetivo de esta configuración es dejar el GL52LP listo para enviar reportes a Plaspy y ser visible en la plataforma. Cuando existan comandos públicos, se muestran como ejemplos para un flujo típico de configuración vía SMS. Utilice las herramientas y la documentación del fabricante para confirmar los comandos según su firmware.

- Configure el dispositivo para que reporte al endpoint y puerto de servidor de Plaspy para que los informes lleguen a la plataforma.
- Verifique la conectividad y los ajustes del APN si va a usar GPRS o provisión por SMS.
- Defina intervalos de reporte adecuados al caso de uso de seguimiento de activos para equilibrar autonomía de batería y visibilidad.
- Valide que el dispositivo aparezca en Plaspy y que se reciban eventos y actualizaciones de ubicación.
- Mantenga un registro de la contraseña del dispositivo y de los ajustes aplicados para mantenimiento o solución de problemas futuros.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que se emplea una configuración de puerto única

## Requisitos típicos antes de configurar

- Asegúrese de que el rastreador tenga alimentación suficiente o carga de batería para la configuración y los reportes iniciales.
- Tenga acceso al método de configuración del fabricante aceptado por el dispositivo, por ejemplo provisión por SMS o la herramienta de configuración de QuecLink.
- Una tarjeta SIM funcional y credenciales APN si va a configurar GPRS o los ajustes de servidor a través de la red móvil.
- La contraseña del dispositivo o la contraseña de provisión necesaria para aceptar comandos de configuración remota (los ejemplos usan la contraseña pública queclink).
- Conocimientos básicos de la versión de firmware y de la configuración regional del dispositivo para que los comandos coincidan con su revisión de hardware.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el dispositivo envía sus datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe y procesa los mensajes, asociando el dispositivo con la cuenta del cliente en la plataforma.

- El rastreador se configura para reportar al servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- Los mensajes se envían al puerto 8888, que Plaspy usa para todos los dispositivos compatibles.
- El transporte puede ser UDP o TCP según lo requiera el dispositivo y la opción seleccionada durante la configuración.
- Plaspy detecta automáticamente el protocolo entrante del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma.
- Una vez activo el reporte, Plaspy recibe actualizaciones periódicas de ubicación y notificaciones de eventos para monitoreo y análisis.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de QuecLink compatible con su dispositivo, por ejemplo provisión por SMS o la herramienta del fabricante.
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor.
3. Establezca el puerto del servidor en 8888 que Plaspy utiliza para todos los dispositivos.
4. Elija el tipo de transporte UDP o TCP si el dispositivo requiere seleccionar el protocolo de transporte.
5. Aplique o guarde la configuración en el dispositivo siguiendo el procedimiento del fabricante o enviando los comandos de provisión.
6. Reinicie el dispositivo si el firmware exige un reinicio para aplicar cambios de red o servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando que las actualizaciones lleguen a la plataforma y que el dispositivo esté visible y reportando eventos.

## Ejemplo de comandos de configuración

Los siguientes comandos SMS son ejemplos públicos extraídos del contenido de configuración de QuecLink. Usan la contraseña del dispositivo queclink en los ejemplos e incluyen marcadores de posición para los valores de APN cuando son necesarios. Mantenga los marcadores tal como aparecen y reemplácelos por los valores de su operador.

1. Comando opcional de restauración de fábrica inicial etiquetado como configuración inicial cuando corresponda
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Definir el APN del operador
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} es el nombre del APN proporcionado por su operador móvil.
- {{apnu}} es el nombre de usuario del APN cuando sea requerido.
- {{apnp}} es la contraseña del APN cuando sea requerida.

4. Configurar el servidor GPRS para reportar a Plaspy usando dominio e IP con puerto 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de actualización a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota: Estos comandos son ejemplos públicos y con frecuencia se envían como mensajes SMS al dispositivo. Reemplace marcadores como {{apn}} / {{apnu}} / {{apnp}} con los valores de su operador. La contraseña de ejemplo queclink aparece en el ejemplo público; confirme la contraseña correcta para su dispositivo y cambie las contraseñas predeterminadas cuando corresponda.

## Observaciones sobre la configuración

- Los comandos SMS proporcionados son ejemplos públicos; la sintaxis real puede variar según la versión de firmware y las compilaciones regionales.
- La provisión por SMS es un método de configuración mostrado en el ejemplo. Use la herramienta de configuración del fabricante si el SMS no está disponible para su revisión de hardware.
- Cuando el dispositivo requiera elegir un transporte, pruebe tanto UDP como TCP para confirmar cuál ofrece una entrega más estable en su despliegue.
- Mantenga un registro de los ajustes aplicados y cambie las contraseñas predeterminadas cuando sea posible para mantener la seguridad operacional.
- Verifique el APN y los ajustes del operador móvil antes de enviar comandos de servidor GPRS; valores incorrectos de APN impedirán la conexión al servidor.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GL52LP con Plaspy proporciona una vía directa para obtener visibilidad centralizada en el monitoreo de activos. Configurar el dispositivo para reportar a Plaspy permite a las organizaciones recibir actualizaciones periódicas de ubicación y notificaciones de eventos en una sola plataforma, simplificando el seguimiento, las alertas y los informes operativos de activos distribuidos.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration methods, firmware details, and official command reference consult the manufacturer at https://www.queclink.com/ to confirm current instructions and compatibility.
