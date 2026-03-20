---
slug: /intellitrack/intellitrac_x1_plus/protocol
id: intellitrac_x1_plus-protocol
sidebar_label: Protocol
title: Intellitrack - Intellitrac X1 Plus Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Intellitrack Intellitrac X1 Plus y cómo se comunica con Plaspy para rastreo de flotas
keywords:
  - Protocolo Intellitrack Intellitrac X1 Plus
  - protocolo GPS Intellitrack
  - comunicación Intellitrac X1 Plus
  - Intellitrac X1 Plus Plaspy
  - protocolo rastreador GPS
  - protocolo seguimiento vehicular
  - rastreador GPS GPRS
  - rastreador CS Data
  - configuración remota rastreador
  - geocerca rastreador
---

# Intellitrack - Protocolo Intellitrac X1 Plus

Esta página describe el contexto público del protocolo para usar el rastreador Intellitrack Intellitrac X1 Plus con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy de forma general, qué ajustes de conexión son los más comunes y qué aspectos del protocolo son relevantes para una integración exitosa sin exponer detalles privados del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo en el Intellitrac X1 Plus puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Considere esta página como contexto para despliegue y resolución de problemas, no como un manual de firmware.

## Visión general del protocolo

El protocolo de comunicación del Intellitrac X1 Plus define cómo el dispositivo envía ubicación, estado y alertas a un servidor remoto, y cómo acepta configuración remota y actualizaciones de firmware. Para la integración con Plaspy, el protocolo garantiza la entrega confiable de informes de posición y mensajes de evento, a la vez que permite la gestión remota vía CS Data o GPRS cuando el dispositivo lo soporta.

- Transporta ubicación y telemetría desde el rastreador hasta el servidor remoto para que Plaspy pueda mostrar y procesar eventos.
- Entrega tipos de eventos como alertas de geocerca, alarmas de batería baja o pérdida de alimentación y notificaciones de desconexión de antena a la plataforma.
- Soporta mecanismos de configuración remota y actualización de firmware sobre CS Data o GPRS si el dispositivo y la red lo permiten.
- Permite que el rastreador se identifique y reporte el estado del equipo para que Plaspy lo asocie a un registro de activo.
- Habilita modos de reporte configurables, como por tiempo, por distancia o reportes inteligentes para controlar la frecuencia de actualización y el consumo de energía.

## Detección de protocolo por parte de Plaspy

Plaspy recibe los informes entrantes en un endpoint compartido y determina automáticamente qué protocolo de rastreador se está usando, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo en la plataforma. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para la detección automática.

- Plaspy escucha en un solo puerto para todos los dispositivos compatibles y usa lógica de identificación de protocolo en el servidor.
- Los dispositivos configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 pueden alcanzar el endpoint de ingestión de Plaspy.
- Dado que Plaspy detecta el protocolo automáticamente, el paso más habitual es asegurarse de que el rastreador apunte al endpoint y transporte correctos de Plaspy.
- Si un dispositivo soporta reportes por UDP y TCP, configúrelo para usar el transporte que mejor se adapte a las características de la red y del operador SIM.
- Para rastreadores con configuración remota habilitada, los comandos enviados desde Plaspy pueden ajustar modos de reporte y alarmas sin que sea necesaria una selección de protocolo en la interfaz.

## Transporte y contexto de conexión

El Intellitrac X1 Plus admite múltiples transportes de red y opciones de reporte; comprender la capa de transporte es importante para conectividad y configuración de cortafuegos. Para Plaspy, la plataforma espera que los dispositivos alcancen el mismo endpoint y puerto que usan otros rastreadores compatibles.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del equipo y las condiciones de la red.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 para alcanzar el servidor de Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos, lo que simplifica las reglas de red y cortafuegos en una flota mixta.
- La elección entre UDP o TCP afecta la fiabilidad y el manejo de mensajes a nivel de transporte, pero no cambia el rol del protocolo a alto nivel.
- Verifique que la APN de la red móvil y los ajustes de la SIM permitan el transporte seleccionado y el tráfico saliente hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar comandos disponibles, campos de reporte y nombres de eventos; confirme el comportamiento según las notas de firmware del rastreador.
- Revisiones de hardware o características opcionales (por ejemplo soporte de voz opcional o lector de códigos de barras) pueden alterar qué telemetría se reporta.
- El dispositivo soporta reportes por CS Data y GPRS; verifique qué modos de transporte están habilitados en cada unidad antes del despliegue.
- Existe soporte para actualización remota de firmware vía CS Data/GPRS, pero su disponibilidad depende de las configuraciones del fabricante y de las condiciones de la red.
- Puede ser necesario seleccionar UDP o TCP para redes específicas o para cumplir recomendaciones del fabricante.
- Siempre valide la compatibilidad y la disponibilidad de funciones con la documentación oficial del fabricante para el modelo y firmware exactos.

## Por qué es importante entender el protocolo

Tener claro cómo se comunica el dispositivo ayuda a garantizar un seguimiento confiable, reportes de eventos precisos y una resolución de problemas más eficiente al integrar el Intellitrac X1 Plus con Plaspy. Saber qué características puede reportar el equipo y cómo se conecta a la plataforma reduce tiempos de configuración y facilita la operación a largo plazo.

- Ayuda a confirmar APN, SIM y ajustes de transporte para que las cargas lleguen a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Facilita la interpretación de la telemetría entrante, como disparos de geocerca, alarmas de energía y alertas de antena desconectada.
- Permite planear mejor la vida útil de batería y los intervalos de reporte atendiendo a cómo se configuran los modos de reporte.
- Simplifica flujos de trabajo de configuración remota y actualización de firmware cuando existen rutas CS Data o GPRS disponibles.
- Mejora la eficiencia en la solución de problemas al acotar si los problemas provienen del transporte, de la SIM o de diferencias a nivel de firmware.

## Por qué usar Plaspy con este protocolo

Usar el Intellitrac X1 Plus con Plaspy es una forma práctica de convertir la telemetría del dispositivo en información operativa. La plataforma de Plaspy detecta automáticamente el protocolo y consolida datos de ubicación, alarmas y estado del equipo para que las flotas puedan monitorear activos, responder a eventos y gestionar configuraciones de dispositivos de manera más eficiente.

Si desea saber más sobre cómo Plaspy trabaja con rastreadores como el Intellitrac X1 Plus y cómo lograr que los dispositivos reporten a la plataforma, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y revisiones de hardware más recientes, verifique la información en el sitio del fabricante en https://www.systech-iot.com/ ya que el soporte de protocolo y el comportamiento de firmware pueden cambiar con el tiempo.
