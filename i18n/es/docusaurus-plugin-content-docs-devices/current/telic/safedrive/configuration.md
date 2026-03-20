---
slug: /telic/safedrive/configuration
id: safedrive-configuration
sidebar_label: Configuration
title: Telic - SafeDrive Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Telic SafeDrive para reportar a Plaspy mediante ajustes de servidor compartidos
keywords:
  - configuración Telic SafeDrive
  - configuración SafeDrive Plaspy
  - configuración de servidor Telic SafeDrive
  - configuración rastreador GPS SafeDrive
  - configuración rastreador Telic
  - ajustes APN SafeDrive
  - comandos SMS Telic SafeDrive
  - rastreo vehicular SafeDrive
  - configuración telemática Telic
  - configuración GPRS SafeDrive
---

# Telic - Configuración de SafeDrive

Esta página documenta el contexto público de configuración para usar el rastreador Telic SafeDrive con Plaspy. Resume los ajustes de servidor compartidos que utiliza Plaspy, explica los pasos típicos que debe realizar en el dispositivo y presenta los comandos SMS públicos de ejemplo para el SafeDrive cuando aplican. Use esta guía para preparar el dispositivo y que pueda reportar ubicación y estado a Plaspy.

Plaspy emplea los mismos ajustes de servidor para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas que proporcione el proveedor. El SafeDrive soporta comandos de configuración por SMS documentados públicamente; esta página muestra esos comandos como referencia práctica para integrar el dispositivo con Plaspy.

## Resumen de la configuración

El proceso de configuración prepara el SafeDrive para establecer una conexión IP confiable con Plaspy y reportar ubicación y estado. El objetivo es asegurarse de que el dispositivo tenga el APN y los ajustes de servidor correctos, esté en modo GPRS y pueda verificarse en la plataforma Plaspy.

- Configure el APN y, si aplica, las credenciales del APN para que el dispositivo use datos móviles.
- Apunte el dispositivo a los ajustes de servidor de Plaspy para que la telemetría llegue a la plataforma.
- Active GPRS o el modo de reporte de datos para que el rastreador envíe paquetes a Plaspy.
- Verifique la conectividad y use el comando de verificación del dispositivo para confirmar los ajustes.
- Opcionalmente realice un restablecimiento de fábrica o ajuste de zona horaria durante la configuración inicial.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Todos los dispositivos en Plaspy usan el mismo puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando este se conecta

## Requisitos típicos antes de la configuración

- Un SafeDrive con alimentación y acceso físico al dispositivo para configuración vía SMS si fuera necesario.
- Una tarjeta SIM activa en el dispositivo con un plan de datos móviles funcional y la información APN correcta.
- Conocimiento de la contraseña para comandos SMS del dispositivo si se ha establecido una. El ejemplo público usa 123456 como valor predeterminado.
- Acceso a las instrucciones oficiales de configuración de Telic o a las herramientas de soporte para su firmware y modelo.
- Una forma de enviar y recibir SMS desde el dispositivo o acceso al software de configuración de Telic si está disponible.

## Cómo se conecta este rastreador a Plaspy

El SafeDrive se configura para enviar sus sesiones de datos a la dirección y puerto compartidos del servidor Plaspy, de modo que Plaspy pueda ingerir la telemetría y mostrarla en la plataforma. Una vez aplicados el APN y los ajustes de servidor y activado el modo GPRS, el dispositivo debería establecer una sesión TCP o UDP con el endpoint de Plaspy.

- El dispositivo se apunta a d.plaspy.com o directamente a 54.85.159.138 para enrutar los datos a Plaspy.
- El puerto 8888 se usa para todos los dispositivos y debe configurarse en el rastreador.
- El dispositivo envía paquetes usando UDP o TCP según la configuración; Plaspy detecta el protocolo automáticamente.
- Una conexión exitosa permite a Plaspy mostrar ubicación, estado y eventos del rastreador.
- Use el comando de verificación del dispositivo para solicitar la configuración actual y confirmar la conectividad.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de Telic y confirme que el dispositivo acepta comandos SMS o configuración remota.  
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del rastreador.  
3. Configure el puerto en 8888 en la configuración del rastreador.  
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita.  
5. Configure el APN y, si aplica, el usuario y la contraseña del APN según su operador.  
6. Aplique o guarde la configuración y cambie el dispositivo a modo GPRS o modo de datos.  
7. Reinicie el dispositivo si lo solicita el equipo o el firmware.  
8. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma usando el comando de verificación del dispositivo o confirmando sesiones entrantes en Plaspy.

## Comandos de configuración de ejemplo

El SafeDrive soporta configuración por SMS. Los comandos a continuación son ejemplos públicos usados para preparar el dispositivo para Plaspy. La contraseña predeterminada de muestra en estos ejemplos es 123456. Reemplace los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} con los valores específicos de su operador.

- Comando de restablecimiento de fábrica (opcional)
```text
begin123456
```

- Ajustar la zona horaria a UTC 0
```text
time zone123456 0
```

- Establecer el APN del operador
```text
apn123456 {{apn}}
```

- Establecer usuario y contraseña del APN si el operador lo requiere
```text
up123456 {{apnu}} {{apnp}}
```
Nota: {{apnu}} es el marcador de usuario del APN y {{apnp}} es el marcador de contraseña del APN. Si su operador no requiere credenciales, este comando puede omitirse.

- Establecer el servidor GPRS a Plaspy usando la IP y el puerto
```text
adminip123456 54.85.159.138 8888
```
Como alternativa puede apuntar al dominio d.plaspy.com si el dispositivo admite entradas de servidor por dominio.

- Cambiar el dispositivo a modo GPRS
```text
gprs123456,1,1
```
o simplemente
```text
gprs123456
```

- Verificar los ajustes actuales en el dispositivo
```text
check123456
```

Siga los comandos en el orden mostrado cuando el orden sea significativo para la configuración inicial, por ejemplo configurar el APN antes de cambiar a GPRS.

## Notas de configuración

- La contraseña por defecto para comandos SMS en ejemplos públicos es 123456. Confirme el valor predeterminado actual para su dispositivo y cambie la contraseña en dispositivos de producción.
- La sintaxis de comandos y el firmware del fabricante pueden variar según la revisión de hardware y la versión de firmware. Verifique siempre los comandos con la documentación oficial de Telic.
- Use el dominio d.plaspy.com o la IP 54.85.159.138 al configurar los ajustes de servidor. Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta el protocolo automáticamente.
- Si el rastreador soporta tanto UDP como TCP, elija el transporte que su integración o condiciones de red requieran. Plaspy acepta ambos y detecta el protocolo automáticamente.
- La configuración vía SMS es útil para despliegues en campo, pero confirme la entrega de SMS y la respuesta del dispositivo antes de asumir que la configuración fue exitosa.

## Por qué usar Plaspy con esta configuración

Configurar el Telic SafeDrive para reportar a Plaspy ofrece un camino sencillo hacia la visibilidad de la flota, el reporte de ubicación en tiempo real y el monitoreo operativo sin necesidad de servidores específicos por dispositivo. Al usar el endpoint y puerto compartidos de Plaspy, los dispositivos de distintos fabricantes pueden ponerse en línea rápidamente mientras Plaspy se encarga de la detección del protocolo y la ingestión de datos.

Conozca más sobre cómo Plaspy soporta integraciones de dispositivos y monitoreo de flotas en la página de Plaspy en https://www.plaspy.com. Para los comandos específicos más actualizados, notas de firmware y detalles técnicos verifique la documentación del fabricante en https://www.telic.de ya que los métodos de configuración y la sintaxis de comandos pueden cambiar con el tiempo.
