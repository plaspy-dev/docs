---
slug: /suntech/st4915/protocol
id: st4915-protocol
sidebar_label: Protocol
title: Suntech - ST4915 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Suntech ST4915 y su comunicación con Plaspy para seguimiento fiable de activos y telemetría
keywords:
  - protocolo Suntech ST4915
  - protocolo GPS Suntech ST4915
  - protocolo de comunicación Suntech ST4915
  - rastreador ST4915 Plaspy
  - seguimiento de activos Suntech
  - protocolo rastreador GPS
  - rastreo de vehículos ST4915
  - telemetría ST4915
  - dispositivos compatibles Plaspy
  - rastreador GPS IoT
---

# Suntech - Protocolo ST4915

Esta página documenta el contexto público del protocolo para utilizar el rastreador Suntech ST4915 con Plaspy. Explica cómo el dispositivo reporta posiciones GNSS y telemetría a Plaspy y qué ajustes de conexión se usan para un monitoreo de activos fiable a largo plazo, sin exponer detalles sensibles de implementación.

Plaspy emplea un endpoint y puerto compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según el firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se enfoca en el contexto público y de alto nivel para integración y resolución de problemas.

## Resumen del protocolo

El protocolo del rastreador define cómo el ST4915 transmite correcciones GNSS, telemetría de sensores e información de eventos a un servidor remoto como Plaspy. En la práctica, el protocolo transporta ubicación, movimiento y eventos de entradas, y permite que Plaspy presente esas señales en mapas, alertas e informes.

- Transporta datos de posición GNSS y telemetría básica, como estado de batería, eventos del acelerómetro y cambios en entradas digitales.
- Envía reportes por eventos como movimiento, manipulación, encendido y entradas de puerta o pánico para habilitar alertas y automatizaciones.
- Ofrece reportes programados y adaptativos para equilibrar la vida útil del dispositivo y la frecuencia de informes en implementaciones plurianuales.
- Permite datos contextuales opcionales como asistencia por Bluetooth o Wi‑Fi cuando la variante del dispositivo lo soporta.
- Soporta transporte sobre TCP o UDP estándar, de modo que puede enrutar hacia los servidores de Plaspy usando redes IoT comunes.
- Habilita funciones remotas del ciclo de vida del equipo, como actualizaciones OTA de firmware, cuando el fabricante las soporta.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint compartido e identifica automáticamente el protocolo del equipo, por lo que usted normalmente no necesita seleccionar un protocolo manualmente dentro de la plataforma. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requerimiento principal para la detección automática.

- El dominio del servidor de entrada de Plaspy es d.plaspy.com y es accesible para el reporte de dispositivos.
- La IP pública del servidor de Plaspy es 54.85.159.138 si se requiere apuntado por IP directa.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma escucha en el puerto 8888 para tráfico de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el ST4915 reporta al endpoint de Plaspy usando el transporte soportado.
- En la mayoría de las implementaciones, el propietario del dispositivo configura el rastreador para enviar datos al endpoint de Plaspy y no se necesita ninguna selección adicional de protocolo en Plaspy.
- Si un dispositivo no aparece, verifique la configuración de reporte del equipo, la selección de transporte y la conectividad de red hacia d.plaspy.com o la IP indicada.

## Transporte y contexto de conexión

La familia ST4915 soporta transportes IoT estándar y puede configurarse para usar UDP o TCP según las opciones de red y firmware. El contexto de conexión trata sobre dónde y cómo el dispositivo envía sus reportes, más que sobre la estructura interna de los paquetes.

- El ST4915 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y su aprovisionamiento.
- Los equipos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 si DNS no está disponible o se prefiere IP directa.
- Plaspy utiliza el mismo puerto 8888 en todos los dispositivos soportados para simplificar el aprovisionamiento y las reglas de firewall.
- La elección entre UDP y TCP afecta las características de entrega, pero ambos transportes son aceptados por Plaspy en el endpoint compartido.
- Asegure que el APN y los ajustes de red del dispositivo estén correctamente provisionados para permitir conectividad LTE Cat M1, NB‑IoT o fallback 2G hacia el endpoint de Plaspy.
- Para dispositivos con asistencia opcional por Wi‑Fi o Bluetooth, esos datos se transmiten mediante el mismo mecanismo de reporte cuando el firmware del dispositivo lo soporta.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos de telemetría disponibles o los valores por defecto de transporte; verifique siempre las notas de la versión del firmware para comportamiento específico del dispositivo.
- Variantes de hardware como el ST4915B con Bluetooth y Wi‑Fi pueden reportar datos contextuales adicionales que los parsers del servidor pueden presentar cuando se reconocen.
- Diferentes implementaciones pueden optar por UDP o TCP por razones de semántica de entrega y comportamiento en redes móviles; confirme cuál transporte está activo en el dispositivo.
- Las herramientas de configuración del fabricante o los servicios de aprovisionamiento pueden alterar los ajustes de servidor por defecto; compruebe que el equipo esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- La detección automática de Plaspy cubre variantes comunes, pero firmwares personalizados inusuales o dispositivos muy modificados pueden requerir validación adicional.
- Valide siempre la compatibilidad con la documentación oficial de Suntech para diferencias específicas de modelo y firmware.

## Por qué es importante entender el protocolo

Tener claridad sobre el protocolo de comunicación mejora el éxito en la instalación, reduce el tiempo de resolución de problemas y ayuda a ajustar el comportamiento del dispositivo para obtener el desempeño esperado de Plaspy y del ST4915 en despliegues productivos.

- Acelera el aprovisionamiento inicial al conocer qué transporte y valores de servidor necesita el dispositivo para reportar a Plaspy.
- Facilita la resolución de problemas cuando los reportes no llegan, al revisar dominio o IP, puerto y configuración de transporte en el dispositivo.
- Mejora la gestión de batería mediante una elección informada de intervalos de reporte y estrategias de reportes basados en eventos que el protocolo soporta.
- Incrementa la fiabilidad de geocercas, alertas y automatizaciones cuando se comprende el mapeo de telemetría entre los campos del dispositivo y Plaspy.
- Simplifica la planificación para variantes con sensores opcionales como BLE o Wi‑Fi porque se puede anticipar cómo esos datos serán reenviados a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Suntech ST4915 con Plaspy ofrece una solución robusta para seguimiento de activos de larga duración y bajo mantenimiento. La combinación del hardware ST4915 y el enfoque de endpoint compartido de Plaspy simplifica el despliegue de grandes flotas de activos remotos, permitiendo que las organizaciones se concentren en el monitoreo y los flujos de trabajo en lugar de las diferencias de conectividad a bajo nivel.

La plataforma de Plaspy acepta reportes del ST4915 por TCP o UDP hacia el endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888, detectando automáticamente el protocolo del rastreador para que usted pueda poner los dispositivos en línea rápidamente y comenzar a utilizar mapas, alertas y telemetría. Para conocer más sobre Plaspy visite https://www.plaspy.com y para los detalles más recientes específicos por dispositivo, notas de firmware y documentación oficial verifique la información en el sitio del fabricante http://www.suntechint.com/.
