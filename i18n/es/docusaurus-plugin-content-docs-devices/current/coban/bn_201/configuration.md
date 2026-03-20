---
slug: /coban/bn_201/configuration
id: bn_201-configuration
sidebar_label: Configuration
title: Coban - BN-201 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Coban BN-201 y reportar al servidor Plaspy
keywords:
  - Configuración Coban BN-201
  - Configuración BN-201
  - Coban BN-201 Plaspy
  - Configuración rastreador de mascotas
  - Configuración de rastreador GPS
  - Configuración de servidor para rastreador GPS
  - Comandos SMS de configuración
  - Configuración plataforma BN 201 GPS
  - Ajustes de servidor Coban
  - Integración de dispositivo Plaspy
---

# Coban - BN-201 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Coban BN-201 con Plaspy. Resume los ajustes prácticos del servidor y el flujo de comandos SMS que se emplean comúnmente para preparar dispositivos BN-201 y que envíen datos a Plaspy. Use esta guía para entender los pasos previos a la integración de un BN-201 en Plaspy y como referencia de los comandos SMS públicos incluidos en la documentación del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor; considere los comandos y ejemplos aquí como una guía práctica pública y confirme el comportamiento específico del dispositivo con la documentación oficial de Coban.

## Resumen de la configuración

Este proceso prepara el BN-201 para enviar paquetes de posición y estado a Plaspy para que el dispositivo sea visible en la plataforma. El BN-201 permite configuración por SMS y reporte IP sobre canales TCP o UDP estándar; los comandos siguientes muestran cómo apuntar el dispositivo a Plaspy y cómo verificar la conectividad.

- Configure el BN-201 para reportar al servidor Plaspy y que la ubicación y los eventos aparezcan en la plataforma.
- Establezca APN y parámetros GPRS para que el dispositivo use conectividad 2G o NB-IoT para el reporte IP.
- Use SMS o herramientas del fabricante para aplicar los ajustes cuando no haya una app compañera o herramienta USB disponible.
- Verifique el reporte y utilice el comando check del BN-201 para confirmar los ajustes y la conectividad del dispositivo.
- Active ajustes opcionales de protocolo o sensores si su firmware y despliegue los soportan.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan

## Requisitos típicos antes de comenzar

- Un BN-201 con batería cargada y SIM instalada si va a usar reporte IP por celular
- Una SIM activa con acceso a datos y capacidad de SMS si la configuración por SMS es necesaria
- Acceso a un teléfono o pasarela SMS capaz de enviar mensajes de configuración al dispositivo
- La guía oficial de usuario o referencia de configuración del BN-201 para confirmar comandos según su firmware
- Una cuenta Plaspy o flujo de aprovisionamiento para agregar y monitorear el dispositivo cuando empiece a reportar

## Cómo se conecta este rastreador a Plaspy

El BN-201 envía mensajes periódicos o basados en eventos sobre TCP o UDP al endpoint compartido de Plaspy, o puede configurarse por SMS para gestión remota. Cuando se dirige al servidor Plaspy y al puerto correcto, Plaspy ingiere y decodifica coordenadas GNSS y el estado del dispositivo para que usted pueda ver ubicación en tiempo real, historial y alertas.

- El rastreador se configura para reportar al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 y puerto 8888
- Los datos pueden transmitirse por UDP o TCP según la red y la selección del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto Plaspy funciona para todos los dispositivos soportados
- Reportes de eventos como salida de geocerca, movimiento o SOS se reenvían a Plaspy para notificaciones y registro histórico
- SMS puede usarse para configuración, reporte alternativo o cuando la conectividad IP no está disponible

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Coban para el BN-201, como comandos SMS o una herramienta del proveedor, y confirme la contraseña del dispositivo (por defecto se muestra más abajo).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto en 8888 para el reporte a Plaspy.
4. Elija UDP o TCP para el transporte si el dispositivo requiere selección explícita.
5. Aplique o guarde la configuración y, si es necesario, reinicie o corte la energía del dispositivo.
6. Valide que el dispositivo reporte a Plaspy usando el comando check del BN-201 y confirme que el dispositivo aparece en su cuenta Plaspy.
7. Si es necesario, ajuste el APN, los intervalos de actualización o la configuración del protocolo y vuelva a validar el reporte.

## Ejemplos de comandos de configuración

El BN-201 puede configurarse enviando comandos SMS al dispositivo. La contraseña por defecto usada en estos ejemplos es 123456. Mantenga los marcadores de posición cuando reemplace credenciales del operador de red.

1. Reinicio opcional de fábrica (configuración inicial o cuando sea necesario)
```
begin123456
```

2. Establecer la zona horaria a UTC 0
```
time zone123456 0
```

3. Establecer el APN del operador (reemplazar [apn] con el APN de su operador)
```
apn123456 [apn]
```
- El marcador [apn] representa la cadena APN suministrada por su operador celular.

4. Establecer nombre de usuario y contraseña del APN si el operador lo requiere
```
up123456 [apnu] [apnp]
```
- [apnu] es el marcador para el nombre de usuario del APN
- [apnp] es el marcador para la contraseña del APN

5. Configurar el servidor GPRS hacia Plaspy usando la IP pública y puerto de Plaspy
```
adminip123456 54.85.159.138 8888
```
- Esto apunta el dispositivo al servidor Plaspy. Alternativamente puede usar d.plaspy.com donde DNS esté soportado.

6. Establecer un ejemplo de intervalo de actualización de ubicación
```
fix060s060s***n123456
```
- Esta forma de comando es un ejemplo de formato de intervalo provisto por la guía del dispositivo. Confirme los códigos exactos de intervalo con el manual del fabricante.

7. Cambiar a modo GPRS y seleccionar transporte para el reporte
```
gprs123456,1,1
```
- El ejemplo selecciona GPRS y modo de transporte. Algunos firmwares aceptan un comando más simple:
```
gprs123456
```

8. Verificar la configuración actual en el dispositivo
```
check123456
```

9. Activar protocolo extendido o reporte de sensores para combustible o sensores digitales
```
protocol123456 18
```
- Use este comando para habilitar un modo de reporte adicional cuando aplique.

Nota sobre marcadores de posición y contraseñas
- Mantenga la contraseña por defecto 123456 en los ejemplos anteriores a menos que la contraseña del dispositivo haya sido cambiada. Si su dispositivo usa una contraseña distinta, reemplace 123456 por la contraseña activa en cada comando.
- Reemplace [apn], [apnu] y [apnp] con el APN del operador, el nombre de usuario del APN y la contraseña del APN respectivamente.

## Notas de configuración

- La configuración por SMS es soportada y se usa comúnmente para la configuración inicial cuando no hay app compañera o herramienta USB disponible.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis exacta de los comandos o las opciones disponibles; siempre verifique el manual del Coban BN-201 correspondiente a su revisión de firmware.
- Al elegir entre TCP y UDP, considere la confiabilidad de la red y el comportamiento de confirmación de paquetes; Plaspy acepta ambos y detecta automáticamente el protocolo del rastreador.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará el protocolo automáticamente cuando el dispositivo reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Si una configuración no se aplica, reiniciar o hacer un ciclo de energía del BN-201 puede ayudar a que los nuevos ajustes se apliquen.

## Por qué usar Plaspy con esta configuración

Usar el Coban BN-201 con Plaspy ofrece a propietarios de mascotas y operadores una vía directa para ubicación en tiempo real, reproducción de historial y alertas configurables. El soporte del BN-201 para TCP, UDP y reporte por SMS se alinea con las capacidades de ingestión de Plaspy, lo que facilita desplegar el rastreador para alertas de geocerca, monitoreo en vivo y enlaces de baja potencia NB-IoT cuando estén disponibles.

Learn more about Plaspy and how it supports device integrations on https://www.plaspy.com. For the most current device specific configuration commands firmware notes and installation instructions verify details on the manufacturer site at https://www.coban.net/ as manufacturer specifications and setup methods can change over time.
