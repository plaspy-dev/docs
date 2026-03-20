---
slug: /noran/nr024/configuration
id: nr024-configuration
sidebar_label: Configuration
title: Noran - NR024 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Noran NR024 en Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración Noran NR024
  - Instalación Noran NR024
  - Noran NR024 Plaspy
  - Configuración rastreador GPS NR024
  - Configuración servidor NR024
  - Configuración rastreador Plaspy
  - Instalación seguimiento de vehículos
  - Comandos SMS rastreador GPS
  - Configuración rastreo de flotas
  - Configuración GPRS NR024
---

# Noran - Configuración NR024

Esta página describe el contexto público de configuración para usar el rastreador GPS Noran NR024 con Plaspy. Reúne los ajustes de servidor de Plaspy necesarios y los comandos SMS públicos conocidos que usan muchos dispositivos NR024, para que pueda preparar el rastreador e integrarlo y visualizarlo en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El NR024 admite conectividad GSM GPRS y comandos de configuración por SMS; los ejemplos en esta página usan el formato de comandos SMS disponible públicamente por Noran como punto de partida práctico.

## Resumen de la configuración

El proceso de configuración prepara al NR024 para enviar su ubicación y datos del dispositivo a Plaspy y para que aparezca correctamente en la plataforma. En los dispositivos NR024, las acciones comunes de configuración se realizan mediante comandos SMS para establecer el APN del operador, apuntar el dispositivo al servidor de Plaspy y habilitar el reporte por GPRS.

- Configure el APN del dispositivo para que el rastreador pueda acceder a la red de datos móviles.
- Establezca la dirección del servidor GPRS al endpoint de Plaspy para que los datos reportados lleguen a la plataforma.
- Seleccione el modo de transporte (UDP o TCP) y el puerto compartido de Plaspy para que el rastreador pueda conectarse.
- Habilite el reporte por GPRS y valide el estado del dispositivo usando el comando de estado.
- Confirme que el dispositivo aparece y reporta correctamente en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte compatible UDP o TCP — el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Detección automática de protocolo en Plaspy — Plaspy detecta automáticamente el protocolo del rastreador  
- Nota: todos los dispositivos en Plaspy utilizan el mismo puerto

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con plan de datos y el APN correcto del operador móvil.  
- Alimentación aplicada al NR024 y el dispositivo en un estado listo para aceptar comandos SMS de configuración.  
- Acceso a un teléfono o herramienta capaz de enviar SMS para enviar los mensajes de configuración al rastreador.  
- Conocimiento de la contraseña del dispositivo si no es la predeterminada; la contraseña pública de ejemplo es 000000.  
- El identificador del dispositivo (Device Id) para registro y verificación; la respuesta de estado contiene el Device Id.  
- Acceso a la documentación oficial de Noran o a software del fabricante para métodos alternativos de configuración si fuera necesario.

## Cómo se conecta este rastreador a Plaspy

El NR024 se configura para enviar ubicación en tiempo real y el estado del dispositivo por GPRS al endpoint y puerto del servidor Plaspy. Una vez aplicados el APN y los ajustes de servidor, el dispositivo abre una conexión de datos y reenvía la información de rastreo para que Plaspy muestre ubicación, alertas y telemetría del dispositivo.

- El rastreador usa el APN del operador para conectarse a la red de datos móviles.  
- El dispositivo publica datos al endpoint de Plaspy en d.plaspy.com o en 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del rastreador.  
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que la plataforma aceptará conexiones de los protocolos soportados.  
- Tras la configuración, el dispositivo reporta a Plaspy y queda visible para monitoreo e informes de eventos.  

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de Noran para su modelo NR024, normalmente comandos SMS o el software del proveedor.  
2. Confirme o ingrese el APN del operador móvil usado por el dispositivo.  
3. Introduzca d.plaspy.com o la dirección IP 54.85.159.138 como servidor GPRS.  
4. Establezca el puerto del servidor en 8888.  
5. Seleccione UDP o TCP si el dispositivo requiere elección de transporte.  
6. Habilite o cambie el rastreador al modo de reporte por GPRS y guarde la configuración.  
7. Reinicie o corte la alimentación del dispositivo si el firmware lo requiere.  
8. Valide que el dispositivo reporte a Plaspy y verifique que el Device Id aparece en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son ejemplos públicos para la configuración por SMS del NR024. La configuración de ejemplo usa la contraseña del dispositivo 000000 en estos comandos. Mantenga los marcadores de posición donde se muestran y reemplácelos por los valores de su operador.

- Establecer el APN del operador. Reemplace {{apn}} por el APN de su operador. Opcionalmente incluya {{apnu}} y {{apnp}} si su APN requiere usuario y contraseña.

```
A000000,012,{{apn}}
```

Comando APN extendido opcional con usuario y contraseña como marcadores de posición:

```
A000000,012,{{apn}},{{apnu}},{{apnp}}
```

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto. Esto apunta el dispositivo al endpoint de Plaspy y al puerto 8888.

```
A000000,010,54.85.159.138,8888
```

- Cambiar el dispositivo al modo GPRS (habilitar reporte de datos).

```
A000000,011,1
```

- Consultar la configuración y el estado actuales del dispositivo. Este comando de verificación devuelve el Device Id (la primera palabra que comienza con NR), APN, servidor, puerto, estado GPRS, estado de conexión y la intensidad de señal GSM.

```
A000000,004
```

Notas sobre marcadores de posición y valores predeterminados:
- {{apn}} es el APN del operador móvil.  
- {{apnu}} es el usuario del APN, si se requiere.  
- {{apnp}} es la contraseña del APN, si se requiere.  
- Los ejemplos usan la contraseña predeterminada del dispositivo 000000 tal como aparece en la documentación pública de Noran. Si su contraseña es diferente, sustitúyala en la misma posición.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar la sintaxis o el comportamiento de los comandos; confirme los comandos según la versión de firmware del dispositivo.  
- El NR024 admite configuración por SMS como se muestra aquí, pero también pueden existir herramientas del proveedor o configuración por USB/serial disponibles en Noran.  
- La elección entre UDP o TCP puede afectar la fiabilidad y el comportamiento NAT en algunas redes; seleccione el transporte que mejor se adapte a su entorno de conectividad.  
- Mantenga las credenciales APN precisas y verifique la conectividad de datos móviles antes de intentar registrar el dispositivo en Plaspy.  
- Plaspy utiliza el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando este se conecte a d.plaspy.com o 54.85.159.138 puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el Noran NR024 con Plaspy ofrece visibilidad centralizada para operaciones de flota, integrando las capacidades del dispositivo, como cargas en tiempo real, captura de imágenes y monitoreo de combustible, con la plataforma de seguimiento de Plaspy. Configurar el NR024 para reportar a Plaspy usando los ajustes de servidor compartidos permite un reporte consistente de eventos, visibilidad de ubicación y monitoreo operativo en toda su flota.

Para más información sobre Plaspy y cómo funciona con los rastreadores soportados visite https://www.plaspy.com. Para los comandos específicos más recientes, comportamiento de firmware y orientación del fabricante, siempre verifique los métodos de configuración en el sitio web de Noran http://www.norantracker.com/ ya que los detalles pueden cambiar con el tiempo.
