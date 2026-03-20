---
slug: /topfly/solarguardx_120/protocol
id: solarguardx_120-protocol
sidebar_label: Protocol
title: TopFly - SolarGuardX 120 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar SolarGuardX 120 con Plaspy, incluyendo conexión y compatibilidad
keywords:
  - Protocolo TopFly SolarGuardX 120
  - Protocolo GPS TopFly SolarGuardX 120
  - Compatibilidad SolarGuardX 120 Plaspy
  - Protocolo de comunicación SolarGuardX
  - Protocolo de rastreo SolarGuardX
  - Protocolo rastreador GPS TopFly
  - Protocolo de dispositivo Plaspy
  - Protocolo telemetría seguridad de activos
  - Protocolo rastreador BLE de activos
  - Protocolo de cerradura con energía solar
---

# TopFly - Protocolo SolarGuardX 120

Esta página ofrece el contexto público del protocolo para integrar el TopFly SolarGuardX 120 con Plaspy. Describe cómo se comunica el dispositivo en términos generales, qué papel juega el protocolo de comunicación dentro de una implementación Plaspy y cuáles son los ajustes de conexión utilizados para reportar telemetría y eventos a la plataforma Plaspy.

El SolarGuardX 120 es un sub-candado robusto con alimentación solar que proporciona telemetría de manipulación, estado de batería y estado del candado, además de feeds de GPS cuando se usa en un flujo de trabajo con Plaspy. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; utilice esta página como contexto público y verifique los detalles específicos del dispositivo con el fabricante según sea necesario.

## Resumen del protocolo

El protocolo de comunicación del SolarGuardX 120 permite que la unidad reporte telemetría de seguridad y eventos de estado a Plaspy junto con las señales de ubicación provenientes de los rastreadores GPS. En términos generales, el protocolo es el mecanismo que el dispositivo usa para identificarse, transmitir datos de estado y eventos, y permitir la supervisión remota y operaciones coordinadas.

- Transporta telemetría clave como alertas de manipulación, estado de batería y de carga solar, eventos de apertura/cierre del candado y banderas de diagnóstico hacia el backend.
- Proporciona información de identidad y sesión para que Plaspy pueda asociar los eventos con el activo correcto y con el feed del rastreador GPS.
- Entrega marcas temporales de eventos y cambios de estado que Plaspy puede correlacionar con la posición GPS para alertas e informes históricos.
- Soporta señales para diagnóstico remoto y gestión de firmware a través de gateways o conexiones USB como parte de los flujos de vida del dispositivo.
- Habilita metadatos de coordinación maestro/esclavo entre candados para que Plaspy presente eventos de acceso sincronizados y trazabilidad de auditoría.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint público y utiliza ese punto de entrada compartido para identificar y manejar automáticamente los protocolos de rastreadores compatibles. Cuando el SolarGuardX 120 o un gateway asociado reenvía telemetría a Plaspy usando los ajustes de conexión estándar, normalmente no se requiere seleccionar el protocolo manualmente dentro de la plataforma Plaspy.

- Plaspy escucha en un único puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.
- Los dispositivos configurados para reportar a d.plaspy.com o a la IP del servidor Plaspy serán enroutados por la misma vía de detección y procesamiento.
- Los usuarios normalmente configuran el endpoint y el transporte en el dispositivo o gateway; Plaspy identifica el protocolo al recibir los datos.
- La detección automática reduce la necesidad de mapeos de protocolo manuales cuando los dispositivos apuntan correctamente al endpoint de Plaspy.
- Si utiliza gateways o colectores móviles para telemetría BLE, reenvíe esos gateways al endpoint de Plaspy para que los eventos se asocien de manera consistente.

## Contexto de transporte y conexión

La telemetría del SolarGuardX 120 puede entregarse a Plaspy a través de la red utilizando las opciones de transporte estándar soportadas por el dispositivo y su gateway. Los parámetros públicos de conexión para reportar a Plaspy son intencionalmente uniformes para simplificar despliegues y centralizar el manejo de protocolos.

- El dominio público del servidor Plaspy es d.plaspy.com y la dirección IP del servidor es 54.85.159.138 para enrutamiento directo.
- El puerto usado para todo el reporte de dispositivos a Plaspy es 8888 y este mismo puerto aplica para todos los dispositivos soportados por Plaspy.
- Los dispositivos y gateways pueden configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo y los requerimientos del despliegue.
- Cuando la telemetría del SolarGuardX 120 se colecta vía gateways BLE, esos gateways deben reenviar eventos a la dirección y puerto de Plaspy para asegurar la correcta ingestión.
- El uso consistente de puerto y endpoint ayuda a centralizar la detección, el registro y la correlación de telemetría con datos de posición GPS.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el conjunto de campos de telemetría disponibles y la semántica de eventos; siempre consulte las notas de la versión del firmware.
- Las revisiones de hardware y configuraciones de accesorios opcionales (por ejemplo, modelos de gateway) pueden alterar los transportes soportados o la disponibilidad de datos.
- Las configuraciones del fabricante o los intervalos de reporte configurables pueden afectar la frecuencia con la que se envían eventos y estados a Plaspy.
- La selección de transporte (UDP vs TCP) está determinada por la capacidad del dispositivo y las condiciones de la red; confirme qué transporte soporta la unidad desplegada.
- La telemetría BLE a menudo requiere un gateway o colector móvil para asociar eventos del candado con el rastreador GPS; valide la compatibilidad del gateway.
- Valide la compatibilidad contra la documentación oficial del fabricante y las notas de firmware vigentes antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación usado por el SolarGuardX 120 ayuda a asegurar una integración confiable con Plaspy, acelera la resolución de problemas y respalda un comportamiento predecible a largo plazo frente a actualizaciones de firmware y hardware.

- Configuración más rápida al asegurar que dispositivos y gateways apunten al endpoint de Plaspy y utilicen el transporte correcto.
- Mejora en la resolución de problemas al acotar los fallos a la red, al transporte o al firmware en lugar de la configuración de plataforma de alto nivel.
- Mejor correlación de eventos para que la telemetría de seguridad se alinee con la posición del rastreador GPS y los flujos operativos.
- Alertas e informes históricos más confiables cuando se entiende el comportamiento de transmisión y la semántica de eventos.
- Decisiones informadas sobre actualizaciones de firmware, selección de gateways y topología de despliegue que afectan la continuidad de la telemetría.

## Por qué usar Plaspy con este protocolo

Usar el SolarGuardX 120 junto con Plaspy ofrece a las organizaciones una forma unificada de combinar telemetría de seguridad física y eventos de control de acceso con datos de ubicación y gestión de flotas. Esta integración puede mejorar la conciencia situacional en logística, reducir el tiempo de respuesta ante eventos de manipulación o robo y proporcionar auditorías sincronizadas de múltiples candados para flujos de acceso coordinados.

Para obtener más información sobre cómo Plaspy puede aceptar y correlacionar telemetría de dispositivos compatibles visite https://www.plaspy.com. Para detalles específicos sobre el protocolo del dispositivo, comportamiento de firmware y recomendaciones del fabricante, verifique la documentación oficial de TopFly en https://www.topflytech.com/ ya que el soporte de protocolo y las implementaciones de firmware pueden cambiar con el tiempo.
