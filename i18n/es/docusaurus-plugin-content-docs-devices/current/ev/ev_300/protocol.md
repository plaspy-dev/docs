---
slug: /ev/ev_300/protocol
id: ev_300-protocol
sidebar_label: Protocol
title: EV - EV-300 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador EV-300 y su compatibilidad con Plaspy, incluyendo contexto de conexión y transporte
keywords:
  - Protocolo EV EV-300
  - Protocolo GPS EV EV-300
  - Protocolo de comunicación EV-300
  - Compatibilidad rastreador EV con Plaspy
  - Protocolo de rastreo EV-300
  - Protocolo GPS para vehículo EV
  - Rastreador GPS para motocicleta EV-300
  - Integración de rastreador con Plaspy
  - Guía de protocolo para rastreadores GPS
  - Comunicación del dispositivo EV
---

# EV - Protocolo EV-300

Esta página ofrece una visión pública del contexto del protocolo del rastreador EV EV-300 en relación con su uso en Plaspy. Describe, en términos generales, cómo se comunica el dispositivo, qué puntos de conexión expone Plaspy para la recepción de reportes y qué debe considerar al emparejar un EV-300 con la plataforma Plaspy para el seguimiento en tiempo real de vehículos y motocicletas.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo del EV-300 puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que esta página se centra en contexto de alto nivel y orientación práctica, sin exponer detalles sensibles de tramas o parsers.

## Resumen del protocolo

El protocolo de comunicación del EV-300 permite que el dispositivo envíe ubicación e información de estado a un servidor remoto para que administradores de flotas y propietarios puedan vigilar vehículos y motocicletas. Aquí se explica el papel de ese protocolo en la identificación del dispositivo, en la entrega de telemetría a Plaspy y en la habilitación de funciones comunes de rastreo, sin divulgar lógica propietaria de framing o parsing.

- Transporta datos de ubicación, hora y estado desde el EV-300 al servidor de recepción para que Plaspy muestre telemetría y alertas.
- Permite que el dispositivo se identifique y asocie los reportes con un registro de dispositivo en Plaspy cuando se conecta al endpoint compartido.
- Soporta el envío de actualizaciones periódicas y basadas en eventos, como detección de movimiento, pérdida de alimentación y eventos de geocerca que el EV-300 puede generar.
- Habilita comandos remotos y flujos de configuración mediando por los ajustes del dispositivo y los canales soportados por el fabricante cuando corresponda.
- Funciona junto a características del equipo como antenas internas, puertos RS232 para accesorios, detección de movimiento basada en acelerómetro y almacenamiento flash interno para registro offline.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores y detectar automáticamente el protocolo de reporte cuando los dispositivos envían datos al endpoint de Plaspy. En la mayoría de los casos no necesitará seleccionar un protocolo dentro de Plaspy si el EV-300 está configurado para reportar a la dirección y puerto correctos de Plaspy.

- Plaspy escucha en un endpoint compartido para recibir reportes de rastreadores y determina automáticamente el protocolo usado por el dispositivo entrante.
- Los dispositivos configurados para reportar a d.plaspy.com o a la IP 54.85.159.138 y al puerto configurado son encaminados hacia las canalizaciones de ingestión de Plaspy.
- El proceso de detección es automático, por lo que los usuarios normalmente solo deben asegurarse de que el EV-300 apunte a Plaspy y utilice el transporte soportado.
- Si un dispositivo no aparece, valide que esté configurado para usar el dominio o la IP de Plaspy y que los firewalls de red permitan tráfico saliente hacia el servidor y puerto especificados.
- Plaspy mantiene el mismo puerto de escucha para todos los dispositivos soportados para simplificar la configuración y el onboarding.

## Contexto de transporte y conexión

El EV-300 puede configurarse para usar UDP o TCP según el firmware del dispositivo y las necesidades de la instalación. Plaspy acepta ambos tipos de transporte en el puerto compartido para adaptarse a distintas configuraciones de rastreadores y entornos de red.

- Los dispositivos pueden estar configurados para reportar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy acepta UDP y TCP en el puerto 8888 para que las unidades EV-300 puedan usar el transporte que coincida con su firmware y la preferencia del instalador.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que facilita la configuración masiva de unidades en una flota.
- Asegúrese de que la red móvil y las reglas de firewall permitan salidas UDP o TCP hacia el servidor y puerto de Plaspy desde la SIM de telemática del vehículo.
- Si cambia el transporte o los ajustes del servidor durante la instalación, confirme que el dispositivo vuelva a reportar al endpoint de Plaspy para permitir la detección automática del protocolo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden introducir variaciones en la temporización de mensajes, en las funciones disponibles y en los valores por defecto de transporte que afectan la comunicación del EV-300.
- Las revisiones de hardware o las configuraciones de accesorios, como periféricos RS232, pueden modificar el conjunto de telemetría y entradas externas disponibles.
- Algunas unidades EV-300 pueden ser configuradas en fábrica o por distribuidores con objetivos de reporte distintos; reconfigúrelas para que apunten al endpoint de Plaspy cuando sea necesario.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega en condiciones de red deficientes; seleccione el transporte que se ajuste a sus necesidades de fiabilidad y latencia.
- Siempre valide el comportamiento del dispositivo después de actualizaciones de firmware, ya que las actualizaciones OTA pueden cambiar parámetros de reporte o activar nuevas funciones.
- Verifique la detección en Plaspy si los dispositivos se enrutan a través de NAT de red o proxies que puedan alterar las direcciones de origen.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el EV-300 ayuda a garantizar una integración confiable con Plaspy, acelera la resolución de problemas y facilita planes de mantenimiento a largo plazo para una flota de vehículos o una implementación en motocicletas.

- Reduce el tiempo de incorporación al asegurarse de que los dispositivos apunten a d.plaspy.com o a 54.85.159.138 en el puerto correcto antes de la activación.
- Ayuda a diagnosticar problemas comunes como reportes faltantes, incompatibilidades de transporte o problemas de conectividad causados por restricciones del operador móvil.
- Informa decisiones sobre la selección de transporte, intervalos de reporte y activación de funciones para que coincidan con los requisitos operativos.
- Facilita la planificación de actualizaciones de firmware y la gestión de configuraciones para evitar cambios de comportamiento indeseados en dispositivos en producción.
- Permite una mejor coordinación entre instaladores, administradores de flota y soporte del fabricante cuando el comportamiento del dispositivo se desvía de lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el EV-300 con Plaspy ofrece a las organizaciones un endpoint de servidor consistente y detección automática de protocolo, lo que simplifica el despliegue de flotas y la gestión continua. El enfoque de puerto compartido de Plaspy y el soporte tanto para UDP como para TCP en el endpoint de recepción facilitan configurar unidades EV-300 para reportar ubicación, movimiento y eventos de alarma a una única plataforma.

Para obtener más información sobre cómo Plaspy funciona con el EV-300 y otros rastreadores, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo en el sitio del fabricante http://www.eviewltd.com/ antes de realizar configuraciones masivas o actualizaciones de firmware.
