---
slug: /ulbotech/l101/protocol
id: l101-protocol
sidebar_label: Protocol
title: Ulbotech - L101 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Ulbotech L101 con Plaspy en rastreo de flotas y telemetría
keywords:
  - Protocolo Ulbotech L101
  - Protocolo GPS Ulbotech L101
  - Compatibilidad Ulbotech L101 Plaspy
  - Protocolo de rastreo Ulbotech L101
  - Telemetría OBDII Ulbotech L101
  - Rastreo vehicular Ulbotech L101
  - Protocolo de dispositivo Plaspy
  - Rastreo de flotas Ulbotech L101
  - Integración de telemetría L101
  - Protocolo de rastreador GPS Plaspy
---

# Ulbotech - L101 Protocolo

Esta página describe el contexto público del protocolo para usar el Ulbotech L101 con Plaspy. Explica cómo Plaspy consume el comportamiento de reporte y la telemetría del L101 para seguimiento en tiempo real, diagnósticos OBDII y detección de eventos de conductor, sin entrar en detalles privados o sensibles de implementación. La información se centra en la relación de comunicación entre el dispositivo y la plataforma Plaspy, más que en aspectos internos del firmware.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos están correctamente apuntados al endpoint de Plaspy. El L101 puede configurarse para enviar datos a Plaspy usando opciones de transporte estándar y su comportamiento en tiempo de ejecución puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para la ingestión en Plaspy, la plataforma escucha en d.plaspy.com y 54.85.159.138 en el puerto 8888, y los dispositivos pueden configurarse para usar UDP o TCP en ese mismo puerto.

## Visión general del protocolo

El protocolo de reporte del rastreador es el conjunto de mensajes y convenciones que el L101 usa para enviar posiciones GPS, parámetros OBDII, eventos de sensores y cambios de estado a un servidor remoto. En el contexto de Plaspy, el protocolo permite que el dispositivo se identifique, reporte telemetría en un formato utilizable y que Plaspy normalice esos datos para paneles, alertas e informes.

- Transmite actualizaciones de ubicación y soluciones GNSS a un endpoint remoto para que Plaspy muestre la posición en tiempo real y el historial.
- Envía lecturas OBDII y parámetros de diagnóstico que Plaspy mapea a métricas de combustible, motor y estado del vehículo.
- Comunica eventos basados en acelerómetro y el estado de ignición o inmovilizador para flujos de trabajo de seguridad y antirrobo.
- Usa un transporte bien definido hacia Plaspy para que la plataforma pueda ingerir y normalizar tramas entrantes de forma fiable.
- Incluye controles de reporte que afectan la frecuencia de actualizaciones, los umbrales de eventos y qué campos de telemetría se incluyen en cada transmisión.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint de servidor compartido y aplica detección automática para identificar el protocolo del dispositivo, por lo que normalmente no es necesario seleccionar manualmente el protocolo dentro de la plataforma. La configuración correcta del equipo para reportar al endpoint de Plaspy es el requisito principal para que la detección automática funcione.

- Plaspy escucha en el dominio compartido d.plaspy.com y en la dirección IP 54.85.159.138 usando el puerto 8888 para datos entrantes de rastreadores.
- Todos los dispositivos configurados para reportar a Plaspy usan el mismo puerto, lo que simplifica el despliegue y la configuración de cortafuegos.
- Cuando una unidad L101 reporta al endpoint de Plaspy, la plataforma reconoce automáticamente el formato entrante y lo asocia con la entrada del dispositivo.
- Usted normalmente solo necesita asegurarse de que el dispositivo reporte al endpoint de Plaspy; la selección manual del protocolo dentro de Plaspy no es necesaria para dispositivos configurados correctamente.
- Si un dispositivo no parece detectarse, verificar la configuración del servidor y el firmware del equipo son los primeros pasos recomendados.

## Transporte y contexto de conexión

Las elecciones de conexión y transporte determinan cómo el L101 alcanza Plaspy, pero no cambian la telemetría de alto nivel disponible para la plataforma. Dependiendo de la configuración del equipo y del entorno, el L101 puede usar UDP o TCP para entregar mensajes a Plaspy.

- El L101 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy según el soporte del dispositivo y sus ajustes.
- Los dispositivos pueden apuntar al servidor de Plaspy por el nombre de dominio d.plaspy.com o directamente a la IP 54.85.159.138 si no hay DNS disponible.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que reduce la sobrecarga de configuración por unidad.
- Elegir UDP puede reducir la latencia para actualizaciones frecuentes y pequeñas, mientras que TCP proporciona entrega fiable cuando se requiere; la elección adecuada depende de las condiciones de red y las opciones del firmware del dispositivo.
- Confirme que cualquier cortafuegos de red permita tráfico saliente UDP o TCP al puerto 8888 para asegurar que los dispositivos puedan alcanzar Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de los mensajes, los campos disponibles y el comportamiento de reporte de eventos; siempre verifique el nivel de firmware del dispositivo al diagnosticar diferencias.
- Las revisiones de hardware u módulos opcionales en el L101 pueden afectar qué canales de telemetría están presentes o cómo se comportan ciertos sensores.
- Las configuraciones y menús del fabricante controlan el modo de transporte, los intervalos de subida y qué PIDs OBDII se reportan; estos ajustes impactan la ingestión en Plaspy.
- En algunos entornos es necesario usar el nombre de dominio de Plaspy o la IP directa según la disponibilidad de DNS y el enrutamiento de la red.
- Para métricas derivadas de OBDII, distintas marcas y modelos de vehículo pueden exponer diferentes PIDs; Plaspy normaliza los campos recibidos pero la disponibilidad de origen puede variar.
- Valide la compatibilidad con la documentación del fabricante para límites específicos del dispositivo como almacenamiento, comportamiento BLE y conexión del inmovilizador.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el L101 ayuda a asegurar una configuración confiable, telemetría precisa y una resolución más rápida de problemas al integrar el dispositivo con Plaspy. Estar al tanto del protocolo y del contexto de transporte reduce el tiempo de despliegue a gran escala y mejora el monitoreo operativo.

- Ayuda a confirmar que el dispositivo está correctamente apuntado a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 para que los datos lleguen a Plaspy.
- Permite elegir de forma sensata entre UDP y TCP según la fiabilidad de la red y la frecuencia de reporte.
- Facilita la correlación de los parámetros OBDII reportados con los PIDs esperados para monitoreo de combustible y diagnósticos en Plaspy.
- Ayuda en la resolución de problemas cuando faltan actualizaciones al revisar firmware, modo de transporte y configuración del endpoint en el dispositivo.
- Apoya la planificación de despliegues de flota al comprender qué elementos de telemetría ofrece el L101 y con qué frecuencia se envían.

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech L101 con Plaspy brinda a las organizaciones visibilidad consolidada del vehículo, telemetría operativa y alertas basadas en eventos que apoyan la gestión de flotas, operaciones de alquiler y telemática para seguros. El factor de forma OBDII plug and play del L101, combinado con GNSS, eventos por acelerómetro y conectividad BLE, lo hace adecuado para despliegues donde la instalación rápida y la telemetría completa son prioritarias.

Para saber más sobre cómo Plaspy puede ingerir y presentar datos del L101, visite https://www.plaspy.com. Tenga en cuenta que el soporte del protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente del protocolo específico del dispositivo y las versiones de firmware en el sitio del fabricante http://www.ulbotech.com/ antes de un despliegue a gran escala.
