---
slug: /topfly/solarguardx_110/protocol
id: solarguardx_110-protocol
sidebar_label: Protocol
title: TopFly - SolarGuardX 110 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar TopFly SolarGuardX 110 con Plaspy, con ajustes de conexión y consideraciones de compatibilidad
keywords:
  - Protocolo TopFly SolarGuardX 110
  - Protocolo GPS SolarGuardX 110
  - Comunicación del rastreador TopFly
  - Compatibilidad SolarGuardX 110 Plaspy
  - Guía de protocolo rastreador GPS
  - Protocolo de rastreo de activos TopFly
  - Protocolo rastreador GPS con energía solar
  - Conexión de dispositivo Plaspy
  - Protocolo de reporte del rastreador
  - Protocolo de seguimiento de flotas TopFly
---

# TopFly - SolarGuardX 110 Protocolo

Esta página documenta el contexto público del protocolo para usar el rastreador TopFly SolarGuardX 110 con Plaspy. Se enfoca en cómo el dispositivo comunica a alto nivel con los servidores de Plaspy y en lo que los integradores y responsables de flota deben saber para configurar el envío de datos y validar la conectividad, sin exponer detalles internos o sensibles del protocolo.

El SolarGuardX 110 es un candado GPS robusto con carga solar diseñado para seguridad y telemetría de activos a largo plazo en exteriores. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Consulte la documentación del fabricante cuando necesite detalles específicos de firmware.

## Resumen del protocolo

El protocolo usado por el SolarGuardX 110 permite que el rastreador se identifique ante un servidor, transmita posición y telemetría, y entregue alarmas y registros almacenados para subidas posteriores. A nivel de plataforma, Plaspy ingiere esos mensajes para ofrecer visualización, alertas e informes históricos sin que la mayoría de los usuarios tenga que seleccionar el protocolo manualmente.

- Permite que el dispositivo reporte posiciones GNSS y telemetría como estado de batería y eventos de sensores a un servicio backend.
- Transporta notificaciones de eventos para alertas antirrobo y operativas, incluyendo movimiento, corte de cuerda y acciones de bloqueo.
- Soporta registro en búfer para que los puntos almacenados se suban tras la recuperación de red y mantener un historial continuo.
- Permite comandos de gestión remota y disparadores de actualización de firmware vía transporte de red cuando la funcionalidad está soportada.
- Proporciona los datos transportables que Plaspy necesita para mostrar la ubicación, activar reglas y generar informes.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un punto de conexión compartido e identifica automáticamente los mensajes del rastreador, por lo que por lo general usted no necesita seleccionar un protocolo manualmente cuando el dispositivo está configurado para reportar a Plaspy. La configuración correcta del reporte al punto de conexión de Plaspy es el requisito principal para que la detección automática funcione.

- Plaspy escucha en un punto de conexión compartido para todos los dispositivos soportados en d.plaspy.com y en la dirección pública 54.85.159.138 usando el puerto 8888.
- La plataforma detecta automáticamente el protocolo de reporte del rastreador una vez que el dispositivo comienza a enviar datos al punto de conexión de Plaspy.
- En muchos casos, usted solo necesita configurar el dispositivo para apuntar al dominio o IP de Plaspy y seleccionar el transporte correcto para empezar a reportar.
- Si un dispositivo soporta múltiples transportes, elija el transporte coherente con su despliegue y con el soporte del operador móvil.
- Los registros de Plaspy y las herramientas de diagnóstico en servidor ayudan a confirmar la detección del protocolo y la recepción inicial de mensajes.

## Transporte y contexto de conexión

El SolarGuardX 110 puede usar diferentes transportes de red según el operador y el firmware. Al integrar con Plaspy debe configurar el dispositivo para reportar al punto de conexión de Plaspy usando un transporte soportado y verificar que las políticas de red permitan el tráfico saliente del dispositivo hacia el servidor de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del equipo y la configuración del operador.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección pública 54.85.159.138 para reportar.
- Plaspy utiliza el mismo puerto para todos los dispositivos, lo que simplifica la configuración y las reglas de firewall.
- Elija UDP para reportes de menor sobrecarga o TCP cuando se prefiera entrega de sesión fiable y el dispositivo lo soporte.
- Confirme que el APN del operador móvil y las reglas de firewall permiten conexiones desde el rastreador hacia el punto de conexión de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar intervalos de reporte, campos de telemetría disponibles y opciones de transporte; siempre confirme la versión de firmware al diagnosticar compatibilidad.
- Las revisiones de hardware a veces cambian capacidades GNSS o de sensores, lo que puede afectar los datos reportados a Plaspy.
- Los presets del fabricante o los servicios de aprovisionamiento pueden establecer por defecto distintos transportes o puntos de conexión; verifique la configuración del dispositivo antes del despliegue.
- Al cambiar tipos de transporte, revise la documentación del dispositivo para entender el comportamiento de sesiones retenidas y del búfer.
- Algunas funciones avanzadas como reenvío de sensores BLE, desbloqueo remoto o FOTA dependen del firmware y del soporte del operador y pueden requerir configuración adicional.
- Valide cualquier ajuste opcional de cifrado o autenticación con la guía del fabricante y la documentación de Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el SolarGuardX 110 ayuda a acelerar la puesta en marcha, evitar problemas comunes de conectividad y mantener la fiabilidad a largo plazo en un despliegue con Plaspy. Tener claro el funcionamiento de los transportes, el buffering y el reporte de eventos reduce tiempos de inactividad y facilita la resolución de problemas.

- Acelera el despliegue inicial asegurando la configuración correcta del punto de conexión y del transporte hacia Plaspy.
- Ayuda a identificar problemas de conectividad como bloqueos del operador, mala configuración del APN o restricciones de firewall.
- Informa sobre las expectativas de subida de datos en búfer y cómo aparecerán los puntos históricos en Plaspy tras períodos sin conexión.
- Apoya la planificación de compromisos entre consumo de energía y frecuencia de reporte al configurar actualizaciones de alta frecuencia frente a vida útil de batería.
- Permite coordinar eficazmente con TopFly para actualizaciones de firmware y habilitación de funciones que impacten la integración con Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el SolarGuardX 110 junto con Plaspy ofrece a las organizaciones visibilidad continua de activos remotos con un rastreador de baja mantención y carga solar optimizado para entornos hostiles. Plaspy ingiere posición y telemetría del dispositivo para ofrecer mapeo, alertas e informes históricos que soportan la seguridad de contenedores, gestión de semirremolques y otros flujos de trabajo de protección de activos.

Para saber más sobre Plaspy y cómo gestiona las comunicaciones y los reportes de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación de dispositivos pueden cambiar con el tiempo, por lo que verifique la información más reciente del protocolo y del firmware específico del SolarGuardX 110 en el sitio del fabricante en https://www.topflytech.com/.
