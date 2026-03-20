---
slug: /cantrack/gf70l/protocol
id: gf70l-protocol
sidebar_label: Protocol
title: CanTrack - GF70L Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar CanTrack GF70L con Plaspy, incluye notas sobre transporte y detección
keywords:
  - Protocolo CanTrack GF70L
  - Protocolo GPS CanTrack GF70L
  - CanTrack GF70L Plaspy
  - Protocolo de rastreo GF70L
  - Protocolo de comunicación GF70L
  - Protocolo de rastreador CanTrack
  - Rastreador de activos GF70L
  - Compatibilidad de protocolo Plaspy
  - Rastreo vehicular GF70L
  - Rastreador GPS solar GF70L
---

# CanTrack - Protocolo GF70L

Esta página ofrece el contexto público del protocolo para usar el rastreador CanTrack GF70L con Plaspy. Explica, en términos generales, cómo se comunica el GF70L y qué aspectos considerar al dirigir el dispositivo hacia Plaspy para reportes de posición, alertas y estados. La información está pensada para integradores y administradores que necesiten comprender los requisitos de conexión y el rol de comunicación sin exponer detalles de implementación privados del fabricante.

El GF70L es un rastreador de activos recargable con batería de 12000mAh, paneles solares para carga, montaje magnético robusto y funciones como geovallas, alarmas de batería baja y de vibración, opción de micrófono y varios modos de rastreo. Plaspy usa ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo puede variar según la versión de firmware, revisión de hardware e implementación del fabricante. Confirme el comportamiento específico del equipo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo del rastreador describe el conjunto de comportamientos que el GF70L emplea para identificarse, reportar ubicación y estado, y recibir configuración mientras está conectado a un servidor como Plaspy. En la práctica, define los tipos de mensajes que el dispositivo envía para actualizaciones de ubicación, alarmas, estado de batería y cómo el servidor reconoce o responde a esos mensajes.

- Habilita reportes periódicos y por evento de la ubicación GPS y del estado del dispositivo hacia Plaspy
- Transporta señales de alarma y telemetría como eventos de geovalla, batería baja y alertas por vibración
- Permite el intercambio de mensajes de configuración o latido entre servidor y dispositivo necesarios para monitoreo confiable
- Proporciona la información de identificación que Plaspy requiere para asociar una unidad GF70L específica con una cuenta o registro de dispositivo
- Soporta diferentes modos de rastreo, como tiempo real, intervalos cronometrados o rastreo inteligente según lo implemente el firmware del dispositivo

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint compartido e identifica automáticamente el protocolo del dispositivo. Cuando un GF70L está configurado para reportar a Plaspy, la plataforma usa los datos de conexión y el contenido de los mensajes para enrutar e interpretar los reportes entrantes sin que el usuario tenga que seleccionar manualmente un protocolo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para el reporte de dispositivos
- El puerto es 8888 y Plaspy detecta automáticamente el protocolo del rastreador en ese endpoint
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas
- Normalmente el usuario no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy
- Si un rastreador envía mensajes no estándar o se usa un firmware personalizado, consulte la documentación del fabricante para orientación sobre compatibilidad

## Transporte y contexto de conexión

El transporte de la conexión y el direccionamiento son fundamentales para que el GF70L reporte en Plaspy. El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según soporte del equipo y requisitos de red, y puede apuntar tanto al dominio de Plaspy como a la dirección IP.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el firmware y las necesidades de red
- Los equipos pueden apuntar a d.plaspy.com o a 54.85.159.138 al reportar a Plaspy
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para simplificar despliegues y reglas de firewall
- Elija UDP para una entrega más simple y sin estado cuando esté soportado, o TCP cuando se prefiera entrega fiable y comportamiento de sesión por parte del dispositivo
- Asegúrese de que el APN, los datos de la SIM y las reglas de firewall de la red permitan conexiones salientes al endpoint y puerto de Plaspy

## Notas sobre compatibilidad del protocolo

- La compatibilidad del GF70L con Plaspy depende del comportamiento de reporte estándar disponible en el firmware y la configuración del dispositivo
- Las actualizaciones de firmware o revisiones de hardware pueden modificar la cadencia de mensajes, los campos disponibles y las funciones opcionales
- La selección del transporte entre UDP y TCP puede afectar la semántica de entrega y el consumo de batería; valide el transporte elegido en dispositivos en producción
- Hardware opcional como el micrófono o la lógica de carga solar por lo general no cambia el reporte básico de ubicación, pero puede influir en la gestión de energía y los intervalos de reporte
- Siempre valide el comportamiento de alarmas como geovallas, batería baja o vibración con el firmware actual para asegurar el manejo esperado en servidor
- Confirme cualquier ajuste personalizado o específico del proveedor con la documentación oficial de CanTrack antes de desplegar a gran escala

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GF70L facilita una configuración correcta, reportes fiables y una resolución de problemas más eficiente al integrarlo con Plaspy. Tener expectativas claras sobre transporte, tiempos de mensaje y semántica de alarmas reduce el tiempo de integración y mejora la disponibilidad operativa.

- Ayuda a garantizar que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto correcto
- Reduce el tiempo dedicado a diagnosticar reportes faltantes al aclarar si el transporte, el APN o el firmware son la causa
- Mejora el rendimiento de batería y solar al alinear intervalos de reporte con las funciones de gestión de energía
- Asegura que las alarmas y eventos de geovalla lleguen y sean procesados por Plaspy como se espera
- Orienta la decisión entre usar UDP o TCP según la confiabilidad de la red y el comportamiento del dispositivo

## Por qué usar Plaspy con este protocolo

Usar Plaspy con un rastreador como el GF70L ofrece una plataforma única para visibilidad de activos, manejo de alarmas y datos históricos de ubicación. El modelo de endpoint compartido y la detección automática de protocolos de Plaspy reducen la complejidad de configuración para flotas que incluyen una mezcla de tipos de dispositivos, permitiendo que los equipos se concentren en el monitoreo operativo en lugar de en detalles de bajo nivel del protocolo.

Si desea obtener más información sobre cómo Plaspy trabaja con dispositivos como el CanTrack GF70L y evaluar su adecuación para su despliegue, visite https://www.plaspy.com. Para detalles más actualizados y específicos del dispositivo, notas de firmware y orientación de implementación, consulte al fabricante en https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
