---
slug: /gotop/g23d/protocol
id: g23d-protocol
sidebar_label: Protocol
title: GOTOP - G23D Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del GOTOP G23D para compatibilidad con Plaspy y contexto práctico de conexión
keywords:
  - protocolo GOTOP G23D
  - protocolo GPS GOTOP G23D
  - protocolo de comunicación GOTOP G23D
  - protocolo de rastreo GOTOP G23D
  - protocolo rastreador GPS GOTOP
  - compatibilidad GOTOP G23D Plaspy
  - protocolo de rastreo vehicular
  - protocolo de gestión de flotas
  - protocolo rastreador GPS CDMA
  - integración del G23D con Plaspy
---

# GOTOP - G23D Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP G23D con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy a un nivel general y qué esperar al integrar el G23D para la transferencia de ubicación, estados y reportes de alarma. El contenido está dirigido a usuarios técnicos, integradores y gerentes de flota que necesitan una visión general de las consideraciones de comunicación sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo comienza a reportar. El comportamiento exacto puede variar según la versión de firmware del G23D, la revisión de hardware y la implementación del fabricante; por ello, la guía a continuación describe el contexto público y práctico en lugar de detalles internos de firmware o formatos de paquete.

## Visión general del protocolo

El protocolo de comunicación del G23D define cómo el rastreador informa posición, identidad del equipo, señales de estado y eventos de alarma a un servicio backend como Plaspy. Mediante este protocolo, el rastreador envía ubicaciones, información de movimiento e ignición y activadores de eventos que Plaspy consume para ofrecer mapeo, alertas y datos históricos.

- Permite informes de ubicación periódicos y por eventos desde el dispositivo hacia un servidor
- Incluye la identificación del dispositivo para que Plaspy pueda asociar los datos entrantes con el activo correcto
- Transmite señales de estado como ACC, alimentación, exceso de velocidad y eventos de manipulación para monitoreo
- Provee un canal por el cual se pueden enviar comandos remotos o actualizaciones de configuración cuando el dispositivo lo soporta
- Soporta tanto latidos cortos como informes de posición más completos según el estado y la configuración del equipo

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y determina automáticamente el protocolo que utiliza cada dispositivo una vez que comienza a reportar. En la mayoría de los casos, los usuarios no necesitan seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para enviar a dicho endpoint.

- Plaspy escucha en el dominio y la dirección compartida para los reportes de los dispositivos
- Cuando un G23D apunta al endpoint de Plaspy, la plataforma detecta su protocolo de forma automática
- Habitualmente solo es necesario configurar el dispositivo para que reporte a Plaspy para habilitar la detección
- Plaspy asocia la información de identidad entrante con un registro de dispositivo en la plataforma
- La detección automática reduce la configuración manual al desplegar muchos equipos de distintos proveedores

## Transporte y contexto de conexión

Los parámetros de conexión y transporte determinan cómo el G23D abre una sesión con Plaspy y hacia dónde envía sus reportes. El G23D puede configurarse para usar UDP o TCP en el puerto en el que escucha Plaspy, según lo soporte el dispositivo y los requisitos de la red.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138 y el puerto estándar para reportes de dispositivos es 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según sus capacidades
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita la configuración masiva en despliegues grandes
- Seleccione UDP o TCP en el rastreador conforme a la fiabilidad de la red y la documentación del equipo

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, los eventos soportados o los comandos de configuración; siempre verifique el comportamiento del firmware
- Las revisiones de hardware y el cableado de accesorios pueden afectar entradas disponibles como la detección de ACC y salidas de corte remoto
- Configuraciones del fabricante o compilaciones regionales de firmware para dispositivos CDMA pueden alterar el comportamiento del rastreador en redes específicas
- La elección de transporte entre UDP y TCP debe coincidir con la configuración del rastreador y el entorno de red
- La detección automática de Plaspy ayuda, pero es necesario que la dirección de reporte y el transporte estén correctamente configurados en el rastreador
- Valide la compatibilidad contra la documentación del fabricante y las notas de la versión del G23D

## Por qué importa comprender el protocolo

Conocer los aspectos públicos del protocolo de comunicación del G23D contribuye a una integración más confiable, facilita la resolución de problemas y permite operaciones de flota más predecibles en Plaspy. Estar al tanto de lo que el dispositivo reporta y cómo se conecta reduce la incertidumbre durante despliegues y mantenimiento.

- Garantiza la configuración correcta del dispositivo para que los reportes lleguen a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Ayuda a diagnosticar por qué un equipo podría no aparecer en Plaspy si el reporte está mal configurado
- Orienta en la selección adecuada de transporte entre UDP y TCP según el comportamiento de la red
- Aclara qué señales de estado y tipos de eventos esperar del rastreador para alertas y automatizaciones
- Orienta en la planificación de actualizaciones de firmware y en el ciclo de vida del equipo al destacar diferencias entre revisiones

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G23D con Plaspy brinda a las organizaciones visibilidad práctica sobre la ubicación del vehículo y su estado operativo en distintos tipos de unidades. El rango de voltaje flexible del G23D, su factor de forma compacto y el soporte para entradas de vehículo lo hacen adecuado para flotas mixtas, mientras que Plaspy proporciona el backend para recolectar, normalizar y presentar esos datos para monitoreo e informes.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el GOTOP G23D, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, actualizaciones de firmware y orientación del fabricante consulte el sitio de GOTOP en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben validarse con el fabricante.
