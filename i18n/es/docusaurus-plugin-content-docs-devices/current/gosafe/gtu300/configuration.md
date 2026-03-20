---
slug: /gosafe/gtu300/configuration
id: gtu300-configuration
sidebar_label: Configuration
title: Gosafe - GTU300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Gosafe GTU300 para Plaspy con ajustes de servidor, flujo de instalación y notas de integración
keywords:
  - Configuración Gosafe GTU300
  - Instalación Gosafe GTU300
  - Configuración GTU300 Plaspy
  - Configuración servidor GTU300
  - Configuración rastreador GPS Gosafe
  - Configuración rastreador Plaspy
  - Configuración seguimiento flota GTU300
  - Integración Gosafe GTU300
  - Configuración telemetría GTU300
  - Rastreador Gosafe Plaspy
---

# Gosafe - Configuración del GTU300

Esta página describe el contexto público de configuración para usar el Gosafe GTU300 con Plaspy. Resume los ajustes de servidor compartidos y los pasos prácticos necesarios para apuntar un GTU300 a Plaspy y así recibir ubicación y telemetría en tiempo real. Utilice esta guía junto con la documentación del fabricante del GTU300 y las prácticas de instalación para las conexiones específicas del equipo y las consideraciones de seguridad.

Plaspy emplea ajustes de servidor compartidos para los equipos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que utilice. El GTU300 admite múltiples transportes y mecanismos de conmutación por fallo; esta guía se centra en el endpoint público de Plaspy y en el flujo necesario para integrar el dispositivo en la plataforma.

## Resumen de la configuración

Preparar un GTU300 para su uso con Plaspy consiste principalmente en dirigir sus datos al endpoint compartido de servidor de Plaspy y validar que el rastreador alcance y reporte correctamente en la plataforma. El proceso suele implicar ingresar la dirección del servidor de Plaspy, seleccionar el transporte, asegurar conectividad celular o de respaldo y confirmar que el dispositivo aparece en Plaspy.

- Configure el dispositivo para que reporte a Plaspy indicando el endpoint y el puerto del servidor.
- Elija el transporte (UDP o TCP) si la herramienta de configuración del GTU300 lo requiere.
- Verifique la conectividad celular, la disponibilidad del SIM/eSIM y opciones de respaldo como GPRS o Wi‑Fi.
- Guarde y aplique los ajustes, luego valide que el rastreador aparece y reporta correctamente en Plaspy.
- Utilice las herramientas del fabricante o comandos SMS (cuando estén soportados) para confirmar telemetría y estado del dispositivo.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el GTU300:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto cuando los dispositivos reporten a este endpoint.

## Requisitos típicos antes de la configuración

- Acceso al método o software de configuración del fabricante Gosafe correspondiente a su build y firmware del GTU300.
- Un GTU300 instalado y con alimentación, con una SIM o eSIM válida configurada para datos cuando sea necesario.
- Conectividad celular confirmada u otras opciones de transporte de respaldo (GPRS, Wi‑Fi) disponibles para el dispositivo.
- Firmware reciente u OTA que soporte configuración remota y los transportes que planea usar.
- Credenciales y acceso a su instancia de Plaspy para validar los reportes y la visibilidad del dispositivo.
- Herramientas básicas para probar conectividad, como adaptador serial, app de configuración o un teléfono capaz de enviar SMS si el fabricante soporta aprovisionamiento por SMS.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GTU300 envía ubicación y telemetría al endpoint compartido de Plaspy para que la plataforma pueda ingerir posición, eventos y datos de sensores para paneles y reportes. Las múltiples opciones de transporte y los mecanismos de conmutación por fallo del GTU300 mejoran la continuidad del reporte ante condiciones de red variables.

- El dispositivo se apunta a d.plaspy.com (o 54.85.159.138) y al puerto 8888 para el envío de datos.
- El GTU300 puede usar UDP o TCP como transporte; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y comienza a enviar datos.
- Telemetría como posición GNSS, estado de ignición, eventos del acelerómetro e entradas de sensores externos llegan a Plaspy para su procesamiento.
- Plaspy ofrece visibilidad, notificaciones de eventos y datos históricos basados en los reportes del GTU300.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración de Gosafe apropiado para la versión de firmware y la revisión de hardware de su GTU300.
2. En los ajustes de servidor del dispositivo, ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si la configuración del dispositivo requiere elegir el transporte explícitamente.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe la configuración por el canal de aprovisionamiento soportado.
6. Reinicie o desconecte y vuelva a conectar la alimentación del GTU300 si las instrucciones del fabricante indican que esto es necesario para aplicar los ajustes.
7. Valide que el dispositivo reporta a Plaspy y aparece en su cuenta o lista de dispositivos en Plaspy.

Siga cualquier guía adicional del fabricante para desplegar el cableado, las conexiones CAN o 1‑Wire y los accesorios al integrar el GTU300 en un vehículo.

## Ejemplos de comandos de configuración

El conjunto exacto de comandos o los pasos de configuración varían según el firmware de Gosafe, la utilidad de configuración que use y si aprovisiona el dispositivo mediante software, USB, serial o SMS. Dado que los comandos y formatos difieren entre versiones de firmware y herramientas del proveedor, consulte el manual de usuario del GTU300 o la herramienta de configuración para la sintaxis exacta.

Al configurar el GTU300, normalmente ingresará la dirección del servidor Plaspy (d.plaspy.com o 54.85.159.138), el puerto 8888 y seleccionará UDP o TCP según sea necesario. La detección automática de protocolo de Plaspy se encargará de identificar el protocolo una vez que el dispositivo comience a reportar.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales de hardware pueden cambiar los métodos de configuración disponibles; verifique siempre la herramienta correcta y el nivel de firmware antes de modificar ajustes.
- Elegir TCP o UDP depende de sus necesidades operativas y del comportamiento de la red; ambos son soportados por el GTU300 y aceptados por Plaspy.
- Las configuraciones de Dual SIM o eSIM deben probarse para asegurar que el comportamiento de conmutación satisface sus requisitos de disponibilidad.
- El GTU300 soporta actualizaciones de firmware OTA; mantenga el firmware actualizado para asegurar compatibilidad y acceso a las últimas funciones de aprovisionamiento.
- Si el fabricante ofrece comandos de aprovisionamiento por SMS, úselos únicamente según la documentación y considere confirmar los cambios mediante la herramienta principal de configuración.

## Por qué usar Plaspy con esta configuración

Usar el GTU300 con Plaspy ofrece a los equipos de flota visibilidad consistente entre vehículos, reporte confiable de eventos y la capacidad de recopilar telemetría más allá de la ubicación. Las opciones de conectividad y las interfaces I/O del GTU300 permiten a las flotas enviar datos significativos de sensores y estados del vehículo a Plaspy para alertas, análisis y flujos operativos.

To learn more about how Plaspy supports device integrations and fleet management, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details, verify the latest information on the Gosafe website https://gosafesystem.com/.
