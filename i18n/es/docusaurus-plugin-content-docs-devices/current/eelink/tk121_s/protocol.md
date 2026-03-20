---
slug: /eelink/tk121_s/protocol
id: tk121_s-protocol
sidebar_label: Protocol
title: EElink - TK121‑S Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública de protocolo para EElink TK121 S y compatibilidad con Plaspy, con detalles de conexión y transporte
keywords:
  - Protocolo EElink TK121 S
  - Protocolo GPS EElink TK121 S
  - Protocolo MoveLink 1.9
  - Protocolo MoveLink 2.0
  - Protocolo de rastreo TK121 S
  - Compatibilidad EElink Plaspy
  - Comunicación rastreador GPS
  - Protocolo de seguimiento de vehículos
  - Telemetría TK121 S
  - Rastreo de flotas Plaspy
---

# EElink - Protocolo TK121‑S

Esta página describe el contexto público del protocolo para usar el rastreador EElink TK121‑S con Plaspy. Se centra en cómo el dispositivo comunica datos de telemetría y eventos típicos a la plataforma, qué papel cumple el protocolo del rastreador en ese intercambio y en los detalles prácticos de conexión que debe conocer al integrar el equipo.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página debe entenderse como contexto de protocolo y no como una especificación completa.

## Descripción general del protocolo

El TK121‑S comunica ubicación, estado y eventos de alarma mediante el protocolo de rastreador que soporta el dispositivo. En la práctica, esto significa que el equipo envía actualizaciones periódicas de posición, mensajes desencadenados por eventos (ACC, movimiento, geocerca y alarmas) y puede aceptar comandos de configuración remota cuando el fabricante y el firmware lo permiten.

- El protocolo del dispositivo define el formato y la cadencia de los reportes de posición GPS y LBS que Plaspy utiliza para mostrar la ubicación en tiempo real.
- Los mensajes del protocolo incluyen banderas de evento como el estado de encendido ACC, alarmas de velocidad y desplazamiento, y disparos de geocerca para que Plaspy pueda generar alertas.
- El soporte de configuración remota y comandos en MoveLink 1.9/2.0 permite cambios de ajustes y gestión desde la plataforma cuando el firmware expone esas capacidades.
- El protocolo facilita la identificación y asociación del equipo para que Plaspy pueda mapear los datos entrantes al registro correcto de vehículo o activo.
- Una configuración adecuada del protocolo y del transporte garantiza la entrega fiable de telemetría y permite informes históricos y reproducción de rutas en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar datos de muchos modelos de rastreadores e identificar automáticamente el protocolo entrante cuando un dispositivo informa a la plataforma. En la mayoría de las implementaciones no es necesario seleccionar el protocolo manualmente dentro de Plaspy, siempre que el rastreador esté configurado para reportar al endpoint correcto de Plaspy.

- Plaspy escucha en un único endpoint y puerto compartidos para todos los dispositivos compatibles, lo que simplifica la configuración y reduce errores.
- Cuando el TK121‑S está configurado para reportar a Plaspy, la plataforma detectará que el rastreador usa MoveLink 1.9/2.0 o un modo compatible y procesará los mensajes en consecuencia.
- La detección automática evita la necesidad de preconfigurar un protocolo en la mayoría de los casos, siempre que el dispositivo envíe telemetría reconocible al endpoint de Plaspy.
- Si un dispositivo no se registra o no informa como se espera, lo habitual es revisar el firmware del equipo, la configuración del APN y la selección de transporte (TCP vs UDP) como pasos de resolución de problemas.
- La detección automática de Plaspy está diseñada para agilizar la incorporación de dispositivos sin impedir las anulaciones manuales en despliegues inusuales o personalizados.

## Contexto de transporte y conexión

La configuración del transporte determina cómo el TK121‑S entrega sus mensajes de protocolo a Plaspy. El rastreador soporta modos de transporte IP estándar y puede apuntar a Plaspy usando el host o la dirección IP y el puerto documentados.

- El TK121‑S puede configurarse para usar UDP o TCP según el firmware y las opciones del dispositivo; ambos transportes son compatibles para el reporte a Plaspy.
- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y también en la dirección numérica 54.85.159.138 para entornos que requieran una IP directa.
- Plaspy utiliza el puerto 8888 para las conexiones de dispositivos y todos los equipos en Plaspy usan el mismo puerto para simplificar la configuración.
- Configure el APN y los parámetros del servidor de reporte en el rastreador para que los mensajes periódicos y los generados por eventos lleguen de forma fiable al endpoint de Plaspy.
- Al elegir entre UDP o TCP, considere las características de su red y las políticas del operador o firewall que puedan afectar la entrega de paquetes.

## Notas sobre compatibilidad del protocolo

- MoveLink 1.9/2.0 es el modo de reporte documentado para el TK121‑S según la descripción suministrada; el comportamiento del dispositivo depende del firmware que implemente MoveLink.
- Las actualizaciones de firmware pueden modificar tipos de mensajes, comandos soportados y opciones de configuración remota, por lo que debe verificar el comportamiento tras cambios de firmware.
- Las revisiones de hardware y las variantes por región pueden alterar las E/S disponibles o las bandas de radio, aunque típicamente usan la misma familia de protocolo de reporte.
- La elección del transporte (TCP vs UDP) puede afectar las garantías de entrega y cómo se gestionan las retransmisiones por parte del dispositivo y la red.
- Configuraciones realizadas por el fabricante o personalizaciones del operador pueden introducir diferencias de compatibilidad que requieren validación antes de un despliegue masivo.
- Siempre valide el APN, la dirección del servidor y la configuración de transporte del equipo antes de confiar en flujos de trabajo productivos de larga duración.

## Por qué es importante comprender el protocolo

Comprender cómo comunica el TK121‑S ayuda a asegurar una incorporación exitosa, operaciones confiables y una resolución de problemas más eficaz cuando usa Plaspy. Tener claro el contexto del protocolo y del transporte reduce el tiempo de despliegue y facilita la identificación de la causa raíz cuando faltan datos o no se reportan eventos.

- Le ayuda a confirmar que la posición, el estado ACC y los eventos de alarma se están entregando a Plaspy según lo esperado.
- Facilita determinar si un problema es de red, de transporte o causado por el firmware del dispositivo.
- Permite planificar flujos de trabajo de configuración remota y comandos que dependan del soporte MoveLink en el firmware instalado.
- Orienta la decisión entre UDP o TCP según cobertura, comportamiento del operador y necesidades de entrega de mensajes.
- Reduce el tiempo de integración alineando la configuración del equipo con el endpoint compartido de Plaspy y su detección automática de protocolos.

## Por qué usar Plaspy con este protocolo

Usar el TK121‑S con Plaspy brinda a los administradores de flotas y activos un camino eficiente hacia el rastreo en tiempo real, la monitorización del encendido y las alertas de eventos sin configuraciones complejas por dispositivo. El soporte MoveLink del rastreador, combinado con el modelo de endpoint compartido de Plaspy y la detección automática de protocolo, simplifica despliegues a gran escala y la gestión continua de equipos.

Para saber más sobre Plaspy, visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo más actualizados, notas de firmware y orientación de implementación, verifique la información en el sitio del fabricante https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
