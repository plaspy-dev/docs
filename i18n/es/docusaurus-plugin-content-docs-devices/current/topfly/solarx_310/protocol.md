---
slug: /topfly/solarx_310/protocol
id: solarx_310-protocol
sidebar_label: Protocol
title: TopFly - SolarX 310 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del TopFly SolarX 310 y su comunicación con Plaspy para un seguimiento de flotas confiable
keywords:
  - protocolo TopFly SolarX 310
  - protocolo GPS TopFly SolarX 310
  - protocolo TopFly SolarX 310 Plaspy
  - protocolo de seguimiento SolarX 310
  - protocolo de comunicación SolarX 310
  - protocolo rastreador GPS TopFly
  - compatibilidad SolarX 310 Plaspy
  - protocolo seguimiento de activos TopFly
  - documentación protocolo rastreador GPS
  - seguimiento de flotas SolarX 310
---

# TopFly - Protocolo SolarX 310

Esta página describe el contexto público del protocolo para usar el rastreador TopFly SolarX 310 con Plaspy. Explica cómo el dispositivo se comunica con Plaspy para reportar posición, telemetría y eventos sin exponer detalles privados o sensibles de implementación. La información aquí está pensada para ayudar a usuarios técnicos a comprender el comportamiento de conexión esperado y qué validar al integrar el SolarX 310 con Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El SolarX 310 es compatible con Plaspy desde fábrica y admite múltiples opciones de transporte como TCP, UDP, MQTT y SMS. Dado que las opciones de firmware y los conjuntos de funciones pueden diferir entre revisiones de hardware, esta página se centra en un contexto práctico y orientado al público en lugar de describir estructuras internas de paquetes.

## Resumen del protocolo

El protocolo de comunicación del dispositivo es el conjunto de reglas que sigue el SolarX 310 para enviar datos de ubicación, sensores y eventos a Plaspy, y para recibir comandos remotos opcionales o respuestas de configuración. En términos prácticos, el protocolo garantiza que el rastreador pueda identificarse ante Plaspy, transmitir puntos en búfer cuando la conectividad se restablece y entregar alarmas y eventos de sensores para notificaciones inmediatas y análisis histórico.

- Permite al SolarX 310 enviar actualizaciones de posición, datos de sensores y alarmas a Plaspy para paneles en tiempo real y alertas.
- Permite que el rastreador incluya metadatos identificatorios para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Soporta entrega en búfer para que los grandes registros offline almacenados en el equipo se envíen a Plaspy cuando se restablezca la conectividad.
- Proporciona una capa independiente del transporte para que el dispositivo utilice TCP, UDP, MQTT o, si es necesario, caiga a SMS.
- Transporta la telemetría necesaria para funciones como alertas de manipulación, lecturas de sensores BLE, eventos de geocerca y estado de batería.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint de ingestión unificado y detecta automáticamente el protocolo del rastreador para los modelos soportados. En la mayoría de las integraciones, el dispositivo solo necesita apuntar al endpoint de Plaspy; la selección manual del protocolo dentro de Plaspy normalmente no es necesaria cuando el dispositivo está configurado correctamente.

- Plaspy detecta automáticamente el protocolo del rastreador para que los dispositivos reporten sin configuración manual del protocolo en muchos casos.
- Apunte el dispositivo al endpoint de ingestión de Plaspy para permitir la detección automática y la asociación con su cuenta.
- Cuando un dispositivo se conecta, Plaspy examina la sesión entrante y los metadatos para emparejarla con un tipo de rastreador soportado.
- Información de identidad del dispositivo adecuada y configuraciones de transporte consistentes en el equipo mejoran la fiabilidad de la detección.
- Si observa comportamientos inesperados, verifique que el dispositivo esté configurado para reportar a Plaspy y que los campos identificadores coincidan con el registro del dispositivo.

## Contexto de transporte y conexión

El SolarX 310 puede usar múltiples transportes para llegar a Plaspy según la configuración del dispositivo y las condiciones de la red. Para la ingestión en Plaspy, los destinos públicos de conexión y el puerto están estandarizados para que los dispositivos puedan configurarse de manera consistente en toda la flota.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 como referencia para configuración directa.
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y la configuración de firewalls de red.
- El SolarX 310 también admite MQTT o SMS como transportes alternativos cuando esas opciones están habilitadas en la unidad.
- Elija TCP cuando prefiera fiabilidad de sesión y UDP cuando busque una conexión más ligera y sea compatible con el firmware del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué opciones de transporte y campos de mensaje están disponibles; confirme la versión de firmware del dispositivo antes de asumir paridad de funciones.
- Las revisiones de hardware pueden añadir o eliminar sensores, como soporte para accesorios BLE, lo que afecta la telemetría enviada a Plaspy.
- Configuraciones por parte del fabricante o compilaciones regionales de firmware pueden modificar los intervalos de reporte por defecto y las opciones de seguridad.
- La selección del transporte influye en el comportamiento tras la pérdida de conectividad y determina cómo se reenvían los puntos en búfer a Plaspy.
- Al usar MQTT o SMS, verifique que esos transportes estén habilitados y sean compatibles con la configuración de su cuenta Plaspy.
- Siempre contraste las declaraciones de compatibilidad con la documentación oficial de TopFly y las notas de la versión del SolarX 310.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el SolarX 310 ayuda a garantizar una configuración confiable, una resolución de problemas eficiente y una operación predecible a largo plazo cuando se integra con Plaspy. Conocer las opciones de transporte, los comportamientos esperados y los requisitos de detección reduce el tiempo de integración y mejora el tiempo en servicio para flujos de trabajo de rastreo y alertas.

- Ayuda a validar la configuración del dispositivo para que el rastreador informe al endpoint y puerto correctos de Plaspy.
- Aclara el comportamiento esperado en el reenvío de datos en búfer después de la restauración de la red.
- Facilita la resolución de problemas cuando los dispositivos no aparecen en Plaspy o cuando la telemetría está incompleta.
- Informa la planificación de red, como reglas de firewall y ajustes del operador para despliegues a gran escala.
- Apoya la gestión de cambios al actualizar firmware o intercambiar revisiones de hardware en una flota activa.

## Por qué usar Plaspy con este protocolo

Combinar el SolarX 310 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad continua, telemetría ambiental y alertas antirrobo en activos remotos y expuestos. La batería asistida por energía solar del SolarX 310, su gran búfer offline y el soporte para sensores BLE se complementan con la ingestión y el sistema de alertas de Plaspy para ofrecer seguimiento continuo y notificaciones oportunas para flotas, contenedores y equipos de alto valor.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el SolarX 310 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la documentación específica del dispositivo y las notas de firmware más recientes en el sitio del fabricante https://www.topflytech.com/ antes de desplegar a escala.
