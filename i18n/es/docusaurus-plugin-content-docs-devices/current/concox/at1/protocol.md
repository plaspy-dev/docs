---
slug: /concox/at1/protocol
id: at1-protocol
sidebar_label: Protocol
title: Concox - AT1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Concox AT1 para integración con Plaspy
keywords:
  - protocolo Concox AT1
  - protocolo GPS Concox AT1
  - compatibilidad AT1 Plaspy
  - protocolo rastreador GPS Concox
  - protocolo de comunicación AT1
  - integración rastreador GPS Plaspy
  - protocolo rastreo de activos
  - rastreo de vehículos Concox
  - protocolo telemetría AT1
  - protocolo de seguimiento Concox AT1
---

# Concox - Protocolo AT1

Esta página describe el contexto público del protocolo para el uso del rastreador Concox AT1 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, y qué esperar al integrar el AT1 en flujos de trabajo telemáticos en la nube. El contenido está pensado para ayudar a integradores técnicos y gestores de flotas a comprender el comportamiento de conexión y las consideraciones prácticas sin revelar detalles internos del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan a la plataforma. El comportamiento exacto del protocolo en el AT1 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general basada en la descripción del dispositivo AT1 y en los hechos públicos de conexión de Plaspy.

## Visión general del protocolo

El protocolo de reporte del AT1 es el mecanismo mediante el cual el dispositivo entrega posiciones GNSS, datos de reserva LBS, notificaciones de eventos y telemetría a un backend telemático como Plaspy. A alto nivel, el protocolo permite identificación, envío de datos y flujos básicos de acuse de recibo que permiten a Plaspy mostrar posiciones en vivo y eventos mientras el dispositivo almacena datos localmente cuando la conectividad es deficiente.

- Permite que el AT1 envíe posiciones GNSS y datos de reserva LBS para que Plaspy pueda reconstruir trayectos y la última ubicación conocida.
- Transmite eventos y datos de sensores como alertas de manipulación, activaciones del acelerómetro y estado de alimentación para el manejo de alarmas.
- Envía detalles de telemetría necesarios para diagnóstico y monitoreo de salud del dispositivo en los paneles de Plaspy.
- Soporta almacenamiento local en el AT1 para que informes retrasados y audio grabado puedan reenviarse a Plaspy cuando la conectividad se restablezca.
- Proporciona la información de direccionamiento necesaria para que el AT1 reporte al endpoint del servidor de Plaspy y sea identificado por la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint público y determina automáticamente el protocolo de reporte de los dispositivos conectados. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo en Plaspy si el AT1 está configurado para reportar al endpoint de la plataforma y usa un transporte soportado.

- El dominio del servidor Plaspy es d.plaspy.com, al que los dispositivos pueden apuntar para la entrega de telemetría.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse como dirección alternativa cuando DNS no está disponible.
- La plataforma escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint compartido y enruta los mensajes al manejador correspondiente.
- Si el AT1 está correctamente configurado para enviar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy normalmente identificará el protocolo del dispositivo sin intervención manual.

## Transporte y contexto de conexión

El transporte de conexión y la configuración del endpoint determinan cómo el AT1 alcanza el servidor Plaspy. El AT1 soporta opciones de transporte prácticas y almacenamiento local para asegurar que la telemetría llegue a Plaspy incluso cuando la cobertura celular sea intermitente.

- El AT1 puede configurarse usando UDP o TCP en el puerto 8888, según el soporte del dispositivo y el perfil de configuración seleccionado.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección numérica 54.85.159.138 cuando se prefiera DNS o direccionamiento directo.
- Plaspy usa el mismo número de puerto 8888 para todos los dispositivos soportados para simplificar la configuración y las reglas de firewall.
- Elija UDP cuando prefiera menor sobrecarga y el firmware del dispositivo use reportes por datagramas; elija TCP cuando se requiera fiabilidad de sesión y el dispositivo lo soporte.
- Asegúrese de que cualquier firewall de red o configuraciones APN en los planes SIM permitan conexiones salientes a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden modificar la disponibilidad de funciones y el comportamiento exacto de los mensajes; confirme siempre la versión de firmware del AT1 al solucionar problemas.
- Revisiones de hardware o variantes regionales del AT1 pueden implementar comportamientos de reporte ligeramente distintos o ajustes de transporte por defecto diferentes.
- Los comandos de configuración del fabricante y los APN por defecto pueden influir en si el dispositivo reporta por UDP o TCP; verifique la configuración antes del despliegue.
- El almacenamiento local y la entrega de audio grabado están sujetos a límites de almacenamiento del dispositivo y al manejo de la cola por parte del firmware.
- Algunas funciones avanzadas descritas en la documentación del dispositivo pueden requerir versiones específicas de firmware o activar opciones de configuración concretas.
- Valide la compatibilidad con la documentación de producto del AT1 y con las notas de versión que el fabricante proporcione.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del AT1 ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y permitir una operación predecible a largo plazo con Plaspy. Conocer cómo el dispositivo reporta, almacena datos y selecciona el transporte puede reducir el tiempo de integración y mejorar la visibilidad operativa.

- Ayuda a confirmar que los dispositivos apuntan al endpoint y puerto correctos de Plaspy para que la telemetría llegue de forma consistente.
- Facilita interpretar por qué los datos almacenados aparecen después de que se restablece la conectividad y cómo dimensionar los intervalos de reporte para optimizar la batería.
- Mejora la resolución de problemas por eventos faltantes o telemetría ausente al acotar el ámbito a firmware, transporte o configuración de red.
- Orienta en la elección entre UDP y TCP según cobertura, duración de batería y fiabilidad de datos esperada.
- Soporta la planificación de actualizaciones de firmware y pruebas para asegurar la continuidad de funciones como el reporte de eventos y el reenvío de audio.

## Por qué usar Plaspy con este protocolo

Usar el Concox AT1 con Plaspy ofrece una vía práctica para combinar hardware robusto y de larga duración para rastreo de activos con una plataforma telemática en la nube que ingiere posiciones GNSS, reserva LBS, eventos de sensores y telemetría almacenada. La caja IP67 del AT1, su montaje magnético y la batería de larga duración lo hacen adecuado para activos redeployables y contenedores, mientras que Plaspy presenta los datos entrantes en paneles, alertas e informes históricos.

Para obtener más información sobre Plaspy y cómo la plataforma puede ingerir la telemetría y los eventos del AT1, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles específicos del protocolo y las notas de firmware más recientes en el sitio oficial del fabricante https://www.iconcox.com/.
