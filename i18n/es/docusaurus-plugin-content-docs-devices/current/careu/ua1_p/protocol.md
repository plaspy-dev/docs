---
slug: /careu/ua1_p/protocol
id: ua1_p-protocol
sidebar_label: Protocol
title: CAREU - UA1-P Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para usar el rastreador CAREU UA1-P con Plaspy. Guía de conexión y compatibilidad para despliegues
keywords:
  - protocolo CAREU UA1-P
  - rastreador GPS CAREU UA1-P
  - compatibilidad UA1-P Plaspy
  - protocolo de rastreadores Plaspy
  - protocolo GPS CAREU
  - protocolo de seguimiento UA1-P
  - protocolo de rastreo de activos UA1-P
  - integración de rastreador GPS Plaspy
  - rastreo de paquetes UA1-P
  - comunicación del dispositivo CAREU
---

# CAREU - UA1-P Protocol

Esta página ofrece el contexto público del protocolo para usar el rastreador CAREU UA1-P con Plaspy. Describe de forma general cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión son los más comunes y qué considerar al integrar el UA1-P en flujos de trabajo de seguimiento centralizados. El objetivo es exponer los puntos de comunicación y compatibilidad observables públicamente sin revelar detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la conducta en campo puede diferir ligeramente entre unidades.

## Resumen del protocolo

El protocolo de reporte del UA1-P permite que el dispositivo transmita posiciones GNSS, telemetría de sensores ambientales y mensajes de estado del dispositivo a un endpoint en la nube donde Plaspy ingiere y presenta esa información. La visión pública del protocolo se centra en qué tipos de datos se reportan y cómo esos datos quedan disponibles para una plataforma de gestión de flotas, más que en la codificación interna de paquetes o en detalles de parsing.

- Permite la entrega de posiciones y marcas de tiempo desde el rastreador a Plaspy para vistas en tiempo real e históricas.
- Transporta telemetría ambiental como temperatura, luz ambiental y presión barométrica para alertas basadas en condiciones.
- Comunica información de estado del dispositivo útil para la gestión de batería y la selección de perfiles de reporte.
- Soporta perfiles de reporte configurables que equilibran la frecuencia de envío con la vida útil de la batería y los costos de conectividad.
- Facilita actualizaciones remotas de parámetros y flujos de mantenimiento de firmware cuando el fabricante lo soporta.
- Funciona sobre conectividad IP celular estándar, de modo que Plaspy puede agregar telemetría de muchos dispositivos en una sola plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy depende de un endpoint centralizado compartido para recibir reportes de los rastreadores soportados y usa detección automática para identificar el protocolo del emisor. En despliegues habituales usted no necesita seleccionar manualmente un protocolo en Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy usando los ajustes de conexión documentados.

- Plaspy recibe reportes de dispositivo en el endpoint centralizado d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega telemetría al endpoint compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la plataforma agrega los datos entrantes en un único puerto de escucha.
- Cuando un dispositivo está correctamente configurado para enviar al endpoint de Plaspy, por lo general no se requiere elegir el protocolo manualmente dentro del sistema Plaspy.
- Si un rastreador no aparece en Plaspy, las comprobaciones comunes incluyen la accesibilidad de red a d.plaspy.com, la correcta configuración de la dirección del servidor y verificar que el rastreador esté configurado para el tipo de transporte esperado.

## Contexto de transporte y conexión

Conexión y transporte son conceptos distintos a la semántica del protocolo, pero son esenciales para una entrega confiable. El UA1-P puede apuntar a Plaspy usando transportes IP estándar soportados por el rastreador y su firmware. Comprender el contexto de transporte ayuda en las comprobaciones básicas de conectividad y en el onboarding de dispositivos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del equipo y el entorno del operador móvil.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 al configurar el endpoint de reporte.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y las reglas de firewall en el lado receptor.
- Elija UDP cuando busque un overhead mínimo y tanto el dispositivo como la red lo soporten, o TCP cuando prefiera entrega fiable y comportamiento orientado a sesión y esté disponible.
- Verifique que el firmware del dispositivo y la red local permitan tráfico saliente hacia el endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo y cuándo el UA1-P reporta campos de telemetría específicos; consulte siempre las notas de la versión de firmware para conocer cambios de comportamiento.
- Las variantes de hardware y las variantes regionales de bandas celulares pueden influir en qué opciones de transporte o ajustes APN funcionan mejor en una implementación concreta.
- Las opciones de configuración del lado del fabricante pueden habilitar o deshabilitar canales de telemetría o perfiles de reporte específicos; confirme que los canales deseados estén activos.
- La selección de transporte entre UDP y TCP puede afectar el consumo de batería y la fiabilidad de los reportes según las condiciones de señal y el comportamiento de la red.
- Probar un conjunto reducido de dispositivos en su geografía objetivo ayuda a validar intervalos de reporte, duración de batería y entrega de mensajes antes de un despliegue completo.
- Valide siempre la compatibilidad contra la documentación oficial de CAREU para el modelo y la versión de firmware exactos.

## Por qué importa entender el protocolo

Comprender el protocolo de comunicación del UA1-P en términos prácticos ayuda a asegurar una configuración exitosa, una ingesta de datos fiable en Plaspy y una operación predecible a largo plazo. Saber qué reporta el rastreador y cómo se conecta reduce el tiempo de resolución de problemas y permite optimizar configuraciones para costo y autonomía.

- Acelera la resolución de problemas al acotar si los incidentes son por conectividad, configuración o firmware.
- Ayuda a ajustar intervalos y perfiles de reporte para equilibrar necesidades de telemetría con la vida útil de la batería y los costos de datos.
- Informa la configuración de firewall y de red para que los dispositivos puedan alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Apoya la planificación de estrategias de actualización de firmware y flujos de gestión remota de dispositivos.
- Permite expectativas más claras sobre la telemetría que estará disponible en Plaspy para alertas e informes.

## Por qué usar Plaspy con este protocolo

Usar el CAREU UA1-P con Plaspy ofrece una forma centralizada de recopilar ubicación en tiempo real y telemetría ambiental para monitoreo de paquetes y activos. Plaspy agrega las posiciones GNSS, lecturas de sensores y estados del dispositivo del UA1-P para ofrecer visibilidad a equipos de logística, operaciones de seguridad y propietarios de activos sin que los usuarios deban gestionar el parsing de protocolos o múltiples endpoints.

El enfoque de endpoint compartido de Plaspy simplifica el despliegue: los dispositivos reportan a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP según lo soportado, y Plaspy detecta automáticamente el protocolo del rastreador por lo que los administradores por lo general no necesitan seleccionar manualmente los manejadores de protocolo. Para saber más sobre Plaspy y cómo maneja la compatibilidad de dispositivos visite https://www.plaspy.com. Para detalles específicos de protocolo y firmware más recientes consulte la información del fabricante en https://www.systech-iot.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
