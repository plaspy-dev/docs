---
slug: /stars_nav/pt_35w/protocol
id: pt_35w-protocol
sidebar_label: Protocol
title: Stars Nav - PT-35W Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Stars Nav PT-35W y su comunicación con Plaspy para rastreo y alertas confiables
keywords:
  - Protocolo Stars Nav PT-35W
  - Protocolo GPS Stars Nav PT-35W
  - Compatibilidad PT-35W Plaspy
  - Protocolo de comunicación PT-35W
  - Protocolo de rastreo PT-35W
  - Protocolo rastreador GPS Stars Nav
  - Documentación protocolo PT 35W
  - Protocolo de dispositivos Plaspy
  - Seguimiento de flotas Stars Nav PT 35W
  - Rastreador GPS marino PT 35W
---

# Stars Nav - Protocolo PT-35W

Esta página describe el contexto público del protocolo para usar el rastreador Stars Nav PT-35W con Plaspy. Resume cómo el equipo suele transmitir ubicación, estado y alarmas a un backend de gestión de flotas y qué esperar al integrar el PT-35W en Plaspy para rastreo en tiempo real, alertas y telemetría. El contenido aquí se centra en detalles de integración públicos y no sensibles, en lugar de información propietaria del fabricante.

Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo para el PT-35W puede variar según la versión de firmware, la revisión de hardware, la configuración del operador y la implementación del fabricante, por lo que esta página ofrece orientación general y contexto práctico en lugar de comandos específicos de firmware.

## Resumen del protocolo

El protocolo de comunicación del PT-35W define cómo el dispositivo transmite ubicaciones GPS, actualizaciones de estado, entradas de alarma y telemetría básica a un servidor. En la práctica, el protocolo garantiza que el rastreador pueda identificarse ante un backend, reportar movimiento y eventos de sensores, y permitir controles remotos cuando están disponibles. Para la integración con Plaspy, el enfoque está en la entrega fiable de datos de ubicación y eventos mediante métodos estándar de reporte del dispositivo.

- Permite que el PT-35W envíe actualizaciones periódicas de ubicación GPS e informes de estado a un servidor remoto.
- Transporta el estado de alarmas y entradas, como alertas de pánico y encendido/apagado del motor, para flujos de trabajo basados en eventos.
- Proporciona datos de identificación del dispositivo para que Plaspy asocie los reportes entrantes con el registro correcto del activo.
- Soporta comportamientos de bajo consumo y wake on power para que el dispositivo informe cuando vuelve la alimentación externa o en eventos programados de despertar.
- Permite control remoto vía SMS cuando la variante del equipo y el operador soportan canales de comando por SMS.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador usado por las conexiones entrantes. Para la mayoría de los usuarios esto significa que no es necesario seleccionar manualmente un protocolo en Plaspy: una vez que el PT-35W esté configurado para reportar al endpoint de Plaspy, la plataforma identificará y procesará los datos del equipo de forma automática.

- Plaspy escucha los reportes de dispositivos en un endpoint común en el dominio d.plaspy.com.
- El servidor de Plaspy accesible por la IP 54.85.159.138 acepta conexiones de rastreadores para ingestión.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para datos de rastreo entrantes, lo que simplifica la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante y adapta el procesamiento en consecuencia.
- En configuraciones típicas, el usuario solo necesita apuntar el PT-35W al endpoint de Plaspy y asegurarse de que el dispositivo esté permitido por la configuración del operador.

## Transporte y contexto de conexión

El transporte de la conexión determina cómo el PT-35W envía sus reportes a Plaspy, pero no cambia el propósito de alto nivel del protocolo. El PT-35W puede configurarse para usar canales de datos por paquete o SMS según la variante y las condiciones de la red local. Al usar reporte por IP, el dispositivo puede dirigirse a Plaspy utilizando el nombre de dominio o la dirección numérica del servidor.

- El PT-35W puede configurarse para conectarse a Plaspy por UDP o TCP según el soporte y la configuración del equipo.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 para todos los dispositivos soportados para simplificar la configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 cuando las restricciones de red u operador lo requieran.
- Usar un puerto consistente entre equipos reduce errores de configuración por dispositivo y facilita la detección automática.
- Si se usa control por SMS o reporte por SMS, esos mensajes se tratan por separado del canal de reporte por IP y dependen del enrutamiento SMS del operador.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades PT-35W pueden afectar los intervalos de reporte, los eventos soportados y las funciones de control remoto.
- Las revisiones de hardware y las variantes de ensamblaje pueden cambiar qué entradas o comportamientos de alimentación están disponibles en una unidad particular.
- La configuración del operador y la SIM (ajustes APN, enrutamiento de SMS, plan de datos) influye en si el reporte por IP o la alternativa por SMS son viables.
- La elección de UDP frente a TCP para el reporte por IP puede determinarse por la capacidad del dispositivo y la fiabilidad de la red en su área de despliegue.
- Verifique qué variante del PT-35W tiene y alinéela con las opciones de ingestión de Plaspy antes de realizar un despliegue masivo.
- Siempre contraste la compatibilidad y los comportamientos soportados con la documentación más reciente del fabricante para el PT-35W.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el PT-35W ayuda a garantizar una configuración fluida, operación predecible y solución eficiente de problemas cuando se usa con Plaspy. Conocer los roles básicos del protocolo y las opciones de conexión reduce la fricción en la integración y ayuda a elegir la configuración adecuada para fiabilidad y eficiencia energética.

- Garantiza que los intervalos de reporte y los comportamientos de despertar del dispositivo coincidan con las necesidades de rastreo y la expectativa de duración de batería.
- Ayuda a diagnosticar problemas de conectividad confirmando que transporte, endpoint y ajustes APN son correctos.
- Orienta en decisiones sobre usar reporte por IP o control por SMS y qué funciones estarán disponibles.
- Facilita la planificación de actualizaciones de firmware y variaciones de hardware que puedan cambiar el comportamiento con el tiempo.
- Mejora la respuesta ante incidentes confirmando qué entradas de alarma y controles remotos se reenvían a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con un rastreador PT-35W ofrece una forma práctica de centralizar ubicación, alertas y telemetría básica para activos terrestres y marinos. La carcasa robusta IP66 del PT-35W, su amplio rango de entrada de alimentación, batería interna de respaldo y capacidades de control remoto por SMS encajan bien con los flujos de trabajo de Plaspy para visibilidad de flotas, geocercas y alertas basadas en eventos en entornos exigentes.

Si desea conocer más sobre las funciones de Plaspy, patrones de conectividad soportados y cómo la plataforma maneja el reporte de dispositivos, visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, notas de firmware e información sobre variantes de hardware, verifique con el fabricante en http://www.starsnav.com/. El soporte de protocolo y el comportamiento del dispositivo pueden cambiar con firmware y revisiones, por lo que se recomienda consultar la documentación oficial del fabricante.
