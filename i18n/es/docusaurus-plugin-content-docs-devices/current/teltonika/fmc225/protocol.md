---
slug: /teltonika/fmc225/protocol
id: fmc225-protocol
sidebar_label: Protocol
title: Teltonika - FMC225 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para usar el Teltonika FMC225 con Plaspy para rastreo y telemetría fiables
keywords:
  - Protocolo Teltonika FMC225
  - Protocolo GPS Teltonika FMC225
  - Compatibilidad FMC225 Plaspy
  - Comunicación FMC225
  - Protocolo de rastreo FMC225
  - Integración GPS Teltonika
  - Rastreo de flotas FMC225
  - Telemetría FMC225
  - Integración Plaspy Teltonika
  - Gestión remota FMC225
---

# Teltonika - Protocolo FMC225

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC225 con Plaspy. Explica, en términos generales y no sensibles, cómo se comunica el dispositivo para que operadores de flotas e integradores comprendan los puntos de conexión, las opciones de transporte y las consideraciones prácticas al incorporar FMC225 en una implementación de Plaspy.

El FMC225 es un equipo robusto con grado IP67 pensado para montaje exterior, con conectividad 4G LTE Cat 1, retroceso a 2G, Dual SIM y interfaces seriales para telemetría extendida e entradas de impulso de combustible. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos del protocolo del dispositivo consulte los recursos oficiales de Teltonika.

## Descripción general del protocolo

El protocolo de reporte del FMC225 es el mecanismo por el cual el rastreador se identifica y transmite posiciones GNSS, telemetría y datos de eventos a Plaspy. A grandes rasgos, el protocolo asegura que la ubicación, las lecturas de sensores, los eventos de entradas digitales y la telemetría serial de sensores externos se entreguen a la plataforma de forma que Plaspy pueda ingerirlos y presentarlos.

- Permite que el dispositivo reporte posición, telemetría y mensajes de evento a Plaspy para mapeo, alertas y análisis.
- Incluye identificadores y campos de estado que permiten a Plaspy asociar los datos entrantes con el dispositivo FMC225 correcto.
- Transmite eventos de entradas digitales y analógicas, así como conteo por impulso de combustible y datos de sensores seriales para que Plaspy pueda generar informes de combustible y diagnósticos.
- Funciona sobre transportes de red estándar para que el rastreador llegue al endpoint de Plaspy desde redes celulares.
- Sirve como base para monitoreo remoto, alarmas y flujos de trabajo automatizados una vez que Plaspy procese los datos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint de servidor compartido y determina automáticamente el protocolo del rastreador según la conexión entrante y el contenido del mensaje. En la mayoría de las implementaciones no es necesario elegir un protocolo en la interfaz de Plaspy si el FMC225 está configurado para reportar correctamente al endpoint de Plaspy.

- El endpoint del servidor Plaspy es d.plaspy.com y también es accesible en 54.85.159.138 para configuración por IP directa.
- Plaspy escucha en un único puerto para todos los dispositivos; el puerto configurado es 8888.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP en el puerto 8888, según las capacidades del equipo y las condiciones de la red.
- Cuando el FMC225 reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos con la cuenta del dispositivo.
- Asegurar que el FMC225 apunte al endpoint y transporte correctos suele evitar la selección manual de protocolo dentro de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión es clave para la entrega fiable de mensajes del FMC225 a Plaspy. El FMC225 soporta enlace ascendente celular sobre LTE con retroceso a 2G y puede usar TCP o UDP para alcanzar la plataforma. La configuración de la red y la SIM, así como las variantes regionales, influyen en la elección de transporte más adecuada.

- El dispositivo puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto que usa Plaspy para todos los dispositivos soportados es 8888 y puede seleccionarse como TCP o UDP en el dispositivo.
- TCP puede ofrecer características de entrega más fiables en redes móviles, mientras que UDP puede reducir la sobrecarga cuando procede; el firmware del dispositivo y la política del operador determinan las opciones disponibles.
- La capacidad Dual SIM del FMC225 ayuda a mantener la conectividad cuando una red no está disponible.
- Confirme el APN y los ajustes de la SIM en el FMC225 para garantizar que pueda alcanzar el endpoint de Plaspy desde la región objetivo.

## Notas sobre compatibilidad del protocolo

- El comportamiento del protocolo puede diferir entre versiones de firmware; siempre revise las notas de la versión del firmware FMC225 por cambios en el protocolo que afecten campos de mensaje o comportamiento.
- Las revisiones de hardware y las variantes regionales pueden afectar las interfaces disponibles y los transportes soportados para reportar a Plaspy.
- Las herramientas de configuración del fabricante y los ajustes predeterminados del dispositivo pueden influir en si el equipo usa TCP o UDP al enviar datos a Plaspy.
- Valide que cualquier sensor externo o adaptador serial conectado a RS232 o RS485 sea compatible con el firmware FMC225 usado en su flota.
- Pruebe un número reducido de dispositivos antes de un despliegue masivo para confirmar que la telemetría, el conteo por impulso de combustible y los eventos de entradas digitales se reportan según lo esperado.
- Use la documentación de Teltonika para obtener las instrucciones específicas del dispositivo y ejemplos de configuración más actuales.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una incorporación fluida, una ingesta precisa de telemetría y una operación fiable a largo plazo de los dispositivos FMC225 con Plaspy. Tener expectativas claras sobre transporte, direccionamiento y efectos del firmware reduce el tiempo de resolución de problemas y mejora la calidad de los datos para las operaciones de la flota.

- Ayuda a validar la configuración del equipo para que posición y datos de sensores lleguen a Plaspy sin necesidad de sobreescribir manualmente el protocolo.
- Reduce la fricción de integración al conectar sensores RS232/RS485, medidores por impulso y entradas digitales a la plataforma.
- Facilita el diagnóstico de problemas de conectividad relacionados con APN, SIM, selección de transporte o accesibilidad del endpoint.
- Apoya la planificación de actualizaciones de firmware y despliegues de hardware minimizando cambios inesperados en el protocolo.
- Aumenta la confianza en el mapeo de eventos como control de inmovilizador, aperturas de puerta y seguimiento de combustible utilizados en flujos operativos.

## Por qué usar Plaspy con este protocolo

Combinar el Teltonika FMC225 con Plaspy ofrece una vía práctica para obtener visibilidad continua de vehículos y equipos pesados que operan en entornos exigentes. La carcasa robusta del FMC225, la redundancia celular y las interfaces de telemetría extendida lo hacen adecuado para flotas que necesitan hardware durable junto con una plataforma que gestiona automáticamente la detección de protocolo y la ingesta unificada.

El modelo de endpoint compartido de Plaspy simplifica los despliegues porque todos los dispositivos reportan al mismo puerto y Plaspy detectará automáticamente los protocolos de rastreadores soportados. Para saber más sobre Plaspy y cómo puede trabajar con rastreadores resistentes como el FMC225 visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, el comportamiento del firmware y la guía de configuración, verifique la información actual con el fabricante en https://www.teltonika-gps.com/
