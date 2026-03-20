---
slug: /haicom/hi_603x/configuration
id: hi_603x-configuration
sidebar_label: Configuration
title: Haicom - HI-603X Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Haicom HI-603X y conectarlo a Plaspy mediante ajustes de servidor compartido y comandos SMS o GPRS
keywords:
  - Configuración Haicom HI-603X
  - Configurar Haicom HI-603X
  - Haicom HI-603X en Plaspy
  - Configuración servidor HI-603X
  - Configurar rastreador GPS HI-603X
  - Configuración rastreador Haicom
  - Configuración dispositivo Plaspy
  - Rastreo de vehículos HI-603X
  - Configuración tracker GPRS
  - Configurar plataforma GPS
---

# Haicom - Configuración del HI-603X

Esta página documenta el contexto público de configuración para usar el rastreador GPS Haicom HI-603X con la plataforma Plaspy. Aquí se describen los ajustes públicos del servidor de Plaspy y se muestran comandos SMS publicados por el fabricante que se usan comúnmente para apuntar el dispositivo a Plaspy y permitir el registro y reporte en tiempo real.

Plaspy utiliza un único punto final y puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguir las instrucciones del proveedor del equipo cuando estén disponibles y usar los comandos mostrados aquí como ejemplos públicos.

## Resumen de la configuración

El objetivo al configurar el HI-603X para Plaspy es preparar el rastreador para que envíe de forma fiable datos de ubicación y eventos por GPRS al servidor de Plaspy, de modo que el dispositivo aparezca en su cuenta Plaspy y reporte según el intervalo deseado.

- Apunte el punto final GPRS del rastreador al dominio o IP del servidor Plaspy para que los datos lleguen a Plaspy
- Configure el APN del equipo para permitir datos GPRS en la tarjeta SIM
- Seleccione el protocolo de transporte si el firmware del dispositivo lo requiere (UDP o TCP)
- Establezca intervalos de actualización para que los reportes de posición coincidan con sus necesidades operativas
- Verifique la conectividad del dispositivo y confirme que el rastreador sea visible en Plaspy

## Ajustes del servidor Plaspy

Configure el HI-603X con los siguientes ajustes públicos del servidor Plaspy al definir el servidor GPRS o el destino de red:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes

Plaspy usa el mismo puerto para todos los dispositivos e identificará el protocolo automáticamente una vez que el rastreador abra una sesión con el punto final.

## Requisitos típicos antes de la configuración

- Alimentar el HI-603X con una fuente estable del vehículo o una fuente de banco para garantizar que los mensajes de configuración sean aceptados
- Una tarjeta SIM operativa con datos activos y el APN correcto del operador móvil
- Acceso al método de configuración que admita su unidad, como comandos SMS o el software del proveedor
- La contraseña por defecto del dispositivo si se requiere para la configuración por SMS; en ejemplos públicos a menudo se usa 0000
- Información básica de cuenta y registro de dispositivos en Plaspy si desea ver el rastreador después de la configuración
- Un método para recibir o monitorear SMS si utiliza configuración y verificación por SMS

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el HI-603X establecerá una sesión GPRS y enviará reportes al punto final y puerto del servidor Plaspy. Plaspy recibe la conexión del rastreador, detecta el protocolo y comienza a procesar los mensajes de ubicación y eventos para su visualización en la plataforma.

- El dispositivo envía paquetes GPRS a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El rastreador utiliza transporte UDP o TCP según lo configurado en el equipo
- Plaspy detecta automáticamente el protocolo y analiza los mensajes entrantes
- Las actualizaciones de posición y los eventos aparecen en Plaspy una vez que el dispositivo se conecta con éxito
- El reporte periódico y el reporte por eventos permiten el monitoreo operativo y la generación de alertas

## Flujo típico de configuración

1. Acceda al método oficial de configuración Haicom para su HI-603X, por ejemplo comandos SMS o el software de Haicom
2. Ingrese el servidor Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor o servidor GPRS
3. Establezca el puerto del servidor en 8888
4. Seleccione UDP o TCP si el firmware del dispositivo requiere elegir un protocolo de transporte
5. Configure el APN para la SIM usando los datos del operador si es necesario
6. Aplique o guarde la configuración en el equipo y reinicie el rastreador si el firmware requiere reinicio
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo en su cuenta Plaspy y confirmando la recepción de mensajes

Si utiliza comandos SMS para la configuración, envíelos en el orden requerido por el proveedor y confirme cada paso antes de continuar.

## Comandos de configuración de ejemplo

El HI-603X admite configuración por SMS. Los siguientes comandos son ejemplos públicos tomados de la secuencia publicada por el fabricante. La contraseña por defecto en estos ejemplos es 0000.

1. Configure el APN del operador
   - Reemplace [apn], [apnu] y [apnp] con el nombre del APN del operador, el usuario APN y la contraseña APN según corresponda. Si no se requiere usuario o contraseña, deje los marcadores en blanco o siga la guía del operador.

```
#0000,200,[apn],[apnu],[apnp]
```

2. Establezca el servidor GPRS a Plaspy
   - Este comando configura la IP y el puerto del servidor GPRS. Usa la IP pública y el puerto de Plaspy indicados en esta guía.

```
#0000,210,54.85.159.138,8888,8888,8888,0
```

3. Ajuste el intervalo de actualización a 60 segundos
   - Este ejemplo establece reportes periódicos cada 60 segundos. Ajuste el valor de intervalo según sus necesidades operativas y para cumplir con las limitaciones de datos del operador.

```
#0000,250,0,60,0,0,0,0,0,0
```

Notas sobre los marcadores y el uso de SMS:
- [apn] es el nombre del APN del operador móvil requerido para datos GPRS
- [apnu] y [apnp] son campos opcionales de usuario y contraseña APN que usan algunos operadores
- La contraseña 0000 en los ejemplos es la que publica el fabricante; si su unidad tiene otra contraseña, utilice ese valor en los comandos
- Envíe cada comando SMS desde un número autorizado según el manual del dispositivo y espere las respuestas SMS de confirmación cuando estén disponibles

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; confirme siempre los comandos con el manual del equipo correspondiente a su número de serie y firmware
- El HI-603X admite programación por SMS y configuración GPRS; según el firmware también puede usar software PC del proveedor o actualizaciones OTA
- Elija UDP o TCP en función de sus necesidades de instalación y de las recomendaciones de Plaspy o del manual del dispositivo; Plaspy detectará el protocolo de forma automática
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos, asegúrese de introducir el puerto 8888 exactamente como se indica en la configuración del equipo
- Pruebe la conectividad tras la configuración y compruebe en Plaspy que el dispositivo esté reportando y que los mensajes se estén analizando correctamente

## Por qué usar Plaspy con esta configuración

Configurar el HI-603X para que reporte a Plaspy brinda a las organizaciones visibilidad en tiempo real de la ubicación y el estado de los vehículos usando un único punto final compartido. Con el rastreador enviando reportes GPRS a Plaspy, los gestores de flota pueden monitorear movimientos, recibir alertas y revisar datos históricos de posición para la toma de decisiones operativas.

Learn more about Plaspy and how it can receive and process HI-603X reports at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify details with Haicom at http://www.haicom.com.tw/ as manufacturer specifications and setup methods can change over time.
