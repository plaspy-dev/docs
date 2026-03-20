---
slug: /lk_gps/lk110/protocol
id: lk110-protocol
sidebar_label: Protocol
title: LK-GPS - LK110 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo LK110 para integrar y rastrear bicicletas eléctricas con Plaspy
keywords:
  - protocolo LK-GPS LK110
  - protocolo rastreador GPS LK110
  - compatibilidad LK110 Plaspy
  - protocolo rastreador bicicleta LK-GPS
  - protocolo GPS para e bike
  - comunicación rastreador GPS
  - guía protocolo rastreador
  - compatibilidad dispositivos Plaspy
  - integración rastreador GPS
  - seguimiento vehicular Plaspy
---

# LK-GPS - Protocolo LK110

Esta página describe el contexto público del protocolo para usar el LK-GPS LK110 con Plaspy. Explica el papel de comunicación del rastreador y lo que se espera de sus informes de ubicación, alarmas, estado de batería y modos de trabajo hacia el backend de Plaspy, sin entrar en detalles de implementación específicos.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la frecuencia de envío, los disparadores de sueño/activación y el reporte de alarmas pueden diferir entre unidades y compilaciones de firmware.

## Resumen del protocolo

El protocolo de reporte y comandos del LK110 define cómo el rastreador envía telemetría útil a un servidor y cómo la plataforma aplica comandos remotos y configuraciones. Para la integración con Plaspy, el protocolo habilita principalmente informes de ubicación, notificaciones de alarmas, actualizaciones de estado y señales de control remoto que la plataforma puede interpretar para monitoreo y gestión de flotas.

- Transporta informes de posición que permiten a Plaspy mostrar la ubicación y el movimiento de e bikes y bicicletas.
- Transmite el estado del dispositivo, como nivel de batería, modos de energía y eventos de activación o reposo, relevantes para la vida útil del equipo y las alertas.
- Envía notificaciones de alarmas y eventos, incluyendo alarmas por vibración, alertas de desplazamiento, advertencias por baja batería y entradas o salidas de geocercas.
- Permite acciones de configuración y control remoto que la plataforma puede usar para cambiar la frecuencia de reporte, modos o para solicitar reinicios cuando esté permitido.
- Proporciona datos identificables del dispositivo para que Plaspy asocie el tráfico entrante con una unidad de rastreo específica y así asegurar un seguimiento confiable.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint compartido y determina automáticamente el manejo apropiado para cada modelo conectado. Cuando un LK110 esté configurado para reportar a Plaspy, la plataforma emparejará los mensajes entrantes con comportamientos conocidos del dispositivo y enruta la telemetría al registro del equipo sin que el usuario tenga que seleccionar manualmente un protocolo en la mayoría de los casos.

- Usted debe configurar los dispositivos para que reporten a Plaspy usando los ajustes de conexión proporcionados para que la detección automática funcione.
- Plaspy escucha en el mismo puerto para todos los dispositivos soportados, eliminando la necesidad de asignar puertos distintos por modelo.
- Cuando un LK110 apunte al endpoint de Plaspy, la plataforma reconocerá los reportes y aplicará las reglas de interpretación correctas.
- Normalmente los usuarios no necesitan elegir un protocolo dentro de Plaspy si el rastreador está correctamente configurado para enviar al endpoint de Plaspy.
- La identificación adecuada del dispositivo depende de que el rastreador envíe datos identificables como parte de sus reportes normales.

## Contexto de transporte y conexión

La conexión a Plaspy para el LK110 puede usar cualquiera de los métodos de transporte IP comunes según la configuración del dispositivo y las opciones del fabricante. En las implementaciones de Plaspy se usa el mismo endpoint y puerto para todos los dispositivos soportados para simplificar la configuración.

- El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Plaspy acepta reportes dirigidos al dominio del servidor d.plaspy.com así como a la IP pública 54.85.159.138 para entornos que prefieren usar la IP directa.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el despliegue y las reglas de firewall para flotas.
- Seleccione el transporte (UDP o TCP) compatible con el firmware del equipo y las condiciones de red para obtener la mayor fiabilidad.
- Asegúrese de que el equipo de red permite conexiones salientes al endpoint de Plaspy en el puerto compartido.

## Notas sobre compatibilidad del protocolo

- Las actualizaciones de firmware del fabricante pueden cambiar cómo el LK110 reporta datos o qué transporte utiliza, por lo que conviene revisar las notas de la versión del firmware para detectar cambios de comportamiento.
- Revisiones de hardware entre lotes pueden introducir diferencias sutiles en el comportamiento de reporte o en los comandos soportados.
- Algunas opciones de configuración se aplican en el dispositivo y afectarán la frecuencia y el formato con que el rastreador reporta a Plaspy.
- Elegir UDP o TCP puede impactar las garantías de entrega y el consumo de energía, según el comportamiento del dispositivo y las condiciones de cobertura.
- Valide los ajustes del equipo para que el rastreador apunte a d.plaspy.com o a 54.85.159.138 y use el puerto compartido esperado por Plaspy.
- Consulte siempre la documentación del fabricante al solucionar incompatibilidades aparentes.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del LK110 ayuda a administradores e integradores a configurar correctamente los equipos, diagnosticar problemas de reporte y optimizar el comportamiento del dispositivo para maximizar la vida de la batería y la cobertura. Saber qué se espera que envíe el rastreador y cuándo facilita verificar que Plaspy esté recibiendo e interpretando la telemetría como corresponde.

- Facilita una configuración más rápida al confirmar que los dispositivos reportan al endpoint correcto de Plaspy y usan el transporte esperado.
- Ayuda en la resolución de problemas cuando las actualizaciones de ubicación, alarmas o reportes de estado no aparecen en Plaspy como se espera.
- Permite tomar decisiones sensatas sobre la frecuencia de subida y el ahorro de energía para equilibrar la vida útil de la batería y la prontitud de las actualizaciones.
- Contribuye a identificar cuándo diferencias de firmware o hardware pueden explicar comportamientos distintos en una flota.
- Mejora la fiabilidad operativa al alinear los ajustes del dispositivo con las expectativas de la red y la plataforma.

## Por qué usar Plaspy con este protocolo

Emplear el LK110 con Plaspy ofrece una forma práctica de monitorear e bikes y bicicletas a escala. Plaspy ingiere la telemetría del LK110, como posición, nivel de batería, eventos de alarma y cambios de modo de trabajo, para que administradores de flota y propietarios mantengan visibilidad, respondan a alertas y gestionen ajustes de dispositivos de forma centralizada.

Si desea saber más sobre Plaspy y cómo funciona con protocolos de dispositivos como el del LK110, visite https://www.plaspy.com. Para los detalles específicos del protocolo, notas de firmware y guías de implementación más recientes, verifique la información con el fabricante en https://www.lk-gps.com ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
