---
slug: /topfly/solarx_130/protocol
id: solarx_130-protocol
sidebar_label: Protocol
title: TopFly - SolarX 130 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para TopFly SolarX 130 y cómo se comunica con Plaspy para seguimiento y telemetría fiables
keywords:
  - protocolo TopFly SolarX 130
  - protocolo GPS TopFly SolarX 130
  - protocolo de comunicación TopFly SolarX 130
  - protocolo SolarX 130 Plaspy
  - protocolo rastreador GPS SolarX 130
  - protocolo rastreador GPS TopFly
  - protocolo de seguimiento SolarX 130
  - protocolo rastreador Plaspy
  - protocolo rastreador de activos TopFly
  - protocolo GPS con energía solar
---

# TopFly - Protocolo SolarX 130

Esta página describe el contexto público del protocolo para usar el rastreador TopFly SolarX 130 con Plaspy. Se centra en cómo el dispositivo informa posición, telemetría y datos de sensores a Plaspy en términos generales, y en qué debe considerar al configurar el rastreador para comunicaciones confiables. El SolarX 130 es un rastreador robusto con certificación IP67 diseñado para visibilidad de contenedores, remolques y activos exteriores; cuenta con carga solar, baterías de larga duración, soporte para sensores BLE y un amplio buffer para datos offline.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página explica el papel del protocolo de comunicación en la integración exitosa del dispositivo y recomienda verificar la documentación del fabricante para detalles específicos de firmware o modelo.

## Descripción general del protocolo

El protocolo de reporte del dispositivo es el mecanismo que usa el SolarX 130 para enviar posiciones GNSS, eventos de movimiento y telemetría de sensores a una plataforma remota como Plaspy. En términos públicos, el protocolo define cómo se identifica el rastreador, cuándo informa y qué campos de datos se transmiten para que Plaspy presente información de ubicación y estado útil.

- Permite al rastreador transmitir posiciones GNSS, marcas de tiempo y eventos de movimiento a Plaspy para mapas y alertas.
- Transporta lecturas de sensores de accesorios BLE como sensores de temperatura, humedad y puertas junto con los datos de posición.
- Soporta carga con buffer para que los puntos almacenados se envíen a Plaspy cuando se restablezca la conectividad.
- Incluye reportes de eventos para alarmas como movimiento por extracción y batería baja que Plaspy puede usar para activar flujos de trabajo.
- Funciona sobre capas de transporte estándar soportadas por el dispositivo para que el rastreador pueda alcanzar los servidores de Plaspy desde redes variables.

## Cómo detecta Plaspy el protocolo

Plaspy provee un único endpoint y puerto compartidos para el reporte de dispositivos y detecta automáticamente el protocolo del rastreador cuando éste está correctamente configurado para reportar a ese endpoint. En la mayoría de los casos, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el SolarX 130 está configurado para enviar datos a los servidores de Plaspy.

- El dominio público de reporte de Plaspy es d.plaspy.com que resuelve a la IP del servidor Plaspy 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte y la configuración del equipo.
- Cuando el SolarX 130 apunta al endpoint de Plaspy y reporta, Plaspy identificará automáticamente el protocolo y analizará la telemetría entrante de ese dispositivo.
- El flujo de trabajo típico del usuario es configurar el rastreador para que reporte a d.plaspy.com o a la IP proporcionada y verificar la llegada de datos en Plaspy en lugar de seleccionar manualmente un protocolo.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el rastreador alcanza Plaspy a través de la red. El SolarX 130 soporta múltiples opciones de transporte a nivel de dispositivo, pero para reportar a Plaspy usted debe configurar el rastreador para usar el endpoint y puerto compartidos de Plaspy para que los datos lleguen de forma consistente.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de red.
- Apuntar el dispositivo al dominio d.plaspy.com o a la IP 54.85.159.138 dirigirá el tráfico hacia Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de red y firewalls.
- El SolarX 130 también soporta MQTT y SMS a nivel de dispositivo; al usar Plaspy, la vía principal de reporte es el puerto TCP o UDP compartido descrito arriba.
- Use reglas de firewall o listas de permitidos en la red para permitir tráfico saliente hacia d.plaspy.com en el puerto 8888 y así garantizar reportes fiables.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte y los campos disponibles, por lo que valide las expectativas del protocolo según la versión de firmware del dispositivo.
- Las revisiones de hardware y accesorios opcionales como sensores BLE o hubs I/O pueden afectar qué valores de telemetría aparecen en los reportes.
- La configuración de transporte por defecto del fabricante puede variar por región; confirme que el rastreador apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Elegir UDP versus TCP puede afectar la entrega bajo distintas condiciones de red; seleccione según sus necesidades de fiabilidad y latencia.
- Los grandes buffers offline del SolarX 130 significan que los puntos almacenados llegarán después de la reconexión, pero el orden de llegada y el agrupamiento pueden variar según el firmware.
- Siempre compare las instrucciones específicas de TopFly con la guía de configuración de Plaspy antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el SolarX 130 se comunica con Plaspy ayuda a asegurar una configuración fluida y reduce el tiempo de resolución de problemas cuando los reportes no aparecen como se espera. Estar al tanto de la ruta de reporte y de las capacidades del dispositivo permite un seguimiento más confiable y mejores decisiones operativas.

- Garantiza que el rastreador esté configurado para reportar al endpoint y puerto correctos de Plaspy y que los datos lleguen a la plataforma.
- Ayuda a elegir el modo de transporte apropiado, como UDP o TCP, según la fiabilidad y latencia de la red.
- Facilita el diagnóstico de telemetría faltante revisando versiones de firmware, comportamiento del buffer y compatibilidad de sensores.
- Apoya el manejo correcto de cargas bufferizadas para que los datos históricos se reconcilien una vez que la conectividad se restablezca.
- Permite el uso efectivo de alertas por movimiento por extracción y batería baja en los flujos de trabajo de Plaspy asegurando que esos eventos estén habilitados y se transmitan.

## Por qué usar Plaspy con este protocolo

Usar el SolarX 130 con Plaspy ofrece a las organizaciones una solución robusta para la visibilidad de activos exteriores, monitoreo de la cadena de frío y flujos de trabajo anti robo. La combinación de carga solar, buffers offline grandes, integración con sensores BLE y un desempeño GNSS sólido permite a Plaspy recibir actualizaciones de posición y telemetría de condición de forma frecuente incluso en entornos difíciles.

El endpoint de reporte compartido de Plaspy y la detección automática del protocolo reducen la complejidad de configuración y facilitan agregar dispositivos SolarX 130 a su flota. Para saber más sobre Plaspy y cómo maneja la telemetría de dispositivos visite https://www.plaspy.com. Para comportamiento específico de protocolo, notas de firmware y detalles de implementación consulte la información en el sitio del fabricante https://www.topflytech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
