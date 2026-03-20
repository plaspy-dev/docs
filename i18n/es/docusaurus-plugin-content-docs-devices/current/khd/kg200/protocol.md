---
slug: /khd/kg200/protocol
id: kg200-protocol
sidebar_label: Protocol
title: KHD - KG200 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del rastreador KHD KG200 y su comunicación con Plaspy para seguimiento de flotas y activos
keywords:
  - protocolo KHD KG200
  - rastreador GPS KHD KG200
  - protocolo de comunicación KG200
  - compatibilidad KG200 Plaspy
  - protocolo rastreador GPS KHD
  - rastreo vehicular KG200
  - rastreo marítimo KG200
  - comunicación GPRS KG200
  - rastreador GSM KG200
  - compatibilidad dispositivos Plaspy
---

# KHD - Protocolo KG200

Esta página describe el contexto del protocolo público para usar el rastreador KHD KG200 con Plaspy. Se centra en cómo el dispositivo se comunica con un backend remoto en términos generales, qué papel juega el protocolo de reporte del rastreador en una integración exitosa y cómo Plaspy recibe los datos de los KG200 para el seguimiento de flotas y activos.

El KHD KG200 es un rastreador GNSS diseñado para seguimiento de vehículos y embarcaciones que envía ubicación y estado a través de redes GSM utilizando GPRS o SMS. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según el firmware, la revisión de hardware y la implementación del fabricante. Esta página explica el contexto de conexión y consideraciones prácticas sin exponer detalles privados de implementación.

## Descripción general del protocolo

El protocolo de comunicación del KG200 es el conjunto de reglas que el rastreador emplea para enviar datos de posición, estado y eventos a un servidor backend y para recibir configuraciones o respuestas a comandos. Para la integración con Plaspy, el comportamiento del protocolo determina cómo se identifica el equipo, la cadencia de los reportes y qué campos se incluyen en cada transmisión.

- Permite al rastreador reportar posiciones GNSS, marcas de tiempo y actualizaciones de estado a un servidor remoto.
- Transporta notificaciones de eventos como alertas de emergencia, cruces de geocercas y activaciones programadas.
- Proporciona un identificador de dispositivo y contexto para que el backend asocie los datos entrantes con un activo específico.
- Soporta transporte sobre redes móviles para que el rastreador alcance el endpoint de Plaspy desde cualquier lugar con cobertura celular.
- Permite configuración remota y confirmaciones cuando el rastreador y el backend soportan mensajería bidireccional.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y utiliza esa conexión para identificar qué protocolo de rastreador se está empleando. En la mayoría de los casos, solo es necesario apuntar el KG200 al endpoint de Plaspy y la plataforma detectará el dispositivo automáticamente, por lo que no se requiere seleccionar el protocolo manualmente.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto de escucha de Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración de la red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando reporta correctamente al endpoint de Plaspy.
- Cuando el rastreador está configurado para reportar a d.plaspy.com o a la IP anterior en el puerto 8888, Plaspy procesará los datos entrantes y los asociará con el registro de dispositivo correcto.

## Transporte y contexto de conexión

Los dispositivos KG200 típicamente utilizan transporte celular para alcanzar un backend, y la elección entre UDP y TCP afecta la fiabilidad y el comportamiento de la conexión. Para la integración con Plaspy, los detalles de conexión más importantes son el endpoint del servidor y el tipo de transporte que el dispositivo está configurado para usar.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 para el endpoint de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que no se requiere mapeo de puertos por dispositivo.
- Las sesiones de datos GPRS transportan los reportes del KG200 a través de la red móvil hasta Plaspy.
- SMS puede ser un canal alternativo de reporte en algunos modelos o escenarios, pero el reenvío de datos a Plaspy normalmente se realiza por GPRS.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden agregar, eliminar o reordenar campos de reporte y funciones soportadas; confirme siempre el comportamiento para el nivel de firmware de su dispositivo.
- Revisión de hardware o variantes de producción pueden cambiar ajustes de transporte predeterminados o periféricos disponibles.
- Las herramientas de configuración del fabricante suelen permitir alternar entre UDP y TCP y cambiar el nombre o IP del servidor destino.
- El reporte por SMS y el reporte por GPRS se comportan de manera diferente y pueden requerir configuraciones distintas en el dispositivo o en el backend.
- Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta al endpoint compartido, pero se recomienda validar la identificación del dispositivo y los paquetes iniciales.
- Para despliegues en producción, valide que el KG200 esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el transporte elegido sea compatible con su operador móvil.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el KG200 ayuda a los administradores a configurar correctamente los dispositivos, evitar errores comunes de configuración y solucionar problemas de conectividad o calidad de datos con Plaspy. Conocer las opciones de transporte y las características del fabricante reduce el tiempo de despliegue y aumenta la fiabilidad operativa.

- Asegura que el rastreador esté apuntando al endpoint correcto de Plaspy y usando el transporte soportado.
- Ayuda a diagnosticar mensajes perdidos, reportes intermitentes o identificación incorrecta del dispositivo.
- Permite tomar decisiones informadas sobre intervalos de reporte, activadores de eventos y consumo de batería o datos.
- Facilita las pruebas de incorporación inicial y la confirmación de que Plaspy está recibiendo datos de ubicación y eventos útiles.
- Ayuda a planificar actualizaciones de firmware, cambios de hardware o escalado de despliegues en flotas.

## Por qué usar Plaspy con este protocolo

Usar el KHD KG200 con Plaspy ofrece una ruta práctica para organizaciones que necesitan visibilidad confiable de los movimientos de vehículos y embarcaciones. El backend centralizado de Plaspy recoge y normaliza los reportes entrantes para que los equipos puedan monitorear ubicaciones, responder a alertas de emergencia y analizar movimientos históricos para operaciones y seguridad.

Para saber más sobre Plaspy y cómo funciona con una amplia variedad de rastreadores, incluido el KG200, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información de protocolo específica del dispositivo con el fabricante en http://www.khd.hk.
