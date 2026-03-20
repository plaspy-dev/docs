---
slug: /skypatrol/sp9501/protocol
id: sp9501-protocol
sidebar_label: Protocol
title: SkyPatrol - SP9501 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar SkyPatrol SP9501 con los servidores de Plaspy y orientación sobre conectividad y compatibilidad
keywords:
  - protocolo SkyPatrol SP9501
  - protocolo GPS SkyPatrol SP9501
  - protocolo de rastreo SP9501
  - compatibilidad SP9501 Plaspy
  - protocolo rastreador de activos SkyPatrol
  - protocolo CDMA rastreador de activos
  - protocolo de comunicación SP9501
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular SP9501
  - rastreo de activos SP9501
---

# SkyPatrol - Protocolo SP9501

Esta página describe el contexto público del protocolo para usar el rastreador SkyPatrol SP9501 con Plaspy. Explica de forma general cómo se comunica el dispositivo, qué ajustes de conexión emplea Plaspy y qué considerar al configurar los equipos para lograr reportes fiables. El enfoque está en información pública del protocolo, no en detalles internos sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del SP9501 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta información sirve como orientación para la integración y se debe verificar cualquier detalle específico del dispositivo con el fabricante cuando sea necesario.

## Visión general del protocolo

El protocolo del rastreador define las reglas y los tipos de mensajes que el SP9501 emplea para reportar ubicación, estado y telemetría a un servidor central. Para la integración con Plaspy, el propósito del protocolo es asegurar que el dispositivo pueda identificarse, transmitir datos de posición y estado utilizables, y soportar el transporte necesario para llegar al endpoint de Plaspy.

- Permite reportes periódicos y por eventos del SP9501 hacia el servidor de Plaspy
- Autoriza que el dispositivo incluya identidad e información básica de estado para que Plaspy pueda asociar los datos con el activo correcto
- Transfiere telemetría útil para monitoreo de activos, como el estado de batería e indicadores de movimiento, en un formato que Plaspy puede procesar
- Soporta operación sobre transportes de red estándar para que los dispositivos desplegados en campo puedan alcanzar Plaspy
- Provee la base para configuración remota y comportamientos dependientes de firmware cuando el rastreador lo soporta

## Cómo detecta Plaspy el protocolo

Plaspy espera que los rastreadores envíen datos a un endpoint compartido y determina automáticamente el protocolo correcto para los dispositivos soportados. Cuando un SP9501 está configurado para reportar a Plaspy, la plataforma identificará y analizará los mensajes entrantes sin requerir, en la mayoría de los casos, la selección manual del protocolo.

- Plaspy escucha en un único endpoint público en d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138 y el puerto del servidor es 8888
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador
- Si el SP9501 está configurado para enviar reportes al endpoint de Plaspy, por lo general no es necesario seleccionar el protocolo manualmente dentro de Plaspy
- Asegúrese de que el dispositivo esté configurado para reportar usando el transporte y destino descritos en los ajustes del equipo

## Transporte y contexto de conexión

La capa de transporte y la selección del endpoint son los primeros pasos prácticos al configurar un SP9501 para reportar a Plaspy. El dispositivo puede usar UDP o TCP según el soporte del equipo y la configuración elegida al desplegarlo.

- El SP9501 puede configurarse para usar UDP o TCP en el puerto 8888 para reportes
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración y el enrutamiento
- Elija UDP cuando el dispositivo y la red prefieran un transporte liviano; use TCP cuando se requiera mayor fiabilidad de sesión, sujeto a las capacidades del equipo
- Confirme que el acceso de red y las reglas de firewall permiten tráfico saliente hacia el endpoint de Plaspy en el transporte y puerto seleccionados

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, campos opcionales o la telemetría disponible; verifique la versión de firmware del equipo al solucionar problemas
- Las revisiones de hardware y la provisión de terminales para dispositivos CDMA pueden afectar la conectividad y deben validarse con el fabricante
- Algunas unidades SP9501 pueden soportar tanto reportes UDP como TCP, mientras que otras pueden estar limitadas a un solo modo de transporte
- Herramientas de configuración del fabricante o la provisión de la SIM pueden ser necesarias para habilitar el reporte de datos en dispositivos desplegados
- Siempre valide que el equipo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para asegurar que Plaspy reciba los datos
- En caso de duda, consulte la documentación oficial de SkyPatrol para pasos de configuración específicos del dispositivo

## Por qué es importante entender el protocolo

Tener un conocimiento práctico de cómo se comunica el SP9501 facilita la instalación, la confiabilidad operativa y la resolución de problemas cuando los dispositivos se despliegan a gran escala. Entender el papel del transporte, el endpoint y la variación por firmware reduce la fricción en la integración y mejora el tiempo de actividad.

- Ayuda a confirmar que el dispositivo está enviando datos al endpoint y puerto correctos de Plaspy
- Facilita la resolución de problemas cuando los reportes son intermitentes o no llegan a Plaspy
- Orienta la elección entre UDP o TCP según la red y las capacidades del dispositivo
- Aclara cómo los cambios de firmware y hardware pueden afectar el contenido y la frecuencia de los mensajes
- Favorece la coordinación efectiva con operadores, instaladores y el fabricante durante los despliegues

## Por qué usar Plaspy con este protocolo

Usar el SkyPatrol SP9501 con Plaspy ofrece una forma directa de recopilar ubicación y telemetría de activos en una plataforma centralizada. El enfoque de endpoint compartido de Plaspy simplifica el aprovisionamiento de dispositivos y reduce la complejidad de configuración por equipo, lo que resulta útil para flotas y despliegues masivos de activos.

Plaspy está diseñado para detectar automáticamente el protocolo del rastreador cuando los dispositivos reportan a la plataforma, y el diseño de puerto único de la plataforma mantiene la configuración consistente entre distintos modelos de rastreadores. Para obtener más información sobre Plaspy y cómo soporta el rastreo de flotas y activos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante sobre el SP9501, verifique la información con SkyPatrol en https://www.skypatrol.com/.
