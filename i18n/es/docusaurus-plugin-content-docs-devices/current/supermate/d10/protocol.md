---
slug: /supermate/d10/protocol
id: d10-protocol
sidebar_label: Protocol
title: Supermate - D10 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para usar Supermate D10 con Plaspy en comunicación e integración
keywords:
  - Protocolo Supermate D10
  - Protocolo GPS Supermate D10
  - Compatibilidad Supermate D10 Plaspy
  - Protocolo de comunicación Supermate D10
  - Protocolo de rastreo Supermate D10
  - Protocolo rastreador GPS Supermate
  - Rastreador D10 Plaspy
  - Rastreo de vehículos Supermate D10
  - Gestión de flotas Protocolo D10
  - Integración de protocolo rastreador Plaspy
---

# Supermate - Protocolo D10

Esta página describe el contexto público del protocolo utilizado por el rastreador Supermate D10 con Plaspy. Explica el papel del protocolo de reporte del dispositivo para que el D10 envíe actualizaciones de ubicación, alertas de geocerca y señales SOS a un servidor remoto, sin exponer la lógica privada del parser ni los detalles internos del firmware. La descripción de hardware y funciones del D10 sirve como referencia para las indicaciones aquí, pero no sustituye al manual del dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888. El dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre confirme los detalles específicos del dispositivo al planear una integración.

## Resumen del protocolo

El protocolo de comunicación del Supermate D10 define cómo el rastreador se identifica, cómo transmite datos de posición y eventos, y cómo servidores como Plaspy reciben e interpretan esas transmisiones. Esta sección se enfoca en los aspectos públicos de ese proceso y en cómo asegurarse de que el D10 reporte correctamente a Plaspy.

- Permite que el D10 envíe actualizaciones periódicas de ubicación y mensajes de evento a un endpoint remoto para su procesamiento.
- Transporta información de identidad para que Plaspy pueda asociar cada mensaje entrante con el registro de dispositivo correcto.
- Entrega eventos de geocerca, alertas SOS e informes de estado de forma que Plaspy pueda mostrarlos a los usuarios.
- Soporta operación sobre transportes comunes para que el D10 funcione a través de redes celulares y redes IP estándar.
- Proporciona la base para reportes confiables y telemetría ordenada por tiempo que Plaspy utiliza en mapas, alertas e historial.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes entrantes en un único endpoint y puerto compartido y determina automáticamente el protocolo del rastreador. Cuando un Supermate D10 se configura para reportar a Plaspy, la plataforma escucha en el puerto compartido y compara el tráfico entrante con comportamientos de dispositivos conocidos, por lo que normalmente no es necesario seleccionar el protocolo manualmente.

- El dominio del servidor Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La IP del servidor Plaspy es 54.85.159.138, que algunos instaladores prefieren introducir directamente.
- El puerto es 8888 y Plaspy acepta tanto tráfico UDP como TCP en ese puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos y las reglas de red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no necesita elegir un protocolo dentro de la plataforma si el dispositivo apunta al endpoint de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el D10 establece una ruta hacia los servidores de Plaspy y qué deben configurar los administradores en el rastreador y en la red para permitir reportes exitosos. La elección del transporte puede afectar la latencia y las características de entrega, pero no cambia el papel público del protocolo.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, según el firmware y los ajustes del D10.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como host de reporte al configurar los parámetros de red.
- El puerto es 8888 para todos los dispositivos soportados por Plaspy, lo que facilita la configuración de firewalls y NAT.
- Utilice el modo de transporte recomendado por el manual del dispositivo o por su operador para obtener la mayor fiabilidad en su entorno.
- Confirme que las políticas de la red móvil y del firewall permiten tráfico saliente hacia el endpoint y el puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de los mensajes, la disponibilidad de funciones y los campos opcionales que el servidor observa.
- Las revisiones de hardware o las variantes del modelo pueden ofrecer diferentes opciones de reporte o comportamientos de gestión de energía.
- Las diferencias en la configuración por parte del fabricante pueden influir en si el dispositivo reporta por UDP o TCP de forma predeterminada.
- La selección del transporte importa para las semánticas de entrega y debe coincidir con lo que el dispositivo y el operador admiten.
- Siempre valide un dispositivo con una prueba corta en la red para confirmar que alcanza d.plaspy.com o 54.85.159.138 en el puerto 8888.
- En caso de duda, consulte la documentación oficial de Supermate y los menús de configuración del dispositivo para el host y el transporte de reporte correctos.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador acelera la configuración y la resolución de problemas y reduce el tiempo de inactividad en operaciones de monitoreo y gestión de flotas. Saber cómo y dónde reporta el D10 le ayuda a confirmar que Plaspy está recibiendo los datos esperados y facilita la resolución de problemas de red y de configuración.

- Ayuda a garantizar que el D10 esté configurado para reportar al endpoint y transporte correctos de Plaspy.
- Agiliza la identificación de problemas causados por puertos bloqueados, nombres de host incorrectos o restricciones del operador.
- Permite mapear con precisión eventos como activaciones de geocerca y señales SOS en alertas de Plaspy.
- Mejora la fiabilidad a largo plazo al alinear los ajustes del dispositivo con las políticas de red y expectativas de energía.
- Facilita la validación del comportamiento del dispositivo tras actualizaciones de firmware o cambios de hardware.

## Por qué usar Plaspy con este protocolo

Usar el Supermate D10 con Plaspy ofrece a las organizaciones un camino directo hacia visibilidad en tiempo real, alertas y seguimiento histórico sin la necesidad de gestionar el parsing del protocolo o múltiples puertos de escucha. El diseño compacto del D10 y su conjunto de funciones, como el rastreo en tiempo real y las geocercas, encajan con las capacidades de Plaspy para monitorear activos, vehículos y personas.

Si desea obtener más información sobre Plaspy y cómo la plataforma recibe y procesa datos de dispositivos como el Supermate D10 visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles de protocolo específicos del dispositivo en el sitio del fabricante http://www.gps-summit.com/ antes de desplegar a gran escala.
