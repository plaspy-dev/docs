---
slug: /coban/bn_303f/configuration
id: bn_303f-configuration
sidebar_label: Configuration
title: Coban - BN-303F Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Coban BN-303F con los ajustes de servidor de Plaspy y comandos SMS para GPRS
keywords:
  - Coban BN-303F
  - configuración BN-303F
  - configuración rastreador Coban
  - configuración servidor BN-303F
  - configuración Plaspy
  - configuración rastreador GPS
  - rastreo vehicular BN-303F
  - comandos SMS BN-303F
  - configuración APN BN-303F
  - configuración GPRS BN-303F
---

# Coban - Configuración BN-303F

Esta página describe el contexto público de configuración para usar el Coban BN-303F con Plaspy. Reúne los pasos prácticos y los comandos SMS de uso común para apuntar un rastreador BN-303F al endpoint del servidor de Plaspy y verificar la conectividad básica para que la unidad aparezca y reporte en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para el BN-303F pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos que se muestran aquí provienen de ejemplos públicos de configuración y deben usarse junto con la documentación del fabricante al realizar una instalación final.

## Resumen de la configuración

El objetivo de configurar un BN-303F para Plaspy es preparar la unidad para que envíe de forma confiable datos de GPS y eventos a Plaspy, y validar que el dispositivo sea visible en la plataforma. Si se hace correctamente, el rastreador reportará actualizaciones de ubicación y alarmas vía GPRS a Plaspy usando el endpoint y puerto del servidor de la plataforma.

- Configurar el APN del dispositivo, las credenciales y la dirección del servidor GPRS para que pueda abrir una sesión de datos hacia Plaspy.
- Elegir transporte UDP o TCP y definir el puerto que Plaspy espera.
- Ajustar los intervalos de reporte y el envío de eventos para que la telemetría se transmita con la frecuencia deseada.
- Verificar el dispositivo enviando un comando de comprobación y confirmando que la unidad aparece y reporta en Plaspy.
- Opcionalmente habilitar modos de protocolo o sensores para mejorar el reporte de accesorios como sensores de combustible.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que se emplea un valor de puerto consistente entre los rastreadores soportados

## Requisitos típicos antes de la configuración

- Una tarjeta SIM GSM 2G válida instalada con un plan de datos activo y el APN correcto según el operador móvil
- Capacidad para enviar y recibir comandos SMS al dispositivo si se usa configuración por SMS
- Alimentación estable del vehículo o alimentación de banco con el dispositivo encendido durante la configuración
- La contraseña por defecto del dispositivo si se requiere para comandos SMS (en ejemplos públicos se usa 123456)
- Acceso a las instrucciones o herramientas oficiales del fabricante para diferencias específicas de firmware
- Una cuenta de Plaspy y el registro del vehículo preparado para recibir el dispositivo una vez que comience a reportar

## Cómo se conecta este rastreador a Plaspy

El BN-303F puede configurarse para enviar telemetría de ubicación y eventos al servidor de Plaspy por GPRS 2G usando TCP o UDP, y emplear SMS como canal de comandos. Una vez configurado para apuntar a Plaspy, el dispositivo se vuelve visible en la plataforma y envía actualizaciones periódicas y por eventos que Plaspy ingiere y muestra.

- La unidad reporta al endpoint compartido de Plaspy usando el dominio del servidor o la IP y el puerto común que usa Plaspy
- La telemetría se entrega por GPRS usando TCP o UDP según el transporte seleccionado
- Informes de eventos como SOS, ignición, puerta y alarma de movimiento se reenvían a Plaspy para alertas e historial
- Plaspy recibe el flujo y detecta automáticamente el protocolo del rastreador para parseo y visualización correctos
- SMS puede usarse para enviar comandos de configuración y verificar ajustes cuando la conectividad de datos aún no está activa

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software y confirme que el dispositivo responde a SMS o a la herramienta del proveedor.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 cuando sea necesario usar una IP directa.
3. Configure el puerto a 8888, que es el puerto que Plaspy utiliza para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; de lo contrario, configure el modo GPRS según las instrucciones del proveedor.
5. Configure el APN y las credenciales del APN para la SIM instalada para que el dispositivo pueda establecer una sesión GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante recomienda el reinicio.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación y confirme que la unidad aparece y envía telemetría en la plataforma.

## Comandos de configuración de ejemplo

El BN-303F se configura comúnmente mediante comandos SMS. Estos comandos son ejemplos públicos usados en muchas instalaciones. La contraseña por defecto del dispositivo en estos ejemplos es 123456. Envíe cada línea como un mensaje SMS al SIM del dispositivo desde un teléfono autorizado.

- Reinicio opcional a configuración de fábrica
  ```
  begin123456
  ```
  Nota: Use este reinicio solo cuando sea necesario durante la instalación inicial.

- Ajustar la zona horaria a UTC 0
  ```
  time zone123456 0
  ```

- Establecer el APN del operador
  ```
  apn123456 {{apn}}
  ```
  Nota: Reemplace {{apn}} por el APN de su operador móvil.

- Establecer nombre de usuario y contraseña del APN
  ```
  up123456 {{apnu}} {{apnp}}
  ```
  Nota: Reemplace {{apnu}} con el usuario del APN y {{apnp}} con la contraseña si es necesario. Deje los campos vacíos si no aplica.

- Apuntar el rastreador al servidor Plaspy por IP y puerto
  ```
  adminip123456 54.85.159.138 8888
  ```
  Esto configura la IP y el puerto del servidor GPRS a la dirección pública de Plaspy y al puerto 8888.

- Establecer el intervalo de actualización de reporte
  ```
  fix060s060s***n123456
  ```
  Este ejemplo público configura intervalos periódicos de localización y reporte. Mantenga el formato original y ajústelo según la guía del fabricante.

- Cambiar al modo GPRS para habilitar el reporte de datos
  ```
  gprs123456,1,1
  ```
  o
  ```
  gprs123456
  ```
  Nota: La primera forma se usa comúnmente para seleccionar GPRS y las banderas de transporte según el firmware. Siga el manual del dispositivo para elegir UDP o TCP si el comando requiere parámetros.

- Verificar la configuración actual
  ```
  check123456
  ```

- Mejorar el reporte para sensor de combustible o entradas digitales
  ```
  protocol123456 18
  ```
  Este comando se usa en ejemplos públicos para ajustar el comportamiento del protocolo en reportes de combustible o sensores digitales.

Conserve el orden de los comandos cuando su plan de instalación lo requiera. Reemplace los marcadores exactamente y pruebe la respuesta de cada comando por SMS antes de pasar al siguiente paso.

## Notas de configuración

- La configuración basada en SMS es compatible y se usa comúnmente con el BN-303F, pero los formatos exactos de los comandos pueden variar entre revisiones de firmware.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de la red. Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.
- Verifique el APN, usuario y contraseña con el proveedor de la SIM antes de ingresar los marcadores como {{apn}} {{apnu}} y {{apnp}}.
- La contraseña por defecto 123456 aparece en muchos ejemplos públicos; cambie la contraseña según las recomendaciones del fabricante después de la configuración inicial.
- Use check123456 o comandos de verificación equivalentes para confirmar los ajustes antes de confiar en datos en vivo en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el BN-303F para reportar a Plaspy brinda a administradores de flotas y propietarios de vehículos visibilidad consistente sobre ubicación, alarmas e historial de eventos usando un endpoint de plataforma compartido y conocido. Con un flujo de configuración por SMS sencillo para APN y ajustes de servidor, el BN-303F puede ponerse en línea rápidamente para enviar telemetría a Plaspy y permitir seguimiento en tiempo real, alertas de geocerca e informes históricos.

Learn more about how Plaspy works and additional platform features at https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and official commands verify information on the manufacturer site https://www.coban.net/ as device behavior and command syntax can change across firmware and hardware revisions.
