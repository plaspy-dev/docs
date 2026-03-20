---
slug: /coban/gps_201/configuration
id: gps_201-configuration
sidebar_label: Configuration
title: Coban - GPS-201 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Coban GPS-201 con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Coban GPS-201
  - Configuración Coban GPS
  - Configuración del servidor GPS-201
  - Configuración GPS-201 Plaspy
  - Guía configuración rastreador de mascotas
  - Configuración software de rastreo Coban
  - Comandos SMS para rastreador GPS
  - Configuración de rastreador GPRS
  - Ajustes del servidor del dispositivo
  - Guía de integración a la plataforma
---

# Coban - Configuración del GPS-201

Esta página documenta el contexto público de configuración para usar el rastreador Coban GPS-201 con Plaspy. Resume los ajustes de servidor compartido de Plaspy y las acciones prácticas de configuración basadas en los comandos SMS públicos y el flujo de configuración del fabricante. Use esta guía para preparar su dispositivo para reportar a Plaspy y para comprender los pasos mínimos habitualmente requeridos para la integración.

Plaspy utiliza un endpoint y puerto de servidor compartido para los dispositivos soportados y detecta automáticamente el protocolo del rastreador a nivel de plataforma. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GPS-201 cuenta con un conjunto de comandos SMS públicos en la documentación disponible, por lo que esta guía muestra cómo esos comandos se mapean a los ajustes de servidor de Plaspy, recomendando siempre verificar con la documentación oficial de Coban.

## Resumen de configuración

El objetivo al configurar el GPS-201 para Plaspy es preparar el rastreador para transmitir de forma fiable la ubicación y el estado a la plataforma y validar que el dispositivo aparezca en Plaspy. El conjunto de comandos SMS públicos para este dispositivo permite al instalador establecer los datos del APN, el endpoint del servidor, los intervalos de reporte y el modo de transporte para que el rastreador pueda establecer una conexión GPRS y enviar datos al endpoint de Plaspy.

- Configurar el APN y las credenciales de red para que el dispositivo tenga acceso a datos móviles
- Apuntar el rastreador al endpoint del servidor de Plaspy para que la telemetría llegue a la plataforma
- Elegir el modo de transporte UDP o TCP y aplicar el mismo puerto Plaspy usado en todos los dispositivos
- Configurar el intervalo de reporte y las banderas de protocolo opcionales para la frecuencia de actualización deseada
- Verificar los ajustes y confirmar que el rastreador está reportando a Plaspy

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el lado del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

## Requisitos previos típicos

- Un dispositivo GPS-201 cargado y operativo con acceso a la configuración por SMS o a la herramienta del fabricante
- Una tarjeta SIM activa instalada con un plan de datos y el APN correcto del operador móvil
- Conocimiento de la contraseña predeterminada del dispositivo usada en los comandos SMS (los comandos públicos abajo usan 123456)
- Capacidad para recibir y enviar SMS al rastreador desde el número de teléfono de configuración
- Acceso a la documentación oficial de Coban o notas del proveedor para diferencias de comandos según firmware

## Cómo se conecta este rastreador a Plaspy

El GPS-201 se configura para usar GPRS y enviar actualizaciones periódicas de ubicación y estado a Plaspy. Los pasos de configuración indican al dispositivo el endpoint compartido de Plaspy y el puerto estándar para que la plataforma pueda aceptar las conexiones del dispositivo y analizar automáticamente el protocolo del rastreador.

- El rastreador envía posiciones periódicas por GPRS al endpoint de servidor configurado
- El transporte puede configurarse en UDP o TCP según el soporte del dispositivo y la preferencia del instalador
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados y realiza la detección de protocolo
- Los eventos y mensajes de estado enviados por el rastreador se muestran en Plaspy una vez validada la conectividad
- Se pueden utilizar comandos de verificación o intervalos de reporte para confirmar el envío en vivo a la plataforma

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software, o prepárese para enviar comandos SMS de configuración según la documentación de Coban.
2. Configure el APN y las credenciales del APN del dispositivo para que pueda conectarse a la red de datos móviles.
3. Ingrese la dirección del servidor de Plaspy especificando d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
5. Elija UDP o TCP si el rastreador requiere una selección explícita de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el flujo del equipo lo requiere.
7. Valide que el rastreador reporte a Plaspy comprobando la conectividad o usando el comando SMS de verificación del dispositivo.

## Ejemplos de comandos de configuración

El GPS-201 dispone de un conjunto de comandos por SMS en la documentación pública. Los ejemplos a continuación preservan el orden de comandos y el marcador de contraseña por defecto usado en los comandos públicos. La contraseña predeterminada del dispositivo que aparece en estos comandos públicos es 123456. Reemplace los marcadores donde se indique.

- Restauración de fábrica (paso inicial opcional)
```text
begin123456
```
- Ajustar la zona horaria a UTC 0
```text
time zone123456 0
```
- Configurar el APN del operador
```text
apn123456 {{apn}}
```
  - El marcador {{apn}} debe reemplazarse por la cadena APN de su operador móvil.

- Configurar el usuario y la contraseña del APN
```text
up123456 {{apnu}} {{apnp}}
```
  - {{apnu}} es el usuario del APN y {{apnp}} la contraseña del APN. Si su APN no requiere credenciales, déjelos en blanco según las instrucciones de su operador.

- Configurar el servidor GPRS con la IP y el puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
  - Alternativamente, donde el firmware lo soporte, puede usar el dominio d.plaspy.com en un comando admin similar si está documentado por el fabricante. El comando público anterior usa la IP y el puerto de Plaspy.

- Establecer el intervalo de actualización para el reporte de posición (ejemplo)
```text
fix060s060s***n123456
```
  - Este ejemplo público establece un patrón de reporte periódico. Modifique según el intervalo deseado y la sintaxis del fabricante.

- Cambiar a modo GPRS y seleccionar transporte
```text
gprs123456,1,1
```
  - La variante anterior usa parámetros para seleccionar GPRS y el transporte. Algunos firmwares también aceptan:
```text
gprs123456
```
  - Consulte la documentación de Coban para la sintaxis exacta del parámetro de transporte para UDP versus TCP.

- Verificar los ajustes actuales
```text
check123456
```

- Habilitar estado de protocolo mejorado para reporte adicional de sensores digitales
```text
protocol123456 18
```
  - Este comando público se usa para activar modos específicos de reporte de protocolo como el informe mejorado de sensores digitales. Use solo si aplica a su instalación.

## Notas de configuración

- La configuración por SMS es de uso común para el GPS-201; confirme que la sintaxis SMS coincide con la versión de firmware de su dispositivo.
- La contraseña predeterminada del dispositivo 123456 aparece en los comandos públicos; si usted o su proveedor cambiaron la contraseña, utilice la contraseña actual.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que asegurar que la dirección del servidor y el puerto coincidan con los ajustes de Plaspy es el paso clave.
- Elija UDP o TCP en el dispositivo según la confiabilidad de la red y la preferencia del instalador; ambos son compatibles con Plaspy.
- Las variaciones de firmware, diferencias regionales de hardware y las herramientas del instalador pueden cambiar la sintaxis de los comandos o las funciones soportadas. Siempre verifique con la documentación más reciente de Coban.

## Por qué usar Plaspy con esta configuración

Usar el Coban GPS-201 con Plaspy ofrece a organizaciones y dueños de mascotas una forma práctica de recibir reportes de ubicación en tiempo real y el estado del dispositivo en una sola plataforma. Al configurar el rastreador para que apunte a Plaspy y confirmar la conectividad, puede centralizar los datos de trazado, monitorear la salud del dispositivo y utilizar las herramientas de la plataforma para alertas y historial.

Learn more about Plaspy at https://www.plaspy.com and verify device specific commands and firmware details with the official Coban documentation at https://www.coban.net/ to ensure accuracy for your hardware and software revision.
