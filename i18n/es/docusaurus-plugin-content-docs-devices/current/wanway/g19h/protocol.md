---
slug: /wanway/g19h/protocol
id: g19h-protocol
sidebar_label: Protocol
title: WanWay - G19H Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador WanWay G19H con Plaspy usando ajustes compartidos de servidor para seguimiento fiable
keywords:
  - protocolo WanWay G19H
  - protocolo GPS WanWay G19H
  - protocolo WanWay G19H para Plaspy
  - protocolo de comunicación WanWay G19H
  - protocolo de rastreo WanWay G19H
  - integración G19H con Plaspy
  - protocolo de rastreador GPS WanWay
  - protocolo de seguimiento de vehículos G19H
  - gestión de flotas G19H
  - protocolo de rastreador Plaspy
---

# WanWay - Protocolo G19H

Esta página explica el contexto del protocolo público para usar el rastreador WanWay G19H con Plaspy. Se centra en cómo el equipo se comunica con Plaspy, qué ajustes de conexión se emplean y qué aspectos considerar al integrar el G19H en flotas y procesos de seguimiento de activos. La información aquí pretende ser una visión general del protocolo y una guía práctica de integración, no una referencia de firmware.

El G19H es un rastreador GPS compacto y resistente con instalación de cuatro cables, detección de encendido ACC, alarmas por vibración y manipulación, y una salida para inmovilizador remoto. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Por ello, valide los ajustes del equipo con la documentación del fabricante cuando sea necesario.

## Visión general del protocolo

El protocolo de reporte es el mecanismo que usa el G19H para enviar coordenadas GPS, telemetría y notificaciones de eventos a un servidor remoto como Plaspy. En términos generales, el protocolo define cómo el dispositivo se identifica, cómo informa la posición y el estado, y cómo el servidor interpreta esos mensajes para habilitar seguimiento en tiempo real, alertas y registros históricos.

- Permite al G19H enviar actualizaciones de ubicación y telemetría como estado ACC, alertas por vibración y eventos de inmovilizador a Plaspy.
- Proporciona un identificador para que Plaspy relacione los mensajes entrantes con el registro correcto del dispositivo.
- Codifica información de estado y eventos para que Plaspy genere alertas y almacene rutas históricas.
- Funciona sobre un transporte de red acordado entre el dispositivo y el servidor para asegurar la entrega fiable.
- Permite que Plaspy presente datos accionables a los operadores sin que el usuario tenga que interpretar manualmente los mensajes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un punto final y puerto compartidos e incluye detección automática de protocolo, por lo que normalmente no es necesario seleccionar manualmente un protocolo en la plataforma. Si el G19H está configurado para reportar a Plaspy, la plataforma usará su lógica de detección para interpretar los mensajes entrantes y asociarlos con la cuenta de dispositivo correcta.

- Plaspy emplea un endpoint y puerto comunes para el tráfico entrante de dispositivos para simplificar la configuración.
- Cuando el G19H reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia los mensajes con el dispositivo.
- Por lo general, usted solo necesita apuntar el dispositivo a la dirección de Plaspy y asegurarse de que el identificador del equipo sea el correcto.
- La detección automática reduce la necesidad de seleccionar manualmente el protocolo dentro de Plaspy cuando los dispositivos están bien configurados.
- Si existen discrepancias de configuración o firmware, verificar la dirección de reporte y el modo de transporte del dispositivo es un primer paso práctico para la resolución de problemas.

## Transporte y conexión

El G19H se conecta a un servidor remoto mediante datos celulares y puede configurarse para usar UDP o TCP según el soporte y los ajustes del dispositivo. En Plaspy hay una única dirección de servidor y puerto a los que apuntar los equipos para que la instalación y el aprovisionamiento sean consistentes.

- El dominio del servidor Plaspy es d.plaspy.com para configuraciones basadas en DNS.
- La IP del servidor Plaspy es 54.85.159.138 para configuraciones con IP directa.
- El puerto que usa Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El G19H puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del equipo y la preferencia del instalador.
- Asegúrese de que el APN y los ajustes de datos celulares del dispositivo sean correctos para que el rastreador pueda alcanzar d.plaspy.com o 54.85.159.138.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del G19H pueden cambiar detalles de reporte, por lo que el comportamiento exacto de los mensajes puede variar entre lotes de producción.
- Las revisiones de hardware o variantes regionales del G19H pueden afectar qué bandas celulares o modos de transporte están disponibles.
- Elegir UDP o TCP puede influir en las características de entrega; use el modo que el firmware y las condiciones de red recomienden para el dispositivo específico.
- Confirme siempre que la dirección de reporte y las credenciales del dispositivo coincidan con lo que Plaspy espera antes de investigar el mapeo de protocolos.
- Ajustes del lado del fabricante, como servidor de reporte por defecto o formatos de comando, pueden diferir de guías de ejemplo; verifique la configuración del equipo con cuidado.
- Valide la compatibilidad con la documentación del fabricante si observa comportamientos inusuales.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una integración fiable entre el rastreador G19H y Plaspy, facilita la resolución de problemas y permite tomar decisiones informadas sobre transporte, actualizaciones de firmware y alertas.

- Simplifica el aprovisionamiento del dispositivo al garantizar la dirección de servidor y el transporte correctos.
- Ayuda a identificar si los problemas de conectividad son de red, de transporte o de configuración.
- Mejora la capacidad para validar reportes de eventos como estado ACC, alertas por vibración y acciones del inmovilizador.
- Contribuye a la fiabilidad a largo plazo al orientar las decisiones sobre actualizaciones de firmware y comprobaciones de compatibilidad.
- Facilita la comunicación con el fabricante cuando el comportamiento del dispositivo difiere de lo esperado.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el WanWay G19H integra la posición del vehículo, el estado de encendido y los eventos de seguridad en una vista operativa única. Plaspy ingiere la telemetría y los reportes de eventos del G19H para que flotas y equipos de seguridad puedan monitorear ubicaciones en tiempo real, recibir alertas por manipulación o vibración y gestionar acciones de inmovilizador cuando el dispositivo lo soporta.

Plaspy centraliza los datos del G19H usando una dirección de servidor y puerto constantes, lo que simplifica despliegues a gran escala y la gestión continua de dispositivos. Para más información sobre cómo Plaspy soporta integraciones de dispositivos y flujos de trabajo de flota, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación de implementación más actual, verifique la información con el fabricante en https://www.wanwaytech.net/.
