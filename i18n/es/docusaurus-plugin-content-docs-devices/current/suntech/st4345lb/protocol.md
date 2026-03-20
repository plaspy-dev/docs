---
slug: /suntech/st4345lb/protocol
id: st4345lb-protocol
sidebar_label: Protocol
title: Suntech - ST4345LB Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Suntech ST4345LB para compatibilidad con Plaspy y comunicación fiable del dispositivo
keywords:
  - protocolo Suntech ST4345LB
  - protocolo GPS Suntech ST4345LB
  - compatibilidad ST4345LB Plaspy
  - protocolo rastreador GPS Suntech
  - protocolo de comunicación ST4345LB
  - protocolo de rastreo Suntech
  - protocolo de dispositivo Plaspy
  - integración de telemetría Suntech
  - rastreo de flotas ST4345LB
  - rastreo de vehículos Suntech
---

# Suntech - Protocolo ST4345LB

Esta página describe el contexto del protocolo público para usar el rastreador Suntech ST4345LB con Plaspy. Se centra en cómo el dispositivo comunica en términos generales, cómo Plaspy recibe la telemetría y qué considerar al integrar el ST4345LB en una implementación de monitoreo de flotas o activos. Las características técnicas destacadas del ST4345LB, como conectividad celular multimodo, soporte BLE para sensores y análisis vehicular, proporcionan la base práctica para el uso de sus reportes en Plaspy.

Plaspy usa configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo informa a la plataforma. El comportamiento exacto del protocolo puede variar según firmware, revisión de hardware y la implementación del fabricante, por lo que en el mundo real algunas unidades pueden comportarse de forma distinta. Para Plaspy el punto de conexión común es d.plaspy.com (54.85.159.138) on port 8888 y los dispositivos pueden configurarse para usar UDP o TCP en ese puerto.

## Resumen del protocolo

El protocolo del ST4345LB define cómo el rastreador empaqueta y transmite datos de ubicación, sensores y eventos a través de enlaces celulares hacia un servidor remoto. En términos de integración, el papel del protocolo es proporcionar a Plaspy telemetría consistente e identificable que pueda traducirse en ubicación, estado y eventos analíticos dentro de la plataforma.

- Permite que el rastreador reporte posiciones GNSS, estado de movimiento y encendido, y telemetría de sensores BLE a Plaspy.
- Identifica el dispositivo e incluye los campos necesarios para que Plaspy asocie los reportes con una cuenta y un activo.
- Transporta información de eventos y diagnósticos que Plaspy usa para alertas, puntuación de comportamiento del conductor y entradas para la reconstrucción de accidentes.
- Soporta tanto actualizaciones en tiempo real como reportes periódicos para que Plaspy mantenga vistas en vivo y trayectorias históricas.
- Funciona sobre transporte estándar TCP o UDP, de modo que las opciones de operador y conectividad se pueden adaptar a las necesidades de la implementación.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint y puerto compartidos y aplica rutinas de detección automática para reconocer los reportes entrantes de los rastreadores. Cuando un ST4345LB está configurado para enviar datos al endpoint de Plaspy, la plataforma típicamente reconoce el formato del dispositivo y comienza a ingerir telemetría sin necesidad de seleccionar manualmente el protocolo en la interfaz.

- Plaspy usa el endpoint común d.plaspy.com y la IP pública 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos en Plaspy utilizan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Si el ST4345LB apunta al endpoint de Plaspy usando TCP o UDP y se incluyen las credenciales o identificadores adecuados, generalmente no es necesaria la selección manual del protocolo.
- La detección automática reduce la complejidad de configuración para flotas que mezclan varios modelos de rastreadores.
- Usted debe verificar los identificadores del dispositivo y los intervalos de reporte para asegurar el comportamiento esperado en Plaspy.

## Contexto de transporte y conexión

Los detalles de conexión describen la capa de transporte y el direccionamiento que usa un dispositivo para alcanzar Plaspy. El ST4345LB soporta transportes celulares y puede configurarse para utilizar UDP o TCP según cobertura, consideraciones de consumo energético y la tolerancia del despliegue a las características de entrega.

- Los dispositivos pueden apuntar al hostname de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El puerto acordado para el reporte de dispositivos a Plaspy es 8888 y todos los dispositivos soportados usan este mismo puerto.
- El ST4345LB puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones del instalador.
- La elección del transporte afecta las garantías de entrega y puede influir en el consumo de batería y el comportamiento de reconexión.
- Los firewalls de red y la configuración del APN deben permitir conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles y el comportamiento de reporte; confirme las notas de la versión del firmware al evaluar compatibilidad.
- Las variantes de hardware y las SKU específicas por región pueden presentar diferencias en las bandas de radio u sensores opcionales que afecten la disponibilidad de telemetría.
- Las opciones de configuración ofrecidas por el fabricante pueden permitir operar el dispositivo sobre TCP o UDP; confirme qué transporte está activo en su despliegue.
- El reenvío de sensores BLE y los análisis avanzados dependen del firmware del dispositivo y de las funciones habilitadas; no todas las unidades necesariamente expondrán los mismos campos.
- Siempre valide reportes de muestra desde los dispositivos contra la ingestión en Plaspy para asegurar que los identificadores y marcas de tiempo coincidan con los formatos esperados.
- En caso de duda, consulte la documentación oficial del dispositivo para verificar los parámetros de configuración utilizados para apuntar los equipos a Plaspy.

## Por qué importa conocer el protocolo

Entender el protocolo de comunicación del ST4345LB facilita las instalaciones y hace más efectivo el diagnóstico al aclarar qué datos enviará el dispositivo y cómo Plaspy los interpretará. Ese conocimiento ayuda a técnicos y operadores a alinear la configuración del equipo, los ajustes del operador y el mapeo en la cuenta de Plaspy para lograr telemetría confiable.

- Asegura que durante el aprovisionamiento se apliquen correctamente servidor, puerto y transporte.
- Ayuda a diagnosticar problemas de conectividad como puertos bloqueados, APN mal configurados o direcciones de servidor incorrectas.
- Aclara qué eventos de dispositivo y tipos de sensor estarán disponibles en los paneles y reportes de Plaspy.
- Facilita la planificación de intervalos de encendido y reporte para balancear la vida útil de la batería con la actualidad de los datos.
- Apoya el mantenimiento a largo plazo al seguir cambios en el firmware que puedan alterar el contenido o la frecuencia de los mensajes.

## Por qué usar Plaspy con este protocolo

Usar el ST4345LB con Plaspy combina hardware resistente y de bajo costo con una plataforma diseñada para ingerir telemetría de ubicación, sensores y eventos para visibilidad de flota, recuperación y flujos operativos. El GNSS del dispositivo, el reenvío de sensores BLE y análisis a bordo como el análisis de patrones de conducción lo convierten en una opción práctica para organizaciones que necesitan rastreo confiable e información accionable.

Si desea saber más sobre cómo Plaspy soporta integraciones de dispositivos y gestión de flotas, visite https://www.plaspy.com. Para los detalles más actuales del protocolo y firmware específicos del dispositivo, confirme la documentación y notas de lanzamiento más recientes del fabricante en http://www.suntechint.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
