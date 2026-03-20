---
slug: /gotop/c780/protocol
id: c780-protocol
sidebar_label: Protocol
title: GOTOP - C780 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo y compatibilidad con Plaspy para el rastreador GOTOP C780
keywords:
  - Protocolo GOTOP C780
  - Protocolo GPS GOTOP C780
  - GOTOP C780 Plaspy
  - Comunicación GOTOP C780
  - Rastreo GOTOP C780
  - Compatibilidad GOTOP C780
  - Protocolo de rastreador GOTOP
  - Telemetría C780
  - Rastreo de flotas GOTOP
  - Protocolo de rastreo de vehículos
---

# GOTOP - Protocolo C780

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP C780 con Plaspy. Resume cómo el dispositivo reporta ubicación y estado a la plataforma Plaspy y qué papel juega ese protocolo de reporte en operaciones diarias como rastreo en tiempo real, reproducción de historial y entrega de alarmas. El contenido se centra en información pública, no sensible, y en los patrones de comunicación comunes que permiten al C780 enviar telemetría a Plaspy.

El C780 combina un receptor GNSS U‑BLOX con conectividad GSM GPRS cuatribanda y soporta tanto cargas por GPRS como reportes de posición por SMS. Plaspy usa ajustes de conexión compartidos para dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conjuntos de comandos específicos y detalles de firmware consulte la documentación del fabricante cuando sea necesario.

## Panorama del protocolo

El protocolo de comunicación del C780 es el mecanismo que el dispositivo utiliza para identificarse, reportar fijaciones GPS y estados de sensores, y enviar alertas de eventos a un servidor remoto como Plaspy. En uso típico el rastreador envía actualizaciones periódicas de posición, notificaciones de alarma y reportes de estado que Plaspy ingiere como telemetría para mapas, historial y alertas.

- Permite al C780 transmitir ubicación GNSS, estado de ACC/encendido y alertas por manipulación o pérdida de energía a un endpoint remoto.
- Soporta cargas de telemetría rutinarias para ubicación en vivo e historial de rutas útiles en los paneles y reportes de Plaspy.
- Provee un canal para mensajes impulsados por eventos como alarmas de movimiento, cortes de cable y notificaciones de batería baja.
- Permite el reporte de posiciones por SMS como respaldo cuando GPRS no está disponible o se prefiere SMS.
- Funciona junto con la configuración del dispositivo (intervalos de reporte, umbrales de eventos) para balancear la frescura de los datos y el costo de comunicaciones.

## Detección del protocolo por Plaspy

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint y puerto compartido y determina automáticamente el protocolo del rastreador sin selección manual en la mayoría de los casos. Si el C780 está configurado para reportar al endpoint de Plaspy utilizando ajustes de transporte soportados, Plaspy detectará y mapeará la telemetría entrante en la vista de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com, que es el nombre DNS recomendado al que los dispositivos pueden apuntar.
- La IP del servidor Plaspy es 54.85.159.138 y el puerto es 8888 para el reporte de dispositivos.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, por lo que no se requiere selección de puerto por dispositivo.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de red.
- Cuando el C780 apunta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente los usuarios no necesitan seleccionar un protocolo dentro de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el rastreador llega a Plaspy a través de la red móvil y qué opciones de respaldo se usan comúnmente. El C780 soporta GPRS para cargas continuas de telemetría y SMS para enlaces de posición o reportes de emergencia; la capa de transporte puede ser UDP o TCP según la configuración del dispositivo y el comportamiento de la red.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como destino de reporte.
- Plaspy acepta tráfico de rastreadores en el mismo puerto 8888 para todos los dispositivos soportados en la plataforma.
- Las cargas por GPRS son el canal principal para el rastreo en tiempo real y la ingestión de historial en Plaspy.
- El reporte por SMS es un respaldo útil donde GPRS es poco confiable o cuando se prefieren flujos de trabajo basados en SMS.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden modificar la temporización de mensajes, campos opcionales o disparadores de eventos que afectan cómo aparecen los datos en Plaspy.
- Revisiones de hardware o variantes regionales pueden cambiar los transportes soportados o los sensores a bordo; valide los detalles del dispositivo al adquirir unidades.
- Algunas instalaciones prefieren UDP por menor latencia, otras prefieren TCP por entrega más confiable; confirme que el transporte elegido esté habilitado en el C780.
- El comportamiento del reporte por SMS puede variar según firmware y operador; utilice SMS como canal complementario y no como la vía primaria de telemetría cuando sea posible.
- Valide siempre ajustes de configuración como APN, host de destino e intervalos de reporte frente a los requisitos de Plaspy y el manual del dispositivo.
- Si necesita funciones más allá de la telemetría estándar, confirme las opciones de comando y control del fabricante y si esos comandos son compatibles con los flujos de trabajo de Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el C780 ayuda a asegurar una configuración fluida, una resolución de problemas más rápida y mayor confiabilidad a largo plazo cuando el dispositivo se integra con Plaspy. Tener expectativas claras sobre transporte, cadencia de reportes y disparadores de eventos reduce la fricción de integración y mejora los resultados operativos.

- Ayuda a verificar que el dispositivo apunte al endpoint correcto de Plaspy y use el transporte esperado.
- Acelera el diagnóstico cuando falta telemetría al enfocar las comprobaciones en APN, transporte y horarios de reporte.
- Aclara cómo se entregan alarmas y eventos de manipulación para que las reglas de alerta y escalado en Plaspy sean efectivas.
- Informa decisiones de configuración que balancean visibilidad en tiempo real y uso de datos móviles.
- Facilita detectar diferencias de firmware o hardware cuando los dispositivos se comportan de forma inconsistente en una flota.

## Por qué usar Plaspy con este protocolo

El GOTOP C780 es un rastreador compacto de grado vehicular diseñado para instalaciones discretas y telemetría confiable. Al integrarlo con Plaspy ofrece visibilidad centralizada, historial de rutas y alertas de eventos que gestores de flota y propietarios de vehículos pueden usar para monitoreo, respuesta a incidentes y telemática básica. Plaspy ingiere las cargas GPRS del C780 para mapas en vivo y reproducción de historial, mientras que el reporte por SMS permanece disponible como canal de respaldo.

Para saber más sobre cómo Plaspy puede trabajar con el GOTOP C780 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; debe verificar la información más reciente específica del dispositivo en el sitio del fabricante https://www.gotop.cc/
