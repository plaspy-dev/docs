---
slug: /mtx/mtx_tunnel/configuration
id: mtx_tunnel-configuration
sidebar_label: Configuration
title: Mtx - MTX Tunnel Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Mtx MTX Tunnel para conectar con el servidor Plaspy d.plaspy.com con pasos prácticos
keywords:
  - Configuración Mtx MTX Tunnel
  - Instalación Mtx MTX Tunnel
  - MTX Tunnel Plaspy
  - Configuración de servidor MTX Tunnel
  - Configuración GPS MTX Tunnel
  - Integración de dispositivos Plaspy
  - Guía de configuración de rastreadores GPS
  - Rastreo de flotas MTX Tunnel
  - Configuración GPRS MTX Tunnel
  - Configuración Telnet SMS MTX Tunnel
---

# Mtx - Configuración MTX Tunnel

Esta página presenta el contexto público de configuración para usar el rastreador MTX Tunnel con la plataforma Plaspy. Resume los ajustes de servidor prácticos y los pasos típicos para apuntar el dispositivo hacia Plaspy y así enviar posiciones y telemetría, haciendo referencia a las interfaces públicas del dispositivo como reporte por GPRS, canales de configuración Telnet y RS232, y soporte de comandos por SMS.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos concretos en el lado del fabricante pueden variar según versión de firmware, revisión de hardware, tipo de instalación y la herramienta de configuración que ofrezca el proveedor, por lo que esta guía sirve como referencia centrada en Plaspy y usted debe consultar la documentación del fabricante para comandos específicos y detalles de firmware.

## Resumen de la configuración

El objetivo es preparar el MTX Tunnel para enviar datos de ubicación y estado a Plaspy de forma confiable por GPRS y validar su visibilidad en la plataforma. El MTX Tunnel ofrece múltiples interfaces de configuración que pueden usarse para definir el endpoint del servidor y los parámetros de transporte que Plaspy requiere.

- Apunte el dispositivo al endpoint de Plaspy para que envíe telemetría y posiciones a la plataforma.
- Escoja el transporte (UDP o TCP) que mejor se adapte a su instalación o requisitos del dispositivo.
- Configure el puerto 8888 que Plaspy emplea para todas las conexiones entrantes de rastreadores.
- Verifique la conectividad GPRS, el APN correcto y cualquier ajuste de la SIM necesario para que el dispositivo alcance Internet.
- Confirme que el dispositivo reporta correctamente a Plaspy y aparece en la plataforma tras la configuración.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporta transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración en el dispositivo

## Requisitos típicos antes de configurar

- Dispositivo encendido y accesible mediante el canal de configuración del fabricante que piense utilizar (Telnet, consola RS232, SMS o herramienta web del proveedor)
- SIM activa con datos habilitados y APN correcto configurado para conectividad GPRS
- Acceso al firmware del MTX Tunnel o a la herramienta de configuración del proveedor y las credenciales necesarias para configuración remota
- Los ajustes del servidor Plaspy mostrados arriba (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles para ingresar en el dispositivo
- Un medio para monitorear logs o el estado del dispositivo (sesión Telnet, consola serial o respuestas SMS) y validar la conexión exitosa
- Conocimiento de si su instalación prefiere UDP o TCP para seleccionar la opción correcta durante la configuración

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el MTX Tunnel utiliza su conexión de datos GPRS para abrir una sesión TCP o UDP hacia Plaspy y luego envía periódicamente posiciones GPS, telemetría y mensajes de estado. Plaspy escucha en el puerto compartido y determina automáticamente el protocolo del dispositivo, lo que permite a la plataforma procesar los mensajes sin asignaciones de servidor por dispositivo.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138
- Las comunicaciones se realizan en el puerto 8888 usando UDP o TCP según la selección del dispositivo
- Plaspy detecta el protocolo y analiza los mensajes para mostrarlos en la plataforma
- La telemetría del dispositivo, como entradas digitales, eventos de movimiento o ubicaciones por celular como respaldo, se envía al mismo endpoint
- Tras el registro exitoso el dispositivo queda visible en Plaspy para seguimiento y monitoreo

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante para el MTX Tunnel (Telnet, consola RS232, herramienta web del proveedor o interfaz de comandos por SMS).
2. Introduzca la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo soporte el dispositivo.
3. Configure el puerto en 8888 que Plaspy utiliza para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte durante la configuración.
5. Configure los parámetros GPRS necesarios, incluyendo el APN de la SIM y las credenciales para establecer la sesión de datos.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el firmware requiere reboot para activar los cambios.
7. Valide que el dispositivo reporte a Plaspy monitoreando logs del dispositivo, salida Telnet, confirmación por SMS o comprobando la visibilidad en la plataforma Plaspy después de unos intervalos de reporte.

## Ejemplos de configuración

El MTX Tunnel soporta varios canales de configuración (Telnet, RS232 y SMS). La sintaxis exacta de comandos y los comandos disponibles pueden variar según el firmware o la utilidad del proveedor. Dado que los comandos y utilidades del fabricante cambian, aquí no se listan comandos exactos. Utilice la documentación del proveedor o la herramienta oficial del MTX Tunnel para aplicar los siguientes valores públicos:

- Establecer servidor a d.plaspy.com o 54.85.159.138
- Configurar puerto 8888
- Seleccionar transporte UDP o TCP
- Configurar APN y credenciales GPRS para su SIM

Si necesita ejemplos de comandos específicos para su versión de firmware, consulte el manual del MTX Tunnel o la guía de configuración del proveedor para la sintaxis exacta de SMS o Telnet.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos, nombres de menú o funciones disponibles; confirme la revisión de firmware antes de aplicar comandos.
- Elija TCP o UDP según su red y comportamiento del dispositivo; algunas funciones como persistencia de conexión pueden variar entre transportes.
- Para configuración remota utilice Telnet o la utilidad web del proveedor cuando esté disponible; la configuración por SMS es útil cuando aún no existe conectividad IP remota.
- El dispositivo puede actuar como gateway GPRS RS232 o proporcionar acceso Telnet; use la interfaz que mejor se adapte a su instalación y modelo de seguridad.
- Verifique siempre el reporte exitoso a Plaspy después de configurar comprobando la visibilidad en Plaspy y cualquier salida de estado del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el MTX Tunnel con Plaspy ofrece a los responsables de flota y activos una manera simple de centralizar posiciones GPS y telemetría por GPRS en una plataforma única. Dado que Plaspy emplea un endpoint de servidor compartido y detección automática de protocolos, integrar el rastreador suele requerir únicamente configurar la dirección del servidor, el puerto 8888 y seleccionar el transporte preferido, lo que facilita el despliegue masivo de dispositivos.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el MTX Tunnel visite https://www.plaspy.com. Por favor confirme los métodos de configuración y el comportamiento del firmware más recientes con el fabricante en http://www.mtxtunnel.com/ ya que las especificaciones y pasos de instalación pueden cambiar con el tiempo.
