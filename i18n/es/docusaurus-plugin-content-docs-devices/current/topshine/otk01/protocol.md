---
slug: /topshine/otk01/protocol
id: otk01-protocol
sidebar_label: Protocol
title: TopShine - OTK01 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo OTK01 de TopShine y cómo se comunica con Plaspy para seguimiento vehicular confiable
keywords:
  - Protocolo TopShine OTK01
  - Protocolo GPS TopShine OTK01
  - TopShine OTK01 Plaspy
  - Rastreador GPS OTK01
  - Protocolo de comunicación OTK01
  - Protocolo rastreador OBD II
  - Seguimiento vehicular Plaspy
  - Seguimiento de flotas OTK01
  - AGPS OTK01
  - Reportes GPRS OTK01
---

# TopShine - Protocolo OTK01

Esta página describe el contexto público del protocolo para usar el rastreador TopShine OTK01 con Plaspy. Se centra en cómo el equipo se comunica con Plaspy para ubicación en tiempo real, telemetría, reporte de eventos y cargas históricas, sin divulgar detalles privados de implementación. Use esta documentación como referencia orientada al protocolo para entender el comportamiento del dispositivo y qué esperar al integrar unidades OTK01 en Plaspy.

Plaspy emplea ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo en el OTK01 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza conceptos de comunicación a alto nivel y notas prácticas de configuración en lugar de detalles internos del firmware.

## Descripción general del protocolo

El OTK01 utiliza reportes por datos móviles y SMS como respaldo para entregar posición GPS y telemetría derivada del OBD a un servidor de seguimiento remoto. El dispositivo está diseñado para instalación plug and play en el puerto OBD II y reporta telemetría principal como latitud y longitud, velocidad, rumbo, odómetro, estado de ACC y eventos de manipulación o corte de energía que Plaspy consume para el rastreo en vivo y alertas.

- El protocolo del rastreador permite que el OTK01 informe posición y telemetría del vehículo a Plaspy para monitoreo en tiempo real.
- Los mensajes reportados incluyen identificación y metadata del dispositivo para que la plataforma pueda asociar los datos al activo correcto.
- El reporte de eventos y alarmas ofrece notificaciones instantáneas para ACC encendido/apagado, corte de energía y condiciones de manipulación.
- El registro de datos a bordo permite almacenar waypoints cuando se interrumpe la conectividad y subirlos en forma diferida al reanudarse el servicio.
- GPRS se utiliza como transporte primario para reportes continuos, mientras que SMS está disponible para respuestas a comandos y como método de reserva.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint compartido e identifica el tipo de rastreador a partir de los datos entrantes y el comportamiento de la conexión. En la mayoría de despliegues usted no necesita seleccionar el protocolo en la interfaz de Plaspy si el dispositivo está configurado para reportar correctamente a la plataforma.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- Plaspy automáticamente detecta el protocolo del rastreador cuando un OTK01 reporta al servidor
- Todos los dispositivos en Plaspy usan el mismo puerto para que los envíos sean enrutados al mismo endpoint de escucha
- Normalmente los usuarios configuran el equipo para reportar al endpoint de Plaspy y dejan que la plataforma detecte y parseé los formatos soportados

## Transporte y contexto de conexión

El OTK01 puede usar datos móviles por paquetes (GPRS) o SMS para reportes según cómo esté configurada la unidad y las necesidades operativas. El transporte de la conexión y la selección del endpoint por DNS o número determinan cómo el equipo alcanza los servidores de Plaspy.

- El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 según soporte del equipo y la configuración de la red
- Los equipos pueden apuntar a d.plaspy.com o 54.85.159.138 como endpoint de reporte
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para simplificar el enrutamiento en el servidor y la configuración del firewall
- GPRS es el transporte principal para actualizaciones frecuentes, mientras que SMS actúa como respaldo o canal para comandos remotos
- La confiabilidad de la red y las restricciones del operador pueden afectar cuál transporte es más adecuado en una región determinada

## Notas de compatibilidad del protocolo

- Variaciones de firmware pueden cambiar el tiempo entre mensajes, los campos soportados y los comandos disponibles; confirme compatibilidad según la versión de firmware del dispositivo.
- Revisiones de hardware o diferencias por SKU regional pueden alterar los transportes soportados o los conjuntos de telemetría; verifique el modelo y la revisión exacta.
- Algunas unidades OTK01 pueden preferir UDP por menor overhead, mientras que otras usan TCP; asegúrese de que el transporte del dispositivo coincida con la política de su red.
- Los conjuntos de comandos por SMS y las respuestas de diagnóstico son suministrados por el fabricante y pueden no ser idénticos entre versiones de firmware.
- Plaspy intentará la detección automática del protocolo, pero validar que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es un paso recomendado durante la configuración.
- Al integrar a gran escala, pruebe primero un subconjunto pequeño de unidades para confirmar el comportamiento respecto a intervalos de reporte, disparadores de eventos y cargas desde el logger.

## Por qué es importante entender el protocolo

Tener una comprensión clara y a alto nivel del protocolo de comunicación del OTK01 ayuda a garantizar una configuración confiable, una solución de problemas más rápida y una operación predecible a largo plazo con Plaspy. Saber cómo reporta el rastreador, qué transportes usa y qué telemetría esperar reduce la fricción en la integración y mejora el tiempo de actividad operativo.

- Permite configurar correctamente el dispositivo para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la ingestión en Plaspy
- Ayuda a diagnosticar problemas de conectividad al entender si el equipo usa GPRS o SMS y qué modo de transporte está configurado
- Aclara los campos de telemetría esperados como coordenadas GPS, velocidad, rumbo, odómetro y estado de ACC para la creación de reglas
- Facilita la planificación del comportamiento fuera de línea al comprender la capacidad del logger a bordo y los patrones de carga diferida
- Apoya decisiones sobre ciclo de vida del firmware y del dispositivo al destacar dónde las actualizaciones del fabricante pueden afectar el reporte

## Por qué usar Plaspy con este protocolo

Emparejar el TopShine OTK01 con Plaspy ofrece a las organizaciones visibilidad vehicular sencilla, notificaciones de eventos confiables y reproducción histórica accesible sin instalaciones complejas. El diseño plug and play en OBD II del OTK01 reduce el tiempo de despliegue mientras proporciona telemetría extraída del OBD que mejora el monitoreo de flotas y los conocimientos operativos dentro de Plaspy.

Para conocer más sobre Plaspy y cómo la plataforma recibe y presenta la telemetría del OTK01, visite https://www.plaspy.com. Para la información más actual sobre el protocolo específico del dispositivo, comportamiento de firmware y detalles de implementación, consulte la documentación oficial del fabricante en https://www.gztopshine.com/ ya que el soporte del protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
