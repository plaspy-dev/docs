---
slug: /concox/jm_lg01/configuration
id: jm_lg01-configuration
sidebar_label: Configuration
title: Concox - JM-LG01 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Concox JM-LG01 para usar con Plaspy con comandos SMS públicos y ajustes de servidor para seguimiento confiable
keywords:
  - Configuración Concox JM-LG01
  - Configuración JM-LG01 Plaspy
  - Configuración servidor Concox
  - Configuración rastreador GPS JM-LG01
  - Configuración rastreador Plaspy
  - Comandos SMS JM-LG01
  - Configuración rastreador de activos
  - Configuración rastreador GNSS portátil
  - Configuración rastreador batería larga duración
  - Integración con plataforma de rastreo
---

# Concox - Configuración del JM-LG01

Esta página documenta el contexto público de configuración para usar el Concox JM-LG01 con Plaspy. Resume los ajustes de servidor que Plaspy requiere, explica el flujo de configuración típico y reúne los comandos SMS públicos que proporciona el fabricante y que se usan comúnmente para apuntar el tracker a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, pero los pasos específicos del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos de comandos SMS que aparecen a continuación son comandos públicos y de uso común para la configuración del JM-LG01; confirme siempre la sintaxis y el comportamiento exactos con la documentación más reciente del fabricante y el firmware de su equipo.

## Resumen de la configuración

El objetivo de este proceso es preparar el JM-LG01 para que comunique de forma confiable su ubicación y estado a Plaspy. Con los comandos SMS públicos y los valores de servidor, usted configurará el acceso a la red, establecerá el endpoint de Plaspy, ajustará los intervalos de reporte y verificará que el dispositivo esté enviando información.

- Configure el APN y los parámetros GPRS para que el JM-LG01 pueda abrir una conexión de datos.
- Establezca el endpoint del servidor para apuntar a Plaspy usando dominio o IP.
- Seleccione el transporte y los intervalos de reporte para que las posiciones aparezcan en Plaspy según lo previsto.
- Valide los ajustes y confirme que el dispositivo está reportando activamente al endpoint compartido de Plaspy.
- Active el modo GPRS y guarde la configuración para asegurar conectividad persistente con Plaspy.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos previos típicos

- Un JM-LG01 con alimentación y una micro SIM funcional que tenga datos habilitados y capacidad para SMS.
- Conocimiento del APN del operador móvil y, si aplica, del nombre de usuario y contraseña del APN.
- Acceso a un teléfono con capacidad SMS o a una herramienta profesional de configuración para enviar los comandos SMS del fabricante.
- Acceso a Plaspy con una cuenta lista para recibir el dispositivo cuando empiece a reportar.
- Familiaridad básica con los comandos del dispositivo o la guía de configuración oficial de Concox para su versión de firmware.

## Cómo se conecta este tracker a Plaspy

El JM-LG01 se configura para enviar posiciones GNSS y telemetría a Plaspy transmitiendo datos al endpoint y puerto compartidos del servidor de Plaspy. Una vez configurado con el APN correcto y los ajustes de servidor, el dispositivo abre una sesión GPRS y transmite actualizaciones periódicas a Plaspy, donde se muestran en la plataforma.

- Las posiciones GNSS se transmiten al endpoint de Plaspy para seguimiento en tiempo real y reproducción histórica.
- Telemetría como estado de batería, detección de movimiento y eventos de manipulación se envían como parte de los reportes del dispositivo.
- El tracker utiliza el intervalo de reporte configurado para controlar la frecuencia de envíos al puerto 8888 del servidor Plaspy.
- Plaspy recibe datos por UDP o TCP y detecta automáticamente el protocolo del dispositivo para interpretar los mensajes.
- Usar el mismo puerto para diferentes dispositivos simplifica la configuración del servidor y reduce la complejidad por dispositivo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Concox para el JM-LG01, normalmente mediante comandos SMS o una herramienta aprobada por Concox, y confirme la versión de firmware del dispositivo.
2. Configure el APN del operador usando el comando APN e incluya el nombre de usuario y la contraseña del APN si son requeridos.
3. Ingrese el endpoint de servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 y establezca el puerto en 8888.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una elección explícita.
5. Defina un intervalo de reporte apropiado para su caso de uso y active el modo GPRS para que el dispositivo pueda transmitir datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el tracker necesita un reinicio para aplicar los cambios.
7. Verifique que el dispositivo reporte a Plaspy comprobando el estado en su cuenta Plaspy y usando cualquier comando de verificación a bordo que soporte el tracker.

## Comandos de configuración de ejemplo

El JM-LG01 admite configuración vía SMS. El fabricante facilita los siguientes comandos SMS públicos. Preservar los marcadores de posición como [apn], [apnu] y [apnp] y reemplazarlos por los valores de su operador al enviar.

- Resetear a configuración de fábrica (paso inicial opcional)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
Nota: [apn] es obligatorio. [apnu] y [apnp] son opcionales y representan usuario y contraseña del APN respectivamente.
```text
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS usando el dominio de Plaspy (la selección UDP o TCP se gestiona por separado)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS usando la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos (se muestran dos variantes según la guía del fabricante)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Activar modo GPRS
```text
GPRSON,1#
```

- Consultar parámetros para verificar la configuración actual
```text
GPRSSET#
```

Envíe cada comando como un SMS separado al número de la SIM del dispositivo. Use el comando SERVER con dominio o IP según corresponda a su entorno. El comando FACTORY# restablece la configuración y debe usarse solo cuando se desea un reinicio de fábrica o para aprovisionamiento inicial si es necesario.

## Notas sobre la configuración

- La configuración por SMS es de uso común para el JM-LG01, pero el soporte exacto de comandos y la sintaxis pueden variar según la versión de firmware.
- Elija entre la versión SERVER con dominio o con IP según la disponibilidad de DNS; ambos apuntan a Plaspy y usan el puerto 8888.
- El dispositivo soporta transporte UDP y TCP. Seleccione el transporte si el equipo requiere una elección explícita; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Conserve los marcadores de APN y confirme los datos del APN del operador antes de enviar comandos para evitar sesiones de datos fallidas.
- Siempre consulte la documentación del fabricante para restricciones específicas del dispositivo o parámetros adicionales no incluidos en la lista pública de comandos.

## Por qué usar Plaspy con esta configuración

Usar el JM-LG01 con Plaspy ofrece un camino sencillo hacia la visibilidad a largo plazo de activos y el monitoreo por eventos. El diseño de larga duración del dispositivo y su telemetría anti-manipulación, combinados con el servidor compartido de Plaspy y la detección automática de protocolos, permiten a las organizaciones desplegar rastreadores GNSS portátiles a escala manteniendo una configuración de servidor coherente entre tipos de dispositivos.

Para saber más sobre Plaspy y cómo la plataforma puede apoyar despliegues de rastreo de flotas y activos visite https://www.plaspy.com. Para los comandos de configuración más recientes, notas de firmware y guía de instalación consulte al fabricante en https://www.iconcox.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
