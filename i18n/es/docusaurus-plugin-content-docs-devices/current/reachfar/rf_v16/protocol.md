---
slug: /reachfar/rf_v16/protocol
id: rf_v16-protocol
sidebar_label: Protocol
title: Reachfar - RF-V16 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el localizador Reachfar RF-V16 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo Reachfar RF-V16
  - protocolo GPS Reachfar RF-V16
  - protocolo Reachfar RF-V16 para Plaspy
  - protocolo de comunicación Reachfar RF-V16
  - protocolo de rastreo Reachfar RF-V16
  - compatibilidad tracker Reachfar con Plaspy
  - protocolo tracker GPS RF V16
  - integración RF V16 con Plaspy
  - protocolo localizador SOS personal
  - tracker personal Reachfar con Plaspy
---

# Reachfar - Protocolo RF-V16

Esta página documenta el contexto público del protocolo para usar el localizador GPS SOS Reachfar RF-V16 con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué ajustes de conexión utiliza Plaspy y qué verificar al configurar un RF-V16 para que informe a la plataforma. La orientación aquí está dirigida a usuarios técnicos e integradores que requieren entender el papel de comunicación del dispositivo sin exponer detalles sensibles de implementación.

Plaspy usa ajustes de conexión compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo cuando los dispositivos están configurados para reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; por eso esta página se centra en contexto público práctico y puntos de verificación de configuración más que en formatos de paquete de bajo nivel.

## Resumen del protocolo

El protocolo de reporte del RF-V16 permite que el dispositivo envíe posiciones GPS, alarmas SOS y actualizaciones de estado desde el campo a Plaspy para seguimiento en tiempo real y alertas. A grandes rasgos, el protocolo transporta posiciones GPS, indicadores de eventos y telemetría básica a través del canal de datos móviles (con SMS usado como respaldo o para alertas cuando el equipo lo soporta).

- Permite que el rastreador se identifique y asocie los reportes con un registro de dispositivo en Plaspy.
- Transmite fijaciones de posición GPS y actualizaciones de ubicación con sello de tiempo para seguimiento en vivo y reproducción de trazas.
- Entrega alarmas SOS, batería baja y notificaciones de cambio de SIM para que Plaspy pueda disparar alertas.
- Transporta telemetría y campos de estado sencillos que Plaspy utiliza para mostrar salud del dispositivo y contexto de eventos.
- Soporta reporte por canal de datos móviles y permite respaldos por SMS para alertas críticas cuando el dispositivo lo admite.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes en un único endpoint compartido y determina automáticamente el protocolo entrante del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente en la plataforma. Unidades RF-V16 configuradas correctamente y apuntando al endpoint de Plaspy serán detectadas y procesadas siempre que transmitan los elementos públicos de reporte esperados.

- El dominio del servidor de Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y escucha en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de la red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del dispositivo y la ingestión en la plataforma.
- Cuando un RF-V16 apunta al endpoint de Plaspy y el operador móvil permite la conexión, Plaspy detecta automáticamente el protocolo del rastreador y asocia los reportes entrantes con el dispositivo correcto.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el RF-V16 establece transporte hacia Plaspy más que el encuadre de protocolo de bajo nivel. El RF-V16 usa GPRS/TCP IP para el reporte principal y puede recurrir a SMS para notificaciones de emergencia según la configuración y capacidades de firmware.

- El dispositivo puede configurarse para enviar datos a Plaspy usando UDP o TCP en el puerto 8888.
- Los equipos pueden apuntar a d.plaspy.com o a la IP numérica 54.85.159.138 para alcanzar los servidores de Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, garantizando rutas de red y requisitos de firewall consistentes.
- Asegúrese de que el APN y la configuración de datos móviles del dispositivo permitan conexiones salientes al puerto 8888 en el transporte elegido.
- Cuando el RF-V16 soporta respaldo por SMS, las alarmas de emergencia pueden entregarse por SMS además del reporte por GPRS.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los paquetes, los tiempos y qué campos de evento se envían; verifique siempre las notas de la versión del firmware del RF-V16 ante cambios de protocolo.
- Las revisiones de hardware o las variantes regionales del RF-V16 pueden usar ajustes de servidor diferentes o valores predeterminados distintos; confirme la configuración con la que vino la unidad.
- Algunas unidades RF-V16 emplean SMS como respaldo para alarmas prioritarias; confirme si las alertas por SMS están habilitadas y cómo las formatea el fabricante.
- La selección de transporte (TCP vs UDP) puede verse afectada por el comportamiento de la red móvil local y la configuración del equipo; elija el transporte que el dispositivo soporte y pruebe la conectividad.
- Valide el APN, la asignación de datos de la SIM y el registro en la red antes de confiar en el reporte en vivo hacia Plaspy.
- Siempre contraste los valores predeterminados del dispositivo con la documentación del fabricante al cambiar servidor, puerto o valores de APN.

## Por qué es importante entender el protocolo

Comprender cómo el RF-V16 se comunica con Plaspy reduce la fricción en la instalación, ayuda a solucionar problemas de conectividad y mejora la confiabilidad a largo plazo de las alarmas y los reportes de ubicación. Conocer los aspectos públicos del protocolo y el transporte empleado permite a los administradores tomar decisiones informadas sobre SIMs, ajustes de APN y procedimientos de prueba.

- Garantiza ajustes correctos de servidor y puerto para que las actualizaciones de posición y mensajes SOS lleguen de forma fiable a Plaspy.
- Ayuda a diagnosticar problemas comunes como ausencia de reportes, alertas SOS faltantes o actualizaciones de posición intermitentes.
- Orienta la selección entre TCP y UDP según el soporte del equipo y el comportamiento de la red móvil.
- Facilita la validación del respaldo por SMS y de las funciones de llamada cuando la conectividad de datos no está disponible.
- Apoya la planificación de actualizaciones de firmware o despliegues de hardware que podrían cambiar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el Reachfar RF-V16 con Plaspy ofrece una ruta ligera y confiable para seguridad personal y rastreo de personal a pie. La ingestión unificada de Plaspy y la detección automática de protocolo reducen los pasos de configuración, de modo que las unidades RF-V16 pueden apuntar a un único endpoint y comenzar a reportar sin seleccionar manualmente el protocolo en la plataforma. Esta combinación soporta ubicación en tiempo real, gestión de SOS y telemetría simple, valiosa para cuidadores, trabajadores que laboran solos y equipos pequeños.

Si desea saber más sobre Plaspy y cómo ingiere reportes de dispositivos, visite https://www.plaspy.com. Para detalles específicos más recientes sobre el protocolo del dispositivo, comportamiento de firmware y orientación del fabricante para el RF-V16, verifique la información actual en el sitio oficial de Reachfar https://www.reachfargps.com/ porque el soporte de protocolo y las implementaciones de firmware pueden cambiar con el tiempo.
