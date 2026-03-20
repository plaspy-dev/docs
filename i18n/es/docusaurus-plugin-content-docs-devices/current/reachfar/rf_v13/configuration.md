---
slug: /reachfar/rf_v13/configuration
id: rf_v13-configuration
sidebar_label: Configuration
title: Reachfar - RF-V13 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Reachfar RF V13 para enviar alarmas y ubicaciones a Plaspy vía GPRS TCP IP o SMS usando la configuración de servidor compartido
keywords:
  - Configuración Reachfar RF V13
  - Configurar Reachfar RF V13
  - Configuración servidor Reachfar RF V13
  - Integración RF V13 Plaspy
  - Configuración rastreador GPS Reachfar
  - Configuración GPRS RF V13
  - Configuración alarma puerta ventana
  - Reporte SMS RF V13
  - Configuración rastreador Plaspy
  - Configuración software seguimiento RF V13
---

# Reachfar - Configuración del RF-V13

Esta página documenta el contexto público de configuración para usar el Reachfar RF-V13 con Plaspy. Se enfoca en los ajustes prácticos y el flujo necesarios para encaminar los reportes de alarma y ubicación del RF-V13 hacia Plaspy. El RF-V13 es un sensor compacto para puertas y ventanas que puede enviar paquetes GPRS TCP IP o mensajes SMS formateados; cuando se configura correctamente puede entregar eventos de intrusión, datos de posición por LBS o GPS y estado del equipo a Plaspy para alertas centralizadas y registro.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el comportamiento en la plataforma es consistente. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta de configuración de Reachfar. Use esta guía para los pasos públicos comunes necesarios para apuntar un RF-V13 a Plaspy y verificar que los eventos lleguen a la plataforma, y consulte la documentación del fabricante para comandos y notas específicas del firmware.

## Resumen de la configuración

Esta configuración prepara el RF-V13 para comunicarse con Plaspy de modo que los eventos de alarma y los reportes de posición aparezcan en su cuenta Plaspy. El objetivo principal es apuntar el RF-V13 al endpoint compartido de Plaspy y confirmar un envío fiable por el transporte seleccionado.

- Establezca el destino de reporte del dispositivo a Plaspy usando la dirección de servidor o IP compartida y el puerto común de Plaspy.
- Elija UDP o TCP en el dispositivo si solicita un transporte y guarde la selección.
- Verifique que el reporte por GPRS o SMS esté habilitado y que el dispositivo tenga una conexión celular funcional.
- Confirme que el dispositivo esté enviando eventos y que Plaspy detecte e interprete el protocolo entrante.
- Valide los mensajes de alarma, apertura/cierre y ubicación en Plaspy tras un cambio de configuración.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el RF-V13 para el reporte a la plataforma:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure whichever transport the device requires
- Plaspy automatically detects the tracker protocol and the platform uses the same port for all supported devices

## Requisitos previos antes de la configuración

- Batería del dispositivo cargada y el RF-V13 montado o con alimentación para la configuración.
- Tarjeta SIM activa con voz, SMS o datos GPRS según el método de reporte que vaya a usar.
- Conocimiento del APN de su operador móvil si necesita habilitar datos GPRS en el equipo.
- Acceso al método oficial de configuración Reachfar, como comandos SMS o la plataforma móvil Reachfar cuando esté disponible.
- Un plan de pruebas para disparar eventos de puerta/ventana y confirmar que los mensajes de ubicación o alarma llegan a Plaspy.
- Acceso administrativo a su cuenta Plaspy para ver mensajes entrantes y habilitar notificaciones.

## Cómo se conecta este rastreador a Plaspy

Cuando el RF-V13 se configura para usar Plaspy, envía eventos de alarma y actualizaciones de posición al endpoint y puerto compartidos de Plaspy. Plaspy registra marcas de tiempo y mapea los datos entrantes, aplica reglas del cliente y entrega alertas según la configuración en la plataforma.

- El dispositivo transmite paquetes de eventos o telemetría por GPRS TCP IP a la dirección y puerto de Plaspy.
- Si está configurado para reporte por SMS, los mensajes SMS formateados se reenvían a Plaspy para ingestión cuando su cuenta y flujo de trabajo lo permiten.
- Plaspy recibe los datos entrantes en el puerto 8888 y detecta automáticamente el protocolo o formato de mensaje del RF-V13.
- Eventos como apertura/cierre del sensor magnético y estado de batería se registran y se muestran en Plaspy para monitoreo.
- Una vez activo el reporte, el dispositivo se vuelve visible en Plaspy y puede generar alertas basadas en sus reglas.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración Reachfar para el RF-V13, como el conjunto de comandos SMS del fabricante o la app de configuración Reachfar.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Establezca el puerto de destino en 8888 como el puerto de reporte del dispositivo.
4. Si el dispositivo solicita una selección de transporte, elija UDP o TCP según su preferencia de instalación o las opciones del equipo.
5. Aplique o guarde la configuración en el RF-V13 siguiendo el procedimiento del fabricante.
6. Reinicie el dispositivo si la documentación de Reachfar indica que es necesario para aplicar cambios de red.
7. Valide que el RF-V13 reporte a Plaspy provocando una alarma de prueba o una actualización de ubicación y confirmando que el evento sea visible en su cuenta Plaspy. Recuerde que Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador.

## Ejemplos de comandos de configuración

El RF-V13 admite configuración mediante comandos SMS Reachfar o herramientas del proveedor, y la sintaxis exacta de los comandos varía según el firmware y la versión regional. Dado que los conjuntos de comandos y parámetros difieren entre versiones de firmware, consulte la documentación oficial de Reachfar o a su proveedor del dispositivo para las cadenas SMS precisas o los pasos en la app necesarios para establecer el host del servidor, la IP del servidor, el puerto 8888 y el transporte UDP o TCP. En el lado de Plaspy no se requieren cambios de puerto por dispositivo porque Plaspy utiliza el mismo puerto para todos los equipos y realiza detección automática de protocolo.

## Notas de configuración

- Diferentes revisiones de firmware del RF-V13 pueden usar formatos de comando SMS o menús de configuración distintos; confirme la sintaxis exacta con la documentación de Reachfar.
- Elegir TCP o UDP puede afectar el comportamiento de entrega; TCP ofrece entrega orientada a conexión mientras que UDP puede usarse para envíos de paquetes más simples según el firmware del dispositivo.
- Si usa reporte por GPRS, verifique APN y conectividad de datos antes de las pruebas finales; APN faltante o SIMs bloqueadas son causas comunes de fallos en la entrega.
- La configuración y el reporte por SMS suelen estar soportados para mensajes de alarma y ubicación; revise los ejemplos SMS del fabricante al aplicar cambios.
- Siempre guarde y, si es necesario, reinicie el dispositivo después de cambiar servidor, puerto o transporte para asegurar que la nueva configuración esté activa.

## Por qué usar Plaspy con esta configuración

Conectar el Reachfar RF-V13 a Plaspy brinda una vista centralizada de los eventos de alarma en puertas y ventanas, además de contexto de ubicación aproximada cuando hay datos LBS o GPS disponibles. Para sitios pequeños, comercios y activos móviles donde las alertas perimetrales discretas y la verificación de dos vías importan más que la telemetría en alta frecuencia continua, esta integración aporta registro de eventos, contexto de ubicación con marca de tiempo y entrega de alertas en una sola plataforma para facilitar la gestión de incidentes y la revisión histórica.

Learn more about Plaspy and platform features at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup information and command syntax on the Reachfar official website https://www.reachfargps.com/ before deployment.
