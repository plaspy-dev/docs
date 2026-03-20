---
slug: /telic/lt910_ww/configuration
id: lt910_ww-configuration
sidebar_label: Configuration
title: Telic - LT910-WW Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Telic LT910-WW con Plaspy, incluyendo ajustes del servidor y ejemplos de comandos SMS
keywords:
  - Configuración Telic LT910 WW
  - Preparación LT910 WW para Plaspy
  - Configuración rastreador GPS Telic
  - Configuración rastreador Plaspy
  - Configuración servidor LT910 WW
  - Seguimiento vehicular LT910
  - Gestión de flotas LT910 WW
  - Configuración terminal IoT
  - Ajuste APN rastreador Telic
  - Configuración SMS LT910
---

# Telic - Configuración LT910-WW

Esta página describe el contexto público de configuración para usar el Telic LT910-WW con Plaspy. Explica los ajustes de servidor compartidos que utiliza Plaspy, los pasos prácticos para preparar el equipo para el reporte en la nube y los comandos del fabricante públicamente disponibles para este modelo. Use esta guía como referencia práctica al integrar un LT910-WW con Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no necesita indicar un tipo de protocolo a Plaspy. Los pasos exactos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que aparecen en esta página son orientación pública para el LT910-WW y deben validarse frente al firmware del dispositivo y la documentación de Telic antes de su despliegue.

## Resumen de la configuración

Preparar un LT910-WW para Plaspy implica principalmente configurar el equipo para que use el endpoint de servidor de Plaspy, asegurarse de que la conectividad celular y los ajustes APN sean correctos, y validar que el dispositivo reporte al panel de Plaspy. Los comandos públicos por SMS para este modelo muestran cómo establecer el APN, la dirección del servidor y habilitar el reporte por GPRS cuando se usa la configuración vía SMS.

- Configure el rastreador para reportar a los ajustes de servidor de Plaspy y que la telemetría se enrute a su instancia de Plaspy.
- Establezca el APN y las credenciales del operador móvil para que el LT910-WW tenga conectividad de datos.
- Cambie el dispositivo a modo GPRS o modo datos y guarde la configuración.
- Valide que el rastreador envíe posición y estado a Plaspy y que aparezca en su cuenta.
- Consulte la documentación de Telic y las herramientas del dispositivo según sea necesario para opciones específicas de firmware o funciones avanzadas.

## Ajustes de servidor de Plaspy

Al configurar el LT910-WW para que se comunique con Plaspy, utilice estos valores públicos de servidor exactamente como se indican:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required by Plaspy

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y Plaspy realizará la detección automática del protocolo para los formatos de rastreadores compatibles.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM válida con un plan de datos y los ajustes APN correctos del operador móvil.
- Acceso al canal de configuración del LT910-WW que utilice el firmware del equipo, como comandos por SMS o la herramienta oficial de configuración de Telic.
- Alimentación del equipo y una fuente estable para realizar la configuración y las pruebas.
- La contraseña del dispositivo si se requiere para comandos remotos; por ejemplo, la contraseña por defecto en ejemplos públicos es 123456.
- Conocimiento de los valores APN de su operador y de cualquier usuario y contraseña APN si son necesarios.
- Un método para verificar que el equipo está reportando a Plaspy, como acceso a la cuenta o vista de plataforma de Plaspy.

## Cómo se conecta este rastreador a Plaspy

El LT910-WW se configura para enviar telemetría y estado a través del enlace de datos celulares al endpoint y puerto compartidos de Plaspy. Una vez configurados el servidor y el APN, el equipo reenvía su telemetría a Plaspy, donde la plataforma ingesta los datos y presenta posición, eventos y estado del dispositivo.

- El dispositivo envía paquetes de ubicación y estado a d.plaspy.com o a la IP de Plaspy 54.85.159.138 en el puerto 8888.
- El rastreador puede usar UDP o TCP para transmitir datos según el firmware del equipo y la selección de transporte.
- Plaspy detecta automáticamente el protocolo usado por el rastreador y enruta los datos hacia su instancia de Plaspy.
- Los reportes y eventos aparecen en los tableros y alertas de Plaspy una vez que el dispositivo llega al servidor.
- Confirmar el reporte exitoso es el paso final para validar la conectividad y la visibilidad en Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Telic para el LT910-WW, como el conjunto de comandos SMS documentado o la herramienta de configuración de Telic.
2. Ingrese la dirección del servidor de Plaspy, ya sea como el dominio d.plaspy.com o como la IP 54.85.159.138 según la sintaxis de comando del equipo.
3. Ajuste el puerto a 8888, ya que Plaspy utiliza este puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el equipo si el firmware requiere una selección explícita del transporte.
5. Configure el APN y cualquier usuario y contraseña APN necesarios para la conectividad de datos del operador.
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del dispositivo en la plataforma Plaspy y buscando telemetría reciente.

## Comandos de configuración de ejemplo

Los siguientes comandos de ejemplo se extraen de instrucciones públicas de Telic para el LT910-WW. Son comandos SMS que figuran en documentación pública. Los comandos de muestra usan la contraseña del dispositivo 123456 que aparece como valor por defecto en el ejemplo público. Mantenga los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por los valores de su operador.

- Comando opcional de restablecimiento de fábrica inicial
```text
begin123456
```

- Establecer la zona horaria a UTC 0
```text
time zone123456 0
```

- Establecer el APN de su operador móvil
```text
apn123456 [apn]
```
Reemplace [apn] por la cadena APN de su operador.

- Establecer el usuario y la contraseña APN si son necesarios
```text
up123456 [apnu] [apnp]
```
Reemplace [apnu] y [apnp] por el usuario y la contraseña APN. Este comando solo es necesario si su operador requiere credenciales APN.

- Establecer el servidor GPRS con la IP y el puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
También puede usar el dominio d.plaspy.com cuando los comandos del dispositivo acepten nombres de host.

- Cambiar el dispositivo a modo datos GPRS
```text
gprs123456,1,1
```
o, en algunos firmwares, la forma más simple:
```text
gprs123456
```

- Consultar la configuración actual del equipo
```text
check123456
```

Notas sobre estos comandos
- La contraseña por defecto mostrada en el ejemplo público es 123456. Si la contraseña de su dispositivo ha sido cambiada, use la contraseña actual.
- Reemplace los marcadores de posición exactamente y verifique los valores APN del operador antes de enviar comandos.
- Si usa nombres de dominio en lugar de la IP, algunos dispositivos aceptan d.plaspy.com en lugar de la IP.

## Observaciones de configuración

- Las versiones de firmware del fabricante y la sintaxis de los comandos pueden diferir; verifique los comandos frente a la revisión de firmware de su LT910-WW y la documentación de Telic antes de un despliegue masivo.
- La configuración por SMS es un método público común para este modelo, aunque el fabricante también puede ofrecer herramientas de software o utilidades de configuración para PC.
- Elija UDP o TCP según las necesidades de la instalación y el comportamiento del equipo. Plaspy admite ambos y detectará el protocolo automáticamente.
- Todos los dispositivos en Plaspy usan el puerto 8888; no cambie el puerto a menos que el soporte de Plaspy lo indique.
- Mantenga las credenciales seguras y evite enviar contraseñas por canales no seguros cuando sea posible.

## Por qué usar Plaspy con esta configuración

Usar el LT910-WW con Plaspy permite a las organizaciones centralizar la telemetría de un terminal robusto e industrial que soporta conectividad celular global. Cuando el equipo se configura hacia el endpoint de Plaspy y se valida, el LT910-WW puede reenviar información de ubicación, estado y eventos a Plaspy para monitoreo, geocercas, alertas e informes históricos.

Para obtener más información sobre Plaspy y cómo puede ingerir datos de dispositivos como el LT910-WW visite https://www.plaspy.com. Para orientación de configuración específica del dispositivo, notas de firmware y referencias de comandos, verifique los detalles en el sitio del fabricante https://www.telic.de ya que el comportamiento de hardware y firmware puede cambiar con el tiempo.
