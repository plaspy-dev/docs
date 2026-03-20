---
slug: /thinkrace/at15/configuration
id: at15-configuration
sidebar_label: Configuration
title: ThinkRace - AT15 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador ThinkRace AT15 y que reporte a Plaspy usando ajustes de servidor compartidos
keywords:
  - Configuración ThinkRace AT15
  - Configuración AT15
  - Configuración servidor AT15
  - Configuración AT15 Plaspy
  - Configuración rastreador ThinkRace
  - Configuración de dispositivo Plaspy
  - Configuración rastreador de equipaje
  - Configuración rastreador GPS
  - Integración con plataforma de seguimiento
  - Configuración de reporte de ubicación
---

# ThinkRace - Configuración del AT15

Esta página describe el contexto público de configuración para usar el rastreador ThinkRace AT15 con Plaspy. Se centra en la información práctica sobre el servidor y el flujo de trabajo necesarios para apuntar un AT15 a Plaspy, de modo que el dispositivo envíe ubicaciones y aparezca en la plataforma. Los detalles aquí emplean los ajustes públicos de Plaspy y orientación general en lugar de procedimientos propietarios del fabricante.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice la guía a continuación para preparar el AT15 para Plaspy y consulte a ThinkRace cuando necesite instrucciones específicas del dispositivo.

## Resumen de la configuración

Esta configuración deja al AT15 listo para enviar datos de ubicación a Plaspy y ser visible en su cuenta. El foco está en ingresar el endpoint del servidor correcto, los ajustes de transporte y validar que el rastreador reporte correctamente a la plataforma.

- Configure el rastreador para que reporte al endpoint de Plaspy usando los ajustes de servidor compartidos.
- Seleccione el método de transporte que requiere el dispositivo y confirme que el puerto esté en 8888.
- Guarde o aplique los cambios y reinicie el rastreador si el equipo lo requiere.
- Verifique que el rastreador aparezca y transmita datos en Plaspy tras la configuración.
- Mantenga a mano la documentación del fabricante y las notas de firmware por si necesita parámetros opcionales.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores de servidor son los ajustes públicos que Plaspy utiliza para todos los dispositivos compatibles y deben ingresarse en el dispositivo o en la herramienta de configuración del fabricante donde se soliciten host y puerto.

## Requisitos típicos antes de configurar

- Un AT15 cargado y operativo, listo para configuración.
- Acceso al método de configuración oficial de ThinkRace o a la herramienta del proveedor para el AT15.
- Un dispositivo como un smartphone o laptop para ejecutar la app o la herramienta de configuración.
- Credenciales de cuenta del rastreador si la herramienta del fabricante solicita autenticación.
- Conectividad de red en su dispositivo de configuración para acceder a documentación o herramientas en línea.
- Los ajustes del servidor Plaspy listados arriba disponibles para referencia rápida.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AT15 envía su posición y estado al endpoint y puerto del servidor de Plaspy. Plaspy recibe los datos entrantes y los hace visibles en la plataforma, con detección automática de protocolo para admitir reportes por TCP o UDP.

- El rastreador se configura para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El dispositivo usa UDP o TCP según lo que acepte el firmware del AT15.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor acepta los reportes entrantes sin que sea necesario seleccionar el protocolo por dispositivo en Plaspy.
- Tras iniciar el envío de datos, Plaspy procesa los mensajes entrantes y muestra la visibilidad y la ubicación del dispositivo en la plataforma.
- Validar que el rastreador reporte correctamente confirma que está apuntado al endpoint compartido de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de ThinkRace o al software para el AT15 (aplicación móvil, herramienta del proveedor o configuración web).
2. Ubique la sección de ajustes de servidor o reporte donde se ingresan host y puerto.
3. Ingrese el host del servidor como d.plaspy.com o la IP del servidor 54.85.159.138.
4. Establezca el puerto en 8888.
5. Elija UDP o TCP si el dispositivo exige seleccionar el protocolo de transporte.
6. Aplique o guarde la configuración en el rastreador usando la herramienta del fabricante.
7. Reinicie el dispositivo si el AT15 requiere reboot para que los cambios tomen efecto.
8. Valide que el dispositivo reporte a Plaspy y aparezca en el panel de la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos y el método para aplicarlos varían según el firmware de ThinkRace y la interfaz de configuración que use. Algunos fabricantes ofrecen comandos por SMS, web o app móvil, mientras que otros usan una herramienta de escritorio. Para el AT15, consulte la documentación de ThinkRace o la herramienta de configuración que esté usando para aplicar los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888.

Si utiliza una herramienta del proveedor que acepta comandos textuales, la herramienta generalmente pedirá que rellene los campos de host y puerto con los valores anteriores. Conserve los marcadores de posición que la herramienta use para APN o credenciales según lo indique ThinkRace.

## Notas de configuración

- El firmware y las interfaces de configuración de ThinkRace pueden variar por región y fecha de producción; verifique el método aplicable a su unidad AT15.
- Si el AT15 le solicita elegir TCP o UDP, seleccione la opción que soporte su dispositivo. Plaspy detectará automáticamente el protocolo en su lado.
- Siempre guarde o aplique los cambios en la herramienta del fabricante y reinicie el rastreador cuando se le indique para asegurar que los ajustes queden activos.
- Guarde una copia de la configuración original del dispositivo por si necesita revertir cambios.
- Ante cualquier duda, consulte la documentación oficial de ThinkRace para formatos de comandos y orientación específica del AT15.

## Por qué usar Plaspy con esta configuración

Usar el AT15 con Plaspy permite a organizaciones y usuarios consolidar la visibilidad del rastreo en una sola plataforma, aprovechando ajustes de servidor compartidos que simplifican la incorporación de dispositivos. Apuntar el AT15 al endpoint de Plaspy reduce las variaciones por equipo y utiliza la detección automática de protocolo de Plaspy para aceptar reportes del rastreador.

Para saber más sobre Plaspy y cómo gestiona los dispositivos conectados visite https://www.plaspy.com. Para detalles específicos sobre la configuración del AT15, notas de firmware e instrucciones del fabricante consulte la información más reciente en https://www.thinkrace.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
