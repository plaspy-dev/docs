---
slug: /castel/pt_690/configuration
id: pt_690-configuration
sidebar_label: Configuration
title: Castel - PT-690 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Castel PT-690 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración Castel PT-690
  - Configuración PT-690 para Plaspy
  - Configuración rastreador GPS Castel
  - Configuración servidor PT-690
  - Configuración rastreador Plaspy
  - Configuración SMS PT-690
  - Configuración plataforma rastreadores GPS
  - Integración rastreador de mascotas con Plaspy
  - Configuración GPRS PT-690
  - Configuración seguimiento Castel PT690
---

# Castel - Configuración del PT-690

Esta página reúne la información pública y práctica necesaria para usar el rastreador portátil para mascotas Castel PT-690 con Plaspy. Aquí encontrará los ajustes y comandos SMS públicos que permiten apuntar un PT-690 al servicio de Plaspy para que el dispositivo informe ubicación y estado a su cuenta.

Plaspy utiliza ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PT-690 admite configuración por SMS según la documentación pública; en esta página se incluyen ejemplos de comandos SMS y pautas prácticas para aplicar los ajustes de servidor de Plaspy.

## Resumen de la configuración

Aquí se describe el objetivo práctico al configurar un PT-690 para Plaspy: preparar el dispositivo para usar la red de datos móviles, establecer el servidor de Plaspy como destino de reporte y verificar que el rastreador aparezca en Plaspy. Use los comandos SMS del fabricante o la utilidad oficial de configuración para establecer el APN y los datos del servidor, de modo que el rastreador pueda iniciar una sesión GPRS y enviar telemetría a Plaspy.

- Configure el APN del dispositivo y la dirección del servidor para que se conecte por GPRS a Plaspy.
- Asegúrese de que el dispositivo sea accesible y pueda abrir una sesión de datos hacia el endpoint de Plaspy.
- Valide que el PT-690 envíe actualizaciones de ubicación y mensajes de estado a la plataforma Plaspy.
- Use los comandos SMS provistos o la herramienta del proveedor para establecer y comprobar los parámetros GPRS/servidor.
- Confirme la selección de transporte (UDP o TCP) en el dispositivo si el firmware lo requiere.

## Ajustes del servidor Plaspy

Al configurar el PT-690 para Plaspy, utilice los siguientes ajustes públicos del servidor en la configuración del dispositivo:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto cuando el dispositivo se conecte.

## Requisitos típicos antes de comenzar

- Un PT-690 con carga y una tarjeta SIM válida con capacidad de datos GPRS.
- Acceso al ID del dispositivo para poder calcular la clave secreta de SMS cuando sea necesario.
- Capacidad para enviar comandos SMS al rastreador o acceso a la herramienta oficial de configuración del fabricante.
- Conocimiento de los valores correctos del APN para la SIM utilizada (APN, nombre de usuario APN, contraseña APN).
- Una cuenta en Plaspy o datos de onboarding para confirmar que el dispositivo aparece en la plataforma tras la configuración.
- Un plan de pruebas básico para validar el reporte de ubicación y la conectividad después de aplicar los ajustes de servidor.

## Cómo se conecta este rastreador a Plaspy

El PT-690 envía su ubicación y datos del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tenga conectividad de datos móviles válida y los ajustes GPRS/servidor correctos, abrirá una conexión con Plaspy y enviará actualizaciones periódicas para que el dispositivo sea visible y manejable desde la plataforma Plaspy.

- El dispositivo usa GPRS para abrir una sesión de datos y enviar telemetría a d.plaspy.com o 54.85.159.138.
- Todos los dispositivos reportan al puerto 8888 en Plaspy; se debe configurar el PT-690 para usar ese puerto.
- El rastreador puede usar transporte UDP o TCP según el firmware y la selección que haga; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo y procesa los paquetes de posición y estado entrantes.
- Después de la configuración, verifique que el rastreador aparezca en Plaspy y que envíe actualizaciones de ubicación regulares.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Castel para el PT-690, normalmente comandos SMS o la utilidad del proveedor. Confirme el método de clave secreta por SMS y la ubicación del ID del dispositivo.
2. Prepare las credenciales APN para la tarjeta SIM y determine si el dispositivo requiere nombre de usuario y contraseña del APN.
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
4. Configure el puerto del dispositivo en 8888 y elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el dispositivo o la documentación lo recomiendan.
6. Valide la conectividad solicitando la configuración del dispositivo o monitorizando el rastreador en Plaspy para confirmar que informa a la plataforma.

Si utiliza comandos SMS, siga los ejemplos de comandos del dispositivo que se muestran a continuación para establecer y verificar parámetros GPRS/servidor.

## Comandos de ejemplo para configuración

El PT-690 admite configuración por SMS según la documentación pública. La clave secreta por defecto para las instrucciones SMS son los últimos 6 caracteres ASCII del ID del dispositivo. Reemplace {{SecretKey}} por ese valor y {{apn}}, {{apnu}}, {{apnp}} por el APN, el nombre de usuario APN y la contraseña APN de su SIM según corresponda.

- Establecer APN y el servidor Plaspy por IP y puerto
```text
*{{SecretKey}}#set gprs#{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888*
```

- Verificar los ajustes GPRS y de servidor en el dispositivo
```text
*{{SecretKey}}#get gprs#*
```

Notas sobre los marcadores:
- {{SecretKey}} — últimos 6 caracteres ASCII del ID del dispositivo usados como clave secreta para comandos SMS.
- {{apn}} — nombre APN de su operador móvil.
- {{apnu}} — nombre de usuario del APN si el operador lo requiere; dejar vacío si no se usa.
- {{apnp}} — contraseña del APN si el operador la requiere; dejar vacío si no se usa.

Estos comandos reflejan la sintaxis SMS pública que muestra la documentación del PT-690. Si su firmware o la app del proveedor usan otra sintaxis, siga los materiales oficiales de Castel.

## Notas de configuración

- La configuración por SMS está documentada públicamente para el PT-690; siga la sintaxis exacta y las reglas de seguridad (clave secreta) que indique el fabricante.
- Variantes de firmware y región pueden afectar los comandos SMS disponibles y las opciones de transporte; verifique la versión de firmware antes de aplicar cambios.
- Elija UDP o TCP en el dispositivo solo si la interfaz de configuración lo exige; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Verifique siempre los valores del APN con su operador móvil; un APN incorrecto impedirá que el dispositivo abra una sesión GPRS.
- Mantenga un registro del ID del dispositivo y de la clave secreta calculada para resolución de problemas y futuras configuraciones.

## Por qué usar Plaspy con esta configuración

Usar el Castel PT-690 con Plaspy ofrece una forma sencilla de centralizar los reportes de ubicación y estado de rastreadores portátiles para mascotas en una plataforma única. Apuntar el PT-690 al endpoint y puerto compartidos de Plaspy permite que el rastreador envíe actualizaciones consistentes a un destino único donde usted podrá visualizar, alertar y analizar la actividad del dispositivo dentro de su cuenta.

Para obtener más información sobre Plaspy y cómo gestionar rastreadores en flotas o dispositivos personales visite https://www.plaspy.com. Los métodos de configuración, el comportamiento del firmware y parámetros específicos del fabricante pueden cambiar con el tiempo, por lo que debe verificar los detalles más recientes del PT-690 en el sitio del fabricante http://www.castelecom.com/ antes de realizar despliegues a gran escala.
