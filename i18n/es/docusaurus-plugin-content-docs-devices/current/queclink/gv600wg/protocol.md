---
slug: /queclink/gv600wg/protocol
id: gv600wg-protocol
sidebar_label: Protocol
title: QuecLink - GV600WG Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del QuecLink GV600WG y su compatibilidad con Plaspy para seguimiento de flotas
keywords:
  - Protocolo QuecLink GV600WG
  - Protocolo GPS QuecLink GV600WG
  - Protocolo QuecLink GV600WG para Plaspy
  - Protocolo de comunicación GV600WG
  - Protocolo de rastreo GV600WG
  - Protocolo de rastreador GPS QuecLink
  - Compatibilidad GV600WG con Plaspy
  - Protocolo de rastreo de flotas QuecLink
  - Protocolo GPS para remolques
  - Protocolo de rastreo de vehículos
---

# QuecLink - GV600WG Protocolo

Esta página ofrece una visión pública del protocolo para usar el QuecLink GV600WG con Plaspy. Se centra en el contexto de comunicación y conexión relevante al integrar este rastreador robusto para remolques y vehículos pesados en los flujos de trabajo de Plaspy, evitando detalles internos de firmware o paquetes propietarios.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, así que considere esto como una orientación a nivel de protocolo más que como un manual específico de firmware.

## Visión general del protocolo

El GV600WG envía telemetría y estado a un servidor backend usando el protocolo de reporte implementado por QuecLink. Ese protocolo transmite posiciones GNSS, estados de E/S, telemetría de sensores y mensajes de latido para que Plaspy pueda mostrar ubicaciones, alertas y datos históricos para operaciones de flota.

- Permite que el equipo se identifique y envíe posición GNSS y telemetría de sensores a un servidor remoto.
- Incluye campos de encendido (ignición), entradas analógicas, accesorios BLE y estado necesarios para las alarmas e informes de Plaspy.
- Ofrece comportamiento de almacenamiento en búfer y modos de reporte periódico para mantener continuidad durante conectividad intermitente.
- Proporciona canales de comando y control usados para control OTA de salidas digitales y configuración remota cuando el dispositivo lo soporta.
- Facilita notificaciones de alarmas y eventos para que Plaspy pueda activar flujos de trabajo de geocercas, baja batería y manipulación indebida.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones en un único endpoint y puerto compartidos e incluye lógica de detección automática de protocolo, por lo que la mayoría de dispositivos correctamente configurados serán reconocidos sin seleccionar manualmente el protocolo. Esto reduce pasos de configuración cuando el GV600WG apunta a la dirección de reporte de Plaspy.

- Plaspy usa el endpoint compartido d.plaspy.com y también acepta conexiones a 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los mensajes.
- Si el dispositivo está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy normalmente identifica el formato de reporte del GV600WG de forma automática.
- Normalmente usted no necesitará seleccionar manualmente un protocolo dentro de Plaspy siempre que el equipo esté correctamente configurado para reportar al servidor de Plaspy.
- Si existe un firmware inusual o una configuración personalizada, los registros del equipo y la documentación del fabricante son el siguiente paso apropiado para resolver el problema.

## Transporte y contexto de conexión

El GV600WG soporta transportes celulares comunes y puede configurarse para enviar sus mensajes a Plaspy usando el mismo puerto compartido empleado por otros dispositivos Plaspy. Comprender las opciones de transporte ayuda a garantizar que los equipos lleguen de forma fiable al endpoint de Plaspy en despliegues de producción.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según los ajustes del equipo y el comportamiento de la red.
- Los equipos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 en el puerto 8888.
- Plaspy acepta tanto TCP como UDP en el puerto 8888 y aplica detección automática de protocolo en ese puerto compartido.
- La elección de transporte puede afectar el orden de los mensajes, las características de retransmisión y cómo el dispositivo almacena datos en búfer durante pérdidas de conectividad.
- Valide los ajustes de APN y el plan celular en el equipo para que pueda alcanzar d.plaspy.com o 54.85.159.138 desde la red donde se despliega.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar por versión de firmware; confirme las notas de la versión del equipo para detectar cambios de protocolo o comandos añadidos.
- Las revisiones de hardware y accesorios opcionales (sensores BLE, dispositivos seriales) pueden modificar el conjunto de campos de telemetría que el equipo reporta.
- La selección de transporte (TCP vs UDP) es una elección de configuración en el dispositivo y puede influir en la confiabilidad y las preferencias del operador.
- Versiones regionales de firmware por parte del fabricante o la provisión por parte del operador móvil pueden cambiar el comportamiento celular y los valores predeterminados de reporte.
- Verifique siempre que el equipo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar que Plaspy reciba los datos.
- Revise la documentación y los registros de cambios de QuecLink para detectar actualizaciones a nivel de protocolo que puedan afectar la integración.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del GV600WG facilita la puesta en marcha, la resolución operativa de problemas y un comportamiento predecible a largo plazo cuando el equipo se usa con Plaspy.

- Ayuda a validar que los equipos están apuntando correctamente al servidor de Plaspy y usando el transporte requerido en el puerto 8888.
- Agiliza el diagnóstico de problemas de conectividad al acotar si la falla es por transporte, APN, firmware o configuración.
- Garantiza que los campos de telemetría esperados por Plaspy (GNSS, encendido, entradas analógicas, sensores BLE) estén presentes y mapeados en los flujos de trabajo.
- Ayuda a planificar actualizaciones de firmware, migraciones a modelos de reemplazo o cambios en la cadencia de reporte para optimizar batería y costos de datos.
- Aumenta la confianza al implementar alarmas anti-robo, inmovilizadores o alarmas basadas en sensores en Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el GV600WG con Plaspy brinda a las organizaciones visibilidad robusta de remolques y vehículos pesados con una plataforma que acepta la telemetría del equipo y la presenta para su uso operacional. El diseño resistente del GV600WG, su larga espera en batería y sus entradas/salidas flexibles lo hacen adecuado para flotas de remolques, unidades refrigeradas y otros casos de uso fuera de alimentación, donde las funciones de mapeo, geocercas y alarmas de Plaspy ofrecen supervisión accionable.

Para saber más sobre cómo Plaspy maneja la conectividad de dispositivos, el reporte y los flujos de trabajo de flota, visite https://www.plaspy.com. Para detalles específicos de protocolo más actuales, notas de firmware y guías de implementación del equipo, consulte al fabricante en https://www.queclink.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, así que verifique los detalles del dispositivo en el sitio oficial del fabricante al planificar despliegues.
