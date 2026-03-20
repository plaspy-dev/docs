---
slug: /queclink/gv75mg/configuration
id: gv75mg-configuration
sidebar_label: Configuration
title: QuecLink - GV75MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV75MG con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración QuecLink GV75MG
  - Instalación QuecLink GV75MG
  - GV75MG Plaspy
  - Configuración servidor GV75MG
  - Configuración GPS GV75MG
  - Configuración dispositivo Plaspy
  - Configuración rastreador de vehículos
  - Configuración rastreador GPS motocicleta
  - Ajustes APN QuecLink GV75MG
  - Comandos SMS GV75MG
---

# QuecLink - GV75MG Configuración

Esta página describe el contexto público de configuración para usar el QuecLink GV75MG con Plaspy. Reúne los ajustes del servidor, recomendaciones prácticas de instalación y ejemplos de comandos SMS que se usan comúnmente para apuntar el GV75MG a Plaspy y habilitar el rastreo en tiempo real y la ingestión de telemetría. Use este material para preparar el equipo y verificar la conectividad antes de añadir la unidad a su cuenta de Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto y punto de conexión se usan para varios modelos. Los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el GV75MG también soporta comandos vía SMS para su configuración, como se muestra en la sección de ejemplos a continuación.

## Resumen de configuración

Este proceso prepara al GV75MG para comunicarse de manera fiable y segura con Plaspy, permitiendo ubicación en tiempo real, reporte de eventos y entrega de mensajes en búfer al platforma.

- Configure el APN y los ajustes GPRS del dispositivo para que los datos celulares estén disponibles para la transmisión de mensajes.
- Apunte el dispositivo al endpoint del servidor Plaspy (dominio o IP) y al puerto compartido que usa Plaspy.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere una elección explícita y guarde los cambios.
- Valide que el dispositivo reporte a Plaspy y confirme que los mensajes de ubicación y eventos aparezcan en la plataforma.
- Utilice los comandos SMS del GV75MG cuando prefiera configurar de forma remota por SMS o cuando no estén disponibles las herramientas seriales/por software en sitio.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Dispositivo alimentado y accesible (instalado o en banco de pruebas) para poder aplicar comandos de configuración.  
- SIM activa con datos habilitados y valores APN correctos para el operador móvil. La configuración del GV75MG puede requerir credenciales APN.  
- Capacidad para enviar comandos SMS de configuración o acceder a la herramienta oficial de configuración de Queclink según la preferencia del instalador.  
- La contraseña por defecto del equipo si va a usar configuración por SMS (el ejemplo más abajo usa la contraseña por defecto queclink).  
- Familiaridad con la documentación del fabricante o la herramienta de instalación para pasos específicos del modelo y comportamientos del firmware.

## Cómo se conecta este rastreador a Plaspy

El GV75MG se configura para reportar posiciones y eventos del dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir telemetría, activar alertas y mostrar posiciones en tiempo real.

- El dispositivo envía mensajes GPRS/TCP o GPRS/UDP a d.plaspy.com (o 54.85.159.138) en el puerto 8888.  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint.  
- Las ubicaciones, los mensajes en búfer y los eventos de alarma se entregan a Plaspy para monitoreo en tiempo real y reproducción histórica.  
- En el dispositivo se puede seleccionar UDP o TCP como transporte; Plaspy soporta ambos y utiliza el puerto 8888 para todos los equipos.  
- Notificaciones de eventos como activaciones del botón SOS se reenvían desde el GV75MG a Plaspy para acciones basadas en reglas.

## Flujo de trabajo de configuración habitual

1. Acceda al método o software oficial de configuración de Queclink, o prepare el acceso por SMS si va a configurar de forma remota.  
2. Ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes GPRS/servidor del dispositivo.  
3. Configure el puerto del servidor en 8888.  
4. Seleccione UDP o TCP si el equipo requiere elegir el transporte.  
5. Configure el APN y las credenciales APN para la SIM en el dispositivo (use marcadores como {{apn}}, {{apnu}}, {{apnp}} cuando haga scripting).  
6. Aplique o guarde la configuración y reinicie el equipo si el firmware exige reboot para que los cambios surtan efecto.  
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y los mensajes en la plataforma.

## Ejemplos de comandos de configuración

El GV75MG soporta comandos de configuración vía SMS. Los siguientes comandos SMS públicos se ofrecen como ejemplos tal como aparecen en la documentación del fabricante. La muestra usa la contraseña del dispositivo queclink (por defecto). Mantenga los marcadores al sustituir los valores del APN.

- Paso inicial opcional — restaurar valores de fábrica (marcado como paso inicial opcional):
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Establecer la zona horaria UTC+0:
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Establecer el APN del operador (reemplazar los marcadores con los valores de su operador):
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explicación: {{apn}} es el nombre APN del operador, {{apnu}} es el usuario APN si se requiere, {{apnp}} es la contraseña APN si se requiere. Deje usuario/contraseña vacíos si el operador no los utiliza.

- Configurar el servidor GPRS a Plaspy usando dominio e IP con puerto 8888 (el dispositivo queda apuntando al endpoint y puerto de Plaspy):
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Establecer intervalo de reporte a 60 segundos:
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar notificación del botón SOS en la entrada 2:
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota: Envíe estas cadenas como mensajes SMS al número del dispositivo. Mantenga la contraseña por defecto o cámbiela según sus prácticas de seguridad. La sintaxis y parámetros exactos dependen de la versión de firmware; confirme siempre con la documentación de Queclink correspondiente a su firmware.

## Notas de configuración

- La configuración por SMS está soportada y se muestra arriba, pero también pueden estar disponibles herramientas del fabricante o una interfaz USB/serial; elija el método que mejor se adapte a su flujo de instalación.  
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique siempre los comandos para su firmware específico del GV75MG.  
- Puede elegir transporte UDP o TCP; Plaspy soporta ambos y escucha en el puerto 8888 para todos los dispositivos mientras detecta automáticamente el protocolo.  
- Cuando use marcadores APN como {{apn}}, {{apnu}} y {{apnp}}, suministre los valores específicos del operador; omita usuario/contraseña si su operador no los requiere.  
- Tras aplicar cambios de configuración, reinicie el dispositivo si el fabricante recomienda un reboot para asegurar que los nuevos ajustes entren en vigor.

## Por qué usar Plaspy con esta configuración

Usar el GV75MG con Plaspy proporciona a las organizaciones visibilidad en tiempo real y resiliente para motocicletas, embarcaciones y activos al aire libre donde la robustez y la larga autonomía en espera son importantes. El envío de mensajes en búfer del dispositivo y el soporte para múltiples transportes, combinados con la detección de protocolo y la ingestión centralizada de Plaspy, facilitan mantener el rastreo continuo y el manejo de eventos en condiciones celulares variables.

Para obtener más información sobre Plaspy, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y referencia completa de comandos, consulte la documentación del fabricante en https://www.queclink.com/ ya que el comportamiento del equipo y los métodos de configuración pueden cambiar con el tiempo.
