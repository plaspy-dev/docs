---
slug: /xexun/ddx04/protocol
id: ddx04-protocol
sidebar_label: Protocol
title: Xexun - DDX04 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador wearable Xexun DDX04 y cómo se comunica con Plaspy para ubicación alertas y telemetría
keywords:
  - protocolo Xexun DDX04
  - protocolo GPS Xexun DDX04
  - compatibilidad DDX04 Plaspy
  - protocolo rastreador wearable Xexun
  - protocolo de comunicación DDX04
  - protocolo rastreador GPS Plaspy
  - protocolo de seguimiento DDX04
  - compatibilidad de dispositivos Plaspy
  - detección de manipulación DDX04
  - rastreador GPS BeiDou Xexun
---

# Xexun - Protocolo DDX04

Esta página ofrece una visión general pública del nivel de protocolo para usar el rastreador wearable GPS y BeiDou Xexun DDX04 con la plataforma Plaspy. Se centra en el contexto de comunicación que permite al DDX04 enviar ubicación, alertas de manipulación, telemetría de salud y datos de eventos a Plaspy para monitorización en tiempo real y reproducción histórica, sin exponer detalles de implementación privados.

Plaspy usa configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el DDX04 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página resume el contexto práctico de comunicación y las consideraciones de integración en vez de formatos de paquetes a bajo nivel.

## Resumen del protocolo

El reloj rastreador DDX04 usa su telemetría interna y posicionamiento de múltiples fuentes para reportar información útil a un servidor backend. El protocolo es el conjunto de reglas y tipos de mensaje que el dispositivo emplea para identificarse, enviar datos de ubicación y sensores, y notificar al servidor sobre eventos como manipulación o batería baja.

- Permite al dispositivo reportar fijaciones de posición de múltiples fuentes y marcas de tiempo a un endpoint de ingestión.
- Transporta señales de manipulación y alertas para que Plaspy genere notificaciones inmediatas y eventos de cumplimiento.
- Lleva telemetría de salud y sensores como ritmo cardíaco y presión arterial para paneles de monitoreo integrados.
- Proporciona reportes periódicos y respuestas bajo demanda para mantener la precisión en historial, reproducción y vistas de posición en vivo.
- Suministra identificación del dispositivo y metadatos de estado que permiten a Plaspy asociar los informes con el rastreador y la cuenta de usuario correctos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint y puerto compartidos, y la plataforma detecta automáticamente qué protocolo de tracker se está utilizando cuando un dispositivo está configurado para reportar correctamente. En la mayoría de los casos, los operadores no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el DDX04 está apuntando al endpoint de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138.
- Plaspy escucha en un único puerto para todos los dispositivos, por lo que el mismo puerto aplica al DDX04.
- El puerto común para la comunicación de dispositivos con Plaspy es el 8888 y Plaspy usa ese puerto de forma uniforme para los trackers soportados.
- Plaspy detecta automáticamente el protocolo del tracker cuando llega un reporte correctamente direccionado al endpoint.
- La configuración adecuada del dispositivo para enviar datos a d.plaspy.com en el puerto estándar suele ser todo lo necesario para la detección.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el DDX04 llega al endpoint de Plaspy a través de redes celulares y qué transportes se usan comúnmente. El dispositivo puede configurarse para enviar sus reportes sobre diferentes capas de transporte según su firmware y las opciones de aprovisionamiento.

- El DDX04 puede configurarse para usar UDP o TCP para comunicarse con Plaspy en el puerto 8888, dependiendo del soporte del dispositivo y de la configuración.
- Los reportes del dispositivo deben dirigirse a d.plaspy.com o directamente a 54.85.159.138 si se requiere direccionamiento por IP en la implementación.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el puerto 8888 es el estándar para permitir el procesamiento entrante por parte de Plaspy.
- El APN celular, el registro en la red y el enrutamiento del operador afectan cómo el dispositivo alcanza Plaspy, pero no cambian el endpoint ni los requisitos de puerto.
- Los firewalls y reglas NAT en pasarelas del cliente deben permitir tráfico saliente UDP o TCP hacia d.plaspy.com en el puerto 8888 para garantizar la entrega.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de mensajes, los campos de telemetría disponibles y los transportes soportados, por lo que confirme la versión de firmware del dispositivo al validar el comportamiento.
- Las revisiones de hardware o las variantes regionales pueden introducir diferencias en las redes soportadas y la disponibilidad de sensores.
- Las opciones de configuración del fabricante pueden permitir elegir entre UDP o TCP; seleccione el modo de transporte que coincida con su red y la guía de Plaspy.
- Plaspy lee reportes desde el endpoint compartido, por lo que la dirección de servidor y el puerto correctos son necesarios para la compatibilidad.
- Valide cualquier característica específica del dispositivo, como la semántica de la alarma por manipulación o los nombres de los campos de telemetría de salud, contra la documentación de Xexun y la configuración del equipo.
- Pruebe los dispositivos en un entorno controlado antes de un despliegue a gran escala para confirmar la cadencia de reportes y la entrega de alertas.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que los dispositivos reporten de manera confiable a Plaspy, que las alertas se correspondan correctamente con los eventos de la plataforma y que la monitorización operativa sea precisa. Un contexto de protocolo claro reduce el tiempo de configuración y facilita la resolución de problemas cuando los dispositivos no aparecen o no se comportan como se espera.

- Asegura que los dispositivos estén configurados para apuntar a d.plaspy.com o a la IP de Plaspy en el puerto correcto.
- Ayuda a solucionar problemas relacionados con el transporte al confirmar si se está usando UDP o TCP.
- Aclara qué campos de telemetría esperar en los reportes de la plataforma para que las alertas y los widgets del panel sean significativos.
- Facilita la planificación de actualizaciones de firmware y flujos de gestión remota que dependen de reportes confiables.
- Apoya la planificación del ciclo de vida de los dispositivos, incluyendo mantenimiento de baterías, reemplazos y actualizaciones OTA.

## Por qué usar Plaspy con este protocolo

Usar el Xexun DDX04 con Plaspy ofrece a las organizaciones una combinación práctica de hardware wearable resistente a manipulaciones y un backend que ingiere ubicación, alertas y telemetría de salud para monitoreo, cumplimiento y supervisión operativa. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación, de modo que los dispositivos apuntados al endpoint de Plaspy comienzan a reportar sin necesidad de seleccionar el protocolo manualmente en la mayoría de los casos.

Para obtener más información sobre Plaspy y cómo gestiona la comunicación de dispositivos y la administración de flotas, visite https://www.plaspy.com. Verifique los detalles más recientes específicos del protocolo del dispositivo, el comportamiento del firmware y las notas de implementación del fabricante en el sitio oficial de Xexun en https://www.xexun.com/ ya que el comportamiento del protocolo y las funciones del firmware pueden cambiar con el tiempo.
