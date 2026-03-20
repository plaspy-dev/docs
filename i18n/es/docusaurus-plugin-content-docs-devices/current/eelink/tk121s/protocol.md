---
slug: /eelink/tk121s/protocol
id: tk121s-protocol
sidebar_label: Protocol
title: EElink - TK121‑S Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo EElink TK121 S para compatibilidad con Plaspy y reportes MoveLink
keywords:
  - Protocolo EElink TK121 S
  - Protocolo GPS EElink TK121 S
  - EElink TK121 S MoveLink
  - Compatibilidad TK121 S con Plaspy
  - Protocolo de comunicación TK121 S
  - Protocolo rastreador GPS Plaspy
  - Rastreador de vehículo MoveLink
  - Rastreo de flotas EElink
  - Integración protocolo TK121 S
  - Documentación tracker EElink
---

# EElink - Protocolo TK121‑S

Esta página describe el contexto público del protocolo para usar el rastreador EElink TK121‑S con Plaspy. Se centra en cómo el dispositivo reporta datos de ubicación y eventos a alto nivel y en cómo Plaspy procesa esa información para seguimiento en tiempo real y flujos de trabajo de flota, sin exponer detalles sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se configura para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página resalta el contexto general de comunicación más que comandos específicos de firmware.

## Descripción general del protocolo

El TK121‑S utiliza el protocolo MoveLink 1.9/2.0 para su reporte estándar y capacidades de configuración remota. En la práctica, ese protocolo define cómo el rastreador empaqueta la posición GPS y LBS, el estado de ACC (encendido), alarmas y telemetría básica para enviarla a una plataforma backend como Plaspy.

- Permite al rastreador transmitir posiciones GPS y LBS junto con arreglos AGPS para obtener fijaciones más rápidas.
- Reporta entradas y estados discretos como ACC (ignición), alertas por movimiento, alarmas de velocidad y eventos de geocerca para uso en alertas y reglas de Plaspy.
- Soporta vías de configuración y gestión remotas, de modo que los ajustes se puedan modificar desde una plataforma, aplicación o SMS sin intervención en sitio.
- Proporciona los datos principales que Plaspy necesita para mostrar en el mapa en vivo, reproducción de rutas, informes históricos y notificaciones de eventos.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de rastreadores en un único endpoint y puerto y detecta automáticamente el protocolo de reporte cuando llegan datos. Esto reduce los pasos de configuración para la mayoría de los usuarios: una vez que el TK121‑S apunta al endpoint de Plaspy con los ajustes de transporte correctos, normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto compartido de Plaspy para todos los dispositivos es 8888 y Plaspy utiliza el mismo puerto para cada rastreador compatible.
- Plaspy detecta el protocolo del rastreador automáticamente cuando el dispositivo envía sus primeros reportes al endpoint.
- En configuraciones normales usted apunta el TK121‑S a d.plaspy.com o a 54.85.159.138 y Plaspy se encarga del resto.
- Si el dispositivo dispone de múltiples transportes, elija el transporte que mejor se adapte a las condiciones de red y a las capacidades del firmware del equipo.

## Contexto de transporte y conexión

Las opciones de conexión y la selección del transporte afectan cómo el TK121‑S llega a Plaspy, pero no cambian la semántica general de reporte. Los dispositivos pueden configurarse para usar diferentes capas de transporte según la instalación y el entorno del operador móvil.

- El TK121‑S puede configurarse para usar UDP o TCP en el puerto 8888, según lo permita el dispositivo y las decisiones de configuración.
- Los dispositivos pueden apuntar a la dirección de reporte de Plaspy usando el nombre de dominio d.plaspy.com o la IP directa 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todo el tráfico entrante de dispositivos, por lo que no hay variación de puerto por dispositivo que gestionar.
- Use UDP cuando se prefiera menor sobrecarga y entrega más rápida, o TCP si se requiere transporte confiable y confirmación de conexión en la capa de transporte y el firmware del rastreador lo soporta.
- Asegúrese de que cualquier firewall de red o ajustes de APN permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- MoveLink 1.9/2.0 es la familia de protocolos indicada para el TK121‑S; las versiones de firmware pueden cambiar los conjuntos de mensajes soportados o las funciones opcionales.
- Las revisiones de hardware en rastreadores compactos pueden introducir diferencias menores en entradas disponibles, comportamiento de E/S o características de alimentación que afecten el reporte.
- Las opciones de configuración por parte del fabricante y los comandos por SMS o plataforma por defecto pueden variar entre revisiones de firmware; consulte la documentación de EElink para comandos exactos.
- La elección del transporte (UDP vs TCP) puede alterar las características de entrega y debe coincidir con lo que el firmware del dispositivo está diseñado para usar.
- Valide siempre un dispositivo de muestra con Plaspy en una prueba controlada antes de un despliegue a gran escala para confirmar que los eventos y la telemetría esperados llegan correctamente.
- Al integrar sensores adicionales o relés, confirme las asignaciones de pines y los tipos de entrada soportados para la unidad TK121‑S específica que tenga.

## Por qué es importante comprender el protocolo

Conocer cómo se comunica el TK121‑S ayuda a instaladores y administradores a poner equipos en línea más rápido, diagnosticar problemas de conectividad y asegurar telemetría confiable en producción.

- Simplifica la configuración inicial al asegurar que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 con el transporte correcto.
- Ayuda a resolver la falta de telemetría al acotar problemas a transporte de red, ajustes de firmware o configuración del dispositivo en lugar del parseo de la plataforma.
- Facilita el uso adecuado de funciones de alarma y geocercas al alinear umbrales y frecuencias de reporte en el equipo con las reglas de alertas de Plaspy.
- Reduce el riesgo de despliegue al identificar revisiones de firmware o hardware que requieran manejo especial o pasos de configuración actualizados.
- Permite una configuración remota predecible cuando la gestión remota MoveLink está habilitada y es compatible con el firmware desplegado.

## Por qué usar Plaspy con este protocolo

Usar el TK121‑S con Plaspy ofrece un camino directo hacia visibilidad vehicular, alertas configurables e informes históricos sin la complejidad de gestionar puertos por dispositivo. El reporte MoveLink del rastreador sobre ubicación, estado de ACC y eventos de alarma se integra de forma directa en los paneles y flujos automatizados de Plaspy, lo que lo hace práctico para operadores de flota que necesitan seguimiento confiable y de bajo overhead.

Si desea saber más sobre Plaspy y los flujos de trabajo soportados por dispositivo visite https://www.plaspy.com. Para conocer el comportamiento más reciente del firmware del equipo y la documentación detallada del protocolo, verifique la información específica del dispositivo en el sitio del fabricante https://www.eelink.com.cn/. El soporte de protocolos y las implementaciones de firmware pueden cambiar con el tiempo, por lo que consultar la documentación oficial de EElink le asegurará tener los detalles más actuales.
