---
slug: /teltonika/fm_3200/configuration
id: fm_3200-configuration
sidebar_label: Configuration
title: Teltonika - FM 3200 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Teltonika FM 3200 para usarlo con Plaspy mediante ajustes de servidor compartidos y comandos de ejemplo para conectividad básica
keywords:
  - Configuración Teltonika FM 3200
  - Instalación Teltonika FM 3200
  - FM 3200 Plaspy
  - Configuración de rastreador Teltonika
  - Configuración de servidor FM 3200
  - Configuración de rastreadores Plaspy
  - Configuración GPS Teltonika
  - Seguimiento de vehículos FM 3200
  - Guía de configuración de rastreador GPS
  - Configuración APN Teltonika
---

# Teltonika - Configuración FM 3200

Esta página describe el contexto de configuración pública para usar el rastreador Teltonika FM 3200 con Plaspy. Explica los ajustes de servidor compartidos de Plaspy, muestra cómo apuntar el dispositivo al endpoint de Plaspy y proporciona comandos de ejemplo basados en contenido de configuración pública para preparar el rastreador y permitir la conectividad básica.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto de Plaspy se aplican a todos los dispositivos. Los pasos concretos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El FM 3200 soporta métodos de configuración por USB y SMS y el reporte de datos por GSM, así que elija el método del fabricante que corresponda a su instalación y versión de firmware.

## Visión general de la configuración

El objetivo de esta configuración es preparar el FM 3200 para que se comunique de forma confiable con Plaspy y validar que el equipo aparezca en la plataforma. El ejemplo de comando más abajo demuestra cómo parámetros básicos como APN y endpoint del servidor se pueden establecer en un solo comando por lotes.

- Apunte el dispositivo al dominio o IP del servidor Plaspy para que los datos se envíen a Plaspy
- Configure las credenciales APN y cualquier autenticación de red requerida para GPRS
- Seleccione el tipo de transporte si el dispositivo requiere elegir entre UDP o TCP
- Guarde y aplique los ajustes y reinicie el rastreador si el dispositivo lo requiere
- Valide la conectividad confirmando que el dispositivo reporte a Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el FM 3200:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Asegúrese de que el FM 3200 tenga una fuente de alimentación confiable y esté encendido
- Una tarjeta SIM activa con datos habilitados y la configuración APN correcta para la red móvil
- Acceso al método de configuración oficial de Teltonika aplicable a su dispositivo y firmware, como SMS, USB o herramientas de Teltonika
- El nombre del APN y, opcionalmente, usuario y contraseña del APN listos para ingresar en los marcadores como [apn], [apnu] y [apnp]
- Conocimiento de si su instalación requiere selección de transporte UDP o TCP
- Método para probar la conectividad, por ejemplo verificar la obtención de posición GPS y el estado de la sesión GPRS a través de la interfaz del dispositivo o la plataforma

## Cómo se conecta este rastreador a Plaspy

El FM 3200 envía datos de ubicación y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar y gestionar el dispositivo. Una vez que el dominio o la IP del servidor y el puerto estén configurados en el rastreador, Plaspy detectará automáticamente el protocolo y comenzará a procesar los mensajes entrantes.

- El rastreador se configura para reportar al endpoint de Plaspy en d.plaspy.com y/o 54.85.159.138
- Los datos se envían por el puerto 8888 para todos los dispositivos en Plaspy
- Puede elegir UDP o TCP como transporte si el dispositivo requiere una selección explícita
- Plaspy detecta automáticamente el protocolo del dispositivo y analiza la telemetría entrante
- Una configuración correcta permite visibilidad, reporte de eventos y monitoreo operativo en Plaspy

## Flujo común de configuración

1. Acceda al método o software de configuración oficial de Teltonika apropiado para el firmware y la instalación de su FM 3200 (SMS, USB o herramienta del fabricante).
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 según lo requiere Plaspy.
4. Seleccione el transporte UDP o TCP si el FM 3200 necesita una selección explícita.
5. Proporcione las credenciales APN usando los campos o marcadores apropiados como [apn], [apnu] y [apnp].
6. Aplique o guarde la configuración y reinicie el dispositivo si el método o el firmware exige un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma usando la actividad del dispositivo o los registros de conexión.

## Comandos de configuración de ejemplo

El FM 3200 puede configurarse con un comando por lotes que establece el APN y los parámetros del servidor en un solo paso. El siguiente ejemplo público se basa en contenido de configuración modelo. Conserve los marcadores y reemplácelos por sus valores de red antes de enviarlo.

- Comando de configuración por lotes de ejemplo (SMS u otra entrada soportada por Teltonika):

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores y el comando:
- [apn] es el nombre del APN del proveedor celular
- [apnu] es el nombre de usuario del APN si el operador lo requiere
- [apnp] es la contraseña del APN si el operador lo requiere
- 2004 se configura aquí como d.plaspy.com y 2005 como puerto 8888 para apuntar el rastreador a Plaspy
- 2006 está incluido en la secuencia de ejemplo; consulte la documentación de Teltonika para conocer el significado exacto de los números de parámetro según su firmware
- Use el método de entrega soportado por Teltonika para este comando, como SMS o la herramienta oficial de configuración, según su instalación

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden usar IDs de parámetro o formatos de comando diferentes; confirme siempre el mapeo de parámetros para su firmware FM 3200.
- El FM 3200 admite modos de reporte TCP y UDP; elija el transporte que mejor se adapte a su entorno de red y siga la guía de Teltonika.
- La configuración por SMS es comúnmente soportada en dispositivos Teltonika y puede usarse para enviar el comando por lotes mostrado arriba si su dispositivo y operador lo permiten.
- Al usar el dominio d.plaspy.com, el rastreador resolverá el dominio a través de la red del dispositivo; puede usar la IP del servidor 54.85.159.138 en entornos donde la resolución DNS esté restringida.
- Recuerde que Plaspy utiliza el puerto 8888 para todos los dispositivos, y Plaspy detectará automáticamente el protocolo entrante en ese puerto.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FM 3200 con Plaspy ofrece un endpoint y puerto de servidor simples y consistentes, lo que facilita la gestión uniforme de rastreadores en flotas. Apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 y aplicar la configuración APN adecuada permite que Plaspy reciba la telemetría y muestre ubicación, estado y alertas para el monitoreo operativo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos del FM 3200 y el comportamiento del firmware en el sitio del fabricante https://www.teltonika-gps.com/ ya que los parámetros y procedimientos pueden cambiar entre versiones de firmware y revisiones de hardware.
