---
slug: /skypatrol/sp1824/protocol
id: sp1824-protocol
sidebar_label: Protocol
title: SkyPatrol - SP1824 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo SP1824 de SkyPatrol y su compatibilidad con servidores Plaspy y contexto de conexión recomendado
keywords:
  - Protocolo SkyPatrol SP1824
  - Protocolo GPS SkyPatrol SP1824
  - Compatibilidad SP1824 Plaspy
  - Protocolo de rastreo SP1824
  - Protocolo rastreador GPS SkyPatrol
  - Protocolo de dispositivo Plaspy
  - Rastreo de vehículos SP1824
  - Telemetría OBD II SP1824
  - Eventos acelerómetro SP1824
  - Rastreo de flotas Plaspy
---

# SkyPatrol - Protocolo SP1824

Esta página describe el contexto público del protocolo para usar el rastreador SkyPatrol SP1824 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, no sensibles, y en qué debe tener en cuenta al apuntar dispositivos a los servidores de Plaspy para seguimiento en tiempo real, telemetría y reporte de eventos.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los datos llegan a la plataforma. El comportamiento exacto puede variar según la versión de firmware del SP1824, la revisión de hardware y la configuración del fabricante, por lo que esta página explica el rol del protocolo de comunicación y el contexto de conexión más que los detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de reporte del SP1824 es el conjunto de reglas y expectativas que permite al dispositivo enviar ubicación, eventos de movimiento y telemetría vehicular opcional a un servidor remoto como Plaspy. El protocolo regula cómo el rastreador se identifica, comunica correcciones de GPS y eventos de sensores, y mantiene una conexión confiable sobre redes celulares para que Plaspy pueda ingerir y presentar los datos.

- Permite que el SP1824 reporte posición GPS, eventos de acelerómetro y telemetría OBD II opcional a Plaspy
- Transporta datos de identificación para que Plaspy asocie los mensajes con el registro correcto del equipo
- Transmite actualizaciones basadas en eventos como cambios de ignición, inicio de movimiento y notificaciones de pérdida de energía
- Proporciona la información que Plaspy necesita para mapas, alertas e informes históricos sin exponer detalles internos del firmware
- Opera sobre canales de transporte estándar para que los dispositivos puedan alcanzar Plaspy desde redes celulares típicas

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint público y determina automáticamente el manejador de protocolo apropiado para la mayoría de los dispositivos soportados. Cuando un SP1824 está configurado para enviar datos a Plaspy, la plataforma asocia el flujo entrante con el dispositivo y comienza a parsear los mensajes según el formato de protocolo detectado.

- Plaspy acepta conexiones en d.plaspy.com y en la IP pública 54.85.159.138
- La plataforma escucha en el puerto 8888 para tráfico de rastreadores y usa el mismo puerto para todos los dispositivos soportados
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del dispositivo y las necesidades de la red
- En implementaciones típicas, el usuario no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy
- La detección automática reduce la configuración manual, pero depende de que los dispositivos utilicen comportamientos consistentes de identificación y reporte

## Transporte y contexto de conexión

El contexto de conectividad es una parte importante de la integración exitosa del SP1824 con Plaspy. El rastreador usa datos celulares para enviar mensajes a la plataforma, y la selección del transporte afecta características de entrega como el orden y la confiabilidad. Entender los endpoints aceptables y las opciones de transporte ayuda a asegurar que el dispositivo pueda alcanzar Plaspy en redes de producción.

- Los dispositivos SP1824 pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- El transporte soportado para reportes es TCP o UDP en el puerto 8888 según la configuración del dispositivo y las restricciones de la red
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos para simplificar la configuración y el descubrimiento de servidor
- Elija UDP para menor sobrecarga y latencia ligeramente reducida cuando la pérdida de paquetes sea aceptable; elija TCP cuando la confirmación de entrega y el orden sean importantes
- Verifique el APN y las configuraciones de datos salientes en la SIM o el dispositivo para permitir que el tráfico alcance los endpoints de Plaspy desde la red celular

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de mensajes, los campos disponibles o comportamientos de telemetría opcional que afecten el parseo en el servidor
- Las variantes de hardware o modelos regionales pueden exponer diferentes parámetros OBD II u opciones de sensores
- La selección de transporte entre UDP y TCP puede afectar el comportamiento del dispositivo en condiciones de red pobres
- Las funciones opcionales como telemetría OBD II y eventos de acelerómetro pueden requerir pasos de configuración diferentes en el dispositivo
- Siempre valide un equipo de muestra de extremo a extremo para confirmar que Plaspy está recibiendo e interpretando los campos esperados
- Consulte la documentación del fabricante para notas específicas de firmware que puedan alterar las expectativas públicas del protocolo

## Por qué es importante entender el protocolo

Conocer cómo se comunica el SP1824 ayuda a mantener las instalaciones predecibles y facilita la resolución de problemas cuando los mensajes no llegan o los eventos no aparecen como se espera en Plaspy. Una comprensión básica del protocolo y del contexto de conexión reduce el tiempo de configuración y respalda la confiabilidad operativa a largo plazo.

- Asegura que los dispositivos apunten al endpoint y puerto correctos de Plaspy para que los reportes lleguen de forma fiable
- Ayuda a aislar problemas relacionados con el transporte como puertos bloqueados, comportamiento de NAT o restricciones del operador
- Aclara qué campos de telemetría deberían aparecer en Plaspy y cuáles son opcionales o dependientes del firmware
- Facilita la resolución rápida de eventos faltantes como alertas de pérdida de energía o disparos de movimiento
- Orienta la decisión entre usar UDP o TCP según el rendimiento y las necesidades de confiabilidad de la red

## Por qué usar Plaspy con este protocolo

Usar el SP1824 con Plaspy ofrece a las organizaciones una vía sencilla hacia la visibilidad del vehículo y la telemetría operativa sin configuraciones complejas por dispositivo. La combinación de ubicación GPS, eventos de acelerómetro, telemetría OBD II opcional y la plataforma Plaspy proporciona seguimiento práctico, detección de eventos y generación de reportes adecuados para gestión de flotas, flotas de alquiler y monitoreo antirrobo.

Plaspy ofrece un único punto de ingestión consistente para mensajes SP1824, por lo que los dispositivos configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 generalmente serán reconocidos y procesados de forma automática. Para obtener más información sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para detalles específicos de protocolo según dispositivo y firmware y guía de instalación actualizada, verifique la información con el fabricante en https://www.skypatrol.com/
