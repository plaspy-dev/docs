---
slug: /thingsys/ts_p4x/protocol
id: ts_p4x-protocol
sidebar_label: Protocol
title: ThingSys - TS-P4X Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para ThingSys TS-P4X y compatibilidad con Plaspy para rastreo confiable de activos
keywords:
- Protocolo ThingSys TS P4X
- Protocolo GPS ThingSys TS P4X
- ThingSys TS P4X Plaspy
- Protocolo de rastreo TS P4X
- Compatibilidad de dispositivos Plaspy
- Protocolo rastreador GPS para contenedores
- Rastreador GPS resistente Plaspy
- Compatibilidad GPRS para rastreadores GPS
- Reenvío de datos de zonas sin cobertura
- Gestión OTA para rastreadores GPS
---

# ThingSys - Protocolo TS-P4X

Esta página documenta el contexto público del protocolo para usar el rastreador GPS ThingSys TS-P4X con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, y en qué esperar al integrar el TS-P4X en una flota o despliegue de monitoreo de activos gestionado con Plaspy.

El TS-P4X es un rastreador magnético de uso rudo para contenedores que utiliza GPRS para telemetría, soporta almacenamiento en zonas sin cobertura y actualizaciones OTA de firmware, y reporta eventos como estado de la cerradura y alarmas por manipulación. Plaspy usa configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del TS-P4X define cómo el dispositivo informa ubicación, telemetría, eventos de alarma y registros almacenados de zonas sin cobertura a un endpoint en la nube. En términos públicos, el protocolo garantiza que el dispositivo pueda identificarse, entregar datos de posición y eventos utilizables, y aceptar configuraciones remotas o disparadores de actualización de firmware cuando estén soportados.

- Permite la entrega de posiciones y telemetría al sistema para seguimiento en vivo y reproducción histórica
- Transmite eventos y estados como cerradura ON/OFF y notificaciones de manipulación para que Plaspy genere alertas
- Soporta el almacenamiento en zonas sin cobertura para que los registros guardados se envíen cuando se restablezca la conectividad y se conserve el historial
- Proporciona mecanismos para configuración remota y actualizaciones OTA sin requerir acceso físico
- Permite que el dispositivo presente información identificadora para que Plaspy asocie los mensajes con el registro de activo correcto

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint y puerto compartidos y usa esa información para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos, un TS-P4X configurado para reportar al endpoint de Plaspy será detectado sin seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy acepta conexiones en el dominio d.plaspy.com y también en la IP pública 54.85.159.138
- El puerto de escucha para el tráfico de dispositivos es 8888 y Plaspy usa el mismo puerto para todos los dispositivos compatibles
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere selección manual cuando el dispositivo apunta correctamente al endpoint de Plaspy
- Una configuración adecuada del envío de datos por parte del dispositivo asegura que la plataforma pueda ingerir flujos de ubicación, alarmas y registros de zonas sin cobertura
- Si los dispositivos no se detectan automáticamente, revisar la configuración de destino de reporte y la guía del fabricante es el primer paso recomendado

## Transporte y contexto de conexión

Las opciones de transporte y conexión determinan cómo el TS-P4X llega a Plaspy, pero no cambian el propósito general del protocolo. El dispositivo puede usar UDP o TCP en el puerto compartido de Plaspy según el soporte del dispositivo y las decisiones de configuración tomadas durante la puesta en servicio.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 como destino
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica en la mayoría de despliegues las reglas de firewall y NAT
- La elección del transporte puede afectar características de entrega como acuses de recibo y retransmisiones, pero no cambia el propósito público del protocolo
- Asegúrese de que el APN y los ajustes GPRS en el TS-P4X sean correctos para una entrega confiable al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las diferencias en la versión de firmware pueden cambiar intervalos de reporte, eventos disponibles y comandos de configuración
- Las revisiones de hardware y las variantes del módulo celular pueden afectar el transporte soportado o la compatibilidad de red
- Las opciones de configuración del fabricante pueden exponer elección entre UDP o TCP y distintos endpoints por defecto
- El tamaño y el comportamiento del buffer de zonas sin cobertura puede variar según el firmware, por lo que conviene validar las expectativas para el reenvío de datos históricos
- La capacidad OTA puede diferir según el firmware y debe validarse antes de despliegues a gran escala
- Verifique siempre que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para la ingestión por parte de Plaspy
- En caso de dudas, consulte la documentación oficial de ThingSys para comportamientos específicos del dispositivo

## Por qué es importante conocer el protocolo

Tener un conocimiento básico del protocolo de comunicación del TS-P4X ayuda a desplegar de forma confiable, a realizar una resolución de problemas eficiente y a garantizar una operación predecible a largo plazo con Plaspy. Saber de qué se encarga el protocolo reduce el tiempo de integración y aclara dónde mirar cuando eventos o datos no aparecen en la plataforma.

- Ayuda a confirmar que los dispositivos apuntan al endpoint y puerto correctos de Plaspy para la detección automática
- Facilita verificar el reenvío desde zonas sin cobertura y conciliar brechas en el historial
- Mejora la resolución de problemas en el reporte de eventos como estado de cerradura y alertas de manipulación
- Orienta las decisiones sobre la selección de transporte cuando se dispone de UDP o TCP
- Informa la planificación de actualizaciones OTA y configuración remota a gran escala

## Por qué usar Plaspy con este protocolo

Usar el TS-P4X con Plaspy proporciona a las organizaciones visibilidad durable de contenedores y remolques junto con manejo de eventos a nivel de plataforma. El diseño del TS-P4X está orientado a despliegues prolongados en condiciones adversas y, cuando reporta a Plaspy, pasa a formar parte de una canalización unificada de seguimiento y alertas para operaciones de flota y activos.

Plaspy acepta el flujo de reporte del TS-P4X en d.plaspy.com y 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador, por lo que los dispositivos correctamente configurados suelen requerir una configuración mínima en la plataforma. Para conocer más sobre Plaspy visite https://www.plaspy.com y para los documentos de protocolo y notas de firmware más recientes del dispositivo consulte al fabricante en https://www.thingsys.com/.
