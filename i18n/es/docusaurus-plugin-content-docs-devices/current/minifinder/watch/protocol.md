---
slug: /minifinder/watch/protocol
id: watch-protocol
sidebar_label: Protocol
title: MiniFinder - Watch Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del MiniFinder Watch y cómo se comunica con Plaspy para seguimiento y alertas fiables
keywords:
  - protocolo MiniFinder Watch
  - protocolo GPS MiniFinder Watch
  - protocolo MiniFinder Watch para Plaspy
  - protocolo de comunicación MiniFinder Watch
  - protocolo de rastreo MiniFinder Watch
  - protocolo rastreador GPS MiniFinder
  - protocolo wearable MiniFinder
  - MiniFinder Watch compatible con Plaspy
  - protocolo de telemetría MiniFinder Watch
  - integración MiniFinder Watch
---

# MiniFinder - Protocolo del Watch

Esta página describe, a nivel público, el contexto del protocolo que usa el MiniFinder Watch para comunicarse con la plataforma Plaspy. El enfoque está en cómo el dispositivo transmite información en términos generales para que administradores, integradores y usuarios técnicos comprendan la relación de conexión e informe entre el Watch y Plaspy sin exponer detalles internos del firmware.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según la versión de firmware, las revisiones de hardware y la implementación del fabricante; por eso esta página se mantiene en un nivel público e independiente de la implementación, describiendo los elementos comunes relevantes para una integración exitosa.

## Visión general del protocolo

El protocolo de comunicación del dispositivo es el conjunto de reglas que sigue el MiniFinder Watch para enviar ubicación, telemetría y eventos a un servicio backend como Plaspy. Para efectos de integración, el propósito del protocolo es entregar datos utilizables desde el wearable hacia la nube, de modo que Plaspy pueda mostrar posiciones, alertas y estado a cuidadores y equipos de monitoreo.

- Permite que el Watch transmita puntos de ubicación, eventos SOS, alertas de caída y telemetría de salud al backend.
- Provee identificación del dispositivo y contexto de sesión para que Plaspy asocie los datos entrantes con la cuenta y el registro de dispositivo correctos.
- Transporta información de tiempo de eventos y lecturas básicas de sensores que Plaspy consume para paneles, alertas y registros.
- Soporta comandos de configuración y gestión remota cuando el fabricante y la plataforma habilitan actualizaciones y cambios de parámetros a distancia.
- Une múltiples opciones de transporte para que los dispositivos puedan entregar datos de forma fiable sobre enlaces celulares o locales que soporten.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para recibir conexiones entrantes en un endpoint compartido e identificar automáticamente el protocolo del rastreador. Cuando un MiniFinder Watch correctamente configurado reporta a Plaspy, la plataforma asocia el flujo entrante con el dispositivo correspondiente y procesa los datos sin que sea necesaria la selección manual del protocolo en la mayoría de los despliegues.

- Plaspy escucha el tráfico de dispositivos en el endpoint compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador para los modelos soportados.
- Si el Watch está configurado para enviar datos al endpoint de Plaspy, generalmente no se requiere selección manual del protocolo dentro de Plaspy.
- La identidad del dispositivo y los campos comunes de reporte permiten a Plaspy mapear los mensajes a los registros de dispositivos y activar alertas o la ingesta de telemetría.
- Los administradores deben asegurarse de que los ajustes de reporte del dispositivo coincidan con los valores de conexión de Plaspy para que la detección automática funcione correctamente.

## Transporte y contexto de conexión

El transporte y la dirección de conexión determinan cómo el Watch llega hasta Plaspy para reportes en tiempo real. El MiniFinder Watch puede usar enlaces celulares y radios locales para posicionamiento, pero el reporte al backend por lo general se envía sobre transportes IP estándar soportados por el firmware del dispositivo.

- El Watch puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración del carrier o firmware.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 como destino de Plaspy.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para simplificar despliegues y aprovisionamiento.
- La selección del transporte puede afectar características de entrega como latencia y comportamiento de retransmisión; elija el modo soportado por el dispositivo y la red.
- Asegúrese de que cualquier APN del operador o reglas de firewall permitan tráfico saliente hacia el endpoint y puerto de Plaspy para habilitar reportes sin interrupciones.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos de telemetría o las funciones disponibles; confirme la versión de firmware al validar el comportamiento.
- Variantes de hardware y modelos regionales pueden diferir en los transportes o en los juegos de sensores soportados, por lo que debe verificar el modelo y SKU del dispositivo con la guía del fabricante.
- La elección de transporte (UDP vs TCP) la determina el firmware y la configuración del dispositivo; revise los ajustes del equipo para que coincidan con los requisitos de conexión de Plaspy.
- La detección automática de protocolos de Plaspy reduce la configuración manual, pero la correcta dirección y configuración de puerto del dispositivo siguen siendo esenciales.
- Las funciones de gestión remota del fabricante y las actualizaciones FOTA pueden modificar el comportamiento del protocolo con el tiempo; coordine las actualizaciones cuando sea posible.
- En despliegues dentro de centros de cuidado, considere opciones de posicionamiento interior como balizas o Wi Fi junto con GNSS para mejorar la precisión a nivel de habitación.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Watch con Plaspy ayuda a garantizar la entrega fiable de ubicaciones y alertas, agiliza la resolución de problemas y facilita la mantenibilidad a largo plazo de las flotas de dispositivos.

- Permite verificar que los dispositivos apuntan al endpoint y puerto correctos de Plaspy para que los datos lleguen a la plataforma.
- Ayuda en la resolución de problemas cuando los dispositivos no aparecen en Plaspy, ya que permite acotar fallas a transporte, direccionamiento o cambios de firmware.
- Apoya la planificación de actualizaciones de firmware, cambios de operador o reemplazos de hardware que puedan afectar el comportamiento de reporte.
- Garantiza que las funciones de alertas y telemetría como SOS, detección de caídas y sensores de salud se integren correctamente en los flujos de trabajo de Plaspy.
- Mejora la confiabilidad operativa al alinear la configuración del dispositivo, las políticas de red y las expectativas de ingestión de Plaspy.

## Por qué usar Plaspy con este protocolo

Integrar el MiniFinder Watch con Plaspy ofrece a cuidadores y organizaciones visibilidad centralizada de ubicación en tiempo real, telemetría de salud y alertas de incidentes provenientes de wearables. En entornos que requieren monitoreo continuo y respuesta rápida a incidentes, incorporar el Watch en Plaspy proporciona una vista única para el enrutamiento de eventos, revisión histórica y gestión de alertas sin necesidad de backend a medida.

Para obtener más información sobre Plaspy y cómo puede usarse el MiniFinder Watch dentro de la plataforma visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que se recomienda verificar la información más reciente del protocolo y firmware específico del fabricante en https://minifinder.se/.
