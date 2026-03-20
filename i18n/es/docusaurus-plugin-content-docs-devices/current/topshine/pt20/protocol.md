---
slug: /topshine/pt20/protocol
id: pt20-protocol
sidebar_label: Protocol
title: TopShine - PT20 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo TopShine PT20 que explica cómo el dispositivo se comunica con Plaspy para seguimiento e integración
keywords:
  - protocolo TopShine PT20
  - protocolo GPS TopShine PT20
  - protocolo TopShine PT20 Plaspy
  - protocolo de rastreo PT20
  - protocolo de comunicación PT20
  - compatibilidad rastreador GPS PT20
  - integración rastreador TopShine con Plaspy
  - rastreo de flotas PT20
  - protocolo de dispositivo PT20
  - conectividad TopShine PT20
---

# TopShine - Protocolo PT20

Esta página describe el contexto público del protocolo para utilizar el rastreador TopShine PT20 con la plataforma Plaspy. Explica cómo el PT20 suele reportar ubicación, alertas y telemetría a un servidor de rastreo de terceros y qué papel tiene el protocolo de comunicación del equipo al integrar el rastreador con Plaspy para monitoreo en tiempo real e informes históricos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El PT20 es un rastreador 4G compacto con posicionamiento híbrido GPS y LBS, reenvío en búfer para zonas sin cobertura y intervalos de reporte configurables, por lo que las notas prácticas a continuación se centran en consideraciones públicas de conexión y compatibilidad en lugar de detalles internos del fabricante.

## Resumen del protocolo

El protocolo del dispositivo PT20 es el conjunto de reglas de comunicación que el rastreador utiliza para enviar datos de posición, alarmas y telemetría a un servidor de rastreo remoto. Para la compatibilidad con Plaspy, este protocolo permite al dispositivo identificarse, reportar información de ubicación y estado útil, y soportar las funciones básicas que esperan los administradores de flota, tales como seguimiento en vivo, alertas y reenvío de datos almacenados tras interrupciones de conexión.

- Permite al PT20 transmitir reportes de ubicación GPS y LBS a un endpoint de rastreo para mapeo en tiempo real e historial.
- Transporta flags de alarma y telemetría, como exceso de velocidad o estado de movimiento, que Plaspy puede presentar como alertas.
- Soporta almacenamiento temporal local en el dispositivo para que los puntos guardados se reenvíen a la plataforma después de una interrupción celular.
- Habilita la identificación del equipo para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Proporciona el flujo de datos que Plaspy ingiere y convierte en actualizaciones del tablero, reportes y trayectos históricos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico entrante en un único endpoint de ingestión compartido y puede determinar automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar a Plaspy. En implementaciones típicas no es necesario seleccionar manualmente el protocolo dentro de Plaspy una vez que el PT20 apunta al endpoint de Plaspy y usa un transporte permitido.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para la configuración pública de dispositivos.
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios por lo general no necesitan elegir un protocolo en la plataforma.
- Cuando un PT20 está correctamente configurado para enviar al endpoint de Plaspy, la plataforma asociará los reportes entrantes con la cuenta del dispositivo y mostrará ubicación y alertas.
- La identificación adecuada del dispositivo y la correcta configuración del APN y del plan de datos SIM son necesarias para que Plaspy reciba reportes de forma fiable.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el PT20 alcanza Plaspy más que el nivel de bytes exacto de sus mensajes. El PT20 soporta transportes de datos celulares estándar y puede configurarse para usar cualquiera de los modos de transporte comunes cuando apunta al endpoint de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y las opciones de configuración.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 al configurar el destino del servidor para los reportes.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de servidor en flotas.
- La elección del transporte puede afectar características de entrega como la fiabilidad y el comportamiento de reintentos durante cobertura débil.
- Asegúrese de que el APN del dispositivo y el plan de datos SIM permitan conexiones salientes a internet público para que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre unidades PT20 pueden cambiar las funciones disponibles o el comportamiento de mensajes menores; siempre consulte las notas de la versión del firmware del dispositivo.
- Las revisiones de hardware o variantes SKU pueden implementar E/S periféricas o soporte de sensores de manera distinta, afectando qué datos puede enviar el dispositivo.
- Las opciones de configuración del fabricante pueden permitir reportes por UDP o TCP, así que confirme la selección de transporte antes del despliegue.
- El comportamiento de reenvío en búfer y la profundidad máxima de puntos históricos pueden variar según el firmware y la configuración de intervalos de reporte.
- Valide la compatibilidad con la documentación oficial del PT20 cuando necesite comportamientos específicos como tipos de alarma o telemetría avanzada.
- Confirme la compatibilidad de red y del plan SIM con los operadores móviles locales para evitar sorpresas de conectividad en uso de campo.

## Por qué es importante comprender el protocolo

Conocer los conceptos básicos de comunicación del PT20 ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y garantizar una operación más fluida a largo plazo cuando se integra con Plaspy. Entender qué envía el dispositivo y cómo se conecta reduce la fricción en la integración y mejora la calidad de los datos para la toma de decisiones operativas.

- Ayuda a diagnosticar problemas comunes como reportes faltantes, desajustes de zona horaria o telemetría incompleta.
- Guía la configuración correcta del servidor y del transporte para que el dispositivo llegue consistentemente al endpoint de ingestión de Plaspy.
- Informa sobre el comportamiento esperado durante interrupciones celulares, para que usted pueda interpretar los eventos de reenvío en búfer en Plaspy.
- Contribuye a planificar la vida útil de la batería y los compromisos entre intervalo de reporte y disponibilidad de datos.
- Facilita una comunicación más clara con el fabricante del dispositivo cuando aparezca un comportamiento inesperado.

## Por qué usar Plaspy con este protocolo

Usar el PT20 con Plaspy ofrece a las organizaciones una forma eficiente de convertir rastreadores portátiles compactos en visibilidad accionable para vehículos y activos. Plaspy ingiere reportes de ubicación y alarma en vivo, los coloca en mapas y líneas de tiempo, y conserva trayectos históricos para que los equipos puedan monitorear movimientos, responder a alertas y auditar eventos sin necesidad de una configuración de protocolo compleja en la plataforma.

Si desea conocer más sobre Plaspy, visite https://www.plaspy.com para detalles de la plataforma y guías de despliegue. Para los documentos de protocolo específicos del dispositivo, notas de firmware y revisiones de hardware más recientes, consulte al fabricante en https://www.gztopshine.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con la información oficial del fabricante.
