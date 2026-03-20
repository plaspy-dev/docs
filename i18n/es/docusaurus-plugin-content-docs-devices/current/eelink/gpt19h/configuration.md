---
slug: /eelink/gpt19h/configuration
id: gpt19h-configuration
sidebar_label: Configuration
title: EElink - GPT19‑H Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar EElink GPT19‑H con Plaspy, incluyendo ajustes de servidor y comandos SMS
keywords:
  - configuración EElink GPT19‑H
  - configuración GPT19‑H
  - GPT19‑H en Plaspy
  - configuración rastreador GPS
  - instalación rastreador de activos
  - configuración rastreador magnético
  - ajustes servidor Plaspy
  - configuración SMS del rastreador
  - integración plataforma GPS
  - configuración seguimiento de flotas
---

# EElink - GPT19‑H Configuración

Esta página documenta el contexto público de configuración para utilizar el rastreador magnético de activos EElink GPT19‑H con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, los pasos preparatorios habituales y los comandos SMS públicos del fabricante que se emplean comúnmente para apuntar el dispositivo a Plaspy y habilitar el rastreo y la telemetría en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta página como una guía práctica del flujo y los comandos más comunes y consulte la documentación oficial de EElink para detalles específicos del dispositivo y actualizaciones.

## Resumen de configuración

El proceso de configuración prepara el GPT19‑H para comunicarse de forma fiable con Plaspy, de modo que la ubicación, el movimiento y los eventos de manipulación aparezcan en sus paneles de Plaspy. En los dispositivos GPT19‑H, la configuración suele realizarse mediante el conjunto de comandos SMS del fabricante o con una herramienta oficial de configuración, e incluye definir el APN y el endpoint del servidor de Plaspy.

- Apunte el rastreador al endpoint del servidor Plaspy para que pueda enviar telemetría y posiciones.
- Configure el APN del dispositivo para permitir datos GPRS y que el rastreador pueda abrir una sesión de datos.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere elegirlo al configurar el servidor.
- Ajuste el intervalo de reporte y los temporizadores de emergencia para que el comportamiento del rastreador coincida con su plan de monitoreo.
- Verifique los parámetros y confirme que el dispositivo está reportando a Plaspy antes de desplegar la unidad.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Una unidad GPT19‑H con alimentación, con la bandeja de la SIM accesible y batería reemplazable cargada o instalada.
- Una tarjeta SIM activa con un plan de datos y el APN correcto del operador para conectividad GPRS.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta o software oficial de configuración de EElink.
- Acceso básico al punto de instalación del rastreador para confirmar que puede obtener fixes GNSS cuando sea necesario.
- Conocimiento de los valores del APN del operador; si su operador requiere usuario o contraseña, inclúyalos al configurar el APN.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GPT19‑H envía fixes de ubicación y telemetría de eventos al endpoint y puerto compartidos de Plaspy para que los datos aparezcan en los paneles y flujos de alertas. Plaspy recibe el tráfico del dispositivo en su puerto común y detecta automáticamente el protocolo.

- El rastreador envía actualizaciones de ubicación GPS y LBS a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888.
- La telemetría de eventos como movimiento, caída, manipulación y modo de emergencia se reenvía a Plaspy para alertas e informes.
- Plaspy mapea los mensajes entrantes al historial de actividad del dispositivo para que pueda visualizar posiciones en tiempo real y generar eventos de geocercas.
- El transporte puede configurarse como UDP o TCP a nivel de dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Utilice los paneles de Plaspy para validar la conectividad del dispositivo y la telemetría histórica tras la configuración.

## Flujo común de configuración

1. Acceda al método de configuración oficial de EElink o al software correspondiente, o prepárese para enviar comandos SMS al rastreador.
2. Configure el APN del dispositivo usando los valores del operador para que se puedan establecer sesiones GPRS.
3. Ingrese el endpoint del servidor de Plaspy estableciendo d.plaspy.com o 54.85.159.138 como servidor.
4. Ajuste el puerto del servidor a 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
5. Elija UDP o TCP si el dispositivo solicita una selección explícita de transporte.
6. Guarde o aplique la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación o comprobando la actividad del dispositivo en la plataforma.

## Ejemplos de comandos de configuración

El GPT19‑H soporta configuración por SMS. A continuación aparecen los comandos SMS públicos proporcionados por EElink para tareas comunes de configuración. Preserve los marcadores de posición cuando envíe comandos.

1. Paso inicial opcional para restaurar los valores de fábrica (use solo si es necesario)
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador
- Reemplace [apn] por el APN de su operador móvil. Si su operador requiere usuario o contraseña, incluya los marcadores opcionales [apnu] y [apnp] en el orden indicado.
```
APN,[apn],[apnu],[apnp]#
```
- Si no se requieren usuario y contraseña, envíe:
```
APN,[apn]#
```

4. Configurar el servidor GPRS al dominio de Plaspy y puerto (use esto para apuntar el dispositivo a Plaspy por dominio)
```
SERVER,1,d.plaspy.com,8888#
```

5. O configurar el servidor GPRS a la IP de Plaspy y puerto (opción alternativa usando IP)
```
SERVER,0,54.85.159.138,8888#
```

6. Establecer el temporizador de actualización/reporte a 60 segundos
```
TIMER,60#
```

7. Verificar los parámetros actuales
```
PARAM#
```

Nota: Use el comando SERVER con el dominio o con la IP según su preferencia o necesidades de prueba. El dispositivo acepta transporte UDP o TCP en el puerto 8888 y Plaspy detectará automáticamente el protocolo del rastreador.

## Notas de configuración

- La configuración mediante SMS es un método público común para el GPT19‑H; confirme el soporte de comandos SMS en la revisión de firmware de su dispositivo.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; consulte la documentación de EElink para detalles específicos según firmware.
- Elija UDP o TCP de acuerdo con las restricciones de red; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto 8888, por lo que asegúrese de que el operador de la SIM y cualquier firewall intermedio permitan tráfico saliente en ese puerto.
- Tras la configuración, siempre verifique el dispositivo con PARAM# y confirme la visibilidad en Plaspy antes de poner el equipo en campo.

## Por qué usar Plaspy con esta configuración

Utilizar el EElink GPT19‑H con Plaspy integra el rastreo de activos de larga duración y discreto en una sola plataforma de telemetría para monitoreo, cumplimiento de geocercas y respuesta anti‑robo. La autonomía de la batería del GPT19‑H, su diseño magnético resistente y las alertas de movimiento/manipulación se combinan con las capacidades de gestión y alertas de Plaspy para ofrecer visibilidad práctica de remolques, contenedores y equipos de alto valor.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details and firmware behaviors at the manufacturer site https://www.eelink.com.cn/. Manufacturer configuration methods and firmware behavior can change over time so confirm the current EElink documentation when performing device setup.
