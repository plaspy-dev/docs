---
slug: /gotop/g07e/protocol
id: g07e-protocol
sidebar_label: Protocol
title: GOTOP - G07E Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el GOTOP G07E con Plaspy, incluye contexto de conexión y transporte
keywords:
  - protocolo GOTOP G07E
  - protocolo GPS GOTOP G07E
  - protocolo de comunicación GOTOP G07E
  - protocolo de rastreo GOTOP G07E
  - compatibilidad GOTOP G07E Plaspy
  - protocolo rastreador GPS GOTOP
  - protocolo rastreador GPS solar magnético
  - protocolo de seguimiento de activos Plaspy
  - protocolo de seguimiento vehicular GOTOP
  - protocolo de gestión de flotas G07E
---

# GOTOP - Protocolo G07E

Esta página resume el contexto público del protocolo para usar el rastreador GOTOP G07E con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel, qué ajustes de conexión son necesarios y consideraciones prácticas para lograr reportes confiables sin exponer detalles internos de firmware o del parser privado.

El G07E es un rastreador GPS magnético con carga solar diseñado para monitoreo prolongado de activos en exteriores. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del equipo. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que considere esta página como contexto del protocolo y no como referencia de firmware.

## Resumen del protocolo

A grandes rasgos, el protocolo de reporte del rastreador define cómo el G07E se identifica ante un servidor, transmite datos de posición y eventos, y actualiza estados como batería y alarmas. Para la integración con Plaspy, el protocolo transporta mensajes de ubicación, telemetría y eventos que Plaspy interpreta para mapas en tiempo real, alertas e historial.

- Transporta actualizaciones de posición y marcas de tiempo para que Plaspy ubique el dispositivo en mapas en vivo y en reproducción histórica.
- Reporta eventos como movimiento, activación por caída, SOS y estado de alimentación para alertas y telemetría.
- Incluye entradas de posicionamiento suplementarias como arreglos asistidos por Wi Fi o ubicación por GSM que Plaspy puede usar cuando el GNSS es limitado.
- Permite reporte remoto vía datos celulares o reporte por SMS como respaldo para resiliencia de enlace.
- Soporta registro offline en el dispositivo que Plaspy puede reconciliar cuando el rastreador reanuda conectividad.

## Detección del protocolo por Plaspy

Plaspy recibe conexiones de rastreadores en un endpoint compartido y determina automáticamente qué protocolo de rastreador se está usando, así que normalmente no es necesario seleccionar el protocolo manualmente. La configuración correcta del dispositivo para reportar al endpoint de Plaspy es el requisito principal para la detección automática.

- Plaspy escucha el tráfico de dispositivos en el hostname público d.plaspy.com y en la IP pública del servidor 54.85.159.138.
- Todos los dispositivos soportados usan el mismo puerto de Plaspy, y Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint.
- Si el rastreador está configurado para reportar al endpoint de Plaspy, la selección manual del protocolo dentro de Plaspy suele ser innecesaria.
- La detección automática simplifica la incorporación de flotas mixtas y reduce errores de configuración al agregar unidades G07E.
- Para resolución de problemas, confirme que el dispositivo esté reportando a d.plaspy.com o a la IP del servidor y utilizando el puerto compartido de Plaspy.

## Transporte y contexto de conexión

El G07E puede configurarse para usar mecanismos de transporte estándar para enviar sus datos de reporte. La elección de conexión afecta cómo el dispositivo establece y mantiene una sesión con Plaspy, pero no cambia el papel público del protocolo en el envío de ubicación y eventos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto de Plaspy según el soporte del equipo y las preferencias de configuración.
- Plaspy acepta conexiones de dispositivos hacia el hostname d.plaspy.com o directamente a 54.85.159.138 usando el puerto compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y NAT para los despliegues.
- La selección del transporte (UDP vs TCP) puede afectar la semántica de entrega y el comportamiento de red, pero Plaspy soporta ambas opciones en el puerto compartido.
- Verifique que el enrutamiento de red y las reglas de salida permitan que el rastreador alcance d.plaspy.com o la IP del servidor en el puerto de Plaspy.

## Notas de compatibilidad del protocolo

- Las diferencias entre versiones de firmware pueden modificar la frecuencia de mensajes, los tipos de eventos disponibles o campos opcionales; verifique el comportamiento según la revisión de firmware del dispositivo.
- Revisiones de hardware y módulos opcionales (por ejemplo, asistencia Wi Fi o distintos módulos GNSS) pueden afectar las entradas de posicionamiento y las señales de eventos disponibles.
- Puede requerirse el uso de herramientas de configuración del fabricante o comandos SMS para establecer que el dispositivo reporte al endpoint de Plaspy y el transporte correcto.
- La elección de transporte entre UDP y TCP debe concordar con las restricciones de la red y las opciones de configuración del dispositivo.
- El registro offline en microSD permite que el rastreador provea posiciones históricas una vez que se restablece la conectividad; asegúrese de que las expectativas de ingestión de Plaspy estén alineadas con este comportamiento.
- Siempre valide los detalles del protocolo y los conjuntos de comandos con la documentación del fabricante para contemplar variantes específicas del modelo.

## Por qué es importante comprender el protocolo

Comprender el protocolo de reporte del rastreador facilita una configuración más fluida, operación continua confiable y una resolución de problemas más eficaz al integrar el G07E con Plaspy. Conocer qué transporta el protocolo y cómo se conecta el dispositivo reduce el tiempo para alcanzar valor en monitoreo y procesos de recuperación.

- Permite configurar correctamente la red y el firewall para que el rastreador alcance d.plaspy.com o la IP del servidor de Plaspy.
- Ayuda a diagnosticar reportes ausentes o retrasados revisando la configuración de transporte y si el dispositivo apunta al endpoint de Plaspy.
- Aclara qué eventos del dispositivo estarán disponibles en Plaspy para alertas y automatizaciones, como SOS, detección de caída y estado de alimentación.
- Ayuda a planificar el comportamiento de registro offline y cómo Plaspy manejará el historial que llega con retraso.
- Favorece un mantenimiento predecible al alinear las comprobaciones de revisiones de firmware y hardware con el comportamiento esperado del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G07E con Plaspy ofrece a las organizaciones una forma práctica de convertir la telemetría híbrida de posicionamiento y eventos del dispositivo en monitoreo y alertas accionables. Plaspy ingiere actualizaciones en tiempo real por GPRS, arreglos asistidos por Wi Fi y mensajes de eventos para que los equipos puedan supervisar activos en mapas en vivo, recibir alertas de geocercas y SOS, y analizar movimientos históricos para mejorar operaciones.

Plaspy simplifica la incorporación al usar un único puerto compartido y detección automática de protocolo. Configure el G07E para reportar a d.plaspy.com o a 54.85.159.138 en el puerto de Plaspy y Plaspy identificará y procesará los mensajes del dispositivo para mapeo, historial y flujos de alertas. Para obtener más información sobre Plaspy visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente específica del dispositivo en el sitio oficial de GOTOP https://www.gotop.cc/.
