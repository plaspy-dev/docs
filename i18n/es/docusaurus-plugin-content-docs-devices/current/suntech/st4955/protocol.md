---
slug: /suntech/st4955/protocol
id: st4955-protocol
sidebar_label: Protocol
title: Suntech - ST4955 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Suntech ST4955 y su comunicación con Plaspy
keywords:
  - protocolo Suntech ST4955
  - protocolo GPS Suntech ST4955
  - protocolo de rastreo ST4955
  - compatibilidad rastreador GPS Suntech Plaspy
  - integración ST4955 Plaspy
  - protocolo rastreador de activos Suntech
  - protocolo rastreador GPS solar
  - protocolo de telemetría ST4955
  - comunicación Suntech ST4955
  - rastreo vehicular ST4955
---

# Suntech - Protocolo ST4955

Esta página explica el contexto público del protocolo para usar el rastreador Suntech ST4955 con la plataforma Plaspy. Se enfoca en cómo el dispositivo comunica posiciones GNSS, eventos del acelerómetro y telemetría de sensores opcionales a Plaspy, en lugar de detallar internals de parsers privados o aspectos de firmware. El ST4955 es un rastreador resistente alimentado por energía solar pensado para monitorización prolongada en exteriores, y el contenido que sigue parte de ese perfil de producto como base factual.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto público de integración y consideraciones prácticas para un funcionamiento fiable.

## Resumen del protocolo

El protocolo de comunicación del ST4955 regula cómo se transmiten las posiciones GNSS, valores de sensores y estado del dispositivo desde el rastreador hacia un servicio backend como Plaspy. A alto nivel, el protocolo permite que el rastreador se identifique, envíe telemetría periódica o por eventos y participe en flujos de gestión remota sin exponer formatos de paquete o detalles del parser.

- Permite al rastreador reportar ubicaciones y marcas de tiempo para mapeo y reproducción histórica.
- Transporta eventos del acelerómetro y el estado de movimiento para alertas de antirrobo y detección de movimiento.
- Lleva telemetría ambiental y de sensores como temperatura, humedad, luz y lecturas de sonda 1-wire cuando están disponibles.
- Soporta informes de salud remotos del dispositivo y canales usados para actualizaciones de firmware OTA o configuración.
- Proporciona un método consistente para que Plaspy asocie la telemetría entrante con el registro del dispositivo, haciendo que los datos sean accionables en alertas, paneles e informes.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos por telemetría entrante de una amplia variedad de rastreadores compatibles y detecta automáticamente el protocolo cuando la telemetría llega correctamente dirigida. En la mayoría de las implementaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el ST4955 está configurado para enviar telemetría a Plaspy.

- Plaspy usa el dominio d.plaspy.com como endpoint principal de reporte y la IP del servidor 54.85.159.138 también es accesible para configuraciones directas.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el ST4955 debe configurarse para enviar al puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando la telemetría llega al endpoint compartido, por lo que la selección manual del protocolo suele ser innecesaria.
- Una identificación de dispositivo adecuada y intervalos de reporte consistentes ayudan a Plaspy a asociar los datos entrantes con el perfil de dispositivo correcto.
- Si un dispositivo no aparece en Plaspy después de la configuración, revisar la accesibilidad de red y los ajustes de reporte del equipo es el primer paso recomendado.

## Transporte y contexto de conexión

El ST4955 puede usar transporte TCP o UDP estándar según la configuración del dispositivo y las condiciones de la red. La elección correcta del transporte y la configuración del endpoint son consideraciones prácticas para una entrega fiable y para las reglas de firewall.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Los dispositivos se pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 si es necesario para los flujos de aprovisionamiento.
- Todos los dispositivos soportados por Plaspy usan el mismo número de puerto 8888, lo que simplifica la configuración de redes y firewalls.
- El ST4955 típicamente funciona sobre redes LTE Cat M1 o NB IoT con conmutación a EGPRS 2G como respaldo, por lo que debe considerarse la cobertura celular y la configuración del APN al probar conectividad.
- Asegúrese de que el tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 esté permitido por su red y las configuraciones del proveedor de SIM.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de telemetría se reportan o cómo se codifican sensores opcionales; siempre revise las notas de firmware del dispositivo antes del despliegue.
- Las variantes de hardware o módulos opcionales como BLE, sensor de humedad o diferentes capacidades de batería pueden modificar el conjunto de telemetría disponible.
- La elección de transporte entre TCP y UDP puede afectar las garantías de entrega y debe alinearse con la configuración del dispositivo y las expectativas del operador.
- Las herramientas de configuración o procedimientos de aprovisionamiento del fabricante pueden variar por región y afectar cómo se configura el dispositivo para reportar a un endpoint.
- Las actualizaciones de firmware OTA pueden añadir o cambiar capacidades del protocolo, por lo que es recomendable mantener un proceso de pruebas escalonadas antes de actualizar toda la flota.
- Valide cualquier integración de sensores especiales o periféricos de terceros contra la documentación de Suntech y con un piloto de flota pequeño antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del ST4955 ayuda a garantizar una configuración exitosa, una resolución de problemas eficaz y la confiabilidad a largo plazo al usar Plaspy. Conocer el contexto del protocolo permite a los equipos configurar correctamente los dispositivos e interpretar el comportamiento de la telemetría durante la puesta en marcha y la operación.

- Asegura ajustes correctos de APN y endpoint para que la telemetría llegue al servicio Plaspy de manera fiable.
- Ayuda a elegir el modo de transporte apropiado y entender las implicaciones en latencia y fiabilidad de entrega de mensajes.
- Acelera la resolución de problemas cuando falta telemetría al enfocarse en accesibilidad de red, configuración del endpoint y diferencias de firmware.
- Orienta sobre qué sensores y flujos de telemetría aparecerán en Plaspy según las opciones del dispositivo y el firmware.
- Facilita la planificación de actualizaciones de firmware y ventanas de mantenimiento para evitar cambios inesperados en el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Combinar la serie Suntech ST4955 con Plaspy ofrece una forma práctica de unir hardware de larga duración y telemetría completa con una interfaz unificada de gestión de flotas. El ST4955 está diseñado para despliegues remotos alimentados por energía solar y Plaspy ingiere ubicaciones, eventos de movimiento y flujos ambientales para ofrecer conocimiento situacional de activos y vehículos.

Plaspy ofrece detección automática de protocolos en el endpoint compartido, alertas centralizadas e informes consolidados que permiten a los equipos actuar sobre la telemetría del ST4955 sin gestionar configuraciones de protocolo por dispositivo. Para saber más sobre Plaspy y cómo puede integrarse con los rastreadores Suntech visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la información más reciente específica del dispositivo en el sitio del fabricante en http://www.suntechint.com/ antes de un despliegue masivo.
