---
slug: /teltonika/ftm305/configuration
id: ftm305-configuration
sidebar_label: Configuration
title: Teltonika - FTM305 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Teltonika FTM305 a Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FTM305
  - Configuración FTM305
  - Configuración servidor FTM305
  - Configuración Plaspy FTM305
  - Guía configuración rastreador GPS
  - Integración rastreador vehicular Plaspy
  - Configuración dispositivo Teltonika
  - Ajustes servidor Plaspy
  - Configuración rastreador e mobility
  - Seguimiento de flotas FTM305
---

# Teltonika - Configuración del FTM305

Esta página describe el contexto público de configuración necesario para conectar el rastreador Teltonika FTM305 a Plaspy. Explica los ajustes compartidos de servidor que Plaspy espera, muestra un ejemplo práctico de comando proporcionado por el fabricante y ofrece un flujo de trabajo claro para preparar y validar el dispositivo, de modo que aparezca y reporte correctamente en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas Teltonika que utilice. Use la guía a continuación junto con la documentación oficial de Teltonika para detalles específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara el FTM305 para comunicarse con Plaspy configurando el APN de la red y el endpoint del servidor, seleccionando un transporte adecuado y verificando la conectividad para que el dispositivo envíe GNSS y telemetría a la plataforma.

- Configure el APN del dispositivo y las credenciales para que el rastreador pueda acceder a la red celular necesaria para reportar a Plaspy.
- Establezca el dominio o la IP del servidor de Plaspy y el puerto compartido para que el rastreador apunte al endpoint correcto de la plataforma.
- Seleccione el método de transporte si es necesario y guarde la configuración para que el rastreador use el protocolo seleccionado.
- Valide que el rastreador esté alcanzando Plaspy y sea visible en el panel de la plataforma.
- Use las herramientas del fabricante o comandos SMS para aplicar ajustes según su flujo de trabajo preferido.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en el backend de Plaspy

## Requisitos habituales antes de la instalación

- Un FTM305 alimentado y accesible con los conectores de instalación requeridos
- Una SIM celular válida y un plan de datos activo con los ajustes de APN correctos para su región y operador
- Acceso a las herramientas de configuración de Teltonika o la capacidad de enviar comandos de configuración por SMS si se utiliza ese método
- Los valores del servidor Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888 disponibles para ingresar
- Acceso administrativo al dispositivo o un instalador que pueda aplicar y guardar los cambios de configuración
- Confirmación de la versión de firmware del dispositivo e instrucciones específicas del fabricante de Teltonika

## Cómo se conecta este rastreador a Plaspy

El FTM305 se configura para enviar coordenadas GNSS y telemetría al endpoint y puerto del servidor Plaspy, de modo que Plaspy pueda procesar actualizaciones de ubicación y datos operativos para visualización, reportes y reglas.

- El rastreador envía paquetes periódicos de ubicación y telemetría al servidor Plaspy d.plaspy.com en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración escogida y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto puede usarse para todos los dispositivos
- Una vez conectado, las actualizaciones del dispositivo están disponibles en Plaspy para seguimiento en tiempo real, detección de eventos e informes históricos
- Las comprobaciones de conectividad y los registros del dispositivo pueden ayudar a validar que el rastreador está reportando correctamente a Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Teltonika o al software para el FTM305, como las herramientas remotas de Teltonika o los comandos basados en SMS proporcionados por el fabricante.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor u host.
3. Establezca el puerto en 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte; guarde el valor de transporte en la configuración del dispositivo.
5. Configure el APN y las credenciales APN necesarias de su proveedor celular para que el rastreador tenga conectividad de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones de Teltonika lo requieren.
7. Valide que el dispositivo esté reportando a Plaspy revisando la actividad del dispositivo en Plaspy y verificando cualquier respuesta o registro del propio dispositivo.

## Comandos de configuración de ejemplo

El FTM305 puede configurarse usando un comando estilo setparam. El ejemplo proporcionado por el fabricante configura los campos APN y los ajustes del servidor Plaspy. Conserve los marcadores de posición al aplicar el comando y reemplácelos por los valores del APN de su operador.

- Ejemplo de configuración por SMS o línea de comandos para parámetros básicos

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Qué hace este comando en términos prácticos
  - Sustituye 2001 2002 y 2003 por sus valores de APN donde [apn] es el nombre del APN, [apnu] es el usuario del APN y [apnp] es la contraseña del APN
  - Establece la dirección del servidor a d.plaspy.com y el puerto del servidor a 8888
  - Incluye el parámetro 2006 que el dispositivo usa para seleccionar el modo de transporte o protocolo; consulte la documentación de Teltonika para los mapeos numéricos exactos de las opciones de transporte

Nota: La sintaxis anterior se presenta como ejemplo público. Use las herramientas Teltonika o los procedimientos SMS recomendados por el fabricante para enviar comandos al dispositivo y verifique la aplicabilidad de los comandos para su versión de firmware.

## Notas de configuración

- Las versiones de firmware y las variantes regionales del dispositivo pueden cambiar la numeración de parámetros u opciones de configuración disponibles; confirme siempre con la documentación de Teltonika para el código de producto exacto de su FTM305.
- Puede configurar el dispositivo usando utilidades de gestión remota de Teltonika o comandos estilo SMS según su despliegue y acceso; siga la guía del fabricante para cada método.
- Elija UDP o TCP según las condiciones de la red y la preferencia del instalador; Plaspy acepta cualquiera de los dos transportes en el puerto compartido, pero los firewalls de red pueden afectar la conectividad.
- Guarde y aplique los cambios, y luego reinicie el rastreador si es necesario para asegurar que los nuevos ajustes de servidor y APN entren en vigor.
- Mantenga un registro de los comandos y ajustes aplicados para garantizar consistencia en el despliegue y facilitar la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FTM305 con Plaspy ofrece a las organizaciones una vía práctica para combinar posicionamiento GNSS preciso con telemetría avanzada para monitoreo de e mobility y equipos industriales. Apuntar el dispositivo a Plaspy usando los ajustes de servidor y puerto compartidos hace que la incorporación sea consistente en toda la flota y simplifica el manejo en el backend porque Plaspy detecta automáticamente el protocolo del rastreador.

Learn more about Plaspy and compatible integrations at https://www.plaspy.com. For the most current device specific configuration methods firmware details and parameter mappings always verify information with the manufacturer at https://www.teltonika-gps.com/
