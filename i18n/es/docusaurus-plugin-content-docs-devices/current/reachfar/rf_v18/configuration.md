---
slug: /reachfar/rf_v18/configuration
id: rf_v18-configuration
sidebar_label: Configuration
title: Reachfar - RF-V18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Reachfar RF V18 a Plaspy con instrucciones prácticas de servidor y configuración
keywords:
  - Configuración Reachfar RF V18
  - Instalación Reachfar RF V18
  - Reachfar RF V18 Plaspy
  - Configuración rastreador GPS Reachfar
  - Configuración servidor RF V18
  - Software de seguimiento RF V18
  - Configuración rastreador GPS personal
  - Configuración GPRS RF V18
  - Guía instalación Reachfar
  - Configuración RF V18 Plaspy
---

# Reachfar - RF-V18 Configuración

Esta página ofrece una guía pública para configurar el rastreador GPS Reachfar RF-V18 con Plaspy. Detalla los parámetros de servidor compartido que debe aplicar en el dispositivo o mediante las herramientas del proveedor, explica qué preparar antes de la configuración y describe un flujo de trabajo práctico para que el RF-V18 reporte a Plaspy información de ubicación y eventos en tiempo real.

Plaspy usa un único endpoint y puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos de configuración en el lado del fabricante para el RF-V18 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta del proveedor; consulte la documentación del dispositivo y el conjunto de comandos SMS o la app del proveedor para procedimientos específicos mientras aplica los valores de Plaspy indicados aquí.

## Resumen de la configuración

El proceso de configuración prepara el RF-V18 para transmitir de forma fiable datos de ubicación y eventos a Plaspy por GPRS, con fallback por SMS cuando esté soportado. El objetivo es apuntar el dispositivo a Plaspy, confirmar el tipo de transporte y verificar que la plataforma reciba actualizaciones en vivo para que los cuidadores puedan usar los paneles y alertas de Plaspy.

- Configure el RF-V18 para que reporte al endpoint del servidor Plaspy y confirme el tipo de transporte.
- Asegúrese de que el dispositivo tenga una SIM operativa y datos móviles para que el reporte por GPRS TCP/IP funcione.
- Valide la conectividad observando la llegada del primer paquete de posición y eventos en Plaspy.
- Active o confirme el reporte de alertas como SOS, geocerca y batería baja para que Plaspy pueda notificar a los cuidadores.
- Guarde y aplique los cambios en el rastreador y luego verifique el reporte continuo y la estabilidad de la telemetría.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el RF-V18. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol after the device connects

## Requisitos habituales antes de la configuración

- Dispositivo con batería cargada o fuente de alimentación confiable para completar la configuración y la verificación sin interrupciones.
- Tarjeta SIM activa con un plan de datos que soporte GPRS TCP/IP y SMS si planea usar fallback por SMS.
- Acceso al método oficial de configuración de Reachfar para el RF-V18 (app del proveedor, software o comandos SMS documentados).
- Cuenta en Plaspy y acceso a la plataforma Plaspy para validar que el dispositivo aparece y reporta telemetría.
- Conocimientos básicos sobre la versión de firmware del dispositivo y las herramientas de configuración del proveedor para seguir los pasos del fabricante.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el RF-V18 envía datos de ubicación y eventos por GPRS TCP/IP al endpoint y puerto de Plaspy. Si la conectividad GPRS no está disponible, el dispositivo puede usar fallback por SMS para algunas alertas según el firmware y el soporte del proveedor.

- El RF-V18 se configura para reportar al endpoint y puerto compartido de Plaspy, por ejemplo d.plaspy.com en el puerto 8888.
- Las actualizaciones de posición (GPS A-GPS LBS) y los mensajes de evento como SOS y batería baja se transmiten a Plaspy vía GPRS.
- SMS puede usarse como canal de respaldo para alertas cuando GPRS no esté disponible; el manejo de SMS depende del firmware del dispositivo y las herramientas del proveedor.
- Plaspy recibe la telemetría y la pone a disposición para seguimiento en vivo, notificaciones de geocerca y reproducción histórica.
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que el servidor acepta paquetes estándar del RF-V18 en el puerto configurado.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Reachfar (app del proveedor, herramienta web o conjunto de comandos SMS documentados) para el RF-V18.
2. En la configuración del dispositivo, ingrese el servidor de Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888, que es el puerto utilizado por Plaspy para todos los dispositivos.
4. Elija UDP o TCP si la configuración del RF-V18 requiere seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración en el dispositivo o mediante la herramienta del proveedor.
6. Reinicie el RF-V18 si el dispositivo o las instrucciones del proveedor requieren un reinicio para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy confirmando que la primera posición y los eventos aparezcan en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El RF-V18 puede configurarse usando software del proveedor o cadenas de comandos SMS según el firmware y la versión del mercado. Los formatos exactos de los comandos varían según el fabricante y la revisión de firmware; consulte la documentación de Reachfar o la app del proveedor para comandos precisos. Plaspy requiere que el servidor configurado esté establecido como d.plaspy.com o 54.85.159.138 con puerto 8888 y el transporte elegido en UDP o TCP.

Si dispone de un conjunto de comandos SMS del proveedor para el RF-V18, siga la documentación del proveedor y reemplace los marcadores de servidor y puerto por los valores de Plaspy. Un formato de plantilla ilustrativa para configuración por SMS en la documentación del proveedor podría verse así (esto es un ejemplo genérico y no un comando específico del dispositivo):

- Plantilla de ejemplo estilo SMS (la documentación del proveedor puede usar un patrón similar)

```
SERVER,set,d.plaspy.com,8888
```

```
SERVER,set,54.85.159.138,8888
```

Si la documentación del proveedor usa marcadores para APN o credenciales, puede encontrar tokens como {{apn}}, {{apnu}} o {{apnp}}. Mantenga esos marcadores y sustituya los valores correctos del operador de su SIM al aplicar la configuración de APN.

## Notas de configuración

- El comportamiento del firmware y de las herramientas del proveedor puede cambiar los pasos exactos y los formatos de comando; siempre confirme con la documentación Reachfar correspondiente a la versión de firmware de su dispositivo.
- Elija UDP o TCP según las instrucciones del proveedor; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- El fallback por SMS depende del dispositivo. Si usted confía en SMS para alertas, verifique el soporte y comportamiento de comandos SMS en el manual del proveedor.
- Los ajustes del servidor Plaspy son compartidos entre dispositivos compatibles, por lo que se usa de forma consistente el mismo endpoint y puerto para simplificar el despliegue.
- Pruebe el dispositivo después de la configuración para confirmar que las alertas de ubicación, SOS y batería baja llegan a Plaspy según lo esperado.

## Por qué usar Plaspy con esta configuración

Usar el RF-V18 con Plaspy entrega a cuidadores y administradores visibilidad centralizada y casi en tiempo real de rastreadores personales. La forma compacta del RF-V18, su función SOS y la capacidad de voz bidireccional, junto con el reporte en la nube de Plaspy, permiten flujos de supervisión prácticos para seguridad infantil, cuidado de adultos mayores y supervisión temporal.

Para saber más sobre Plaspy e integración de dispositivos compatibles, visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, notas de firmware y herramientas del proveedor para el RF-V18, verifique los detalles en el sitio oficial de Reachfar https://www.reachfargps.com/ ya que las instrucciones del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
