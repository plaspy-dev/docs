---
slug: /queclink/gl320mg/protocol
id: gl320mg-protocol
sidebar_label: Protocol
title: QuecLink - GL320MG Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar QuecLink GL320MG con Plaspy y rastreo fiable de activos y vehículos
keywords:
  - QuecLink GL320MG
  - protocolo GL320MG
  - rastreador GPS QuecLink
  - compatibilidad GL320MG Plaspy
  - protocolo de seguimiento QuecLink
  - protocolo rastreador LTE Cat M1 NB2
  - seguimiento de vehículos GL320MG
  - comunicación GL320MG
  - seguimiento de flotas QuecLink
  - conectividad GL320MG
---

# QuecLink - Protocolo GL320MG

Esta página explica el contexto público del protocolo para usar el rastreador QuecLink GL320MG con Plaspy. Resume cómo el GL320MG se comunica con una plataforma backend, resalta el papel del protocolo de reporte en el uso diario de rastreo y toma la descripción del dispositivo como referencia. El GL320MG es un rastreador de activos con LTE Advanced Cat M1 y NB2, con fallback 2G, batería interna de larga duración y accesorios opcionales como un kit de batería externa y una carcasa magnética IP67. Estas características lo hacen idóneo para seguridad personal, monitoreo de activos y rastreo vehicular cuando se requieren informes periódicos en tiempo real.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto de los paquetes, el soporte de comandos y detalles de ejecución pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí se centra en el contexto público y no sensible de conexión y protocolo en lugar de detalles internos de firmware.

## Resumen del protocolo

El protocolo de comunicación del GL320MG define cómo el rastreador se identifica, envía ubicación y estado, y recibe comandos cuando están soportados. Con Plaspy actuando como backend, el protocolo permite entregar a la plataforma actualizaciones de posición fiables, alertas y telemetría auxiliar para su visualización y procesamiento. Los siguientes puntos resumen el papel del protocolo en términos prácticos.

- Permite al GL320MG reportar ubicación GNSS, estado de batería e indicadores de estado a un servidor remoto.
- Proporciona identificación del dispositivo para que Plaspy asocie los reportes entrantes con un rastreador registrado.
- Transporta mensajes periódicos y basados en eventos que permiten a Plaspy construir historiales de rastreo útiles y generar alertas.
- Soporta transporte sobre sockets IP estándar para que el dispositivo alcance el endpoint de Plaspy desde redes celulares.
- Permite comandos de downlink o de configuración opcionales cuando el firmware del dispositivo y el operador lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador basándose en los reportes que llegan. En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy si el GL320MG está correctamente configurado para reportar a la dirección y puerto de Plaspy. La detección automática de Plaspy simplifica la incorporación de flotas mixtas de dispositivos.

- Plaspy expone un único endpoint de escucha para reportes de dispositivos, de modo que distintos modelos puedan reportar al mismo servidor.
- La plataforma inspecciona las conexiones entrantes e identifica el patrón de mensajes para elegir la ruta de tratamiento adecuada.
- Cuando el GL320MG está configurado para reportar al endpoint de Plaspy, normalmente no es necesaria la selección manual de protocolo dentro de Plaspy.
- Plaspy utiliza ajustes de conexión consistentes para que los procedimientos de incorporación sean uniformes entre los rastreadores soportados.
- Como referencia, el dominio público del servidor de Plaspy es d.plaspy.com y la IP pública es 54.85.159.138 usando el puerto común para reportes de dispositivos.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el GL320MG alcanza a Plaspy a través de la red celular. El dispositivo puede configurarse para usar UDP o TCP en el puerto de la plataforma según el soporte del dispositivo y la configuración en campo. Plaspy acepta reportes en un único puerto para todos los dispositivos con el fin de simplificar la conectividad y el enrutamiento.

- El GL320MG puede configurarse para usar UDP o TCP en el puerto 8888 conforme a las opciones del dispositivo y las condiciones de la red.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto para simplificar la configuración de firewall y APN.
- Los dispositivos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 como dirección de destino.
- La elección entre UDP o TCP depende de las opciones de firmware del dispositivo y de las características de fiabilidad que se deseen para el reporte.
- Asegúrese de que el APN y las reglas de firewall salientes en la red celular permitan tráfico al endpoint de Plaspy en el puerto configurado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes o funciones soporta el GL320MG; confirme la versión de firmware del dispositivo al validar su comportamiento.
- Las revisiones de hardware y combinaciones de accesorios, como baterías externas o carcasas, normalmente no modifican el comportamiento del protocolo, pero sí pueden afectar los intervalos de reporte y la gestión de energía.
- La elección entre UDP y TCP influye en la fiabilidad de entrega y puede requerir diferentes ajustes de reintento o keepalive en algunas pilas de red.
- Puede ser necesario usar herramientas de configuración del fabricante o opciones de configuración por SMS para apuntar el dispositivo al endpoint de Plaspy y establecer el modo de transporte.
- La detección automática de Plaspy maneja muchas variantes del protocolo, pero se recomienda validar los primeros reportes durante el despliegue.
- Consulte siempre la documentación del fabricante para revisar diferencias en el nivel de funciones entre SKUs regionales o compilaciones de firmware.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a los equipos a desplegar, solucionar problemas y mantener los rastreadores GL320MG con Plaspy de forma más eficiente. Saber qué reporta el dispositivo y cómo se conecta reduce la fricción en la incorporación y mejora la confiabilidad operativa.

- Ayuda a validar que el dispositivo está reportando correctamente durante la provisión inicial y las pruebas de campo.
- Facilita el diagnóstico de problemas de conectividad, como APN incorrecto, puertos bloqueados o direcciones de destino mal configuradas.
- Informa la decisión sobre la selección de transporte al equilibrar vida de batería, fiabilidad de entrega y costos celulares.
- Apoya la planificación de actualizaciones de firmware y pruebas para asegurar la compatibilidad continua con cambios en el backend.
- Ayuda a interpretar la telemetría entrante para que las alertas y flujos de trabajo en Plaspy se puedan ajustar al comportamiento del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL320MG con Plaspy ofrece un camino directo hacia la visibilidad en tiempo real de activos y vehículos. La larga vida de batería del rastreador, su conectividad global LTE Cat M1 y NB2, y las opciones de accesorios lo convierten en una elección flexible para muchos casos de uso, mientras que la plataforma de Plaspy se encarga de la ingestión, identificación de dispositivos y presentación de datos para operaciones e informes.

Si desea saber más sobre Plaspy y cómo integrar el GL320MG en una solución de rastreo, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guía oficial de configuración consulte el sitio del fabricante en https://www.queclink.com/ para verificar la documentación y el comportamiento vigente.
