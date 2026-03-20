---
slug: /jointech/jt802/features
id: jt802-features
sidebar_label: Features
title: Jointech - JT802 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del bloqueo esclavo de válvula Jointech JT802 y su integración con Plaspy para control de válvulas monitoreo y auditoría
keywords:
  - características Jointech JT802
  - funciones GPS Jointech JT802
  - bloqueo de válvula JT802
  - compatibilidad JT802 Plaspy
  - bloqueo esclavo de válvula Jointech
  - control de válvulas cisterna
  - bloqueo intrínsecamente seguro
  - desbloqueo Bluetooth sin conexión
  - desbloqueo remoto de válvula
  - integración telemetría de flota
---

# Jointech - JT802: Características

Esta página describe el contexto de funcionalidades públicas para el uso del bloqueo esclavo de válvula Jointech JT802 con Plaspy. Resume las capacidades del dispositivo que resultan relevantes para operadores de flotas, arquitectos de telemetría y equipos de campo cuando los eventos y estados del JT802 se integran en un entorno de gestión de flotas con Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Usted debe considerar este contenido como una visión práctica y confirmar los detalles del dispositivo con la documentación del fabricante y el firmware desplegado en cada instalación.

## Resumen de funciones

El JT802 es un bloqueo esclavo de válvula diseñado para instalaciones de múltiples válvulas en cisternas y entornos peligrosos. Cuando se despliega junto a bloqueos maestros Jointech y terminales portátiles intrínsecamente seguros, ofrece control de acceso registrable y reportes de estado que Plaspy puede presentar junto con el rastreo GPS y la telemetría de la flota.

- Bloqueo esclavo de válvula que se empareja con bloqueos maestros Jointech como los modelos JT701D y JT701L para escalar sistemas de múltiples válvulas en cisternas.
- Desbloqueo remoto en línea a través de la ruta del bloqueo maestro y desbloqueo basado en Bluetooth para uso fuera de línea por parte de los equipos de campo.
- Operación de bajo consumo con batería desechable de litio-manganeso para larga vida entre mantenimientos.
- Certificación de seguridad intrínseca y compatibilidad con terminales portátiles intrínsecamente seguros para uso en entornos de combustible y petróleo.
- Informe de estado de válvula, eventos de alarma y datos de temporización hacia plataformas de telemetría para respuesta a incidentes y trazabilidad de auditoría.
- Configuración remota de parámetros del producto para simplificar despliegues en flota y reducir visitas de servicio en sitio.

## Características principales del Jointech - JT802

- Operación como bloqueo esclavo que funciona en conjunto con un bloqueo maestro Jointech para control remoto centralizado.
- Soporte Bluetooth para desbloqueo fuera de línea y emparejado con terminales portátiles intrínsecamente seguros.
- Reporte del estado del bloqueo de válvula y eventos de alarma para telemetría y monitoreo.
- Diseño de bajo consumo alimentado por una batería desechable de litio-manganeso.
- Certificación de seguridad intrínseca apta para entornos peligrosos de manejo de combustibles y aceites.
- Configuración remota de parámetros para permitir ajuste a nivel de flota y reducir trabajo de campo.
- Contexto de posicionamiento derivado del bloqueo maestro y de la ubicación del teléfono móvil en lugar de un módulo GNSS a bordo.

## Cómo funcionan estas características con Plaspy

Al integrarse en una flota habilitada con Plaspy, los eventos y actualizaciones de estado del JT802 complementan los datos del rastreador GPS para proporcionar contexto operativo y una mayor percepción situacional.

- El estado de la válvula y los eventos de alarma se muestran junto a la posición del vehículo y el historial de ruta para ayudar a correlacionar acciones con ubicación y tiempo.
- Las solicitudes de desbloqueo remoto en línea que pasan por la vía del bloqueo maestro pueden reflejarse como eventos de control y entradas de auditoría en Plaspy.
- El desbloqueo Bluetooth fuera de línea realizado por equipos de campo aparece como eventos locales de acceso que se pueden correlacionar con la telemetría del dispositivo y del vehículo.
- Los cambios de configuración remotos quedan registrados y pueden ser seguidos mediante los informes de Plaspy para la gestión de despliegues.
- El contexto combinado de tiempo y ubicación desde el bloqueo maestro y los dispositivos portátiles permite investigaciones de incidentes y reproducción de rutas más claras.

## Casos de uso típicos

- Gestión de distribución de combustible donde los tiempos de acceso a válvulas y las trazas de auditoría deben vincularse a datos de ruta y registros de entrega.
- Flujos de trabajo antirobo que usan eventos de alarma y estado de válvula para detectar actividad no autorizada y activar respuestas.
- Monitoreo del transporte de cisternas para correlacionar operaciones de válvulas con la reproducción del rastro GPS para cumplimiento y revisión de incidentes.
- Operaciones logísticas seguras en zonas peligrosas donde se requiere seguridad intrínseca e interoperabilidad con terminales portátiles.
- Despliegues de flota en los que la configuración remota reduce la necesidad de visitas repetidas al campo.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y software pueden cambiar la presencia, el nombre y el comportamiento de eventos y opciones de configuración.
- Las revisiones de hardware y las variantes regionales del producto pueden alterar certificaciones, tipo de batería o especificaciones de interfaz.
- El método de instalación y la elección del modelo de bloqueo maestro Jointech influyen en qué funciones de desbloqueo remoto y reporte están disponibles.
- El desbloqueo Bluetooth fuera de línea requiere terminales portátiles intrínsecamente seguros compatibles y procedimientos de emparejado correctos.
- Consulte siempre las notas de la versión y las guías de instalación del fabricante para conocer las capacidades precisas de una unidad determinada.

## Por qué usar Plaspy con estas funciones

Combinar el JT802 con Plaspy ofrece a los operadores una vista operativa unificada que integra eventos de control de acceso con la ubicación del vehículo y la telemetría. Esta visibilidad por capas ayuda a optimizar la respuesta a incidentes, mejorar la auditabilidad y facilitar las operaciones rutinarias en flotas de cisternas donde el control de válvulas es una parte crítica de los flujos de trabajo de seguridad y protección.

Para obtener más información sobre cómo Plaspy puede mostrar eventos del JT802 junto con la telemetría de su flota visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, información de certificación y detalles de firmware verifique la documentación actual del fabricante en https://www.jointcontrols.com/ ya que las funciones y las implementaciones pueden cambiar con el tiempo.
