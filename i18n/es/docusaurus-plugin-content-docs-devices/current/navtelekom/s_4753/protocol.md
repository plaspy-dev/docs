---
slug: /navtelekom/s_4753/protocol
id: s_4753-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-4753 Protocol
sidebar_class_name: menu_item_tracker
description: Vista general del protocolo público del rastreador Navtelekom СИГНАЛ S-4753 y su comunicación con Plaspy
keywords:
  - Navtelekom СИГНАЛ S-4753
  - Protocolo Navtelekom S-4753
  - Rastreador GPS S-4753
  - Protocolo GPS Navtelekom
  - Compatibilidad Plaspy S-4753
  - Protocolo de rastreador Navtelekom
  - Seguimiento de vehículos S-4753
  - Gestión de flotas S-4753
  - Protocolo de comunicación S-4753
  - Compatibilidad de rastreadores con Plaspy
---

# Navtelekom - СИГНАЛ S-4753 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Navtelekom СИГНАЛ S-4753 con la plataforma Plaspy. Se centra en cómo el dispositivo comunica a alto nivel, el papel del protocolo de reporte en la entrega de posición y telemetría a Plaspy, y notas prácticas para ayudar a integradores y gestores de flota a preparar los equipos para la conexión.

El SIGNAL S-4753 es un rastreador vehicular profesional GLONASS y GPS con conectividad 4G, redundancia dual SIM, dos interfaces CAN, E/S extensas y registro en tarjeta SD integrado. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración y el estado del firmware del equipo influirán en el comportamiento en tiempo de ejecución.

## Descripción general del protocolo

A alto nivel, el protocolo del rastreador define cómo el S-4753 reporta posiciones GNSS, telemetría CAN, eventos de E/S y datos de registro a un servidor remoto, y cómo el servidor puede reconocer o solicitar información adicional. La visión pública de este protocolo se centra en el intercambio fiable de datos y en la identificación clara más que en los formatos de trama de bajo nivel.

- Permite que el S-4753 envíe periódicamente posiciones y telemetría con marcas de tiempo a Plaspy para monitoreo en tiempo real y reproducción histórica
- Transmite señales CAN del vehículo y telemetría mapeada para que Plaspy presente métricas de motor y de confort
- Reporta eventos de E/S como encendido, puertas abiertas y entradas de alarma para alertas y acciones basadas en reglas
- Soporta la entrega de registros a bordo para que, en el servidor, los logs puedan reconciliarse tras interrupciones de red
- Proporciona información de identificación para que Plaspy asocie los mensajes entrantes con el activo y la configuración correctos

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico entrante en un endpoint compartido para flota y usa detección automatizada para identificar el protocolo del rastreador y parsear los datos entrantes. Para la mayoría de las integraciones, el dispositivo solo necesita apuntar al endpoint de Plaspy y la plataforma aplicará el manejo correcto sin selección manual del protocolo.

- Plaspy escucha en un único endpoint de servidor compartido, de modo que las conexiones del S-4753 se enrutan a una canalización común de ingestión
- Cuando el dispositivo está configurado para reportar al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador
- Generalmente no es necesario que el usuario seleccione un protocolo dentro de Plaspy si el equipo está correctamente configurado para reportar al endpoint
- Una identificación correcta del dispositivo y la configuración del APN en el equipo aseguran que la detección automática funcione
- Si surgen problemas, revisar la configuración de reporte del dispositivo y la versión de firmware es un primer paso práctico antes de cambiar la configuración del servidor

## Contexto de transporte y conexión

El S-4753 soporta transporte IP y puede configurarse para usar UDP o TCP según el firmware del equipo y la preferencia del integrador. Plaspy expone públicamente un único destino de conexión que los dispositivos pueden usar para reportar telemetría y la plataforma utiliza el mismo puerto para todos los equipos soportados.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138 y el puerto compartido es 8888
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y requisitos de red
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la provisión de equipos y las reglas de firewall
- Al configurar el S-4753, establezca el APN, el enrutamiento de SIM y el objetivo de reporting hacia el endpoint de Plaspy para asegurar que los mensajes lleguen a la plataforma

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el cronograma de mensajes, los campos disponibles y las opciones de transporte, por lo que es importante verificar el firmware antes de despliegues masivos
- Las revisiones de hardware y accesorios opcionales como antenas externas o adaptadores CAN pueden modificar qué canales de telemetría están disponibles
- Las herramientas de gestión remota del fabricante pueden variar los flujos de configuración, por lo que confirme los procedimientos actuales con los recursos oficiales de Navtelekom
- El comportamiento de dual SIM y los tiempos de conmutación afectan la latencia de entrega y deben validarse en su entorno de red
- La elección de transporte TCP versus UDP puede influir en la fiabilidad y en la travesía de NAT según redes celulares y configuraciones de operador
- Siempre valide ajustes clave como APN, intervalo de reporte y objetivo del servidor al instalar los equipos

## Por qué es importante entender el protocolo

Comprender cómo el S-4753 se comunica con Plaspy ayuda a garantizar reportes fiables, un mapeo de telemetría preciso y una resolución de problemas eficiente durante la puesta en marcha y la operación. Familiarizarse con el contexto de comunicación reduce el tiempo de integración y mejora la confianza operativa.

- Configuración más rápida al saber qué ajustes del equipo deben configurarse para reportar a Plaspy
- Resolución de problemas más efectiva cuando faltan o llegan con retraso datos de posición o CAN
- Mejor planificación de reglas de firewall y de red puesto que Plaspy utiliza un único puerto compartido
- Expectativas claras sobre los datos que la plataforma recibirá de los dos CAN y los canales de E/S
- Coordinación más sencilla con el soporte de Navtelekom cuando diferencias de firmware o hardware afectan el comportamiento

## Por qué usar Plaspy con este protocolo

Usar el Navtelekom СИГНАЛ S-4753 con Plaspy brinda a los equipos de flota visibilidad continua, telemetría detallada del vehículo y flujos de trabajo basados en eventos. El hardware S-4753 ofrece entradas CAN duales, múltiples canales de E/S, registro en tarjeta SD y conectividad celular resiliente que alimentan datos ricos a Plaspy para mapeo, alertas y análisis. Para flotas que requieren métricas a nivel de motor, flujos anti robo o retención de registros a largo plazo, combinar este rastreador con Plaspy ayuda a transformar la telemetría cruda en información operativa.

Para saber más sobre Plaspy y cómo gestiona el reporte de dispositivos visite https://www.plaspy.com. Para los últimos detalles específicos del protocolo del dispositivo, notas de firmware y herramientas de configuración consulte la documentación del fabricante en https://www.navtelecom.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
