---
slug: /topfly/solarx_120/protocol
id: solarx_120-protocol
sidebar_label: Protocol
title: TopFly - SolarX 120 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TopFly SolarX 120 y su comunicación con Plaspy para rastreo de activos y telemetría
keywords:
  - protocolo TopFly SolarX 120
  - protocolo GPS TopFly SolarX 120
  - protocolo de comunicación SolarX 120
  - protocolo de rastreo SolarX 120
  - protocolo de dispositivo Plaspy
  - protocolo rastreador GPS Plaspy
  - telemetría BLE SolarX 120
  - rastreo de activos SolarX 120
  - compatibilidad rastreador GPS TopFly
  - integración SolarX 120 Plaspy
---

# TopFly - Protocolo SolarX 120

Esta página describe el contexto público del protocolo para usar el rastreador TopFly SolarX 120 con Plaspy. Se centra en cómo el equipo transmite telemetría general, ubicación y datos de sensores a Plaspy sin exponer detalles privados de implementación del fabricante. Use esta información para entender qué debe configurar en el dispositivo y qué esperar al integrar el SolarX 120 en una implementación de Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware, la provisión del operador y la implementación del fabricante, por lo que es recomendable verificar las opciones específicas del dispositivo contra la documentación oficial de TopFly y las notas de la versión.

## Resumen del protocolo

El protocolo de comunicación define cómo el SolarX 120 empaqueta y transmite fixes GNSS, telemetría de sensores y notificaciones de eventos a un servidor como Plaspy. A alto nivel, el protocolo garantiza que el rastreador pueda identificarse, enviar ubicaciones y valores de sensores utilizables, y soportar cargas en buffer cuando la conexión celular no está disponible.

- Proporciona identidad y estado del dispositivo para que Plaspy asocie los datos entrantes con el activo correcto.
- Envía fixes GNSS y marcas de tiempo que Plaspy utiliza para construir rutas en tiempo real e historiales.
- Entrega telemetría BLE y eventos internos de sensores para temperatura, humedad, apertura de puertas, movimiento y alertas por extracción.
- Soporta reporte en buffer para que los puntos almacenados se suban cuando vuelva la cobertura, preservando el historial de la pista.
- Permite intervalos de reporte y disparadores de eventos configurables para equilibrar necesidades de tiempo real y duración de batería.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint y puerto compartidos para las conexiones entrantes de rastreadores y reconoce automáticamente el protocolo de reporte cuando un dispositivo envía datos. En la mayoría de los casos, usted no necesitará seleccionar manualmente un protocolo dentro de Plaspy si el SolarX 120 está configurado para reportar al endpoint de Plaspy usando las opciones de transporte soportadas.

- Apunte el dispositivo al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 y use el puerto 8888 para reporte.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración del servidor y las reglas de firewall.
- Los dispositivos pueden usar TCP o UDP en el puerto 8888 según la configuración de la unidad y las condiciones de la red.
- Cuando el dispositivo envía su reporte inicial, Plaspy asocia la identidad del equipo con el flujo entrante y aplica el parseo y mapeo adecuados.
- Si un dispositivo soporta MQTT o SMS como transportes alternativos, esos métodos también pueden entregar telemetría a Plaspy cuando se configuran según las capacidades del dispositivo y las opciones de ingestión de Plaspy.

## Transporte y contexto de conexión

El SolarX 120 admite opciones de transporte flexibles y puede configurarse para usar el transporte más adecuado para la implementación. El contexto de conexión abarca direccionamiento, tipo de transporte y consideraciones prácticas para una entrega confiable a Plaspy.

- El dispositivo puede configurarse para enviar telemetría a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- Plaspy acepta UDP y TCP en el puerto 8888; elija el transporte que soporte el firmware del equipo y que prefiera el operador de red.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que facilita la configuración de NAT y firewall en la red receptora.
- Las redes celulares, configuraciones APN y restricciones del operador pueden afectar qué transporte es más fiable en campo.
- Cuando esté disponible, MQTT o SMS pueden usarse como transportes alternativos para dispositivos que los soporten, pero el endpoint y puerto compartidos de Plaspy siguen siendo la vía principal para reportes en vivo.

## Notas de compatibilidad del protocolo

- Las diferencias en versiones de firmware pueden cambiar los transportes disponibles, los intervalos de reporte y los campos opcionales en la telemetría. Revise siempre las notas de la versión del firmware instalado.
- Las revisiones de hardware pueden modificar el comportamiento de periféricos como soporte BLE, tipos de sensores o capacidad de buffer.
- Las opciones de configuración del fabricante influyen en qué eventos se reportan y con qué frecuencia se generan fixes GNSS, lo que afecta la duración de la batería y el volumen de datos.
- La selección de transporte (TCP vs UDP) debe considerar la confiabilidad celular y cómo el dispositivo hace buffering y reenvío cuando las conexiones se interrumpen.
- La compatibilidad con sensores BLE puede variar según el firmware del sensor y los perfiles BLE; el SolarX 120 está documentado como compatible con sensores TOPFLYtech como TSTH1-B y TSDT1-B.
- Valide la compatibilidad y los pasos de configuración recomendados contra la documentación técnica de TopFly antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del SolarX 120 ayuda a asegurar una configuración inicial exitosa, operación fiable a largo plazo y una resolución de problemas efectiva al usar Plaspy. Un conocimiento claro del protocolo reduce el tiempo de integración y previene configuraciones erróneas comunes que afectan la precisión del rastreo y el tiempo operativo del dispositivo.

- Asegura que el dispositivo apunte al endpoint correcto de Plaspy y use el puerto 8888 para que los datos lleguen a la plataforma.
- Ayuda a optimizar intervalos de reporte y reglas de evento para equilibrar visibilidad en tiempo real con comportamiento de batería y carga solar.
- Facilita la resolución de problemas al distinguir causas de red, transporte o firmware cuando la telemetría falta o se retrasa.
- Permite fijar expectativas adecuadas sobre cargas en buffer, retención del historial de rutas y disponibilidad de telemetría de sensores.
- Facilita el mapeo correcto de eventos del dispositivo dentro de los flujos de trabajo de Plaspy para alertas, geocercas e informes.

## Por qué usar Plaspy con este protocolo

Usar el SolarX 120 con Plaspy ofrece a las organizaciones visibilidad confiable a largo plazo y la capacidad de combinar flujos de posición GNSS con telemetría ambiental y de manipulación. La detección automática de protocolo de Plaspy y la ingestión por un solo puerto simplifican la incorporación para que los equipos de campo puedan desplegar unidades SolarX 120 sin seleccionar manualmente el protocolo en la plataforma.

Plaspy proporciona rastreo centralizado, reglas de eventos e informes históricos que hacen que la telemetría del SolarX 120 sea accionable para la gestión de flotas, protección de activos y monitoreo de condiciones. Para conocer más sobre Plaspy, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, comportamiento de firmware e información de implementación verifique con el fabricante en https://www.topflytech.com/.
