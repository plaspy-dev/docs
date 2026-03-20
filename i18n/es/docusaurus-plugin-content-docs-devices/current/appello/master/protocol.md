---
slug: /appello/master/protocol
id: master-protocol
sidebar_label: Protocol
title: Appello - Master Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el rastreador GPS Appello Master con la configuración compartida de conexión de Plaspy
keywords:
  - Protocolo Appello Master
  - Protocolo GPS Appello Master
  - Protocolo Appello Master Plaspy
  - Protocolo de comunicación Appello Master
  - Protocolo de rastreo Appello Master
  - Rastreador GPS Appello
  - Compatibilidad Appello Master
  - Protocolo de dispositivo Plaspy
  - Rastreo de vehículos Appello Master
  - Rastreo de flotas Appello Master
---

# Appello Master - Protocolo

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS Appello Master con la plataforma Plaspy. Describe en términos generales cómo se comunica el dispositivo con Plaspy, las opciones de conexión que Plaspy expone públicamente y consideraciones prácticas de compatibilidad para implementación y resolución de problemas.

Plaspy utiliza un endpoint y puerto de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo del Appello Master puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y no en detalles sensibles del firmware.

## Resumen del protocolo

El Appello Master utiliza sus subsistemas celular y GPS para ensamblar y transmitir información de ubicación y estado a servidores remotos. El protocolo de comunicación define cómo el dispositivo se identifica, transmite datos posicionales, marcas de tiempo e indicadores de estado para que Plaspy pueda presentar información de seguimiento útil a gestores de flota e integradores.

- Permite transmisiones periódicas y basadas en eventos de coordenadas GPS y estado del dispositivo hacia un servidor remoto
- Incluye información de identidad y sesión para que Plaspy asocie los mensajes entrantes con un dispositivo registrado
- Transmite atributos de estado del equipo, como estado de movimiento, fuente de alimentación y nivel de batería, en términos generales
- Soporta entrega confiable sobre capas de transporte comunes para que Plaspy pueda ingerir datos de forma consistente
- Permite comandos desde el servidor y respuestas cuando el dispositivo y la implementación del fabricante lo soportan

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartido e incluye detección automática de protocolos para los rastreadores compatibles. En la mayoría de las implementaciones, el rastreador se configura para reportar al endpoint de Plaspy y, una vez que llegan los mensajes, Plaspy identifica el protocolo del dispositivo sin requerir selección manual dentro de la plataforma.

- El endpoint público de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y todos los dispositivos soportados usan el mismo puerto
- Los dispositivos pueden configurarse para usar UDP o TCP para enviar reportes a Plaspy en el puerto 8888
- Cuando un dispositivo correctamente configurado reporta a d.plaspy.com o a la IP del servidor, Plaspy intenta reconocer automáticamente el protocolo entrante
- En casos típicos no es necesario que usted seleccione el protocolo manualmente dentro de Plaspy si el dispositivo apunta al endpoint correcto

## Contexto de transporte y conexión

El contexto de conexión es una parte importante de la entrega confiable de datos. El Appello Master se comunica a través de redes celulares y puede configurarse para usar distintos métodos de transporte según las opciones del dispositivo y del fabricante. Para la integración con Plaspy, es importante apuntar el rastreador al endpoint y transporte correctos para asegurar que los mensajes lleguen a la plataforma.

- El Appello Master puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración
- Los dispositivos pueden dirigirse al dominio de Plaspy d.plaspy.com o usar directamente la IP del servidor 54.85.159.138
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración
- La elección del transporte (UDP vs TCP) puede afectar el comportamiento de entrega y debe coincidir con la configuración del rastreador
- Las condiciones de red, la configuración de SIM/APN y el comportamiento del operador pueden influir en la fiabilidad con la que el dispositivo alcanza Plaspy

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de envío de mensajes, los campos disponibles o características opcionales; verifique el comportamiento después de actualizaciones
- Revisiones de hardware y variantes de módulos pueden introducir pequeñas diferencias en los transportes soportados o la gestión de energía
- Los ajustes predeterminados del fabricante pueden usar un servidor o puerto distinto; actualice el dispositivo para que apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Algunas funciones o comandos pueden ser opcionales o depender del build de firmware instalado en el dispositivo Master
- Seleccione el transporte (UDP o TCP) que coincida con la configuración del equipo y los requisitos operativos
- Siempre valide el reporte en vivo después de la configuración para confirmar que Plaspy está recibiendo e interpretando los mensajes

## Por qué es importante entender el protocolo

Comprender cómo el Appello Master reporta los datos ayuda a garantizar una configuración correcta, un seguimiento preciso y una operación fiable a largo plazo con Plaspy. Conocer el transporte, el endpoint del servidor y la influencia del firmware y hardware ayuda a los equipos a resolver problemas de conectividad e interpretar el comportamiento del dispositivo.

- Simplifica la puesta en marcha al confirmar que se usa el endpoint y transporte correctos
- Facilita la resolución de problemas cuando los mensajes no aparecen en Plaspy o la telemetría es inconsistente
- Ayuda a planificar actualizaciones de firmware y validar cambios de comportamiento tras las actualizaciones
- Apoya decisiones informadas sobre administración de energía, intervalos de reporte y compromisos de autonomía de batería
- Permite una comunicación más efectiva con el fabricante al buscar aclaraciones sobre comportamientos específicos del dispositivo

## Por qué usar Plaspy con este protocolo

Integrar el Appello Master con Plaspy brinda a las organizaciones visibilidad consistente de la ubicación de vehículos y activos mediante una plataforma que acepta datos en un único endpoint compartido. La detección automática de protocolos de Plaspy y el puerto unificado simplifican el aprovisionamiento de dispositivos para que las flotas puedan escalar despliegues de seguimiento sin configuraciones complejas por dispositivo dentro del servidor.

Para más información sobre Plaspy y cómo soporta integraciones de dispositivos, por favor visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información de protocolo y firmware específica del dispositivo con el fabricante en http://www.cnjeo.com/.
