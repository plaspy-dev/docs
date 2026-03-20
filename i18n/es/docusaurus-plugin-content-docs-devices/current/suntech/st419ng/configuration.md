---
slug: /suntech/st419ng/configuration
id: st419ng-configuration
sidebar_label: Configuration
title: Suntech - ST419NG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Suntech ST419NG y su compatibilidad con Plaspy mediante comandos SMS y ajustes de servidor
keywords:
  - Configuración Suntech ST419NG
  - Configuración ST419NG
  - Suntech ST419NG Plaspy
  - Guía de configuración ST419NG
  - Configuración ST419NG para Plaspy
  - Configuración rastreador GPS Suntech
  - Configuración servidor ST419NG
  - Rastreo vehicular ST419NG
  - Configuración rastreador Suntech para Plaspy
  - Configuración plataforma GPS ST419NG
---

# Suntech - Configuración ST419NG

Esta página documenta el contexto de configuración pública para usar el rastreador Suntech ST419NG Series con Plaspy. Explica los ajustes de servidor compartidos que debe aplicar al equipo y muestra los comandos públicos SMS usados comúnmente para configurar el APN, el servidor GPRS y los intervalos de reporte.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante y las herramientas pueden variar según la versión de firmware, la revisión de hardware, el flujo de trabajo del instalador y las utilidades del proveedor. El ST419NG admite configuración vía SMS en su conjunto de comandos públicos; use esta página junto con el manual del dispositivo de la variante que tenga.

## Resumen de la configuración

Configurar un ST419NG para Plaspy prepara el equipo para enviar ubicación y telemetría a la plataforma Plaspy usando el endpoint y puerto compartidos. El flujo de configuración público suele usar comandos SMS para establecer parámetros de red (APN), el servidor GPRS y la cadencia de reporte, de modo que el dispositivo quede visible y reporte en Plaspy.

- Configure el APN del operador y, opcionalmente, las credenciales de APN para que se establezca la conexión GPRS.
- Apunte el rastreador al endpoint del servidor de Plaspy y al puerto de la plataforma para que los reportes lleguen correctamente.
- Configure los intervalos de reporte para controlar la frecuencia de los envíos de posición.
- Verifique la configuración y la identidad del dispositivo usando el comando de verificación por SMS documentado.
- Valide la visibilidad del dispositivo en Plaspy después de aplicar los ajustes para confirmar que la telemetría y la ubicación aparecen en la plataforma.

## Configuración del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept reports from compatible devices without per device protocol selection

Nota: Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados. Asegúrese de apuntar el rastreador a d.plaspy.com o a la IP 54.85.159.138 y de configurarlo con el puerto 8888.

## Requisitos típicos antes de la configuración

- Un rastreador ST419NG alimentado con el IMEI conocido para poder derivar el ID de dispositivo usado en los comandos SMS.
- Una SIM activa con plan de datos y los ajustes APN correctos para el operador.
- Capacidad para enviar SMS al equipo para la configuración por SMS o acceso a la herramienta de configuración del fabricante cuando esté disponible.
- Acceso al manual de usuario del dispositivo y a la documentación de la variante para confirmar la sintaxis exacta de los comandos y las diferencias de firmware.
- Conocimientos básicos del IMEI del dispositivo y de cómo extraer el ID de dispositivo que el equipo utiliza para la autorización de comandos.
- Una cuenta en Plaspy y la expectativa de que el dispositivo reporte a d.plaspy.com en el puerto 8888.

## Cómo se conecta este rastreador a Plaspy

El ST419NG envía datos de ubicación y eventos al servidor de Plaspy utilizando la ruta GPRS configurada u otros canales soportados, apuntando los reportes al endpoint y puerto compartidos de Plaspy. La plataforma acepta conexiones entrantes en el puerto compartido y utiliza detección automática de protocolo para interpretar el protocolo del rastreador.

- El rastreador se configura para enviar telemetría a d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.
- Los reportes pueden enviarse por UDP o TCP según la elección de configuración y el soporte del firmware.
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar correctamente los datos entrantes.
- Tras la configuración, el dispositivo aparecerá en Plaspy una vez que se registre y envíe su primer reporte.
- Los latidos regulares y las actualizaciones de posición permiten monitorización operativa y reporte de eventos en la plataforma Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Suntech para su unidad. En muchas instalaciones el ST419NG acepta configuración vía SMS desde un número autorizado; consulte el manual de Suntech para herramientas alternativas.
2. Derive el ID de dispositivo a partir del IMEI según lo requieran los comandos públicos del ST419NG. El conjunto público utiliza un ID de seis dígitos derivado del IMEI (los últimos seis dígitos excluyendo el último dígito del IMEI según lo descrito por Suntech).
3. Configure los parámetros de red y el servidor de Plaspy ingresando d.plaspy.com o la IP 54.85.159.138 como servidor GPRS y estableciendo el puerto 8888.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte e incluya esa opción en la configuración.
5. Aplique o envíe la configuración al equipo usando el método soportado por el dispositivo, como comandos SMS o la herramienta del fabricante.
6. Reinicie o corte y vuelva a aplicar alimentación al dispositivo si el firmware exige reinicio para que los ajustes surtan efecto.
7. Valide que el dispositivo comience a reportar a Plaspy y aparezca en la plataforma comprobando la llegada de telemetría y actualizaciones de ubicación.

## Ejemplos de comandos de configuración

El ST419NG acepta comandos SMS para configuración. A continuación se muestran los comandos públicos más relevantes extraídos de la plantilla disponible. Reemplace {{deviceId}} con el ID de dispositivo de seis dígitos derivado del IMEI (ver notas abajo). Mantenga los marcadores de APN y complete usuario y contraseña de APN según lo requiera su operador móvil.

- Establecer el APN del operador y el servidor GPRS
  - Notas: El cuarto parámetro típicamente indica si existe usuario o contraseña de APN (1) o no (0). Reemplace [apn], [apnu] y [apnp] con el APN del operador, el usuario de APN y la contraseña de APN respectivamente.
```text
SA200NTW;{{deviceId}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Establecer el intervalo de actualización a 60 segundos
```text
SA200RPT;{{deviceId}};02;60;60;60;3;0;0;0;0;0
```

- Comprobar ajustes actuales (comando de verificación)
```text
SA200CMD;{{deviceId}};02;PresetA
```

Ejemplo de derivación del ID de dispositivo (guía pública de la plantilla):
- Si el IMEI incluye los dígitos tal como lo ilustra el ejemplo del fabricante, el ID de dispositivo corresponde a los últimos seis dígitos excluyendo el último dígito del IMEI. Por ejemplo, si la presentación del IMEI da un ID de dispositivo 901234, sustituya {{deviceId}} por 901234 en los comandos anteriores.

Importante: mantenga los marcadores [apn], [apnu] y [apnp] y reemplácelos con los valores reales del operador cuando envíe los SMS. Si no usa usuario o contraseña de APN, ajuste el cuarto parámetro a 0 según lo indicado por la plantilla de comandos del dispositivo.

## Notas de configuración

- Las diferencias de firmware y de variante pueden cambiar la sintaxis exacta de los SMS y la posición de los parámetros; confirme siempre el formato del comando contra el manual del dispositivo correspondiente a su versión de firmware.
- El ST419NG soporta configuración vía SMS según la plantilla pública, pero algunos integradores prefieren las herramientas de Windows del fabricante o un portal de configuración cuando están disponibles; use el método oficial adecuado para su despliegue.
- Elija TCP o UDP según las necesidades de la instalación y el soporte del firmware; Plaspy acepta ambos, pero el dispositivo debe quedar configurado en el transporte elegido.
- Recuerde que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Si el operador móvil no requiere usuario o contraseña de APN, utilice la variante del comando que indica la ausencia de credenciales (la plantilla de comandos emplea un parámetro indicador para esto).

## Por qué usar Plaspy con esta configuración

Usar el ST419NG con Plaspy ofrece un camino sencillo hacia un rastreo y telemetría confiables gracias al soporte del dispositivo para reportes GPRS y a los ajustes de servidor compartidos de la plataforma. Apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y aplicar los ajustes de APN apropiados permite que el dispositivo reporte ubicación y eventos en Plaspy para monitorización, alertas y visibilidad operativa.

Learn more about Plaspy and how it can support fleet and asset monitoring at https://www.plaspy.com. For device specific setup methods, firmware behavior, and the most current command syntax consult the manufacturer documentation at http://www.suntechint.com/ to verify the latest details before deployment.
