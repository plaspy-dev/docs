---
slug: /topfly/tlw2_2bl/protocol
id: tlw2_2bl-protocol
sidebar_label: Protocol
title: TopFly - TLW2-2BL Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador TopFly TLW2-2BL y cómo se comunica con Plaspy mediante ajustes compartidos
keywords:
  - TopFly TLW2-2BL
  - Protocolo TopFly TLW2-2BL
  - Protocolo GPS TopFly TLW2-2BL
  - Protocolo del rastreador TopFly
  - Protocolo de comunicación TLW2-2BL
  - Protocolo de seguimiento TLW2-2BL
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de flotas Plaspy
  - Rastreador LTE M TopFly
  - Rastreador de cadena de frío TopFly
---

# TopFly - Protocolo TLW2-2BL

Esta página explica el contexto público del protocolo para usar el rastreador TopFly TLW2-2BL con Plaspy. Se centra en cómo el dispositivo reporta posiciones, telemetría y eventos a Plaspy, y en qué aspectos debe fijarse durante la configuración y la validación. El objetivo es ofrecer información clara y no sensible sobre la relación de comunicaciones entre el TLW2-2BL y Plaspy, indicando además fuentes oficiales para detalles concretos de firmware.

Plaspy utiliza ajustes de conexión compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando éste se dirige correctamente al endpoint de Plaspy. El comportamiento exacto del TLW2-2BL "en la red" puede variar según la versión de firmware, la variante de hardware y la implementación del fabricante, por lo que esta página se mantiene en un nivel alto y destaca los puntos prácticos necesarios para conectar, configurar y solucionar problemas de la integración.

## Visión general del protocolo

El protocolo de reporte del rastreador es el conjunto de mensajes y eventos que el TLW2-2BL emplea para identificarse y entregar posiciones GNSS, telemetría de accesorios BLE y estados de alarma a un servidor. En la práctica, el protocolo permite actualizaciones de ubicación oportunas, persistencia durante cortes de conectividad y alertas basadas en eventos que Plaspy puede procesar para mapeo, notificaciones e informes.

- Permite la identificación del dispositivo y los datos de autenticación necesarios para que Plaspy asocie la información entrante con una cuenta
- Transporta fijaciones de posición GNSS y marcas temporales para que Plaspy muestre la ubicación en vivo y reproducciones históricas
- Lleva datos de sensores y alarmas como lecturas BLE de temperatura, estado de ignición, alertas por pérdida de alimentación y estado de relés
- Soporta cargas en búfer para que los puntos almacenados se envíen una vez que se restablece la conectividad, preservando el historial en Plaspy
- Proporciona mensajes desencadenados por eventos para alarmas e entradas que inician flujos de trabajo dentro de Plaspy, como notificaciones o acciones de inmovilizador

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico entrante en un endpoint compartido y determina automáticamente el protocolo del rastreador a partir de los datos que envía el dispositivo. En la mayoría de despliegues con TLW2-2BL no es necesario seleccionar el protocolo manualmente dentro de Plaspy, siempre que el equipo esté configurado para reportar correctamente al endpoint de Plaspy.

- Plaspy usa un endpoint de servidor común para aceptar datos de múltiples modelos de rastreadores, permitiendo que una sola configuración funcione en distintos dispositivos
- La plataforma detecta automáticamente el protocolo según los patrones de conexión y de mensajes entrantes
- En general, usted solo necesita configurar el TLW2-2BL para que reporte al endpoint de Plaspy y seleccionar el transporte cuando aplique
- Una identificación adecuada del dispositivo y los intervalos de reporte garantizan que Plaspy asocie los datos con la unidad y la cuenta correctas
- Si un dispositivo no aparece, verificar la dirección de reporte y el transporte es el primer paso de diagnóstico habitual

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el TLW2-2BL alcanza Plaspy. El equipo puede configurarse para usar UDP o TCP en el puerto estándar de Plaspy. Plaspy acepta conexiones dirigidas al dominio público del servidor o a su dirección numérica, por lo que se puede soportar tanto DNS como IP fija según la preferencia del dispositivo.

- Plaspy server domain for reporting is d.plaspy.com and the public server IP is 54.85.159.138
- Plaspy listens on port 8888 for device traffic and all devices in Plaspy use the same port
- El TLW2-2BL puede configurarse para utilizar UDP o TCP en el puerto 8888 según el soporte del dispositivo y los requisitos del sitio
- Los dispositivos que almacenan datos durante cortes subirán los puntos guardados al endpoint de Plaspy una vez que se restablezca la conexión
- Use el tipo de transporte que coincida con su política de despliegue y con las capacidades del firmware del TLW2-2BL

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos soportados y las funciones opcionales, por lo que siempre conviene verificar la versión de firmware al validar el comportamiento
- Las revisiones de hardware o las SKUs regionales pueden habilitar distintas bandas celulares o comportamientos de conmutación que afectan la conectividad
- Las herramientas de configuración del fabricante pueden ofrecer múltiples opciones de transporte y servidor; asegúrese de que el TLW2-2BL esté apuntando al endpoint de Plaspy
- El reporte de accesorios BLE y las cargas útiles de los sensores pueden variar según el firmware y los modelos específicos de los dispositivos BLE emparejados al rastreador
- La selección entre UDP y TCP influye en las garantías de entrega y debe alinearse con sus requisitos de fiabilidad y las limitaciones de la red
- Valide el comportamiento del dispositivo con la documentación oficial de TopFly para conocer los comandos y ajustes específicos de firmware

## Por qué es importante entender el protocolo

Conocer cómo se comunica el rastreador ayuda a asegurar una conexión fiable, telemetría precisa y menos sorpresas durante el despliegue. Una comprensión práctica del protocolo y de la capa de transporte acelera la resolución de problemas y le permite optimizar los intervalos de reporte y el búfer según sus necesidades operativas.

- Garantiza la configuración correcta del servidor y del transporte para que los dispositivos aparezcan rápidamente en Plaspy
- Facilita el diagnóstico de problemas de conectividad como DNS, enrutamiento IP o incompatibilidades de transporte
- Ayuda a planificar los intervalos de actualización y los tamaños de búfer para preservar los datos históricos durante cortes
- Apoya decisiones de integración para sensores BLE, control de relés y manejo de alarmas que Plaspy mostrará
- Reduce tiempos de despliegue aclarando qué debe enviar el dispositivo para que Plaspy lo reconozca automáticamente

## Por qué usar Plaspy con este protocolo

Usar el TLW2-2BL con Plaspy brinda a las organizaciones seguimiento de alta frecuencia, almacenamiento en búfer extendido y telemetría de sensores integrada dentro de una plataforma de gestión de flotas. Plaspy ingiere las corrientes de posición y eventos del rastreador para ofrecer ubicación en vivo, reproducción histórica, alarmas e integraciones que apoyan operaciones, workflows antirobo y monitoreo de cadena de frío.

Si desea saber más sobre cómo Plaspy soporta conectividad de dispositivos y visibilidad de flota, visite https://www.plaspy.com. Para obtener detalles específicos del protocolo según el dispositivo, notas de firmware y orientaciones de implementación consulte al fabricante en https://www.topflytech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
