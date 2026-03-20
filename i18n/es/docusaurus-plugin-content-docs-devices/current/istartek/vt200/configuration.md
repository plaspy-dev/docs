---
slug: /istartek/vt200/configuration
id: vt200-configuration
sidebar_label: Configuration
title: iStartek - VT200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador iStartek VT200 para usar con Plaspy, con ajustes de servidor compartido y comandos SMS
keywords:
  - configuración iStartek VT200
  - configuración VT200
  - configuración Plaspy VT200
  - ajustes servidor VT200
  - configuración SMS VT200
  - configuración APN VT200
  - configuración rastreador iStartek
  - configuración GPRS VT200
  - configuración rastreador Plaspy
  - rastreo vehicular VT200
---

# iStartek - Configuración del VT200

Esta página describe el contexto público de configuración para usar el rastreador GPS iStartek VT200 con la plataforma Plaspy. Incluye los ajustes públicos del servidor Plaspy y proporciona comandos SMS y recomendaciones prácticas que suelen usarse para conectar el VT200 a Plaspy y habilitar el rastreo y la telemetría en tiempo real.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT200 soporta configuración vía GPRS y SMS en muchas versiones de firmware; los ejemplos a continuación muestran los comandos SMS más habituales para apuntar el equipo a los servidores de Plaspy y verificar su operación.

## Resumen de configuración

Esta configuración prepara el VT200 para enviar ubicaciones y eventos a Plaspy, de modo que los equipos aparezcan en la plataforma y reporten de forma confiable. El proceso se centra en definir el APN de la red, seleccionar el endpoint del servidor Plaspy y ajustar los intervalos de reporte y comandos de verificación para que el dispositivo entregue telemetría en vivo y en buffer.

- Apuntar el VT200 al endpoint y puerto del servidor Plaspy para que las cargas lleguen a la plataforma.
- Configurar el APN y los parámetros GPRS del dispositivo para que pueda enviar datos por la red celular.
- Establecer el intervalo de reporte y, opcionalmente, la zona horaria para que las marcas temporales coincidan con los datos en la plataforma.
- Verificar los parámetros y confirmar que el dispositivo reporta correctamente a Plaspy.
- Opcionalmente, restablecer a valores de fábrica durante el aprovisionamiento inicial cuando prepara múltiples unidades.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor Plaspy al configurar el VT200. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP o TCP son compatibles; configure el dispositivo según el transporte que requiera su instalación
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al servidor

## Requisitos previos típicos

- Una tarjeta SIM válida con GPRS/datos habilitados y capacidad de SMS si va a usar comandos SMS
- Acceso a la unidad VT200 y a su fuente de alimentación para mantenerla encendida durante la configuración
- El APN correcto y, opcionalmente, nombre de usuario y contraseña del APN proporcionados por el operador móvil
- Acceso al conjunto de comandos SMS del fabricante o a la herramienta oficial de configuración de iStartek VT200
- Un plan de pruebas para verificar que el dispositivo informa a Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

El VT200 envía posiciones GNSS, registros en buffer y notificaciones de eventos al endpoint y puerto compartido de Plaspy a través de la conexión de datos celulares. Plaspy procesa los datos del protocolo entrante y los integra en la plataforma para seguimiento en vivo, alertas e informes.

- El dispositivo se configura para reportar al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- La telemetría y los datos de eventos se envían vía GPRS a Plaspy usando UDP o TCP como transporte
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos, por lo que no se requiere seleccionar protocolos por dispositivo en el servidor
- El VT200 puede almacenar registros cuando hay pérdida de cobertura y subir datos históricos a Plaspy cuando la conectividad se restablece
- La visibilidad en la plataforma incluye actualizaciones de posición en tiempo real, disparadores de eventos y la posibilidad de correlacionar registros en buffer con el historial en el mapa

## Flujo común de configuración

1. Acceda al método de configuración oficial de iStartek, típicamente mediante comandos SMS o la herramienta de configuración del proveedor.
2. Asegúrese de que el VT200 tenga una SIM funcional con GPRS y SMS habilitados y suminístrele alimentación.
3. Configure el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Configure el APN del operador y, si aplica, el usuario y la contraseña del APN proporcionados por el operador móvil.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el firmware lo requiere.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y la telemetría reciente en Plaspy o enviando el comando de verificación desde el dispositivo.

## Comandos de configuración de ejemplo

El VT200 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos públicos se muestran en el orden recomendado para la configuración inicial. Envíe cada comando como un SMS individual al número de la SIM del dispositivo.

- Reinicio a valores de fábrica opcional (usar al preparar unidades nuevas o reprovisionar):
```text
FACTORY#
```

- Establecer zona horaria a UTC+0 (comando de ejemplo):
```text
GMT,E,0#
```

- Establecer el APN del operador. Solo APN básico:
```text
APN,[apn]#
```
- Establecer el APN del operador con usuario y contraseña opcionales (si el operador lo requiere). Mantenga los marcadores tal como están:
```text
APN,[apn],[apnu],[apnp]#
```
(Explicación: reemplace [apn] con el APN del operador móvil. Use [apnu] y [apnp] solo si el APN requiere usuario y contraseña.)

- Configurar el servidor GPRS usando el dominio de Plaspy (preferido para manejo de IP dinámica):
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS usando la IP de Plaspy (alternativa):
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer intervalo de actualización de ubicación a 60 segundos:
```text
TIMER,60#
```

- Comando para comprobar parámetros actuales en el dispositivo (verificación):
```text
PARAM#
```

Notas:
- Envíe los comandos como mensajes SMS de texto plano al número asignado a la SIM del VT200.
- Mantenga el orden de comandos para el aprovisionamiento inicial cuando realice un restablecimiento de fábrica y una reconfiguración completa.
- Use el comando SERVER con el dominio d.plaspy.com o la IP 54.85.159.138; ambos deben especificar el puerto 8888 como se muestra.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; siempre verifique la compatibilidad de comandos con su firmware VT200.
- La configuración por SMS es habitual para unidades VT200; si dispone de una herramienta de aprovisionamiento del proveedor, considérela para configuraciones masivas.
- Elija UDP o TCP según su entorno de red y los requerimientos del dispositivo; Plaspy acepta ambos transportes, pero el lado del dispositivo debe quedar correctamente configurado.
- Mantenga los marcadores de APN ([apn], [apnu], [apnp]) tal como están en la documentación y reemplácelos por los valores específicos del operador durante el aprovisionamiento.
- Después de aplicar los ajustes, use PARAM# o la propia plataforma para confirmar que el dispositivo aparece en Plaspy y está reportando como se espera.

## Por qué usar Plaspy con esta configuración

Configurar el VT200 para reportar a Plaspy ofrece a las organizaciones visibilidad centralizada y consistente de la ubicación de vehículos y activos, disparadores de eventos y telemetría histórica. La capacidad del VT200 para almacenar registros y soportar cargas por eventos complementa los mapas en vivo y los informes de Plaspy, ayudando a los equipos a supervisar flotas, responder ante incidentes y mantener el control operativo.

Para saber más sobre cómo Plaspy soporta rastreadores como el VT200, visite https://www.plaspy.com. Para obtener los métodos de configuración más recientes, comportamiento de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de iStartek https://istartek.com/.
