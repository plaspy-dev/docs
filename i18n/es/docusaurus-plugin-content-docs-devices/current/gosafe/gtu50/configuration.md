---
slug: /gosafe/gtu50/configuration
id: gtu50-configuration
sidebar_label: Configuration
title: Gosafe - GTU50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Gosafe GTU50 con ajustes de servidor Plaspy y pasos prácticos para rastreo en tiempo real
keywords:
  - Configuración Gosafe GTU50
  - Instalación Gosafe GTU50
  - Gosafe GTU50 Plaspy
  - Configuración de servidor GTU50
  - Configuración de rastreo GTU50
  - Configuración rastreador GPS Gosafe
  - Integración de rastreador Plaspy
  - Configuración de rastreador vehicular
  - Instalación rastreador para gestión de flotas
  - Guía de configuración de rastreador GPS
---

# Gosafe - Configuración GTU50

Esta página ofrece el contexto público de configuración para usar el rastreador Gosafe GTU50 con Plaspy. Aquí se explican los valores de servidor de Plaspy y los pasos prácticos más comunes necesarios para apuntar un GTU50 a Plaspy, de modo que el dispositivo pueda enviar ubicación y telemetría de eventos a la plataforma. La guía se centra en los valores de servidor que Plaspy utiliza para todos los rastreadores compatibles y en las acciones típicas del fabricante requeridas para una integración exitosa.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se comunica con la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, así que siga esta página para conocer los ajustes públicos de Plaspy y el flujo de trabajo práctico, y confirme también cualquier paso específico del dispositivo en la documentación del GTU50.

## Resumen de la configuración

Configurar un GTU50 para Plaspy consiste principalmente en dirigir el rastreador al punto de conexión de Plaspy y validar la conectividad para que el dispositivo aparezca en la plataforma y transmita telemetría de forma confiable. El proceso normalmente implica usar la interfaz de configuración del fabricante o comandos SMS para ajustar la dirección del servidor, el transporte y el puerto, y luego probar que el dispositivo envía mensajes de ubicación y eventos a Plaspy.

- Apunte el dispositivo al punto de conexión y puerto de Plaspy que usan todos los dispositivos Plaspy.
- Seleccione el modo de transporte que admita el dispositivo, UDP o TCP, y guarde la configuración.
- Verifique que el dispositivo tenga una conexión celular activa y pueda alcanzar el punto de Plaspy.
- Confirme que el GTU50 reporte fijaciones GNSS y eventos como encendido o SOS en Plaspy.
- Valide en la plataforma que el rastreador sea visible y que la telemetría se procese correctamente.

## Ajustes de servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles e intentará detectar automáticamente el protocolo empleado por un rastreador.

## Requisitos típicos antes de la configuración

- Un GTU50 alimentado y correctamente cableado, instalado según las instrucciones del fabricante.
- Servicio celular activo con una SIM habilitada para datos, compatible con las bandas de red del GTU50 y provisionada para conexión a internet y SMS si es necesario.
- Acceso al método oficial de configuración de Gosafe, como la herramienta del proveedor, la aplicación móvil o el conjunto de comandos SMS.
- El IMEI del GTU50 u otro identificador del dispositivo para registro y verificación en sus registros de flota.
- Visibilidad GNSS para obtener la primera fijación de posición durante las pruebas de configuración.
- Acceso a credenciales de cuenta Plaspy o privilegios de administrador según sea necesario para verificar la presencia del dispositivo y la telemetría después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GTU50 envía su telemetría al punto de conexión compartido de Plaspy, de modo que los operadores puedan supervisar la ubicación del vehículo, los eventos y el estado casi en tiempo real. El dispositivo se configura para reportar a la dirección y puerto de Plaspy y utiliza el transporte elegido para enviar mensajes de rastreo y eventos a la plataforma.

- El rastreador se configura para reportar a d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.
- El GTU50 puede usar UDP o TCP como transporte cuando usted selecciona la opción correspondiente en el dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos, por lo que la selección manual del protocolo en el servidor es opcional.
- Las actualizaciones de ubicación, eventos de encendido y SOS, y los registros almacenados se reenviarán a Plaspy para su procesamiento y visualización.
- Tras establecer la conectividad, verifique que la telemetría aparezca en los paneles de Plaspy y que las notificaciones de eventos se entreguen como se espera.

## Flujo de trabajo común para la configuración

1. Acceda al método o software oficial de configuración de Gosafe para el GTU50 (herramienta del fabricante, app móvil o comandos SMS).
2. Localice las opciones de servidor o reporte remoto en la configuración del dispositivo.
3. Ingrese el punto de conexión de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138.
4. Configure el puerto en 8888 según lo exige Plaspy.
5. Seleccione UDP o TCP si el GTU50 solicita elegir un transporte; Plaspy admite ambos.
6. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que los ajustes se escribieron.
7. Reinicie el dispositivo si la herramienta de configuración o el firmware del GTU50 requieren un reinicio para aplicar los cambios.
8. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y la telemetría reciente en la plataforma Plaspy.

## Ejemplos de comandos de configuración

La configuración y los comandos del modelo GTU50 pueden variar según el firmware y la herramienta de configuración del fabricante. Dado que el GTU50 admite múltiples métodos de configuración (herramienta de escritorio, app móvil y comandos SMS), la sintaxis exacta de comandos o los pasos de la interfaz dependen de la versión que esté utilizando. En todos los casos, asegúrese de que el dispositivo esté configurado para usar el punto de Plaspy d.plaspy.com o la IP 54.85.159.138 y el puerto 8888, y seleccione UDP o TCP si la interfaz del dispositivo lo requiere.

Si cuenta con comandos SMS proporcionados por el proveedor o un script de configuración de Gosafe, utilice esas herramientas para establecer:
- Servidor a d.plaspy.com o 54.85.159.138
- Puerto 8888
- Transporte a UDP o TCP

Consulte el documento de configuración oficial de Gosafe o la herramienta del instalador para la sintaxis precisa de comandos según su firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres exactos de los menús, la sintaxis de los comandos o los pasos en la herramienta de configuración de Gosafe; revise siempre las notas de la versión del firmware.
- La elección entre TCP o UDP suele depender de la preferencia del instalador y del comportamiento de la red; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Algunas unidades GTU50 se pueden configurar mediante comandos SMS además del software de configuración; los pasos y formatos de SMS son específicos del proveedor.
- Todos los dispositivos Plaspy usan el mismo puerto 8888, por lo que no necesita mapear puertos por dispositivo en el servidor.
- Después de aplicar cambios es buena práctica reiniciar el rastreador y confirmar una conexión nueva a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el GTU50 con Plaspy ofrece una forma sencilla de recopilar datos de ubicación y eventos en tiempo real para la gestión de flotas, recuperación de vehículos robados, telemática para seguros y control de alquileres o inventarios. Apuntar el GTU50 al punto de conexión compartido de Plaspy simplifica el despliegue porque Plaspy utiliza ajustes de servidor consistentes y detección automática de protocolos en los dispositivos compatibles.

Para obtener más información sobre Plaspy y cómo maneja los datos de los dispositivos e integraciones visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y referencia de comandos del fabricante, consulte el sitio de Gosafe en https://gosafesystem.com/ para verificar que los métodos de configuración y el comportamiento coincidan con su hardware y firmware GTU50.
