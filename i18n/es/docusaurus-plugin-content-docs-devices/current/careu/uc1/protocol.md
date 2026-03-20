---
slug: /careu/uc1/protocol
id: uc1-protocol
sidebar_label: Protocol
title: CAREU - UC1 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar CAREU UC1 con Plaspy, configuración de servidor y guía de conexión
keywords:
  - CAREU UC1
  - protocolo CAREU UC1
  - protocolo GPS CAREU UC1
  - protocolo de comunicación CAREU UC1
  - protocolo de rastreo CAREU UC1
  - rastreador GPS CAREU
  - compatibilidad Plaspy
  - rastreador de candado de carga
  - seguimiento de contenedores
  - rastreador para gestión de flotas
---

# CAREU - Protocolo UC1

Esta página describe el contexto público del protocolo para usar el rastreador CAREU UC1 con la plataforma Plaspy. Se centra en cómo el UC1 informa ubicación, eventos de seguridad y telemetría del dispositivo a Plaspy en términos generales y no sensibles, de modo que los equipos de flota e integradores comprendan el flujo de comunicación sin exponer detalles internos de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al servidor. El comportamiento exacto de los mensajes y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página enfatiza el contexto de conexión y protocolo necesario para una integración confiable.

## Descripción general del protocolo

El protocolo de reporte UC1 define cómo el rastreador envía posiciones GNSS, alertas por manipulación y corte de cadena, eventos de desbloqueo y datos de salud del dispositivo a un servicio backend. Para su uso con Plaspy, el objetivo del protocolo es entregar telemetría y notificaciones de eventos oportunas y autenticadas que la plataforma en la nube pueda interpretar para rastreo, alertas y registros de auditoría.

- Proporciona fijaciones de posición e informes de movimiento para que Plaspy muestre la ubicación y el historial del activo.
- Envía eventos de seguridad como manipulación, vibración, corte de cadena y cambios de estado de puertas o cerraduras para alertas inmediatas.
- Transmite estado de salud del equipo y carga de batería para apoyar la programación de mantenimiento y el monitoreo de confiabilidad.
- Incluye identificadores y metadatos del dispositivo para que Plaspy correlacione los mensajes con el activo correcto y presente trazabilidad.
- Soporta acuses de recibo y cambios de estado por comandos remotos que permiten reflejar operaciones de bloqueo o desbloqueo en los registros de la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes entrantes en un endpoint consolidado y reconoce automáticamente el protocolo del rastreador según las características de la conexión y los mensajes. En la mayoría de los casos, un UC1 configurado para reportar a Plaspy será detectado sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en un único puerto compartido para todos los dispositivos compatibles, por lo que los reportes apuntan a un destino consistente.
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto de servidor utilizado por todos los dispositivos es el 8888 y Plaspy acepta conexiones UDP y TCP en ese puerto.
- Cuando un UC1 se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy intentará la detección automática del protocolo.
- Normalmente usted sólo necesita asegurarse de que el dispositivo apunte al endpoint de Plaspy; no suele ser necesario elegir un protocolo dentro de Plaspy durante la configuración inicial.

## Transporte y contexto de conexión

El UC1 soporta enlace celular y puede configurarse para usar UDP o TCP para entregar reportes a la nube. Usar el endpoint y puerto correctos de Plaspy es la base para una entrega confiable; la elección del transporte puede afectar el comportamiento de reintentos y la latencia según las condiciones de red y el firmware del dispositivo.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy acepta conexiones entrantes de dispositivos en el puerto 8888 para todos los rastreadores compatibles con la plataforma.
- El UC1 puede usar UDP para reportes periódicos de menor sobrecarga o TCP para cargas orientadas a sesión, dependiendo de su firmware y de la red del operador.
- La fiabilidad de la red, los mecanismos de respaldo por SMS del operador y las configuraciones de roaming pueden influir en qué transporte rinde mejor en una implementación.
- Asegúrese de que la conectividad saliente del dispositivo y las reglas de operador o firewall permitan tráfico hacia el puerto 8888 para alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles o los disparadores de reporte; confirme siempre el comportamiento específico por firmware antes de despliegues masivos.
- Las revisiones de hardware u opciones como eSIM o selecciones regionales de bandas pueden afectar los patrones de conectividad y deben validarse por lote de dispositivos.
- Algunas configuraciones del UC1 pueden preferir TCP o UDP por defecto; revise la herramienta de configuración del dispositivo o la guía del fabricante al definir el transporte.
- Ajustes del lado del fabricante como configuración del método de desbloqueo, grupos RFID y umbrales de manipulación pueden modificar qué eventos se reportan y cómo aparecen en Plaspy.
- La detección automática de Plaspy cubre un amplio conjunto de protocolos comunes, pero se recomienda realizar pruebas de integración para flujos de trabajo personalizados.
- Valide la compatibilidad y los campos específicos de la plataforma con la documentación del fabricante y las notas de la versión del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación UC1 ayuda a garantizar que los dispositivos entreguen de forma fiable los datos correctos a Plaspy y que las alertas, los eventos de desbloqueo y la telemetría se interpreten adecuadamente por los equipos operativos. Tener una comprensión práctica del comportamiento de conexión y reporte reduce el tiempo de inactividad y acelera la resolución de problemas cuando los dispositivos no aparecen en la plataforma.

- Facilita la resolución de problemas de conectividad al confirmar que el dispositivo apunta a d.plaspy.com o 54.85.159.138 y usa el puerto 8888.
- Permite a los administradores seleccionar ajustes de transporte e intervalos de reporte que coincidan con las necesidades operativas y las limitaciones de batería.
- Mejora la configuración de alertas para que eventos de manipulación y corte de cadena generen notificaciones útiles sin exceso de ruido.
- Apoya una planificación predecible de actualizaciones de firmware al identificar comportamientos de protocolo que podrían cambiar tras una actualización.
- Habilita una comunicación clara entre los equipos de campo, los proveedores de red y el soporte de Plaspy al diagnosticar reportes intermitentes.

## Por qué usar Plaspy con este protocolo

Combinar el CAREU UC1 con Plaspy ofrece a los equipos de logística y flotas una vista unificada de sellos de seguridad y telemetría de ubicación en la misma plataforma usada para el rastreo de vehículos y activos. La combinación del UC1 de posicionamiento GNSS, detección de manipulación y eventos de desbloqueo por múltiples métodos complementa las funciones de alertas e informes de Plaspy para apoyar flujos de trabajo antirobo y supervisión operativa.

Si usted desea explorar las funcionalidades de Plaspy y confirmar las mejores prácticas de despliegue para el CAREU UC1, conozca más sobre Plaspy en https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, notas de firmware y orientación del fabricante más actualizados, verifique la información en el sitio oficial del fabricante CAREU en https://www.systech-iot.com/.
