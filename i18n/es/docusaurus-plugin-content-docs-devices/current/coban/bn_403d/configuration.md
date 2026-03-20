---
slug: /coban/bn_403d/configuration
id: bn_403d-configuration
sidebar_label: Configuration
title: Coban - BN-403D Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del Coban BN-403D con comandos SMS públicos y ajustes de servidor Plaspy para integración rápida
keywords:
  - Coban BN-403D configuración
  - BN-403D configuración Plaspy
  - Configuración rastreador GPS Coban
  - Configuración servidor BN-403D
  - Comandos SMS Coban
  - Configuración rastreador vehicular Plaspy
  - Ajustes APN BN-403D
  - Seguimiento de flotas Plaspy
  - Guía configuración rastreador GPS
  - Configuración telemetría BN-403D
---

# Coban - BN-403D Configuración

Esta página recopila la información pública de configuración para usar el rastreador GPS Coban BN-403D con la plataforma Plaspy. Incluye los ajustes de servidor prácticos, los requisitos habituales y los comandos SMS públicos que permiten apuntar el dispositivo a Plaspy para que reporte ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El BN-403D admite configuración por SMS y configuración vía Bluetooth; los ejemplos de comandos SMS a continuación están tomados de la documentación pública del dispositivo y muestran cómo ajustar el APN, el endpoint del servidor, el intervalo de reporte y la selección de transporte.

## Resumen de la configuración

El objetivo de la configuración es dejar el BN-403D preparado para comunicarse de forma confiable con Plaspy y aparecer como un dispositivo activo en su cuenta de Plaspy. Para los dispositivos BN-403D esto suele implicar establecer el APN del operador móvil, añadir credenciales de APN si son necesarias, y apuntar el dispositivo al endpoint y puerto del servidor de Plaspy.

- Configure el APN y, si aplica, las credenciales de APN para que el rastreador tenga acceso de datos GPRS/LTE.
- Establezca el servidor del dispositivo al endpoint de Plaspy para que las posiciones y eventos reporten a la plataforma.
- Seleccione el modo de transporte UDP o TCP si el dispositivo requiere especificar explícitamente el transporte.
- Defina el intervalo y comportamiento de reporte para que las posiciones y las alarmas se transmitan con la frecuencia esperada.
- Verifique los ajustes y confirme que el dispositivo aparece en línea en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor Plaspy: d.plaspy.com
- IP del servidor Plaspy: 54.85.159.138
- Puerto para todos los dispositivos Plaspy: 8888
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden apuntar al servidor y puerto compartidos arriba

## Requisitos típicos antes de la configuración

- Una tarjeta SIM operativa con plan de datos y los ajustes APN correctos para el operador.
- Alimentación al BN-403D y acceso a sus interfaces de comunicación para la configuración (SMS o Bluetooth según disponibilidad).
- La contraseña del dispositivo si los comandos de configuración por SMS la requieren (los ejemplos públicos abajo usan la contraseña predeterminada).
- Acceso al método o software de configuración oficial de Coban para la versión de firmware y revisión de hardware de su unidad.
- Una cuenta en Plaspy donde el dispositivo será visible tras enviar datos correctamente.

## Cómo se conecta este rastreador a Plaspy

El BN-403D envía ubicación, estado y eventos de alarma al endpoint y puerto del servidor Plaspy para que los paneles y mecanismos de alertas de Plaspy procesen y muestren la telemetría del dispositivo. La configuración define el APN del dispositivo y la dirección del servidor para usar conectividad GPRS o LTE en reportes continuos.

- El rastreador envía las posiciones y mensajes de estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy recibe mensajes GPS y de alarma y los asocia al registro del dispositivo en la plataforma.
- El transporte puede usar UDP o TCP según la configuración del rastreador y el comportamiento de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se puede usar el mismo puerto para todos los dispositivos compatibles.
- La validación se completa cuando el dispositivo aparece en línea y transmite las actualizaciones de posición esperadas a Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración del fabricante para el BN-403D, como comandos SMS, herramientas Bluetooth o el software del proveedor recomendado para su firmware.
2. Introduzca la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según el formato de comandos del dispositivo.
3. Establezca el puerto del servidor en 8888 que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el dispositivo y confirme que los mensajes SMS o el software indiquen éxito.
6. Reinicie el dispositivo si el fabricante lo requiere o tras aplicar cambios en el servidor.
7. Valide que el BN-403D reporte a Plaspy comprobando el estado del dispositivo y las posiciones recientes en su cuenta Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son ejemplos públicos proporcionados para la configuración del BN-403D. Utilizan la interfaz SMS del dispositivo y la contraseña predeterminada 123456 en los ejemplos. Si cambió la contraseña del dispositivo, reemplace 123456 por su contraseña actual.

- Restauración de fábrica (paso opcional inicial)
```text
begin123456
```

- Establecer la zona horaria a UTC 0
```text
time zone123456 0
```

- Configurar el APN del operador
```text
apn123456 [apn]
```
Explicación: sustituya [apn] por la cadena APN de su operador móvil.

- Establecer usuario y contraseña del APN (si el operador lo requiere)
```text
up123456 [apnu] [apnp]
```
Explicación: sustituya [apnu] por el usuario del APN y [apnp] por la contraseña del APN. Si no se requiere usuario o contraseña, muchos operadores aceptan campos vacíos o se puede omitir este paso.

- Configurar el servidor GPRS a Plaspy por IP y puerto
```text
adminip123456 54.85.159.138 8888
```
Este comando apunta el dispositivo a la IP y puerto del servidor Plaspy. También puede usar el dominio d.plaspy.com si el dispositivo acepta nombres de dominio en los comandos de servidor.

- Establecer el intervalo de actualización de ubicación
```text
fix060s060s***n123456
```
Este ejemplo corresponde al comando público mostrado para el BN-403D. Ajústelo según sus requisitos de reporte y las especificaciones del firmware.

- Cambiar a modo GPRS y seleccionar transporte (ejemplo para UDP o TCP según firmware)
```text
gprs123456,1,1
```
O simplemente:
```text
gprs123456
```
Explicación: algunas versiones de firmware admiten un parámetro de transporte; consulte la documentación del fabricante para el significado exacto de cada parámetro. Elegir UDP o TCP puede requerir valores de parámetro distintos.

- Consultar la configuración actual del dispositivo (verificación)
```text
check123456
```

- Habilitar funciones extendidas del protocolo como reporte de sensor de combustible
```text
protocol123456 18
```
Explicación: este comando aparece en las notas públicas de configuración para habilitar estado del sensor de combustible o mejorar transmisiones de sensores digitales. Úselo solo si tiene el sensor compatible y comprende el efecto en los reportes.

Nota: Mantenga el valor de la contraseña del dispositivo correcto para su unidad. Los ejemplos anteriores usan la contraseña predeterminada pública 123456; si la contraseña fue cambiada, utilice la contraseña actual.

## Observaciones sobre la configuración

- La configuración por SMS es comúnmente compatible con el BN-403D, pero también puede haber herramientas de configuración por Bluetooth; elija el método que coincida con su instalación y la versión de firmware.
- Las revisiones de firmware y hardware pueden cambiar el formato de comandos, el orden de parámetros y las funciones disponibles; confirme la sintaxis con la documentación de Coban cuando tenga dudas.
- Tanto TCP como UDP funcionan con Plaspy cuando el dispositivo está apuntando al servidor y puerto de Plaspy; consulte las indicaciones de Coban para los valores de parámetros que seleccionan UDP frente a TCP en su firmware.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles e intentará la detección automática de protocolo una vez que el dispositivo se conecte a d.plaspy.com o a 54.85.159.138.
- Use el comando check o las herramientas del fabricante para verificar la configuración tras aplicar los cambios y antes del despliegue completo.

## Por qué usar Plaspy con esta configuración

Usar el BN-403D con Plaspy ofrece a las organizaciones un camino sencillo para integrar la telemetría vehicular, las alarmas y la ubicación en una única plataforma de gestión de flotas. Al apuntar el dispositivo al servidor y puerto compartidos de Plaspy y configurar el APN y el intervalo de reporte, los dispositivos informan de manera consistente para que los equipos puedan monitorear el movimiento, recibir alertas accionables y revisar recorridos históricos para operaciones y análisis de incidentes.

Para saber más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, comportamiento de firmware e instrucciones de instalación consulte con el fabricante en https://www.coban.net/.
