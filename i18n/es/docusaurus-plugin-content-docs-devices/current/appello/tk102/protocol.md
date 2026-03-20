---
slug: /appello/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: Appello - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo Appello TK102 y cómo se comunica con Plaspy para integración y monitoreo confiables
keywords:
  - protocolo Appello TK102
  - protocolo GPS Appello TK102
  - protocolo de comunicación TK102
  - protocolo de rastreo TK102
  - compatibilidad rastreador GPS Appello
  - compatibilidad TK102 Plaspy
  - rastreador GPRS Appello TK102
  - rastreo de vehículos TK102
  - protocolo de dispositivo Plaspy
  - documentación protocolo rastreador GPS
---

# Appello - Protocolo TK102

Esta página describe el contexto público del protocolo para usar el rastreador Appello TK102 con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión deben usarse para alcanzar Plaspy y qué considerar al integrar el equipo. Las características de hardware y radio del TK102 —como el soporte GSM GPRS, operación en doble banda y el chip GPS New Star NS 1315— son la base para el reporte de ubicación y el comportamiento del dispositivo referenciado aquí.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo en un TK102 concreto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto público del protocolo y recomendaciones de integración más que comandos de firmware específicos o formatos internos de paquetes.

## Resumen del protocolo

El protocolo del TK102 es el conjunto de mensajes y opciones de transporte que el dispositivo usa para reportar ubicación, estado y eventos a un servidor de seguimiento. En la práctica, esto significa que el rastreador formatea datos GPS, de red y de estado y los envía al punto de conexión configurado de Plaspy para que la plataforma los interprete y presente.

- Permite que el rastreador reporte posición GPS y eventos de movimiento a Plaspy para mapas y alertas
- Identifica el dispositivo ante el servidor para que Plaspy pueda asociar los datos entrantes con el activo correcto
- Transporta estado y telemetría que Plaspy utiliza para indicadores de batería, señal y calidad de ubicación
- Usa un transporte soportado para entregar mensajes de forma fiable al punto de ingreso del servidor
- Funciona en conjunto con el firmware y la configuración del dispositivo para determinar los intervalos de reporte y el comportamiento

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único punto de servidor compartido e infiere el protocolo del rastreador empleado por cada dispositivo. En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy si el TK102 está configurado para reportar al endpoint correcto de Plaspy.

- Plaspy escucha en un dominio e IP de servidor compartidos para que los dispositivos reporten a un único destino para todos los modelos soportados
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador
- Cuando el TK102 está apuntado al endpoint de Plaspy y usa el transporte configurado, Plaspy podrá emparejar y procesar los mensajes del dispositivo
- La selección manual de un protocolo en la plataforma suele ser innecesaria cuando el reporte del dispositivo está configurado correctamente

## Transporte y configuración de conexión

Las opciones de conexión determinan cómo el TK102 alcanza Plaspy. El rastreador puede configurarse para usar UDP o TCP según las capacidades del equipo y la configuración del usuario, y debe apuntar al endpoint de Plaspy para permitir una ingestión confiable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración
- El dominio del servidor Plaspy d.plaspy.com y la dirección IP 54.85.159.138 son objetivos públicos de conexión para el reporte de dispositivos
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo y las reglas de firewall
- Elija UDP para reportes más sencillos y de menor sobrecarga, o TCP cuando se prefiera una conexión persistente y el dispositivo lo soporte
- Asegúrese de que el APN y los ajustes GSM del equipo permitan tráfico de datos saliente hacia el endpoint configurado para que los mensajes lleguen a Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el TK102 pueden cambiar el temporizado de mensajes, los transportes soportados o campos opcionales que afectan la integración
- Diferentes lotes de hardware o clones pueden implementar un comportamiento de reporte similar con pequeñas variaciones en el contenido de los mensajes
- La selección de transporte influye en el comportamiento de entrega y debe coincidir con lo que soporte el firmware del dispositivo y lo que permita su red
- Es posible que deba actualizarse la configuración del fabricante y los servidores de reporte por defecto para apuntar al endpoint de Plaspy
- Verifique que el dispositivo esté reportando al dominio o IP de Plaspy y en el puerto compartido que utiliza Plaspy
- Siempre contraste el comportamiento del dispositivo con la documentación oficial del fabricante para variaciones específicas del modelo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a lograr una configuración fluida, resolver problemas más rápido y mantener una operación confiable a largo plazo con Plaspy. Saber qué transporte y endpoint usar, y qué variaciones esperar entre firmwares, reduce la fricción en la integración.

- Ayuda a verificar que el dispositivo esté reportando a Plaspy y no a un endpoint incorrecto o legado
- Acelera la resolución de problemas cuando las actualizaciones de posición, la telemetría o los reportes de estado no aparecen como se espera
- Orienta las decisiones de configuración de APN, transporte e intervalos de reporte que afectan la vida útil de la batería y el consumo de datos
- Facilita la identificación de diferencias relacionadas con firmware que afectan el contenido o el temporizado de los mensajes
- Permite tomar decisiones informadas sobre reglas de red y firewall para permitir el tráfico de los dispositivos hacia Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Appello TK102 con Plaspy ofrece una forma directa de obtener visibilidad de ubicación y control operativo. Las capacidades de hardware del TK102, combinadas con la detección automática de protocolos de Plaspy y los ajustes de conexión unificados, hacen práctico desplegar estos rastreadores para monitoreo de vehículos, activos o uso personal cuando se requiere tamaño compacto y desempeño GPS confiable.

Para saber más sobre Plaspy y cómo gestiona la conectividad y el monitoreo de dispositivos, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente específica del dispositivo en el sitio del fabricante http://www.cnjeo.com/.
