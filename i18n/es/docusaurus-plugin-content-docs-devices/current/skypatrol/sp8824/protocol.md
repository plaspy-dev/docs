---
slug: /skypatrol/sp8824/protocol
id: sp8824-protocol
sidebar_label: Protocol
title: SkyPatrol - SP8824 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del SkyPatrol SP8824 y cómo se comunica con Plaspy para un seguimiento personal confiable
keywords:
  - Protocolo SkyPatrol SP8824
  - Protocolo GPS SkyPatrol SP8824
  - Compatibilidad SP8824 Plaspy
  - Protocolo de rastreador SkyPatrol
  - Protocolo de comunicación SP8824
  - Protocolo de seguimiento SP8824
  - Protocolo de rastreador GPS personal
  - Protocolo para rastreador de activos
  - Compatibilidad de dispositivos Plaspy
  - Telemetría de rastreador GPS
---

# SkyPatrol - Protocolo SP8824

Esta página resume el contexto público del protocolo para usar el rastreador personal SkyPatrol SP8824 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, para que integradores y usuarios técnicos comprendan el papel del protocolo de reporte sin revelar detalles internos de implementación. El SP8824 es un rastreador compacto LTE Cat M1 con antena GPS integrada, acelerómetro de 3 ejes para detección de movimiento y autonomía extendida pensada para monitoreo discreto diario.

Plaspy emplea una configuración de conexión compartida para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. En despliegues de Plaspy, los dispositivos suelen apuntar al servidor d.plaspy.com o a su IP pública 54.85.159.138 usando el puerto 8888. El SP8824 puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del equipo y el comportamiento del operador. Todos los dispositivos en Plaspy usan el mismo puerto y la detección del protocolo se realiza automáticamente, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo que utiliza un rastreador GPS define cómo el dispositivo empaqueta la identificación, la ubicación, el movimiento y la telemetría básica para su envío a un servidor. En el caso del SP8824, el protocolo permite que el rastreador reporte posiciones, eventos de movimiento detectados por el acelerómetro y actualizaciones de batería o estado, para que Plaspy pueda mostrar esos eventos en su panel y en los sistemas de alertas.

- Transporta la identidad del dispositivo y el contexto de sesión para que los mensajes entrantes se asocien con el registro correcto.
- Envía la posición GPS y la marca temporal para que Plaspy reconstruya el historial de ubicaciones y los movimientos recientes.
- Reporta disparos de movimiento y actividad desde el acelerómetro de 3 ejes para soportar alertas y monitoreo de inactividad.
- Transmite el estado básico del dispositivo, como nivel de batería y último visto, para habilitar el monitoreo de salud en Plaspy.
- Soporta operación sobre enlace celular para que el SP8824 entregue actualizaciones mientras conserva energía mediante reportes adaptativos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint y puerto compartidos y utiliza ese flujo de datos para identificar el protocolo del rastreador en uso. En la mayoría de los casos, un SP8824 correctamente configurado reportará a Plaspy sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Los dispositivos reportan al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Todos los dispositivos Plaspy usan el mismo puerto del servidor, el puerto 8888, lo que simplifica la configuración.
- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según preferencias del dispositivo y de la red.
- Plaspy detecta automáticamente el protocolo cuando llegan datos al endpoint compartido, reduciendo pasos de configuración inicial.
- Si un rastreador no aparece, verifique la configuración de reporte del dispositivo y que esté apuntando al endpoint y puerto de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión y transporte afectan la forma en que el SP8824 llega a la plataforma Plaspy, pero no cambian el rol general del protocolo de dispositivo. El SP8824 soporta enlace celular y puede enviar mensajes por UDP o TCP a Plaspy en el puerto 8888.

- Plaspy acepta conexiones y mensajes en d.plaspy.com y en la IP 54.85.159.138 por el puerto 8888.
- El SP8824 puede usar UDP o TCP en el puerto 8888 según aprovisionamiento, opciones de firmware y condiciones de red.
- Usar UDP puede reducir la sobrecarga en actualizaciones frecuentes y pequeñas, mientras que TCP puede elegirse cuando se prefiera mayor confiabilidad de entrega.
- Asegúrese de que el APN y el aprovisionamiento celular del dispositivo permitan conexiones salientes al servidor y puerto de Plaspy.
- Confirme que no existan firewalls de red o restricciones del operador que bloqueen tráfico hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar tiempos de mensaje, campos disponibles o funciones opcionales; siempre verifique la versión de firmware del equipo.
- Revisiones de hardware o variantes regionales pueden alterar bandas soportadas o configuraciones de transporte por defecto que afecten el reporte.
- Los comandos de configuración del fabricante y los métodos de aprovisionamiento pueden variar entre unidades SP8824 y builds de firmware.
- La elección de transporte entre UDP y TCP puede requerir ajustes coincidentes en el dispositivo y una ruta de red que soporte el protocolo seleccionado.
- Plaspy detecta el protocolo automáticamente, pero es necesario que el direccionamiento hacia d.plaspy.com o 54.85.159.138 y el puerto 8888 sea correcto para una detección exitosa.
- Valide el comportamiento del dispositivo en una prueba controlada antes de un despliegue amplio para asegurar la cadencia de reportes y el mapeo de eventos esperado.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el SP8824 ayuda en la configuración inicial confiable, en la resolución eficiente de problemas y en el mantenimiento a largo plazo de los dispositivos en Plaspy. Saber qué envía el rastreador y cómo se conecta reduce el tiempo de puesta en marcha y mejora la operatividad.

- Permite diagnosticar más rápido cuando los dispositivos no aparecen en Plaspy al centrar las comprobaciones en direccionamiento y transporte.
- Ayuda a planificar intervalos de batería y reporte para balancear frecuencia de actualización con consumo energético.
- Facilita el mapeo correcto de eventos del acelerómetro y la telemetría a alertas y flujos de trabajo en Plaspy.
- Apoya la planificación de actualizaciones de firmware y la verificación de que campos críticos sigan siendo compatibles tras las actualizaciones.
- Reduce el tiempo de integración de nuevas unidades o variantes regionales al clarificar requerimientos comunes de red y direccionamiento.

## Por qué usar Plaspy con este protocolo

Combinar el SkyPatrol SP8824 con Plaspy ofrece un camino directo hacia ubicación en tiempo real, alertas de movimiento y telemetría básica para monitoreo personal y de pequeños activos. Plaspy normaliza los datos entrantes del SP8824 para que cuidadores, familias y organizaciones pequeñas puedan ver el historial de posiciones, recibir notificaciones de entrada y salida y supervisar la salud del dispositivo sin gestionar los detalles de bajo nivel del protocolo.

Para saber más sobre cómo Plaspy soporta dispositivos como el SP8824, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar la información más reciente del protocolo y del firmware en el sitio del fabricante https://www.skypatrol.com/ antes de un despliegue a gran escala.
