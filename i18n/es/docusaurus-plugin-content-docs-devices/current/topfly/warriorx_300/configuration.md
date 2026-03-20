---
slug: /topfly/warriorx_300/configuration
id: warriorx_300-configuration
sidebar_label: Configuration
title: TopFly - WarriorX 300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopFly WarriorX 300 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración TopFly WarriorX 300
  - Configuración WarriorX 300
  - WarriorX 300 Plaspy
  - Configuración rastreador TopFly
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Guía configuración rastreador de activos
  - Configuración servidor para rastreadores
  - Configuración plataforma GPS
  - Comandos SMS WarriorX 300
---

# TopFly - Configuración WarriorX 300

Esta página describe el contexto público de configuración para usar el TOPFLYtech WarriorX 300 con Plaspy. Explica los pasos prácticos y los ajustes públicos necesarios para apuntar el WarriorX 300 a los servidores de Plaspy, incluyendo los ejemplos de comandos SMS que trae la documentación del dispositivo y los valores de servidor compartidos que Plaspy utiliza para recibir telemetría.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello esta guía se concentra en las acciones públicas y prácticas que puede usar para integrar el WarriorX 300 con Plaspy, haciendo referencia al enfoque de configuración oficial de TopFly.

## Resumen de la configuración

El objetivo de la configuración es preparar el WarriorX 300 para que reporte de forma confiable la posición GNSS y la telemetría a Plaspy y quede visible en la plataforma. Para este modelo, la documentación del fabricante incluye un flujo simple de comandos SMS para ajustar la zona horaria, el APN, la dirección del servidor GPRS y el intervalo de reporte. Aplicar estos ajustes públicos garantiza que el rastreador pueda establecer una sesión de datos celulares y enviar actualizaciones de ubicación y eventos a Plaspy.

- Asegúrese de que el rastreador pueda registrarse en la red celular y tenga los ajustes APN correctos.
- Configure el dispositivo para que reporte al endpoint y puerto del servidor de Plaspy.
- Defina intervalos de reporte adecuados según la vida útil de la batería y sus necesidades de monitoreo.
- Valide la conectividad y confirme que el dispositivo aparezca en Plaspy después de la configuración.
- Use los comandos SMS provistos o la herramienta del proveedor según el firmware del dispositivo.

## Ajustes del servidor de Plaspy

- El dominio del servidor d.plaspy.com es el endpoint público usado para la integración con Plaspy.
- La IP del servidor 54.85.159.138 es la dirección numérica que puede usarse cuando se requiere un IP.
- El puerto 8888 es el puerto que Plaspy utiliza para todos los dispositivos.
- Es posible usar transporte UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta al endpoint del servidor.

## Requisitos típicos antes de la instalación

- Una tarjeta SIM habilitada para datos y SMS según lo requerido por su operador celular y la configuración del dispositivo.
- Credenciales APN del operador celular, incluyendo nombre del APN y, opcionalmente, nombre de usuario y contraseña.
- Acceso a un teléfono con capacidad SMS o a la herramienta de configuración del fabricante para enviar comandos SMS si usa aprovisionamiento por SMS.
- Dispositivo encendido con batería adecuada o alimentado mediante el cableado de la instalación durante el aprovisionamiento.
- Conocimiento de la contraseña por defecto del dispositivo si los comandos o el aprovisionamiento la requieren. El ejemplo público usa 0000 como contraseña predeterminada.
- Cobertura de red en la ubicación del dispositivo para permitir la conexión GPRS o LTE.

## Cómo se conecta este rastreador a Plaspy

El WarriorX 300 se configura para enviar las posiciones GNSS y la telemetría del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir datos de ubicación, eventos y condiciones para monitoreo y alertas. Cuando está correctamente configurado, el rastreador establece una sesión GPRS o LTE y abre una conexión al servidor de Plaspy usando el transporte seleccionado.

- El dispositivo envía actualizaciones periódicas de posición GNSS a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador y el soporte del firmware.
- Plaspy recibe telemetría como ubicación, alertas de movimiento, estado de batería y datos de sensores soportados.
- La plataforma detecta automáticamente el protocolo e interpreta los mensajes del rastreador para visibilidad y generación de eventos.
- Después de la configuración, valide que el dispositivo esté reportando a Plaspy y que los datos entregados coincidan con lo esperado.

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el WarriorX 300, como el aprovisionamiento por SMS o la herramienta del proveedor documentada por TopFly.
2. Configure el APN para la SIM instalada usando los valores de APN, usuario y contraseña proporcionados por su operador móvil.
3. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 según las opciones del dispositivo.
4. Establezca el puerto del servidor en 8888 para el dispositivo. Todos los equipos en Plaspy usan este puerto.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte y el instalador debe decidir según la red o preferencias de confiabilidad.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware exige un reinicio para aplicar los cambios.
7. Valide que el rastreador reporte a Plaspy confirmando que aparece en la plataforma y que la ubicación y la telemetría se entregan correctamente.

## Comandos de configuración de ejemplo

La documentación del WarriorX 300 ofrece comandos SMS que pueden enviarse al dispositivo para un aprovisionamiento básico. La configuración de ejemplo utiliza la contraseña por defecto del dispositivo 0000. Preserve exactamente los marcadores de posición al reemplazarlos con los valores de su operador.

- Configure la zona horaria a UTC 0
```text
GMT,0000,0#
```

- Establezca el APN del operador usando marcadores de posición para APN, nombre de usuario y contraseña. Reemplace {{apn}} {{apnu}} y {{apnp}} con los valores de su operador. Si el usuario o la contraseña no son necesarios, deje esos marcadores vacíos según indica la documentación del dispositivo.
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```

- Configure el servidor GPRS a Plaspy por IP y puerto. Esto apunta el rastreador a la IP del servidor de Plaspy y al puerto 8888.
```text
IP,0000,54.85.159.138 8888#
```

- Establezca el intervalo de reporte a 60 segundos usando el formato de temporizador que muestra el proveedor. Ajuste los valores según su caso de uso y plan de batería.
```text
TIMER,0000,60:60:0:0#
```

Notas sobre estos comandos
- La contraseña numérica 0000 que aparece en los ejemplos es la contraseña predeterminada publicada en el contenido de configuración del modelo.
- Los marcadores de posición {{apn}} {{apnu}} y {{apnp}} representan el APN del operador, el nombre de usuario APN y la contraseña APN respectivamente. Reemplace estos valores con los datos de su operador al enviar el comando APN.
- Envíe los comandos SMS desde un número autorizado o use la herramienta del fabricante según las instrucciones de TopFly.

## Notas de configuración

- Las variaciones de firmware del fabricante pueden modificar la sintaxis de los comandos SMS o las funciones disponibles. Siempre verifique la revisión de firmware del dispositivo frente a la documentación del proveedor.
- El WarriorX 300 soporta aprovisionamiento por SMS en el ejemplo público, pero también pueden existir herramientas del proveedor o configuración por USB Type C para despliegues masivos o configuración local.
- Elija el transporte UDP o TCP según la confiabilidad de la red y el soporte del firmware del dispositivo. Plaspy admite ambos y detecta automáticamente el protocolo conectado.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos; configure este puerto exactamente como se indica para asegurar el enrutamiento correcto a la plataforma.
- Confirme que las credenciales APN y el servicio de la SIM estén activos antes de comenzar a solucionar problemas de conectividad con Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TopFly WarriorX 300 con Plaspy proporciona a las organizaciones visibilidad de activos a largo plazo y de bajo mantenimiento, con reportes configurables para equilibrar la duración de la batería y la frecuencia de actualización. El ejemplo público de aprovisionamiento por SMS permite que los técnicos de campo apunten rápidamente los dispositivos a Plaspy y validen el reporte sin configuraciones complejas, mientras Plaspy ingiere ubicación, alertas y la telemetría de sensores soportados para el monitoreo operativo.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Manufacturer specifications, setup methods, and firmware behavior can change over time so verify device specific configuration details and the latest command syntax on the TopFly website at https://www.topflytech.com/.
