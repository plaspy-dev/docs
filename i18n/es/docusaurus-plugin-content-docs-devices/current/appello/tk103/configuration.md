---
slug: /appello/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: Appello - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Appello TK103 con Plaspy, mostrando ajustes de servidor y flujo de configuración
keywords:
  - Configuración Appello TK103
  - Instalación Appello TK103
  - Configuración TK103 Plaspy
  - Configuración servidor TK103
  - Configuración rastreador GPS Appello
  - Configuración seguimiento de vehículos
  - Configuración plataforma de seguimiento
  - Configuración rastreador Plaspy
  - Configuración GPS TK103
  - Configuración rastreo de flotas
---

# Appello — Configuración del TK103

Esta página describe el contexto público de configuración para usar el rastreador Appello TK103 con Plaspy. Explica los ajustes del servidor y los pasos generales que deberá aplicar en el dispositivo o mediante las herramientas del fabricante para apuntar el equipo a Plaspy y obtener visibilidad en tiempo real y monitoreo de flotas.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y el método de configuración que provea el vendedor; por eso esta guía se centra en los valores públicos que necesita y en un flujo de trabajo seguro y de alto nivel.

## Resumen de la configuración

Preparar un TK103 para trabajar con Plaspy implica configurar el rastreador para que envíe sus posiciones y actualizaciones de estado al endpoint compartido de Plaspy y verificar que el dispositivo se conecte y reporte correctamente. El objetivo es asegurar que el equipo comunique de forma fiable a través de la red móvil y aparezca en la plataforma Plaspy.

- Configure el dispositivo para reportar a Plaspy usando el endpoint público y el puerto.
- Verifique que el equipo tenga una conexión de red móvil válida y, si aplica, los ajustes del operador.
- Seleccione el tipo de transporte que soporte el rastreador y apúntelo al puerto de Plaspy.
- Aplique los ajustes mediante el método del fabricante y guarde la configuración.
- Valide la conectividad para que el rastreador sea visible y esté reportando en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para configuración basada en DNS o referencia.
- IP del servidor: 54.85.159.138 como la dirección numérica que acepta Plaspy.
- Puerto: 8888 que Plaspy utiliza para todos los dispositivos soportados.
- Transporte: soporte para UDP o TCP según requisito y preferencia del dispositivo.
- Detección automática de protocolo en Plaspy, de modo que la plataforma identificará el protocolo del rastreador cuando se conecte.

## Requisitos típicos antes de la configuración

- Una unidad TK103 encendida y accesible con batería suficiente o alimentación del vehículo para realizar la configuración.
- Conexión a la red móvil operativa y compatible con el dispositivo para que pueda alcanzar el servidor de Plaspy.
- Acceso al método oficial de configuración del fabricante, como la app del vendedor, herramienta web o la facility de comandos SMS.
- Conocimiento del APN de su operador móvil si el dispositivo requiere datos específicos del operador para GPRS.
- Una forma de confirmar el identificador del equipo para poder asociar la unidad en Plaspy una vez que reporte.

## Cómo se conecta este rastreador a Plaspy

El TK103 se configura para enviar sus datos de ubicación y estado al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo apunte a d.plaspy.com o a la IP proporcionada y se seleccione el transporte, Plaspy recibirá el tráfico del equipo y mapeará automáticamente el protocolo correcto.

- El dispositivo transmite actualizaciones de posición al endpoint de Plaspy en el puerto 8888.
- Puede configurar el rastreador usando el método proporcionado por el fabricante para apuntar a d.plaspy.com o a 54.85.159.138.
- Seleccione UDP o TCP en el dispositivo si se solicita; Plaspy soporta ambos transportes.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes en consecuencia.
- Tras una conexión exitosa, el rastreador será visible en Plaspy para monitoreo y supervisión operativa.

## Flujo de trabajo común de configuración

1. Acceda al método o software de configuración oficial del fabricante para el TK103, como la documentación del vendedor, una app de configuración o comandos SMS.
2. Ingrese d.plaspy.com o la dirección numérica 54.85.159.138 como destino del servidor en la configuración del dispositivo.
3. Ajuste el puerto del servidor a 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el rastreador requiere la selección de un transporte.
5. Guarde o aplique la configuración mediante la herramienta o el método del fabricante.
6. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad y el estado en la plataforma Plaspy.

## Notas de configuración

- Los métodos de configuración del fabricante varían según el firmware y la revisión de hardware; siga la documentación del proveedor para pasos específicos del método.
- Si el TK103 admite configuración vía SMS, puede resumir o seguir las instrucciones del vendedor para aplicar los ajustes de servidor y operador sin copiar sintaxis de comando cruda.
- TCP y UDP se comportan de forma diferente en redes móviles; elija el transporte que mejor funcione en su entorno y verifique la conectividad.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador en la primera conexión.
- Mantenga control sobre las variaciones de firmware y de mercado que puedan cambiar las opciones de configuración disponibles y los comandos soportados.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Appello TK103 ofrece una forma sencilla de centralizar los datos de rastreo de vehículos y activos. Al dirigir el TK103 al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen visibilidad centralizada, reportes de eventos y monitoreo operativo sin la complejidad de servidores por dispositivo.

Para saber más sobre Plaspy y cómo soporta rastreadores GPS como el TK103, visite https://www.plaspy.com. Los métodos de configuración del fabricante, el comportamiento del firmware y los detalles del dispositivo pueden cambiar con el tiempo, por lo que verifique la documentación y las instrucciones más recientes del fabricante en http://www.cnjeo.com/ antes de aplicar cambios.
