---
slug: /tk_star/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: TK-Star - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TK-Star TK103 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración TK-Star TK103
  - configuración TK103 Plaspy
  - configuración rastreador GPS TK-Star
  - configuración servidor TK103
  - comandos SMS TK103
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - configuración rastreador gestión de flotas
  - configuración rastreador GPRS
  - ajustes APN TK103
---

# TK-Star - Configuración TK103

Esta página explica cómo preparar y configurar un rastreador TK-Star TK103 para que envíe datos a Plaspy. Aquí encontrará los ajustes de servidor compartido que Plaspy utiliza y los comandos SMS públicos del TK103 que permiten apuntar el dispositivo a la plataforma. Use esta guía para conocer los pasos prácticos necesarios antes de poner el equipo en producción.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK103 puede configurarse por comandos SMS (documentados más abajo) o con software del fabricante; siga siempre las indicaciones del proveedor y verifique los detalles de su unidad antes de desplegar.

## Resumen de configuración

Este proceso prepara una unidad TK103 para enviar posiciones y estados a Plaspy usando el endpoint y el puerto compartidos de Plaspy. El objetivo práctico es habilitar el acceso a la red, apuntar el equipo al servidor de Plaspy, confirmar los parámetros de transporte y verificar que el dispositivo sea visible en la plataforma.

- Configure en el TK103 un APN de datos móviles válido y, si corresponde, las credenciales del APN.
- Apunte el rastreador al endpoint de Plaspy para que informe a d.plaspy.com o a la IP del servidor Plaspy.
- Defina el intervalo de reporte para que el equipo envíe actualizaciones periódicas a Plaspy.
- Seleccione UDP o TCP como transporte si el dispositivo solicita elegirlo.
- Verifique que el equipo se registre y empiece a enviar actualizaciones de ubicación a Plaspy en el puerto 8888.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Detección de protocolo: Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos

## Requisitos típicos antes de la configuración

- Una unidad TK103 con alimentación instalada o accesible para configuración.
- Una tarjeta SIM con datos y SMS activos insertada en el rastreador y con acceso al APN del operador móvil.
- Conocer la contraseña del dispositivo; los ejemplos usan la contraseña por defecto 123456.
- Acceso al método de configuración del fabricante que prefiera, como interfaz por SMS o herramientas oficiales.
- Un plan para probar la conectividad y confirmar que el dispositivo aparece en Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TK103 envía su información de GPS y estado del dispositivo a través de la red móvil al endpoint y puerto de Plaspy. Plaspy recibe los mensajes entrantes y determina automáticamente el protocolo correcto, por lo que no se requiere seleccionar un protocolo adicional en la plataforma.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los mensajes del dispositivo se envían al puerto 8888 en el endpoint de Plaspy.
- El dispositivo usa datos GPRS para entregar actualizaciones periódicas de posición y mensajes de eventos.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante para mostrarla en la plataforma.
- Una vez activo el reporte, el dispositivo queda visible para seguimiento de ubicación y monitoreo operativo dentro de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software (en TK103 esto suele implicar enviar comandos SMS o usar herramientas del proveedor).
2. Configure el APN del equipo y las credenciales del APN necesarias para la conectividad GPRS.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
4. Establezca el puerto del servidor en 8888.
5. Seleccione UDP o TCP si el dispositivo requiere una selección explícita de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el equipo reporte a Plaspy confirmando la visibilidad y la llegada de datos en la plataforma.

## Comandos de configuración de ejemplo

El TK103 puede configurarse por SMS usando la contraseña del dispositivo. Los comandos de ejemplo a continuación usan la contraseña por defecto 123456. Conserve los marcadores de posición tal como se muestran.

1. Restauración opcional a valores de fábrica (solo si necesita reiniciar el dispositivo a los ajustes de fábrica):
```
begin123456
```
2. Establecer el APN del operador (reemplace {{apn}} por el APN de su operador móvil):
```
apn123456 {{apn}}
```
3. Establecer el usuario del APN si su operador lo requiere (reemplace {{apnu}} por el nombre de usuario del APN):
```
apnuser123456 {{apnu}}
```
4. Establecer la contraseña del APN si es necesaria (reemplace {{apnp}} por la contraseña del APN):
```
apnpasswd123456 {{apnp}}
```
5. Establecer el servidor GPRS a Plaspy usando la IP y el puerto del servidor Plaspy (esto apunta el dispositivo a Plaspy en el puerto 8888):
```
adminip123456 54.85.159.138 8888
```
6. Establecer el intervalo de subida a 60 segundos (ajuste según su caso de uso):
```
upload123456 60
```
7. Cambiar el dispositivo a modo GPRS para que use datos móviles para los reportes:
```
gprs123456
```

Notas sobre los marcadores de posición:
- {{apn}} es el Access Point Name del operador necesario para datos móviles.
- {{apnu}} es el usuario del APN, usado solo si su operador requiere autenticación.
- {{apnp}} es la contraseña del APN, usada solo si su operador la requiere.
- Mantenga la contraseña del dispositivo (123456 en el ejemplo) al enviar los SMS de configuración, a menos que la haya cambiado.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar la sintaxis y el comportamiento de los comandos; confirme los comandos y las respuestas exactas para su firmware TK103.
- El TK103 admite configuración por SMS como se muestra aquí; algunos instaladores prefieren usar el software del fabricante o herramientas USB cuando estén disponibles.
- Seleccione UDP o TCP según la preferencia del instalador o la capacidad del dispositivo; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Al usar el comando adminip, puede suministrar el dominio del servidor Plaspy o la IP; el ejemplo utiliza la IP del servidor Plaspy para evitar dependencia de DNS.
- Después de cambiar ajustes de servidor o APN, permita tiempo para que el dispositivo se registre en la red móvil y comience a reportar.

## Por qué usar Plaspy con esta configuración

Configurar el TK-Star TK103 para reportar a Plaspy ofrece una forma directa de centralizar la ubicación de vehículos, recibir alertas de eventos y supervisar la operación. El uso del endpoint compartido de Plaspy y la detección automática de protocolos reduce el trabajo de configuración por dispositivo y permite que las organizaciones se concentren en el despliegue, la supervisión y las políticas operativas.

Para obtener más información sobre Plaspy y cómo facilita la visibilidad de flotas, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y documentación del fabricante, verifique los detalles en el sitio de TK-Star https://www.tk-star.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
