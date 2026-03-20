---
slug: /totemtech/at07/features
id: at07-features
sidebar_label: Features
title: Totemtech - AT07 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las capacidades del rastreador GPS Totemtech AT07 y su integración con Plaspy
keywords:
  - Totemtech AT07
  - características Totemtech AT07
  - rastreador GPS AT07
  - rastreador GPS Totemtech
  - capacidades AT07
  - funciones AT07
  - Totemtech AT07 Plaspy
  - funciones rastreador GPS
  - rastreo vehicular AT07
  - rastreo de activos Totemtech
---

# Totemtech - Funciones del AT07

Esta página presenta el contexto público de uso del rastreador GPS Totemtech AT07 con Plaspy. Resume las capacidades prácticas del dispositivo que son relevantes para los usuarios de Plaspy y describe cómo los datos y eventos reportados suelen mostrarse dentro de la plataforma. El objetivo es ayudar a gestores de flotas, integradores y evaluadores técnicos a entender lo que ofrece el AT07 sin divulgar detalles de implementación sensibles.

La disponibilidad exacta de funciones en una unidad AT07 puede variar según la versión de firmware, la revisión de hardware, la forma en que se instala el equipo y las opciones de configuración del fabricante. Cuando una funcionalidad depende de sensores, cableado externo o ajustes regionales, esas dependencias se indican y se recomienda confirmar detalles con la documentación oficial de Totemtech.

## Resumen de capacidades

El Totemtech AT07 es un rastreador versátil diseñado para ofrecer reportes continuos de posición, detección de movimiento, almacenamiento local de datos y configuración remota. Su combinación de reporte a dos servidores, sensor de movimiento y actualizaciones de firmware por aire lo hace útil en una amplia gama de escenarios de monitoreo de vehículos y activos.

- El reporte a dos servidores permite enviar datos a dos destinos para duplicar la información de seguimiento o encaminarlos a un servidor de gestión y a un respaldo.
- El acelerómetro digital de 3 ejes proporciona estado de movimiento y detección de actividad para soportar alertas por movimiento y reportes basados en actividad.
- La capacidad de actualización de firmware por OTA reduce la necesidad de acceso físico al dispositivo para aplicar mejoras.
- El amplio rango de alimentación en DC con protección contra sobrevoltaje facilita la instalación en diferentes entornos eléctricos de vehículos y equipos.
- El soporte de comandos por GPRS y SMS permite la configuración remota y la administración del dispositivo.
- La memoria flash a bordo permite almacenar varios miles de puntos de datos para buffering temporal si se interrumpe la conectividad en tiempo real.

## Características principales del Totemtech - AT07

- Transmisión simultánea de datos a dos servidores para redundancia y reportes paralelos.
- Acelerómetro digital de 3 ejes para monitoreo del estado de movimiento y detección de eventos de desplazamiento.
- Actualización de firmware vía OTA para entregar mejoras y nuevas funciones de forma remota.
- Soporte de alimentación DC de 9 V a 50 V con protección contra sobrevoltaje incorporada para instalaciones en vehículos exigentes.
- Soporte de comandos remotos por GPRS y SMS para ajustar comportamiento de reporte y configuraciones.
- Memoria flash de 16 MB capaz de almacenar aproximadamente 4000 puntos de datos registrados para buffering cuando está sin conexión.
- Detección de nivel de combustible y aceite pensada para flujos de trabajo de monitoreo de combustible cuando se instala un sensor compatible.
- Función de monitoreo de voz con micrófono integrado además de puertos E/S configurables por el usuario que pueden funcionar como entrada digital, salida digital o entrada analógica.

## Cómo funcionan estas funciones con Plaspy

Plaspy detecta automáticamente muchos protocolos de rastreadores y presenta los datos entrantes como ubicaciones, eventos y actualizaciones de estado en la plataforma. Cuando un AT07 se configura para reportar a Plaspy, las ventajas operativas y la visibilidad típicas incluyen historial de ubicaciones, eventos de movimiento y reconciliación de datos almacenados tras cortes de conectividad.

- Plaspy muestra las actualizaciones de posición y el historial enviado por el rastreador para que usted pueda supervisar rutas y puntos de ubicación recientes.
- El estado de movimiento derivado del acelerómetro puede aparecer como eventos de actividad o usarse para activar alertas dentro de Plaspy.
- Los datos sin conexión almacenados en la memoria flash del dispositivo pueden subirse a Plaspy cuando se restablece la conectividad, permitiendo reconstruir trayectos.
- Los mensajes de nivel de combustible y las entradas analógicas configuradas pueden representarse en Plaspy como valores telemétricos o lecturas de sensores personalizados cuando el dispositivo está correctamente configurado.
- Los comandos remotos soportados por el rastreador (enviados vía GPRS o SMS) se reflejan en las acciones de configuración del dispositivo y pueden cambiar el comportamiento de reportes que se muestra en Plaspy.
- Plaspy detecta el protocolo del dispositivo automáticamente, simplificando la integración inicial para los dispositivos Totemtech compatibles.

## Casos de uso habituales

- Rastreo de vehículos de flota con alertas basadas en movimiento para detectar desplazamientos no autorizados o arranques y paradas.
- Monitoreo de activos donde el reporte redundante ayuda a mantener la continuidad del rastreo si una ruta de servidor no está disponible.
- Supervisión remota de equipos con buffering local de datos para preservar la telemetría reciente durante cortes temporales de la red.
- Monitoreo de combustible y control de consumo cuando el AT07 está conectado a un sensor de nivel de combustible adecuado.
- Escenarios que requieren actualizaciones periódicas de firmware donde OTA reduce la necesidad de acceder físicamente al dispositivo.
- Monitoreo de audio remoto cuando esté permitido por la normativa local y siempre que la función esté habilitada por configuración del dispositivo.
- Instalaciones que demandan tolerancia a un amplio rango de voltaje de entrada y protección contra sobrevoltaje para distintos tipos de vehículos.

## Notas sobre disponibilidad de funciones

- La presencia y el comportamiento de las funciones pueden variar según la versión de firmware y las revisiones de hardware regionales; no todas las unidades mostrarán todas las funciones listadas.
- Algunas funciones, como la detección de nivel de combustible y el monitoreo de voz, dependen del cableado correcto de sensores externos y de la configuración realizada en la instalación.
- Las actualizaciones de firmware por OTA requieren imágenes de firmware compatibles y pueden ser gestionadas por el proveedor del dispositivo más que a través de Plaspy.
- Las normas regulatorias y de privacidad influyen en la legalidad y disponibilidad del monitoreo de voz en algunas jurisdicciones; confirme el cumplimiento local antes de usarla.
- La documentación y las notas de versión del fabricante son la fuente autorizada para cambios en el comportamiento o límites de las funciones.

## Por qué usar Plaspy con estas funciones

Usar el Totemtech AT07 con Plaspy ofrece una forma centralizada de visualizar la ubicación, el estado de movimiento y la telemetría que proviene del dispositivo. La detección de dispositivos, el manejo de eventos y la visualización del historial en Plaspy facilitan incorporar los datos reportados por el AT07 en operaciones diarias, reportes y flujos de trabajo de alertas. La combinación de reporte a dos servidores y almacenamiento local ayuda a mantener la continuidad de los registros para la supervisión operativa.

Learn more about how Plaspy can manage device data and provide visibility for your trackers at https://www.plaspy.com. For the most current and device specific technical details, firmware notes, and installation guidance please verify specifications on the Totemtech official site http://www.totemtek.com/.
