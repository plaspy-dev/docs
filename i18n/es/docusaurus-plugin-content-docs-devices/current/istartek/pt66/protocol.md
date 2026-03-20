---
slug: /istartek/pt66/protocol
id: pt66-protocol
sidebar_label: Protocol
title: iStartek - PT66 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública sobre el protocolo para integrar el rastreador GPS wearable iStartek PT66 con Plaspy mediante ajustes de conexión compartidos
keywords:
  - iStartek PT66
  - Protocolo PT66
  - Rastreador GPS iStartek PT66
  - Compatibilidad PT66 Plaspy
  - Comunicación iStartek PT66
  - Protocolo de rastreo PT66
  - Protocolo GPS wearable PT66
  - Protocolo de dispositivo Plaspy
  - Rastreador PT66 cuidado de adultos mayores
  - Telemetría de salud PT66
---

# iStartek - Protocolo PT66

Esta página explica el contexto público del protocolo para usar el rastreador GPS wearable iStartek PT66 con Plaspy. Resume cómo el dispositivo transmite ubicación, telemetría de salud y eventos de seguridad a Plaspy en términos generales, y aclara el papel de los reportes del dispositivo para una integración exitosa. El objetivo es ofrecer una vista concisa y práctica que ayude a cuidadores, integradores y equipos técnicos a entender cómo los datos del PT66 fluyen hacia Plaspy sin revelar detalles propietarios de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El PT66 puede configurarse para enviar datos por UDP o TCP a Plaspy en el puerto 8888 y puede apuntar a d.plaspy.com o a la IP pública del servidor Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda verificar contra la documentación del dispositivo.

## Resumen del protocolo

El rastreador PT66 empaqueta correcciones de ubicación, telemetría de sensores de salud y eventos de seguridad y los envía a Plaspy para su agregación y generación de alertas. Este protocolo de comunicación es el puente entre el reloj y la plataforma Plaspy, permitiendo visibilidad en tiempo real y el reenvío de eventos para los flujos de trabajo de los cuidadores.

- Transporta datos de ubicación y modos de posicionamiento múltiples, como correcciones asistidas por GNSS y actualizaciones asistidas por la red, hacia Plaspy.
- Transmite eventos de seguridad y alarmas, incluyendo SOS y alertas por caídas, para que Plaspy genere notificaciones y escale cuando esté configurado.
- Envía telemetría periódica desde los sensores de salud integrados y el estado del dispositivo para que los cuidadores puedan monitorear tendencias y recibir alertas.
- Proporciona identidad y estado del dispositivo, lo que permite a Plaspy asociar los datos entrantes con el activo o wearable correcto.
- Permite intervalos de reporte remotos y mensajes basados en eventos para que los paneles y reglas de geocercas de Plaspy actúen con datos oportunos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del dispositivo basándose en el tráfico que envía el rastreador. Cuando un PT66 apunta al endpoint de Plaspy con la configuración correcta, la plataforma asociará el flujo con el dispositivo adecuado y comenzará a procesar su telemetría sin requerir selección manual del protocolo.

- Plaspy escucha en un único puerto para todos los dispositivos compatibles para simplificar la configuración y el onboarding.
- Los dispositivos configurados para reportar a d.plaspy.com o a la IP del servidor Plaspy son aceptados y evaluados por Plaspy para la detección de protocolo.
- La detección automática de protocolo elimina la necesidad de que usted seleccione manualmente un protocolo en Plaspy en la mayoría de los despliegues típicos.
- Una identidad de dispositivo adecuada en los reportes iniciales ayuda a Plaspy a coincidir el rastreador con una cuenta o registro de dispositivo.
- Si un dispositivo envía cargas útiles inesperadas o no compatibles, Plaspy no podrá parsear esos mensajes hasta que coincidan con un patrón soportado.

## Contexto de transporte y conexión

El PT66 puede configurarse para transmitir datos a través de redes celulares y puede usar UDP o TCP según la configuración del dispositivo y el comportamiento del operador. Plaspy ofrece un endpoint consistente para simplificar la configuración y soporta ambos modos de transporte en el mismo puerto, de modo que las implementaciones pueden elegir el que mejor funcione en su entorno.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Plaspy acepta conexiones dirigidas a d.plaspy.com o a la IP pública del servidor Plaspy como endpoints alternativos.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto para reducir errores de configuración y facilitar la provisión.
- La configuración de red y de la SIM, como APN, variantes celulares regionales y restricciones del operador, puede afectar la conectividad y debe validarse.
- Los firewalls y las configuraciones de NAT en su red deben permitir conexiones salientes hacia el endpoint de Plaspy en el transporte y puerto configurados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de los mensajes, la telemetría disponible o los formatos de eventos, por lo que confirme el comportamiento del protocolo según la versión de firmware del dispositivo.
- Las revisiones de hardware y las variantes por región pueden exponer conjuntos de funciones diferentes o requerir pasos de configuración alternativos.
- Los métodos de configuración suministrados por el fabricante, como una app complementaria o comandos por SMS, pueden afectar la forma en que el rastreador reporta a Plaspy.
- La selección de transporte entre UDP y TCP puede influir en el comportamiento de entrega y debería elegirse según las características de la red y las necesidades de fiabilidad.
- Algunas funciones avanzadas, como voz bidireccional, captura remota de fotos o telemetría en streaming, pueden requerir aprovisionamiento adicional con el proveedor del dispositivo o un plan de servicio.
- Valide siempre comportamientos clave como el reporte de identidad y la generación de alarmas durante la provisión inicial antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo el PT66 reporta a Plaspy reduce la fricción en los despliegues, acelera la resolución de problemas y ayuda a garantizar que el dispositivo entregue la telemetría de ubicación y salud esperada a lo largo del tiempo. Tener presente el contexto de comunicación ayuda a los equipos a configurar un monitoreo fiable y a evitar errores comunes de integración.

- Simplifica el onboarding al verificar que el dispositivo esté apuntando al endpoint y puerto correctos de Plaspy.
- Mejora la resolución de problemas al aislar cuestiones de transporte, conectividad o firmware que puedan afectar la entrega de datos.
- Ayuda a configurar reglas de geocerca y alertas en Plaspy utilizando tipos de eventos y expectativas de temporización confiables.
- Apoya la planificación operativa para actualizaciones de firmware y reemplazos de hardware al anticipar cambios en el comportamiento de los mensajes.
- Mejora la calidad de los datos al confirmar que la identidad del dispositivo y la telemetría coinciden con lo esperado antes de alimentarlos en paneles o alarmas.

## Por qué usar Plaspy con este protocolo

Usar el PT66 con Plaspy ofrece a cuidadores y organizaciones acceso centralizado a ubicación, eventos de seguridad y telemetría de salud desde un wearable diseñado para el cuidado de adultos mayores. Plaspy consolida los reportes del PT66 en paneles, notificaciones e informes históricos para que usted pueda monitorear personas, gestionar alertas e integrar datos del wearable junto con otros activos rastreados.

Si desea conocer más sobre cómo Plaspy maneja integraciones de dispositivos y las capacidades generales de la plataforma, visite https://www.plaspy.com. El soporte de protocolo y el comportamiento según nivel de firmware pueden cambiar con el tiempo, por lo que verifique los detalles específicos más recientes del protocolo y la implementación con el fabricante en https://istartek.com/ antes de tomar decisiones operativas.
