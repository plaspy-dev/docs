---
slug: /thingsys/ts_h1/protocol
id: ts_h1-protocol
sidebar_label: Protocol
title: ThingSys - TS-H1 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador ThingSys TS-H1, compatibilidad con Plaspy y aspectos básicos de conexión
keywords:
  - Protocolo ThingSys TS-H1
  - Protocolo GPS TS-H1
  - ThingSys TS-H1 Plaspy
  - Protocolo de rastreo TS-H1
  - Protocolo rastreador GPS ThingSys
  - Protocolo de comunicación TS-H1
  - Compatibilidad rastreadores Plaspy
  - Integración rastreador GPS Plaspy
  - Rastreo vehicular ThingSys TS-H1
  - Compatibilidad ThingSys TS-H1
---

# ThingSys - Protocolo TS-H1

Esta página describe el contexto público del protocolo para usar el rastreador GPS ThingSys TS-H1 con Plaspy. Explica cómo se comunica el equipo en términos generales, qué papel cumple el protocolo de reporte y qué ajustes de conexión son necesarios para enviar datos a Plaspy. El objetivo es ofrecer información práctica y no sensible que facilite la configuración e integración, a la vez que se recomienda verificar la documentación del fabricante.

Plaspy utiliza un enfoque de endpoint compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el TS-H1 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se centra en el contexto de conexión y compatibilidad, no en detalles internos ni en protocolos privados.

## Resumen del protocolo

El protocolo del TS-H1 permite al dispositivo enviar al servidor posicionamiento, estado y alertas. Define cómo el rastreador se identifica, reporta ubicaciones o datos de respaldo por LBS y transmite señales de alerta como manipulación o batería baja para que el backend las procese.

- Transporta mensajes de GPS, LBS y estado del dispositivo para que Plaspy los mapee y almacene como eventos.
- Incluye identificadores y datos de sesión que permiten a Plaspy asociar los mensajes entrantes con el registro correcto del equipo.
- Soporta el envío de posiciones y alertas que activan enlaces de mapeo y notificaciones en Plaspy.
- Habilita funciones opcionales de control remoto y mantenimiento cuando el firmware del fabricante expone esas capacidades.
- Proporciona una cadencia de reporte predecible que ayuda a Plaspy a reconstruir la historia de movimiento y estado.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para recibir reportes de muchos modelos de rastreadores e identificar automáticamente el protocolo del dispositivo al llegar los mensajes al endpoint compartido. En la mayoría de los casos, un TS-H1 configurado para reportar a Plaspy será reconocido sin necesidad de seleccionar el protocolo manualmente.

- Plaspy escucha en un único endpoint y puerto compartido para todos los rastreadores soportados.
- Cuando un TS-H1 correctamente configurado reporta a Plaspy, el servidor inspecciona el reporte entrante y lo mapea al registro de dispositivo correspondiente.
- Usualmente usted no necesita elegir un protocolo dentro de Plaspy si el equipo apunta correctamente al endpoint de Plaspy.
- La detección automática cubre variaciones comunes en el comportamiento de reporte documentado públicamente; los casos excepcionales pueden requerir revisar ajustes del equipo o especificaciones de firmware.
- Si la detección falla, verificar la dirección de reporte del dispositivo y el tipo de transporte es el primer paso de solución de problemas.

## Transporte y contexto de conexión

El TS-H1 puede configurarse para enviar reportes a Plaspy usando UDP o TCP, según el soporte del equipo y el comportamiento deseado para la entrega de mensajes. Plaspy acepta reportes en un único servidor y puerto compartido, por lo que la configuración del dispositivo es sencilla.

- Los equipos pueden configurarse para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- El TS-H1 puede ajustarse para usar UDP o TCP en el puerto 8888, según la configuración del equipo y las condiciones de red.
- Elija UDP para reportes con menor overhead o TCP cuando se prefiera entrega confiable y gestión de sesión, de acuerdo con las capacidades del dispositivo.
- Asegúrese de que la SIM y la configuración del operador en el TS-H1 permitan datos GPRS hacia el endpoint configurado para que los mensajes lleguen a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato o la frecuencia de los reportes del TS-H1. Valide la compatibilidad tras actualizaciones de firmware.
- Las variantes de hardware o diferencias regionales del modelo pueden modificar los transportes soportados o características opcionales como BDS o GNSS asistido.
- Los ajustes de fábrica del fabricante pueden apuntar a un endpoint regional o en la nube del proveedor; actualizar el APN y la dirección de reporte del equipo suele ser necesario para apuntar a Plaspy.
- La selección entre UDP y TCP puede afectar las características de entrega y debe coincidir con la configuración del equipo.
- El comportamiento y la precisión del fallback LBS varían en áreas con visibilidad limitada de satélites; Plaspy aceptará tanto reportes GPS como LBS según se entreguen.
- Siempre contraste el comportamiento del dispositivo con la documentación de ThingSys para la unidad y firmware específicos que usted esté usando.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TS-H1 ayuda a garantizar reportes confiables, un historial de ubicaciones preciso y una resolución más rápida de problemas cuando un equipo no funciona como se espera. Saber cómo los mensajes llegan a Plaspy y qué puede variar entre firmware o versiones de hardware reduce fricción en la puesta en marcha y mejora la confiabilidad a largo plazo.

- Confirma que el equipo apunta al endpoint y transporte correctos de Plaspy para una entrega exitosa.
- Ayuda a interpretar la calidad de la ubicación y el comportamiento de respaldo cuando GPS no está disponible y se usa LBS.
- Facilita el diagnóstico de problemas como reportes faltantes, mensajes duplicados o reinicios inesperados del dispositivo.
- Orienta las decisiones sobre actualizaciones de firmware, mantenimiento remoto y cuándo consultar al soporte del fabricante.
- Mejora la consistencia operativa al desplegar múltiples unidades TS-H1 en redes diversas.

## Por qué usar Plaspy con este protocolo

Usar el ThingSys TS-H1 con Plaspy ofrece a las organizaciones una vía clara para ingerir mensajes de ubicación, alertas y estado del dispositivo en una plataforma unificada de gestión de flotas y rastreo. Plaspy acepta el flujo de reportes del TS-H1 y entrega funcionalidades de mapeo, historial de eventos y alertas que convierten reportes brutos en información operativa.

Plaspy simplifica la configuración inicial con un endpoint y puerto compartidos para que muchos dispositivos puedan apuntar al mismo servidor. Para conocer más sobre cómo Plaspy soporta despliegues multi modelo y revisar las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware y guía de implementación, verifique siempre el sitio del fabricante https://www.thingsys.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
