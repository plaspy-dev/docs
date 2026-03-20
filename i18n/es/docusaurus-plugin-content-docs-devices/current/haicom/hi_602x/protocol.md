---
slug: /haicom/hi_602x/protocol
id: hi_602x-protocol
sidebar_label: Protocol
title: Haicom - HI-602X Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para el rastreador GPS Haicom HI 602X y su comunicación con Plaspy
keywords:
  - protocolo Haicom HI-602X
  - rastreador GPS HI-602X
  - protocolo Haicom Plaspy
  - protocolo de comunicación HI-602X
  - rastreo GPS Haicom
  - compatibilidad HI-602X Plaspy
  - protocolo para rastreadores de vehículo
  - protocolo GPRS para rastreadores
  - rastreo de flotas HI-602X
  - integración rastreador Haicom
---

# Haicom - Protocolo HI-602X

Esta página describe el contexto público del protocolo para usar el rastreador Haicom HI-602X con Plaspy. Se centra en los aspectos de comunicación e integración que importan cuando se configura el HI-602X para reportar ubicación y estado a un servidor Plaspy. Las capacidades técnicas del HI-602X, como la programación por GPRS, actualizaciones remotas de firmware, enlaces de posición en tiempo real, memoria flash para registro offline, modos de suspensión por detección de movimiento, comandos SMS, alertas SOS y geocercas, son las funcionalidades operativas que el protocolo de reporte transmite a una plataforma backend.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. Plaspy acepta informes entrantes de dispositivos en el dominio d.plaspy.com y en la IP de servidor 54.85.159.138 en el puerto 8888. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para alcanzar Plaspy. El comportamiento exacto del protocolo en el rastreador puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que usted debe validar el comportamiento específico del equipo contra la documentación oficial de Haicom cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del HI-602X es el mecanismo que traslada telemetría, posiciones, alertas y mensajes de configuración remota desde el dispositivo hasta Plaspy. A alto nivel, el protocolo permite direccionar adecuadamente la plataforma, identificar el dispositivo y entregar datos de ubicación y estado utilizables para que Plaspy muestre posiciones en vivo, historial, dispare alertas o ejecute comandos remotos cuando el rastreador lo soporte.

- Proporciona identificación del dispositivo y contexto de sesión para que Plaspy asocie los informes entrantes con un registro de activo.
- Transporta posición GPS, marca de tiempo, estado de movimiento y estados de sensores o entradas para ubicación y diagnóstico.
- Envía mensajes de configuración y gestión remota que pueden usarse para APN, intervalos y operaciones de actualización de firmware.
- Transmite alertas como SOS, eventos de geocerca o cambios de energía y movimiento que son procesables en Plaspy.
- Soporta entrega sobre GPRS para que la unidad funcione como rastreador en vivo y como registrador de datos para carga posterior cuando se restablezca la conectividad.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos en un endpoint y puerto comunes y determina automáticamente cómo interpretar los mensajes entrantes. Cuando el HI-602X está configurado para reportar a Plaspy, la plataforma detectará el formato y completará el registro del dispositivo sin que normalmente sea necesaria la selección manual del protocolo.

- Plaspy escucha informes de dispositivos en d.plaspy.com y en la IP de servidor 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la provisión de equipos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint de la plataforma.
- Usualmente usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.
- Asegúrese de configurar el dispositivo con el APN correcto y la dirección de reporte para que la plataforma pueda recibir la conexión inicial y realizar la detección.

## Contexto de transporte y conexión

Las opciones de conexión en el HI-602X determinan cómo se transmiten los paquetes a Plaspy, pero no cambian el hecho de que la plataforma espera los informes en el mismo endpoint y puerto. La configuración de red y el modo de transporte del dispositivo son importantes para una entrega fiable, especialmente en entornos móviles o con NAT.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración del usuario.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como endpoint de reporte.
- El puerto 8888 se usa en toda la plataforma Plaspy para los dispositivos soportados, por lo que las reglas de firewall y NAT deben permitir tráfico saliente a ese puerto.
- Elija UDP cuando se priorice baja sobrecarga y velocidad y el dispositivo lo soporte; elija TCP cuando se prefiera entrega fiable y orientación por sesión y el rastreador lo soporte.
- Verifique los ajustes de APN y el plan de datos de la SIM para asegurar conectividad GPRS y transferencia de datos al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el tiempo de los mensajes, los campos soportados y el comportamiento de comandos remotos o actualizaciones de firmware; verifique el nivel de firmware del dispositivo al diagnosticar problemas.
- Diferentes lotes de hardware o variantes en la serie X pueden exponer conjuntos de funciones o opciones de transporte ligeramente distintos.
- La selección de transporte entre UDP y TCP es configurable en muchas unidades y afecta las garantías de entrega y los requisitos de firewall.
- Algunas funciones descritas por el fabricante, como fallback por SMS, enlaces SOS o entrega de hipervínculos en mapas, dependen tanto del firmware del equipo como de cómo la plataforma backend decide presentar los datos.
- Valide el APN, la dirección de reporte y los ajustes de intervalo en el dispositivo antes de realizar despliegues a gran escala.
- La documentación del fabricante es la fuente autorizada para comandos específicos del equipo, sintaxis SMS y comportamientos relacionados con el firmware.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el HI-602X ayuda a los operadores a configurar reportes fiables, solucionar problemas de conectividad y gestionar el comportamiento esperado del dispositivo en el tiempo. Una clara comprensión del transporte y del comportamiento del protocolo reduce la fricción en despliegues y mejora la calidad de los datos a largo plazo en Plaspy.

- Acelera la resolución de problemas cuando los dispositivos no aparecen en Plaspy al revisar transporte, endpoint, APN y firmware.
- Ayuda a determinar si la falta de historial se debe al registro local o a problemas de entrega en el enlace GPRS.
- Informa decisiones sobre intervalos de reporte, modos de suspensión y comportamiento del sensor de movimiento para equilibrar la vida de la batería y la frecuencia de actualizaciones.
- Aclara expectativas para funciones de gestión remota como configuración OTA y actualizaciones de firmware.
- Permite a los administradores preparar firewalls de red y ajustes de operador para permitir tráfico hacia el endpoint de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Haicom HI-602X con Plaspy ofrece un camino directo hacia ubicación en vivo, reproducción de historial y monitoreo de eventos para vehículos y activos móviles. Las capacidades del HI-602X para programación por GPRS, registro offline, alertas por SMS, modos de suspensión por movimiento y notificaciones SOS o de geocerca se complementan bien con la capacidad de Plaspy para ingerir y presentar esos datos en operaciones de flota y monitoreo de activos.

Plaspy simplifica el despliegue al usar un puerto único y consistente para todos los dispositivos y al detectar automáticamente el protocolo del rastreador cuando una unidad reporta a la plataforma. Para obtener más información sobre la plataforma Plaspy y cómo se integra con dispositivos como el HI-602X visite https://www.plaspy.com. El soporte de protocolo, comportamiento de firmware y detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente específica del dispositivo con Haicom en http://www.haicom.com.tw/
