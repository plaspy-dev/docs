---
slug: /queclink/gb100mg/protocol
id: gb100mg-protocol
sidebar_label: Protocol
title: QuecLink - GB100MG Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo QuecLink GB100MG y cómo se comunica con Plaspy para integración confiable en UBI y telemática de flotas
keywords:
  - Protocolo QuecLink GB100MG
  - Protocolo GPS GB100MG
  - Compatibilidad QuecLink GB100MG con Plaspy
  - Protocolo de comunicación GB100MG
  - Protocolo de rastreo GB100MG
  - Protocolo de rastreador GPS QuecLink
  - Telemática de flotas GB100MG
  - Rastreador UBI GB100MG
  - Integración QuecLink Plaspy
  - Protocolo de telemetría GB100MG
---

# QuecLink - Protocolo GB100MG

Esta página ofrece una referencia pública orientada al protocolo para usar el QuecLink GB100MG con la plataforma Plaspy. Resume el contexto de comunicación y las consideraciones prácticas para la integración sin exponer detalles privados del parser. El GB100MG es un rastreador GPS compacto de montaje en batería diseñado para usage based insurance y telemática de flotas, con características como LTE Cat M1 y NB1 con fallback a 2G, telemetría de choque de alta tasa, conectividad BLE, carcasa IP67 y un amplio búfer de mensajes para reportes confiables.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando una unidad está configurada para reportar al endpoint de Plaspy. El endpoint público de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en orientaciones operativas seguras para lograr una integración exitosa.

## Resumen del protocolo

El protocolo de reporte permite que el GB100MG entregue ubicación, estado, telemetría de choques y datos de sensores accesorios a una plataforma en la nube como Plaspy. Define cómo el dispositivo se identifica, cómo se envían mensajes periódicos y por eventos, y cómo se entregan los mensajes almacenados después de recuperar conectividad.

- Los mensajes de identificación y registro del dispositivo permiten que Plaspy reconozca un GB100MG individual y lo asocie a una cuenta.
- Los reportes periódicos de ubicación y los mensajes de estado proporcionan los datos posicionales y el estado operativo que Plaspy utiliza para seguimiento en vivo y reproducción histórica.
- Los mensajes de eventos y alarmas contienen telemetría de choque, eventos de ignición y movimiento, y actualizaciones de sensores BLE que generan alertas y flujos de trabajo.
- El reporte en búfer asegura que los mensajes acumulados durante las interrupciones de cobertura se envíen cuando el dispositivo recupere conectividad.
- Opciones de transporte como TCP, UDP y SMS (cuando el dispositivo y el operador lo soportan) ofrecen rutas de entrega resilientes adecuadas a distintas condiciones de cobertura y red.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones entrantes en un endpoint compartido y determinar automáticamente el protocolo del rastreador para los dispositivos soportados. En la mayoría de los despliegues, el usuario solo necesita configurar el dispositivo para que reporte a Plaspy; la selección manual del protocolo dentro de Plaspy normalmente no es necesaria.

- El endpoint público del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138 en el puerto 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888; Plaspy acepta ambos transportes.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint.
- Para equipos que soportan reporte por SMS, coordine la configuración del gateway SMS con el soporte de Plaspy si se requiere ingestión por SMS.
- Asegúrese de que los valores de identidad de cada dispositivo estén correctamente poblados para que Plaspy pueda asociar los mensajes entrantes con el registro de rastreador correspondiente.

## Contexto de transporte y conexión

Las elecciones de conexión y transporte afectan cómo el GB100MG llega a Plaspy y cuán resiliente será el reporte bajo distintas condiciones de red. El GB100MG admite múltiples modos de transporte para que los operadores puedan elegir la ruta más adecuada según cobertura y confiabilidad.

- El GB100MG puede reportar por TCP o UDP en el puerto 8888 según la configuración del dispositivo y el entorno de red.
- Los dispositivos pueden direccionarse al endpoint de Plaspy mediante el dominio d.plaspy.com o directamente a la IP pública 54.85.159.138.
- Plaspy utiliza el mismo puerto, 8888, para todos los dispositivos soportados, simplificando la configuración de firewall y NAT.
- Cuando el tráfico de paquetes está limitado, el dispositivo puede usar SMS como ruta alternativa de reporte, si el operador y la configuración del dispositivo lo permiten.
- Al desplegar a escala, permita tráfico saliente TCP y UDP hacia el endpoint de Plaspy desde gateways vehiculares y APNs del operador para garantizar una entrega fiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los eventos disponibles y los ajustes de transporte predeterminados; verifique siempre el nivel de firmware del dispositivo al evaluar compatibilidad.
- Las revisiones de hardware o las distintas SKUs pueden tener capacidades de sensor o funciones de reporte diferentes que afectan qué mensajes se generan.
- La selección de transporte (TCP, UDP, SMS) impacta la semántica de entrega y debe elegirse según la confiabilidad de la red y las políticas del operador.
- El GB100MG fue anunciado como en fase de descontinuación; Queclink recomienda el GB130MG como reemplazo actual para nuevas implementaciones.
- Valide comportamientos como el muestreo de telemetría de choques, soporte de accesorios BLE y límites de búfer contra la documentación del dispositivo para la revisión de firmware específica.
- Confirme cualquier valor requerido de identidad del dispositivo o configuración de cuenta en su flujo de aprovisionamiento para que Plaspy pueda mapear correctamente los mensajes entrantes.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GB100MG ayuda a garantizar una configuración confiable, un análisis correcto de la telemetría en Plaspy y una solución eficiente de problemas si faltan o están malformados los mensajes. Entender el transporte y el flujo de mensajes reduce las fricciones de despliegue y mejora la estabilidad operativa a largo plazo.

- La configuración adecuada del endpoint y del transporte asegura que el dispositivo alcance d.plaspy.com o 54.85.159.138 en el puerto 8888 y que Plaspy pueda ingerir los mensajes.
- La atención a las diferencias de firmware ayuda a diagnosticar por qué un campo o evento puede aparecer o no en los mensajes del dispositivo.
- Comprender el comportamiento de buffering y retransmisión orienta las expectativas durante interrupciones de cobertura y las subidas posteriores a eventos.
- Saber qué eventos puede generar el dispositivo (trazas de choque, ignición, alarmas de remolque, lecturas BLE) permite mapearlos correctamente a reglas y alertas en Plaspy.
- Coordinar con el operador y la configuración de firewall evita problemas comunes de conectividad, como puertos salientes bloqueados o timeouts de NAT.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el GB100MG integra la telemetría del dispositivo, trazas de choque y datos de sensores BLE en una plataforma en la nube unificada para visibilidad en tiempo real, alertas basadas en reglas y análisis históricos. Esta combinación es ideal para programas de usage based insurance, seguridad y operaciones de flota, y procesos anti robo donde la telemetría de choque de alta fidelidad y reportes de ubicación confiables son críticos.

La detección automática de protocolo y el endpoint único compartido de Plaspy simplifican la incorporación de dispositivos y reducen la necesidad de configuración específica del protocolo en la nube. Para saber más sobre Plaspy y cómo se integra con dispositivos como el GB100MG, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la documentación específica del protocolo y la información de firmware más reciente del fabricante en https://www.queclink.com/.
