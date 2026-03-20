---
slug: /gotop/g02/protocol
id: g02-protocol
sidebar_label: Protocol
title: GOTOP - G02 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar GOTOP G02 con Plaspy, cubre ajustes de conexión, opciones de transporte y compatibilidad
keywords:
  - protocolo GOTOP G02
  - protocolo GPS GOTOP G02
  - protocolo GOTOP G02 Plaspy
  - protocolo de comunicación GOTOP G02
  - protocolo de rastreo GOTOP G02
  - compatibilidad GOTOP G02
  - protocolo rastreador GOTOP
  - rastreador GOTOP G02 4G
  - protocolo de dispositivo Plaspy
  - protocolo de rastreador GPS vehicular
---

# GOTOP - Protocolo G02

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP G02 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, los ajustes de conexión que normalmente usará y consideraciones prácticas de compatibilidad. Como referencia, el G02 es un rastreador 4G LTE compacto con certificación IP67, diseñado para motocicletas, bicicletas eléctricas y automóviles; ofrece amplio rango de voltaje, batería de respaldo integrada y sensores.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto en el dispositivo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene en un nivel público y práctico y remite a la documentación oficial del fabricante para detalles específicos del dispositivo.

## Visión general del protocolo

El protocolo de comunicación que utiliza el G02 permite que el rastreador envíe posición y telemetría a través de datos celulares y que un backend como Plaspy interprete esa información. A alto nivel, el protocolo es el conjunto de mensajes y convenciones que el dispositivo usa para identificarse, entregar actualizaciones de posición y enviar eventos de alarma o estado al servidor.

- Permite que el dispositivo se identifique y asocie los reportes con un registro en el servidor
- Transporta coordenadas GPS, hora y datos de estado para uso en mapas y procesamiento de eventos
- Entrega eventos de alarma como geocerca, batería baja, movimiento y corte de energía a la plataforma
- Soporta el reporte por el método de red que expone el dispositivo, por ejemplo reporte de datos 4G
- Habilita acciones del lado servidor como monitoreo de disponibilidad y notificaciones de evento sin exponer internals del firmware

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes entrantes en un endpoint común y determina automáticamente el manejador de protocolo apropiado para muchos rastreadores populares, incluidos los modelos GOTOP compatibles. En la mayoría de las configuraciones no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- Plaspy usa un endpoint público compartido para aceptar reportes y elegir el manejador de protocolo correcto
- La plataforma detecta automáticamente el protocolo del dispositivo según las características de la conexión entrante y la carga útil
- Si el dispositivo está apuntando al endpoint de Plaspy, típicamente no es necesaria la selección manual del protocolo por parte del usuario
- Plaspy centraliza el manejo para que las integraciones se beneficien de un modelo de conexión consistente entre dispositivos
- Usar el endpoint estándar de Plaspy reduce la complejidad de configuración para flotas con hardware mixto

## Contexto de transporte y conexión

El G02 puede reportar mediante datos celulares y, cuando se configura para trabajar con Plaspy, apunta al servidor de Plaspy usando los ajustes de conexión compartidos. Los dispositivos pueden dirigirse al dominio de Plaspy o a la IP del servidor y pueden usar cualquiera de los modos de transporte principales según la configuración del dispositivo.

- Dominio objetivo para reportes de dispositivos Plaspy: d.plaspy.com
- Dirección alternativa accesible: 54.85.159.138
- La plataforma acepta conexiones de dispositivos en el puerto 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del rastreador y su configuración
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota
- Elija el modo de transporte que coincida con la capacidad del firmware del dispositivo y las condiciones de su red

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes o campos envía un dispositivo incluso dentro del mismo modelo
- Diferentes revisiones de hardware o variantes regionales del G02 pueden habilitar o deshabilitar modos de transporte o funciones específicas
- El G02 soporta reporte mediante 4G LTE y puede también soportar reporte por SMS para flujos de trabajo legacy; el reporte al servidor Plaspy depende de la vía de datos celulares
- La elección entre UDP y TCP la determina la capacidad y configuración del dispositivo y puede afectar el comportamiento de entrega según las condiciones de red
- Verifique siempre si la versión de firmware instalada en el dispositivo coincide con las notas de compatibilidad publicadas por el fabricante
- Ante la duda, confirme las expectativas con la documentación oficial de GOTOP o las notas de lanzamiento del dispositivo

## Por qué es importante entender el protocolo

Comprender el comportamiento básico del protocolo del rastreador ayuda a asegurar una configuración correcta, acelerar la resolución de problemas y garantizar un funcionamiento predecible a largo plazo cuando los dispositivos alimentan datos a Plaspy. Conocer las opciones de transporte y los eventos comunes del dispositivo reduce el tiempo de configuración y ayuda a identificar problemas que parecen de red pero son diferencias de configuración.

- Asegura que los dispositivos apunten al endpoint y puerto correctos de Plaspy para la detección automática
- Ayuda a acotar la resolución de problemas a transporte, configuración o firmware cuando un dispositivo no reporta
- Mejora la confianza al desplegar flotas mixtas al entender cómo los dispositivos se identifican y reportan
- Permite tomar decisiones informadas sobre UDP versus TCP según el entorno de red
- Facilita la validación del reporte de alarmas y estados como geocerca o batería baja

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el GOTOP G02 proporciona un único endpoint gestionado para el reporte de dispositivos y visibilidad de la flota. La detección automática de protocolos de Plaspy y su política de puerto consistente reducen la carga de configuración para administradores que gestionan múltiples tipos de dispositivos, mientras la plataforma ingiere datos de ubicación, alarma y estado para mapas, alertas y flujos operativos.

Si desea saber más sobre cómo Plaspy maneja la conectividad de dispositivos y las funciones para flotas visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y guía de implementación, consulte siempre la documentación oficial de GOTOP en https://www.gotop.cc/ ya que el comportamiento del fabricante y las funciones de firmware pueden cambiar con el tiempo.
