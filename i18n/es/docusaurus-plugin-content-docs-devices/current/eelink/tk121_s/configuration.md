---
slug: /eelink/tk121_s/configuration
id: tk121_s-configuration
sidebar_label: Configuration
title: EElink - TK121‑S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK121‑S con Plaspy; ajustes de servidor, comandos SMS y pasos prácticos para el seguimiento de flotas
keywords:
  - configuración EElink TK121 S
  - instalación TK121 S
  - configuración rastreador GPS EElink
  - configuración MoveLink
  - configuración rastreador Plaspy
  - configuración servidor rastreador GPS
  - configuración seguimiento vehicular
  - configuración rastreador de flotas
  - comandos configuración SMS
  - ajustes GPRS rastreador
---

# EElink - Configuración del TK121‑S

Esta página describe el contexto de configuración pública para usar el rastreador EElink TK121‑S con la plataforma Plaspy. Reúne los ajustes de servidor esenciales, los pasos de trabajo más comunes y los comandos SMS disponibles públicamente que permiten apuntar el dispositivo a Plaspy para que informe posiciones y eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para simplificar la integración. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los ejemplos aquí como una guía práctica basada en los comandos públicos proporcionados por el fabricante.

## Resumen de la configuración

El objetivo de esta configuración es preparar el TK121‑S para comunicarse de forma fiable con Plaspy y validar que el dispositivo aparezca en la plataforma como se espera. El método público para este modelo usa comandos SMS y una configuración de servidor estándar para que usted pueda apuntar el dispositivo a Plaspy rápidamente y verificar la conectividad.

- Configure la dirección y el puerto del servidor para apuntar el rastreador a Plaspy
- Establezca el APN y los parámetros GPRS para que el rastreador use datos móviles
- Defina intervalos de reporte, como temporizadores de actualización GPS, según la frecuencia de telemetría deseada
- Valide los ajustes y confirme que el rastreador informa a Plaspy usando el endpoint de servidor compartido
- Opcionalmente, restablezca o verifique parámetros al solucionar problemas o desplegar nuevas unidades

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para configuración basada en DNS
- IP del servidor: 54.85.159.138 como endpoint numérico alternativo
- Puerto: 8888, utilizado por Plaspy para todos los dispositivos compatibles
- Soporte de transporte: UDP o TCP en el dispositivo al elegir el protocolo
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar datos sin requerir un mapeo manual por dispositivo

## Requisitos habituales antes de la configuración

- Un TK121‑S con alimentación estable desde el vehículo o con alimentación de banco durante la configuración
- Una SIM GSM funcional con datos habilitados y el APN correcto del operador configurado
- Acceso al método de configuración por SMS del dispositivo o al software del fabricante para ajustes remotos
- Conocimiento de los valores APN correctos de su operador móvil
- Herramientas básicas para enviar y recibir mensajes SMS al número del dispositivo para una configuración basada en comandos
- Si es posible, una forma de monitorear el registro de red del dispositivo o los logs de ingreso de la plataforma para verificar la conectividad

## Cómo se conecta este rastreador a Plaspy

Cuando se configura, el TK121‑S enviará reportes de ubicación y mensajes de evento al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir la telemetría y mostrarla en paneles y reportes. Plaspy acepta conexiones en el mismo puerto para todos los dispositivos y determina automáticamente el protocolo del rastreador, reduciendo el trabajo de mapeo por dispositivo.

- El rastreador reporta posición y mensajes de estado a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El dispositivo puede usar transporte UDP o TCP dependiendo de la configuración seleccionada
- Plaspy detecta automáticamente el protocolo del rastreador e interpreta mensajes MoveLink entrantes
- Ubicación, estado del ACC y alarmas reportadas por el dispositivo se convierten en eventos de la plataforma y marcadores en el mapa
- Los reportes periódicos basados en temporizadores hacen que el rastreador sea visible para seguimiento en tiempo real y reproducción histórica

## Flujo de trabajo típico para la configuración

1. Utilice el método de configuración oficial de EElink o el software del fabricante, o prepárese para enviar comandos SMS al número del dispositivo según la documentación del fabricante
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138
3. Establezca el puerto del servidor en 8888, que utiliza Plaspy para todos los dispositivos
4. Elija UDP o TCP como transporte en el dispositivo si requiere selección explícita
5. Configure el APN y, si aplica, el usuario y la contraseña del APN para que funcione el GPRS de la SIM
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador necesita reboot para aplicar los cambios
7. Valide que el dispositivo está reportando a Plaspy revisando los paneles de la plataforma o usando el comando PARAM# del dispositivo para verificar parámetros locales

## Comandos de configuración de ejemplo

Para configurar el rastreador envíe los siguientes comandos SMS en orden. Son los comandos públicos proporcionados por el fabricante para el TK121‑S. Mantenga los marcadores tal como aparecen donde se requieren valores específicos del operador.

1. Paso opcional de restablecimiento de fábrica al preparar un dispositivo para la configuración inicial
```text
FACTORY#
```

2. Configure la zona horaria del dispositivo a UTC 0 (ejemplo)
```text
GMT,E,0#
```

3. Configure el APN del operador. Reemplace [apn] con la cadena APN de su operador.
Si su APN requiere usuario o contraseña incluya [apnu] y [apnp] respectivamente como parámetros adicionales.
```text
APN,[apn],[apnu],[apnp]#
```

4. Configure el servidor GPRS usando el dominio de Plaspy en el puerto 8888
```text
SERVER,1,d.plaspy.com,8888#
```

O configure el servidor GPRS usando la IP de Plaspy en el puerto 8888
```text
SERVER,0,54.85.159.138,8888#
```

5. Ajuste el intervalo de actualización de posición GPS a 60 segundos
```text
TIMER,60#
```

6. Verifique los parámetros configurados en el dispositivo
```text
PARAM#
```

Notas sobre los marcadores de posición
- [apn] es el nombre APN del operador móvil requerido para la conectividad de datos
- [apnu] es el usuario del APN si su operador lo solicita
- [apnp] es la contraseña del APN si el operador la requiere

Plaspy usa el puerto 8888 para todos los dispositivos y la plataforma detecta automáticamente el protocolo del rastreador, por lo que apunte el comando SERVER a d.plaspy.com o a 54.85.159.138 con el puerto 8888 y elija UDP o TCP según lo que soporte el rastreador.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos soportada o las funciones disponibles; confirme el formato exacto de los comandos SMS con la documentación de EElink para la revisión de su dispositivo
- El TK121‑S soporta configuración por SMS además de la configuración remota vía plataforma o app descrita por el fabricante
- Cuando el dispositivo permita seleccionar el transporte, elija UDP o TCP según sus requisitos de red; Plaspy acepta ambos cuando se apunta al puerto 8888
- Use el comando SERVER con el dominio d.plaspy.com o con la IP numérica 54.85.159.138 si la resolución DNS es un factor
- El comando TIMER controla la frecuencia de reporte; ajústelo considerando el uso de datos y las necesidades operativas

## Por qué usar Plaspy con esta configuración

Usar el TK121‑S con Plaspy ofrece una vía sencilla para obtener visibilidad en tiempo real de flotas de vehículos con una configuración de bajo overhead. Los comandos SMS públicos permiten a instaladores y técnicos apuntar dispositivos al servidor compartido de Plaspy rápidamente, y la detección automática de protocolos de Plaspy elimina la necesidad de mapear protocolos por dispositivo en muchos casos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise la documentación más reciente de dispositivos EElink en https://www.eelink.com.cn/ para verificar el comportamiento del firmware del fabricante y los procedimientos exactos de configuración.
