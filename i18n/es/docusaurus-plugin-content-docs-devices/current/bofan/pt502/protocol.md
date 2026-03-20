---
slug: /bofan/pt502/protocol
id: pt502-protocol
sidebar_label: Protocol
title: Bofan - PT502 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Bofan PT502 y su comunicación con Plaspy para gestión de flotas y telemetría
keywords:
  - protocolo Bofan PT502
  - protocolo GPS Bofan PT502
  - compatibilidad Bofan PT502 Plaspy
  - rastreador GPS PT502
  - protocolo de comunicación PT502
  - protocolo rastreador vehicular Bofan
  - telemetría PT502
  - seguimiento de flota PT502
  - protocolo de rastreador Plaspy
  - protocolo GPS vehicular
---

# Bofan - Protocolo PT502

Esta página explica, a nivel público, el contexto del protocolo para usar el rastreador GPS Bofan PT502 con Plaspy. Resume cómo se comunica el equipo de forma general, qué puntos de conexión ofrece Plaspy y qué debe verificar al integrar el PT502 en un flujo de trabajo de gestión de flotas. El contenido se centra en el contexto del protocolo y el transporte, no en detalles internos del dispositivo ni en implementaciones sensibles.

El PT502 es un rastreador 4G diseñado para entornos vehiculares exigentes y soporta funciones como identificación de conductor por RFID, detección de combustible por ultrasonido, múltiples entradas de cámara y control remoto del inmovilizador. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware o la configuración del fabricante, por lo que se recomienda validar la configuración del dispositivo antes de desplegar en gran escala.

## Resumen del protocolo

El protocolo del rastreador es el método definido que el PT502 usa para reportar posición, telemetría de sensores y alarmas a un servidor como Plaspy. A nivel público, el protocolo permite que el equipo se identifique, envíe datos GPS y de sensores, y notifique eventos que generan alertas o acciones dentro de la plataforma Plaspy.

- Permite actualizaciones periódicas de posición y reportes activados por eventos para que Plaspy muestre ubicación en tiempo real y trazas históricas
- Transporta datos de sensores y alarmas como eventos RFID, lecturas de sensores de combustible y disparos de cámara para captura de evidencia
- Incluye información de identidad y estado del dispositivo para que Plaspy asocie los mensajes con el activo y la cuenta correctos
- Soporta comandos remotos y canales de control que Plaspy emplea para solicitar acciones como activar el inmovilizador o cambios de configuración
- Funciona sobre transportes de red estándar de modo que los dispositivos puedan dirigirse a los endpoints de Plaspy para recolección centralizada

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes de una amplia gama de rastreadores y detecta automáticamente el protocolo cuando un equipo está correctamente configurado para enviar datos al endpoint de Plaspy. En la mayoría de los casos no es necesario especificar un protocolo dentro de Plaspy si el dispositivo apunta al servidor de Plaspy.

- Plaspy usa un endpoint de red compartido para recolectar telemetría y eventos en d.plaspy.com y en la IP pública 54.85.159.138
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, por lo que la configuración es consistente entre modelos
- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del modelo y las necesidades de la red local
- Cuando un PT502 está configurado para reportar al endpoint de Plaspy, la plataforma empareja los mensajes entrantes con un protocolo conocido y enruta los datos a la cuenta correspondiente
- La identidad correcta del dispositivo y los disparadores de reporte son importantes para que Plaspy pueda detectar y procesar los mensajes de forma fiable

## Contexto de transporte y conexión

Las elecciones de conexión y transporte determinan cómo el PT502 llega a los servidores de Plaspy. El PT502 normalmente utiliza datos celulares para alcanzar un servidor central y puede configurarse para apuntar a Plaspy mediante el dominio o la dirección IP de la plataforma.

- El PT502 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según el firmware del equipo y la configuración elegida
- Plaspy emplea el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración a nivel de flota
- El enrutamiento de la red, NAT del operador y reglas de firewall pueden influir en si UDP o TCP es preferible para un despliegue concreto
- Asegúrese de que el APN del dispositivo y la conectividad saliente permitan tráfico hacia el endpoint de Plaspy para evitar huecos intermitentes en los reportes

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir o cambiar funciones que afecten la frecuencia de mensajes, los campos de telemetría disponibles o el soporte de comandos
- Las revisiones de hardware u módulos periféricos opcionales (RFID, cámaras, sensores de combustible) pueden modificar qué datos envía un PT502
- La configuración del fabricante y las variantes regionales de firmware a veces introducen diferencias en el protocolo que se deben validar antes de un despliegue masivo
- La elección entre UDP y TCP puede afectar la confiabilidad y la entrega de paquetes según las condiciones de la red
- Siempre valide la compatibilidad probando un equipo contra el endpoint de Plaspy antes de un despliegue a gran escala
- Para detalles específicos de protocolo y firmware vigentes consulte la documentación del fabricante

## Por qué es importante entender el protocolo

Comprender cómo se comunica el PT502 ayuda a los operadores de flota a configurar correctamente los equipos, ajustar el comportamiento de reporte para optimizar costos y ancho de banda, y solucionar problemas cuando la telemetría o las alarmas no aparecen en Plaspy. Tener claro el patrón de comunicación reduce la fricción en la integración y mejora la operatividad.

- Simplifica la configuración inicial y garantiza que los dispositivos apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888 con el transporte correcto
- Facilita el diagnóstico de problemas de conectividad relacionados con operadores celulares, NAT o políticas de firewall
- Permite tomar decisiones informadas sobre intervalos de reporte y disparadores de eventos para balancear costo de datos y visibilidad
- Favorece la correcta configuración de periféricos como RFID y cámaras para que sus eventos lleguen a Plaspy
- Ayuda a planificar estrategias de actualización de firmware cuando se publican cambios que afectan al protocolo

## Por qué usar Plaspy con este protocolo

Usar el PT502 con Plaspy ofrece a los operadores de flota visibilidad consolidada de la ubicación del vehículo, identidad del conductor, estado de combustible, evidencia de cámaras y eventos de alarma. La detección automática de protocolo de Plaspy y su endpoint compartido facilitan añadir unidades PT502 a una cuenta cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

Plaspy proporciona las capas centrales de recolección, alertas e informes que convierten la telemetría del PT502 en información operativa útil para respuesta ante robos, monitoreo de conductores, gestión de combustible y programación de mantenimientos. Para obtener más información sobre Plaspy y cómo puede integrarse con sus equipos PT502 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo y deben confirmarse con el fabricante en https://www.bofancloud.com/ para la información más reciente sobre cada dispositivo.
