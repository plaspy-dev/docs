---
slug: /topfly/warriorx_300/protocol
id: warriorx_300-protocol
sidebar_label: Protocol
title: TopFly - WarriorX 300 Protocol
sidebar_class_name: menu_item_tracker
description: Vista general pública del protocolo del TopFly WarriorX 300 y su comunicación con Plaspy para seguimiento confiable de activos
keywords:
  - Protocolo TopFly WarriorX 300
  - Protocolo rastreador GPS TopFly
  - Protocolo de comunicación WarriorX 300
  - Protocolo de seguimiento WarriorX 300
  - Rastreador de activos TopFly Plaspy
  - Compatibilidad de dispositivos Plaspy
  - Guía protocolo rastreador GPS
  - Protocolo monitoreo de activos
  - Informes telemetría del rastreador
  - Protocolo para rastreadores de batería de larga duración
---

# TopFly - Protocolo WarriorX 300

Esta página describe el contexto público del protocolo para utilizar el rastreador TOPFLYtech WarriorX 300 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, para que usted, gestor de flotas o integrador, comprenda el papel de la conectividad y el reporte al desplegar este rastreador robusto y de larga autonomía.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo correctamente configurado reporta a la plataforma. El comportamiento en tiempo de ejecución, las funciones disponibles y la cadencia de mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por tanto la configuración del dispositivo y el estado del firmware influyen en cómo se comporta el WarriorX 300 en el campo.

## Resumen del protocolo

El WarriorX 300 emplea un protocolo de reporte que envía posiciones GNSS, telemetría de estado y notificaciones de eventos a Plaspy, de modo que la ubicación, el estado y las alertas estén disponibles para monitoreo y automatizaciones. El protocolo permite que el rastreador se identifique ante el servidor, entregue actualizaciones periódicas y por eventos, y soporte operaciones de configuración o firmware dentro de las limitaciones del firmware del dispositivo.

- Entrega posiciones GNSS y datos de ubicación a Plaspy para que el activo aparezca en mapas y en reproducción de historial
- Transporta telemetría del dispositivo como estado de batería, alertas de manipulación o extracción y estado de red para monitoreo operativo
- Soporta el reenvío de telemetría de sensores BLE (por ejemplo temperatura y humedad) para asociarlos al dispositivo en Plaspy
- Expone el reporte de eventos para que desencadenadores de geocerca, movimiento y batería baja puedan integrarse en flujos de trabajo de Plaspy
- Habilita mecanismos de configuración remota y actualización de firmware donde sean soportados por el firmware del dispositivo y las herramientas de aprovisionamiento

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos que reportan en un endpoint de entrada compartido y determina automáticamente el protocolo del rastreador basándose en el tráfico entrante a ese endpoint. En la mayoría de implementaciones no es necesario seleccionar manualmente un protocolo en Plaspy cuando el WarriorX 300 está configurado para reportar al servidor de Plaspy.

- Plaspy expone un endpoint común para que los dispositivos que reportan a la plataforma sean gestionados de forma consistente
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint de la plataforma
- Usualmente usted configura el dispositivo para que reporte a d.plaspy.com o a la IP del servidor Plaspy y no necesita elegir un protocolo dentro de la plataforma
- Si el WarriorX 300 está configurado para usar MQTT o SMS como transporte, esos flujos son ingeridos por Plaspy junto con los reportes TCP o UDP cuando son soportados
- Un aprovisionamiento correcto y el host de reporte adecuado aseguran que la detección automática tenga éxito y que los datos del dispositivo se parseen en Plaspy

## Transporte y contexto de conexión

El WarriorX 300 soporta múltiples transportes y puede configurarse para enviar telemetría y datos de localización por los enlaces celulares disponibles. Plaspy utiliza un puerto y host consistentes para las conexiones entrantes de rastreadores, de modo que la configuración de red de los dispositivos se pueda estandarizar en despliegues masivos.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138
- La plataforma escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar
- El WarriorX 300 puede usar TCP o UDP en el puerto 8888 según la configuración del dispositivo y las condiciones de red
- Transportes alternativos descritos en la documentación del dispositivo, como MQTT o SMS, también pueden utilizarse cuando sean soportados y configurados
- Debido a que el endpoint y el puerto de Plaspy son compartidos, el aprovisionamiento de múltiples unidades WarriorX 300 se simplifica y mantiene consistencia en la flota

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar qué modos de transporte y funciones están disponibles en una unidad WarriorX 300 concreta
- La elección de transporte (TCP o UDP) puede afectar la fiabilidad y el comportamiento de red según el proveedor celular y la cobertura
- Las opciones de cifrado y las funciones de seguridad dependen del firmware del dispositivo y de la configuración elegida durante el aprovisionamiento
- El reenvío de sensores BLE y el soporte de accesorios requieren firmware compatible y el emparejamiento correcto de los sensores en el dispositivo
- Verifique que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 y esté configurado para usar el puerto 8888 para la ingestión en Plaspy
- Confirme siempre la disponibilidad de funciones como FOTA o modos de reporte avanzados según el nivel de firmware del dispositivo y las herramientas de aprovisionamiento

## Por qué es importante entender el protocolo

Comprender cómo se comunica el WarriorX 300 con Plaspy ayuda a garantizar una puesta en marcha exitosa, una autonomía de batería predecible y alertas confiables para la protección y gestión de activos.

- Garantiza que el dispositivo apunte al host y puerto correctos para que los datos lleguen a Plaspy
- Permite equilibrar la frecuencia de reporte y la duración de la batería al alinear los perfiles de reporte del dispositivo con las expectativas de Plaspy
- Facilita la resolución de problemas cuando ocurren fallas de conectividad o falta de telemetría
- Permite mapear correctamente los datos de sensores BLE y los tipos de eventos en notificaciones y flujos de trabajo de Plaspy
- Reduce el riesgo en los despliegues al confirmar que el transporte y las opciones de seguridad son compatibles con los requisitos del operador

## Por qué usar Plaspy con este protocolo

Emplear el WarriorX 300 con Plaspy ofrece a los operadores un camino sencillo hacia el seguimiento de activos a largo plazo y de bajo mantenimiento con telemetría de condición integrada. Plaspy ingiere ubicación, estado y datos de evento para que los equipos puedan rastrear remolques, contenedores y equipos distribuidos, aprovechando modos de reporte adaptativos que extienden la vida útil de la batería en despliegues de campo.

Para aprender más sobre Plaspy y cómo se integran los dispositivos con la plataforma visite https://www.plaspy.com. Para obtener los detalles más actualizados sobre el protocolo específico del dispositivo, comportamiento de firmware e instrucciones de aprovisionamiento verifique la información en el sitio del fabricante https://www.topflytech.com/ ya que las implementaciones pueden cambiar con el tiempo.
