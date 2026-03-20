---
slug: /queclink/wts100/protocol
id: wts100-protocol
sidebar_label: Protocol
title: QuecLink - WTS100 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el sensor QuecLink WTS100 con Plaspy para telemetría de temperatura e integración de gateways
keywords:
  - Protocolo QuecLink WTS100
  - Protocolo GPS QuecLink WTS100
  - Protocolo de comunicación QuecLink WTS100
  - Protocolo de rastreo QuecLink WTS100
  - Integración sensor de temperatura WTS100
  - Compatibilidad gateway receptor QuecLink
  - Protocolo de dispositivo Plaspy
  - Telemetría de temperatura Plaspy
  - Telemetría cadena de frío Plaspy
  - Sensor de temperatura para monitoreo de flota
---

# QuecLink - Protocolo WTS100

Esta página presenta el contexto público del protocolo para usar el sensor de temperatura QuecLink WTS100 con Plaspy. Explica cómo la telemetría del sensor se encamina a través de receptores o gateways QuecLink y cómo esa información queda disponible en la plataforma Plaspy para monitoreo, alertas e informes históricos.

Plaspy emplea configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del tracker una vez que la telemetría llega a su endpoint. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware, el modelo de gateway y la implementación del fabricante, por lo que esta página ofrece un contexto general de integración y conexión en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El WTS100 es un sensor de temperatura inalámbrico alimentado por batería que transmite telemetría a receptores o gateways compatibles con QuecLink. Esos gateways reenvían los reportes del sensor a sistemas backend que, a su vez, entregan datos útiles de temperatura, batería y estado a Plaspy para una visibilidad unificada.

- El protocolo permite identificar el sensor y asociarlo a un registro de dispositivo cuando sus reportes llegan a través de un gateway QuecLink.
- La telemetría normalmente incluye lecturas de temperatura, estado de batería e indicadores básicos de salud o señal según lo reenvíe el gateway.
- Los gateways actúan como traductores de protocolo y agregadores de transporte, enviando los datos del sensor a Plaspy para que usted pueda correlacionar la temperatura con datos de flota o activos.
- El rol del protocolo es principalmente entregar telemetría periódica o por eventos desde el sensor hasta el gateway receptor, no proporcionar conectividad directa en la nube desde el sensor.
- Cuando el gateway reenvía la telemetría a Plaspy, la plataforma normaliza esos datos para visualización en paneles, alertas y análisis histórico.

## Cómo Plaspy detecta el protocolo

Plaspy recibe telemetría reenviada en un endpoint y puerto compartidos y utiliza detección de protocolo para identificar el tipo de dispositivo entrante. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo en Plaspy si el gateway está correctamente configurado para reportar los datos del sensor.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para los reportes entrantes.
- Plaspy detecta automáticamente el protocolo del tracker cuando la telemetría llega desde un gateway o receptor configurado.
- Normalmente los usuarios apuntan su gateway QuecLink al endpoint de Plaspy y no necesitan seleccionar un protocolo de dispositivo dentro de Plaspy para integraciones estándar.
- Un mapeo correcto en el gateway de los identificadores del sensor hacia los registros de dispositivo en Plaspy asegura que la telemetría se atribuya correctamente sin configuraciones adicionales de protocolo.

## Contexto de transporte y conexión

Las opciones de conexión y transporte dependen del gateway y del despliegue. El WTS100 se comunica inalámbricamente (RF) con los receptores, pero el gateway es responsable de reenviar esos datos a Plaspy a través de redes IP.

- El dispositivo puede configurarse en el gateway para reenviar telemetría a d.plaspy.com o a la dirección numérica del servidor 54.85.159.138.
- El gateway puede usar UDP o TCP en el puerto 8888 según el soporte del equipo y las consideraciones de la red.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que la configuración del gateway es consistente entre el hardware compatible.
- La confiabilidad de la red, las reglas de firewall y el comportamiento de NAT pueden influir en si UDP o TCP es preferible en una instalación concreta.
- Asegúrese de que los gateways puedan comunicarse de forma saliente con el endpoint de Plaspy para permitir la entrega oportuna de la telemetría.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware en gateways y receptores pueden modificar qué campos o indicadores de salud se reenvían a Plaspy; valide con las notas de firmware actuales del gateway.
- Las revisiones de hardware de los receptores o gateways pueden alterar el manejo de RF o las cadenas de identificación visibles en los sistemas backend.
- Dado que el WTS100 usa RF para comunicarse con un gateway, confirme que el modelo de gateway específico soporte el WTS100 en su versión de firmware.
- La elección de transporte entre UDP y TCP puede afectar características de entrega como el orden y la retransmisión; elija según la fiabilidad de la red.
- El fin de vida del producto o migraciones pueden cambiar las recomendaciones de integración; planifique las migraciones teniendo en cuenta tanto a QuecLink como a Plaspy.
- Siempre verifique los identificadores de dispositivo y los procedimientos de emparejamiento con la documentación oficial de QuecLink antes de desplegar a gran escala.

## Por qué es importante comprender el protocolo

Tener claro cómo se reenvía la telemetría del WTS100 a Plaspy ayuda a garantizar el mapeo correcto de dispositivos, alertas confiables y registros históricos precisos para la cadena de frío y el monitoreo de activos.

- Una configuración adecuada del gateway garantiza que las lecturas de temperatura se asignen al registro de dispositivo correcto en Plaspy y a los flujos de reporte.
- Entender si su gateway usa UDP o TCP para llegar a Plaspy facilita el diagnóstico de problemas relacionados con el transporte.
- Estar al tanto de las variaciones de firmware y hardware reduce el tiempo invertido en solucionar campos faltantes o comportamientos inesperados de la telemetría.
- Saber que Plaspy usa un puerto compartido y detección automática simplifica la puesta en marcha y reduce la necesidad de seleccionar manualmente un protocolo.
- El conocimiento del protocolo apoya la planificación de migraciones cuando los dispositivos alcanzan el fin de su vida útil o se reemplazan gateways o sensores.

## Por qué usar Plaspy con este protocolo

Integrar la telemetría de temperatura del WTS100 con los datos de flota y activos en Plaspy ofrece a los equipos una vista única para la operativa. Las lecturas del sensor reenviadas por gateways QuecLink a Plaspy permiten alertas en tiempo real por desviaciones de temperatura, monitoreo de batería y salud, y reportes históricos que respaldan el cumplimiento y la toma de decisiones logísticas.

Para obtener más información sobre Plaspy y cómo integra la telemetría de temperatura con el seguimiento de flota y activos, visite https://www.plaspy.com. Para detalles específicos de protocolo, avisos de firmware y orientación del fabricante, verifique la información actual en el sitio oficial de QuecLink https://www.queclink.com/.
