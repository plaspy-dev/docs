---
slug: /sinotrack/st_907l/configuration
id: st_907l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-907L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SinoTrack ST-907L e integración con el servidor Plaspy, con pasos prácticos de instalación
keywords:
  - Configuración SinoTrack ST-907L
  - Configuración ST-907L
  - ST-907L Plaspy
  - Guía de configuración SinoTrack
  - Configuración de rastreador Plaspy
  - Configuración de rastreador GPS
  - Configuración de rastreo de vehículos
  - Configuración de servidor ST-907L
  - Configuración plataforma GPS SinoTrack
  - Guía de compatibilidad Plaspy
---

# SinoTrack - Configuración ST-907L

Esta página ofrece la guía pública de configuración para usar el SinoTrack ST-907L con Plaspy. Describe los comandos y ajustes de servidor provistos por el fabricante que puede emplear para apuntar el dispositivo a Plaspy y verificar la conectividad, de modo que el rastreador aparezca en su cuenta de Plaspy. Siempre que estén disponibles, incluimos los comandos SMS y los pasos publicados para el ST-907L.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La modelConfiguration del ST-907L muestra los comandos basados en SMS y el ID de verificación RCONF que SinoTrack usa para confirmar los parámetros del dispositivo antes de completar el registro en Plaspy.

## Visión general de la configuración

Este proceso prepara el ST-907L para comunicarse de forma confiable con Plaspy usando el endpoint y el puerto compartidos de la plataforma. El objetivo habitual es configurar el APN y los parámetros GPRS, apuntar el dispositivo a Plaspy, confirmar la identidad mediante RCONF y validar que los datos de posición y eventos lleguen a la plataforma.

- Configurar el APN del dispositivo y los ajustes del servidor GPRS para que el rastreador pueda abrir una sesión de datos hacia Plaspy.
- Apuntar el dispositivo al endpoint del servidor de Plaspy para que la telemetría y los reportes de posición se envíen a la cuenta central.
- Validar el ID del rastreador a través de la respuesta RCONF para que Plaspy pueda enlazar la unidad con su cuenta.
- Habilitar intervalos regulares de reporte de posición para garantizar visibilidad en vivo y registro histórico en Plaspy.
- Confirmar la selección de transporte (UDP o TCP) si el equipo requiere una opción explícita antes de las pruebas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888 — Plaspy utiliza el mismo puerto para todos los dispositivos compatibles
- Soporte de transporte: UDP o TCP pueden usarse en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Una unidad ST-907L alimentada e instalada con acceso a la interfaz de comandos SMS del equipo o a la herramienta de configuración del fabricante.
- Una tarjeta SIM funcional con datos habilitados y los ajustes APN correctos para el operador móvil.
- Acceso a la documentación del propietario o instalador provista por SinoTrack para comandos específicos del modelo y notas de firmware.
- Una cuenta en Plaspy y la capacidad de identificar el rastreador en la plataforma después de que empiece a reportar.
- Un entorno de prueba o un lugar seguro para reiniciar y validar el dispositivo sin interrumpir las operaciones.

## Cómo se conecta este rastreador a Plaspy

El ST-907L se configura para enviar datos de ubicación y eventos a Plaspy ajustando los parámetros del servidor GPRS al endpoint de Plaspy y habilitando el modo GPRS. Una vez configurada, la unidad abre una conexión de datos y la plataforma recibe arreglos GNSS, alarmas y otras telemetrías para que el dispositivo sea visible en el panel de Plaspy.

- El dispositivo envía informes de posición periódicos al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del rastreador; Plaspy acepta ambos y realiza detección automática del protocolo.
- Plaspy procesa los mensajes entrantes y asocia el rastreador mediante el ID mostrado en la respuesta RCONF del dispositivo.
- Los eventos y reportes de alarma, como pérdida de alimentación, vibración y acciones del inmovilizador, se reenvían a Plaspy para alertas y registro histórico.
- Los intervalos regulares de actualización permiten seguimiento en vivo en el mapa, historial de rutas y monitoreo operativo dentro de Plaspy.

## Flujo común de configuración

1. Consulte el método oficial de configuración de SinoTrack para el dispositivo, normalmente mediante comandos SMS o software del proveedor según la documentación del fabricante.
2. Configure el APN del dispositivo con los parámetros de su operador para que pueda establecer conectividad de datos GPRS.
3. Ingrese d.plaspy.com o 54.85.159.138 en los ajustes del servidor GPRS del dispositivo como endpoint de Plaspy.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Aplique o guarde la configuración en el dispositivo y, si es necesario, cambie la unidad al modo GPRS o reinicie el rastreador.
6. Reinicie el dispositivo si el fabricante lo recomienda para asegurar que los nuevos ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy comprobando el ID de la unidad vía RCONF y confirmando que la unidad aparece en su cuenta de Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS públicos aparecen en la modelConfiguration para unidades SinoTrack. Mantenga el orden de los comandos al aplicarlos y envíelos desde el número autorizado según la guía de SinoTrack.

- Reinicio inicial opcional (use solo si necesita restaurar valores de fábrica antes de configurar):
```
RESET
```

- Ajustar la zona horaria a UTC 0:
```
8960000E00
```

- Establecer el APN de su operador móvil (reemplace los valores según sea necesario):
```
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explicación: {{apn}} es el APN del operador, {{apnu}} es el nombre de usuario del APN si se requiere, y {{apnp}} es la contraseña del APN si se requiere. Omitir o dejar en blanco según los requisitos de su operador.

- Configurar el servidor GPRS para apuntar a Plaspy usando la IP y el puerto:
```
8040000 54.85.159.138 8888
```
Nota: También puede introducir el dominio d.plaspy.com en herramientas del operador que acepten nombres de host. Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos.

- Establecer intervalo de actualización cuando se detecta movimiento o seguimiento activo:
```
8050000 60
```

- Establecer intervalo de actualización cuando el seguimiento está desactivado u otros modos de intervalo:
```
8090000 60
```

- Cambiar el dispositivo al modo GPRS:
```
7100000
```

- Verificar los ajustes actuales e identificación del dispositivo (RCONF devuelve parámetros del dispositivo incluido el ID usado por Plaspy):
```
RCONF
```

Envíe estos comandos exactamente como los provee SinoTrack mediante el procedimiento SMS. Si su operador o dispositivo usa nombres de host en lugar de IP, puede configurar d.plaspy.com mediante las herramientas compatibles; de lo contrario use la IP del servidor indicada arriba.

## Notas de configuración

- La configuración basada en SMS está documentada para el ST-907L; las herramientas del fabricante o firmware más recientes pueden ofrecer interfaces alternativas de configuración.
- Las revisiones de firmware y hardware pueden cambiar el formato de los comandos o los parámetros disponibles; siempre verifique la compatibilidad de los comandos con el firmware instalado en su dispositivo.
- Elija UDP o TCP según la preferencia del instalador; Plaspy acepta ambos y detecta automáticamente el protocolo cuando el dispositivo se conecta al puerto 8888.
- Mantenga los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} listos para reemplazarlos con los valores de su operador móvil; un APN incorrecto o faltante impide la conectividad GPRS.
- Use el comando de verificación RCONF para confirmar el ID del dispositivo y los ajustes del servidor antes de intentar registrar o localizar la unidad en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el ST-907L con Plaspy brinda a las organizaciones visibilidad centralizada de vehículos y activos con una configuración mínima. Apuntar el rastreador a Plaspy y confirmar el ID RCONF permite una integración rápida en paneles en tiempo real, flujos de alertas e informes de historial de rutas que ayudan a los equipos operativos a mejorar los tiempos de respuesta y reducir el riesgo de robo.

Para obtener más información sobre Plaspy y su funcionamiento con rastreadores compatibles, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y detalles del fabricante del SinoTrack ST-907L, verifique la información actual en el sitio oficial del fabricante https://www.sinotrackgps.com/.
