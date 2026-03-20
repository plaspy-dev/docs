---
slug: /itriangle/ux101_al/protocol
id: ux101_al-protocol
sidebar_label: Protocol
title: iTriangle - UX101-AL++ Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del iTriangle UX101-AL++ que explica cómo el dispositivo comunica ubicación y telemetría a Plaspy
keywords:
  - protocolo iTriangle UX101-AL++
  - protocolo GPS iTriangle UX101-AL++
  - compatibilidad UX101-AL++ con Plaspy
  - comunicación rastreador GPS
  - protocolo telemático vehicular
  - protocolo rastreador AIS 140
  - protocolo de seguimiento de flotas
  - protocolo dispositivo telemático
  - rastreador compatible con Plaspy
  - protocolo de localización vehicular
---

# iTriangle - Protocolo UX101-AL++

Esta página ofrece una visión pública y de alto nivel sobre el contexto del protocolo de comunicación para usar el iTriangle UX101-AL++ con Plaspy. Describe cómo el rastreador informa ubicación, telemetría y eventos a Plaspy sin exponer detalles privados de los parsers ni internals de firmware. Use esta información como referencia práctica para integración y solución de problemas junto con la documentación oficial del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo correctamente configurado reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre confirme los detalles específicos del dispositivo con el fabricante cuando sea necesario.

## Visión general del protocolo

El protocolo del dispositivo define cómo el UX101-AL++ comunica posición, diagnósticos CAN, eventos de sensores y estados a un servidor remoto como Plaspy. En términos prácticos, el protocolo permite que el rastreador se identifique, proporcione posiciones GNSS oportunas, envíe telemetría y notificaciones de eventos, y soporte flujos de trabajo de gestión remota.

- Permite actualizaciones periódicas y basadas en eventos de ubicación y la entrega de telemetría a Plaspy
- Transporta diagnósticos del vehículo y datos de sensores desde interfaces Dual CAN para su ingestión por Plaspy
- Transmite eventos de manipulación, extracción de batería y encendido/despertar para alertas de seguridad y operativas
- Soporta fuentes locales inalámbricas como BLE y Wi‑Fi como canales complementarios de telemetría
- Permite señales de gestión OTA del dispositivo o del ECU cuando el fabricante lo soporta

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores usando un endpoint y puerto comunes y detectar automáticamente el protocolo de reporte. Cuando un UX101-AL++ se configura para reportar a Plaspy, normalmente no se requiere seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy expone un endpoint servidor compartido para los reportes de dispositivos y simplificar la configuración
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador
- La configuración adecuada del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para la detección automática
- La detección se basa en transportes y handshakes de mensajes públicamente observables en lugar de exponer detalles internos del parser
- Si surgen problemas de detección, revisar la configuración de reporte del dispositivo y la versión de firmware es un primer paso práctico

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el rastreador se conecta a Plaspy más que los detalles privados de codificación de mensajes. El UX101-AL++ soporta transportes de red comunes y puede configurarse para reportar al dominio del servidor Plaspy o a su IP pública.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y la configuración local
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para dispositivos que requieren un objetivo IP
- El puerto para conexiones de dispositivos a Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Seleccione UDP o TCP en función de la capacidad del dispositivo, la fiabilidad de la red y las recomendaciones del fabricante
- Mantenga la configuración de conexión alineada con las reglas del operador y del firewall para que el rastreador pueda alcanzar d.plaspy.com o la IP indicada

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden añadir, quitar o modificar funciones y el comportamiento de los mensajes; verifique el nivel de firmware al validar compatibilidad
- Las revisiones de hardware y los módulos accesorios opcionales pueden cambiar los canales de telemetría disponibles, como datos CAN o BLE
- La selección de transporte (UDP frente a TCP) es una elección de configuración que puede afectar las garantías de entrega y debe coincidir con lo que soporte el dispositivo
- Los comandos o herramientas de configuración del fabricante son la fuente autorizada para habilitar el reporte hacia un endpoint externo
- Plaspy detecta automáticamente el tipo de protocolo, pero el ajuste correcto del endpoint y el puerto en el dispositivo es imprescindible para una detección exitosa
- Valide cualquier característica avanzada como VFOTA e interacción con ECU según la documentación oficial del fabricante antes de su uso

## Por qué es importante comprender el protocolo

Entender cómo el UX101-AL++ se comunica con Plaspy facilita una configuración correcta, una resolución más rápida de problemas y operaciones confiables a largo plazo. Una visión clara de las expectativas de protocolo y transporte reduce el tiempo de integración y apoya la continuidad operativa.

- Asegura que la configuración de reporte del dispositivo apunte al endpoint y puerto correctos de Plaspy
- Ayuda a diagnosticar problemas de conectividad relacionados con la red, el firewall o restricciones del operador
- Aclara qué canales de telemetría (GNSS, CAN, BLE, Wi‑Fi) se esperan recibir en Plaspy
- Orienta la gestión de cambios de firmware y hardware al actualizar dispositivos en una flota
- Favorece la consistencia en la calidad de los datos al alinear intervalos de reporte y reglas de eventos con la ingestión de Plaspy

## Por qué usar Plaspy con este protocolo

En conjunto con Plaspy, el UX101-AL++ ofrece un endpoint telemático robusto para organizaciones que requieren visibilidad en tiempo real, diagnósticos del vehículo y gestión remota segura. Plaspy ingiere fixes GNSS, diagnósticos CAN y alertas de eventos para que flotas y OEMs puedan monitorear operaciones, responder a incidentes y planificar mantenimiento con datos accionables.

Para saber más sobre Plaspy y cómo la plataforma trabaja con dispositivos como el UX101-AL++ visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica más reciente con el fabricante en https://www.itriangle.net/.
