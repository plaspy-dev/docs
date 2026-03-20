---
slug: /falcom/fox3_4g_na/protocol
id: fox3_4g_na-protocol
sidebar_label: Protocol
title: Falcom - FOX3-4G-NA Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador Falcom FOX3-4G-NA y su comunicación con Plaspy
keywords:
  - protocolo Falcom FOX3-4G-NA
  - rastreador GPS FOX3-4G-NA
  - protocolo rastreador Falcom
  - compatibilidad FOX3-4G-NA Plaspy
  - telemática vehicular Falcom
  - comunicación GPS FOX3
  - protocolo de rastreo Falcom FOX3
  - integración rastreador GPS Plaspy
  - comunicación dispositivo FOX3
  - seguimiento vehicular Falcom
---

# Falcom - Protocolo FOX3-4G-NA

Esta página presenta el contexto público del protocolo para usar el rastreador Falcom FOX3-4G-NA con Plaspy. Resume cómo el dispositivo se comunica con Plaspy, el papel del protocolo de reporte del rastreador y las configuraciones de conexión que normalmente usará al integrar el FOX3-4G-NA en un flujo de trabajo de gestión de flotas. La información aquí está pensada para ser no sensible y enfocada en la integración, no en detalles internos del firmware.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El FOX3-4G-NA ofrece conectividad LTE Cat 4 con posicionamiento GNSS y diversas opciones de expansión IO; el comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El endpoint público de Plaspy para reportes de dispositivos es d.plaspy.com que resuelve a 54.85.159.138 y el puerto estándar utilizado para conexiones de dispositivos es 8888.

## Resumen del protocolo

El protocolo que utiliza el FOX3-4G-NA en la red define cómo el vehículo envía datos de posición, estado y eventos a un servidor remoto como Plaspy. Regula cómo se empaquetan y transmiten la telemetría, las alertas, los estados de entradas/salidas y los informes de estado para que Plaspy pueda interpretarlos y presentar información accionable a los usuarios. Esta sección describe ese papel en términos generales y cómo encaja en una integración con Plaspy.

- Transmite datos de posición GNSS y marcas de tiempo para que Plaspy muestre ubicaciones e historial.
- Informa el estado del vehículo, los estados de entradas y salidas (I/O) y eventos de alerta para monitoreo y automatización.
- Envía telemetría periódica y registros de historial que permiten generación de reportes, reproducción y análisis.
- Soporta configuración remota y diagnósticos por red cuando la función está habilitada en el dispositivo.
- Puede incluir cargas cifradas o autenticadas según el firmware y las opciones del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy utiliza un endpoint y puerto unificados para conexiones entrantes y realiza detección automática del protocolo para los rastreadores soportados. En la mayoría de los casos, cuando el FOX3-4G-NA está configurado para reportar al endpoint de Plaspy, no se requiere una selección manual del protocolo dentro de la plataforma. La detección facilita la puesta en marcha para administradores y reduce pasos de configuración durante el aprovisionamiento de dispositivos.

- Plaspy recibe conexiones de dispositivos en el dominio d.plaspy.com que resuelve a 54.85.159.138.
- El puerto compartido para reportes de dispositivos es 8888 y se utiliza para todos los equipos en Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar un protocolo manualmente.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para la detección automática.
- La detección cubre modos de reporte comunes usados por rastreadores vehiculares, aunque el comportamiento depende del firmware del dispositivo.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el FOX3-4G-NA establece comunicación a nivel de transporte con Plaspy. Según la configuración del dispositivo y las opciones del firmware, el rastreador puede usar distintos métodos de transporte para alcanzar el endpoint de Plaspy. Los siguientes puntos aclaran las opciones típicas de transporte y la información de dirección.

- El FOX3-4G-NA puede configurarse para usar UDP o TCP para reportar a Plaspy, según el soporte y las opciones del dispositivo.
- El endpoint público recomendado por Plaspy es d.plaspy.com y la IP pública equivalente es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, 8888, lo que simplifica reglas de firewall y redes.
- Elija UDP para reportes periódicos livianos cuando esté soportado, o TCP si el dispositivo y la red requieren un transporte más fiable.
- Verifique que el APN y la configuración de datos móviles en el equipo sean correctos para que pueda alcanzar el endpoint de Plaspy a través de la red celular.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede depender de la versión de firmware del FOX3-4G-NA; funciones como cifrado o modos extendidos de historial pueden variar entre versiones.
- Las revisiones de hardware y las expansiones opcionales IOBOX pueden alterar la telemetría y los tipos de eventos reportados a Plaspy.
- Las opciones de configuración del fabricante determinan si el equipo usa UDP o TCP para reportar a un servidor remoto.
- Políticas de red, configuración de APN y la provisión de la SIM pueden afectar la capacidad del dispositivo para alcanzar d.plaspy.com.
- Valide el comportamiento esperado en un entorno de prueba o staging antes de desplegar a gran escala.
- Consulte la documentación de Falcom para ajustes específicos del dispositivo y cualquier modo opcional de protocolo que el equipo pueda ofrecer.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación que usa el FOX3-4G-NA ayuda a asegurar una configuración confiable, telemetría precisa y una resolución de problemas más eficaz al integrar con Plaspy. Conocer qué envía el dispositivo y cómo Plaspy lo recibe reduce fricciones en el despliegue y favorece la continuidad operativa.

- Garantiza la configuración correcta del dispositivo para que reporte a d.plaspy.com en el puerto 8888 usando el transporte previsto.
- Facilita la resolución de problemas de conectividad relacionados con APN, restricciones del operador o reglas de firewall.
- Ayuda a validar que entradas, salidas y eventos de alerta de expansiones IOBOX se representen correctamente en Plaspy.
- Apoya la planificación de actualizaciones de firmware y despliegues de nuevas funciones al alinear capacidades del dispositivo con las expectativas de Plaspy.
- Mejora la confiabilidad operativa al aclarar qué funciones dependen del dispositivo y cuáles de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el Falcom FOX3-4G-NA con Plaspy ofrece a las organizaciones un método estable para recolectar telemetría GNSS y vehicular de alto ancho de banda mientras se aprovecha la detección automática de protocolos y el endpoint unificado de Plaspy. La conectividad LTE Cat 4 del rastreador, sus opciones flexibles de I/O y la precisión GNSS lo hacen adecuado para gestión de flotas, monitoreo de activos y telemática industrial cuando se combina con una plataforma que soporta manejo automático de protocolos.

Para conocer más sobre cómo Plaspy soporta la conectividad de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Para detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware y guías de implementación, verifique la información en el sitio del fabricante https://www.falcom.de ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
