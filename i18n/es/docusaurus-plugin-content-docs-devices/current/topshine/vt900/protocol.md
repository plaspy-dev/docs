---
slug: /topshine/vt900/protocol
id: vt900-protocol
sidebar_label: Protocol
title: TopShine - VT900 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del rastreador TopShine VT900 y su compatibilidad con el servidor Plaspy
keywords:
  - TopShine VT900
  - Protocolo VT900
  - Rastreador GPS TopShine
  - Comunicación VT900
  - Compatibilidad VT900 Plaspy
  - Protocolo de rastreo vehicular
  - Rastreador GPS GPRS
  - Rastreador para gestión de flotas
  - Protocolo de rastreador GPS
  - Protocolo TopShine
---

# TopShine - Protocolo VT900

Esta página explica el contexto del protocolo público para usar el rastreador TopShine VT900 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y qué debe considerarse al configurar el VT900 para que informe posición y estado a una plataforma de gestión de flotas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el VT900 apunta al endpoint de Plaspy. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que esta página describe el contexto de integración sin exponer detalles internos del equipo.

## Resumen del protocolo

El protocolo de reporte del VT900 define cómo el rastreador se identifica y envía telemetría a un servidor remoto para que una plataforma como Plaspy pueda mostrar ubicación, estado y alertas. Para Plaspy, la función del protocolo se limita a entregar datos de posición y eventos utilizables de forma fiable sobre el transporte configurado.

- Permite al VT900 transmitir posición GPS, hora y estado de movimiento a Plaspy
- Transporta la identidad y el estado del dispositivo para que Plaspy relacione los datos entrantes con el vehículo correcto
- Codifica alertas y telemetría como SOS, eventos de geocerca y estado de alimentación en mensajes que Plaspy procesa
- Soporta el envío de reportes por datos celulares o por SMS según la configuración del equipo
- Permite al rastreador recibir comandos remotos y actualizaciones cuando la implementación lo soporta

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de rastreadores en un endpoint y puerto comunes y aplica detección automática, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo dentro de la plataforma. Si el VT900 está configurado para reportar a Plaspy, la plataforma detecta el formato entrante y lo asocia con el dispositivo.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy usada para reportes es 54.85.159.138
- Plaspy escucha en un único puerto compartido para tráfico de dispositivos: 8888
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador
- Normalmente solo debe configurar el VT900 para enviar al endpoint de Plaspy y elegir el transporte correcto
- Si un dispositivo no se registra, lo habitual es verificar primero el transporte, el APN y el destino de reporte

## Transporte y contexto de conexión

El VT900 puede enviar datos por GPRS usando UDP o TCP según la configuración y el firmware. Para la integración con Plaspy es importante apuntar el equipo al endpoint de Plaspy y seleccionar el modo de transporte que mejor se ajuste a su red y a las capacidades del dispositivo.

- El VT900 puede configurarse usando UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, simplificando la configuración
- Seleccione UDP para reportes ligeros y de bajo overhead, o TCP cuando prefiera confiabilidad de sesión según la capacidad del equipo
- Asegúrese de que el APN y la configuración celular del VT900 estén correctos para que el reporte por GPRS funcione como se espera

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué características o campos de mensaje incluye el VT900 en los reportes
- Revisiones de hardware u módulos opcionales pueden alterar entradas soportadas como estado del motor o sensores externos
- Los valores por defecto de configuración del fabricante pueden usar modos de transporte distintos, confirme si debe usarse UDP o TCP
- Las actualizaciones por aire del VT900 pueden modificar su comportamiento; registre las versiones de firmware al hacer troubleshooting
- Valide la compatibilidad con Plaspy confirmando que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Consulte la documentación de TopShine para características específicas del modelo como controles de cámara y transmisión de voz, que pueden requerir configuración adicional

## Por qué es importante entender el protocolo

Comprender cómo se comunica el VT900 ayuda a garantizar una configuración fluida, reportes confiables y una resolución de problemas más rápida al integrarlo con Plaspy. Conocer las opciones de transporte, el destino del servidor y el comportamiento del dispositivo reduce el tiempo de puesta en marcha y los incidentes operativos.

- Acelera la configuración inicial al clarificar a dónde debe enviar datos el dispositivo y qué transporte usar
- Ayuda a aislar problemas de conectividad como errores de APN o puertos bloqueados en redes celulares
- Permite interpretar correctamente las alertas y la telemetría mostradas en Plaspy
- Facilita la planificación de actualizaciones de firmware y la validación de que las funciones sigan siendo compatibles
- Mejora la fiabilidad a largo plazo al documentar la configuración del equipo y el comportamiento de la red

## Por qué usar Plaspy con este protocolo

Usar el TopShine VT900 con Plaspy ofrece a las organizaciones una solución lista para capturar datos en tiempo real de ubicación, estado y eventos de sus vehículos. La detección automática de protocolos de Plaspy y los ajustes de conexión compartidos reducen la complejidad de configuración, permitiendo que los equipos se concentren en casos de uso operativo como monitoreo de rutas, alertas de seguridad y análisis de flota.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el VT900, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y la guía del fabricante, verifique la información en el sitio de TopShine https://www.gztopshine.com/. El soporte de protocolo y el comportamiento del dispositivo pueden cambiar con revisiones de firmware y hardware, por lo que es recomendable consultar la documentación del fabricante.
