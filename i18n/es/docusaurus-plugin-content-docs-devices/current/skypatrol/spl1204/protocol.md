---
slug: /skypatrol/spl1204/protocol
id: spl1204-protocol
sidebar_label: Protocol
title: SkyPatrol - SPL1204 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para SkyPatrol SPL1204 y compatibilidad con Plaspy
keywords:
  - Protocolo SkyPatrol SPL1204
  - Protocolo GPS SkyPatrol SPL1204
  - Compatibilidad SPL1204 Plaspy
  - Protocolo de rastreo SPL1204
  - Protocolo rastreador GPS SkyPatrol
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador de candado
  - Rastreador para protección de activos
  - Registro eventos RFID de apertura
  - Rastreador GPS alerta de manipulación
---

# SkyPatrol - Protocolo SPL1204

Esta página describe el contexto público del protocolo para usar el SkyPatrol SPL1204 con Plaspy. Se centra en cómo el dispositivo envía ubicación y telemetría de eventos a Plaspy y en lo que debe conocer sobre la ruta de comunicación entre el rastreador de candado y la plataforma Plaspy.

El SPL1204 es un rastreador resistente para candados que reporta posición GPS, alertas de manipulación, eventos de desbloqueo por RFID y estado de batería. Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página ofrece orientación pública y general en lugar de especificaciones a nivel de firmware.

## Resumen del protocolo

El protocolo de reporte define cómo el SPL1204 envía datos de posición y eventos a un servidor y cómo una plataforma de gestión interpreta esa información. Para las integraciones con Plaspy, este protocolo permite identificar el dispositivo, recibir actualizaciones de ubicación continuas y transmitir telemetría de eventos útil para flujos de trabajo de antirrobo y cadena de custodia.

- Permite que los informes de posición GPS y la telemetría con sello de tiempo lleguen a Plaspy para mapas y alertas.
- Transporta registros de eventos como alertas por manipulación, eventos de desbloqueo por RFID y estado de batería para auditorías y flujos de alarma.
- Facilita que el rastreador se identifique para que Plaspy asocie los mensajes con el activo o candado correcto.
- Soporta reportes periódicos y por eventos para que los operadores reciban actualizaciones relevantes sin sondeos constantes.
- Proporciona el comportamiento básico de handshake y sesión necesario para la entrega confiable de mensajes sobre transporte celular.

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes entrantes en un endpoint compartido y usa esos mensajes para identificar el protocolo y tipo de dispositivo. En la mayoría de las implementaciones, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy recibe los informes de rastreadores en el dominio público d.plaspy.com.
- Plaspy también acepta conexiones a la IP del servidor 54.85.159.138 cuando se usa esa dirección.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación.
- Plaspy detecta automáticamente el protocolo del rastreador para aplicar el análisis correcto cuando el dispositivo reporta.
- Con la configuración de reporte correcta en el dispositivo, la selección manual de protocolo en Plaspy suele ser innecesaria.
- La detección se basa en patrones de mensajes y campos de identificación observables públicamente, no en detalles internos del firmware.

## Transporte y contexto de conexión

El SPL1204 se comunica por redes celulares y puede usar transporte UDP o TCP según la configuración del equipo y el comportamiento del operador móvil. Al configurar el dispositivo para reportar a Plaspy, use el endpoint compartido de Plaspy y mantenga las opciones de transporte coherentes con las reglas de red y firewall para asegurar una entrega confiable.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración del modelo y la red.
- La plataforma Plaspy escucha en el puerto 8888 para todos los dispositivos compatibles, lo que estandariza la conectividad.
- Elegir UDP o TCP afecta las semánticas de entrega y la traversía de red, pero no cambia la intención pública del protocolo.
- Asegúrese de que el operador y las reglas de firewall permitan conexiones salientes hacia el endpoint y el puerto de Plaspy para que el rastreador informe de forma fiable.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar la temporización de mensajes, los campos de telemetría disponibles y los nombres de eventos; siempre confirme el comportamiento para el firmware específico de sus unidades.
- Revisiones de hardware o variantes regionales del SPL1204 pueden incluir radios o conjuntos de sensores distintos que afecten los datos reportados.
- La selección de transporte entre UDP y TCP puede ser configurable en el dispositivo y debe ajustarse a las restricciones de red y a las recomendaciones del operador.
- Los comandos de configuración del fabricante y la dirección del servidor deben aplicarse en el dispositivo para apuntarlo al endpoint de Plaspy.
- Al mezclar tipos de dispositivos en una implementación, recuerde que Plaspy usa un puerto común y detección automática para manejar diferencias de protocolo.
- Valide la compatibilidad contra la documentación de SkyPatrol para notas específicas de firmware y cualquier aviso del fabricante.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el SPL1204 ayuda a asegurar una configuración fluida, una resolución de problemas eficaz y una operación fiable a largo plazo con Plaspy. Tener visibilidad del contexto de comunicación facilita confirmar que el dispositivo está reportando los eventos correctos y correlacionarlos con los procesos operativos.

- Simplifica la configuración inicial para que el rastreador reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 según sea necesario.
- Reduce el tiempo para resolver problemas de conectividad al enfocarse primero en el transporte y la configuración del endpoint.
- Ayuda a mapear eventos reportados, como alertas por manipulación y desbloqueos por RFID, a los paneles y flujos de alarma de Plaspy.
- Apoya la toma de decisiones sobre elegir UDP o TCP según la fiabilidad de la red y el comportamiento del operador.
- Fomenta la verificación de las versiones de firmware y hardware del dispositivo cuando aparezcan cambios inesperados en la telemetría.

## Por qué usar Plaspy con este protocolo

Usar el SPL1204 con Plaspy proporciona a las organizaciones visibilidad práctica y conocimiento de eventos para carga de alto valor y envíos sellados. Cuando el rastreador está configurado para reportar a Plaspy, los operadores pueden monitorear la ubicación, responder a alertas por manipulación y auditar eventos de desbloqueo por RFID dentro de un entorno unificado de gestión de flotas.

Plaspy centraliza la telemetría derivada de candados junto con datos de vehículos y flota para apoyar flujos de trabajo antirrobo, reportes de cadena de custodia y supervisión operativa. Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación de implementación, verifique la información con el fabricante en https://www.skypatrol.com/.
