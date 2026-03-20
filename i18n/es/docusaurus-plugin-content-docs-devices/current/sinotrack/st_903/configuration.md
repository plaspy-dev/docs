---
slug: /sinotrack/st_903/configuration
id: st_903-configuration
sidebar_label: Configuration
title: SinoTrack - ST-903 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack ST-903 y reportar a Plaspy mediante comandos SMS y ajustes de servidor
keywords:
  - configuración SinoTrack ST-903
  - instalación ST-903
  - configuración ST-903 Plaspy
  - configuración rastreador GPS SinoTrack
  - comandos SMS ST-903
  - ajustes servidor Plaspy
  - guía configuración rastreador GPS
  - configuración APN SinoTrack
  - configuración GPRS ST-903
  - configuración rastreador de activos pequeños
---

# SinoTrack - ST-903 Configuración

Esta página documenta el contexto público de configuración para usar el SinoTrack ST-903 con Plaspy. Se enfoca en los pasos prácticos y en los comandos SMS que SinoTrack publica para apuntar el ST-903 a Plaspy, de modo que el dispositivo pueda enviar paquetes de posición por GPRS a la plataforma. Use esta guía para preparar el dispositivo, establecer APN y parámetros de servidor, y verificar la conectividad con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que trate los ejemplos de comandos SMS aquí como la base pública y confirme los detalles específicos de firmware con la documentación de SinoTrack cuando sea necesario.

## Resumen de configuración

El objetivo de configurar el ST-903 para Plaspy es dirigir los reportes GPRS del rastreador al endpoint de ingestión de Plaspy, asegurar que el dispositivo tenga credenciales de datos móviles válidas y confirmar que los reportes sean visibles en la plataforma Plaspy. El ST-903 soporta configuración por SMS, por lo que los administradores normalmente envían una secuencia de comandos SMS para ajustar zona horaria, APN, dirección/puerto del servidor, intervalos de reporte y modo de operación.

- Establecer el APN y credenciales para que GPRS pueda iniciar una sesión de datos.
- Configurar la dirección y el puerto del servidor para apuntar a Plaspy (dominio o IP).
- Elegir el modo de transporte (UDP o TCP) si el dispositivo lo requiere y asegurarse de usar el puerto compartido de Plaspy.
- Aplicar intervalos y modos de reporte adecuados para equilibrar la duración de batería y la frecuencia de actualizaciones.
- Validar la configuración con el comando de verificación del dispositivo y confirmar la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo, por lo que no necesita seleccionar un puerto distinto para cada dispositivo.

## Requisitos típicos antes de la configuración

- Un ST-903 con batería cargada o una conexión de alimentación confiable para realizar las operaciones de configuración.
- Una SIM GSM 2G compatible con datos habilitados y las credenciales APN correctas del operador móvil.
- Capacidad para enviar mensajes SMS al dispositivo para la configuración por SMS según lo documentado por SinoTrack.
- Acceso al manual del ST-903 o a la lista oficial de comandos SMS del fabricante para seguir la sintaxis exacta de los comandos.
- Una cuenta en Plaspy o acceso a su instancia de Plaspy para confirmar que el dispositivo aparece y reporta después de la configuración.
- Conocimiento de la disponibilidad local de la red 2G en la zona donde operará el dispositivo.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ST-903 envía paquetes GPRS de posición y estado al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos paquetes, detecta automáticamente el protocolo del rastreador y muestra el dispositivo en la plataforma para seguimiento en tiempo real, alertas y reproducción de historial.

- El dispositivo se configura para reportar al endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- Las cargas útiles GPRS contienen actualizaciones de ubicación y estado que Plaspy analiza y asocia con el ID del dispositivo.
- Alarmas y eventos (por ejemplo, movimiento o geocercas) se envían al mismo endpoint y aparecen en los flujos de eventos de Plaspy.
- El SMS sigue estando disponible como canal de configuración y control de respaldo cuando la conectividad de datos no está disponible.
- La detección automática de protocolo de Plaspy elimina la necesidad de elegir manualmente manejadores de protocolo específicos por dispositivo en el servidor.

## Flujo de configuración típico

1. Obtenga la lista oficial de comandos SMS o el manual de configuración del ST-903 de SinoTrack y confirme que el firmware del dispositivo admite los comandos indicados.
2. Asegúrese de que la tarjeta SIM esté activa con datos y conozca el APN, usuario y contraseña de su operador móvil.
3. Envíe los comandos SMS para establecer la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 y configure el puerto 8888.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su instalación y las opciones del dispositivo.
5. Aplique las credenciales APN, los intervalos de reporte y ponga el dispositivo en modo GPRS según lo requiera el rastreador.
6. Guarde o aplique la configuración y reinicie el dispositivo si el fabricante lo exige.
7. Valide la conectividad utilizando el comando de verificación y comprobando que el dispositivo reporte a Plaspy y aparezca en su cuenta.

## Ejemplos de comandos de configuración

Los comandos SMS públicos de SinoTrack usados para configurar el ST-903 para reportes GPRS suelen enviarse como mensajes SMS de texto plano al dispositivo. Los comandos a continuación se toman de la secuencia de ejemplo del fabricante y conservan los marcadores de posición donde corresponde.

- Paso inicial opcional: restaurar configuración de fábrica (usar solo si es necesario)
```text
RESET
```

- Establecer la zona horaria a UTC+0
```text
8960000E00
```

- Establecer el APN y credenciales
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explicación: mantenga los marcadores de posición así:
- {{apn}} = el APN de su operador móvil
- {{apnu}} = nombre de usuario del APN si es requerido (omitir o dejar en blanco si no se requiere)
- {{apnp}} = contraseña del APN si es requerida (omitir o dejar en blanco si no se requiere)

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
8040000 54.85.159.138 8888
```
Nota: el ejemplo del fabricante usa una dirección IP. Plaspy es accesible en d.plaspy.com y en la IP 54.85.159.138; utilice la forma que soporte el firmware de su dispositivo.

- Establecer el intervalo de reporte cuando el dispositivo está ENCENDIDO (ejemplo en segundos)
```text
8050000 60
```

- Establecer el intervalo de reporte cuando el dispositivo está APAGADO o en otro estado (ejemplo en segundos)
```text
8090000 60
```

- Cambiar el rastreador al modo de reportes por GPRS
```text
7100000
```

- Verificar la configuración actual
```text
RCONF
```

Siga la secuencia de comandos en el orden apropiado para su despliegue. Use RESET solo durante la configuración inicial o cuando desee restaurar los valores de fábrica de forma explícita.

## Notas de configuración

- El ST-903 soporta configuración por SMS como se muestra en los comandos de ejemplo; verifique que su dispositivo acepte configuración por SMS con la versión de firmware actual.
- Use los marcadores de posición del APN exactamente según lo solicite su operador; omita los campos de usuario o contraseña si su APN no los requiere.
- Elija transporte UDP o TCP según las necesidades de su instalación; Plaspy escucha en el puerto 8888 y soporta ambos transportes, y además detectará automáticamente el protocolo del rastreador al llegar los datos.
- Las revisiones de firmware y las variantes regionales pueden cambiar la sintaxis de los comandos o las funciones disponibles; compare siempre estos comandos públicos con la documentación más reciente de SinoTrack antes de aplicarlos.
- Si no está seguro de si el dispositivo admite nombres de dominio en la configuración del servidor, utilice la dirección IP 54.85.159.138 como en el ejemplo del fabricante.

## Por qué usar Plaspy con esta configuración

Apuntar el SinoTrack ST-903 a Plaspy ofrece a despliegues de seguimiento de activos pequeños y personales una vía sencilla para obtener visibilidad en tiempo real, alertas de eventos e historial de rutas sin cambiar el hardware del dispositivo. Los ajustes de servidor configurables por SMS del ST-903 permiten a los instaladores dirigir el tráfico hacia Plaspy rápidamente, mientras que los perfiles de reporte variables ayudan a los equipos a equilibrar la autonomía de la batería con la frecuencia de seguimiento.

Para saber más sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes del dispositivo, el comportamiento del firmware y los procedimientos del fabricante, verifique los detalles en el sitio oficial de SinoTrack https://www.sinotrackgps.com/. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que siempre confirme las instrucciones más recientes con el fabricante antes de realizar despliegues a gran escala.
