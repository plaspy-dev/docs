---
slug: /sinotrack/gt06n/configuration
id: gt06n-configuration
sidebar_label: Configuration
title: SinoTrack - GT06N Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack GT06N con Plaspy usando ajustes de servidor y comandos SMS
keywords:
  - Configuración SinoTrack GT06N
  - Configuración GT06N Plaspy
  - Configuración servidor GT06N
  - Guía configuración SinoTrack
  - Configuración dispositivo Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador de vehículos
  - Comandos SMS GT06N
  - Configuración rastreador GPRS
  - Rastreo de flota GT06N
---

# SinoTrack - Configuración del GT06N

Esta página detalla el contexto público de configuración para usar el SinoTrack GT06N con la plataforma Plaspy. Consolida los comandos públicos conocidos y los ajustes de servidor empleados para apuntar un rastreador GT06N hacia Plaspy, de modo que el dispositivo reporte ubicación y estado a la plataforma. Utilice esta información junto con el manual del dispositivo y los recursos del proveedor.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos concretos del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Los comandos mostrados aquí son la secuencia comúnmente publicada basada en SMS para configurar dispositivos GT06N y que reporten a Plaspy.

## Resumen de la configuración

El proceso de configuración del GT06N prepara el rastreador para comunicarse de forma fiable con Plaspy y para que aparezca correctamente en la plataforma. La configuración típica establece la zona horaria del dispositivo, el APN, el objetivo del servidor GPRS, los intervalos de reporte y el modo del dispositivo para que los datos se envíen a Plaspy.

- Configurar el dispositivo para usar el APN del operador y disponer de datos GPRS
- Apuntar el rastreador a los ajustes del servidor Plaspy para que los reportes de posición lleguen a la plataforma
- Establecer intervalos de reporte periódicos para controlar la frecuencia de actualización y el consumo de energía
- Cambiar el rastreador al modo de reporte por GPRS para que transmita automáticamente a Plaspy
- Verificar la configuración con el comando de verificación del dispositivo para conocer el ID que usará Plaspy

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los puntos finales públicos de Plaspy usados para recibir datos de los rastreadores compatibles, incluido el GT06N.

## Requisitos típicos antes de la configuración

- Alimentación estable del dispositivo durante la configuración y las pruebas, usando la fuente de energía del vehículo
- Una tarjeta SIM con servicio de datos móviles activo y el APN correcto del operador
- Acceso al método de configuración publicado por el fabricante; en el GT06N esto suele incluir comandos SMS
- Un teléfono o herramienta de gestión capaz de enviar mensajes SMS al número del rastreador
- Registrar el dispositivo en Plaspy usando el ID que el rastreador informe tras la configuración
- Familiaridad básica con los comandos del proveedor y la precaución de que los comandos exactos pueden variar según el firmware

## Cómo se conecta este rastreador a Plaspy

El GT06N se configura para enviar datos de ubicación y eventos por GPRS al punto final y puerto del servidor Plaspy. Una vez que el dispositivo apunta a Plaspy y está en línea, Plaspy reconoce el protocolo del rastreador y procesa los mensajes entrantes automáticamente.

- El rastreador usa el APN configurado para establecer una sesión de datos GPRS
- Los reportes del dispositivo se envían a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede ser TCP o UDP según el dispositivo o la preferencia
- Plaspy detecta el protocolo del rastreador automáticamente, por lo que no se requiere seleccionar el protocolo por dispositivo en el servidor
- Validar el ID del dispositivo con el comando RCONF confirma la identidad que Plaspy utilizará

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el GT06N, normalmente comandos SMS o una herramienta de configuración aprobada
2. Envíe o ingrese la dirección del servidor ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 como servidor GPRS
3. Configure el puerto del servidor a 8888 en la configuración del dispositivo
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte
5. Configure el APN de su operador móvil para que las sesiones GPRS funcionen
6. Aplique o guarde la configuración y cambie el dispositivo al modo GPRS si es necesario
7. Reinicie o corte y restablezca la alimentación del rastreador si las instrucciones del proveedor lo recomiendan
8. Valide que el dispositivo reporte a Plaspy comprobando el ID del rastreador o usando el comando de verificación RCONF

## Ejemplo de comandos de configuración

Los siguientes comandos son los SMS documentados públicamente y comúnmente usados para configurar rastreadores SinoTrack GT06N hacia Plaspy. Envíe estos comandos como mensajes de texto al número del dispositivo en el orden mostrado durante una configuración inicial.

- Restauración de fábrica inicial opcional
```text
RESET
```
Marque este paso RESET como opcional o úselo solo cuando se requiera una restauración completa de fábrica.

- Establecer la zona horaria a UTC 0
```text
8960000E00
```

- Configurar el APN del operador
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explicación de los marcadores:
- {{apn}} es el nombre del APN del operador móvil
- {{apnu}} es el nombre de usuario del APN si el operador lo requiere
- {{apnp}} es la contraseña del APN si el operador la requiere
Si su operador no requiere usuario o contraseña, deje esos campos vacíos o siga la sintaxis SMS del fabricante.

- Configurar el servidor GPRS a Plaspy por IP y puerto
```text
8040000 54.85.159.138 8888
```
Puede usar el dominio d.plaspy.com en lugar de la IP si el dispositivo acepta una cadena de dominio en lugar de una dirección numérica.

- Establecer intervalo de actualización cuando el dispositivo está encendido
```text
8050000 60
```
Este ejemplo configura un intervalo de reporte de 60 segundos en estado encendido. Ajuste el número según sus necesidades y la referencia de comandos del proveedor.

- Establecer intervalo de actualización cuando el dispositivo está apagado
```text
8090000 60
```
Esto fija el intervalo de reporte en 60 segundos para el estado apagado en este ejemplo.

- Cambiar el dispositivo al modo GPRS para que reporte al servidor
```text
7100000
```

- Verificar ajustes y obtener el ID del dispositivo
```text
RCONF
```
Use RCONF para confirmar APN, servidor y el modo, y para leer el ID del dispositivo que Plaspy utilizará para identificación.

## Notas de configuración

- La configuración por SMS es común en dispositivos GT06N; siga la sintaxis SMS exacta que requiera su firmware
- Algunas revisiones de firmware aceptan nombres de dominio en lugar de IP numéricas al especificar el servidor; si está soportado puede usar d.plaspy.com en lugar de la IP
- Elija UDP o TCP según las opciones del dispositivo; Plaspy acepta ambos y detecta el protocolo al recibir los mensajes
- Los intervalos de reporte y otros parámetros mostrados son ejemplos y deben ajustarse a sus necesidades operativas y de uso de datos
- Siempre contraste estos comandos públicos con el manual del fabricante y las notas de firmware de su dispositivo

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un SinoTrack GT06N correctamente configurado ofrece visibilidad centralizada de la ubicación y estado del vehículo. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy simplifica la incorporación de equipos y permite que Plaspy detecte automáticamente el protocolo, de modo que los mensajes entrantes se procesen sin personalizar el servidor por dispositivo.

Para obtener más información sobre Plaspy y cómo gestiona la integración de dispositivos visite https://www.plaspy.com. Verifique los métodos de configuración específicos y los detalles de firmware actuales en el sitio del fabricante https://www.sinotrackgps.com/ ya que las especificaciones del proveedor y la sintaxis de comandos pueden cambiar con el tiempo.
