---
slug: /gotop/te_200/protocol
id: te_200-protocol
sidebar_label: Protocol
title: GOTOP - TE-200 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GOTOP TE-200 y cómo se comunica con Plaspy para el seguimiento confiable de mascotas y pequeños activos
keywords:
  - protocolo GOTOP TE-200
  - protocolo GPS GOTOP TE-200
  - compatibilidad TE-200 con Plaspy
  - protocolo rastreador de mascotas GOTOP
  - protocolo de comunicación TE-200
  - protocolo de rastreo GOTOP
  - compatibilidad de dispositivos Plaspy
  - reporte GPRS TE-200
  - integración rastreador GPS GOTOP
  - compatibilidad firmware TE-200
---

# GOTOP - Protocolo TE-200

Esta página describe el contexto público del protocolo relevante para usar el mini rastreador para mascotas GOTOP TE-200 con Plaspy. Resume cómo el dispositivo envía ubicación y telemetría a Plaspy en términos no sensibles, destaca el papel del protocolo de comunicación del rastreador y aclara las configuraciones habituales de conexión para la integración con Plaspy.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware del TE-200, la revisión de hardware y la implementación del fabricante; por eso esta página se enfoca en conceptos generales del protocolo y consideraciones prácticas de configuración, en lugar de detalles internos de firmware o formatos privados de paquetes.

## Visión general del protocolo

El TE-200 comunica posición, eventos de movimiento, estado de batería y alertas a una plataforma backend usando su conectividad celular. El objetivo del protocolo es entregar de forma fiable esos puntos de telemetría y notificaciones de eventos para que Plaspy pueda mostrarlos en mapas, activar alertas y mantener registros históricos.

- Permite informes regulares de posición y mensajes de evento ocasionales, como geocercas, detección de movimiento y alertas de batería baja.
- Proporciona información de identidad y metadatos de estado para que Plaspy pueda atribuir los informes al registro del dispositivo correcto.
- Soporta continuidad de datos al permitir que el dispositivo almacene puntos durante cortes de cobertura y los reenvíe cuando vuelve la conectividad.
- Permite aplicar comandos de configuración y ajustes de alarma de forma remota a través de los canales de conectividad que el rastreador soporte.
- Funciona sobre datos celulares del dispositivo o mediante reportes por SMS para alcanzar endpoints backend como Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los informes del TE-200 usando un endpoint de hosting común e identifica el protocolo del rastreador de forma automática. Cuando el TE-200 está configurado para enviar informes al endpoint de Plaspy, normalmente no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy acepta informes de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos usan el mismo puerto en Plaspy, lo que simplifica la configuración y el enrutamiento.
- La plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y comienza a reportar.
- Usted generalmente solo necesita apuntar el TE-200 al endpoint de Plaspy y confirmar los ajustes de transporte en el dispositivo.

## Transporte y conexión

El TE-200 puede reportar a Plaspy usando el enlace celular del dispositivo y admite configuración del transporte de red según las capacidades del rastreador. Plaspy es accesible a través del endpoint y puerto compartidos, por lo que los dispositivos configurados correctamente serán canalizados al sistema de detección y análisis de protocolos de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según su configuración y comportamiento de red.
- Plaspy es accesible en el dominio d.plaspy.com o directamente en la IP 54.85.159.138 para dispositivos que requieran un endpoint numérico.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, lo que simplifica la puesta en marcha y garantiza conectividad consistente.
- El TE-200 también puede reportar vía SMS como canal alternativo en entornos donde los datos GPRS no estén disponibles.
- Utilice el modo de transporte que recomiende el firmware de su dispositivo y su operador móvil para obtener mejores resultados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, campos opcionales o el comportamiento de reporte de eventos; verifique la versión de firmware al validar la compatibilidad.
- Las variantes de hardware y los modelos regionales a veces tienen configuraciones de transporte predeterminadas o conjuntos de funciones distintos que afectan cómo reportan a plataformas backend.
- El TE-200 admite modos de reporte por GPRS y por SMS; la elección entre ellos afecta cómo se reciben las actualizaciones en tiempo real y la reenvío de datos históricos.
- La selección de transporte entre UDP y TCP puede influir en la fiabilidad según condiciones de red específicas; elija el modo compatible con su SIM y operador.
- La configuración del APN del operador y una SIM activa son requeridas para el reporte por GPRS; el reporte por SMS requiere que el enrutamiento SMS hacia la plataforma esté disponible y configurado.
- Valide siempre la configuración del dispositivo y la conectividad de red conforme a la documentación del fabricante antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el TE-200 se comunica con Plaspy ayuda a asegurar una configuración fiable, acelerar la resolución de problemas y mantener una operación consistente a largo plazo en el monitoreo de mascotas y pequeños activos.

- Acelera la puesta en marcha al garantizar que los dispositivos apunten a d.plaspy.com o a la IP 54.85.159.138 y usen el puerto 8888 según lo requiere Plaspy.
- Facilita el diagnóstico de informes faltantes al revisar el modo de transporte, la versión de firmware, la SIM y la conectividad del operador.
- Aclara las expectativas sobre la entrega de alertas, la temporización de eventos y cómo se reenvían los datos almacenados tras una pérdida de cobertura.
- Ayuda a decidir qué modo de reporte usar según las compensaciones entre vida de batería, latencia y cobertura.
- Favorece flujos de trabajo operativos previsibles cuando los dispositivos se actualizan o se reemplazan dentro de un despliegue.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP TE-200 con Plaspy ofrece a propietarios de mascotas y gestores de pequeños activos una forma sencilla de recopilar y actuar sobre telemetría de ubicación, movimiento y batería. El formato compacto del TE-200, su búfer interno de registros y el soporte para reportes por GPRS y SMS encajan con los casos de uso habituales de Plaspy para visibilidad en tiempo real, seguimiento histórico y alertas.

Si desea saber más sobre cómo funciona Plaspy con dispositivos como el TE-200 visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos del dispositivo más actuales, notas de firmware y especificaciones de hardware, verifique la información con el fabricante en https://www.gotop.cc/ ya que las implementaciones pueden cambiar con el tiempo.
