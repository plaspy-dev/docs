---
slug: /astra_telematics/at402/configuration
id: at402-configuration
sidebar_label: Configuration
title: Astra Telematics - AT402 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Astra Telematics AT402 con Plaspy, incluye ajustes del servidor y comandos SMS
keywords:
  - Configuración Astra Telematics AT402
  - Configuración AT402 Plaspy
  - Configuración servidor AT402
  - Configuración rastreador GPS AT402
  - Comandos SMS AT402
  - Integración rastreador Plaspy
  - Ajustes servidor rastreador GPS
  - Configuración plataforma seguimiento vehículos
  - Rastreo de flotas AT402
  - Integración telemetría AT402
---

# Astra Telematics - Configuración del AT402

Esta página describe el contexto público de configuración para usar el rastreador Astra Telematics AT402 con Plaspy. Aquí encontrará los ajustes compartidos del servidor Plaspy a los que debe apuntar el dispositivo, los requisitos comunes previos a la configuración y los comandos SMS públicos que el fabricante publica para registrar el AT402 en Plaspy. Use esta guía para preparar los dispositivos antes de registrarlos en su cuenta o tenant de Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor. El AT402 admite configuración por OTA y por SMS; los comandos SMS del fabricante que aparecen más abajo son el método público para establecer APN, IP del servidor y puerto.

## Resumen de la configuración

Configurar el AT402 para Plaspy prepara el dispositivo para enviar datos GNSS y telemetría a la plataforma, de modo que el equipo sea visible y gestionable. Normalmente el proceso establece el APN de red, apunta el rastreador al endpoint de Plaspy, define el puerto del servidor y verifica el transporte y la conectividad.

- Configure el APN de datos móviles y las credenciales opcionales para que el rastreador tenga acceso a internet.
- Apunte el rastreador al endpoint de servidor de Plaspy para que la telemetría llegue a la plataforma.
- Establezca el puerto compartido de Plaspy para que el dispositivo se comunique por el puerto estándar de la plataforma.
- Seleccione el tipo de transporte cuando el dispositivo requiera elegir entre UDP o TCP.
- Valide que el dispositivo sea visible en Plaspy y que reporte ubicación y eventos correctamente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los datos llegan a la plataforma

## Requisitos típicos antes de la configuración

- Un dispositivo AT402 con alimentación y red, con una tarjeta SIM activa y capacidad de datos o SMS.
- La información correcta del APN del operador móvil, incluyendo el usuario y contraseña del APN si son necesarios.
- Capacidad para enviar SMS al dispositivo o acceso a las herramientas de configuración de Astra Telematics según el flujo del proveedor.
- Una cuenta o tenant en Plaspy listo para recibir dispositivos y validar la telemetría entrante.
- Conocimiento de la versión de firmware del equipo y de cualquier instrucción del proveedor sobre el método de configuración del AT402.

## Cómo se conecta este rastreador a Plaspy

El AT402 se configura para reportar ubicación y telemetría al endpoint y puerto compartido de Plaspy, de modo que la plataforma pueda procesar posición, eventos y datos del vehículo. Una vez que el rastreador apunta al endpoint de Plaspy, enviará reportes periódicos y por eventos sobre el protocolo de transporte seleccionado.

- El dispositivo envía posición GNSS y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección del dispositivo y el comportamiento de la red.
- Plaspy detecta automáticamente el protocolo usado por el dispositivo cuando los datos llegan al puerto compartido.
- Plaspy procesa los datos entrantes para seguimiento en tiempo real, alertas y paneles de telemetría.
- Verifique la visibilidad en Plaspy para confirmar que el AT402 está reportando correctamente.

## Flujo común de configuración

1. Consulte el método oficial de configuración de Astra Telematics para el AT402, como comandos SMS o el software del fabricante, siguiendo las instrucciones del proveedor.
2. Configure el APN del dispositivo usando los valores del operador móvil correspondientes para que la unidad tenga conectividad de datos.
3. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto del servidor a 8888, ya que la plataforma utiliza el mismo puerto para todos los dispositivos.
5. Elija UDP o TCP si el AT402 requiere una selección explícita de transporte; seleccione la opción que mejor se adapte a su red y al comportamiento del operador.
6. Aplique o guarde la configuración y reinicie el equipo si las instrucciones del fabricante requieren reinicio.
7. Valide que el dispositivo aparezca y reporte en Plaspy y revise la telemetría entrante para confirmar que es correcta.

## Comandos de configuración de ejemplo

El AT402 admite configuración vía SMS. Los comandos públicos provistos por el fabricante para establecer APN, credenciales opcionales del APN, IP del servidor y puerto se muestran a continuación. Envíe estos comandos como mensajes de texto al dispositivo en el orden indicado.

- Establecer el APN del operador
```text
$APAD,{{apn}}
```

- Establecer el usuario del APN si es requerido
```text
$APUN,{{apnu}}
```

- Establecer la contraseña del APN si es requerido
```text
$APPW,{{apnp}}
```

- Establecer la IP del servidor GPRS a Plaspy
```text
$IPAD,54.85.159.138
```

- Establecer el puerto del servidor al puerto estándar de Plaspy
```text
$PORT,8888
```

Notas sobre los marcadores
- {{apn}} es el valor del APN de su operador móvil.
- {{apnu}} es el usuario del APN cuando el operador lo exige.
- {{apnp}} es la contraseña del APN cuando el operador la exige.

Si el firmware de su AT402 o la herramienta del proveedor permiten usar d.plaspy.com en lugar de la IP numérica, ingrese d.plaspy.com en el campo de configuración correspondiente. Si el dispositivo requiere elegir UDP o TCP para el transporte, seleccione la opción preferida en la configuración del equipo.

## Notas de configuración

- El fabricante del AT402 proporciona comandos por SMS como método público de configuración; también pueden existir herramientas de software o aprovisionamiento del proveedor.
- Las versiones de firmware y las revisiones de hardware pueden afectar la disponibilidad y la sintaxis de los comandos; confirme los comandos exactos para su unidad antes de un despliegue masivo.
- Elija UDP o TCP según la fiabilidad de la red y la recomendación del operador; Plaspy acepta ambos transportes en el puerto compartido 8888.
- Respete el orden de los comandos cuando el fabricante lo requiera, especialmente al establecer el APN y los valores del servidor antes de reiniciar.
- Verifique siempre la conectividad y la visibilidad del dispositivo en Plaspy después de la configuración para confirmar la entrega correcta de la telemetría.

## Por qué usar Plaspy con esta configuración

Usar el Astra Telematics AT402 con Plaspy ofrece a las organizaciones una vía directa para obtener ubicación en tiempo real, telemetría del vehículo y monitoreo de eventos. Apuntar el AT402 a Plaspy con los ajustes de servidor compartidos asegura una ingestión consistente de datos GNSS y del vehículo en los paneles y reglas de Plaspy para supervisión de flotas, procesos anti-robo y análisis operativo.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo AT402, guías de firmware y soporte del fabricante consulte Astra Telematics en https://astratelematics.com/ ya que el comportamiento y los pasos de configuración pueden cambiar con el tiempo.
