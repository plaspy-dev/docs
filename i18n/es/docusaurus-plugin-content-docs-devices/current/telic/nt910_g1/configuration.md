---
slug: /telic/nt910_g1/configuration
id: nt910_g1-configuration
sidebar_label: Configuration
title: Telic - NT910-G1 Configuration
sidebar_class_name: menu_item_tracker
description: Prepare el Telic NT910 G1 para enviar datos a Plaspy con ejemplos de servidor y comandos SMS
keywords:
  - configuración Telic NT910-G1
  - configuración NT910-G1
  - NT910-G1 configuración Plaspy
  - configuración rastreador GPS Telic
  - configuración servidor NT910-G1
  - configuración rastreador Plaspy
  - comandos SMS NT910-G1
  - configuración plataforma rastreador GPS
  - configuración telemetría Telic
  - seguimiento de flotas NT910-G1
---

# Telic - NT910-G1 Configuración

Esta página documenta la información pública de configuración para usar el Telic NT910-G1 con Plaspy. Reúne los comandos públicos del fabricante y los valores del servidor Plaspy necesarios para apuntar el dispositivo a la plataforma y permitir la telemetría y el seguimiento. Use este documento como referencia técnica al preparar unidades NT910-G1 para su integración con Plaspy.

Plaspy emplea configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El NT910-G1 admite configuración por SMS como se muestra en los ejemplos públicos de Telic más abajo y también soporta operación celular de baja energía adecuada para despliegues de telemetría y flotas.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el NT910-G1 para comunicarse de forma fiable con Plaspy: asegurarse de que el APN y el transporte de red sean correctos y verificar que el dispositivo reporte al endpoint compartido de Plaspy. Las tareas habituales al configurar este modelo para Plaspy son:

- Apuntar el dispositivo al endpoint y puerto del servidor Plaspy para que la telemetría llegue a Plaspy para ingestión y decodificación.
- Configurar el APN y, opcionalmente, credenciales de APN para que el dispositivo establezca sesión de datos GPRS o LTE.
- Seleccionar UDP o TCP si el equipo requiere elegir manualmente el transporte para la conexión al servidor.
- Validar conectividad y reporte comprobando las respuestas del dispositivo y confirmando que los datos llegan a Plaspy.
- Aplicar los ajustes usando el método proporcionado por el fabricante, por ejemplo comandos SMS o una herramienta oficial.

## Valores públicos del servidor Plaspy

Al configurar el NT910-G1 para Plaspy, use los siguientes valores públicos del servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device transport selection
- Plaspy automatically detects the tracker protocol so the same server and port are used across supported devices

Plaspy utiliza el mismo puerto para todos los dispositivos y su detección automática de protocolo facilita la integración una vez que el dispositivo apunta al servidor Plaspy.

## Requisitos habituales antes de comenzar

- Un NT910-G1 con batería cargada y alimentación, con acceso físico para enviar comandos SMS o usar la herramienta de configuración.
- Una tarjeta SIM activa con el APN de datos correcto y, si es necesario, capacidad para enviar y recibir SMS para la configuración por SMS.
- Acceso al método oficial de configuración de Telic para su unidad, como comandos SMS o software del fabricante, y las credenciales necesarias.
- Conocimiento del APN correcto de su operador y cualquier nombre de usuario o contraseña opcional del APN.
- Conocimiento de la contraseña por defecto del dispositivo cuando sea requerida; la documentación pública muestra 123456 como valor por defecto.
- Un plan para validar el funcionamiento después de la configuración confirmando que el dispositivo reporta a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El NT910-G1 envía ubicación y telemetría a Plaspy a través de la red celular usando el APN y el endpoint del servidor configurados. Una vez que el dispositivo tiene una sesión de datos activa y apunta al servidor y puerto de Plaspy, la plataforma ingiere y decodifica automáticamente el protocolo entrante para que el dispositivo sea visible en Plaspy.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que toda la telemetría fluya hacia la plataforma.
- Plaspy recibe paquetes uplink por UDP o TCP e identifica automáticamente el protocolo del rastreador.
- La telemetría, actualizaciones de estado y eventos enviados por el equipo quedan disponibles en los paneles y reportes de Plaspy.
- Comandos de verificación o comprobaciones de estado pueden confirmar la configuración y la conectividad con el endpoint de Plaspy.
- Una configuración correcta permite monitoreo operativo, alertas de geocercas y reportes históricos dentro de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Telic para su unidad NT910-G1, ya sea comandos SMS o el software del fabricante. Este es el punto de partida recomendado para aplicar los ajustes.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de configuración del servidor del dispositivo o en el comando SMS según corresponda.
3. Establezca el puerto en 8888, que es el utilizado por Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo solicita seleccionar un transporte durante la configuración.
5. Configure el APN del dispositivo y, si aplica, el nombre de usuario y contraseña del APN para que el equipo pueda establecer la sesión de datos.
6. Guarde o aplique la configuración y reinicie el dispositivo si el fabricante lo recomienda o si se requiere reinicio para activar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy mediante comandos de verificación del equipo o revisando los datos entrantes en Plaspy.

## Comandos de configuración de ejemplo

El NT910-G1 admite configuración por SMS usando una contraseña de dispositivo. Los ejemplos públicos a continuación están presentados en el orden que aparece en el contenido público del fabricante. La muestra utiliza la contraseña por defecto 123456 tal como aparece en los ejemplos públicos de Telic. Reemplace los marcadores {{apn}}, {{apnu}} y {{apnp}} por los valores de su operador donde corresponda.

- Reset de fábrica (opcional al preparar inicialmente)
```text
begin123456
```

- Ajustar la zona horaria a UTC 0
```text
time zone123456 0
```

- Establecer el APN del operador
```text
apn123456 {{apn}}
```
(Reemplace {{apn}} por el APN de su operador móvil)

- Establecer usuario y contraseña del APN si es necesario
```text
up123456 {{apnu}} {{apnp}}
```
(Envíe esto solo si su APN requiere usuario y contraseña; mantenga los marcadores si no se usan)

- Configurar el servidor GPRS para apuntar el dispositivo a Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```
(Este comando configura el equipo para enviar datos a Plaspy en 54.85.159.138 puerto 8888)

- Cambiar a modo GPRS
```text
gprs123456,1,1
```
o
```text
gprs123456
```

- Comando de verificación para comprobar la configuración actual
```text
check123456
```

Notas sobre los comandos SMS anteriores
- Los comandos de ejemplo usan la contraseña por defecto 123456 según los ejemplos públicos de Telic. Cambie la contraseña cuando sea posible por motivos de seguridad.
- Conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} y sustitúyalos por los valores del operador cuando sea necesario.
- Aplique el comando de reset de fábrica únicamente cuando sea necesario durante la provisión inicial o cuando esté explícitamente indicado.

## Notas de configuración

- El firmware del fabricante y las variantes regionales pueden cambiar la sintaxis y el comportamiento de los comandos; verifique la sintaxis exacta para su revisión de firmware.
- Los comandos de ejemplo del NT910-G1 usan configuración por SMS, lo cual resulta útil cuando no hay una herramienta de configuración disponible en sitio.
- Elija UDP o TCP según sus requisitos operativos y confirme que el dispositivo soporta el transporte seleccionado para la comunicación con el servidor.
- Confirme siempre el APN y las credenciales opcionales con su operador móvil antes de provisionar unidades a gran escala.
- Mantenga seguras las contraseñas de los dispositivos y actualice las contraseñas por defecto cuando sea posible para reducir el acceso no autorizado.

## Por qué usar Plaspy con esta configuración

Usar el Telic NT910-G1 con Plaspy ofrece a las organizaciones telemetría de bajo consumo y costo eficiente combinada con una plataforma de servidor que reconoce automáticamente los protocolos de rastreador. Apuntar el dispositivo a Plaspy usando el servidor y puerto compartidos simplifica el despliegue de flotas y centraliza el procesamiento de telemetría para alertas, historial de ubicaciones y paneles operativos.

To learn more about Plaspy and supported integration workflows visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify information on the Telic site at https://www.telic.de.
