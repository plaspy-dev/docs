---
slug: /astra_telematics/at500/configuration
id: at500-configuration
sidebar_label: Configuration
title: Astra Telematics - AT500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Astra Telematics AT500 con ajustes de servidor Plaspy y comandos SMS para integración
keywords:
  - Configuración Astra Telematics AT500
  - Configuración AT500 Plaspy
  - Configuración servidor AT500
  - Configuración rastreador GPS AT500
  - Comandos SMS configuración AT500
  - Integración rastreador Plaspy
  - Ajustes servidor Plaspy
  - Guía configuración rastreador de activos
  - Provisionamiento BLE AT500
  - Configuración rastreador compacto
---

# Astra Telematics - Configuración del AT500

Esta página describe el contexto público de configuración necesario para conectar el Astra Telematics AT500 Mini Asset Tracker a la plataforma Plaspy. Resume los ajustes de servidor Plaspy que deberá usar, detalla los requisitos habituales y presenta los comandos SMS públicamente disponibles que emplea el AT500 para la configuración básica del servidor y del APN cuando ese método es compatible.

Plaspy usa ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del tracker, pero los pasos exactos proporcionados por el fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. La orientación aquí se centra en los valores públicos del endpoint de Plaspy y en pasos prácticos para aplicarlos al AT500. Para detalles específicos del dispositivo, como flujos de provisionamiento BLE, menús en el equipo o sintaxis de comandos dependiente del firmware, consulte la documentación oficial de Astra Telematics.

## Resumen de la configuración

Preparar un AT500 para Plaspy implica ajustar los parámetros de red y servidor del dispositivo para que pueda reportar telemetría al endpoint de Plaspy y aparecer en su consola de flota. Las siguientes tareas resumen el propósito práctico del proceso de configuración.

- Apuntar el AT500 al endpoint del servidor Plaspy para que la ubicación y la telemetría lleguen a Plaspy.
- Configurar las credenciales APN si la operadora o el perfil eSIM lo requieren para habilitar datos celulares.
- Seleccionar el transporte (UDP o TCP) y confirmar que el dispositivo usa el puerto compartido de Plaspy para el reporte.
- Validar la conectividad y la telemetría en Plaspy para que el equipo sea visible en su panel de seguimiento.
- Guardar y aplicar los ajustes, y confirmar que el tracker se registre correctamente en Plaspy y envíe informes periódicos.

## Ajustes de servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el AT500. Estos valores son los parámetros centrales de conexión que requiere Plaspy.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker para conexiones entrantes

Todos los dispositivos que reportan a Plaspy usan el mismo puerto y Plaspy detectará el protocolo automáticamente, por lo que configure el AT500 para usar el puerto 8888 y elija UDP o TCP según lo requiera el dispositivo o el firmware.

## Requisitos típicos antes de la configuración

- Verifique que el AT500 tenga carga de batería suficiente o esté conectado a alimentación para el aprovisionamiento y las pruebas iniciales.
- Asegúrese de cobertura celular en la región del dispositivo y de que la eSIM o la SIM esté provisionada y tenga permiso para acceder a datos por paquete y SMS según se requiera.
- Tenga a la mano las credenciales APN si la red exige usuario o contraseña (puede usar los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} en los comandos).
- Acceso al método de configuración del AT500 que prefiera (comandos SMS, aplicación de provisionamiento BLE o software del proveedor) y las credenciales administrativas necesarias.
- Un teléfono capaz de enviar SMS desde el instalador o un smartphone con BLE para el aprovisionamiento local cuando esté soportado.
- Credenciales de cuenta o acceso a la consola de flota de Plaspy para validar el reporte del dispositivo tras la configuración.

## Cómo se conecta este tracker a Plaspy

El AT500 reporta la posición GNSS y la telemetría del dispositivo a través de redes celulares al endpoint y puerto compartido de Plaspy para que el dispositivo aparezca y se actualice en la plataforma Plaspy. La configuración garantiza que el tracker pueda establecer una sesión de datos y enviar actualizaciones periódicas o basadas en eventos a Plaspy.

- El tracker se configura para enviar datos al endpoint del servidor Plaspy (d.plaspy.com o la IP 54.85.159.138) en el puerto 8888.
- El transporte se establece en UDP o TCP según la opción de configuración disponible en el dispositivo y la preferencia de instalación.
- Tras la conexión, el dispositivo transmite la localización y la telemetría de estado para que Plaspy muestre la posición y el estado en tiempo real.
- Plaspy detecta automáticamente el protocolo del tracker cuando llegan datos al puerto 8888, lo que facilita el soporte de múltiples modelos.
- Una configuración correcta hace que el AT500 aparezca en la consola de Plaspy y reporte según el cronograma esperado.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Astra Telematics que vaya a usar (comandos SMS, app de provisionamiento BLE o herramienta de configuración del proveedor).
2. Ingrese el endpoint del servidor Plaspy especificando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Ajuste el puerto del servidor a 8888, ya que Plaspy utiliza el mismo puerto para los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el equipo exige una selección explícita.
5. Configure las credenciales APN si la red lo requiere, usando el método del fabricante o comandos SMS.
6. Guarde o aplique la configuración y reinicie el dispositivo si el firmware solicita un reinicio para aplicar los ajustes.
7. Valide que el AT500 reporta a Plaspy comprobando la presencia del equipo y la telemetría en su consola de flota Plaspy.

## Comandos de configuración de ejemplo

El AT500 puede configurarse mediante comandos SMS. A continuación se muestran los comandos SMS públicos publicados para la configuración básica del APN y del servidor. Mantenga los marcadores de posición al insertar la información de la operadora.

- Establecer el APN del operador (reemplace {{apn}} por el APN de su operadora)
```text
$APAD,{{apn}}
```

- Establecer el usuario del APN si es requerido (reemplace {{apnu}} por el usuario del APN)
```text
$APUN,{{apnu}}
```

- Establecer la contraseña del APN si es requerida (reemplace {{apnp}} por la contraseña del APN)
```text
$APPW,{{apnp}}
```

- Establecer el servidor GPRS a la IP de Plaspy (comando público que configura la IP directamente)
```text
$IPAD,54.85.159.138
```

- Establecer el puerto del servidor al puerto compartido de Plaspy
```text
$PORT,8888
```

Notas sobre los marcadores de posición:
- {{apn}} es el valor APN de su operador móvil.
- {{apnu}} es el usuario del APN si su operador lo exige.
- {{apnp}} es la contraseña del APN si su operador la exige.

Si su ruta de aprovisionamiento permite ingresar un nombre de dominio en lugar de una IP, puede apuntar el tracker al dominio Plaspy d.plaspy.com usando la herramienta o app del fabricante. La sintaxis exacta del comando SMS para un valor de dominio depende del firmware; utilice la documentación del fabricante o la herramienta BLE cuando esté disponible.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los ajustes disponibles; verifique los comandos según el firmware del dispositivo que tenga en mano.
- El AT500 soporta la configuración por SMS como se muestra aquí y también ofrece rutas de provisionamiento por BLE; elija el método que mejor se adapte a su despliegue y flujo de trabajo del instalador.
- Seleccione UDP o TCP según el rendimiento y la fiabilidad de la red en su región; ambos transportes son soportados por Plaspy en el puerto 8888.
- Aplicar los valores de IP y puerto del servidor debe coincidir con los ajustes de Plaspy para asegurar que el dispositivo se registre correctamente y que la detección automática de protocolo funcione.
- Revise siempre la documentación más reciente de Astra Telematics para cualquier herramienta suministrada por el fabricante o comandos actualizados antes de un despliegue masivo.

## Por qué usar Plaspy con esta configuración

Usar el Astra Telematics AT500 con Plaspy ofrece a despliegues de seguimiento de activos y equipos una vía sencilla para obtener visibilidad y monitoreo operativo. Apuntar el AT500 al servidor y puerto compartidos de Plaspy garantiza que los datos de ubicación y estado del dispositivo fluyan hacia una plataforma centralizada que soporta alertas, reportes y supervisión de flota.

Para conocer más sobre Plaspy y cómo puede gestionar dispositivos AT500 a gran escala visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, el comportamiento del firmware y la guía del fabricante más recientes, verifique la información actual con Astra Telematics en https://astratelematics.com/ ya que los detalles del proveedor pueden cambiar con el tiempo.
