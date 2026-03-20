---
slug: /topfly/cyberlabelx_100/protocol
id: cyberlabelx_100-protocol
sidebar_label: Protocol
title: TopFly - CyberLabelX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el TopFly CyberLabelX 100 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo TopFly CyberLabelX 100
  - protocolo GPS CyberLabelX 100
  - protocolo rastreador de paquetes TopFly
  - compatibilidad CyberLabelX Plaspy
  - protocolo de rastreo Plaspy
  - comunicación de rastreador de activos
  - protocolo GPS para rastreador de paquetes
  - protocolo para rastreador de cadena de frío
  - protocolo de seguimiento TopFly
  - integración de rastreador GPS con Plaspy
---

# TopFly - Protocolo CyberLabelX 100

Esta página resume el contexto público del protocolo para utilizar el rastreador de activos TopFly CyberLabelX 100 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión son públicos y consideraciones prácticas para ayudar a los equipos a integrar y solucionar problemas del dispositivo sin exponer detalles privados de implementación.

El CyberLabelX 100 es un rastreador de paquetería recargable y delgado, diseñado para visibilidad en envíos y activos. Ofrece posicionamiento GNSS multiconstelación, registro con buffer y sensores ambientales. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo del rastreador define el comportamiento del dispositivo para entregar ubicaciones, telemetría y eventos de alarma a un endpoint en la nube. Para la integración con Plaspy, el rol público del protocolo es empaquetar soluciones GNSS, lecturas de sensores y flags de eventos de forma que el servidor pueda recibirlos e interpretarlos, preservando la vida útil de la batería y la fiabilidad de entrega.

- Permite entregar fixes de ubicación y telemetría como temperatura, movimiento y eventos de manipulación a Plaspy.
- Permite que el dispositivo se identifique y comunique su cadencia de reporte para que Plaspy asocie los datos entrantes con el activo correcto.
- Soporta registro con buffer para que los puntos recopilados sin conexión se suban cuando se restablece la conectividad.
- Incluye intervalos de reporte configurables para equilibrar la frecuencia de actualización con el consumo de batería en casos de uso de paquetería y envíos.
- Provee disparadores para eventos de alarma como manipulación, movimiento y umbrales de temperatura que generan notificaciones en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y determina automáticamente el protocolo que usa cada equipo cuando comienza a reportar. En la mayoría de los casos, un CyberLabelX 100 correctamente configurado aparecerá en Plaspy sin que el usuario deba seleccionar el protocolo manualmente.

- Plaspy escucha en un endpoint de servidor compartido que permite la detección automática del protocolo del rastreador.
- El dominio del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que usted no necesita configurar puertos específicos por dispositivo en Plaspy.
- Cuando un CyberLabelX 100 apunta al endpoint de Plaspy, la plataforma asocia automáticamente los datos entrantes con el dispositivo y la cuenta correspondiente.
- El flujo de trabajo típico del usuario no requiere elegir manualmente el protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El CyberLabelX 100 soporta múltiples transportes y puede configurarse para usar el que mejor se adapte al despliegue. Para la integración con Plaspy, las opciones públicas comunes son TCP y UDP en el puerto compartido de Plaspy, aunque el dispositivo también puede usar MQTT o SMS dependiendo de la configuración del fabricante y del plan de suscripción.

- El dispositivo puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto público de Plaspy para el reporte de dispositivos es 8888 y los dispositivos pueden usar UDP o TCP en el puerto 8888.
- El CyberLabelX 100 también soporta otros transportes como MQTT o SMS cuando el despliegue o el firmware lo requieren.
- Elija UDP cuando desee menor sobrecarga y latencia reducida si la red es estable; use TCP cuando priorice confiabilidad de sesión y entrega ordenada.
- Confirme el APN del dispositivo, la provisión de la SIM y la selección de transporte durante la puesta en campo para garantizar la conectividad con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de mensajes, los campos de telemetría disponibles o la forma exacta en que se reportan los eventos; valide el comportamiento tras actualizaciones de firmware.
- Revisiones de hardware u opciones de sondas externas pueden añadir o cambiar canales de telemetría que afectan cómo el rastreador informa datos ambientales.
- La elección de transporte (TCP, UDP, MQTT, SMS) puede influir en las garantías de entrega y en el comportamiento percibido del protocolo en redes intermitentes.
- El registro con buffer es útil para cobertura intermitente, pero pruebe el reenviado tras períodos prolongados sin conexión para confirmar los límites de retención.
- Los valores por defecto de configuración del fabricante pueden variar por región o compilación de firmware; siempre verifique el APN y el destino de reporte antes del despliegue.
- Verifique las opciones de seguridad o cifrado que soporte el dispositivo y confirme su compatibilidad con la configuración de Plaspy.

## Por qué importa comprender el protocolo

Tener un conocimiento práctico del protocolo del rastreador ayuda a garantizar un seguimiento confiable, telemetría precisa y una resolución de problemas más eficiente durante los despliegues con Plaspy. Saber qué envía el dispositivo y cómo llega a Plaspy reduce el tiempo de configuración y ayuda a aislar problemas cuando los datos están incompletos o retrasados.

- Asegura que los intervalos de reporte y los perfiles de batería estén alineados con las expectativas operativas en flujos de trabajo de paquetería y activos.
- Ayuda a diagnosticar problemas de conectividad derivados de APN, SIM o configuración de transporte.
- Permite interpretar el comportamiento del registro con buffer cuando la cobertura es intermitente y verificar que los puntos históricos se reciban como corresponde.
- Orienta en la elección del transporte para adecuarse a los requisitos de fiabilidad y latencia del despliegue.
- Facilita la validación de disparadores de eventos como manipulación, movimiento y alertas de temperatura para que las notificaciones en Plaspy sean significativas.

## Por qué usar Plaspy con este protocolo

Usar el CyberLabelX 100 con Plaspy ofrece a los equipos de logística y gestión de activos una solución compacta para visibilidad en tiempo real, telemetría ambiental y alertas basadas en eventos. La detección automática de protocolos y el endpoint compartido de Plaspy simplifican el onboarding, de modo que el rastreador puede comenzar a reportar con un trabajo mínimo de configuración del servidor.

Si desea saber más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, comportamiento de firmware y guías de implementación consulte la documentación del fabricante en https://www.topflytech.com/ ya que las funciones y el firmware del dispositivo pueden cambiar con el tiempo.
