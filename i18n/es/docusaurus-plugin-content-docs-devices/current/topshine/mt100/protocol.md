---
slug: /topshine/mt100/protocol
id: mt100-protocol
sidebar_label: Protocol
title: TopShine - MT100 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador TopShine MT100 para integración con Plaspy incluyendo ajustes de conexión y pautas de compatibilidad
keywords:
  - Protocolo TopShine MT100
  - Protocolo GPS TopShine MT100
  - Protocolo TopShine MT100 para Plaspy
  - Protocolo de comunicación TopShine MT100
  - Protocolo de rastreo TopShine MT100
  - Identificación de conductor MT100
  - Rastreo de flotas MT100
  - Compatibilidad de rastreadores Plaspy
  - Protocolo GPS para vehículos
  - Protocolo GPS para gestión de flotas
---

# TopShine - Protocolo MT100

Esta página resume el contexto público compartible del protocolo para usar el rastreador GPS TopShine MT100 con Plaspy. Describe en términos generales cómo se comunica el equipo con Plaspy, qué ajustes de conexión se emplean para el reporte y qué debe verificarse al confirmar compatibilidad. El objetivo es aclarar el papel del protocolo de reporte sin exponer detalles internos del dispositivo.

El MT100 es un rastreador vehicular 4G con funciones de identificación de conductor y registro de eventos. Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para comandos específicos y detalles de bajo nivel consulte la documentación del fabricante.

## Visión general del protocolo

El protocolo de reporte del MT100 es el conjunto de reglas y el comportamiento de mensajes que permite al rastreador enviar posición, telemetría y eventos de identificación de conductor a un servidor remoto. En el contexto de Plaspy, el protocolo permite la transmisión confiable de datos de ubicación y eventos que la plataforma puede ingerir, interpretar y presentar a los administradores de flota.

- Permite actualizaciones periódicas y basadas en eventos del MT100 hacia Plaspy para seguimiento en tiempo real e historial.
- Transporta eventos de identificación de conductor provenientes de lectores RFID iButton o huellas digitales para que Plaspy asocie los viajes con personas.
- Transmite alarmas y eventos de sensores como SOS, corte de alimentación, apertura de puertas, estado de ignición y acciones del inmovilizador para generar alertas en la plataforma.
- Proporciona telemetría sobre kilometraje, tiempo de funcionamiento y datos opcionales de sensores que Plaspy usa en informes y análisis.
- Actúa como puente entre el comportamiento del hardware del dispositivo y los servicios de Plaspy para aplicar reglas de flota y notificaciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint común y detecta automáticamente qué protocolo de rastreador se está utilizando. En la mayoría de los casos, un MT100 correctamente configurado comenzará a enviar reportes a Plaspy sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en un único endpoint y puerto compartido para todos los rastreadores soportados y determina el manejo apropiado de forma automática.
- Los usuarios normalmente configuran el dispositivo para reportar al endpoint de Plaspy y no necesitan elegir un protocolo en la plataforma cuando el equipo está correctamente configurado.
- La configuración adecuada del dispositivo y el comportamiento de reporte son los factores principales que permiten a Plaspy reconocer y procesar mensajes del MT100.
- Si los reportes no llegan, confirmar los ajustes del dispositivo y la accesibilidad de red hacia el endpoint de Plaspy es el primer paso recomendado.
- Consulte los registros del dispositivo y las notas de la versión del fabricante si el comportamiento difiere entre versiones de firmware o revisiones de hardware.

## Transporte y contexto de conexión

El MT100 puede usar métodos estándar de transporte IP para enviar datos a Plaspy. Los equipos pueden configurarse para usar UDP o TCP dependiendo de la configuración de la unidad y las condiciones de la red. Plaspy acepta conexiones a una única dirección de servidor y puerto para sus dispositivos soportados.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy usa el puerto 8888 para conexiones de rastreadores y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para enviar reportes por UDP o TCP en el puerto 8888 según sus ajustes.
- Asegúrese de que cualquier firewall de red o la configuración del APN permitan conexiones salientes desde el MT100 hacia el endpoint de Plaspy en el transporte configurado.
- Confirme que el MT100 esté configurado para reportar al dominio o IP de Plaspy y que la SIM tenga datos de red activos para actualizaciones en tiempo real.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la frecuencia de mensajes, los campos disponibles y el comportamiento de funciones opcionales entre versiones.
- Las revisiones de hardware o las configuraciones de accesorios (por ejemplo lector de huellas o sensores de combustible) pueden afectar qué eventos aparecen en los reportes.
- La selección del transporte por parte del dispositivo entre UDP y TCP debe coincidir con lo que el equipo soporta y lo que permita el entorno de red.
- Es posible que sea necesario actualizar parámetros del fabricante, como el servidor de reporte por defecto y las plantillas de APN, para apuntar al endpoint de Plaspy.
- Verifique siempre qué funciones soporta la unidad MT100 específica y su firmware al planificar la integración con Plaspy.
- Pruebe los dispositivos en un entorno controlado antes de despliegues a gran escala para confirmar el comportamiento esperado y la cadencia de reportes.

## Por qué es importante entender el protocolo

Comprender de manera práctica cómo se comunica el MT100 ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y mantener una operación predecible a largo plazo cuando se integra con Plaspy. Saber qué revisar y por qué permite a los administradores de flota reducir tiempos de inactividad y mejorar la calidad de los datos.

- Acelera la configuración inicial al concentrarse en la dirección del servidor, la selección de transporte y la configuración del APN.
- Reduce el tiempo de resolución de problemas al aclarar si el problema es de conectividad, configuración o firmware.
- Ayuda a interpretar qué eventos del dispositivo aparecerán en los reportes de Plaspy y cuáles requieren accesorios o configuraciones adicionales.
- Permite tomar decisiones informadas sobre actualizaciones de firmware y habilitación de funciones según las necesidades operativas.
- Aclara las expectativas sobre la frecuencia de datos, la latencia y la telemetría disponible en distintos entornos de red.

## Por qué usar Plaspy con este protocolo

Usar el MT100 con Plaspy brinda a las flotas visibilidad consolidada de la ubicación del vehículo, la identidad del conductor y eventos críticos. La combinación de las funciones de hardware del MT100, como identificación de conductor, control de inmovilizador y amplia telemetría, con la capacidad de ingestión y alertas de Plaspy, favorece la supervisión operativa, flujos de trabajo de seguridad y medidas de prevención de robo.

Plaspy acepta reportes MT100 en su endpoint y puerto compartidos y maneja la detección de protocolo automáticamente, simplificando la incorporación de dispositivos y centralizando los datos para monitoreo e informes. Para saber más sobre Plaspy y cómo funciona con dispositivos como el TopShine MT100 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo y deben verificarse contra la información más reciente en el sitio del fabricante https://www.gztopshine.com/
