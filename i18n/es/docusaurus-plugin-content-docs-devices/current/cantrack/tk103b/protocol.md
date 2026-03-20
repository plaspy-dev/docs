---
slug: /cantrack/tk103b/protocol
id: tk103b-protocol
sidebar_label: Protocol
title: CanTrack - TK103B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del CanTrack TK103B y su comunicación con Plaspy para rastreo confiable de flotas
keywords:
  - protocolo CanTrack TK103B
  - protocolo GPS CanTrack TK103B
  - compatibilidad TK103B Plaspy
  - protocolo de comunicación TK103B
  - protocolo de rastreo TK103B
  - protocolo rastreador GPS CanTrack
  - integración de dispositivos Plaspy
  - rastreo de flotas TK103B
  - guía protocolo rastreador GPS
  - rastreo vehicular CanTrack
---

# CanTrack - Protocolo TK103B

Esta página describe el contexto público del protocolo para usar el CanTrack TK103B con Plaspy. Se centra en cómo el dispositivo reporta posición, alarmas y telemetría básica a la plataforma Plaspy, y qué implica esa comunicación para la configuración, el monitoreo y la resolución de problemas. El contenido explica detalles relevantes de integración sin exponer implementaciones privadas o sensibles.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El TK103B suele configurarse para reportar por GPRS usando TCP o UDP y, como alternativas, puede ofrecer SMS y registro local en tarjeta SD. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se pueden observar diferencias entre unidades y compilaciones de firmware.

## Visión general del protocolo

El protocolo del TK103B define cómo el rastreador se identifica ante un servidor, informa su posición y estado, y comunica eventos de alarma y telemetría. En Plaspy, la función del protocolo es entregar información estructurada y oportuna que la plataforma pueda interpretar para mapas en vivo, alertas e historial.

- Permite que el dispositivo envíe coordenadas y actualizaciones de estado con sello de tiempo al servidor de Plaspy.
- Transmite alarmas y estados de entradas como ignición, puertas, SOS y exceso de velocidad para que Plaspy active notificaciones y flujos de trabajo.
- Proporciona campos de telemetría necesarios para la supervisión de flotas, como movimiento, estado de energía y banderas básicas de sensores.
- Soporta mecanismos de respaldo como SMS y registro en tarjeta SD para mantener continuidad de datos cuando la conectividad móvil fluctúa.
- Ofrece la base para que Plaspy analice y presente seguimiento en vivo, reproducción de historial y alertas basadas en eventos sin que el usuario tenga que seleccionar manualmente el protocolo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un punto de acceso y puerto compartidos y determina el manejo del protocolo apropiado para cada dispositivo conectado. Esto significa que un TK103B configurado para apuntar al endpoint de Plaspy será reconocido y asignado a la ruta de procesamiento correcta dentro de la plataforma.

- Plaspy escucha en un solo puerto para todos los dispositivos, lo que simplifica la configuración y el onboarding.
- Cuando un TK103B reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia el feed con el manejo correspondiente para ese tipo de dispositivo.
- Por lo general, usted no necesita seleccionar un protocolo dentro de Plaspy siempre que el equipo esté configurado correctamente para reportar al endpoint de Plaspy.
- La identificación adecuada del dispositivo en la primera conexión permite que Plaspy adjunte los datos de ubicación y alarma al vehículo y cuenta de usuario correctos.
- La detección automática reduce pasos de configuración manual y minimiza errores de selección de protocolo durante el despliegue.

## Transporte y contexto de conexión

Las opciones de conexión y transporte influyen en cómo el TK103B llega a Plaspy y en la resiliencia de los reportes bajo distintas condiciones de red. El TK103B soporta múltiples canales de reporte y Plaspy acepta tráfico de dispositivos en un endpoint consistente para simplificar los despliegues.

- Los dispositivos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy acepta transporte TCP o UDP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita la configuración de firewalls y APN para flotas.
- Cuando se interrumpe GPRS, los comandos por SMS y el registro local en tarjeta SD pueden ofrecer control y historial limitado hasta que se restaure la conectividad de datos.
- La elección entre TCP o UDP puede afectar las garantías de entrega y el comportamiento durante los traspasos móviles; seleccione el transporte según la red y las necesidades del despliegue.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden modificar el conjunto exacto de campos, nombres de comandos y frecuencia de reporte entre unidades TK103B.
- Revisiones de hardware y variantes del fabricante pueden alterar las entradas soportadas, el comportamiento de las alarmas y las opciones de reporte.
- Algunas unidades TK103B soportan tanto TCP como UDP, mientras que otras prefieren un solo transporte; verifique la configuración de su unidad antes de un despliegue a gran escala.
- Las configuraciones del fabricante y las cadenas predeterminadas de APN o servidor pueden variar por región y podrían requerir actualización manual para apuntar a Plaspy.
- Plaspy maneja automáticamente muchas variantes comunes de rastreadores, pero confirme el comportamiento del dispositivo tras la primera conexión para asegurar el mapeo completo de telemetría y alarmas.
- Siempre valide la compatibilidad y la disponibilidad de funciones con la documentación del fabricante para la revisión de firmware específica de su dispositivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK103B ayuda a garantizar una configuración confiable, una interpretación precisa de los datos y una resolución de problemas más rápida cuando se opera con Plaspy. El conocimiento práctico del protocolo y del contexto de transporte previene problemas comunes de despliegue y mejora el tiempo de actividad operativo.

- Facilita confirmar que el equipo está configurado correctamente para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a identificar si un problema de conectividad está relacionado con el transporte, por ejemplo TCP frente a UDP, o con la red celular.
- Aclara qué alarmas y entradas puede reportar el dispositivo y cómo se asignan a las alertas y automatizaciones de Plaspy.
- Acelera la resolución de problemas al acotar si la falla proviene del firmware del dispositivo, del transporte o del mapeo en la plataforma.
- Apoya la planificación de estrategias de respaldo, como comandos por SMS o registro en tarjeta SD, para entornos con conectividad intermitente.

## Por qué usar Plaspy con este protocolo

Usar el TK103B con Plaspy brinda a los operadores de flotas una forma directa de recibir actualizaciones de posición en tiempo real, alarmas y telemetría básica en una sola plataforma que maneja la detección y el mapeo de comportamientos comunes de los rastreadores. Para organizaciones que gestionan flotas de alquiler, taxi o comerciales, la combinación de las capacidades del hardware TK103B y la visibilidad de Plaspy favorece el monitoreo operativo, la respuesta ante incidentes y los flujos de recuperación.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Please note that protocol support, firmware behavior and device implementation details can change over time and you should verify the latest device specific protocol and firmware information with the manufacturer at https://www.cantrackgps.com/
