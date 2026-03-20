---
slug: /jointech/jt709ex/protocol
id: jt709ex-protocol
sidebar_label: Protocol
title: Jointech - JT709Ex Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo Jointech JT709Ex y su compatibilidad con Plaspy para telemetría de cerraduras y detección de transporte
keywords:
  - protocolo Jointech JT709Ex
  - compatibilidad JT709Ex Plaspy
  - protocolo candado inteligente Jointech
  - integración telemetría LoRa
  - integración gestión de flotas
  - telemetría seguridad de activos
  - candado a prueba de explosiones
  - monitoreo remoto de cerraduras
  - interoperabilidad rastreo vehicular
  - compatibilidad dispositivos Plaspy
---

# Jointech - Protocolo JT709Ex

Esta página describe el contexto público del protocolo para usar el Jointech JT709Ex con Plaspy. Se centra en cómo el JT709Ex informa el estado de la cerradura, alertas por manipulación y telemetría a un endpoint centralizado de Plaspy, de modo que esos eventos puedan correlacionarse con la posición de rastreadores GPS y los flujos de trabajo de la flota. La información aquí está pensada para integradores técnicos y operadores de flota que necesiten comprender el papel de comunicación del dispositivo en una configuración gestionada por Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo está configurado correctamente para reportar a la plataforma. El comportamiento exacto del protocolo para el JT709Ex puede variar según la versión de firmware, la configuración regional de LoRa y la implementación del fabricante, por lo que esta página ofrece un contexto práctico y no sensible, y recomienda verificarlo contra la documentación oficial de Jointech.

## Resumen del protocolo

El JT709Ex es un candado inteligente a prueba de explosiones que emplea telemetría de bajo consumo para reportar eventos como estado de la cerradura, detección de manipulación y uso de llave mecánica. En un entorno Plaspy, esos mensajes de telemetría se entregan a un endpoint central donde se asocian con activos, alertas y reglas de flota. El objetivo del protocolo es principalmente entregar datos accionables y con marca de tiempo sobre estados y alarmas, más que proporcionar localización GNSS continua.

- Informa cambios de estado de la cerradura y eventos de manipulación o desmontaje a Plaspy para alertas y registro.
- Identifica el dispositivo y envía metadatos para que Plaspy pueda asociar los eventos con el activo o vehículo correcto.
- Proporciona telemetría periódica o por evento que Plaspy puede usar para activar flujos de trabajo y conservar registros históricos.
- Permite desbloqueo remoto y coordinación maestro-esclavo cuando se enruta a través de gateways autorizados o infraestructura de gestión.
- Soporta operación de bajo consumo y distintas opciones regionales de transporte LoRa que afectan el intervalo de reporte y el alcance.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría en un endpoint y puerto compartidos y emplea detección automática para reconocer formatos de reporte cuando llegan. Para la mayoría de usuarios, la plataforma identificará los mensajes del JT709Ex sin selección manual de protocolo en Plaspy, siempre que el dispositivo o su gateway LoRa estén configurados para reenviar mensajes al endpoint correcto de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para la configuración del endpoint.
- El puerto de escucha de Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar un protocolo dentro de Plaspy cuando el dispositivo apunta al endpoint de Plaspy.
- Asegúrese de que las rutas de red y los gateways estén reenviando la telemetría del JT709Ex a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Si se utiliza un gateway o middleware para la integración LoRa, confirme que reenvía los mensajes del dispositivo sin modificaciones para que la detección de protocolo tenga éxito.

## Transporte y contexto de conexión

El JT709Ex utiliza LoRa de bajo consumo para telemetría de largo alcance y puede depender de un gateway para reenviar esos mensajes a Plaspy. Dependiendo de cómo esté configurado el gateway o el intermediario, el transporte desde el gateway hasta Plaspy puede ser UDP o TCP en el puerto estándar. Configurar correctamente el transporte y el endpoint es fundamental para asegurar la entrega confiable de los eventos de la cerradura.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reenviar telemetría a Plaspy.
- Los dispositivos y gateways pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o directamente a 54.85.159.138 como endpoint de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de cortafuegos y redes.
- Los gateways que recolectan uplinks LoRa deben configurarse para reenviar los mensajes JT709Ex al endpoint de Plaspy para su procesamiento centralizado.
- Verifique que NAT, cortafuegos y cualquier servicio intermedio permitan tráfico saliente hacia la dirección de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, la disponibilidad de funciones o el comportamiento de reporte; siempre confirme las notas de la versión del firmware del JT709Ex para detalles del protocolo.
- Las configuraciones regionales de LoRa y los planes de frecuencia pueden afectar el alcance y la temporización de los mensajes; asegure cumplimiento regional y compatibilidad del gateway.
- Revisiones de hardware y accesorios opcionales, como emparejamientos maestro-esclavo, pueden añadir campos o tipos de evento que Plaspy interpretará como parte de la telemetría del dispositivo.
- La elección de transporte entre UDP y TCP puede estar limitada por las capacidades del gateway o las políticas de red local.
- Dado que el JT709Ex es un endpoint de cerradura y telemetría y no un rastreador GNSS, empareje el dispositivo con un rastreador GPS en Plaspy cuando se requiera correlación de ubicación.
- Valide el comportamiento de extremo a extremo con un dispositivo de prueba y consulte la documentación del fabricante Jointech para descripciones específicas de comandos y eventos del dispositivo.

## Por qué es importante entender el protocolo

Comprender cómo el JT709Ex se comunica con Plaspy ayuda a garantizar una configuración correcta, alertas predecibles y operación consistente a largo plazo. Conocer el transporte, el endpoint y las implicaciones del firmware reduce el tiempo de resolución de problemas y facilita la integración fiable en los flujos de trabajo de la flota.

- Confirma la configuración del servidor y del transporte para que los mensajes lleguen a Plaspy sin problemas de red.
- Facilita el mapeo de eventos de cerradura y manipulación en los activos y conjuntos de reglas correctos en Plaspy.
- Permite una mejor coordinación con proveedores de gateways o integradores de sistema para el reenvío LoRa.
- Reduce la ambigüedad cuando las actualizaciones de firmware cambian el comportamiento de reporte o añaden nuevos tipos de eventos.
- Ayuda a planificar la vida de batería y los intervalos de reporte que afectan los cronogramas de mantenimiento.

## Por qué usar Plaspy con este protocolo

Usar el JT709Ex junto con Plaspy ofrece monitoreo centralizado del estado de la cerradura, alertas por manipulación y eventos de acceso junto con la ubicación del vehículo y la telemática. Para transporte de combustible regulado, entornos peligrosos y carga de alto valor, combinar la telemetría de bajo consumo del JT709Ex con las reglas y notificaciones de Plaspy refuerza la prevención de robos y la supervisión operativa.

Para saber más sobre Plaspy y cómo gestiona la telemetría de dispositivos, visite https://www.plaspy.com. Para detalles actualizados del protocolo específico del dispositivo, comportamiento de firmware y notas de implementación del fabricante, verifique la información en el sitio web de Jointech en https://www.jointcontrols.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
