---
slug: /ulbotech/t361/protocol
id: t361-protocol
sidebar_label: Protocol
title: Ulbotech - T361 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Ulbotech T361 con Plaspy en telemetría vehicular y de flotas
keywords:
  - Ulbotech T361
  - protocolo Ulbotech T361
  - rastreador GPS Ulbotech
  - protocolo T361
  - compatibilidad Plaspy
  - protocolo rastreador OBD II
  - protocolo seguimiento vehicular
  - comunicación rastreador GPS
  - seguimiento flotas T361
  - telemetría Ulbotech
---

# Ulbotech - Protocolo T361

Esta página describe el contexto público del protocolo para integrar el rastreador OBD II Ulbotech T361 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, las opciones de conexión que normalmente empleará, y notas prácticas que facilitan la configuración y la resolución de problemas. La visión general aquí es no sensible y complementaria a la documentación oficial del fabricante.

El T361 es un rastreador OBD II plug-and-play que envía posición GNSS, telemetría OBD y CAN, eventos del acelerómetro y salidas de control remoto sobre GPRS. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre consulte la documentación de Ulbotech para detalles específicos de firmware.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el T361 se identifica, reporta posiciones GNSS y telemetría del vehículo, y recibe comandos o configuraciones cuando están soportados. Para quienes integran con Plaspy, lo importante es que el dispositivo puede enviar ubicación, métricas OBD y notificaciones de eventos a través de un enlace celular, y que Plaspy ingiere y normaliza esas señales para su visualización y reglas.

- El protocolo transporta actualizaciones periódicas de ubicación y mensajes impulsados por eventos para seguimiento en tiempo real y reproducción de historial.
- La telemetría del vehículo, como PIDs OBD y datos SAE J1939, se informa como mensajes del dispositivo que Plaspy mapea a campos utilizables.
- La identidad del dispositivo y el estado básico se incluyen para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Eventos diagnósticos y de sensores, tales como conducción brusca, estado de encendido y desconexiones, forman parte del flujo de mensajes usado por alertas y reglas.
- El protocolo también soporta funciones de gestión remota como disparadores de actualización de firmware y entrega de configuración cuando están disponibles.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores usando un endpoint de red común y detectar automáticamente el protocolo entrante. En la mayoría de los casos, un T361 configurado correctamente para reportar al endpoint de Plaspy no requerirá selección manual de protocolo en la plataforma.

- Plaspy escucha en un endpoint compartido que usan todos los dispositivos soportados, reduciendo la complejidad de configuración.
- El dominio público del servidor Plaspy es d.plaspy.com, que resuelve al endpoint de la plataforma.
- La IP del servidor Plaspy es 54.85.159.138 para proveedores o entornos que prefieren direccionamiento numérico.
- Plaspy utiliza el puerto 8888 para las conexiones de dispositivo y todos los equipos soportados por Plaspy usan ese mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no será necesario que usted seleccione el protocolo manualmente si el dispositivo reporta al endpoint de Plaspy.

## Transporte y contexto de conexión

El comportamiento de conexión del T361 depende de la configuración del dispositivo y de las condiciones de la red. El rastreador puede configurarse para usar transporte UDP o TCP al reportar a Plaspy, y Plaspy acepta ambos en el mismo puerto por conveniencia y compatibilidad.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración.
- Plaspy acepta reportes de dispositivos en el puerto 8888 para todos los rastreadores soportados para simplificar el aprovisionamiento.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a 54.85.159.138 cuando la infraestructura de red lo requiera.
- Usar DNS para el nombre de dominio generalmente permite una conmutación transparente si cambia el enrutamiento del backend.
- Asegúrese de que el APN y la conectividad GPRS del dispositivo estén correctos para que el rastreador pueda alcanzar el endpoint de Plaspy a través de la red celular.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden modificar la disponibilidad de mensajes y la telemetría exacta que reporta el dispositivo. Revise las notas de firmware para diferencias en funciones.
- Las opciones de configuración del lado del fabricante o las variantes regionales pueden afectar qué PIDs OBD o tramas CAN se exponen a la plataforma.
- La elección de transporte (UDP frente a TCP) puede influir en las características de entrega; seleccione el transporte que se ajuste a la fiabilidad de su red y a las recomendaciones de configuración del dispositivo.
- Algunas funcionalidades, como actualizaciones remotas de firmware y mapeos ECU avanzados, requieren tanto soporte de firmware en el dispositivo como aprovisionamiento correcto en el servidor.
- Verifique que la SIM del equipo y los ajustes de la red móvil permitan conexiones salientes a d.plaspy.com o a la IP numérica si utiliza direccionamiento directo.
- Al desplegar a gran escala, valide primero un conjunto reducido de dispositivos para confirmar el comportamiento del protocolo y del transporte antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el T361 ayuda a asegurar una incorporación confiable, una ingestión correcta de la telemetría y una resolución de problemas más rápida cuando los dispositivos no funcionan como se espera. Tener claro el contexto de conexión, el transporte y lo que el dispositivo reporta permite alinear la configuración del equipo con los flujos de trabajo y necesidades operativas de Plaspy.

- Detección más rápida de APN mal configurados o endpoints de reporte que impidan que los datos lleguen a Plaspy.
- Mapeo más preciso de la telemetría OBD y CAN a los campos de Plaspy para informes y reglas.
- Mejor planificación de la selección de transporte y del comportamiento de la red en zonas con cobertura celular variable.
- Expectativas claras sobre qué eventos y diagnósticos estarán disponibles según el firmware y el soporte ECU.
- Colaboración más eficaz con el soporte de Ulbotech cuando el comportamiento del dispositivo difiera de los patrones de ingestión de la plataforma.

## Por qué usar Plaspy con este protocolo

El Ulbotech T361 ofrece telemetría a nivel vehicular y una instalación OBD II sencilla que complementa las capacidades de gestión de flotas, alertas e informes de Plaspy. Integrar el T361 con Plaspy permite a las organizaciones combinar ubicación en tiempo real con datos de motor y eventos del conductor para mejorar operaciones, seguridad y protección de activos.

Plaspy acepta conexiones a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP y detecta automáticamente el protocolo del rastreador, por lo que el aprovisionamiento suele ser sencillo una vez que el APN del dispositivo y los ajustes de reporte son correctos. Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolo y firmware del dispositivo, verifique la información en el sitio del fabricante http://www.ulbotech.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
