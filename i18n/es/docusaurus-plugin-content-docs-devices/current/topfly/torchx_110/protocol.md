---
slug: /topfly/torchx_110/protocol
id: torchx_110-protocol
sidebar_label: Protocol
title: TopFly - TorchX 110 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar TopFly TorchX 110 con Plaspy usando ajustes de conexión compartidos y detección automática de protocolo
keywords:
  - Protocolo TopFly TorchX 110
  - Protocolo GPS TopFly TorchX 110
  - Compatibilidad TopFly TorchX 110 con Plaspy
  - Protocolo rastreador OBDII TorchX 110
  - Protocolo de comunicación TorchX 110
  - Protocolo de rastreo vehicular Plaspy
  - Compatibilidad de protocolo de dispositivo Plaspy
  - Protocolo rastreador GPS OBDII
  - Rastreo de flotas TorchX 110
  - Protocolo telemetría BLE CAN
---

# TopFly - TorchX 110 Protocolo

Esta página resume el contexto público del protocolo para usar el rastreador TopFly TorchX 110 con Plaspy. Describe a alto nivel cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión se usan comúnmente y qué debe tener en cuenta al confirmar una integración exitosa. El énfasis está en el contexto de comunicación más que en detalles de firmware interno o formatos propietarios de paquetes.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía destaca consideraciones prácticas y no sensibles sobre el protocolo y el ciclo de vida para implementaciones de TorchX 110.

## Visión general del protocolo

En términos generales, el protocolo del dispositivo define cómo el TorchX 110 empaqueta y envía telemetría, ubicación y eventos a un servidor remoto. Para la integración con Plaspy, el objetivo del protocolo es entregar de forma fiable posiciones GNSS, telemetría CAN, lecturas de sensores BLE y eventos para que Plaspy pueda mostrar dashboards en tiempo real e informes.

- Permite que el rastreador reporte posiciones GNSS, campos del bus CAN (encendido, VIN, odómetro, combustible, códigos DTC) y datos de sensores BLE a un endpoint remoto.
- Transporta mensajes de estado y eventos como detección de choque, pérdida de alimentación y alertas por manipulación o interferencia para su procesamiento oportuno en la plataforma.
- Permite que el dispositivo almacene datos cuando está fuera de red y transmita los puntos en buffer cuando se restablece la conectividad.
- Soporta múltiples opciones de transporte para que el equipo entregue datos sobre la red disponible en el entorno de despliegue.
- Proporciona la información que Plaspy necesita para mapear la telemetría cruda a campos accionables para gestión de flotas, UBI y diagnóstico.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y usa los datos entrantes para identificar automáticamente el protocolo del rastreador. En la mayoría de los casos, un TorchX 110 correctamente configurado para reportar a Plaspy será reconocido sin necesidad de seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor para reporte de dispositivos es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y comienza a reportar.
- Por lo general, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta al endpoint de Plaspy.
- La configuración correcta del dispositivo (APN, elección de transporte y servidor de reporte) suele ser el prerequisito para que la detección automática tenga éxito.

## Transporte y contexto de conexión

El TorchX 110 soporta opciones de transporte comunes y puede configurarse para usar el transporte de red que mejor convenga a su despliegue. Para la integración con Plaspy, los puntos prácticos se refieren más a direccionamiento y selección de transporte que a detalles propietarios del protocolo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como dirección del servidor de reporte.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, reduciendo diferencias en la configuración por dispositivo.
- Consideraciones de red como ajustes de APN, restricciones del operador y reglas de firewall pueden influir en si TCP o UDP es el transporte preferible en un entorno dado.
- Para equipos con opciones de fallback, asegúrese de que el transporte y la dirección del servidor elegidos sean consistentes a través de actualizaciones de firmware y provisión.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el timing de mensajes, los campos disponibles y las opciones de transporte; confirme la versión de firmware del dispositivo al validar el comportamiento.
- Revisiones de hardware o variantes regionales a veces alteran las bandas de red soportadas o las pilas de transporte; verifique la variante específica del TorchX 110 en su flota.
- Los valores por defecto de configuración del fabricante pueden usar modos de transporte distintos; configure explícitamente el servidor de reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 para Plaspy.
- La disponibilidad de telemetría BLE y CAN depende de la configuración y del soporte del vehículo conectado; asegúrese de que los sensores requeridos y el acceso OBDII/CAN estén habilitados.
- La selección de transporte (TCP vs UDP) afecta las características de entrega y debe elegirse considerando la fiabilidad de la red y el comportamiento del operador.
- Valide el comportamiento en condiciones reales tras la provisión confirmando reportes en vivo y la subida de datos en buffer en Plaspy.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del TorchX 110 y del contexto de conexión ayuda a asegurar una configuración confiable, agiliza la resolución de problemas y garantiza una entrega de datos consistente a largo plazo hacia Plaspy. Saber qué ajustes de transporte y direccionamiento usa el dispositivo reduce la fricción en la integración y ayuda a diagnosticar problemas de conectividad antes de que afecten las operaciones.

- Agiliza la provisión inicial alineando la dirección de reporte y el transporte del dispositivo con la configuración de Plaspy.
- Facilita la resolución de problemas de conectividad relacionados con APN del operador, firewall o desajustes de transporte.
- Aclara las expectativas respecto a la frecuencia de telemetría, el comportamiento de buffer y el reenvío de eventos a Plaspy.
- Orienta la planificación de actualizaciones de firmware cuando se introducen cambios en el protocolo o en el comportamiento de transporte.
- Garantiza que las fuentes de telemetría BLE y CAN estén habilitadas y correctamente encaminadas para que Plaspy las consuma.

## Ventajas de usar Plaspy con este protocolo

Usar TorchX 110 con Plaspy ofrece a los operadores de flotas actualizaciones de ubicación de alta frecuencia, telemetría CAN detallada e integración de sensores BLE en un formato OBDII compacto que simplifica el despliegue. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad de configuración para que los equipos puedan enfocarse en monitoreo operacional, alertas y análisis en lugar de detalles de conectividad de bajo nivel.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos como el TorchX 110, visite https://www.plaspy.com. Para detalles específicos de protocolo, comportamiento de firmware y notas de implementación más actuales consulte la documentación del fabricante en https://www.topflytech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
