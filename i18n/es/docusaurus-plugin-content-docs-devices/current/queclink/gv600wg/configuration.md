---
slug: /queclink/gv600wg/configuration
id: gv600wg-configuration
sidebar_label: Configuration
title: QuecLink - GV600WG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador QuecLink GV600WG con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración QuecLink GV600WG
  - Configuración inicial QuecLink GV600WG
  - Configuración servidor GV600WG
  - Integración GV600WG Plaspy
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Configuración rastreo de vehículos
  - Configuración rastreadores de flota
  - Comandos SMS GV600WG
  - Configuración rastreador QuecLink
---

# QuecLink - GV600WG Configuración

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GV600WG con Plaspy. Reúne los ajustes de servidor prácticos, el flujo de trabajo habitual y ejemplos de comandos SMS que se emplean comúnmente para apuntar este modelo hacia Plaspy y permitir que el dispositivo informe posición y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los rastreadores soportados y detecta automáticamente el protocolo del dispositivo; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía como punto de partida práctico y consulte la documentación de QuecLink o a su integrador para detalles específicos del equipo.

## Visión general de la configuración

El objetivo de esta configuración es preparar un GV600WG para comunicarse de forma confiable con Plaspy, validar la conectividad y habilitar el reporte en tiempo real de ubicación y eventos en la plataforma. Los comandos de ejemplo que siguen ilustran un flujo de configuración por SMS que establece APN, endpoint de servidor, intervalo de reporte y entradas de alarma para Plaspy.

- Configurar el dispositivo para que informe al endpoint del servidor Plaspy y así Plaspy pueda decodificar y mostrar la telemetría.
- Asignar el APN y las credenciales de la SIM para que el rastreador establezca sesiones de datos GPRS.
- Ajustar el intervalo de actualización y el modo de reporte para controlar la frecuencia de envío de posición y datos de sensores a Plaspy.
- Habilitar entradas digitales relevantes o el reporte SOS para que la plataforma reciba alarmas y eventos.
- Validar la conectividad confirmando que el dispositivo figura y reporta en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos

## Requisitos habituales antes de la configuración

- Una unidad GV600WG alimentada, con una tarjeta SIM operativa y cobertura celular adecuada para su región.
- Acceso al método de configuración que QuecLink soporta para su unidad, por ejemplo comandos SMS o herramientas del fabricante.
- El APN de la SIM, el nombre de usuario APN y la contraseña APN que su operador móvil requiera.
- Conocimiento de la contraseña del dispositivo si difiere de la contraseña de fábrica.
- Un procedimiento de prueba para confirmar que el rastreador aparece y reporta en Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El GV600WG transmite la posición GNSS y la telemetría configurada a Plaspy a través del transporte seleccionado. El dispositivo se configura para enviar datos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda decodificar los mensajes, actualizar el mapa y activar eventos.

- El rastreador se configura para reportar a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar UDP o TCP para el transporte de mensajes; elija el que requiera su instalación.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan mensajes al puerto compartido.
- Una vez activo el reporte, Plaspy ofrece visibilidad de ubicación, eventos de alarma y telemetría histórica.
- Los reportes de eventos como pulsaciones del botón SOS o activaciones de entradas serán reenviados a Plaspy para alertas y flujos de trabajo.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de QuecLink para el GV600WG, por ejemplo comandos SMS o la herramienta de configuración del fabricante.
2. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138 según el formato de comando del dispositivo.
3. Establezca el puerto del servidor en 8888 en la configuración del equipo.
4. Elija UDP o TCP si el equipo requiere seleccionar el tipo de transporte y guarde esa opción.
5. Proporcione el APN de la SIM y cualquier credencial APN requerida por su operador móvil y guarde la configuración.
6. Aplique o guarde la configuración y reinicie el dispositivo si el equipo o el firmware lo requieren.
7. Valide que el dispositivo reporta en Plaspy verificando el estado del equipo y los mensajes recientes en la plataforma.

## Ejemplos de comandos de configuración

El GV600WG puede configurarse enviando comandos SMS al dispositivo. Los comandos que siguen se extraen de ejemplos públicos de configuración. La contraseña por defecto del dispositivo usada en estos ejemplos es queclink. Envíe estos mensajes SMS al dispositivo en el orden mostrado al realizar una configuración inicial.

1. Paso inicial opcional de restauración de fábrica (usar solo si necesita borrar la configuración previa):
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
Nota: Este comando realiza una restauración de fábrica y normalmente se usa solo cuando es necesario durante el aprovisionamiento inicial.

2. Establecer la zona horaria a UTC 0:
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador (reemplazar los marcadores con los valores de su operadora):
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] es el nombre del APN del operador móvil.
- [apnu] es el nombre de usuario del APN cuando el operador lo requiera.
- [apnp] es la contraseña del APN cuando el operador lo requiera.

4. Configurar el servidor GPRS a Plaspy usando dominio e IP con puerto 8888 (este ejemplo incluye dominio e IP según la guía pública):
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando establece el host y el puerto del servidor; Plaspy acepta conexiones en el puerto 8888 y detectará automáticamente el protocolo.

5. Establecer el intervalo de actualización a 60 segundos:
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2:
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas importantes sobre estos comandos:
- Los marcadores como [apn], [apnu] y [apnp] deben reemplazarse por las credenciales de su operador antes de enviar.
- La contraseña de ejemplo utilizada aquí es queclink, que es la contraseña de fábrica mostrada en el ejemplo público. Si la contraseña del dispositivo se ha cambiado, utilice la contraseña vigente.
- Los comandos se muestran en la secuencia pública y deben enviarse en el orden indicado cuando se realiza una configuración inicial estándar.

## Notas de configuración

- La configuración por SMS es un método común y soportado para el GV600WG en ejemplos públicos; confirme que el aprovisionamiento por SMS esté habilitado y que la mensajería de la SIM funcione.
- Las versiones de firmware y las variantes regionales de hardware pueden cambiar la sintaxis de los comandos o los parámetros soportados; verifique los comandos exactos contra las notas de la versión del firmware del dispositivo.
- Elija UDP o TCP según la confiabilidad de la red y las necesidades de integración; ambos transportes son soportados y Plaspy aceptará cualquiera en el puerto 8888.
- Conserve la contraseña del dispositivo y cámbiela según su política de seguridad si es necesario después del aprovisionamiento.
- Al usar el comando de restauración de fábrica, trátelo como opcional y úselo solo cuando necesite devolver la unidad a ajustes por defecto antes del aprovisionamiento.

## Por qué usar Plaspy con esta configuración

Usar el GV600WG con Plaspy proporciona una forma escalable de recopilar en tiempo real posiciones GNSS y telemetría de sensores en remolques y activos pesados. Los ajustes de servidor compartidos de Plaspy simplifican el aprovisionamiento en una flota mixta porque todos los dispositivos apuntan al mismo endpoint y puerto, mientras Plaspy detecta automáticamente el protocolo y decodifica los mensajes entrantes.

Para obtener más información sobre Plaspy y cómo gestiona la integración de rastreadores visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo; verifique los detalles de la última configuración en el sitio del fabricante QuecLink https://www.queclink.com/ y en las notas de la versión del firmware del dispositivo.
