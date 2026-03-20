---
slug: /cantrack/g07l/configuration
id: g07l-configuration
sidebar_label: Configuration
title: CanTrack - G07L Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador CanTrack G07L para Plaspy con ajustes de servidor y pasos prácticos para seguimiento fiable de flotas
keywords:
  - Configuración CanTrack G07L
  - Instalación CanTrack G07L
  - G07L configuración Plaspy
  - Configuración de rastreador CanTrack
  - Configuración de rastreador GPS Plaspy
  - Ajustes de servidor G07L
  - Configuración de rastreador de vehículos
  - Guía de instalación G07L
  - Configuración de telemetría CanTrack
  - Seguimiento de flotas G07L
---

# CanTrack - Configuración G07L

Esta página ofrece orientación pública para configurar el rastreador GPS CanTrack G07L con la plataforma Plaspy. Resume los ajustes de servidor prácticos, los pasos habituales de puesta en marcha y el contexto de integración necesario para que el G07L envíe ubicación y estado a Plaspy y así posibilitar seguimiento en vivo, alertas e informes.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación o herramientas del proveedor; use esta guía como referencia práctica y confirme cualquier detalle específico del equipo en la documentación oficial de CanTrack.

## Resumen de configuración

El proceso prepara el G07L para enviar fijaciones GNSS, alarmas y datos de estado a Plaspy mediante datos celulares. El objetivo es apuntar el dispositivo al endpoint de ingestión de Plaspy, confirmar conectividad y validar que los reportes aparecen en la plataforma.

- Configure el dispositivo para que reporte al servidor de Plaspy, de modo que la telemetría llegue a d.plaspy.com usando el puerto compartido de Plaspy.
- Asegúrese de seleccionar el transporte correcto (UDP o TCP) si el dispositivo exige una elección explícita.
- Instale una SIM operativa y los ajustes APN correctos para que el rastreador tenga acceso a internet en LTE o con conmutación a GSM.
- Guarde y aplique la configuración, luego verifique que el dispositivo aparezca y reporte en Plaspy.
- Utilice las herramientas del fabricante (USB, SMS o comandos GPRS) soportadas por el G07L para la provisión inicial y la resolución de problemas.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy utilizan el mismo puerto para ingestión de telemetría

## Requisitos típicos antes de la configuración

- Confirme una conexión de alimentación vehicular estable dentro del rango de trabajo del G07L y una instalación permanente adecuada.
- Instale una tarjeta SIM con datos y verifique la cuenta, el APN y las configuraciones de voz/SMS según lo requiera su operador y región.
- Tenga acceso a los métodos oficiales de configuración de CanTrack soportados por el dispositivo, como USB, SMS o herramientas GPRS/PC para la provisión.
- Disponer de una cuenta u organización en Plaspy para dar de alta el dispositivo y verificar su reporte una vez conectado.
- Conocer la versión de firmware del equipo y las notas del fabricante que puedan afectar la sintaxis de comandos o el comportamiento.
- Contar con herramientas básicas para cableado y pruebas, incluyendo un multímetro y forma de monitorear registros del dispositivo o eventos en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G07L envía fijaciones GNSS, eventos de estado y mensajes de alarma al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos paquetes y los transforma en actualizaciones de posición en vivo, flujos de alerta e informes históricos para la supervisión de flotas.

- El rastreador reporta fijaciones GNSS y eventos de movimiento/estado a d.plaspy.com en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy detecta automáticamente el protocolo cuando el rastreador se conecta.
- Eventos de alarma como movimiento, cambios de ignición y cortes de alimentación se entregan a Plaspy para notificaciones basadas en eventos.
- El almacenamiento a bordo conserva registros cuando se pierde conectividad y esos registros se cargan automáticamente al reconectarse el dispositivo.
- La telemetría y las actualizaciones de estado se muestran en los paneles de Plaspy para seguimiento y generación de informes en tiempo real.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de CanTrack para el G07L (herramienta USB, comandos SMS o interfaz GPRS/PC) según las instrucciones del fabricante.
2. Inserte una SIM funcional y confirme el APN y el registro en la red para garantizar disponibilidad de datos celulares en LTE o con respaldo GSM.
3. Introduzca el endpoint de Plaspy: d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del rastreador.
4. Configure el puerto del rastreador en 8888, que es el puerto compartido de ingestión de Plaspy para todos los dispositivos.
5. Seleccione UDP o TCP si el equipo exige una elección explícita; Plaspy detectará el protocolo automáticamente al conectarse el rastreador.
6. Guarde o aplique la configuración en la herramienta del dispositivo y reinicie el rastreador si el procedimiento lo requiere.
7. Valide la conectividad confirmando que el G07L envía datos y que el dispositivo aparece y reporta en Plaspy.

## Ejemplos de comandos de configuración

El G07L soporta herramientas y métodos de comando del fabricante que varían según firmware y herramienta del proveedor. La sintaxis exacta de comandos puede diferir según la revisión de firmware y normalmente la proporciona CanTrack en su manual de usuario o guía de configuración SMS/PC. Si necesita ejemplos de línea de comandos para configuración por SMS o USB, consulte la documentación oficial de CanTrack para el G07L o contacte a su proveedor CanTrack para obtener el conjunto de comandos preciso.

## Notas de configuración

- Las diferencias de firmware pueden modificar la sintaxis de comandos SMS o GPRS. Verifique siempre los comandos correctos para su versión de firmware antes de aplicar cambios.
- Al elegir TCP frente a UDP, tenga en cuenta el comportamiento de la red y las características de entrega de paquetes; Plaspy acepta ambos y detecta el protocolo de forma automática.
- Tenga a mano la información de APN, usuario y contraseña del operador móvil utilizado por la SIM; ajustes de APN incorrectos suelen impedir la conexión al servidor.
- Use el búfer offline del dispositivo y las funciones de detección de movimiento para reducir rastreos falsos y garantizar continuidad de datos durante brechas de cobertura.
- Si usa configuración por SMS, confirme el formato exacto del comando SMS para la versión de firmware instalada con CanTrack.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G07L con Plaspy ofrece una vía de integración práctica para flotas que requieren rastreo 4G/LTE confiable con respaldo GSM, eventos de ignición y movimiento, y almacenamiento offline. Apuntar el G07L al endpoint y puerto compartidos de Plaspy facilita centralizar la telemetría, habilitar alertas y aprovechar los paneles de Plaspy para visibilidad operativa.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific setup details, firmware behavior, and manufacturer documentation at https://www.cantrackgps.com/ to ensure your G07L is provisioned according to the most current guidance.
