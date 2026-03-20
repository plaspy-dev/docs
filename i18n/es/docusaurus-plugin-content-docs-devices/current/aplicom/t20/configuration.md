---
slug: /aplicom/t20/configuration
id: t20-configuration
sidebar_label: Configuration
title: Aplicom - T20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Aplicom T20 con Plaspy, incluye valores públicos del servidor y flujo general para conectar el rastreador
keywords:
  - Configuración Aplicom T20
  - Instalación Aplicom T20 Plaspy
  - Configuración servidor Aplicom T20
  - Configuración rastreador GPS Aplicom
  - Configuración T20 Plaspy
  - Seguimiento de flotas T20
  - Telemetría CAN T20
  - Configuración gateway telemáticos Aplicom
  - Integración rastreador GPS Plaspy
  - Seguimiento vehicular T20
---

# Aplicom - Configuración del T20

Esta página documenta el contexto público de configuración para usar el rastreador Aplicom T20 con la plataforma Plaspy. Explica qué ajustes de servidor espera Plaspy, el flujo de conexión general y los pasos principales que suelen seguir integradores e instaladores para apuntar un T20 hacia Plaspy para reportes en tiempo real de ubicación y telemetría. La información aquí se centra en la compatibilidad con Plaspy y los valores públicos necesarios para establecer la comunicación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que se utilicen. La descripción del Aplicom T20 que se presenta como base para esta guía refleja características públicas como conectividad LTE M, puertos CAN duales, E/S periféricas y las herramientas OTA y SDK de Aplicom sin reproducir comandos específicos del dispositivo ni credenciales privadas.

## Resumen de la configuración

Este proceso prepara el Aplicom T20 para reportar ubicación, diagnósticos y eventos de periféricos a Plaspy. El objetivo es apuntar el dispositivo al endpoint público de Plaspy, confirmar la conectividad y validar que la ubicación y la telemetría sean visibles en la plataforma para monitoreo e informes.

- Configure el dispositivo para enviar telemetría y actualizaciones de posición al endpoint del servidor Plaspy.
- Seleccione el método de transporte de red requerido por el dispositivo y el operador y configúrelo para usar el transporte de Plaspy.
- Verifique que el dispositivo establezca correctamente una sesión con Plaspy y que los mensajes lleguen a la plataforma.
- Confirme que los datos CAN y de periféricos estén habilitados según sea necesario para que Plaspy muestre diagnósticos del vehículo y eventos de sensores.
- Guarde la configuración aplicada y, cuando esté disponible, utilice las herramientas OTA de Aplicom para despliegues a escala de flota.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos son los valores públicos de Plaspy que debe aplicar en el dispositivo o en su herramienta de aprovisionamiento del fabricante.

## Requisitos típicos antes de la configuración

- Confirme que el Aplicom T20 dispone de alimentación y funciona según la guía de instalación del fabricante.
- Asegúrese de que el dispositivo tenga conectividad celular activa adecuada para LTE M y una suscripción activa con un operador de red.
- Acceso al método oficial de configuración de Aplicom o al software del proveedor, como las herramientas web del fabricante, utilidades SDK o el portal de gestión Silver Cloud.
- Acceso físico o capacidad de gestión remota para aplicar y guardar los ajustes en el dispositivo.
- Una cuenta Plaspy o un endpoint de integración configurado en Plaspy para que el dispositivo pueda asociarse y ser descubierto una vez comience a reportar.
- Familiaridad básica con la versión de firmware del dispositivo y cualquier nota del proveedor que afecte los flujos de configuración.

## Cómo se conecta este rastreador a Plaspy

El Aplicom T20 envía telemetría procesada, posición GNSS y eventos de periféricos a través de su enlace celular al endpoint del servidor Plaspy. La lógica en el borde disponible mediante herramientas Aplicom puede filtrar o agregar entradas CAN y de sensores antes de la transmisión, reduciendo el uso de ancho de banda y enviando solo los eventos que requiere Plaspy.

- El rastreador se configura para reportar al endpoint compartido de Plaspy y al puerto en la configuración del dispositivo.
- Los datos se envían por LTE M a Plaspy usando UDP o TCP según lo seleccione la configuración del dispositivo.
- Plaspy recibe las actualizaciones de posición y la telemetría y detecta automáticamente el protocolo del rastreador para parsear los mensajes.
- Los eventos del bus CAN y de los periféricos se transmiten como flujos de telemetría y quedan visibles para mapeo, informes y alertas en Plaspy.
- Un reporte exitoso hace que el dispositivo sea visible en Plaspy para monitoreo en vivo y flujos operativos.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de Aplicom o al software de gestión recomendado por el proveedor, como las herramientas de aprovisionamiento de dispositivos o Silver Cloud.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el dispositivo para usar el puerto 8888 que Plaspy utiliza en los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte, alineándolo con sus necesidades de red y confiabilidad.
5. Guarde o aplique la configuración usando la herramienta o portal del dispositivo y, si está disponible, despliegue el cambio vía OTA para múltiples unidades.
6. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo y la telemetría entrante en la plataforma Plaspy.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los menús de configuración y las opciones disponibles; siempre revise las notas de firmware del dispositivo antes de configurar.
- Las prácticas de instalación varían según el mercado y el tipo de vehículo, por lo que planifique pruebas y verificación en cada instalación para garantizar que las señales CAN y de periféricos estén mapeadas correctamente.
- TCP ofrece entrega orientada a conexión mientras que UDP tiene menor overhead en algunas redes; seleccione el transporte que se adapte a sus requisitos operativos y al desempeño del operador.
- Si utiliza Aplicom Silver Cloud o el SDK para configuración masiva y lógica en el borde, coordine esos cambios con sus procesos de ciclo de vida de dispositivos en Plaspy.
- Los documentos del fabricante son la fuente autorizada para campos específicos del dispositivo y funciones avanzadas que no están cubiertas en esta guía pública.

## Por qué usar Plaspy con esta configuración

Conectar el Aplicom T20 a Plaspy ofrece a las organizaciones una vía clara hacia una visibilidad unificada de ubicación y telemetría en flotas y activos móviles. La combinación de las interfaces industriales del T20 y los paneles en tiempo real de Plaspy permite a los administradores de flota monitorear la salud del vehículo, rastrear activos y reaccionar ante eventos con flujos operativos y alertas.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante consulte la documentación de Aplicom en https://www.aplicom.com/ para verificar las instrucciones de configuración actuales y las notas de compatibilidad.
