---
slug: /aplicom/a9_ipex/protocol
id: a9_ipex-protocol
sidebar_label: Protocol
title: Aplicom - A9 IPEX Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar el rastreador Aplicom A9 IPEX con el servidor Plaspy d.plaspy.com en el puerto 8888
keywords:
  - protocolo Aplicom A9 IPEX
  - protocolo GPS Aplicom A9 IPEX
  - protocolo Aplicom A9 IPEX para Plaspy
  - protocolo de comunicación Aplicom A9 IPEX
  - protocolo de rastreo Aplicom A9 IPEX
  - protocolo GPS Aplicom
  - protocolo de dispositivo Plaspy
  - protocolo de seguimiento de flotas
  - rastreo vehicular Aplicom
  - compatibilidad A9 IPEX con Plaspy
---

# Aplicom - Protocolo A9 IPEX

Esta página explica el contexto público del protocolo para usar el rastreador Aplicom A9 IPEX con Plaspy. Se centra en cómo el equipo se comunica con Plaspy a alto nivel y en los aspectos del reporte y la conectividad del GPS que son relevantes al integrar esta unidad robusta, con clasificación IP67, en un servicio de back-end como Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene un enfoque público y agnóstico respecto a la implementación, destacando puntos prácticos de integración.

## Resumen del protocolo

El protocolo de comunicación del A9 IPEX define cómo el rastreador se identifica, envía posiciones y datos de sensores, y transmite eventos útiles a un servicio de back-end. Para integrarse con Plaspy, el protocolo debe permitir que el dispositivo envíe ubicación, movimiento y datos auxiliares como lecturas de CAN‑bus y seriales, de modo que Plaspy pueda mostrar telemetría y alertas útiles.

- Permite la identificación del dispositivo y el manejo de sesiones para que el servidor asocie los datos con un rastreador concreto.
- Transporta fijaciones de posición GPS/GLONASS y, cuando estén disponibles, detalles de posicionamiento asistido por A‑GPS y Cell ID.
- Entrega datos de sensores y del vehículo, incluidos eventos del acelerómetro, valores del sistema CAN y lecturas RS232 para monitoreo de refrigerados.
- Comunica eventos de geocercas y notificaciones del estado de movimiento para alertas operativas e informes.
- Soporta tanto reportes en tiempo real como actualizaciones periódicas aptas para visibilidad de flota y seguimiento histórico.

## Detección del protocolo por Plaspy

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartido para todos los rastreadores soportados y detecta automáticamente el protocolo una vez que llega la información. En la mayoría de los casos, un A9 IPEX correctamente configurado para reportar a Plaspy será reconocido sin que el usuario tenga que seleccionar manualmente el protocolo dentro de Plaspy.

- El dominio público del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com.
- La IP pública del servidor de Plaspy es 54.85.159.138 y utiliza el puerto 8888 para datos de rastreo.
- Plaspy usa el mismo puerto para todos los dispositivos, lo que simplifica la configuración de los equipos y la gestión de endpoints.
- Los dispositivos que reportan a Plaspy normalmente pueden mantenerse en su modo de reporte por defecto si están apuntando al endpoint de Plaspy.
- La detección automática reduce los pasos manuales durante la configuración inicial cuando el dispositivo está correctamente dirigido al endpoint de Plaspy.

## Transporte y contexto de conexión

El A9 IPEX puede configurarse para usar UDP o TCP según el soporte del equipo y la configuración elegida. Al integrar con Plaspy, mantenga consistentes los ajustes de transporte y endpoint para que el servidor reciba y procese la telemetría de forma fiable.

- El rastreador puede configurarse para reportar a d.plaspy.com o a la dirección numérica del servidor 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos y tipos de transporte soportados.
- Los equipos pueden establecerse para usar UDP o TCP en el puerto 8888 según la configuración de la unidad y las restricciones de la red.
- El uso de un endpoint y puerto consistentes simplifica la configuración de firewalls y NAT para flotas vehiculares.
- La fiabilidad de la red y la elección del transporte (UDP vs TCP) pueden afectar las características de entrega, pero no cambian el endpoint público de integración.

## Notas sobre compatibilidad del protocolo

- El A9 IPEX se describe como compatible con Plaspy, pero su comportamiento puede variar con nuevas versiones de firmware y distintas revisiones de hardware.
- Las actualizaciones de firmware del fabricante pueden modificar campos disponibles, nombres de eventos o características opcionales; valide contra la documentación actual del dispositivo.
- La elección de transporte (UDP vs TCP) debe coincidir con la configuración de la unidad y los requisitos de cualquier elemento intermedio en la red.
- Al integrar fuentes de datos seriales o CAN, confirme los canales de datos configurados en la unidad y los intervalos de reporte.
- Las formas de las geocercas y la manera de reportar eventos pueden diferir según el firmware; verifique las capacidades exactas de geocerca que planea utilizar.
- Siempre contraste los resultados de la detección automática de Plaspy con la identidad del dispositivo y la telemetría tras la puesta en marcha inicial.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo del rastreador facilita una configuración más fluida, telemetría útil y una operación fiable a lo largo del tiempo. Saber qué enviará el equipo y cómo Plaspy lo recibirá reduce el tiempo de puesta en marcha y mejora los resultados al resolver problemas.

- Ayuda a confirmar que el equipo apunta al endpoint correcto de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Facilita la verificación de que los flujos de datos necesarios, como GPS, CAN o RS232, están siendo reportados.
- Colabora en la resolución de problemas de red al clarificar las expectativas de transporte sobre UDP o TCP en el puerto 8888.
- Apoya la planificación de actualizaciones de firmware o reemplazos de hardware que puedan alterar campos reportados o el comportamiento de eventos.
- Mejora la capacidad de mapear eventos del dispositivo a alertas operativas y necesidades de reporte en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Aplicom A9 IPEX con Plaspy proporciona a las organizaciones una plataforma que agrega datos de ubicación, vehículo y sensores en información accionable para la gestión de flotas, la seguridad de activos y la supervisión operativa. El diseño robusto del A9 IPEX, su integración CAN, soporte RS232 para unidades de refrigeración y opciones de geocerca lo convierten en una opción flexible para despliegues exigentes en campo.

Para conocer más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y documentación técnica más actualizada del fabricante, consulte el sitio oficial de Aplicom en https://www.aplicom.com/ para obtener información autorizada y al día.
