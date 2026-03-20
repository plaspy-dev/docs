---
slug: /tzone/tz_avl05/protocol
id: tz_avl05-protocol
sidebar_label: Protocol
title: TZone - TZ-AVL05 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador TZone TZ-AVL05 y su compatibilidad con Plaspy
keywords:
  - Protocolo TZone TZ-AVL05
  - Protocolo GPS TZ-AVL05
  - Rastreador TZone Plaspy
  - Protocolo de comunicación TZ-AVL05
  - Protocolo de rastreo TZ-AVL05
  - Compatibilidad seguimiento vehicular Plaspy
  - Resumen protocolo rastreador GPS
  - Integración GPRS GPS
  - Rastreo de flotas TZone
  - Actualizaciones firmware TZ-AVL05
---

# TZone - Protocolo TZ-AVL05

Esta página ofrece un contexto público del protocolo para usar el rastreador GPS TZone TZ-AVL05 con la plataforma Plaspy. Resume cómo suele comunicarse el dispositivo, el papel del protocolo de reporte del rastreador y qué verificar al integrar el TZ-AVL05 para ubicación, alarmas y telemetría. Esta guía está pensada para integradores de sistemas, responsables de flotas y usuarios técnicos que necesiten comprender cómo el rastreador intercambia datos con Plaspy sin entrar en detalles privados de implementación.

Plaspy utiliza configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el TZ-AVL05 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El TZ-AVL05 soporta GPRS usando TCP o UDP y comunicación por SMS, ofrece alarmas como exceso de velocidad y geocercas, permite roaming y puede recibir comandos y actualizaciones de firmware vía GPRS. Utilice esta página como referencia de compatibilidad y configuración y consulte con el fabricante para comportamientos específicos de firmware.

## Panorama del protocolo

El protocolo de comunicación del TZ-AVL05 define las reglas que el rastreador usa para reportar posición, estado y eventos de alarma a un servidor remoto y para recibir comandos desde un centro de operaciones. Para la integración con Plaspy, el protocolo sirve para empaquetar los datos del dispositivo de modo que Plaspy pueda interpretarlos, almacenarlos y mostrarlos en la plataforma de monitoreo.

- Permite que el rastreador envíe reportes de posición GPS y marcas de tiempo para seguimiento en tiempo real.
- Transporta telemetría y eventos de alarma como exceso de velocidad, batería baja, activación de geocerca y señales de sensores.
- Soporta comandos bidireccionales y solicitudes de configuración enviadas desde el servidor al equipo a través de GPRS.
- Proporciona una vía de respaldo mediante SMS para comandos básicos y enlaces de ubicación cuando GPRS no está disponible.
- Permite actualizaciones de firmware OTA y cambios de parámetros por el canal GPRS cuando el fabricante lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones en un endpoint y puerto compartidos y detecta automáticamente el protocolo de cada dispositivo. Cuando un TZ-AVL05 se configura para reportar al endpoint de Plaspy, la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo dentro de la plataforma.

- El endpoint del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Los equipos pueden configurarse para usar UDP o TCP para reportar al endpoint de Plaspy en el puerto 8888.
- Si el TZ-AVL05 apunta al endpoint de Plaspy con el transporte correcto, Plaspy detectará automáticamente y asociará el flujo de datos entrante con el rastreador.
- La identificación adecuada del dispositivo y los reportes iniciales suelen ser los desencadenantes para que Plaspy reconozca el tipo de equipo y comience a parsear datos de posición y eventos utilizables.

## Contexto de transporte y conexión

Las opciones de transporte y conexión determinan cómo el TZ-AVL05 envía físicamente sus datos a Plaspy. El rastreador admite reportes por GPRS usando TCP o UDP y puede recurrir a SMS para algunas capacidades. Mantenga la configuración de la capa de conexión simple y consistente con la operadora y el despliegue de campo.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del rastreador y el comportamiento de la red móvil.
- Los dispositivos pueden apuntar al endpoint de Plaspy usando el dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 si no se desea usar DNS.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la provisión y las reglas de firewall.
- GPRS es el transporte principal para reportes regulares y comandos bidireccionales, mientras que SMS ofrece comandos limitados y enlaces de ubicación como respaldo.
- El roaming de red y la configuración del APN del operador pueden afectar la estabilidad y los tiempos de entrega de reportes y comandos.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar los intervalos de mensajes, los campos disponibles y las funciones opcionales. Verifique las notas de la versión del firmware para detectar diferencias.
- Las revisiones de hardware y sensores opcionales como temperatura o nivel de combustible pueden agregar o quitar campos de telemetría que la plataforma interpretará de forma distinta.
- Las opciones de configuración del fabricante controlan si el dispositivo usa TCP o UDP y la frecuencia de reporte; confirme los parámetros del equipo antes del despliegue.
- El comportamiento por SMS y los enlaces SMS a Google Maps pueden variar según el firmware y las capacidades del proveedor de servicio.
- El roaming y la provisión de la SIM pueden afectar la conectividad y la fiabilidad en despliegues multi región.
- Siempre valide los reportes básicos (posición, ID del dispositivo y latido) para confirmar que Plaspy ha detectado y está procesando los mensajes del equipo.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TZ-AVL05 facilita la configuración exitosa, la resolución de problemas y el mantenimiento de la confiabilidad del dispositivo en Plaspy a largo plazo. Un entendimiento compartido del transporte, los intervalos de reporte y el manejo de alarmas reduce la fricción en la integración y mejora los resultados operativos.

- Ayuda a asegurar la configuración correcta del APN y del transporte al provisionar dispositivos para Plaspy.
- Agiliza la resolución de problemas cuando los reportes están retrasados, faltan o se interpretan mal, al confirmar los campos y eventos esperados.
- Permite un comportamiento predecible para alarmas y comandos bidireccionales, mejorando la seguridad y los flujos de respuesta.
- Aclara cuándo estará disponible el respaldo por SMS y qué datos pueden recibirse de forma fiable por SMS frente a GPRS.
- Apoya la planificación de actualizaciones de firmware e integración de sensores opcionales que dependen de las capacidades del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el TZ-AVL05 con Plaspy brinda a las organizaciones una vía sencilla para capturar información de ubicación, estado y alarmas en una sola plataforma. La detección automática de protocolos de Plaspy y su enfoque de puerto unificado reducen la complejidad del onboarding de dispositivos y permiten que los equipos se concentren en casos de uso operativos como enrutamiento, despacho y cumplimiento normativo.

Plaspy ofrece visibilidad centralizada del historial de posiciones, alarmas y salud de los dispositivos cuando el TZ-AVL05 se configura para reportar al endpoint de Plaspy. Para conocer más sobre cómo Plaspy gestiona integraciones de dispositivos y explorar las funcionalidades de la plataforma, visite https://www.plaspy.com. Verifique también los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las instrucciones del fabricante en el sitio oficial de TZone en http://www.tzonedigital.com/ ya que los detalles de implementación y las capacidades de firmware pueden cambiar con el tiempo.
