---
slug: /telic/lt910_ww/protocol
id: lt910_ww-protocol
sidebar_label: Protocol
title: Telic - LT910-WW Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Telic LT910-WW y su integración con Plaspy para rastreo de flotas y telemetría
keywords:
  - Protocolo Telic LT910 WW
  - Protocolo GPS Telic LT910 WW
  - Comunicación Telic LT910 WW
  - Rastreo Telic LT910 WW
  - Compatibilidad Telic LT910 WW Plaspy
  - Protocolo rastreador GPS Telic
  - Integración LT910 WW Plaspy
  - Rastreo de vehículos Telic LT910 WW
  - Gestión de flotas Telic LT910 WW
  - Telemetría Telic LT910 WW
---

# Telic - Protocolo LT910-WW

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del Telic LT910-WW cuando se usa con Plaspy. Explica cómo el dispositivo puede enviar telemetría y datos de posición a Plaspy, qué verificar durante la configuración y cómo el comportamiento del protocolo influye en la integración, sin revelar detalles propietarios o de implementación de bajo nivel.

Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo para el LT910-WW puede variar según la versión de firmware, la revisión de hardware o la configuración del fabricante. Esta página resume el contexto práctico del protocolo y las opciones de conexión, recomendando verificar la documentación oficial del fabricante para detalles específicos de dispositivo o firmware.

## Resumen del protocolo

El protocolo de comunicación del LT910-WW regula cómo el terminal transmite telemetría, identificación e información de estado desde el dispositivo hacia un endpoint en la nube. Para las integraciones con Plaspy, la función pública del protocolo es permitir la entrega confiable de datos de posición y sensores para que la plataforma pueda ofrecer mapas, alertas e informes históricos.

- Transporta la identidad del dispositivo y la información de sesión que permite a Plaspy asociar los mensajes entrantes con un activo o instalación concreta.
- Envía posición GNSS, marcas de tiempo y estados de sensores o entradas/salidas cuando el LT910-WW está conectado a receptores GNSS externos o fuentes de telemetría mediante RS232 o USB.
- Provee información de estado y salud, como conectividad y estado de alimentación, que Plaspy puede mostrar en paneles y alertas.
- Soporta operación sobre enlaces celulares con conmutación automática entre LTE, 3G y 2G según lo permita el módulo Telit LE910C1 WW presente en la unidad.
- Permite flujos de control y comandos cuando interfaces de control del vehículo o acciones remotas se reenvían vía el terminal y son interpretadas por Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y conocido y determina automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesitan seleccionar el protocolo manualmente. La configuración correcta del dispositivo para reportar al endpoint de Plaspy suele ser el requisito principal para habilitar la detección automática y el onboarding.

- Plaspy escucha en el dominio público d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto de la plataforma 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos.
- Plaspy soporta detección automática de protocolos, por lo que un LT910-WW correctamente configurado y reportando al endpoint de Plaspy normalmente se reconocerá sin selección manual del protocolo.
- Si un dispositivo ofrece múltiples opciones de transporte, apuntarlo al endpoint de Plaspy es el paso habitual para habilitar la detección y la ingestión de datos.
- Los usuarios deben asegurarse de que la identidad del dispositivo (IMEI, número de serie u otro identificador) sea consistente con cualquier paso de cuenta o aprovisionamiento esperado por su tenant de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el LT910-WW establece un enlace con Plaspy y qué opciones de transporte son comúnmente disponibles. El terminal está diseñado para conectividad celular de banda ancha y puede configurarse para usar distintos métodos de transporte según las necesidades de despliegue y las capacidades del firmware.

- El LT910-WW puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita el dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 como destino.
- El enfoque de puerto único de Plaspy implica que se usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica reglas de firewall y APN para los despliegues.
- La selección de transporte (UDP vs TCP) puede afectar las características de entrega de los mensajes; elija el transporte que coincida con las opciones del firmware del dispositivo y las condiciones de red.
- Asegúrese de que el APN, la configuración de la SIM y cualquier restricción de red permitan el tráfico saliente hacia el endpoint de Plaspy para garantizar reportes confiables.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede depender del nivel de firmware del LT910-WW y de la versión del módulo Telit LE910C1 WW; verifique los detalles del firmware con el proveedor del dispositivo.
- Las revisiones de hardware y los periféricos opcionales (GNSS externo, adaptadores CAN o sensores USB) pueden modificar la telemetría disponible para Plaspy.
- La elección de transporte entre UDP y TCP debe coincidir con lo que soporte el firmware del dispositivo y con lo que permita su entorno de red.
- Las configuraciones del fabricante, como la forma en que el dispositivo envía identificadores o dispara informes de posición, pueden variar y deben revisarse frente a las expectativas de onboarding de Plaspy.
- Para integraciones personalizadas que usen GNSS externo o flujos seriales, valide que esas fuentes se enruten correctamente a través del LT910-WW hacia Plaspy.
- Confirme siempre la conectividad de red del dispositivo y el aprovisionamiento de la SIM antes de depender de la ingestión en la nube, para evitar demoras evitables en el onboarding.
- Consulte la documentación de Telic para notas específicas de firmware y la documentación de Plaspy para ejemplos de configuración recomendados.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del LT910-WW facilita una configuración correcta, reduce el tiempo de resolución de problemas y mejora la confiabilidad a largo plazo del rastreo y la telemetría en Plaspy. Saber qué envía el dispositivo y cómo se conecta permite a los integradores alinear el comportamiento del dispositivo con las expectativas y necesidades operativas de la plataforma.

- Ayuda a validar que la identidad del dispositivo y la cadencia de reportes cumplan con los requisitos de onboarding y mapeo de activos de Plaspy.
- Permite diagnosticar más rápido problemas de conectividad al enfocar la investigación en transporte, APN o configuración del dispositivo en lugar de en la plataforma.
- Orienta decisiones sobre la selección de transporte, consumo de datos y gestión de energía para distintos escenarios de despliegue.
- Apoya la planificación de la integración de periféricos como receptores GNSS externos, adaptadores CAN/OBD o sensores analógicos conectados vía RS232 o USB.
- Reduce el riesgo de integración al aclarar qué partes de la solución dependen del dispositivo y cuáles del lado de la plataforma.

## Por qué usar Plaspy con este protocolo

El diseño industrial robusto del LT910-WW y su soporte de conectividad celular de banda ancha lo convierten en una opción práctica para organizaciones que requieren conectividad resistente y reenvío flexible de telemetría hacia una plataforma en la nube. En conjunto con Plaspy, el terminal puede actuar como una pasarela de comunicaciones sólida para rastreo de flotas, monitoreo remoto de activos y flujos de control que dependen de la entrega consistente de datos.

La detección automática de protocolos de Plaspy y el uso de un puerto unificado simplifican el despliegue a gran escala, de modo que los integradores pueden concentrarse en la integración de sensores y las reglas operativas en lugar de en la selección de protocolos por dispositivo. Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el LT910-WW visite https://www.plaspy.com. Para detalles de firmware y protocolo específicos del dispositivo, verifique la información con el fabricante en https://www.telic.de. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación del proveedor.
