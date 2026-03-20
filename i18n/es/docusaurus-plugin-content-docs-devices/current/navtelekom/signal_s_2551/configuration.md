---
slug: /navtelekom/signal_s_2551/configuration
id: signal_s_2551-configuration
sidebar_label: Configuration
title: Navtelekom - SIGNAL S-2551 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar Navtelekom SIGNAL S-2551 con Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - Configuración Navtelekom SIGNAL S-2551
  - Configuración SIGNAL S-2551 Plaspy
  - SIGNAL S-2551 configuración GPS
  - Configuración del rastreador Navtelekom
  - Configuración servidor SIGNAL S-2551
  - Guía de configuración rastreador Navtelekom
  - Configuración Plaspy rastreador de vehículo
  - Configuración de gestión de flotas rastreador
  - Configuración EGTS FLEX
  - Configuración telemetría SIGNAL S-2551
---

# Navtelekom - SIGNAL S-2551 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Navtelekom SIGNAL S-2551 con Plaspy. Resume los parámetros prácticos del servidor y los pasos típicos que los integradores siguen para apuntar el dispositivo a Plaspy, indica qué verificar antes de la integración y explica cómo Plaspy recibe los datos del equipo. La información se basa en los parámetros de conexión públicos de Plaspy y en la descripción del producto SIGNAL S-2551.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía para preparar el equipo para la ingestión en Plaspy y luego siga la documentación y las utilidades del fabricante SIGNAL S-2551 para los pasos específicos del dispositivo.

## Resumen de la configuración

El objetivo de la configuración es dejar el SIGNAL S-2551 listo para enviar posiciones GNSS y telemetría a Plaspy de forma fiable usando el endpoint y puerto compartidos de la plataforma. Esto incluye actualizar los campos de servidor, seleccionar el transporte adecuado, confirmar la conectividad celular y validar que Plaspy esté recibiendo datos.

- Configure los parámetros de servidor del dispositivo para que apunten a Plaspy usando d.plaspy.com o la dirección IP equivalente.
- Establezca el puerto 8888, que es el puerto que Plaspy utiliza para todos los dispositivos compatibles.
- Elija UDP o TCP como transporte si el rastreador solicita selección de transporte.
- Verifique que la configuración de doble SIM y GPRS funcione para la transmisión de datos celulares.
- Guarde y aplique los ajustes con el configurador SIGNAL S-2551 o mediante comandos SMS y confirme que el dispositivo aparezca en Plaspy.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: admite UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Acceso al método oficial de configuración del SIGNAL S-2551, como el NTC Configurator o los comandos SMS del fabricante
- Dispositivo alimentado e instalado con conectividad celular y al menos una SIM activa para datos GPRS
- Conocimiento del IMEI del equipo y de las credenciales de administrador que solicite la herramienta del fabricante
- Confirmación de que el firmware del equipo soporta EGTS, FLEX u otras variantes de protocolo aceptadas por Plaspy
- Un vehículo de prueba o banco de pruebas para validar recepción GNSS y envío de telemetría
- Opcional: acceso a microSD o USB si necesita registro local o configuración sin conexión

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el SIGNAL S-2551 transmite posiciones GNSS y datos de telemetría a través de las redes de datos celulares al endpoint de la plataforma en el puerto compartido de Plaspy. Plaspy ingiere esos datos, asocia el dispositivo a la cuenta del cliente y presenta ubicación en tiempo real, estado de E/S y telemetría para paneles y alertas.

- El dispositivo reporta al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según se requiera; Plaspy acepta ambos
- Plaspy detecta automáticamente el protocolo del dispositivo, de modo que el rastreador puede usar EGTS, FLEX o un protocolo personalizado compatible
- Los datos enviados incluyen posición GNSS y los canales de telemetría configurados como entradas digitales, sensores analógicos y datos CAN cuando estén habilitados
- Plaspy ofrece visibilidad para actualizaciones en tiempo real, reproducción histórica y alertas basadas en reglas

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del SIGNAL S-2551 proporcionado por Navtelekom, como el configurador USB o las herramientas del fabricante.
2. En la configuración de servidor introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor primario.
3. Establezca el puerto del servidor en 8888 para coincidir con el puerto compartido que usa Plaspy para todos los dispositivos.
4. Si el equipo requiere selección de transporte, elija UDP o TCP según las necesidades de la instalación.
5. Guarde o aplique la configuración y envíe los ajustes al rastreador usando la herramienta del fabricante o comandos SMS confirmados.
6. Reinicie el dispositivo si el configurador lo solicita o después de aplicar cambios de red.
7. Valide en Plaspy que el dispositivo reporta correctamente y que se reciben posiciones y telemetría.

## Ejemplos de comandos de configuración

El SIGNAL S-2551 admite múltiples métodos de configuración del fabricante, incluyendo software configurador USB local y comandos remotos por SMS o GPRS. La sintaxis exacta de los comandos públicos puede variar según la versión de firmware y la versión de la herramienta. Dado que los conjuntos de comandos del fabricante difieren, siga la documentación de Navtelekom o el NTC Configurator para las cadenas de comando precisas y el orden requerido.

Si dispone de una lista de comandos suministrada por el proveedor o plantillas SMS de Navtelekom, aplíquelas siguiendo el flujo de trabajo recomendado y luego verifique que los datos lleguen a d.plaspy.com en el puerto 8888. Plaspy detectará automáticamente el protocolo correcto una vez que el dispositivo inicie la comunicación con el endpoint compartido del servidor.

## Notas de configuración

- Las variaciones de firmware pueden cambiar las opciones disponibles y la sintaxis de los comandos; siempre verifique la versión de firmware antes de aplicar comandos.
- Tanto TCP como UDP funcionan con Plaspy en el puerto 8888; elija el transporte que mejor se adapte a sus condiciones de red y políticas de instalación.
- El SIGNAL S-2551 puede configurarse para enviar a hasta tres servidores; si usa múltiples endpoints, asegúrese de que uno esté apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Use el configurador USB del fabricante para aprovisionamiento masivo y para acceder a mapeos avanzados de E/S, CAN y telemetría.
- Mantenga un registro de los ajustes aplicados y valide el reporte en Plaspy después de cada cambio de configuración para confirmar la integración exitosa.

## Por qué usar Plaspy con esta configuración

Usar el SIGNAL S-2551 con Plaspy ofrece un camino directo para integrar un rastreador robusto y con muchas funciones en una sola plataforma de monitoreo. El soporte del equipo para protocolos estándar, la entrega celular con doble SIM y las amplias capacidades de E/S permiten a las empresas capturar ubicación, diagnósticos y datos de sensores para operaciones de flota y flujos de trabajo de seguridad.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener el firmware más reciente del SIGNAL S-2551, comandos y detalles de configuración específicos del fabricante, siempre verifique la información actual en el sitio de Navtelekom https://www.navtelecom.ru/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
