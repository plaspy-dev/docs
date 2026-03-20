---
slug: /gotop/g32/configuration
id: g32-configuration
sidebar_label: Configuration
title: GOTOP - G32 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el mini rastreador GPS GOTOP G32 con Plaspy usando servidor compartido y detección de protocolo
keywords:
  - GOTOP G32 configuración
  - GOTOP G32 instalación
  - G32 configuración servidor
  - G32 configuración Plaspy
  - rastreador GPS para mascotas configuración
  - configuración plataforma GOTOP
  - configuración software seguimiento G32
  - integración rastreador Plaspy
  - ajustes servidor rastreador GPS
  - compatibilidad rastreador mascota Plaspy
---

# GOTOP - G32 Configuración

Esta página describe el contexto de configuración pública para usar el mini rastreador GPS GOTOP G32 con Plaspy. Resume los ajustes de servidor y los pasos prácticos que normalmente usará para reenviar datos de ubicación y eventos a Plaspy, y explica cómo las funciones principales del dispositivo como reportes por SMS y 4G, posicionamiento AGPS, reenvío de datos acumulados en zonas sin cobertura y las alertas trabajan junto a una plataforma centralizada de seguimiento.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, el tipo de instalación y las herramientas del proveedor. Esta guía se concentra en los ajustes a nivel de plataforma que debe aplicar para que el G32 envíe telemetría a Plaspy, recordándole consultar la documentación de GOTOP para menús y comportamiento específico del firmware.

## Resumen de la configuración

Configurar el G32 para Plaspy prepara el rastreador para enviar su ubicación, eventos y alertas a un único endpoint de Plaspy para que los datos aparezcan en su panel de Plaspy en tiempo real y en el historial. Dado que Plaspy usa el mismo puerto de servidor para todos los dispositivos compatibles y detecta el protocolo automáticamente, la mayor parte del trabajo se realiza en el equipo: apúntelo al servidor de Plaspy, elija el transporte si es necesario y verifique las transmisiones.

- Proporcione al G32 la dirección correcta del servidor Plaspy para que las actualizaciones se envíen a la plataforma.
- Asegúrese de que el dispositivo tenga conectividad celular y el APN o los ajustes SMS correctos según requiera el reporte por 4G o por SMS.
- Seleccione el transporte UDP o TCP en el equipo si la herramienta de configuración lo solicita.
- Establezca el puerto del servidor (Plaspy usa un puerto compartido) y guarde la configuración del dispositivo.
- Valide que las actualizaciones de ubicación, eventos de geocerca y alertas de batería baja aparezcan en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be selected on the device if required
- Plaspy automatically detects the tracker protocol and accepts connections on the shared port

## Requisitos habituales antes de la configuración

- Un G32 cargado con la batería en buen estado y el dispositivo encendido.
- Una tarjeta SIM con plan de datos activo o capacidad de SMS, según vaya a usar reportes por 4G o por SMS.
- Acceso al método oficial de configuración GOTOP para el G32 (app del fabricante, conjunto de comandos SMS o herramienta web).
- El IMEI del dispositivo o identificador único para poder confirmar el rastreador específico en Plaspy después de la conexión.
- Confirmación del APN y ajustes del operador si va a utilizar datos móviles para reportes 4G.
- Herramientas básicas de prueba, como un teléfono móvil para enviar/recibir SMS o una laptop para pruebas con tethering.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para trabajar con Plaspy, el G32 envía sus mensajes de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que los datos sean visibles y se almacenen en la interfaz de Plaspy. La detección automática de protocolo de Plaspy significa que, por lo general, solo necesita apuntar el equipo al dominio o IP del servidor Plaspy y establecer el puerto; la plataforma interpretará el protocolo del rastreador.

- El G32 puede enviar actualizaciones de ubicación en tiempo real por 4G o reenviar mensajes vía SMS cuando está configurado para ello.
- Informes de eventos como entrada o salida de geocercas, alarmas por movimiento y batería baja se reenvían a Plaspy como alertas.
- El reenvío de datos acumulados en zonas sin cobertura (GPRS blind-area re-upload) asegura que los puntos en búfer se envíen a Plaspy una vez recuperada la señal, manteniendo continuidad en las trayectorias.
- El dispositivo reporta al endpoint del servidor Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888 y Plaspy detecta el protocolo del dispositivo automáticamente.
- Usar el mismo puerto entre dispositivos simplifica la configuración y el manejo del servidor en Plaspy.

## Flujo de configuración común

1. Acceda al método oficial de configuración GOTOP para el G32 (app del fabricante, guía de comandos SMS o herramienta de configuración).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del servidor del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia o la recomendación del fabricante.
5. Verifique el APN y los ajustes celulares si usa 4G, o confirme el comportamiento de destino SMS si utiliza reportes por SMS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el G32 o la herramienta del fabricante lo requieren.
7. Valide que el G32 reporte a Plaspy comprobando que el dispositivo aparece en su panel de Plaspy y que se reciben mensajes de ubicación o eventos recientes.

## Ejemplos de comandos de configuración

El G32 admite métodos de configuración por SMS y por 4G según la documentación del fabricante. Los comandos exactos y la sintaxis para la configuración vía SMS o mediante la app del proveedor varían según el firmware y la región. Dado que los métodos difieren entre versiones de firmware y herramientas de configuración, consulte la guía de configuración GOTOP que acompaña al dispositivo para la sintaxis precisa de comandos SMS o los pasos en la app.

Plaspy requiere apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y usar el puerto 8888. Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo envíe datos a ese host y puerto.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús, los formatos de comandos SMS y el comportamiento del transporte; siempre verifique la versión de firmware del G32 antes de aplicar una lista de comandos.
- Elegir UDP frente a TCP puede afectar la entrega en redes con mala calidad; pruebe ambos transportes si su instalación experimenta pérdida de paquetes o problemas de retransmisión.
- Plaspy usa un solo puerto compartido para todos los dispositivos y efectúa detección automática de protocolos, así que enfoque la configuración en los valores correctos de host y puerto.
- Si configura el equipo por SMS, espere varios segundos para que los comandos se procesen y verifíquelos mediante un informe de ubicación de prueba.
- Mantenga a mano la documentación de GOTOP para opciones específicas del dispositivo, como reenvío de datos en zonas sin cobertura, activación de monitorización por voz y umbrales de alarma.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G32 con Plaspy centraliza la ubicación de la mascota, las alertas y el historial en una sola plataforma para que propietarios y cuidadores puedan ver rápidamente la posición en vivo, eventos de geocerca y advertencias de batería. El soporte AGPS del G32, el reenvío de datos en zonas sin cobertura y su diseño compacto lo hacen práctico para rastrear mascotas, mientras que Plaspy agrega y presenta esa telemetría para facilitar la supervisión y la respuesta ante incidentes.

To learn more about Plaspy and how it centralizes tracking for devices like the GOTOP G32, visit https://www.plaspy.com. For the most current device-specific configuration commands, firmware notes, and manufacturer guidance, verify details on the official GOTOP website https://www.gotop.cc/ as setup methods and firmware behavior can change over time.
