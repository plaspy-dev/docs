---
slug: /cantrack/tk08al/protocol
id: tk08al-protocol
sidebar_label: Protocol
title: CanTrack - TK08AL Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo CanTrack TK08AL para compatibilidad con Plaspy y telemetría en tiempo real
keywords:
  - protocolo cantrack tk08al
  - protocolo gps cantrack tk08al
  - protocolo rastreo cantrack tk08al
  - protocolo gps cantrack
  - rastreadores compatibles plaspy
  - protocolo seguimiento vehicular
  - comunicación rastreador gps
  - compatibilidad cantrack tk08al
  - protocolo rastreo gestión de flotas
  - integración tk08al plaspy
---

# CanTrack - Protocolo TK08AL

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack TK08AL con Plaspy. Se centra en cómo el dispositivo comunica telemetría general y eventos a la plataforma Plaspy, de modo que los operadores de flota e integradores comprendan las expectativas de conexión sin exponer análisis privados o detalles propietarios. El TK08AL es un rastreador vehicular cableado 4G con conectividad LTE Cat 1, identificación de conductor por RFID, detección de corte de energía con batería de respaldo y comportamientos de reporte configurables que lo hacen adecuado para flotas y casos de uso antirrobo.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece una guía pública y de alto nivel, recomendando validar los detalles específicos del dispositivo contra la documentación del fabricante.

## Visión general del protocolo

El TK08AL utiliza un comportamiento de reporte estándar para enviar posiciones GPS, eventos de movimiento e ignición, alarmas y eventos de identificación de conductor a un servidor remoto. En la práctica, el dispositivo implementa convenciones comunes de la familia GT y puede operar sobre datos móviles con conmutación a redes legadas para mantener el flujo de telemetría.

- Permite enviar actualizaciones de ubicación y eventos del dispositivo desde el vehículo a un servidor centralizado para mapeo y notificaciones.
- Transmite el estado del vehículo como ignición, movimiento, SOS y corte de energía para que Plaspy presente el estado y active flujos de trabajo.
- Envía eventos de identificación de conductor desde la interfaz RFID integrada o desde un lector externo conectado vía RS485, útil para auditoría y control de acceso.
- Admite buffering local para preservar registros de telemetría durante pérdidas temporales de red y luego subirlos cuando la conectividad se restablece.
- Ofrece comportamientos de reporte configurables, como actualizaciones periódicas, actualizaciones activadas por movimiento y modos de bajo consumo para equilibrar puntualidad y vida útil de la batería.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint compartido e identifica automáticamente el formato de reporte del rastreador, por lo que los usuarios generalmente no necesitan seleccionar un protocolo manualmente en la plataforma. La configuración adecuada del dispositivo para reportar al endpoint de Plaspy es el requisito típico para la detección automática.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto estándar de la plataforma 8888.
- El dispositivo puede estar configurado para usar UDP o TCP para enviar reportes a Plaspy en el puerto 8888.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Cuando un TK08AL apunta al endpoint de Plaspy y la red lo permite, Plaspy detectará el protocolo del dispositivo automáticamente e ingresará la telemetría en la plataforma.
- Normalmente, los usuarios solo necesitan verificar la dirección del servidor y la configuración de transporte en el dispositivo; Plaspy maneja la selección del protocolo para la ingestión cuando llegan los datos.

## Transporte y contexto de conexión

La preparación de la conexión para el TK08AL es principalmente cuestión de apuntar el dispositivo al servidor correcto y elegir el transporte soportado. El rastreador soporta conectividad LTE Cat 1 como primaria con conmutación a GSM/GPRS y puede configurarse para reportar por TCP o UDP según las necesidades del despliegue.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el comportamiento de red deseado.
- El endpoint de Plaspy es accesible en d.plaspy.com y en la IP 54.85.159.138 para entornos que requieren direccionamiento numérico.
- Todos los dispositivos soportados por Plaspy comparten el mismo puerto de plataforma 8888, lo que simplifica la provisión masiva y las reglas de firewall.
- La conectividad del TK08AL puede cambiar a GPRS cuando no hay cobertura LTE para mantener la entrega de reportes.
- Los canales típicos de configuración disponibles en el TK08AL incluyen configuración por USB, SMS o ajustes remotos proporcionados por el fabricante.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles y los comandos soportados; verifique las notas de la versión de firmware cuando diagnostique diferencias de comportamiento.
- Las revisiones de hardware y accesorios opcionales, como lectores RFID externos o cableado de relé inmovilizador, pueden afectar qué características de telemetría y control están presentes.
- El dispositivo puede soportar distintos transportes; asegúrese de que el modo de transporte elegido (UDP o TCP) sea consistente con las políticas de red y firewall.
- Los métodos de configuración del fabricante (SMS, USB o configuración remota) pueden variar según la región y el build de firmware; consulte el manual oficial para comandos exactos.
- El comportamiento de buffering local influye en cómo y cuándo se suben los registros históricos después de restaurarse la conectividad.
- La detección automática de protocolo de Plaspy facilita la configuración en la plataforma, pero los valores iniciales de servidor y transporte en el dispositivo deben estar correctos.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación del TK08AL y el contexto de transporte ayuda a los administradores a configurar correctamente los dispositivos, diagnosticar problemas de telemetría y garantizar una operación uniforme en despliegues de flota. Conocer lo básico sobre cómo el rastreador reporta y qué eventos puede enviar facilita la integración con Plaspy y reduce el tiempo invertido en configuración y resolución de problemas.

- Garantiza la dirección del servidor y los ajustes de transporte correctos para que los dispositivos lleguen a Plaspy y sean detectados automáticamente.
- Ayuda a interpretar el comportamiento de eventos como SOS, ignición, corte de energía y eventos de identificación de conductor al revisar los registros en la plataforma.
- Guía la configuración de firewall y red al aclarar que todos los dispositivos Plaspy usan el mismo puerto y que se puede emplear TCP o UDP.
- Apoya la planificación de actualizaciones de firmware y pruebas de compatibilidad para mantener la telemetría estable a lo largo del tiempo.
- Permite tomar decisiones informadas sobre intervalos de reporte, buffering y modos de bajo consumo para equilibrar la frescura de los datos y la duración de la batería del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack TK08AL con Plaspy brinda a los operadores visibilidad consolidada de la ubicación del vehículo, eventos de autorización de conductor y alarmas de seguridad o antirrobo. La conectividad LTE del equipo, el buffering local, la identificación de conductor por RFID y las salidas opcionales de inmovilizador lo convierten en una opción práctica para organizaciones que necesitan actualizaciones de posición en tiempo real y flujos de trabajo basados en eventos.

Para obtener más información sobre Plaspy y cómo integra la telemetría de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente y específica en el sitio del fabricante https://www.cantrackgps.com/.
