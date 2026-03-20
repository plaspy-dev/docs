---
slug: /eelink/tk419_3/protocol
id: tk419_3-protocol
sidebar_label: Protocol
title: EElink - TK419‑3 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del rastreador EElink TK419‑3 y su comunicación con Plaspy para seguimiento de flotas confiable
keywords:
  - protocolo EElink TK419-3
  - protocolo GPS TK419-3
  - rastreador EElink Plaspy
  - protocolo de comunicación TK419-3
  - protocolo de rastreo TK419-3
  - compatibilidad GPS EElink Plaspy
  - rastreo vehicular TK419-3
  - gestión de flotas TK419-3
  - telemetría TK419-3
  - integración de dispositivos Plaspy
---

# EElink - Protocolo TK419‑3

Esta página describe, a nivel público, el contexto del protocolo para usar el rastreador EElink TK419‑3 con Plaspy. Aquí se explica de forma general cómo el dispositivo se comunica con la plataforma Plaspy y qué aspectos de los reportes del equipo son relevantes al integrar el dispositivo en un flujo de trabajo de gestión de flotas.

El TK419‑3 es un rastreador de vehículo compacto con LTE Cat 1 y conmutación a GSM, GNSS multi‑constelación, entrada ACC, control de relé opcional y telemetría a bordo que Plaspy procesa para seguimiento en tiempo real y alertas. Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según versiones de firmware, revisiones de hardware y detalles de implementación del fabricante. Confirme siempre el comportamiento específico del dispositivo con la documentación del fabricante cuando necesite detalles precisos de paquetes o comandos.

## Resumen del protocolo

El protocolo usado por el TK419‑3 define cómo el rastreador reporta posiciones GNSS, estados de E/S, alarmas y telemetría a Plaspy, y cómo se intercambian configuraciones remotas y comandos cuando están soportados. A grandes rasgos, el protocolo permite la entrega fiable de datos de posición y eventos para que Plaspy los normalice y los presente en el panel.

- Permite que el equipo se identifique y envíe actualizaciones de posición GNSS y marcas de tiempo a Plaspy.
- Transporta estados digitales y analógicos de E/S como encendido ACC, activaciones SOS y lecturas de sensores externos.
- Lleva notificaciones basadas en eventos como entrada/salida de geocerca, exceso de velocidad, colisiones y pérdida de alimentación.
- Soporta configuración remota y acuses de recibo de comandos cuando el firmware del dispositivo implementa actualizaciones por aire.
- Proporciona a Plaspy los datos necesarios para normalizar la información para mapas, historial y reportes de telemetría.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y conocido y utiliza la información de esas conexiones para determinar qué protocolo usa el rastreador. En la mayoría de los casos, un TK419‑3 correctamente configurado para reportar al endpoint de Plaspy será detectado automáticamente sin necesidad de seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha conexiones de dispositivos en el dominio compartido d.plaspy.com.
- La plataforma también acepta conexiones dirigidas a la dirección pública del servidor 54.85.159.138.
- Plaspy utiliza un único puerto común para el reporte de dispositivos, lo que simplifica la configuración en el equipo.
- Los dispositivos pueden conectarse mediante UDP o TCP en el puerto 8888 para alcanzar Plaspy.
- Cuando el TK419‑3 está configurado para reportar al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes al registro del dispositivo.

## Transporte y contexto de conexión

Las configuraciones de conexión y transporte son de las comprobaciones más habituales al integrar un rastreador. El TK419‑3 puede usar UDP o TCP según la configuración y el firmware, y debe apuntarse al endpoint de Plaspy para asegurar la entrega de datos.

- El TK419‑3 puede configurarse para usar UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a 54.85.159.138 para el reporte.
- Plaspy emplea el mismo puerto para todos los dispositivos soportados para simplificar el aprovisionamiento y las reglas de red.
- Asegúrese de que firewalls de red y operadores móviles permitan tráfico saliente hacia el dominio y puerto de Plaspy.
- Verifique que el APN y la configuración GPRS/LTE del dispositivo sean correctos para que el rastreador establezca una sesión de datos hacia la nube.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el conjunto exacto de mensajes y el comportamiento; dos unidades con firmware distinto pueden comportarse de forma diferente.
- Las revisiones de hardware y las configuraciones de accesorios opcionales (relé, sensores RS232, expansiones GPIO) pueden afectar qué campos de telemetría están presentes.
- Diferencias regionales o del operador en la conectividad celular pueden impactar la fiabilidad del transporte y el comportamiento de conmutación.
- La elección entre UDP y TCP puede influir en la fiabilidad y en la retransmisión según las condiciones de red.
- Siempre pruebe un dispositivo en una cuenta Plaspy real con condiciones de red representativas antes de un despliegue a gran escala.
- Consulte al fabricante las notas de versión de firmware y las guías de configuración al solucionar diferencias a nivel de protocolo.

## Por qué es importante comprender el protocolo

Entender cómo el TK419‑3 se comunica con Plaspy ayuda a garantizar reportes confiables, manejo correcto de alarmas y una resolución de problemas más rápida cuando surjan incidentes. Conocer el rol del transporte, el firmware y la configuración del dispositivo facilita las implementaciones y reduce el tiempo de respuesta.

- Simplifica el aprovisionamiento inicial del dispositivo y la configuración correcta de APN y servidor.
- Ayuda a diagnosticar ubicaciones faltantes, telemetría retrasada o reportes de E/S incorrectos.
- Orienta sobre la selección de transporte y las reglas de firewall para el entorno de despliegue.
- Aumenta la confianza al habilitar comandos remotos como control de relé o actualizaciones de parámetros.
- Evita sorpresas tras cambios de firmware al motivar la validación del comportamiento después de actualizaciones.

## Por qué usar Plaspy con este protocolo

Usar el EElink TK419‑3 con Plaspy ofrece a las organizaciones un rastreador compacto orientado al vehículo, integrado en una plataforma diseñada para visibilidad de flotas, alertas y flujos operativos. Plaspy procesa ubicaciones, estados de E/S y eventos de alarma del TK419‑3 y los presenta como actualizaciones de mapa en vivo, transmisiones de telemetría y notificaciones configurables que apoyan despacho, seguridad y análisis.

Para obtener más información sobre cómo operan los dispositivos TK419‑3 con Plaspy y cómo configurar su flota para reportes confiables, visite el sitio de Plaspy en https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware e instrucciones de configuración más actuales, consulte el sitio del fabricante EElink en https://www.eelink.com.cn/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con la documentación oficial.
