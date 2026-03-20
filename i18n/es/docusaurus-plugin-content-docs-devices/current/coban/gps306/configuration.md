---
slug: /coban/gps306/configuration
id: gps306-configuration
sidebar_label: Configuration
title: Coban - GPS306 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Coban GPS306 a Plaspy con ajustes de servidor y comandos SMS prácticos
keywords:
  - Configuración Coban GPS306
  - Instalación Coban GPS306
  - Configuración GPS306 para Plaspy
  - Configuración de servidor para rastreador Coban
  - Configuración de rastreador GPS para Plaspy
  - Rastreo vehicular GPS306
  - Configuración SMS GPS306
  - Rastreo de flotas Coban GPS306
  - Configuración GPRS GPS306
  - Configuración de plataforma Coban GPS
---

# Coban - Configuración del GPS306

Esta página explica el contexto público de configuración para usar el Coban GPS306 con Plaspy. Describe los ajustes de servidor prácticos, los comandos SMS de configuración más comunes para este modelo y qué verificar antes de iniciar la integración con Plaspy. Use esta guía para preparar el dispositivo y que reporte ubicación y estado a Plaspy, manteniendo la documentación del fabricante a mano para detalles específicos del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica la integración desde la plataforma. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor; los comandos mostrados aquí son ejemplos públicos basados en SMS y deben aplicarse según el firmware y el contexto de instalación del dispositivo.

## Resumen de configuración

Configurar un Coban GPS306 para Plaspy prepara el rastreador para conectarse al endpoint de la plataforma y reportar ubicación y estado de forma continua. El proceso normalmente usa SMS para la configuración inicial y luego GPRS para enviar datos en vivo al servidor y puerto de Plaspy.

- Configure el equipo para usar los ajustes de servidor de Plaspy para que envíe datos al endpoint correcto.
- Ajuste el APN y las credenciales de GPRS para que el rastreador pueda establecer la conexión de datos móviles.
- Seleccione el transporte (UDP o TCP) y establezca el puerto estándar de Plaspy para que los reportes lleguen de forma fiable.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy después de aplicar los ajustes.
- Use los comandos SMS indicados para una configuración rápida cuando no haya disponible la app del fabricante o la herramienta de PC.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto para conectividad

## Requisitos típicos antes de la configuración

- Un Coban GPS306 con alimentación, instalado físicamente o conectado a energía para poder configurarlo.
- Una tarjeta SIM activa con datos habilitados y las credenciales APN correctas del operador móvil.
- Capacidad para enviar comandos SMS al dispositivo (el GPS306 soporta configuración vía SMS).
- Acceso a la contraseña del dispositivo (los ejemplos abajo usan la contraseña por defecto 123456).
- Una forma de verificar si el dispositivo aparece en Plaspy tras la configuración (acceso a la cuenta de la plataforma).
- Documentación del fabricante o notas de firmware para la sintaxis exacta de los comandos y las funciones soportadas.

## Cómo se conecta este rastreador a Plaspy

El Coban GPS306 se configura para reportar posición y eventos del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez activo el GPRS, el dispositivo envía actualizaciones periódicas a Plaspy, donde la plataforma detecta el protocolo del rastreador y muestra la unidad en la flota.

- El rastreador inicia una conexión GPRS usando el APN y las credenciales configuradas.
- El dispositivo envía mensajes de ubicación y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo usado por el rastreador y procesa los mensajes entrantes.
- Los reportes quedan disponibles en Plaspy para monitoreo, alertas de eventos y supervisión operativa.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el GPS306 (comandos SMS, app del proveedor o herramienta de PC) según lo provea Coban.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del equipo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa este mismo puerto para todos los dispositivos compatibles).
4. Si el dispositivo solicita seleccionar el transporte, elija UDP o TCP según su preferencia o condiciones de red.
5. Configure el APN y las credenciales del APN para que el rastreador pueda conectarse a la red de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el dispositivo reporte a Plaspy y sea visible en la plataforma; revise la conectividad y el flujo de mensajes.

## Comandos de ejemplo para configuración

El GPS306 puede configurarse enviando comandos SMS al equipo. Los comandos de ejemplo a continuación son públicos y usan la contraseña por defecto 123456. Reemplace los marcadores donde se indique.

- Notas sobre los marcadores
  - [apn] — reemplace con la cadena APN del operador móvil
  - [apnu] — reemplace con el usuario APN si el operador lo requiere
  - [apnp] — reemplace con la contraseña APN si el operador lo requiere

- Reinicio de fábrica (paso inicial opcional)
```text
begin123456
```

- Establecer zona horaria a UTC+0
```text
time zone123456 0
```

- Configurar el APN del operador
```text
apn123456 [apn]
```

- Configurar usuario y contraseña del APN
```text
up123456 [apnu] [apnp]
```

- Establecer servidor GPRS a la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```

- Definir intervalo de actualizaciones (formato de ejemplo según guía pública)
```text
fix060s060s***n123456
```

- Cambiar a modo GPRS (opciones de ejemplo)
```text
gprs123456,1,1
```
o
```text
gprs123456
```

- Verificar ajustes actuales
```text
check123456
```

- Habilitar reporte avanzado para sensor de combustible o sensores digitales (comando de ejemplo del protocolo)
```text
protocol123456 18
```

Use los comandos en el orden que corresponda a su rutina de configuración; el reinicio de fábrica es opcional y solo se recomienda al partir de un estado por defecto conocido.

## Notas de configuración

- La configuración vía SMS es común para la puesta en marcha de este modelo; confirme que su operador soporta SMS al dispositivo y que la SIM tiene saldo suficiente.
- Las versiones de firmware y las revisiones de hardware pueden afectar la sintaxis exacta de los comandos y las funciones disponibles; consulte al fabricante para instrucciones específicas de firmware.
- Al elegir el transporte, UDP suele usarse para reportes livianos y TCP para conexiones persistentes; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Plaspy usa el mismo puerto (8888) para todos los dispositivos, por lo que debe asegurarse de que las políticas de firewall o la red permitan el envío de datos a ese puerto.
- Verifique siempre los valores y credenciales del APN con el operador móvil y pruebe la conectividad antes de la instalación final.

## Por qué usar Plaspy con esta configuración

Usar el Coban GPS306 con Plaspy ofrece a las organizaciones una vía simple para monitorear ubicación y estado de los dispositivos desde una única plataforma. Los ajustes de servidor compartidos y la detección automática de protocolo en Plaspy reducen la necesidad de configuraciones específicas por equipo y ayudan a acelerar el despliegue en flotas mixtas.

Learn more about Plaspy at https://www.plaspy.com and verify device-specific instructions, firmware changes, and the latest manufacturer details at https://www.coban.net/ to ensure the configuration steps and command syntax remain current.
