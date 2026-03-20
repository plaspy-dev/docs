---
slug: /eelink/tk119/protocol
id: tk119-protocol
sidebar_label: Protocol
title: EElink - TK119 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo EElink TK119 y su comunicación con Plaspy para rastreo y gestión fiable de flotas
keywords:
  - protocolo EElink TK119
  - protocolo GPS EElink TK119
  - compatibilidad EElink TK119 Plaspy
  - protocolo de comunicación EElink TK119
  - protocolo de rastreo EElink TK119
  - protocolo de rastreador GPS EElink
  - protocolo TK119 rastreador 3G
  - EELINK Protocolo 2.0
  - compatibilidad de rastreadores con Plaspy
  - rastreo de flotas EElink TK119
---

# EElink - Protocolo TK119

Esta página ofrece contexto público sobre el protocolo para usar el rastreador GPS EElink TK119 con Plaspy. Resume cómo el dispositivo suele reportar posición, estado y alertas a Plaspy y destaca el papel del protocolo de reporte del rastreador para una integración confiable. El contenido se centra en detalles no sensibles y de alto nivel que le ayudarán a planear el despliegue, la configuración y la resolución de problemas con Plaspy.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto general de comunicación del TK119 y referencia los parámetros de conexión públicos de Plaspy.

## Resumen del protocolo

El TK119 es un rastreador GPS 3G WCDMA con funciones orientadas a la gestión de riesgo en vehículos e IoT. En la práctica, el dispositivo emplea un protocolo del fabricante para enviar informes periódicos de posición, alertas de eventos y actualizaciones remotas de estado a un servidor. Para la línea TK119, el fabricante documenta EELINK Protocol 2.0 como una opción común de reporte; Plaspy acepta informes de implementaciones compatibles y extrae datos de ubicación y estado para rastreo y alertas.

- Permite que el rastreador se identifique y entregue coordenadas GPS y ubicación basada en red cuando el GPS no está disponible.
- Envía estado del dispositivo como estado de alimentación, nivel de batería, entrada ACC o encendido, y eventos de GPIO al servidor.
- Transmite notificaciones de alerta y eventos, como entrada/salida de geocerca, exceso de velocidad, vibración o colisión a Plaspy.
- Soporta configuración remota y envío de comandos desde un servidor o por SMS según la configuración del equipo.
- Proporciona un flujo de datos consistente que Plaspy puede mapear en funciones de rastreo, historial y alertas.

## Detección del protocolo por Plaspy

Plaspy escucha en un único endpoint compartido y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar. Dado que Plaspy está diseñado para aceptar muchos protocolos comunes de rastreadores, la mayoría de usuarios no necesita elegir manualmente un protocolo dentro de Plaspy si el dispositivo reporta al endpoint de Plaspy con un formato soportado.

- El dominio del servidor Plaspy para recibir reportes es d.plaspy.com.
- La IP pública del servidor Plaspy es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para conexiones de rastreadores en todos los dispositivos soportados.
- El dispositivo puede configurarse para usar UDP o TCP para enviar datos a Plaspy en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los mensajes del dispositivo llegan al endpoint.
- En la mayoría de los casos, el instalador solo necesita configurar el host de reporte y el transporte del dispositivo y verificar la entrega exitosa.

## Contexto de transporte y conexión

Los detalles de conexión determinan cómo el TK119 alcanza Plaspy, pero son independientes de la carga útil del protocolo. El TK119 soporta datos celulares y puede configurarse para enviar reportes a un host o IP de red. Plaspy expone un endpoint y puerto estables para que los dispositivos apunten a un único lugar para todos los rastreadores soportados.

- Los dispositivos pueden configurarse para apuntar al hostname d.plaspy.com o a la IP 54.85.159.138.
- El rastreador puede usar UDP o TCP en el puerto 8888 según las condiciones de red y la configuración del dispositivo.
- Plaspy utiliza el mismo puerto para todos los dispositivos, lo que simplifica la configuración y las reglas de firewall.
- Confirme que el APN del dispositivo y el plan de datos celulares permiten conexiones salientes al endpoint de Plaspy.
- Asegúrese de que los firewalls de red permitan el tráfico hacia y desde d.plaspy.com en el puerto 8888 mediante el transporte elegido.

## Notas sobre compatibilidad del protocolo

- La línea TK119 es compatible con implementaciones comunes del protocolo EELINK y puede usarse con Plaspy cuando está correctamente configurada.
- Las revisiones de firmware o variantes de modelo pueden incluir cambios de protocolo o campos opcionales que afectan el análisis o la telemetría disponible.
- Diferencias de hardware, como extensiones GPIO adicionales o módulos de relé opcionales, cambian los datos que el dispositivo produce, pero no el transporte de alto nivel.
- Elegir UDP frente a TCP puede afectar el comportamiento de entrega en condiciones celulares deficientes; seleccione el transporte que se ajuste a sus necesidades de fiabilidad y latencia.
- Los métodos de configuración remota soportados por el dispositivo pueden incluir comandos desde servidor, SMS o actualizaciones dirigidas por la plataforma; verifique qué mecanismos están habilitados.
- Valide siempre el comportamiento del dispositivo y las funciones disponibles frente a la documentación del fabricante para su firmware y revisión de hardware específicos.

## Por qué es importante entender el protocolo

Comprender claramente el protocolo del rastreador facilita la puesta en marcha de dispositivos, mejora la resolución de problemas y asegura visibilidad operativa a largo plazo en Plaspy. Saber qué transmite el dispositivo y cómo se conecta reduce las conjeturas cuando faltan reportes o las alertas son inesperadas.

- Acelera la configuración inicial al asegurar que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 con el transporte correcto.
- Ayuda a diagnosticar reportes faltantes o incompletos al correlacionar eventos del dispositivo con registros de red y servidor.
- Orienta la selección de transporte y la estrategia de reintentos apropiada para su zona de cobertura y caso de uso.
- Aclara qué señales del dispositivo, como GPIO, ACC, batería y estados de relé, aparecerán en Plaspy.
- Facilita el seguimiento de versiones de firmware y hardware al comparar el comportamiento de los dispositivos a través de una flota.

## Por qué usar Plaspy con este protocolo

Usar el EElink TK119 con Plaspy brinda a las organizaciones una manera práctica de centralizar datos de ubicación, estado y alertas de un rastreador 3G resistente. La clasificación IP67 del TK119, las extensiones GPIO opcionales y la batería integrada lo hacen adecuado para vehículos y otros activos móviles donde la visibilidad continua y el reporte de eventos son importantes. Cuando se configura para reportar a Plaspy, la telemetría y las alertas del dispositivo forman parte de una vista operacional única para gestión de flotas, cumplimiento y respuesta a incidentes.

Si desea conocer más sobre cómo Plaspy maneja las conexiones de dispositivos y las funciones de la plataforma, visite https://www.plaspy.com. Para la documentación específica más reciente del protocolo del dispositivo, notas de firmware e información de hardware del TK119, consulte al fabricante en https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse contra las fuentes oficiales.
