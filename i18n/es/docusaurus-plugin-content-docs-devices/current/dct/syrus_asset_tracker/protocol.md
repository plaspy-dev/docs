---
slug: /dct/syrus_asset_tracker/protocol
id: syrus_asset_tracker-protocol
sidebar_label: Protocol
title: DCT - Syrus Asset Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo para integrar el DCT Syrus Asset Tracker con Plaspy
keywords:
- DCT Syrus Asset Tracker
- Protocolo Syrus Asset Tracker
- Rastreador GPS DCT Plaspy
- Protocolo de comunicación Syrus Asset Tracker
- protocolo de seguimiento de activos
- compatibilidad rastreador GPS Plaspy
- gestión de flotas seguimiento
- telemetría Syrus Tracker
- protocolo de dispositivo Plaspy
- monitoreo a largo plazo de activos
---

# DCT - Protocolo del Syrus Asset Tracker

Esta página describe el contexto público del protocolo para usar el DCT Syrus Asset Tracker con Plaspy. Se enfoca en cómo el dispositivo comunica telemetría a Plaspy en términos generales, sin exponer lógica privada de parsing ni detalles internos de firmware. El Syrus Asset Tracker es un equipo robusto e impermeable diseñado para el monitoreo a largo plazo de activos sin alimentación y expuestos; está disponible en variantes 4G y un modelo 3G descontinuado, además de una versión con capacidad de temperatura para supervisión de condiciones.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la revisión de firmware, la variante de hardware y la implementación del fabricante, por lo que aspectos como la cadencia de reporte, el cambio de modo y la generación de eventos pueden diferir entre unidades y versiones de firmware.

## Visión general del protocolo

El protocolo del Syrus Asset Tracker, tal como se usa con Plaspy, regula cómo el dispositivo informa ubicación, eventos de movimiento y datos opcionales de sensores por redes celulares para que Plaspy pueda presentar telemetría útil a los operadores. El protocolo permite reportes confiables desde activos alimentados por batería y de bajo consumo, y soporta reportes impulsados por eventos para movimientos no autorizados y otras alarmas.

- Transmite ubicación GPS y telemetría de eventos a un servidor remoto para que Plaspy pueda mapear y registrar la actividad del activo.
- Incluye identificación del dispositivo e información de estado básica para que Plaspy pueda atribuir los reportes al registro de activo correcto.
- Soporta eventos basados en movimiento mediante el acelerómetro integrado para activar reportes inmediatos cuando se detecta desplazamiento.
- Envía valores opcionales de sensores, como temperatura en la variante 4G Temp Tracker, para monitoreo de condiciones.
- Permite el cambio remoto de modos entre localizaciones de baja frecuencia y modos de seguimiento de mayor frecuencia para equilibrar la vida útil de la batería y la granularidad de los reportes.

## Cómo Plaspy detecta el protocolo

Plaspy recoge la telemetría entrante en un endpoint público compartido y utiliza la información enviada por el dispositivo para identificar el protocolo del rastreador y encaminar los datos a los procesadores correspondientes. En despliegues típicos, el dispositivo se configura para reportar a Plaspy y no se requiere seleccionar el protocolo de forma manual dentro de la plataforma Plaspy.

- Los dispositivos reportan al endpoint del servidor de Plaspy d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y utiliza ese mismo puerto para todos los dispositivos soportados.
- El Syrus Asset Tracker puede configurarse para usar transporte UDP o TCP para alcanzar el endpoint de Plaspy.
- Cuando un dispositivo configurado correctamente reporta al endpoint compartido, Plaspy detecta automáticamente el protocolo del rastreador y asocia la telemetría entrante con el dispositivo correcto.
- Usted normalmente solo necesita asegurarse de que el dispositivo tenga el APN y el servidor de reporte correctos para que Plaspy pueda aceptar los primeros reportes.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el rastreador envía datos a Plaspy sobre la red celular y qué ajustes de conexión suelen ser necesarios para un reporte exitoso. El Syrus Asset Tracker soporta reporte celular y utilizará el protocolo de transporte seleccionado en el dispositivo para entregar telemetría a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las opciones de configuración.
- Plaspy acepta tráfico dirigido a d.plaspy.com o a la IP del servidor 54.85.159.138 usando el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto para telemetría entrante, lo que simplifica la configuración del servidor en despliegues de flota.
- La selección de transporte (UDP vs TCP) se controla en el lado del dispositivo y depende de las capacidades del firmware y del comportamiento deseado en retransmisión y manejo de sesión.
- Asegúrese de que el APN celular y las reglas de puerto saliente permitan el tráfico hacia el endpoint de Plaspy para que el dispositivo pueda alcanzar el servidor con éxito.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte, los umbrales de eventos y los campos disponibles; siempre verifique la versión de firmware del dispositivo al validar el comportamiento.
- Las variantes de hardware importan: los modelos 3G están descontinuados, mientras que las variantes 4G y las compatibles con temperatura siguen en uso activo y pueden diferir en la telemetría disponible.
- Las opciones de configuración del fabricante pueden variar por región y SKU; algunos ajustes predeterminados pueden ser distintos de unidad a unidad.
- La selección del protocolo de transporte (UDP vs TCP) puede afectar las características de entrega; verifique que el dispositivo esté configurado con un transporte soportado por su despliegue y por la red del operador.
- Los modos de ahorro de batería pueden reducir la frecuencia de reportes o suprimir parte de la telemetría cuando el dispositivo está en modo de localización en vez de seguimiento.
- Valide cualquier supuesto operativo contra la documentación oficial del fabricante antes de implementaciones a gran escala.

## Por qué es importante entender el protocolo

Tener un entendimiento claro y práctico del protocolo de comunicación del rastreador reduce la fricción en la integración y ayuda a garantizar reportes estables y previsibles en Plaspy. Saber qué envía el dispositivo y cómo se conecta acorta el tiempo de configuración y mejora la resolución de problemas cuando los dispositivos no aparecen en la plataforma.

- Acelera la provisión inicial al alinear los ajustes de reporte del dispositivo con el endpoint y puerto de Plaspy.
- Ayuda a diagnosticar problemas comunes como reportes faltantes, asociación incorrecta de dispositivos o cadencias de telemetría inesperadas.
- Facilita la optimización de la vida útil de la batería al comprender el reporte impulsado por eventos frente al comportamiento de seguimiento periódico.
- Mejora la configuración de alertas para movimientos no autorizados y otros eventos según cómo y cuándo el dispositivo reporta.
- Informa la planificación de actualizaciones de firmware, ya que los cambios de comportamiento suelen acompañar a las revisiones de firmware.

## Por qué usar Plaspy con este protocolo

Usar el DCT Syrus Asset Tracker con Plaspy ofrece una solución práctica para organizaciones que requieren monitoreo de larga duración y bajo mantenimiento de activos sin alimentación y expuestos. Plaspy recibe ubicación y telemetría de eventos desde estos dispositivos robustos, permitiendo mapeo, reportes históricos y alertas inmediatas por movimiento no autorizado, además de soportar cambio remoto de modos para preservar la batería durante la operación normal.

Plaspy acepta reportes de dispositivos en el endpoint público d.plaspy.com y la IP del servidor 54.85.159.138 en el puerto 8888, y la plataforma detecta automáticamente el protocolo del rastreador, por lo que los usuarios típicos no necesitan seleccionar un protocolo dentro de Plaspy cuando el dispositivo está correctamente configurado. Para conocer más sobre Plaspy y cómo puede apoyar despliegues con el Syrus Asset Tracker visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos más recientes, información de firmware y recomendaciones de implementación, verifique siempre con el fabricante en https://www.digitalcomtech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
