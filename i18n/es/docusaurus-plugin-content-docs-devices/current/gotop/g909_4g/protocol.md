---
slug: /gotop/g909_4g/protocol
id: g909_4g-protocol
sidebar_label: Protocol
title: GOTOP - G909-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el GOTOP G909-4G con Plaspy y lograr seguimiento 4G fiable de vehículos y activos
keywords:
  - Protocolo GOTOP G909-4G
  - Protocolo GPS GOTOP G909-4G
  - Compatibilidad GOTOP G909-4G
  - Rastreador GOTOP Plaspy
  - Protocolo de comunicación G909-4G
  - Protocolo de rastreo G909-4G
  - Protocolo rastreador GPS GOTOP
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de vehículos G909-4G
  - Rastreador de activos G909-4G
---

# GOTOP - Protocolo G909-4G

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP G909-4G Mini Asset GPS con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, qué espera la plataforma de los equipos que reportan y qué funcionalidades del dispositivo suelen trasladarse a Plaspy para supervisión y flujos de trabajo de flotas. El contenido es informativo y sirve para ayudar en la configuración, resolución de problemas y planificación del despliegue de dispositivos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo informa a la plataforma. Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138. The port is 8888. El G909-4G puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del dispositivo y las condiciones de la red. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene validar los detalles específicos del equipo con el fabricante cuando sea necesario.

## Visión general del protocolo

A grandes rasgos, el protocolo de reporte del rastreador define cómo el G909-4G entrega datos de ubicación, telemetría y eventos a un punto remoto como Plaspy. El protocolo es el mecanismo que permite al dispositivo identificarse ante la plataforma, enviar actualizaciones de posición y cargar alarmas o información diagnóstica. En despliegues con Plaspy, el protocolo posibilita visibilidad en tiempo real y reproducción histórica, a la vez que mantiene capacidades del dispositivo como el almacenamiento en búfer y el reporte basado en eventos.

- Identifica el dispositivo y proporciona un identificador consistente para que Plaspy pueda asociar los mensajes entrantes a un registro de activo.
- Transporta fijaciones de posición GNSS y marcas de tiempo para que Plaspy pueda trazar la ubicación en tiempo real y el historial en los mapas.
- Transmite datos de eventos y sensores, como alarmas de aceleración, eventos de exceso de velocidad y notificaciones de entrada o salida de geo-cercas.
- Soporta la subida en búfer de datos almacenados tras la restauración de conectividad, preservando la continuidad del historial y los reportes.
- Permite comandos de configuración y gestión remota cuando el firmware y el fabricante soportan esas funciones.
- Habilita la fusión de telemetría en Plaspy entregando señales que pueden combinarse con otras entradas como consumo de combustible, encendido o sensores externos.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos y reconoce automáticamente el protocolo del rastreador cuando los dispositivos configurados reportan a la plataforma. Dado que Plaspy centraliza los ajustes de conexión, la mayoría de los despliegues no requieren selección manual del protocolo dentro de Plaspy, siempre que el dispositivo apunte al endpoint correcto y use opciones de transporte soportadas.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 which devices can be pointed to for reporting.
- Todos los dispositivos en Plaspy usan el mismo puerto; Plaspy opera en el puerto 8888 para conexiones entrantes de dispositivos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según su firmware, la red y las opciones de configuración.
- Cuando un G909-4G está configurado para reportar al endpoint de Plaspy, la plataforma detectará y clasificará el protocolo del dispositivo de forma automática.
- Los usuarios normalmente solo deben asegurarse de que el APN y la conectividad de red estén configurados correctamente en el dispositivo y que el destino de reporte coincida con la configuración de Plaspy.
- Si un dispositivo no aparece, confirme que está enviando a d.plaspy.com o a la IP del servidor y que la red móvil y la resolución DNS funcionan correctamente.

## Transporte y contexto de conexión

Las opciones de transporte y conexión determinan cómo el G909-4G entrega datos a Plaspy en campo. El rastreador soporta 4G LTE con retroceso a GSM/GPRS y puede usar TCP o UDP como transporte hacia el puerto de Plaspy. Comprender estas opciones de conexión ayuda en la configuración de cortafuegos, planificación de red y expectativas de fiabilidad para actualizaciones en tiempo real frente a reportes de mejor esfuerzo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888; elija el transporte que soporte el firmware del equipo y que se adapte a su red.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para reportar.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración de cortafuegos y NAT en el lado del servidor.
- TCP aporta normalmente mayor fiabilidad de conexión, mientras que UDP puede reducir la sobrecarga y la latencia según el comportamiento del equipo y las condiciones de la red.
- Consideraciones de la red móvil como configuración de APN, plan de datos de la SIM y la intensidad de la señal afectan la capacidad del rastreador para reportar en tiempo real.
- El almacenamiento interno del G909-4G sube automáticamente los datos en caché después de reconectarse a la red.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden añadir, quitar o cambiar características del protocolo; confirme el nivel de firmware del dispositivo al validar el comportamiento.
- Las revisiones de hardware o las variantes regionales pueden implementar modos de reporte o transportes soportados ligeramente distintos.
- Las configuraciones por defecto del fabricante pueden apuntar a un servidor diferente; asegúrese de que el G909-4G esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- La selección de transporte (UDP vs TCP) suele ser configurable y puede afectar las características de entrega y el consumo de batería.
- Algunas funciones avanzadas, como actualizaciones remotas de firmware o monitoreo de voz, dependen del soporte del fabricante y de las capacidades del firmware.
- Valide la nomenclatura de eventos y el comportamiento de las alarmas contra la documentación del equipo al mapear eventos del dispositivo a alertas en Plaspy.
- Siempre contraste los detalles de interoperabilidad con la documentación de GOTOP para el modelo y firmware exactos que esté desplegando.

## Por qué es importante entender el protocolo

Comprender cómo el G909-4G se comunica con Plaspy reduce el tiempo de resolución de problemas y mejora la fiabilidad del despliegue. Cuando integradores y gestores de flotas conocen qué transporte y modos de reporte están en uso, pueden configurar mejor las redes, planificar el comportamiento fuera de línea y asegurar que las alertas críticas lleguen a Plaspy de forma fiable.

- Asegura ajustes correctos del endpoint y transporte para que los mensajes del dispositivo lleguen a Plaspy sin necesidad de seleccionar manualmente el protocolo.
- Ayuda a mapear los eventos y salidas de los sensores del dispositivo a alertas y paneles de Plaspy para una supervisión precisa.
- Permite una mejor planificación ante limitaciones de red móvil, autonomía de batería e intervalos de reporte según el transporte elegido.
- Facilita el diagnóstico de problemas de conectividad comprobando APN, DNS y si el dispositivo envía a d.plaspy.com o a la IP del servidor.
- Aclara qué funciones dependen de versiones de firmware para que se puedan programar actualizaciones y pruebas adecuadas.
- Favorece la integridad histórica y de datos al entender cómo se suben los datos en caché tras la reconexión.

## Por qué usar Plaspy con este protocolo

Usar el G909-4G con Plaspy ofrece una solución práctica para organizaciones que necesitan rastreo compacto y resistente de activos y vehículos. La combinación de conectividad 4G, redundancia GNSS, gestión inteligente de energía y detección de eventos a bordo hace que el G909-4G sea adecuado para gestión de flotas, logística y monitoreo antirrobo cuando se integra con la capacidad de Plaspy para ingerir y visualizar telemetría.

Plaspy simplifica la incorporación de dispositivos al estandarizar el endpoint y el puerto de escucha y detectar automáticamente el protocolo de reporte, reduciendo la configuración manual dentro de la plataforma. Esto ayuda a los equipos a acelerar despliegues, centralizar alertas como exceso de velocidad y eventos de geo-cerca, y gestionar la configuración remota o actualizaciones de firmware cuando estén soportadas.

Para saber más sobre cómo Plaspy trabaja con una amplia gama de rastreadores GPS, visite https://www.plaspy.com. Para detalles de protocolo y firmware específicos por modelo y siempre actualizados, confirme el comportamiento con el fabricante en https://www.gotop.cc/ ya que el soporte de protocolo y las implementaciones de firmware pueden cambiar con el tiempo.
