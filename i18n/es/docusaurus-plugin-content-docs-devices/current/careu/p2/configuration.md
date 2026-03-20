---
slug: /careu/p2/configuration
id: p2-configuration
sidebar_label: Configuration
title: CAREU - P2 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar CAREU P2 para usar con la configuración del servidor Plaspy y verificaciones de conexión
keywords:
- configuración CAREU P2
- instalación CAREU P2
- CAREU P2 Plaspy
- configuración rastreador GPS P2
- configuración servidor Plaspy
- configuración rastreador CAREU
- guía configuración rastreador GPS
- configuración plataforma P2
- configuración servidor CAREU P2
- configuración rastreador personal
---

# CAREU - Configuración P2

Esta página describe el contexto público de configuración para usar el rastreador personal GPS CAREU P2 con la plataforma Plaspy. Resume los ajustes de servidor compartidos y las consideraciones prácticas que necesitará para apuntar un dispositivo P2 a Plaspy para el reporte de ubicación y la visibilidad de eventos. Las indicaciones aquí están pensadas para técnicos e integradores que preparan el dispositivo para su visibilidad en la nube usando los endpoints públicos de Plaspy.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta. Los pasos exactos en el equipo del fabricante para el CAREU P2 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como lista de verificación práctica y verifique los comandos y menús específicos del dispositivo según la documentación oficial de CAREU.

## Resumen de la configuración

Este proceso prepara un CAREU P2 para comunicarse de forma confiable con Plaspy, de modo que las actualizaciones de ubicación, alertas SOS y mensajes de estado sean visibles en la plataforma. El objetivo es apuntar el dispositivo al endpoint de Plaspy, seleccionar el transporte correcto y confirmar que los reportes llegan a la plataforma.

- Proporcionar el endpoint y puerto del servidor Plaspy para que el rastreador sepa dónde enviar los reportes
- Seleccionar UDP o TCP según lo requiera el firmware del dispositivo
- Verificar la conectividad de la SIM y que el dispositivo pueda establecer una sesión de datos
- Aplicar y guardar la configuración en el CAREU P2 usando la herramienta de configuración del fabricante
- Confirmar que el dispositivo aparece en línea en Plaspy y que se entregan reportes periódicos y alertas
- Si es necesario, reiniciar el rastreador para asegurar que los nuevos ajustes entren en vigor

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que se utiliza el puerto 8888 de forma consistente en los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un dispositivo CAREU P2 con batería cargada o conectado a alimentación temporal para la configuración
- Una tarjeta SIM activa con un plan de datos compatible con la radio 3G o 2G del rastreador si se requiere conectividad celular
- Acceso al método o software oficial de configuración CAREU proporcionado por el fabricante o el distribuidor
- Acceso de red para validar que el rastreador puede alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888
- Conocimiento de cualquier credencial a nivel de dispositivo o contraseña de configuración requerida por la interfaz del fabricante
- Acceso a Plaspy para confirmar que el dispositivo se registra y reporta tras la configuración

## Cómo se conecta este rastreador a Plaspy

El CAREU P2 envía mensajes periódicos de ubicación y estado al endpoint del servidor Plaspy para que usted pueda monitorizar la posición, eventos SOS y la salud del dispositivo desde la plataforma. Configure el dispositivo para que apunte al endpoint compartido de Plaspy y use el transporte soportado para garantizar la llegada de los mensajes.

- Configure el rastreador para enviar datos a d.plaspy.com o a 54.85.159.138 si prefiere usar una IP
- Use el puerto 8888 para todas las conexiones del dispositivo para que Plaspy reciba mensajes en un puerto consistente
- Elija UDP o TCP según las opciones de configuración del P2 y las características de la red local
- El P2 reporta eventos como SOS, batería baja y movimiento al endpoint configurado de Plaspy
- Plaspy determina automáticamente el protocolo del rastreador una vez que el dispositivo se conecta al servidor

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial del CAREU P2 proporcionado por el fabricante o distribuidor
2. Inserte y active una SIM compatible y asegúrese de que el dispositivo tenga alimentación para realizar la configuración
3. Ingrese la dirección del servidor Plaspy ya sea como d.plaspy.com o como 54.85.159.138 según la interfaz de configuración
4. Establezca el puerto del dispositivo en 8888, que es el puerto compartido usado por Plaspy para todos los dispositivos
5. Seleccione UDP o TCP si la configuración del dispositivo requiere elegir un protocolo de transporte
6. Aplique o guarde la configuración en el P2 y reinicie el rastreador si el dispositivo o la documentación requieren un reinicio
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en línea y actualizaciones de ubicación de muestra en la plataforma Plaspy

## Comandos de configuración de ejemplo

El conjunto exacto de comandos y la sintaxis para el CAREU P2 dependen de la herramienta de configuración del fabricante, la versión de firmware y el método preferido para programar el dispositivo. Algunos equipos CAREU se configuran mediante una utilidad de software, comandos SMS o una interfaz web. Utilice las instrucciones oficiales de CAREU o la herramienta del proveedor para ingresar los valores del servidor Plaspy indicados arriba.

Si su firmware CAREU P2 acepta comandos de texto o configuración por SMS, los valores públicos típicos a establecer son el dominio o la IP del servidor y el puerto 8888, además de una opción para seleccionar UDP o TCP. Conserve los marcadores de posición que requiera CAREU al ingresar APN o detalles de autenticación.

## Notas de configuración

- Las versiones de firmware y los menús de configuración varían entre las revisiones del CAREU P2; siga la guía actual del fabricante para nombres de menú y sintaxis de comandos exactos
- Si tiene la opción, TCP puede ser más confiable en redes con pérdida mientras que UDP suele ser más ligero; evalúe el entorno de red y elija en consecuencia
- La detección automática de protocolo de Plaspy reduce la necesidad de especificar un protocolo más allá de elegir UDP o TCP en el dispositivo cuando sea necesario
- Al probar, verifique los comportamientos de SOS y los reportes periódicos para confirmar que las alertas y los mensajes de estado aparecen en Plaspy
- Las funciones opcionales como la estación de carga y Bluetooth son periféricas a la configuración del servidor pero pueden afectar la disponibilidad del dispositivo y el reporte de batería cuando se usan

## Por qué usar Plaspy con esta configuración

Configurar el CAREU P2 para reportar a Plaspy brinda a organizaciones y cuidadores visibilidad continua de la ubicación, eventos SOS y el estado del dispositivo usando un endpoint de servidor único y consistente. El uso de ajustes compartidos de Plaspy simplifica la integración entre múltiples dispositivos porque se emplean los mismos valores de servidor y puerto, y Plaspy detecta automáticamente el protocolo del dispositivo cuando se establece la conexión.

Learn more about Plaspy and the platform capabilities at https://www.plaspy.com. For the most current device specific setup details, firmware notes, and manufacturer instructions, verify information with CAREU s official resources at https://www.systech-iot.com/ as manufacturer methods and firmware behavior can change over time.
