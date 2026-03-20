---
slug: /ruptela/fm_tco4_lcv/protocol
id: fm_tco4_lcv-protocol
sidebar_label: Protocol
title: Ruptela - FM-Tco4 LCV Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Ruptela FM-Tco4 LCV con Plaspy
keywords:
  - protocolo Ruptela FM Tco4 LCV
  - protocolo GPS Ruptela FM Tco4 LCV
  - compatibilidad Ruptela FM Tco4 LCV Plaspy
  - protocolo de rastreo vehicular Ruptela
  - protocolo de comunicación FM Tco4 LCV
  - protocolo rastreador GPS Ruptela
  - integración monitoreo de combustible CANbus
  - rastreo de flotas OBD II
  - rastreo identificación de conductor
  - monitoreo bloqueo remoto de encendido
---

# Ruptela - Protocolo FM-Tco4 LCV

Esta página describe el contexto público del protocolo para usar el rastreador Ruptela FM-Tco4 LCV con Plaspy. Se enfoca en cómo el dispositivo comunica telemetría y datos del vehículo que resultan útiles para Plaspy, más que en formatos binarios privados o en la lógica interna de un parser. El FM-Tco4 LCV está diseñado para vehículos comerciales ligeros y puede reportar posición GPS, datos CANbus como nivel y consumo de combustible, códigos de motor OBD II, eventos de identificación de conductor y funciones de seguridad como bloqueo remoto de encendido.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión del hardware o la configuración del fabricante; por ello, los detalles aquí son una guía pública general para facilitar la integración y la resolución de problemas.

## Resumen del protocolo

El protocolo de comunicación del FM-Tco4 LCV define las reglas para que el rastreador transmita ubicación, telemetría del vehículo y datos de eventos a un servidor remoto. En la práctica, este protocolo permite que el dispositivo se identifique ante un backend, envíe reportes periódicos y por eventos, y suministre telemetría específica del vehículo que Plaspy puede mostrar a los usuarios.

- Permite enviar a Plaspy informes de posición GPS y movimiento desde el rastreador
- Incluye datos derivados del CANbus como nivel de combustible, consumo, kilometraje y otras señales del vehículo
- Transmite reportes diagnósticos OBD II y códigos de error del motor para flujos de mantenimiento preventivo
- Soporta eventos de identificación y registro de conductor para responsabilidad y atribución de viajes
- Entrega señales de seguridad como el estado de bloqueo remoto de encendido y alertas de anti-jamming

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de los dispositivos en un único endpoint y puerto compartidos y, cuando el equipo está correctamente configurado para reportar a Plaspy, identifica automáticamente el protocolo del rastreador. En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo apunta al host y a la configuración de red correctos.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP pública 54.85.159.138
- El puerto compartido de Plaspy para todos los dispositivos soportados es 8888 y se usa en distintos modelos
- Plaspy puede detectar automáticamente el protocolo del dispositivo una vez que este envía datos al endpoint de Plaspy
- Normalmente solo debe configurar el dispositivo para que reporte a d.plaspy.com o a la IP indicada y usar el transporte correcto
- Si un dispositivo no se registra o no envía la telemetría esperada, verifique la dirección de red y los ajustes de transporte en el equipo y revise los registros del dispositivo

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento determinan cómo el FM-Tco4 LCV entrega sus datos a Plaspy. El equipo puede configurarse para usar UDP o TCP dependiendo del firmware y de las necesidades del despliegue, y debe apuntar al endpoint de Plaspy para establecer el reporte.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y la necesidad de fiabilidad en la red
- Los equipos pueden reportar al dominio d.plaspy.com o a la dirección numérica 54.85.159.138
- Todos los dispositivos gestionados por Plaspy usan el mismo puerto, por lo que la configuración es consistente entre modelos compatibles
- La elección entre UDP y TCP puede afectar el comportamiento de entrega pero no modifica cómo Plaspy identifica el protocolo una vez que llegan los datos
- Verifique que el enrutamiento de red y las reglas de firewall permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware del dispositivo pueden cambiar qué campos o señales CANbus se reportan
- Algunas marcas o implementaciones de CANbus pueden exponer señales de combustible o kilometraje diferentes; se recomienda validar contra el vehículo
- La selección del transporte (UDP vs TCP) se configura en el equipo y puede influir en la fiabilidad según las condiciones de la red
- Ajustes del fabricante como intervalos de registro, disparadores de eventos y funciones SMS pueden alterar el comportamiento de los reportes
- Plaspy detecta automáticamente el protocolo, pero es requisito que el rastreador esté apuntando al endpoint correcto y con el transporte adecuado
- Siempre valide el comportamiento del dispositivo con la documentación oficial más reciente del fabricante para detalles específicos de firmware

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del FM-Tco4 LCV ayuda a garantizar una configuración precisa, operación confiable y una resolución de problemas eficaz con Plaspy. Saber qué telemetría debe enviar el dispositivo aclara las decisiones de configuración y facilita el diagnóstico de faltantes en los datos reportados.

- Asegura el apuntado correcto del equipo a d.plaspy.com o 54.85.159.138 y el uso del puerto 8888
- Permite confirmar si las señales CANbus del vehículo necesarias para combustible o kilometraje están disponibles según el hardware y firmware
- Ayuda a resolver problemas cuando diagnósticos como códigos OBD II o eventos de identificación de conductor no aparecen en Plaspy
- Orienta la decisión entre usar UDP o TCP según el entorno de despliegue
- Facilita la planificación de actualizaciones de firmware que puedan cambiar los formatos de reporte o la telemetría disponible
- Mejora la colaboración con el fabricante en integraciones avanzadas

## Por qué usar Plaspy con este protocolo

Usar el Ruptela FM-Tco4 LCV con Plaspy ofrece a los operadores de flota una forma práctica de centralizar ubicación de vehículos, gestión de combustible, asignación de conductores y diagnósticos básicos en una sola plataforma. La capacidad del equipo para leer CANbus y OBD II complementa las funcionalidades de reporte y alertas de Plaspy, permitiendo mejorar la eficiencia de rutas, supervisar el combustible y establecer procesos de mantenimiento preventivo sin necesidad de sensores adicionales en muchos casos.

Para conocer más sobre cómo Plaspy trabaja con dispositivos como el FM-Tco4 LCV, visite https://www.plaspy.com. Para información de protocolo y firmware específica y actualizada del dispositivo, verifique los detalles en el sitio del fabricante https://ruptela.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
