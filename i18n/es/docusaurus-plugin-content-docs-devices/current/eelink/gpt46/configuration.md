---
slug: /eelink/gpt46/configuration
id: gpt46-configuration
sidebar_label: Configuration
title: EElink - GPT46 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink GPT46 para usar con Plaspy, incluye ajustes de servidor y comandos SMS de ejemplo
keywords:
  - configuración EElink GPT46
  - instalación EElink GPT46
  - configuración GPT46 Plaspy
  - configuración rastreador GPS EElink
  - configuración servidor GPT46
  - integración rastreador Plaspy
  - configuración rastreo GPS
  - instalación rastreador de activos EElink
  - configuración LTE Cat M1 GPT46
  - configuración dispositivo Plaspy
---

# EElink - Configuración GPT46

Esta página documenta el contexto público de configuración para usar el rastreador EElink GPT46 con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos SMS públicos proporcionados por el fabricante para apuntar el dispositivo a Plaspy, así como en el flujo típico para verificar conectividad y visibilidad en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, aquí se conservan los comandos SMS públicos y los marcadores de posición que suministra el fabricante y se explica cómo aplicarlos para la integración con Plaspy.

## Resumen de configuración

El objetivo de esta configuración es preparar el GPT46 para que reporte ubicación y telemetría a Plaspy de forma confiable. La configuración pública normalmente incluye establecer el APN celular, configurar el punto de conexión del servidor Plaspy, elegir el tipo de transporte si es necesario y fijar un intervalo de reporte adecuado.

- Configure el APN del dispositivo y el método de comunicaciones para que el rastreador acceda a la red celular.
- Apunte el rastreador al endpoint del servidor Plaspy para que los reportes lleguen a la plataforma.
- Elija UDP o TCP si el equipo requiere selección explícita del transporte.
- Defina un intervalo de reporte que equilibre frecuencia de actualizaciones y vida de batería.
- Valide los parámetros y confirme que el dispositivo sea visible y esté reportando en Plaspy.
- Use comandos SMS del fabricante o herramientas oficiales de configuración cuando estén disponibles.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para configuración por dominio.
- IP del servidor: 54.85.159.138 para configuración por dirección IP.
- Puerto: 8888 es el puerto de escucha que usa Plaspy para los reportes de dispositivos.
- Transporte: soporte para UDP o TCP; el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados.

## Requisitos previos a la configuración

- Un rastreador GPT46 cargado y encendido, listo para configuración.
- Una tarjeta SIM funcional con plan de datos activo y capacidad de SMS insertada en el dispositivo.
- Los ajustes de APN correctos proporcionados por el operador móvil.
- Acceso a un teléfono con capacidad SMS o a la herramienta de configuración del fabricante para enviar comandos.
- Documentación del fabricante o referencia de soporte para la revisión de firmware de su dispositivo.
- Una cuenta de Plaspy y conocimientos sobre cómo se registran los dispositivos en su espacio de trabajo Plaspy.

## Cómo se conecta este rastreador a Plaspy

El GPT46 envía fijaciones de ubicación y paquetes de telemetría a Plaspy utilizando el endpoint y puerto compartidos por Plaspy. Una vez que el rastreador apunta al endpoint de Plaspy, la plataforma mapea los reportes entrantes en estado del dispositivo, historial de ubicaciones y flujos de alertas.

- El rastreador reporta al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según los ajustes del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador e interpreta los mensajes entrantes para su mapeo y generación de alertas.
- Los intervalos de reporte periódicos (por ejemplo cada 60 segundos) controlan la cadencia de actualizaciones y el consumo de batería.
- Los datos de sensores BLE emparejados al GPT46 pueden reenviarse como telemetría para ofrecer mayor contexto en Plaspy cuando esté soportado.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o prepárese para enviar comandos SMS según la guía del dispositivo.
2. Configure el APN con los valores del operador usando el comando APN.
3. Ingrese el servidor de Plaspy especificando d.plaspy.com o 54.85.159.138 y configure el puerto 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y guarde la configuración.
5. Establezca el intervalo de reporte deseado, por ejemplo 60 segundos, y cualquier ajuste de zona horaria necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con actualizaciones de ubicación entrantes.

## Comandos de configuración de ejemplo

El fabricante proporciona comandos basados en SMS para el GPT46. Envíe estos mensajes SMS al número del dispositivo en el orden que requiera su despliegue. Los marcadores de posición como [apn], [apnu] y [apnp] deben reemplazarse por el APN del operador, el usuario del APN y la contraseña del APN respectivamente.

- Reinicio de fábrica opcional (usar solo si necesita restaurar valores por defecto):
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Configurar el APN del operador (reemplazar marcadores según sea necesario). Si su operador requiere usuario o contraseña, incluya [apnu] y [apnp]:
```text
APN,[apn],[apnu],[apnp]#
```
Nota: Si su APN no requiere usuario ni contraseña, envíe:
```text
APN,[apn]#
```

- Configurar el servidor GPRS por dominio en Plaspy y el puerto 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS por IP en Plaspy y el puerto 8888:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización periódica a cada 60 segundos:
```text
TIMER,60#
```

- Consultar los parámetros actuales:
```text
PARAM#
```

Envíe cada comando como un SMS al dispositivo. El orden anterior es práctico para la configuración inicial, pero siga cualquier indicación de orden específica del fabricante para su versión de firmware.

## Notas de configuración

- El método SMS del fabricante es un canal público de configuración mostrado aquí; también pueden existir herramientas del dispositivo o utilitarios USB según la versión de firmware y variantes del modelo.
- El comportamiento y la sintaxis exacta de los comandos pueden diferir entre versiones de firmware y revisiones de hardware. Verifique siempre los comandos con la documentación del dispositivo para su firmware específico.
- La selección TCP frente a UDP puede afectar garantías de entrega y sobrecarga; elija según la preferencia del instalador y las condiciones de red.
- Conserve los marcadores de posición [apn], [apnu] y [apnp] cuando prepare los comandos y reemplácelos por los valores del operador según corresponda.
- Use PARAM# después de la configuración para confirmar los ajustes y verificar que el servidor, APN y valores del timer se hayan aplicado correctamente.

## Por qué usar Plaspy con esta configuración

Configurar el GPT46 para que reporte a Plaspy brinda a los equipos de operaciones visibilidad centralizada sobre ubicación, estado del dispositivo y telemetría para activos que requieren larga autonomía y bajo mantenimiento. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad de la configuración por dispositivo, mientras que la posibilidad de ajustar intervalos de reporte ayuda a equilibrar la frecuencia de actualizaciones y la vida de la batería.

Para saber más sobre Plaspy y cómo gestiona el reporte de dispositivos y la visibilidad de flotas, visite https://www.plaspy.com. Para las instrucciones de configuración específicas más actuales, notas de firmware y orientación del fabricante, verifique los detalles en el sitio de EElink https://www.eelink.com.cn/. Las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo, así que confirme las instrucciones actuales antes de un despliegue a gran escala.
