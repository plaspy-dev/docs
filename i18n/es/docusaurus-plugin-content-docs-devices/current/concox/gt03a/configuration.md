---
slug: /concox/gt03a/configuration
id: gt03a-configuration
sidebar_label: Configuration
title: Concox - GT03A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Concox GT03A y conectarlo a Plaspy mediante ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración Concox GT03A
  - Instalación Concox GT03A
  - Configuración servidor Concox GT03A
  - Configuración GT03A Plaspy
  - Configuración software seguimiento GT03A
  - Configuración plataforma GPS GT03A
  - Configuración rastreador Plaspy
  - Guía instalación dispositivo Plaspy
  - Comandos SMS rastreador GPS
  - Configuración rastreador vehicular
---

# Concox - Configuración GT03A

Esta página describe el contexto público de configuración para usar el rastreador Concox GT03A con Plaspy. Resume los ajustes de servidor prácticos, los prerequisitos habituales, un ejemplo de flujo de comandos SMS publicados para el GT03A y los pasos necesarios para apuntar el equipo a Plaspy para que reporte ubicación y estado a su cuenta.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. La descripción del GT03A y los comandos SMS publicados sirven de base para la guía a continuación, pero siempre verifique el firmware de su equipo y las herramientas del instalador para confirmar la sintaxis exacta que usa su unidad.

## Resumen de la configuración

El objetivo de este proceso es preparar un GT03A para que se comunique de forma fiable con Plaspy y de ese modo el dispositivo aparezca en la plataforma y envíe actualizaciones regulares. Esto incluye configurar el APN y los parámetros GPRS cuando sean necesarios, establecer el endpoint y el transporte del servidor, y habilitar intervalos de reporte adecuados a sus necesidades de monitoreo.

- Configure el dispositivo para usar el endpoint de servidor de Plaspy y el puerto compartido que usa Plaspy
- Proporcione el APN y los parámetros de la SIM necesarios para que el rastreador pueda abrir datos GPRS
- Seleccione el modo de transporte si el rastreador requiere elegir UDP o TCP y guarde esa configuración
- Defina intervalos de reporte para que las actualizaciones de ubicación lleguen con la cadencia apropiada para su caso de uso
- Verifique la conectividad y confirme que el equipo aparece y reporta en Plaspy después de configurar

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP on port 8888 depending on device preference  
- Plaspy automatically detects the tracker protocol when data arrives  
- All devices in Plaspy use the same port for server communication

## Requisitos habituales antes de la configuración

- Una unidad GT03A con batería o alimentada para que pueda recibir SMS y establecer sesiones de datos
- Una tarjeta SIM funcional con datos y SMS habilitados y la información APN correcta
- Acceso al método de configuración que soporte su unidad, por ejemplo comandos SMS o software del fabricante
- Conocimiento de los ajustes APN de su operador móvil incluyendo los campos opcionales de usuario y contraseña como [apn], [apnu] y [apnp]
- Un medio para enviar comandos SMS al dispositivo desde un número confiable si se usa la configuración por SMS
- Confirmación de los datos del servidor Plaspy a ingresar, que son d.plaspy.com o 54.85.159.138 y puerto 8888

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GT03A envía su ubicación y el estado del dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy acepta conexiones entrantes en el puerto configurado y determina automáticamente el protocolo adecuado para decodificar los mensajes del equipo.

- El rastreador abre una sesión de datos GPRS usando el APN y credenciales configuradas
- El dispositivo envía actualizaciones periódicas de ubicación al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy detecta automáticamente el protocolo del dispositivo y analiza la telemetría entrante
- Eventos como alertas SOS e informes de movimiento son encaminados a la plataforma Plaspy para su visualización
- Una vez confirmado el reporte, el dispositivo se vuelve visible en Plaspy y comienza el monitoreo regular

## Flujo de configuración común

1. Acceda al método oficial de configuración Concox para su GT03A, como la interfaz de comandos SMS o el software proporcionado por el proveedor
2. Si es necesario, opcionalmente restablezca a valores de fábrica para eliminar configuraciones previas
3. Ingrese los parámetros APN para la SIM instalada incluyendo usuario y contraseña si corresponde usando los marcadores de posición del APN
4. Introduzca el servidor como d.plaspy.com o alternativamente 54.85.159.138 y ajuste el puerto a 8888
5. Seleccione UDP o TCP como transporte si el equipo requiere elección; de lo contrario utilice el valor por defecto del dispositivo
6. Establezca un intervalo de reporte que cumpla sus necesidades y habilite el modo GPRS si aplica
7. Aplique o guarde la configuración y reinicie el equipo si el dispositivo requiere reboot para aplicar cambios
8. Valide que el dispositivo informe correctamente a Plaspy y que aparezca en la vista de su plataforma

## Comandos de configuración de ejemplo

El GT03A soporta configuración vía SMS. Los siguientes comandos están publicados para el GT03A y deben enviarse como mensajes SMS al número de la SIM del dispositivo en el orden indicado cuando se usan para la configuración inicial. Los comandos que restablecen ajustes están marcados como opcionales cuando procede.

1. Restablecimiento de fábrica opcional al empezar desde cero
```
FACTORY#
```

2. Ajustar la zona horaria a UTC 0
```
GMT,E,0#
```

3. Establecer el APN del operador móvil
- Reemplace [apn] por el APN de su operador
- Si su APN requiere usuario o contraseña, incluya [apnu] y [apnp] donde sea compatible
```
APN,[apn],[apnu],[apnp]#
```
(Si solo se requiere el APN, enviar APN,[apn]# es aceptable.)

4. Configurar el servidor GPRS a Plaspy usando el dominio (recomendado)
```
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor GPRS usando la dirección IP de Plaspy
```
SERVER,0,54.85.159.138,8888,0#
```

5. Establecer intervalos de actualización a cada 60 segundos
```
TIMER,60#
```
O formato alternativo de timer
```
TIMER,60,60#
```

6. Habilitar modo GPRS
```
GPRSON,1#
```

7. Verificar parámetros GPRS actuales y ajustes de servidor
```
GPRSSET#
```

Notas sobre los marcadores de posición
- [apn] es la cadena APN de su proveedor móvil
- [apnu] es un nombre de usuario APN opcional si su operador lo requiere
- [apnp] es la contraseña APN opcional si fuera necesaria

## Observaciones sobre la configuración

- La configuración por SMS es un método habitual y soportado para unidades GT03A; asegúrese de que el número desde el que envía esté autorizado si el equipo restringe las fuentes de comandos
- Diferencias de firmware y revisiones de hardware pueden cambiar la sintaxis de comandos o los parámetros soportados; siempre confirme la sintaxis para el firmware de su dispositivo
- La elección entre TCP y UDP depende del dispositivo; seleccione el transporte que requiera su instalación y tenga en cuenta que Plaspy acepta ambos en el puerto 8888
- Plaspy utiliza el mismo puerto en los dispositivos compatibles, por lo que estandarizar en el puerto 8888 simplifica despliegues con varios equipos
- Si la configuración por SMS falla, consulte las herramientas Concox o el software del proveedor para métodos alternativos de setup

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un Concox GT03A correctamente configurado ofrece una forma práctica de centralizar ubicación de vehículos, alertas y reportes de estado en una sola plataforma. Con el GT03A reportando al endpoint y puerto compartido de Plaspy, las organizaciones pueden monitorear flotas, recibir alertas SOS y usar geocercas y eventos de movimiento para supervisión operativa.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer guidance verify details on the official Concox site at https://www.iconcox.com/ since setup methods and firmware behavior can change over time.
