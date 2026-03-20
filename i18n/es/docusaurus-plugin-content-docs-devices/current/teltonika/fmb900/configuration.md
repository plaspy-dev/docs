---
slug: /teltonika/fmb900/configuration
id: fmb900-configuration
sidebar_label: Configuration
title: Teltonika - FMB900 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB900 y usarlo con el servidor de seguimiento en tiempo real de Plaspy
keywords:
  - Configuración Teltonika FMB900
  - Instalación Teltonika FMB900
  - Configuración FMB900 Plaspy
  - Configuración servidor FMB900
  - Configuración rastreador GPS Teltonika
  - Configuración dispositivo Plaspy
  - Guía configuración rastreador vehicular
  - Configuración plataforma seguimiento FMB900
  - Guía Teltonika Configurator
  - Configuración APN servidor FMB900
---

# Teltonika - FMB900 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FMB900 con Plaspy. Se centra en los ajustes de servidor compartidos y en los pasos prácticos que puede aplicar para preparar el FMB900 para el reporte en tiempo real hacia la plataforma Plaspy, apoyándose en el ejemplo público de comando de configuración que se incluye más abajo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor (por ejemplo Teltonika Configurator o la configuración por SMS), por lo que las instrucciones aquí deben considerarse como una guía pública práctica y debe verificar las acciones específicas con la documentación del fabricante.

## Resumen de la configuración

Este proceso prepara el FMB900 para enviar ubicación y telemetría básica a Plaspy mediante la aplicación de parámetros de red y servidor y la validación de conectividad. El objetivo es apuntar el dispositivo a Plaspy, asegurarse de que la SIM y el APN estén correctos y confirmar que el rastreador aparece en la plataforma Plaspy.

- Configurar el APN y las credenciales de red requeridas para que la SIM del dispositivo acceda a datos móviles.
- Establecer el endpoint de servidor del dispositivo hacia Plaspy para que el rastreador reporte telemetría a la plataforma.
- Seleccionar transporte y puerto compatibles tanto con el dispositivo como con Plaspy.
- Aplicar y guardar la configuración usando Teltonika Configurator o comandos SMS soportados.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy para seguimiento en vivo.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol so the platform can accept common Teltonika formats

## Requisitos típicos antes de empezar

- Un dispositivo FMB900 instalado y con alimentación, con una tarjeta SIM activa provisionada para datos.
- Valores de APN, nombre de usuario APN y contraseña APN proporcionados por el operador de la SIM para completar los ajustes de red del dispositivo.
- Acceso a herramientas de configuración Teltonika, como Teltonika Configurator, o al método de configuración por SMS del dispositivo.
- Conocimiento de la versión de firmware del equipo y cualquier nota específica del proveedor que pueda afectar parámetros.
- Posibilidad de reiniciar el dispositivo después de aplicar ajustes y acceso al vehículo o al instalador para validación.

## Cómo se conecta este rastreador a Plaspy

El FMB900 se configura para enviar sus eventos de ubicación y telemetría al endpoint y puerto compartidos de Plaspy. Una vez configurado con el APN y los datos del servidor correctos, el dispositivo enviará actualizaciones de posición y telemetría básica al endpoint de Plaspy para su visualización en la plataforma.

- El dispositivo envía paquetes de ubicación y telemetría a d.plaspy.com en el puerto 8888.  
- Plaspy acepta conexiones por UDP o TCP y detecta automáticamente el protocolo del rastreador.  
- Las actualizaciones regulares de posición aparecen en Plaspy para seguimiento en tiempo real y reproducción histórica.  
- Los informes de eventos y estado del rastreador se reenvían a la cuenta para monitoreo y alertas.  
- La validación en Plaspy confirma que el rastreador está comunicándose con el endpoint de servidor compartido.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Teltonika, por ejemplo Teltonika Configurator o el canal de configuración por SMS del dispositivo.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.  
3. Configure el puerto del dispositivo en 8888 como puerto de destino para el reporte.  
4. Seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.  
5. Complete las credenciales APN con los valores de su operador de SIM: APN, nombre de usuario APN y contraseña APN.  
6. Aplique o guarde la configuración y reinicie el dispositivo si las indicaciones del equipo o del instalador requieren un reinicio.  
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo y los mensajes recientes en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El ejemplo público de configuración para dispositivos Teltonika se puede usar para establecer APN, dominio de servidor y puerto en un solo comando. Mantenga los marcadores de posición al reemplazarlos por los valores de su operador.

- Example combined parameter command (preserve placeholders):

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Qué significan los marcadores de posición:
- [apn] — Reemplácelo por el nombre APN de su operador celular.  
- [apnu] — Reemplácelo por el nombre de usuario APN si lo requiere el operador. Deje vacío si no se usa.  
- [apnp] — Reemplácelo por la contraseña APN si lo requiere el operador. Deje vacío si no se usa.

Notas sobre el comando:
- Este ejemplo público configura las credenciales APN y apunta el dispositivo a d.plaspy.com en el puerto 8888.  
- El último parámetro numérico en el ejemplo es una bandera específica del dispositivo incluida en la secuencia pública; consulte la documentación de Teltonika o el Configurator para entender su significado exacto según su firmware.  
- El comando puede aplicarse vía SMS o mediante Teltonika Configurator según la implementación y el firmware del equipo.

## Notas sobre la configuración

- Las versiones de firmware y del configurator pueden cambiar los números de parámetro o el formato esperado del comando; verifique siempre con la documentación actual de Teltonika.  
- Elija UDP o TCP según sus necesidades de red y operación; ambos transportes son compatibles con Plaspy y el dispositivo puede requerir una selección explícita.  
- La configuración por SMS es comúnmente compatible con dispositivos Teltonika, pero se recomienda usar Teltonika Configurator o FOTA WEB para despliegues masivos o repetidos.  
- Confirme las credenciales APN con el operador de la SIM antes de aplicar ajustes para evitar problemas de conectividad.  
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que mantener un puerto consistente simplifica los despliegues.

## Por qué usar Plaspy con esta configuración

Usar el FMB900 con Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad en tiempo real de sus vehículos y el reporte básico de telemetría. El reducido tamaño del FMB900 y su soporte para sensores BLE lo hacen práctico cuando la instalación discreta y el bajo costo son importantes, mientras que Plaspy proporciona un endpoint unificado y detección automática de protocolo que simplifica la incorporación de la flota.

Para obtener más información sobre Plaspy y las integraciones compatibles visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y definiciones de parámetros más recientes, verifique los detalles en el sitio del fabricante https://www.teltonika-gps.com/ ya que las especificaciones y procedimientos de configuración pueden cambiar con el tiempo.
