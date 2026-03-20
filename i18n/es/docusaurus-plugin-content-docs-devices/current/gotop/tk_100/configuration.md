---
slug: /gotop/tk_100/configuration
id: tk_100-configuration
sidebar_label: Configuration
title: GOTOP - TK-100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar GOTOP TK-100 con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - configuración GOTOP TK-100
  - instalación GOTOP TK-100
  - GOTOP TK-100 Plaspy
  - configuración rastreador GOTOP
  - configuración GPS mascota
  - configuración servidor TK-100
  - configuración seguimiento TK-100
  - configuración plataforma rastreador GPS
  - configuración rastreador GPRS
  - configuración rastreador Plaspy
---

# GOTOP - Configuración del TK-100

Esta página explica el contexto público de configuración para usar el rastreador GOTOP TK-100 con Plaspy. Se enfoca en los ajustes prácticos del servidor y en los pasos generales de configuración que permiten al TK-100 enviar datos de posición y alertas a la plataforma Plaspy. Esta guía complementa la documentación del dispositivo y las herramientas del fabricante, no las reemplaza.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para comprender el endpoint de Plaspy y el flujo típico; siempre verifique comandos y menús específicos del dispositivo con la documentación de GOTOP y el firmware que tenga.

## Resumen de la configuración

El objetivo al configurar el TK-100 para Plaspy es apuntar el dispositivo al endpoint del servidor de Plaspy y verificar que el rastreador reporte correctamente ubicación y alarmas. El TK-100 admite métodos de reporte por SMS y GPRS; esta configuración garantiza que esos reportes lleguen a Plaspy para su visualización y monitoreo.

- Configure el TK-100 para que reporte al endpoint y puerto compartido de Plaspy.
- Seleccione el método de transporte que soporte la interfaz del dispositivo cuando sea requerido (UDP o TCP).
- Valide la conectividad para que los mensajes de ubicación y alarmas lleguen a Plaspy.
- Confirme que las alertas de geocerca, batería baja, movimiento y vibración sean visibles en la plataforma.
- Guarde y, si es necesario, reinicie el dispositivo para que los cambios surtan efecto.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el GOTOP TK-100. Estos son los valores públicos que Plaspy utiliza para la integración de dispositivos y la detección automática de protocolos.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP may be selected if the device requires a transport choice
- Plaspy automatically detects the tracker protocol so devices using standard tracker protocols will be recognized without additional platform-level configuration

## Requisitos típicos antes de la configuración

- Una unidad TK-100 cargada y funcional con acceso a su método de configuración.
- Una SIM válida con servicio GPRS o SMS activo si va a usar datos móviles o configuración/reportes por SMS.
- Acceso a la herramienta oficial de configuración GOTOP, lista de comandos SMS o al menú de configuración del dispositivo.
- Conectividad de red básica para que el dispositivo alcance Internet cuando use reportes por GPRS.
- Una cuenta en Plaspy y la capacidad de registrar o identificar el dispositivo en Plaspy una vez que comience a reportar.
- Conocimiento de cómo su firmware acepta ajustes de servidor y puerto (comandos SMS, interfaz web o aplicación de configuración).

## Cómo se conecta este rastreador a Plaspy

Cuando el TK-100 se configura para reportar a Plaspy, envía sus actualizaciones de posición y mensajes de alarma al endpoint y puerto del servidor Plaspy. Plaspy recibe esos mensajes, determina automáticamente el protocolo del rastreador y presenta los datos del dispositivo en la plataforma para monitoreo y revisión histórica.

- El dispositivo se apunta a d.plaspy.com o a la IP numérica 54.85.159.138 y usa el puerto 8888.
- Seleccione UDP o TCP en el dispositivo si el flujo de configuración solicita un transporte.
- El rastreador envía actualizaciones regulares de ubicación y alarmas de evento (geocerca, batería baja, movimiento, vibración) al endpoint de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda parsear los mensajes sin selección de protocolo por dispositivo.
- Tras el reporte exitoso, el dispositivo queda visible y gestionable desde la interfaz de Plaspy.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración GOTOP para el TK-100 (lista de comandos SMS, aplicación móvil o herramienta del proveedor).
2. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o utilice la IP numérica del servidor 54.85.159.138 si lo prefiere.
3. Configure el puerto del dispositivo a 8888 para que los reportes se dirijan al listener de Plaspy.
4. Si el dispositivo requiere seleccionar un protocolo de transporte, elija UDP o TCP según las opciones del equipo.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe los comandos SMS para persistir los ajustes.
6. Reinicie el TK-100 si las instrucciones del fabricante indican que es necesario reiniciar para aplicar los nuevos ajustes de red.
7. Verifique que el TK-100 esté reportando a Plaspy comprobando la presencia del dispositivo y la telemetría en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los comandos y la sintaxis exacta para el TK-100 dependen del firmware GOTOP y del método que utilice (comandos SMS o herramienta de configuración). Dado que los conjuntos de comandos del fabricante varían, consulte la documentación oficial de comandos SMS de GOTOP o el manual del dispositivo para la sintaxis exacta.

Si su dispositivo admite configuración por SMS, un flujo típico por SMS sigue el patrón de enviar comandos de servidor y puerto vía SMS y luego un comando para activar el reporte. Reemplace los marcadores por sus valores cuando corresponda.

Por ejemplo, un estilo de comando por SMS podría aparecer así en la guía del fabricante (esto es un formato ilustrativo; confirme los comandos exactos en el manual de GOTOP):

- Set server domain or IP
```
SET IP d.plaspy.com
```

- Or set server by numeric IP
```
SET IP 54.85.159.138
```

- Set port
```
SET PORT 8888
```

- Set transport if required (replace TRANSPORT with UDP or TCP)
```
SET TRANSPORT UDP
```

- Save or activate reporting
```
SAVE
```

Nota: La palabra clave real del SMS, la sintaxis y el orden de los comandos dependen del firmware del dispositivo. Si su modelo usa una estructura distinta de comandos o una aplicación de configuración, siga las instrucciones oficiales de GOTOP.

## Observaciones sobre la configuración

- El firmware y la sintaxis de comandos pueden diferir según la revisión de hardware y la región del TK-100; siempre confirme los comandos SMS o los pasos de la herramienta con el manual del dispositivo.
- Si el dispositivo ofrece elegir entre UDP y TCP, UDP se usa comúnmente para reportes de rastreadores, pero seleccione el transporte según las recomendaciones de GOTOP y el entorno de red.
- La configuración por SMS es comúnmente soportada en el TK-100 para actualizaciones básicas de servidor y puerto; use la lista oficial de comandos SMS de GOTOP para el formato preciso.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que servidor y puerto son los valores críticos a aplicar.
- Después de cambiar los ajustes del servidor, espere un corto período para que el dispositivo se reconecte y verifique los reportes en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP TK-100 para reportar a Plaspy ofrece a propietarios de mascotas y gestores de flotas una forma centralizada de ver en tiempo real la ubicación, las alertas de geocerca y las alarmas del dispositivo en una sola plataforma. La detección automática de protocolos de Plaspy y su modelo de servidor compartido simplifican la integración, reducen la necesidad de seleccionar protocolos por dispositivo y le permiten concentrarse en el monitoreo y la respuesta.

Learn more about how Plaspy can work with compatible trackers at https://www.plaspy.com. For device specific commands, firmware behavior, and the latest setup instructions for the GOTOP TK-100, always verify details on the manufacturer site https://www.gotop.cc/ as specifications and methods may change over time.
