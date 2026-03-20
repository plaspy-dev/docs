---
slug: /tzone/tz_bc01/configuration
id: tz_bc01-configuration
sidebar_label: Configuration
title: TZone - TZ-BC01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del TZone TZ-BC01 para conectarlo a Plaspy usando GPRS público y comandos SMS
keywords:
  - TZone TZ-BC01
  - Configuración TZ-BC01
  - Configuración rastreador TZone
  - Configuración TZ-BC01 Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Rastreador iBeacon
  - Configuración baliza Bluetooth
  - Configuración GPRS
  - Comandos SMS de configuración
---

# TZone - TZ-BC01: Configuración

Esta página describe el contexto público de configuración para usar el TZone TZ-BC01 con Plaspy. Reúne los pasos prácticos y los valores de servidor publicados públicamente que puede usar para apuntar un TZ-BC01 a Plaspy para el reporte y la visibilidad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando está disponible, esta guía incluye los comandos SMS publicados para el TZ-BC01 y explica cómo se relacionan con los ajustes del servidor de Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el TZ-BC01 para que se comunique con Plaspy y así la ubicación y el estado del dispositivo sean visibles en la plataforma. Para las unidades TZ-BC01 que soportan reporte vía GPRS, la configuración suele incluir establecer el APN del operador, el intervalo de reporte y el endpoint del servidor GPRS.

- Configure el APN del operador para que el dispositivo pueda usar datos móviles para reportar
- Establezca un intervalo de actualización adecuado para la frecuencia de reporte requerida
- Apunte el dispositivo al endpoint de servidor de Plaspy para que los datos lleguen a la plataforma
- Active el modo de reporte por GPRS o datos para que el rastreador envíe paquetes de ubicación
- Valide que el dispositivo es visible en Plaspy después de aplicar y guardar la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Verifique que el TZ-BC01 tenga alimentación y batería cargada
- Una SIM móvil funcional con datos y el APN del operador si planea usar reporte por GPRS
- Capacidad para enviar comandos SMS al dispositivo si usa configuración por SMS
- Acceso a la documentación del fabricante o a las herramientas de instalación para el TZ-BC01
- Confirme los valores de APN, usuario y contraseña con su operador móvil

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reporte por GPRS, el TZ-BC01 envía datos de ubicación y del dispositivo al endpoint de Plaspy en la dirección y puerto compartidos. Plaspy recibe esos paquetes y, mediante su detección automática de protocolo, interpreta los mensajes del rastreador para que el dispositivo aparezca y se actualice en la plataforma.

- El rastreador reporta al endpoint del servidor Plaspy usando la dirección configurada
- Los datos se envían por el puerto 8888 que Plaspy usa para todos los dispositivos compatibles
- El transporte puede ser UDP o TCP según el firmware y la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar protocolo en la plataforma
- Tras el envío de datos por parte del dispositivo, este se vuelve visible y actualizable en Plaspy para monitoreo e informes

## Flujo común de configuración

1. Acceda al método o software de configuración oficial de TZone según lo provea el fabricante, normalmente mediante comandos SMS o la herramienta del proveedor.
2. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o la IP 54.85.159.138 según lo que acepte el dispositivo.
3. Establezca el puerto de reporte en 8888.
4. Elija UDP o TCP en el dispositivo si el firmware solicita selección de transporte.
5. Aplique o guarde la configuración en el rastreador (para SMS, esto significa enviar los comandos SMS correspondientes).
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con los intervalos de actualización esperados.

## Comandos de configuración de ejemplo

Para configurar el TZ-BC01 vía SMS, envíe los comandos en el orden mostrado. Estos comandos públicos son los formatos SMS publicados por el fabricante para este modelo.

- Configure el APN del operador (reemplace los marcadores por los valores de su operador)
```text
*000000,011,[apn]{{# if apnu or apnp then }},[apnu],[apnp]{{# endif }}#
```
Explicación: [apn] es el APN del operador móvil. [apnu] es el nombre de usuario del APN y [apnp] es la contraseña del APN. El comando usa el prefijo de contraseña del dispositivo mostrado como 000000 en este ejemplo; reemplace si su dispositivo usa una contraseña distinta.

- Establecer el intervalo de actualización a 60 segundos
```text
*000000,018,60,999#
```
Explicación: Esto configura el intervalo de reporte y un parámetro relacionado según lo documentado por el fabricante.

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
*000000,015,0,54.85.159.138,8888#
```
Explicación: Este comando configura la IP y el puerto del servidor GPRS al que el rastreador enviará los paquetes. La IP pública de Plaspy es 54.85.159.138 y el puerto de la plataforma es 8888. Si su dispositivo permite nombres de dominio, puede configurar d.plaspy.com donde el firmware lo soporte, pero el comando anterior muestra el ejemplo con la IP publicado por el fabricante.

- Activar modo GPRS
```text
*000000,016,1#
```
Explicación: Esto habilita el reporte por GPRS en el dispositivo para que envíe datos al servidor configurado.

## Notas sobre la configuración

- La configuración basada en SMS está soportada para el TZ-BC01 según los comandos publicados; asegure que las entregas SMS estén permitidas y que el dispositivo acepte configuración remota por SMS desde su número.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Confirme los formatos exactos con la documentación oficial de TZone para la revisión de su dispositivo.
- Algunos equipos aceptan nombres de dominio mientras otros requieren una IP numérica. Si tiene dudas, pruebe con la IP numérica 54.85.159.138 y con el dominio d.plaspy.com donde el firmware lo soporte.
- Elija UDP o TCP según lo solicite el firmware del dispositivo; Plaspy se encargará de la detección del protocolo al recibir los paquetes, pero el dispositivo debe enviar usando el transporte seleccionado.
- Mantenga un registro de la contraseña del dispositivo usada en los comandos SMS; los ejemplos muestran 000000 como prefijo de contraseña y debe reemplazarse si su equipo usa otra clave.

## Por qué usar Plaspy con esta configuración

Apuntar el TZ-BC01 a Plaspy centraliza la visibilidad de los rastreadores y hace que los reportes sean consistentes entre dispositivos al usar una dirección de servidor compartida y un único puerto. Las organizaciones que necesitan visibilidad confiable de ubicaciones y supervisión operativa se benefician al enviar dispositivos a Plaspy, ya que las actualizaciones de ubicación, la información de estado y los reportes aparecen en una sola plataforma.

Para saber más sobre Plaspy y las configuraciones de dispositivos soportadas visite https://www.plaspy.com. Los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles específicos más recientes del equipo en el sitio oficial de TZone http://www.tzonedigital.com/ antes de completar cualquier despliegue.
