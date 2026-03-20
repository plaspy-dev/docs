---
slug: /thingsys/ts_p4s/protocol
id: ts_p4s-protocol
sidebar_label: Protocol
title: ThingSys - TS-P4s Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo ThingSys TS P4s para integración con el servidor Plaspy
keywords:
  - Protocolo ThingSys TS-P4s
  - Protocolo GPS ThingSys TS-P4s
  - Protocolo TS-P4s para Plaspy
  - Protocolo de rastreo TS-P4s
  - Integración TS-P4s Plaspy
  - Protocolo rastreador GPS ThingSys
  - Compatibilidad telemática TS-P4s
  - Rastreo de flotas TS-P4s
  - Protocolo de comunicación TS-P4s
  - Documentación ThingSys TS-P4s
---

# ThingSys - Protocolo TS-P4s

Esta página describe el contexto público del protocolo para utilizar el rastreador ThingSys TS-P4s con Plaspy. Aquí se explica de forma general cómo se comunica el dispositivo, qué datos espera recibir Plaspy y consideraciones prácticas al desplegar unidades TS-P4s para seguimiento de flotas y activos. El TS-P4s es un rastreador magnético resistente con GNSS multi-constelación y variantes celulares, pensado para despliegues de larga duración y compatibilidad con plataformas telemáticas habituales, incluida Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y puede detectar automáticamente el protocolo del rastreador cuando el equipo reporta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo del TS-P4s puede variar según la versión de firmware, la revisión de hardware, la variante regional y la implementación del fabricante; por ello esta página ofrece contexto público más que detalles específicos de firmware.

## Descripción general del protocolo

El protocolo de comunicación del TS-P4s define cómo el equipo envía posición GNSS, marcas de tiempo, estado, alarmas y telemetría a un servidor remoto, y cómo se gestionan los comandos y acuses de recibo en los modos compatibles. Para la integración con Plaspy, la función principal del protocolo es asegurar la entrega fiable de datos de ubicación y eventos para que Plaspy pueda mostrar mapas en vivo, alertas e informes históricos.

- Permite identificar el dispositivo y establecer sesión para que Plaspy asocie los mensajes entrantes con el activo correcto.
- Entrega datos GNSS, tiempo, estado de movimiento y telemetría de batería en un formato consistente y parseable para la ingestión en Plaspy.
- Transmite tipos de alarma y eventos como movimiento, manipulación o batería baja para que Plaspy dispare alertas y flujos de trabajo.
- Soporta intervalos de reporte y modos de energía configurables que afectan la autonomía de la batería y la carga en el servidor.
- Utiliza opciones de protocolo telemático ampliamente soportadas por el TS-P4s para simplificar el parseo en servidor y la compatibilidad.

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint de servidor compartido que escucha los reportes entrantes de los rastreadores y determina automáticamente el protocolo compatible según la conexión y el contenido del mensaje. En la mayoría de los despliegues no es necesario seleccionar el protocolo manualmente en Plaspy cuando el TS-P4s está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en el dominio del servidor d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para que la configuración saliente sea consistente entre modelos.
- Plaspy utiliza el endpoint y puerto compartidos para aceptar reportes y detecta automáticamente el protocolo del rastreador durante la operación normal.
- Cuando el rastreador está configurado para reportar a Plaspy, la plataforma normalmente detecta el protocolo y asocia los mensajes con el registro de dispositivo correspondiente.
- Si un dispositivo no se detecta automáticamente, revisar la configuración del equipo, APN, selección de transporte y versión de firmware son pasos comunes de diagnóstico.

## Contexto de transporte y conexión

El TS-P4s puede configurarse para usar transporte UDP o TCP dependiendo de la variante y de la preferencia del instalador. Para despliegues con Plaspy, el transporte y el endpoint deben configurarse para que el dispositivo envíe reportes al servidor y puerto que utiliza la plataforma.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto para Plaspy es 8888 y el dispositivo puede enviarse por UDP o TCP en ese puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración lateral entre modelos.
- La selección del transporte puede afectar el comportamiento de entrega y las características de reenvío según las condiciones de la red y el firmware del equipo.

## Notas sobre compatibilidad del protocolo

- El TS-P4s soporta protocolos telemáticos habituales y reportes configurables, lo que facilita la compatibilidad con Plaspy; sin embargo, los subconjuntos de protocolo soportados pueden variar según el firmware y la variante regional.
- Las revisiones de firmware y hardware pueden cambiar nombres de eventos, campos disponibles o los intervalos de reporte por defecto; confirme el comportamiento tras actualizaciones de firmware.
- La selección del modo de transporte TCP frente a UDP debe coincidir con lo configurado en el dispositivo y ser permitida por la red móvil y cualquier firewall intermedio.
- Las variantes celulares regionales (2G, 4G o modo dual) afectan la disponibilidad de la red y, por ende, la fiabilidad en la entrega de mensajes en distintos territorios.
- Valide el APN del dispositivo y la provisión de la SIM para que el rastreador pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Al integrar sensores adicionales o telemetría personalizada, confirme cómo esos campos son expuestos por el firmware del dispositivo y cómo se mapean en Plaspy.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del TS-P4s ayuda a garantizar una configuración exitosa, operación fiable y un diagnóstico más eficiente cuando los dispositivos se despliegan con Plaspy. Conocer el contexto público del protocolo permite a los equipos de operaciones ajustar reportes, interpretar alertas y mantener despliegues a largo plazo.

- Asegura la configuración correcta del dispositivo para que los mensajes lleguen al endpoint de Plaspy y se asocien al activo adecuado.
- Facilita el diagnóstico de problemas de conectividad y entrega al confirmar transporte, APN y ajustes de endpoint.
- Permite decisiones informadas sobre intervalos de reporte y modos de energía para equilibrar duración de batería y precisión de posición.
- Aclara cómo se presentan alarmas y telemetría en Plaspy para configurar correctamente reglas de alerta y automatización.
- Reduce tiempos de inactividad al proporcionar una base de verificación cuando un dispositivo deja de reportar.

## Por qué usar Plaspy con este protocolo

Usar el TS-P4s con Plaspy ofrece a las organizaciones una forma directa de combinar hardware de seguimiento resistente y de larga duración con una plataforma que ingiere ubicación, alarmas y telemetría para ofrecer visibilidad y control operativo. El TS-P4s es adecuado para monitorización de contenedores, seguimiento de flotas y alquiler, y despliegues encubiertos de activos donde la operación prolongada sin atención y la fiabilidad en el reporte son prioritarias.

Para saber más sobre Plaspy y cómo la plataforma puede ingerir datos del TS-P4s, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, comportamiento de firmware y variantes, consulte la documentación oficial de ThingSys en https://www.thingsys.com/ ya que el soporte de protocolo y las implementaciones de dispositivo pueden cambiar con el tiempo.
