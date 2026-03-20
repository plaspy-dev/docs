---
slug: /suntech/st20u/configuration
id: st20u-configuration
sidebar_label: Configuration
title: Suntech - ST20U Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST20U con Plaspy, incluye ajustes de servidor, comandos SMS y lista de verificación de integración
keywords:
  - Configuración Suntech ST20U
  - Configuración ST20U
  - Configuración ST20U Plaspy
  - Configuración rastreador Suntech
  - Ajustes servidor Suntech ST20U
  - Configuración SMS ST20U
  - Seguimiento de flotas ST20U
  - Telemetría vehicular ST20U
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
---

# Suntech - Configuración del ST20U

Esta página ofrece el contexto público de configuración para usar el Suntech ST20U con Plaspy. Explica los pasos prácticos y visibles al público necesarios para apuntar instalaciones equipadas con ST20U y sus hosts compatibles con Plaspy al endpoint del servidor de Plaspy, y documenta los comandos SMS que el proveedor del dispositivo facilita para la configuración del APN y el reporte cuando aplica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST20U se usa habitualmente como puente de telemetría y se configura en el host o por comandos SMS para reenviar telemetría a un host con GNSS o a un gateway compatible con Plaspy como ST4305 o ST8300.

## Resumen de la configuración

El objetivo de la configuración es preparar el ST20U y su host para que la telemetría del vehículo y la ubicación GNSS del host sean visibles en Plaspy. En despliegues con ST20U esto suele implicar usar los comandos SMS del fabricante o las herramientas de configuración del host para establecer el APN del operador, los campos de servidor GPRS y el intervalo de reporte, de modo que el host y el tracker suban telemetría a Plaspy.

- Configure el APN y los campos GPRS/servidor para que el host o el tracker puedan iniciar sesiones de datos hacia Plaspy.
- Establezca correctamente el identificador del dispositivo usando el ID derivado del IMEI que requieren los comandos SMS del fabricante.
- Apunte el host o tracker al endpoint del servidor Plaspy y confirme el transporte elegido (UDP o TCP).
- Configure el intervalo de reporte a la frecuencia deseada para que Plaspy reciba actualizaciones oportunas.
- Verifique que el dispositivo sea visible en Plaspy y que la telemetría (VIN, velocidad, odómetro, RPM, combustible, etc.) llegue cuando se usa un host con GNSS.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos usan el mismo puerto en la plataforma

## Requisitos típicos antes de la configuración

- Un ST20U alimentado e instalado y conectado a un host o gateway GNSS compatible con Plaspy (por ejemplo ST4305 o ST8300) para combinar ubicación y telemetría.
- Una tarjeta SIM operativa con capacidad de datos o SMS y los detalles del APN del operador móvil correctos.
- Acceso al método de configuración del fabricante soportado por el dispositivo o el host (comandos SMS o herramienta del proveedor).
- El IMEI del dispositivo disponible para poder derivar el ID de dispositivo que exigen los comandos SMS.
- Una cuenta en Plaspy y forma de verificar la conectividad del dispositivo en la plataforma una vez configurado.

## Cómo se conecta este tracker a Plaspy

El ST20U suministra telemetría del vehículo a un host con GNSS o a un gateway compatible con Plaspy que sube datos y ubicación a Plaspy. El host o gateway se configura para enviar telemetría y datos de posición al servidor y puerto compartidos de Plaspy, de modo que los administradores de flotas puedan ver en la plataforma la ubicación combinada y los parámetros del vehículo.

- Telemetría como VIN, velocidad, odómetro, horas de motor, RPM y consumo de combustible se reenvía desde el ST20U al host.
- El host o gateway envía posición y telemetría al servidor Plaspy en d.plaspy.com (54.85.159.138) en el puerto 8888.
- Plaspy recibe la transmisión y detecta automáticamente el protocolo del tracker, por lo que no se requiere mapeo de puertos por dispositivo.
- Los reportes de eventos y las actualizaciones de estado desde el host aparecen en Plaspy para monitoreo operativo y alertas.
- La visibilidad en Plaspy se consigue una vez que el host conecta correctamente al endpoint de Plaspy y se reciben paquetes de datos.

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el ST20U y su host (comandos SMS para el dispositivo o la herramienta del proveedor para PC/telefono del host).
2. Localice el IMEI del dispositivo y derive el ID de dispositivo requerido por los comandos SMS (el ID es los seis dígitos del IMEI excluyendo el dígito verificador final).
3. Ingrese el endpoint del servidor Plaspy ya sea como dominio d.plaspy.com o IP 54.85.159.138 en los campos del host o en los comandos SMS.
4. Configure el puerto 8888 en la configuración del host o en los SMS y elija UDP o TCP si el dispositivo o host requiere seleccionar el transporte.
5. Complete los campos de APN, nombre de usuario y contraseña según lo exija su operador móvil y aplique o guarde la configuración.
6. Reinicie o haga ciclo de energía del dispositivo o host si el fabricante lo requiere para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y la telemetría en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El proveedor del ST20U facilita comandos basados en SMS para la configuración del APN y el reporte. El ID de dispositivo usado en estos comandos son los seis dígitos del IMEI excluyendo el dígito verificador final. Ejemplo: si el IMEI es 123456789012345 el ID de dispositivo sería 901234.

- Comando para APN y servidor GPRS
  - Reemplace [device_id] con el ID de seis dígitos derivado del IMEI.
  - Reemplace [apn], [apnu] y [apnp] con su APN del operador, usuario de APN y contraseña de APN. Si su operador no usa usuario o contraseña deje esos campos vacíos.
  - Este comando apunta el tracker/host a la IP y puerto del servidor Plaspy e incluye los campos del APN.

```
SA200NTW;[device_id];02;[mode];[apn_used_flag];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Establecer intervalo de reporte a 60 segundos
  - Reemplace [device_id] con el ID de seis dígitos.

```
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

- Verificar configuración actual
  - Reemplace [device_id] con el ID de seis dígitos.

```
SA200CMD;[device_id];02;PresetA
```

Notas sobre marcadores y campos
- [device_id] — ID de seis dígitos derivado del IMEI (últimos seis dígitos excluyendo el dígito verificador final). El ejemplo de conversión se muestra arriba.
- [apn] — cadena del Access Point Name del operador requerida para datos GPRS.
- [apnu] — nombre de usuario del APN si lo exige el operador, de lo contrario dejar vacío.
- [apnp] — contraseña del APN si lo exige el operador, de lo contrario dejar vacío.
- El ejemplo de comando APN usa la IP pública del servidor Plaspy 54.85.159.138 y el puerto 8888. También puede usar el dominio d.plaspy.com cuando el host o la herramienta soporten nombres de dominio.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Plaspy detecta automáticamente el protocolo del tracker.

## Notas de configuración

- El flujo de configuración por SMS mostrado arriba es el método público del proveedor para ajustar el APN y el servidor GPRS. Algunas instalaciones pueden usar en su lugar una herramienta de PC del proveedor o una app para teléfono.
- Las revisiones de firmware y hardware pueden cambiar el formato exacto de los comandos o los campos disponibles; confirme siempre la sintaxis del comando para la revisión de su dispositivo.
- Elija UDP o TCP según las condiciones del host y de la red; Plaspy acepta ambos transportes en el puerto compartido y detectará el protocolo automáticamente.
- Confirme cuidadosamente el IMEI y el ID derivado antes de enviar comandos SMS; un ID incorrecto impedirá que el dispositivo acepte la configuración.
- Conserve una copia de cualquier comando aplicado para la resolución de problemas y facilite esos comandos a su instalador o equipo de soporte si surgen problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el ST20U con un host compatible con Plaspy permite a las flotas combinar telemetría completa del vehículo con datos de ubicación GNSS dentro de Plaspy. Esta integración convierte pings de ubicación en inteligencia accionable al suministrar VIN, odómetro, horas de motor, RPM y consumo de combustible a la plataforma para informes, alertas y flujos operativos.

Para saber más sobre Plaspy y cómo la plataforma se integra con dispositivos como el ST20U, visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles más recientes del fabricante en el sitio oficial de Suntech http://www.suntechint.com/ ya que las especificaciones y los pasos de configuración pueden cambiar con el tiempo.
