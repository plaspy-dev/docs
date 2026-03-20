---
slug: /calmamp/lmu_2100/protocol
id: lmu_2100-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-2100 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del CalmAmp LMU-2100 y su comunicación con Plaspy para rastreo de flotas y telemetría
keywords:
  - protocolo CalmAmp LMU 2100
  - protocolo GPS CalmAmp LMU 2100
  - CalmAmp LMU 2100 Plaspy
  - protocolo de comunicación LMU 2100
  - protocolo de rastreo LMU 2100
  - protocolo de rastreador vehicular CalmAmp
  - telemetría LMU 2100
  - compatibilidad de protocolo CalmAmp
  - rastreo de flotas Plaspy
  - protocolo de dispositivo Plaspy
---

# CalmAmp - Protocolo LMU-2100

Esta página presenta el contexto público del protocolo para usar el CalmAmp LMU-2100 con Plaspy. Explica de forma general cómo se comunica el LMU-2100, cómo Plaspy recibe y procesa los reportes del dispositivo y qué considerar al configurar el rastreador para conectividad en la nube. El LMU-2100 es una unidad rica en funciones para aseguradoras y gestión de flotas, con acelerómetro de 3 ejes, múltiples opciones de radio celular, un motor interno de alertas y capacidades de servicio OTA que lo hacen una opción popular en despliegues telemáticos.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos apuntan al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. Para nombres de parámetros específicos del equipo y detalles de firmware más recientes consulte la documentación de CalmAmp, usando esta página como orientación del protocolo para la integración con Plaspy.

## Visión general del protocolo

El protocolo del LMU-2100 define cómo el dispositivo reporta telemetría, se identifica y entrega eventos como alertas del acelerómetro y actualizaciones de estado a un backend como Plaspy. Esta página no documenta formatos internos de paquetes, sino que se concentra en cómo el comportamiento del protocolo afecta la integración, la configuración y la fiabilidad de los reportes.

- El protocolo permite al LMU-2100 enviar reportes de posición, eventos de movimiento e impacto, y datos de estado a un endpoint en la nube para que Plaspy procese y muestre esa información.
- La identificación del dispositivo y la información de sesión viajan en el flujo de reportes para que Plaspy asocie los mensajes entrantes con un registro de rastreador específico.
- Las reglas de evento generadas por el dispositivo, como alertas basadas en el acelerómetro del motor PEG integrado, se transmiten por el mismo canal de reportes y Plaspy las interpreta como telemetría o alarmas.
- Las funciones de gestión OTA, como actualizaciones de configuración y control de firmware, influyen en cómo y cuándo el dispositivo transmite datos y se coordinan a través de los sistemas del fabricante.
- Las opciones de transporte y los intervalos de reporte del dispositivo afectan el consumo de batería, los costos de datos celulares y la puntualidad de las actualizaciones visibles en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint público y determina automáticamente el protocolo del rastreador para los dispositivos registrados. En la mayoría de los casos, cuando un LMU-2100 se configura para reportar al endpoint de Plaspy, no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha los reportes de dispositivos en el endpoint unificado d.plaspy.com y en la dirección pública 54.85.159.138.
- Todos los dispositivos usan el mismo puerto en Plaspy, lo que simplifica la configuración y el enrutamiento.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos apuntados correctamente al endpoint de Plaspy serán reconocidos sin asignación manual de protocolo.
- Por lo general, usted solo debe configurar el LMU-2100 para enviar datos al endpoint de Plaspy; la identificación del protocolo la maneja Plaspy al recibir los mensajes.
- Si un dispositivo no reporta como se espera, verifique la configuración de red, la selección de transporte y que el dispositivo esté autorizado en su cuenta de Plaspy.

## Transporte y contexto de conexión

El LMU-2100 puede comunicarse a través de redes celulares y soporta modos de transporte comunes para reportes en la nube. El contexto de conexión es una parte importante de la mensajería confiable entre el dispositivo y Plaspy y debe ajustarse según las necesidades del despliegue.

- El LMU-2100 puede configurarse para usar UDP o TCP para reportar a Plaspy, dependiendo del firmware y la configuración elegida.
- Plaspy acepta conexiones UDP y TCP en el puerto 8888, por lo que debe configurar el transporte del dispositivo para que coincida con sus prioridades operacionales.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP pública 54.85.159.138 como endpoint de reporte.
- Usar el puerto compartido 8888 de Plaspy facilita despliegues a gran escala y reduce errores de configuración.
- La selección del transporte influye en las garantías de entrega y en el comportamiento durante conectividad celular intermitente; revise la configuración del dispositivo y el desempeño del operador al planificar despliegues.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden alterar la frecuencia de mensajes, los campos de telemetría disponibles y el comportamiento OTA; siempre consulte las notas de la versión del firmware del LMU-2100 al solucionar problemas.
- Las revisiones de hardware de la familia LMU pueden exponer distintos juegos de sensores u opciones de E/S que afectan qué datos puede reportar el dispositivo.
- Sistemas de configuración del fabricante, como CalAmp PULS, pueden modificar las plantillas de reporte o los endpoints por defecto; asegúrese de que esos sistemas apunten al endpoint de Plaspy si los utiliza.
- El dispositivo puede operar en múltiples modos celulares, incluyendo GSM, GPRS, CDMA y HSPA, lo que puede influir en cómo se mantienen las sesiones con Plaspy.
- La selección entre UDP y TCP es una decisión importante de compatibilidad y debe validarse durante pruebas piloto.
- En caso de duda, valide el comportamiento del dispositivo con la documentación oficial de CalmAmp y confirme que los reportes del dispositivo llegan a d.plaspy.com en el puerto compartido de Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el LMU-2100 ayuda a garantizar una configuración fluida, telemetría precisa en Plaspy y una operación eficiente a largo plazo de su solución de rastreo de flotas. Un conocimiento claro del contexto de comunicación reduce el tiempo de resolución de problemas y favorece un comportamiento predecible en despliegues de producción.

- Endpoints y ajustes de transporte correctamente configurados conducen a una entrega fiable de posiciones y eventos en Plaspy.
- Conocer el comportamiento del firmware y las reglas PEG ayuda a interpretar eventos del acelerómetro y alertas personalizadas que pueda generar el dispositivo.
- Entender el comportamiento de las actualizaciones OTA es importante para gestionar despliegues de funciones y mantener los equipos en firmware compatible.
- Saber qué datos puede y no puede reportar el dispositivo evita expectativas incorrectas al revisar la información en Plaspy.
- Una planificación clara de red y transporte reduce costos de datos y mejora el tiempo de actividad de las operaciones de rastreo.

## Por qué usar Plaspy con este protocolo

Usar el CalmAmp LMU-2100 con Plaspy proporciona a las organizaciones una forma de capturar ubicación GPS, eventos basados en acelerómetro y estado del dispositivo en una plataforma en la nube unificada. El endpoint único de Plaspy y la detección automática de protocolos reducen la carga de configuración y facilitan la incorporación de una mezcla de dispositivos, manteniendo la visibilidad sobre el comportamiento del conductor y los eventos del vehículo.

Si desea obtener más información sobre cómo funciona Plaspy con dispositivos como el LMU-2100 visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos de dispositivo, notas de firmware y guía de implementación del fabricante, verifique la información en el sitio de CalmAmp http://www.calamp.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
