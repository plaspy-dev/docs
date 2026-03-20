---
slug: /goome/gm06nw/protocol
id: gm06nw-protocol
sidebar_label: Protocol
title: Goome - GM06NW Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS Goome GM06NW y cómo se comunica con Plaspy para un seguimiento vehicular confiable
keywords:
  - protocolo Goome GM06NW
  - rastreador GPS Goome GM06NW
  - protocolo de comunicación Goome GM06NW
  - protocolo de rastreo GM06NW
  - compatibilidad GM06NW Plaspy
  - soporte de rastreadores Plaspy
  - rastreo vehicular Goome
  - comunicación GPS Goome
  - rastreo de flotas GM06NW
  - descripción protocolo rastreador Goome
---

# Goome - Protocolo GM06NW

Esta página describe el contexto público del protocolo para integrar el rastreador GPS Goome GM06NW con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy y qué aspectos del comportamiento de reporte del equipo son relevantes para la configuración, monitoreo y resolución de problemas, sin exponer detalles privados o exclusivos del fabricante.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos están correctamente apuntados al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; comprender estas variables ayuda a garantizar una integración y operación confiables.

## Resumen del protocolo

El protocolo de comunicación del GM06NW regula cómo el rastreador informa ubicación, estado y alarmas a un servidor remoto, y cómo se pueden aplicar comandos o configuraciones remotas cuando están soportados. En Plaspy, el protocolo se considera el transporte de eventos y telemetría que se mapean a campos conocidos de la plataforma, como coordenadas GPS, marca temporal, estado de entradas y tipos de alarma.

- Entrega coordenadas GPS en tiempo real y actualizaciones de posición con marca temporal para visibilidad del vehículo.
- Transmite señales de estado del dispositivo como detección de ACC, alarma por vibración y estado de entrada de alimentación para monitoreo y alertas.
- Lleva notificaciones de eventos como alertas de geocerca, activaciones de SOS y marcadores de reproducción de seguimiento para que Plaspy pueda mostrar eventos significativos.
- Habilita señales relacionadas con control remoto cuando está soportado, por ejemplo comandos de corte de combustible o energía reflejados en reportes de estado del dispositivo.
- Proporciona información identificable del equipo y contexto de sesión para que Plaspy asocie los datos entrantes con el registro de activo correspondiente.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones entrantes de muchos modelos de rastreadores usando un endpoint unificado, y determina automáticamente el protocolo usado por un dispositivo individual cuando llegan los datos. Este enfoque reduce la configuración manual y simplifica la incorporación de equipos como el GM06NW cuando están configurados para reportar al conector de Plaspy.

- Plaspy escucha en un único puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador a partir del tráfico entrante.
- Los dispositivos que apuntan su dirección de servidor a d.plaspy.com y a la IP del servidor Plaspy son dirigidos al mismo endpoint de ingestión de Plaspy.
- Cuando el GM06NW está configurado para reportar al endpoint de Plaspy, usted normalmente no necesita seleccionar un protocolo dentro de Plaspy de forma manual.
- La detección automática cubre patrones de reporte comunes, por lo que la telemetría básica y las alarmas estándar se parsean en campos de Plaspy sin configuración extra.
- Si un dispositivo usa un firmware no estándar o configuraciones personalizadas, la verificación contra la documentación del fabricante puede ayudar a resolver discrepancias en la detección.

## Transporte y contexto de conexión

El transporte de conexión y direccionamiento forman parte del contexto de integración más que del interior del protocolo. El GM06NW puede configurarse para reportar por UDP o TCP según ajustes del dispositivo y firmware, y puede apuntar a un nombre DNS o a una dirección IP para alcanzar Plaspy.

- El GM06NW puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las decisiones de configuración.
- Plaspy acepta el tráfico de dispositivos en el puerto 8888 y usa ese mismo puerto para todos los dispositivos que soporta.
- Los dispositivos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Usar el nombre DNS facilita la configuración de los equipos cuando Plaspy actualiza infraestructura, mientras que la dirección IP ofrece una ruta directa en entornos restringidos.
- Elija el tipo de transporte que coincida con la orientación del firmware del dispositivo y las condiciones de red para obtener la mejor confiabilidad.

## Notas sobre compatibilidad del protocolo

- Diferentes versiones de firmware o revisiones de hardware del GM06NW pueden cambiar qué eventos o campos se reportan o cómo funcionan las características opcionales.
- Algunas funciones, como SOS, monitoreo de micrófono o corte remoto de energía, pueden requerir cableado específico del dispositivo o soporte de firmware para reportar de forma confiable a Plaspy.
- La selección de transporte entre UDP y TCP puede afectar el comportamiento de entrega; verifique que la configuración del dispositivo coincida con sus reglas de red y confiabilidad deseada.
- Parámetros configurables por el fabricante, como intervalos de reporte, umbrales de alarma y ajustes de geocerca, influyen en el volumen y la frecuencia de datos que Plaspy recibe.
- Builds de firmware personalizados o específicos por región del fabricante pueden alterar el soporte de comandos o la nomenclatura de eventos y deben validarse con la documentación oficial.
- Confirme siempre que el dispositivo esté configurado para reportar al endpoint y puerto de Plaspy para evitar pérdida de telemetría por errores de configuración.

## Por qué es importante entender el protocolo

Conocer el comportamiento del protocolo de comunicación del GM06NW facilita la configuración exitosa, la resolución práctica de problemas y asegurar la calidad de los datos en Plaspy. Entender qué reporta el dispositivo y cómo se conecta reduce el tiempo de integración y mejora la confiabilidad operativa.

- Ayuda a identificar errores de configuración como dirección de servidor incorrecta, tipo de transporte o puerto de reporte equivocado.
- Orienta las expectativas sobre la telemetría disponible para flujos de trabajo como geocercas, alertas SOS y monitoreo de cortes remotos.
- Asiste en ajustar intervalos de reporte y configuraciones relacionadas con energía para equilibrar precisión y consumo del dispositivo.
- Mejora los pasos de diagnóstico cuando la telemetría es intermitente, enfocándose en transporte, firmware y factores de red.
- Facilita la comunicación con el fabricante del dispositivo cuando se requieren aclaraciones sobre funciones avanzadas o comportamientos específicos de firmware.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Goome GM06NW ofrece a las organizaciones una forma directa de recolectar datos de ubicación, estado y alarmas en una única plataforma que admite visibilidad de flota y supervisión operativa. El endpoint unificado de ingestión de Plaspy y la detección automática de protocolo reducen la carga de configuración para que los eventos comunes del dispositivo se mapeen en la plataforma rápidamente.

Si desea evaluar escenarios de integración más profundos o confirmar que un build de firmware particular proporciona los eventos que necesita, consulte la documentación del dispositivo y los recursos del fabricante. Para obtener más información sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Verifique el soporte de protocolo y los detalles de firmware en el sitio del fabricante en http://www.goomegpstracker.com ya que el comportamiento del protocolo y las implementaciones de firmware pueden cambiar con el tiempo.
