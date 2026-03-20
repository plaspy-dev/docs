---
slug: /castel/mpip_618_wa/protocol
id: mpip_618_wa-protocol
sidebar_label: Protocol
title: Castel - MPIP-618-WA Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Castel MPIP-618-WA y su comunicación con Plaspy
keywords:
  - Castel MPIP-618-WA
  - protocolo rastreador Castel
  - compatibilidad MPIP-618-WA Plaspy
  - protocolo seguimiento de vehículos
  - protocolo rastreador OBD
  - rastreador gestión de flotas
  - seguimiento Castel MPIP
  - comunicación rastreador GPS
  - compatibilidad MPIP-618-WA
  - soporte rastreador Plaspy
---

# Castel - Protocolo MPIP-618-WA

Esta página describe el contexto público del protocolo para usar el rastreador Castel MPIP-618-WA con Plaspy. Se enfoca en cómo el dispositivo se comunica con la plataforma Plaspy en términos no sensibles y destaca el papel del protocolo de reporte para entregar ubicación, estado y datos OBD al backend de gestión de flotas.

El Castel MPIP-618-WA es un terminal vehicular versátil que combina localización GPS con capacidades de diagnóstico OBD y una variedad de alarmas y telemetría. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante en el equipo.

## Resumen del protocolo

A alto nivel, el protocolo del rastreador define cómo el MPIP-618-WA informa su posición, estado del vehículo, datos OBD y eventos de alarma a un servidor remoto como Plaspy. El protocolo permite que el dispositivo se identifique, envíe reportes periódicos o por eventos y reciba comandos de configuración remota cuando está soportado.

- Permite reportes de posición GPS y actualizaciones de movimiento a una plataforma remota
- Transporta valores diagnósticos OBD y datos de estado del vehículo para monitoreo de flotas
- Transmite notificaciones de alarma y eventos como SOS, exceso de velocidad o cambios de ignición
- Soporta configuración remota y actualizaciones de parámetros mediante los canales de gestión compatibles
- Conserva registros en memoria y retransmite datos en búfer cuando se restablece la conectividad

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes entrantes de rastreadores en un endpoint compartido y utiliza detección automatizada para reconocer el formato de reporte. Para la mayoría de usuarios, no es necesario seleccionar el protocolo manualmente dentro de Plaspy cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy escucha los reportes de dispositivos en el dominio compartido d.plaspy.com
- La plataforma es accesible en la IP pública 54.85.159.138 en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere selección manual
- Es necesario configurar el dispositivo para que apunte al endpoint de Plaspy para que la detección automática funcione
- Dado que Plaspy soporta múltiples tipos de dispositivos en el mismo puerto, ajustes de reporte consistentes simplifican la configuración

## Transporte y contexto de conexión

El transporte de conexión y la dirección del endpoint determinan cómo el MPIP-618-WA envía sus datos a Plaspy. El dispositivo puede usar métodos comunes de transporte por datos móviles, y Plaspy acepta ambos tipos principales de transporte en el puerto compartido.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita despliegues mixtos y reglas de firewall
- El MPIP-618-WA se comunica vía GPRS y redes GSM cuatribanda para una amplia cobertura celular
- Las opciones de configuración incluyen COTA, comandos por SMS o software de PC según el firmware del dispositivo

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar identificadores de mensajes, intervalos de reporte y campos disponibles; verifique la versión de firmware al resolver problemas
- Revisiones de hardware o combinaciones con accesorios como módulos OBD externos pueden afectar la telemetría disponible y el mapeo de datos
- Opciones de configuración del fabricante pueden alterar cómo se codifican o reportan los diagnósticos y las alarmas
- La elección del transporte (UDP vs TCP) influye en la confiabilidad y el comportamiento de retransmisión; confirme que el transporte seleccionado coincida con la configuración del dispositivo
- Plaspy detecta protocolos automáticamente pero la configuración inicial debe apuntar el dispositivo al endpoint de Plaspy
- Siempre valide la compatibilidad y el comportamiento contra la documentación del fabricante y las notas de la versión del firmware

## Por qué entender el protocolo es importante

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una conexión confiable con Plaspy y una interpretación precisa de los datos del vehículo y OBD. Un conocimiento claro del protocolo reduce el tiempo de configuración, mejora la resolución de problemas y facilita la planificación de operaciones de flota a largo plazo.

- Acelera la configuración inicial confirmando endpoint, transporte y modo de reporte correctos
- Facilita la resolución de problemas cuando los reportes no llegan o faltan campos
- Ayuda a mapear parámetros OBD y diagnósticos en métricas útiles para la flota
- Apoya decisiones sobre selección de transporte y uso del plan de datos celulares
- Aclara cómo se comportan las alarmas y el reporte de eventos según distintas versiones de firmware

## Por qué usar Plaspy con este protocolo

Usar el Castel MPIP-618-WA con Plaspy ofrece una vía directa para integrar ubicación, diagnósticos OBD y alarmas de eventos en un entorno centralizado de gestión de flotas. La conectividad OBD y el conjunto completo de alarmas del MPIP-618-WA son adecuados para flotas que requieren visibilidad operativa y diagnósticos de salud del vehículo.

El enfoque de endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación y reducen la complejidad de configuración en flotas mixtas. Para más información sobre cómo Plaspy puede trabajar con rastreadores GPS como el MPIP-618-WA visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información más reciente del dispositivo en el sitio del fabricante http://www.castelecom.com/
