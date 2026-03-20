---
slug: /carscop/cc_338/protocol
id: cc_338-protocol
sidebar_label: Protocol
title: Carscop - CC-338 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Carscop CC-338 y cómo se comunica con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo Carscop CC-338
  - Protocolo GPS Carscop CC-338
  - Compatibilidad Carscop CC-338 con Plaspy
  - Protocolo de rastreador Carscop
  - Protocolo telemático de vehículo CC-338
  - Integración de rastreador GPS Carscop
  - Protocolo de dispositivo Plaspy
  - Telemetría CANBUS de rastreador GPS
  - Protocolo para gestión de flotas
  - Protocolo GPS para car sharing
---

# Carscop - Protocolo CC-338

Esta página explica el contexto público del protocolo para usar el rastreador telemático vehicular Carscop CC-338 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a nivel general, los patrones de conexión que debe conocer y consideraciones prácticas al integrar el equipo en una flota o una plataforma de car sharing.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según versiones de firmware, revisiones de hardware y decisiones de implementación del fabricante, por lo que esta página se limita a detalles públicos no sensibles e invita a verificar la documentación del fabricante.

## Resumen del protocolo

El CC-338 transmite la telemetría del vehículo, ubicación y estado a un endpoint de servidor para que una plataforma como Plaspy pueda procesar y mostrar datos en tiempo real. El protocolo de comunicación del rastreador define cómo el dispositivo se identifica, cómo reporta posición y datos CANBUS, y cómo se entregan comandos remotos y configuraciones en una implementación soportada.

- Permite actualizaciones regulares de posición, reportes de estado y notificaciones de eventos desde el dispositivo hacia el servidor.
- Transmite telemetría del vehículo como estado de encendido, eventos de puertas y alarmas, y diagnósticos derivados del CANBUS cuando el vehículo lo soporta.
- Soporta el envío de registros almacenados cuando vuelve la conectividad, permitiendo reenviar la última posición conocida y la telemetría en búfer.
- Actúa como canal de transporte para controles remotos que el dispositivo expone, por ejemplo inmovilizador o salidas cableadas, gestionados desde una plataforma.
- Proporciona suficiente información de identidad y envoltura para que la plataforma receptora pueda asociar los paquetes con el registro de vehículo correcto sin selección manual.

## Detección del protocolo por parte de Plaspy

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y aplica detección automática del protocolo cuando un dispositivo configurado reporta. En la mayoría de despliegues con CC-338 no es necesario seleccionar un protocolo en Plaspy; simplemente asegúrese de que el dispositivo esté configurado para enviar datos al endpoint de Plaspy.

- El endpoint público de Plaspy usa el dominio d.plaspy.com para el reporte de dispositivos.
- El servidor de Plaspy también es alcanzable en la IP pública 54.85.159.138 para entornos que requieran un destino por IP.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y usa el mismo puerto para todos los dispositivos.
- Los dispositivos pueden enviar datos por UDP o TCP según la configuración del equipo y el comportamiento del operador celular.
- Cuando un CC-338 se apunta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador, por lo que típicamente no se requiere selección manual.

## Transporte y contexto de conexión

La elección del transporte influye en la fiabilidad de la conexión, el recorrido NAT y las garantías de entrega. El CC-338 soporta conectividad TCP/IP para servidores privados y rutas de integración comunes, y puede configurarse para apuntar a Plaspy usando el nombre de dominio o la IP del servidor según la preferencia del instalador.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Apuntar el rastreador a d.plaspy.com es la opción recomendada basada en dominio para despliegues en producción.
- Si el DNS está restringido, el dispositivo puede dirigirse a la IP de Plaspy 54.85.159.138 en lugar del dominio.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de cortafuegos y redes.
- Seleccione UDP cuando necesite reportes ligeros y sin estado, y TCP cuando prefiera una conexión persistente o más fiable, sujeto a lo que el firmware del dispositivo soporte.

## Notas sobre compatibilidad del protocolo

- La revisión de firmware puede cambiar el comportamiento; firmware más nuevo puede añadir campos o modificar intervalos de reporte.
- Revisiones de hardware o variantes regionales pueden afectar qué canales de telemetría o salidas de control están disponibles.
- Las opciones de configuración del fabricante pueden permitir la selección del transporte (UDP versus TCP) y la selección del endpoint por dominio o IP.
- La disponibilidad de datos CANBUS depende del vehículo conectado y de qué parámetros expone el vehículo en su interfaz CAN.
- Valide la integración con la documentación del fabricante actualizada y pruebe los dispositivos en un endpoint de staging de Plaspy cuando sea posible.
- Actualizaciones OTA o ajustes del servidor del fabricante pueden alterar el comportamiento de reporte del dispositivo; confirme la configuración después de actualizaciones.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el CC-338 mejora el éxito en la configuración, reduce el tiempo de resolución de problemas y ayuda a mantener operaciones de flota confiables cuando el rastreador está conectado a Plaspy.

- Asegura que el dispositivo esté apuntando al endpoint y transporte correctos de Plaspy para que los datos lleguen sin demoras.
- Facilita el diagnóstico de problemas de conectividad al clarificar si los fallos son de red, transporte o configuración del dispositivo.
- Permite expectativas realistas sobre qué parámetros del vehículo estarán disponibles vía CANBUS y cuáles dependen del firmware o del propio vehículo.
- Apoya la planificación de escenarios sin conexión y cómo el dispositivo reenviará los registros almacenados a Plaspy cuando se restablezca la conectividad.
- Informa la decisión sobre si UDP o TCP es preferible para una flota o entorno de despliegue particular.

## Por qué usar Plaspy con este protocolo

Combinar el Carscop CC-338 con Plaspy ofrece un camino simplificado hacia flujos de trabajo de ubicación en tiempo real, telemetría y control remoto para operaciones de flota y car sharing. El soporte multinetwork celular del CC-338, el registro a bordo y la conectividad OBD II CANBUS lo hacen adecuado para aplicaciones que requieren información profunda del vehículo además de acciones remotas seguras.

El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy simplifican la incorporación de dispositivos: apunte el CC-338 a d.plaspy.com o 54.85.159.138 usando el puerto 8888, y Plaspy identificará el protocolo del rastreador y comenzará a procesar los reportes una vez que el dispositivo esté configurado correctamente. Aprenda más sobre Plaspy y cómo puede apoyar despliegues telemáticos vehiculares en https://www.plaspy.com. Para detalles específicos del protocolo y firmware más recientes, verifique la información con el fabricante en http://www.carscop.com/.
