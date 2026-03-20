---
slug: /lk_gps/lk880_cat1/protocol
id: lk880_cat1-protocol
sidebar_label: Protocol
title: LK-GPS - LK880 Cat1 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público del LK-GPS LK880 Cat1 y cómo se comunica con Plaspy mediante ajustes de servidor compartido
keywords:
  - LK GPS LK880 Cat1
  - Protocolo LK880 Cat1
  - Protocolo LK GPS para Plaspy
  - Comunicación rastreador GPS LK880 Cat1
  - Compatibilidad LK880 Cat1 con Plaspy
  - Protocolo rastreador GPS para mascotas
  - Integración de dispositivos Plaspy
  - Ajustes de conexión rastreador GPS
  - Detección de protocolo de rastreador
  - Telemetría y alertas GPS
---

# LK-GPS - Protocolo LK880 Cat1

Esta página describe el contexto público del protocolo para usar el rastreador LK-GPS LK880 Cat1 con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales, qué ajustes de conexión espera Plaspy y cómo esos ajustes permiten la supervisión centralizada y las alertas para seguimiento de mascotas. El contenido está pensado para ayudar a usuarios técnicos e integradores a comprender el papel de la comunicación sin exponer detalles privados ni internos del firmware.

El LK880 Cat1 es un rastreador compacto e impermeable para mascotas que envía telemetría frecuente de posición y actividad mediante conectividad continua 4G Cat‑1. Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta correctamente. El comportamiento exacto del protocolo puede variar según la versión del firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento observado en campo puede diferir de las descripciones generales.

## Resumen del protocolo

El protocolo de comunicación del LK880 Cat1 define cómo el rastreador informa posición, resúmenes de actividad, eventos de geovalla y condiciones de alarma a un servidor remoto. En Plaspy, el protocolo es el mecanismo que convierte los reportes crudos del dispositivo en posiciones útiles en el mapa, telemetría, alertas e historial.

- Permite al rastreador enviar actualizaciones periódicas de ubicación y actividad a Plaspy para visibilidad en tiempo real.
- Transporta notificaciones de eventos como salidas de geovallas, alertas por desplazamiento y advertencias de batería baja hacia la nube.
- Permite al dispositivo identificarse y asociar la telemetría con una cuenta de Plaspy para que los datos aparezcan en el tablero correcto.
- Soporta consultas bajo demanda desde la plataforma y la reconstrucción de rutas históricas cuando el rastreador y el firmware lo permiten.
- Proporciona la base para funciones remotas como control de collar de entrenamiento y intervalos de reporte configurables cuando se enruta a través de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y utiliza esa entrada para determinar qué protocolo de rastreador está en uso para cada equipo. Dado que Plaspy detecta automáticamente el protocolo, normalmente usted no necesita seleccionar un protocolo dentro de la plataforma si el dispositivo está configurado para reportar al endpoint correcto de Plaspy.

- Plaspy escucha los reportes entrantes de los dispositivos en un único endpoint de servidor compartido.
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta los protocolos automáticamente cuando llegan los reportes.
- La configuración correcta del dispositivo para que apunte al endpoint de Plaspy suele ser suficiente para el reconocimiento automático del protocolo.
- Si un dispositivo no aparece, las causas comunes incluyen ajustes de host incorrectos, falta de conectividad celular o firmware que requiere configuración adicional.

## Transporte y contexto de conexión

Las opciones de transporte y la resolución por DNS o IP determinan cómo el rastreador alcanza Plaspy. El LK880 Cat1 puede configurarse para usar UDP o TCP dependiendo del soporte del dispositivo y del comportamiento configurado. Entender estas opciones de transporte ayuda a garantizar que el dispositivo pueda establecer conectividad con Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y los ajustes del equipo.
- Plaspy acepta reportes de dispositivos en el puerto 8888 para todos los rastreadores soportados.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Usar el nombre de dominio simplifica futuros cambios de infraestructura porque el DNS puede actualizarse sin reconfigurar los dispositivos.
- Verifique la configuración del operador y de la SIM para asegurar que el rastreador pueda iniciar conexiones salientes por el transporte seleccionado.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, campos opcionales y tipos de eventos soportados, así que revise el nivel de firmware del dispositivo al validar el comportamiento.
- Las variantes de hardware o versiones específicas por región pueden comportarse de forma distinta; confirme el modelo y la revisión exactos al solucionar problemas.
- La selección de transporte (UDP versus TCP) depende del firmware del dispositivo y puede afectar la entrega bajo distintas condiciones de red.
- Algunas configuraciones en el lado del fabricante y en aplicaciones complementarias controlan si el dispositivo reporta a un servidor de terceros como Plaspy.
- Al integrar múltiples dispositivos, recuerde que Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración a nivel de flota.
- Siempre valide la compatibilidad y los detalles más recientes del protocolo con la documentación oficial del fabricante antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Tener una comprensión práctica del protocolo de comunicación del rastreador ayuda a lograr una configuración exitosa, un comportamiento predecible y una resolución de problemas más eficiente cuando el dispositivo se usa con Plaspy. Saber qué se espera que envíe el dispositivo y cómo llega al servidor acorta los ciclos de diagnóstico y mejora la fiabilidad.

- Ayuda a garantizar que los reportes del dispositivo lleguen a Plaspy al confirmar host, transporte y puerto correctos.
- Facilita la interpretación de la telemetría y las alertas que aparecen en la plataforma durante las pruebas.
- Reduce el tiempo de resolución de problemas de conectividad causados por discrepancias en el operador, APN o transporte.
- Contribuye a la planificación de actualizaciones de firmware y a entender el impacto de cambios del fabricante.
- Favorece un comportamiento consistente en un conjunto mixto de dispositivos al alinear las prácticas de configuración.

## Por qué usar Plaspy con este protocolo

Integrar el LK880 Cat1 con Plaspy centraliza la telemetría y las alertas orientadas a mascotas en una plataforma de monitoreo unificada. Organizaciones y propietarios se benefician de mapas consolidados, reproducción de rutas históricas y alertas centralizadas que facilitan la recuperación de la ubicación y el monitoreo de actividad, con mayor eficacia que depender únicamente de la app del dispositivo.

Plaspy simplifica el reporte de dispositivos mediante un endpoint de servidor compartido y un único puerto para todos los equipos, y detecta automáticamente el protocolo del rastreador cuando los dispositivos envían reportes al endpoint configurado. Para obtener más información sobre Plaspy y cómo puede centralizar el seguimiento y las alertas para el LK880 Cat1 visite https://www.plaspy.com. Para detalles más actuales sobre el protocolo, comportamiento de firmware e implementación del dispositivo, verifique la información en el sitio del fabricante https://www.lk-gps.com.
