---
slug: /teltonika/fmp100/configuration
id: fmp100-configuration
sidebar_label: Configuration
title: Teltonika - FMP100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Teltonika FMP100 para Plaspy, con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FMP100
  - Configuración FMP100
  - Configuración de servidor Teltonika
  - Configuración FMP100 para Plaspy
  - Rastreador GPS Plaspy
  - Configuración de rastreador GPS
  - Configuración de seguimiento de vehículos
  - Guía de configuración Teltonika
  - Configuración SMS FMP100
  - Ajustes de servidor del rastreador
---

# Teltonika - Configuración del FMP100

Esta página describe el contexto público de configuración para usar el Teltonika FMP100 con Plaspy. Reúne los ajustes de servidor prácticos, los requisitos típicos y ejemplos de comandos que están disponibles públicamente para preparar un FMP100 y que reporte ubicación y telemetría a la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que usted utilice (SMS, herramientas web de Teltonika o FOTA). Use esta guía para aplicar los valores públicos de Plaspy y consulte la documentación de Teltonika para detalles específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara el FMP100 para comunicarse con Plaspy aplicando parámetros de red, validando la conectividad y habilitando el envío de posiciones y eventos de sensores al endpoint compartido de Plaspy.

- Configure el APN y los parámetros del servidor para que el dispositivo alcance Plaspy través de la red móvil.
- Seleccione el transporte (UDP o TCP) y configure el dispositivo para enviar al endpoint y puerto del servidor Plaspy.
- Valide la conectividad y confirme que el rastreador aparece en Plaspy revisando posiciones en vivo y los registros de eventos.
- Active el emparejamiento BLE y el reporte local de eventos según las necesidades de su despliegue.
- Utilice los métodos oficiales de configuración de Teltonika (SMS, configuración web o FOTA) para aplicar cambios permanentes.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Dispositivo alimentado y accesible en la toma del vehículo o mediante el método de alimentación suministrado.
- Tarjeta SIM activa con datos y credenciales APN correctas para el operador móvil.
- Acceso al método de configuración de Teltonika que planea usar, por ejemplo comandos SMS, herramientas web de Teltonika o FOTA cuando aplique.
- Una cuenta en Plaspy o acceso a la instancia de Plaspy donde se registrará y monitoreará el dispositivo.
- Conocimiento básico del IMEI del dispositivo o del número de teléfono para dirigir comandos SMS o registrar el equipo en Plaspy.
- Accesorios BLE opcionales emparejados con antelación si va a reenviar telemetría de sensores a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El FMP100 se configura para reportar datos de posición y eventos al endpoint y puerto compartidos de Plaspy. Una vez configurados el APN y los parámetros del servidor, el dispositivo abre una conexión hacia Plaspy y la plataforma detecta el protocolo automáticamente para ingerir el tráfico del dispositivo.

- El rastreador envía posiciones GPS y mensajes de evento a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP; Plaspy soporta ambos y detectará el protocolo utilizado.
- La telemetría de sensores BLE y los eventos de botones se reenvían a Plaspy cuando están emparejados y habilitados.
- El estado del dispositivo y los eventos de conectividad son visibles en Plaspy para monitoreo operativo.
- Una vez activo el reporte, Plaspy muestra ubicaciones en vivo, alertas y telemetría en el panel de control.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Teltonika o al software que planea usar (SMS, herramienta web de Teltonika o FOTA).
2. Configure la dirección del servidor a d.plaspy.com o alternativamente la IP 54.85.159.138 si su flujo requiere usar IP.
3. Establezca el puerto de destino en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP si el equipo requiere selección de transporte.
5. Ingrese las credenciales APN de la tarjeta SIM para que el dispositivo pueda acceder a la red móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en el tablero de Plaspy y que se reciben posiciones.

## Comandos de configuración de ejemplo

El FMP100 puede configurarse usando un comando estilo SMS tal como se documenta en ejemplos públicos de Teltonika. El siguiente comando público establece las credenciales APN y los parámetros del servidor Plaspy. Preserve los marcadores de posición cuando prepare el SMS o la cadena de configuración real.

- Ejemplo de comando SMS de configuración

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando anterior:
- [apn] es el nombre del APN del operador móvil.
- [apnu] es el nombre de usuario del APN si su operador lo requiere; déjelo vacío u omítalo si no es necesario.
- [apnp] es la contraseña del APN si su operador la requiere; déjela vacía u omítala si no es necesaria.
- El comando establece el dominio del servidor Plaspy d.plaspy.com y el puerto 8888 como valores públicos para el envío.
- El último parámetro 2006 en este ejemplo es la selección de transporte; consulte la documentación de Teltonika para el mapeo numérico de las opciones de transporte según su firmware.
- Envíe este comando mediante el método recomendado por el fabricante para su dispositivo (SMS al número de la SIM del rastreador o mediante las herramientas de configuración de Teltonika). Confirme el formato exacto de envío con la documentación de Teltonika.

Si utiliza la configuración web de Teltonika o herramientas FOTA, el mismo dominio de servidor d.plaspy.com y el puerto 8888 deben ingresarse en los campos de servidor u host remoto, y seleccionar el transporte (UDP o TCP) si se requiere.

## Notas de configuración

- Las versiones de firmware y las configuraciones del dispositivo pueden cambiar la forma en que se nombran o aplican los IDs de parámetros; siempre verifique el mapeo de parámetros en el wiki de producto de Teltonika.
- Elegir TCP o UDP puede afectar las características de entrega; Plaspy soporta ambos y detecta automáticamente el protocolo activo.
- Asegúrese de que la SIM tenga un plan de datos adecuado y que las credenciales APN sean correctas antes de intentar registrar el dispositivo en Plaspy.
- El comando SMS público mostrado arriba incluye marcadores de posición para las credenciales APN; reemplácelos por los valores de su operador exactamente según se requiera.
- Recuerde que todos los dispositivos que se conectan a Plaspy usan el mismo puerto 8888, lo que simplifica la configuración del servidor en el dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMP100 con Plaspy ofrece una vía rápida y de bajo esfuerzo para rastreo de vehículos en tiempo real y telemetría básica de sensores BLE. Su factor de forma plug and play reduce el tiempo de instalación mientras que los ajustes de servidor públicos le permiten estandarizar la configuración de los equipos en una flota para que las unidades informen de forma fiable a Plaspy para mapeo, alertas e informes operativos.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details, firmware behavior, and parameter mappings at the manufacturer site https://www.teltonika-gps.com/ before you deploy.
