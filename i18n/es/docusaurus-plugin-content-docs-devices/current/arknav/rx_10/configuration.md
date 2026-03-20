---
slug: /arknav/rx_10/configuration
id: rx_10-configuration
sidebar_label: Configuration
title: ArkNav - RX-10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar ArkNav RX-10 con parámetros de servidor Plaspy para rastreo y telemetría de flotas
keywords:
  - Configuración ArkNav RX-10
  - Configuración RX-10
  - Configuración Plaspy RX-10
  - Configuración de servidor RX-10
  - Configuración rastreador GPS RX-10
  - Configuración rastreador vehicular ArkNav
  - Configuración rastreador Plaspy
  - Rastreo de flotas RX-10
  - Configuración de telemetría RX-10
  - Configuración software de rastreo ArkNav
---

# ArkNav - RX-10 Configuración

Esta página describe el contexto público de configuración para usar el rastreador ArkNav RX-10 con la plataforma Plaspy. Resume los valores de servidor prácticos y el flujo de trabajo que usted seguirá para apuntar un RX-10 a Plaspy, habilitando rastreo en tiempo real, telemetría e informes de eventos. La guía enfatiza los valores de servidor compartidos por Plaspy y los pasos comunes necesarios para que el dispositivo sea visible en la plataforma.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para preparar el RX-10 para Plaspy y consulte la documentación de ArkNav para detalles específicos de herramientas y firmware del dispositivo.

## Resumen de la configuración

El objetivo de la configuración es preparar el RX-10 para que se comunique de forma fiable con Plaspy y aparezca en su panel de flota. Esto incluye aplicar el endpoint y puerto del servidor Plaspy, elegir el protocolo de transporte si aplica y validar los reportes en vivo. El RX-10 soporta telemetría celular y está diseñado para instalaciones vehiculares robustas, por lo que es adecuado para reportes continuos hacia Plaspy.

- Apunte el RX-10 al endpoint del servidor Plaspy para que los datos de telemetría y ubicación se envíen.
- Configure el transporte y puerto del dispositivo para que los paquetes de datos lleguen a Plaspy a través de la red.
- Aplique y guarde las configuraciones del fabricante para que el dispositivo conserve la información del servidor.
- Valide la conectividad y confirme que el equipo aparece en Plaspy y envía actualizaciones periódicas.
- Aproveche las funciones de telemetría del RX-10, como ignición y sensores de temperatura, para mejorar los reportes en Plaspy cuando sea necesario.

## Valores del servidor Plaspy

- El dominio del servidor d.plaspy.com debe usarse como el nombre de host de destino para los datos del rastreador.
- La IP del servidor 54.85.159.138 es la dirección pública de Plaspy y puede usarse cuando se requiere una IP.
- El puerto 8888 es el puerto de escucha compartido que Plaspy usa para todos los dispositivos compatibles.
- El transporte admite UDP o TCP; elija el transporte que la herramienta de configuración de su dispositivo requiera.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que todos los dispositivos usan el mismo puerto y la plataforma identificará el protocolo al recibir los datos.

## Requisitos típicos antes de la configuración

- Verifique la alimentación y el cableado del dispositivo; confirme que el RX-10 esté operativo tras la instalación.
- Inserte una SIM celular válida con un plan de datos en la ranura de tamaño completo, ya que el RX-10 usa LTE con respaldo 2G/3G.
- Tenga acceso al método o software oficial de configuración de ArkNav y a cualquier adaptador USB o serial necesario para la configuración local.
- Asegúrese de la disponibilidad de la red, incluyendo los datos APN de su operador si el dispositivo los requiere para la conectividad de datos.
- Dispone de acceso administrativo a Plaspy para verificar que el dispositivo aparece en la plataforma tras la configuración.
- Familiarícese con los detalles de instalación del RX-10 y con los accesorios opcionales que piense usar, como relés inmovilizadores o termómetros 1-Wire.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el RX-10 envía en flujo datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy acepta conexiones entrantes en el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador para que los datos reportados se analicen y muestren en la plataforma.

- El RX-10 envía actualizaciones periódicas de ubicación y mensajes de evento por el enlace celular a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La telemetría, como estado de ignición, entradas analógicas y sondas de temperatura, puede transmitirse a Plaspy para paneles y alertas.
- Datos de eventos como violaciones de geocerca, colisiones o cambios de identificación de conductor se reenvían a Plaspy para notificaciones en tiempo real.
- Plaspy recibe datos por UDP o TCP según la selección de transporte del dispositivo y procesa el protocolo automáticamente.
- Una conexión y reporte exitosos hacen que el dispositivo aparezca en Plaspy y genere flujos de posiciones y eventos en vivo.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de ArkNav que utilice con el RX-10, como la herramienta USB, la consola serial o la utilidad de aprovisionamiento de ArkNav.
2. Ubique la opción de servidor u host remoto en la configuración del dispositivo e ingrese d.plaspy.com o 54.85.159.138 como destino.
3. Establezca el puerto en 8888, que es el que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte; seleccione el que coincida con su preferencia de instalación.
5. Proporcione cualquier APN o parámetro celular requerido para que el RX-10 establezca una conexión de datos con su operador.
6. Aplique o guarde la configuración y siga los mensajes del dispositivo para persistir los ajustes.
7. Reinicie el equipo si la herramienta ArkNav o el firmware lo requieren para activar los nuevos parámetros del servidor.
8. Valide que el RX-10 reporte a Plaspy comprobando el estado del dispositivo en su cuenta Plaspy y observando las actualizaciones de ubicación o eventos entrantes.

## Comandos de configuración de ejemplo

El ArkNav RX-10 puede configurarse usando las herramientas del fabricante o interfaces de configuración locales. Los comandos exactos y la sintaxis dependen del firmware de ArkNav y de la utilidad de aprovisionamiento en uso. Plaspy requiere que el host de destino o la IP y el puerto se establezcan con los valores públicos listados en esta página.

Si utiliza un conjunto de comandos SMS o serial proporcionado por ArkNav, consulte la documentación de ArkNav para el formato preciso de los comandos. Los procedimientos típicos del fabricante incluirán establecer el host del servidor a d.plaspy.com o 54.85.159.138 y el puerto a 8888, y luego guardar la configuración. Dado que las herramientas y el firmware del RX-10 pueden variar, siga los ejemplos facilitados por ArkNav para la sintaxis de los comandos.

## Notas de configuración

- El firmware y las utilidades de configuración de ArkNav pueden cambiar entre revisiones de hardware; consulte siempre las notas de la versión de ArkNav para instrucciones específicas del dispositivo.
- Elegir UDP frente a TCP afecta las características de entrega; UDP suele ser más ligero mientras que TCP ofrece confirmación de entrega en la capa de transporte. Plaspy acepta ambos y detecta el protocolo automáticamente.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto 8888, lo que simplifica el aprovisionamiento de flotas y reduce la variabilidad por equipo.
- Si el RX-10 admite actualizaciones por aire, aplique las actualizaciones de firmware antes del aprovisionamiento masivo para asegurar un comportamiento consistente en toda la flota.
- Mantenga un registro de los identificadores de dispositivo y de los pasos de aprovisionamiento utilizados para que los despliegues masivos puedan auditarse y repetirse de forma confiable.

## Por qué usar Plaspy con esta configuración

Usar el ArkNav RX-10 con Plaspy ofrece un camino directo hacia la visibilidad centralizada de la flota, manejo fiable de eventos y agregación de telemetría escalable. El RX-10 está diseñado para entornos exigentes y soporta múltiples entradas de telemetría que alimentan directamente a Plaspy para alertas, reportes y monitoreo operativo.

Learn more about Plaspy and how it can manage RX-10 devices at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and accessory details verify current information on the ArkNav official website https://www.arknavgps.com.tw/ as manufacturer specifications and setup steps can change over time.
