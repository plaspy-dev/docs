---
slug: /skypatrol/sp9824/protocol
id: sp9824-protocol
sidebar_label: Protocol
title: SkyPatrol - SP9824 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del SkyPatrol SP9824 para integración con Plaspy en rastreo GPS y telemetría
keywords:
  - Protocolo SkyPatrol SP9824
  - Protocolo GPS SP9824
  - Protocolo SkyPatrol Plaspy
  - Protocolo de comunicación SP9824
  - Protocolo de rastreo SP9824
  - Protocolo de rastreador SkyPatrol
  - Compatibilidad de dispositivo Plaspy
  - Guía de protocolo de rastreador GPS
  - Protocolo de rastreo de activos SP9824
  - Protocolo rastreador cadena fría
---

# SkyPatrol - Protocolo SP9824

Esta página resume el contexto público del protocolo para usar el rastreador SkyPatrol SP9824 con Plaspy. Se centra en cómo el dispositivo comunica la telemetría y la ubicación a la plataforma Plaspy en términos generales y no sensibles, y explica el papel del protocolo de reporte en una integración exitosa. El SP9824 es un rastreador portátil de activos de larga duración con sensores de luz y temperatura a bordo y detección de manipulación; este documento describe cómo esas capacidades se transmiten a Plaspy sin exponer detalles internos del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que esta página mantiene un nivel alto mientras destaca los hechos clave de conexión que necesita para configurar y solucionar problemas del SP9824 con Plaspy.

## Resumen del protocolo

El protocolo de comunicación define cómo el SP9824 envía la ubicación, lecturas de sensores y eventos de alerta a un servidor como Plaspy. Para un rastreador de activos como el SP9824, esto incluye actualizaciones periódicas de posición y eventos ambientales o de manipulación que Plaspy convierte en ubicaciones en el mapa, notificaciones y registros históricos.

- Transporta fijaciones GNSS que Plaspy usa para ubicar activos en mapas en tiempo real e informes
- Envía telemetría de sensores como temperatura y luz para monitoreo de condiciones
- Señala eventos de manipulación o movimiento para que Plaspy genere alertas y logs de eventos
- Incluye identidad del dispositivo y marcas de tiempo para que Plaspy correlacione mensajes con el activo correcto
- Permite telemetría a largo plazo con patrones de reporte optimizados para consumo de energía, aptos para hasta siete años de vida de batería en campo

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones de dispositivos en un único endpoint y puerto compartidos y identifica automáticamente el protocolo del rastreador cuando llegan los mensajes. En la mayoría de los casos, usted no necesita seleccionar un protocolo en Plaspy si el SP9824 está configurado para reportar al endpoint de Plaspy usando el transporte y la dirección soportados.

- Plaspy usa un endpoint de servidor compartido accesible como d.plaspy.com
- El servidor Plaspy también es accesible por IP en 54.85.159.138 para escenarios de enrutamiento directo
- Plaspy escucha en un único puerto común usado por todos los dispositivos soportados, lo que simplifica la configuración
- Cuando el SP9824 reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo en uso
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy suele ser suficiente para la detección del protocolo

## Transporte y contexto de conexión

El contexto de conexión abarca el protocolo de transporte y la dirección que el SP9824 debe usar para comunicarse con Plaspy. El SP9824 puede configurarse para usar UDP o TCP según el soporte del dispositivo y las necesidades del despliegue. Utilice el transporte apropiado que su firmware y entorno de conectividad admitan.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com
- Los dispositivos también pueden reportar directamente a la IP del servidor Plaspy 54.85.159.138 donde no se usa DNS
- El SP9824 puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos que soporta
- Elija UDP o TCP según la confiabilidad de la red y las recomendaciones del firmware del dispositivo

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de envío y los campos de telemetría disponibles; verifique el comportamiento para su versión de firmware
- Las revisiones de hardware o variantes de SKU pueden exponer diferentes sensores u opciones de gestión de energía
- Las herramientas de configuración del fabricante o los procedimientos de aprovisionamiento pueden afectar la selección del transporte y la direccionamiento del servidor
- En despliegues mixtos confirme si los dispositivos están configurados para usar UDP o TCP y que los firewalls de red permitan tráfico saliente
- Siempre valide que el SP9824 esté configurado para apuntar a d.plaspy.com o a la IP del servidor Plaspy y al puerto compartido
- En caso de duda, consulte la documentación del fabricante para confirmar los transportes y comandos de configuración soportados

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del SP9824 ayuda a asegurar un onboarding confiable, telemetría precisa y una resolución de problemas más sencilla al usar Plaspy. Saber qué envía el dispositivo y cómo se conecta reduce el tiempo de configuración y aumenta la confianza operativa.

- Asegura que el dispositivo esté configurado para reportar al endpoint y puerto correctos de Plaspy
- Ayuda a diagnosticar problemas de conectividad como bloqueo por firewall o selección incorrecta del transporte
- Aclara los tipos de telemetría esperados para que los paneles y reglas de alerta de Plaspy se configuren adecuadamente
- Apoya la planificación de confiabilidad a largo plazo alineando los intervalos de reporte con las expectativas de vida de la batería
- Facilita la validación de que los eventos de manipulación y los sensores son recibidos y gestionados por Plaspy

## Por qué usar Plaspy con este protocolo

Usar el SkyPatrol SP9824 con Plaspy ofrece a las organizaciones una solución de rastreo de activos de bajo mantenimiento que integra rendimiento de batería de larga duración con sensado ambiental y detección de manipulación. Plaspy ingiere la ubicación y telemetría del SP9824 para proporcionar mapas en vivo, notificaciones por eventos de manipulación y umbrales, y reportes históricos que respaldan monitoreo de cadena fría, protección de carga y supervisión de activos estáticos.

Para conocer más sobre cómo Plaspy maneja integraciones de dispositivos y revisar las características de la plataforma, visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles específicos del protocolo y del firmware con el fabricante en https://www.skypatrol.com/ para garantizar la información de compatibilidad más reciente.
