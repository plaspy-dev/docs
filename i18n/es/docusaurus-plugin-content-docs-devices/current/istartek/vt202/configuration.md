---
slug: /istartek/vt202/configuration
id: vt202-configuration
sidebar_label: Configuration
title: iStartek - VT202 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador iStartek VT202 y conectarlo a Plaspy mediante servidor compartido, SMS o GPRS
keywords:
  - configuración iStartek VT202
  - configuración VT202 Plaspy
  - configuración rastreador iStartek
  - configuración servidor VT202
  - configuración SMS VT202
  - ajustes GPRS VT202
  - integración GPS Plaspy
  - configuración plataforma VT202
  - configurar rastreador iStartek
  - configuración seguimiento flota VT202
---

# iStartek - Configuración del VT202

Esta página explica el contexto público de configuración para usar el rastreador iStartek VT202 con Plaspy. Detalla los ajustes de servidor compartido que Plaspy requiere y muestra los comandos SMS y la configuración GPRS publicados públicamente para el VT202, de modo que pueda preparar el dispositivo para enviar datos a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT202 admite configuración por SMS y ajustes GPRS, por lo que esta guía se centra en aplicar los valores públicos de Plaspy y validar la conectividad.

## Resumen de la configuración

Este proceso prepara el VT202 para transmitir datos de posición y alarmas a Plaspy, ya sea apuntando sus ajustes GPRS al servidor de Plaspy o mediante los comandos SMS del dispositivo. El objetivo es asegurar que el rastreador se comunique de forma fiable con el backend de Plaspy para que el dispositivo aparezca y se actualice correctamente en la plataforma.

- Configure la entrada del servidor del rastreador para apuntar al endpoint de Plaspy para reportes en tiempo real.
- Establezca el APN y los parámetros GPRS del equipo para que pueda abrir una sesión de datos.
- Elija el modo de transporte (UDP o TCP) si el equipo requiere selección explícita.
- Valide que el dispositivo envíe datos a Plaspy y confirme su visibilidad en la plataforma.
- Use los comandos SMS del fabricante o las herramientas oficiales para aplicar la configuración.

## Ajustes de servidor de Plaspy

Al configurar el VT202 para Plaspy, utilice los siguientes ajustes públicos exactamente como se indican:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP (el dispositivo puede configurarse en cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo que utilice el rastreador.

## Requisitos típicos antes de la configuración

- Un dispositivo VT202 con alimentación y capacidad para recibir comandos SMS, o una SIM con GPRS según lo requiera el equipo.
- Acceso al instalador del dispositivo o al método oficial de configuración de iStartek, como la interfaz por SMS o el software del proveedor.
- Un APN válido para la SIM que habilite GPRS si va a usar reportes por servidor.
- Capacidad para enviar mensajes SMS al número del dispositivo para la configuración mediante SMS.
- Un proceso para validar que el equipo está visible y reportando en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El VT202 envía datos de posición y eventos a la plataforma Plaspy reportando al endpoint y puerto compartidos de Plaspy. Una vez que el servidor GPRS del equipo o la configuración por SMS apunten a Plaspy, la plataforma recibirá la telemetría y mostrará el dispositivo en la cuenta.

- El rastreador debe configurarse para reportar al dominio o IP del servidor de Plaspy usando el puerto 8888.
- Los datos se transmiten por UDP o TCP según la selección de transporte del dispositivo.
- Plaspy detecta automáticamente el protocolo cuando llegan los datos.
- Las actualizaciones de posición y alarmas enviadas por el VT202 son recibidas y procesadas por Plaspy para su monitoreo.
- La validación consiste en confirmar que la telemetría llega a Plaspy y que el dispositivo aparece como en línea.

## Flujo común de configuración

1. Acceda al método oficial de configuración de iStartek para el VT202, normalmente comandos SMS o la herramienta del proveedor recomendada.
2. Configure el APN del equipo usando el comando de APN para que el rastreador pueda iniciar una sesión GPRS.
3. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto en 8888 y seleccione UDP o TCP si el dispositivo requiere una selección de transporte explícita.
5. Aplique o guarde la configuración en el equipo y reinicie el rastreador si el dispositivo o el firmware lo piden.
6. Valide que el VT202 reporte a Plaspy y aparezca en línea en la plataforma.

## Ejemplos de comandos de configuración

El VT202 soporta configuración vía SMS. A continuación están los comandos SMS públicos en el orden comúnmente usado. Preserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} al aplicar los comandos; éstos deben reemplazarse por los valores correctos del APN proporcionados por el operador móvil.

- Reinicio de fábrica opcional (usar al preparar un equipo por primera vez o para solucionar problemas):
```text
FACTORY#
```

- Establecer la zona horaria en UTC 0 (ejemplo):
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su operador requiere usuario o contraseña, facilite {{apnu}} y {{apnp}} como segundo y tercer parámetro:
```text
APN,{{apn}}# 
```
o, cuando se requiera usuario y contraseña:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Establecer el servidor GPRS usando el dominio de Plaspy (UDP o TCP determinado por la selección de transporte):
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente establecer el servidor GPRS usando la IP de Plaspy:
```text
SERVER,0,54.85.159.138,8888#
```

- Definir el intervalo de envío de posición a 60 segundos:
```text
TIMER,60#
```

- Verificar parámetros actuales:
```text
PARAM#
```

Notas sobre marcadores de posición: {{apn}} es el APN de la red móvil. {{apnu}} y {{apnp}} son opcionales y corresponden al nombre de usuario y contraseña del APN si su operador los solicita.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el comportamiento de los comandos o los parámetros disponibles. Confirme la sintaxis exacta de los comandos con la documentación de iStartek para el firmware de su equipo.
- El VT202 soporta configuración por SMS como se muestra arriba. Use SMS cuando no disponga de herramientas de software.
- Si el equipo requiere selección de transporte, elija UDP o TCP según corresponda; Plaspy detectará automáticamente el protocolo entrante, pero el dispositivo debe poder enviar usando el transporte configurado.
- Todos los dispositivos en Plaspy usan el mismo puerto para la comunicación con el servidor, por lo que debe establecer el puerto 8888 según lo indicado.
- Mantenga las credenciales del APN y la provisión de la SIM correctas para asegurar una conexión GPRS estable.

## Por qué usar Plaspy con esta configuración

Usar el VT202 con Plaspy ofrece una vía sencilla para obtener visibilidad de la flota y monitoreo de eventos al apuntar el rastreador al endpoint compartido de Plaspy. La detección automática de protocolos de Plaspy y la configuración unificada de puerto simplifican la integración y reducen las diferencias entre dispositivos al gestionar múltiples rastreadores. El VT202, con su factor de forma compacto y capacidades de alarma, es adecuado para integrarse rápidamente en la plataforma.

Para obtener más información sobre Plaspy y la integración de dispositivos compatibles, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles del fabricante, verifique la documentación oficial de iStartek en https://istartek.com/.
