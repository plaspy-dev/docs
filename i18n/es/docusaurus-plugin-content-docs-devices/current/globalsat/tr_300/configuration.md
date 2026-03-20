---
slug: /globalsat/tr_300/configuration
id: tr_300-configuration
sidebar_label: Configuration
title: GlobalSat - TR-300 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el GlobalSat TR-300 para reportar a Plaspy, con ajustes de servidor, comandos SMS y pasos de verificación
keywords:
  - Configuración GlobalSat TR-300
  - Instalación GlobalSat TR-300
  - TR-300 Plaspy
  - Guía de configuración Plaspy
  - Configuración de rastreador GPS
  - Configuración SMS TR-300
  - Configuración servidor rastreador
  - Configuración plataforma GPS
  - Configuración rastreador personal
  - Configuración software de rastreo
---

# GlobalSat - Configuración del TR-300

Esta página documenta el contexto público de configuración para usar el GlobalSat TR-300 con Plaspy. Resume los pasos prácticos y ejemplos públicos de comandos SMS necesarios para apuntar el dispositivo a Plaspy, explica qué preparar antes de la configuración y muestra cómo Plaspy recibe los datos del rastreador. Use esta guía junto con la documentación del fabricante del TR-300 para detalles específicos del dispositivo.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles en la plataforma, y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para el TR-300 pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El TR-300 soporta métodos de configuración por GPRS y SMS; el formato público de comandos SMS y los ejemplos incluidos aquí muestran una forma práctica de configurar el dispositivo para que reporte a Plaspy.

## Resumen de la configuración

Este proceso prepara el TR-300 para enviar datos de ubicación y estado a la plataforma Plaspy, de modo que el dispositivo quede visible y sea administrable desde Plaspy. Los ejemplos públicos de comandos SMS a continuación muestran cómo establecer el endpoint y el puerto del servidor y, opcionalmente, reiniciar el dispositivo para aplicar los cambios.

- Apuntar el TR-300 al endpoint del servidor Plaspy para que los reportes lleguen a su cuenta de Plaspy.
- Configurar los parámetros APN y de red del dispositivo para que pueda usar datos celulares.
- Establecer la IP o dominio del servidor y el puerto con los valores de Plaspy y asegurarse de que la selección de transporte coincida con las capacidades del dispositivo.
- Validar la conectividad confirmando que el dispositivo aparece en Plaspy y reporta como se espera.
- Reiniciar el dispositivo después de la configuración si es necesario para activar los ajustes nuevos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el dispositivo cuando sea necesario seleccionar transporte
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor

## Requisitos típicos antes de la configuración

- Un TR-300 cargado con una tarjeta SIM activa provisionada para datos y SMS según sea necesario
- El número IMEI del dispositivo disponible para usar en SMS o herramientas de configuración
- Acceso al método de configuración del fabricante del TR-300, como comandos SMS o la herramienta del proveedor
- Información básica del APN del operador celular, incluyendo el nombre del APN y cualquier usuario o contraseña requeridos
- Una forma de enviar comandos SMS al dispositivo desde un teléfono o un gateway SMS si se usa el método por SMS
- Acceso a las credenciales de la cuenta Plaspy para verificar que el dispositivo reporte en la plataforma después de la configuración

## Cómo se conecta este rastreador a Plaspy

El TR-300 se configura para enviar su telemetría y datos de eventos al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo quede visible en la plataforma. Plaspy acepta conexiones por el transporte configurado y asigna los mensajes entrantes al dispositivo correcto mediante IMEI o identificador.

- El dispositivo se apunta a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 para enrutar los datos a Plaspy
- Todos los dispositivos en Plaspy usan el puerto 8888, por lo que el TR-300 debe configurarse para usar ese puerto
- El rastreador puede configurarse para usar transporte UDP o TCP según las opciones del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta al endpoint compartido
- Una vez en línea, el rastreador transmite actualizaciones periódicas e informes de eventos para que Plaspy muestre ubicación y estado

## Flujo de trabajo de configuración común

1. Acceda al método de configuración oficial del GlobalSat TR-300 recomendado por el fabricante, como comandos SMS o el software del proveedor.
2. Introduzca el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de configuración del servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto usado por Plaspy para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP en el dispositivo si solicita la selección de transporte.
5. Configure los parámetros APN (APN, usuario, contraseña) para que el dispositivo pueda conectarse a la red celular.
6. Aplique o guarde la configuración y, opcionalmente, envíe el comando de reinicio del dispositivo para activar los nuevos ajustes.
7. Valide que el dispositivo reporta a Plaspy verificando la visibilidad del dispositivo y la hora del último reporte en su cuenta Plaspy.

## Comandos de ejemplo de configuración

El TR-300 puede configurarse enviando comandos SMS. Los siguientes ejemplos públicos de comandos se proporcionan como guía práctica. Conserve los marcadores de posición donde se indica y reemplácelos por sus valores reales. El marcador de checksum debe calcularse según el método de checksum del dispositivo antes de enviar.

Nota: los ejemplos públicos del TR-300 usan un formato de mensaje que puede estar envuelto o prefijado por cadenas específicas de la plataforma. El formato de ejemplo referenciado en el contenido público fue:
TSPRXAB27GHKLMnaicz*U!

1) Comando de configuración para establecer el APN y el servidor de Plaspy (reemplazar marcadores y añadir el checksum correcto):

```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

- [imei] — reemplace con el número IMEI del dispositivo.
- [apn] — reemplace con el nombre APN del operador de la SIM.
- [apnu] — reemplace con el usuario del APN si el operador lo requiere, o deje vacío si no se utiliza.
- [apnp] — reemplace con la contraseña del APN si se requiere, o deje vacío si no se utiliza.
- [checksum] — checksum XOR en hexadecimal mayúscula de dos dígitos del string del comando previo al asterisco. El ejemplo público del fabricante calcula el checksum realizando XOR entre los códigos de cada carácter en la porción del comando y convirtiendo el resultado a hex de dos dígitos en mayúsculas.

2) Comando opcional de reinicio para aplicar los ajustes:

```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

- [checksumreeboot] — checksum calculado para la cadena del comando de reinicio antes del asterisco.
- Este comando de reinicio suele ser opcional pero se recomienda tras aplicar la configuración para asegurar que los ajustes entren en vigor.

Si lo prefiere, puede usar el dominio d.plaspy.com en lugar de la IP numérica cuando el dispositivo soporte nombres de dominio, pero los ejemplos públicos anteriores muestran la IP 54.85.159.138 y especifican el puerto 8888.

## Notas de configuración

- El método público de configuración por SMS del TR-300 es de uso común, pero las herramientas del fabricante o actualizaciones de firmware pueden ofrecer flujos alternativos de configuración.
- El checksum en los comandos de ejemplo es obligatorio según el formato de mensajes del dispositivo; el fabricante lo calcula haciendo XOR de los códigos de los caracteres y convirtiendo el resultado a hexadecimal de dos dígitos en mayúsculas.
- Elija UDP o TCP según la capacidad del dispositivo y la confiabilidad de la red; Plaspy soporta ambos transportes y detectará el protocolo automáticamente.
- Las versiones de firmware y las variantes regionales del dispositivo pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; confirme siempre con la documentación oficial de GlobalSat.
- Si utiliza el dominio d.plaspy.com, el dispositivo debe poder resolver DNS en la red; usar la IP 54.85.159.138 es una alternativa cuando sea compatible.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el GlobalSat TR-300 ofrece a organizaciones y cuidadores una forma sencilla de consolidar la ubicación y el estado de los dispositivos en una sola plataforma para monitoreo, alertas y visibilidad operativa. Apuntar el TR-300 al endpoint compartido y al puerto de Plaspy hace que el onboarding de dispositivos sea coherente entre varias unidades y reduce la carga de configurar un servidor por cada equipo.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration details, command syntax, and firmware behavior with the GlobalSat manufacturer documentation https://www.globalsat.com.tw/ since manufacturer setup methods and firmware behavior can change over time.
