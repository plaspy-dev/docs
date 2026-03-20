---
slug: /topfly/torchx_100/configuration
id: torchx_100-configuration
sidebar_label: Configuration
title: TopFly - TorchX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para TopFly TorchX 100 con ajustes de servidor Plaspy comandos SMS y pasos de integración
keywords:
  - Configuración TopFly TorchX 100
  - Configuración TorchX 100
  - TorchX 100 Plaspy
  - Configuración de rastreador GPS TorchX 100
  - Configuración rastreador OBDII TopFly
  - Ajustes servidor Plaspy
  - Rastreo de flotas TorchX 100
  - Configuración SMS TorchX 100
  - Configuración de telemetría vehicular
  - Configuración rastreador ELD
---

# TopFly - TorchX 100 Configuración

Esta página describe el contexto público de configuración para usar el TopFly TorchX 100 con Plaspy. Resume los ajustes de servidor prácticos y los pasos del fabricante que se usan habitualmente para preparar el TorchX 100 y que éste informe ubicación y telemetría CAN BUS en los paneles de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo; las instrucciones exactas del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TorchX 100 es un rastreador plug and play para OBDII con telemetría CAN BUS detallada, construido sobre una plataforma global 4G Cat 4 con compatibilidad de reserva a 3G y 2G. Esta página vincula esas características del dispositivo con los valores públicos de configuración de Plaspy.

## Resumen de configuración

El objetivo de la configuración es apuntar el TorchX 100 a Plaspy, asegurar que el dispositivo tenga conectividad móvil válida y permisos para enviar datos, y confirmar que Plaspy reciba e interprete el protocolo del rastreador. Cuando se configura correctamente, el dispositivo enviará posición y telemetría del vehículo a Plaspy para visibilidad en tiempo real y análisis histórico.

- Configure los ajustes de red del dispositivo para que use datos móviles y pueda resolver el endpoint de Plaspy.
- Configure el rastreador para que reporte a Plaspy usando el endpoint y puerto compartidos que Plaspy utiliza para todos los dispositivos.
- Valide la conectividad y el envío de telemetría para que Plaspy pueda detectar automáticamente el protocolo del dispositivo.
- Aplique un intervalo de reporte sensato para equilibrar la frecuencia de actualizaciones y el consumo de datos móviles.
- Utilice los métodos de configuración proporcionados por el fabricante, como comandos SMS o herramientas del proveedor, según lo requiera el TorchX 100.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos

Estos valores son los ajustes públicos de Plaspy que debe usar al configurar el TorchX 100. Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado y conectado al puerto OBDII del vehículo o alimentado por otro medio para la configuración inicial.
- SIM activa con datos móviles habilitados y APN configurado para el operador instalado.
- Acceso al método de configuración del fabricante para el TorchX 100, como comandos SMS o software del proveedor.
- Conocimiento de la contraseña por defecto del dispositivo si se requiere para configuración por SMS o por herramienta (la configuración de ejemplo más abajo usa la contraseña por defecto 0000 indicada en la guía pública del fabricante).
- Un teléfono o herramienta capaz de enviar comandos SMS en texto plano si usa configuración por SMS.
- Compatibilidad de firmware confirmada para los pasos de configuración del servidor cuando sea posible.

## Cómo se conecta este rastreador a Plaspy

El TorchX 100 se configura para enviar ubicación y telemetría CAN BUS al endpoint y puerto del servidor Plaspy indicados arriba. Una vez que el dispositivo apunta a Plaspy y tiene conectividad móvil activa, Plaspy ingiere puntos de ubicación y telemetría y los mostrará en la plataforma.

- El rastreador transmite posición y telemetría del vehículo a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Plaspy acepta transporte UDP o TCP en el puerto compartido e intenta detectar el protocolo automáticamente.
- La frecuencia de reporte se establece en el dispositivo para que Plaspy reciba actualizaciones según el intervalo configurado.
- Datos CAN BUS como estado de ignición, VIN, odómetro y diagnósticos se reenvían a Plaspy para su visualización.
- Plaspy muestra eventos del dispositivo y soporta alertas basadas en la telemetría recibida.

## Flujo de configuración común

1. Acceda al método de configuración oficial del fabricante o al software para el TorchX 100, como la interfaz de comandos SMS o la herramienta de configuración del proveedor.
2. Configure el servidor del dispositivo para usar d.plaspy.com o la IP 54.85.159.138 como endpoint de reporte.
3. Establezca el puerto del dispositivo en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el dispositivo usando el método del fabricante.
6. Reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio tras la configuración.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y viendo que la telemetría aparece en la plataforma Plaspy.
8. Ajuste el intervalo de reporte según sea necesario para equilibrar frecuencia de actualizaciones y uso de datos.

## Ejemplo de comandos de configuración

El TorchX 100 puede configurarse mediante comandos SMS según la guía pública del fabricante. La configuración de ejemplo a continuación usa la contraseña por defecto del dispositivo 0000 indicada en las instrucciones del fabricante. Conserve los marcadores de posición al reemplazarlos por valores específicos del operador.

- Establecer la zona horaria del dispositivo a UTC 0
```text
GMT,0000,0#
```

- Configurar el APN del operador. Reemplace los marcadores de posición con los valores de su operador:
  - {{apn}} es el nombre del APN
  - {{apnu}} es el usuario del APN si se requiere, de lo contrario dejar vacío
  - {{apnp}} es la contraseña del APN si se requiere, de lo contrario dejar vacío
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS con la IP y puerto de Plaspy. Esto apunta el dispositivo a Plaspy para el envío de datos
```text
IP,0000,54.85.159.138 8888#
```

- Establecer el intervalo de actualización a 60 segundos (ejemplo). El formato sigue la sintaxis SMS del fabricante
```text
TIMER,0000,60:60:0:0#
```

Notas sobre estos comandos
- El ejemplo usa la contraseña por defecto 0000 del dispositivo tal como aparece en la guía pública del fabricante. Cambie la contraseña del dispositivo con el método recomendado por el fabricante si necesita mayor seguridad.
- Reemplace los marcadores de APN por los valores de su operador móvil antes de enviar.
- Conserve el carácter de almohadilla final (#) según lo exige el formato de comandos SMS del dispositivo.

## Notas de configuración

- Las versiones de firmware del fabricante y las revisiones regionales de hardware pueden cambiar la sintaxis de los comandos o la disponibilidad de funciones; verifique los comandos con la documentación actual del fabricante.
- El TorchX 100 soporta configuración por SMS como se muestra en los ejemplos públicos; también pueden estar disponibles herramientas del proveedor o una interfaz de depuración USB según el lote y el firmware.
- Elija UDP o TCP según sus necesidades de red y fiabilidad; Plaspy acepta ambos en el puerto 8888 y realiza detección automática de protocolo.
- Dado que Plaspy utiliza un único puerto para los dispositivos soportados, asegúrese de apuntar el dispositivo a 54.85.159.138 o d.plaspy.com en el puerto 8888 para un comportamiento consistente.
- Después de la configuración, confirme que el dispositivo aparece en Plaspy y está reportando telemetría CAN BUS y ubicación según lo esperado.

## Por qué usar Plaspy con esta configuración

Usar el TorchX 100 con Plaspy brinda a los responsables de flota y a los equipos de operaciones una solución combinada de rastreo GPS en tiempo real y telemetría CAN BUS detallada. La forma OBDII del dispositivo, el soporte ELD y su capacidad de reportes frecuentes funcionan bien con la detección automática de protocolos de Plaspy y su infraestructura de servidor centralizada para ofrecer visibilidad, alertas e informes históricos para flotas y transporte de pasajeros.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details and firmware behavior on the manufacturer website https://www.topflytech.com/ . Manufacturer specifications and configuration methods can change over time so confirm the current instructions on the official TopFly documentation before a production rollout.
