---
slug: /xirgo/xt47/protocol
id: xt47-protocol
sidebar_label: Protocol
title: Xirgo - XT47 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el rastreador Xirgo XT47 con Plaspy y ajustes de conexión compartidos
keywords:
  - Protocolo Xirgo XT47
  - Protocolo GPS Xirgo XT47
  - Compatibilidad XT47 Plaspy
  - Protocolo rastreador Xirgo
  - Protocolo de comunicación XT47
  - Protocolo de seguimiento XT47
  - Rastreador Xirgo Plaspy
  - Protocolo rastreador de activos XT47
  - Protocolo rastreador GPS Xirgo
  - Protocolo gestión de flotas XT47
---

# Xirgo - Protocolo XT47

Esta página ofrece contexto público sobre el protocolo para integrar el rastreador GPS Xirgo XT47 con Plaspy. Se centra en cómo el XT47 se comunica con Plaspy para el reporte de ubicación, entradas/salidas y la entrega de telemetría, en un nivel apropiado para documentación pública. El XT47 está diseñado para activos remotos y robustos como grupos electrógenos, maquinaria de construcción, remolques y contenedores; aquí se explica la relación de comunicación entre el dispositivo y la plataforma Plaspy sin revelar detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo informa al endpoint de Plaspy. Plaspy acepta conexiones en d.plaspy.com y 54.85.159.138 en el puerto 8888; los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo puede variar según versiones de firmware, revisiones de hardware e implementaciones del fabricante, por lo que el comportamiento específico del dispositivo debe validarse con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de mensajes y convenciones que el XT47 utiliza para enviar información de ubicación, telemetría y eventos a un servidor remoto como Plaspy. A grandes rasgos, el protocolo permite que el dispositivo se identifique, reporte posición y estado, y entregue eventos de sensores y E/S que Plaspy convierte en telemetría útil, alertas e historiales.

- Transporta los datos centrales de rastreo como posición GNSS, tiempo y estado de movimiento para vistas en tiempo real e históricas en Plaspy.
- Transmite eventos de E/S y telemetría para que Plaspy pueda mapear entradas como encendido, alarmas, estado de puertas y sensores externos en flujos de trabajo.
- Proporciona información de identificación y sesión para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Habilita reportes basados en eventos que soportan flujos de trabajo anti robo y mantenimiento basado en telemetría cuando está configurado.
- Opera sobre el canal de transporte del dispositivo para asegurar que los mensajes lleguen a Plaspy para su ingestión y procesamiento.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para detectar automáticamente el protocolo de dispositivos que estén correctamente configurados para reportar al endpoint de Plaspy. Dado que Plaspy utiliza una dirección y puerto compartidos para los dispositivos soportados, la mayoría de los usuarios no necesita seleccionar un protocolo manualmente dentro de Plaspy cuando el dispositivo está configurado para enviar al endpoint de Plaspy.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Plaspy acepta conexiones tanto UDP como TCP en el puerto 8888; elija el transporte que coincida con la configuración del dispositivo.
- Cuando el XT47 envía datos al endpoint de Plaspy, Plaspy asocia el flujo entrante con el dispositivo correcto y detecta el formato de mensaje automáticamente.
- Normalmente usted solo necesita asegurarse de que el APN del dispositivo y los ajustes del servidor de reporte coincidan con el endpoint y puerto de Plaspy.
- Si el reporte no comienza, confirme el acceso a la red, reglas de firewall y que el dispositivo esté enviando activamente a la dirección y puerto de Plaspy.

## Contexto de transporte y conexión

Las elecciones a nivel de transporte afectan cómo el XT47 alcanza a Plaspy, pero no cambian el rol general del protocolo en el reporte de ubicación y eventos. El dispositivo puede configurarse para comunicarse por UDP o TCP según su configuración y las necesidades del despliegue.

- El XT47 puede configurarse para usar UDP o TCP en el puerto 8888 para comunicarse con Plaspy.
- Plaspy acepta conexiones en el dominio d.plaspy.com y en 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración del servidor para flotas mixtas.
- Las condiciones de red, el comportamiento del operador móvil y la gestión de energía del dispositivo pueden influir en la confiabilidad del transporte y en la frecuencia de reporte.
- Verifique que los ajustes del operador, credenciales APN y cualquier firewall o configuración de NAT en el dispositivo permitan el tráfico hacia el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de envío de mensajes, los campos disponibles y las opciones de telemetría; valide la compatibilidad después de actualizaciones de firmware.
- Revisiones de hardware u módulos opcionales pueden añadir o quitar capacidades de E/S y sensores que afectan lo que el dispositivo reporta.
- Las páginas de configuración del fabricante o las herramientas de aprovisionamiento pueden mostrar valores predeterminados de servidor o transporte diferentes a los usados en campo.
- Seleccionar UDP o TCP es una decisión a nivel de dispositivo y puede requerir configuración coincidente en la red para una entrega confiable.
- Pruebe el reporte del dispositivo al endpoint de Plaspy durante la puesta en marcha para confirmar que la identificación, telemetría y eventos de E/S llegan según lo esperado.
- Confirme qué canales de telemetría y salidas de control están habilitados en la unidad XT47 específica antes de depender de ellos en reglas de producción.
- Para nuevos despliegues, coordine con la documentación del fabricante para asegurar que la variante del dispositivo soporta las funciones de telemetría y control requeridas.

## Por qué es importante entender el protocolo

Tener un entendimiento claro y práctico del protocolo del rastreador ayuda a asegurar que el XT47 se configure correctamente, se integre sin problemas con Plaspy y entregue datos confiables para los equipos de operaciones y mantenimiento.

- La configuración adecuada de la dirección de reporte y el transporte garantiza que los datos lleguen a Plaspy de forma consistente.
- Saber qué telemetría y eventos de E/S incluirá el dispositivo ayuda a mapear las señales del dispositivo dentro de los flujos de trabajo y las alertas de Plaspy.
- Estar al tanto de las diferencias de firmware y hardware reduce el tiempo de resolución de problemas cuando un dispositivo se comporta de manera distinta a la esperada.
- Entender el comportamiento del transporte ayuda a diagnosticar problemas de conectividad relacionados con operadores, NAT o firewalls.
- Validar la compatibilidad durante la puesta en marcha evita sorpresas en producción y favorece la confiabilidad a largo plazo.

## Por qué usar Plaspy con este protocolo

Usar el XT47 con Plaspy proporciona visibilidad y control centralizados para activos remotos y robustos. Plaspy ingiere la ubicación, eventos de E/S y telemetría del XT47 para que los equipos puedan monitorear la ubicación del activo, rastrear la utilización, recibir alertas de geocercas y manipulación, y actuar sobre datos de sensores para la planificación de mantenimiento. Para equipos de alto valor desplegados en entornos exigentes, la combinación del hardware XT47 y el software Plaspy permite protección práctica del activo y supervisión operativa.

To learn more about Plaspy and how it handles device reporting, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and hardware revision guidance please verify current information on the manufacturer site https://xirgo.com/.
