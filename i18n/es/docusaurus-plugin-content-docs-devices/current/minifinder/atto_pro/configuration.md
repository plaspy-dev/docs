---
slug: /minifinder/atto_pro/configuration
id: atto_pro-configuration
sidebar_label: Configuration
title: MiniFinder - Atto Pro Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del MiniFinder Atto Pro con ajustes de servidor Plaspy y pasos prácticos para seguimiento en tiempo real
keywords:
- Configuración MiniFinder Atto Pro
- Configuración Atto Pro
- Configuración Atto Pro Plaspy
- Configuración rastreador GPS Plaspy
- Ajustes servidor Atto Pro
- Configuración rastreador GPS MiniFinder
- Dispositivos compatibles Plaspy
- Configuración SMS Atto Pro
- Configuración plataforma rastreador GPS
- Integración rastreador animal Plaspy
---

# MiniFinder - Atto Pro Configuración

Esta página ofrece la guía pública de configuración para usar el MiniFinder Atto Pro con la plataforma Plaspy. Se centra en los ajustes de servidor prácticos y en los pasos visibles para el instalador que permiten apuntar el Atto Pro a Plaspy, de modo que el dispositivo pueda enviar posiciones y telemetría para seguimiento en tiempo real, alertas e historial en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando estén disponibles, esta guía incluye comandos SMS públicos y orientación de flujo de trabajo como punto de partida; siempre verifique el formato exacto de los comandos y el comportamiento del firmware con la documentación oficial de MiniFinder.

## Resumen de la configuración

Configurar el Atto Pro para Plaspy prepara el dispositivo para comunicarse con el servidor central de Plaspy y habilita la visibilidad de ubicación y alertas en la plataforma. El proceso público de configuración suele incluir ajustar la zona horaria del dispositivo, configurar el APN de la operadora y apuntar el servidor GPRS del dispositivo a Plaspy.

- Ajuste la zona horaria del dispositivo para que las marcas de tiempo coincidan con los informes en Plaspy.  
- Configure el APN de la tarjeta SIM para que el rastreador pueda establecer una conexión de datos.  
- Apunte el servidor GPRS del dispositivo a Plaspy usando el endpoint y el puerto compartidos.  
- Elija el modo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.  
- Valide la conectividad confirmando que el dispositivo reporte correctamente en Plaspy después de la configuración.

## Ajustes de servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888  
- Plaspy behavior: Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

## Requisitos habituales antes de la configuración

- Un Atto Pro con alimentación y una tarjeta SIM activa insertada que soporte datos GPRS y SMS si planea configurar por SMS.  
- Cobertura de la red móvil en la ubicación del dispositivo para registro y conexión GPRS.  
- Los ajustes APN correctos del operador de la SIM (APN, nombre de usuario y contraseña opcionales).  
- Acceso al método oficial de configuración de MiniFinder, como comandos SMS o herramientas del proveedor, para aplicar los cambios.  
- Una cuenta activa en Plaspy o acceso de administrador para verificar que el dispositivo aparece y reporta en la plataforma.  
- Conocimientos básicos sobre si su despliegue debe usar transporte UDP o TCP.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el Atto Pro establece una conexión de datos celulares y envía posiciones GNSS y actualizaciones de estado al endpoint y puerto compartidos del servidor de Plaspy. Plaspy interpreta el protocolo entrante y pone a disposición de los usuarios en la plataforma la ubicación del dispositivo, las alertas y el historial.

- El rastreador envía paquetes de posición y telemetría a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.  
- El dispositivo puede usar transporte UDP o TCP según cómo esté configurado.  
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes.  
- Los informes y las alertas del Atto Pro se hacen visibles en Plaspy para monitoreo, gestión de geocercas y revisión de historial.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de MiniFinder o al software recomendado para el Atto Pro, como la configuración por comandos SMS o una herramienta del proveedor.  
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 como servidor GPRS del dispositivo.  
3. Configure el puerto del dispositivo en 8888, recordando que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.  
4. Seleccione UDP o TCP en el dispositivo si es necesario elegir el transporte.  
5. Aplique o guarde la configuración y, si el dispositivo lo requiere, reinicie o corte y recupere la alimentación del Atto Pro.  
6. Verifique que el dispositivo reporte en Plaspy comprobando en su cuenta Plaspy la recepción de actualizaciones de posición y mensajes de estado.

## Comandos de ejemplo para la configuración

El Atto Pro puede configurarse por SMS. Los siguientes comandos SMS públicos se incluyen en la guía del fabricante y deben enviarse al dispositivo en el orden mostrado.

1. Ajustar la zona horaria a UTC 0
```
tz+00
```

2. Establecer el APN del operador
```
S1,[apn],[apnu],[apnp]
```
- [apn] es la cadena APN del operador móvil.  
- [apnu] es el usuario APN opcional si el operador lo requiere.  
- [apnp] es la contraseña APN opcional si el operador lo requiere.  
- Si su operador no requiere usuario ni contraseña, envíe solo S1,[apn].

3. Establecer el servidor GPRS a Plaspy (IP y puerto)
```
IP1,54.85.159.138,8888
```
- Este comando configura el dispositivo para reportar al servidor Plaspy usando la IP y el puerto indicados arriba. Si su método de configuración acepta el dominio en lugar de la IP, use d.plaspy.com donde la interfaz del dispositivo lo permita.

Nota: Estos comandos son ejemplos públicos incluidos en la guía del dispositivo. La sintaxis exacta de los SMS y los parámetros requeridos pueden variar según la revisión del firmware. Algunos instaladores prefieren herramientas del proveedor o un portal de configuración en lugar de SMS.

## Notas de configuración

- Variaciones de firmware: Los nombres y formatos de los comandos pueden cambiar entre versiones de firmware o revisiones de hardware; confirme la sintaxis exacta con la documentación de MiniFinder.  
- SMS versus herramienta: El Atto Pro incluye ejemplos de configuración por SMS; algunos instaladores usan una aplicación de configuración dedicada o un portal del proveedor para despliegues masivos.  
- Marcadores APN: Mantenga [apn], [apnu] y [apnp] como marcadores al preparar comandos SMS; reemplácelos por los valores de su operador.  
- Elección de transporte: Si su despliegue requiere UDP o TCP, seleccione el transporte adecuado en el dispositivo; Plaspy acepta ambos y maneja automáticamente la detección de protocolo.  
- Política de puerto único: Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración del servidor entre modelos.

## Por qué usar Plaspy con esta configuración

Usar el MiniFinder Atto Pro con Plaspy brinda a empresas y propietarios de mascotas una forma sencilla de centralizar ubicación, alertas e historial en una sola plataforma. Los ajustes de servidor compartidos de Plaspy reducen la variabilidad por dispositivo y la detección automática de protocolos facilita el despliegue cuando se utilizan múltiples tipos de dispositivos en una flota o en un grupo de animales.

Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y la guía de instalación del fabricante, verifique los detalles de su configuración en el sitio de MiniFinder https://minifinder.se/.
