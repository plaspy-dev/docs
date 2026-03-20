---
slug: /istartek/pt23/protocol
id: pt23-protocol
sidebar_label: Protocol
title: iStartek - PT23 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS iStartek PT23 y su comunicación con Plaspy para monitoreo en tiempo real confiable
keywords:
  - protocolo iStartek PT23
  - rastreador GPS PT23
  - compatibilidad iStartek Plaspy
  - protocolo de comunicación PT23
  - protocolo de seguimiento PT23
  - guía de protocolo rastreador GPS
  - rastreador GPS para niños
  - integración de dispositivos Plaspy
  - detección de protocolo Plaspy
  - rastreador GPS portátil
---

# iStartek - Protocolo PT23

Esta página resume el contexto público del protocolo para usar el reloj rastreador GPS iStartek PT23 destinado a niños con la plataforma Plaspy. Describe cómo el dispositivo reporta posición y estado a Plaspy y qué puede esperar durante la configuración y la operación continua, sin exponer detalles privados o sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo para el PT23 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; use esta página como un panorama general del protocolo y verifique los detalles específicos del dispositivo con la documentación de iStartek cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del PT23 permite que el dispositivo entregue ubicación, telemetría, alertas y mensajes de eventos para que Plaspy pueda mostrar mapas en vivo, rutas históricas y notificaciones de seguridad. En términos prácticos, el protocolo define cómo el reloj se identifica, cómo se transmiten los intervalos de reporte y los eventos de alarma, y cómo Plaspy recibe esa información para su visualización y automatizaciones.

- Transporta fijaciones de posición y telemetría complementaria como nivel de batería y modo de reporte para que Plaspy las procese.
- Transmite mensajes de evento como activaciones de SOS, rupturas de geocerca y solicitudes de sesión de voz bidireccional en un formato que Plaspy puede convertir en alertas.
- Soporta reportes configurables por tiempo, distancia y kilometraje que determinan la frecuencia y el contenido de los mensajes enviados al servidor.
- Actúa como puente entre las funciones de hardware del dispositivo y los paneles de Plaspy, transformando mensajes crudos en datos de monitoreo accionables.
- Puede incluir fuentes de ubicación de respaldo, como Wi Fi y LBS, para complementar GNSS y ofrecer cobertura más amplia.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes entrantes en un endpoint y puerto compartidos y utiliza esa conexión para identificar automáticamente el formato de reporte del rastreador. En la mayoría de las implementaciones, el dispositivo solo necesita apuntar al endpoint de Plaspy para que la plataforma gestione la detección y la ingestión sin selección manual de protocolo.

- Plaspy escucha el tráfico de dispositivos en el endpoint común d.plaspy.com y en la IP numérica 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que un PT23 configurado para reportar al endpoint de Plaspy empleará el puerto 8888.
- Plaspy puede aceptar reportes enviados al endpoint mediante el transporte soportado y la plataforma detectará el protocolo del rastreador automáticamente.
- Generalmente, los usuarios no necesitan elegir un protocolo específico dentro de Plaspy si el PT23 está configurado para reportar a la dirección y puerto de Plaspy.
- Una configuración adecuada del dispositivo y firmware actualizado aumentan la probabilidad de detección automática inmediata y de reportes fiables.

## Contexto de transporte y conexión

El PT23 admite múltiples opciones de transporte para enviar mensajes a servidores, y el contexto de conexión determina cómo el dispositivo alcanza Plaspy. Entender las opciones de transporte ayuda a verificar la configuración de red y de la SIM durante la puesta en marcha.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la compatibilidad del equipo y las preferencias de configuración.
- Los dispositivos pueden apuntar al nombre de dominio de Plaspy d.plaspy.com o directamente al endpoint numérico 54.85.159.138.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que el puerto de entrada estándar para datos de rastreadores es el 8888.
- La selección del transporte puede afectar características de entrega de mensajes como latencia y fiabilidad según el comportamiento de la red móvil.
- El reporte por SMS suele estar soportado como alternativa en el PT23 para entornos donde los datos por paquete están restringidos, pero TCP o UDP al endpoint de Plaspy es el método principal para paneles en tiempo real.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware entre unidades PT23 pueden cambiar el contenido de los mensajes, los campos soportados y el comportamiento; verifique la versión de firmware del dispositivo al solucionar problemas.
- Revisiones de hardware o diferencias regionales del modelo pueden alterar los transportes disponibles o el rendimiento GNSS y deben validarse con la documentación de iStartek.
- Seleccionar TCP en lugar de UDP en el dispositivo puede mejorar la fiabilidad o reducir la sobrecarga según las condiciones de red y el soporte del operador.
- El reenvío por servidores del fabricante y las configuraciones locales del vendedor pueden afectar si el dispositivo reporta directamente a Plaspy o a través de servidores intermedios.
- Confirme siempre que el PT23 esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para la ingestión directa por Plaspy.
- Valide el comportamiento de geocerca y SOS después de la configuración, ya que el reporte de eventos puede verse influido por las opciones del dispositivo y el firmware.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el PT23 a nivel de protocolo ayuda a garantizar un rastreo confiable, alertas oportunas y una resolución de problemas más sencilla al integrarlo con Plaspy. Tener claridad sobre el transporte y el comportamiento de los mensajes reduce errores de configuración y acorta el tiempo hasta una implementación estable.

- Permite verificar que el dispositivo esté correctamente dirigido al endpoint y puerto de Plaspy para que los mensajes lleguen a la plataforma.
- Orienta la selección de transporte entre UDP y TCP para adaptarse a las necesidades de rendimiento y fiabilidad de la red.
- Facilita la identificación rápida de problemas relacionados con diferencias de firmware o configuración de reportes.
- Apoya diagnósticos relevantes cuando mensajes de evento como SOS o alertas de geocerca no aparecen como se espera.
- Incrementa la confianza en la retención de rutas históricas y en la telemetría cuando se entiende la frecuencia y el contenido de los mensajes.

## Por qué usar Plaspy con este protocolo

Usar el PT23 con Plaspy ofrece una forma práctica de convertir las capacidades de posicionamiento multimodo del reloj, SOS y funciones de voz en visibilidad en tiempo real, reproducción histórica y alertas configurables para padres, escuelas y cuidadores. Plaspy ingiere los reportes del PT23 y los presenta en paneles y flujos de trabajo que simplifican el monitoreo sin exigir a los usuarios finales un manejo profundo del protocolo.

Si desea saber más sobre Plaspy y cómo funciona con los rastreadores compatibles visite https://www.plaspy.com. Para obtener los detalles más actuales a nivel de dispositivo, notas de firmware y especificaciones de implementación, por favor verifique la información con el fabricante en https://istartek.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
