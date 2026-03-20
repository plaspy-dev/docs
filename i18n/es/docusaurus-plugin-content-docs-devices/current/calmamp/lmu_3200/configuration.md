---
slug: /calmamp/lmu_3200/configuration
id: lmu_3200-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-3200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CalmAmp LMU-3200 y conectarlo a Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración CalmAmp LMU 3200
  - Configuración LMU 3200 para Plaspy
  - Configuración del servidor LMU 3200
  - Configuración rastreador GPS CalmAmp
  - Ajustes APN LMU 3200
  - Comandos SMS LMU 3200
  - Configuración telemetría LMU 3200
  - Configuración rastreador vehicular CalmAmp
  - Integración plataforma LMU 3200
  - Configuración dispositivo Plaspy
---

# CalmAmp - Configuración del LMU-3200

Esta página documenta el contexto público de configuración para usar el CalmAmp LMU-3200 con Plaspy. Reúne los ajustes prácticos de servidor y los comandos SMS de configuración disponibles públicamente y explica cómo preparar el dispositivo para reportar a la plataforma Plaspy. Use esta guía junto con la documentación oficial de CalmAmp y sus herramientas de instalación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que una única configuración de servidor funciona para varios modelos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que siga las instrucciones del fabricante cuando difieran de los ejemplos que se muestran aquí.

## Resumen de la configuración

El objetivo de este proceso de configuración es preparar el LMU-3200 para comunicarse de manera confiable con Plaspy, confirmar la conectividad y habilitar la visibilidad en la plataforma. Para unidades LMU-3200, el enfoque públicamente documentado suele emplear comandos SMS de configuración o las herramientas de gestión del fabricante para establecer el APN y el endpoint del servidor de Plaspy.

- Configure el APN de datos móviles y las credenciales para que el dispositivo pueda establecer una sesión de datos GPRS.
- Configure el dispositivo para que reporte a Plaspy usando el endpoint y el puerto del servidor compartido.
- Seleccione el modo de transporte soportado por el dispositivo si es necesario y guarde la configuración.
- Reinicie o aplique los ajustes para que el dispositivo inicie la conexión y comience a reportar.
- Verifique los ajustes y confirme que el dispositivo aparezca en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el LMU-3200:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y la detección del protocolo se realiza en la plataforma.

## Requisitos habituales antes de la configuración

- Una unidad LMU-3200 instalada y con alimentación con una SIM activa que soporte datos móviles y SMS.
- Acceso a la información identificadora del dispositivo, como el MID que devuelve el equipo mediante los comandos de verificación del fabricante.
- Permiso para enviar comandos SMS al equipo o acceso a las herramientas de gestión de CalmAmp utilizadas para ajustar parámetros.
- Valores de APN, nombre de usuario APN y contraseña APN del operador móvil cuando sean necesarios.
- Un plan para validar la conectividad una vez aplicados los ajustes, incluyendo acceso a Plaspy para verificación.
- Conocimientos básicos del firmware del dispositivo o acceso a recursos de soporte de CalmAmp para instrucciones específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el LMU-3200 se ajusta para enviar sus datos de ubicación y eventos al endpoint y puerto compartido del servidor Plaspy. Plaspy recibe esos mensajes, identifica automáticamente el protocolo del rastreador y presenta la ubicación y los eventos del dispositivo en la plataforma.

- El dispositivo se configura para apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Los mensajes salientes se envían al puerto 8888 donde Plaspy los recibe.
- El transporte puede ser UDP o TCP según los requisitos del dispositivo y la preferencia del instalador.
- Plaspy realiza la detección automática de protocolo, por lo que no es necesario seleccionar manualmente el protocolo en el servidor para que la plataforma interprete los mensajes.
- Una vez que el reporte comienza, el dispositivo se vuelve visible en Plaspy para monitoreo, eventos y diagnóstico.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de CalmAmp o a la herramienta de gestión para el LMU-3200, como comandos SMS o el sistema de gestión del proveedor.
2. Recupere el MID o identificador del dispositivo según lo requiera el equipo utilizando el comando de verificación para referenciar la unidad correcta.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
5. Seleccione el modo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
6. Configure el APN y las credenciales APN que solicite el operador móvil para que el dispositivo pueda usar datos GPRS.
7. Aplique o guarde la configuración y reinicie o reprograme el dispositivo si es necesario para que los cambios surtan efecto.
8. Valide que el dispositivo reporte a Plaspy comprobando el estado en Plaspy y usando los comandos de verificación del equipo para confirmar los ajustes.

## Ejemplos de comandos de configuración

El LMU-3200 puede configurarse enviando mensajes SMS utilizando el MID devuelto por el comando de verificación del dispositivo. Los comandos públicos a continuación se presentan en el orden en que comúnmente se aplican. Mantenga los marcadores tal como aparecen y reemplácelos con los valores de su operador.

- Recuperar el MID del dispositivo para usar en la configuración por SMS
```text
!R0
```
Nota: el dispositivo responderá con su MID, que es un identificador de 10 dígitos referenciado al enviar mensajes SMS de configuración.

- Establecer el APN del operador
```text
!RP,2306,0,[apn]
```

- Establecer el nombre de usuario del APN
```text
!RP,2314,0,[apnu]
```

- Establecer la contraseña del APN
```text
!RP,2315,0,[apnp]
```

- Establecer el servidor GPRS a la IP de Plaspy
```text
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor usado por Plaspy
```text
!RP,769,0,8888
```

- Reiniciar el rastreador para aplicar los cambios
```text
!R3,70,0
```
Label: Reboot command to apply configuration changes; perform this after saving settings.

- Verificar la configuración del dispositivo
```text
!RO
```
Nota: Explicación de los marcadores
- [apn] es el APN del operador de red móvil
- [apnu] es el nombre de usuario del APN cuando se requiere
- [apnp] es la contraseña del APN cuando se requiere

Envíe los mensajes SMS de configuración según su proceso de instalación y referenciando el MID que el dispositivo devuelve. El formato exacto de los mensajes SMS y si el MID debe anteponer el comando puede variar según el firmware y el método de aprovisionamiento, por lo que debe seguir las instrucciones del fabricante para la sintaxis SMS correcta.

## Notas de configuración

- El firmware y los flujos de aprovisionamiento pueden variar entre revisiones de hardware y las herramientas de gestión de CalmAmp como PULS. Verifique la sintaxis de comando correcta para su firmware.
- El dispositivo soporta configuración por SMS con los comandos públicos anteriores, pero los portales de gestión de CalmAmp o las actualizaciones OTA pueden ofrecer un método alternativo y centralizado.
- La elección entre UDP o TCP depende de la preferencia del instalador y de las condiciones de la red. Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente.
- Siempre confirme los valores del APN con el operador móvil y pruebe la conectividad antes de desplegar a gran escala.
- Use la documentación del fabricante para cualquier configuración avanzada PEG u OBD II que esté fuera de los ajustes básicos de servidor y APN.

## Por qué usar Plaspy con esta configuración

Configurar el CalmAmp LMU-3200 para reportar a Plaspy brinda a las organizaciones visibilidad centralizada de ubicaciones y eventos de dispositivo en una flota mixta mediante una única configuración de servidor compartido. Las capacidades diagnósticas y de eventos del LMU-3200, combinadas con la detección de protocolos de Plaspy, facilitan la recopilación de datos de vehículos y telemetría sin la complejidad de servidores por dispositivo.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify the official CalmAmp documentation at http://www.calamp.com/ before applying changes in production.
