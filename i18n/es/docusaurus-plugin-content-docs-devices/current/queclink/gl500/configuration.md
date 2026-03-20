---
slug: /queclink/gl500/configuration
id: gl500-configuration
sidebar_label: Configuration
title: QuecLink - GL500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para conectar el QuecLink GL500 a Plaspy con ajustes de servidor compartidos y comandos SMS
keywords:
  - configuración QuecLink GL500
  - instalación QuecLink GL500
  - configuración GL500 Plaspy
  - configuración rastreador GPS QuecLink
  - configuración rastreador de activos
  - configuración rastreador GPRS
  - comandos SMS QuecLink
  - configuración servidor GL500
  - configuración plataforma GPS
  - ajustes APN QuecLink GL500
---

# QuecLink - GL500 Configuration

Esta página documenta el contexto público de configuración para usar el QuecLink GL500 con la plataforma Plaspy. Se enfoca en los pasos prácticos y en los comandos públicos que se emplean comúnmente para preparar el GL500 y que pueda reportar ubicación y eventos a Plaspy. Cuando corresponde, esta guía incluye ejemplos de comandos SMS extraídos de materiales públicos del fabricante.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos concretos en el equipo pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GL500 admite flujos de configuración por SMS y GPRS en materiales públicos; esta página muestra cómo aplicar los ajustes compartidos de Plaspy y ejemplos de comandos SMS, además de recomendar que verifique contra la documentación del fabricante.

## Resumen de la configuración

El objetivo del proceso de configuración es dejar el GL500 listo para comunicarse de forma confiable con Plaspy y que aparezca en la plataforma para monitoreo e informes. Los pasos públicos típicos establecen la contraseña del equipo, configuran el APN para datos móviles y apuntan el rastreador al endpoint y puerto del servidor de Plaspy.

- Configure la autenticación del dispositivo y confirme o restaure los valores de fábrica cuando sea necesario.
- Proporcione las credenciales APN correctas para que el GL500 use GPRS y alcance Plaspy.
- Apunte el equipo al endpoint del servidor compartido de Plaspy para que los reportes se envíen a la plataforma.
- Defina intervalos de reporte y entradas de evento para controlar cuándo transmite el dispositivo.
- Valide la conectividad y confirme que el equipo aparece y se actualiza en Plaspy.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Acceso al GL500 y a su fuente de alimentación, incluyendo baterías CR123A reemplazables por el usuario si la unidad funciona a batería.
- Una tarjeta SIM operativa con datos habilitados y las credenciales APN correctas para la red móvil que vaya a usar.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta o software oficial de configuración del fabricante.
- El GL500 debe ser alcanzable en la red celular y colocado donde pueda obtener conectividad GPS y GPRS para la validación inicial.
- Conocimiento de la contraseña del dispositivo; en ejemplos públicos para este modelo se usa la contraseña por defecto queclink.
- Documentación del fabricante y notas de firmware disponibles como referencia para confirmar la sintaxis y el comportamiento de los comandos.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el GL500 envía sus reportes de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos reportes, detecta automáticamente el protocolo del rastreador y presenta la ubicación y el estado del dispositivo en la plataforma para monitoreo y alertas.

- El dispositivo se configura para enviar datos GPRS a d.plaspy.com o a la IP del servidor de Plaspy.
- Los reportes se envían al puerto 8888 usando UDP o TCP según la configuración del equipo.
- Plaspy detecta automáticamente el protocolo entrante del rastreador y procesa los mensajes sin cambios de puerto por dispositivo.
- Se pueden habilitar entradas de movimiento y SOS para que el GL500 transmita alertas a Plaspy cuando ocurran eventos.
- Una vez activo el reporte, Plaspy ofrece visibilidad de la ubicación y el estado del equipo para el monitoreo operativo.

## Flujo de trabajo de configuración habitual

1. Acceda al método oficial de configuración de QuecLink para el GL500 (comandos SMS o la herramienta del proveedor) y confirme la versión de firmware y la sintaxis de comandos vigente.
2. Si va a usar SMS, prepare la contraseña del dispositivo (en ejemplos públicos se usa la contraseña por defecto queclink) y asegúrese de que los SMS lleguen al equipo.
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Configure el puerto del dispositivo a 8888 y elija UDP o TCP si el equipo solicita seleccionar el transporte.
5. Configure los ajustes APN para la red del dispositivo usando el APN, nombre de usuario y contraseña de su operador donde sea necesario.
6. Aplique o guarde la configuración y reinicie el equipo si es necesario para que los cambios entren en vigor.
7. Valide que el dispositivo reporte correctamente a Plaspy y aparezca en la plataforma con actualizaciones periódicas y notificaciones de eventos.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del GL500 muestran comandos basados en SMS. Los comandos del dispositivo que siguen se proporcionan en el mismo orden que en los ejemplos públicos. Envíe cada línea como un SMS al dispositivo usando la contraseña queclink como se muestra. El primer comando es una restauración de fábrica y debe utilizarse solo cuando sea necesario para la configuración inicial.

1. Restauración de fábrica inicial opcional (usar solo si necesita restablecer a valores de fábrica):
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC+0:
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador (reemplace los marcadores con los valores de su proveedor):
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = APN del operador
- {{apnu}} = nombre de usuario del APN si su operador lo requiere
- {{apnp}} = contraseña del APN si su operador lo requiere

4. Configurar el servidor GPRS a Plaspy usando dominio e IP con puerto 8888 (el dispositivo acepta campos de dominio e IP):
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de actualización de posición a 60 segundos:
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2:
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre los comandos:
- Estos comandos son ejemplos públicos enviados por SMS; confirme la sintaxis exacta según el firmware y la documentación de su equipo antes de usarlos.
- Mantenga el orden de los comandos al realizar una configuración inicial: reset (si es necesario), hora, APN, servidor, intervalo de reporte y luego entradas/eventos.
- Si su proveedor requiere solo una IP o solo un dominio, incluya el campo correspondiente; el ejemplo incluye ambos como aparece en las muestras públicas.

## Notas de configuración

- Las versiones de firmware del fabricante y las variantes regionales pueden cambiar la sintaxis de los comandos y las funciones soportadas; siempre verifique los comandos con la documentación oficial de QuecLink para su firmware GL500.
- Los comandos públicos anteriores usan configuración por SMS. Si prefiere un método basado en software o una herramienta provista por QuecLink o un distribuidor, siga el flujo de trabajo de esa herramienta.
- Elija UDP o TCP según las opciones de configuración del equipo y las restricciones de red; Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración del servidor en el lado del rastreador.
- Mantenga la contraseña del dispositivo segura. En ejemplos públicos se muestra la contraseña por defecto queclink; cambie los valores predeterminados según las mejores prácticas de seguridad después de la configuración inicial.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GL500 con Plaspy ofrece una forma eficiente de monitorear activos fijos a través de redes celulares. La larga duración de batería del GL500 y su detección de movimiento lo hacen adecuado para visibilidad a largo plazo de activos, mientras que configurar el equipo para que reporte a Plaspy centraliza la ubicación, las alertas de eventos y el estado operativo para gerentes de flota y activos.

Para obtener más información sobre Plaspy, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles oficiales de configuración del QuecLink GL500, verifique la información vigente en el sitio del fabricante https://www.queclink.com/ ya que el comportamiento y los métodos de configuración del dispositivo pueden cambiar con el tiempo.
