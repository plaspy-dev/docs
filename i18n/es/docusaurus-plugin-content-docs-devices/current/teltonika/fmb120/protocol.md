---
slug: /teltonika/fmb120/protocol
id: fmb120-protocol
sidebar_label: Protocol
title: Teltonika - FMB120 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el Teltonika FMB120 con la plataforma de rastreo Plaspy
keywords:
  - Protocolo Teltonika FMB120
  - Protocolo GPS Teltonika FMB120
  - Protocolo de rastreo FMB120
  - Protocolo de rastreador GPS Teltonika
  - Compatibilidad FMB120 Plaspy
  - Protocolo de comunicación rastreador GPS
  - Protocolo de seguimiento de vehículos Plaspy
  - Integración telemetría FMB120
  - Rastreo de flotas Teltonika
  - Protocolo de dispositivo Plaspy
---

# Teltonika - Protocolo FMB120

Esta página ofrece contexto público sobre el protocolo utilizado por el Teltonika FMB120 cuando se integra con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales y no sensibles, de modo que gerentes de flota e integradores sepan qué configurar y verificar al incorporar el FMB120 para rastreo en vivo, telemetría de eventos y flujos de control remoto.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo de reporte cuando un equipo envía datos al endpoint de Plaspy. El comportamiento exacto del protocolo en campo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página cubre el contexto general de comunicación en lugar de detalles internos específicos de firmware.

## Resumen del protocolo

El FMB120 usa un enlace celular para transmitir ubicación, estado y telemetría de eventos a un servidor remoto. El dispositivo soporta funciones telemáticas habituales para vehículos, como reporte de posición GPS, estados de E/S digital, control remoto de inmovilizador, sensores 1-Wire y periféricos Bluetooth LE. En términos de integración, el protocolo es el mecanismo que permite que el rastreador se identifique, envíe datos posicionales y de telemetría utilizables, y reciba comandos o actualizaciones de configuración desde el servidor.

- Permite que el dispositivo informe posición GPS, marcas de tiempo y estado básico a Plaspy para mapas en vivo e historial.
- Transporta telemetría de E/S digital y sensores para que Plaspy interprete eventos de ignición, puertas o alarmas y dispare reglas.
- Habilita la entrega de comandos remotos, como control de inmovilizador, cuando el firmware del equipo lo soporta.
- Admite la transmisión de datos auxiliares desde sensores Bluetooth LE y 1-Wire para que Plaspy muestre temperatura y otras métricas.
- Proporciona identidad del dispositivo y contexto de sesión para que Plaspy asocie los mensajes entrantes con el activo de la flota correcto.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido y usa el flujo de mensajes para determinar qué protocolo de rastreador se está usando. En la mayoría de los casos no necesita seleccionar un protocolo específico dentro de Plaspy si el FMB120 está configurado para reportar al endpoint de Plaspy y envía la telemetría estándar correspondiente a su versión de firmware.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo establece conexión y comienza a reportar.
- El endpoint compartido de Plaspy reduce pasos de configuración para integradores porque todos los dispositivos usan el mismo servidor y puerto.
- Por lo general, usted solo debe apuntar el FMB120 al servidor de Plaspy y asegurarse de que el dispositivo esté autorizado para enviar telemetría.
- Si un dispositivo no aparece en línea, verificar la configuración del servidor del equipo y la compatibilidad de firmware suele ser el primer paso.
- La detección automática ayuda cuando las flotas mezclan varios modelos de rastreadores, ya que Plaspy identifica cada dispositivo por sus datos entrantes.

## Transporte y contexto de conexión

El FMB120 puede configurarse para usar transporte UDP o TCP según los ajustes del dispositivo y las capacidades del firmware. Plaspy ofrece un endpoint consistente para que los equipos reporten a la misma dirección de servidor y puerto usados por todos los dispositivos soportados, lo que simplifica el despliegue y la configuración de cortafuegos para los equipos de operaciones.

- El dominio del servidor de Plaspy para reportes de rastreadores es d.plaspy.com.
- Una IP pública del servidor Plaspy disponible para configuración es 54.85.159.138.
- El puerto compartido que usa Plaspy para conexiones de dispositivos es 8888 y los equipos pueden configurarse para usar UDP o TCP en este puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita la configuración de redes y cortafuegos para las flotas.
- Asegúrese de que el protocolo de transporte elegido coincida con la configuración del FMB120 y con las restricciones del operador móvil en su región.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios en el comportamiento del protocolo o campos nuevos, así que siempre verifique el nivel de firmware del FMB120 durante las pruebas.
- Las variantes de hardware y las opciones de embalaje a veces exponen interfaces diferentes o ajustes por defecto que afectan cómo el dispositivo reporta telemetría.
- La elección entre UDP y TCP puede influir en la entrega bajo condiciones de red pobres; seleccione el modo que mejor se ajuste a sus necesidades de fiabilidad y latencia.
- Ajustes del fabricante o configuraciones personalizadas aplicadas por distribuidores pueden alterar direcciones de servidor predeterminadas o intervalos de reporte.
- Valide la compatibilidad con la documentación actual de Teltonika y pruebe un número reducido de dispositivos antes de un despliegue masivo.
- La detección automática de Plaspy reduce la selección manual de protocolos, pero no reemplaza la verificación de la configuración del equipo y la compatibilidad de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del FMB120 ayuda a los equipos a asegurar una incorporación confiable, realizar diagnósticos efectivos y garantizar un comportamiento predecible a largo plazo cuando los dispositivos se gestionan mediante Plaspy. Tener claridad sobre lo que el rastreador envía y lo que Plaspy espera reduce el tiempo de despliegue y mejora el tiempo operativo.

- Acelera la configuración inicial al verificar que el dispositivo apunte al endpoint correcto de Plaspy y al transporte adecuado.
- Facilita el diagnóstico de problemas de conectividad confirmando si el equipo llega al servidor y usa el puerto esperado.
- Mejora la precisión de reglas y alertas cuando usted conoce qué telemetría y tipos de eventos provee el dispositivo.
- Ayuda a planificar actualizaciones de firmware, ya que los cambios pueden afectar cómo se codifican los datos o qué campos se reportan.
- Permite tomar decisiones informadas sobre el uso de sensores como Bluetooth LE o accesorios 1-Wire que amplían las capacidades de telemetría.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB120 con Plaspy ofrece una solución de rastreo práctica y económica para flotas que necesitan ubicación continua, telemetría básica y capacidades de control remoto. El factor de forma compacto del FMB120, su soporte para sensores Bluetooth LE y sondas de temperatura 1-Wire, y las funciones de inmovilizador remoto se integran bien con los mapas en vivo de Plaspy, las alertas de eventos y los flujos de trabajo basados en reglas para proporcionar visibilidad operativa útil.

Para obtener más información sobre Plaspy y cómo se integra con una amplia gama de rastreadores, incluido el FMB120, visite https://www.plaspy.com. Verifique los detalles específicos del protocolo del dispositivo, los cambios de firmware y las notas de implementación más recientes con Teltonika en el sitio oficial https://www.teltonika-gps.com/ ya que el comportamiento del fabricante y las funciones soportadas pueden cambiar con el tiempo.
