---
slug: /globalsat/gtr_388/protocol
id: gtr_388-protocol
sidebar_label: Protocol
title: GlobalSat - GTR-388 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo GlobalSat GTR-388 y cómo se comunica con Plaspy para un rastreo confiable
keywords:
  - protocolo GlobalSat GTR-388
  - protocolo GPS GlobalSat GTR-388
  - comunicación GlobalSat GTR-388
  - protocolo de rastreo GTR-388
  - compatibilidad GlobalSat con Plaspy
  - GTR-388 TCP UDP
  - protocolo rastreador eBike GlobalSat
  - compatibilidad firmware GTR-388
  - protocolo de dispositivo Plaspy
  - rastreo vehicular GTR-388
---

# GlobalSat - Protocolo GTR-388

Esta página ofrece contexto público sobre el protocolo para integrar el rastreador GPS GlobalSat GTR-388 con la plataforma de flotas Plaspy. Resume cómo se comunica el GTR-388C1 en términos generales, las opciones de comunicación que ofrece el equipo y los ajustes prácticos de conexión usados al enviar ubicación y datos telemétricos a Plaspy. El GTR-388C1 soporta múltiples transportes, como SMS, TCP, UDP y HTTP, e incluye opciones de entrada/salida, detección de movimiento y actualizaciones de firmware OTA que pueden influir en su comportamiento en producción.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El tiempo exacto de paquetes, los intervalos de reporte y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en contexto público y no sensible para ayudar en despliegues y resolución de problemas.

## Resumen del protocolo

El protocolo implementado por el GTR-388 permite reportes seguros y consistentes de posición, movimiento y estado desde el rastreador hacia un servicio backend como Plaspy. A alto nivel, el protocolo del equipo define cómo se identifica el dispositivo, cómo empaqueta la ubicación y el estado de I/O, y cómo el servidor confirma la recepción o solicita ajustes de configuración.

- Permite que el rastreador envíe ubicación, movimiento y estado de I/O a un servidor remoto para que Plaspy procese y presente telemetría utilizable.
- Proporciona el mecanismo para que el dispositivo se identifique ante Plaspy y así asociar los datos con el activo correcto.
- Soporta múltiples opciones de transporte (TCP, UDP, HTTP, SMS) para que los instaladores puedan adaptarse a la conectividad y disponibilidad de la red.
- Funciona junto con actualizaciones OTA y características de I/O para asegurar fiabilidad continua y control funcional.
- Define comportamientos de reporte como intervalos de latido y reportes basados en movimiento, permitiendo al mismo tiempo que el servidor normalice los datos entrantes.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los rastreadores en un único endpoint y puerto compartido, y utiliza esos datos entrantes para detectar qué protocolo está usando cada dispositivo. Cuando un GTR-388 está configurado para reportar al endpoint de Plaspy, la plataforma reconocerá automáticamente el protocolo del equipo sin que el usuario tenga que seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy escucha en un endpoint y puerto común para todos los dispositivos soportados, lo que simplifica la configuración.
- Si el rastreador apunta a d.plaspy.com o a 54.85.159.138 en el puerto de Plaspy, la plataforma aceptará los reportes entrantes y detectará el protocolo automáticamente.
- Normalmente los usuarios no necesitan elegir un protocolo en Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- La detección automática facilita la puesta en marcha de una variedad de modelos que usan los transportes estándar soportados por el GTR-388.
- Una configuración correcta del dispositivo y firmware actualizado aumentan la probabilidad de que Plaspy detecte y procese los reportes de inmediato.

## Transporte y contexto de conexión

El GTR-388 soporta varios métodos de transporte. Para la comunicación con Plaspy, el contexto práctico es que los dispositivos pueden usar UDP o TCP para enviar reportes al endpoint de Plaspy en el puerto compartido. Plaspy publica el objetivo de conexión público para que los instaladores configuren los equipos de forma consistente.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto de escucha de Plaspy para dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El GTR-388 puede usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y los requisitos de la red.
- El reporte por HTTP o SMS sigue siendo una opción soportada por el dispositivo, pero arquitectónicamente son distintos de las sesiones persistentes TCP o UDP.
- Use el transporte más apropiado para su SIM y condiciones de red; TCP es habitual cuando se requiere entrega más confiable, mientras que UDP se usa cuando se prefiere un reporte más liviano.

## Notas sobre compatibilidad del protocolo

- El GTR-388C1 es compatible con Plaspy cuando se configura para reportar al endpoint de Plaspy, aunque el comportamiento exacto puede depender del firmware y de la red del operador.
- Las actualizaciones de firmware entregadas vía OTA pueden cambiar los formatos de reporte, las funciones disponibles y los parámetros de tiempo, por lo que es importante anotar la versión de firmware al validar compatibilidad.
- Revisiones de hardware o SKUs específicos por región pueden introducir diferencias sutiles en bandas soportadas o variantes del protocolo; confirme la variante exacta del modelo antes de una implementación masiva.
- Elegir TCP frente a UDP afecta las garantías de entrega y puede influir en cómo el dispositivo se reconecta tras una pérdida de red.
- Las opciones de configuración del fabricante para I/O, detección de movimiento y gestión de energía pueden afectar los datos que Plaspy recibe y la frecuencia de los envíos.
- Siempre valide el comportamiento crítico en producción contra la documentación actual del fabricante y pruebe los dispositivos en el entorno de red objetivo.

## Por qué es importante entender el protocolo

Comprender cómo el GTR-388 se comunica con Plaspy ayuda a garantizar un rastreo confiable, facilita la resolución de problemas y permite un comportamiento del ciclo de vida del dispositivo más predecible. Conocer el papel del transporte, el firmware y la configuración del equipo apoya mejores despliegues y reduce sorpresas en campo.

- Asegura que los dispositivos apunten al endpoint correcto de Plaspy para que los datos lleguen de forma consistente.
- Ayuda a diagnosticar cuando los reportes faltan, son intermitentes o contienen valores inesperados.
- Orienta las decisiones de firmware y configuración que afectan la duración de la batería, la frecuencia de reporte y las actualizaciones por movimiento.
- Informa la elección entre TCP y UDP según necesidades de confiabilidad y planes de datos de la SIM.
- Facilita la planificación de actualizaciones OTA y el mantenimiento a largo plazo de los equipos.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat GTR-388 con Plaspy ofrece a las organizaciones una forma directa de capturar ubicación de vehículos y eBikes, eventos de movimiento y estado de I/O, todo apoyado por un endpoint único para el reporte de dispositivos. La detección automática de protocolo de Plaspy y el puerto unificado simplifican la incorporación y reducen la necesidad de configurar cada dispositivo individualmente, permitiendo que las flotas se concentren en operaciones y análisis en lugar de detalles de transporte.

Si desea obtener más información sobre cómo Plaspy maneja la conectividad de dispositivos y el soporte de protocolos, visite https://www.plaspy.com. Para detalles específicos más recientes sobre el protocolo del dispositivo, notas de firmware y revisiones de hardware del GlobalSat GTR-388, consulte la documentación del fabricante en https://www.globalsat.com.tw/ para verificar el comportamiento y los ajustes actuales.
