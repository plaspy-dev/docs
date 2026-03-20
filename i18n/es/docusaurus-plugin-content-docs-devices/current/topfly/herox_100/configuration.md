---
slug: /topfly/herox_100/configuration
id: herox_100-configuration
sidebar_label: Configuration
title: TopFly - HeroX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopFly HeroX 100 con Plaspy, incluye ajustes de servidor, comandos SMS, APN y pasos prácticos
keywords:
  - Configuración TopFly HeroX 100
  - Configuración HeroX 100 Plaspy
  - Configuración servidor HeroX 100
  - Configuración rastreador GPS HeroX 100
  - Integración tracker TopFly Plaspy
  - Configuración SMS HeroX 100
  - Configuración APN HeroX 100
  - Servidor GPRS HeroX 100
  - Configuración seguimiento flota TopFly
  - Configuración telemetría HeroX 100
---

# TopFly - HeroX 100 Configuración

Esta página documenta el contexto público de configuración para usar el TopFly HeroX 100 con Plaspy. Se centra en los ajustes compartidos del servidor Plaspy, los pasos prácticos necesarios para direccionar el rastreador a la plataforma y los comandos SMS de ejemplo publicados para el HeroX 100. Use esta guía para preparar el dispositivo para Plaspy y entender el flujo básico; el comportamiento específico del equipo y las herramientas del proveedor pueden variar y deben verificarse con el fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del lado del fabricante pueden cambiar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El HeroX 100 admite métodos de configuración por SMS y GPRS según la documentación pública y puede configurarse para reportar a Plaspy usando el endpoint y puerto compartidos que se describen a continuación.

## Resumen de configuración

Configurar el HeroX 100 para Plaspy prepara el dispositivo para enviar posiciones GNSS, telemetría y eventos a la plataforma. La configuración pública del modelo muestra comandos por SMS que ajustan la zona horaria, el APN, la dirección del servidor GPRS y los intervalos de reporte. El objetivo de la configuración es garantizar una conectividad celular fiable, un destino y puerto de servidor correctos, y una cadencia de actualizaciones acorde con sus necesidades operativas.

- Direccione el dispositivo al endpoint del servidor Plaspy para que la plataforma reciba ubicación y telemetría.
- Configure el APN y los parámetros celulares para que los datos GPRS transporten los mensajes del rastreador hacia Plaspy.
- Establezca los intervalos de reporte y la zona horaria para que los datos de ubicación sean puntuales y consistentes.
- Valide la conectividad y la visibilidad en Plaspy después de aplicar los ajustes.
- Utilice los comandos SMS publicados si la configuración por SMS resulta conveniente para la instalación y las pruebas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma puede aceptar muchos protocolos comunes sin configurar el protocolo por dispositivo

## Requisitos típicos antes de configurar

- Un HeroX 100 instalado y con alimentación según el cableado recomendado por el fabricante.
- Una tarjeta SIM celular válida con plan de datos activo y capacidad de SMS insertada en el dispositivo.
- El APN correcto, nombre de usuario y contraseña del APN del operador de la SIM (se usan con los marcadores de posición del comando APN).
- Acceso al método oficial de configuración TopFly para este modelo, como la configuración por SMS o el software del proveedor, y conocimiento de la contraseña del dispositivo si se requiere.
- El número telefónico del dispositivo (para enviar comandos SMS) y una forma de recibir mensajes de confirmación al completar la configuración.
- Herramientas básicas de verificación de red o acceso a la plataforma para confirmar que el dispositivo aparece en Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El HeroX 100 se configura para enviar posiciones y telemetría a Plaspy apuntando su reporte GPRS al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo envía datos a d.plaspy.com o a la IP y puerto equivalentes, Plaspy ingiere los mensajes y mapea la telemetría en seguimiento en tiempo real, alertas e informes.

- El rastreador envía datos de posición GNSS y marcas de tiempo al endpoint de Plaspy.
- La telemetría CAN BUS y los eventos de I/O digital/analógico se remiten a Plaspy según estén disponibles desde el dispositivo.
- Las lecturas de sensores BLE y eventos de accesorios se transmiten a través del dispositivo hacia el servidor Plaspy.
- El rastreador se apunta al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador y las opciones de firmware; Plaspy detectará el protocolo automáticamente.

## Flujo común de configuración

1. Acceda al método oficial de configuración TopFly para el HeroX 100 (en muchas instalaciones esto será mediante comandos SMS publicados por el fabricante o una herramienta del proveedor).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP si el dispositivo requiere seleccionar explícitamente el transporte.
5. Configure los parámetros APN para la SIM instalada usando el comando APN con los valores de su operador.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del fabricante lo exige.
7. Valide que el dispositivo reporte a Plaspy comprobando la lista de dispositivos o recibiendo datos en la plataforma.

## Ejemplo de comandos de configuración

La configuración pública del HeroX 100 incluye comandos SMS. La secuencia de ejemplo a continuación usa la contraseña del dispositivo 0000, que está publicada como contraseña predeterminada en la configuración del modelo. Envíe estos comandos como mensajes SMS al número del dispositivo. Preserve los marcadores de posición al indicar los valores del operador.

- Establecer la zona horaria a UTC+0:
```text
GMT,0000,0#
```

- Configurar el APN del operador (reemplace los marcadores de posición con los valores de su operador):
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} = nombre del APN, {{apnu}} = usuario del APN (si se requiere), {{apnp}} = contraseña del APN (si se requiere). Si su operador solo exige un APN puede dejar usuario y contraseña vacíos según lo permita el dispositivo.

- Establecer el servidor GPRS con la IP y el puerto de Plaspy:
```text
IP,0000,54.85.159.138 8888#
```
Nota: Alternativamente puede apuntar el dispositivo a d.plaspy.com si el firmware del rastreador resuelve nombres de dominio; el ejemplo público muestra la combinación de IP y puerto del servidor.

- Establecer el intervalo de reporte/actualización a 60 segundos:
```text
TIMER,0000,60:60:0:0#
```
Estos comandos aparecen en la secuencia publicada por el fabricante. Mantenga el orden al realizar la configuración inicial para que el APN y el destino del servidor estén activos antes de habilitar un reporte frecuente.

## Notas de configuración

- La configuración por SMS se proporciona en el material público de TopFly para este modelo; siga las instrucciones del fabricante sobre la sintaxis de los comandos y los números de teléfono.
- Las revisiones de firmware o las herramientas de aprovisionamiento del proveedor pueden cambiar el soporte de comandos y el formato exacto de los parámetros; verifique la versión de firmware del dispositivo y consulte la documentación de TopFly si los comandos no responden como se espera.
- Elegir TCP o UDP puede afectar el comportamiento de entrega y la sobrecarga de red; seleccione el transporte que mejor se ajuste a su conectividad y requisitos operativos.
- La contraseña predeterminada del dispositivo usada en los comandos de ejemplo es 0000; muchos proyectos cambian las contraseñas por seguridad—confirme la contraseña antes de enviar comandos.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que apuntar el dispositivo al endpoint compartido del servidor es el requisito principal.

## Por qué usar Plaspy con esta configuración

Usar el HeroX 100 con Plaspy ofrece visibilidad integrada de posición, telemetría del vehículo y eventos de sensores en una única plataforma de gestión de flotas. La precisión multi-GNSS del HeroX 100, su conectividad celular, y el soporte para CAN BUS y accesorios BLE lo hacen adecuado para flujos de trabajo que necesitan actualizaciones frecuentes, control remoto de salidas y datos de sensores integrados para cadenas de frío o identificación de conductor.

To learn more about Plaspy and how this configuration fits into a complete tracking solution visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and detailed technical documents for the HeroX 100 consult the official TopFly documentation at https://www.topflytech.com/ to verify current setup methods and manufacturer recommendations.
