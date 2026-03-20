---
slug: /eelink/gpt26/configuration
id: gpt26-configuration
sidebar_label: Configuration
title: EElink - GPT26 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el rastreador EElink GPT26 para usar con Plaspy mediante servidores públicos y comandos SMS para seguimiento confiable
keywords:
  - configuracion EElink GPT26
  - instalacion EElink GPT26
  - configuracion GPT26 Plaspy
  - configuracion rastreador GPS EElink
  - configuracion servidor GPT26
  - configuracion plataforma EElink
  - configuracion SMS GPT26
  - protocolo EELINK Plaspy
  - configuracion rastreador GPS Plaspy
  - seguimiento vehicular GPT26
---

# EElink - Configuración del GPT26

Esta página documenta el contexto público de configuración para usar el rastreador EElink GPT26 con Plaspy. Se centra en los ajustes de servidor prácticos y en los comandos SMS que se utilizan habitualmente para apuntar un dispositivo GPT26 hacia Plaspy, de modo que el equipo reporte ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando está disponible, esta página incluye los comandos SMS publicados para la configuración pública del GPT26 y explica cómo aplicar los ajustes del servidor Plaspy en esos comandos.

## Resumen de configuración

El proceso de configuración prepara al GPT26 para comunicarse de manera confiable con Plaspy y que las ubicaciones y la telemetría básica sean visibles en la plataforma. Los pasos a continuación resumen los objetivos prácticos para la configuración y la verificación.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que los mensajes de ubicación y estado lleguen a la plataforma.
- Configurar el APN y los parámetros GPRS del dispositivo para que use datos móviles al reportar.
- Establecer un temporizador de reportes periódico adecuado a su caso de uso y a las consideraciones de batería.
- Verificar los ajustes y la conectividad con el comando de verificación del dispositivo o confirmando la visibilidad en Plaspy.
- Opcionalmente, restaurar valores de fábrica o aplicar zona horaria y otros parámetros operativos antes del despliegue.

## Ajustes del servidor Plaspy

Use los siguientes valores públicos de Plaspy al configurar el GPT26:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte mediante UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Estos valores corresponden al endpoint y puerto compartidos que Plaspy usa para los dispositivos compatibles.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con plan de datos y capacidad de SMS insertada en el GPT26.
- Acceso al número de teléfono del propietario del dispositivo para enviar comandos SMS de configuración o acceso a las herramientas oficiales de EElink.
- Conocimiento del APN del operador móvil de la SIM para configurarlo en el equipo.
- El dispositivo debe estar cargado y en un entorno de prueba seguro donde pueda obtener ubicación y conectarse a datos móviles.
- Acceso a la documentación del fabricante o a recursos de soporte para comportamientos específicos del firmware.

## Cómo se conecta este rastreador a Plaspy

El GPT26 puede configurarse para enviar su ubicación y mensajes de estado al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo sea visible y administrable en la plataforma. Plaspy detecta y procesa el protocolo del rastreador automáticamente cuando el dispositivo se conecta.

- El dispositivo se configura con un APN y una entrada GPRS que apuntan a d.plaspy.com o a la IP del servidor Plaspy.
- Los datos se envían al servidor Plaspy en el puerto 8888 usando UDP o TCP según lo seleccione el dispositivo.
- Los reportes periódicos se controlan con el ajuste de temporizador del dispositivo, por lo que las actualizaciones de ubicación llegan a Plaspy según el intervalo configurado.
- Plaspy procesa los mensajes entrantes y los asocia con el registro del dispositivo correspondiente para su visibilidad y monitoreo.
- La verificación de la conexión exitosa se realiza comprobando que el dispositivo aparezca y reporte información en Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de EElink para el GPT26, generalmente mediante comandos SMS o la herramienta del fabricante descrita en la documentación de EElink.
2. Ingrese el nombre de host del servidor Plaspy d.plaspy.com o, alternativamente, la IP del servidor 54.85.159.138 como servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888.
4. Seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Configure el APN y cualquier usuario o contraseña de APN que requiera el operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario.
7. Valide que el dispositivo reporte a Plaspy comprobando la actividad del dispositivo en la plataforma o usando la consulta de parámetros del equipo.

## Ejemplo de comandos de configuración

El GPT26 admite configuración vía SMS. Los comandos a continuación son los publicados y usados comúnmente para la configuración inicial y básica. Envíe cada comando como SMS al número del dispositivo en el orden indicado cuando el orden sea importante.

- Reinicio opcional a valores de fábrica (usar solo si necesita restaurar los valores por defecto):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Configurar el APN del operador
Nota: [apn] es un marcador para el APN de su operador móvil. Si su operador requiere usuario y contraseña del APN, incluya [apnu] y [apnp] donde corresponda.
```text
APN,[apn]# 
```
O, si se requieren usuario y contraseña:
```text
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS a Plaspy por dominio y puerto (usa dominio de Plaspy):
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS a Plaspy por IP y puerto (usa IP del servidor Plaspy):
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de ubicación cada 60 segundos:
```text
TIMER,60#
```

- Verificar parámetros actuales del dispositivo:
```text
PARAM#
```

Envíe estos comandos SMS al número del GPT26. Reemplace los marcadores como [apn], [apnu] y [apnp] por los valores de su operador antes de enviar.

## Notas de configuración

- La configuración por SMS es un método publicado y soportado para el GPT26; confirme que el dispositivo acepta comandos SMS y que su SIM puede recibir mensajes.
- Las versiones de firmware y las revisiones de hardware pueden cambiar el comportamiento de los comandos o las opciones disponibles; consulte la documentación de EElink correspondiente al firmware de su unidad.
- Puede elegir el servidor por dominio o por IP. Tanto SERVER,1,d.plaspy.com,8888# como SERVER,0,54.85.159.138,8888# son formas públicas válidas.
- Seleccione UDP o TCP según la preferencia del instalador o los requisitos de la red; Plaspy soporta ambos y detectará el protocolo cuando lleguen los mensajes.
- Después de aplicar los ajustes, permita tiempo para que el dispositivo se registre en la red y verifique la conectividad en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el GPT26 ofrece una forma sencilla de consolidar las ubicaciones y el estado de dispositivos a través de una flota o conjunto de activos aprovechando el endpoint compartido de Plaspy y la detección automática de protocolo. Configurar el GPT26 para que reporte a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888 permite que el dispositivo sea descubierto y procesado por Plaspy sin necesidad de endpoints personalizados por dispositivo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la información de configuración y la sintaxis de comandos más recientes en el sitio del fabricante https://www.eelink.com.cn/.
