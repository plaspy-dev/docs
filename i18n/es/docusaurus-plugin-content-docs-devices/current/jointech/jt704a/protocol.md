---
slug: /jointech/jt704a/protocol
id: jt704a-protocol
sidebar_label: Protocol
title: Jointech - JT704A Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Jointech JT704A con Plaspy en seguimiento de contenedores y cadena de frío
keywords:
  - Protocolo Jointech JT704A
  - Protocolo GPS JT704A
  - Rastreador Jointech Plaspy
  - Protocolo de comunicación JT704A
  - Protocolo de seguimiento JT704A
  - Protocolo de rastreador GPS para contenedores
  - Protocolo de rastreador para cadena de frío
  - Gestión de flotas JT704A
  - Compatibilidad Jointech JT704A
  - Protocolo de rastreador Plaspy
---

# Jointech - Protocolo JT704A

Esta página describe el contexto público del protocolo para usar el rastreador Jointech JT704A con Plaspy. Se centra en cómo el dispositivo comunica información telemétrica y ambiental a la plataforma Plaspy en términos generales y no sensibles, y explica los ajustes de comunicación necesarios para la integración. El objetivo es ayudar a equipos de flotas y logística a comprender cómo se transmiten las posiciones y datos ambientales del JT704A a Plaspy y qué verificar durante los despliegues.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando los equipos están correctamente apuntados a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la validación en campo y la referencia a la documentación del fabricante siguen siendo importantes al configurar dispositivos para uso en producción.

## Resumen del protocolo

El protocolo de comunicación del JT704A es el mecanismo que transmite posiciones, telemetría ambiental y señales de evento desde el dispositivo hacia la plataforma Plaspy. En términos generales, el protocolo define cómo se identifica el rastreador, cómo se empaquetan las lecturas de posición y sensores para su envío, y cómo se reportan eventos o estados para que Plaspy los pueda interpretar y presentar en la interfaz de monitoreo.

- Permite que el JT704A reporte posicionamiento multimodal y telemetría de sensores a Plaspy para análisis en tiempo real e histórico.
- Incluye información de identidad y estado para que Plaspy asocie los datos entrantes con el registro de dispositivo correcto.
- Soporta modos de reporte periódicos y basados en eventos para equilibrar la frecuencia de actualizaciones con la duración de la batería en despliegues prolongados.
- Transporta datos ambientales como temperatura, humedad y luz junto con la ubicación, útil para seguimiento de cadena de frío y monitoreo antirobo.
- Proporciona un flujo consistente que Plaspy convierte en alertas, mapas y series temporales para la toma de decisiones operativas.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y usa detección automática para determinar el protocolo que emplea un rastreador. Cuando un JT704A está configurado para reportar al endpoint de Plaspy, generalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy. Una configuración y pruebas adecuadas garantizan que Plaspy pueda identificar e ingerir correctamente los datos del equipo.

- Plaspy recibe reportes de dispositivos en una dirección de servidor y puerto comunes, de modo que los rastreadores soportados pueden usar la misma configuración de conexión.
- El endpoint compartido de Plaspy es d.plaspy.com, que resuelve hacia la infraestructura de la plataforma.
- La IP del servidor de Plaspy es 54.85.159.138 para casos en que se use una dirección IP en lugar de un nombre DNS.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para datos entrantes, lo que simplifica la configuración.
- Cuando el JT704A apunta a Plaspy y la conectividad de red está disponible, Plaspy detectará automáticamente el protocolo del rastreador y comenzará a ingerir datos.

## Transporte y contexto de conexión

Las opciones de transporte afectan la forma en que el JT704A entrega datos a Plaspy, pero no cambian el hecho de que Plaspy recibe e interpreta la telemetría. El dispositivo puede configurarse para usar UDP o TCP según sus capacidades y las restricciones del despliegue. Asegurarse de que el equipo reporte al endpoint correcto de Plaspy y use el puerto compartido es el requisito principal para una integración exitosa.

- Los dispositivos pueden configurarse para reportar al endpoint DNS de Plaspy d.plaspy.com.
- Como alternativa, en algunos despliegues se utiliza la IP del servidor de Plaspy 54.85.159.138 cuando no se prefiere DNS.
- El puerto utilizado para todas las conexiones de dispositivos con Plaspy es 8888 y es consistente entre los dispositivos soportados.
- El JT704A puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y el entorno de red.
- La estabilidad de la red, restricciones del operador y la configuración del APN pueden influir en qué transporte funciona mejor en una región determinada.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades JT704A pueden cambiar la frecuencia de reporte, los modos de transporte soportados y los campos de telemetría disponibles.
- Revisiones de hardware o variantes del producto pueden alterar los sensores disponibles u opciones de entrada como detección de manipulación o de puertas.
- Los comandos de configuración y las opciones de aprovisionamiento del fabricante pueden diferir entre regiones o variantes comerciales.
- Seleccionar UDP frente a TCP puede afectar las características de entrega y debe validarse según las necesidades de la misión en cuanto a fiabilidad y conservación de batería.
- Valide los ajustes de reporte del dispositivo para que el JT704A apunte a d.plaspy.com o a la IP del servidor de Plaspy y utilice el puerto 8888.
- Siempre pruebe una unidad de muestra en la red celular e endpoint de Plaspy previstos antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el JT704A se comunica con Plaspy mejora el éxito de la configuración, reduce el tiempo de resolución de problemas y favorece la confiabilidad a largo plazo de flotas de contenedores y cadenas de frío. Aunque Plaspy detecte automáticamente el formato entrante, conocer el contexto de conexión ayuda a los equipos de operaciones a configurar dispositivos, diseñar intervalos de reporte e interpretar anomalías en la telemetría.

- Asegura que los equipos estén configurados para reportar al endpoint y puerto correctos para que Plaspy pueda ingerir los datos.
- Ayuda a balancear los intervalos de reporte versus la vida de la batería para objetivos de espera de varios años.
- Simplifica la resolución de problemas cuando faltan señales de telemetría, posición o eventos.
- Orienta la decisión sobre la selección de transporte TCP o UDP en entornos de red limitados.
- Aclara las expectativas respecto a la telemetría ambiental disponible y cómo Plaspy mostrará los datos de los sensores.

## Por qué usar Plaspy con este protocolo

Usar el Jointech JT704A con Plaspy ofrece una solución práctica para organizaciones que requieren visibilidad persistente de activos en contenedores y envíos en cadena de frío. La combinación de posicionamiento multimodal y telemetría ambiental entregada a una única plataforma de monitoreo ayuda a los equipos logísticos a gestionar rutas, detectar eventos de manipulación o apertura de puertas y mantener registros regulatorios con un mantenimiento mínimo gracias al diseño de bajo consumo del dispositivo.

Los ajustes de conexión compartidos de Plaspy y la detección automática de protocolos reducen la complejidad de configuración en despliegues a gran escala. Para saber más sobre Plaspy y cómo la plataforma puede integrar la telemetría del JT704A en flujos de trabajo de monitoreo de flota y cadena de frío, visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, comportamiento de firmware y guía del fabricante, verifique la información con Jointech en https://www.jointcontrols.com/.
