---
slug: /haicom/hi_604/protocol
id: hi_604-protocol
sidebar_label: Protocol
title: Haicom - HI-604 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del rastreador Haicom HI-604 para integrarlo con Plaspy incluyendo contexto de conexión y transporte
keywords:
  - Haicom HI-604
  - protocolo Haicom HI-604
  - rastreador GPS Haicom HI-604
  - compatibilidad Haicom HI-604
  - protocolo de rastreo Plaspy
  - protocolo rastreador GPS
  - rastreo de vehículos Plaspy
  - rastreador GPS GPRS
  - rastreo de activos Haicom
  - guía protocolo de rastreo
---

# Haicom - HI-604 — Protocolo de comunicación

Esta página ofrece una referencia pública del protocolo para usar el rastreador Haicom HI-604 con Plaspy. Se concentra en el contexto de conexión y comunicación necesario para que el dispositivo reporte ubicación y estado a Plaspy sin exponer detalles sensibles de implementación. Considere esto como una guía de alto nivel sobre cómo el HI-604 se integra con Plaspy para seguimiento en tiempo real y monitoreo remoto.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y cómo el fabricante implemente las opciones de reporte en el HI-604, por lo que la configuración y las funciones disponibles pueden diferir entre unidades.

## Visión general del protocolo

El protocolo de comunicación del HI-604 regula cómo el rastreador envía posición, estado y alertas desde el dispositivo hacia un servidor remoto y cómo los mensajes de configuración o control se entregan de regreso al dispositivo. En el HI-604 esto incluye el uso de conectividad celular y sensores a bordo para proporcionar actualizaciones periódicas o basadas en eventos que Plaspy puede procesar.

- Transmite datos de ubicación GPS y marca de tiempo a un servidor remoto para mapeo y reproducción.
- Envía telemetría y estado como alimentación, nivel de batería, eventos del sensor de movimiento e indicadores de conectividad.
- Permite intervalos de reporte configurables y disparadores por eventos para operar en modos de ahorro de energía o en tiempo real.
- Usa el enlace celular del dispositivo y el transporte de red correspondiente para entregar mensajes a un endpoint central.
- Admite configuración y control remoto mediante canales de comandos soportados por el fabricante y consumidos por la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los datos de los rastreadores en un único endpoint y puerto compartidos y aplica detección automática para identificar el protocolo del dispositivo cuando está correctamente configurado. Este diseño evita que la mayoría de los usuarios tengan que seleccionar manualmente un protocolo dentro de Plaspy, siempre que el HI-604 apunte al servidor de Plaspy.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la dirección IP del servidor Plaspy 54.85.159.138.
- Plaspy escucha en el puerto 8888 para el tráfico entrante de dispositivos y utiliza ese puerto compartido para todos los dispositivos soportados.
- El rastreador puede usar transporte UDP o TCP para conectarse a Plaspy, según la configuración del equipo y las condiciones de la red.
- Cuando el dispositivo apunta al endpoint de Plaspy y envía datos, Plaspy intenta identificar automáticamente el protocolo entrante.
- Una APN y configuración celular correctas en el rastreador son requisitos típicos para reportes exitosos al endpoint de Plaspy.

## Transporte y contexto de conexión

Las elecciones de conexión afectan cómo el HI-604 alcanza Plaspy y la rapidez con la que se entregan los mensajes. El HI-604 soporta varios métodos de reporte por celular y puede configurarse para usar cualquiera de los transportes comunes para comunicarse con un colector remoto.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del modelo y las capacidades de firmware.
- Los dispositivos pueden apuntar al hostname d.plaspy.com o directamente a la IP 54.85.159.138 al especificar el servidor de reporte.
- Plaspy usa el mismo número de puerto para todos los dispositivos compatibles, lo que simplifica la configuración de dispositivos y las reglas de firewall.
- La estabilidad de la red, el comportamiento del operador y el transporte elegido (UDP vs TCP) pueden influir en la fiabilidad de entrega y las reintentos.
- Asegúrese de que la APN y las credenciales celulares del rastreador estén correctamente configuradas para que el dispositivo establezca conectividad GPRS con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware entre unidades HI-604 pueden modificar las opciones de reporte disponibles y el contenido exacto de los mensajes enviados al servidor.
- Revisiones de hardware o diferencias de lote pueden afectar el comportamiento de sensores, gestión de batería y modos de sueño profundo que influyen en la frecuencia de reporte.
- Las opciones de configuración del fabricante pueden permitir reporte por SMS, GPRS o DTMF además del reporte directo de datos; confirme qué canal se está usando al integrar con Plaspy.
- La elección entre UDP y TCP debe coincidir con la configuración del dispositivo y con restricciones de red como NAT o filtrado del operador.
- Siempre valide la configuración del dispositivo enviando reportes de prueba a d.plaspy.com o 54.85.159.138 y confirmando que lleguen a Plaspy en el puerto 8888.
- En caso de duda, consulte la documentación del fabricante para notas específicas de firmware que afecten el comportamiento del protocolo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del HI-604 y el contexto de conexión ayuda a garantizar un rastreo confiable, facilita la resolución de problemas y establece expectativas operativas predecibles cuando el dispositivo se usa con Plaspy. Tener claro el protocolo reduce el tiempo de integración y mejora la estabilidad a largo plazo del sistema.

- Ayuda a diagnosticar problemas de conectividad confirmando si el dispositivo alcanza d.plaspy.com o 54.85.159.138 en el puerto esperado.
- Orienta las elecciones de configuración como TCP frente a UDP y los intervalos de reporte para ajustarlos a las necesidades operativas.
- Permite anticipar el consumo de batería cuando las funciones de sueño profundo y el sensor de movimiento modifican la cadencia de reportes.
- Facilita la coordinación de la resolución de problemas con operadores o con el fabricante al referenciar cómo está configurado el rastreador para reportar.
- Permite planificar reglas de firewall y de red, dado que Plaspy utiliza un puerto compartido para todos los dispositivos.

## Ventajas de usar Plaspy con este protocolo

Usar el Haicom HI-604 con Plaspy ofrece una forma práctica de centralizar datos de ubicación, estado y alertas de un rastreador multifunción en una única plataforma de gestión de flotas y activos. El HI-604 brinda opciones de reporte flexibles y robustez ambiental que lo hacen adecuado para muchos escenarios de seguimiento, mientras que Plaspy se encarga de la detección de protocolo y la ingestión centralizada de datos.

Para obtener más información sobre Plaspy y cómo gestiona la comunicación de dispositivos, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware y orientación de implementación más recientes del HI-604, verifique la información en el sitio oficial de Haicom en http://www.haicom.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
