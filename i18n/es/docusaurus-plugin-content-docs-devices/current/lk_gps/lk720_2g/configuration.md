---
slug: /lk_gps/lk720_2g/configuration
id: lk720_2g-configuration
sidebar_label: Configuration
title: LK-GPS - LK720-2G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador LK720-2G y apuntarlo a Plaspy, con pasos prácticos para validar la conectividad
keywords:
  - LK-GPS LK720-2G
  - configuración LK720-2G
  - configuración LK-GPS
  - configuración rastreador Plaspy
  - configuración Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - configuración LK720 para Plaspy
  - integración plataforma GPS
  - configuración rastreador GPS 2G
---

# LK-GPS - Configuración LK720-2G

Esta página describe el contexto público de configuración para usar el rastreador LK-GPS LK720-2G con la plataforma de seguimiento Plaspy. Reúne la información práctica y pública que necesita para apuntar el dispositivo a Plaspy, validar la conectividad y habilitar la visualización en el panel y las aplicaciones de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LK720-2G admite configuración por SMS como método alternativo y también funciona con gestión por navegador y aplicaciones móviles nativas, por lo que puede usar el método que mejor se adapte a su despliegue y al firmware del equipo.

## Resumen de la configuración

Esta configuración prepara el LK720-2G para reportar ubicación y telemetría a Plaspy, de modo que los vehículos aparezcan en la plataforma para seguimiento en vivo, historial de rutas y alertas. El objetivo principal es configurar el rastreador con la información del servidor Plaspy, verificar la selección del transporte si es necesario y confirmar que los reportes llegan al servicio de Plaspy.

- Configure el dispositivo para enviar datos a Plaspy usando el endpoint y puerto compartidos de Plaspy.
- Verifique la selección del transporte (UDP o TCP) si el rastreador requiere elección explícita.
- Use SMS como alternativa o las herramientas web o móviles del fabricante cuando la conectividad de datos sea limitada.
- Valide que el rastreador aparezca en Plaspy y que se reciba telemetría como nivel de batería y alarmas.
- Guarde y aplique los ajustes y reinicie el dispositivo si el procedimiento del fabricante lo exige.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los endpoints públicos y el puerto que Plaspy usa para todos los dispositivos en la plataforma. Configure el LK720-2G para enviar sus reportes a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y elija UDP o TCP según la interfaz de configuración del dispositivo.

## Requisitos previos típicos

- Un dispositivo LK720-2G correctamente alimentado e instalado con acceso a su método de configuración
- Una tarjeta SIM GSM 2G compatible y un plan de datos o SMS activo según lo requiera su despliegue
- Acceso a la interfaz de configuración del fabricante o instrucciones para ajustar parámetros por SMS
- Una cuenta o instancia de flota en Plaspy donde se registrará y monitorizará el dispositivo
- Herramientas básicas para aplicar ajustes y, si es necesario, reiniciar el dispositivo tras la configuración
- Confirmación de disponibilidad de la red 2G en la región y compatibilidad del operador con la SIM

## Cómo se conecta este rastreador a Plaspy

El LK720-2G transmite coordenadas GPS y telemetría del dispositivo a través de la red GSM 2G y se configura para reportar al endpoint y puerto compartidos de Plaspy. Una vez correctamente apuntado al servidor Plaspy, la plataforma recibe el protocolo del rastreador y comienza a mostrar ubicación, historial y alertas sin cambios adicionales en el servidor.

- El rastreador envía paquetes periódicos de posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy acepta conexiones por UDP o TCP y detecta automáticamente el protocolo del rastreador
- La telemetría como estado de batería, alarmas de movimiento y estado de relé se reenvía a la plataforma Plaspy
- Alarmas por impacto y movimiento se envían a Plaspy para activar notificaciones o flujos de trabajo
- Los comandos de parámetros por SMS pueden usarse como método secundario de configuración cuando la conectividad de datos es limitada

## Flujo de configuración común

1. Acceda al método oficial de configuración de LK-GPS o al software del proveedor para el LK720-2G (herramienta web, app móvil o comandos SMS).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo según la interfaz del fabricante.
3. Configure el puerto del dispositivo en 8888 tal como lo requiere Plaspy.
4. Seleccione UDP o TCP si el equipo exige elegir el transporte explícitamente.
5. Guarde o aplique la configuración en la herramienta del dispositivo o envíe los comandos SMS de configuración si utiliza SMS.
6. Reinicie el rastreador si las instrucciones del fabricante indican que es necesario para aplicar los ajustes.
7. Valide que el dispositivo informe a Plaspy revisando la lista de dispositivos o la vista en tiempo real en su cuenta Plaspy y confirmando que llegan actualizaciones como ubicación y estado de batería.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta para el LK720-2G dependen del firmware del fabricante y del método de configuración que utilice. Algunas instalaciones usan comandos SMS, otras usan herramientas web o móviles del proveedor. Dado que el LK720-2G admite configuración por SMS como alternativa, consulte el manual del dispositivo para el formato preciso de los comandos SMS y los marcadores de posición.

Si recibe comandos SMS proporcionados por el fabricante o una lista de comandos, aplíquelos en el orden indicado por el fabricante y conserve cualquier marcador de posición como APN o valores de cuenta. Explicación de marcador de posición de ejemplo: si un comando incluye {{apn}} o similar, reemplace ese marcador por la cadena APN de su operador SIM.

## Notas de configuración

- Las revisiones de firmware y hardware regionales pueden cambiar la sintaxis de los comandos y la disponibilidad de funciones; siempre verifique el manual del dispositivo para la versión de firmware que tiene.
- Elija TCP o UDP según la interfaz del dispositivo; Plaspy acepta ambos y realizará la detección automática del protocolo en las conexiones entrantes.
- La configuración por parámetros SMS es un respaldo útil cuando la conectividad de datos es intermitente; confirme que su plan de SIM permite SMS y datos según sea necesario.
- Asegúrese de que la tarjeta SIM esté activa en una red 2G donde el servicio 2G sea requerido y esté disponible.
- Mantenga la documentación del fabricante a la mano durante la configuración para seguir cualquier paso específico del dispositivo necesario para aplicar o preservar los ajustes.

## Por qué usar Plaspy con esta configuración

Configurar el LK720-2G para reportar a Plaspy proporciona una vía práctica para obtener ubicación en tiempo real, historial de rutas y visibilidad de alarmas en una única plataforma de gestión de flotas. Para propietarios y gestores de flotas que necesitan funciones antirrobo, como el mini relé inmovilizador y las alarmas por impacto, la integración con Plaspy permite monitorear los dispositivos, recibir alertas y tomar acciones operativas desde el panel y las aplicaciones de Plaspy.

Learn more about Plaspy and how it handles device connectivity, monitoring, and reporting at https://www.plaspy.com. Manufacturer specifications, setup methods, and device behavior can change over time, so please verify the latest device-specific configuration details on the LK-GPS website https://www.lk-gps.com.
