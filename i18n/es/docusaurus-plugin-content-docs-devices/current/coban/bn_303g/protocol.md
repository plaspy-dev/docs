---
slug: /coban/bn_303g/protocol
id: bn_303g-protocol
sidebar_label: Protocol
title: Coban - BN-303G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para compatibilidad del Coban BN-303G con Plaspy y guía de conexión
keywords:
  - protocolo Coban BN-303G
  - protocolo GPS Coban BN-303G
  - protocolo de comunicación BN-303G
  - BN-303G Plaspy
  - protocolo de rastreador Coban GPS
  - rastreo de vehículos BN-303G
  - BN-303G TCP UDP
  - rastreo de flota Plaspy
  - compatibilidad BN-303G
  - protocolo rastreador Coban
---

# Coban - Protocolo BN-303G

Esta página ofrece el contexto público del protocolo para usar el rastreador Coban BN-303G con Plaspy. Resume cómo el dispositivo reporta posición y eventos a la plataforma Plaspy en términos generales y no sensibles, y explica las configuraciones de conexión que encontrará con mayor frecuencia al integrar este modelo. El contenido se centra en el contexto práctico del protocolo más que en estructuras de paquetes de bajo nivel.

Plaspy comparte ajustes de conexión entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento concreto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El BN-303G soporta transportes TCP, UDP y SMS, y esta página aclara cómo se utilizan esos transportes con Plaspy sin exponer detalles de implementación específicos de una versión de firmware.

## Resumen del protocolo

El protocolo del BN-303G permite que el dispositivo informe posición GNSS, estado de encendido, eventos de alarma y telemetría básica a un servidor remoto para que Plaspy presente información de ubicación y eventos en tiempo real. En la práctica, el rastreador envía reportes periódicos de posición y mensajes por eventos que la plataforma consume para actualizar mapas, alertas e historial.

- Permite la identificación del dispositivo y el reporte continuo o por eventos hacia un back end remoto.
- Transporta fijaciones de ubicación, marca de tiempo, entradas/salidas básicas y estados de alarma como SOS, exceso de velocidad, geocerca y alertas de puerta.
- Soporta múltiples transportes para entregar datos por TCP, UDP o SMS según la configuración y la cobertura.
- Proporciona la telemetría que Plaspy necesita para poblar paneles, generar alertas y registrar el historial.
- Actúa como puente entre la telemetría instalada en el vehículo y los servicios de Plaspy, dejando los conjuntos de comandos específicos del dispositivo a la documentación del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy acepta los reportes entrantes de los dispositivos en un único endpoint y puerto compartidos e intenta identificar automáticamente el protocolo cuando llegan datos. En la mayoría de las implementaciones, un BN-303G configurado para reportar al endpoint de Plaspy será detectado y comenzará a reportar sin que sea necesario seleccionar el protocolo manualmente en la plataforma.

- Los dispositivos deben apuntar a la dirección del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para el reporte.
- El BN-303G puede configurarse para usar transporte TCP o UDP para comunicarse con el endpoint de Plaspy.
- Cuando el rastreador envía registros de registro o reportes periódicos al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo y asocia los mensajes entrantes al dispositivo.
- En muchos casos, usted solo necesita configurar la dirección del servidor y el transporte en el dispositivo; Plaspy gestiona la detección del protocolo en el borde de la plataforma.

## Transporte y contexto de conexión

El BN-303G soporta tanto UDP como TCP para reportes en tiempo real y también puede recurrir a SMS para configuración o entrega de mensajes en escenarios de baja cobertura de datos. La elección del transporte afecta el comportamiento de entrega y la resiliencia, pero no cambia el hecho de que Plaspy recibe la telemetría en un puerto común de escucha.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a 54.85.159.138 según la preferencia del instalador.
- TCP ofrece entrega orientada a conexión mientras que UDP es sin conexión; ambos son compatibles con el BN-303G y aceptados por Plaspy en el puerto compartido.
- SMS sigue siendo una alternativa para comandos específicos o reportes de respaldo según la configuración del dispositivo y las necesidades del operador.
- Para una detección y reporte confiables, asegúrese de que el APN y la conectividad de red funcionen correctamente y de que el dispositivo apunte a los ajustes del servidor Plaspy.

## Notas sobre compatibilidad

- Las revisiones de firmware pueden cambiar el tiempo de envío de mensajes, los campos soportados y las funciones opcionales; confirme el nivel de firmware del rastreador al diagnosticar comportamiento.
- Revisiones de hardware o variantes de modelo pueden alterar las líneas de IO disponibles, los accesorios compatibles o la selección de transporte por defecto.
- Los comandos de configuración del fabricante y los conjuntos de parámetros por SMS son específicos del dispositivo; consulte la documentación oficial de Coban para la sintaxis de comandos y ejemplos.
- La selección de transporte (TCP vs UDP) puede afectar cómo el servidor recibe mensajes y la rapidez con que la plataforma detecta el dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de la plataforma, pero es necesario configurar correctamente la dirección del servidor y el transporte en el equipo.
- Siempre valide la compatibilidad de funciones avanzadas como control de inmovilizador o sensores externos contra la documentación vigente del fabricante.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el BN-303G ayuda en la configuración, resolución de problemas y en garantizar datos consistentes en Plaspy. Comprender el contexto de comunicación reduce el tiempo hasta el primer reporte, simplifica la resolución cuando faltan mensajes y ayuda a vincular las funciones del dispositivo con las capacidades de la plataforma.

- Acelera la configuración inicial al aclarar qué dirección de servidor y transporte configurar en el dispositivo.
- Ayuda a aislar problemas de conectividad como APN mal configurado, desajustes de transporte o fallas de cobertura de red.
- Orienta la decisión sobre usar TCP o UDP según necesidades de confiabilidad y rendimiento del despliegue.
- Permite interpretar con precisión los eventos entrantes y mapear alarmas de forma coherente en Plaspy.
- Facilita la planificación de actualizaciones de firmware y la compatibilidad de funciones durante el ciclo de vida del dispositivo.

## Por qué usar Plaspy con este protocolo

Utilizar el BN-303G con Plaspy ofrece a las organizaciones una vía directa para obtener visibilidad de vehículos en tiempo real, manejo de alarmas e informes históricos sin necesidad de configurar protocolos personalizados en la plataforma. El soporte del rastreador para transportes estándar y funciones telemáticas comunes lo convierte en una opción práctica para flotas y operaciones de alquiler que necesitan datos de ubicación y eventos confiables.

Para conocer más sobre Plaspy y cómo la plataforma trabaja con dispositivos como el BN-303G visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica más reciente en el sitio del fabricante https://www.coban.net/.
