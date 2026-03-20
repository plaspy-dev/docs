---
slug: /gotop/q20/protocol
id: q20-protocol
sidebar_label: Protocol
title: GOTOP - Q20 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo GOTOP Q20 para integración con Plaspy y consideraciones de conexión y compatibilidad
keywords:
- protocolo GOTOP Q20
- protocolo GPS GOTOP Q20
- GOTOP Q20 Plaspy
- protocolo rastreador GOTOP
- comunicación rastreador GPS
- protocolo de rastreo Q20
- compatibilidad dispositivo Plaspy
- integración rastreador personal
- rastreador posicionamiento híbrido
- rastreador GPS SOS
---

# GOTOP - Protocolo Q20

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP Q20 con la plataforma de flotas y seguridad Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos no sensibles, qué ajustes de conexión se emplean comúnmente y consideraciones prácticas de compatibilidad para administradores e integradores. El Q20 es compatible con Plaspy desde el primer momento y ofrece posicionamiento asistido por GPS, WiFi y LBS, SOS y voz bidireccional, detección de caídas y reporte en búfer que Plaspy puede procesar para monitoreo y alertas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El dominio del servidor Plaspy es d.plaspy.com y la IP pública es 54.85.159.138. El puerto es 8888 y el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene verificar detalles específicos del equipo cuando sea necesario.

## Descripción general del protocolo

El protocolo del Q20 es el conjunto de mensajes y el comportamiento de reporte que el dispositivo emplea para identificarse y enviar datos de posición y estado a través de redes celulares para que Plaspy los procese. El contexto público del protocolo ayuda a comprender cómo el rastreador establece la conexión, cómo se reporta la telemetría y qué opciones de transporte se usan comúnmente, sin exponer detalles privados de implementación.

- Permite que el Q20 envíe actualizaciones de posición y sensores que Plaspy convierte en ubicaciones en el mapa, alertas e historiales
- Transporta la identidad y el estado del equipo para que Plaspy asocie la telemetría con un activo o usuario específico
- Soporta reportes de alarmas y eventos como SOS, detección de caídas y sensores de movimiento para notificaciones inmediatas
- Puede incluir cargas en búfer para que el dispositivo conserve registros cuando no hay conectividad y los cargue cuando recupere señal
- Funciona sobre transportes de red estándar para que Plaspy reciba telemetría de muchos dispositivos usando el mismo endpoint

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y emplea detección automática para reconocer el formato de reporte de un dispositivo. Para la mayoría de los usuarios esto significa que no es necesario seleccionar manualmente un protocolo dentro de Plaspy una vez que el Q20 está configurado para reportar a la dirección y puerto correctos de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando la telemetría llega a d.plaspy.com o 54.85.159.138
- El servicio Plaspy escucha en el puerto 8888 y soporta tanto transporte UDP como TCP según la configuración del equipo
- En general, los ajustes correctos del dispositivo y una ruta de red alcanzable son todo lo necesario para que Plaspy identifique la fuente de datos del Q20
- Los usuarios por lo general no necesitan elegir un protocolo en la plataforma si el dispositivo está configurado para reportar al endpoint de Plaspy
- La detección se basa en los mensajes recibidos y en patrones comunes de reporte más que en configuraciones manuales por parte del usuario final

## Transporte y contexto de conexión

El Q20 puede reportar posición y eventos a través de la red de datos móviles usando opciones de transporte estándar. Los administradores deben comprender las elecciones y requisitos a nivel de red para que los dispositivos puedan alcanzar el servicio Plaspy de forma confiable.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP pública 54.85.159.138 como endpoint de reporte
- Dado que todos los equipos en Plaspy usan el mismo puerto, los administradores pueden estandarizar las reglas de firewall y NAT alrededor del puerto 8888
- Elija UDP cuando se requiera menor sobrecarga y TCP cuando se prefiera entrega ordenada y fiable, sujeto a las capacidades del equipo
- Asegúrese de que el APN y la configuración de datos celulares en el Q20 permitan tráfico saliente hacia el endpoint de Plaspy para un reporte confiable

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de mensajes, campos opcionales o los transportes soportados; confirme la versión de firmware del Q20 para conocer el comportamiento preciso
- Reversiones de hardware o variantes regionales del Q20 pueden incluir diferente soporte de bandas de radio o configuraciones de sensores que afecten el reporte
- Las herramientas de configuración proporcionadas por el fabricante o los comandos SMS pueden cambiar el objetivo de reporte del dispositivo entre endpoints DNS e IP
- El comportamiento de búfer en GPRS o SMS varía y puede afectar cómo se cargan los registros históricos tras un periodo sin conexión
- La elección entre UDP y TCP puede influir en las características de entrega de mensajes, especialmente a través de NATs de red o proxies de operadores móviles
- Siempre valide la compatibilidad consultando la documentación del fabricante y las notas de la versión del firmware del dispositivo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del Q20 ayuda a realizar una configuración inicial correcta, resolver problemas de forma eficiente y garantizar una operación predecible a largo plazo al usar Plaspy. Conocer el contexto de conexión y el comportamiento típico de reporte reduce el tiempo de integración y mejora la confiabilidad.

- Simplifica el aprovisionamiento de equipos asegurando el endpoint, transporte y ajustes APN correctos
- Facilita el diagnóstico de problemas comunes de conectividad como puertos bloqueados, fallos de resolución DNS o mala configuración del APN
- Aclara las expectativas sobre cómo llegarán a Plaspy las alarmas, los registros en búfer y los eventos de voz
- Ayuda a planificar el uso de datos móviles, el impacto en batería y los compromisos en la frecuencia de reporte
- Mejora la gestión de cambios cuando actualizaciones de firmware o revisiones de fabricación alteran el comportamiento del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el GOTOP Q20 con Plaspy brinda a las organizaciones visibilidad en tiempo real y manejo de incidentes práctico para seguridad personal y rastreo de activos pequeños. Las funciones de posicionamiento híbrido, SOS y detección de caídas del Q20 se integran con los paneles centralizados, alertas e historial de Plaspy para ofrecer conciencia situacional accionable a guardianes, operadores y equipos de seguridad.

Si desea obtener más información sobre Plaspy visite https://www.plaspy.com. Para detalles específicos y actualizados sobre protocolo y firmware del dispositivo, verifique la información con el fabricante en https://www.gotop.cc/ ya que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo.
