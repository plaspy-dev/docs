---
slug: /bofan/pt_502/configuration
id: pt_502-configuration
sidebar_label: Configuration
title: Bofan - PT-502 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Bofan PT-502 y conectarlo a los servidores de Plaspy por GPRS o SMS
keywords:
  - Configuración Bofan PT-502
  - Configuración PT-502 Plaspy
  - Configuración servidor Bofan PT-502
  - Configuración GPRS PT-502
  - Configuración SMS PT-502
  - Configuración rastreador GPS Bofan
  - Configuración software seguimiento PT-502
  - Configuración rastreador vehicular Plaspy
  - Integración PT-502 plataforma
  - Configuración seguimiento Bofan PT-502
---

# Bofan - Configuración PT-502

Esta página describe el contexto público de configuración para utilizar el rastreador Bofan PT-502 con Plaspy. Se enfoca en los pasos y comandos públicos prácticos que permiten al PT-502 comunicarse con los servidores de Plaspy por GPRS o mediante comandos SMS cuando corresponde.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo de cada rastreador; los pasos exactos del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. Use las indicaciones de esta guía junto con la documentación del PT-502 y las instrucciones de su proveedor.

## Panorama de la configuración

El objetivo de esta configuración es preparar el PT-502 para reportar ubicación y eventos a Plaspy de manera confiable usando el endpoint y puerto compartidos de Plaspy. Cuando el rastreador admite configuración por SMS, ese método suele utilizarse para establecer el identificador, el APN, la dirección del servidor y los intervalos de reporte.

- Configure el identificador del dispositivo para que Plaspy asocie los mensajes con la unidad correcta.
- Establezca el APN y, opcionalmente, el usuario y la contraseña del APN para habilitar datos GPRS.
- Apunte el rastreador al servidor de Plaspy d.plaspy.com o a la IP del servidor y configure el puerto 8888.
- Elija UDP o TCP si el dispositivo requiere seleccionar el tipo de transporte.
- Defina un intervalo de reporte adecuado según sus necesidades de seguimiento y consumo de datos.
- Valide la conectividad para que el equipo sea visible en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP (el PT-502 puede configurarse con UDP o TCP en el puerto 8888)  
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una tarjeta SIM con datos habilitados y la información APN requerida por su operador móvil.  
- El equipo con batería cargada o conexión a la alimentación del vehículo para que esté encendido durante la configuración.  
- Acceso al método de configuración SMS del PT-502 o a la herramienta oficial del fabricante.  
- El IMEI del dispositivo y la contraseña SMS del equipo (la contraseña pública por defecto en ejemplos del fabricante es 000000).  
- Un teléfono capaz de enviar SMS al dispositivo si va a usar configuración por SMS.  
- Confirmación de cobertura de red y disponibilidad de GPRS para la SIM instalada.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el PT-502 envía sus datos de ubicación y estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes y los asocia con el identificador del dispositivo para que la unidad sea visible y pueda reportarse en la plataforma.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El identificador del dispositivo (GID o similar) se usa para mapear los datos a la unidad correcta en Plaspy.  
- Los intervalos de reporte determinan la frecuencia con que el dispositivo envía actualizaciones de ubicación a Plaspy.  
- El transporte puede ser UDP o TCP según la configuración del equipo; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Tras una configuración exitosa, el dispositivo debería aparecer y enviar telemetría a Plaspy para su monitoreo operativo.

## Flujo común de configuración

1. Acceda al método oficial de configuración del Bofan PT-502, como comandos SMS o la herramienta del proveedor documentada por el fabricante.  
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en la opción de servidor del dispositivo.  
3. Configure el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).  
4. Seleccione UDP o TCP si el dispositivo le solicita elegir un protocolo de transporte.  
5. Establezca el identificador del dispositivo (GID de 14 dígitos o el método de identificación que especifique Bofan), el APN y el intervalo de reporte.  
6. Aplique o guarde la configuración en el equipo y reinicie el rastreador si el fabricante recomienda un reinicio.  
7. Verifique que el dispositivo reporte a Plaspy y que aparezca en la plataforma como una unidad activa.

## Comandos de configuración de ejemplo

El PT-502 soporta configuración por SMS. A continuación aparecen comandos SMS de ejemplo públicos extraídos de las muestras de configuración del dispositivo. Sustituya los marcadores de posición según se indica antes de enviar los SMS. La contraseña SMS por defecto en las muestras públicas es 000000.

- Restauración de fábrica (opcional o en configuración inicial)
```text
000000DFT
```

- Establecer identificador de 14 dígitos para Plaspy (use los últimos 14 dígitos del IMEI)
```text
000000GID<14-digit-identifier>
```
Explicación: reemplace \<14-digit-identifier> con los últimos 14 dígitos del IMEI del dispositivo. Este identificador lo usa Plaspy para asociar el equipo.

- Configurar el APN de su operadora
```text
000000APN{{apn}},{{apnu}},{{apnp}}
```
Explicación: {{apn}} es el nombre del APN requerido por su operador. {{apnu}} y {{apnp}} son el usuario y la contraseña del APN y deben incluirse solo si su operador los requiere.

- Establecer el servidor GPRS a Plaspy (IP del servidor y puerto)
```text
000000SVR54.85.159.138,8888
```
Nota: Puede usar d.plaspy.com en lugar de la IP numérica cuando el dispositivo soporte nombres de dominio, pero el ejemplo público establece el servidor por IP y puerto.

- Establecer intervalo de actualización a 1 minuto
```text
000000GTI60
```
Explicación: GTI60 configura un intervalo de reporte de 60 segundos. Ajústelo según sus necesidades de seguimiento y plan de datos.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y el comportamiento; consulte la documentación oficial de Bofan para indicaciones específicas por firmware.  
- El PT-502 admite configuración por SMS en las muestras públicas; también puede usar herramientas del fabricante si están disponibles.  
- Elija entre UDP y TCP según las condiciones de red y la opción del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Asegúrese de ingresar correctamente las credenciales del APN; los ajustes de APN incorrectos son la causa más frecuente de fallas en la conectividad GPRS.  
- Todos los dispositivos en Plaspy usan el puerto 8888 y Plaspy mapeará los mensajes entrantes a los dispositivos por identificador una vez configurados.

## Por qué usar Plaspy con esta configuración

Usar el PT-502 con Plaspy proporciona a las organizaciones una forma sencilla de obtener visibilidad sobre ubicaciones y eventos de vehículos usando los ajustes de servidor compartidos de Plaspy. La combinación de las opciones de configuración por SMS y GPRS del PT-502 con la detección automática de protocolo de Plaspy y un puerto compartido simplifica el despliegue a gran escala y la puesta en marcha de dispositivos.

Conozca más sobre Plaspy y las capacidades de la plataforma en https://www.plaspy.com. Para obtener las instrucciones más recientes, notas de firmware y referencias oficiales de comandos, confirme los detalles con el fabricante en https://www.bofancloud.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
