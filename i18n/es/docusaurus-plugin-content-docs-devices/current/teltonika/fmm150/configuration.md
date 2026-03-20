---
slug: /teltonika/fmm150/configuration
id: fmm150-configuration
sidebar_label: Configuration
title: Teltonika - FMM150 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Teltonika FMM150 para reportar a Plaspy con ejemplos de servidor y comando setparam
keywords:
  - Configuración Teltonika FMM150
  - Configuración FMM150 para Plaspy
  - Configuración de servidor FMM150
  - Configuración plataforma GPS FMM150
  - Configuración rastreador FMM150
  - Configuración rastreador Plaspy
  - Telemetría vehicular FMM150
  - Telemetría CAN FMM150
  - Gestión de flotas FMM150
  - Configuración rastreador Teltonika
---

# Teltonika - Configuración FMM150

Esta página describe el contexto público de configuración para usar el Teltonika FMM150 con Plaspy. Se enfoca en los ajustes prácticos del servidor, el flujo de trabajo básico de instalación y el comando de ejemplo setparam que aparece en la documentación pública de Teltonika, de modo que usted pueda preparar el equipo para comunicarse con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para configurar el FMM150 pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas Teltonika que utilice. Use esta guía para aplicar los ajustes del servidor de Plaspy y consulte la documentación de Teltonika para detalles específicos del dispositivo.

## Resumen de la configuración

Configurar el FMM150 para Plaspy asegura que el rastreador envíe ubicación y telemetría CAN a la plataforma, de modo que los equipos aparezcan y reporten de forma confiable dentro de Plaspy. El objetivo es establecer los parámetros de red del dispositivo, apuntarlo al endpoint de Plaspy, verificar la selección del transporte y confirmar que los reportes lleguen a la plataforma.

- Apunte el rastreador al dominio o IP del servidor Plaspy y al puerto compartido de Plaspy para que el equipo pueda entregar datos a la plataforma.
- Proporcione los detalles de la conectividad celular, como el APN y las credenciales APN opcionales, para que el equipo pueda conectarse a la red móvil.
- Seleccione el transporte y guarde la configuración para que el rastreador use UDP o TCP hacia Plaspy según sea necesario.
- Valide la conectividad confirmando que el dispositivo sea visible en Plaspy y que envíe la telemetría esperada.
- Mantenga actualizados el firmware y las herramientas de configuración y consulte las utilidades Teltonika para cualquier nombre o numeración de parámetro específica del dispositivo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

Estos valores son los ajustes públicos del endpoint de Plaspy que debe aplicar al configurar el FMM150 para que pueda reportar a Plaspy.

## Requisitos típicos antes de la configuración

- Un FMM150 encendido y conectado en vehículo o a una fuente de alimentación de banco listo para configuración
- Una SIM móvil activa con servicio de datos y los ajustes APN correctos para la red celular
- Acceso a métodos de configuración Teltonika como Teltonika Configurator, FOTA WEB o comandos por SMS para parámetros
- Conocimiento del nivel de firmware del equipo y de la numeración o nombres de parámetros que correspondan a ese firmware
- Credenciales o acceso a las herramientas de instalador necesarias para escribir y guardar parámetros del dispositivo
- Visibilidad básica de red para validar conexiones salientes desde el rastreador hacia el endpoint de Plaspy

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el FMM150 envía ubicación GNSS y telemetría CAN a bordo al endpoint compartido de Plaspy para que el equipo sea visible y utilizable dentro de la plataforma. La configuración apunta el rastreador al dominio o IP del servidor Plaspy y al puerto estándar de Plaspy para que los reportes lleguen a la plataforma para su procesamiento y visualización.

- El dispositivo se configura para enviar reportes a d.plaspy.com o directamente a 54.85.159.138
- Los reportes se envían al puerto 8888, que Plaspy utiliza para todos los dispositivos soportados
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo entrante y analiza el protocolo del rastreador
- Una vez en reporte, la ubicación y la telemetría derivada del CAN quedan disponibles en los paneles y herramientas de informes de Plaspy

## Flujo de trabajo común para la configuración

1. Acceda al método oficial de configuración Teltonika o al software para su equipo, como Teltonika Configurator, FOTA WEB o parámetros por SMS.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP si el FMM150 le solicita seleccionar un protocolo de transporte.
5. Proporcione el APN celular y cualquier usuario o contraseña APN requerida para que el FMM150 pueda establecer la conexión de datos.
6. Aplique o guarde la configuración y reinicie el equipo si la herramienta o el firmware requieren un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy verificando el estado del equipo y los mensajes entrantes en la plataforma.

## Comandos de configuración de ejemplo

El ejemplo público de Teltonika para establecer parámetros básicos de red y servidor puede aplicarse con el método de configuración que usted utilice. El ejemplo a continuación corresponde al formato público mostrado en la guía de Teltonika. Reemplace los marcadores de APN por los valores de su operador móvil.

- Comando setparam de ejemplo tal como aparece en la guía pública de Teltonika:

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de los marcadores y elementos del comando
  - {{apn}} es el nombre del punto de acceso de datos de su operador celular
  - {{apnu}} es el usuario APN si su operador lo requiere
  - {{apnp}} es la contraseña APN si su operador la requiere
  - 2004 se establece en d.plaspy.com para apuntar el equipo a Plaspy
  - 2005 se establece en 8888 que es el puerto compartido de Plaspy
  - 2006 se incluye en el ejemplo tal como se proporciona; consulte la documentación de Teltonika para conocer el significado exacto del parámetro según su firmware

Este comando puede enviarse mediante la herramienta de configuración Teltonika, FOTA WEB o por SMS si su equipo y método de instalación soportan actualizaciones de parámetros vía SMS. Verifique siempre los números y formatos de parámetros según la documentación del firmware de su dispositivo.

## Notas de configuración

- La numeración de parámetros y los comandos disponibles pueden variar según la versión de firmware y la revisión del equipo Teltonika; confirme los IDs de parámetro correctos para su unidad.
- Puede apuntar el equipo a d.plaspy.com o usar la IP del servidor 54.85.159.138; ambos dirigen al mismo endpoint de Plaspy en el puerto 8888.
- Elija UDP o TCP en función de la preferencia del instalador y del comportamiento de la red; Plaspy detectará y gestionará el protocolo automáticamente.
- Los comandos por SMS se usan con frecuencia para instalaciones remotas, pero confirme el soporte SMS y la sintaxis para su firmware antes de depender de este método.
- Mantenga Teltonika Configurator o FOTA WEB actualizados para asegurar compatibilidad con el firmware más reciente y los esquemas de parámetros.

## Por qué usar Plaspy con esta configuración

Configurar el FMM150 para que reporte a Plaspy ofrece a los operadores de flotas una vía práctica para combinar un rastreo GNSS de alta calidad con telemetría detallada del bus CAN. Apuntar el equipo al endpoint de Plaspy y confirmar la conectividad permite a los despachadores y equipos de mantenimiento usar Plaspy para visibilidad de ubicación, monitoreo de eventos e informes operativos.

Para conocer más sobre Plaspy visite https://www.plaspy.com. Para las definiciones más actuales de parámetros específicos del dispositivo, comportamiento del firmware y métodos de configuración, consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ que puede actualizar nombres de parámetros y flujos de configuración con el tiempo.
