---
slug: /aplicom/a9_ipex_pro/configuration
id: a9_ipex_pro-configuration
sidebar_label: Configuration
title: Aplicom - A9 IPEX PRO Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Aplicom A9 IPEX PRO con Plaspy, incluyendo ajustes del servidor y flujo de trabajo
keywords:
  - configuración Aplicom A9 IPEX PRO
  - configuración Aplicom A9 para Plaspy
  - configuración servidor A9 IPEX PRO
  - configuración rastreador GPS A9 IPEX PRO
  - configuración telemática Aplicom
  - incorporación de dispositivos Plaspy
  - configuración seguimiento de remolques
  - configuración telemática de flotas
  - configuración rastreador GPS industrial
  - configuración serie A de Aplicom
---

# Aplicom - Configuración del A9 IPEX PRO

Esta página describe el contexto público de configuración para usar el Aplicom A9 IPEX PRO con Plaspy. Resume los ajustes de servidor compartidos que Plaspy espera, los requisitos habituales antes del despliegue y un flujo de trabajo general para aplicar esos valores con las herramientas de configuración de Aplicom o los métodos del proveedor. Use esta guía para alinear la configuración del dispositivo con Plaspy y lograr que el rastreador envíe telemetría y su ubicación a su instancia de la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración provistas por Aplicom o su proveedor. Esta página se centra en los valores públicos del servidor de Plaspy y en las acciones generales para preparar el A9 IPEX PRO y garantizar conectividad y visibilidad fiables dentro de Plaspy.

## Resumen de configuración

El objetivo al configurar un A9 IPEX PRO para Plaspy es apuntar el equipo al endpoint del servidor de Plaspy, confirmar la alcanzabilidad en red y verificar que la telemetría y la posición aparezcan en su cuenta de Plaspy. Los pasos que siguen se enfocan en establecer la conectividad entre el dispositivo y el backend y en asegurarse de que el dispositivo sea visible y reporte correctamente.

- Configure el dispositivo para que reporte al endpoint compartido de Plaspy y así la ubicación y la telemetría lleguen a la plataforma.
- Valide la conectividad celular y la alimentación por batería o externa para asegurar reportes continuos.
- Aplique firmware y utilice las herramientas del fabricante para habilitar canales de telemetría necesarios, como CAN o monitoreo de entradas.
- Confirme que el dispositivo se registra correctamente y aparece en Plaspy con datos recientes o en tiempo real.
- Verifique el reporte de eventos y diagnósticos básicos para que las alertas operativas y la supervisión funcionen.

## Ajustes del servidor Plaspy

Al configurar el Aplicom A9 IPEX PRO para Plaspy, use los siguientes ajustes públicos de servidor de Plaspy como destino de los reportes del equipo:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se usa el mismo puerto en los dispositivos compatibles

Estos son los valores públicos que Plaspy proporciona para el envío de reportes. El A9 IPEX PRO debe apuntar a alguna de las formas de dirección anteriores y utilizar el puerto 8888 con la opción de transporte adecuada.

## Requisitos habituales antes de la configuración

- Una unidad A9 IPEX PRO alimentada, con batería interna cargada o conectada a alimentación externa para la configuración y las pruebas iniciales
- Conectividad celular activa compatible con el hardware del dispositivo y las bandas regionales suministradas por Aplicom
- Acceso a las herramientas de configuración de Aplicom o al método oficial del fabricante para cambiar ajustes de servidor y transporte
- Firmware actualizado siempre que sea posible para garantizar reportes estables y compatibilidad con la detección backend
- Cuenta de Plaspy o acceso administrativo para registrar y monitorear el dispositivo una vez que empiece a reportar
- Acceso físico o del instalador al cableado y a las E/S si alguna telemetría requiere habilitación durante la instalación

## Cómo se conecta este rastreador a Plaspy

El Aplicom A9 IPEX PRO transmite posiciones GNSS y telemetría al backend de Plaspy enviando reportes al endpoint y puerto compartidos de Plaspy. Plaspy recibe actualizaciones de ubicación, datos CAN y E/S, y mensajes basados en eventos para que los dispositivos aparezcan en los paneles y en los flujos de alertas.

- El dispositivo se configura para enviar reportes al dominio o IP del servidor de Plaspy usando el puerto compartido 8888
- Los reportes se envían mediante el transporte seleccionado UDP o TCP según la configuración del equipo
- Plaspy detecta automáticamente el protocolo del dispositivo cuando llegan datos al puerto compartido y asocia los reportes al equipo
- La telemetría como datos CAN, estados de entradas y mensajes de eventos se reenvía a Plaspy para diagnóstico y monitoreo cuando esos canales están habilitados en el dispositivo
- La integración exitosa permite seguimiento en tiempo real, visibilidad de eventos y reproducción histórica dentro de Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Aplicom o al software proporcionado por el fabricante o su distribuidor autorizado.
2. Introduzca el endpoint del servidor Plaspy, ya sea el dominio d.plaspy.com o la IP del servidor 54.85.159.138, según lo que acepte la interfaz de configuración.
3. Establezca el puerto de destino en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere una selección específica.
5. Guarde o aplique la configuración usando la herramienta de Aplicom y, si está disponible, propague los cambios por aire (OTA) o mediante el canal de gestión del dispositivo.
6. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo y la telemetría reciente dentro de su cuenta o consola de gestión de Plaspy.

## Notas de configuración

- Las variantes de firmware pueden cambiar los menús de configuración y las opciones disponibles, por lo que confirme la versión de firmware del dispositivo antes de seguir una ruta de configuración específica.
- Las herramientas de instalador y de proveedor pueden ofrecer opciones para ingresar dominio o IP; puede usar d.plaspy.com o 54.85.159.138 según lo que acepte la herramienta de Aplicom.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y realiza la detección automática del protocolo cuando recibe mensajes.
- Elija TCP o UDP según el soporte del dispositivo y los requisitos de la instalación; algunos entornos prefieren un transporte por su fiabilidad mientras que otros prefieren la menor sobrecarga de UDP.
- Consulte las herramientas de Aplicom para flujos de configuración remota y OTA en lugar de intentar modificaciones directas no soportadas.

## Por qué usar Plaspy con esta configuración

Usar el Aplicom A9 IPEX PRO con Plaspy ofrece una vía simple para integrar equipos resistentes de campo en una plataforma unificada de monitoreo de flota y activos. El hardware A9 IPEX PRO está diseñado para entornos exigentes y, junto con Plaspy, permite seguimiento de ubicación en vivo, captura de telemetría desde CAN y E/S, y monitoreo por eventos para supervisión operativa.

Para saber más sobre Plaspy y cómo admite integraciones de dispositivos como el Aplicom A9 IPEX PRO visite https://www.plaspy.com. Para obtener las instrucciones de configuración específicas más recientes, detalles de firmware y documentación del producto, confirme la información actual en el sitio del fabricante https://www.aplicom.com/ ya que el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo.
