---
slug: /careu/ugo/protocol
id: ugo-protocol
sidebar_label: Protocol
title: CAREU - Ugo Protocol
sidebar_class_name: menu_item_tracker
description: Visión general del protocolo público del rastreador OBD II CAREU Ugo y cómo se comunica con Plaspy para telemetría confiable
keywords:
  - Protocolo CAREU Ugo
  - Protocolo GPS CAREU Ugo
  - Compatibilidad CAREU Ugo Plaspy
  - Protocolo rastreador OBD II Ugo
  - Protocolo de comunicación CAREU Ugo
  - Protocolo de rastreo Ugo
  - Protocolo de dispositivos Plaspy
  - Rastreo de vehículos OBD II
  - Gestión de flotas Ugo
  - Rastreadores compatibles con Plaspy
---

# CAREU - Protocolo Ugo

Esta página describe el contexto público del protocolo para el uso del rastreador OBD II CAREU Ugo con la plataforma Plaspy. Se enfoca en explicar, en términos seguros y no sensibles, cómo el dispositivo se comunica con Plaspy para que integradores y administradores de flotas entiendan el comportamiento de conexión e informe necesario para una entrega de telemetría confiable a Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y los detalles de reporte pueden variar según la versión de firmware, la revisión de hardware, las SKUs regionales y la implementación del fabricante; por eso esta página mantiene la discusión a un nivel de conexión y flujo de trabajo, destacando puntos prácticos de configuración para una integración exitosa.

## Visión general del protocolo

El dispositivo Ugo utiliza un flujo de reporte celular con GNSS para enviar ubicación, telemetría OBD II y eventos de movimiento a un servicio remoto. El protocolo de comunicación define cómo el rastreador se identifica, reporta posición y datos de sensores, y acepta comandos de configuración remota. Para la integración con Plaspy, la función principal del protocolo es asegurar la entrega oportuna y estructurada de telemetría desde el vehículo hasta el servidor.

- Permite reportes de posición GNSS periódicos y basados en eventos a un servidor remoto para mapeo e historial.
- Transmite telemetría OBD II y campos de estado del vehículo que Plaspy puede usar para segmentación de viajes y diagnóstico.
- Envía eventos de acelerómetro y movimiento para análisis de comportamiento del conductor y alertas por impacto.
- Soporta configuración remota y actualizaciones de firmware iniciadas por el fabricante o por flujos de trabajo de gestión de flotas.
- Proporciona identificadores e información de sesión que Plaspy utiliza para asociar los reportes entrantes al vehículo y cuenta correctos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador basándose en el tráfico entrante del dispositivo. En la mayoría de los casos, cuando el Ugo está configurado para reportar al endpoint de Plaspy, no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP 54.85.159.138 en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos y las políticas de red.
- Si el rastreador apunta correctamente al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del rastreador y asociará los datos entrantes con el registro de dispositivo correspondiente.
- Los pasos típicos de configuración se limitan a apuntar el rastreador al endpoint de Plaspy y confirmar que el identificador del dispositivo esté registrado o visible en Plaspy.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el Ugo establece un canal de transporte con Plaspy y las opciones disponibles para los integradores. Ugo soporta enlaces celulares modernos y puede hacer fallback entre generaciones de red; a nivel de transporte puede usar UDP o TCP según la configuración del dispositivo o ajustes de firmware.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- El endpoint del servidor Plaspy es accesible en d.plaspy.com y en la IP del servidor 54.85.159.138 para entornos que requieren direccionamiento directo.
- Todos los dispositivos soportados por Plaspy usan el puerto 8888, manteniendo la configuración de firewall y NAT consistente en los despliegues.
- El rastreador usará el canal de datos celulares disponible, con variantes Ugo que soportan 4G LTE y retroceso a 3G o 2G según sea necesario.
- La selección del transporte puede afectar características de confiabilidad como retransmisiones y latencia; elija el modo de transporte que soporte el firmware del dispositivo y las condiciones de la red.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del dispositivo pueden cambiar el conjunto de campos reportados y el tiempo de los mensajes; verifique el comportamiento para su revisión de firmware.
- Las revisiones de hardware y las SKUs regionales pueden diferir en bandas celulares, capacidad de registro o soporte de accesorios, lo que puede afectar la telemetría disponible.
- Algunas funciones avanzadas, como inmovilización remota o control de accesorios, pueden requerir configuración adicional o hardware opcional.
- La selección del modo de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y el diseño de la red de la flota para obtener mejores resultados.
- La configuración remota y el comportamiento FOTA son provistos por el fabricante y pueden alterar los parámetros de reporte después de las actualizaciones.
- Confirme los identificadores del dispositivo y los intervalos de reporte en Plaspy después del aprovisionamiento para asegurar que los datos se estén asociando correctamente.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación de Ugo ayuda en la puesta en marcha inicial, en las operaciones continuas y en la resolución de problemas. Saber qué datos enviará el rastreador y cómo se conecta a Plaspy reduce el tiempo de integración y mejora la confiabilidad operativa.

- Acelera el despliegue inicial al enfocarse en el endpoint y la configuración de transporte correctos que requiere Plaspy.
- Ayuda a diagnosticar problemas de conectividad distinguiendo entre fallas de red y problemas de firmware o configuración del dispositivo.
- Permite tomar decisiones informadas sobre intervalos de reporte y umbrales de eventos para equilibrar la vida útil de la batería y la frescura de los datos.
- Mejora la respuesta ante actualizaciones de firmware al anticipar cambios en campos reportados o en el timing de los mensajes.
- Facilita el mapeo de identificadores de dispositivos a vehículos en Plaspy para que la telemetría y los eventos se atribuyan correctamente.

## Por qué usar Plaspy con este protocolo

Usar el CAREU Ugo con Plaspy ofrece a los operadores de flotas una forma directa de recopilar telemetría OBD II, datos de posición GNSS y eventos de movimiento sin instalaciones complejas. Plaspy agrega los reportes entrantes para seguimiento en vivo, reproducción histórica, alertas y flujos de trabajo de desempeño del conductor, lo que convierte a Ugo en una opción práctica para flotas que valoran el despliegue rápido y la telemetría vehicular detallada.

Si desea conocer más sobre Plaspy y cómo trabaja con dispositivos como el CAREU Ugo visite https://www.plaspy.com. Para los detalles más actuales específicos del protocolo del dispositivo, notas de firmware y variantes regionales, verifique la información en el sitio del fabricante https://www.systech-iot.com/ ya que el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo.
