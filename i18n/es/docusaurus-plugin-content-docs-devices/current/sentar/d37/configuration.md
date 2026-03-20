---
slug: /sentar/d37/configuration
id: d37-configuration
sidebar_label: Configuration
title: Sentar - D37 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el reloj GPS Sentar D37 con servidores Plaspy y pasos prácticos de configuración
keywords:
  - Configuración Sentar D37
  - Configuración D37
  - Configuración Plaspy D37
  - Configuración rastreador GPS Sentar
  - Configuración software seguimiento D37
  - Configuración servidor Sentar D37
  - Configuración plataforma GPS D37
  - Configuración dispositivo Plaspy
  - Configuración smartwatch Sentar
  - Configuración rastreador infantil Plaspy
---

# Sentar - Configuración del D37

Esta página documenta el contexto público de configuración para usar el reloj inteligente infantil Sentar D37 con Plaspy. Se centra en los ajustes prácticos y visibles que debe aplicar en el dispositivo para que el D37 pueda enviar ubicación y estado a los paneles de Plaspy. La guía reúne la descripción del D37 y los comandos SMS públicos que el fabricante ha publicado para ilustrar un flujo de configuración habitual.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe aplicar estas configuraciones públicas con cuidado y confirmar las diferencias específicas del dispositivo consultando la documentación de Sentar. Cuando estén disponibles, incluimos los comandos SMS públicos del D37 para ayudarle a establecer el punto de envío, el APN, el intervalo de reporte y verificar el estado del dispositivo.

## Resumen de la configuración

El objetivo del proceso de configuración es dejar el reloj D37 listo para comunicarse de forma fiable con Plaspy y validar que la telemetría y las actualizaciones de ubicación aparezcan en la plataforma. En el D37 esto suele implicar el uso de comandos SMS para configurar el APN, apuntar el dispositivo a los servidores de Plaspy y seleccionar el protocolo de transporte.

- Configure el D37 para que reporte al endpoint de servidor de Plaspy, de modo que Plaspy pueda recibir ubicación y telemetría.
- Ajuste el APN del operador y las credenciales necesarias para que el reloj tenga conectividad de datos móviles.
- Apunte el dispositivo a d.plaspy.com o a la IP del servidor de Plaspy y asigne el puerto 8888 usado por Plaspy.
- Seleccione UDP o TCP en el dispositivo si requiere elección explícita, de acuerdo con cómo desea que el reloj envíe paquetes.
- Verifique que el dispositivo está enviando actualizaciones a Plaspy y que aparece en su panel de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP, ambos son compatibles con el dispositivo y Plaspy acepta cualquiera
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto para reportes

## Requisitos habituales antes de la configuración

- Un reloj Sentar D37 cargado con una Nano SIM activa instalada y datos móviles habilitados.
- Acceso para enviar comandos SMS desde un teléfono o gateway SMS si el dispositivo se configura por SMS.
- Detalles del APN y cualquier nombre de usuario o contraseña que requiera el operador móvil.
- Conocimiento de la contraseña de administrador del dispositivo; la configuración pública de ejemplo usa la contraseña por defecto 123456.
- Acceso al método oficial de configuración de Sentar o a materiales de soporte para confirmar la sintaxis de comandos según el firmware.
- Una cuenta en Plaspy y acceso al panel de Plaspy para confirmar que el dispositivo aparece y reporta.

## Cómo se conecta este rastreador a Plaspy

El D37 transmite ubicación y telemetría por datos celulares hacia el endpoint del servidor Plaspy. Una vez configurado para enviar telemetría a la dirección y puerto compartidos de Plaspy, la plataforma recibirá las posiciones y eventos del dispositivo y los mostrará en los paneles de monitoreo.

- El D37 se configura para reportar al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP; seleccione el que soporte el dispositivo o el operador y asegúrese de que coincida con la configuración.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando el rastreador se conecta, lo que facilita la incorporación.
- Las actualizaciones de ubicación, eventos SOS y la telemetría básica del dispositivo se envían a Plaspy para seguimiento en tiempo real y alertas.
- Después de la configuración, valide que el reloj aparezca como dispositivo activo en Plaspy y que lleguen muestras de ubicación.

## Flujo de configuración común

1. Acceda al método oficial de configuración de Sentar para el D37 (comandos SMS, app del fabricante o herramienta del proveedor) y confirme la sintaxis de comandos para su versión de firmware.
2. Prepare los datos del APN del operador y las credenciales necesarias (use marcadores como [apn], [apnu], [apnp] donde corresponda).
3. Ingrese el servidor de Plaspy como d.plaspy.com o utilice la IP 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto 8888 como puerto de reporte del dispositivo; todos los dispositivos de Plaspy usan el mismo puerto.
5. Seleccione UDP o TCP en el dispositivo si requiere elección explícita.
6. Aplique o guarde la configuración y reinicie el dispositivo si el D37 necesita un reinicio para que los cambios surtan efecto.
7. Verifique que el dispositivo reporta a Plaspy comprobando la llegada de telemetría y que el dispositivo aparece en el panel de Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS se extraen de material público de configuración del Sentar D37. Asumen que la contraseña del dispositivo es la predeterminada 123456. Mantenga el orden donde se indica; el comando de restablecimiento de fábrica es opcional y normalmente se usa solo si necesita borrar configuraciones previas.

- Restablecimiento de fábrica (paso inicial opcional)
```text
pw,123456,factory#
```

- Ajustar la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Consultar MCC y MNC (códigos del operador)
```text
pw,123456,imsi#
```

- Establecer el APN del operador
Nota: [apn] es el nombre del APN, [apnu] es el usuario del APN si es necesario, y [apnp] es la contraseña del APN si es necesaria. Reemplace xxxyy con la concatenación de los códigos MCC y MNC si el comando lo requiere.
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```

- Configurar el servidor GPRS con la IP y el puerto de Plaspy
(Si el dispositivo exige el token ip antes de la dirección, use el patrón mostrado)
```text
pw,123456,ip,54.85.159.138,8888#
```

- Establecer el intervalo de envío a 300 segundos
```text
pw,123456,upload,300#
```

- Verificar la configuración actual
```text
pw,123456,ts#
```

Si su dispositivo acepta un nombre de dominio en lugar de una IP, reemplace la IP por d.plaspy.com en el comando correspondiente. Confirme siempre la sintaxis exacta de los SMS según el firmware del dispositivo antes de enviar comandos.

## Notas sobre la configuración

- La configuración por SMS es un método público común para el D37; asegúrese de que su origen de SMS pueda enviar mensajes al reloj y de que el dispositivo acepte la sintaxis de configuración por SMS para su firmware.
- Las revisiones de firmware y hardware pueden modificar la sintaxis de comandos y las opciones disponibles; verifique los comandos contra la documentación actual de Sentar.
- Elija UDP o TCP según el soporte del dispositivo y el comportamiento de la red; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Conserve los marcadores [apn], [apnu] y [apnp] cuando documente y reemplácelos por los valores del operador al realizar la configuración.
- Si usa un restablecimiento de fábrica, considérelo opcional y ejecútelo solo cuando necesite borrar una configuración previa.

## Por qué usar Plaspy con esta configuración

Configurar el Sentar D37 para que reporte a Plaspy proporciona visibilidad centralizada y en tiempo real de la ubicación, eventos SOS y la telemetría básica del dispositivo, información que padres y administradores pueden usar para monitorizar y responder rápidamente. Las múltiples modalidades de posicionamiento del D37 y la configuración de servidor compartido de Plaspy simplifican la incorporación, de modo que los dispositivos pueden comenzar a reportar rápidamente una vez aplicados el APN y los ajustes de servidor.

Learn more about Plaspy and how it handles device telemetry and tracking on the main website https://www.plaspy.com. For the most current and device specific configuration methods, firmware notes, and manufacturer details please verify information on the Sentar official website http://www.sentarsmart.com/ as device behavior and commands may change over time.
