---
slug: /itriangle/ts101_advance/protocol
id: ts101_advance-protocol
sidebar_label: Protocol
title: iTriangle - TS101 Advance Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del iTriangle TS101 Advance y su comunicación con Plaspy para rastreo y telemetría
keywords:
  - protocolo iTriangle TS101 Advance
  - rastreador GPS TS101 Advance
  - protocolo de seguimiento iTriangle
  - guía de compatibilidad Plaspy
  - comunicación de rastreador GPS
  - protocolo de rastreo de vehículos
  - integración gestión de flotas
  - telemetría TS101 Advance
  - detección de protocolo de rastreador
  - configuración remota de dispositivo
---

# iTriangle - Protocolo TS101 Advance

Esta página describe el contexto público del protocolo para usar el rastreador GPS iTriangle TS101 Advance con la plataforma Plaspy. Se enfoca en cómo el dispositivo informa posición y telemetría a Plaspy, y en las consideraciones de integración necesarias para un seguimiento en tiempo real y gestión de flotas fiables. El TS101 Advance es un dispositivo telemático robusto con GNSS multiconstelación, conectividad 2G, sensores de movimiento y entradas/salidas extensas, compatible con Plaspy para reportes y alertas.

Plaspy utiliza un endpoint y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se configura para reportar a la plataforma. El dominio del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138. La plataforma acepta conexiones en el puerto 8888 y los dispositivos pueden configurarse para usar UDP o TCP en dicho puerto. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece información general y pública en lugar de instrucciones específicas por firmware.

## Resumen del protocolo

El protocolo de comunicación es el conjunto de reglas que el TS101 Advance usa para enviar posiciones GPS, lecturas de sensores y estados de entradas/salidas a un servidor remoto como Plaspy. Define cómo se identifica el rastreador, cómo se empaqueta la telemetría para la transmisión y cómo se notifican al backend los eventos (por ejemplo, manipulación, encendido o alarmas).

- Permite reportes de posición GNSS, eventos de acelerómetro y giroscopio, y cambios de estado en I/O hacia Plaspy.
- Transporta datos de identificación para que Plaspy pueda asociar las transmisiones entrantes con un dispositivo registrado y la cuenta del cliente.
- Soporta actualizaciones periódicas de posición y mensajes impulsados por eventos como alarmas, manipulación, encendido o conducción brusca.
- Permite canales de configuración remota y diagnóstico cuando el transporte lo soporta.
- Funciona con funciones del dispositivo como batería de respaldo interna y control remoto de relé para proporcionar telemetría operativa a la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en un único endpoint compartido y determina automáticamente el protocolo a partir de los patrones de conexión y de mensaje entrantes. Cuando un TS101 Advance se configura para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138; los dispositivos deben apuntar a uno de estos endpoints alcanzables.
- Todos los dispositivos en Plaspy usan el mismo puerto, que es el 8888, lo que simplifica la configuración en flotas.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo empieza a reportar al endpoint de la plataforma.
- La identificación correcta del dispositivo y los intervalos de reporte permiten que Plaspy asocie los mensajes entrantes con la cuenta y el registro del equipo correspondientes.
- Normalmente usted solo debe asegurarse de que el rastreador esté configurado para reportar a la dirección de Plaspy y que los ajustes de transporte coincidan con la capacidad del dispositivo.

## Transporte y contexto de conexión

El transporte de la conexión y la configuración del endpoint son fundamentales para que el TS101 Advance se comunique con Plaspy. El dispositivo soporta reportes TCP/IP por celular y puede configurarse para usar transportes comunes según la red y la configuración del equipo.

- Las conexiones del dispositivo a Plaspy pueden establecerse usando UDP o TCP en el puerto 8888, según la configuración del equipo y las condiciones de la red.
- El dominio del servidor Plaspy es d.plaspy.com; los dispositivos también pueden apuntar directamente a la IP pública 54.85.159.138 cuando no hay disponibilidad de DNS.
- Todos los dispositivos compatibles con Plaspy usan un puerto común, 8888, lo que simplifica la configuración de firewalls y redes.
- Elija UDP cuando se prefiera menor sobrecarga y se tolere pérdida ocasional de paquetes; elija TCP cuando el dispositivo requiera confirmación de entrega y estado de sesión.
- Verifique que las redes de los operadores móviles permitan el transporte seleccionado y que la configuración APN del dispositivo sea la correcta para el reporte por celular.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del TS101 Advance pueden alterar la temporización de mensajes, los campos disponibles o el comportamiento de eventos; verifique siempre la versión de firmware durante la integración.
- Las revisiones de hardware o módulos accesorios opcionales pueden cambiar las entradas/salidas o el reporte de sensores; confirme el modelo y la revisión al mapear campos de telemetría.
- La elección entre UDP y TCP afecta la semántica de entrega y puede influir en cómo Plaspy recibe y procesa los mensajes del dispositivo.
- Los métodos de configuración del fabricante, como SMS, USB o BLE, son útiles para la puesta en marcha pero no cambian el requisito de que los reportes apunten al endpoint de Plaspy.
- Las actualizaciones OTA o FOTA pueden introducir cambios en el protocolo; planifique y pruebe las actualizaciones de firmware antes de desplegarlas en toda la flota.
- Valide el comportamiento esperado contra la documentación del fabricante y realice pruebas de banco para confirmar el reporte de extremo a extremo hacia Plaspy.

## Por qué es importante entender el protocolo

Tener un entendimiento claro y práctico del protocolo de comunicación del rastreador facilita significativamente el despliegue, la resolución de problemas y el soporte a largo plazo. Saber qué envía el dispositivo y cómo lo recibe Plaspy reduce el tiempo de configuración y mejora la fiabilidad operativa.

- Ayuda a garantizar la identificación correcta del dispositivo para que la telemetría se asigne al activo adecuado en Plaspy.
- Acelera la resolución de problemas cuando las posiciones o eventos no llegan como se espera.
- Orienta la configuración de red y firewall al clarificar necesidades de transporte y endpoint.
- Informa decisiones sobre actualizaciones de firmware, activación de funciones y compatibilidad de accesorios.
- Apoya el diseño de reglas de negocio y alertas en Plaspy, alineando la semántica de eventos del dispositivo con los flujos de trabajo de la plataforma.

## Por qué usar Plaspy con este protocolo

Utilizar el iTriangle TS101 Advance con Plaspy ofrece a flotas y equipos de seguridad una vía de telemetría resiliente para ubicación en tiempo real, eventos de sensores y flujos de trabajo basados en I/O. La combinación de GNSS multiconstelación, sensores de movimiento e I/O completa hace del TS101 Advance una opción práctica para monitoreo de rutas, casos de antirobo, control de combustible y análisis de comportamiento del conductor, mientras Plaspy aporta el backend de mapas, alertas e informes para convertir esos datos en información operativa.

Para conocer más sobre Plaspy y cómo funciona con dispositivos de flota como el TS101 Advance, visite https://www.plaspy.com. Para los detalles más actuales específicos del dispositivo, notas de firmware y guías de implementación, verifique la información en el sitio del fabricante https://www.itriangle.net/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
