---
slug: /calmamp/lmu_2700/configuration
id: lmu_2700-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-2700 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CalmAmp LMU-2700 con ajustes de servidor Plaspy y comandos SMS para integrar el rastreador
keywords:
  - CalmAmp LMU-2700 configuración
  - CalmAmp LMU-2700 instalación
  - LMU-2700 Plaspy
  - configuración rastreador LMU-2700
  - ajustes servidor CalmAmp
  - configuración SMS LMU-2700
  - configuración seguimiento de flotas
  - instalación seguimiento vehicular
  - configuración CalmAmp PULS
  - integración rastreador Plaspy
---

# CalmAmp - Configuración del LMU-2700

Esta página describe el contexto público de configuración para usar el CalmAmp LMU-2700 con la plataforma Plaspy. Resume los ajustes de servidor compartidos que Plaspy espera, muestra los comandos SMS más comunes para la puesta a punto del LMU-2700 y explica el flujo típico para preparar el dispositivo para reportar a Plaspy. Utilice esta guía para saber qué cambiar en el equipo y cómo Plaspy recibe los datos del rastreador.

Plaspy utiliza un único endpoint de servidor y puerto compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan. Los pasos de configuración en el lado del fabricante para el LMU-2700 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como CalAmp PULS o la configuración por SMS. Los ejemplos a continuación reflejan comandos públicos y ajustes de servidor; siempre verifique la documentación actual del fabricante antes del despliegue final.

## Resumen de configuración

El objetivo de este proceso es preparar un LMU-2700 para que envíe telemetría y eventos de forma confiable a Plaspy y sea visible en la plataforma. En unidades LMU-2700, la configuración suele aplicarse por aire mediante sistemas del fabricante o directamente por comandos SMS cuando ese método está disponible.

- Configure el APN y los parámetros GPRS para que la unidad pueda alcanzar el endpoint de red de Plaspy.
- Apunte el dispositivo al servidor Plaspy d.plaspy.com o a la IP equivalente para enrutar la telemetría hacia la plataforma.
- Establezca el puerto compartido de Plaspy para que la unidad envíe paquetes al puerto correcto del servicio.
- Seleccione UDP o TCP como transporte si la unidad exige elegir el protocolo de transporte.
- Reinicie o haga reboot del dispositivo cuando sea necesario para que los nuevos ajustes entren en vigor.
- Verifique la configuración y confirme que el dispositivo está reportando a Plaspy antes de finalizar la instalación.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy behavior: todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos a la configuración

- Un LMU-2700 con alimentación instalado o accesible para la configuración y pruebas.
- Una SIM activa con datos habilitados y los ajustes APN correctos del operador móvil si se usa conexión celular.
- Acceso al método de configuración que vaya a utilizar, como configuración por SMS, CalAmp PULS o las herramientas oficiales de CalAmp.
- Un medio para recibir u observar las respuestas del dispositivo (respuestas SMS, consola serial o registros de conectividad de la plataforma) para confirmar los cambios.
- Conocimiento de la versión de firmware del equipo y de cualquier nota del proveedor que afecte la sintaxis de los comandos o las funciones disponibles.
- Acceso administrativo a la plataforma de flotas para confirmar que el rastreador aparece en Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El LMU-2700 envía mensajes de posición y eventos desde el vehículo a Plaspy conectándose por datos móviles al endpoint y puerto de servidor configurados. Plaspy recibe las conexiones entrantes en el endpoint compartido y asocia el dispositivo a su cuenta una vez que el dispositivo transmite los datos en el protocolo esperado.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El equipo puede usar UDP o TCP para enviar telemetría según la configuración elegida.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma.
- Una vez en reporte, los datos de ubicación y eventos del LMU-2700 se procesan para que sean visibles y generen alertas dentro de Plaspy.
- Reglas PEG en el dispositivo o eventos del acelerómetro configurados en el LMU-2700 pueden generar mensajes de evento que se reenvían a Plaspy para monitoreo.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial del fabricante (por ejemplo CalAmp PULS o comandos SMS) para su LMU-2700.
2. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes GPRS/servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (todos los dispositivos en Plaspy usan el mismo puerto).
4. Elija UDP o TCP como transporte si la configuración del dispositivo exige seleccionar un protocolo de transporte.
5. Guarde o aplique la configuración en el dispositivo usando la herramienta del fabricante o enviando los comandos SMS necesarios.
6. Reinicie el dispositivo si el flujo o los comandos indican que es necesario para aplicar los ajustes.
7. Valide que el dispositivo está reportando a Plaspy comprobando las conexiones entrantes o la visibilidad del dispositivo en la plataforma.

## Ejemplos de comandos de configuración

El LMU-2700 soporta comandos de configuración basados en SMS. El ID en estos comandos es el MID de 10 dígitos que devuelve el comando inicial !R0. Conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} al sustituir los valores de su operador.

To request the device ID (MID):
```
!R0
```

Set the operator APN (replace {{apn}} with your carrier APN):
```
!RP,2306,0,{{apn}}
```

Set the APN username (replace {{apnu}} with the username if required):
```
!RP,2314,0,{{apnu}}
```

Set the APN password (replace {{apnp}} with the password if required):
```
!RP,2315,0,{{apnp}}
```

Set the GPRS server IP to Plaspy:
```
!RP,2319,0,54.85.159.138
```

Set the server port to Plaspy port 8888:
```
!RP,769,0,8888
```

Reboot the tracker to apply changes (recommended after applying settings):
```
!R3,70,0
```

Check current settings on the device:
```
!RO
```

Notas sobre los comandos anteriores:
- Los comandos deben enviarse por SMS al LMU-2700 según la lista pública de comandos.
- El dispositivo responde a los comandos y el MID devuelto por !R0 se usa como ID objetivo en algunos flujos de trabajo.
- Mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} intactos al reemplazarlos con los valores de su operador.

## Notas sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los IDs de comando disponibles o la sintaxis SMS; verifique la sintaxis con la documentación actual de CalAmp para su firmware.
- El LMU-2700 admite configuración por SMS como se muestra arriba, pero muchas instalaciones utilizan CalAmp PULS u otras herramientas del proveedor para el aprovisionamiento OTA.
- Si el dispositivo requiere selección de transporte, pruebe tanto UDP como TCP para confirmar el comportamiento más adecuado para su despliegue; Plaspy soporta ambos.
- Siempre confirme que las credenciales APN que proporcione permiten sesiones de datos GPRS y que la SIM tiene datos habilitados.
- Aplicar los ajustes y realizar un reinicio controlado ayuda a garantizar que el rastreador se registre en el endpoint de Plaspy después de los cambios.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el CalmAmp LMU-2700 ofrece una forma directa de centralizar los datos de seguimiento de flotas procedentes de un equipo de rastreo vehicular probado. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la integración, mientras que las capacidades de eventos del LMU-2700 y las opciones de gestión OTA brindan flexibilidad tanto para el despliegue inicial como para el mantenimiento continuo del dispositivo.

To learn more about Plaspy and how it integrates with devices like the CalmAmp LMU-2700 visit https://www.plaspy.com. For the latest device-specific configuration commands, firmware notes, and detailed installation guides always verify the current information on the manufacturer website http://www.calamp.com/ since setup methods and firmware behavior can change over time.
