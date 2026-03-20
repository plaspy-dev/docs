---
slug: /teltonika/fmc130/protocol
id: fmc130-protocol
sidebar_label: Protocol
title: Teltonika - FMC130 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Teltonika FMC130 y su comunicación con Plaspy para telemetría y rastreo fiables
keywords:
  - Protocolo Teltonika FMC130
  - Compatibilidad FMC130 Plaspy
  - Protocolo GPS FMC130
  - Protocolo de comunicación FMC130
  - Protocolo de rastreo FMC130
  - Protocolo rastreador de flota Teltonika
  - Integración de telemetría FMC130
  - Protocolo monitoreo de combustible FMC130
  - Integración CAN Teltonika Plaspy
  - Reporte sensores Bluetooth FMC130
---

# Teltonika - Protocolo FMC130

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC130 con Plaspy. Le explica cómo la telemetría y los eventos del dispositivo se entregan a Plaspy y qué aspectos de la comunicación son relevantes para la configuración y la operación, sin exponer detalles internos sensibles del dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando una unidad reporta a la plataforma. El FMC130 ofrece múltiples fuentes de telemetría como conectividad celular con fallback, batería de respaldo interna, entrada por impulsos para medición de combustible, integración CAN y sensores Bluetooth LE. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la implementación del fabricante.

## Visión general del protocolo

El protocolo entre el FMC130 y Plaspy comprende los comportamientos de comunicación públicos que permiten al rastreador reportar ubicación, telemetría y datos de eventos al backend de Plaspy. En la práctica, esto cubre cómo el dispositivo abre una conexión a Plaspy, se identifica o autentica, y envía mensajes periódicos o desencadenados por eventos que Plaspy transforma en registros de rastreo y alertas útiles.

- Permite la entrega de posición GPS, marca temporal y atributos de movimiento desde el FMC130 hacia Plaspy para seguimiento en tiempo real y reproducción histórica.
- Transporta contajes de pulsos de combustible y otros eventos de entrada por impulsos para que Plaspy pueda analizar consumo y detectar anomalías.
- Lleva telemetría proveniente del bus CAN como nivel de combustible, odómetro, parámetros del motor y otras señales del vehículo cuando se conecta un adaptador CAN.
- Transmite estados de E/S cableadas y eventos digitales como ignición, estado de puertas o sensores auxiliares para alertas basadas en eventos.
- Envía datos de sensores Bluetooth LE para temperatura, humedad o presencia de balizas cuando sensores externos están emparejados al dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy opera un endpoint y puerto compartidos que reciben conexiones entrantes de los rastreadores soportados y detecta automáticamente el protocolo del dispositivo a partir del flujo de datos entrante. En la mayoría de las implementaciones usted no necesita seleccionar un protocolo dentro de Plaspy cuando el FMC130 está configurado correctamente para reportar al endpoint de Plaspy.

- Plaspy escucha conexiones de rastreadores en d.plaspy.com con una dirección pública de servidor 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido.
- Normalmente solo necesita configurar el FMC130 para reportar al endpoint de Plaspy; no se requiere selección manual de protocolo en Plaspy para configuraciones estándar.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento de flotas y las reglas de firewall.
- Plaspy soporta los modos de transporte más comunes usados por los rastreadores de campo, de modo que los dispositivos pueden conectarse con el método que soporte la unidad.

## Transporte y contexto de conexión

El transporte de conexión y la dirección forman parte del contexto público de configuración que determina cómo el FMC130 alcanza Plaspy. El rastreador puede configurarse para usar UDP o TCP según el soporte del dispositivo y la preferencia administrativa. Estas opciones de transporte afectan la configuración de red y firewall, pero no cambian que Plaspy normaliza la telemetría entrante tras su recepción.

- El FMC130 puede configurarse para enviar datos a Plaspy usando UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 si no se utiliza DNS.
- Todos los dispositivos de Plaspy comparten el mismo puerto 8888, lo que reduce la complejidad de aprovisionamiento en flotas grandes.
- Asegúrese de que el operador móvil y los firewalls del sitio permitan conexiones salientes al puerto 8888 para el protocolo de transporte elegido.
- El comportamiento de fallback celular y de roaming del rastreador puede afectar la cadencia de los mensajes, pero no la dirección del endpoint ni el puerto.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar qué campos de telemetría se envían y con qué frecuencia se emiten los mensajes; confirme el comportamiento de firmware para una unidad concreta antes de un despliegue masivo.
- Las variantes de hardware o regionales del FMC130 pueden incluir diferentes bandas de radio, opciones de E/S o compatibilidad con accesorios que influyan en los datos reportados.
- Herramientas del fabricante como Teltonika FOTA WEB pueden afectar la configuración del dispositivo y la distribución de firmware; coordine las actualizaciones al gestionar compatibilidad.
- La selección entre TCP y UDP es una elección de configuración del dispositivo y puede estar limitada por el operador o el firmware; elija el transporte que se ajuste a sus restricciones de red.
- Plaspy normaliza los datos entrantes, pero diferencias en el contenido de los mensajes del fabricante o en campos opcionales pueden afectar cómo se interpreta cierta telemetría.
- Siempre valide el comportamiento del dispositivo con la documentación oficial de Teltonika para detalles específicos del modelo y notas actuales de firmware.

## Por qué es importante entender el protocolo

Comprender, en términos generales, cómo se comunica el FMC130 ayuda a asegurar una configuración confiable, acelera la resolución de problemas y favorece operaciones sostenibles de flota cuando los dispositivos reportan a Plaspy. Estar al tanto del transporte, direccionamiento y la variabilidad ligada a firmware y hardware reduce sorpresas en la integración y mejora el tiempo de actividad.

- Verifica que el rastreador esté apuntando al endpoint y puerto correctos de Plaspy durante el aprovisionamiento inicial.
- Acelera la resolución de problemas al limitar los fallos a transporte, autenticación o configuración del dispositivo en lugar de procesamiento backend.
- Informa la configuración de firewalls y operadores para permitir conexiones salientes a d.plaspy.com en el puerto 8888.
- Orienta la decisión entre usar TCP o UDP según la confiabilidad de red y las preferencias de entrega de mensajes.
- Ayuda a planear actualizaciones de firmware y despliegues de funciones para mantener las expectativas de telemetría alineadas con el comportamiento real del dispositivo.

## Por qué usar Plaspy con este protocolo

Combinar el Teltonika FMC130 con Plaspy ofrece una solución práctica y rica en telemetría para operadores de flotas que necesitan visibilidad confiable de ubicación, análisis de combustible y capacidades de control remoto. La conectividad celular con fallback, la batería interna de respaldo, la entrada por impulsos para medidores de combustible, la compatibilidad con adaptadores CAN y el soporte para sensores Bluetooth LE del FMC130 proporcionan un flujo de datos completo que Plaspy ingiere y presenta para uso operativo.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el FMC130 visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware y variantes de hardware, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/ ya que el soporte del protocolo y el comportamiento del dispositivo pueden cambiar con revisiones de firmware y producto.
