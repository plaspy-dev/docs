---
slug: /itriangle/ts101_basic_4g/protocol
id: ts101_basic_4g-protocol
sidebar_label: Protocol
title: iTriangle - TS101 Basic 4G Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del iTriangle TS101 Basic 4G y cómo se comunica con Plaspy para rastreo de flotas y telemetría
keywords:
  - protocolo iTriangle TS101 Basic 4G
  - protocolo GPS iTriangle TS101 Basic 4G
  - protocolo de comunicación iTriangle TS101 Basic 4G
  - protocolo de rastreo iTriangle TS101 Basic 4G
  - compatibilidad TS101 Basic 4G Plaspy
  - rastreo de flotas TS101 Basic 4G
  - integración de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - telemática vehicular TS101
  - protocolo rastreador GNSS TS101
---

# iTriangle - Protocolo TS101 Basic 4G

Esta página documenta el contexto público del protocolo para usar el iTriangle TS101 Basic 4G con la plataforma Plaspy. Explica, en términos generales, cómo el rastreador se comunica con Plaspy, qué ajustes de conexión usa públicamente la plataforma y qué considerar al integrar este modelo en una implementación de monitoreo de flota. El objetivo es ofrecer orientación útil orientada al protocolo sin entrar en detalles de firmware o implementaciones que solo proporciona el fabricante.

El TS101 Basic 4G es un rastreador GNSS compacto LTE Cat‑1 con BLE y entradas/salidas configurables, compatible con Plaspy. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe verificar los detalles específicos del dispositivo en la documentación oficial cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del TS101 Basic 4G define cómo se envían las posiciones GNSS, la telemetría y las señales de evento desde el dispositivo a un servidor, y cómo se intercambian comandos o configuraciones remotas. Con Plaspy, la función principal del protocolo es entregar datos de posición y sensores de forma confiable a la plataforma y permitir la gestión remota cuando el dispositivo lo soporta.

- Transporta datos de posición GNSS y telemetría con marca de tiempo, como estado de encendido, lecturas de sensores y eventos de movimiento hacia Plaspy.
- Permite que el dispositivo se identifique ante el servidor para que Plaspy asocie los datos entrantes con el registro correcto del activo o vehículo.
- Facilita mensajes de estado e informes de eventos que Plaspy utiliza para generar alertas y reportes históricos.
- Admite la carga intermitente de registros almacenados localmente cuando se recupera la cobertura de red, proporcionando resiliencia offline.
- Opera sobre transporte IP estándar para que el dispositivo entregue datos a Plaspy usando el endpoint y el puerto de la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint y puerto compartidos y utiliza detección automatizada para determinar el protocolo de rastreador adecuado para cada conexión entrante. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado correctamente para reportar al endpoint de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio público d.plaspy.com y en la IP del servidor 54.85.159.138.
- La plataforma utiliza un puerto de escucha común para todos los dispositivos, por lo que se emplea un único ajuste de puerto entre los rastreadores compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al endpoint de Plaspy.
- Cuando un dispositivo está apuntado correctamente a d.plaspy.com o a la IP del servidor y se selecciona el transporte correcto, Plaspy asociará los datos entrantes con el registro del dispositivo.
- La selección manual de protocolo en Plaspy normalmente no es necesaria siempre que el dispositivo esté configurado para reportar al endpoint y puerto de Plaspy.

## Transporte y contexto de conexión

El comportamiento de conexión del TS101 Basic 4G depende de las opciones de configuración que el fabricante proporcione. Plaspy soporta las opciones de transporte más comunes para que el rastreador pueda informar usando el método que mejor se adapte a su despliegue y entorno de red.

- El TS101 Basic 4G puede configurarse para usar UDP o TCP para el reporte, según el soporte y las opciones de configuración del dispositivo.
- Los dispositivos pueden apuntar al servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
- Plaspy espera conexiones entrantes en el puerto compartido 8888 independientemente de si el transporte es TCP o UDP.
- Usar el transporte y la dirección de servidor correctos en el dispositivo es necesario para que Plaspy reciba y detecte automáticamente el protocolo.
- Dado que todos los dispositivos en Plaspy usan el mismo puerto, la configuración de puerto en el rastreador se simplifica entre distintos modelos.

## Notas sobre compatibilidad del protocolo

- Las diferencias en versiones de firmware pueden cambiar los campos disponibles, los intervalos de reporte y las funciones de telemetría opcionales; verifique las notas de firmware del dispositivo antes de desplegar a gran escala.
- Las revisiones de hardware e interfaces opcionales como CAN o RS485 pueden exponer canales de telemetría adicionales que afectan los datos que transporta el protocolo.
- La selección del transporte (UDP vs TCP) puede influir en las garantías de entrega y en cómo el dispositivo y la red manejan la retransmisión; elija el transporte que soporte su dispositivo y su red.
- Los canales de configuración del fabricante, como ajustes TCP/IP, SMS, aprovisionamiento por BLE o USB, pueden usarse para apuntar el dispositivo a Plaspy; consulte las instrucciones del fabricante para el método recomendado.
- La detección automática de Plaspy cubre un amplio conjunto de comportamientos de rastreadores, pero confirme que su unidad esté configurada para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Siempre valide la compatibilidad con la documentación del fabricante más reciente para los conjuntos de comandos y flujos de configuración específicos del modelo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TS101 Basic 4G ayuda a garantizar una configuración exitosa, operación confiable y una resolución de problemas eficiente cuando el dispositivo se usa con Plaspy. Tener claridad sobre el transporte, el direccionamiento y qué datos reporta el rastreador agiliza la integración y reduce errores de configuración.

- Acelera la puesta en marcha al asegurar que el dispositivo esté apuntando al endpoint y transporte correctos de Plaspy.
- Reduce el tiempo dedicado a resolver problemas de conectividad o telemetría faltante al aclarar el comportamiento de reporte esperado.
- Ayuda a determinar qué interfaces del dispositivo son necesarias para un caso de uso concreto, por ejemplo CAN para datos del bus del vehículo o BLE para sensores locales.
- Permite planear para brechas de cobertura y comportamiento de almacenamiento offline, de modo que los registros históricos se conserven y se suban como se espera.
- Apoya la planificación informada de actualizaciones de firmware para preservar funciones y compatibilidad del protocolo durante actualizaciones OTA.

## Por qué usar Plaspy con este protocolo

Usar el iTriangle TS101 Basic 4G con Plaspy ofrece a gerentes de flota y operadores de activos flujos continuos de ubicación, eventos y telemetría combinados con las capacidades de visualización y alertas de Plaspy. La conectividad LTE Cat‑1 del dispositivo, la recepción multi GNSS, la batería interna de respaldo y las E/S flexibles lo convierten en una opción práctica para despliegues de flotas mixtas que requieren seguimiento robusto y funciones de control remoto.

Para obtener más información sobre cómo Plaspy funciona con rastreadores compatibles y explorar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware e instrucciones de configuración más actuales, consulte la documentación del fabricante en https://www.itriangle.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
