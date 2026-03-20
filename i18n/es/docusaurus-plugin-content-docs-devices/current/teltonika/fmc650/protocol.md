---
slug: /teltonika/fmc650/protocol
id: fmc650-protocol
sidebar_label: Protocol
title: Teltonika - FMC650 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Teltonika FMC650 con Plaspy y obtener reportes confiables de GPS y telemetría
keywords:
  - Protocolo Teltonika FMC650
  - Protocolo GPS Teltonika FMC650
  - Compatibilidad FMC650 Plaspy
  - Protocolo de comunicación FMC650
  - Protocolo rastreador vehicular Teltonika
  - Protocolo telemático FMC650
  - Telemetría CAN FMC650
  - Integración tacógrafo FMC650
  - Protocolo de dispositivo Plaspy
  - Seguimiento de flotas FMC650
---

# Teltonika - Protocolo FMC650

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC650 con Plaspy. Explica, en términos generales y sin entrar en detalles sensibles, cómo el dispositivo se comunica con el backend de Plaspy y toma la descripción del FMC650 como base para notas prácticas de integración. El enfoque está en la conexión y en el contexto del protocolo más que en formatos de paquete a bajo nivel.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un dispositivo reporta al punto final de Plaspy. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware del FMC650, la revisión de hardware, la variante regional y la implementación del fabricante, por lo que esta guía enfatiza la compatibilidad general y los detalles de conexión en lugar de internas específicas de firmware.

## Descripción general del protocolo

El protocolo de reporte es el canal que el FMC650 usa para entregar posiciones GNSS, telemetría CAN, datos seriales, información de tacógrafo y mensajes de estado a Plaspy. En la práctica, el protocolo identifica el dispositivo, transmite ubicaciones y valores de sensores, y permite que Plaspy relacione los reportes entrantes con un registro de flota y paneles de telemetría.

- El protocolo habilita la identificación del dispositivo y el contexto de sesión para que Plaspy asigne el tráfico entrante al vehículo o activo correcto.
- Transporta las posiciones GNSS y las marcas de tiempo que Plaspy utiliza para mapeo y reconstrucción de la línea de tiempo.
- La telemetría proveniente de CAN, RS232/RS485 y de interfaces de tacógrafo se reporta por la misma conexión para ofrecer información vehicular más completa.
- Los mensajes de estado y latidos permiten a Plaspy supervisar la salud del dispositivo y las tendencias de conectividad.
- A nivel lógico el protocolo es agnóstico al transporte; el FMC650 puede enviar los mismos reportes por UDP o TCP según su configuración.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de rastreadores en un punto final compartido y usa lógica de detección de protocolo para enrutar e interpretar esos reportes automáticamente. Para la mayoría de las integraciones usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al punto final de Plaspy usando los ajustes comunes.

- Plaspy escucha en un solo puerto para todos los dispositivos soportados, lo que simplifica la configuración.
- El endpoint público del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP conocida del servidor es 54.85.159.138, usando el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el FMC650 u otro dispositivo comienza a reportar al endpoint de Plaspy.
- Normalmente se configura el FMC650 para apuntar a d.plaspy.com o a la IP del servidor y usar el puerto compartido para permitir la detección automática.
- Dado que Plaspy realiza la detección de protocolo, rara vez será necesario seleccionar manualmente el protocolo dentro del back end si el dispositivo está correctamente configurado para reportar a la plataforma.

## Transporte y contexto de conexión

Las decisiones de conexión y transporte afectan cómo el FMC650 entrega datos, pero no cambian la información lógica que reporta el rastreador. El FMC650 admite reporte por red celular y puede configurarse para usar UDP o TCP para comunicarse con Plaspy. Use ajustes de endpoint y puerto consistentes para que Plaspy pueda aceptar y procesar los reportes.

- El FMC650 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Los dispositivos se pueden apuntar al nombre DNS d.plaspy.com o a la IP del servidor 54.85.159.138 según las preferencias de configuración local.
- Plaspy utiliza el mismo puerto en todos los dispositivos soportados para simplificar despliegues y reducir errores de configuración.
- Elija UDP para menor sobrecarga y, en algunos casos, menor latencia; o TCP para entrega orientada a conexión cuando el dispositivo y la red lo soporten.
- Verifique restricciones a nivel de operador o APN que puedan afectar la alcanzabilidad por UDP o TCP antes de un despliegue a gran escala.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar qué mensajes o campos incluye el FMC650 en los reportes; verifique las notas de la versión del firmware para cambios en el protocolo.
- Las variantes de hardware regionales pueden afectar las bandas celulares disponibles y, por ende, las recomendaciones sobre comportamiento de transporte.
- Las herramientas y menús de configuración del fabricante pueden exponer opciones de transporte y ajustes de servidor; use esas herramientas para establecer d.plaspy.com o la IP y el puerto 8888.
- Al integrar CAN, tacógrafo o dispositivos seriales, confirme qué canales de telemetría expone su firmware al protocolo de reporte.
- El entorno de red y la configuración del operador pueden alterar las características de entrega entre UDP y TCP; pruebe ambos transportes cuando sea práctico.
- Siempre valide la aparición del dispositivo en Plaspy después de la configuración para confirmar la detección automática del protocolo y el parseo de datos.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del FMC650 ayuda a asegurar una configuración fiable del dispositivo, agilizar la resolución de problemas y mantener telemetría consistente en Plaspy. Saber qué ajustes de conexión usa el rastreador y cómo Plaspy detecta el protocolo reduce el tiempo de puesta en marcha y facilita diagnosticar problemas comunes de conectividad.

- Garantiza que el dispositivo apunte al endpoint correcto de Plaspy para que ocurra la detección automática.
- Ayuda a aislar si los problemas son de red, de transporte o de firmware durante el despliegue.
- Orienta la selección entre UDP y TCP según las condiciones de red y las necesidades de reporte.
- Aclara qué canales de telemetría (CAN, RS232/RS485, tacógrafo) estarán visibles en Plaspy.
- Reduce el tiempo de inactividad al permitir pasos de configuración repetibles en despliegues de flota grandes.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMC650 con Plaspy ofrece una vía directa para capturar fixes GNSS de alta calidad, diagnósticos del vehículo, datos de tacógrafo y lecturas de sensores seriales en una sola plataforma de gestión de flotas. Las interfaces telemáticas robustas del FMC650 y su soporte GNSS dual lo hacen adecuado para flotas pesadas, remolques y maquinaria especializada donde la telemetría continua y los datos de cumplimiento son importantes.

Para saber más sobre Plaspy y cómo maneja el reporte de dispositivos y la telemetría de flota, visite https://www.plaspy.com. Por favor confirme los detalles específicos de protocolo del dispositivo, el comportamiento del firmware y las notas del fabricante con la documentación oficial de Teltonika en https://www.teltonika-gps.com/ ya que el soporte de protocolo y las funciones de firmware pueden cambiar con el tiempo.
