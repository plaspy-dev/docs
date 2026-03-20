---
slug: /suntech/st_330/protocol
id: st_330-protocol
sidebar_label: Protocol
title: Suntech - ST 330 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general del protocolo público del Suntech ST 330 y su comunicación con Plaspy para seguimiento de contenedores y activos
keywords:
  - protocolo Suntech ST 330
  - protocolo GPS Suntech ST 330
  - protocolo de rastreo Suntech ST 330
  - compatibilidad rastreador GPS Suntech
  - compatibilidad ST 330 Plaspy
  - rastreador GPS para contenedores
  - rastreo de activos Suntech
  - protocolo de dispositivo Plaspy
  - rastreo de flotas Suntech
  - rastreador IP67 para activos
---

# Suntech - Protocolo ST 330

Esta página describe el contexto público del protocolo para usar el rastreador Suntech ST 330 con Plaspy. Se centra en cómo el dispositivo reporta ubicación y estado a la plataforma Plaspy en términos generales y en cómo esa comunicación se emplea para el monitoreo de contenedores y dry boxes. El ST 330 está optimizado para despliegues de larga duración con características como batería de larga duración, intervalos de reporte de posición (por ejemplo cada 15 minutos), imanes potentes para montaje en metal y resistencia IP67 para entornos difíciles.

Plaspy utiliza un enfoque de conexión compartida entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. Plaspy acepta conexiones de dispositivos en d.plaspy.com y en la IP pública 54.85.159.138 usando el puerto 8888. El ST 330 puede configurarse para usar UDP o TCP en el puerto 8888 y el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del dispositivo ST 330 define las reglas y patrones de mensajes que el rastreador usa para entregar telemetría útil a un servidor como Plaspy. A alto nivel, la función del protocolo es transmitir reportes periódicos de posición y estado del dispositivo, permitiendo al servidor asociar esos mensajes a un rastreador y sesión específicos.

- Permitir que el rastreador se identifique para que Plaspy pueda asociar los mensajes entrantes con un registro de activo o dispositivo.
- Entregar reportes periódicos de posición y datos de tiempo para monitoreo de rutas y estacionamientos según el intervalo de reporte del dispositivo.
- Comunicar el estado del dispositivo, como la batería e indicadores básicos de salud relevantes para despliegues prolongados.
- Soportar reportes de eventos y mensajes de estado opcionales según lo implemente el firmware del dispositivo.
- Permitir tanto transporte UDP como TCP para adaptarse a diferentes requisitos de red y configuración.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido y determina automáticamente qué protocolo soportado está en uso cuando un dispositivo envía datos. En la mayoría de las implementaciones no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- Use el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 como dirección de reporte.
- Envíe datos al puerto 8888, que es el puerto común que Plaspy utiliza para todos los dispositivos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades y las condiciones de la red.
- Cuando llega un reporte con el formato correcto, Plaspy asociará el mensaje con el registro del dispositivo correspondiente y comenzará a procesar la telemetría.
- La acción típica del usuario se limita a asegurarse de que la dirección de reporte y el transporte del dispositivo coincidan con la configuración de red elegida.

## Contexto de transporte y conexión

Las elecciones de conexión y transporte determinan cómo los mensajes del ST 330 llegan al servidor de Plaspy. El ST 330 soporta reportes eficientes en consumo energético, adecuados para una larga vida de batería, por lo que el comportamiento del transporte y los intervalos de reporte pueden afectar tanto el consumo como la fiabilidad de los mensajes.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los ajustes seleccionados.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino de Plaspy.
- Usar UDP puede ser apropiado para reportes periódicos de bajo overhead, mientras que TCP puede elegirse cuando se requiere confirmación de entrega según la configuración del dispositivo.
- Asegúrese de que firewalls y NAT de la red permitan tráfico saliente al puerto 8888 hacia el endpoint de Plaspy.
- Para rastreadores alimentados por batería como el ST 330, los patrones de conexión suelen optimizarse para minimizar el tiempo de radio activo y aun así entregar reportes de posición programados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles y los tiempos. Verifique la versión de firmware del rastreador al solucionar diferencias de comportamiento.
- Las revisiones de hardware y las variantes del producto pueden alterar la gestión de energía y el comportamiento de reporte incluso para el mismo nombre de modelo.
- Las opciones de configuración del fabricante determinan si el dispositivo usa UDP o TCP y con qué frecuencia reporta; esto afecta cómo interactúa con Plaspy.
- La selección del transporte (UDP vs TCP) puede influir en las características de entrega y debe coincidir con la configuración que se envíe a Plaspy.
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para asegurar que Plaspy reciba los datos.
- Siempre valide la compatibilidad con la documentación oficial de Suntech para el ST 330 respecto a firmware y detalles específicos de las funciones.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una operación confiable, una vida útil de batería óptima y un comportamiento predecible al integrar rastreadores ST 330 con Plaspy. Tener expectativas claras sobre cómo reporta el dispositivo y qué requiere el servidor reduce el tiempo de configuración y facilita la resolución de problemas.

- Verifica que el dispositivo apunte al endpoint y puerto correctos de Plaspy para que los datos lleguen a la plataforma.
- Ayuda a interpretar reportes intermitentes frente a brechas causadas por ahorro de energía o cobertura de red.
- Orienta sobre la elección del transporte y los intervalos de reporte para equilibrar la duración de la batería y la frescura de la posición.
- Proporciona contexto al cotejar reportes del dispositivo con logs del servidor y diagnósticos del propio dispositivo.
- Facilita la planificación de despliegues a gran escala donde una configuración consistente de los dispositivos reduce la carga operativa.

## Por qué usar Plaspy con este protocolo

Usar el Suntech ST 330 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad persistente de contenedores y activos en dry boxes. La larga duración de batería del ST 330, su construcción robusta con clasificación IP67 y el montaje magnético sencillo lo hacen adecuado para el rastreo de activos de bajo mantenimiento, mientras que el enfoque de endpoint unificado de Plaspy simplifica la ingestión de datos a escala de flota.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el Suntech ST 330, visite https://www.plaspy.com para detalles de la plataforma y guías de despliegue. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y firmware del dispositivo con el fabricante en http://www.suntechint.com/.
