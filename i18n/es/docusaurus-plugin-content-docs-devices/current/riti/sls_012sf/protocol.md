---
slug: /riti/sls_012sf/protocol
id: sls_012sf-protocol
sidebar_label: Protocol
title: Riti - SLS-012SF Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público del rastreador GPS Riti SLS-012SF y cómo se comunica con Plaspy para gestión de flotas e integración de backend
keywords:
  - protocolo Riti SLS-012SF
  - protocolo GPS Riti SLS-012SF
  - protocolo seguimiento SLS 012SF
  - compatibilidad rastreador Riti
  - rastreador GPS Riti Plaspy
  - protocolo rastreo vehicular
  - protocolo gestión de flotas
  - comunicación rastreador Plaspy
  - integración SLS 012SF
  - protocolo seguimiento Riti
---

# Riti - Protocolo SLS-012SF

Esta página describe el contexto público del protocolo para usar el rastreador GPS de vehículo Riti SLS-012SF con la plataforma Plaspy. Se centra en cómo el dispositivo comunica datos con un backend como Plaspy, las configuraciones de conexión más habituales y orientaciones prácticas para la integración, sin entrar en detalles privados de implementación. El SLS-012SF está pensado para la gestión de flotas, monitoreo remoto e integración con múltiples sensores externos; aquí explicamos cómo reporta información a un servidor backend.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta a la plataforma. El comportamiento concreto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía se mantiene en un nivel público y práctico, describiendo los hechos de conexión clave para una integración exitosa.

## Resumen del protocolo

El protocolo del SLS-012SF regula cómo el rastreador envía posición, estado y datos de sensores a un servidor backend, y cómo el backend identifica y organiza la información del dispositivo para el monitoreo de flotas. Para la integración con Plaspy, su función es transmitir telemetría identificable y utilizable de forma fiable para que el backend pueda procesarla y mostrarla correctamente.

- Permite al rastreador reportar posición GPS, marca de tiempo y estado básico del dispositivo a Plaspy, para seguimiento en tiempo real e histórico
- Transporta datos auxiliares de sensores y entradas/IO de dispositivos conectados, como lectores RFID, sensores de temperatura y entradas externas, para monitoreo contextual
- Autoriza al backend a identificar el dispositivo y asociar los datos con el vehículo o activo correcto en Plaspy
- Soporta transporte sobre redes móviles estándar para que el equipo pueda alcanzar los servidores de Plaspy desde campo
- Sienta las bases para funciones de backend como geocercas, alertas e informes sin exponer detalles internos del firmware

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint y puerto compartidos, y realiza detección automática de protocolos para que la mayoría de rastreadores correctamente configurados sean reconocidos sin necesidad de seleccionar manualmente el protocolo en la plataforma. Esta detección automática simplifica el onboarding, dejando la configuración en el lado del dispositivo como el requisito principal.

- Plaspy usa un endpoint compartido en d.plaspy.com para recibir los reportes de los rastreadores
- La IP del servidor Plaspy es 54.85.159.138 y el puerto estándar para reportes de dispositivos es 8888
- Todos los dispositivos en Plaspy utilizan el mismo puerto, lo que hace el proceso de incorporación consistente entre modelos
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma
- En la mayoría de los casos, usted solo necesita configurar el dispositivo para que reporte a d.plaspy.com o a 54.85.159.138 en el puerto de Plaspy

## Transporte y contexto de conexión

El contexto de conexión describe cómo el rastreador alcanza el backend de Plaspy y qué métodos de transporte puede utilizar. El SLS-012SF soporta reportes por datos móviles y puede configurarse para usar protocolos de transporte comunes según el firmware y las opciones de configuración del equipo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según lo soporte y configure el fabricante
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a la IP 54.85.159.138 para enviar reportes
- El uso del mismo puerto para todos los equipos simplifica la configuración en el lado del dispositivo
- La elección entre UDP o TCP puede afectar la entrega de paquetes en condiciones de redes celulares; siga las recomendaciones del fabricante
- Asegúrese de que el APN y la configuración de red móvil del dispositivo permitan conexiones salientes hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes y los campos disponibles; verifique la versión de firmware al validar compatibilidad
- Revisiones de hardware y módulos externos opcionales pueden modificar la telemetría y los canales de entrada expuestos por el dispositivo
- La configuración del fabricante determina si el equipo usa UDP o TCP y qué dirección de servidor reporta
- Las condiciones de red y restricciones del operador pueden afectar la entrega de paquetes; se recomienda probar en el entorno de despliegue previsto
- Plaspy detecta el protocolo automáticamente, pero se requiere que el dispositivo esté correctamente configurado para apuntar al endpoint de Plaspy
- Siempre contraste el comportamiento del dispositivo con la documentación oficial del fabricante antes de despliegues a gran escala

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar que los dispositivos reporten de forma fiable, que los campos de datos se mapeen correctamente en Plaspy y que la resolución de problemas sea efectiv a cuando surjan incidencias. Un conocimiento práctico del protocolo y del contexto de transporte ahorra tiempo durante el onboarding y favorece la confiabilidad a largo plazo.

- Ayuda a confirmar que el dispositivo envía la posición y los datos de sensores que Plaspy espera recibir
- Simplifica la resolución de problemas cuando los equipos no aparecen en la plataforma, al revisar transporte y ajustes del servidor
- Permite decisiones informadas sobre usar UDP o TCP según el despliegue específico y las condiciones de red
- Facilita la planificación ante actualizaciones de firmware, revisiones de hardware y la disponibilidad de funciones en distintos despliegues
- Reduce el tiempo de integración alineando la configuración de reporte del dispositivo con el endpoint y puerto de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Riti SLS-012SF con Plaspy brinda a operadores de flota y equipos de servicio un backend estable para recopilar datos GPS y de sensores de vehículos y activos móviles. El puerto unificado y la detección automática de protocolo de Plaspy eliminan gran parte de la incertidumbre en el proceso de incorporación, permitiendo que usted se concentre en los flujos operativos como monitoreo, alertas y análisis de datos.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener el protocolo más reciente y detalles específicos del dispositivo, comportamiento de firmware y configuraciones, por favor verifique la información en el sitio del fabricante https://www.riti.com.tw/ ya que la implementación del dispositivo y el firmware pueden cambiar con el tiempo.
