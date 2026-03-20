---
slug: /autofon/dx_maiak/protocol
id: dx_maiak-protocol
sidebar_label: Protocol
title: AutoFon - DX Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador AutoFon DX Маяк con Plaspy usando ajustes compartidos y detección automática de protocolo
keywords:
  - Protocolo AutoFon DX Маяк
  - Rastreador GPS DX Mayak
  - Protocolo AutoFon Plaspy
  - Comunicación rastreador GPS
  - Protocolo de rastreo DX Mayak
  - Rastreador GPS GLONASS
  - Rastreador GSM GPRS
  - Detección de presencia BLE
  - Compatibilidad de protocolos de rastreador
  - Rastreo de vehículos Plaspy
---

# AutoFon - DX Маяк Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador AutoFon DX Маяк con la plataforma de monitoreo Plaspy. Se centra en cómo el dispositivo comunica telemetría y eventos a alto nivel a un servidor de monitoreo remoto y qué implica esto al integrar el rastreador en Plaspy. El contenido está dirigido a usuarios técnicos que configuran puntos finales de reporte y a administradores que solucionan problemas de conectividad en una implementación de monitoreo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos están correctamente configurados para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para comandos específicos del dispositivo, notas de firmware o el comportamiento más reciente, consulte siempre la documentación del fabricante además de las indicaciones de esta página.

## Visión general del protocolo

A alto nivel, el protocolo del rastreador regula cómo el AutoFon DX Маяк reporta posición, eventos y estado del dispositivo a un servidor de monitoreo, y cómo recibe configuración o controles cuando están soportados. El protocolo convierte lecturas crudas de sensores en telemetría estructurada que un servidor como Plaspy puede interpretar para mapeo, alertas e historial.

- Transmite latitud y longitud, velocidad, rumbo y hora junto con marcadores de eventos provenientes de sensores como el acelerómetro.
- Reporta información del estado del dispositivo que puede incluir condición de la batería, calidad de señal GSM y estado del registro interno (black box).
- Entrega mensajes por evento para detección de movimiento, impacto o choque, y cambios de presencia vía BLE cuando está habilitado.
- Soporta múltiples transportes para enviar datos al endpoint remoto usando el módem celular del dispositivo.
- Permite configuración remota mediante comandos desde el servidor o por SMS según las funciones del fabricante y la configuración.
- Proporciona la base para el procesamiento en el servidor de modo que Plaspy pueda mostrar ubicación, activar notificaciones y almacenar el historial.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador cuando un dispositivo comienza a reportar. En la mayoría de los casos, un DX Маяк correctamente configurado no requerirá selección manual del protocolo dentro de Plaspy; la plataforma identifica el comportamiento del dispositivo y asigna la telemetría entrante a los campos correctos.

- Plaspy escucha en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- La plataforma utiliza el puerto 8888 para el reporte de dispositivos y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- Los dispositivos pueden configurarse para conectarse a Plaspy ya sea por UDP o TCP en el puerto 8888 según el soporte y las preferencias del equipo.
- La detección automática de Plaspy reduce la necesidad de seleccionar manualmente el protocolo cuando el rastreador está correctamente dirigido al endpoint de Plaspy.
- Si un dispositivo no aparece, verifique la dirección de reporte y el transporte del dispositivo y consulte los registros del equipo o los resultados de comandos SMS para confirmar que está enviando al endpoint de Plaspy.

## Contexto de transporte y conexión

La selección del transporte y la dirección del servidor son parte de los detalles de despliegue que usted debe confirmar al integrar el DX Маяк con Plaspy. El rastreador usa su módem GSM/GPRS para entregar datos y puede recurrir a alternativas como SMS para notificaciones específicas o configuración.

- El dispositivo puede configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta conexiones entrantes de dispositivos en el puerto 8888 y ese puerto se usa de forma uniforme en todos los dispositivos soportados.
- El rastreador puede usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y las opciones de configuración.
- SMS sigue siendo un canal separado, frecuentemente utilizado para configuración remota o alertas redundantes cuando GPRS no está disponible.
- Asegúrese de confirmar el modo de transporte (UDP o TCP) y la dirección del servidor en los ajustes del DX Маяк para garantizar la entrega correcta a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes, los campos disponibles y las capacidades de transporte; revise siempre las notas de la versión del firmware del DX Маяк.
- Revisiones de hardware u módulos opcionales como la presencia BLE pueden introducir telemetría adicional que Plaspy puede mapear o ignorar según la carga útil.
- Algunas funciones del dispositivo son configurables para usar SMS en lugar de GPRS para notificaciones; estas configuraciones afectan lo que el servidor recibe directamente.
- Elegir UDP frente a TCP altera las características de entrega y debe coincidir con la configuración del dispositivo y las condiciones de red.
- La memoria tipo black box o almacenamiento no volátil del dispositivo puede almacenar mensajes no enviados hasta que GPRS esté disponible y luego reenviarlos al servidor.
- Valide la compatibilidad confirmando que el DX Маяк está dirigido a d.plaspy.com o 54.85.159.138 y configurado para comunicarse en el puerto 8888.

## Por qué es importante entender el protocolo

Entender cómo se comunica el DX Маяк ayuda a lograr una configuración confiable, operar de forma eficiente y resolver problemas prácticos cuando los dispositivos se despliegan a gran escala. Conocer las opciones de protocolo y transporte permite optimizar la vida de la batería, las alertas y la fiabilidad de los datos.

- Garantiza que el dispositivo esté apuntando al endpoint correcto de Plaspy y usando el transporte esperado para un reporte confiable.
- Ayuda a distinguir entre problemas de conectividad, configuración y firmware cuando un dispositivo deja de reportar.
- Aclara expectativas sobre la vida de la batería al diferenciar entre comportamiento en línea continuo y reporte por intervalos con modo de reposo.
- Orienta decisiones sobre usar duplicación por SMS, reporte al servidor o funciones BLE para rastreo de presencia.
- Permite a los administradores validar que eventos importantes como movimiento, choque o violaciones de geocerca estén llegando a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon DX Маяк con Plaspy proporciona visibilidad centralizada en una flota mixta de activos, combinando posicionamiento por celular y capacidades de posicionamiento con reporte de eventos desde el acelerómetro del dispositivo y funciones de presencia BLE. La plataforma de Plaspy consolida la telemetría entrante para que los operadores puedan monitorear ubicación, recibir alertas y revisar trayectos históricos para supervisión operativa y respuesta a incidentes.

Para conocer más sobre la integración de dispositivos como el AutoFon DX Маяк y cómo Plaspy gestiona conexiones y telemática de dispositivos, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles de protocolo específicos del dispositivo y las notas de firmware más recientes en el sitio del fabricante https://www.autofon.ru/.
