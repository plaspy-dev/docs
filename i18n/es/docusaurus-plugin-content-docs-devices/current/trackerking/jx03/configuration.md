---
slug: /trackerking/jx03/configuration
id: jx03-configuration
sidebar_label: Configuration
title: TrackerKing - JX03 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TrackerKing JX03, compatibilidad con Plaspy y ajustes de servidor necesarios
keywords:
  - Configuración TrackerKing JX03
  - Configuración JX03
  - TrackerKing JX03 Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador OBDII
  - Configuración seguimiento de vehículos
  - Configuración servidor Plaspy
  - Configuración plataforma GPS
  - Software de seguimiento JX03
  - Rastreador OBD TrackerKing
---

# TrackerKing - Configuración del JX03

Esta página reúne la información pública necesaria para configurar el TrackerKing JX03 con Plaspy. Aquí encontrará los ajustes de servidor y las indicaciones prácticas que necesita para apuntar un JX03 a Plaspy y así obtener monitoreo centralizado, ubicación en tiempo real e informes de eventos. Las instrucciones se centran en el endpoint compartido de Plaspy y en qué revisar antes de completar el registro y la validación del dispositivo.

Plaspy usa ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que TrackerKing incluya con el JX03. Use esta guía para preparar el rastreador y a su equipo de instalación para la integración, y consulte la documentación de TrackerKing para menús y comandos específicos del dispositivo.

## Resumen de la configuración

Preparar un JX03 para Plaspy implica configurar el rastreador para que envíe sus mensajes de seguimiento estándar al endpoint de Plaspy y confirmar que los datos llegan y son procesados por la plataforma. El JX03 es una unidad alimentada por OBDII que comunica a través de la red 2G; los pasos de configuración se centran en establecer el endpoint correcto, el transporte y en asegurarse de la conectividad celular.

- Apuntar el dispositivo al endpoint de Plaspy para que los mensajes de ubicación y eventos lleguen a la plataforma.
- Seleccionar el protocolo de transporte (UDP o TCP) en el dispositivo cuando sea necesario y fijar el puerto compartido de Plaspy.
- Verificar que el vehículo suministre energía por el puerto OBDII y que el dispositivo tenga una SIM funcional y cobertura de red.
- Guardar o aplicar la configuración del fabricante y, si es necesario, reiniciar el rastreador para que los cambios surtan efecto.
- Confirmar que el rastreador aparece en Plaspy y que las actualizaciones en vivo y los informes básicos de eventos (geocerca, exceso de velocidad, manipulación) sean visibles.
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y que la detección del protocolo es automática en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos son los valores públicos del endpoint de Plaspy que debe utilizar al configurar el JX03 para que los mensajes lleguen a la plataforma Plaspy.

## Requisitos habituales antes de la instalación

- Vehículo disponible con un puerto OBDII operativo para alimentar el JX03.
- Cobertura 2G GSM activa en la ubicación del vehículo para la transmisión de datos móviles.
- Tarjeta SIM y plan de servicio válidos que permitan datos o reportes por paquetes en 2G.
- Acceso al método de configuración oficial de TrackerKing o al software proporcionado por el fabricante.
- Una cuenta de prueba o acceso a Plaspy donde pueda verificar que el dispositivo aparece y reporta después de la configuración.
- Herramientas básicas para revisar registros del dispositivo o indicadores LED si el rastreador las incluye, para la resolución de problemas de conectividad.

## Cómo se conecta este rastreador a Plaspy

El JX03 envía su posición GPS y mensajes de estado/eventos a través de la red celular al endpoint de Plaspy. Cuando se configura con los ajustes compartidos de Plaspy, la telemetría del rastreador se enruta a los servidores de Plaspy, donde la plataforma reconoce automáticamente el protocolo entrante y asocia los mensajes con el registro del dispositivo.

- El rastreador envía actualizaciones de ubicación y notificaciones de eventos a d.plaspy.com (o a la IP indicada) en el puerto 8888.
- Puede seleccionar UDP o TCP como transporte en el dispositivo; Plaspy acepta ambos transportes en el puerto compartido.
- Plaspy detecta automáticamente el protocolo JX03 y procesa los mensajes de seguimiento estándar para su visualización.
- Tipos de eventos como geocerca, exceso de velocidad, manipulación y alertas por vibración se reenvían a Plaspy para las notificaciones en la plataforma.
- Una vez que el reporte funciona correctamente, el dispositivo se mostrará en los paneles de Plaspy para monitoreo en vivo y reproducción del historial de rutas.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de TrackerKing o al software provisto con el JX03.
2. Introduzca la dirección del servidor de Plaspy estableciendo d.plaspy.com o 54.85.159.138 como endpoint del dispositivo.
3. Configure el puerto del servidor del dispositivo en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP como transporte si el dispositivo exige seleccionar el transporte.
5. Aplique o guarde la configuración en la herramienta de TrackerKing o en la interfaz del dispositivo.
6. Reinicie el rastreador si el fabricante lo requiere para que los nuevos ajustes se activen.
7. Valide que el JX03 reporte a Plaspy confirmando la presencia del dispositivo y las actualizaciones en vivo en la plataforma.

Siga estos pasos con la herramienta de TrackerKing correspondiente a su versión de firmware y revisión de hardware; algunos proveedores ofrecen SMS, software de escritorio o herramientas móviles para ejecutar estos pasos.

## Comandos de configuración de ejemplo

El modelo JX03 no incluye cadenas de comando públicas en esta página. Los formatos exactos de los comandos y los canales de configuración disponibles varían según el firmware de TrackerKing y las herramientas del proveedor. En la práctica usted hará una de las siguientes acciones:

- Usar la aplicación oficial de configuración de TrackerKing o el software de escritorio para introducir d.plaspy.com (o 54.85.159.138) y el puerto 8888 y elegir UDP o TCP, o
- Utilizar el conjunto de comandos documentado por el fabricante si TrackerKing ofrece comandos por SMS o consola para la configuración del dispositivo.

Siga siempre la sintaxis de comandos publicada por TrackerKing para su versión exacta de firmware. Si dispone de una lista de comandos de TrackerKing proporcionada por el fabricante, aplique los valores de servidor d.plaspy.com o 54.85.159.138 y el puerto 8888 tal como se muestra en sus ejemplos.

## Notas de configuración

- Las revisiones de firmware y hardware del dispositivo pueden cambiar los menús de configuración disponibles y la sintaxis de los comandos; verifique la documentación de TrackerKing para la revisión de su dispositivo.
- Elegir TCP o UDP es una configuración del dispositivo; pruebe ambos si el rastreador los soporta y use el que ofrezca entrega más fiable en sus condiciones de red.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos, apunte el rastreador al puerto 8888 y confíe en la detección automática de protocolo de Plaspy para el parseo de mensajes.
- Valide la configuración en un vehículo de prueba antes de desplegar masivamente para confirmar la cobertura 2G, el comportamiento del APN y el reporte de eventos.
- Las herramientas y los flujos de trabajo del fabricante pueden variar por mercado y proveedor; siempre prefiera las guías oficiales de TrackerKing para pasos exactos.

## Por qué usar Plaspy con esta configuración

Utilizar el TrackerKing JX03 con Plaspy ofrece a administradores de flotas y propietarios de vehículos una vía directa hacia la visibilidad centralizada y el monitoreo de eventos. El diseño plug and play por OBDII minimiza el esfuerzo de instalación, mientras que los ajustes compartidos de servidor y la detección automática de protocolo de Plaspy facilitan la incorporación a la plataforma, permitiendo que los equipos se concentren en alertas, análisis de historial de rutas y supervisión operativa.

Para obtener más información sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, avisos de firmware y herramientas del fabricante para el JX03, verifique los detalles en el sitio de TrackerKing https://trackerking.cn/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que siempre confirme las instrucciones actuales con TrackerKing antes de un despliegue a gran escala.
