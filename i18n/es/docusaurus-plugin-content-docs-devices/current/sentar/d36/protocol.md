---
slug: /sentar/d36/protocol
id: d36-protocol
sidebar_label: Protocol
title: Sentar - D36 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del Sentar D36 y cómo se comunica con Plaspy para rastreo infantil fiable
keywords:
  - protocolo Sentar D36
  - protocolo GPS Sentar D36
  - comunicación Sentar D36
  - compatibilidad Sentar D36 Plaspy
  - protocolo de rastreo Sentar D36
  - protocolo reloj infantil Sentar
  - protocolo rastreador GPS D36
  - protocolo dispositivo Plaspy
  - compatibilidad rastreador Plaspy
  - comunicación rastreador GPS
---

# Sentar - D36 Protocolo

Esta página describe el contexto público del protocolo para usar el reloj inteligente infantil Sentar D36 con Plaspy. Explica, a un nivel general, cómo el rastreador comunica información de ubicación y estado a Plaspy y qué esperar al configurar el D36 para que reporte en la plataforma Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y la frecuencia de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en el transporte y la compatibilidad a alto nivel en lugar de los detalles internos del dispositivo.

## Resumen del protocolo

En términos generales, el D36 usa su enlace de datos celular para enviar posicionamiento (GPS, LBS y asistencia por WiFi) y telemetría del dispositivo a un servidor remoto. El protocolo del rastreador define cómo se identifica el dispositivo, cuándo informa y qué campos incluye cada reporte para que Plaspy pueda convertir los datos brutos en actualizaciones de mapa, alertas e historial.

- Permite que el D36 envíe a Plaspy actualizaciones de ubicación por GPS, LBS y WiFi para seguimiento en tiempo real y reproducción de historial.
- Transmite telemetría del dispositivo como estado de batería, estado de conectividad e información básica de sensores o latidos necesarios para un monitoreo confiable.
- Incluye identificadores que permiten a Plaspy correlacionar los mensajes entrantes con la cuenta y el registro de dispositivo correctos.
- Soporta rutas de comunicación bidireccionales usadas para configuración remota o alertas iniciadas por el dispositivo cuando el firmware lo permite.
- Opera sobre transportes de red estándares para que Plaspy pueda recibir y normalizar los datos en sus flujos de trabajo de mapeo y alertas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint de ingestión compartido y empata automáticamente los mensajes entrantes con un protocolo de rastreador compatible. Cuando un D36 está configurado correctamente para reportar a Plaspy, la plataforma normalmente detecta y analiza los registros del dispositivo sin requerir selección manual del protocolo en la interfaz.

- Plaspy escucha las conexiones entrantes de dispositivos en d.plaspy.com y en la dirección del servidor 54.85.159.138.
- Todos los dispositivos compatibles con Plaspy envían sus reportes al mismo puerto en la plataforma, lo que simplifica la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del tráfico entrante una vez que los mensajes llegan al servidor, por lo que generalmente no es necesario seleccionar el protocolo manualmente.
- La configuración correcta del dispositivo (servidor y transporte adecuados) es el requisito principal para que la detección automática tenga éxito.
- Si un dispositivo no se parsea automáticamente, revisar la configuración del dispositivo y las revisiones de firmware es el primer paso recomendado.

## Contexto de transporte y conexión

El D36 puede configurarse para usar UDP o TCP según el firmware del dispositivo y las configuraciones regionales. Para la integración con Plaspy, la plataforma ofrece un único puerto y un endpoint compartido que todos los dispositivos compatibles usan para enviar datos, reduciendo la complejidad de configuración para instaladores y administradores.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy recibe datos de rastreadores en el puerto 8888; este mismo puerto es usado por todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del operador.
- Apuntar el dispositivo al endpoint de Plaspy (dominio o IP) y al transporte correcto es el paso principal para habilitar el reporte a Plaspy.
- Las configuraciones de red como APN, registro celular y reglas de firewall deben permitir conexiones salientes hacia el endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades D36 pueden cambiar la frecuencia de reporte, los campos de telemetría disponibles o las preferencias de transporte; verifique la versión de firmware al solucionar problemas.
- Diferencias en las revisiones de hardware o en el soporte de bandas pueden afectar la conectividad celular y, por ende, la capacidad del dispositivo para alcanzar el endpoint de Plaspy de forma fiable.
- Comandos de configuración o opciones de aprovisionamiento aplicadas por el fabricante pueden alterar cómo el dispositivo se identifica ante el servidor; consulte la documentación oficial de Sentar para comandos específicos del dispositivo.
- La elección del transporte (UDP frente a TCP) puede influir en el comportamiento de entrega de mensajes; asegúrese de que el dispositivo esté configurado con el transporte que coincida con las expectativas de la red y el firmware.
- Siempre valide la conectividad confirmando que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 y utiliza el puerto 8888.
- En caso de duda, compare la telemetría y el comportamiento de conectividad en vivo del dispositivo con las notas más recientes del fabricante antes de suponer un problema en Plaspy.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación del D36 ayuda en la configuración inicial, la fiabilidad continua y la resolución eficiente de problemas cuando los dispositivos no aparecen en Plaspy como se espera. Conocer los conceptos de transporte y reporte reduce el tiempo de puesta en marcha y evita errores comunes de configuración.

- Ayuda a garantizar que el dispositivo apunte al endpoint y transporte correctos de Plaspy para que la detección automática pueda ocurrir.
- Facilita la interpretación del comportamiento del dispositivo, como reportes perdidos, actualizaciones poco frecuentes o huecos en la telemetría.
- Aclara qué ajustes del lado del dispositivo (APN, transporte, intervalo de reporte) debe verificar primero cuando surjan problemas.
- Permite conversaciones más informadas con el soporte del fabricante cuando diferencias de firmware o hardware afectan la integración.
- Mejora la confiabilidad a largo plazo al orientar buenas prácticas de aprovisionamiento y monitoreo.

## Por qué usar Plaspy con este protocolo

Usar el Sentar D36 con Plaspy brinda a padres y cuidadores una vista centralizada y clara de la ubicación del niño, el estado del dispositivo y las opciones de comunicación. Plaspy convierte los reportes de GPS, LBS y asistencia por WiFi del D36 en vistas de mapa en vivo, alertas configurables y reproducción de historial para que los cuidadores mantengan conciencia situacional sin trabajo de red complejo.

Si desea conocer más sobre Plaspy y cómo la plataforma gestiona los reportes de dispositivos y las alertas, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente del protocolo específico y del firmware en el sitio del fabricante en http://www.sentarsmart.com/ antes del despliegue final.
