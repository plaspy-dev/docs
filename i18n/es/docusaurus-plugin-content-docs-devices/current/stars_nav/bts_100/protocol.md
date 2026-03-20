---
slug: /stars_nav/bts_100/protocol
id: bts_100-protocol
sidebar_label: Protocol
title: Stars Nav - BTS-100 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar Stars Nav BTS-100 con Plaspy en seguimiento en tiempo real
keywords:
  - Protocolo Stars Nav BTS-100
  - Protocolo GPS Stars Nav BTS-100
  - Protocolo de comunicación BTS-100
  - Protocolo de rastreo BTS-100
  - Protocolo rastreador GPS Stars Nav
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreador Plaspy
  - Transmisión GPS Bluetooth SPP
  - Protocolo de recordatorio POI GPS
  - Rastreo de flotas BTS-100
---

# Stars Nav - Protocolo BTS-100

Esta página explica el contexto público del protocolo para usar el Stars Nav BTS-100 con Plaspy. Resume cómo el BTS-100 aporta posición y telemetría básica a sistemas compatibles con Plaspy, el papel de la transmisión Bluetooth SPP en despliegues locales y cómo suele integrarse ese flujo local en flujos de trabajo de Plaspy sin exponer detalles propietarios de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente dirigido al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público de comunicación necesario para una integración y resolución de problemas exitosas, más que en formatos propietarios de bajo nivel.

## Resumen del protocolo

El BTS-100 es un receptor GNSS compacto para vehículo que transmite información de posición y tiempo estilo NMEA sobre Bluetooth Serial Port Profile (SPP) a dispositivos anfitriones. Para la integración con Plaspy, el BTS-100 normalmente entrega longitud, latitud, velocidad y hora UTC, que luego se reenvían a Plaspy para mapeo, alertas e informes. Este resumen explica el rol del protocolo en términos prácticos sin detallar el empaquetado propietario o el funcionamiento interno del parser.

- Proporciona actualizaciones continuas de posición y velocidad para ingestión en tiempo real por una pasarela o anfitrión compatible con Plaspy.
- Emplea un flujo serial estándar sobre Bluetooth SPP para entregar sentencias estilo NMEA que los dispositivos anfitriones pueden leer y reenviar.
- Permite alertas locales audibles y por LED basadas en POI mientras Plaspy conserva la telemetría histórica y las vistas a nivel de flota.
- Soporta intervalos de traza configurables para ajustar la frecuencia de actualizaciones hacia Plaspy, según necesite reportes en tiempo real o periódicos.
- Actúa como una fuente GPS modular que Plaspy puede combinar con otros sensores del vehículo para crear registros telemáticos más completos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de rastreadores en un endpoint compartido y detecta automáticamente el protocolo que usa un dispositivo reportante. Cuando usted empareja un BTS-100 a una pasarela o anfitrión que reenvía su flujo Bluetooth SPP a Plaspy, la plataforma identifica el protocolo entrante sin que, en la mayoría de los casos, sea necesaria una selección manual. Esta detección automática simplifica la incorporación para integradores y equipos de flota.

- Plaspy escucha en un endpoint de servidor compartido, por lo que los dispositivos que reenvían datos a Plaspy no requieren puertos distintos por modelo.
- Si el dispositivo está configurado para reportar al endpoint de Plaspy, la detección del protocolo es automática y por lo general no requiere selección manual.
- La detección funciona para múltiples transportes de reporte, por lo que las pasarelas que aceptan Bluetooth SPP localmente y reenvían datos a Plaspy serán reconocidas.
- Si un dispositivo no es detectado, el primer paso de diagnóstico es verificar que el anfitrión o la pasarela esté reenviando el flujo del BTS-100 al endpoint de Plaspy.
- Plaspy mantiene una configuración de puerto común para todos los dispositivos, lo que reduce la complejidad de la puesta en marcha en despliegues con modelos mixtos.

## Transporte y contexto de conexión

El BTS-100 transmite localmente por Bluetooth SPP a un anfitrión emparejado. En un despliegue con Plaspy, ese anfitrión o pasarela normalmente reenvía las actualizaciones de ubicación a Plaspy usando el transporte de red que soporte el anfitrión. Plaspy acepta reportes de dispositivos en un único dominio e IP en un único puerto, por lo que los integradores solo deben asegurar el reenvío correcto desde el dispositivo o la pasarela emparejada.

- El dominio del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para reportes de dispositivos y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Dispositivos y pasarelas pueden configurarse para reenviar datos del rastreador mediante UDP o TCP en el puerto 8888, según el soporte del dispositivo y la configuración de red.
- El BTS-100 entrega datos localmente por Bluetooth SPP y requiere un anfitrión o pasarela para retransmitir ese flujo a Plaspy para seguimiento centralizado.
- Asegúrese de que el anfitrión de reenvío esté configurado para alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 para permitir una entrega fiable a Plaspy.

## Notas de compatibilidad del protocolo

- Las diferencias de revisión de firmware pueden cambiar cómo el BTS-100 formatea o marca con timestamps la salida estilo NMEA; siempre verifique el comportamiento en el firmware exacto que está usando.
- Revisions de hardware y configuraciones opcionales de memoria para almacenamiento de POI pueden alterar las capacidades del dispositivo o los ajustes expuestos mediante la utilidad de PC.
- Las herramientas de configuración del fabricante o los ajustes por defecto pueden afectar cómo el dispositivo se empareja con anfitriones y cómo los intervalos de traza se reportan a una pasarela.
- Elegir UDP frente a TCP para el reenvío hacia Plaspy puede influir en las características de entrega bajo distintas condiciones de red.
- Confirme que el anfitrión o la pasarela emparejada soporte entrada Bluetooth SPP y sea capaz de reenviar ese flujo a Plaspy en el puerto 8888.
- Valide el comportamiento esperado contra la documentación oficial de Stars Nav y las notas de la versión del BTS-100 que tenga a mano.

## Por qué importa entender el protocolo

Comprender el contexto de comunicación del BTS-100 facilita la configuración, la operación confiable y la resolución eficaz de problemas al integrarlo con Plaspy. Conocer los roles de Bluetooth SPP, el anfitrión de reenvío y el endpoint de Plaspy reduce el tiempo de configuración y ayuda a identificar dónde se producen los problemas entre el dispositivo y la nube.

- Ayuda a asegurarse de que un anfitrión o pasarela emparejado esté reenviando correctamente el flujo del BTS-100 al endpoint de Plaspy.
- Aclara las expectativas sobre la frecuencia de actualizaciones para que los intervalos de traza locales se alineen con la cadencia de reporte requerida en Plaspy.
- Facilita el diagnóstico de diferencias de firmware y configuración cuando falta telemetría o los timestamps no coinciden con los registros del servidor.
- Permite planificar el comportamiento de la red al elegir un transporte apropiado para reenviar datos a Plaspy en el puerto 8888.
- Reduce la fricción en la integración al establecer responsabilidades claras entre el manejo local de POI y el procesamiento centralizado en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el BTS-100 como fuente GPS junto con Plaspy ofrece una solución ligera y práctica para organizaciones que necesitan visibilidad de ubicación confiable y funciones de alerta para conductores. El BTS-100 proporciona alertas locales por POI y una transmisión continua de posición, mientras que Plaspy aporta visualización centralizada en mapa, retención de telemetría histórica y flujos de trabajo de gestión de flota que complementan las capacidades del dispositivo.

Para saber más sobre Plaspy y cómo maneja integraciones de dispositivos, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que verifique la información específica más reciente en el sitio oficial de Stars Nav en http://www.starsnav.com/ antes de finalizar planes de despliegue.
