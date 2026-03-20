---
slug: /tzone/tz_bc08/protocol
id: tz_bc08-protocol
sidebar_label: Protocol
title: TZone - TZ-BC08 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo TZone TZ BC08 y cómo se comunica con Plaspy para reportes y ubicación
keywords:
  - Protocolo TZone TZ BC08
  - Protocolo GPS TZone TZ BC08
  - Protocolo de comunicación TZone TZ BC08
  - Protocolo de rastreo TZone TZ BC08
  - Rastreador iBeacon TZone
  - Rastreador Bluetooth TZone
  - Compatibilidad Plaspy
  - Protocolo rastreador GPS
  - Rastreo vehicular Plaspy
  - Integración baliza Bluetooth
---

# TZone - Protocolo TZ-BC08

Esta página describe el contexto público del protocolo para usar el rastreador TZone TZ-BC08 con Plaspy. Se centra en cómo el dispositivo comunica de forma general y no sensible, y qué esperar al integrar este pequeño rastreador basado en iBeacon con Plaspy para reportes de ubicación y presencia.

El TZ-BC08 utiliza el protocolo iBeacon de iPhone sobre Bluetooth Low Energy para emisiones locales. La compatibilidad con Plaspy asume que el rastreador es puenteado o reenviado a la nube mediante una configuración soportada. Plaspy emplea configuraciones de conexión compartidas entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda verificar contra el firmware del dispositivo y la documentación oficial.

## Resumen del protocolo

El protocolo del TZ-BC08 define cómo el dispositivo anuncia su identidad y telemetría por Bluetooth Low Energy y cómo esas emisiones son puestas a disposición de la nube mediante un gateway o puente. En contextos Plaspy, el papel principal del protocolo es permitir la identificación, reportes de presencia o señales de ubicación y el reenvío confiable de los datos del rastreador al endpoint de Plaspy.

- Proporciona un identificador consistente y una señal de presencia que puede asociarse a un activo o usuario cuando se envía a Plaspy
- Permite ajustar intervalos de transmisión y potencia para balancear tiempo de respuesta y vida útil de batería
- Permite que gateways o aplicaciones móviles capturen emisiones iBeacon y reenvíen reportes estructurados a Plaspy
- Suministra la telemetría y los elementos de identidad mínimos que Plaspy necesita para correlacionar un dispositivo con una cuenta y mostrar eventos
- Funciona junto a dispositivos puente que traducen balizas BLE a reportes TCP o UDP para ingestión en la nube

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint compartido y utiliza detección automatizada para inferir el protocolo de reporte cuando un dispositivo está correctamente apuntado al servidor Plaspy. Esto significa que los usuarios finales por lo general no necesitan seleccionar manualmente un protocolo en Plaspy cuando el dispositivo o su gateway está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888 y este mismo puerto se usa para todos los dispositivos soportados en Plaspy
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 dependiendo del gateway o la configuración de reenvío
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe correctamente reportes en el endpoint compartido
- Normalmente los usuarios aseguran que su gateway o la app de reenvío reporte a d.plaspy.com en el puerto 8888 para habilitar la detección automática

## Transporte y contexto de conexión

El TZ-BC08 transmite por Bluetooth Low Energy, pero la integración práctica con la nube requiere un transporte que llegue a Plaspy. Ese transporte suele ser proporcionado por un gateway, un smartphone u otro puente que reenvía las observaciones de las balizas al endpoint de Plaspy a través de la red.

- Las emisiones BLE son capturadas por un gateway o un dispositivo móvil que luego reenvía los datos a Plaspy
- Los dispositivos o gateways pueden apuntar a d.plaspy.com o a 54.85.159.138 para el reporte en la nube
- El componente de reenvío puede configurar UDP o TCP en el puerto 8888 para transmitir los reportes
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita estandarizar la configuración del gateway
- La elección entre UDP y TCP depende de la capacidad del gateway y del compromiso deseado entre latencia y fiabilidad

## Notas sobre compatibilidad del protocolo

- El TZ-BC08 usa publicidad BLE iBeacon, que puede ser puenteada a Plaspy por gateways o aplicaciones móviles compatibles
- Revisión de firmware y lotes de hardware pueden cambiar campos de publicidad y comportamiento, por lo que puede variar entre unidades
- Opciones de configuración del fabricante como intervalo de transmisión y potencia afectan la vida útil de batería y el alcance
- Algunas integraciones requieren un gateway que convierta las publicidades BLE a reportes TCP o UDP consumibles por Plaspy
- La selección de transporte entre UDP y TCP se realiza en el lado del gateway y puede afectar las características de entrega
- Siempre valide la configuración de reenvío y la accesibilidad de red hacia d.plaspy.com en el puerto 8888 al solucionar problemas

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TZ-BC08 y cómo sus emisiones BLE se reenvían a Plaspy ayuda a garantizar una configuración fluida, entrega confiable de eventos y una solución eficaz de problemas a largo plazo.

- Asegura la correcta configuración del gateway o del reenvío móvil para alcanzar d.plaspy.com en el puerto 8888
- Ayuda a ajustar el intervalo de transmisión y la potencia para optimizar la batería y el rango de detección
- Clarifica la responsabilidad entre el rastreador BLE y el puente de red durante la integración
- Permite un diagnóstico más rápido cuando eventos de presencia o reportes no aparecen en Plaspy
- Apoya la planificación de despliegues a escala cuando se esperan muchos dispositivos BLE en un área compartida

## Por qué usar Plaspy con este protocolo

Usar el TZone TZ-BC08 con Plaspy ofrece una forma práctica de convertir señales locales de presencia y proximidad iBeacon en eventos y registros de seguimiento accesibles en la nube. Las organizaciones pueden aprovechar el tamaño compacto del rastreador y su difusión configurable para monitorear activos, gestionar flujos de trabajo y capturar datos de presencia a gran escala cuando se combina con infraestructura de gateways.

Si desea saber más sobre Plaspy y cómo puede recibir y procesar reportes de rastreadores basados en iBeacon como el TZ-BC08, visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, notas de firmware y guía del fabricante, verifique la información en el sitio web de TZone http://www.tzonedigital.com/ ya que el comportamiento del firmware y la implementación del dispositivo pueden cambiar con el tiempo.
