---
slug: /queclink/gmt200/configuration
id: gmt200-configuration
sidebar_label: Configuration
title: QuecLink - GMT200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GMT200 para integración con Plaspy, ajustes de servidor y comandos SMS
keywords:
  - Configuración QuecLink GMT200
  - Configuración inicial QuecLink GMT200
  - Configuración servidor GMT200
  - Configuración GMT200 Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador GPS motocicleta
  - Ajustes servidor rastreador GPS
  - Configuración plataforma GPS QuecLink
  - Configuración de rastreo de vehículos
  - Comandos SMS GMT200
---

# QuecLink - GMT200 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GMT200 con Plaspy. Se centra en los ajustes de servidor prácticos y ejemplos de comandos que se utilizan comúnmente para apuntar un GMT200 a Plaspy para seguimiento en vivo y reporte de eventos. Utilice esta guía para entender qué debe preparar antes de integrar el dispositivo y cómo Plaspy recibe los datos del rastreador.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GMT200 admite ejemplos de configuración por SMS en el conjunto de comandos públicos que se muestran abajo; los pasos reflejan patrones típicos de configuración disponibles públicamente.

## Resumen de la configuración

Este proceso prepara el GMT200 para comunicarse con Plaspy, valida la conectividad y habilita la visibilidad del rastreador dentro de la plataforma Plaspy. Los comandos de ejemplo que se muestran son comandos estilo AT por SMS, comúnmente usados para la configuración de dispositivos QuecLink, e incluyen APN y ajustes de servidor que apuntan el rastreador a Plaspy.

- Configure el APN y las credenciales de red del dispositivo para que el tracker pueda enviar datos GPRS.
- Establezca el endpoint y el puerto del servidor Plaspy para que el GMT200 reporte a Plaspy en tiempo real.
- Seleccione y verifique la capa de transporte UDP o TCP si el dispositivo requiere una selección explícita.
- Valide la conectividad y la frecuencia de reporte para asegurar actualizaciones oportunas de posición en Plaspy.
- Active las entradas o alarmas relevantes (por ejemplo SOS o ignición) para que los eventos lleguen a Plaspy como alertas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un rastreador GMT200 con alimentación disponible e instalado o colocado en banco de pruebas para la configuración inicial.
- Una tarjeta SIM celular activa con plan de datos y los valores APN correctos.
- Acceso al método de configuración QuecLink que use su instalación, como comandos SMS o la herramienta del fabricante.
- La contraseña del dispositivo cuando sea requerida para comandos SMS de configuración; la contraseña pública de muestra usada en los ejemplos es queclink
- Conocimiento de si su instalación prefiere UDP o TCP para la conexión del rastreador.
- Una cuenta en Plaspy y la expectativa de que el dispositivo reportará al endpoint y puerto compartidos de Plaspy

## Cómo se conecta este rastreador a Plaspy

El GMT200 se configura para enviar su ubicación y telemetría de eventos al endpoint y puerto compartidos de Plaspy para que Plaspy pueda ingerir, mostrar y alertar sobre los datos. Una vez que el dispositivo tenga una conexión de red válida y se hayan establecido el servidor y el puerto, Plaspy recibirá las actualizaciones del dispositivo y analizará automáticamente el protocolo del rastreador.

- El rastreador envía paquetes de posición y eventos a d.plaspy.com en el puerto 8888
- El rastreador puede configurarse para usar transporte UDP o TCP para llegar a Plaspy
- Plaspy utiliza detección automática de protocolo por lo que no se requiere selección manual del protocolo en la plataforma
- La telemetría y los eventos de alarma enviados a Plaspy se muestran en los mapas en vivo y en los feeds de alertas
- Una configuración exitosa permite monitoreo continuo, reproducciones históricas y flujos de trabajo basados en eventos dentro de Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración QuecLink para el GMT200, como comandos SMS o la herramienta del proveedor recomendada para su firmware.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera la interfaz de configuración del dispositivo.
3. Establezca el puerto en 8888 en los ajustes de servidor o GPRS del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita de transporte para el puerto 8888.
5. Aplique o guarde la configuración en el dispositivo y permita que el dispositivo confirme los ajustes.
6. Reinicie el dispositivo si el firmware del rastreador requiere un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del dispositivo en su cuenta Plaspy y confirmando las actualizaciones de posición en vivo.

## Ejemplos de comandos de configuración

El GMT200 puede configurarse usando comandos AT estilo SMS. Los siguientes comandos de ejemplo son públicos y usan la contraseña de dispositivo de muestra queclink. Mantenga el orden de los comandos cuando el orden sea importante durante la configuración inicial. Se conservan los marcadores de posición donde corresponda.

Notas
- El primer comando es una restauración de configuraciones de fábrica y es opcional o se usa cuando se parte de un estado desconocido.
- {{apn}}, {{apnu}} y {{apnp}} son marcadores de posición para el nombre APN de su SIM, el usuario APN y la contraseña APN respectivamente.

1. Comando opcional de reinicio a configuración de fábrica
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador con marcadores de posición para los valores APN
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- Reemplace {{apn}} con el nombre APN de su proveedor celular
- Reemplace {{apnu}} y {{apnp}} con el usuario y la contraseña del APN si el operador lo requiere

4. Configurar el servidor GPRS para apuntar a Plaspy
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando incluye tanto el dominio de Plaspy como la IP y establece el puerto 8888; el dispositivo puede usar dominio o IP según el comportamiento del firmware

5. Establecer intervalo de reporte a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

## Notas de configuración

- El firmware del fabricante y la sintaxis de configuración pueden variar según la revisión de hardware. Confirme siempre la sintaxis para la versión de firmware de su GMT200 antes de enviar comandos.
- El GMT200 admite configuración por SMS como se muestra en los ejemplos. Algunas implementaciones pueden preferir una herramienta de configuración por cable o un método OTA proporcionado por el vendedor.
- Elija UDP o TCP según la confiabilidad de la red y el comportamiento del operador en su región. Puede ser necesario probar ambos transportes para determinar la opción más fiable.
- La contraseña por defecto de muestra usada en los comandos públicos es queclink. Cambie las contraseñas del dispositivo después de la configuración inicial cuando sea apropiado por motivos de seguridad y políticas operativas.
- Debido a que Plaspy utiliza el mismo puerto para todos los dispositivos y detección automática de protocolo, su enfoque principal en el dispositivo debe ser el servidor correcto, el APN, la selección de transporte y el intervalo de reporte.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GMT200 con Plaspy ofrece a las organizaciones visibilidad continua de flotas de motocicletas y activos individuales, centralizando alarmas y flujos de trabajo de eventos. La forma discreta del GMT200 y sus reportes constantes, combinados con la ingestión y el mapeo de Plaspy, proporcionan herramientas prácticas para respuesta antirrobo, reproducción de rutas y monitoreo operativo.

Learn more about Plaspy and how devices are integrated on the main website https://www.plaspy.com. For device specific details, firmware behavior, and the latest configuration methods consult Queclink's official documentation at https://www.queclink.com/ to verify current information.
