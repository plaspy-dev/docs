---
slug: /teltonika/fmm230/configuration
id: fmm230-configuration
sidebar_label: Configuration
title: Teltonika - FMM230 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Teltonika FMM230 con Plaspy, incluye ajustes de servidor comandos y flujo de trabajo
keywords:
  - Configuración Teltonika FMM230
  - Instalación Teltonika FMM230
  - Configuración FMM230 Plaspy
  - Configuración seguimiento FMM230
  - Configuración rastreador GPS Teltonika
  - Configuración dispositivo Plaspy
  - Configuración rastreo de flotas
  - Instalación rastreador de vehículo
  - Sensores Teltonika EYE
  - Configuración seguimiento de activos
---

# Teltonika - Configuración del FMM230

Esta página describe el contexto público de configuración para usar el Teltonika FMM230 con Plaspy. Está enfocada en los ajustes prácticos y públicamente disponibles que necesita para apuntar el dispositivo a Plaspy y validar la conectividad básica. Use esta guía junto con la documentación de Teltonika y la configuración de su cuenta Plaspy para completar la integración.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración de Teltonika que utilice, por lo que confirme los pasos específicos del equipo con los recursos de Teltonika cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es preparar el FMM230 para comunicarse de forma confiable con Plaspy, asegurar que el dispositivo tenga conectividad celular y confirmar que los datos de ubicación y telemetría aparezcan en la plataforma Plaspy. Cuando esté disponible, Teltonika permite comandos por SMS y comandos desde herramientas que pueden establecer el APN y los parámetros del servidor en una sola instrucción.

- Configure el APN y las credenciales de red del dispositivo para que use datos celulares.
- Apunte el dispositivo al endpoint del servidor de Plaspy y al puerto compartido.
- Seleccione el modo de transporte (UDP o TCP) si el equipo requiere selección explícita.
- Aplique y guarde los ajustes del dispositivo y reinícielo si es necesario para activar los cambios.
- Verifique que el FMM230 sea visible y esté reportando en su instancia de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP soportados en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecta

Estos valores son los ajustes públicos del endpoint Plaspy que debe usar al configurar el rastreador. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará el protocolo correcto automáticamente.

## Requisitos típicos antes de la configuración

- Dispositivo con alimentación y accesible para configuración y pruebas.
- Tarjeta SIM activa con un plan de datos y la información correcta del APN del operador móvil.
- Acceso a los métodos de configuración de Teltonika como comandos SMS, Teltonika RMS o las herramientas configuradoras de Teltonika según corresponda.
- Conocimiento de su cuenta Plaspy y cómo verificar un dispositivo entrante en la interfaz de Plaspy.
- Herramientas básicas para reiniciar o cortar y restaurar la alimentación del dispositivo después de aplicar ajustes.
- Confirme que el firmware esté actualizado o anote la versión de firmware para seguir las instrucciones del fabricante que correspondan.

## Cómo se conecta este rastreador a Plaspy

El FMM230 envía ubicación y telemetría a través de la red celular al endpoint y puerto compartido del servidor Plaspy. Una vez que el dispositivo apunta al endpoint de Plaspy y la conexión se establece, Plaspy recibe e interpreta los datos del dispositivo para ubicación en tiempo real, alertas e informes históricos.

- El dispositivo reporta posición y telemetría mediante LTE Cat M1, NB‑IoT o con conmutación a 2G hacia el servidor Plaspy.
- Los datos se envían a d.plaspy.com (o 54.85.159.138) en el puerto 8888 usando el transporte elegido.
- Plaspy detecta automáticamente el protocolo del rastreador y registra el flujo del dispositivo si las credenciales y la red son válidas.
- Eventos como pérdida de alimentación, entradas de sensores BLE o cambios en E/S se reenvían a Plaspy cuando están configurados en el dispositivo.
- La visibilidad en la plataforma permite geocercas, alertas y reportes telemáticos dentro de Plaspy.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración de Teltonika para el FMM230 (comandos SMS, herramientas de Teltonika o RMS).
2. Ingrese el endpoint del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto 8888 para el puerto de reporte del dispositivo.
4. Seleccione UDP o TCP si el equipo requiere elegir el modo de transporte para la conexión al servidor.
5. Configure el APN y los parámetros de red relacionados para que el dispositivo pueda establecer una sesión de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta de Teltonika o el método SMS lo requieren.
7. Valide que el dispositivo reporte a Plaspy revisando el estado de conexión del dispositivo y los datos entrantes en su instancia de Plaspy.

## Comandos de configuración de ejemplo

Los dispositivos Teltonika suelen soportar el ajuste de parámetros por SMS. El siguiente ejemplo público muestra un único comando SMS que establece las credenciales del APN y los parámetros del servidor Plaspy. Conserve los marcadores de posición cuando envíe el comando y reemplácelos por los datos del APN de su operador.

- Comando de parámetro SMS de ejemplo
```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de los marcadores de posición
  - [apn]  Reemplace con el nombre APN de su operador móvil.
  - [apnu] Reemplace con el usuario del APN si su operador lo requiere, de lo contrario déjelo en blanco.
  - [apnp] Reemplace con la contraseña del APN si su operador lo requiere, de lo contrario déjelo en blanco.

Al usar el método SMS, envíe el comando desde un número autorizado o siga las instrucciones de Teltonika sobre los orígenes permitidos para la configuración por SMS. Si utiliza las herramientas configuradoras de Teltonika o RMS, aplique el mismo dominio o IP del servidor y los valores de puerto en los campos de la interfaz o del archivo de configuración.

## Notas de configuración

- El comportamiento del firmware y de las herramientas puede diferir según la versión de firmware de Teltonika; verifique los comandos y los códigos de parámetros en la documentación de Teltonika para su firmware.
- Si el dispositivo requiere selección explícita del transporte, pruebe tanto UDP como TCP para confirmar un reporte estable con Plaspy.
- La configuración por SMS es un método público mostrado aquí pero puede requerir un número de teléfono autorizado u otras opciones de seguridad en el dispositivo.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y realiza detección automática de protocolo, por lo que la necesidad principal es la configuración correcta del servidor y del APN.
- Mantenga un registro de los ajustes aplicados y del IMEI del dispositivo para poder relacionar las conexiones entrantes en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMM230 con Plaspy ofrece una forma directa de recopilar telemetría resistente y de bajo consumo junto con datos de sensores en una plataforma central para monitoreo e información operativa. La resistencia celular del FMM230 y sus capacidades de sensores BLE se combinan con la detección automática de protocolos y los ajustes unificados de servidor de Plaspy para simplificar implementaciones a escala de flota.

Conozca más sobre Plaspy en https://www.plaspy.com y confirme los detalles más recientes sobre la configuración específica del dispositivo, el comportamiento del firmware y los códigos de parámetros en el sitio oficial de Teltonika https://www.teltonika-gps.com/ para garantizar la precisión en su despliegue.
