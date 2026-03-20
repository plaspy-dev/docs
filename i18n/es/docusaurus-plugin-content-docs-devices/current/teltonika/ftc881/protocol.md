---
slug: /teltonika/ftc881/protocol
id: ftc881-protocol
sidebar_label: Protocol
title: Teltonika - FTC881 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para la comunicación del Teltonika FTC881 con Plaspy, incluidos ajustes de conexión y compatibilidad
keywords:
  - Protocolo Teltonika FTC881
  - Rastreador GPS FTC881
  - Compatibilidad FTC881 Plaspy
  - Protocolo GPS Teltonika
  - Protocolo de comunicación FTC881
  - Rastreo de vehículos FTC881
  - Rastreo de flotas Teltonika FTC881
  - Telemetría FTC881
  - Integración Teltonika FTC881
  - Protocolo de rastreo FTC881
---

# Teltonika - FTC881 Protocolo

Esta página explica el contexto público del protocolo para usar el rastreador Teltonika FTC881 con Plaspy. Se centra en cómo el dispositivo se comunica con los endpoints de Plaspy y en el papel que tiene el protocolo de reporte del rastreador para habilitar ubicación en tiempo real, telemetría y reporte de eventos en la plataforma. La información está pensada para ingenieros de flota e integradores que necesiten entender el contexto de comunicación sin exponer detalles privados de implementación.

Plaspy acepta conexiones de los rastreadores compatibles mediante un endpoint y configuración de puerto compartidos, detectando automáticamente el protocolo del dispositivo cuando este reporta a la plataforma. El comportamiento exacto del protocolo y los campos disponibles en los mensajes pueden variar según la versión de firmware del FTC881, la revisión de hardware y la implementación de Teltonika, por lo que el comportamiento en campo puede diferir ligeramente de las descripciones generales aquí.

## Resumen del protocolo

El protocolo utilizado por el FTC881 define cómo se empaquetan y envían al servidor backend (como Plaspy) las posiciones GNSS, la telemetría y los datos de eventos. En la práctica, este protocolo permite que el rastreador se identifique, reporte ubicación y estado, y participe en flujos de gestión remota cuando está configurado para un endpoint de Plaspy.

- Permite la transmisión de posiciones GNSS y telemetría del FTC881 hacia un servicio backend.
- Permite que el dispositivo se identifique y envíe metadatos que Plaspy puede usar para mapear el dispositivo.
- Transporta señales de eventos y estados de entradas/salidas para flujos de flota como detección de encendido y alertas por movimiento.
- Soporta flujos de actualización remota y configuración cuando se utiliza junto con las herramientas de gestión remota de Teltonika y el reporte hacia Plaspy.
- Proporciona la base de datos que Plaspy ingiere para mapas en vivo, alertas y reportes históricos.

## Cómo Plaspy detecta el protocolo

Plaspy usa un endpoint de servidor unificado y un único puerto para todos los rastreadores compatibles, detectando automáticamente el protocolo del dispositivo cuando el rastreador reporta a ese endpoint. En la mayoría de los casos, el usuario o integrador del rastreador solo necesita apuntar el FTC881 al endpoint de Plaspy con la configuración de transporte correcta y la plataforma se encarga de la identificación del protocolo.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138 para conexiones entrantes de rastreadores.
- La plataforma acepta conexiones de rastreadores en el puerto 8888 y usa ese puerto para todos los dispositivos soportados.
- Los dispositivos configurados para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 serán reconocidos por Plaspy para la detección automática del protocolo.
- Plaspy puede aceptar tráfico UDP o TCP según la configuración del rastreador y las condiciones de la red.
- Cuando el FTC881 está configurado para reportar al endpoint de Plaspy, normalmente no es necesaria la selección manual del protocolo dentro de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión y transporte afectan cómo el FTC881 alcanza el backend de Plaspy, pero no cambian el rol público del protocolo en sí. El rastreador puede configurarse para usar distintos transportes y endpoints según las necesidades del despliegue y las herramientas de configuración de Teltonika.

- El FTC881 puede configurarse para usar UDP o TCP al enviar reportes a Plaspy, según el soporte del dispositivo y las preferencias del sitio.
- Plaspy acepta tráfico dirigido a d.plaspy.com o directamente a 54.85.159.138.
- Todos los dispositivos de Plaspy reportan al mismo número de puerto, lo que simplifica la configuración en una flota mixta.
- Consideraciones a nivel de red como NAT del operador, cortafuegos y políticas de datos móviles pueden afectar el comportamiento del transporte y deben verificarse durante el despliegue.
- Confirme el APN y las configuraciones de conexión saliente del dispositivo en las herramientas de configuración de Teltonika para asegurar que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden agregar, cambiar o desaprobar campos de reporte y la cadencia de mensajes; verifique las notas de la versión de firmware para el comportamiento específico del dispositivo.
- Las revisiones de hardware y accesorios opcionales pueden alterar las entradas, salidas o telemetría disponibles que el protocolo reporta.
- Las herramientas de configuración de Teltonika, como FOTA WEB y TCT, pueden cambiar cómo se comunica el dispositivo y qué eventos se reportan.
- La elección de transporte entre UDP y TCP puede afectar las características de entrega, pero Plaspy soporta ambos en el puerto compartido.
- Confirme que el FTC881 esté configurado para reportar a d.plaspy.com o a 54.85.159.138 y que use el puerto 8888 para la ingestión en Plaspy.
- Valide siempre el comportamiento final en una prueba controlada antes de un despliegue a gran escala para asegurar que la telemetría y los eventos se mapeen correctamente en Plaspy.

## Por qué es importante entender el protocolo

Entender el protocolo de reporte del rastreador es práctico para la configuración exitosa, la resolución continua de problemas y el mantenimiento de un comportamiento confiable del dispositivo en campo. Conocer el contexto de comunicación ayuda a integrar las funciones de hardware en los flujos de trabajo de Plaspy y reduce el tiempo dedicado a diagnosticar problemas de conexión o mapeo de datos.

- Acelera la configuración inicial al confirmar el endpoint y las opciones de transporte correctas.
- Ayuda a resolver reportes perdidos o retrasados al aislar problemas de transporte, operador o configuración del dispositivo.
- Asegura el mapeo correcto de entradas, salidas y telemetría del dispositivo en los paneles y alertas de Plaspy.
- Mejora la preparación ante actualizaciones de firmware que puedan cambiar el comportamiento de los mensajes o los campos disponibles.
- Facilita la planificación de despliegues a escala de flota al clarificar requisitos de red y configuración.

## Por qué usar Plaspy con este protocolo

Usar el FTC881 con Plaspy ofrece a las organizaciones una vía directa para recopilar telemetría y datos de ubicación de dispositivos robustos y de bajo consumo, ideales para monitoreo de flotas y activos. Los modos de bajo consumo del FTC881, su buena recepción GNSS y su encapsulado resistente lo hacen adecuado para maquinaria pesada, movilidad eléctrica y flotas mixtas, mientras que Plaspy proporciona un backend centralizado para ingerir, normalizar y presentar esos datos al equipo de operaciones.

Para saber más sobre cómo Plaspy maneja conexiones de dispositivos y flujos de trabajo de flota, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guías de implementación más recientes, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
