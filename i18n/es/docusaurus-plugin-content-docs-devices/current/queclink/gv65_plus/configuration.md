---
slug: /queclink/gv65_plus/configuration
id: gv65_plus-configuration
sidebar_label: Configuration
title: QuecLink - GV65 Plus Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el QuecLink GV65 Plus con Plaspy, incluyendo ajustes de servidor, comandos SMS y checklist
keywords:
  - Configuración QuecLink GV65 Plus
  - Instalación QuecLink GV65 Plus
  - GV65 Plus Plaspy
  - Configuración servidor GV65 Plus
  - Configuración rastreador GPS QuecLink
  - Configuración SMS GV65 Plus
  - Ajustes APN QuecLink
  - Configuración rastreador Plaspy
  - Configuración rastreador de vehículo
  - Configuración seguimiento de flotas
---

# QuecLink - Configuración del GV65 Plus

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GV65 Plus con Plaspy. Resume los ajustes de servidor de Plaspy que debe aplicar, los requisitos comunes previos a la instalación y ejemplos de comandos SMS frecuentemente usados con este modelo. Use esta guía para alinear el dispositivo con Plaspy y que el rastreador informe ubicación y eventos a su cuenta.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GV65 Plus soporta modos de reporte por SMS y por datos móviles; los comandos de ejemplo a continuación muestran un flujo común basado en SMS e incluyen marcadores como {{apn}} que usted debe reemplazar por los valores de su operador.

## Resumen de configuración

Un proceso de configuración claro prepara el GV65 Plus para comunicarse de forma fiable con la plataforma Plaspy. Los pasos se enfocan en establecer datos móviles o control por SMS, apuntar el equipo a los endpoints de Plaspy y confirmar que el rastreador informe correctamente.

- Configure los ajustes de red del dispositivo, incluido el APN, para que el rastreador tenga conectividad de datos y reporte por GPRS.
- Establezca el endpoint y el puerto del servidor Plaspy para que el dispositivo envíe telemetría a Plaspy.
- Elija el modo de transporte (UDP o TCP) si el firmware del dispositivo o la red lo requieren.
- Aplique intervalos de reporte y ajustes de entradas/eventos para que Plaspy reciba actualizaciones de ubicación y alarmas en tiempo oportuno.
- Valide que el dispositivo sea visible en Plaspy y que los mensajes de ubicación y eventos se estén ingresando correctamente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un GV65 Plus alimentado con acceso al cableado y/o al puerto de instalador para la configuración inicial.
- Una tarjeta SIM GSM activa con plan de datos y el APN correcto del operador para reportes GPRS.
- Capacidad para enviar y recibir SMS al dispositivo si se usa configuración por SMS (el GV65 Plus acepta comandos SMS).
- Acceso al método o software oficial de configuración de QuecLink y conocimiento de la contraseña del dispositivo.
- Conocimientos básicos de los valores de servidor de Plaspy esperados: d.plaspy.com o 54.85.159.138 y puerto 8888.
- Si aplica, un método seguro para reiniciar o cortar la alimentación del rastreador después de aplicar la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GV65 Plus envía datos de posición y eventos al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los mensajes del rastreador, mapea ubicaciones, genera alertas y llena los paneles de la flota.

- El rastreador envía ubicación y telemetría vía TCP o UDP a d.plaspy.com en el puerto 8888.
- Plaspy también acepta reportes dirigidos a la IP del servidor 54.85.159.138 en el puerto 8888.
- Eventos como SOS, cambios de ignición y alertas de entradas digitales se reenvían a Plaspy para monitoreo en tiempo real.
- Plaspy detecta automáticamente el protocolo del dispositivo para que la plataforma pueda parsear los mensajes entrantes del GV65 Plus sin cambiar puertos por dispositivo.
- La integración exitosa se verifica cuando los reportes periódicos y los mensajes de alarma aparecen en la plataforma Plaspy.

## Flujo de configuración común

1. Acceda al método oficial de configuración de QuecLink o a la herramienta de instalador para el GV65 Plus, o prepárese para enviar comandos SMS soportados según la guía de QuecLink.
2. Ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP alternativa 54.85.159.138 en el campo servidor/servidor GPRS.
3. Establezca el puerto del servidor en 8888 como puerto de destino para los reportes del rastreador.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita.
5. Configure el APN del dispositivo y cualquier valor de autenticación para que GPRS conecte (reemplace marcadores como {{apn}} con los valores de su operador).
6. Aplique o guarde la configuración y reinicie o realice un ciclo de energía del dispositivo si el firmware lo requiere.
7. Valide que el GV65 Plus reporte a Plaspy verificando la actividad del dispositivo y las actualizaciones de posición en la plataforma.

## Comandos de configuración de ejemplo

El GV65 Plus puede configurarse mediante comandos SMS. Los siguientes ejemplos se presentan en el orden de uso común. La contraseña de dispositivo mostrada como ejemplo es queclink, que es el valor por defecto en este caso. Reemplace {{apn}}, {{apnu}} y {{apnp}} por el APN, el usuario APN y la contraseña APN de su operador cuando sea necesario.

1. Paso inicial opcional Restaurar ajustes de fábrica (marcar como opcional o configuración inicial)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador (reemplace los marcadores)
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- Explicación: {{apn}} es el APN del operador. {{apnu}} y {{apnp}} son el usuario y la contraseña del APN, opcionales si su operador los requiere.

4. Configurar el servidor GPRS a Plaspy por dominio e IP con puerto 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando configura el dispositivo para usar d.plaspy.com y 54.85.159.138 en el puerto 8888 para el reporte.

5. Establecer el intervalo de actualización/reporte a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota: Envíe cada comando como un único SMS al dispositivo usando la contraseña indicada. Si su instalación o firmware requiere una sintaxis distinta o una herramienta de configuración, consulte la documentación oficial de QuecLink o la utilidad de configuración.

## Notas de configuración

- La configuración por SMS frente a la configuración por software puede variar según la región y el firmware. Use las herramientas oficiales de QuecLink cuando estén disponibles para un flujo con GUI.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; confirme los comandos con las notas de versión del fabricante.
- El GV65 Plus soporta reportes tanto por TCP como por UDP. Elija el transporte que mejor se ajuste a la estabilidad de la red y a sus preferencias de ingestión en Plaspy.
- Asegúrese de que los valores del APN sean correctos para la SIM instalada; un APN incorrecto impide la conectividad GPRS aunque los ajustes del servidor sean correctos.
- Los comandos de ejemplo usan la contraseña por defecto queclink tal como aparece en muestras públicas de configuración. Si la contraseña de su equipo es distinta, sustitúyala en los comandos.

## Por qué usar Plaspy con esta configuración

Configurar el GV65 Plus para reportar a Plaspy brinda a los administradores de flota visibilidad centralizada de la ubicación, el estado y las alertas de eventos de los vehículos. La plataforma de Plaspy ingiere los reportes TCP o UDP del rastreador, mapea posiciones casi en tiempo real y ofrece informes y alertas que soportan anti-robo, monitoreo de conductores y flujos operativos.

To learn more about Plaspy and how it integrates with devices like the QuecLink GV65 Plus visit https://www.plaspy.com. For device specific command syntax, firmware updates, and the latest installation guidance verify details on the manufacturer site https://www.queclink.com/ as methods and firmware behavior may change over time.
