---
slug: /topfly/t8608/protocol
id: t8608-protocol
sidebar_label: Protocol
title: TopFly - T8608 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador OBDII TopFly T8608 con Plaspy usando ajustes de servidor compartido y contexto de conexión
keywords:
  - Protocolo TopFly T8608
  - Protocolo GPS TopFly T8608
  - Protocolo de comunicación TopFly T8608
  - Protocolo de rastreo TopFly T8608
  - Protocolo rastreador OBDII TopFly
  - Compatibilidad T8608 Plaspy
  - Protocolo de rastreo Plaspy
  - Rastreo de vehículos TopFly T8608
  - Integración sensores BLE T8608
  - Rastreo de flotas TopFly
---

# TopFly - Protocolo T8608

Esta página describe el contexto público del protocolo para usar el rastreador OBDII TopFly T8608 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión se emplean y qué esperar durante la integración y el funcionamiento. El T8608 es un rastreador OBDII plug and play con soporte opcional para sensores BLE, reportes de ubicación en tiempo real y en búfer, y alertas básicas por eventos.

Plaspy utiliza ajustes de conexión compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando este comienza a reportar al endpoint de Plaspy. El comportamiento exacto del reporte del T8608 y cualquier característica extendida, como datos de sensores BLE, manejo del búfer o formatos de alerta, pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Por ello, siempre verifique las notas específicas del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo del rastreador define cómo el T8608 envía telemetría, alertas por eventos y cualquier dato asociado de sensores BLE a un servidor remoto. Para Plaspy, el protocolo establece el formato y la frecuencia con la que llegan las posiciones, estados e información de eventos para que la plataforma pueda interpretar y mostrar datos de rastreo útiles.

- Permite reportes periódicos y por eventos desde el T8608 hacia la nube.
- Transporta información de estado y alertas como desconexión de alimentación e eventos de encendido/apagado de ignición.
- Envía lecturas opcionales de sensores BLE cuando periféricos externos están emparejados con el rastreador.
- Soporta cargas en búfer para que los puntos de ubicación almacenados se entreguen tras la recuperación de la red.
- Permite a Plaspy identificar los reportes entrantes y mapearlos a un registro de dispositivo para monitoreo e historial.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y usa el contenido de los reportes para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos, un T8608 configurado para reportar a Plaspy será reconocido sin necesidad de seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor público de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Los dispositivos envían telemetría al endpoint de Plaspy en el puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta e interpreta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar al endpoint compartido.
- Normalmente, los usuarios solo necesitan configurar el dispositivo para que reporte al endpoint de Plaspy y elegir el transporte apropiado en el equipo.
- Si el dispositivo es alcanzable y está configurado correctamente, la selección manual de protocolo en Plaspy por lo general no es necesaria.

## Transporte y contexto de conexión

Las opciones de conexión en el T8608 (protocolo de transporte y destino) determinan cómo la telemetría llega a Plaspy, pero no cambian la semántica de reporte de alto nivel. El T8608 puede usar transportes IP estándar y comúnmente se configura para enviar datos al endpoint de reporte de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte del equipo y la preferencia del operador.
- Los rastreadores pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- El puerto 8888 se usa para todos los dispositivos que reportan a Plaspy, lo que simplifica la configuración entre modelos.
- Elija UDP cuando el firmware del dispositivo lo recomiende para reportes en ráfaga en tiempo real, o TCP cuando se prefiera un transporte orientado a sesión y más fiable.
- Las condiciones de red y las configuraciones de la operadora SIM pueden afectar qué transporte funciona mejor en una instalación particular.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar las funciones disponibles y la forma en que el dispositivo reporta sensores BLE o datos en búfer.
- Revisiones de hardware entre lotes pueden introducir diferencias menores en campos reportados o en el timing.
- Las herramientas de configuración del fabricante o las configuraciones por defecto pueden usar un transporte distinto; confirme el transporte antes de apuntar los dispositivos a Plaspy.
- El soporte de sensores BLE lo provee el T8608 para periféricos compatibles, pero las cargas útiles BLE y su disponibilidad dependen del firmware y del estado de emparejamiento.
- La capacidad de almacenamiento en búfer y el comportamiento de subida son características del dispositivo que afectan cómo se recuperan los puntos históricos tras interrupciones.
- Siempre valide la compatibilidad consultando la documentación actual del fabricante y las notas de versión del T8608.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo del rastreador reduce la fricción en la integración y ayuda a mantener los dispositivos reportando de forma confiable a Plaspy. Conocer el comportamiento general de los reportes y las expectativas de conexión facilita la configuración, la resolución de problemas y el mantenimiento.

- Configuración más rápida al apuntar el dispositivo al endpoint y transporte conocidos de Plaspy.
- Diagnóstico más claro cuando los datos no llegan o los búferes históricos no se suben como se espera.
- Mejor planificación para casos de uso con sensores BLE y verificación de si una versión de firmware soporta los tipos de sensor requeridos.
- Mayor confiabilidad operativa al ajustar las opciones de transporte del dispositivo según las condiciones de red y cobertura.
- Decisiones de actualización de firmware más informadas para preservar el comportamiento de reporte necesario.

## Por qué usar Plaspy con este protocolo

Usar el TopFly T8608 con Plaspy ofrece a las organizaciones un camino simple desde el rastreo OBDII plug and play hacia una plataforma de visibilidad gestionada. La combinación soporta ubicación en tiempo real, recuperación en búfer de datos perdidos, alertas básicas por eventos y telemetría opcional de sensores BLE para ampliar la monitorización del vehículo sin instalaciones complejas.

El diseño de endpoint compartido de Plaspy y la detección automática de protocolo le permiten apuntar un T8608 debidamente configurado a d.plaspy.com o 54.85.159.138 en el puerto 8888 y dejar que la plataforma ingiera los reportes del dispositivo. Para saber más sobre Plaspy y cómo maneja el reporte de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes sobre protocolo y firmware específicos del TopFly T8608, verifique la información con el fabricante en https://www.topflytech.com/ ya que los protocolos y el comportamiento del firmware pueden cambiar con el tiempo.
