---
slug: /queclink/gv56/protocol
id: gv56-protocol
sidebar_label: Protocol
title: QuecLink - GV56 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador QuecLink GV56 con Plaspy para comunicación y compatibilidad de dispositivos
keywords:
  - Protocolo QuecLink GV56
  - Rastreador GPS QuecLink GV56
  - Compatibilidad GV56 Plaspy
  - Protocolo de comunicación GV56
  - Protocolo de rastreo GV56
  - Protocolo GPS QuecLink
  - Rastreo de flotas GV56
  - Telemetría GV56
  - Integración de dispositivo GV56
  - Protocolo de dispositivo Plaspy
---

# QuecLink - Protocolo GV56

Esta página describe el contexto público del protocolo para usar el rastreador GPS QuecLink GV56 con Plaspy. Se centra en cómo el GV56 se comunica con la plataforma Plaspy a nivel general y qué esperar al integrar este rastreador compacto en flotas, flujos de trabajo antirrobo y recolección de telemetría.

Plaspy utiliza un punto de conexión y puerto compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto de los mensajes y las funciones disponibles pueden variar según la versión de firmware del GV56, la revisión de hardware y la implementación del fabricante, por lo que esta página debe tomarse como una guía de alto nivel y siempre conviene consultar la documentación de QuecLink para detalles específicos del dispositivo.

## Resumen del protocolo

El protocolo del rastreador define cómo el GV56 envía posiciones GNSS, telemetría y notificaciones de eventos a un servidor remoto, y cómo se entregan los comandos remotos y la configuración de vuelta al dispositivo. A grandes rasgos, el protocolo permite reportes de posición fiables, alarmas basadas en eventos y mapeo de telemetría para que Plaspy pueda presentar información de ubicación y estado útil.

- Transmite posición GNSS y telemetría básica para seguimiento en tiempo real y registro de rutas.
- Entrega mensajes de eventos como activaciones de geocerca, movimiento o remolque, detección de choque y alarmas por bloqueo de señal para flujos automatizados.
- Mapea entradas analógicas, entradas digitales y datos de accesorios BLE hacia los paneles y sistemas de reporte de Plaspy.
- Soporta flujos de configuración y control remoto que permiten a Plaspy actuar sobre salidas y comportamientos del dispositivo cuando el firmware expone esas capacidades.
- Proporciona el contexto de datos necesario para que Plaspy correlacione los reportes del rastreador con reglas de usuario, alertas e informes.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un punto de conexión de red compartido y utiliza detección automática para identificar a qué protocolo de rastreador corresponde la información entrante. En la mayoría de las implementaciones, el dispositivo solo necesita estar configurado para reportar al endpoint de Plaspy y no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha los reportes en la dirección de servidor compartida d.plaspy.com y en su IP pública 54.85.159.138.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto de escucha, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado envía datos a la plataforma.
- En implementaciones típicas no es necesario elegir un protocolo dentro de Plaspy si el GV56 está apuntando al endpoint de Plaspy.
- Si un rastreador no parece registrarse, verifique que el dispositivo esté apuntando al endpoint correcto de Plaspy y que el firmware soporte el envío de reportes a servidores de terceros.

## Transporte y contexto de conexión

El GV56 puede configurarse para enviar reportes a Plaspy por UDP o TCP en el puerto compartido que usa la plataforma. La elección entre UDP y TCP depende del soporte del dispositivo y de los requisitos operativos de fiabilidad, latencia y paso de firewalls.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 cuando se les indica reportar a Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica el aprovisionamiento y las implementaciones a escala.
- La conectividad celular GPRS proporciona el transporte desde el vehículo hasta el endpoint de Plaspy; asegúrese de que el APN de la SIM y la configuración de datos estén correctos según las indicaciones del fabricante.
- Confirme que las reglas de firewall o del operador móvil permiten conexiones salientes hacia el endpoint de Plaspy y el protocolo de transporte configurado.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el formato de los reportes del GV56 y qué campos de telemetría están disponibles; revise siempre las notas de la versión al actualizar firmware.
- Las revisiones de hardware y accesorios opcionales, como sensores BLE, pueden influir en qué canales de telemetría están presentes y cómo se reportan.
- Las configuraciones predeterminadas del fabricante pueden usar un endpoint de reporte distinto; apunte el dispositivo a Plaspy configurando el servidor a d.plaspy.com o 54.85.159.138 en el transporte seleccionado.
- La elección entre UDP y TCP puede afectar la fiabilidad y las características de entrega; elija el transporte que se ajuste a su implementación y valide el comportamiento durante las pruebas.
- Pruebe con una muestra representativa de dispositivos antes del despliegue masivo para confirmar el mapeo de funciones como escala de entrada analógica, detección de encendido y soporte de accesorios BLE.
- Verifique la compatibilidad con la documentación más reciente de QuecLink para comandos específicos del dispositivo y pasos de configuración.

## Por qué es importante entender el protocolo

Comprender cómo el GV56 se comunica con Plaspy ayuda a garantizar un onboarding confiable, un mapeo correcto de la telemetría en los paneles y una resolución de problemas más rápida cuando ocurren incidencias. Estar al tanto de las opciones de transporte, la variación de firmware y los puntos de configuración del fabricante reduce el riesgo de despliegue y mejora la disponibilidad operativa.

- Ayuda a confirmar que los dispositivos están apuntando al endpoint y transporte correctos para que los reportes lleguen de forma fiable.
- Facilita el mapeo de entradas del dispositivo y datos de accesorios BLE a los campos e informes adecuados en Plaspy.
- Acelera la resolución de problemas cuando faltan actualizaciones de posición o mensajes de evento, al acotar las causas posibles a red, transporte o diferencias de firmware.
- Informa la decisión entre TCP y UDP según las necesidades de la aplicación y el comportamiento de la red.
- Apoya la planificación de actualizaciones de firmware y la validación de cualquier cambio que afecte los reportes o campos de telemetría.

## Por qué usar Plaspy con este protocolo

Usar el GV56 con Plaspy ofrece a las organizaciones una forma práctica de centralizar la posición del vehículo, la telemetría de sensores y las alertas de eventos en una sola plataforma para monitoreo, reportes y flujos automatizados. El factor de forma compacto del GV56, su conectividad GNSS y celular integrada y sus múltiples canales de E/S lo hacen adecuado para flotas de vehículos ligeros donde la instalación compacta y el reporte fiable son prioritarios.

Si desea saber más sobre cómo Plaspy gestiona el onboarding de dispositivos y la telemetría, visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, notas de firmware e instrucciones de configuración, consulte la información actual en el sitio del fabricante https://www.queclink.com/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que se recomienda revisar la documentación del fabricante al planificar despliegues.
