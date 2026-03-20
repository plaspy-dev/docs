---
slug: /thinkrace/traxbean_bracelet/protocol
id: traxbean_bracelet-protocol
sidebar_label: Protocol
title: ThinkRace - Traxbean Bracelet Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el brazalete Traxbean con Plaspy y ajustes de comunicación del dispositivo
keywords:
  - Protocolo ThinkRace Traxbean Bracelet
  - Protocolo GPS ThinkRace Traxbean Bracelet
  - Protocolo de comunicación Traxbean Bracelet
  - Compatibilidad del rastreador Traxbean Bracelet
  - Rastreador GPS wearable ThinkRace
  - Rastreador compatible con Plaspy
  - Protocolo GPS para monitoreo de infractores
  - Protocolo de detección de manipulación
  - Protocolo para geovallas
  - Integración de protocolo de rastreo
---

# ThinkRace — Protocolo del Traxbean Bracelet

Esta página resume el contexto público del protocolo para utilizar el brazalete ThinkRace Traxbean con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, de modo que arquitectos de sistemas, integradores y administradores puedan comprender el papel de los reportes del dispositivo, la entrega de eventos y la telemetría sin exponer detalles privados de implementación. El Traxbean Bracelet es un rastreador GPS compacto y portátil diseñado para monitoreo en comunidades y correcciones comunitarias; combina posicionamiento satelital, localización asistida, posicionamiento interior por RF, detección de manipulación, SOS y voz bidireccional — esas capacidades generan los eventos y la telemetría que el protocolo envía a una plataforma backend como Plaspy.

Plaspy utiliza un conjunto de ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente al endpoint de Plaspy. Para Plaspy el endpoint público del servidor es d.plaspy.com con la IP reachable 54.85.159.138 y un único puerto para todos los dispositivos, el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware y la preferencia del operador. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene a un nivel de integración de plataforma y recomienda verificar contra la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del Traxbean Bracelet define cómo las posiciones, los eventos y el estado del dispositivo se transmiten desde el wearable hacia un backend como Plaspy y cómo se devuelven mensajes de control o confirmación cuando están soportados. En la práctica, la función del protocolo es garantizar que la telemetría del brazalete sea utilizable por los flujos de trabajo de Plaspy para alertas, geovallas, detección de manipulación y APIs de integración.

- Transporta reportes de posición y datos de localización asistida para que Plaspy pueda mostrar ubicaciones en casi tiempo real e historial.
- Informa tipos de eventos como activaciones SOS, alertas de manipulación o corte de correa, batería baja y solicitudes de sesión de voz para desencadenar flujos de trabajo en la plataforma.
- Proporciona identificación del dispositivo y metadatos de estado para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Permite mensajes periódicos de latido o keepalive que ayudan a Plaspy a mantener una conectividad confiable y detectar condiciones fuera de línea.
- Transporta acuses de recibo de configuración cuando el firmware del brazalete soporta ajustes remotos o actualizaciones.

## Cómo detecta Plaspy el protocolo

El endpoint de ingestión de Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores soportados y detectar automáticamente el protocolo usado por un dispositivo una vez que este reporta al endpoint compartido. Esto reduce la necesidad de seleccionar manualmente el protocolo dentro de Plaspy cuando los dispositivos están configurados para enviar datos al servidor de Plaspy.

- Todos los dispositivos de Plaspy reportan al mismo puerto, por lo que un dispositivo apuntado a d.plaspy.com en el puerto 8888 llegará a la plataforma.
- El endpoint público de Plaspy es d.plaspy.com y la IP pública conocida es 54.85.159.138 como referencia de conectividad.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888; Plaspy acepta ambos transportes y procesa el tráfico entrante.
- Cuando un Traxbean Bracelet se configura para reportar al endpoint de Plaspy, Plaspy intenta la identificación automática del protocolo y el mapeo de datos.
- Normalmente el usuario final o el sistema de aprovisionamiento no necesita seleccionar manualmente un protocolo en Plaspy si el dispositivo está correctamente configurado para enviar al servidor de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el Traxbean Bracelet llega a la plataforma Plaspy a través de redes celulares y cómo esas elecciones de red afectan la configuración. El brazalete puede utilizar datos celulares y métodos de localización asistida; a nivel de red abrirá una sesión hacia el endpoint de Plaspy usando el transporte soportado.

- Los dispositivos pueden configurarse para enviar datos vía UDP o TCP al puerto 8888 en el endpoint de Plaspy.
- El host de Plaspy para reportes de dispositivos es d.plaspy.com con la IP pública 54.85.159.138 documentada para allowlisting en redes.
- Plaspy utiliza el mismo puerto, 8888, para todos los rastreadores soportados, lo que simplifica la configuración de firewall y NAT en redes empresariales.
- Elija UDP o TCP según las opciones del firmware del dispositivo y el rendimiento del operador; algunas redes de carriers pueden favorecer un transporte por mayor confiabilidad o costo.
- Asegúrese de que el tráfico saliente hacia d.plaspy.com o 54.85.159.138 en el puerto 8888 esté permitido desde el entorno de red del dispositivo.

## Notas de compatibilidad del protocolo

- Las versiones de firmware del Traxbean Bracelet pueden modificar la temporización de mensajes, los eventos soportados o campos opcionales de telemetría; confirme el comportamiento exacto para su firmware.
- Las revisiones de hardware pueden introducir conjuntos de sensores distintos o cambios en el reporte de manipulación que afecten lo que el protocolo envía a Plaspy.
- Las configuraciones del fabricante y las variantes regionales del producto pueden influir en qué métodos de localización asistida y bandas están disponibles y en cómo se representan esos detalles en la telemetría.
- La selección del transporte entre UDP y TCP suele ser configurable; escoja el transporte que coincida con la capacidad del firmware y las necesidades de confiabilidad de su red.
- Valide los nombres de eventos esperados y las cargas útiles contra la documentación de ThinkRace al integrar flujos avanzados como voz bidireccional o telemetría personalizada.
- Confirme el allowlisting de d.plaspy.com y 54.85.159.138 en el puerto 8888 cuando se usen firewalls empresariales.

## Por qué es importante entender el protocolo

Tener una comprensión clara y de alto nivel del protocolo de comunicación del Traxbean Bracelet ayuda a administradores e integradores a asegurar flujo de datos confiable, facilitar la resolución de problemas y predecir el comportamiento cuando los dispositivos se despliegan con Plaspy.

- Simplifica el aprovisionamiento al asegurar que los dispositivos apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888 con el transporte correcto.
- Facilita la resolución de problemas de telemetría faltante revisando el transporte, la resolución DNS hacia d.plaspy.com y las reglas de firewall para el puerto 8888.
- Apoya el mapeo preciso de eventos de dispositivo como alertas de manipulación, SOS y disparadores de geovallas dentro de los flujos de trabajo y notificaciones de Plaspy.
- Reduce el tiempo de integración porque Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint compartido.
- Ayuda en la gestión del ciclo de vida al clarificar qué cambios de firmware o hardware podrían requerir actualizaciones de configuración o revalidación.

## Por qué usar Plaspy con este protocolo

Usar el Traxbean Bracelet junto con Plaspy ofrece una vía directa para organizaciones que necesitan monitoreo continuo centrado en la persona, detección de manipulación y supervisión basada en eventos. Plaspy pone en primer plano ubicaciones, eventos de geovallas, alertas de manipulación y SOS, y otra telemetría del brazalete en paneles y flujos de notificación para que supervisores e integradores puedan actuar sobre eventos de cumplimiento y seguridad en casi tiempo real.

Para más información sobre Plaspy y cómo la plataforma ingiere telemetría de dispositivos, visite https://www.plaspy.com. Para detalles de protocolo o firmware específicos y más actuales, verifique la información con el fabricante en https://www.thinkrace.com/ ya que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo.
