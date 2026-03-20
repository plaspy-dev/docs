---
slug: /castel/pt_718/protocol
id: pt_718-protocol
sidebar_label: Protocol
title: Castel - PT-718 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del Castel PT-718 y cómo comunica con la plataforma Plaspy
keywords:
  - protocolo Castel PT-718
  - rastreador GPS Castel PT-718
  - comunicación PT 718
  - protocolo de rastreo PT 718
  - compatibilidad rastreador Castel Plaspy
  - comunicación rastreador GPS
  - protocolo rastreador GPS personal
  - compatibilidad gestión de flotas
  - integración de dispositivos Plaspy
  - protocolo de reporte de rastreador
---

# Castel - PT-718 Protocol

Esta página ofrece el contexto público del protocolo para usar el rastreador Castel PT-718 con Plaspy. Se centra en cómo el dispositivo informa su ubicación y estado a un servidor remoto y qué esperar durante la integración con la plataforma Plaspy. El contenido está pensado para administradores, integradores y usuarios técnicos que necesiten comprender el papel de comunicación del equipo sin exponer detalles propietarios o sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware del PT-718, la revisión de hardware y la implementación del fabricante, por lo que las indicaciones aquí son generales y se enfocan en la conexión y consideraciones de compatibilidad, no en especificaciones de paquete a bajo nivel.

## Resumen del protocolo

El PT-718 utiliza datos celulares y posicionamiento por satélite para generar reportes de ubicación periódicos y por eventos que pueden enviarse a un servidor remoto. El protocolo del dispositivo define cómo se identifica, transmite la posición y el estado, y notifica eventos como SOS o alertas de geocerca. Comprender este contexto público del protocolo ayuda a garantizar que los datos fluyan de forma fiable hacia Plaspy y otros backends compatibles.

- El protocolo establece el formato y envío de datos de ubicación, marca de tiempo y estado básico a un endpoint de servidor.
- La información de identificación y sesión en los reportes permite a Plaspy asociar los mensajes entrantes con el registro de dispositivo correcto.
- Mensajes de eventos como SOS, entrada o salida de una geocerca y alertas de baja tensión se transmiten por el mismo canal utilizado para las actualizaciones de posición.
- La elección de transporte y la configuración del dispositivo determinan si los mensajes llegan por UDP o TCP y la velocidad con la que el servidor los recibe.
- La detección y el enrutamiento en el servidor convierten los reportes entrantes en telemetría utilizable para mapas, alertas e historial en Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint compartido y determina qué protocolo público de rastreador utiliza un equipo en función de las características de la conexión y del reporte entrante. Esta detección automática reduce los pasos de configuración para los usuarios y permite que los dispositivos comiencen a reportar con una configuración mínima, siempre que apunten al endpoint de Plaspy.

- Plaspy escucha en una dirección y puerto comunes para todos los dispositivos soportados.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- La plataforma utiliza el puerto 8888 para el reporte de dispositivos y todos los equipos en Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para reportar vía UDP o TCP al endpoint compartido de Plaspy en el puerto 8888.
- Cuando un PT-718 está correctamente configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy detectará automáticamente el protocolo del rastreador y enrutarà los datos al registro de dispositivo correspondiente.
- En la mayoría de los casos, los usuarios no necesitan seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo está apuntando al endpoint de Plaspy.

## Contexto de transporte y conexión

El PT-718 puede enviar reportes a través de GSM GPRS y utiliza transporte IP estándar para reenviar los datos de rastreo. La selección de transporte y el comportamiento de red del dispositivo afectan la fiabilidad y la latencia de entrega; tanto UDP como TCP suelen ser compatibles según la configuración y el firmware del equipo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte y la configuración del equipo.
- Los equipos pueden enviar reportes al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración saliente en los equipos y el enrutamiento en el servidor.
- UDP ofrece menor sobrecarga y se usa comúnmente para reportes de posición frecuentes, mientras que TCP puede elegirse para sesiones que requieran mayor fiabilidad de conexión según las capacidades del dispositivo.
- Factores de red como el comportamiento GPRS del operador, la calidad de señal y la configuración del APN influyen en cómo el PT-718 mantiene las conexiones al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de reportes, los campos disponibles o el comportamiento de los eventos; siempre verifique la versión de firmware del dispositivo al validar la compatibilidad.
- Las revisiones de hardware y las opciones disponibles (por ejemplo, variantes de batería o módulo) pueden modificar las alertas disponibles o el manejo de energía.
- La configuración predeterminada del fabricante puede hacer que los equipos reporten primero a un cloud del vendedor o por SMS; reconfigure el endpoint del servidor a d.plaspy.com o 54.85.159.138 en el puerto 8888 para enviar datos a Plaspy.
- La selección de transporte entre UDP y TCP debe confirmarse en los ajustes del dispositivo y probarse para asegurar las características de entrega esperadas.
- Algunas unidades PT-718 permiten la configuración por comandos SMS o un modo de setup en el dispositivo; utilice esos métodos oficiales para cambiar la dirección del servidor de reporte y el transporte.
- Valide el comportamiento de geocercas, SOS y batería baja después de configurar los reportes a Plaspy, ya que los umbrales de evento pueden depender del firmware.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el PT-718 con un servicio backend como Plaspy facilita la configuración inicial, la resolución de problemas y la confiabilidad continua. Incluso sin entrar en el esquema propietario de paquetes, una visión clara del transporte, el endpoint y los tipos de eventos esperados simplifica confirmar que la telemetría está llegando e interpretándose correctamente.

- Garantiza la configuración correcta del endpoint del servidor y del transporte al configurar el dispositivo.
- Ayuda a resolver reportes faltantes o retrasados enfocándose primero en red, APN y capas de transporte.
- Aclara las expectativas sobre tipos de evento como SOS, alertas de geocerca y notificaciones de batería baja.
- Simplifica la verificación de que el dispositivo está asociado con la cuenta y el registro correcto en Plaspy una vez que los reportes comienzan a llegar.
- Reduce el tiempo de integración porque Plaspy detecta automáticamente el protocolo del dispositivo cuando el rastreador apunta al endpoint compartido.

## Por qué usar Plaspy con este protocolo

Usar el Castel PT-718 con Plaspy ofrece una forma directa de recopilar datos de ubicación y eventos en tiempo real desde rastreadores personales y de activos. Plaspy centraliza la telemetría de múltiples dispositivos y la pone a disposición para mapas, alertas, historial y monitoreo sin requerir la selección manual de protocolo para cada equipo.

Plaspy acepta reportes PT-718 enviados al endpoint y puerto compartidos y detecta automáticamente el protocolo correcto, así que una vez que el rastreador esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 (UDP o TCP según se soporte), la telemetría debería comenzar a fluir hacia la plataforma. Para obtener más información sobre Plaspy visite https://www.plaspy.com. Por favor verifique las notas de firmware, el comportamiento del protocolo más reciente y las instrucciones específicas del dispositivo con el fabricante en http://www.castelecom.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
