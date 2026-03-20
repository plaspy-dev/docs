---
slug: /supermate/d12/configuration
id: d12-configuration
sidebar_label: Configuration
title: Supermate - D12 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Supermate D12 con Plaspy, incluye ajustes de servidor y flujo de instalación
keywords:
  - Configuración Supermate D12
  - Instalación Supermate D12
  - Supermate D12 Plaspy
  - Configuración de servidor Supermate D12
  - Configuración GPS Supermate D12
  - Configuración de rastreo Supermate D12
  - Configuración de rastreador Supermate
  - Configuración rastreador GPS Plaspy
  - Rastreo de vehículos Supermate D12
  - Configuración de dispositivo Plaspy
---

# Supermate - Configuración D12

Esta página explica el contexto público de configuración necesario para usar el rastreador GPS Supermate D12 con la plataforma Plaspy. Incluye los ajustes de servidor compartidos a los que debe apuntar el equipo, cómo suele conectarse el dispositivo a la plataforma y las comprobaciones prácticas para validar la comunicación. La información está pensada para instaladores técnicos y administradores de flota que preparan el dispositivo para su integración con Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía debe usarse junto con la documentación oficial de Supermate para comandos y utilidades específicos del dispositivo.

## Resumen de configuración

El objetivo de la configuración es preparar el Supermate D12 para enviar datos de ubicación y eventos a Plaspy y verificar que el dispositivo sea visible en la plataforma. Esto implica actualizar el punto de conexión (endpoint) del dispositivo, confirmar los parámetros de transporte y validar el reporte en vivo tras un reinicio o un evento de prueba.

- Apuntar el D12 al servidor de Plaspy para que su telemetría llegue a la plataforma
- Seleccionar el método de transporte compatible con el dispositivo y Plaspy
- Guardar y aplicar los cambios en el dispositivo o mediante la herramienta del fabricante
- Reiniciar o activar un reporte de prueba para validar la conectividad en Plaspy
- Confirmar que el dispositivo aparece en Plaspy y reporta las actualizaciones de ubicación esperadas

## Ajustes del servidor Plaspy

Configure el D12 para reportar a los siguientes ajustes del servidor Plaspy al realizar los pasos de configuración del fabricante:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP
- detección automática de protocolo en Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y tratará de detectar automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Requisitos habituales antes de la configuración

- Confirme que el Supermate D12 tiene alimentación y funciona según la guía del fabricante
- Instale y active una SIM GSM adecuada si el dispositivo utiliza redes celulares para reportar
- Disponga del método o software de configuración oficial de Supermate utilizado para programar el dispositivo
- Sepa si el dispositivo requiere seleccionar TCP o UDP al configurar el servidor
- Verifique la cobertura de red y que la cuenta de la SIM permita datos o los mensajes necesarios para el dispositivo
- Mantenga a mano el firmware del dispositivo y la documentación del fabricante como referencia

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Supermate D12 enviará datos periódicos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión entrante y asigna el dispositivo a una cuenta o registro según el protocolo del rastreador e identificador.

- El rastreador reporta a d.plaspy.com o directamente a la IP 54.85.159.138
- Toda la comunicación apunta al puerto 8888 en el endpoint de Plaspy
- El dispositivo puede usar transporte UDP o TCP según la elección de configuración del D12
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante
- Una vez validado el reporte, el dispositivo será visible en la plataforma Plaspy para monitoreo y alertas de eventos

## Flujo de configuración común

1. Acceda al método o software de configuración oficial de Supermate recomendado por el fabricante.
2. Ingrese el valor del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en la herramienta del equipo o en la interfaz del dispositivo.
6. Reinicie el dispositivo si la herramienta o la guía del fabricante indica que es necesario.
7. Valide que el dispositivo reporta a Plaspy comprobando los datos entrantes y la visibilidad del equipo en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos o las cadenas SMS necesarias para configurar el Supermate D12 dependen de la herramienta del fabricante, la versión de firmware y el canal de configuración utilizado (software, SMS o herramienta web). Dado que los formatos de configuración del fabricante varían, consulte el manual de configuración de Supermate o la utilidad de configuración del dispositivo para la sintaxis y los ejemplos precisos. Si utiliza una app del fabricante o el método SMS, siga el conjunto de comandos oficial provisto por Supermate.

## Notas de configuración

- Las diferencias de firmware pueden modificar los formatos de comandos, los campos disponibles y la presencia de la selección de transporte; verifique el firmware del dispositivo antes de aplicar un procedimiento.
- Elija UDP o TCP según la capacidad del dispositivo; ambos transportes son aceptados por Plaspy en el puerto 8888, pero su comportamiento puede variar ligeramente según las condiciones de red.
- Si el D12 utiliza una SIM, confirme el APN y la capacidad de datos con el proveedor de la SIM para asegurar que la telemetría pueda alcanzar el servidor Plaspy.
- Guarde una copia de cualquier configuración aplicada y anote el identificador del dispositivo utilizado por el rastreador para poder ubicarlo rápidamente en Plaspy después de la configuración.
- Utilice la interfaz de configuración oficial de Supermate o el conjunto de comandos SMS para el D12 en lugar de herramientas de terceros, salvo que dicha herramienta esté validada por el proveedor.

## Por qué usar Plaspy con esta configuración

Conectar el Supermate D12 a Plaspy ofrece una forma sencilla de centralizar la visibilidad de ubicación, las alertas de eventos y la supervisión operativa de sus activos. El uso de los ajustes de servidor compartidos de Plaspy simplifica la incorporación de dispositivos y aprovecha la detección automática de protocolos de Plaspy, de modo que usted pueda gestionar una flota mixta sin variaciones por dispositivo en los servidores.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Por favor verifique los pasos específicos de configuración del dispositivo, el comportamiento del firmware y las instrucciones del fabricante en el sitio oficial de Supermate http://www.gps-summit.com/ ya que los métodos y detalles pueden cambiar con el tiempo.
