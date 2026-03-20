---
slug: /ulbotech/t373b/protocol
id: t373b-protocol
sidebar_label: Protocol
title: Ulbotech - T373B Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador Ulbotech T373B con Plaspy, con ajustes de conexión y notas de compatibilidad
keywords:
  - Ulbotech T373B
  - protocolo T373B
  - protocolo GPS Ulbotech
  - compatibilidad T373B Plaspy
  - protocolo rastreador OBD II
  - protocolo rastreo vehicular
  - comunicación rastreador GPS
  - seguimiento de flotas T373B
  - protocolo dispositivo Plaspy
  - telemetría T373B
---

# Ulbotech - Protocolo T373B

Esta página documenta el contexto público del protocolo para usar el Ulbotech T373B con Plaspy. Explica a alto nivel cómo se comunica el rastreador con Plaspy, qué ajustes de conexión se usan públicamente y qué debe considerarse al integrar el T373B en una instalación con Plaspy. Se omiten intencionalmente detalles técnicos dependientes del fabricante o del firmware para mantener esta guía segura y aplicable en general.

El T373B es un rastreador OBD II plug and play basado en un módem celular Telit xE910 y un módulo GNSS u‑blox MAX 7, con Bluetooth 4.0 LE para extensiones locales. Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión del firmware, la revisión de hardware y la forma en que el fabricante implemente el reporte y los comandos.

## Visión general del protocolo

El T373B utiliza un protocolo de reporte para enviar ubicación, diagnósticos a bordo y telemetría de eventos a un servidor remoto para su procesamiento. Para la integración con Plaspy, ese protocolo transmite identificación, reportes periódicos y por eventos, además de la telemetría del vehículo necesaria para sistemas de gestión de flotas y activos.

- El propósito del protocolo es empaquetar la posición GNSS, telemetría OBD II y CAN, entradas/salidas y señales de comportamiento del conductor para su envío al backend.
- Permite que el rastreador se identifique ante el servidor para que Plaspy asocie los mensajes entrantes con el registro correcto del dispositivo y del vehículo.
- Los reportes de eventos, como alertas DTC, cambios de ignición o eventos de inmovilizador, se transmiten para que Plaspy pueda activar alertas y flujos de trabajo.
- La telemetría transmitida por el protocolo admite el seguimiento continuo y la reproducción histórica en los paneles de Plaspy.
- El protocolo puede incluir mecanismos de latido periódico (heartbeat) y confirmaciones de configuración según lo implemente el firmware del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de rastreadores compatibles en un punto de conexión de red compartido y usa esos datos entrantes para determinar automáticamente el protocolo del dispositivo. En la mayoría de despliegues estándar del T373B, no se requiere seleccionar el protocolo manualmente dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un solo puerto compartido para todos los dispositivos soportados, lo que simplifica la configuración para instaladores y equipos de flota.
- Los dispositivos destinados a Plaspy deben configurarse para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 y el puerto configurado.
- Plaspy detecta automáticamente el protocolo del rastreador cuando reporta correctamente al endpoint de Plaspy, reduciendo la necesidad de seleccionar el protocolo por dispositivo.
- Si un dispositivo reporta correctamente al endpoint, Plaspy asocia sus mensajes con el registro del dispositivo registrado y comienza a procesar posición y telemetría.
- Normalmente solo es necesario asegurarse de que el T373B apunte al servidor Plaspy y que el reporte esté habilitado en la configuración del rastreador.

## Transporte y contexto de conexión

El transporte de conexión para el T373B puede configurarse para usar UDP o TCP dependiendo del soporte del dispositivo y de los requisitos operativos. Para comunicarse con Plaspy, los ajustes públicos de conexión son consistentes entre los dispositivos soportados y están documentados para los instaladores.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- El dominio del servidor Plaspy para reporte es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la planificación de firewalls y redes para flotas.
- Elija UDP para menor latencia y transporte más simple en muchos escenarios de seguimiento en vivo, o TCP cuando se prefiera entrega confiable y el firmware del dispositivo lo soporte.
- Asegúrese de que el APN y la configuración celular en el T373B estén correctos para que el módem pueda alcanzar el endpoint de Plaspy a través de redes móviles.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes y los campos de telemetría disponibles; verifique las notas de la versión del firmware al planificar la integración.
- Las revisiones de hardware y las variantes de módulo (por ejemplo variantes de banda celular) pueden afectar el comportamiento y los diagnósticos disponibles.
- Las opciones de configuración del fabricante, como la selección de transporte, los intervalos de reporte y los conjuntos de telemetría, cambiarán la cantidad de datos enviados a Plaspy.
- Las funciones de Bluetooth y FOTA pueden alterar los flujos de trabajo de configuración pero no cambian los requisitos públicos del endpoint de reporte.
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 y que use el puerto 8888 para asegurar que Plaspy reciba los mensajes.
- Siempre verifique la recepción en Plaspy con la configuración del dispositivo y cualquier registro o herramienta local disponible durante la puesta en marcha.

## Por qué es importante entender el protocolo

Tener una comprensión básica del protocolo de comunicación del rastreador ayuda a instaladores y gestores de flotas a configurar los dispositivos correctamente, diagnosticar problemas comunes de conectividad y mantener telemetría confiable con el tiempo. Saber cómo se manejan el reporte, el transporte y la identidad del dispositivo reduce el tiempo de configuración y facilita la resolución cuando los datos dejan de aparecer en Plaspy.

- Aclara qué ajustes de conexión deben configurarse en el T373B para que Plaspy reciba mensajes.
- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy cuando los reportes no alcanzan el endpoint compartido.
- Orienta sobre la decisión de usar UDP frente a TCP para un despliegue o entorno de red específico.
- Reduce la ambigüedad al comparar los registros de cambios de firmware del dispositivo con el comportamiento observado en el panel de Plaspy.
- Informa las políticas sobre actualizaciones de firmware y cambios de configuración a nivel de flota para evitar interrupciones no deseadas en el reporte.

## Por qué usar Plaspy con este protocolo

Usar el T373B con Plaspy ofrece un enfoque práctico para monitorización plug and play de vehículos cuando se requieren posición, diagnósticos del vehículo, comportamiento del conductor y controles antirrobo. La forma OBD II del T373B, su rendimiento GNSS, la conveniencia BLE y la riqueza de telemetría lo hacen adecuado para seguimiento de flotas, operaciones de alquiler y telemática para seguros cuando se combina con el procesamiento y la visualización centralizada de Plaspy.

Para saber más sobre Plaspy y cómo puede gestionar dispositivos como el Ulbotech T373B visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la documentación de protocolo específica del dispositivo y las notas de firmware más recientes en el sitio del fabricante http://www.ulbotech.com/ antes de desplegar a gran escala.
