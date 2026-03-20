---
slug: /xirgo/xt_2100/protocol
id: xt_2100-protocol
sidebar_label: Protocol
title: Xirgo - XT-2100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador Xirgo XT-2100 con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - protocolo Xirgo XT-2100
  - protocolo GPS XT-2100
  - compatibilidad Xirgo XT-2100 con Plaspy
  - protocolo de comunicación XT-2100
  - protocolo rastreador GPS Xirgo
  - protocolo de rastreo XT-2100
  - integración Xirgo con Plaspy
  - configuración TCP UDP XT-2100
  - rastreo de flotas XT-2100
  - rastreo de activos Xirgo XT-2100
---

# Xirgo - Protocolo XT-2100

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Xirgo XT-2100 con Plaspy. Resume cómo se comunica el dispositivo a alto nivel, qué esperar al apuntarlo a Plaspy y qué ajustes de conexión son comúnmente utilizados para la integración, sin exponer detalles sensibles o implementaciones internas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando los equipos reportan a la plataforma. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en consideraciones prácticas y no sensibles para la integración del XT-2100.

## Resumen del protocolo

El protocolo de comunicación del XT-2100 permite que el dispositivo envíe ubicación, estado y eventos a un servidor remoto, y reciba configuraciones o comandos cuando está soportado. En el contexto de Plaspy, su función es entregar telemetría e identificar el dispositivo para que la plataforma presente datos de ubicación y estado utilizables.

- Transporta la identidad del dispositivo y datos de sesión para que Plaspy pueda asociar los mensajes entrantes con un rastreador específico.
- Envía telemetría como posiciones GPS, velocidad, rumbo y estados de entradas/salidas para monitoreo y alertas.
- Incluye latidos periódicos y mensajes keepalive para que la plataforma detecte la conectividad y disponibilidad del dispositivo.
- Permite configuración remota y actualizaciones de firmware cuando el dispositivo y las herramientas del fabricante lo habilitan por la red.
- Usa capas de transporte como TCP o UDP para entregar mensajes según la configuración del dispositivo y las condiciones de la red.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los rastreadores en un único endpoint compartido y determina automáticamente el protocolo a partir del patrón del tráfico entrante y los identificadores del dispositivo. En la mayoría de los casos, un XT-2100 correctamente configurado comenzará a reportar sin que sea necesario seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy escucha en un endpoint compartido en d.plaspy.com y en la IP del servidor 54.85.159.138 para los reportes de dispositivo.
- La plataforma acepta conexiones en el puerto 8888 y usa la información recibida para detectar el protocolo de reporte automáticamente.
- Normalmente usted no necesita seleccionar un protocolo en Plaspy si el XT-2100 está configurado para enviar datos al endpoint de Plaspy.
- Plaspy soporta dispositivos que reportan tanto por UDP como por TCP en el mismo puerto y realiza la detección en ambos transportes.
- Identidad consistente del dispositivo y ajustes correctos del servidor en el rastreador son los requisitos típicos para una detección automática exitosa.

## Transporte y contexto de conexión

El XT-2100 puede configurarse para usar distintas opciones de transporte, y Plaspy soporta esos transportes comunes en un puerto compartido. Esta sección se enfoca en el contexto de conexión más que en la estructura interna de los paquetes.

- El dispositivo puede configurarse para usar UDP o TCP para comunicarse con Plaspy en el puerto 8888.
- Los rastreadores pueden apuntar al hostname d.plaspy.com o a la IP del servidor 54.85.159.138 como destino de reporte.
- Todos los dispositivos soportados por Plaspy utilizan el mismo puerto, lo que simplifica la configuración de cortafuegos y redes en el lado del servidor.
- Seleccionar UDP puede ser preferible por su menor sobrecarga para reportes frecuentes, mientras que TCP ofrece un transporte orientado a sesión más confiable según la configuración del equipo.
- Ajustes de red como la configuración del APN, el plan de datos de la SIM y la cobertura móvil siguen siendo factores importantes para una conectividad estable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles y las funciones opcionales; confirme la versión de firmware del dispositivo al validar el comportamiento.
- Revisiones de hardware o variantes regionales del XT-2100 pueden implementar funciones de forma distinta, por lo que conviene verificar la etiqueta y la documentación del equipo específico.
- Las opciones de configuración del fabricante (por ejemplo, selección de transporte TCP vs UDP) afectan directamente cómo el dispositivo alcanza a Plaspy; elija el transporte que se adapte a su red y necesidades operativas.
- Las actualizaciones por aire y los mecanismos de configuración remota pueden modificar el formato de reporte o los endpoints con el tiempo.
- Valide siempre que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para asegurarse de que llegue a Plaspy.
- En caso de dudas, consulte la documentación oficial de Xirgo y las notas de la versión para comportamientos específicos del dispositivo y diferencias conocidas.

## Por qué importa entender el protocolo

Tener una comprensión práctica de cómo comunica el XT-2100 facilita la instalación, el monitoreo operativo y la resolución de problemas al integrarlo con Plaspy. Saber qué transporte y endpoint usa el dispositivo reduce el tiempo hasta el primer reporte y mejora la confiabilidad a largo plazo.

- Asegura que se apliquen los ajustes correctos de servidor y transporte en el rastreador para conexiones iniciales exitosas.
- Ayuda a distinguir entre problemas de conectividad y problemas de interpretación de datos cuando los mensajes no aparecen como se espera.
- Facilita la planificación para escalado, ya que todos los dispositivos usan un puerto común y Plaspy centraliza la detección de protocolos.
- Apoya la resolución efectiva de problemas cuando cambios de firmware alteran la cadencia de reportes o los campos disponibles.
- Permite documentar el comportamiento del dispositivo para administradores de flota y equipos de mantenimiento.

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT-2100 con Plaspy ofrece a las organizaciones un camino sencillo para integrar un rastreador compacto y con funciones completas en un flujo de trabajo unificado de gestión de flotas o activos. El modelo de endpoint compartido y la detección automática de protocolos de Plaspy reducen la carga de configuración, de modo que los dispositivos correctamente apuntados al servidor de Plaspy pueden empezar a enviar telemetría útil con una configuración mínima en la plataforma.

Para saber más sobre Plaspy y cómo puede gestionar dispositivos como el XT-2100 visite https://www.plaspy.com. Para los detalles más actualizados y específicos del dispositivo sobre protocolos, firmware e implementación, verifique siempre la información con el fabricante en https://xirgo.com/.
