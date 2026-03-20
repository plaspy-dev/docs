---
slug: /eelink/got10/protocol
id: got10-protocol
sidebar_label: Protocol
title: EElink - GOT10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del rastreador OBD EElink GOT10 y cómo envía ubicación y diagnósticos a Plaspy
keywords:
  - protocolo EElink GOT10
  - protocolo GPS EElink GOT10
  - protocolo rastreador GOT10 OBD
  - compatibilidad GOT10 Plaspy
  - seguimiento OBD II EElink
  - telemetría CAN BUS GOT10
  - protocolo GPS para flotas EElink
  - compatibilidad rastreadores Plaspy
  - protocolo diagnóstico vehicular
  - protocolo de rastreo EElink
---

# EElink - Protocolo GOT10

Esta página describe el contexto público del protocolo para usar el EElink GOT10 con Plaspy. Se centra en los detalles de comunicación y conexión que importan al enviar ubicación y telemetría diagnóstica extraída del CAN BUS desde el GOT10 hacia Plaspy, sin exponer implementaciones internas privadas. El contenido está pensado para ayudar a integradores técnicos, administradores de flotas e instaladores a comprender cómo interactúa el rastreador con Plaspy para garantizar la entrega fiable de datos.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según el firmware, la revisión de hardware y la implementación del fabricante. El GOT10 es un dispositivo que se conecta al OBD, lee datos del CAN BUS y OBD, y reenvía la telemetría a Plaspy para que la ubicación del vehículo y los diagnósticos se puedan visualizar en una única vista de flota.

## Resumen del protocolo

El protocolo usado por el GOT10 define cómo el dispositivo empaqueta y transmite datos OBD y GNSS a un servidor remoto para que plataformas como Plaspy puedan procesarlos. A grandes rasgos, el protocolo garantiza que el rastreador pueda identificarse, reportar telemetría y estados diagnósticos, y permitir que el servidor convierta esos mensajes en registros de ubicación, estado y alertas.

- Permite la transmisión de ubicación y telemetría derivada del CAN BUS desde el GOT10 hacia un servidor backend para su procesamiento.
- Incluye identidad del dispositivo y contexto de sesión para que Plaspy pueda asociar los informes con el vehículo y la cuenta correctos.
- Transporta información diagnóstica, como códigos de falla y métricas operativas, que Plaspy puede mostrar como alertas o en reportes.
- Soporta actualizaciones periódicas de posición y mensajes impulsados por eventos para incidentes como detección de fallas o cambios de ignición.
- Actúa como puente entre la interfaz OBD del vehículo y la canalización de ingestión de datos de Plaspy, de modo que los administradores de flota vean seguimiento y diagnósticos unificados.

## Cómo Plaspy detecta el protocolo

Plaspy acepta mensajes de dispositivos compatibles en un solo endpoint compartido e identifica automáticamente el protocolo del dispositivo. Cuando un GOT10 está correctamente configurado para reportar al endpoint de Plaspy, por lo general no es necesario seleccionar manualmente un protocolo dentro de Plaspy para que el dispositivo comience a reportar.

- Plaspy escucha en la dirección de servidor común d.plaspy.com y en la IP pública 54.85.159.138 para las conexiones entrantes de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de dispositivos en flotas mixtas.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar al endpoint y puerto de Plaspy.
- La configuración correcta del GOT10 para apuntar al endpoint de Plaspy normalmente evita la necesidad de seleccionar el protocolo manualmente en la interfaz de Plaspy.
- Si un dispositivo no aparece, las comprobaciones básicas incluyen verificar el endpoint del dispositivo, el tipo de transporte y que el dispositivo esté alimentado y pueda comunicarse.

## Transporte y contexto de conexión

El GOT10 puede configurarse para usar UDP o TCP según el firmware del dispositivo y la preferencia del instalador; Plaspy acepta ambos transportes en el mismo puerto configurado. Entender la elección de transporte y los ajustes de endpoint es crítico para asegurar que los mensajes lleguen de manera fiable desde el vehículo a Plaspy.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 como endpoint de ingestión de Plaspy.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo y las condiciones de la red.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que simplifica el aprovisionamiento y las reglas de firewall para las flotas.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega bajo condiciones celulares pobres; seleccione el transporte que mejor coincida con la recomendación del firmware del dispositivo.
- Las configuraciones de red de los operadores móviles, módems del vehículo o firewalls locales deben permitir conexiones salientes al endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar campos de mensaje, frecuencias y elementos diagnósticos disponibles; siempre verifique la versión de firmware del dispositivo al diagnosticar diferencias.
- Las revisiones de hardware y las implementaciones CAN del vehículo pueden afectar qué señales OBD o CAN están disponibles para el GOT10.
- Cambios por parte del fabricante o compilaciones regionales de firmware pueden introducir variaciones de protocolo que afectan el empaquetado de la telemetría.
- La selección de transporte (UDP vs TCP) puede estar limitada por el firmware del dispositivo o el comportamiento de la red del operador; confirme qué transporte soporta el GOT10 en su compilación.
- Valide la configuración del dispositivo para que reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y así asegurar la ingestión por parte de Plaspy.
- Para una verificación final del comportamiento detallado, consulte la documentación oficial de EElink o las notas de la versión del firmware.

## Por qué es importante entender el protocolo

Comprender cómo el GOT10 se comunica con Plaspy ayuda a garantizar implementaciones fluidas, agilizar la resolución de problemas y lograr confiabilidad a largo plazo en la telemetría y diagnósticos de la flota. Tener claro el comportamiento de conexión y reporte reduce tiempos de inactividad y mejora la calidad de los datos para la toma de decisiones operativas.

- Identificación más rápida de la causa raíz cuando un vehículo deja de reportar o faltan campos diagnósticos.
- Mejor aprovisionamiento al asegurar que los dispositivos estén configurados al endpoint y transporte correctos antes de la instalación.
- Expectativas más realistas sobre qué señales del CAN BUS y datos OBD el GOT10 puede exponer en su flota.
- Coordinación más efectiva con los operadores y administradores de red para permitir conexiones a d.plaspy.com y 54.85.159.138 en el puerto 8888.
- Escalado de flota simplificado porque Plaspy utiliza un único puerto y detección automática de protocolos en los dispositivos compatibles.

## Por qué usar Plaspy con este protocolo

Usar el GOT10 con Plaspy combina diagnósticos OBD plug and play con rastreo empresarial, proporcionando a los equipos de flota una visibilidad unificada de la ubicación y el estado de los vehículos. Ese flujo combinado ayuda a reducir costos de mantenimiento, acelerar la respuesta ante incidentes y ofrecer reportes más completos para optimizar rutas y programas de seguridad.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos OBD como el GOT10, visite https://www.plaspy.com. Para los últimos detalles específicos de protocolo y firmware del dispositivo, verifique la información en el sitio del fabricante https://www.eelink.com.cn/ ya que el comportamiento del firmware y las implementaciones del protocolo pueden cambiar con el tiempo.
