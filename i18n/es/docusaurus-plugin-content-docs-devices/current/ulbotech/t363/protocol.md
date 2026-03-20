---
slug: /ulbotech/t363/protocol
id: t363-protocol
sidebar_label: Protocol
title: Ulbotech - T363 Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo para usar Ulbotech T363 con la configuración de servidor Plaspy y guías de compatibilidad
keywords:
  - protocolo Ulbotech T363
  - protocolo GPS Ulbotech T363
  - compatibilidad Ulbotech T363 Plaspy
  - protocolo de rastreo T363
  - protocolo GPS Ulbotech
  - comunicación del dispositivo T363
  - protocolo de dispositivo Plaspy
  - rastreo de vehículos T363
  - protocolo de rastreador OBDII
  - gestión de flotas T363
---

# Ulbotech - Protocolo T363

Esta página describe el contexto público del protocolo para usar el Ulbotech T363 con Plaspy. Se centra en cómo el rastreador se comunica con la plataforma Plaspy a alto nivel, en los ajustes de conexión habituales que verá al configurar dispositivos para que reporten a Plaspy, y en consideraciones prácticas de compatibilidad para despliegues.

Las descripciones públicas del fabricante para dispositivos Ulbotech (por ejemplo la familia T381) ofrecen contexto útil sobre los tipos de telemetría e interfaces vehiculares que estos rastreadores pueden exponer. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre valide los detalles específicos del equipo contra la documentación oficial del fabricante.

## Descripción general del protocolo

El protocolo del rastreador es el conjunto de reglas que usa el T363 para enviar telemetría, estado y eventos a un servidor como Plaspy. En términos generales, el protocolo permite que el dispositivo se identifique, entregue posición y telemetría del vehículo, y notifique alarmas o cambios de estado para que Plaspy pueda almacenar, mostrar y actuar sobre esa información.

- Proporciona identificación del dispositivo para que Plaspy asocie los datos entrantes con la unidad o vehículo correcto
- Transmite actualizaciones de ubicación GNSS y marcas de tiempo que Plaspy utiliza para mapas e historial
- Lleva telemetría de vehículo y sensores como velocidad, estado de encendido y otras entradas a bordo cuando están disponibles
- Reporta alarmas y eventos para que Plaspy pueda activar alertas, acciones de geocerca o flujos de trabajo automatizados
- Incluye mensajes periódicos de latido o estado para indicar conectividad y salud del dispositivo

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de muchos modelos de rastreadores y detecta automáticamente el protocolo cuando un equipo está configurado para reportar al endpoint de Plaspy. En la mayoría de los casos, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el rastreador está correctamente apuntado al servidor Plaspy.

- Los dispositivos deben reportar al endpoint del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138
- Plaspy escucha en el puerto compartido 8888 para conexiones entrantes de dispositivos soportados
- Los dispositivos pueden configurarse para usar UDP o TCP según el soporte del equipo y la política de red
- Cuando llega un mensaje dirigido correctamente al puerto 8888, Plaspy usa detección automática para identificar el protocolo del rastreador
- Una identidad de dispositivo correcta e intervalos de reporte consistentes ayudan a Plaspy a clasificar de forma fiable el flujo de datos entrante

## Transporte y contexto de conexión

El contexto de conexión abarca el transporte y el direccionamiento que permiten al T363 alcanzar Plaspy. Esta sección aclara qué ajustes es probable que configure en el rastreador y qué espera recibir Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requisitos del sitio
- Plaspy acepta conexiones dirigidas al dominio d.plaspy.com o a la dirección IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto (8888), lo que simplifica la configuración entre modelos
- Consideraciones de red como NAT, parámetros APN del operador y reglas de firewall pueden influir en si UDP o TCP es el transporte más adecuado para una instalación concreta
- Asegúrese de que el rastreador tenga acceso móvil estable y que el tráfico saliente hacia el puerto 8888 esté permitido

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre lotes de fabricación o revisiones del modelo pueden cambiar los mensajes exactos que envía un dispositivo
- Las variantes de hardware dentro de una familia de modelos pueden exponer distintos conjuntos de datos OBDII o sensores al protocolo
- Las configuraciones del lado del fabricante y las funciones opcionales (por ejemplo hotspot WiFi o bridging) suelen ser independientes del protocolo de reporte
- La elección del transporte (UDP vs TCP) puede afectar la fiabilidad de los mensajes y cómo el dispositivo gestiona los reconocimientos
- Confirme que el dispositivo está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para garantizar que Plaspy reciba la telemetría
- En caso de duda, compare los valores de configuración del rastreador y las notas de la versión de firmware con la documentación oficial de Ulbotech

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a instaladores y gestores de flota a configurar los dispositivos correctamente, solucionar problemas de conectividad y garantizar la confiabilidad y calidad de los datos a largo plazo en Plaspy. Tener claro cómo reporta un rastreador facilita diagnosticar datos faltantes, comportamientos inesperados o brechas de integración.

- Acelera la puesta en servicio del dispositivo al saber qué campos y ajustes de servidor configurar
- Mejora la resolución de problemas cuando los dispositivos no aparecen en Plaspy o reportan ubicaciones de forma intermitente
- Ayuda a seleccionar el transporte apropiado (UDP o TCP) según la red y las necesidades de fiabilidad
- Facilita interpretar brechas de telemetría o mensajes de alarma inesperados enviados por el rastreador
- Apoya la planificación de actualizaciones de firmware o sustituciones de hardware al identificar dónde los cambios de protocolo podrían afectar el servicio

## Por qué usar Plaspy con este protocolo

Usar Plaspy con rastreadores Ulbotech como el T363 permite a las organizaciones centralizar ubicación, estado y telemetría vehicular en una sola plataforma de gestión de flotas. Los ajustes de conexión compartidos de Plaspy y la detección automática de protocolo reducen pasos de configuración manual y ayudan a los equipos a poner en línea los dispositivos más rápidamente.

Si desea obtener más información sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que recomendamos verificar la información más reciente sobre el protocolo específico del dispositivo en el sitio oficial de Ulbotech en http://www.ulbotech.com/.
