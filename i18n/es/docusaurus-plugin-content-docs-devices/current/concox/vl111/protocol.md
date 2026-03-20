---
slug: /concox/vl111/protocol
id: vl111-protocol
sidebar_label: Protocol
title: Concox - VL111 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Concox VL111 y su comunicación con Plaspy para seguimiento y telemetría en tiempo real
keywords:
  - protocolo Concox VL111
  - protocolo GPS Concox VL111
  - Concox VL111 con Plaspy
  - protocolo del rastreador VL111
  - protocolo de comunicación VL111
  - protocolo rastreador GPS Concox
  - rastreo vehicular VL111
  - telemetría VL111
  - compatibilidad de rastreadores con Plaspy
  - integración Concox VL111
---

# Concox - Protocolo VL111

Esta página describe el contexto público del protocolo para usar el rastreador Concox VL111 con Plaspy. Explica, a alto nivel, cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión suelen emplearse y qué comportamientos del tracker son relevantes para la integración, sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, las revisiones de hardware y la implementación del fabricante; por eso esta página se enfoca en hechos públicos y estables sobre conectividad y compatibilidad en despliegues reales.

## Visión general del protocolo

El protocolo de reporte del VL111 es el mecanismo que el dispositivo emplea para identificarse y enviar posiciones GNSS, telemetría del vehículo y datos de eventos a un servidor remoto como Plaspy. Cuando se configura para apuntar a Plaspy, el tracker envía reportes periódicos de ubicación y eventos para que Plaspy los traduzca en seguimiento en vivo, reproducción de viajes y vistas de telemetría.

- Permite que Plaspy reciba actualizaciones de posición, velocidad, rumbo y un historial de ubicaciones con marca de tiempo para seguimiento en tiempo real y reproducción.
- Transporta telemetría del vehículo como voltaje, estado de batería, eventos del acelerómetro y estado del relé para monitorización y alertas en la plataforma.
- Entrega notificaciones de eventos como manipulación, vibración, conducción brusca y acciones del inmovilizador para que Plaspy active reglas y notificaciones.
- Soporta almacenamiento en búfer y comportamientos de reconexión que permiten al VL111 recuperar y subir entradas guardadas tras pérdidas temporales de red.
- Funciona sobre canales de transporte estándar para entregar mensajes a Plaspy sin que el usuario de la plataforma deba gestionar el parseo del protocolo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes entrantes en un endpoint de servidor compartido e identifica automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado se conecta. En la mayoría de los casos no necesita seleccionar manualmente un protocolo dentro de Plaspy si el VL111 apunta al endpoint correcto de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio público d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador para las conexiones entrantes.
- Cuando un VL111 se configura para reportar al endpoint de Plaspy, la plataforma asocia el tráfico entrante con la lógica de manejo correspondiente y mapea los campos al panel de Plaspy.
- Una APN correcta, conectividad de la SIM y intervalos de reporte adecuados ayudan a que Plaspy reciba un flujo estable de telemetría para la detección automática.
- Si un rastreador no aparece en Plaspy, revisar la configuración del servidor del dispositivo y la selección de transporte es un primer paso práctico.

## Contexto de transporte y conexión

El VL111 puede comunicarse a través de redes móviles y emplea métodos de transporte habituales para enviar su telemetría a Plaspy. La selección del transporte y la dirección del servidor forman parte de la configuración del dispositivo que determina cómo el tracker llega al endpoint de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte y la configuración del equipo.
- El dispositivo puede apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 como endpoint de reporte.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, por lo que un único puerto es suficiente entre modelos y facilita las reglas de firewall en los despliegues.
- La elección entre UDP y TCP puede afectar características de entrega como retransmisiones y patrones de acuse de recibo a nivel de red.
- Verificar que la SIM del dispositivo y la red móvil permitan conexiones salientes al puerto 8888 es una comprobación práctica de conectividad.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden modificar qué características o campos de mensaje reporta una unidad VL111 concreta; confirme siempre la versión de firmware al solucionar problemas.
- Las revisiones de hardware y las variantes regionales, como VL111S_LA y VL111S_EM, pueden diferir en soporte de bandas radio y comportamientos regionales que afectan la conectividad.
- Los métodos de configuración del fabricante —SMS, herramientas de PC o configuración en la nube— pueden producir valores predeterminados distintos de transporte o servidor.
- La selección de UDP o TCP debe seguir la documentación del dispositivo y las restricciones de la red local; ambos transportes son compatibles para reportar a Plaspy en el puerto 8888.
- Valide la compatibilidad contra el manual del usuario del dispositivo y con el fabricante para comportamientos específicos de firmware antes de desplegar a gran escala.
- Confirme los ajustes de APN, la provisión de la SIM y cualquier lista blanca de red requerida con su operador móvil y el sitio de instalación.

## Por qué es importante entender el protocolo

Conocer el comportamiento básico de comunicación del VL111 ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y garantizar operaciones predecibles a largo plazo en Plaspy. Comprender cómo el dispositivo reporta datos y qué ajustes de conexión utiliza reduce las suposiciones durante la integración y mejora la disponibilidad de la flota.

- Ayuda a instaladores y gestores de flota a confirmar que el dispositivo apunta a d.plaspy.com o a la IP de Plaspy y usa el puerto 8888.
- Agiliza la resolución de problemas cuando los dispositivos no aparecen en Plaspy, al centrar las comprobaciones en transporte, APN y versión de firmware.
- Permite decisiones informadas sobre UDP frente a TCP según necesidades de conectividad y comportamiento de la red.
- Facilita la planificación de actualizaciones OTA, despliegues de firmware y gestión de cambios de hardware en la flota.
- Aumenta la confianza al mapear eventos del dispositivo, como alertas del inmovilizador y del acelerómetro, en reglas y notificaciones de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el VL111 con Plaspy ofrece a las organizaciones una combinación práctica de reportes GNSS precisos, telemetría del vehículo y capacidades de control remoto. El factor de forma compacto del VL111, la compatibilidad con múltiples constelaciones GNSS, LTE Cat 1 con fallback a 2G, BLE 5.0 y el relé integrado lo hacen adecuado para motocicletas y vehículos ligeros donde la instalación discreta y la telemetría fiable son importantes.

El modelo de endpoint compartido y la detección automática de protocolo de Plaspy simplifican el despliegue al permitir que el VL111 reporte a un único endpoint de Plaspy. Para más información sobre funciones y capacidades de la plataforma visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información actual específica del dispositivo y las notas de firmware en el sitio del fabricante https://www.iconcox.com/.
