---
slug: /teltonika/ftc961/protocol
id: ftc961-protocol
sidebar_label: Protocol
title: Teltonika - FTC961 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Teltonika FTC961 para integración con Plaspy, ajustes de servidor y notas de compatibilidad
keywords:
  - protocolo Teltonika FTC961
  - integración FTC961 Plaspy
  - protocolo rastreador FTC961
  - protocolo rastreador Teltonika
  - seguimiento de flotas FTC961
  - compatibilidad rastreadores Plaspy
  - protocolo de comunicación FTC961
  - telemetría Teltonika FTC961
  - telemetría de flota FTC961
  - configuración FTC961
---

# Teltonika - Protocolo FTC961

Esta página documenta el contexto público del protocolo para usar el Teltonika FTC961 con Plaspy. Explica, en términos generales y sin entrar en detalles sensibles, cómo el dispositivo se comunica con la plataforma Plaspy y qué considerar al configurar el rastreador para un reporte confiable. El foco está en la conexión y la compatibilidad, no en formatos de paquete de bajo nivel ni en detalles propietarios del firmware.

El FTC961 es un rastreador LTE Cat 1 robusto, compatible con Plaspy, diseñado para aplicaciones de uso pesado. Ofrece mayor precisión GNSS, soporte para altos voltajes, protección IP69K y gestión remota mediante FOTA WEB y herramientas Teltonika. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre verifique el firmware del equipo y las notas del fabricante al planear un despliegue.

## Resumen del protocolo

El protocolo del rastreador es el método de comunicación a nivel de dispositivo que permite al FTC961 identificarse, enviar posición GNSS y telemetría, y comunicar estados y eventos a Plaspy. Esta sección mantiene la descripción a un nivel práctico para que usted pueda alinear la configuración del equipo, los ajustes de transporte y los flujos de trabajo de la flota con Plaspy sin exponer detalles internos del firmware.

- Permite que el FTC961 reporte ubicación, hora y datos de telemetría a la plataforma Plaspy para monitoreo en vivo y reproducción histórica.
- Transmite eventos y estados de entradas/salidas, como encendido, disparos de entradas digitales y actualizaciones de estado que Plaspy interpreta para alertas y reglas.
- Proporciona el direccionamiento y el contexto de sesión necesarios para que el rastreador se conecte a los ajustes de endpoint de Plaspy y mantenga el reporte.
- Soporta funciones de telemetría y gestión remota usadas con FOTA WEB y las herramientas de configuración de Teltonika, mientras entrega datos a Plaspy.
- Permite seleccionar entre diferentes transportes y ajustes de dispositivo que afectan la entrega de datos y el consumo de energía.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente el protocolo una vez que el dispositivo esté configurado para reportar a Plaspy. La detección se basa en la conexión entrante y el comportamiento de reporte del equipo, no en una selección manual dentro de la plataforma.

- El dominio del servidor central de Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y la plataforma escucha en un puerto común para todos los dispositivos.
- El puerto usado por todos los dispositivos en Plaspy es 8888 y Plaspy detecta automáticamente el protocolo del rastreador en ese puerto.
- Cuando un FTC961 configurado correctamente reporta al endpoint de Plaspy, la plataforma identificará y procesará la telemetría compatible sin que usted tenga que seleccionar el protocolo.
- Asegúrese de que el dispositivo reporte al endpoint de Plaspy y de que las rutas de red o restricciones del operador permitan que el equipo alcance d.plaspy.com o la IP indicada.

## Transporte y contexto de conexión

La elección de conexión, como TCP o UDP, y el endpoint destino determinan cómo el FTC961 entrega sus reportes a Plaspy. Estos detalles de transporte forman parte de la configuración del equipo y pueden modificarse mediante las herramientas de configuración de Teltonika o los servicios del fabricante.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte y la configuración del equipo.
- Los equipos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 para reportar.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota y las reglas de firewall.
- TCP suele proporcionar entrega más confiable, mientras que UDP puede emplearse cuando se necesita menor sobrecarga o por ajustes específicos del equipo según el despliegue.
- Verifique que el APN del operador móvil y las reglas de firewall salientes permitan tráfico hacia el endpoint de Plaspy y el protocolo de transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de reporte y los campos de comandos o telemetría disponibles; siempre revise las notas de la versión del firmware.
- Las revisiones de hardware pueden introducir diferencias en entradas soportadas, manejo de potencia o interfaces periféricas que afectan la integración.
- Las funciones de la plataforma Teltonika, como FOTA WEB y las herramientas de configuración, inciden en cómo actualiza y mantiene los ajustes para compatibilidad con Plaspy.
- La selección de transporte entre TCP y UDP debe coincidir con la configuración del equipo y las prioridades operativas en cuanto a confiabilidad y sobrecarga de datos.
- Algunas configuraciones del fabricante o variantes regionales pueden usar ajustes predeterminados diferentes; valide que el dispositivo esté configurado para apuntar al endpoint de Plaspy.
- En caso de duda, consulte las guías de configuración de Teltonika y asegúrese de que el rastreador pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 antes de un despliegue a gran escala.

## Por qué importa entender el protocolo

Comprender el protocolo de comunicación ayuda en la configuración, validación y mantenimiento de la confiabilidad de los dispositivos FTC961 en Plaspy. Reduce problemas de integración y facilita la resolución de incidencias sin necesidad de inspeccionar o modificar elementos propietarios.

- Confirma que el dispositivo reporte al endpoint correcto de Plaspy y que utilice el transporte y puerto previstos.
- Facilita el diagnóstico de problemas de conectividad causados por APN del operador, firewalls o configuración incorrecta del servidor.
- Permite el uso correcto de entradas y salidas digitales para que eventos y acciones remotas se reflejen en Plaspy según lo esperado.
- Facilita la planificación de actualizaciones de firmware y la gestión de configuraciones con herramientas remotas de Teltonika junto a Plaspy.
- Mejora la confiabilidad operacional al alinear los intervalos de sueño y reporte del equipo con las expectativas de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el FTC961 con Plaspy ofrece una forma práctica y escalable de recolectar datos GNSS y telemetría de equipos robustos y flotas industriales. La combinación de posicionamiento preciso, capacidades de gestión remota y la detección automática de protocolos de Plaspy simplifica el despliegue y las operaciones diarias de la flota.

Plaspy centraliza la telemetría del dispositivo, eventos e historial de ubicaciones para que los administradores de flota puedan monitorear el estado, configurar alertas y generar reportes across múltiples vehículos, confiando en ajustes de endpoint consistentes. Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, comportamiento de firmware y guías del fabricante, verifique la documentación oficial de Teltonika en https://www.teltonika-gps.com/ ya que las implementaciones y los firmwares pueden cambiar con el tiempo.
