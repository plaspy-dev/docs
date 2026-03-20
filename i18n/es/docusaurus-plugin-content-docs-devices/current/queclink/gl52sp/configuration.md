---
slug: /queclink/gl52sp/configuration
id: gl52sp-configuration
sidebar_label: Configuration
title: QuecLink - GL52SP Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para QuecLink GL52SP y cómo apuntar el dispositivo a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración QuecLink GL52SP
  - Configuración GL52SP
  - Configuración rastreador GPS QuecLink
  - Integración Plaspy
  - Configuración servidor rastreador GPS
  - Configuración rastreador de activos
  - Rastreador de activos Sigfox
  - Guía configuración QuecLink
  - Configuración plataforma de rastreo
  - Integración plataforma GPS
---

# QuecLink - Configuración del GL52SP

Esta página ofrece contexto público de configuración para usar el QuecLink GL52SP con Plaspy. Reúne los ajustes de servidor de Plaspy que necesitará y describe pasos prácticos y comandos de ejemplo comúnmente usados con dispositivos QuecLink. Utilice esta referencia para apuntar un equipo compatible a la plataforma Plaspy y validar la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GL52SP está diseñado como un rastreador de activos Sigfox; sin embargo, algunos dispositivos y firmwares de QuecLink también aceptan comandos AT vía SMS o GPRS para configuración. Donde existan comandos públicos vía SMS, se incluyen más abajo — verifique la aplicabilidad para su unidad y firmware antes de aplicar configuraciones.

## Resumen de configuración

Esta configuración prepara al GL52SP para comunicarse con Plaspy, de modo que el dispositivo pueda reportar posición y estado a la plataforma. El objetivo es configurar el envío de telemetría al endpoint global de Plaspy y validar que el rastreador aparezca en su cuenta.

- Apuntar el rastreador al endpoint de Plaspy para que las actualizaciones de ubicación lleguen a la plataforma
- Configurar el transporte y el puerto de servidor que Plaspy utiliza para todos los dispositivos
- Validar la conectividad de red y que el dispositivo aparezca en Plaspy
- Habilitar y verificar intervalos de reporte y entradas de alerta requeridas para el monitoreo
- Usar comandos SMS AT de ejemplo cuando aplique para establecer APN, servidor e intervalo de reporte

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP (el dispositivo puede configurarse para UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Confirmar que el dispositivo tiene energía y es accesible para la configuración
- Asegurar que el dispositivo esté provisionado en una red soportada para su región (registro Sigfox para GL52SP o servicio celular si usa métodos SMS/GPRS)
- Tener acceso al método de configuración del fabricante que vaya a utilizar (comandos SMS, herramienta USB o software del proveedor)
- Conocer las credenciales necesarias o la contraseña del dispositivo (el ejemplo de contraseña por defecto que se muestra abajo es queclink cuando aplique)
- Preparar la información del APN si se usa configuración GPRS (se usan marcadores como [apn], [apnu], [apnp] cuando corresponda)
- Tener un método para validar los reportes del dispositivo en Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el rastreador envía actualizaciones de ubicación y estado al endpoint compartido de Plaspy para que el dispositivo sea visible y monitoreable en la plataforma. Plaspy recibe la conexión entrante en el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador para decodificar los mensajes.

- El rastreador reporta al endpoint d.plaspy.com o directamente a la IP 54.85.159.138
- Todas las conexiones de dispositivo usan el puerto 8888 en Plaspy
- El transporte puede ser UDP o TCP según la capacidad y configuración del equipo
- Plaspy detecta automáticamente el protocolo y asigna los datos entrantes al tipo de dispositivo correcto
- Una vez validado el reporte, Plaspy muestra datos de ubicación y eventos para monitoreo operativo

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de QuecLink para su unidad y firmware.
2. Ingrese el dominio del servidor d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor/host.
3. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Seleccione UDP o TCP si su equipo requiere elección de transporte.
5. Aplique o guarde la configuración en el dispositivo y, si es necesario, envíe los comandos SMS o use la herramienta del proveedor para desplegar los ajustes.
6. Reinicie el dispositivo si el método de configuración o el firmware exige un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte en Plaspy y aparezca en su cuenta o vista de monitoreo.

## Comandos de configuración de ejemplo

Los siguientes comandos públicos de ejemplo se muestran como comandos AT estilo SMS típicos para dispositivos QuecLink. Fueron publicados como una secuencia de configuración vía SMS. Mantenga el orden mostrado; el primer comando restablece la configuración de fábrica y es opcional solo cuando sea necesario.

- Notas:
  - La contraseña de dispositivo de muestra en estos comandos es queclink y se muestra como valor por defecto.
  - Los marcadores como [apn], [apnu] y [apnp] deben reemplazarse por los valores APN de su operador celular cuando corresponda.
  - Estos comandos son ejemplos públicos. Verifique que su firmware GL52SP soporte configuración por SMS AT antes de enviarlos.

1. (Opcional) Restaurar configuración de fábrica
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar zona horaria UTC-0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador (reemplazar marcadores según sea necesario)
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4. Configurar el servidor GPRS a Plaspy (se proporcionan dominio e IP)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer intervalo de actualización a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

## Notas de configuración

- El GL52SP es un rastreador de activos Sigfox; confirme si los comandos AT por SMS o estilo GPRS aplican a su unidad y firmware antes de utilizarlos.
- Las revisiones de firmware y las variantes de hardware pueden cambiar el soporte y el comportamiento de los comandos; pruebe en un equipo antes de desplegar masivamente.
- Elija TCP o UDP según la capacidad del dispositivo. Plaspy soporta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Los marcadores como [apn], [apnu] y [apnp] deben rellenarse con los datos correctos del operador al configurar datos celulares.
- Priorice la documentación oficial de QuecLink y las herramientas de configuración del fabricante para instrucciones específicas del dispositivo y la referencia de comandos más actualizada.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el QuecLink GL52SP (u otros dispositivos QuecLink compatibles) centraliza la visibilidad de activos, el reporte de eventos y el monitoreo en una sola plataforma. Apuntar los rastreadores al endpoint compartido de Plaspy simplifica el despliegue porque Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo para decodificar y presentar la telemetría.

Para saber más sobre cómo Plaspy gestiona las conexiones de dispositivos visite https://www.plaspy.com. Para detalles de configuración específicos por dispositivo, notas de firmware y referencias oficiales de comandos, confirme la información en el sitio del fabricante https://www.queclink.com/. Los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre conviene verificar la documentación actual antes de aplicar cambios.
