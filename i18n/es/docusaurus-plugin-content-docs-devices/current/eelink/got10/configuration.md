---
slug: /eelink/got10/configuration
id: got10-configuration
sidebar_label: Configuration
title: EElink - GOT10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink GOT10 para conectar a Plaspy con ajustes de servidor y comandos SMS
keywords:
  - configuración EElink GOT10
  - instalación EElink GOT10
  - EElink GOT10 Plaspy
  - configuración GOT10
  - ajustes servidor GOT10
  - configuración SMS GOT10
  - configuración APN GOT10
  - configuración rastreador Plaspy
  - rastreador GPS Plaspy
  - configuración rastreador OBD
---

# EElink - Configuración GOT10

Esta página describe el contexto público de configuración para usar el EElink GOT10 con Plaspy. Se concentra en los ajustes prácticos del servidor y los comandos que proporciona el fabricante, comúnmente usados para apuntar el dispositivo a Plaspy, y explica qué debe preparar antes de integrar el GOT10 a su flota en Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GOT10 combina conexión OBD II y telemetría CAN BUS, y el fabricante facilita un conjunto de comandos basados en SMS que pueden usarse para configurar el envío de datos a Plaspy.

## Resumen de configuración

El proceso de configuración prepara al GOT10 para comunicarse de forma confiable con Plaspy y garantiza que el dispositivo reporte la ubicación y la telemetría diagnóstica a la plataforma. En el GOT10 esto suele realizarse mediante comandos SMS para establecer el APN y la dirección y puerto del servidor GPRS, de modo que el equipo pueda transmitir datos a Plaspy.

- Configure el APN de la red del dispositivo para que haya conectividad GPRS disponible para el reporte.
- Apunte el dispositivo al dominio o IP del servidor Plaspy y al puerto requerido para que la telemetría se enrute correctamente.
- Elija el método de transporte si el dispositivo requiere seleccionar entre UDP y TCP.
- Establezca los intervalos de reporte y cualquier zona horaria o temporizadores operativos relevantes para su flota.
- Valide la configuración con una consulta de parámetros y confirme que el dispositivo aparece en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo que emplea el rastreador.

## Requisitos típicos antes de la configuración

- Una SIM válida instalada en el GOT10 con datos habilitados y el APN correcto del operador.
- Acceso al método de configuración del GOT10 soportado por su unidad, comúnmente comandos SMS según lo proveído por el fabricante.
- Alimentación o conexión al vehículo mediante el puerto OBD II y una batería del vehículo en estado estable durante la configuración.
- Los valores del APN de su operador móvil listos para insertarse en el campo del comando APN.
- Un medio para recibir y confirmar las respuestas del dispositivo, como mensajes SMS de respuesta o visibilidad en la consola de Plaspy para verificar el reporte.

## Cómo se conecta este rastreador a Plaspy

El GOT10 se configura para enviar su telemetría y diagnósticos al endpoint y puerto compartidos del servidor Plaspy, de modo que los administradores de flota puedan ver la ubicación y los datos CAN BUS en la plataforma. La configuración normalmente indica al dispositivo que abra una sesión de datos GPRS y que transmita telemetría a Plaspy por el transporte seleccionado.

- El dispositivo usa el APN del operador para establecer conectividad GPRS y luego abre una conexión de datos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los tramas de telemetría y diagnóstico se envían por UDP o TCP según el transporte seleccionado.
- Plaspy recibe los datos entrantes en el puerto compartido 8888 y detecta automáticamente el protocolo del dispositivo.
- Una vez activo el reporte, posición, diagnósticos OBD y la telemetría configurada son visibles en Plaspy para revisiones en tiempo real e históricas.
- Temporizadores periódicos controlan la frecuencia con la que el GOT10 envía actualizaciones a Plaspy; estos se configuran mediante comandos.

## Flujo de configuración habitual

1. Obtenga el método oficial de configuración del fabricante o el software para el GOT10 y confirme la sintaxis de comandos SMS que soporta su firmware.
2. Inserte una tarjeta SIM con datos habilitados y asegúrese de tener los detalles del APN del operador.
3. Envíe o ingrese la dirección del servidor ya sea como d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Seleccione UDP o TCP como transporte si el dispositivo solicita elegir el método de reporte.
5. Configure los temporizadores de reporte y la zona horaria según lo necesite su flota.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante lo exige.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de datos en el servidor compartido y confirmando que el dispositivo aparece en su panel de Plaspy.

## Ejemplos de comandos de configuración

El GOT10 admite configuración vía SMS. El fabricante publica los siguientes comandos públicos. Envíe cada comando como un SMS al número del dispositivo. Conserve los marcadores de posición al aplicar el comando APN.

- Restablecimiento inicial opcional a valores de fábrica (usar solo cuando sea necesario o en aprovisionamiento inicial)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace [apn] con el APN de su operador. Si su proveedor usa usuario o contraseña APN, incluya [apnu] y [apnp] cuando sea necesario
```text
APN,[apn][apnu][apnp]#
```
Nota: La sintaxis del fabricante puede añadir campos de usuario y contraseña como valores separados por comas. Mantenga los marcadores [apnu] y [apnp] si el operador los requiere.

- Establecer el servidor GPRS a Plaspy por dominio usando UDP o TCP en el puerto 8888
```text
SERVER,1,d.plaspy.com,8888#
```

- O establecer el servidor GPRS a Plaspy por IP usando UDP o TCP en el puerto 8888
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de reporte a cada 60 segundos
```text
TIMER,60#
```

- Verificar los parámetros actuales
```text
PARAM#
```

Envíe estos comandos en el orden mostrado cuando el orden sea importante, por ejemplo APN antes de SERVER si el dispositivo necesita establecer conectividad de red primero. El comando de restablecimiento de fábrica es opcional y debe usarse solo al preparar un dispositivo para un aprovisionamiento limpio o para resolución de problemas.

## Notas de configuración

- Los ejemplos de configuración del GOT10 anteriores usan comandos SMS según lo publicado por el fabricante; algunos instaladores pueden preferir herramientas de configuración o métodos por USB si el proveedor los ofrece.
- El comportamiento del dispositivo y la sintaxis exacta de los SMS pueden diferir entre versiones de firmware y revisiones de hardware; confirme la sintaxis con la documentación del dispositivo antes de enviar comandos.
- Elija UDP o TCP en el dispositivo según sus preferencias de red; Plaspy acepta cualquiera de los dos, pero el dispositivo debe apuntar al puerto 8888.
- Plaspy usa un único puerto compartido para todos los dispositivos y realiza detección automática de protocolo, por lo que solo necesita configurar el servidor y el puerto correctos en el equipo.
- Cuando use SMS para la configuración, asegúrese de tener un medio para recibir las respuestas del dispositivo y confirmar la aplicación exitosa de cada comando.

## Por qué usar Plaspy con esta configuración

Usar el GOT10 con Plaspy integra diagnósticos del vehículo y ubicación en una sola vista, ayudando a las flotas a monitorear la salud y la posición de los vehículos sin cableado adicional. Apuntar el dispositivo al servidor y puerto de Plaspy permite la transmisión continua de datos CAN BUS y OBD junto con la información GPS, de modo que los equipos operativos puedan tomar decisiones más rápidas y basadas en datos.

Conozca más sobre Plaspy en el sitio principal https://www.plaspy.com. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que verifique los detalles más recientes de la configuración y la sintaxis de comandos del GOT10 en la web del fabricante https://www.eelink.com.cn/.
