---
slug: /lk_gps/lk109/protocol
id: lk109-protocol
sidebar_label: Protocol
title: LK-GPS - LK109 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador LK-GPS LK109 y su comunicación con Plaspy mediante ajustes de conexión compartidos
keywords:
  - Protocolo LK GPS LK109
  - Protocolo rastreador GPS LK109
  - Protocolo de comunicación LK109
  - Protocolo de seguimiento LK109
  - Compatibilidad LK GPS Plaspy
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador GPS personal
  - Integración rastreador GPS Plaspy
  - LK109 geocerca y SOS
  - Compatibilidad firmware LK109
---

# LK-GPS - Protocolo LK109

Esta página describe el contexto público del protocolo para usar el rastreador personal LK-GPS LK109 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy a nivel de conexión y reportes, y qué aspectos considerar al integrar este equipo en flotas o flujos de seguimiento personal.

El LK109 es un rastreador personal compacto y resistente al agua que incluye funciones como alarma SOS, detección de caída, geocercas y posicionamiento GPS con precisión típica de alrededor de 5 metros y alta sensibilidad. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Consulte siempre la documentación del fabricante para comportamientos específicos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación define las reglas que utiliza el LK109 para identificarse ante un servidor, reportar ubicación y estado, y recibir comandos o actualizaciones de configuración. En términos generales, el protocolo permite que el dispositivo entregue datos de ubicación y eventos a Plaspy sin exponer detalles internos del equipo.

- El protocolo transporta información de identificación y estado para que Plaspy pueda asociar los reportes entrantes a un dispositivo LK109 concreto.
- Envía posiciones, sellos de tiempo y tipos de eventos como SOS, alarma por caída y activaciones de geocerca al servidor.
- Permite operaciones comunes de gestión del dispositivo, como configuración remota vía SMS o ajustes desde servidor cuando el firmware del equipo expone esas capacidades.
- El comportamiento del protocolo y las funciones disponibles dependen del firmware y de las configuraciones del fabricante, no de Plaspy.
- Plaspy recibe los datos reportados y los normaliza para su visualización y alertas, manteniendo las diferencias específicas de cada dispositivo abstraídas para el usuario.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñada para aceptar reportes de muchos modelos comunes minimizando pasos de configuración manual. Cuando un LK109 apunta al endpoint de Plaspy, la plataforma inspecciona los reportes entrantes y determina automáticamente el protocolo del rastreador para su procesamiento.

- Plaspy utiliza un único endpoint compartido para reportes de dispositivos en d.plaspy.com y también acepta reportes directos a la IP de la plataforma 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, que es 8888 para las conexiones de dispositivo.
- El LK109 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración del usuario.
- Debido a la detección automática del protocolo por parte de Plaspy, por lo general usted no necesita seleccionar manualmente un protocolo dentro de la plataforma cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- Si un rastreador no aparece en línea, la verificación de los ajustes de reporte en el dispositivo y la confirmación de la configuración del fabricante suelen ser el siguiente paso.

## Transporte y contexto de conexión

El transporte físico y las configuraciones de conexión determinan cómo el LK109 envía datos a Plaspy. Comprender estas opciones ayuda a garantizar que el dispositivo alcance el servidor de Plaspy de forma confiable en campo.

- El LK109 puede configurarse para reportar usando UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración del dispositivo.
- Los reportes del dispositivo pueden dirigirse al dominio d.plaspy.com o a la IP directa 54.85.159.138; ambos resuelven al mismo punto de ingreso de Plaspy para datos de dispositivos.
- El puerto 8888 es el puerto común usado por todos los dispositivos en Plaspy, por lo que no se requiere configuración de puerto por dispositivo en el servidor.
- Las condiciones de red, la NAT del operador y los ajustes APN del dispositivo influyen en si UDP o TCP será más fiable para un despliegue determinado.
- Confirme el APN del dispositivo, los comandos de configuración vía SMS (si usa parametrización por SMS) y cualquier recomendación del fabricante antes de cambiar el modo de transporte.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los campos reportados, los nombres de eventos o la frecuencia de los reportes; siempre verifique la versión de firmware al diagnosticar diferencias.
- Revisiones de hardware o variantes regionales del LK109 pueden introducir pequeñas diferencias de protocolo que afectan cómo se reportan ciertas funciones o campos.
- La elección entre UDP y TCP influye en la semántica de entrega; algunas redes manejan un transporte con mayor fiabilidad que el otro.
- La configuración del fabricante a través de SMS o de una aplicación complementaria puede habilitar o deshabilitar alarmas específicas o modos de reporte que afecten la salida del protocolo.
- No asuma paridad de funciones entre todas las unidades LK109; valide el dispositivo específico en un entorno de prueba antes de un despliegue masivo.
- En caso de duda, consulte la documentación oficial de LK GPS y las notas de la versión para comportamientos del protocolo específicos según el firmware.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el LK109 ayuda en la configuración inicial, la resolución de problemas de conectividad y en asegurar la fiabilidad a largo plazo de activos y personas monitoreadas.

- Conocer claramente los endpoints de conexión y las opciones de transporte acelera el aprovisionamiento del dispositivo y reduce tiempos de inactividad.
- Estar al tanto de las variaciones de firmware y hardware ayuda a identificar por qué un equipo puede reportar de forma distinta a lo esperado.
- Saber qué eventos puede enviar el rastreador, como SOS, alarma por caída y alertas de geocerca, permite configurar reglas y notificaciones en Plaspy de manera efectiva.
- Entender dónde revisar APN y parámetros por SMS facilita la configuración remota y la recuperación del dispositivo.
- Un buen contexto del protocolo facilita la colaboración con el soporte del fabricante cuando el comportamiento del dispositivo resulta inconsistente.

## Por qué usar Plaspy con este protocolo

Usar el LK109 con Plaspy brinda a organizaciones y cuidadores una forma sencilla de recibir actualizaciones de ubicación y eventos de alarma en una plataforma centralizada. Plaspy normaliza los reportes de los dispositivos para que los equipos puedan monitorear posición, violaciones de geocerca, eventos SOS y el estado básico del dispositivo sin gestionar endpoints de servidor específicos por modelo.

Plaspy ofrece un único endpoint y puerto de reporte para que los administradores puedan estandarizar la configuración de dispositivos en flotas mixtas. Para obtener más información sobre Plaspy y cómo maneja las integraciones de dispositivos visite https://www.plaspy.com. Para detalles específicos del protocolo LK109, notas de firmware e información de implementación del dispositivo, verifique la información más reciente con el fabricante en https://www.lk-gps.com.
