---
slug: /xexun/x02/protocol
id: x02-protocol
sidebar_label: Protocol
title: Xexun - X02 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Xexun X02 y cómo se comunica con Plaspy para rastreo y telemetría en tiempo real confiables
keywords:
  - protocolo Xexun X02
  - protocolo GPS Xexun X02
  - protocolo de comunicación Xexun X02
  - protocolo de rastreo Xexun X02
  - Xexun X02 Plaspy
  - protocolo rastreador Xexun
  - protocolo de rastreador GPS Plaspy
  - rastreo de vehículos Xexun
  - gestión de flotas Xexun
  - compatibilidad protocolo X02
---

# Xexun - Protocolo X02

Esta página describe el contexto público del protocolo para usar el rastreador recargable Xexun X02 (GPS/Beidou) con la plataforma Plaspy. Se centra en cómo el dispositivo informa posición y telemetría a Plaspy y en qué esperar de la capa de comunicación, sin exponer detalles privados de implementación. El X02 combina posicionamiento GNSS híbrido (GPS y Beidou), asistencia por Wi‑Fi y LBS, enlace celular multi‑operador y telemetría a bordo para ofrecer rastreo en tiempo real y reproducción histórica en Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa a la plataforma. El comportamiento exacto del protocolo y el soporte de comandos pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece un contexto práctico de alto nivel para integración y resolución de problemas, en lugar de detalles de firmware del dispositivo.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo por el cual el X02 entrega coordenadas GNSS, soluciones asistidas por la red y telemetría del dispositivo a Plaspy para su procesamiento y visualización. A nivel público, la función del protocolo es garantizar la entrega fiable de posición, estado y alarmas para que Plaspy pueda mostrar vistas en tiempo real y registros históricos precisos.

- Permite al X02 transmitir actualizaciones periódicas de posición y alarmas por eventos a Plaspy para rastreo en vivo y reproducción histórica.
- Comunica la identidad y el estado del dispositivo para que Plaspy asocie los datos entrantes con el activo o vehículo correcto.
- Transporta telemetría como nivel de batería, alertas de manipulación y calidad de señal para respaldar alertas y flujos de trabajo en la plataforma.
- Soporta almacenamiento en búfer local en el dispositivo y retransmisión cuando se restaura la conectividad, preservando los datos históricos.
- Funciona sobre transporte IP estándar, de modo que el X02 puede alcanzar Plaspy desde un enlace celular sin túneles especiales ni acceso de red propietario.

## Cómo Plaspy detecta el protocolo

Plaspy ofrece un único endpoint para datos de dispositivos e incluye detección automática de protocolo para simplificar la incorporación. Cuando el X02 está configurado para reportar a Plaspy, la plataforma usa la conexión entrante para determinar el parser y el enrutamiento adecuados, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo en Plaspy.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint de la plataforma.
- Debido a que la plataforma utiliza un endpoint compartido y lógica de detección, normalmente no es necesario elegir un protocolo dentro de Plaspy si el dispositivo está configurado correctamente.
- Una identidad de dispositivo correcta (IMEI o ID del equipo) y intervalos de reporte consistentes ayudan a que Plaspy asocie los datos con el registro del dispositivo adecuado.
- Si hay problemas de conexión o mapeo de datos, las pruebas de diagnóstico estándar, como verificar el endpoint y los ajustes de transporte, son los primeros pasos recomendados para la resolución.

## Transporte y contexto de conexión

El X02 puede configurarse para usar transporte IP estándar sobre la red celular para alcanzar Plaspy. Los detalles de conexión son intencionalmente sencillos para que dispositivos de distintos fabricantes puedan reportar al mismo endpoint de Plaspy sin cambios de puerto por dispositivo.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para ingestión de datos.
- Use el modo de transporte que soporte el firmware del X02 y su red celular; tanto UDP como TCP son habituales para el reporte de rastreadores.
- Asegúrese de que el dispositivo pueda establecer conexiones salientes por celular hacia el endpoint de Plaspy y de que los firewalls de red permitan el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción pueden cambiar cómo un rastreador formatea o secuencia los reportes; valide las notas de la versión de firmware cuando sea posible.
- Las revisiones de hardware pueden afectar sensores disponibles o canales de telemetría incluso cuando el protocolo base de rastreo sea similar.
- Variaciones del fabricante en ajustes predeterminados pueden influir en si el dispositivo usa UDP o TCP para reportar a Plaspy.
- El comportamiento del operador de red y el perfil de la SIM pueden afectar la conectividad y deben probarse en la región objetivo de despliegue.
- Confirme los procedimientos de configuración del dispositivo con la documentación del fabricante para asegurar que el X02 esté configurado para reportar a d.plaspy.com o a la IP del servidor Plaspy.
- Pruebe firmware o revisiones de hardware nuevas en un entorno controlado antes de un despliegue masivo para evitar comportamientos inesperados.

## Por qué es importante conocer el protocolo

Entender cómo el X02 se comunica con Plaspy ayuda a operadores de sitio e integradores a configurar los dispositivos correctamente, responder a alertas y mantener un rastreo confiable en el tiempo. Un conocimiento práctico de la capa de protocolo reduce el tiempo dedicado a resolver problemas y contribuye a garantizar datos consistentes en la plataforma Plaspy.

- Permite validar el reporte del dispositivo durante la configuración inicial y facilita la identificación rápida de endpoints o ajustes de transporte mal configurados.
- Mejora la resolución de problemas por conectividad intermitente al centrar la investigación en transporte, APN e intervalos de reporte del dispositivo.
- Facilita la interpretación de alertas de la plataforma como manipulación, batería baja o reportes perdidos relacionándolas con la telemetría del dispositivo.
- Ayuda a planificar actualizaciones de firmware y despliegues de hardware al anticipar cómo los cambios podrían afectar el comportamiento de reporte.
- Promueve la integridad de datos asegurando que los dispositivos estén configurados para almacenar en búfer y retransmitir eventos en zonas sin cobertura.

## Por qué usar Plaspy con este protocolo

Usar el Xexun X02 con Plaspy ofrece a las organizaciones una forma lista para usar de capturar datos de ubicación y telemetría de múltiples fuentes para gestión de flotas, seguridad de activos y supervisión operativa. El GNSS híbrido del X02, la asistencia por Wi‑Fi y LBS y la telemetría robusta alimentan Plaspy para habilitar rastreo en tiempo real, alertas por geocerca, reproducción histórica y notificaciones automatizadas sin requerir endpoints de red personalizados.

Para saber más sobre cómo Plaspy soporta rastreadores como el X02 y para revisar las capacidades de la plataforma, visite https://www.plaspy.com. Protocol support and firmware behavior can evolve, so please verify the latest device specific protocol details and firmware notes on the manufacturer site at https://www.xexun.com/.
