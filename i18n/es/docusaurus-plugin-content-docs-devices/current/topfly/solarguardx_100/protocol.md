---
slug: /topfly/solarguardx_100/protocol
id: solarguardx_100-protocol
sidebar_label: Protocol
title: TopFly - SolarGuardX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo TopFly SolarGuardX 100 y cómo se comunica con Plaspy para seguimiento y telemetría
keywords:
  - protocolo TopFly SolarGuardX 100
  - protocolo GPS TopFly SolarGuardX 100
  - compatibilidad SolarGuardX 100 Plaspy
  - protocolo de comunicación SolarGuardX 100
  - protocolo de rastreo SolarGuardX 100
  - rastreador de activos TopFly Plaspy
  - rastreador GPS solar Plaspy
  - protocolo rastreador GPS de carga
  - rastreador LTE SolarGuardX 100
  - protocolo de rastreo de flotas Plaspy
---

# TopFly - Protocolo SolarGuardX 100

Esta página ofrece un resumen público del protocolo para usar el TopFly SolarGuardX 100 con Plaspy. Su objetivo es presentar, a alto nivel y sin información sensible, cómo el dispositivo comunica posiciones, eventos y telemetría a Plaspy, de modo que operadores de flota e integradores —y usted— puedan comprender el comportamiento de conexión e informe sin exponer detalles internos de la implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página describe el contexto común de comunicación y consideraciones prácticas de compatibilidad en lugar de los detalles internos del firmware.

## Resumen del protocolo

A grandes rasgos, el protocolo de reporte del SolarGuardX 100 define cómo el rastreador empaqueta y envía posiciones GNSS, eventos, alarmas y telemetría de sensores BLE a un servicio backend como Plaspy. Su función es garantizar la identificación, entrega y almacenamiento temporal de datos útiles para que Plaspy pueda procesar actualizaciones de ubicación y estado para flotas y flujos de trabajo de seguridad.

- Permite envíos periódicos y por eventos de posición GPS, estado de movimiento, eventos de geocerca y alarmas de seguridad hacia Plaspy.
- Transporta telemetría auxiliar, como lecturas de sensores BLE y estado del dispositivo, para que Plaspy presente datos de activos enriquecidos.
- Soporta almacenamiento local en el dispositivo para preservar puntos históricos cuando se pierde cobertura y subirlos posteriormente a Plaspy.
- Utiliza transportes IoT estándar soportados por el equipo para llegar al endpoint de Plaspy, con opciones de transporte seguro gestionadas por el firmware del dispositivo.
- Proporciona identificación del dispositivo y cadencia de reporte para que Plaspy pueda asociar correctamente las transmisiones entrantes con el registro de activo correspondiente.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador según los datos que envía el dispositivo. En la mayoría de los casos, cuando el SolarGuardX 100 está configurado para reportar a Plaspy, será reconocido y procesado sin que usted tenga que seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy escucha informes de dispositivos en el endpoint público d.plaspy.com.
- El servidor de Plaspy es accesible directamente en la IP pública 54.85.159.138 para configuraciones que requieren una dirección IP.
- Plaspy usa el mismo puerto para todos los dispositivos, lo que simplifica la configuración y reduce errores iniciales.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado se conecta al endpoint.
- Normalmente, usted solo necesita asegurarse de que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 y utilice el transporte y puerto adecuados.

## Transporte y contexto de conexión

El SolarGuardX 100 está diseñado para operar sobre transportes IoT comunes y puede configurarse para usar UDP o TCP en el puerto compartido de Plaspy. La elección de transporte depende de la configuración del firmware del dispositivo y de los compromisos deseados entre latencia, fiabilidad y consumo de batería.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- El equipo puede apuntar al nombre DNS d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, lo que facilita la configuración a escala de flota.
- Algunas implementaciones prefieren TCP para entrega más fiable, mientras que otras eligen UDP para menor latencia y ahorro de batería según la configuración del dispositivo.
- La selección del transporte debe coincidir con las opciones del firmware del dispositivo y con las consideraciones de la operadora o red para LTE Cat M1, NB2 o redes de respaldo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo se reportan ciertos eventos o qué transportes están disponibles; revise siempre las notas de la versión del firmware del dispositivo.
- Las revisiones de hardware o las SKUs regionales pueden alterar las bandas de red disponibles o las integraciones de accesorios que afectan el comportamiento de reporte.
- Opciones de configuración del fabricante, como ajustes de payload seguro, pueden modificar cómo el dispositivo cifra o firma la telemetría antes de enviarla.
- La elección del transporte (TCP vs UDP) puede afectar el comportamiento de reintentos y las características de buffering en el dispositivo.
- El comportamiento de subida de datos almacenados en buffer varía según el firmware y debe probarse con sus patrones operativos para confirmar la recuperación esperada tras cortes de cobertura.
- Valide cualquier comando remoto, reenvío de accesorios BLE o comportamiento de fallback por SMS frente a la documentación más reciente de TopFly.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el SolarGuardX 100 garantiza un registro exitoso, reportes confiables y una resolución de problemas más rápida al integrar dispositivos con Plaspy. Tener claridad sobre las opciones de transporte, el buffering y las variaciones de firmware reduce tiempos de inactividad y aumenta la confianza operativa.

- Simplifica la configuración inicial alineando los ajustes de reporte del dispositivo con las expectativas del endpoint y puerto de Plaspy.
- Ayuda a diagnosticar problemas de conectividad verificando si el dispositivo usa el transporte y destino esperados.
- Orienta decisiones de actualización de firmware y configuración que impactan cómo se entregan eventos y telemetría a Plaspy.
- Permite elegir intervalos de reporte y estrategias de buffering que equilibren vida de batería y frescura de los datos.
- Mejora la postura de seguridad al confirmar qué opciones de transporte seguro o de payload están activas en los dispositivos desplegados.

## Por qué usar Plaspy con este protocolo

Usar el SolarGuardX 100 con Plaspy ofrece una solución práctica para la visibilidad persistente de carga y remolques. La batería de larga duración con ayuda solar del dispositivo, su carcasa robusta, desempeño GNSS y soporte para accesorios BLE lo hacen adecuado para protección de activos en exteriores, mientras que Plaspy ingiere y normaliza los flujos de ubicación, alarmas y telemetría para los procesos operativos.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el SolarGuardX 100, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica más reciente sobre protocolo y firmware en el sitio del fabricante https://www.topflytech.com/.
