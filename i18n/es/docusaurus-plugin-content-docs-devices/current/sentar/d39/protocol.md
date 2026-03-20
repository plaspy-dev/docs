---
slug: /sentar/d39/protocol
id: d39-protocol
sidebar_label: Protocol
title: Sentar - D39 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del smartwatch GPS Sentar D39 y su comunicación con Plaspy para rastreo y alertas
keywords:
  - Protocolo Sentar D39
  - Protocolo GPS Sentar D39
  - Protocolo de comunicación Sentar D39
  - Protocolo de rastreo Sentar D39
  - Compatibilidad Sentar D39 con Plaspy
  - Protocolo reloj GPS Sentar
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador GPS
  - Protocolo reloj GPS infantil
  - Protocolo rastreador portátil
---

# Sentar - Protocolo D39

Esta página describe el contexto público del protocolo para utilizar el smartwatch Sentar D39 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy para el envío de posiciones y estado, alertas de emergencia y telemetría básica que Plaspy ingiere para el rastreo y la monitorización en tiempo real. El D39 es un smartwatch GPS 4G compatible con Plaspy, diseñado para niños, que soporta posicionamiento multimodal, SOS y comunicación bidireccional, además de una app complementaria; este documento aborda esas capacidades desde la perspectiva de conectividad y protocolo, sin entrar en detalles propietarios internos del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El D39 puede configurarse para reportar a d.plaspy.com o a la dirección IP de Plaspy 54.85.159.138 usando el puerto 8888, y el dispositivo puede usar UDP o TCP en ese puerto según su configuración. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma intentará la detección automática del protocolo, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del D39 define cómo el reloj empaqueta identificación, fijaciones de ubicación, actualizaciones de estado y eventos de alerta para su entrega a un servidor remoto como Plaspy. Para la integración con Plaspy, el comportamiento público del protocolo determina qué datos están disponibles para el despliegue en mapa, alertas, historial y telemetría básica sin exponer internals privados del fabricante.

- Proporciona identificación del dispositivo e información de sesión para que Plaspy asocie los reportes con una cuenta y una unidad D39 específica.
- Transporta datos de ubicación derivados de GPS, AGPS, LBS y WiFi para que Plaspy los normalice y muestre en mapas e informes.
- Transmite notificaciones de eventos como pulsaciones de SOS, advertencias de batería baja y latidos periódicos que Plaspy utiliza para alertas y monitorización de estado.
- Entrega telemetría básica útil para los paneles de Plaspy, como nivel de batería y estado de conectividad, para apoyar flujos de trabajo de disponibilidad y cuidado.
- Soporta metadatos de señalización para comunicación bidireccional que ayudan a correlacionar interacciones de voz o app con la ubicación y eventos en Plaspy.

## Detección del protocolo por parte de Plaspy

Plaspy escucha en un endpoint y puerto compartidos para los reportes entrantes de los dispositivos y aplica detección automática para identificar el protocolo del rastreador en uso. Cuando un D39 se configura para enviar datos al endpoint de Plaspy, la plataforma reconocerá el comportamiento del dispositivo y mapeará los reportes entrantes al canal de ingestión apropiado sin que los usuarios deban seleccionar manualmente un protocolo dentro de Plaspy.

- Los dispositivos deben apuntar a d.plaspy.com o a la dirección IP 54.85.159.138 para alcanzar el endpoint de ingestión de Plaspy.
- El puerto común para todos los dispositivos soportados por Plaspy es 8888 y Plaspy espera reportes del D39 en ese puerto.
- Las unidades D39 pueden usar UDP o TCP para enviar reportes; Plaspy acepta ambos transportes en el puerto compartido.
- En la mayoría de despliegues, el usuario configura el reloj para reportar al endpoint de Plaspy y la plataforma gestiona automáticamente la identificación del protocolo.
- Si un dispositivo no se detecta correctamente, revisar la configuración del equipo, el firmware y el endpoint objetivo es el primer paso habitual.

## Contexto de transporte y conexión

Los detalles de conexión son clave para un reporte confiable del D39 hacia Plaspy. El reloj usa datos celulares para alcanzar los servidores de Plaspy y puede configurarse para comunicarse por UDP o TCP según el software del dispositivo y la configuración elegida. La selección correcta del transporte y la dirección del servidor asegura que el dispositivo pueda alcanzar Plaspy y mantener actualizaciones oportunas.

- El D39 puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Plaspy acepta reportes de dispositivos en d.plaspy.com o directamente en 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy comparten el mismo puerto, lo que simplifica la configuración de firewall y APN para despliegues.
- TCP puede ofrecer persistencia de sesión mientras que UDP puede ser más liviano para reportes periódicos, dependiendo de la configuración del dispositivo.
- Asegúrese de que el APN del operador móvil y cualquier firewall de red permitan conexiones salientes hacia el endpoint y puerto de Plaspy para una entrega consistente.

## Notas sobre compatibilidad del protocolo

- Cambios de firmware pueden modificar el tiempo entre mensajes, los campos disponibles o el comportamiento del transporte; confirme siempre las notas de la versión de firmware para cambios específicos del dispositivo.
- Revisiones de hardware o variantes regionales del D39 pueden comportarse de forma distinta respecto a bandas soportadas o funciones auxiliares.
- La configuración del fabricante o los ajustes de la app complementaria pueden afectar si el dispositivo usa UDP o TCP y qué dirección de servidor aplica.
- Algunas funciones, como indicios de planta baja interior o posicionamiento asistido, dependen de datos multimodo y pueden variar según el despliegue y el firmware.
- Verifique que la configuración del dispositivo apunte a d.plaspy.com o 54.85.159.138 y use el puerto 8888 para asegurar que Plaspy reciba los reportes.
- Para despliegues críticos o de gran escala, realice pruebas de dispositivo para confirmar que el D39 se comporta como se espera con su cuenta y flujos de trabajo en Plaspy.

## Por qué es importante conocer el protocolo

Entender cómo se comunica el D39 ayuda a instaladores y administradores a lograr reportes estables, alertas significativas e historial fiable en Plaspy. Conocer el contexto de comunicación acelera la configuración y hace más eficaces las tareas de resolución de problemas cuando faltan reportes o no aparecen eventos en la plataforma.

- Permite configurar correctamente la red y el APN para que el dispositivo alcance Plaspy con fiabilidad.
- Ayuda a diagnosticar si las actualizaciones faltantes se deben a problemas de transporte, configuración o firmware del dispositivo.
- Aclara qué telemetría y eventos el reloj proporcionará a Plaspy para su uso en alertas y paneles.
- Apoya la planificación de despliegues que combinen wearables con rastreadores de vehículos al entender la cadencia de datos y las capacidades.
- Mejora la confiabilidad a largo plazo al orientar la gestión de firmware y la validación de compatibilidad.

## Por qué usar Plaspy con este protocolo

Usar el Sentar D39 con Plaspy brinda a padres, cuidadores y administradores una vista consolidada de la ubicación y el estado de los wearables junto con otros activos rastreados. Plaspy normaliza las posiciones y los reportes de eventos del D39 para despliegue en mapas en tiempo real, alertas por geocerca, manejo de SOS y retención de historial, de modo que los operadores mantengan conciencia situacional sin gestionar los detalles de protocolo por dispositivo.

Si desea conocer más sobre cómo Plaspy trabaja con rastreadores compatibles y explorar funciones de monitorización y alertas, visite https://www.plaspy.com. El soporte de protocolos y el comportamiento de los dispositivos pueden cambiar conforme los fabricantes actualicen firmware y hardware, por lo que le recomendamos verificar los detalles más recientes del protocolo y del firmware específico del dispositivo en el sitio del fabricante http://www.sentarsmart.com/ antes del despliegue.
