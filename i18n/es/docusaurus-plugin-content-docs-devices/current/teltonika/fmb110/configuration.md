---
slug: /teltonika/fmb110/configuration
id: fmb110-configuration
sidebar_label: Configuration
title: Teltonika - FMB110 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Teltonika FMB110 para Plaspy con comandos de ejemplo y ajustes de servidor
keywords:
  - configuración Teltonika FMB110
  - instalación Teltonika FMB110
  - configuración FMB110 Plaspy
  - configuración rastreador GPS Plaspy
  - configuración servidor tracker Teltonika
  - configuración plataforma GPS FMB110
  - configuración seguimiento vehicular
  - configuración telemetría FMB110
  - configuración dispositivo Teltonika
  - rastreador compatible con Plaspy
---

# Teltonika - Configuración del FMB110

Esta página describe el contexto público de configuración para usar el Teltonika FMB110 con la plataforma Plaspy. Resume los ajustes prácticos y el flujo de trabajo necesarios para preparar un FMB110 y que reporte ubicación y telemetría a Plaspy usando los parámetros de servidor compartidos que exige la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del equipo. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como Teltonika Configurator o comandos SMS. Use esta página como referencia práctica y consulte la documentación oficial del fabricante para detalles específicos del dispositivo.

## Resumen de la configuración

El objetivo de esta configuración es apuntar el FMB110 al endpoint de recepción de Plaspy, proporcionar las credenciales APN si son necesarias, elegir el transporte y verificar que el dispositivo aparezca en Plaspy. El ejemplo público de comandos que se muestra a continuación ilustra cómo suelen aplicarse parámetros básicos de forma masiva.

- Configure el APN y credenciales para que el dispositivo use datos celulares para telemetría
- Establezca el endpoint y puerto del servidor para dirigir el tracker a Plaspy
- Seleccione el modo de transporte si el dispositivo requiere elegir entre UDP o TCP
- Guarde y aplique la configuración y reinicie el dispositivo cuando sea necesario
- Valide la conectividad para que el dispositivo aparezca en los paneles y reportes de Plaspy

## Ajustes de servidor de Plaspy

Utilice los siguientes ajustes públicos de servidor Plaspy al configurar el FMB110:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- El transporte puede configurarse como UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos usan el mismo puerto

## Requisitos habituales antes de la configuración

- Alimentar el dispositivo con una conexión de energía adecuada del vehículo o una fuente de instalación correcta
- Una SIM celular activa con datos habilitados y la información APN correcta para el operador
- Acceso al método de configuración de Teltonika que vaya a utilizar, como Teltonika Configurator, comandos SMS o FOTA Web
- Conocimiento del APN, nombre de usuario APN y contraseña APN para la SIM instalada
- Acceso a la cuenta Plaspy o a las instrucciones de provisión de dispositivos para confirmar la presencia del equipo en la plataforma
- Verificar que el firmware del dispositivo esté actualizado y revisar las notas de la versión de Teltonika por cambios relevantes

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el FMB110 envía datos GNSS y telemetría del dispositivo a través de la red celular al endpoint compartido de Plaspy. Plaspy ingiere el protocolo entrante y muestra la ubicación y los eventos en mapas, alertas y reportes.

- El tracker se configura para reportar al endpoint y puerto compartido de Plaspy
- Las telemetrías y las actualizaciones de posición se entregan a Plaspy y se visualizan en tiempo real
- Los eventos y estados (encendido, entradas, lecturas de sensores) se reenvían a la plataforma Plaspy
- Plaspy detecta automáticamente el protocolo entrante y procesa los datos del tracker sin cambiar puertos por dispositivo
- La visibilidad en la plataforma permite monitoreo, alertas y acciones remotas básicas que ofrece Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Teltonika que prefiera, como Teltonika Configurator, comandos SMS o FOTA Web
2. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 donde sea permitido
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados)
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte
5. Proporcione los valores de APN, usuario APN y contraseña APN adecuados para la SIM
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo requieren
7. Valide que el dispositivo reporte a Plaspy y que aparezca en los paneles y reportes de la plataforma

## Comandos de configuración de ejemplo

Para configurar parámetros básicos en un FMB110, los dispositivos Teltonika suelen aceptar un comando por lotes de parámetros. El ejemplo público siguiente establece valores de APN, el dominio de Plaspy, el puerto y un parámetro de transporte. Conserve los marcadores de posición al adaptarlos a su red.

- Comando de ejemplo por lotes de parámetros (conservar marcadores de posición):

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Qué significan los marcadores de posición
  - [apn] : nombre del APN del proveedor de la tarjeta SIM
  - [apnu] : nombre de usuario del APN si el operador lo exige
  - [apnp] : contraseña del APN si el operador lo exige

Nota: Este ejemplo usa d.plaspy.com y el puerto 8888 tal como lo requiere Plaspy. El último parámetro en el lote suele seleccionar el modo de transporte u otro comportamiento del dispositivo. Consulte la documentación de Teltonika o el Configurator para conocer el significado exacto de los parámetros numerados y los valores admitidos según su versión de firmware.

## Notas de configuración

- Las revisiones de firmware de Teltonika pueden cambiar la numeración de parámetros o los valores aceptables; verifique el mapeo exacto de parámetros para su firmware antes de aplicar comandos masivos
- Puede utilizar el dominio d.plaspy.com o la IP del servidor 54.85.159.138 para apuntar el dispositivo a Plaspy; ambos resuelven al mismo endpoint y puerto 8888
- Cuando la herramienta del dispositivo requiera selección explícita de transporte, elija UDP o TCP según la preferencia del instalador; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo
- El comando por lotes proporcionado es un ejemplo público y suele aplicarse vía SMS o herramientas de configuración según la práctica del instalador
- Siempre pruebe con un solo equipo antes de desplegar cambios de configuración masivos en una flota

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB110 con Plaspy ofrece a las organizaciones un endpoint de telemetría compacto y rentable que se integra en una arquitectura de servidor compartido de Plaspy. Con los ajustes de servidor centralizados en d.plaspy.com y el puerto 8888, los instaladores pueden aplicar una configuración coherente en muchos dispositivos y confiar en que Plaspy detectará automáticamente los protocolos entrantes y mostrará los datos en mapas, alertas y reportes.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For device specific configuration steps, firmware behavior, and the latest parameter references verify details with Teltonika on their official site https://www.teltonika-gps.com/
