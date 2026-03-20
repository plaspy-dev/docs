---
slug: /gelix/gelix_2/protocol
id: gelix_2-protocol
sidebar_label: Protocol
title: Gelix - Gelix 2 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo Gelix 2 para integrar el rastreador con Plaspy, con orientación sobre conexión y compatibilidad
keywords:
  - Gelix
  - Gelix 2
  - Protocolo Gelix 2
  - Rastreador GPS Gelix 2
  - Gelix 2 Plaspy
  - Protocolo de rastreo Gelix
  - Comunicación rastreador GPS
  - Protocolo de localización de vehículos
  - Compatibilidad seguimiento de flotas
  - Integración Plaspy
---

# Gelix - Protocolo Gelix 2

Esta página ofrece una visión pública y de alto nivel sobre el contexto de comunicación al usar el rastreador Gelix 2 con Plaspy. Se centra en cómo el equipo informa posición, eventos y estados de sensores a la plataforma, y en las configuraciones de conexión más comunes. El contenido está dirigido a administradores e integradores y evita detalles privados o sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según versiones de firmware, revisiones de hardware y decisiones del fabricante, por lo que esta página describe el papel general de comunicación del rastreador más que los detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de reporte Gelix 2 define cómo el rastreador envía actualizaciones de ubicación, notificaciones de eventos, lecturas de sensores y confirmaciones de control a un servidor remoto. Para la integración con Plaspy, el protocolo tiene la función de entregar datos estructurados que la plataforma puede interpretar para mostrar la ubicación del vehículo, su estado y las alarmas en tiempo real.

- Transmite la posición GPS y datos de movimiento para que Plaspy muestre la ubicación y el historial de rutas.
- Envía mensajes de alarma y eventos, como exceso de velocidad, entrada/salida de zonas o activación de sensores, para alertas oportunas.
- Reporta el estado de sensores y entradas que Plaspy mapea a canales de dispositivo y paneles de control.
- Permite la configuración remota y comandos de control sobre la red cuando el rastreador lo soporta.
- Puede incluir funciones auxiliares, como notificaciones de canal de voz o estados de escucha remota cuando el equipo dispone de esas capacidades.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido e inspecciona el tráfico para identificar el tipo de dispositivo reportante. Cuando un Gelix 2 está configurado correctamente para reportar a Plaspy, la plataforma reconocerá automáticamente el protocolo del rastreador y procesará sus mensajes sin necesidad de seleccionar el protocolo manualmente.

- Plaspy utiliza un endpoint de servidor compartido en d.plaspy.com para el reporte de dispositivos.
- La plataforma también acepta conexiones al IP 54.85.159.138 para casos en que se use una dirección numérica.
- Plaspy escucha en el puerto 8888 y todos los dispositivos compatibles usan ese mismo puerto para reportar.
- El sistema acepta transporte tanto UDP como TCP según la configuración del dispositivo.
- Si el equipo apunta al endpoint de Plaspy y utiliza un transporte compatible, normalmente no se requiere seleccionar el protocolo manualmente en la plataforma.

## Transporte y contexto de conexión

Comprender cómo Gelix 2 se conecta a Plaspy ayuda a garantizar la entrega exitosa de mensajes y una operación confiable. El rastreador puede utilizar transportes de datos móviles estándar para enviar reportes y eventos al endpoint de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, dependiendo del firmware y las opciones de configuración.
- Apunte la dirección de reporte del rastreador a d.plaspy.com o al IP 54.85.159.138 cuando no se disponga de DNS.
- Plaspy acepta el tráfico entrante de dispositivos en el mismo puerto para todos los modelos soportados, lo que simplifica la configuración de red.
- Use el modo de transporte que soporte su dispositivo y que ofrezca las características de confiabilidad que requiera; TCP aporta orientación de conexión mientras que UDP suele usarse para reportes livianos.
- Asegúrese de que el APN y la conexión de datos móviles del equipo estén funcionando para que los reportes lleguen al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el contenido de los mensajes, los campos disponibles y las funciones soportadas; siempre valide contra la documentación vigente del dispositivo.
- Las opciones de configuración del fabricante pueden modificar intervalos de reporte, eventos habilitados o la selección de transporte, lo que afecta cómo el dispositivo aparece en Plaspy.
- Algunas funciones avanzadas, como monitorización de voz o escucha remota, dependen del soporte del operador y del firmware del equipo y pueden no estar disponibles en todas las unidades.
- Al cambiar entre modos de transporte UDP y TCP, confirme que la configuración del rastreador y la red permiten que el protocolo elegido alcance d.plaspy.com.
- La detección automática de Plaspy reduce la carga de configuración, pero la dirección inicial del dispositivo y la puesta a punto de la red deben ser correctas para que la detección funcione.
- Para actualizaciones remotas de firmware o configuraciones complejas por GPRS, consulte la guía del fabricante para evitar interrumpir el reporte.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el Gelix 2 ayuda a los administradores a configurar los dispositivos correctamente, interpretar su comportamiento durante la resolución de problemas y mantener una operación fiable a largo plazo en Plaspy. Un entendimiento práctico del protocolo y del contexto de transporte reduce el tiempo de inactividad y acelera la resolución de problemas comunes.

- Ayuda a asegurar la dirección correcta hacia d.plaspy.com o 54.85.159.138 y el puerto requerido para el reporte.
- Facilita la elección entre UDP o TCP según las condiciones de red y las capacidades del dispositivo.
- Permite interpretar mejor la temporización de eventos y los intervalos de reporte al revisar registros o datos en vivo.
- Contribuye a validar si las alarmas y los estados de los sensores se están transmitiendo como se espera.
- Mejora la coordinación con el fabricante cuando cambios de firmware o comportamiento afectan la integración.

## Por qué usar Plaspy con este protocolo

Usar dispositivos Gelix 2 con Plaspy proporciona a las organizaciones una forma unificada de capturar ubicación, alarmas y datos de sensores para visibilidad de activos y supervisión de flotas. El enfoque de endpoint único de Plaspy agiliza la incorporación de dispositivos y reduce la complejidad de configuración, lo que facilita desplegar rastreadores Gelix 2 en vehículos y activos manteniendo la vigilancia centralizada.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el Gelix 2, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la información más reciente con el fabricante en http://www.gelix.com/.
