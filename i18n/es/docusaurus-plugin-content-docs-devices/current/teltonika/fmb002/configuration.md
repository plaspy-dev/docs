---
slug: /teltonika/fmb002/configuration
id: fmb002-configuration
sidebar_label: Configuration
title: Teltonika - FMB002 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB002 y conectarlo a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración Teltonika FMB002
  - Instalación Teltonika FMB002
  - Configuración servidor FMB002
  - Configuración FMB002 Plaspy
  - Rastreador OBDII Teltonika
  - Rastreo de vehículos FMB002
  - Rastreador para gestión de flotas
  - Configuración plataforma GPS FMB002
  - Comandos Teltonika FMB002
  - Configuración rastreador Plaspy
---

# Teltonika - Configuración del FMB002

Esta página documenta el contexto público de configuración para usar el Teltonika FMB002 con Plaspy. Incluye la información práctica a nivel de servidor y comandos que normalmente aplicará en el dispositivo o mediante las herramientas del fabricante para que el FMB002 reporte a Plaspy. Use esta guía como referencia enfocada en la plataforma y consulte los recursos oficiales de Teltonika para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice (SMS, Teltonika Configurator, Bluetooth o GPRS). Esta página explica los ajustes públicos comunes, un comando de ejemplo para dispositivos Teltonika y el flujo de trabajo típico para obtener visibilidad en Plaspy.

## Resumen de la configuración

Esta configuración prepara el FMB002 para enviar datos del vehículo y OBDII a Plaspy usando el punto final público y el puerto de Plaspy. El objetivo es establecer parámetros de red, apuntar el dispositivo al endpoint de Plaspy, elegir el transporte si es necesario y verificar que el dispositivo reporte correctamente.

- Configure el APN del dispositivo y los detalles de conexión al servidor para que el rastreador pueda establecer conectividad GPRS con Plaspy.
- Apunte el dispositivo al dominio o IP de Plaspy y ajuste el puerto de la plataforma para que los datos lleguen correctamente.
- Seleccione el método de transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy y transmite los datos OBDII y GNSS esperados.
- Use las herramientas de Teltonika o comandos SMS según soporte el dispositivo y su flujo de instalación.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported; configure the device with the transport it requires  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Puede ingresar el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo, según el comportamiento de la herramienta Teltonika o del firmware.

## Requisitos típicos antes de comenzar

- Un FMB002 con alimentación y accesible para realizar la configuración.
- Una tarjeta SIM operativa y acceso a datos móviles configurado para GPRS si el dispositivo lo requiere.
- Acceso al método de configuración de Teltonika que prefiera (comandos SMS, Teltonika Configurator vía USB o Bluetooth, o la app FMBT).
- Conocimiento del APN del operador y de las credenciales de APN si son necesarias (en los ejemplos se usan marcadores).
- Familiaridad básica con guardar y reiniciar la configuración del dispositivo después de los cambios.
- Confirmación de que el firmware del dispositivo admite el método de configuración que piensa utilizar.

## Cómo se conecta este rastreador a Plaspy

Cuando el FMB002 esté configurado con los ajustes de Plaspy, establecerá una conexión GPRS y enviará ubicación, datos OBDII y eventos al endpoint compartido y al puerto de Plaspy. Plaspy recibe la conexión en el puerto común y detecta automáticamente el protocolo del rastreador para que los dispositivos aparezcan y reporten sin necesidad de cambiar puertos por cada uno.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o a 54.85.159.138).
- Los datos se envían por el transporte configurado (UDP o TCP) al puerto 8888 que Plaspy usa para todos los dispositivos.
- Plaspy detecta el protocolo automáticamente y decodifica los mensajes entrantes del rastreador.
- Normalmente se envían posiciones GNSS y parámetros OBDII disponibles desde el FMB002.
- Eventos y telemetría quedan visibles en Plaspy para labores de monitoreo vehicular y flotas.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de Teltonika que prefiera (SMS, Teltonika Configurator por USB o Bluetooth, app FMBT o comandos GPRS).
2. Ingrese el endpoint de Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Ajuste el puerto del dispositivo a 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Seleccione UDP o TCP si su dispositivo requiere elegir el método de transporte durante la configuración.
5. Aplique o guarde la configuración en la herramienta de Teltonika o envíe el comando equivalente por SMS/GPRS.
6. Reinicie o corte la alimentación del dispositivo si la herramienta o el firmware requieren un reinicio para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma, confirmando que se reciben mensajes GNSS y OBDII básicos.

Si utiliza el flujo de comandos SMS o GPRS de Teltonika, incluya los valores del APN y el servidor y puerto de Plaspy exactamente como se muestra en los ejemplos.

## Comandos de configuración de ejemplo

El FMB002 soporta configuración por SMS o comandos GPRS. El ejemplo público a continuación establece valores de APN y apunta el dispositivo a Plaspy. Conserve los marcadores y sustitúyalos por los valores de su operador:

- {{apn}} es el APN del operador
- {{apnu}} es el usuario APN si se requiere
- {{apnp}} es la contraseña APN si se requiere

Sample Teltonika setparam command (public example):

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando anterior:
- El comando establece los parámetros de APN y asigna el dominio d.plaspy.com y el puerto 8888 para Plaspy.
- Reemplace {{apn}}, {{apnu}} y {{apnp}} con la configuración de APN de su operador.
- Use el canal de configuración Teltonika que prefiera (SMS, GPRS o Teltonika Configurator) para enviar este comando.
- La numeración de parámetros y la sintaxis exacta pueden variar entre versiones de firmware, por lo que verifique los IDs de comando en la documentación de Teltonika para su versión de firmware.

## Notas de configuración

- La elección del transporte (UDP frente a TCP) puede afectar las características de entrega; seleccione el que sea compatible y recomendado para su despliegue y verifíquelo con la documentación de Teltonika.
- Las versiones de firmware y las revisiones de hardware pueden cambiar los IDs de parámetros y la sintaxis de comandos soportada; confirme siempre con la referencia oficial de configuración de Teltonika para su firmware.
- El dispositivo admite múltiples canales de configuración (SMS, GPRS, Bluetooth, Configurator); utilice el método que se ajuste a sus restricciones operativas.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que no necesita asignar puertos únicos por dispositivo.
- Si la configuración no se aplica de inmediato, intente guardar y reiniciar el rastreador o cortarle la alimentación, y luego verifique nuevamente la conectividad con Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB002 con Plaspy ofrece un camino sencillo para integrar datos compactos de OBDII y GNSS en una plataforma centralizada. Las capacidades OBDII y GNSS del FMB002 lo hacen apto para flotas comerciales ligeras, registros de conducción y casos de telemetría donde los datos del vehículo y del motor son valiosos. Apuntar el dispositivo al servidor compartido de Plaspy y usar un puerto consistente simplifica despliegues a gran escala y la incorporación de dispositivos.

Learn more about Plaspy and how devices connect at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and parameter references, verify details on the manufacturer site https://www.teltonika-gps.com/ since setup steps and command IDs can change over time.
