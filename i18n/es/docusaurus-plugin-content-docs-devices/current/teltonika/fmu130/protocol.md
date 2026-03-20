---
slug: /teltonika/fmu130/protocol
id: fmu130-protocol
sidebar_label: Protocol
title: Teltonika - FMU130 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para la comunicación Teltonika FMU130 con Plaspy, incluyendo configuración, transporte y compatibilidad
keywords:
  - Teltonika FMU130
  - Protocolo FMU130
  - Rastreador GPS FMU130
  - Protocolo rastreador Teltonika
  - FMU130 Plaspy
  - Compatibilidad rastreador Plaspy
  - protocolo de rastreo de vehículos
  - rastreador gestión de flotas
  - Conectividad FMU130
  - Protocolo comunicación Teltonika
---

# Teltonika - Protocolo FMU130

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMU130 con Plaspy. Está enfocada en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión se emplean y qué consideraciones operativas son relevantes para una integración fluida. Este resumen no sustituye la documentación del fabricante, pero aclara el papel del protocolo de reporte del dispositivo al conectar el FMU130 con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware del FMU130, la revisión de hardware y las opciones de implementación de Teltonika. Cuando el comportamiento del equipo dependa del firmware o la configuración, verifique los detalles con los recursos del fabricante y la documentación del FMU130.

## Resumen del protocolo

El protocolo de comunicación del FMU130 es el mecanismo por el cual el dispositivo informa posición GNSS, datos de eventos, información de sensores y estado a un servidor remoto como Plaspy. Para la integración con Plaspy, el protocolo permite que el rastreador se identifique, entregue actualizaciones de posición periódicas o por eventos y transmita telemetría que Plaspy puede almacenar y mostrar a los usuarios.

- Transporta datos de ubicación y telemetría desde el FMU130 hasta el servidor para que Plaspy procese y presente la información de seguimiento.
- Comunica la identidad y el estado del dispositivo para que Plaspy asocie los mensajes con el activo y la cuenta correctos.
- Envía reportes de eventos y sensores como detecciones del acelerómetro, entradas y salidas, y escenarios configurados hacia Plaspy.
- Permite la configuración y gestión remota cuando el dispositivo está habilitado para recibir comandos o actualizaciones mediante métodos compatibles.
- Soporta tanto reporte continuo como modos conscientes del consumo de energía, coherentes con los modos de suspensión y las opciones de gestión de energía del FMU130.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones en un único endpoint y puerto compartidos y utiliza ese endpoint para recibir tráfico entrante de rastreadores. Cuando un FMU130 correctamente configurado reporta a Plaspy, la plataforma inspecciona los datos entrantes e identifica automáticamente el protocolo del rastreador, por lo que usualmente no se requiere seleccionar el protocolo manualmente.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP alternativa del servidor de Plaspy es 54.85.159.138, disponible para equipos que requieren una dirección IP.
- El puerto es 8888, que Plaspy utiliza para recibir mensajes de rastreadores.
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecta y envía datos iniciales.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos.
- En la mayoría de implementaciones usted no necesita seleccionar un protocolo en Plaspy si el FMU130 está configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión afectan cómo el FMU130 llega a Plaspy, pero no cambian el rol de alto nivel del protocolo del dispositivo. El FMU130 puede apuntar al endpoint de Plaspy mediante DNS o IP directa y puede configurarse para usar UDP o TCP según lo permita el dispositivo y el entorno de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, dependiendo de la configuración del equipo y del comportamiento de la red del operador.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino de Plaspy.
- El puerto de entrada para datos de rastreadores es 8888 y es el mismo para todos los modelos compatibles.
- Usar UDP puede reducir sobrecarga, mientras que TCP ofrece una opción orientada a conexión cuando el dispositivo lo soporta.
- Firewalls de red y ajustes de APN deben permitir tráfico saliente hacia d.plaspy.com o hacia 54.85.159.138 en el puerto 8888 para que el reporte funcione correctamente.

## Notas sobre compatibilidad del protocolo

- La disponibilidad de funciones puede variar según la versión de firmware del FMU130; revise las notas de la versión del firmware para detectar cambios en el protocolo.
- Las revisiones de hardware y módulos opcionales, como variaciones en GNSS o conectividad 3G, pueden afectar la telemetría y los escenarios disponibles.
- La elección de transporte entre UDP y TCP es una decisión de configuración en el dispositivo y puede influir en el comportamiento en redes específicas o con NAT del operador.
- La configuración y las actualizaciones del FMU130 pueden realizarse vía FOTA Web, FOTA, Teltonika Configurator por USB o Bluetooth, la app FMBT, comandos SMS y comandos GPRS, lo cual puede afectar el comportamiento del protocolo.
- Los ajustes predeterminados del fabricante pueden usar intervalos de reporte y disparadores de eventos distintos, lo que impacta el volumen de datos enviados a Plaspy.
- Siempre valide los puntos críticos de integración contra la documentación oficial de Teltonika para la versión de firmware y la revisión de hardware específicas del FMU130.

## Por qué es importante comprender el protocolo

Entender cómo el FMU130 se comunica con Plaspy ayuda en la configuración inicial, en ajustar el comportamiento del dispositivo a las necesidades operativas y en diagnosticar problemas cuando surjan. Comprender el contexto del protocolo reduce conjeturas y conduce a una operación más predecible del dispositivo dentro de Plaspy.

- Facilita la configuración del FMU130 para que apunte al servidor y transporte correctos.
- Ayuda a estimar el uso de datos y la frecuencia de reportes al seleccionar intervalos y escenarios.
- Asiste en la resolución de problemas al acotar fallas a nivel de red, transporte o configuración del dispositivo en lugar de la plataforma Plaspy.
- Permite decisiones informadas sobre UDP versus TCP y cómo los modos de suspensión afectan los reportes.
- Favorece la confiabilidad a largo plazo al alinear firmware, configuración y expectativas del servidor.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMU130 con Plaspy ofrece a las organizaciones una forma práctica de recolectar posición GNSS y telemetría avanzada desde un terminal compacto y profesional. El conjunto de sensores y escenarios configurables del FMU130 se complementan bien con las funciones de reporte y visualización de Plaspy para apoyo en monitoreo de flotas, seguridad vehicular e informes operativos.

Plaspy centraliza los datos entrantes del FMU130 en un único endpoint y puerto e identifica automáticamente el protocolo del rastreador, de modo que los equipos pueden enfocarse en el despliegue y la operación en lugar de seleccionar protocolos por dispositivo. Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el FMU130 visite https://www.plaspy.com. Verifique siempre los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las recomendaciones del fabricante en el sitio de Teltonika https://www.teltonika-gps.com/ ya que el soporte de protocolo y las implementaciones del dispositivo pueden cambiar con el tiempo.
