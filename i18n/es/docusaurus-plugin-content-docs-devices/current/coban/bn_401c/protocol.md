---
slug: /coban/bn_401c/protocol
id: bn_401c-protocol
sidebar_label: Protocol
title: Coban - BN-401C Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo Coban BN-401C y su comunicación con Plaspy para rastreo GPS y notificaciones de alarma
keywords:
  - Protocolo Coban BN-401C
  - Protocolo GPS BN-401C
  - Protocolo de rastreador GPS Coban
  - Compatibilidad BN-401C con Plaspy
  - Comunicación de rastreador GPS
  - Protocolo de rastreo de vehículos
  - Rastreador para motocicleta BN-401C
  - Protocolo de dispositivo Plaspy
  - Resumen del protocolo del rastreador
  - Integración de telemetría GPS
---

# Coban - Protocolo BN-401C

Esta página documenta el contexto público del protocolo para usar el rastreador Coban BN-401C con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión debe usar para reportar a Plaspy y las consideraciones prácticas relevantes al integrar el BN-401C en una implementación de Plaspy. El BN-401C es un rastreador compacto pensado para motocicletas y vehículos pequeños, con comunicaciones en múltiples redes y un conjunto de alarmas y capacidades de control remoto que Plaspy puede procesar.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos reportan a la plataforma. Datos públicos de conexión de Plaspy que debe conocer incluyen el dominio de servidor d.plaspy.com, la IP pública 54.85.159.138 y el puerto común 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para alcanzar Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión del firmware, la revisión de hardware y la implementación del fabricante, por lo que valide los detalles específicos del equipo con la documentación oficial de Coban cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del BN-401C permite al dispositivo transmitir posiciones GNSS, eventos de estado y alarma, y recibir comandos remotos cuando están soportados. En el contexto de Plaspy, la función del protocolo es entregar telemetría y eventos utilizables que la plataforma puede convertir en historial de ubicaciones, alertas y acciones de control.

- Transportar reportes de posición y marcas de tiempo desde el rastreador al servidor para que Plaspy muestre ubicación en tiempo real y el historial de viajes.
- Enviar notificaciones de eventos como estado de ignición (ACC), activación de geocercas, SOS y cortes de energía para que Plaspy genere alertas.
- Proveer información de estado que permita a Plaspy correlacionar eventos de alarma con telemetría y estado del dispositivo para paneles de control accionables.
- Habilitar flujos de trabajo de control remoto o inmovilización mediante control de relé cuando el rastreador y el arnés de cableado exponen esa capacidad.
- Permitir mecanismos alternos como el reporte por SMS cuando la conectividad IP no está disponible, manteniendo la continuidad de alertas críticas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico entrante de dispositivos en un único endpoint público y determina automáticamente qué protocolo de rastreador se está usando en función de los mensajes entrantes y el comportamiento del equipo. Esta detección automática reduce los pasos de configuración para la mayoría de los usuarios, permitiendo integrar el dispositivo simplemente apuntándolo a la dirección de Plaspy.

- Plaspy escucha en d.plaspy.com (54.85.159.138) en un único puerto compartido 8888 para conexiones de dispositivos.
- Los dispositivos pueden usar TCP o UDP para enviar sus reportes al endpoint de Plaspy según la configuración del equipo.
- Debido a la detección automática de protocolo, normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.
- Latidos iniciales del dispositivo o mensajes de reporte que identifiquen el estado del equipo disparan la detección en la plataforma y el mapeo a campos de telemetría.
- Para despliegues con múltiples modelos de rastreadores, el enfoque de puerto compartido de Plaspy simplifica la configuración del servidor, ya que todos los dispositivos usan el mismo puerto.

## Contexto de transporte y conexión

El BN-401C soporta reportes IP sobre redes celulares y puede configurarse para alcanzar Plaspy usando UDP o TCP en el puerto de la plataforma. Al configurar el equipo, apúntelo al endpoint de Plaspy para que los reportes y alertas lleguen de forma confiable.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta tráfico tanto UDP como TCP en el puerto 8888; elija el transporte que soporte su dispositivo y sea estable en la red SIM utilizada.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de red y firewall para flotas grandes.
- Si la conectividad IP no está disponible, el BN-401C también puede soportar SMS como canal alterno de reporte para alertas críticas.
- Asegúrese de que el APN y la configuración de la SIM estén correctos para que el rastreador pueda establecer una sesión de datos hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar detalles de los mensajes y los campos de telemetría disponibles; verifique la versión de firmware del equipo al evaluar compatibilidad.
- Revisiones de hardware u opciones de módulos accesorios (por ejemplo arneses o relés distintos) pueden afectar qué telemetría o funciones de control remoto están disponibles.
- La elección del transporte importa; algunos operadores o instalaciones prefieren TCP por su fiabilidad, mientras que otros usan UDP por menor sobrecarga, así que confirme qué transporte está configurado en el dispositivo.
- Los valores por defecto de configuración del fabricante pueden diferir de las expectativas de la instalación; revise y ajuste las opciones de reporte del equipo como parte de la puesta en marcha.
- Valide la disponibilidad de funciones como control de inmovilizador, reporte de batería baja y comportamiento del SOS con la documentación de Coban para el BN-401C.
- Pruebe cada dispositivo en un entorno controlado antes del despliegue masivo para confirmar que Plaspy recibe la telemetría y los eventos esperados.

## Por qué es importante entender el protocolo

Comprender cómo el BN-401C reporta datos y cómo Plaspy consume esos mensajes ayuda a asegurar una configuración fiable, acelera la resolución de problemas y permite un comportamiento predecible en producción. Conocer el contexto de conexión y la variabilidad común entre firmware o revisiones reduce el tiempo de integración y las sorpresas operativas.

- Garantiza que el rastreador esté configurado para alcanzar el endpoint y el transporte correctos de Plaspy para reportes fiables.
- Facilita el mapeo de eventos del equipo como ACC, SOS y geocercas a las reglas de alerta y flujos de trabajo adecuados en Plaspy.
- Simplifica la depuración cuando los reportes esperados no llegan, enfocando las comprobaciones en APN, selección de transporte y accesibilidad al servidor.
- Permite anticipar el comportamiento durante pérdida de energía o periodos sin conexión usando la batería de respaldo y los modos de energía del BN-401C.
- Apoya decisiones operativas sobre funciones de control remoto y procedimientos de seguridad al emplear inmovilización o funciones de relé.

## Por qué usar Plaspy con este protocolo

Usar el BN-401C con Plaspy ofrece una solución de rastreo compacta y discreta combinada con una plataforma centralizada para mapas en vivo, reproducción histórica y alertas configurables. Para flotas de motocicletas, programas de uso compartido de vehículos y despliegues individuales antirobo, la combinación de reportes celulares confiables y las capacidades de notificaciones e informes de Plaspy aporta visibilidad operativa y una respuesta a incidentes más rápida.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://www.coban.net/.
