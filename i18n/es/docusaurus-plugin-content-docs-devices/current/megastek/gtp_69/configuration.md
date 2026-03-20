---
slug: /megastek/gtp_69/configuration
id: gtp_69-configuration
sidebar_label: Configuration
title: Megastek - GTP-69 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Megastek GTP-69 a Plaspy con ajustes de servidor y ejemplos por SMS
keywords:
  - Configuración Megastek GTP-69
  - Instalación Megastek GTP-69
  - Configuración servidor Megastek GTP-69
  - Configuración SMS GTP-69
  - Configuración APN GTP-69
  - Rastreador GPS Megastek Plaspy
  - Configuración software seguimiento GTP-69
  - Rastreo de vehículos GTP-69
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
---

# Megastek - Configuración del GTP-69

Esta página reúne la información de configuración pública necesaria para usar el rastreador Megastek GTP-69 con Plaspy. Incluye los ajustes de servidor prácticos y los comandos de configuración del fabricante que están disponibles públicamente, de modo que pueda apuntar un GTP-69 a Plaspy para que el dispositivo sea visible y envíe datos de localización. Cuando se muestran comandos del fabricante, se presentan como ejemplos de SMS tal como aparecen en la documentación pública de este modelo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GTP-69 admite ejemplos de configuración por SMS y GPRS en las guías del fabricante; esta página explica cómo aplicar esos ejemplos públicos para enviar datos de ubicación a Plaspy usando el endpoint y puerto comunes de Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el GTP-69 para que establezca una conexión GPRS y reporte posiciones a la plataforma Plaspy. Los ejemplos públicos para este modelo muestran comandos vía SMS para establecer el ID del dispositivo, el APN, el intervalo de reporte y la dirección del servidor GPRS para que el rastreador pueda comunicarse con la plataforma.

- Configure el rastreador con el APN del operador y, si corresponde, las credenciales APN para permitir datos GPRS.
- Apunte el rastreador al endpoint de servidor de Plaspy para que los paquetes de localización lleguen a la plataforma.
- Defina los intervalos de reporte y habilite el modo GPRS para que el dispositivo envíe actualizaciones periódicas.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy tras guardar la configuración.
- Use SMS o la herramienta de configuración del fabricante según la preferencia del instalador.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com para configuración basada en DNS
- IP del servidor: 54.85.159.138 para configuración por IP directa
- Puerto: 8888 para conexiones de rastreadores
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos típicos

- Una unidad GTP-69 alimentada y accesible con una SIM activa que soporte datos GPRS
- Conocer el IMEI del dispositivo y la contraseña de configuración que use el rastreador
- El APN del operador y, si aplica, el nombre de usuario y la contraseña del APN
- Capacidad para enviar SMS desde un teléfono autorizado o acceso a la herramienta de configuración del fabricante
- Acceso a una cuenta Plaspy o al aprovisionamiento de la flota para confirmar la visibilidad del dispositivo después de la configuración
- Un método de prueba para verificar que los paquetes llegan a d.plaspy.com o a 54.85.159.138 en el puerto 8888

## Cómo se conecta este rastreador a Plaspy

El GTP-69 se configura para iniciar una sesión de datos GPRS usando el APN del operador y luego enviar sus paquetes de ubicación y estado al endpoint de Plaspy. Plaspy escucha en un único puerto las conexiones entrantes y determina automáticamente el protocolo del rastreador.

- El rastreador se apunta a d.plaspy.com o a la IP directa 54.85.159.138 en la configuración del servidor GPRS
- El dispositivo usa el puerto 8888 para enviar datos a Plaspy
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo; seleccione uno en la configuración
- Plaspy detecta automáticamente el protocolo y asocia los datos entrantes con los registros de dispositivos de la cuenta
- Tras la configuración, el dispositivo enviará actualizaciones de posición y mensajes de estado a la plataforma Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Megastek para el GTP-69, normalmente mediante comandos SMS o la herramienta del fabricante según su procedimiento de instalación.
2. Ingrese la dirección del servidor de Plaspy agregando el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del servidor del dispositivo.
3. Configure el puerto en 8888, requerido por Plaspy.
4. Elija UDP o TCP en el rastreador si el firmware solicita seleccionar el transporte.
5. Aplique o guarde la configuración en el rastreador usando el método del fabricante.
6. Reinicie el dispositivo si la documentación recomienda reinicio tras los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y las actualizaciones de posición en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los ejemplos públicos de Megastek para el GTP-69 usan comandos por SMS. Los ejemplos a continuación emplean la contraseña predeterminada del dispositivo 000000 según las muestras del fabricante. Reemplace los marcadores antes de enviar los SMS. Mantenga los marcadores como {{apn}}, {{apnu}}, {{apnp}} y {{imei}} al preparar los mensajes.

- Establecer el ID del dispositivo
  ```
  M000000,22,{{imei}}
  ```
  Reemplace {{imei}} con el IMEI del dispositivo (normalmente el IMEI de 15 dígitos). Algunos ejemplos del fabricante usan los últimos 15 dígitos del IMEI al crear el ID del dispositivo.

- Configurar el APN del operador (incluya usuario y contraseña solo si son necesarios)
  ```
  M000000,23,{{apn}}
  ```
  o con usuario y contraseña opcionales:
  ```
  M000000,23,{{apn}},{{apnu}},{{apnp}}
  ```
  Notas de marcadores
  - {{apn}} = cadena del APN del operador
  - {{apnu}} = nombre de usuario del APN cuando sea requerido
  - {{apnp}} = contraseña del APN cuando sea requerida

- Establecer el intervalo de actualización a 60 segundos
  ```
  M000000,25,60
  ```

- Configurar el servidor GPRS hacia Plaspy usando el formato de ejemplo público
  ```
  M000000,24,56 54.85.159.138,8888
  ```
  Este ejemplo incluye el token de servidor mostrado en los ejemplos del fabricante seguido de la IP y el puerto de Plaspy. Alternativamente puede usar d.plaspy.com si el rastreador acepta nombres de dominio.

- Habilitar modo GPRS
  ```
  M000000,21,2
  ```

Notas sobre los comandos
- El prefijo de contraseña en estos comandos es la contraseña del dispositivo. El ejemplo del fabricante usa 000000 como contraseña predeterminada.
- Envíe estos comandos desde un número autorizado o a través de la herramienta del fabricante según la política de configuración de su dispositivo.
- Mantenga el orden al aplicar los comandos tal como se muestra en el flujo para asegurar que el APN y el servidor GPRS se establezcan antes de habilitar el modo GPRS.

## Notas de configuración

- Las diferencias de firmware y herramientas pueden cambiar la sintaxis exacta de los SMS o los valores de índice del servidor; consulte la documentación actual de Megastek si un comando es rechazado.
- El dispositivo admite configurar el servidor GPRS por IP o por dominio; si soporta nombres de dominio, puede usar d.plaspy.com en lugar de la IP.
- Seleccione TCP o UDP según la preferencia del instalador y las opciones del firmware; Plaspy acepta ambos transportes en el puerto 8888.
- La configuración por SMS es la que comúnmente aparece en los ejemplos públicos para este modelo; si su dispositivo se entregó con una herramienta de configuración, puede usarla en su lugar.
- Después de aplicar los ajustes, espere un breve periodo para que el dispositivo se registre en la red móvil y establezca la sesión GPRS antes de validar la conectividad en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un Megastek GTP-69 correctamente configurado ofrece a las organizaciones una forma sencilla de centralizar la visibilidad y el monitoreo de vehículos y activos. Al apuntar el GTP-69 al endpoint y puerto compartidos de Plaspy y asegurarse de que el APN y el modo GPRS estén configurados correctamente, el rastreador podrá entregar actualizaciones periódicas de posición y datos de estado a la plataforma para monitoreo de flotas, reportes de eventos y supervisión operativa.

Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, notas de firmware y guías del fabricante, verifique la información en el sitio oficial de Megastek https://www.megastek.com/. Los métodos de configuración del fabricante, el comportamiento del firmware y la sintaxis de comandos pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación más reciente.
