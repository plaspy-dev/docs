---
slug: /ulbotech/t363b/protocol
id: t363b-protocol
sidebar_label: Protocol
title: Ulbotech - T363B Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo Ulbotech T363B y cómo comunica ubicación y telemetría con Plaspy para rastreo y gestión de flotas
keywords:
  - Protocolo Ulbotech T363B
  - Protocolo GPS Ulbotech T363B
  - Ulbotech T363B para Plaspy
  - Rastreador OBD T363B
  - Protocolo rastreador GPS OBD
  - Protocolo de rastreo vehicular
  - Rastreo de flotas Plaspy
  - Compatibilidad protocolo Ulbotech
  - Telemetría T363B
  - Integración rastreador Plaspy
---

# Ulbotech - Protocolo T363B

Esta página describe el contexto público del protocolo para usar el rastreador Ulbotech T363B con Plaspy. Se centra en cómo el dispositivo se comunica con el backend de Plaspy en términos generales, sin incluir información sensible, y en qué considerar al configurar el equipo para garantizar reportes y la ingestión de telemetría confiables. El T363B es un rastreador OBD plug and play que envía posición GPS y telemetría del vehículo por GPRS celular y está pensado para integrarse con plataformas como Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El endpoint público de Plaspy es d.plaspy.com con la IP 54.85.159.138 y el puerto de escucha 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888; todos los dispositivos en Plaspy usan el mismo puerto, aunque el comportamiento del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo usado por el T363B regula cómo se empaquetan y envían la posición, la telemetría OBD/CAN y las banderas de eventos desde el dispositivo hacia un backend como Plaspy. A alto nivel, el protocolo hace que el equipo sea útil para gestores de flota y activos al entregar información oportuna de ubicación y estado del vehículo, y al permitir acciones de control remoto cuando están soportadas.

- Permite que el dispositivo reporte coordenadas GPS, marcas de tiempo e indicadores básicos de validez para que Plaspy pueda mapear ubicaciones y reconstruir recorridos.
- Transporta valores de telemetría derivados de OBD y CAN que Plaspy puede usar para análisis de mantenimiento, consumo de combustible y comportamiento del conductor.
- Transmite banderas de eventos por movimiento, encendido, inmovilizador y alarmas basadas en acelerómetro para que Plaspy dispare alertas y flujos de trabajo.
- Proporciona un canal para respuestas de configuración y acuses de recibo del dispositivo según lo requiera el fabricante para control operativo.
- Soporta reportes periódicos y eventos bajo demanda, de modo que sea posible la monitorización en tiempo real y la reproducción histórica en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint compartido e identifica automáticamente el protocolo entrante, por lo que los usuarios normalmente no necesitan seleccionar un protocolo manualmente. Cuando un T363B está configurado para reportar a Plaspy, la plataforma examina la conexión entrante y asigna el dispositivo al parser y a los canales de datos correctos al comparar características públicas y conocidas del protocolo.

- El dominio público del servidor de Plaspy es d.plaspy.com y la IP pública es 54.85.159.138.
- Plaspy recibe reportes de rastreadores en el puerto 8888 y usa el mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP para enviar datos al endpoint de Plaspy, según el soporte del equipo.
- Si el dispositivo está correctamente apuntado a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy intentará la detección automática del protocolo.
- Normalmente los usuarios solo necesitan asegurarse de que los ajustes de APN y servidor de reportes estén correctos en el dispositivo; Plaspy se encarga de la identificación del protocolo.

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el T363B alcanza a Plaspy y son independientes del contenido de los mensajes a nivel superior. El dispositivo soporta transporte celular GPRS y puede configurarse para usar un socket UDP o TCP para transmitir mensajes al puerto de escucha de Plaspy.

- El equipo puede configurarse usando UDP o TCP en el puerto 8888; la elección depende del firmware y del comportamiento deseado.
- Los dispositivos deben apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 al configurar el servidor de reportes.
- Plaspy utiliza el mismo número de puerto 8888 para todos los dispositivos, lo que simplifica la configuración en flotas mixtas.
- Verifique APN, provisión de SIM y conectividad GPRS para que el rastreador pueda establecer sesiones salientes hacia el endpoint de Plaspy.
- La estabilidad de la conexión, el comportamiento de retransmisión y la selección del transporte se gestionan generalmente en el nivel de firmware del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la temporización de mensajes, la disponibilidad de campos y los ítems de telemetría opcionales; confirme siempre las notas de la versión del firmware al resolver problemas.
- Revisiones de hardware o variantes regionales del T363B pueden exponer diferentes subconjuntos de datos OBD o CAN o cambiar las salidas digitales disponibles.
- La selección de transporte entre UDP y TCP puede afectar las garantías de entrega y debe elegirse en función de los requisitos operativos y las capacidades del dispositivo.
- Personalizaciones del fabricante o firmware específico del operador pueden introducir desviaciones de protocolo; verifique con el proveedor del dispositivo si el comportamiento difiere de lo esperado.
- La detección automática de Plaspy facilita la integración, pero es esencial que en el dispositivo estén correctamente configurados el servidor, el puerto y el APN.
- Valide cualquier funcionalidad de inmovilizador o control remoto conforme a las restricciones del vehículo y las normativas antes de habilitar acciones remotas.

## Por qué es importante entender el protocolo

Entender cómo el T363B se comunica con Plaspy ayuda a instaladores, gestores de flota e integradores a diagnosticar problemas, configurar los dispositivos correctamente y asegurar un funcionamiento confiable a largo plazo. Conocer el rol del protocolo facilita confirmar si un equipo está reportando la telemetría esperada y si responde a acciones de control.

- Ayuda a confirmar que el dispositivo envía los campos de telemetría requeridos por sus flujos de monitoreo y análisis.
- Agiliza la resolución de problemas cuando faltan reportes, al centrar las comprobaciones en APN, dirección del servidor, transporte y firmware.
- Aclara las expectativas sobre funcionalidades como control de inmovilizador, reporte de sensores BLE y métricas derivadas de OBD.
- Informa decisiones sobre elección de transporte y frecuencia de reporte para equilibrar la granularidad de datos y los costos celulares.
- Reduce el tiempo de integración alineando la configuración del dispositivo con el comportamiento del endpoint compartido de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Ulbotech T363B ofrece una vía sencilla para visualizar posiciones GPS, telemetría OBD y CAN, y alertas basadas en eventos a lo largo de flotas de vehículos. La forma plug and play en OBD, el GNSS interno y el soporte BLE hacen del T363B un dispositivo práctico para despliegues rápidos, mientras que Plaspy ingiere los datos para entregar mapas, reportes y flujos de alertas que satisfacen necesidades operativas.

Si desea conocer más sobre la integración de rastreadores como el T363B con Plaspy, visite https://www.plaspy.com para explorar las funciones de la plataforma y la documentación. Para los detalles específicos más actuales del protocolo del dispositivo, comportamiento del firmware y notas de implementación, por favor verifique con el fabricante en http://www.ulbotech.com/ ya que el soporte y el firmware del dispositivo pueden cambiar con el tiempo.
