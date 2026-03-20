---
slug: /queclink/gv305ceu/configuration
id: gv305ceu-configuration
sidebar_label: Configuration
title: QuecLink - GV305CEU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV305CEU para Plaspy con ajustes de servidor y comandos SMS
keywords:
  - Configuración QuecLink GV305CEU
  - Configuración GV305CEU para Plaspy
  - Configuración rastreador GPS QuecLink
  - Configuración servidor GV305CEU
  - Configuración rastreador de vehículo
  - Configuración seguimiento de flotas
  - Configuración SMS QuecLink
  - Configuración APN GV305CEU
  - Configuración rastreador Plaspy
  - Integración rastreador GPS Plaspy
---

# QuecLink - GV305CEU Configuración

Esta página explica el contexto público de configuración para usar el rastreador QuecLink GV305CEU con Plaspy. Se centra en los ajustes de servidor prácticos, el flujo de trabajo básico y los comandos SMS más habituales para apuntar un GV305CEU a Plaspy, de modo que el dispositivo envíe ubicación y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los ejemplos siguientes muestran una base práctica usando los valores de servidor de Plaspy y los comandos SMS públicos de este modelo.

## Resumen de la configuración

El objetivo de la configuración es preparar el GV305CEU para comunicarse de forma fiable con Plaspy y que los gestores de flota obtengan seguimiento en vivo, alertas y registros históricos. A continuación se indican los resultados prácticos que debe buscar al configurar este rastreador.

- Configurar el rastreador para que use Plaspy como punto de reporte y así envíe datos GNSS y telemetría a la plataforma.
- Ajustar el APN y parámetros de la red celular para que el dispositivo tenga conectividad de datos por GPRS o LTE.
- Seleccionar el transporte y los detalles del servidor para que el rastreador alcance Plaspy en el puerto compartido usado por la plataforma.
- Validar que el reporte periódico y por eventos esté activo para que la ubicación, el encendido y los eventos de sensores aparezcan en Plaspy.
- Opcionalmente habilitar SOS y otros reportes de entradas para que las alertas críticas lleguen a Plaspy.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los detalles públicos del endpoint de Plaspy que debe usar al configurar el GV305CEU. Plaspy emplea el mismo puerto para todos los dispositivos compatibles e intentará detectar automáticamente el protocolo del dispositivo.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM funcional instalada en el GV305CEU con un plan de datos activo y capacidad de SMS si va a enviar comandos por mensaje.
- Datos del APN del operador móvil: nombre del APN, usuario y contraseña del APN si son necesarios.
- Acceso físico al dispositivo o un cable de configuración USB si prefiere configurar por USB en lugar de SMS.
- Conocimiento de la contraseña por defecto del dispositivo usada para comandos SMS o de configuración; el ejemplo público utiliza la contraseña queclink.
- Acceso a la documentación oficial de QuecLink o a la herramienta del proveedor para confirmar opciones específicas del modelo.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el GV305CEU envía arreglos GNSS y telemetría al endpoint y puerto compartidos de Plaspy, de modo que los vehículos se vuelvan visibles en la plataforma para monitoreo y reportes.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que Plaspy reciba sus datos.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia el dispositivo a la plataforma una vez que comienzan a llegar los mensajes.
- Los reportes periódicos de posición y los mensajes de eventos permiten monitoreo en vivo, reproducción de rutas y alertas dentro de Plaspy.
- Eventos de entrada como SOS, estado de encendido o alertas de sensores se reenvían a Plaspy para notificaciones y flujos de trabajo automatizados.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración QuecLink para el GV305CEU, por ejemplo comandos SMS, la herramienta móvil del proveedor o configuración por USB según las instrucciones del fabricante.
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según requiera el método de configuración.
3. Establezca el puerto de destino en 8888, que es el puerto compartido de Plaspy usado por los dispositivos.
4. Elija UDP o TCP si el dispositivo solicita la selección del transporte y guarde esa opción.
5. Configure el APN y las credenciales del APN del dispositivo para que el rastreador pueda usar datos celulares y alcanzar Plaspy.
6. Aplique o guarde la configuración y reinicie el dispositivo si la plataforma o el equipo requieren un reinicio para que los cambios tengan efecto.
7. Valide que el dispositivo aparezca en Plaspy y que envíe actualizaciones regulares a la plataforma.

Si planea utilizar comandos por SMS, incluya los pasos por SMS en su flujo de trabajo y confirme que el dispositivo reconoce cada comando.

## Ejemplo de comandos de configuración

El GV305CEU puede configurarse enviando comandos SMS al dispositivo. Los comandos de ejemplo que siguen usan la contraseña por defecto pública queclink. Si cambia la contraseña, sustitúyala en los comandos. Mantenga el orden mostrado al realizar una configuración inicial.

1. Comando opcional de restauración de fábrica
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador. Reemplace los marcadores según sea necesario:
- [apn] es el nombre del APN proporcionado por su operador móvil
- [apnu] es el usuario del APN si se requiere
- [apnp] es la contraseña del APN si se requiere
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4. Configurar el servidor GPRS a Plaspy. Este comando configura tanto el dominio como la IP y establece el puerto 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de actualización periódica a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre estos comandos
- Mantenga el orden al realizar la configuración inicial para que la conectividad base y los ajustes del servidor se establezcan antes de habilitar reportes y entradas.
- Los campos del APN deben reemplazarse por los valores específicos de su operador. Si el operador no usa usuario o contraseña de APN, deje esos campos vacíos según la sintaxis del dispositivo.
- La contraseña por defecto queclink se muestra en los ejemplos. Si su dispositivo usa otra contraseña, sustitúyala de forma consistente.

## Observaciones de configuración

- La configuración vía SMS es compatible y se muestra aquí, pero también puede usar las herramientas oficiales de QuecLink o la configuración por USB según la preferencia del instalador y el soporte del firmware.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el servidor y el puerto son los ajustes críticos a aplicar.
- Elija UDP o TCP según sus necesidades de red y fiabilidad. UDP se usa comúnmente por su menor sobrecarga, mientras que TCP puede ayudar con la entrega confiable dependiendo del manejo de red del dispositivo.
- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles o el orden de los parámetros. Siempre confirme la sintaxis correcta de los comandos con las notas de la versión del firmware del dispositivo.
- Al probar, valide que las actualizaciones de posición y los eventos de entradas aparezcan en Plaspy después de la configuración y de cualquier reinicio requerido del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el GV305CEU con Plaspy ofrece una vía clara para capturar la ubicación del vehículo, la telemetría de sensores y los eventos de entrada en una sola plataforma de gestión de flotas. La conectividad celular del dispositivo, las entradas para eventos y el soporte de periféricos, combinados con los ajustes de servidor de Plaspy, permiten reportes fiables para reproducción de rutas, alertas y flujos de trabajo de flota.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details, firmware notes, and command syntax on the manufacturer site https://www.queclink.com/ since manufacturer specifications and configuration methods can change over time.
