---
slug: /dct/solar_asset_tracker/protocol
id: solar_asset_tracker-protocol
sidebar_label: Protocol
title: DCT - Solar Asset Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el DCT Solar Asset Tracker con Plaspy y comprender la comunicación del dispositivo
keywords:
  - Rastreador DCT Solar Asset Tracker
  - protocolo rastreador DCT
  - protocolo Solar Asset Tracker
  - compatibilidad Plaspy
  - comunicación rastreador GPS
  - protocolo de rastreo de activos
  - protocolo SPA4G 1204 16
  - rastreador a Plaspy
  - protocolo de seguimiento de flotas
  - rastreador GPS solar
---

# DCT - Protocolo del Solar Asset Tracker

Esta página describe el contexto público del protocolo para usar el DCT Solar Asset Tracker (SPA4G-1204-16) con Plaspy. Se enfoca en cómo el rastreador comunica telemetría y eventos útiles a la plataforma Plaspy en términos no sensibles, y cómo suele configurarse esa comunicación en despliegues reales. El dispositivo está diseñado para uso prolongado en exteriores con energía solar, posicionamiento GNSS, respaldo por Wi‑Fi y LBS, y conectividad 4G global; aquí se explica el papel de la comunicación del equipo cuando se integra con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles públicos de comunicación con Plaspy, el dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta correctamente al endpoint de Plaspy.

## Visión general del protocolo

El protocolo utilizado por el Solar Asset Tracker define cómo el equipo reporta la posición, el estado del dispositivo y las banderas de evento a un endpoint en la nube para que Plaspy pueda mostrar ubicación en tiempo real, disparar alertas y almacenar telemetría histórica. Esta página mantiene la discusión a un nivel alto para ayudar a integradores de sistemas y técnicos de campo a entender el rol de la comunicación sin exponer detalles privados o específicos del firmware.

- Transmite fijaciones de posición y tiempos para que Plaspy pueda renderizar ubicación en vivo y recorridos históricos.
- Envía telemetría y estado como nivel de batería, estado de carga y eventos de sensores para monitoreo de salud del equipo.
- Entrega alertas basadas en eventos, como manipulación o movimiento, para que Plaspy active flujos de trabajo.
- Usa una conexión de red ligera adecuada para telemetría en 4G con métodos de respaldo para cobertura limitada.
- Identifica el dispositivo para que Plaspy pueda asociar los datos entrantes con el registro de activo correspondiente.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador a partir de las cargas útiles y metadatos reportados, por lo que normalmente no es necesario seleccionar el protocolo manualmente en la plataforma. Una configuración correcta del dispositivo para apuntar a Plaspy y elegir el transporte apropiado garantiza que la plataforma pueda identificar y parsear los datos del equipo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el reporte de dispositivos.
- El puerto es 8888 y Plaspy utiliza este mismo puerto para todos los dispositivos compatibles.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del modelo.
- Cuando un dispositivo reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y asigna la telemetría al registro del dispositivo.
- En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está correctamente configurado para reportar a d.plaspy.com usando el transporte y puerto soportados.

## Transporte y contexto de conexión

Comprender qué transporte usa el Solar Asset Tracker y cómo apunta al endpoint de Plaspy ayuda en la configuración inicial y en la resolución de problemas. El dispositivo soporta reportes por datos celulares y puede apuntar a un nombre DNS o a una IP directa para el endpoint de Plaspy.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El equipo puede usar UDP o TCP en el puerto 8888 según la configuración del modelo y las capacidades del firmware.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica las reglas de red para la telemetría saliente.
- Las configuraciones de la red celular, el APN y los puertos salientes permitidos en el perfil de la SIM deben permitir conexiones hacia Plaspy.
- Firewalls o restricciones del operador que bloqueen UDP o TCP saliente al puerto 8888 pueden impedir el reporte a Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden introducir variaciones en cómo se informan los campos de telemetría; siempre revise las notas de la versión del firmware para detectar cambios en el protocolo.
- Las revisiones de hardware pueden agregar o quitar sensores y, por tanto, cambiar el conjunto de atributos de telemetría reportados.
- Algunas herramientas de configuración del fabricante pueden cambiar el modo de transporte entre UDP y TCP; asegúrese de que el transporte elegido coincida con la política de su red.
- Configuraciones del fabricante y builds regionales del firmware pueden causar diferencias sutiles en el comportamiento; verifique los detalles específicos de su unidad.
- Valide cualquier función especial del dispositivo o campos opcionales contra la hoja de datos oficial del fabricante y la guía de configuración.
- Si depende de flujos de trabajo basados en eventos en Plaspy, confirme los eventos exactos y los umbrales soportados por la versión de firmware que tiene en campo.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador ayuda a asegurar despliegues exitosos, acelerar la resolución de problemas y mantener una calidad de telemetría consistente cuando los dispositivos se gestionan en Plaspy. Este conocimiento reduce el tiempo de inactividad y mejora la fiabilidad de las alertas y los informes históricos.

- Asegura el direccionamiento y transporte correctos para que los datos lleguen de forma consistente a Plaspy.
- Ayuda a interpretar señales de salud del dispositivo, como estado de carga y nivel de batería, para la planificación de mantenimiento.
- Acelera la resolución de problemas cuando eventos o actualizaciones de ubicación no aparecen en Plaspy.
- Orienta en la selección de perfiles de red y SIM que soporten el transporte requerido hacia Plaspy.
- Apoya decisiones sobre actualizaciones de firmware y cómo pueden afectar el reporte o el comportamiento de eventos.

## Por qué usar Plaspy con este protocolo

Usar el DCT Solar Asset Tracker con Plaspy ofrece a las organizaciones visibilidad consistente de activos remotos y fuera de la red con un mantenimiento mínimo. La energía solar y la larga autonomía de batería del rastreador, combinadas con posicionamiento multimodal y reporte de eventos, lo hacen adecuado para remolques, contenedores, maquinaria pesada y otros despliegues a largo plazo en los que la ubicación continua y las alertas son importantes.

Plaspy centraliza telemetría, alertas de eventos y reproducción histórica de recorridos para que los equipos puedan monitorear activos, responder a alertas de manipulación o movimiento, y planificar mantenimiento con base en datos de salud del dispositivo. Para saber más sobre Plaspy y cómo gestiona las integraciones de dispositivos visite https://www.plaspy.com. Para los detalles específicos más recientes del protocolo del dispositivo, cambios de firmware e instrucciones de configuración, verifique la documentación del fabricante en https://www.digitalcomtech.com, ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
