---
slug: /autoseeker/at_17f/configuration
id: at_17f-configuration
sidebar_label: Configuration
title: Autoseeker - AT-17F Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Autoseeker AT-17F en Plaspy con ajustes de servidor y pasos prácticos para un rastreo confiable
keywords:
  - Configuración Autoseeker AT-17F
  - Configuración AT-17F
  - Integración AT-17F Plaspy
  - Configuración servidor AT-17F
  - Configuración de rastreador Autoseeker
  - Ajustes de servidor Plaspy
  - Guía de configuración de rastreador GPS
  - Compatibilidad rastreador de activos Plaspy
  - Configuración plataforma de seguimiento AT-17F
  - Seguimiento de flotas Autoseeker
---

# Autoseeker - Configuración del AT-17F

Esta página documenta el contexto público de configuración para usar el rastreador Autoseeker AT-17F con Plaspy. Resume los ajustes de servidor compartidos que requiere Plaspy y ofrece orientación práctica para que instaladores e integradores preparen el AT-17F y reporte de forma fiable en Plaspy. El contenido se centra en la información pública y en cómo aplicar los parámetros de Plaspy al dispositivo con las herramientas del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para apuntar el dispositivo al endpoint de Plaspy y verificar la conectividad, y siempre consulte la documentación de Autoseeker para instrucciones específicas del equipo.

## Resumen de la configuración

Configurar el AT-17F para Plaspy prepara el dispositivo para reportar ubicación y telemetría de eventos a la plataforma Plaspy, de modo que los activos sean visibles, auditables y generen alertas. El proceso consiste en apuntar el dispositivo al endpoint de Plaspy, seleccionar el modo de transporte si es necesario y confirmar que el dispositivo entrega paquetes correctamente a la plataforma.

- Configure el endpoint de reporte del dispositivo hacia el servidor de Plaspy para que posiciones y eventos se envíen a la plataforma.
- Seleccione el modo de transporte adecuado en el dispositivo si debe elegir entre UDP o TCP.
- Use el mismo puerto de Plaspy que comparten todos los dispositivos compatibles para evitar desajustes de puerto.
- Aplique y guarde la configuración usando la herramienta oficial de Autoseeker o métodos soportados como web, USB o SMS.
- Valide la recepción en Plaspy para que el activo aparezca y la telemetría y alertas queden activas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y la plataforma utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Acceso al método o software oficial de configuración de Autoseeker, como la interfaz web, la herramienta USB o los comandos SMS que soporte el dispositivo.
- Dispositivo alimentado y accesible para configuración, con baterías o carga conectadas según sea necesario.
- Una SIM activa y con cobertura si el dispositivo usa conectividad celular, y los parámetros APN proporcionados por su operador móvil.
- Una computadora, cable USB o el teléfono del instalador según la herramienta de configuración elegida.
- Credenciales de administración para la herramienta de configuración si está protegida por contraseña.
- Confirmación de la versión de firmware del dispositivo y de las notas de versión que puedan afectar los parámetros de configuración.

## Cómo se conecta este rastreador a Plaspy

El AT-17F se configura para enviar posiciones y telemetría al endpoint y puerto compartidos de Plaspy, de modo que eventos y ubicaciones se ingesten en Plaspy para supervisión e informes históricos. Plaspy recibe los mensajes del rastreador y los asigna a los dispositivos en la plataforma, aplicando las reglas y alertas configuradas por el usuario.

- El dispositivo envía paquetes de posición periódicos a d.plaspy.com o a 54.85.159.138 usando el puerto 8888.
- Puede seleccionar UDP o TCP en el dispositivo cuando sea necesario; Plaspy acepta ambos transportes en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los paquetes, por lo que no es necesario seleccionar el protocolo en Plaspy.
- Eventos como cruces de geocerca, alertas por manipulación y avisos de batería baja se reenvían a Plaspy cuando el reporte está habilitado.
- Una configuración exitosa permite visibilidad en tiempo real e histórica del AT-17F en el panel de Plaspy.

## Flujo común de configuración

1. Acceda al método o software oficial de Autoseeker recomendado para el AT-17F (portal web, herramienta de configuración por USB o interfaz SMS).
2. En los ajustes de servidor o reporte remoto del dispositivo, ingrese d.plaspy.com o 54.85.159.138 como endpoint de reporte.
3. Establezca el puerto de reporte en 8888 para coincidir con el endpoint de Plaspy.
4. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP según la preferencia de su red.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante.
6. Reinicie el dispositivo si la herramienta o el firmware exigen reboot para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy confirmando que el activo es visible en la plataforma y que se reciben mensajes de telemetría o pruebas.

## Comandos de configuración de ejemplo

El AT-17F admite configuración mediante la herramienta web del fabricante, programación por USB o comandos SMS según el firmware y las opciones instaladas. La sintaxis exacta y los parámetros disponibles dependen del firmware de Autoseeker y de la herramienta de configuración que utilice. Al usar comandos SMS o de consola del fabricante, configure el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, y seleccione el transporte UDP o TCP si es necesario.

Dado que Autoseeker publica listas de comandos específicas y formatos SMS por dispositivo, consulte la guía oficial de configuración de Autoseeker para plantillas y ejemplos exactos del AT-17F. Si su instalación usa comandos SMS, mantenga marcadores de posición como [apn] visibles cuando la plantilla del fabricante requiera sustitución de APN y siga las indicaciones del proveedor para un formateo seguro.

## Notas de configuración

- Las diferencias de firmware entre unidades AT-17F pueden cambiar nombres de parámetros, formatos de comandos o el comportamiento de reinicio; registre la versión de firmware antes de aplicar cambios masivos.
- La selección entre TCP y UDP puede afectar las garantías de entrega en redes inestables; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Al configurar APN o parámetros de SIM, use los valores de APN suministrados por el operador y mantenga cualquier marcador de posición proporcionado por las plantillas del fabricante.
- Utilice las herramientas oficiales de Autoseeker para configurar y asegurarse de aplicar parámetros compatibles y evitar ediciones manuales no soportadas.
- Para despliegues que requieren mayor duración de batería, priorice intervalos de reporte programados y reportes basados en movimiento, según las recomendaciones del fabricante al configurar los parámetros de reporte.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-17F con Plaspy ofrece a las organizaciones visibilidad confiable de activos remotos y desatendidos, aprovechando el endpoint unificado de Plaspy y la detección automática de protocolos. Apuntar el AT-17F a los ajustes de servidor compartidos de Plaspy permite una rápida visibilidad en la plataforma y simplifica la incorporación de flotas al usar el mismo puerto para todos los dispositivos compatibles.

Para conocer más sobre la plataforma Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para los comandos de configuración específicos del AT-17F, notas de firmware y orientación del fabricante, verifique los detalles en el sitio de Autoseeker https://autoseekergps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
