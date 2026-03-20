---
slug: /aoya/t9h/configuration
id: t9h-configuration
sidebar_label: Configuration
title: AoYa - T9H Configuration
sidebar_class_name: menu_item_tracker
description: Configure el AoYa T9H para usarlo con Plaspy mediante ajustes de servidor público y guía práctica de instalación
keywords:
  - configuración AoYa T9H
  - instalación AoYa T9H
  - AoYa T9H Plaspy
  - configuración rastreador AoYa
  - configuración rastreador GPS T9H
  - configuración servidor AoYa T9H
  - compatibilidad rastreadores Plaspy
  - configuración plataforma GPS AoYa T9H
  - seguimiento vehicular AoYa T9H
  - configuración rastreador de activos T9H
---

# AoYa - Configuración del T9H

Esta página explica el contexto de configuración pública para usar el AoYa T9H con la plataforma de rastreo Plaspy. Describe los ajustes de servidor compartidos que Plaspy espera y resume las indicaciones generales de instalación basadas en la documentación pública del T9H y en los procedimientos habituales del fabricante. Use esta guía para entender qué debe aplicarse en el equipo antes de añadir el T9H a una cuenta de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos para configurar el equipo en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El T9H soporta reporte por GPRS y puede configurarse mediante métodos del fabricante, incluyendo comandos por SMS o utilidades de configuración; esta página resume los pasos públicos que normalmente se usan para apuntar el equipo a Plaspy y recomienda consultar la documentación oficial de AoYa para la sintaxis exacta de los comandos según el dispositivo.

## Resumen de configuración

El objetivo de la configuración es preparar el T9H para que envíe datos de ubicación y estado de forma confiable a Plaspy y así el dispositivo aparezca y se actualice en la plataforma. Esto implica aplicar ajustes de red, apuntar el rastreador a los puntos finales del servidor de Plaspy, escoger el tipo de transporte compatible con el equipo y confirmar la conexión desde la plataforma.

- Configure el equipo para que reporte al endpoint del servidor Plaspy y así la plataforma pueda recibir las actualizaciones de ubicación.
- Ajuste parámetros de conectividad como el APN del operador y la operación GPRS para que el rastreador pueda transmitir por la red celular.
- Seleccione el modo de transporte (UDP o TCP) cuando el rastreador requiera una elección explícita.
- Valide la conectividad y que el dispositivo aparezca en Plaspy después de aplicar los ajustes.
- Use los canales de configuración del fabricante (para el T9H esto comúnmente incluye SMS o software del proveedor) para aplicar los cambios.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el dispositivo T9H:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar cualquiera de los dos
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que el puerto 8888 es el valor común a aplicar.

## Requisitos típicos antes de la configuración

- Confirme que el T9H tenga la batería cargada y esté alimentado para la configuración y las pruebas.
- Asegúrese de que el equipo tenga una SIM celular activa con datos habilitados y que conozca el APN del operador.
- Acceso al método de configuración oficial de AoYa, como los comandos SMS del fabricante o su herramienta de configuración, para aplicar los ajustes.
- Un entorno de prueba o una ubicación temporal donde el dispositivo pueda obtener fixes GPS y conectividad celular.
- Credenciales y acceso a la cuenta de Plaspy para validar la visibilidad del dispositivo tras la configuración.
- Conocimiento de la versión de firmware del equipo y de cualquier nota del proveedor que pueda afectar la sintaxis de los comandos o las funciones soportadas.

## Cómo se conecta este rastreador a Plaspy

El AoYa T9H se configura para enviar información de ubicación y del dispositivo a Plaspy usando el endpoint y el puerto compartidos. Plaspy recibe la conexión entrante e identifica automáticamente el protocolo del rastreador, por lo que los equipos pueden mostrarse en la plataforma sin que usted tenga que seleccionar manualmente el protocolo en Plaspy.

- El rastreador envía sus datos de reporte al endpoint y puerto de Plaspy definidos más arriba.
- Las comunicaciones del equipo usan datos GPRS a través de la red celular y pueden transportarse por TCP o UDP según la configuración.
- Plaspy realiza una detección automática del protocolo sobre los datos entrantes para interpretar los mensajes del rastreador.
- Una vez establecido el reporte, Plaspy muestra la posición del dispositivo y su estado para monitoreo operativo y visibilidad de eventos.
- Los pasos habituales de validación confirman que los reportes periódicos y los mensajes de evento están llegando al endpoint de Plaspy.

## Flujo común de configuración

1. Acceda al método de configuración oficial del AoYa T9H o al software suministrado por el fabricante.
2. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la dirección IP 54.85.159.138 en la configuración del equipo.
3. Configure el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el rastreador requiere una selección explícita de transporte y el entorno local prefiere uno de ellos.
5. Guarde o aplique la configuración en el equipo siguiendo el procedimiento del fabricante.
6. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta o vista de la plataforma.

Si utiliza un método de configuración por SMS proporcionado por AoYa, aplique los mismos valores públicos anteriores mediante el flujo de SMS soportado sin copiar ejemplos de comandos en bruto de fuentes de terceros.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales de hardware pueden cambiar los comandos o menús disponibles; siempre confirme los pasos con las notas de firmware de su unidad.
- El T9H soporta configuración mediante los canales del fabricante; la configuración por SMS es una opción común, pero la sintaxis de los comandos varía y debe obtenerse de los materiales de AoYa.
- Elija UDP o TCP según la fiabilidad de la red y la preferencia del instalador; ambos son compatibles cuando el dispositivo está apuntado a Plaspy.
- Plaspy utiliza un único puerto compartido para simplificar los ajustes del servidor; aplique el puerto 8888 en el equipo.
- Verifique el APN y los ajustes del operador antes de intentar enviar datos; el rastreador necesita datos móviles operativos para alcanzar Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el AoYa T9H con Plaspy ofrece a las organizaciones una forma directa de centralizar datos de rastreo de dispositivos compactos con larga duración de batería. Apuntar el T9H al endpoint y puerto compartidos de Plaspy facilita la integración rápida para que las actualizaciones de ubicación y el estado del dispositivo aparezcan en la plataforma para monitoreo, generación de informes y supervisión operativa.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique los detalles de configuración específicos con AoYa en http://www.aoyagps.com/.
