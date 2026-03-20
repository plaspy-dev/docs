---
slug: /telic/lt910_eubis/protocol
id: lt910_eubis-protocol
sidebar_label: Protocol
title: Telic - LT910-EUbis Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo y guía de compatibilidad con Plaspy para el rastreador Telic LT910-EUbis y su conexión
keywords:
  - protocolo Telic LT910-EUbis
  - protocolo GPS Telic LT910-EUbis
  - Telic LT910-EUbis Plaspy
  - protocolo de comunicación LT910-EUbis
  - protocolo de rastreo LT910-EUbis
  - protocolo de rastreador Telic
  - rastreador LTE Cat 1bis
  - gestión de flotas Plaspy
  - protocolo rastreador GPS Plaspy
  - rastreador IoT industrial
---

# Telic - Protocolo LT910-EUbis

Esta página describe el contexto público del protocolo para usar el rastreador Telic LT910-EUbis con Plaspy. Se centra en los detalles de comunicación y conexión relevantes para integrar el LT910-EUbis como capa de transporte celular para datos GPS y telemetría. El contenido está pensado para ayudar a integradores y operadores de flotas a comprender cómo el dispositivo reporta a Plaspy sin exponer detalles de implementación privados.

Plaspy acepta reportes de dispositivos compatibles usando configuraciones de conexión compartidas. El LT910-EUbis puede configurarse para enviar telemetría al endpoint de Plaspy en d.plaspy.com o a la IP del servidor 54.85.159.138 usando el puerto 8888. Los dispositivos pueden usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo. Todos los dispositivos en Plaspy utilizan el mismo puerto, y Plaspy detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo del dispositivo es el conjunto de reglas que usa el LT910-EUbis para entregar telemetría, ubicación e información de estado a un backend como Plaspy. Para propósitos de integración, el foco está en la entrega fiable de datos de ubicación y sensores utilizables más que en los formatos internos de los paquetes.

- Proporciona la capa de mensajería para que la posición GNSS, la telemetría y las entradas digitales/analógicas lleguen a Plaspy.
- Permite que el dispositivo se identifique y comunique su modo de reporte para que Plaspy pueda normalizar los datos entrantes en dashboards y alertas.
- Determina el comportamiento de transporte, por ejemplo si el dispositivo usa UDP o TCP para alcanzar el endpoint de Plaspy.
- Soporta modos de ahorro de energía e intervalos de reporte que afectan la frecuencia de envío de posición y telemetría a Plaspy.
- Habilita flujos de telemetría usados en funciones de flota como antirrobo, disparadores de inmovilización y monitoreo de sensores cuando se combina con entradas GNSS o del vehículo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y utiliza esos datos entrantes para determinar cómo parsear y normalizar los mensajes del equipo. En la mayoría de los casos, cuando un dispositivo está correctamente configurado para reportar al endpoint de Plaspy no es necesario seleccionar el protocolo de forma manual dentro de la plataforma.

- Plaspy escucha en un único puerto compartido para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Los dispositivos deben apuntar a d.plaspy.com o a 54.85.159.138 para asegurar que los mensajes lleguen al servidor de Plaspy.
- La configuración correcta de la dirección del servidor y el transporte en el dispositivo suele ser suficiente para que Plaspy ingiera los datos sin configuración adicional por parte del usuario.
- Cuando llegan los mensajes, Plaspy mapea identificadores y telemetría a campos de la plataforma para que ubicación, estado y alarmas aparezcan en los paneles.
- Si un dispositivo usa variantes de firmware poco comunes, pueden ser necesarios pasos adicionales de verificación con la documentación del fabricante para confirmar el comportamiento esperado.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el LT910-EUbis se comunica con Plaspy a través de la red celular. El dispositivo ofrece LTE Cat 1bis con retroceso a 2G y actúa como un concentrador de comunicaciones para entradas GNSS o de rastreadores externos; la elección del transporte afecta la latencia, la entrega y los requisitos de firewall.

- El LT910-EUbis puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones de firmware seleccionadas.
- Se puede indicar a los equipos que envíen datos al host d.plaspy.com o a la IP 54.85.159.138 para entregar telemetría a Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos, lo que simplifica las reglas de firewall y el enrutamiento con los operadores móviles en los despliegues.
- La elección entre UDP y TCP puede afectar el comportamiento de retransmisión y la capacidad de respuesta en tiempo real según la configuración del dispositivo.
- Verifique que el APN del operador móvil y las reglas de firewall salientes permitan tráfico hacia el endpoint de Plaspy para evitar problemas de entrega.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de mensajes, campos opcionales o los modos de reporte soportados; siempre verifique la versión de firmware del dispositivo al validar compatibilidad.
- Las variantes de hardware o las revisiones regionales del LT910-EUbis pueden exponer diferentes opciones de E/S que influyan en la telemetría disponible para Plaspy.
- Las configuraciones por defecto del fabricante pueden establecer un transporte o una dirección de servidor distinta; confirme la configuración del dispositivo para apuntar al endpoint de Plaspy.
- La selección de transporte entre UDP y TCP es configurable en el dispositivo y puede afectar cómo se reintentan u ordenan los mensajes.
- Plaspy detecta automáticamente el protocolo, pero firmware inusual o fuertemente personalizado puede requerir consulta con el proveedor del dispositivo.
- Valide el soporte de funciones como CAN, entradas digitales o control de inmovilizador contra la documentación de Telic para la variante de producto específica.

## Por qué es importante entender el protocolo

Comprender claramente el protocolo del dispositivo y el contexto de conexión reduce el tiempo de puesta en servicio, mejora la eficiencia en la resolución de problemas y respalda la fiabilidad a largo plazo al usar dispositivos LT910-EUbis con Plaspy. Saber qué transporte y opciones de reporte utiliza el equipo facilita mapear su comportamiento a las funciones de la plataforma.

- Diagnósticos más rápidos cuando la ubicación o la telemetría dejan de llegar, ya que usted podrá verificar transporte, dirección del servidor y comportamiento del firmware.
- Mejores decisiones de configuración sobre intervalos de reporte y modos de ahorro de energía para ajustar a las necesidades operativas y objetivos de duración de batería.
- Alineación más sencilla de las capacidades del dispositivo con funciones de Plaspy como alertas, inmovilización y paneles de telemetría.
- Menor fricción en despliegues al confirmar APN, firewall y ajustes de endpoint antes de realizar rollouts a gran escala.
- Expectativas claras sobre qué datos Plaspy normalizará según el conjunto de telemetría que el dispositivo soporte.

## Por qué usar Plaspy con este protocolo

Usar el LT910-EUbis como transporte celular para soluciones de rastreo GPS y telemetría ofrece un equilibrio práctico entre desempeño y coste para despliegues en Europa. Plaspy ingiere los datos del dispositivo y presenta ubicación, estado y funciones de alertas que los gestores de flota y los equipos operativos pueden usar en flujos de trabajo de ruteo, seguridad y mantenimiento.

Plaspy simplifica la integración mediante un endpoint y puerto compartidos y detectando automáticamente los protocolos de rastreadores soportados. Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el LT910-EUbis, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente del protocolo y del firmware con el fabricante en https://www.telic.de.
