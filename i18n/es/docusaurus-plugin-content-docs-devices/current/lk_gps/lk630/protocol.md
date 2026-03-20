---
slug: /lk_gps/lk630/protocol
id: lk630-protocol
sidebar_label: Protocol
title: LK-GPS - LK630 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo LK630 CatM y cómo se comunica con Plaspy para un rastreo de mascotas confiable
keywords:
  - LK-GPS
  - LK630
  - protocolo LK630
  - rastreador GPS LK630
  - compatibilidad Plaspy
  - protocolo rastreador GPS
  - protocolo CatM
  - comunicación rastreador de mascotas
  - integración protocolo de rastreo
  - protocolo de dispositivo Plaspy
---

# LK-GPS - Protocolo LK630

Esta página describe el contexto público del protocolo para usar el equipo LK-GPS LK630 CatM con Plaspy. Resume cómo el dispositivo se comunica con el endpoint de ingestión de Plaspy y qué papel tiene el protocolo de reporte del rastreador para entregar actualizaciones de ubicación, movimiento y estado a un servicio centralizado de monitoreo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo comienza a reportar a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento se enfoca en el contexto público y práctico más que en detalles específicos de firmware.

## Visión general del protocolo

El protocolo de reporte LK630 es el mecanismo por el cual el dispositivo transmite posicionamiento y telemetría a un servidor para su almacenamiento, visualización y generación de alertas. En términos generales, el protocolo permite la identificación, el reporte periódico o por eventos, y la entrega de datos auxiliares como pistas de Wi‑Fi o Bluetooth junto a las ubicaciones GPS para que la plataforma Plaspy ofrezca un rastreo de mascotas preciso y oportuno.

- Permite que el LK630 anuncie su identidad y envíe actualizaciones de ubicación periódicas o por eventos a un servidor.
- Transporta telemetría como nivel de batería, estado de movimiento o actividad, y datos de posicionamiento auxiliar a Plaspy para alertas.
- Aporta contexto para eventos de geocerca, de modo que las alertas de entrada y salida sean útiles dentro de las reglas y notificaciones de Plaspy.
- Soporta la entrega de información auxiliar de Wi‑Fi y Bluetooth que mejora la precisión en entornos urbanos e interiores cuando se combina con GPS.
- Permite la gestión y el monitoreo centralizado del dispositivo, con rutas históricas e historial de alertas disponibles en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes en un endpoint y puerto compartidos y usa detección automática para identificar el protocolo del rastreador cuando un dispositivo correctamente configurado comienza a reportar. En la mayoría de los casos, cuando el LK630 está configurado para enviar datos al endpoint de Plaspy, no se requiere seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy utiliza un único endpoint público para el reporte de dispositivos para simplificar la configuración y reducir la necesidad de ajustes por dispositivo.
- Los dispositivos configurados para reportar a d.plaspy.com o a la IP del servidor de Plaspy son enrutados al mismo servicio de ingestión.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las conexiones entrantes, por lo que los usuarios generalmente no deben elegir un protocolo manualmente.
- Una configuración correcta en el lado del dispositivo —host y transporte adecuados— garantiza que la plataforma pueda identificar e ingerir los mensajes.
- Si surgen problemas de conexión o de reporte, verifique la configuración de red del dispositivo, el firmware y que el dispositivo esté apuntando al endpoint de Plaspy.

## Transporte y contexto de conexión

El contexto de transporte y conexión describe cómo el LK630 alcanza el endpoint de ingestión de Plaspy. Dependiendo de las capacidades y la configuración del dispositivo, el rastreador puede usar transporte UDP o TCP en el puerto compartido de Plaspy. Plaspy proporciona tanto un nombre de host como una IP para adaptarse a distintas opciones de configuración del dispositivo.

- El LK630 puede configurarse para enviar reportes por UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones elegidas.
- Los dispositivos pueden apuntar al servidor Plaspy usando el nombre de host d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar el aprovisionamiento y el manejo en el servidor.
- La selección entre UDP o TCP suele hacerse en el lado del dispositivo; consulte los ajustes del equipo y las opciones de firmware al cambiar el transporte.
- La fiabilidad de la red, el comportamiento de NAT y las configuraciones del operador pueden afectar si TCP o UDP es más apropiado para una implementación dada.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de reporte, los campos de telemetría disponibles y los datos auxiliares opcionales; siempre tome nota de la versión de firmware al diagnosticar.
- Revisiones de hardware o variantes de modelo pueden implementar opciones de reporte o preferencias de transporte ligeramente distintas.
- Las herramientas de configuración del fabricante o aplicaciones complementarias pueden cambiar cómo el rastreador apunta a los endpoints del servidor y qué transporte utiliza.
- Si un dispositivo soporta tanto UDP como TCP, pruebe ambos transportes en su entorno para determinar la opción más fiable.
- La detección automática de protocolo de Plaspy reduce la configuración manual, pero la configuración correcta de host y puerto en el LK630 sigue siendo esencial.
- Valide la compatibilidad y los procedimientos de configuración contra la documentación más reciente del fabricante para instrucciones específicas del dispositivo.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del LK630 ayuda a asegurar una configuración fluida, un diagnóstico preciso y un funcionamiento confiable a lo largo del tiempo cuando el dispositivo se usa con Plaspy. Saber cómo reporta el rastreador y qué datos incluye permite un diagnóstico más rápido de problemas de conectividad o reporte y apoya decisiones informadas sobre intervalos de reporte y perfiles de energía.

- Ayuda a verificar que el dispositivo está configurado correctamente para alcanzar el endpoint de Plaspy y usar el transporte previsto.
- Permite una solución de problemas dirigida cuando los reportes faltan, se retrasan o están incompletos.
- Orienta las decisiones sobre frecuencia de reporte y gestión de energía para equilibrar la duración de batería y las necesidades de rastreo.
- Facilita la interpretación de datos auxiliares como pistas de Wi‑Fi o Bluetooth al evaluar la precisión de la posición en Plaspy.
- Reduce el tiempo para resolver problemas de integración al clarificar cuándo el comportamiento es responsabilidad del dispositivo y cuándo corresponde a la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el LK630 con Plaspy centraliza los datos de ubicación y estado en una sola plataforma para monitoreo, notificaciones y análisis histórico. Para propietarios de mascotas y administradores de despliegues pequeños, Plaspy incorpora la ubicación en tiempo real del LK630, alertas de geocerca e informes de actividad en paneles y reglas que simplifican la supervisión diaria y la respuesta ante incidentes.

El modelo de endpoint compartido y la detección automática de protocolos de Plaspy reducen la complejidad de configuración, permitiendo que el LK630 se integre con pasos manuales mínimos una vez que el dispositivo esté apuntando al host y transporte correctos. Para saber más sobre Plaspy y cómo maneja la ingestión y el monitoreo de dispositivos, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que por favor verifique la información más reciente del fabricante en https://www.lk-gps.com.
