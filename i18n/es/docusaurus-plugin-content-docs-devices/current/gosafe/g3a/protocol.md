---
slug: /gosafe/g3a/protocol
id: g3a-protocol
sidebar_label: Protocol
title: Gosafe - G3A Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Gosafe G3A y cómo se comunica con Plaspy, incluyendo ajustes de conexión e integración
keywords:
  - Protocolo Gosafe G3A
  - Protocolo GPS Gosafe G3A
  - Compatibilidad G3A Plaspy
  - Protocolo rastreador Gosafe
  - Protocolo de comunicación G3A
  - Rastreo vehicular Gosafe
  - Notas de firmware G3A
  - Rastreador GPS Plaspy
  - Protocolo de rastreo Gosafe
  - Gestión de flotas G3A
---

# Gosafe - Protocolo G3A

Esta página ofrece un panorama público del protocolo para usar el rastreador Gosafe G3A con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué parámetros de conexión expone Plaspy y qué consideraciones de integración son relevantes al vincular el G3A con un servidor de gestión de flotas. El objetivo es describir el papel del rastreador en la comunicación sin revelar detalles privados o sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en una unidad G3A concreta puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en información pública y generalmente aplicable, recomendando siempre validar con la documentación del fabricante.

## Resumen del protocolo

El protocolo es el conjunto de comportamientos de comunicación que utiliza el G3A para enviar datos de ubicación, movimiento y eventos a un servidor remoto y para recibir mensajes de configuración o comandos cuando están soportados. Para la integración con Plaspy, el protocolo determina cómo el dispositivo se identifica, cómo se formatea y transmite la telemetría y qué eventos se reportan a la plataforma.

- Permite que el G3A envíe actualizaciones de posición, estado y eventos a un servidor remoto para su procesamiento.
- Transporta la identidad y el estado del dispositivo para que Plaspy pueda atribuir los mensajes entrantes al activo correcto.
- Habilita opciones de configuración como modos de reporte, disparadores de eventos y comportamientos de entradas/salidas que pueden aplicarse mediante herramientas del fabricante o comandos remotos compatibles.
- Traduce eventos del acelerómetro y de entradas del dispositivo en telemetría utilizable que Plaspy puede mostrar y usar para alertas.
- Proporciona el mecanismo para que el dispositivo detecte y reporte interferencias o bloqueo de la señal GSM como parte de su flujo de eventos.

## Cómo Plaspy detecta el protocolo

Plaspy expone un único endpoint y puerto compartido para el reporte de dispositivos y utiliza detección integrada para identificar el protocolo del rastreador. En la mayoría de los casos, un G3A correctamente configurado que apunte al endpoint de Plaspy será reconocido automáticamente y comenzará a enviar datos utilizables sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy acepta conexiones de dispositivos en el dominio d.plaspy.com y la IP pública 54.85.159.138.
- El puerto de escucha compartido para Plaspy es 8888 y todos los dispositivos soportados por Plaspy usan ese mismo puerto.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP en el puerto 8888 según las capacidades del equipo y las preferencias de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido, por lo que normalmente no es necesario seleccionar el protocolo de forma manual en la interfaz del servidor.
- Si un dispositivo no aparece o no envía telemetría, confirme que está configurado para reportar a d.plaspy.com (o a la IP indicada) en el puerto 8888 y que el transporte elegido coincide con la configuración del dispositivo.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el G3A entrega los datos a Plaspy, pero no cambian el significado a alto nivel de los mensajes. Muchos problemas de integración se originan por desajustes en el transporte, la configuración del destino o la alcanzabilidad de la red más que por diferencias en el formato del protocolo.

- El G3A puede configurarse para usar UDP o TCP en el puerto 8888; seleccione el transporte que mejor se ajuste a su despliegue y a los requisitos de confiabilidad de la red.
- Los dispositivos pueden apuntar al nombre de host d.plaspy.com o a la IP 54.85.159.138 como destino de reporte para Plaspy.
- El puerto 8888 es el único puerto que usa Plaspy para todo el reporte de dispositivos y debe permanecer abierto y permitido a través de cualquier firewall o dispositivo NAT intermedio.
- Las condiciones de la red móvil, el NAT del operador y la configuración del APN pueden afectar si el dispositivo alcanza con éxito el endpoint de Plaspy.
- Asegúrese de que el firmware y la configuración del dispositivo estén ajustados para enviar al endpoint de Plaspy y que los intervalos de reporte o los modos de suspensión del dispositivo estén alineados con sus necesidades de monitoreo.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar según la versión de firmware del G3A; las actualizaciones de firmware pueden añadir o modificar funciones o el reporte de eventos.
- Revisiones de hardware o variantes regionales pueden ocasionar pequeñas diferencias en las entradas soportadas, sensores analógicos o en el comportamiento de detección de interferencias.
- La elección entre UDP y TCP afecta las semánticas de entrega y puede influir en el reenvío o en la latencia observada en la plataforma.
- Las herramientas y comandos de configuración del fabricante pueden ser necesarios para establecer el destino de reporte y el transporte; consulte la guía oficial de Gosafe para esos pasos.
- Valide la compatibilidad y los ajustes recomendados con la documentación del producto G3A antes de desplegar dispositivos en producción.
- Si depende de funciones específicas como reporte activado por acelerómetro o alertas por interferencia GSM, confirme que esas capacidades están presentes en la versión de firmware de su dispositivo.

## Por qué importa entender el protocolo

Tener un buen entendimiento del protocolo de comunicación del rastreador ayuda a garantizar que los dispositivos se conecten correctamente, reporten de forma confiable y se comporten como se espera dentro de Plaspy. Comprender el rol del transporte, la configuración del destino y la semántica de eventos reduce el tiempo de configuración y simplifica la resolución de problemas.

- Evita desajustes de configuración al aclarar cuál es el destino y el transporte que debe usar el dispositivo.
- Ayuda a interpretar la telemetría en Plaspy al diagnosticar datos faltantes o inesperados.
- Orienta las decisiones sobre intervalos de reporte, gestión de energía y disparadores de eventos para un monitoreo confiable.
- Facilita la planificación de actualizaciones de firmware y la gestión de variaciones de hardware que pueden cambiar el comportamiento de reporte.
- Mejora la respuesta ante incidentes cuando intervienen funciones como detección de interferencias GSM o eventos del acelerómetro.

## Por qué usar Plaspy con este protocolo

Usar el Gosafe G3A con Plaspy brinda a las organizaciones una manera sencilla de recolectar datos de ubicación, movimiento y eventos desde rastreadores compactos y visualizar esa información en un entorno centralizado de gestión de flotas. La batería de respaldo interna del G3A, su acelerómetro, los múltiples modos de entradas/salidas y la detección de interferencias lo convierten en un dispositivo versátil para monitoreo de vehículos y activos, mientras que Plaspy se encarga de la colección, la detección de protocolo y la normalización básica de telemetría.

Para saber más sobre cómo Plaspy puede trabajar con el G3A y otros dispositivos, visite https://www.plaspy.com. Para los detalles más actuales y específicos del protocolo de cada dispositivo, el comportamiento del firmware y la guía del fabricante, confirme la información en el sitio oficial de Gosafe https://gosafesystem.com/ ya que los detalles de implementación pueden cambiar con el tiempo.
