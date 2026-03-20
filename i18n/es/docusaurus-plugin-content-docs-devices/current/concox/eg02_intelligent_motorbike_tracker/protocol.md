---
slug: /concox/eg02_intelligent_motorbike_tracker/protocol
id: eg02_intelligent_motorbike_tracker-protocol
sidebar_label: Protocol
title: Concox - EG02 Intelligent Motorbike Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para la compatibilidad del Concox EG02 con la configuración del servidor Plaspy
keywords:
  - Protocolo Concox EG02
  - Protocolo GPS Concox EG02
  - Protocolo rastreador EG02
  - Compatibilidad EG02 Plaspy
  - Protocolo rastreador para motocicletas
  - Rastreador GPS micromovilidad
  - Protocolo de comunicación EG02
  - Rastreador Concox Plaspy
  - Guía protocolo rastreador GPS
  - Protocolo de rastreo vehicular
---

# Concox - EG02: Protocolo del rastreador inteligente para motocicletas

Esta página describe el contexto público del protocolo para usar el Concox EG02 Intelligent Motorbike Tracker con Plaspy. Se centra en la forma en que el dispositivo se comunica con la plataforma Plaspy en términos generales, en los ajustes de conexión que utiliza el servicio y en consideraciones prácticas de compatibilidad para despliegues de flotas y micromovilidad. El EG02 es un rastreador GPS compacto, tipo plug-and-play, pensado para scooters eléctricos, bicicletas eléctricas y vehículos ligeros; este documento explica cómo sus reportes y telemetría de eventos encajan con el modelo de ingestión de Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según versiones de firmware, revisiones de hardware e implementaciones del fabricante, por lo que esta página ofrece un contexto público y agnóstico a la implementación para facilitar la configuración y resolución de problemas, siempre recomendando verificar la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación es el mecanismo que el EG02 usa para reportar posiciones GNSS/LBS, alarmas y eventos de estado a un servidor de flotas como Plaspy. En la práctica, el protocolo define cómo el rastreador abre un canal de datos hacia Plaspy, se identifica y transmite telemetría que Plaspy puede interpretar y mostrar en paneles y alertas. Esta sección mantiene la discusión en términos generales y se enfoca en los aspectos relevantes para la integración y un flujo de datos confiable.

- Permite que el rastreador establezca una sesión de datos con Plaspy y envíe telemetría de posición y eventos para monitoreo en tiempo real.
- Transporta la identidad y el estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el registro de activo correcto.
- Lleva señales de alarma y eventos como movimiento no autorizado, pérdida de alimentación y activaciones de geovalla para alertas y automatizaciones.
- Funciona sobre enlaces de datos celulares; el EG02 soporta reporte GPRS TCP/IP y puede recurrir a SMS para gestión de comandos cuando las condiciones de red lo requieren.
- Permite que Plaspy reciba datos históricos y en tiempo real para reproducción, informes y flujos operativos.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartido e incluye detección automática de protocolo, por lo que la mayoría de los dispositivos solo necesitan apuntar al servidor de Plaspy. Cuando un EG02 se configura para reportar al endpoint de Plaspy, la plataforma usa características de la conexión entrante para determinar el manejo correcto del dispositivo sin requerir la selección manual del protocolo en muchos casos.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 usando los ajustes de Plaspy.
- Plaspy escucha en el puerto 8888 para datos de dispositivos y acepta conexiones UDP y TCP en ese puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- La detección automática elimina la necesidad de que los usuarios seleccionen manualmente un protocolo dentro de la plataforma cuando el rastreador apunta correctamente al endpoint de Plaspy.
- Si un dispositivo utiliza SMS como canal secundario de control, esas rutas de comando son independientes del flujo de datos TCP/UDP principal y se gestionan fuera de la ingestión TCP/IP primaria.

## Transporte y contexto de conexión

El contexto de conexión abarca las opciones de capa de transporte y el direccionamiento que hacen que el EG02 envíe su telemetría a Plaspy. El EG02 soporta reporte TCP/IP basado en GPRS y también puede recibir y ejecutar comandos por SMS según la configuración y la disponibilidad de la red. Al configurar dispositivos, comprender los detalles de transporte y endpoint es el paso práctico que garantiza que los datos lleguen a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las elecciones de aprovisionamiento.
- Configure la dirección de reporte del dispositivo a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 si se requiere un host numérico.
- El puerto 8888 es el puerto de ingestión compartido utilizado por Plaspy para todos los rastreadores compatibles.
- TCP ofrece entrega orientada a sesión mientras que UDP puede usarse cuando se busca menor latencia o una conectividad más simple; el modelo de dispositivo y el firmware determinan las opciones de transporte disponibles.
- Asegúrese de que su plan de datos SIM y los ajustes de APN estén correctamente configurados para que el EG02 pueda establecer conexiones GPRS salientes al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos disponibles y el comportamiento de los comandos; confirme siempre la compatibilidad según las notas de firmware del dispositivo.
- Revisiones de hardware o distintos lotes del EG02 pueden introducir pequeñas diferencias en los ajustes por defecto o en las funciones disponibles.
- La configuración por parte del fabricante y el branding OEM pueden alterar servidores de reporte por defecto, intervalos o conjuntos de funciones; verifique que los dispositivos apunten a d.plaspy.com o a 54.85.159.138.
- La elección del transporte (UDP vs TCP) debe validarse durante el despliegue porque ambas opciones son soportadas, pero el comportamiento puede variar según el firmware.
- Cuando se usen comandos SMS para control, compruebe cómo interactúan esos comandos con las acciones remotas gestionadas por Plaspy, como inmovilizador o sirena.
- Cruce siempre las instrucciones de incorporación de Plaspy con la documentación del proveedor para confirmar cualquier parámetro específico del dispositivo o plantillas SMS requeridas.

## Por qué es importante entender el protocolo

Conocer el comportamiento del protocolo del dispositivo ayuda a asegurar una incorporación fluida, telemetría precisa y control remoto confiable. Tener una comprensión práctica del contexto de comunicación reduce el tiempo de configuración y acelera la resolución de problemas cuando los dispositivos no reportan o los eventos no aparecen en Plaspy.

- Ayuda a diagnosticar problemas de conectividad distinguiendo entre fallas de transporte, DNS o APN y problemas de parseo de protocolo o comportamiento de firmware.
- Permite configurar correctamente la dirección de reporte y el transporte para que la telemetría llegue a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Informa la decisión de elegir UDP o TCP para un despliegue particular según las condiciones de red y los requerimientos.
- Facilita la validación de que alarmas, controles de inmovilizador y eventos de geovalla se envían e interpretan por Plaspy según lo esperado.
- Ayuda en la planificación de mantenimiento a largo plazo al destacar dependencias de firmware y hardware que afectan el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el Concox EG02 con Plaspy ofrece un camino directo hacia el seguimiento centralizado, alertas y gestión de flotas para operaciones de micromovilidad y flotas de vehículos ligeros. El factor de forma plug-and-play del EG02, su posicionamiento GNSS y LBS y las capacidades antirobo integradas se corresponden con el monitoreo en vivo de Plaspy, los flujos de trabajo de eventos y los informes históricos, de modo que los operadores pueden gestionar scooters y vehículos ligeros de manera eficiente.

Si desea saber más sobre cómo Plaspy se integra con dispositivos como el Concox EG02 y revisar guías de despliegue y capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles de protocolo más recientes del dispositivo, notas de firmware y la guía de implementación del fabricante, verifique la documentación actual en el sitio de Concox en https://www.iconcox.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
