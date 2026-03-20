---
slug: /sentar/d36/configuration
id: d36-configuration
sidebar_label: Configuration
title: Sentar - D36 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Sentar D36 con ajustes de servidor Plaspy y comandos SMS para conectar el rastreador
keywords:
  - configuración Sentar D36
  - instalación Sentar D36
  - Sentar D36 con Plaspy
  - configuración rastreador GPS D36
  - configuración reloj GPS para niños
  - configuración rastreador Plaspy
  - configuración SMS rastreador
  - configuración APN D36
  - configuración servidor GPRS
  - configuración software de seguimiento D36
---

# Sentar - Configuración del D36

Esta página describe el contexto público de configuración para usar el rastreador Sentar D36 con Plaspy. Reúne los ajustes de servidor conocidos, un flujo de trabajo recomendado y los comandos de configuración por SMS publicados para el D36, de modo que pueda preparar el dispositivo para informar a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía se centra en los comandos de configuración públicos y en los valores de servidor de Plaspy necesarios para conectar el D36 al servicio Plaspy.

## Resumen de la configuración

El objetivo es dejar el D36 listo para comunicarse de forma fiable con Plaspy y confirmar que las ubicaciones y estados llegan al endpoint compartido de Plaspy. La documentación del D36 incluye ejemplos de comandos SMS para tareas habituales como restablecer el dispositivo, configurar la zona horaria, ajustar el APN y apuntar el rastreador al servidor GPRS de Plaspy.

- Configure el APN y los datos del operador móvil para que el D36 use datos celulares y alcance Plaspy.
- Apunte el servidor GPRS del dispositivo al endpoint de Plaspy para que envíe ubicaciones y telemetría.
- Verifique la zona horaria y el intervalo de subida para que las actualizaciones de ubicación coincidan con lo esperado en la plataforma.
- Valide la conectividad y la configuración con el comando de verificación antes de poner el dispositivo en uso regular.
- Tenga en cuenta la contraseña por defecto y el formato de los comandos al enviar SMS; el material del fabricante usa 123456 como contraseña de ejemplo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un dispositivo D36 con batería cargada y una tarjeta Nano SIM activa con datos móviles y SMS.
- Información del APN, usuario APN y contraseña APN proporcionada por el operador móvil.
- Capacidad para enviar mensajes SMS al dispositivo para la configuración por SMS según los comandos del fabricante.
- Acceso a las notas de configuración oficiales de Sentar o a herramientas del proveedor para la revisión de firmware específica, si están disponibles.
- Una forma de monitorear el dispositivo después de la configuración para confirmar que informa al servidor Plaspy.
- Opcional: acceso físico al dispositivo para reiniciar o cortar la alimentación si el firmware lo requiere.

## Cómo se conecta este rastreador a Plaspy

Con la configuración correcta, el D36 envía datos de ubicación y del dispositivo vía GPRS celular al endpoint y puerto compartido de Plaspy. Plaspy recibe esas conexiones entrantes, detecta automáticamente el protocolo del rastreador e incorpora las ubicaciones y actualizaciones de estado para seguimiento en tiempo real y registros históricos.

- El dispositivo queda apuntando a la dirección o dominio del servidor GPRS de Plaspy.
- El D36 sube datos de ubicación y telemetría al puerto 8888 del endpoint de Plaspy.
- El transporte puede ser UDP o TCP según las opciones del firmware del dispositivo; seleccione el que el firmware soporte.
- Plaspy detecta automáticamente el protocolo usado por el rastreador y procesa los datos entrantes.
- Tras una configuración exitosa, el dispositivo será visible y reportable en Plaspy para monitoreo y alertas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Sentar para el D36 (comandos SMS, herramienta del proveedor o utilidad específica de firmware) que vino con el dispositivo o que proporcione el vendedor.
2. Confirme los datos del APN del operador móvil y la contraseña del dispositivo (el ejemplo del fabricante usa 123456).
3. Ingrese d.plaspy.com o 54.85.159.138 como servidor GPRS en la configuración del dispositivo.
4. Configure el puerto 8888 en la sección de servidor del dispositivo.
5. Si el dispositivo requiere selección de transporte, elija UDP o TCP según lo que soporte el firmware.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware exige un ciclo de energía para aplicar los cambios.
7. Valide que el D36 informe a Plaspy comprobando la visibilidad en la plataforma y usando el comando de verificación del fabricante.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS provienen del contenido de configuración publicado para el D36. La contraseña de ejemplo usada en estos comandos es 123456 según los ejemplos del fabricante. Envíe estos comandos por SMS al dispositivo en el orden indicado durante la configuración inicial. El comando de restablecimiento de fábrica es opcional y debe usarse solo si requiere un restablecimiento inicial.

1. Restablecimiento de fábrica (opcional en la configuración inicial)
```
pw,123456,factory#
```

2. Ajustar zona horaria a UTC+0
```
pw,123456,lz,0,0#
```

3. Comprobar IMSI para verificar MCC y MNC
```
pw,123456,imsi#
```

4. Configurar el APN del operador
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
- Explicación: {{apn}} es el APN del operador, {{apnu}} es el usuario APN (si se requiere) y {{apnp}} es la contraseña APN (si se requiere). El marcador xxxyy representa los códigos concatenados MCC y MNC del operador.

5. Apuntar el servidor GPRS al servidor Plaspy (según el contenido del fabricante)
```
pw,123456.ip,54.85.159.138,8888#
```
- Explicación: Este comando indica al dispositivo que use la IP pública de Plaspy 54.85.159.138 y el puerto 8888. El contenido del fabricante muestra esta sintaxis; si su variante de firmware documenta un separador o formato distinto, consulte las instrucciones oficiales de Sentar.

6. Establecer intervalo de subida a 300 segundos
```
pw123456,upload,300#
```
- Explicación: El ejemplo configura el intervalo de subida de posición en 300 segundos. Observe que el material del fabricante muestra exactamente esta cadena; si su dispositivo espera una coma después de la contraseña, confirme la sintaxis correcta en la documentación del equipo.

Comando de verificación para revisar la configuración actual
```
pw,123456,ts#
```
- Explicación: Use este comando para pedir la configuración actual del rastreador y confirmar valores de APN, servidor e intervalo de subida.

## Notas de configuración

- Las versiones de firmware del fabricante y las compilaciones regionales pueden usar sintaxis de comandos SMS ligeramente diferente; confirme siempre el formato exacto con la documentación de Sentar para su versión de dispositivo.
- La configuración por SMS aparece explícitamente en el contenido del fabricante y es un método común para el D36; asegúrese de la entrega de SMS y los permisos del operador antes de confiar en la configuración por SMS.
- Elija UDP o TCP según lo que soporte el firmware del dispositivo; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo que envíe el rastreador.
- Tenga a mano las credenciales del APN y los valores MCC/MNC al redactar el comando APN; entradas APN incorrectas impedirán la conexión GPRS.
- La contraseña de ejemplo en los comandos es 123456; si su equipo tiene una contraseña de fábrica diferente o una establecida por un instalador, use esa contraseña.

## Por qué usar Plaspy con esta configuración

Usar el Sentar D36 con Plaspy proporciona visibilidad continua de ubicación y estado, adecuada para la seguridad infantil y la supervisión de cuidadores. Configurar el D36 para enviar datos al endpoint de Plaspy garantiza que las actualizaciones de ubicación, los informes de estado y las alertas estén centralizados en una sola plataforma que gestiona la detección automática del protocolo y una configuración de puerto homogénea.

Learn more about Plaspy and its device support at https://www.plaspy.com. Manufacturer specifications and setup methods can change over time, so verify the latest device-specific configuration and command syntax on the Sentar website http://www.sentarsmart.com/ before deployment.
