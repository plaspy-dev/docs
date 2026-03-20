---
slug: /telic/sbc_product_family/configuration
id: sbc_product_family-configuration
sidebar_label: Configuration
title: Telic - SBC product family Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Telic SBC con ajustes del servidor Plaspy, comandos SMS y pasos de verificación
keywords:
  - Configuración familia Telic SBC
  - Configuración Telic SBC
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS Telic
  - Configuración telemática de flotas
  - Familia SBC Plaspy
  - Configuración plataforma GPS
  - Configuración de seguimiento de vehículos
  - Configuración SMS SBC
  - Configuración servidor telemático
---

# Telic - Configuración de la familia de productos SBC

Esta página documenta el contexto público de configuración para usar la familia de productos Telic SBC con Plaspy. Resume los ajustes compartidos del servidor Plaspy que debe aplicar a los dispositivos SBC y ofrece los comandos SMS públicos disponibles en la guía de configuración del equipo. Use esta información para preparar el rastreador para su conexión a Plaspy y para validar la conectividad básica antes de completar el registro del dispositivo en la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. La familia SBC incluye conectividad LTE Cat M1 y múltiples interfaces cableadas; los comandos que aparecen a continuación muestran un flujo común de configuración vía SMS que muchos instaladores utilizan para apuntar los equipos a Plaspy y permitir el seguimiento en tiempo real y la ingesta de telemetría.

## Resumen de la configuración

Este proceso prepara un dispositivo SBC para enviar ubicación y telemetría a Plaspy configurando el APN del equipo, el endpoint del servidor, el transporte y el modo GPRS según sea necesario. El objetivo es establecer un enlace de datos celular fiable y asegurar que el dispositivo reporte correctamente al endpoint compartido de Plaspy para que sea visible en su cuenta y en los paneles.

- Configure el APN del dispositivo y las credenciales APN opcionales para que la unidad utilice datos móviles
- Apunte el dispositivo al endpoint del servidor Plaspy usando la IP o dominio proporcionado y el puerto compartido
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo demanda una elección explícita
- Pase el dispositivo al modo GPRS o de datos para que envíe telemetría activamente a Plaspy
- Verifique que el equipo reporte correctamente con el comando de verificación o mediante los registros de la plataforma

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son la información pública del endpoint de Plaspy que debe usar al configurar dispositivos SBC. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador en las conexiones entrantes.

## Requisitos habituales antes de configurar

- Una unidad SBC alimentada e instalada físicamente con cobertura celular disponible
- Una tarjeta SIM activada con un plan de datos y la información APN del operador
- Acceso al método de configuración que el fabricante provea para el dispositivo (SMS o herramienta del proveedor)
- Un teléfono o un gateway SMS capaz de enviar mensajes de configuración si va a usar SMS
- Conocimiento básico de la contraseña del dispositivo usada en los comandos SMS (los ejemplos abajo usan la contraseña predeterminada 123456)
- Capacidad para monitorizar el reporte del dispositivo en Plaspy una vez aplicada la configuración

## Cómo se conecta este rastreador a Plaspy

Los dispositivos SBC se configuran para enviar ubicación y telemetría a través de la red de datos celular al endpoint y puerto compartidos de Plaspy. Una vez que el equipo está apuntado al servidor de Plaspy y colocado en modo de datos, Plaspy ingiere el flujo entrante y mapea la telemetría a paneles, alertas y reglas para la visibilidad y monitoreo de la flota.

- El dispositivo usa el APN configurado para obtener conexión de datos y luego abre una sesión hacia d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según su elección durante la configuración
- Plaspy detecta automáticamente el protocolo del rastreador en la conexión para interpretar los mensajes entrantes
- La telemetría proveniente de CAN, 1-Wire o interfaces RS232 se transmite a través del dispositivo y se mapea en Plaspy para análisis y alertas
- Una vez en reporte, el dispositivo proporciona actualizaciones de posición en vivo y notificaciones de eventos a su cuenta Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Telic para su dispositivo SBC, por ejemplo la interfaz de comandos SMS o el software de configuración del proveedor.
2. Configure el APN del operador y, si aplica, el nombre de usuario y la contraseña del APN para que el dispositivo pueda usar datos móviles.
3. Introduzca el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138.
4. Ajuste el puerto a 8888.
5. Elija UDP o TCP si su equipo requiere selección explícita del transporte.
6. Aplique o guarde la configuración y cambie el dispositivo a modo GPRS o modo de datos.
7. Reinicie el equipo si el fabricante lo requiere o para asegurar que los cambios entren en vigor.
8. Valide el reporte usando el comando de verificación del dispositivo o confirmando que el equipo aparece y reporta en Plaspy.

## Comandos de configuración de ejemplo

La familia de productos SBC soporta configuración vía SMS. Los siguientes comandos públicos son ejemplos documentados de mensajes SMS. El ejemplo usa la contraseña predeterminada del dispositivo 123456. Si su dispositivo tiene una contraseña distinta, cámbiela en cada comando según corresponda.

- Reinicio opcional de fábrica (usar solo si necesita un reinicio)
```sms
begin123456
```

- Establecer la zona horaria a UTC 0
```sms
time zone123456 0
```

- Configurar el APN del operador
```sms
apn123456 {{apn}}
```
Explicación: reemplace {{apn}} con la cadena APN del operador celular.

- Establecer usuario y contraseña del APN (solo si su operador los requiere)
```sms
up123456 {{apnu}} {{apnp}}
```
Explicación: reemplace {{apnu}} con el usuario del APN y {{apnp}} con la contraseña del APN. Si su operador no requiere credenciales, omita este comando.

- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto compartido
```sms
adminip123456 54.85.159.138 8888
```
Alternativa: también puede usar el dominio d.plaspy.com con el método de su dispositivo si acepta nombres de dominio.

- Cambiar el dispositivo a modo GPRS
```sms
gprs123456,1,1
```
Comando alternativo más corto si está soportado:
```sms
gprs123456
```

- Consultar ajustes actuales (verificación)
```sms
check123456
```

Mantenga el orden de operaciones cuando su instalación lo requiera. El comando de reinicio es opcional y solo debe usarse cuando sea necesario un restablecimiento de fábrica. Tenga en cuenta la nota sobre la contraseña predeterminada y cámbiela si su política de seguridad lo exige.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones disponibles; confirme siempre los comandos con la documentación específica del modelo y firmware de su dispositivo.
- La familia SBC admite configuración por SMS como se muestra aquí; algunos proveedores también ofrecen herramientas de escritorio o basadas en la nube para aprovisionamiento masivo.
- Elija UDP o TCP según su red y preferencia del instalador. Plaspy acepta ambos transportes y detectará el protocolo automáticamente.
- Plaspy usa el mismo puerto para todos los equipos, por lo que la configuración del puerto es consistente en los despliegues.
- Use el comando de verificación y los registros de la plataforma Plaspy para confirmar el registro exitoso del dispositivo y el reporte continuo.

## Por qué usar Plaspy con esta configuración

Usar la familia Telic SBC con Plaspy brinda a las organizaciones una vía confiable hacia la visibilidad centralizada de la flota y flujos de trabajo basados en telemetría. Las unidades SBC aportan las interfaces de hardware y el enlace celular necesarios para capturar señales de vehículos y datos de sensores, mientras que Plaspy ingiere ese flujo para seguimiento en vivo, alertas e informes históricos.

Para obtener más información sobre Plaspy y cómo gestiona la ingesta de dispositivos, paneles y alertas visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y hojas de datos detalladas de modelos SBC consulte la documentación del fabricante en https://www.telic.de. Estas fuentes le ayudarán a verificar los métodos de configuración vigentes y cualquier actualización en el comportamiento del dispositivo.
