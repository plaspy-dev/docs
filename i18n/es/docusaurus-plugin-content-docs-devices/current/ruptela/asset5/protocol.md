---
slug: /ruptela/asset5/protocol
id: asset5-protocol
sidebar_label: Protocol
title: Ruptela - Asset5 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo de Ruptela Asset5 y cómo se comunica con Plaspy para el seguimiento confiable de activos
keywords:
  - protocolo Ruptela Asset5
  - protocolo GPS Ruptela Asset5
  - protocolo de comunicación Ruptela Asset5
  - protocolo de rastreo Ruptela Asset5
  - Ruptela Asset5 Plaspy
  - rastreador GPS Asset5
  - comunicación Asset5
  - protocolo rastreador Ruptela
  - protocolo rastreador GPS Plaspy
  - rastreo de activos Plaspy
---

# Ruptela - Protocolo Asset5

Esta página resume el contexto público del protocolo para usar el rastreador Ruptela Asset5 con la plataforma Plaspy. Se centra en cómo el Asset5 transmite localización y telemetría a Plaspy, cuáles son los detalles de conexión públicos y qué considerar al confirmar la configuración del dispositivo para reportes fiables.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware del Asset5, la revisión de hardware y las implementaciones de Ruptela, por lo que esta página debe verse como contexto del protocolo más que como un manual de firmware.

## Visión general del protocolo

El protocolo de comunicación del Asset5 define cómo el dispositivo envía posiciones GNSS, eventos de movimiento, telemetría de batería y estado, y señales opcionales relacionadas con Bluetooth hacia la nube. En la práctica, este protocolo permite que el rastreador se identifique ante Plaspy y entregue datos de ubicación y estado utilizables para paneles y alertas.

- Transmite fixes GNSS con respaldo de Cell ID para proporcionar datos de ubicación a Plaspy.
- Reporta eventos de movimiento y del acelerómetro para activar actualizaciones más frecuentes mientras el activo está en movimiento.
- Envía nivel de batería y telemetría de salud del dispositivo para que Plaspy pueda monitorear la operación a largo plazo.
- Usa Bluetooth LE para configuración local y para datos opcionales de sensores o balizas locales que pueden asociarse al dispositivo en Plaspy.
- La identidad del dispositivo y la cadencia de reporte se comunican para que Plaspy presente ubicación en tiempo real, historial y notificaciones de eventos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint de servidor compartido y determina automáticamente el protocolo del rastreador a partir de los datos entrantes y el contexto de conexión. Cuando el Asset5 está configurado para reportar al endpoint de Plaspy, por lo general no es necesario seleccionar el protocolo manualmente en la plataforma.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for public reporting.
- Plaspy escucha en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos compatibles.
- El Asset5 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Cuando el dispositivo envía reportes bien formados al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia el equipo con las rutinas de procesamiento correspondientes.
- Generalmente usted solo debe asegurarse de que el dispositivo esté apuntando a d.plaspy.com o a la IP indicada y que use el puerto 8888 para reportar.

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el Asset5 llega a Plaspy a través de redes celulares. Estos parámetros afectan la entrega y el enrutamiento más que la estructura interna de los mensajes.

- El Asset5 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP directa 54.85.159.138 para el reporte.
- Plaspy usa el puerto 8888 de forma universal para el reporte de dispositivos, por lo que el mismo puerto se emplea en los rastreadores compatibles.
- Las variantes celulares y las configuraciones del operador de red pueden influir en si TCP o UDP es más recomendable por motivos de fiabilidad y consumo energético.
- Asegúrese de que cualquier firewall intermedio o la configuración de APN permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en Asset5 pueden cambiar qué campos de telemetría se envían y cuándo, por lo que conviene verificar el comportamiento para una build de firmware concreta.
- Las diferencias de hardware o variantes (LTE Cat M1, NB IoT, Cat 1bis, fallback 2G) pueden afectar las características de conectividad y la fiabilidad de los reportes.
- La selección de transporte entre UDP y TCP puede ser configurable; elija el transporte que su SIM y su red soporten para obtener mejores resultados.
- Las herramientas de configuración del fabricante y los flujos de trabajo de configuración por Bluetooth pueden cambiar; confirme cómo está configurado el dispositivo para apuntar a Plaspy antes del despliegue.
- Valide siempre cualquier ajuste específico del dispositivo con la documentación actual de Ruptela para la variante exacta de Asset5 que utilice.
- Las políticas del operador de red y la configuración de APN pueden influir en la consistencia con la que el dispositivo alcanza el endpoint de Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del Asset5 y el contexto de transporte ayuda a garantizar una integración fluida con Plaspy y facilita la resolución de problemas y la planificación del ciclo de vida.

- Confirma que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 y utiliza el puerto 8888 para que Plaspy pueda recibir los reportes.
- Ayuda a diagnosticar problemas como actualizaciones de ubicación faltantes, reportes poco frecuentes o consumo de batería inesperado.
- Orienta la decisión entre UDP y TCP según conectividad, fiabilidad y compensaciones de consumo energético para su despliegue.
- Informa la planificación de actualizaciones de firmware y las expectativas sobre nuevos campos de telemetría o cambios de comportamiento.
- Mejora la preparación para la solución de problemas en campo al comprender qué tipos de datos puede enviar el rastreador y cuándo se puede activar el reporte por movimiento.

## Por qué usar Plaspy con este protocolo

Emparejar el Asset5 con Plaspy ofrece una solución sencilla y de bajo mantenimiento para el seguimiento de activos no alimentados y de alto valor. La larga duración de batería del Asset5, su GNSS multiconstelación y el reporte sensible al movimiento, junto con la plataforma de Plaspy, proporcionan visibilidad de ubicación consistente, alertas de eventos e informes históricos para supervisión operativa.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el Asset5, visite https://www.plaspy.com. Para detalles específicos más recientes sobre el protocolo del dispositivo, comportamiento del firmware y pautas de implementación, verifique la información actual en el sitio del fabricante https://ruptela.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación oficial del fabricante.
