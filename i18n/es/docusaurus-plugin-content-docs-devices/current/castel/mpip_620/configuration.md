---
slug: /castel/mpip_620/configuration
id: mpip_620-configuration
sidebar_label: Configuration
title: Castel - MPIP-620 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Castel MPIP-620 a la plataforma Plaspy
keywords:
  - configuración Castel MPIP 620
  - configuración MPIP 620 Plaspy
  - configuración rastreador GPS Castel
  - configuración servidor MPIP 620
  - configuración dispositivo Plaspy
  - configuración rastreador motocicleta
  - configuración GPRS rastreador
  - comandos SMS de configuración
  - configuración plataforma de seguimiento vehicular
  - detección de protocolo rastreador GPS
---

# Castel - Configuración del MPIP-620

Esta página documenta el contexto público de configuración para utilizar el rastreador GPS para motocicleta Castel MPIP-620 con Plaspy. Incluye los ajustes compartidos del servidor Plaspy que debe aplicar y los pasos prácticos para preparar el dispositivo para que reporte a Plaspy, basados en comandos SMS típicos del fabricante y el flujo de configuración GPRS y SMS del MPIP-620.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la guía a continuación junto con la documentación de su dispositivo y los recursos oficiales de Castel para confirmar instrucciones específicas del equipo.

## Resumen de la configuración

El objetivo al configurar un Castel MPIP-620 para Plaspy es apuntar el rastreador a los servidores de Plaspy, asegurar la conectividad GPRS y verificar que los reportes periódicos o por evento lleguen a la plataforma. El proceso está pensado para ser simple para instaladores que utilicen SMS o una herramienta del fabricante para programar los ajustes de red y el endpoint de reporte.

- Configure el APN y los parámetros GPRS para que el rastreador acceda a la red móvil
- Configure el rastreador para que reporte al endpoint y puerto del servidor Plaspy
- Seleccione el transporte UDP o TCP en el puerto 8888 según lo requiera el dispositivo
- Verifique los ajustes usando el comando de verificación del rastreador o la respuesta de estado
- Confirme que el dispositivo aparece y reporta en la plataforma Plaspy para visibilidad y alertas

## Ajustes del servidor Plaspy

- Use el dominio d.plaspy.com cuando el dispositivo soporte nombres de dominio
- Use la IP 54.85.159.138 cuando se requiera una dirección IP
- El puerto 8888 es el puerto de recepción de Plaspy usado por todos los dispositivos soportados
- El transporte puede ser UDP o TCP; configure el que el dispositivo requiera
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que reporten al endpoint serán interpretados correctamente

## Requisitos típicos antes de la configuración

- Una SIM funcional con datos habilitados y el APN correcto del operador móvil
- Acceso al dispositivo o un método de instalador para enviar comandos SMS de configuración
- Conocimiento de la clave secreta SMS o contraseña del dispositivo usada para la configuración remota
- Alimentación aplicada al rastreador y el dispositivo en un estado que acepte comandos SMS
- Acceso a la guía del usuario del Castel MPIP-620 para cualquier paso específico del dispositivo o notas de firmware

## Cómo se conecta este rastreador a Plaspy

El MPIP-620 utiliza GPRS para el envío de datos y SMS para la configuración, y se programa para enviar su ubicación y alertas al endpoint y puerto del servidor Plaspy. Una vez configurado con los ajustes del servidor, el dispositivo transmite actualizaciones periódicas de ubicación y notificaciones de eventos a Plaspy, donde se analizan y muestran.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en 54.85.159.138 por el puerto 8888
- El transporte puede configurarse como UDP o TCP según el firmware del dispositivo y la preferencia del instalador
- Plaspy recibe los datos y detecta automáticamente el protocolo del dispositivo para su correcto parseo
- Los reportes incluyen actualizaciones de ubicación y alertas de eventos configurados en el dispositivo, como movimiento o alarmas
- Una conexión exitosa permite visibilidad, historial y alertas a través de la plataforma Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Castel, como comandos SMS o software del fabricante, según se describe en la documentación del MPIP-620.
2. Ingrese el servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo que acepte el dispositivo.
3. Configure el puerto de reporte en 8888 en los ajustes del rastreador.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir un modo de transporte.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante o enviando el comando SMS.
6. Reinicie el dispositivo si el rastreador exige un reinicio para aplicar cambios de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de datos en la plataforma y mediante cualquier comando de verificación que soporte el rastreador.

## Ejemplos de comandos de configuración

El MPIP-620 soporta configuración vía SMS. Los siguientes ejemplos provienen del flujo público de configuración del dispositivo. Mantenga los marcadores de posición al personalizar los comandos.

Notas:
- [SecretKey] es la contraseña SMS del dispositivo. La clave secreta por defecto es los últimos 6 caracteres ASCII del ID del dispositivo a menos que el instalador la haya cambiado.
- [apn], [apnu] y [apnp] son marcadores para el APN del operador, el usuario del APN y la contraseña del APN respectivamente.

Setear APN y servidor (GPRS) usando SMS
```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

Verificar ajustes GPRS usando SMS
```
*[SecretKey]#get gprs#*
```

Si su instalación requiere que el dispositivo acepte un dominio en lugar de una IP y el dispositivo soporta nombres de dominio en el formato de comando GPRS, puede sustituir d.plaspy.com por la dirección IP anterior. Confirme la sintaxis exacta en la guía del usuario del Castel MPIP-620.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los SMS o los campos disponibles; confirme siempre con el manual del MPIP-620 para su versión de firmware.
- El rastreador soporta programación vía SMS como se muestra arriba, lo cual es útil para instalaciones en campo sin herramienta de PC.
- Elija TCP o UDP según la preferencia del instalador y la capacidad del dispositivo; ambos transportes son compatibles en el puerto 8888 en Plaspy.
- El comportamiento por defecto de la clave secreta SMS depende del dispositivo. La clave por defecto del MPIP-620 son los últimos 6 caracteres ASCII del ID del dispositivo, salvo que se haya reprogramado.
- Confirme los valores de APN con el operador móvil y mantenga los marcadores [apn], [apnu] y [apnp] correctos al enviar comandos.

## Por qué usar Plaspy con esta configuración

Usar el Castel MPIP-620 con Plaspy ofrece un camino sencillo para incorporar seguimiento de motocicletas, alertas por movimiento y historial de rutas en una única plataforma de monitoreo de flotas o activos. El reporte GPRS del MPIP-620 combinado con la detección automática de protocolos de Plaspy acelera la incorporación y reduce la necesidad de ajustes de servidor específicos por dispositivo.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current manufacturer specific configuration details, firmware notes, and device documentation please verify information on the Castel website http://www.castelecom.com/ as device features and setup methods can change over time.
