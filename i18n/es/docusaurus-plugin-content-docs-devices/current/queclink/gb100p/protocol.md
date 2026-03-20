---
slug: /queclink/gb100p/protocol
id: gb100p-protocol
sidebar_label: Protocol
title: QuecLink - GB100P Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo QuecLink GB100P y cómo comunica telemetría, choques y reportes en búfer a Plaspy
keywords:
  - protocolo QuecLink GB100P
  - protocolo GPS QuecLink GB100P
  - compatibilidad GB100P Plaspy
  - protocolo de rastreo QuecLink GB100P
  - protocolo telemático GB100P
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular GB100P
  - detección de choques GB100P
  - telemetría BLE 4.2 GB100P
  - seguro basado en uso GB100P
---

# QuecLink - Protocolo GB100P

Esta página documenta el contexto público del protocolo para integrar el QuecLink GB100P con Plaspy. Se centra en cómo el GB100P envía telemetría, eventos inerciales y datos de accesorios a Plaspy, sin exponer detalles privados de implementación. Use esta información para entender las expectativas de conexión, las opciones de transporte y el papel del protocolo de reporte del rastreador en un despliegue con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware del GB100P, la revisión de hardware y las decisiones de implementación de QuecLink. Para comandos específicos del dispositivo, notas de firmware y el comportamiento más reciente, consulte la documentación de QuecLink.

## Visión general del protocolo

El protocolo de reporte del GB100P es el conjunto de reglas que el equipo usa para identificarse y entregar ubicación, datos inerciales y datos de accesorios a un servidor remoto. En la práctica, el protocolo define cómo se empaqueta la telemetría, cuándo se transmiten los mensajes en búfer y cómo se priorizan los paquetes de eventos o choques para que Plaspy pueda ingerir datos accionables para seguimiento y análisis.

- Permite que el GB100P reporte posiciones GPS, datos inerciales de alta frecuencia, lecturas BLE de accesorios y eventos de alarma a un endpoint remoto.
- Permite que el rastreador se identifique para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Soporta entrega en búfer para que los mensajes almacenados se reenvíen a Plaspy cuando se restablece la conectividad.
- Transporta metadatos de eventos, como ventanas pre y post choque, y activadores de geocerca o alarmas de velocidad.
- Funciona sobre canales de transporte comunes para que el mismo dispositivo opere en distintas condiciones de red preservando la telemetría esencial.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador utilizado por cada dispositivo. Esta detección automática elimina la necesidad de que la mayoría de los usuarios seleccionen un protocolo en la plataforma cuando un dispositivo está configurado correctamente para reportar a Plaspy.

- Plaspy escucha en el mismo puerto para todos los dispositivos compatibles y detecta el protocolo del rastreador de forma automática.
- Configure el reporte del GB100P para apuntar al endpoint de Plaspy y el servidor mapeará los mensajes entrantes al dispositivo.
- Los pasos de configuración comunes incluyen establecer la dirección de reporte del dispositivo a d.plaspy.com o la IP del servidor Plaspy y usar el transporte soportado.
- Cuando un dispositivo se conecta y empieza a reportar, Plaspy identifica el protocolo e ingiere datos GPS, inerciales y BLE para su procesamiento.
- La selección manual del protocolo dentro de Plaspy raramente es necesaria cuando el dispositivo está correctamente apuntado al endpoint de Plaspy.

## Transporte y contexto de conexión

El GB100P soporta transportes celulares comunes y puede configurarse para reportar usando UDP o TCP según los ajustes del dispositivo y las necesidades del despliegue. Plaspy acepta conexiones de dispositivos GB100P en su endpoint público, por lo que los equipos deben apuntar a la dirección y puerto correctos de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- El dominio del servidor Plaspy para reportes es d.plaspy.com y la IP del servidor es 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota y las reglas de firewall.
- El GB100P también admite SMS como transporte alternativo para escenarios de baja capacidad o fuera de cobertura, cuando está configurado.
- Elija UDP para menor overhead en telemetría de alta tasa, o TCP cuando la confirmación de entrega y el orden sean prioridades, según su despliegue y la configuración del GB100P.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los paquetes, los tipos de eventos disponibles y los campos soportados; verifique siempre las notas de firmware del GB100P para diferencias por versión.
- Las revisiones de hardware y las compilaciones regionales de firmware pueden introducir variaciones en el comportamiento del BLE, el muestreo inercial y el almacenamiento en búfer.
- La elección de transporte influye en comportamientos como retransmisión y orden; confirme si el dispositivo está configurado en UDP o TCP en el puerto 8888 para su instalación.
- Los tamaños de búfer y los modos de reporte comprimido (por ejemplo paquetes GPS comprimidos a 1 segundo) pueden diferir según el firmware y afectar la entrega de datos históricos.
- QuecLink emitió un aviso de EOL para el GB100P con órdenes detenidas el 15 de noviembre de 2024; considere reemplazos recomendados como GB130MG o GB100CG para nuevos despliegues.
- Valide la compatibilidad y la disponibilidad de funciones contra la documentación oficial de QuecLink antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Saber cómo se comunica el GB100P ayuda en la configuración inicial, en la operación confiable y en la resolución eficiente de problemas al integrar con Plaspy. Conocer las opciones de transporte, el comportamiento de almacenamiento en búfer y las diferencias de firmware reduce el tiempo de puesta en marcha y mejora la continuidad de los datos para telemetría y flujos de eventos.

- Garantiza que los dispositivos apunten al endpoint y puerto correctos de Plaspy para que los mensajes sean aceptados y asociados con el vehículo adecuado.
- Ayuda a diagnosticar problemas de conectividad confirmando ajustes de transporte como UDP o TCP en el puerto 8888 y si el dispositivo apunta a d.plaspy.com o a la IP del servidor Plaspy.
- Aclara las expectativas sobre la entrega de mensajes en búfer y cómo se maneja la telemetría comprimida tras la reconexión.
- Orienta las decisiones de actualización de firmware y el mapeo de funciones para captura de choques, integraciones con accesorios BLE y ajustes de tasa de telemetría.
- Mejora la fiabilidad a largo plazo al alinear la configuración del dispositivo con el comportamiento de ingestión y los requisitos de reporte de Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el GB100P con Plaspy ofrece a las organizaciones una vía para ingerir telemetría GPS e inercial de alta tasa, datos históricos en búfer e información de accesorios BLE en una sola plataforma telemática. Para casos de uso como seguro basado en uso, reconstrucción de choques y rastreo de flotas con baterías externas, la combinación del hardware GB100P y la ingestión de Plaspy proporciona visibilidad práctica y gestión de eventos.

Para saber más sobre cómo Plaspy puede ingerir la telemetría del GB100P y apoyar a su flota o programa de seguros, visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, comportamiento de firmware y revisiones de hardware más actuales, verifique la documentación del fabricante en https://www.queclink.com/.
