---
slug: /goome/ev02/protocol
id: ev02-protocol
sidebar_label: Protocol
title: Goome - EV02 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Goome EV02 y cómo se comunica con Plaspy para rastreo y monitoreo
keywords:
  - Protocolo Goome EV02
  - Rastreador GPS Goome EV02
  - Protocolo de comunicación EV02
  - Compatibilidad EV02 Plaspy
  - Protocolo GPS Goome
  - Rastreador GPS para motocicleta EV02
  - Rastreador GSM GPRS GPS
  - Rastreo de vehículos EV02
  - Integración de dispositivos Plaspy
  - Guía de protocolo rastreador GPS
---

# Goome - Protocolo EV02

Esta página ofrece una visión pública y no confidencial del contexto de comunicación del Goome EV02 cuando se usa con Plaspy. Su objetivo es explicar, a alto nivel, cómo el equipo informa ubicaciones y eventos a la plataforma Plaspy, y señalar los ajustes de conexión y consideraciones de compatibilidad que debe tener en cuenta durante el despliegue.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para informar al endpoint de Plaspy. El comportamiento exacto de los paquetes y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto de conexión y protocolo más que en los detalles internos del equipo.

## Resumen del protocolo

El protocolo de comunicación del Goome EV02 define cómo el rastreador aprovecha la conectividad GSM/GPRS junto con la posición GPS para enviar datos de ubicación, movimiento y alertas a un servidor remoto. En la práctica, esto significa que el equipo envía mensajes periódicos o por eventos que permiten a una plataforma como Plaspy mapear posiciones, ofrecer reproducción de trazas y activar notificaciones como eventos de geocerca.

- Permite que el EV02 reporte en tiempo real la ubicación GPS y datos de movimiento a un servidor remoto.
- Transmite información de eventos como activaciones de geocerca, alertas de encendido o movimiento y estados del dispositivo.
- Incluye identificación y datos de direccionamiento para que Plaspy asocie los mensajes con un dispositivo específico.
- Facilita la reproducción histórica de trazas mediante mensajes con marcas de tiempo que Plaspy puede almacenar.
- Opera sobre el canal de datos celular, por lo que la entrega de mensajes depende de la red del dispositivo y la configuración APN.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para las conexiones entrantes de rastreadores y utiliza el contenido de los mensajes para identificar el tipo de dispositivo. Cuando un EV02 se configura para informar a Plaspy, la plataforma por lo general detecta automáticamente el protocolo del equipo, por lo que en la mayoría de los casos no es necesaria una selección manual.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com, que resuelve al endpoint de la plataforma.
- La dirección IP del servidor Plaspy para reporte directo es 54.85.159.138.
- La plataforma acepta tráfico de dispositivos en el puerto 8888 y utiliza ese mismo puerto para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador cuando está correctamente configurado para reportar al endpoint de Plaspy.
- En configuraciones típicas, el usuario no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo apunta al endpoint configurado de Plaspy.

## Transporte y contexto de conexión

El EV02 puede transmitir sus mensajes a través de la red celular y utiliza UDP o TCP según el soporte del dispositivo y las opciones de configuración. La capa de transporte está separada de la semántica del protocolo; Plaspy admite ambos transportes para el reporte de dispositivos en el puerto estándar de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los rastreadores pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los dispositivos que reportan a Plaspy emplean el mismo número de puerto, lo que simplifica la configuración del endpoint del servidor.
- La elección del transporte (UDP frente a TCP) puede afectar el comportamiento de entrega y debe coincidir con la capacidad del firmware del dispositivo.
- Asegúrese de que la configuración APN y la SIM del dispositivo permitan conexiones de datos hacia el transporte y endpoint elegidos.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir, quitar o modificar tipos de mensajes y campos. Confirme siempre el nivel de firmware del EV02 al validar el comportamiento.
- Las revisiones de hardware y las variantes de fabricación pueden afectar las funciones disponibles o los ajustes de transporte por defecto.
- El dispositivo puede ser configurable para usar UDP o TCP; seleccione el transporte que soporte su firmware y el entorno de red.
- Las instrucciones de configuración y los ajustes del servidor del fabricante pueden variar según la región y el paquete de producto.
- Plaspy acepta reportes en un puerto compartido pero se basa en el contenido de los mensajes para identificar el protocolo, por lo que la configuración correcta del servidor y del APN en el dispositivo es esencial.
- Verifique comportamiento de geocercas, reproducción de trazas y alertas contra la documentación del dispositivo para la revisión de firmware en uso.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del EV02 y el comportamiento de la conexión ayuda a garantizar una instalación confiable, alertas precisas y un flujo de datos consistente hacia Plaspy. Estar al tanto de las opciones de transporte, las diferencias de firmware y los ajustes de servidor necesarios reduce el tiempo de resolución de problemas y mejora la fiabilidad del sistema para monitoreo de vehículos.

- Asegura que el dispositivo apunte al endpoint y puerto correctos de Plaspy para que los mensajes lleguen a la plataforma.
- Facilita la resolución de problemas por datos faltantes al revisar la selección de transporte, el APN y la conectividad de la SIM.
- Aclara cómo las actualizaciones de firmware pueden cambiar la telemetría y el reporte de eventos disponibles.
- Ayuda a configurar expectativas de geocerca y reproducción de trazas según la frecuencia de reporte del dispositivo.
- Permite planificar el comportamiento de energía y red que influye en la frecuencia y oportunidad de los mensajes.

## Por qué usar Plaspy con este protocolo

Usar el Goome EV02 con Plaspy ofrece a flotas y propietarios una forma práctica de recolectar datos de ubicación en tiempo real, geocercas y trazas históricas para vehículos eléctricos y motocicletas. El EV02 combina un diseño compacto con conectividad GSM GPRS GPS para proporcionar las señales básicas que Plaspy necesita para ofrecer funciones de monitoreo, reproducción y alertas.

Si desea obtener más información sobre cómo trabaja Plaspy con dispositivos como el Goome EV02, visite https://www.plaspy.com para información de la plataforma y opciones de contacto. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la documentación más reciente del EV02 y la información de firmware en el sitio del fabricante en http://www.goomegpstracker.com.
