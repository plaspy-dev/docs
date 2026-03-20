---
slug: /thingsys/ts_v6h/protocol
id: ts_v6h-protocol
sidebar_label: Protocol
title: ThingSys - TS-V6H Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del rastreador ThingSys TS V6H y su comunicación con Plaspy para seguimiento vehicular en tiempo real
keywords:
  - Protocolo ThingSys TS V6H
  - protocolo GPS ThingSys TS V6H
  - protocolo de seguimiento TS V6H
  - protocolo rastreador ThingSys Plaspy
  - informe GPRS SMS TS V6H
  - protocolo seguimiento vehicular ThingSys
  - compatibilidad telemática TS V6H
  - protocolo gestión de flotas TS V6H
  - compatibilidad protocolo dispositivo Plaspy
  - rastreo antirrobo TS V6H
---

# ThingSys - Protocolo TS-V6H

Esta página describe el contexto público del protocolo para usar el rastreador ThingSys TS-V6H con Plaspy. Se centra en los aspectos de comunicación y conexión relevantes al integrar el dispositivo en una implementación de Plaspy, incluyendo cómo el TS-V6H reporta posición y telemetría mediante redes celulares y SMS como respaldo. El TS-V6H es un rastreador vehicular resistente con receptor GNSS UBLOX, batería de respaldo integrada, detección de vibración e ignición, y funciones de control de relé que son relevantes para la telemetría y las alertas en Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador para los dispositivos correctamente configurados. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se limita al contexto público y no sensible del protocolo, explicando cómo el TS-V6H se comunica típicamente con Plaspy.

## Resumen del protocolo

El protocolo regula cómo el TS-V6H transmite posición, estado y datos de eventos a un servidor remoto, y cómo se manejan los comandos remotos o consultas por SMS. Para la integración con Plaspy, la función del protocolo es entregar de forma fiable las posiciones GNSS y la telemetría de sensores a través del canal celular y ofrecer un camino de respaldo por SMS cuando esté configurado.

- Habilitar reportes periódicos y por eventos de la ubicación GNSS y el estado del equipo para seguimiento en tiempo real.
- Comunicar entradas digitales y eventos de sensores como cambios en la ignición (ACC), alertas por vibración o manipulación, y notificaciones de pérdida de alimentación.
- Soportar reportes de respaldo y respuestas a consultas vía SMS cuando GPRS no esté disponible.
- Proveer canales de control remoto y comandos autorizados, como control de relé o actualizaciones de configuración.
- Permitir que la plataforma de tracking mapee los mensajes entrantes a posiciones en vivo, alertas y registros históricos sin requerir cambios de hardware específicos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de dispositivos en un único endpoint y puerto compartido y determina automáticamente el protocolo del rastreador para los dispositivos configurados para reportar a Plaspy. Cuando un TS-V6H apunte al endpoint de Plaspy, la plataforma aceptará la conexión entrante y asociará los mensajes con el perfil de dispositivo correspondiente.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para configuración directa.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el comportamiento del operador.
- Cuando un dispositivo esté correctamente configurado para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy detectará automáticamente el protocolo del rastreador.
- En la mayoría de los casos, usted no necesitará seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está correctamente apuntado al endpoint de Plaspy.

## Transporte y contexto de conexión

Las opciones de transporte y los objetivos DNS o IP determinan cómo el TS-V6H alcanza Plaspy, pero no cambian las responsabilidades generales del protocolo. El TS-V6H suele reportar a través del canal de datos celular y usar SMS como respaldo para consultas o alertas críticas.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El equipo puede usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y las condiciones de la red.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para simplificar el despliegue y las reglas de firewall.
- GPRS es el transporte habitual para reportes continuos, mientras que SMS se usa comúnmente para consultas puntuales o como respaldo.
- Una configuración de DNS confiable o la opción de IP directa ayuda a asegurar que el rastreador pueda alcanzar Plaspy a través de distintos operadores móviles.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden modificar el contenido de los mensajes y los intervalos de reporte, por lo que verifique la versión de firmware del rastreador al resolver problemas de integración.
- Revisiones de hardware pueden introducir o cambiar entradas de sensores y el comportamiento de funciones como detección de vibración o control de relé.
- Las opciones de configuración del fabricante definen si el equipo usa TCP o UDP y si envía respaldos por SMS automáticamente.
- El comportamiento del operador de red puede afectar la persistencia de sesiones y determinar si TCP o UDP es más fiable en una región determinada.
- Confirme que el equipo esté apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar que los mensajes lleguen a Plaspy.
- Consulte la documentación oficial del fabricante para comportamientos específicos de firmware antes de realizar cambios operativos.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del TS-V6H ayuda a asegurar una configuración fluida, telemetría precisa y una resolución más rápida cuando surgen problemas. Saber qué revisar y qué esperar desde el lado del dispositivo reduce el tiempo de integración y mejora la fiabilidad de las operaciones de flota.

- Ayuda a validar que el rastreador esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Orienta la decisión entre TCP y UDP para un despliegue dado y el entorno del operador.
- Aclara qué eventos de sensores y telemetría esperar en Plaspy para reglas de alertas e informes.
- Acelera la resolución de problemas cuando las actualizaciones de ubicación, eventos de ACC o alertas de manipulación no aparecen.
- Informa la planificación de actualizaciones de firmware y reemplazos de hardware al señalar factores de riesgo de compatibilidad.

## Ventajas de usar Plaspy con este protocolo

Usar el TS-V6H con Plaspy ofrece una forma práctica y escalable de convertir la posición vehicular y la telemetría de seguridad en información operativa. El rastreador provee reportes GNSS continuos vía GPRS con respaldo SMS y entradas centradas en el vehículo que Plaspy transforma en mapas en vivo, alertas de geocercas, flujos de inmovilización y reportes históricos útiles para operaciones de flota, alquiler y seguridad.

Para más información sobre cómo Plaspy funciona con dispositivos como el TS-V6H visite https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica del dispositivo y las últimas guías de firmware con el fabricante en https://www.thingsys.com/.
