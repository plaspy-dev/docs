---
slug: /globalsat/tr_203/configuration
id: tr_203-configuration
sidebar_label: Configuration
title: GlobalSat - TR-203 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del GlobalSat TR-203 con ajustes de servidor Plaspy, comandos SMS y pasos prácticos para integración y seguimiento fiables
keywords:
  - configuración GlobalSat TR-203
  - instalación GlobalSat TR-203
  - configuración TR-203 Plaspy
  - configuración servidor TR-203
  - configuración rastreador GPS TR-203
  - instalación rastreador GPS GlobalSat
  - configuración SMS TR-203
  - integración rastreador Plaspy
  - configuración plataforma GPS
  - configuración software de rastreo
---

# GlobalSat - TR-203 Configuración

Esta página describe el contexto público de configuración para usar el rastreador personal GlobalSat TR-203 con Plaspy. Reúne los ajustes de servidor Plaspy que necesita, explica el flujo de configuración habitual y presenta el formato público de comandos SMS usados para apuntar un TR-203 a Plaspy para reporte en vivo y visibilidad.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos de configuración del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El TR-203 permite configuración por USB, SMS o GPRS e incluye registrador de datos y funciones opcionales de monitoreo de voz y geocercas; esta página se centra en los ajustes y comandos prácticos para integrar el dispositivo con Plaspy.

## Resumen de la configuración

El proceso de configuración prepara el TR-203 para enviar datos de ubicación y estado a la plataforma Plaspy, de modo que el dispositivo aparezca y reporte correctamente en su cuenta. Para los TR-203 esto suele implicar configurar el objetivo de servidor y el puerto, garantizar la conectividad de red y, cuando sea necesario, usar comandos SMS o una herramienta del fabricante para aplicar los ajustes.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los reportes lleguen a Plaspy
- Configurar el dispositivo para usar el puerto 8888 que Plaspy utiliza para todos los dispositivos soportados
- Seleccionar UDP o TCP si el rastreador requiere una opción de transporte y guardar esa preferencia
- Proveer APN o credenciales de red de la SIM cuando se use GPRS para el reporte
- Validar la conectividad del dispositivo y confirmar que sea visible en Plaspy
- Opcionalmente reiniciar el rastreador tras aplicar los ajustes para asegurar que entren en efecto

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos en Plaspy usan el mismo puerto. Use el dominio o la IP anteriores y el puerto 8888 al configurar el TR-203 para que el dispositivo reporte correctamente a la plataforma Plaspy.

## Requisitos previos habituales

- Un TR-203 con batería cargada o una fuente de energía fiable para que el dispositivo permanezca encendido durante la configuración
- Una SIM funcional y conectividad de red si va a usar SMS o GPRS para enviar comandos de configuración
- Tener a mano el IMEI del TR-203 para los comandos que incluyen el IMEI del dispositivo
- Credenciales APN del operador de la SIM si configura reporte por GPRS (en los ejemplos se usan marcadores)
- Acceso al método de configuración de GlobalSat que prefiera, como SMS, USB o la herramienta del proveedor
- Un teléfono o herramienta capaz de enviar SMS en el formato exacto requerido por el dispositivo

## Cómo se conecta este rastreador a Plaspy

El TR-203 se configura para enviar su ubicación y eventos de dispositivo al endpoint y puerto compartidos de Plaspy para que sea visible en la plataforma Plaspy para monitoreo y revisión histórica.

- El rastreador envía mensajes de posición y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo y el comportamiento de la red
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los mensajes llegan al servidor
- Eventos como actualizaciones de posición y alertas se reenvían a Plaspy para su visualización y procesamiento
- Una configuración correcta permite rastreo en vivo, monitoreo de estado y alertas en la plataforma

## Flujo de configuración típico

1. Acceda al método oficial de configuración del GlobalSat TR-203 que planea usar (software del fabricante, conexión USB o SMS).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor/dirección.
3. Establezca el puerto en 8888, que Plaspy usa para todos los dispositivos soportados.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según su red y la opción del dispositivo.
5. Proporcione las credenciales APN si configura reporte por GPRS y asegúrese de que la SIM tenga datos habilitados.
6. Aplique o guarde la configuración y luego reinicie el rastreador si el dispositivo lo requiere.
7. Verifique que el dispositivo esté reportando a Plaspy y que aparezca en su cuenta de Plaspy.

Si prefiere la configuración por SMS, use los comandos mostrados más abajo en la sección Ejemplos de comandos de configuración y reemplace los marcadores por los valores correctos antes de enviar.

## Ejemplos de comandos de configuración

El TR-203 puede configurarse enviando comandos SMS en el formato que el dispositivo espera. Las instrucciones públicas del modelo incluyen un comando de configuración que establece APN y campos de servidor y un comando de reinicio. El ejemplo de formato de comando mostrado en las notas del modelo fue: TSPRXAB27GHKLMnaicz*U!

Importante: reemplace {{imei}} con el IMEI del dispositivo y conserve los marcadores [apn], [apnu] y [apnp] por los valores de su operador. El comando requiere un valor de checksum después del asterisco. El checksum es el XOR de todos los caracteres en la cadena del comando antes del asterisco, expresado como un valor hexadecimal de dos dígitos en mayúsculas.

1) Comando de configuración (configura APN y servidor)
- Plantilla de SMS para configurar APN y servidor Plaspy
- Reemplace los marcadores y calcule el checksum como se describió arriba

```
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- {{imei}} = número IMEI del dispositivo
- [apn] = nombre APN proporcionado por su operador de SIM
- [apnu] = nombre de usuario APN si lo requiere el operador (dejar vacío si no se usa)
- [apnp] = contraseña APN si la requiere el operador (dejar vacía si no se usa)
- {{checksum}} = checksum XOR en hexadecimal de dos dígitos en mayúsculas del texto del comando antes del asterisco

2) Comando de reinicio opcional (aplica ajustes inmediatamente)
- Use este comando de reinicio después de la configuración si desea que el rastreador se reinicie y aplique los cambios

```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

- {{checksumreeboot}} = checksum XOR en hexadecimal de dos dígitos en mayúsculas del texto del comando de reinicio antes del asterisco

Notas sobre el cálculo del checksum
- El checksum se calcula aplicando XOR a los códigos de caracteres del texto del comando hasta, pero sin incluir, el carácter '*' y luego convirtiendo el resultado a una cadena hexadecimal de dos dígitos en mayúsculas. El fragmento de JavaScript en la configuración del modelo demuestra esta lógica de cálculo.

## Notas sobre la configuración

- Diferentes versiones de firmware o revisiones de hardware pueden requerir pequeñas variaciones en la sintaxis de los comandos SMS o soportar parámetros distintos; verifique con la documentación de su firmware.
- El TR-203 soporta métodos de configuración por SMS y GPRS; elija SMS para actualizaciones remotas basadas en texto o USB/herramientas del fabricante para configuración local cuando estén disponibles.
- Al seleccionar el transporte, UDP suele ser más simple y eficiente para actualizaciones de rastreo, mientras que TCP puede ser preferible para entrega garantizada según las condiciones de la red; elija según sus necesidades de despliegue.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detectará automáticamente el protocolo cuando el rastreador empiece a enviar mensajes al servidor.
- Mantenga la documentación del fabricante y las notas de la versión a mano cuando depure comandos o diferencias de comportamiento.

## Por qué usar Plaspy con esta configuración

Configurar un GlobalSat TR-203 para reportar a Plaspy ofrece una forma directa de centralizar el reporte de ubicaciones, la visibilidad de eventos y los datos históricos de posición para monitoreo personal o de flota. Usar el endpoint y puerto compartidos de Plaspy simplifica la configuración en muchos dispositivos y garantiza un manejo consistente de los protocolos entrantes de los rastreadores.

Para obtener más información sobre Plaspy y cómo puede manejar rastreadores TR-203, visite https://www.plaspy.com. Para pasos de configuración específicos más actuales, notas de firmware y orientación del fabricante consulte GlobalSat en https://www.globalsat.com.tw/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
