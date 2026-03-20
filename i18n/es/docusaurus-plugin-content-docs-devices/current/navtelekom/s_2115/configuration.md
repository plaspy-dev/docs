---
slug: /navtelekom/s_2115/configuration
id: s_2115-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2115 Configuration
sidebar_class_name: menu_item_tracker
description: Guía clara para configurar el Navtelekom СИГНАЛ S-2115 y usarlo con Plaspy para seguimiento en tiempo real
keywords:
  - Configuración Navtelekom СИГНАЛ S-2115
  - Configuración S 2115 Navtelekom
  - SIGNAL S 2115 Plaspy
  - configuración de servidor S 2115
  - configuración de rastreador GPS Navtelekom
  - configuración de software de seguimiento S 2115
  - integración de rastreadores Plaspy
  - rastreo de vehículos S 2115
  - configuración de rastreador heredado
---

# Navtelekom - СИГНАЛ S-2115 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Navtelekom СИГНАЛ S-2115 con Plaspy. Resume los valores del servidor y los pasos prácticos necesarios para preparar el equipo para la monitorización centralizada. Use esta guía junto con el manual del operador SIGNAL S-2115 y la utilidad NTC Configurator para los procedimientos específicos del dispositivo antes de incorporarlo a Plaspy.

Plaspy utiliza parámetros de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El S-2115 combina posicionamiento GLONASS y GPS con comunicaciones GSM, ofrece configuración por USB, alarmas por acelerómetro y soporta interacciones por SMS y voz para despliegues heredados.

## Resumen de configuración

Configurar el S-2115 para Plaspy implica dirigir el dispositivo para que envíe sus posiciones y eventos al punto de ingestión de Plaspy, validar la conectividad y asegurarse de que el rastreador aparezca en la flota de Plaspy. El objetivo es una entrega de telemetría fiable para que Plaspy pueda mostrar la ubicación en vivo, procesar alarmas y almacenar historial para informes.

- Establecer el endpoint de red para que el rastreador informe a Plaspy en lugar de a un servidor local o del proveedor.
- Asegurarse de que el rastreador tenga alimentación, conectividad GSM y el plan de datos de la SIM necesario para la transmisión de paquetes.
- Usar el NTC Configurator o los comandos SMS/DTMF soportados para cambiar los ajustes del servidor y guardar los parámetros.
- Validar que el dispositivo envíe correctamente arreglos GNSS y mensajes de alarma a Plaspy.
- Confirmar que el dispositivo sea visible en Plaspy y que eventos como impactos o alarmas de movimiento se reciban correctamente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Acceso al manual del operador SIGNAL S-2115 y a la utilidad NTC Configurator para configuración local por USB.
- Una unidad S-2115 instalada y alimentada con conectividad GSM y una tarjeta SIM activa o plan de datos del operador.
- Acceso local al equipo vía USB o la posibilidad de enviar comandos de configuración por SMS si el dispositivo lo admite.
- Confirmación de la versión de firmware actual y notas del proveedor para unidades archivadas o descontinuadas.
- Un vehículo de prueba o una bancada con alimentación para validar el rastreo y la entrega de alarmas antes del despliegue completo.

## Cómo se conecta este rastreador a Plaspy

El S-2115 envía posiciones GNSS y eventos del equipo a través de GSM a un endpoint de ingestión de Plaspy para que la plataforma provea seguimiento en vivo y flujos de trabajo de alertas. Configure el dispositivo para que reporte al endpoint compartido de Plaspy y use el puerto validado para que Plaspy procese los datos entrantes con su detección automática de protocolo.

- El rastreador transmite arreglos de localización satelital por GSM al endpoint del servidor Plaspy.
- Las alarmas de impacto, inclinación y movimiento generadas por el acelerómetro interno se envían a Plaspy para notificación inmediata.
- Se pueden realizar consultas remotas de estado y comandos de control sencillos desde los flujos de trabajo del operador y verificarse mediante los estados reportados.
- Configure el equipo para usar d.plaspy.com o 54.85.159.138 y puerto 8888 para que Plaspy reciba la telemetría.
- Seleccione UDP o TCP en el puerto 8888 si el dispositivo requiere una elección explícita de transporte.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software como NTC Configurator o al conjunto de comandos SMS/DTMF aprobado.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto 8888 para el parámetro de servidor del equipo. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo exige una selección de transporte al configurar el servidor.
5. Aplique o guarde la configuración en la herramienta configuradora o envíe la secuencia de comandos guardada por SMS si está soportado.
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy confirmando visibilidad y paquetes entrantes en la plataforma. Plaspy detectará automáticamente el protocolo del rastreador.

## Ejemplos de comandos de configuración

Los comandos y las secuencias exactas de configuración para el S-2115 los proporciona Navtelekom en el manual del operador y en la documentación del NTC Configurator. Las herramientas del fabricante pueden usar utilidades USB o cadenas de comandos SMS para cambiar los parámetros del servidor. Dado que el firmware y la sintaxis de comandos pueden variar, consulte la documentación oficial SIGNAL S-2115 o la ayuda del NTC Configurator para obtener los comandos precisos según su versión de firmware.

## Notas de configuración

- El S-2115 puede figurar como archivado o descontinuado en la documentación del proveedor, por lo que confirme que tiene el manual del operador y la versión del NTC Configurator que coincidan con su unidad.
- Las diferencias de firmware pueden cambiar los nombres de los parámetros y la sintaxis de los comandos SMS. Verifique siempre los comandos exactos para su versión de firmware.
- Use d.plaspy.com o 54.85.159.138 y puerto 8888 de forma consistente durante la configuración porque Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- Elija UDP o TCP según el requisito del dispositivo y las condiciones de la red. Plaspy acepta ambos transportes y detecta automáticamente el protocolo.
- Pruebe los eventos de alarma y la telemetría en un entorno controlado antes de desplegar en producción para asegurar que el comportamiento de notificación cumpla las necesidades operativas.

## Por qué usar Plaspy con esta configuración

Integrar el SIGNAL S-2115 con Plaspy permite a las organizaciones continuar usando unidades S-2115 heredadas mientras aprovechan paneles centralizados, registros históricos y flujos de trabajo de alertas. Plaspy ingiere reportes de posicionamiento y alarmas del S-2115 para que los operadores puedan monitorear flotas, recibir notificaciones de impacto y movimiento, y mantener supervisión operativa desde una sola plataforma.

Para conocer más sobre Plaspy visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, notas de firmware y manuales de operador consulte el sitio oficial de Navtelekom https://www.navtelecom.ru/ para verificar detalles actuales y garantizar la compatibilidad con su hardware y firmware S-2115.
