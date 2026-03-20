---
slug: /topshine/vt200/configuration
id: vt200-configuration
sidebar_label: Configuration
title: TopShine - VT200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopShine VT200 con ajustes de servidor Plaspy, comandos SMS y pasos prácticos para conectar el rastreador
keywords:
- Configuración TopShine VT200
- Instalación TopShine VT200
- Configuración servidor VT200
- Configuración VT200 en Plaspy
- Configuración rastreador GPS TopShine
- Configuración SMS VT200
- Ajustes GPRS VT200
- Configuración rastreador para Plaspy
- Integración rastreador GPS con Plaspy
- Configuración seguimiento de flotas VT200
---

# TopShine - Configuración del VT200

Esta página documenta el contexto público de configuración para usar el TopShine VT200 con Plaspy. Se centra en información práctica y de acceso público, incluyendo ajustes de servidor, pasos de trabajo comunes y comandos SMS cuando aplican. El contenido está pensado para ayudar a usuarios técnicos a preparar el VT200 para una comunicación fiable con Plaspy, preservando los comandos del fabricante y los marcadores de posición que figuran en fuentes públicas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT200 admite reportes por GPRS 2G GSM o por SMS y dispone de registrador de datos y batería de respaldo, por lo que esta página explica cómo apuntar el VT200 hacia Plaspy usando los valores de servidor de la plataforma y ejemplos de comandos SMS disponibles públicamente.

## Resumen de configuración

Configurar un VT200 para Plaspy significa preparar el equipo para enviar posición y telemetría al punto de ingestión de Plaspy mediante GPRS o SMS, validar la conectividad y asegurarse de que la unidad aparezca en la plataforma Plaspy. Use los ajustes de servidor a continuación y el método de configuración proporcionado por el fabricante para su unidad y versión de firmware.

- Configure los parámetros de red y GPRS del equipo para que pueda conectarse a Plaspy a través de la red de datos móviles.
- Asegúrese de que el ID del dispositivo o IMEI esté establecido o reconocido para que Plaspy pueda asociar los reportes con el activo correcto.
- Verifique la conectividad y el reporte a Plaspy después de guardar los ajustes para confirmar la visibilidad en tiempo real.
- Aproveche el registrador de datos (data logger) y la batería de respaldo del VT200 para evitar huecos durante coberturas GSM intermitentes.
- Cuando esté disponible, utilice comandos SMS o la herramienta del proveedor para aplicar APN, dirección de servidor, transporte e intervalo de reporte.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and accepts reports on the shared port used by all supported devices

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con datos móviles y SMS y un APN compatible.
- Alimentación y cableado adecuados según una instalación profesional en vehículo para que el VT200 pueda arrancar y registrarse en la red.
- Acceso al método de configuración del fabricante para el VT200, como acceso por comandos SMS o la herramienta del proveedor.
- El IMEI del dispositivo y cualquier contraseña de instalador necesaria para enviar comandos de configuración; la contraseña por defecto pública que aparece en ejemplos del fabricante es 000000.
- Un plan de pruebas para verificar la conectividad y el reporte al servidor Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El VT200 envía paquetes GPRS o mensajes SMS que contienen posición y telemetría al endpoint de Plaspy. Cuando se apunta al servidor de Plaspy (por dominio o IP) en el puerto de la plataforma, los reportes son ingestados y coinciden con el identificador del dispositivo para que la posición en vivo, las alertas y el historial estén disponibles en Plaspy.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy.
- Los reportes llegan por GPRS usando UDP o TCP según la selección de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los paquetes entrantes.
- Los identificadores del dispositivo (IMEI o ID configurado) permiten que Plaspy asocie los reportes entrantes con el activo correcto.
- Una configuración exitosa habilita visibilidad en tiempo real, alertas e históricos en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el VT200 (configuración por SMS o la herramienta del proveedor). Este es el paso requerido para aplicar ajustes a nivel de dispositivo.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138 en la opción de servidor del equipo.
3. Establezca el puerto en 8888, tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte; Plaspy acepta ambos y detectará el protocolo automáticamente.
5. Configure el APN del equipo, las credenciales si son necesarias, y cualquier identificador de dispositivo requerido para que el servidor pueda asociar los reportes con la unidad.
6. Aplique o guarde la configuración en el equipo y reinicie la unidad si las instrucciones del fabricante recomiendan un reinicio.
7. Verifique que el VT200 reporte a Plaspy comprobando la recepción de posiciones y telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El VT200 admite configuración vía SMS en formatos provistos por el fabricante. Los siguientes comandos públicos son sintaxis de ejemplo extraídas de la documentación de TopShine. Los comandos usan la contraseña por defecto del dispositivo 000000 cuando se requiere. Preserve los marcadores de posición exactamente como se muestran y reemplácelos por sus valores al enviar comandos.

- Nota sobre los marcadores de posición
  - {{apn}} is the mobile network APN for the SIM card.
  - {{apnu}} is the APN username when required.
  - {{apnp}} is the APN password when required.
  - Replace {{device_id}} with the required device identifier derived from the IMEI as specified below.

1. Optional initial factory reset (use only when required for initial setup)
```text
W000000,990,099###
```

2. Set the device ID (manufacturer example uses the first 14 digits of the IMEI)
```text
W000000,010,{{device_id}}
```
- Guidance: set the device ID using the first 14 digits from the IMEI as shown in public examples. Ensure the device identifier aligns with how you register the unit in Plaspy; Plaspy matches reports using the IMEI or configured ID.

3. Set the operator APN (username and password optional)
```text
W000000,011,{{apn}}
```
Or, when APN username and password are required:
```text
W000000,011,{{apn}},{{apnu}},{{apnp}}
```

4. Set the GPRS server to Plaspy using the public IP and port
```text
W000000,012,54.85.159.138,8888
```
- You may alternatively point the device at d.plaspy.com if the device accepts domain names instead of an IP address. Use the method supported by your VT200 firmware.

5. Switch to GPRS reporting mode
```text
W000000,013,2
```

6. Set the update interval (manufacturer example uses 6 as the sample interval)
```text
W000000,014,6
```
- Interpret the interval according to the device manual; this sample command sets the reporting frequency as shown in public examples.

7. Query device IMEI (verification command)
```text
W000000,601
```

## Notas de configuración

- La configuración por SMS figura en la documentación pública del VT200; utilice comandos SMS solo cuando entienda las instrucciones y tenga la contraseña de instalador correcta.
- Las revisiones de firmware y versiones de hardware pueden cambiar el soporte de comandos y el formato de parámetros; confirme la sintaxis exacta con la unidad que está configurando.
- Elija TCP o UDP según las necesidades de su instalación; Plaspy acepta ambos y detectará el protocolo automáticamente, pero el comportamiento del dispositivo puede variar según el firmware.
- Cuando se usa un nombre de dominio, algunos firmwares requieren una dirección IP; el ejemplo del fabricante emplea la IP 54.85.159.138 y el puerto 8888 para conectividad confiable.
- Verifique siempre el APN, la capacidad del plan de datos de la SIM y la cobertura de red antes de asumir una conexión GPRS exitosa a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TopShine VT200 con Plaspy ofrece una vía práctica para obtener rastreo en tiempo real, visibilidad de eventos e informes históricos para flotas y activos. El soporte del VT200 para GPRS TCP/UDP y SMS, junto con su registrador de datos y batería de respaldo, encaja bien con el modelo de ingestión de Plaspy, permitiendo que las organizaciones mantengan telemetría continua incluso con cobertura intermitente.

Learn more about Plaspy and platform features at https://www.plaspy.com. For device specific commands, firmware behavior, and the latest manufacturer guidance, verify setup information on the official TopShine site https://www.gztopshine.com/ as manufacturer specifications and configuration methods can change over time.
