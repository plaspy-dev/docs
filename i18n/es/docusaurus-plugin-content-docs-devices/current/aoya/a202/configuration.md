---
slug: /aoya/a202/configuration
id: a202-configuration
sidebar_label: Configuration
title: AoYa - A202 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador GPS AoYa A202 para usar con Plaspy con ajustes de servidor públicos y guía práctica
keywords:
  - Configuración AoYa A202
  - Configuración A202
  - AoYa A202 Plaspy
  - Configuración rastreador GPS AoYa
  - Ajustes servidor A202
  - Configuración rastreador A202
  - Configuración dispositivo Plaspy
  - Rastreo vehicular A202
  - Gestión de flotas A202
  - Configuración plataforma A202
---

# AoYa - Configuración del A202

Esta página describe el contexto público de configuración para usar el rastreador GPS AoYa A202 con Plaspy. Se centra en los ajustes de servidor y en el flujo de configuración de alto nivel que necesita para apuntar el equipo a Plaspy, validar la conectividad y confirmar que el rastreador aparece en la plataforma. Cuando procede, esta guía resume los métodos de configuración públicos del fabricante sin reproducir comandos privados ni credenciales.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La documentación y las notas públicas del AoYa A202 indican que el dispositivo puede configurarse mediante herramientas del fabricante o comandos por SMS; aquí se resume la configuración de red y plataforma necesaria para la integración con Plaspy.

## Resumen de configuración

Para usar el AoYa A202 con Plaspy debe preparar el rastreador para que envíe datos de ubicación y estado al endpoint y puerto compartidos de Plaspy. El proceso implica configurar parámetros de red en el dispositivo, confirmar que puede alcanzar el endpoint público de Plaspy y verificar que la plataforma recibe y reconoce el rastreador.

- Configure los parámetros de red del dispositivo para que reporte al endpoint del servidor de Plaspy.
- Asegúrese de que el rastreador use el transporte y puerto requeridos para alcanzar Plaspy.
- Valide la conectividad desde el dispositivo hasta Plaspy y confirme que el rastreador aparece en la plataforma.
- Utilice el método de configuración del fabricante o la configuración por SMS para aplicar los ajustes de servidor y APN según sea necesario.
- Confirme que el dispositivo tiene la alimentación adecuada para que pueda establecer una sesión GPRS hacia Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com para configuración y reporte de dispositivos
- IP del servidor: 54.85.159.138 como opción numérica pública
- Puerto: 8888, utilizado por todos los dispositivos en Plaspy para reporte de rastreadores
- Transporte: soporte para UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos habituales antes de la configuración

- Una unidad AoYa A202 alimentada con carga de batería suficiente o alimentada externamente para la configuración y las pruebas
- Una tarjeta SIM con un plan de datos activo que permita conectividad GPRS cuando sea necesaria
- Acceso al método oficial de configuración del fabricante, como la app del proveedor, software para PC o los comandos SMS documentados
- Información del APN del operador móvil para habilitar la conectividad de datos en el dispositivo
- Conocimiento seguro de cualquier contraseña o código de acceso requerido por el método del fabricante
- Un entorno de prueba donde pueda observar los reportes del dispositivo y confirmar la llegada de datos a Plaspy

## Cómo se conecta este rastreador a Plaspy

El AoYa A202 utiliza GSM/GPRS para establecer una conexión de datos y enviar registros de rastreo a Plaspy. Una vez configurado para apuntar al endpoint y puerto de Plaspy, el dispositivo abre una sesión de datos y transmite actualizaciones de ubicación y estado por el transporte seleccionado. Plaspy recibe la conexión entrante en el puerto compartido, identifica el protocolo del dispositivo y muestra el rastreador en la plataforma.

- El rastreador se configura para reportar al dominio o a la IP de Plaspy en el puerto 8888
- Los datos pueden enviarse mediante UDP o TCP según la configuración del rastreador
- Plaspy detecta automáticamente el protocolo y procesa los datos recibidos
- Una vez que el reporte está establecido, la ubicación, el movimiento y los eventos de rastreo estándar aparecen en Plaspy
- La visibilidad en la plataforma permite la monitorización operativa y la supervisión de flotas

## Flujo de configuración típico

1. Acceda al método de configuración oficial del fabricante o al software para el AoYa A202, o use la vía de configuración por SMS documentada si está disponible.
2. Ingrese la dirección del servidor de Plaspy, usando el dominio d.plaspy.com o la IP 54.85.159.138 como endpoint de destino.
3. Configure el puerto del dispositivo en 8888 para que el rastreador reporte al puerto compartido de Plaspy.
4. Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
5. Guarde o aplique la configuración mediante la herramienta del fabricante o el método de confirmación por SMS proporcionado por AoYa.
6. Valide que el dispositivo reporte correctamente a Plaspy y que el rastreador esté visible y activo en la plataforma.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos, la ubicación de menús y el comportamiento; consulte siempre la documentación vigente del fabricante antes de realizar cambios.
- El AoYa A202 puede soportar configuración por SMS además de software del proveedor; cuando use SMS mantenga las credenciales sensibles en privado y siga la guía del fabricante en lugar de copiar comandos de terceros.
- Elija TCP o UDP según los requisitos de la instalación; TCP ofrece una sesión orientada a conexión, mientras que UDP puede emplearse donde se prefiera un reporte más ligero.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo cual simplifica la configuración de servidor y centraliza el manejo de la telemetría entrante.
- Verifique el APN del dispositivo y la conectividad con el operador móvil antes de apuntar el rastreador al endpoint de Plaspy para evitar falsos negativos durante las pruebas.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el AoYa A202 ofrece una manera sencilla de centralizar los datos de rastreo y obtener visibilidad operativa de vehículos y activos. Apuntar el rastreador a los ajustes de servidor compartidos de Plaspy minimiza la gestión por dispositivo y permite que la plataforma detecte automáticamente el protocolo, reduciendo la complejidad de configuración para flotas e instaladores.

Para saber más sobre cómo Plaspy facilita la integración de dispositivos y la monitorización de flotas, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, detalles de firmware y guía del fabricante sobre el AoYa A202, revise los recursos oficiales en http://www.aoyagps.com/ para verificar actualizaciones o cambios del proveedor.
