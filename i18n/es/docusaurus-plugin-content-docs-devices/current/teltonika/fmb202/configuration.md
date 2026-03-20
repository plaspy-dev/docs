---
slug: /teltonika/fmb202/configuration
id: fmb202-configuration
sidebar_label: Configuration
title: Teltonika - FMB202 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Teltonika FMB202 para uso con los ajustes de servidor de Plaspy y pasos básicos de instalación
keywords:
  - teltonika fmb202 configuración
  - teltonika fmb202 instalación
  - configuración del servidor fmb202
  - configuración tracker plaspy
  - configuración dispositivo plaspy
  - configuración rastreador gps teltonika
  - configuración seguimiento vehicular
  - configuración plataforma gps fmb202
  - guía de configuración teltonika
  - seguimiento de flotas plaspy
---

# Teltonika - Configuración del FMB202

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FMB202 con la plataforma Plaspy. Aquí se detallan los ajustes de servidor compartidos que Plaspy requiere, el flujo básico para preparar el dispositivo y los comandos de ejemplo comúnmente usados para apuntar un FMB202 hacia Plaspy. El contenido está pensado para ayudar a usuarios técnicos e instaladores a aplicar los pasos públicos de configuración para que el dispositivo informe a Plaspy para monitoreo y seguimiento.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor. El FMB202 admite múltiples canales de configuración como SMS, comandos GPRS, Teltonika Configurator por USB o Bluetooth y actualizaciones FOTA, así que utilice el método que corresponda al firmware del equipo y al flujo de trabajo del instalador.

## Resumen de la configuración

Preparar un FMB202 para su uso con Plaspy consiste en dirigir el dispositivo al endpoint del servidor de Plaspy, proporcionar las credenciales APN correctas para la conectividad celular y validar que el equipo aparezca e informe correctamente en la plataforma. Los ejemplos públicos de comandos abajo muestran cómo se realiza una configuración básica típica usando la sintaxis pública de Teltonika.

- Apuntar el rastreador al dominio o IP del servidor de Plaspy para que la telemetría llegue a la plataforma.
- Configurar el APN celular, el usuario y la contraseña según los datos del operador para habilitar datos GPRS.
- Ajustar el puerto compartido de Plaspy para que los datos lleguen al socket esperado.
- Seleccionar el transporte (UDP o TCP) si el dispositivo requiere elegir un modo de transporte.
- Guardar y aplicar los ajustes usando las herramientas Teltonika o comandos SMS y validar la conectividad.
- Confirmar que el dispositivo sea visible en Plaspy y que reporte posiciones y eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los ajustes públicos del endpoint de Plaspy que debe ingresar en el dispositivo o mediante el método de configuración Teltonika.

## Requisitos típicos antes de la configuración

- Un dispositivo FMB202 con batería cargada y encendido, o conectado a la alimentación del vehículo de 6 a 30 V si está instalado.
- Conectividad de datos móviles con una tarjeta SIM válida y las credenciales APN de su operador.
- Acceso a un método de configuración Teltonika compatible con el firmware de su equipo, como comandos SMS, comandos GPRS, Teltonika Configurator (USB o Bluetooth) o actualizaciones FOTA Web.
- El firmware del dispositivo debe ser lo suficientemente reciente para aceptar el método de configuración que pretende usar.
- Conocimientos básicos del IMEI del dispositivo y de las credenciales de instalador que requieran las herramientas Teltonika.
- Un plan para validar la conectividad observando el dispositivo en la plataforma Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el FMB202 envía datos de ubicación y telemetría al endpoint y puerto del servidor Plaspy. Plaspy recibe la telemetría y usa su detección de protocolo para interpretar los mensajes del dispositivo y mostrarlos en la plataforma.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los datos se envían mediante el protocolo de transporte seleccionado, UDP o TCP.
- Plaspy detecta e interpreta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma.
- Actualizaciones regulares de posición e informes de eventos se reenvían desde el dispositivo hacia Plaspy para visibilidad y alertas.
- Tras la configuración, valide que el dispositivo aparezca y reporte en Plaspy para su monitoreo operativo.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Teltonika compatible con su dispositivo, como comandos SMS, comandos GPRS, Teltonika Configurator por USB o Bluetooth, o FOTA Web según su firmware y herramientas.
2. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del dispositivo a 8888, que es el puerto de escucha de Plaspy para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte durante la configuración.
5. Configure el APN, el usuario APN y la contraseña APN para que el dispositivo pueda establecer una sesión de datos GPRS.
6. Aplique o guarde la configuración usando el método Teltonika elegido y reinicie el dispositivo si su flujo de trabajo lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo y la telemetría entrante en la plataforma.

## Comandos de configuración de ejemplo

Para configurar los parámetros básicos en su dispositivo Teltonika, el formato de comando público que se utiliza comúnmente es el siguiente. Este ejemplo establece los campos APN, el dominio del servidor, el puerto de Plaspy y un valor de selección de transporte. Conserve los marcadores de posición al reemplazarlos por las credenciales de su operador.

- Envíe este comando vía SMS o por el canal de configuración Teltonika compatible con su dispositivo:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores de posición y campos
- {{apn}} es el nombre del APN requerido por su operador de SIM.
- {{apnu}} es el usuario del APN si su operador lo requiere.
- {{apnp}} es la contraseña del APN si su operador lo requiere.
- 2004 establece el dominio del servidor a d.plaspy.com y 2005 ajusta el puerto a 8888 para Plaspy.
- 2006 en este ejemplo establece un valor de selección de transporte; consulte la documentación Teltonika correspondiente para los valores numéricos exactos que seleccionan UDP o TCP en su firmware.

## Notas de configuración

- Las versiones de firmware y de la herramienta configuradora pueden cambiar los IDs de parámetros y la sintaxis de comandos; siempre confirme el formato de comando con la documentación Teltonika actual.
- El FMB202 admite configuración por SMS y GPRS, así que elija el método que mejor coincida con su instalación y las capacidades del firmware.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que configurar el servidor y el puerto correctos es el paso crítico.
- Si el dispositivo requiere una opción de transporte, pruebe tanto UDP como TCP si tiene dudas y consulte la documentación Teltonika para entender los valores de parámetro de transporte.
- Después de aplicar los ajustes, puede ser necesario reiniciar el dispositivo para que los cambios surtan efecto. Valide la conectividad en Plaspy después del reinicio.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB202 con Plaspy ofrece una vía confiable para la visibilidad de flotas y activos cuando se necesita un rastreador compacto y resistente al agua. Con Plaspy manejando la detección de protocolos y un endpoint de servidor compartido, los instaladores pueden estandarizar la configuración y reducir el trabajo de puesta a punto en la plataforma. Las características del FMB202, como larga autonomía, múltiples canales de configuración y soporte de sensores, lo hacen una opción práctica para instalaciones que requieren rastreo persistente y configuración remota.

Para saber más sobre Plaspy y cómo se integra con rastreadores como el FMB202 visite https://www.plaspy.com. Los métodos de configuración específicos por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones y definiciones de parámetros más recientes en el sitio del fabricante https://www.teltonika-gps.com/ antes de desplegar.
