---
slug: /minifinder/zepto/protocol
id: zepto-protocol
sidebar_label: Protocol
title: MiniFinder - Zepto Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo MiniFinder Zepto y cómo se comunica con los servidores de Plaspy para rastreo en tiempo real
keywords:
  - Protocolo MiniFinder Zepto
  - Protocolo GPS MiniFinder Zepto
  - Protocolo de comunicación MiniFinder Zepto
  - Compatibilidad Zepto Plaspy
  - Protocolo OBD2 Zepto
  - Integración dispositivo Plaspy
  - Protocolo rastreador GPS Plaspy
  - Rastreo de vehículos protocolo Zepto
  - Telemetría y reportes Zepto
  - Compatibilidad rastreador MiniFinder
---

# MiniFinder - Protocolo Zepto

Esta página ofrece una visión pública y no sensible del contexto de comunicación del MiniFinder Zepto cuando el dispositivo se utiliza con Plaspy. Explica cómo el Zepto habitualmente reporta posición y telemetría derivada del OBD a Plaspy, y qué función cumple el protocolo de reporte del rastreador para entregar ubicaciones en vivo, eventos y datos históricos a su cuenta de Plaspy.

Plaspy emplea ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión del firmware del Zepto, revisiones de hardware y la implementación del fabricante; por eso las notas a continuación se enfocan en el contexto público del protocolo y no en detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de reporte define cómo el Zepto formatea y transmite posiciones, telemetría OBD y notificaciones de eventos a un servidor. Para integraciones con plataformas de gestión de flotas como Plaspy, el propósito del protocolo es garantizar que cada actualización incluya suficiente información de identidad y telemetría para que la plataforma pueda atribuir, mostrar y registrar la actividad del dispositivo de forma fiable.

- Permite que el Zepto entregue actualizaciones periódicas y basadas en eventos al endpoint de Plaspy.
- Incluye datos de identificación que permiten a Plaspy asociar mensajes entrantes con la instancia correcta del dispositivo.
- Transporta telemetría proveniente del OBD y señales de conducción que Plaspy puede mostrar como encendido, viajes y horas de motor.
- Soporta reportes de eventos como violaciones de geocerca, alertas de exceso de velocidad y alarmas por movimiento o sabotaje para notificaciones en tiempo real.
- Admite agrupación de mensajes o subidas históricas para que viajes y registros almacenados en el dispositivo puedan ser consumidos por Plaspy para reproducción y reportes.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido el tráfico entrante de dispositivos y determina automáticamente el protocolo correcto para cada conexión cuando el dispositivo está correctamente configurado para reportar a la plataforma. En la mayoría de los despliegues, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el rastreador apunta al endpoint de Plaspy y utiliza el transporte compatible.

- El dominio público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy para conexiones de dispositivos es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para reportes de dispositivos y este mismo puerto se emplea en todos los dispositivos soportados.
- Los dispositivos compatibles con Plaspy se pueden configurar para reportar usando UDP o TCP en el puerto 8888.
- Cuando el Zepto está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy detectará automáticamente el protocolo que el dispositivo está usando.
- Una identificación correcta del dispositivo y ajustes de transporte consistentes reducen el tiempo de configuración y minimizan la necesidad de seleccionar el protocolo manualmente.

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo los paquetes del Zepto llegan a Plaspy, pero no cambian las responsabilidades públicas del propio protocolo. El Zepto es un rastreador alimentado por OBD que transmite ubicación y telemetría a través de redes celulares a Plaspy, y la conexión puede establecerse usando UDP o TCP según la configuración del dispositivo y las condiciones de la red.

- El Zepto puede configurarse para apuntar al endpoint de reportes de Plaspy usando el dominio d.plaspy.com.
- Como alternativa, los dispositivos pueden configurarse para reportar directamente a la IP de reportes de Plaspy 54.85.159.138.
- Plaspy recibe tráfico de dispositivos en el puerto 8888; este mismo puerto se usa para todos los dispositivos en la plataforma.
- El dispositivo puede usar UDP o TCP en el puerto 8888 en función de la configuración del rastreador y el comportamiento de la red del operador móvil.
- Usar el nombre de dominio de Plaspy puede simplificar el aprovisionamiento del dispositivo, mientras que la dirección IP directa está disponible como alternativa para configuraciones de red específicas.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el temporizado de mensajes, los campos disponibles y la semántica de eventos; verifique la versión de firmware del Zepto al validar el comportamiento.
- Revisiones de hardware o variantes regionales pueden alterar las bandas GNSS o celulares soportadas y afectar la conectividad en algunos mercados.
- Las herramientas de configuración del fabricante o servicios de aprovisionamiento pueden exponer opciones de transporte o reporte que cambien si el dispositivo usa UDP o TCP.
- Algunas funciones avanzadas, como control de inmovilizador o soporte de sensores Bluetooth, dependen de la versión específica del dispositivo y de accesorios del ecosistema.
- Confirme qué PIDs OBD y señales del vehículo reporta el Zepto según el modelo de su vehículo y el firmware para asegurar que Plaspy reciba la telemetría esperada.
- Siempre valide la compatibilidad con la documentación y notas de la versión más recientes de MiniFinder al planear despliegues a gran escala.

## Por qué es importante comprender el protocolo

Tener una comprensión práctica del protocolo de comunicación del Zepto ayuda a instaladores y gestores de flotas a garantizar un flujo de datos fiable, agilizar la resolución de problemas y obtener un comportamiento predecible a lo largo del tiempo cuando los dispositivos reportan en Plaspy.

- Reduce el tiempo hasta la primera posición confirmando que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando un transporte apropiado.
- Le ayuda a diagnosticar problemas de conectividad comprobando si el dispositivo usa UDP o TCP y si hay registro celular y fijación GNSS.
- Asegura que los reportes de eventos como disparos de geocerca y alertas por exceso de velocidad lleguen correctamente para flujos de notificación inmediatos.
- Simplifica la planificación de actualizaciones de firmware porque cambios en el protocolo o en campos nuevos pueden afectar qué puntos de datos recibe Plaspy.
- Mejora la confiabilidad a largo plazo al alinear la configuración del dispositivo con las expectativas de Plaspy sobre identidad, latidos y cadencia de telemetría.

## Por qué usar Plaspy con este protocolo

Usar el MiniFinder Zepto con Plaspy ofrece a empresas y usuarios particulares una solución OBD compacta que alimenta ubicación continua y telemetría derivada del OBD en una plataforma unificada de rastreo y reportes. El diseño plug and play del Zepto para OBD, su GNSS multiconstelación y la cobertura celular lo hacen adecuado para monitoreo de flotas, despliegues discretos contra robo y diarios de viaje compatibles con impuestos, donde datos persistentes y precisos de ubicación y eventos son esenciales.

Para conocer más sobre cómo Plaspy gestiona integraciones de dispositivos y los servicios disponibles para visibilidad de flotas, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información específica más reciente del Zepto y las notas del fabricante en https://minifinder.se/.
