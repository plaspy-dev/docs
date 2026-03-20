---
slug: /cantrack/g900ls/protocol
id: g900ls-protocol
sidebar_label: Protocol
title: CanTrack - G900LS Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la compatibilidad de CanTrack G900LS con Plaspy
keywords:
  - CanTrack G900LS
  - protocolo G900LS
  - protocolo CanTrack
  - protocolo GPS G900LS
  - protocolo rastreador GPS
  - compatibilidad Plaspy
  - rastreo vehicular G900LS
  - comunicación G900LS
  - rastreo de flotas G900LS
  - compatibilidad GT06
---

# CanTrack - Protocolo G900LS

Esta página describe el contexto público del protocolo para integrar el rastreador CanTrack G900LS con Plaspy. Explica cómo el equipo reporta ubicación y telemetría a la plataforma, el papel general del protocolo en la integración y consideraciones prácticas de configuración. El objetivo es presentar el comportamiento de comunicación en términos públicos y no sensibles para que operadores de flota e integradores puedan planificar despliegues y resolver problemas.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El comportamiento exacto del G900LS puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que el funcionamiento puede diferir entre unidades o tras actualizaciones. Esta página resume los detalles públicos relevantes para la plataforma e recomienda verificar la documentación oficial de CanTrack para aspectos específicos de modelo o firmware.

## Resumen del protocolo

El protocolo del G900LS es el mecanismo por el cual el rastreador se identifica ante los servidores backend, transmite posición y telemetría, y reporta alarmas y eventos de estado que consume Plaspy. En muchos equipos el G900LS aparece como compatible con GT06 para la integración backend y suele utilizar transporte TCP/IP sobre enlaces celulares. El protocolo permite enviar actualizaciones frecuentes de posición, mensajes basados en eventos e información de estado que Plaspy mapea a reglas, alertas e informes.

- Proporciona identidad del dispositivo e información de sesión para que Plaspy asocie los mensajes entrantes con el activo correcto.
- Envía posición GPS e indicadores de calidad GNSS para que Plaspy muestre ubicación y precisión en los mapas.
- Transmite telemetría y eventos de alarma como estado de encendido, pérdida de alimentación, alertas de velocidad y eventos de movimiento que alimentan las reglas de Plaspy.
- Soporta intervalos de subida configurables y reportes por evento para balancear oportunidad y consumo de datos.
- Permite que la plataforma emita comandos remotos soportados cuando el firmware y la configuración del dispositivo permiten control por comandos.
- Utiliza transporte TCP/IP estándar sobre datos celulares para entrega confiable al endpoint backend.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos de dispositivos en un endpoint y puerto compartidos y aplica detección y enrutamiento automáticos, por lo que la mayoría de equipos no requieren selección manual de protocolo en la plataforma. Cuando un G900LS esté configurado para reportar a Plaspy, la plataforma identificará el formato del mensaje entrante y lo asociará con la lógica de integración apropiada para procesar posición y eventos.

- Los dispositivos deben apuntar al hostname del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 para reportes.
- Todos los equipos usan el mismo puerto de Plaspy, lo que simplifica la configuración y el onboarding.
- Plaspy acepta conexiones sobre TCP o UDP en el puerto compartido, de modo que los dispositivos pueden usar el transporte que su firmware soporte mejor.
- La detección automática normalmente evita que el usuario tenga que elegir un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.
- Es necesario que el dispositivo esté correctamente identificado y que la APN esté configurada para que el G900LS pueda alcanzar el servidor Plaspy y sea reconocido automáticamente.
- Si un dispositivo no aparece en línea, verificar la dirección del servidor, la selección de transporte, la APN y el comportamiento del firmware son pasos prácticos iniciales.

## Transporte y contexto de conexión

Comprender cómo el G900LS se conecta a Plaspy es importante para la configuración inicial y la resolución de problemas. El rastreador usa datos celulares y conectividad TCP/IP estándar para enviar reportes y puede configurarse para usar UDP o TCP según las capacidades de la unidad y el comportamiento deseado.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para reportes.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al apuntar a Plaspy.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados con el fin de simplificar la configuración y provisión de equipos.
- La selección del transporte puede afectar las características de entrega; algunas variantes de firmware prefieren TCP mientras que otras soportan UDP para reducir overhead.
- Asegúrese de que la APN del dispositivo y el tráfico saliente estén permitidos por el operador de la SIM para que los paquetes lleguen al endpoint Plaspy.
- Al configurar los equipos, use el endpoint y puerto de Plaspy para que la detección y el procesamiento automáticos ocurran en el servidor.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar funciones disponibles y formatos de mensaje, por lo que conviene verificar el comportamiento después de actualizaciones de firmware.
- Variantes de hardware, como modelos de 4 pines y 8 pines, pueden exponer entradas y opciones de control remoto distintas que afectan la telemetría disponible.
- Aunque muchos G900LS son compatibles con GT06 para integración backend, los detalles de implementación del fabricante pueden variar entre lotes y regiones.
- La selección del transporte es relevante: algunos dispositivos requieren TCP mientras que otros pueden configurarse para usar UDP en el mismo puerto de Plaspy.
- El soporte de comandos remotos depende del firmware y del cableado del dispositivo para funcionalidades como relés e inmovilizador.
- Siempre valide compatibilidad y disponibilidad de comandos contra la documentación del fabricante para el número de serie y versión de firmware exactos.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del G900LS ayuda a asegurar una configuración correcta, reportes fiables y una resolución de problemas eficiente al integrar equipos con Plaspy. Conocer el contexto de conexión y las variaciones comunes reduce tiempos de inactividad y mejora la calidad de los datos que alimentan mapas, alertas e informes.

- Garantiza ajustes correctos de APN y servidor para que el rastreador pueda alcanzar d.plaspy.com o la IP correspondiente.
- Ayuda a diagnosticar datos faltantes o reportes intermitentes revisando transporte, firmware y estado de alimentación.
- Orienta sobre qué eventos y comandos remotos estarán disponibles según la versión de firmware.
- Permite planificar el consumo de datos seleccionando intervalos de subida y comportamiento de reportes por evento adecuados.
- Facilita identificar si un problema reportado proviene del dispositivo o de la plataforma antes de contactar al fabricante o soporte.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G900LS con Plaspy ofrece a las organizaciones una forma centralizada de recopilar datos de ubicación 4G precisos, telemetría vehicular y alertas de eventos en una sola plataforma. Plaspy ingiere actualizaciones de posición y telemetría del rastreador para que los equipos de operaciones puedan monitorear flotas, configurar alertas, revisar viajes históricos y actuar ante pérdidas de energía o eventos de movimiento cuando el dispositivo soporta esas funciones.

To learn more about Plaspy and how the platform works with devices like the G900LS visit https://www.plaspy.com. Note that protocol support, firmware behavior, and device implementation details can change over time so please verify the latest device specific and firmware information on the manufacturer site https://www.cantrackgps.com/ before making deployment decisions.
