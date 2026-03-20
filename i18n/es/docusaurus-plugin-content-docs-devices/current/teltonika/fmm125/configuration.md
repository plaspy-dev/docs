---
slug: /teltonika/fmm125/configuration
id: fmm125-configuration
sidebar_label: Configuration
title: Teltonika - FMM125 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FMM125 con Plaspy mostrando ajustes de servidor y comandos de ejemplo
keywords:
  - configuración Teltonika FMM125
  - configuración Plaspy Teltonika FMM125
  - configuración servidor FMM125
  - configuración rastreador GPS FMM125
  - configuración dispositivo Plaspy
  - configuración seguimiento vehicular
  - configuración rastreador flota FMM125
  - Teltonika rastreador Plaspy
  - configuración plataforma GPS FMM125
  - configuración software seguimiento FMM125
---

# Teltonika - FMM125 Configuración

Esta página describe el contexto público de configuración para usar el Teltonika FMM125 con Plaspy. Se centra en los ajustes del servidor Plaspy, los pasos prácticos para preparar el dispositivo para el reporte y un ejemplo de comando que se usa con frecuencia para apuntar dispositivos Teltonika a Plaspy. Use esta guía junto con los manuales de Teltonika y sus herramientas de instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos se conectan. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración Teltonika que utilice, por lo que confirme los detalles específicos del dispositivo con la documentación de Teltonika cuando sea necesario.

## Resumen de la configuración

Configurar el FMM125 para Plaspy prepara el rastreador para enviar localización y telemetría al endpoint compartido de Plaspy, de modo que los dispositivos sean visibles y reporten datos de forma fiable. El proceso de configuración establece la dirección y el puerto del servidor, verifica la selección del transporte y confirma la conectividad para que Plaspy pueda ingerir la telemetría automáticamente.

- Apuntar el dispositivo al endpoint de servidor de Plaspy para que posición y telemetría lleguen a Plaspy
- Verificar que APN y credenciales de la SIM estén correctas para asegurar la conexión de datos
- Elegir el método de transporte (UDP o TCP) si el dispositivo requiere selección explícita
- Guardar y aplicar los ajustes y validar que el rastreador está reportando a Plaspy
- Usar las herramientas del fabricante o comandos SMS cuando estén disponibles para realizar la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse usando UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar

## Requisitos previos típicos

- Una unidad FMM125 alimentada e instalada correctamente o conectada a una fuente de energía de banco
- Una SIM válida con APN y, cuando se requiera, usuario y contraseña del APN
- Acceso al método de configuración Teltonika que utilice (SMS, Teltonika Configurator o FOTA WEB)
- Familiaridad con la versión de firmware del dispositivo y cualquier perfil de aprovisionamiento del proveedor que pueda sobrescribir ajustes
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) y la elección entre UDP o TCP
- Acceso administrativo a su cuenta Plaspy para verificar el aprovisionamiento del dispositivo una vez que el rastreador esté reportando

## Cómo se conecta este rastreador a Plaspy

El FMM125 se configura para reportar ubicación y telemetría al endpoint y puerto compartidos de Plaspy para que Plaspy pueda ingerir y procesar los datos del dispositivo. Una vez configurados el servidor y el transporte, Plaspy detectará automáticamente el protocolo del rastreador y comenzará a aceptar datos sin necesidad de seleccionar el protocolo por dispositivo en el lado del servidor.

- El dispositivo envía actualizaciones de posición regulares a d.plaspy.com (o a la IP del servidor) en el puerto 8888
- El transporte puede ser UDP o TCP según la elección de configuración del dispositivo
- Plaspy realiza detección automática de protocolo para interpretar correctamente los mensajes del dispositivo
- La telemetría y los datos de sensores externos reenviados por el FMM125 serán visibles en los paneles y reportes de Plaspy
- Un reporte exitoso confirma que el dispositivo está activo y permite monitoreo operativo continuo

## Flujo de configuración típico

1. Acceda al método de configuración oficial de Teltonika que prefiera, como comandos SMS, Teltonika Configurator o FOTA WEB.
2. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto de reporte del dispositivo en 8888 (todos los dispositivos en Plaspy usan el mismo puerto).
4. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Proporcione el APN y cualquier credencial requerida para que el dispositivo pueda establecer la conexión de datos celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware así lo exigen.
7. Valide que el dispositivo reporta a Plaspy y aparece como activo en su cuenta Plaspy o mediante los registros de la plataforma.

## Ejemplo de comandos de configuración

Para configurar los parámetros básicos en unidades FMM125 usando un comando de parámetros de una sola línea (comúnmente enviado por SMS o en un método de aprovisionamiento por lotes), utilice el siguiente ejemplo público. Este ejemplo incluye marcadores de posición para los valores de APN que debe reemplazar por las credenciales de su operador.

- El comando siguiente es un ejemplo común de estilo setparam de Teltonika. Establece el APN, el usuario y la contraseña opcionales del APN, el dominio del servidor Plaspy, el puerto Plaspy y un valor de transporte según ejemplos públicos de configuración.

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores de posición:
- [apn] — reemplácelo por el APN del operador móvil de la SIM instalada
- [apnu] — reemplace por el usuario del APN si su operador lo exige; deje vacío o elimínelo si no es necesario
- [apnp] — reemplace por la contraseña del APN si su operador lo exige; deje vacío o elimínelo si no es necesario

Cómo utilizar este comando:
- Envíelo como SMS al dispositivo si su despliegue y la versión de firmware del dispositivo soportan aprovisionamiento por SMS
- O aplique parámetros equivalentes usando Teltonika Configurator o FOTA WEB al aprovisionar múltiples dispositivos
- Después de aplicar los ajustes, verifique que el dispositivo se conecte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y aparezca en Plaspy

## Notas de configuración

- El firmware y las herramientas de aprovisionamiento pueden cambiar los identificadores de parámetros y los formatos de comandos entre versiones; confirme los IDs de parámetros correctos para su firmware antes de aplicar comandos.
- Los dispositivos Teltonika suelen soportar tanto configuración por software (Configurator, FOTA WEB) como aprovisionamiento por comandos SMS; elija el método que se ajuste a su proceso operativo.
- La selección TCP frente a UDP puede afectar el comportamiento de entrega; elija el transporte según los requisitos de su red y los resultados de las pruebas.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y proporciona detección automática de protocolo, por lo que no es necesario configurar un puerto distinto por dispositivo.
- Si debe usar la IP del servidor en lugar del dominio, ingrese 54.85.159.138 como la dirección del servidor en su herramienta de aprovisionamiento o comando.

## Por qué usar Plaspy con esta configuración

Usar el FMM125 con Plaspy ofrece a los operadores de flota reportes de ubicación y telemetría continuos y fiables dirigidos a un único endpoint compartido de Plaspy. Con soporte para dual SIM, LTE Cat M1 y NB‑IoT y con opciones de fallback, el FMM125 es adecuado para despliegues que requieren conectividad resiliente y telemetría detallada, como monitoreo de combustible e integraciones seriales o CAN.

Conozca más sobre Plaspy en https://www.plaspy.com y verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los identificadores de parámetros en el sitio de Teltonika https://www.teltonika-gps.com/ para asegurarse de contar con las instrucciones de configuración y detalles de compatibilidad más actualizados.
