---
slug: /gotop/d26/protocol
id: d26-protocol
sidebar_label: Protocol
title: GOTOP - D26 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo GOTOP D26 y su compatibilidad con Plaspy, con contexto de conexión para rastreo de flotas y activos
keywords:
  - protocolo GOTOP D26
  - protocolo GPS GOTOP D26
  - protocolo de comunicación GOTOP D26
  - protocolo de rastreo GOTOP D26
  - compatibilidad GOTOP D26 Plaspy
  - Plaspy GOTOP D26
  - guía protocolo rastreador GPS
  - rastreador solar GPS D26
  - protocolo rastreo de flotas
  - rastreo de activos D26
---

# GOTOP - Protocolo D26

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP D26 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a un nivel general, qué esperar de la configuración de conexión y cómo esa comunicación habilita el rastreo en tiempo real, la telemetría y la subida de alarmas para activos en exteriores. La información está pensada para ayudar a integradores y administradores de flotas a entender el rol del protocolo y el contexto de integración sin exponer detalles sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El D26 es compatible con Plaspy desde el primer momento y su combinación de conectividad 4G/GPRS, carga solar, AGPS y detección de movimiento lo hacen adecuado para despliegues prolongados en exteriores; sin embargo, las versiones de firmware y las variantes del dispositivo pueden alterar el comportamiento de reporte y las funciones disponibles.

## Resumen del protocolo

El protocolo es el método que usa el dispositivo para empaquetar y enviar posiciones GNSS, telemetría y notificaciones de eventos a un servidor remoto, de manera que la plataforma pueda mostrar historial de ubicaciones, alertas y estado en vivo. En el caso del D26, esa comunicación se realiza sobre el enlace de datos celular e incluye reportes de posición, eventos de movimiento y alarma, y datos complementarios que se conservan durante cortes de conectividad. El contexto público del protocolo describe los tipos de datos esperados y cómo Plaspy los utiliza, más que detalles binarios o privados del proveedor.

- Permite la entrega de posiciones GNSS, marcas de tiempo y telemetría básica del D26 a Plaspy para mapeo e historial.
- Transmite alertas basadas en eventos como movimiento, vibración, geocerca, exceso de velocidad y SOS para que Plaspy active notificaciones y flujos de trabajo.
- Soporta el almacenamiento en búfer offline en el dispositivo y transmisiones suplementarias para que los datos recogidos durante huecos de cobertura lleguen a Plaspy cuando la conectividad se restablezca.
- Proporciona medios para la configuración remota y para disparar actualizaciones de firmware mediante endpoints de servidor compatibles.
- Permite que el D26 se identifique ante el servidor para que Plaspy asocie los datos entrantes con el activo y registro de dispositivo correctos.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores usando un endpoint y un enfoque de detección unificados, por lo que la mayoría de los dispositivos solo necesitan apuntar al servidor correcto. Cuando el D26 está configurado para reportar a Plaspy, el tráfico entrante del dispositivo se evalúa y se asigna a la canalización de procesamiento adecuada, permitiendo que la plataforma ingiera GNSS, telemetría y eventos de alarma sin selección manual de protocolo en la mayoría de los casos.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para conexiones de dispositivos.
- El puerto es 8888; Plaspy acepta tráfico de dispositivos en este puerto para los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que por lo general no es necesario seleccionar el protocolo manualmente si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.
- Todos los dispositivos en Plaspy utilizan el mismo puerto, lo que simplifica la configuración de dispositivos en flotas.
- Si una variante del dispositivo o una versión de firmware implementa un modo de reporte poco común, confirme los ajustes con el fabricante y asegúrese de que el dispositivo esté apuntando al endpoint de Plaspy.

## Transporte y contexto de conexión

El transporte de la conexión y la dirección del servidor determinan cómo el D26 se comunica con Plaspy a través de la red celular. El D26 soporta TCP/IP en enlaces celulares y en muchos despliegues puede configurarse para usar TCP o UDP según firmware y configuración. Mantener el foco en el contexto de transporte ayuda a los administradores a preparar el aprovisionamiento del dispositivo y las reglas de firewall sin exponer detalles del parser.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del mismo.
- Los dispositivos pueden apuntar al servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
- El puerto es 8888 y se usa en todos los dispositivos soportados por Plaspy para mantener consistencia.
- Use el tipo de transporte (TCP o UDP) que soporte su firmware D26 y su operador para equilibrar fiabilidad y objetivos de consumo de batería.
- Asegúrese de que el tráfico saliente del dispositivo hacia d.plaspy.com o 54.85.159.138 en el puerto 8888 esté permitido por cualquier firewall intermedio o configuración NAT.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción pueden cambiar qué funciones o modos de transporte están disponibles en una unidad D26.
- Revisiones de hardware o variantes regionales pueden modificar las bandas celulares soportadas u opciones de E/S y, por ende, afectar cómo el dispositivo reporta cierta telemetría.
- Los menús de configuración del lado del fabricante a veces permiten elegir entre TCP y UDP; seleccione el transporte que coincida con su plan de red y la guía de conexión de Plaspy.
- El comportamiento de almacenamiento offline y transmisiones suplementarias puede variar con el firmware y debe probarse en condiciones de cobertura representativas.
- Siempre valide la configuración del dispositivo con la documentación oficial de GOTOP para su firmware D26 y confirme los parámetros exactos de reporte.
- Al integrar a escala, pruebe una muestra representativa de unidades para detectar diferencias sutiles de comportamiento antes de un despliegue a toda la flota.

## Por qué es importante comprender el protocolo

Entender de forma práctica el protocolo de comunicación del D26 ayuda a asegurar un aprovisionamiento fiable de los dispositivos, una resolución de problemas más rápida y un comportamiento predecible en flotas en producción. Saber qué envía el rastreador y cómo Plaspy lo recibe reduce la incertidumbre durante el despliegue y facilita identificar dónde buscar cuando faltan datos o se reportan eventos incorrectamente.

- Acelera la configuración inicial al aclarar qué servidor y transporte configurar en el dispositivo.
- Ayuda a diagnosticar problemas de conectividad al reducir el alcance a transporte, DNS o comportamientos de firmware en lugar de la interpretación de la plataforma.
- Mejora la calidad de las alertas al confirmar qué eventos puede reportar el dispositivo y cómo se muestran en Plaspy.
- Apoya la planificación de capacidad y la configuración de firewalls porque todos los dispositivos Plaspy usan el mismo puerto y convenciones de endpoint.
- Reduce el riesgo de tiempo de inactividad al enfatizar la validación del comportamiento de firmware para almacenamiento offline y retransmisión.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP D26 con Plaspy ofrece una combinación práctica para la visibilidad de activos en exteriores a largo plazo. La carga solar del D26, su carcasa resistente IP67, la aceleración AGPS y la detección de movimiento lo hacen adecuado para contenedores, tráileres y equipos remotos. Plaspy consume las posiciones GNSS, la telemetría y las subidas de eventos del dispositivo para ofrecer mapas en vivo, reproducción histórica y alertas aptas para operaciones de flota y protección de activos.

Si desea saber más sobre cómo Plaspy maneja los datos de dispositivos, endpoints de servidor y funcionalidades de flota, visite https://www.plaspy.com. Para las notas más recientes específicas del dispositivo, comportamiento de firmware y guías de configuración del fabricante, por favor verifique los detalles en el sitio oficial de GOTOP https://www.gotop.cc/ ya que el soporte de protocolo y las implementaciones de dispositivos pueden cambiar con el tiempo.
