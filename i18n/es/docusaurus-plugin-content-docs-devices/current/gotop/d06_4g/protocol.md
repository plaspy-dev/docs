---
slug: /gotop/d06_4g/protocol
id: d06_4g-protocol
sidebar_label: Protocol
title: GOTOP - D06-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP D06-4G y su compatibilidad con Plaspy, con guía de conexión
keywords:
  - protocolo GOTOP D06-4G
  - protocolo GPS GOTOP D06-4G
  - GOTOP D06-4G Plaspy
  - comunicación GOTOP D06-4G
  - rastreo GOTOP D06-4G
  - protocolo rastreador GOTOP
  - compatibilidad dispositivos Plaspy
  - protocolo rastreo vehicular
  - rastreo de flotas GOTOP
  - telemetría D06-4G
---

# GOTOP - Protocolo D06-4G

Esta página ofrece un panorama público del protocolo para usar el rastreador GOTOP D06-4G con Plaspy. Resume cómo el dispositivo reporta posición y telemetría de eventos a un servidor de rastreo y qué aspectos del protocolo de comunicación son relevantes al integrar el D06-4G en Plaspy para monitoreo en tiempo real, notificaciones y reproducción de historial.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesita seleccionar el protocolo manualmente dentro de la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; considere esto como una referencia pública de alto nivel y no como una guía de ingeniería específica de firmware.

## Resumen del protocolo

El D06-4G transmite posición derivada del GNSS, contexto de red local y telemetría de eventos a un servidor remoto para su ingestión por una plataforma como Plaspy. El equipo está diseñado para enviar actualizaciones periódicas de ubicación además de mensajes activados por eventos (por ejemplo SOS, geocercas, corte de energía, vibración), de modo que Plaspy pueda mostrar ubicación en vivo, alarmas y rutas históricas a los operadores.

- Envía fijaciones periódicas de ubicación y telemetría del dispositivo al servidor para visualización en mapa en vivo e historial.
- Notifica eventos como SOS, violaciones de geocerca, pérdida de energía, batería baja y alarmas por vibración para atención inmediata.
- Almacena registros de ubicación en modo offline para que los datos en búfer se suban cuando se restablezca la red, preservando la continuidad de la ruta.
- Soporta acciones de control remoto, como inmovilización por relé, cuando son iniciadas por una plataforma autorizada.
- Identifica el dispositivo y su sesión de reporte ante el servidor para que Plaspy pueda asociar los datos entrantes con el activo y la cuenta de usuario correctos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes en un endpoint público compartido y determina automáticamente el manejo apropiado para cada tipo de rastreador. Cuando un D06-4G se configura para reportar a Plaspy, la plataforma inspecciona la conexión y el contenido entrante para enrutar los datos al registro de dispositivo correcto sin requerir, en la mayoría de los casos, la selección manual de protocolo.

- Los dispositivos que reportan al endpoint de Plaspy se emparejan con registros de dispositivo usando identificadores presentes en la secuencia de reporte del equipo.
- Plaspy usa un único endpoint y puerto para todos los dispositivos soportados, lo que simplifica la configuración para administradores de flota.
- Si un dispositivo está correctamente configurado para enviar datos a Plaspy, normalmente no es necesaria la selección manual de protocolo dentro de la plataforma.
- Plaspy registra metadatos de conexión y eventos para ayudar a solucionar casos en los que un dispositivo no aparece reportando como se espera.
- Los administradores deben confirmar las configuraciones de reporte en el rastreador y validar que el enrutamiento de red y los ajustes de APN sean correctos al integrar un dispositivo por primera vez.

## Transporte y contexto de conexión

El D06-4G puede configurarse para usar transporte UDP o TCP según el firmware del equipo y la preferencia del operador. Plaspy acepta conexiones del rastreador en su dirección pública de servidor, por lo que es necesario apuntar los dispositivos a Plaspy para la entrega correcta de datos GPS y de eventos.

- El dominio del servidor Plaspy para reportes es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto compartido usado por Plaspy para conexiones entrantes de dispositivos es 8888; Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según su firmware y el comportamiento de transporte deseado.
- Asegúrese de que el APN del dispositivo y el plan de datos permitan conexiones celulares salientes hacia el endpoint de Plaspy.
- Firewalls de red o reglas NAT en el lado del operador pueden afectar si UDP o TCP rinden mejor en una implementación dada.

## Notas de compatibilidad del protocolo

- Diferencias de firmware y configuración entre unidades D06-4G pueden cambiar la cadencia de mensajes, eventos disponibles o campos opcionales; verifique la versión de firmware al resolver problemas.
- Revisiones de hardware o accesorios opcionales (por ejemplo micrófono externo o distinto cableado de relé) pueden añadir o modificar telemetría y tipos de eventos disponibles.
- La elección del transporte (UDP vs TCP) influye en la semántica de entrega de mensajes y en la rapidez con que un evento se reintenta tras pérdida de red; seleccione el transporte soportado por su firmware y su red.
- La detección automática de protocolo de Plaspy facilita la integración, pero es necesario configurar correctamente los identificadores del dispositivo y el destino de reporte en el rastreador.
- Es común que el fabricante tenga variaciones en las configuraciones por defecto o en ejemplos de cadenas de configuración; siempre contraste con la guía oficial de configuración del dispositivo.
- Confirme la compatibilidad y el comportamiento detallado de funciones avanzadas como escucha remota, control del inmovilizador o cargas útiles de eventos personalizadas con la documentación de GOTOP.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del D06-4G a nivel conceptual ayuda a asegurar una integración exitosa, operación fiable y una resolución más rápida de problemas cuando los dispositivos se despliegan a gran escala. Tener claridad sobre cómo el rastreador reporta ubicación y eventos a Plaspy reduce el tiempo de configuración y mejora la visibilidad operativa.

- Acelera la configuración inicial asegurando que los dispositivos apunten al endpoint correcto de Plaspy y usen ajustes de transporte compatibles.
- Ayuda a diagnosticar brechas de reporte aislando si los problemas son de red, transporte o configuración del equipo.
- Orienta sobre la selección de transporte y el comportamiento de reintentos según las restricciones de la implementación y el rendimiento del operador.
- Aumenta la confianza al validar el reenvío de alarmas, comandos de inmovilizador y la recuperación de datos offline.
- Reduce el tiempo de resolución para gerentes de flota e integradores al aclarar qué datos enviará el rastreador y cuándo.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP D06-4G con Plaspy ofrece una vía sencilla hacia ubicación en vivo, telemetría de eventos y supervisión de flotas. La capacidad del dispositivo para posicionamiento multimodal, su memoria interna para almacenamiento offline y su conjunto de alarmas lo hacen una buena opción para las funciones de monitoreo en tiempo real, alertas y reproducción de historial de Plaspy en autos, motocicletas, bicicletas eléctricas y otros vehículos.

Si desea saber más sobre Plaspy y cómo maneja integraciones de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes del protocolo D06-4G, notas de firmware e instrucciones de configuración del fabricante, verifique siempre la documentación actual en el sitio de GOTOP https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
