---
slug: /neomatica/adm50/protocol
id: adm50-protocol
sidebar_label: Protocol
title: Neomatica - ADM50 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Neomatica ADM50 y cómo el rastreador comunica con Plaspy para seguimiento en tiempo real
keywords:
  - Protocolo Neomatica ADM50
  - Protocolo GPS ADM50
  - Protocolo de comunicación Neomatica ADM50
  - Protocolo de rastreo ADM50
  - Rastreador GPS Neomatica Plaspy
  - Compatibilidad ADM50 Plaspy
  - Protocolo para rastreadores personales
  - Integración de protocolo para rastreadores de activos
  - Protocolo de seguimiento para vehículos
  - Compatibilidad rastreador GNSS
---

# Neomatica - Protocolo ADM50

Esta página describe el contexto público del protocolo para usar el rastreador personal Neomatica ADM50 con Plaspy. Explica, en términos generales, cómo el ADM50 comunica posiciones y eventos a Plaspy para mapeo en vivo, alertas e informes históricos, sin entrar en detalles sensibles de implementación.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía se enfoca en el contexto de conexión observable y en consideraciones prácticas de compatibilidad para despliegues ADM50 en Plaspy.

## Resumen del protocolo

El protocolo de comunicación del ADM50 define cómo el dispositivo reporta coordenadas GNSS, eventos de movimiento y alarmas, estado de batería y el historial de posiciones almacenado a un servidor remoto como Plaspy. En la práctica, el protocolo permite que el rastreador establezca una sesión de datos con Plaspy y entregue la telemetría que la plataforma puede mostrar en mapas, fuentes y reglas de alerta.

- Permite al ADM50 enviar posiciones y notificaciones de eventos a Plaspy para seguimiento en tiempo real.
- Asociar la identidad del dispositivo y el estado básico con la telemetría reportada para que Plaspy asigne informes al activo correcto.
- Soporta intervalos de reporte configurables y envíos basados en eventos como pulsaciones del botón de pánico y alertas por movimiento.
- Transporta información auxiliar que Plaspy utiliza para monitoreo de batería, detección de movimiento y reconstrucción de rutas.
- Opera sobre transporte GSM GPRS para entregar datos a Plaspy cuando hay cobertura de red disponible.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y utiliza ese punto de entrada para identificar el protocolo del rastreador en uso. La mayoría de las unidades ADM50 listadas como compatibles con Plaspy solo necesitan apuntar al endpoint y puerto de Plaspy para comenzar a reportar; Plaspy detectará el protocolo automáticamente y procesará la telemetría entrante en consecuencia.

- Plaspy escucha en el endpoint compartido d.plaspy.com y acepta conexiones enviadas a 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y reduce pasos por equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint, por lo que en general no es necesario seleccionar manualmente el protocolo en la plataforma.
- Si un equipo está configurado para reportar al endpoint de Plaspy y usa un transporte compatible, normalmente empieza a enviar telemetría utilizable sin configuración adicional en la plataforma.
- Asegúrese de que los ajustes de reporte del dispositivo coincidan con el transporte y el endpoint elegidos para permitir que Plaspy detecte y gestione el protocolo del dispositivo.

## Transporte y contexto de conexión

El ADM50 envía telemetría por celular GPRS a un servidor externo y puede configurarse para usar transporte UDP o TCP según los ajustes del equipo y el firmware. Para la integración con Plaspy, apunte el ADM50 al endpoint de Plaspy y al puerto común para que el dispositivo establezca sesión y entregue informes.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- El puerto común de Plaspy para reporte de dispositivos es 8888 y Plaspy acepta tanto UDP como TCP en ese puerto cuando el firmware del dispositivo lo soporta.
- El ADM50 puede ajustarse para usar UDP o TCP en el puerto 8888 según la configuración y las preferencias entre fiabilidad y simplicidad.
- Usar el nombre de dominio compartido d.plaspy.com permite que los dispositivos sigan cambios de DNS sin reconfiguración si Plaspy actualiza endpoints.
- Confirme que el firmware del ADM50 permite seleccionar UDP o TCP y que el intervalo de reporte o los desencadenantes de eventos estén configurados conforme a sus necesidades de monitoreo.

## Notas sobre compatibilidad del protocolo

- Las diferencias entre versiones de firmware pueden cambiar funciones disponibles, campos de reporte y opciones de transporte. Verifique la versión de firmware al confirmar compatibilidad.
- Revisiones de hardware o el estado de descontinuación pueden afectar la disponibilidad de funciones específicas o métodos de configuración del ADM50.
- Parámetros de configuración del fabricante como APN, selección de transporte y campos del servidor de reporte deben establecerse correctamente para que Plaspy reciba la telemetría.
- Dado que el ADM50 soporta múltiples modos de operación, asegúrese de que el dispositivo esté en el modo correcto para su caso de uso y que la telemetría esperada se esté reportando.
- Las condiciones de red y la provisión de la tarjeta SIM pueden afectar la entrega de telemetría aun cuando los ajustes de protocolo sean correctos.
- Siempre valide el comportamiento esperado en una prueba controlada antes de desplegar múltiples unidades en producción.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del ADM50 y del contexto de conexión ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y mantener una operación consistente a largo plazo con Plaspy. Saber qué se espera que envíe el dispositivo y cómo llega a la plataforma reduce sorpresas durante la integración y al diagnosticar brechas de reporte.

- Confirma que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que la telemetría llegue.
- Ayuda a identificar si la selección de transporte o la configuración del APN son la causa de reportes faltantes o retrasados.
- Facilita interpretar diferencias de comportamiento del dispositivo derivadas de firmware o revisiones de hardware.
- Permite planificar compensaciones entre batería y frecuencia de reporte al configurar intervalos y modos de operación.
- Apoya la verificación efectiva de alarmas y eventos como pulsaciones del botón de pánico y alertas por movimiento.

## Por qué usar Plaspy con este protocolo

Usar el ADM50 con Plaspy ofrece una vía eficiente para proyectos de monitoreo personal y de activos que requieren un rastreador compacto, con larga vida en espera y reportes basados en eventos. Plaspy ingiere la telemetría del ADM50 para mapeo en tiempo real, alertas y reconstrucción histórica de rutas, lo que lo hace adecuado para casos de uso que van desde seguridad personal hasta protección de activos remotos.

Si desea conocer más sobre Plaspy y cómo la plataforma maneja la integración de dispositivos, visite https://www.plaspy.com para explorar características y opciones de despliegue. Para información más actualizada y específica del dispositivo sobre protocolo, firmware y disponibilidad del ADM50, consulte la documentación del fabricante en https://neomatica.com/ que sigue siendo la fuente autorizada sobre comportamiento del equipo y actualizaciones de firmware.
