---
slug: /queclink/gb100cg/configuration
id: gb100cg-configuration
sidebar_label: Configuration
title: QuecLink - GB100CG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GB100CG con ajustes de servidor Plaspy y comandos SMS para conectar el rastreador
keywords:
  - Configuración QuecLink GB100CG
  - Instalación QuecLink GB100CG
  - Configuración GB100CG Plaspy
  - Configuración del rastreador QuecLink
  - Configuración rastreador GPS Plaspy
  - Rastreo de vehículos GB100CG
  - Configuración rastreador UBI
  - Comandos SMS GB100CG
  - Configuración rastreador para flotas
  - Compatibilidad QuecLink Plaspy
---

# QuecLink - Configuración del GB100CG

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GB100CG con Plaspy. Resume los ajustes de servidor que requiere Plaspy, muestra ejemplos de comandos SMS proporcionados por el fabricante y explica los pasos prácticos para preparar el dispositivo de modo que Plaspy pueda recibir su telemetría y eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del GB100CG. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos y ejemplos aquí como un punto de partida práctico y confirme los detalles con la documentación oficial de QuecLink cuando sea necesario.

## Resumen de la configuración

Este proceso prepara el GB100CG para comunicarse de forma confiable con Plaspy apuntando el dispositivo al endpoint compartido de Plaspy, seleccionando el transporte y habilitando los informes y entradas de alarma necesarios para su implementación.

- Configure el servidor GPRS o el endpoint TCP/UDP del dispositivo para que los informes de ubicación y eventos se enruten a Plaspy.
- Establezca el APN y las credenciales del operador para la conectividad celular cuando la SIM u operador lo requieran.
- Habilite los intervalos de reporte y las entradas de eventos para que el GB100CG envíe posiciones periódicas y datos de alarma a Plaspy.
- Verifique que el dispositivo sea visible en Plaspy después de aplicar los ajustes y realice un reinicio si es necesario.
- Use SMS o la herramienta de configuración del fabricante según el método de aprovisionamiento disponible para aplicar los parámetros.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos configurados para Plaspy usan el mismo puerto y la plataforma detecta de forma automática el protocolo del rastreador cuando este se conecta.

## Requisitos habituales antes de la configuración

- Un GB100CG con alimentación instalado o accesible para configuración y reinicio.
- Una SIM o eSIM activa con plan de datos móviles válido y los ajustes APN correctos del operador.
- Acceso al canal de configuración soportado por el fabricante, como comandos SMS o software del proveedor.
- Conocimiento de la contraseña del dispositivo si los comandos SMS o remotos requieren autenticación. Los comandos de ejemplo usan la contraseña por defecto queclink donde corresponde.
- Un modo de enviar mensajes SMS al dispositivo si se utiliza aprovisionamiento por SMS, o acceso a la herramienta del proveedor para configuración directa.
- Confirmación de la versión de firmware del dispositivo cuando aplique, ya que los conjuntos de comandos o parámetros pueden variar entre versiones.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con los ajustes de Plaspy, el GB100CG reporta posición, telemetría y datos de eventos al endpoint y puerto compartidos de Plaspy indicados arriba. Plaspy ingiere esos informes y los asocia con los registros de dispositivo correspondientes para seguimiento en tiempo real y análisis histórico.

- El dispositivo se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los informes pueden enviarse por UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Las actualizaciones programadas de posición y los eventos de alarma (por ejemplo SOS o manipulación) se reenvían a Plaspy y quedan disponibles en paneles y alertas.
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse, por lo que no necesita seleccionar un protocolo dentro de la plataforma.
- Después de la configuración, verifique que el dispositivo aparezca en línea en Plaspy y que se estén recibiendo los informes periódicos.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración QuecLink o al software para el GB100CG, o prepárese para enviar comandos SMS si va a utilizar aprovisionamiento por SMS.
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo indique la herramienta del fabricante o el comando SMS.
3. Configure el puerto en 8888, teniendo en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP en la configuración de transporte del dispositivo si éste requiere selección explícita.
5. Configure el APN y cualquier credencial del operador necesaria para la conectividad de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo cuando lo requieran las instrucciones del fabricante.
7. Valide que el dispositivo informa a Plaspy comprobando si llegan mensajes de posición o latidos en la plataforma.

## Ejemplos de comandos de configuración

El GB100CG puede configurarse usando comandos SMS con el formato que se muestra a continuación. Estos comandos se proporcionan como ejemplo público del contenido de configuración del dispositivo. La configuración de ejemplo usa la contraseña del dispositivo queclink como token de autenticación en cada comando donde es necesario.

Nota sobre los marcadores de posición
- [apn] = su APN del operador móvil
- [apnu] = nombre de usuario del APN cuando el operador lo requiere
- [apnp] = contraseña del APN cuando el operador lo requiere

1. Paso inicial opcional para restaurar la configuración de fábrica
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
Esto restablece la configuración del dispositivo al estado de fábrica. Úselo solo cuando sea necesario durante el aprovisionamiento inicial.

2. Establecer la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Definir el APN del operador
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Reemplace los marcadores [apn], [apnu] y [apnp] con los valores de su operador. Si no se requiere nombre de usuario o contraseña, deje esos campos vacíos según lo permita el dispositivo.

4. Configurar el servidor GPRS para apuntar a Plaspy
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando incluye tanto el dominio de Plaspy d.plaspy.com como la IP 54.85.159.138 y establece el puerto 8888. La selección del transporte (UDP o TCP) se maneja según el parámetro de firmware del dispositivo cuando aplique. Plaspy detecta automáticamente el protocolo usado cuando el dispositivo se conecta.

5. Establecer intervalos de reporte a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
Este ejemplo configura reportes periódicos con intervalos de 60 segundos como se muestra.

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Estos comandos SMS son ejemplos y deben usarse de acuerdo con su política de despliegue y con el conjunto de comandos específico del firmware de la unidad que esté configurando.

## Notas de configuración

- Las diferencias de firmware pueden cambiar el orden de parámetros y los comandos soportados. Confirme la sintaxis exacta de los comandos SMS para el firmware de su dispositivo.
- El GB100CG soporta aprovisionamiento por SMS como se muestra, pero las herramientas del proveedor pueden ofrecer una alternativa gráfica con los mismos campos.
- Elija UDP o TCP según la fiabilidad de la red y el desempeño del operador; Plaspy aceptará cualquiera y detectará el protocolo automáticamente.
- Mantenga la contraseña del dispositivo segura. Los ejemplos anteriores usan la contraseña por defecto queclink según los comandos públicos; actualice la contraseña si su política de seguridad lo requiere.
- Preserve los marcadores de APN al preparar scripts de aprovisionamiento masivo y reemplácelos con los valores del operador según el perfil de la SIM.

## Por qué usar Plaspy con esta configuración

Configurar el GB100CG para que reporte a Plaspy proporciona una forma práctica de recopilar datos GNSS y de movimiento de alta fidelidad junto con informes de eventos para gestión de flotas, telemática para seguros y flujos de trabajo de seguridad. Apuntar el dispositivo al endpoint compartido y al puerto de Plaspy garantiza la ingesta consistente y la disponibilidad de datos de ubicación y alarmas en los paneles y sistemas de alerta de Plaspy.

Learn more about Plaspy and how it processes device telemetry on the main website https://www.plaspy.com. For device specific commands, firmware behavior, and the latest configuration details verify current information with the manufacturer at https://www.queclink.com/
