---
slug: /coban/gps303/protocol
id: gps303-protocol
sidebar_label: Protocol
title: Coban - GPS303 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el Coban GPS303 con Plaspy, incluye ajustes de conexión y notas de compatibilidad
keywords:
  - protocolo Coban GPS303
  - protocolo GPS Coban GPS303
  - compatibilidad Coban GPS303
  - protocolo de rastreo GPS303
  - protocolo rastreador Coban
  - comunicación rastreador GPS
  - dispositivos compatibles Plaspy
  - rastreo de vehículos GPS303
  - configuración Coban GPS303
  - gestión de flotas GPS303
---

# Coban - Protocolo GPS303

En esta página se presenta el contexto público del protocolo para usar el rastreador Coban GPS303 con la plataforma Plaspy. Se explica cómo el dispositivo suele reportar ubicación e información de estado a través de redes móviles y cómo esas comunicaciones se integran con Plaspy para seguimiento, geocercas, alertas SOS y reportes básicos de alarma. El contenido se centra en detalles de protocolo compatibles y no sensibles, junto con orientación práctica de conexión.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste reporta al endpoint de Plaspy. El comportamiento exacto del protocolo para el GPS303 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la funcionalidad o las características soportadas pueden diferir entre unidades y con el tiempo.

## Resumen del protocolo

El protocolo que usa el GPS303 es el mecanismo mediante el cual el rastreador se identifica, envía posiciones GPS y datos de estado, y recibe comandos o configuraciones cuando esto está soportado. Para la integración con Plaspy, el protocolo suministra la posición, la marca de tiempo, el identificador del dispositivo y los indicadores de eventos necesarios para el mapeo y las alertas.

- Permite la identificación del equipo y envíos de posición periódicos o por eventos al servidor de rastreo.
- Transmite eventos de estado como entradas o salidas de geocerca, activación de SOS, exceso de velocidad, movimiento y alarmas de batería.
- Transporta los datos de ubicación y tiempo que Plaspy utiliza para mostrar posiciones y crear el historial de actividad.
- Soporta tanto reportes en tiempo real como seguimiento automático periódico según la configuración del dispositivo.
- Opera sobre canales de datos móviles estándar para que el rastreador pueda reportar vía Internet a un endpoint centralizado de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido para datos entrantes de rastreadores y detecta automáticamente el protocolo cuando un dispositivo se conecta y comienza a reportar. Esto significa que, cuando un GPS303 está configurado para reportar a Plaspy, normalmente no es necesaria una selección manual del protocolo dentro de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio público d.plaspy.com para conexiones entrantes.
- La IP del servidor de Plaspy es 54.85.159.138 para casos donde se requiere una dirección IP en la configuración del dispositivo.
- Plaspy utiliza el puerto 8888 y todos los dispositivos soportados lo usan para el reporte.
- Los dispositivos pueden configurarse para usar UDP o TCP para llegar a Plaspy según la capacidad del rastreador y la preferencia del usuario.
- Cuando un GPS303 correctamente configurado se conecta al endpoint de Plaspy, Plaspy inspecciona el tráfico entrante y lo asocia automáticamente a un perfil de protocolo conocido.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el transporte físico lleva los mensajes del protocolo entre el GPS303 y Plaspy. Esta sección se focaliza en las opciones de capa de transporte que encontrará comúnmente al apuntar un GPS303 a Plaspy.

- El GPS303 puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y las opciones de configuración.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy mantiene el mismo puerto de escucha 8888 en todos los dispositivos soportados para simplificar la configuración y reducir errores.
- La elección entre UDP y TCP puede afectar características de entrega como retransmisiones y estado de sesión, por lo que se recomienda usar el transporte sugerido para su firmware y red.
- Asegúrese de que el APN y la configuración GPRS del dispositivo sean correctos para que el rastreador pueda establecer una sesión de datos y alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Diferencias en la versión de firmware pueden cambiar qué funciones u opciones de mensaje están disponibles en un GPS303.
- Revisiones de hardware y variantes regionales pueden introducir diferencias menores en el protocolo o en el transporte.
- Los comandos de configuración del fabricante para intervalo de reporte, transporte y dirección del servidor se implementan a nivel de dispositivo y pueden variar según el firmware.
- Algunos comandos avanzados o respuestas pueden ser opcionales y sólo estar presentes en ciertas versiones de firmware.
- Confirme si su despliegue requiere TCP o UDP y configure el GPS303 en consecuencia.
- Valide que los identificadores del dispositivo, como el IMEI o el ID reportado, estén correctamente configurados para que Plaspy pueda asociar los reportes a la cuenta adecuada.
- Siempre contraste el comportamiento con la documentación del fabricante para el firmware exacto instalado en su unidad.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación y el contexto de conexión ayuda a asegurar reportes fiables, un historial de ubicaciones preciso y facilita la resolución de problemas al desplegar dispositivos GPS303 con Plaspy. Conocer el comportamiento del protocolo también mejora la configuración, el ajuste de alertas y el mantenimiento a largo plazo de una implementación de rastreo.

- Ayuda a identificar por qué un dispositivo no está reportando y si el problema es de red, transporte o configuración.
- Permite seleccionar correctamente UDP o TCP y establecer la dirección del servidor para coincidir con las expectativas de Plaspy.
- Mejora la capacidad para interpretar eventos reportados como SOS, activación de geocercas o alertas de batería baja.
- Favorece un aprovisionamiento consistente de dispositivos para que varias unidades se comporten de forma predecible en Plaspy.
- Reduce el tiempo en tareas comunes de configuración al garantizar que el dispositivo reporte al endpoint de Plaspy desde el inicio.

## Por qué usar Plaspy con este protocolo

Usar el Coban GPS303 con Plaspy ofrece a las organizaciones una vía directa para obtener visibilidad de vehículos y activos mediante una plataforma probada. El GPS303 proporciona modos de rastreo en tiempo real y periódico, geocercas, alertas SOS y tipos de alarma estándar que se integran naturalmente en Plaspy para monitoreo, alertas y análisis histórico. Cuando los dispositivos están configurados para reportar al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy detecta automáticamente el protocolo y comienza a procesar los datos de ubicación y eventos entrantes sin necesidad de selección manual del protocolo.

Para obtener más información sobre Plaspy y cómo maneja las comunicaciones de dispositivos, visite https://www.plaspy.com. Para detalles más actuales y específicos del dispositivo sobre el protocolo, notas de firmware y referencias de comandos, verifique la información con el fabricante en https://www.coban.net/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
