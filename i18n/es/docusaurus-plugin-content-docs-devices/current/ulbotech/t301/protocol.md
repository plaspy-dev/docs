---
slug: /ulbotech/t301/protocol
id: t301-protocol
sidebar_label: Protocol
title: Ulbotech - T301 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Ulbotech T301 y cómo comunica con Plaspy para rastreo y telemetría
keywords:
  - Protocolo Ulbotech T301
  - Protocolo GPS Ulbotech T301
  - Compatibilidad T301 Plaspy
  - Protocolo de rastreo Ulbotech T301
  - Protocolo de comunicación T301
  - Rastreador GPS Ulbotech T301
  - Rastreo de flotas T301 Plaspy
  - Protocolo rastreador de vehículos Ulbotech
  - Protocolo de telemetría T301
  - Rastreadores compatibles con Plaspy
---

# Ulbotech - Protocolo T301

Esta página describe el contexto público del protocolo para usar el rastreador Ulbotech T301 con Plaspy. Se centra en cómo el dispositivo informa posición y telemetría al endpoint de Plaspy y qué papel tiene el protocolo de comunicación en un despliegue real. El T301 es un rastreador GPS económico de nivel de entrada, basado en un módulo GNSS u-blox y un módem GSM cuatribanda, que ofrece detección de encendido ACC, alerta SOS, acelerómetro de 3 ejes, inmovilizador interno y una entrada analógica AD para telemetría de combustible o temperatura — todas funciones habitualmente integradas con Plaspy para monitorización y reportes en tiempo real.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo informa a la plataforma. Para el T301 esto significa que el rastreador puede configurarse para reportar a d.plaspy.com o al servidor de Plaspy 54.85.159.138 en el puerto 8888, y puede usar UDP o TCP en ese puerto según la configuración del dispositivo. El comportamiento exacto del protocolo en una unidad T301 específica puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene verificar los detalles del equipo antes de un despliegue a gran escala.

## Descripción general del protocolo

El protocolo de comunicación del T301 define cómo se empaquetan y envían las posiciones, cambios de estado, lecturas de sensores y eventos a través de la red móvil hacia Plaspy. A alto nivel, el protocolo permite que el dispositivo se identifique, transmita telemetría utilizable y, cuando el firmware y el módem lo soportan, reciba comandos remotos o actualizaciones de configuración.

- Transmite posiciones GNSS y telemetría con sello de tiempo para que Plaspy muestre la ubicación en tiempo real y el historial.
- Incluye indicadores de eventos discretos como encendido ACC, pulsación del botón SOS y estado del inmovilizador para alertas inmediatas.
- Envía valores de la entrada analógica AD para monitoreo de combustible o temperatura que Plaspy puede convertir en informes.
- Aporta datos de movimiento y eventos bruscos desde el acelerómetro de 3 ejes para analizar el comportamiento del conductor.
- Permite configuración y comandos remotos cuando el firmware del rastreador expone canales de comando sobre GPRS.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y utiliza detección automatizada para interpretar el protocolo del rastreador cuando un dispositivo configurado correctamente se conecta. En la mayoría de los despliegues, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el rastreador reporta al endpoint de la plataforma.

- Los dispositivos deben apuntar al endpoint d.plaspy.com o a la IP 54.85.159.138 para una entrega fiable.
- Plaspy escucha en el puerto 8888 para todos los rastreadores soportados y detecta automáticamente el protocolo en uso.
- La plataforma admite tanto informes entrantes por TCP como por UDP en el puerto compartido, por lo que la elección del transporte es flexible.
- Una vez identificado el rastreador, Plaspy mapea la telemetría entrante al modelo de eventos de la plataforma para paneles y alertas.
- La correcta configuración del dispositivo y la conectividad con la red móvil son los factores más comunes para una detección exitosa.

## Transporte y contexto de conexión

Las unidades T301 usan datos celulares para conectarse a Plaspy y pueden configurarse para usar UDP o TCP según la configuración del rastreador y las condiciones de la red. Plaspy opera un puerto común para todas las conexiones de rastreadores, lo que simplifica la puesta a punto y reduce errores de configuración de puertos.

- El dispositivo puede configurarse para enviar datos por UDP o TCP en el puerto 8888 según la unidad.
- Los rastreadores pueden apuntar al nombre DNS d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que el mismo puerto de destino se aplica a distintos modelos.
- La fiabilidad celular, los ajustes de APN y la correcta configuración del destino en el T301 son esenciales para una conectividad estable.
- Firewalls o filtros de red deben permitir salidas TCP o UDP hacia el endpoint y puerto de Plaspy indicados.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes y las funciones disponibles; confirme el nivel de firmware al validar el comportamiento.
- Revisiones de hardware o variantes regionales pueden modificar pines de E/S soportados, entradas de sensores o canales de comando.
- La selección del transporte entre UDP y TCP afecta las características de entrega pero no el puerto compartido que usa Plaspy.
- Los comandos de configuración por parte del fabricante y los ajustes de reporte predeterminados pueden variar según la unidad o la preconfiguración del distribuidor.
- Verifique que el rastreador esté configurado para reportar a d.plaspy.com o a la IP del servidor de Plaspy en el puerto 8888 para la detección automática.
- Compruebe cualquier integración personalizada o pasarelas de terceros para asegurarse de que preservan el destino y el transporte requeridos.

## Por qué es importante entender el protocolo

Comprender cómo el T301 se comunica con Plaspy ayuda a asegurar un despliegue fiable, agiliza la resolución de problemas y define expectativas claras sobre la telemetría disponible. Conocer el contexto de comunicación reduce el tiempo de configuración y permite a los equipos interpretar mejor los datos en vivo y el comportamiento de los eventos.

- Garantiza destinos y ajustes de transporte correctos para que los dispositivos lleguen de forma fiable a Plaspy.
- Facilita la resolución de problemas de conectividad al acotar si la falla es de red, configuración o firmware.
- Aclara qué campos de telemetría y eventos aparecerán en Plaspy según las funciones del dispositivo y el firmware.
- Ayuda a planificar comandos remotos, control de inmovilizador y actualizaciones de firmware que puedan depender del protocolo.
- Apoya decisiones operativas sobre intervalos de muestreo, uso de datos y comportamiento ante fallos de energía.

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech T301 con Plaspy ofrece una solución enfocada para organizaciones que necesitan ubicación en tiempo real confiable, telemetría esencial y controles prácticos antirrobo sin complejidad innecesaria. Plaspy procesa la telemetría del T301 para que las flotas puedan monitorear la posición de los vehículos, recibir eventos de ACC y SOS, rastrear combustible o entradas analógicas y actuar sobre comandos de inmovilizador cuando estén disponibles.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo, por lo que conviene verificar la documentación específica del dispositivo y las notas de firmware más recientes en el sitio del fabricante http://www.ulbotech.com/ antes de desplegar a gran escala.
