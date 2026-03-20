---
slug: /eelink/gpt12x/configuration
id: gpt12x-configuration
sidebar_label: Configuration
title: EElink - GPT12‑X Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del EElink GPT12‑X para conectarlo a Plaspy con ajustes públicos de servidor y comandos SMS de ejemplo
keywords:
  - configuración EElink GPT12‑X
  - instalación EElink GPT12‑X
  - EElink GPT12‑X Plaspy
  - configuración GPT12‑X
  - configuración servidor GPT12‑X
  - configuración rastreador GPS
  - configuración servidor Plaspy
  - configuración protocolo EELINK
  - rastreador de activos GPT12‑X
  - configuración seguimiento de flotas
---

# EElink - GPT12‑X Configuration

Esta página documenta el contexto de configuración pública para usar el EElink GPT12‑X con Plaspy. Se centra en los pasos prácticos y en los ajustes de servidor públicos necesarios para apuntar el tracker a Plaspy y validar la conectividad. Cuando los comandos del fabricante son públicos, incluimos ejemplos de SMS y su explicación para que pueda aplicarlos directamente o adaptarlos a su método de despliegue.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, por lo que la mayor parte del trabajo de configuración consiste en aplicar el endpoint de servidor correcto, el puerto y el APN del operador en el dispositivo. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice los comandos aquí mostrados junto con la documentación oficial de EElink y las notas de su firmware.

## Resumen de la configuración

El proceso de configuración prepara un GPT12‑X para comunicarse de forma fiable con Plaspy ajustando los parámetros de red, el intervalo de reporte y el servidor de destino. Los comandos SMS públicos del fabricante pueden realizar estas tareas cuando su unidad soporta configuración por SMS.

- Configure el APN del dispositivo para que pueda establecer un canal GPRS/datos para los reportes.
- Apunte el tracker a Plaspy configurando el dominio o la IP del servidor y el puerto compartido.
- Elija el transporte (UDP o TCP) si el tracker requiere selección de transporte.
- Establezca un intervalo de reporte adecuado para equilibrar la vida útil de la batería y la frecuencia de actualización.
- Verifique los ajustes y confirme que el dispositivo es visible en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de comenzar

- Un GPT12‑X con alimentación suficiente, batería o alimentación externa para realizar las operaciones de configuración.
- Una SIM celular válida con datos habilitados y la información de APN correcta para su operador móvil.
- Acceso al canal de configuración por SMS del dispositivo o a la herramienta oficial de configuración de EElink, según el método que vaya a usar.
- Conocimientos básicos sobre si su despliegue prefiere UDP o TCP y cualquier regla de firewall que pueda afectar las conexiones salientes.
- Permisos y acceso a su cuenta de Plaspy para el registro y la validación del dispositivo tras la configuración.

## Cómo se conecta este tracker a Plaspy

El GPT12‑X envía telemetría compacta y mensajes de evento a Plaspy a través de la red celular utilizando el protocolo EELINK. Cuando se apunta al endpoint y puerto compartidos de Plaspy, las posiciones GNSS, las alarmas y la telemetría del tracker se ingresan automáticamente.

- El dispositivo reporta soluciones GNSS y sellos de tiempo al endpoint del servidor Plaspy.
- Alarmas de eventos como colisión, vibración o manipulación se reenvían a Plaspy para alertas.
- La telemetría de batería y estado del equipo se transmite para soportar monitoreo y tareas de mantenimiento.
- Todos los reportes se dirigen a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que Plaspy detecte automáticamente el protocolo y procese los mensajes entrantes.
- Plaspy ofrece visibilidad mediante paneles, alertas de geocercas e informes históricos de posiciones una vez que el dispositivo informa correctamente.

## Flujo común de configuración

1. Acceda al método de configuración oficial de EElink para su unidad, ya sea por comandos SMS o mediante la herramienta del fabricante para configuración remota.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138.
3. Configure el puerto del servidor a 8888.
4. Seleccione UDP o TCP si el tracker requiere elección de transporte; Plaspy soporta ambos en el mismo puerto.
5. Configure el APN del operador y cualquier usuario o contraseña de APN que exija su operador.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo requieren reinicio para que los cambios tengan efecto.
7. Valide que el GPT12‑X reporte a Plaspy y aparezca en su cuenta o vista de monitoreo en Plaspy.

## Comandos de configuración de ejemplo

El GPT12‑X soporta configuración por SMS con los siguientes comandos públicos. Envíe cada comando como un SMS separado al dispositivo. Conserve los marcadores de posición como {{apn}} cuando los reemplace por el valor de APN de su operador.

- Reinicio de fábrica opcional (usar solo cuando sea necesario para la configuración inicial):
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0 (ejemplo):
```text
GMT,E,0#
```

- Configurar el APN del operador (reemplazar {{apn}} con el APN de su operador; incluya {{apnu}} y {{apnp}} si requiere usuario y contraseña de APN):
```text
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
Explicación: {{apn}} es la cadena APN requerida por su operador móvil. {{apnu}} y {{apnp}} son marcadores opcionales para el usuario y la contraseña del APN.

- Configurar el servidor GPRS a Plaspy usando el dominio (la selección UDP/TCP se gestiona por separado si es necesario):
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativa usando la IP del servidor Plaspy:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de posición a 60 segundos:
```text
TIMER,60#
```

- Consultar los parámetros actuales:
```text
PARAM#
```

Notas sobre el orden de los comandos: aplique el APN antes de intentar usar el reporte GPRS. Use el comando SERVER para apuntar el dispositivo a Plaspy (tanto dominio como IP son aceptados). El comando de reinicio FACTORY# debe utilizarse únicamente cuando sea necesario un reinicio de fábrica inicial.

## Notas de configuración

- Diferencias de firmware: la sintaxis exacta de los comandos y las funciones disponibles pueden variar entre versiones de firmware; confirme siempre con las notas de la versión del firmware del dispositivo.
- SMS versus software: esta página muestra comandos por SMS porque están documentados públicamente; muchas instalaciones usan la herramienta de configuración de EElink o gestión OTA para aprovisionamiento masivo.
- Elección de transporte: TCP y UDP son compatibles con Plaspy en el puerto 8888; seleccione el transporte que mejor se adapte a su red y entorno de firewall.
- Marcadores de APN: conserve {{apn}}, {{apnu}} y {{apnp}} como marcadores de posición cuando prepare plantillas SMS y reemplace con los valores de su operador en su región.
- Verifique después del reinicio: después de aplicar los ajustes y reiniciar, use PARAM# o su panel de Plaspy para confirmar que el dispositivo está reportando como se espera.

## Por qué usar Plaspy con esta configuración

Usar el GPT12‑X con Plaspy ofrece una solución de rastreo de bajo mantenimiento para despliegues prolongados donde la telemetría fiable, las alarmas de eventos y la larga duración de batería son prioritarias. Apuntar el dispositivo a Plaspy con los ajustes de servidor compartido simplifica la integración y permite que la plataforma ingiera datos GNSS, de batería y de alarmas para monitoreo, alertas e informes.

Para conocer más sobre cómo Plaspy gestiona la ingesta de dispositivos y la administración de flotas, visite https://www.plaspy.com. Para los comandos más recientes de dispositivos EElink, notas de firmware y detalles específicos por modelo, verifique la información de configuración en el sitio del fabricante https://www.eelink.com.cn/ ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.
