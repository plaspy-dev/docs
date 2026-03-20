---
slug: /eelink/tk319l/protocol
id: tk319l-protocol
sidebar_label: Protocol
title: EElink - TK319‑L Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del EElink TK319‑L y su comunicación con Plaspy para rastreo de flotas confiable
keywords:
  - protocolo EElink TK319-L
  - protocolo GPS TK319-L
  - protocolo de rastreo EElink
  - compatibilidad EElink Plaspy
  - comunicación TK319-L
  - protocolo de rastreador GPS
  - protocolo de seguimiento de vehículos
  - rastreador para gestión de flotas
  - protocolo EELINK 2.0
  - rastreador GPS NB-IoT
---

# EElink - Protocolo TK319‑L

Esta página resume el contexto público del protocolo para utilizar el rastreador GPS EElink TK319‑L con Plaspy. Se concentra en cómo el dispositivo se comunica en términos no sensibles, qué ajustes de conexión usa Plaspy y qué deben considerar los integradores al incorporar el TK319‑L en un despliegue de gestión de flotas.

El TK319‑L es un rastreador compacto diseñado para redes NB‑IoT y LTE Cat M1 con conmutación a GSM, que ofrece posicionamiento dual por GPS y LBS además de entradas de vehículo como detección de ACC y soporte opcional de inmovilizador por relé. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo de comunicación del TK319‑L define cómo se empaquetan y transmiten los reportes de posición GNSS y LBS, la telemetría de entradas/salidas y los eventos de alarma hacia un backend como Plaspy. Para este modelo, el dispositivo implementa el protocolo EELINK 2.0 para el intercambio estandarizado de ubicación, estado de E/S y alarmas, lo que permite a Plaspy mapear los datos entrantes en campos del panel y reglas de eventos.

- Transporta la ubicación y la telemetría de sensores desde el rastreador hasta Plaspy para que la posición, velocidad y eventos de alarma sean procesables.
- Transmite entradas del vehículo como el estado de encendido ACC, eventos de botón SOS y el estado opcional de relé para flujos de inmovilización.
- Codifica tipos de alarma como choque, vibración, exceso de velocidad, batería baja y corte de alimentación para que Plaspy pueda activar alertas y reportes.
- Soporta telemetría ampliada desde periféricos RS232 y GPIO para que sensores externos sean visibles en los informes de Plaspy.
- Se implementa en firmware y puede variar en la frecuencia de mensajes y campos opcionales según la configuración del equipo y los ajustes del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint compartido e identifica automáticamente el protocolo del dispositivo, por lo que normalmente no es necesario seleccionar el protocolo manualmente en la plataforma. Si el TK319‑L está configurado para reportar a Plaspy con los ajustes estándar, la plataforma ingestará los datos de ubicación y eventos y aplicará el mapeo de campos correspondiente para el protocolo EELINK 2.0.

- Todos los dispositivos que reportan a Plaspy utilizan el mismo endpoint de servidor, por lo que el manejo de protocolos está centralizado.
- El dominio del servidor Plaspy para reportes es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy utiliza un único puerto común para todos los dispositivos compatibles, lo que simplifica la configuración del equipo.
- Cuando un TK319‑L correctamente configurado envía paquetes a Plaspy, la plataforma detectará e interpretará automáticamente el protocolo EELINK.
- La selección manual de protocolo en Plaspy suele ser innecesaria siempre que el dispositivo apunte al endpoint correcto de Plaspy y use el transporte soportado.

## Contexto de transporte y conexión

Las elecciones de conexión y transporte influyen en cómo el TK319‑L se comunica con Plaspy. El dispositivo puede configurarse para usar distintos modos de radio y capas de transporte según el firmware y las necesidades del despliegue. A continuación se presentan los hechos públicos y no sensibles relevantes para la integración.

- Plaspy acepta conexiones de dispositivos en d.plaspy.com y 54.85.159.138 en el puerto 8888.
- El TK319‑L puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de la red.
- Usar el endpoint y puerto compartidos de Plaspy reduce errores de configuración y mantiene el onboarding consistente entre dispositivos.
- Asegúrese de que el APN y los ajustes celulares del equipo permitan conexiones salientes al endpoint de Plaspy en el puerto especificado.
- El comportamiento a nivel de red, como NAT y restricciones del operador, puede influir en si UDP o TCP es la opción preferible para un despliegue concreto.

## Notas de compatibilidad del protocolo

- El protocolo EELINK 2.0 es el método de integración publicado para el TK319‑L, pero las revisiones de firmware pueden añadir o modificar campos opcionales y el comportamiento de reporte.
- Las revisiones de hardware y las variantes regionales del modelo pueden habilitar o deshabilitar bandas de radio, periféricos o tipos de alarma específicos que afectan los datos reportados.
- La selección de transporte entre UDP y TCP puede estar restringida por las redes de los operadores o por limitaciones del perfil NB‑IoT/Cat M1; valide las configuraciones en el dispositivo cuando sea posible.
- Plaspy detecta automáticamente el protocolo del rastreador, pero el dispositivo debe apuntar a d.plaspy.com o 54.85.159.138 en el puerto correcto para la ingestión automática.
- Verifique la compatibilidad de funciones periféricas como comandos de inmovilizador por relé y mapeos de sensores RS232 según la documentación vigente del fabricante.
- Confirme siempre la versión de firmware y las notas de la versión al solucionar comportamientos inesperados o campos de telemetría faltantes.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK319‑L ayuda a los administradores a configurar correctamente los dispositivos, diagnosticar problemas de conectividad o mapeo de datos y planificar diferencias de firmware o hardware que afecten la confiabilidad a largo plazo.

- Garantiza que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 usando el puerto 8888 para que Plaspy pueda recibir los datos.
- Ayuda a determinar si UDP o TCP es el transporte más adecuado para su red y entorno de operador.
- Facilita el mapeo de campos de E/S y alarmas del dispositivo a los flujos de trabajo de Plaspy para alertas, geocercas e informes.
- Acelera la resolución de problemas cuando falta telemetría o los campos parecen inconsistentes tras actualizaciones de firmware.
- Apoya la planificación de la integración de periféricos como sensores de combustible o sondas de temperatura mediante los puertos RS232 y GPIO.

## Por qué usar Plaspy con este protocolo

Usar el TK319‑L con Plaspy ofrece a las organizaciones una forma práctica de aprovechar la conectividad NB‑IoT y LTE Cat M1 en una única plataforma para visibilidad de flota, alarmas y análisis operativos. Plaspy ingesta coordenadas GNSS y LBS, entradas del vehículo como el estado ACC, y eventos de alarma para que los equipos puedan monitorear rutas, responder incidentes y automatizar flujos de trabajo en flotas mixtas.

Plaspy simplifica el despliegue al utilizar un único endpoint y puerto de reporte para todos los dispositivos soportados y al detectar automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente al endpoint de Plaspy. Para obtener más información sobre Plaspy y cómo admite dispositivos como el TK319‑L visite https://www.plaspy.com. Para las notas de protocolo específicas del dispositivo, actualizaciones de firmware y detalles de implementación, verifique la información con el fabricante en https://www.eelink.com.cn/.
