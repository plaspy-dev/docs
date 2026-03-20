---
slug: /condor/cs_146/protocol
id: cs_146-protocol
sidebar_label: Protocol
title: Condor - CS-146 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Condor CS-146 y su comunicación con Plaspy para seguimiento de contenedores y acceso remoto
keywords:
  - Protocolo Condor CS-146
  - Protocolo GPS Condor CS-146
  - Protocolo de comunicación Condor CS-146
  - Protocolo de rastreo Condor CS-146
  - Rastreador GPS Condor Plaspy
  - Protocolo rastreador CS-146 para contenedores
  - Protocolo GPS para contenedores
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de seguimiento de contenedores
  - Gestión de flotas Condor
---

# Condor - Protocolo CS-146

Esta página presenta el contexto público del protocolo para utilizar el rastreador Condor CS-146 con Plaspy. Explica el papel del protocolo de reporte del dispositivo al enviar posiciones, estados y eventos de acceso a la plataforma Plaspy, manteniendo la descripción en un nivel alto adecuado para equipos de operaciones e integradores.

El CS-146 es un rastreador diseñado específicamente para contenedores que transmite posición y estado operativo mediante enlaces celulares o satelitales y admite apertura remota y reportes de estado de puertas. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el CS-146 reporta ubicación, actualizaciones de estado y notificaciones de eventos para que Plaspy pueda mostrar mapas en tiempo real, alertas e historial. La descripción pública aquí se centra en lo que el protocolo permite, en lugar de formatos de paquete internos o codificaciones propietarias.

- Permite actualizaciones periódicas y basadas en eventos para que los contenedores se muestren en mapas en vivo y en líneas de tiempo de historial.
- Transporta estado y telemetría, como eventos de apertura y cierre de puertas, que Plaspy puede convertir en alertas y registros de auditoría.
- Soporta rutas de transmisión alternativas, como celular y satélite, para que los datos lleguen a la nube bajo diferentes condiciones de cobertura.
- Permite señales de comando y control remoto para acciones autorizadas, como apertura remota, cuando el dispositivo y el fabricante lo soportan.
- Facilita que Plaspy asocie la identidad y el estado del dispositivo con una cuenta de cliente para reportes unificados de flota y automatizaciones basadas en reglas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes del rastreador en un endpoint entrante compartido y determina automáticamente el protocolo del dispositivo en función de la conexión entrante y el contexto del mensaje. En la mayoría de los despliegues, usted no necesita elegir un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Plaspy usa un único puerto para todas las conexiones de dispositivos, por lo que la configuración es consistente entre modelos compatibles.
- El puerto que usa Plaspy para el reporte de dispositivos es 8888 y este mismo puerto se emplea para todos los dispositivos en la plataforma.
- Plaspy detecta el protocolo del rastreador automáticamente si el CS-146 está correctamente configurado para enviar mensajes al endpoint de Plaspy.
- Normalmente no es necesario seleccionar un protocolo manualmente en Plaspy cuando el reporte está apuntando al endpoint y puerto compartidos de Plaspy.

## Transporte y contexto de conexión

El tipo de conexión y el transporte pueden variar según la configuración del equipo y las condiciones de red. El CS-146 puede transmitir vía celular o satélite hacia Plaspy, y el dispositivo puede estar configurado para usar UDP o TCP para el enlace con la plataforma.

- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o al endpoint numérico 54.85.159.138.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la compatibilidad del equipo y la preferencia del operador.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el onboarding y las reglas de firewall.
- Elija el modo de transporte que soporte el firmware del dispositivo y que funcione mejor en el entorno de red para mayor fiabilidad.
- Verifique la conectividad desde la red del dispositivo hacia Plaspy en el puerto 8888 para asegurarse de que los mensajes lleguen a la plataforma.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades CS-146 pueden afectar la cadencia de mensajes, los eventos soportados y las capacidades de transporte.
- Revisiones de hardware o módulos satelitales opcionales pueden introducir variaciones en la telemetría disponible y en los mecanismos de respaldo.
- La elección entre UDP y TCP puede influir en las características de entrega y el comportamiento de reintentos en redes del mundo real.
- Algunas funciones del fabricante, como comandos de apertura remota, requieren configuración específica y pueden depender del firmware.
- Plaspy detecta el protocolo automáticamente, pero se recomienda validar la configuración del dispositivo con la documentación oficial del fabricante.
- Confirme que el CS-146 esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para facilitar el onboarding.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a los equipos de operaciones y técnicos a configurar los dispositivos correctamente, solucionar la entrega de mensajes y asegurar un monitoreo confiable y continuo de los activos en contenedores dentro de Plaspy.

- Garantiza la configuración correcta del dispositivo para que los datos de posición y eventos lleguen a Plaspy sin necesidad de seleccionar el protocolo manualmente.
- Acelera la resolución de problemas al clarificar si un fallo proviene de conectividad, transporte o firmware.
- Ayuda a definir reglas de firewall y de red para permitir tráfico hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Facilita la planificación frente a brechas de cobertura al confirmar que los respaldos celular y satelital estén habilitados en el dispositivo.
- Mejora las auditorías y el cumplimiento al asegurar que los datos de eventos, como aperturas y cierres de puerta, estén incluidos y con marca temporal.

## Por qué usar Plaspy con este protocolo

Usar el CS-146 con Plaspy ofrece a los operadores un camino simplificado hacia visibilidad en tiempo real de contenedores, alertas basadas en eventos y control centralizado para la seguridad de la carga. La solución combinada soporta entornos con conectividad mixta y entrega telemetría a flujos de trabajo ya establecidos para monitoreo, geocercas y respuesta a incidentes.

Plaspy proporciona un endpoint y puerto consistentes para el reporte de dispositivos y detecta automáticamente los protocolos de rastreadores, lo que acelera el onboarding y simplifica la configuración. Para más información sobre Plaspy y cómo apoya el rastreo de flotas y activos visite https://www.plaspy.com. Verifique los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y la implementación del fabricante en la documentación oficial de Condor en https://condorskyseeker.com/ ya que las capacidades del equipo pueden cambiar con el tiempo.
