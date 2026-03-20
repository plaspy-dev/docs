---
slug: /coban/bn_103b/configuration
id: bn_103b-configuration
sidebar_label: Configuration
title: Coban - BN-103B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Coban BN-103B y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración Coban BN 103B
  - Instalación Coban BN 103B
  - Configuración BN 103B para Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS Coban
  - Configuración servidor BN 103B
  - Configuración rastreador de vehículo
  - Comandos SMS rastreador GPS
  - Configuración seguimiento de flotas
  - Guía de instalación BN 103B
---

# Coban - BN-103B Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS vehicular Coban BN-103B con Plaspy. Se enfoca en los ajustes de servidor prácticos y los comandos por SMS de uso común para preparar el dispositivo y que reporte ubicación y estado a la plataforma Plaspy, usando los comandos de configuración públicos y los endpoints de ingestión de Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el BN-103B dispone de comandos de configuración por SMS (contraseña por defecto 123456) que se usan habitualmente para definir APN, servidor, transporte y intervalos de reporte antes de activar el envío de datos a Plaspy.

## Resumen de configuración

El objetivo de esta configuración es preparar el BN-103B para comunicarse de forma confiable con Plaspy utilizando los ajustes de servidor estándar y los comandos públicos del dispositivo. El proceso normalmente incluye establecer el APN y credenciales, apuntar el dispositivo al endpoint de ingestión de Plaspy, seleccionar el modo de transporte y verificar que el equipo informe correctamente.

- Configure el APN y las credenciales GPRS del dispositivo para que use datos móviles y envíe telemetría.
- Establezca la dirección y el puerto del servidor Plaspy para que el rastreador envíe datos de ubicación y eventos al endpoint correcto.
- Elija el modo de transporte (UDP o TCP) según las necesidades de la instalación; Plaspy acepta ambos.
- Defina los intervalos de reporte y el comportamiento para que las actualizaciones de ubicación lleguen con la frecuencia esperada.
- Valide la configuración con un comando de verificación o confirmando que el dispositivo aparece en línea en Plaspy.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el BN-103B. Estos valores son necesarios para apuntar el rastreador a la ingestión de Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

## Requisitos previos típicos

- Un BN-103B con alimentación instalada o conectado a la alimentación del vehículo y batería de respaldo cargada si aplica.
- Una tarjeta SIM activa con datos (GPRS) y capacidad SMS configurada para el operador local y con los ajustes APN correctos.
- Acceso al método de configuración del instalador o fabricante (en este caso comandos SMS) y la contraseña por defecto del dispositivo (la pública mostrada abajo es 123456).
- Una cuenta en Plaspy y los datos de registro del dispositivo previstos para poder confirmar que el rastreador aparece en la plataforma.
- Capacidad para enviar y recibir SMS con el dispositivo desde el número móvil que usará para la configuración.

## Cómo se conecta este rastreador a Plaspy

El BN-103B puede transmitir coordenadas GPS y estado del equipo a Plaspy mediante TCP, UDP o por reportes basados en SMS según la configuración. Para la integración con Plaspy, el rastreador se configura para enviar datos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda parsear los mensajes y mostrar la telemetría vehicular.

- El dispositivo se apunta al endpoint del servidor de Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888 para reportes por GPRS.
- En el dispositivo se selecciona UDP o TCP como transporte; Plaspy acepta cualquiera de los dos en el puerto 8888.
- Plaspy analiza automáticamente el protocolo del dispositivo y mapea las actualizaciones de posición y eventos de alarma en la plataforma.
- Los reportes periódicos de posición, eventos de alarma y cambios en entradas digitales se reenvían a Plaspy para visibilidad y alertas.
- Tras la configuración, valide que el dispositivo aparezca en línea en Plaspy y que la telemetría y los eventos lleguen como se espera.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante para el BN-103B (comandos SMS según el manual del dispositivo o guía del proveedor).
2. Ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los campos de configuración de servidor del dispositivo o mediante comando SMS.
3. Establezca el puerto del servidor en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un modo de transporte y guarde esa selección.
5. Aplique o guarde la configuración en el dispositivo usando comandos SMS o la herramienta del proveedor según corresponda.
6. Reinicie el dispositivo si el fabricante lo recomienda o cuando se le solicite para aplicar los ajustes de red.
7. Valide que el dispositivo reporta a Plaspy comprobando la conectividad del equipo y la telemetría entrante en la plataforma Plaspy o usando comandos de verificación del dispositivo.

## Comandos de configuración de ejemplo

El BN-103B soporta configuración por SMS. Los comandos siguientes son los comandos públicos por SMS proporcionados para la configuración inicial. La contraseña por defecto del dispositivo usada en estos comandos es 123456. Preserve los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} al reemplazarlos con los valores de su operador.

1. Reinicio opcional a valores de fábrica (usar solo si es necesario)
```text
begin123456
```

2. Ajustar la zona horaria a UTC 0 (ejemplo)
```text
time zone123456 0
```

3. Establecer el APN del operador móvil (reemplazar {{apn}} con el APN de su operador)
```text
apn123456 {{apn}}
```

4. Configurar usuario y contraseña del APN (reemplazar los marcadores con las credenciales del operador)
```text
up123456 {{apnu}} {{apnp}}
```

5. Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```

6. Configurar un intervalo típico de actualización (comando de ejemplo del fabricante)
```text
fix060s060s***n123456
```

7. Cambiar el dispositivo a modo GPRS y seleccionar transporte (se muestran dos variantes)
```text
gprs123456,1,1
```
o
```text
gprs123456
```

8. Comprobar la configuración actual del dispositivo (verificación)
```text
check123456
```

9. Activar reporte mejorado para sensor de combustible o entradas digitales (ejemplo de modo de protocolo)
```text
protocol123456 18
```

Notas sobre marcadores de posición:
- {{apn}} es la cadena APN de su operador móvil.
- {{apnu}} es el nombre de usuario del APN si el operador lo requiere.
- {{apnp}} es la contraseña del APN si el operador lo requiere.
Reemplace siempre los marcadores con los valores correctos del operador antes de enviar los comandos.

## Notas de configuración

- La configuración por SMS es un método común y soportado para la puesta a punto del BN-103B; asegúrese de que el teléfono que envía los SMS esté autorizado por la configuración del dispositivo (algunos equipos solo aceptan SMS de números admin preconfigurados).
- El firmware del fabricante y la sintaxis de comandos pueden variar según lote de producción y región; confirme los comandos exactos con el manual del dispositivo antes de aplicar cambios.
- Elija TCP o UDP según la confiabilidad de la red y las restricciones de firewall. Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo del dispositivo.
- La contraseña SMS por defecto del BN-103B mostrada en los comandos públicos es 123456; si su equipo tiene otra contraseña, utilice esa.
- Al usar el comando adminip puede emplear el dominio d.plaspy.com en lugar de la IP si su firmware soporta resolución DNS; de lo contrario use la IP proporcionada.

## Por qué usar Plaspy con esta configuración

Usar el BN-103B con Plaspy ofrece un camino sencillo hacia la visibilidad de su flota y la monitorización orientada a eventos. El soporte del rastreador para reporte por TCP, UDP y SMS, junto con la detección automática de protocolos de Plaspy, facilita incorporar dispositivos rápidamente y consolidar posiciones, alarmas y datos de telemetría en una sola plataforma para supervisión operativa.

To learn more about Plaspy and its fleet management features visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the Coban website at https://www.coban.net/.
