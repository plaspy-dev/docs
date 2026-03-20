---
slug: /gotop/g07/protocol
id: g07-protocol
sidebar_label: Protocol
title: GOTOP - G07 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GOTOP G07 y cómo comunica con Plaspy para rastreo y alertas
keywords:
  - Protocolo GOTOP G07
  - Protocolo GPS GOTOP G07
  - Protocolo de comunicación GOTOP G07
  - Protocolo de rastreo GOTOP G07
  - Compatibilidad rastreador GOTOP con Plaspy
  - Rastreo de flotas GOTOP G07
  - Integración dispositivo GOTOP G07
  - Protocolo rastreadores Plaspy
  - Compatibilidad dispositivos Plaspy
  - Protocolo de seguimiento de vehículos y activos
---

# GOTOP - G07 Protocolo

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del GOTOP G07 cuando se usa con Plaspy. Explica cómo el G07 informa ubicación y telemetría a Plaspy y qué aspectos de la comunicación del dispositivo son relevantes al configurar, desplegar o solucionar problemas del rastreador en la plataforma Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo en el G07 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en los hechos públicos relevantes para el despliegue en lugar de entrar en detalles internos del firmware.

## Resumen del protocolo

El G07 se comunica mediante datos celulares para enviar posiciones, alarmas de evento y estado del dispositivo a un servidor backend. El protocolo que implementa empaqueta resultados GNSS, datos de reserva LBS y eventos de alarma para que Plaspy los ingiera para mapeo, alertas e historial. Este documento enfatiza el papel del protocolo en la integración confiable más que en el detalle de paquetes a bajo nivel.

- Permite que el dispositivo reporte posición GNSS, datos LBS de respaldo y telemetría de alarmas a Plaspy para seguimiento en tiempo real y reproducción histórica.
- Transporta identidad y estado del equipo para que Plaspy pueda asociar los informes entrantes con el registro de activo correcto.
- Entrega notificaciones de eventos como manipulación, movimiento, exceso de velocidad y batería baja para que Plaspy dispare alertas y flujos de trabajo.
- Ofrece reportes periódicos y por eventos para que dispositivos optimizados para ahorro de energía como el G07 equilibren la vida en standby con actualizaciones oportunas.

## Cómo Plaspy detecta el protocolo

Plaspy acepta informes entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar manualmente ajustes de protocolo dentro de Plaspy. Si un G07 está configurado para enviar informes al endpoint de Plaspy, la plataforma reconocerá y procesará los tipos de telemetría soportados de forma automática.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy para reportes es 54.85.159.138.
- Plaspy usa un único puerto común para las conexiones de dispositivos, lo que simplifica la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las conexiones entrantes, por lo que la selección manual de protocolo generalmente no es necesaria cuando el dispositivo apunta al endpoint de Plaspy.
- Asegúrese de que el dispositivo esté configurado para autenticarse o identificarse de acuerdo con la guía del fabricante para que Plaspy pueda mapear los datos entrantes al activo correspondiente.

## Transporte y contexto de conexión

El G07 puede configurarse para usar opciones estándar de transporte celular para llegar a Plaspy. Para la planificación del despliegue y la conectividad, tenga en cuenta las direcciones del endpoint y los modos de transporte que soporta el rastreador para que pueda configurar el dispositivo o el perfil de la SIM en consecuencia.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las elecciones de configuración locales.
- Los dispositivos comúnmente apuntan a d.plaspy.com o directamente a la IP de Plaspy 54.85.159.138 para el reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que agiliza el aprovisionamiento y reduce errores de configuración.
- Use el modo de transporte que mejor se ajuste a las limitaciones de su red y a las recomendaciones del firmware del dispositivo para una entrega confiable.
- Confirme los ajustes del operador móvil y del APN en la SIM para asegurar que el G07 pueda establecer conexiones salientes hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el G07 pueden cambiar qué campos de telemetría se reportan y cómo se codifican las alarmas; siempre verifique los campos esperados para su build de firmware.
- Las revisiones de hardware o variantes regionales pueden afectar las bandas compatibles, el comportamiento del transporte o las funciones periféricas como micrófono o sensores.
- Los comandos de configuración desde el lado del fabricante y los intervalos de reporte por defecto pueden diferir entre unidades o firmware; revise la configuración del equipo antes del despliegue.
- La selección de transporte UDP versus TCP puede influir en el comportamiento de entrega y el consumo de batería; elija según la cobertura y la guía del dispositivo.
- Para despliegues complejos, considere validar un pequeño conjunto de unidades en la red móvil objetivo antes de un despliegue a gran escala.
- Consulte la documentación del fabricante GOTOP para detalles específicos de firmware y cualquier característica opcional o conjunto de comandos.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del dispositivo ayuda a garantizar reportes confiables, alertas precisas y una solución de problemas eficiente cuando el G07 se utiliza con Plaspy. Tener claro qué envía el dispositivo y cómo Plaspy espera recibirlo reduce el tiempo de configuración y mejora la confianza operativa.

- Asegura una direccionamiento e identificación correctos del dispositivo para que los datos entrantes se asocien con el activo adecuado en Plaspy.
- Ayuda a ajustar los intervalos de reporte y umbrales de alarma para equilibrar vida útil de batería y la oportunidad de los eventos.
- Simplifica la resolución de problemas cuando faltan reportes al aclarar expectativas sobre transporte y endpoints.
- Permite decisiones informadas sobre el uso de UDP o TCP según el comportamiento de la red y las recomendaciones del firmware.
- Apoya la planificación de actualizaciones de firmware o reemplazos de dispositivos al destacar posibles diferencias en el protocolo.

## Por qué usar Plaspy con este protocolo

Combinar el GOTOP G07 con Plaspy ofrece visibilidad persistente de ubicación y monitoreo de eventos para activos que requieren largos tiempos en standby y una instalación robusta. Las opciones de batería interna del G07, la localización híbrida GNSS más LBS y su conjunto completo de alarmas lo hacen práctico para flotas de renta, rastreo de contenedores y supervisión de activos remotos cuando se integra en los flujos de mapeo y alertas de Plaspy.

Plaspy acepta reportes en d.plaspy.com o 54.85.159.138 en el puerto compartido usado por todos los dispositivos y detecta automáticamente los protocolos de rastreadores compatibles, lo que simplifica la incorporación de equipos y reduce la configuración manual. Para obtener más información sobre Plaspy y cómo se integra con dispositivos compatibles visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo y las notas de firmware en el sitio del fabricante https://www.gotop.cc/.
