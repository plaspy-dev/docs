---
slug: /ulbotech/t371/protocol
id: t371-protocol
sidebar_label: Protocol
title: Ulbotech - T371 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo Ulbotech T371 para integración con Plaspy, ajustes de conexión y guía de compatibilidad
keywords:
  - Protocolo Ulbotech T371
  - Protocolo GPS Ulbotech T371
  - Protocolo de comunicación Ulbotech T371
  - Protocolo de rastreo Ulbotech T371
  - Protocolo rastreador GPS Ulbotech
  - Protocolo OBD II T371
  - Rastreadores compatibles con Plaspy
  - Protocolo de dispositivos Plaspy
  - Rastreo de vehículos T371
  - Protocolo GPS gestión de flotas
---

# Ulbotech - Protocolo T371

Esta página describe el contexto público del protocolo para usar el rastreador Ulbotech T371 con la plataforma Plaspy. Se centra en cómo el equipo se comunica con Plaspy en términos generales, qué ajustes de conexión se usan públicamente y qué aspectos del protocolo son relevantes para una integración y resolución de problemas eficaces sin exponer detalles privados del fabricante.

El Ulbotech T371 es un rastreador OBD II que integra conectividad celular Telit y un receptor GNSS u‑blox para enviar posición y telemetría del vehículo a Plaspy. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Consulte la documentación del fabricante cuando requiera detalles específicos del equipo.

## Resumen del protocolo

El protocolo de comunicación del T371 regula cómo el dispositivo informa posiciones GNSS, datos OBD y banderas de eventos a un servidor remoto, y cómo se coordinan comandos o actualizaciones remotas. A alto nivel, el protocolo facilita la entrega fiable de datos de ubicación y del vehículo a Plaspy y habilita las funciones del equipo en las que confían los administradores de flotas.

- Proporciona identificación y contexto de sesión para que Plaspy asocie los datos entrantes con el dispositivo y la cuenta correctos.
- Transmite reportes de posición GNSS y marcas de tiempo para ubicación en tiempo real y reproducción histórica en Plaspy.
- Entrega telemetría OBD y CAN como RPM, velocidad, temperatura del refrigerante, métricas de combustible y códigos de diagnóstico.
- Codifica eventos del acelerómetro y estados para que Plaspy pueda generar alertas y puntuaciones sobre comportamiento del conductor y seguridad.
- Soporta señales de gestión remota que permiten actualizaciones de firmware, detección de APN y cambios de configuración ocasionales.
- Opera sobre conexiones celulares estándar, por lo que la disponibilidad del dispositivo depende de la cobertura de red y la configuración del APN.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint y puerto compartidos e incluye detección automática de protocolos para los rastreadores soportados, incluido el T371. Cuando el dispositivo está configurado correctamente para reportar al endpoint de Plaspy, la plataforma normalmente reconocerá el protocolo sin que el usuario tenga que seleccionar manualmente el protocolo.

- Plaspy utiliza un endpoint de servidor común para recibir los reportes, por lo que la configuración se concentra en el lado del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el registro de equipos y las reglas de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a enviar datos a la plataforma.
- En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está configurado para enviar datos al endpoint de Plaspy.
- Si un dispositivo no aparece detectado, la primera acción de resolución de problemas es verificar el APN del dispositivo, la dirección del servidor y la selección de transporte.
- Mantenga el firmware y las configuraciones del dispositivo alineadas con las recomendaciones del fabricante para asegurar una detección consistente por parte de Plaspy.

## Contexto de transporte y conexión

El T371 envía su telemetría a través de redes celulares al endpoint de Plaspy. Dependiendo de la configuración del equipo y del firmware, el rastreador puede enviar datos usando UDP o TCP en el mismo puerto en el que Plaspy escucha para todos los dispositivos. Plaspy proporciona un endpoint público y una IP que se usan comúnmente en la configuración del equipo.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de red.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para los ajustes de conexión del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica reglas de firewall y del operador móvil.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para enviar telemetría y datos de eventos a Plaspy.
- El APN celular, la calidad de la señal y la provisión de la SIM afectan la conectividad y la frecuencia de reporte.
- Funciones remotas como FOTA y la detección de zona horaria o APN requieren un transporte fiable hacia el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes y las funciones disponibles; confirme la compatibilidad para el firmware específico instalado en las unidades T371.
- Diferentes revisiones de hardware o variantes regionales del T371 pueden afectar las señales OBD/CAN soportadas y la disponibilidad de telemetría.
- Las opciones de configuración del lado del fabricante pueden permitir seleccionar TCP o UDP; asegúrese de que el dispositivo esté apuntando al endpoint de Plaspy y use el transporte correcto.
- Algunos parámetros OBD dependen del modelo y la marca del vehículo y de la disponibilidad del bus CAN, no solo del rastreador.
- Valide que las funciones de gestión remota como FOTA estén habilitadas y probadas antes de un despliegue masivo.
- En caso de duda, consulte la documentación del producto T371 para ejemplos de configuración específicos del dispositivo y recomendaciones de APN.
- Confirme cualquier restricción regional o del operador de red que pudiera afectar la conectividad celular.

## Por qué es importante entender el protocolo

Comprender cómo el T371 se comunica con Plaspy ayuda a asegurar instalaciones confiables, mapeo de datos correcto y una resolución de problemas más rápida cuando los dispositivos no se comportan como se espera. Tener expectativas claras sobre el transporte, la cadencia de reporte y los tipos de telemetría mejora el éxito del despliegue y la fiabilidad operativa a largo plazo.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte soportado.
- Permite un mapeo preciso de parámetros OBD y CAN en los paneles y análisis de Plaspy.
- Mejora los pasos de solución de problemas para problemas de conectividad, incluyendo la verificación del APN y el estado de la señal.
- Informa decisiones sobre intervalos de reporte y reglas de eventos para equilibrar granularidad de datos y costos celulares.
- Soporta la validación de FOTA y comandos remotos para evitar interrupciones en la operación de la flota.
- Ayuda en la planificación regulatoria y operativa cuando el comportamiento del dispositivo depende del firmware o de la integración con el vehículo.

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech T371 con Plaspy ofrece visibilidad centralizada de la ubicación del vehículo, telemetría de motor y diagnóstico, y alertas basadas en eventos que requieren flotas y proveedores de servicios. La forma OBD II del T371 y su conjunto de telemetría lo hacen adecuado para seguimiento de flotas, programas de renta, telemática para seguros y flujos de trabajo anti robo cuando se combina con una plataforma que ingiere y normaliza datos vehiculares.

Plaspy simplifica la recepción de dispositivos mediante el uso de un endpoint de servidor compartido y detección automática de protocolos, de modo que los operadores de flota puedan concentrarse en alertas, reportes y flujos operativos en lugar de la configuración de protocolo de bajo nivel. Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica más reciente del dispositivo en el sitio del fabricante http://www.ulbotech.com/ antes de despliegues a gran escala.
