---
slug: /yulongda/h09/configuration
id: h09-configuration
sidebar_label: Configuration
title: YulongDa - H09 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del YulongDa H09 para conectar con Plaspy, con ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración YulongDa H09
  - Configuración H09
  - Configuración servidor H09
  - Rastreador GPS H09 Plaspy
  - Configuración rastreador YulongDa
  - Ajustes servidor Plaspy
  - Guía instalación rastreador GPS
  - Rastreo vehicular H09
  - Ajustes APN H09
  - Configuración SMS H09
---

# YulongDa - H09 Configuración

Esta página describe el contexto público de configuración para usar el rastreador YulongDa H09 con Plaspy. Explica los valores prácticos de servidor y ejemplos de comandos SMS comúnmente usados para apuntar el H09 a Plaspy para seguimiento y monitoreo en tiempo real. El contenido se centra en los valores públicos requeridos por Plaspy y en el proceso general para aplicarlos al dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, las herramientas del vendedor y el tipo de instalación. La configuración del modelo H09 mostrada abajo incluye comandos basados en SMS que el fabricante suele documentar como ejemplo; verifique el comportamiento del equipo con la documentación vigente del fabricante antes de realizar un despliegue masivo.

## Resumen de configuración

El objetivo al configurar el YulongDa H09 para Plaspy es garantizar que el dispositivo establezca una conexión GPRS confiable con el servidor de Plaspy, envíe actualizaciones periódicas de ubicación y reporte alarmas y cambios de estado para que la unidad aparezca correctamente en la plataforma Plaspy.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que los datos salientes lleguen a la plataforma.
- Configurar el APN y las credenciales PDP necesarias para que el dispositivo use datos móviles.
- Definir intervalos de reporte para estados en movimiento y detenido, controlando la frecuencia de envío.
- Usar el método de configuración soportado por el fabricante, por ejemplo comandos SMS, cuando esté disponible.
- Validar la conectividad y confirmar que el dispositivo reporte a Plaspy para que se vuelva visible en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos compatibles

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del equipo cuando éste se conecte al endpoint configurado.

## Requisitos típicos antes de la configuración

- Un YulongDa H09 instalado y con alimentación, con acceso a la contraseña del dispositivo usada para la configuración
- Una tarjeta SIM funcional con un plan de datos móviles y los valores APN correctos del operador
- Un teléfono con capacidad de enviar SMS o la herramienta oficial de configuración del fabricante si se usan comandos SMS
- Acceso al lugar de instalación del dispositivo o al instalador que pueda reiniciar o interrumpir la alimentación del equipo según sea necesario
- Una cuenta en Plaspy y permisos para agregar o ver el dispositivo una vez que comience a reportar al servidor
- Confirmación del APN, nombre de usuario APN y contraseña APN por parte del operador móvil cuando sean requeridos

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el H09 envía sus datos de ubicación y estado a través de la red móvil al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos paquetes y hace que el dispositivo sea visible en la plataforma, donde se pueden supervisar el rastreo, las alertas y el historial.

- El rastreador se configura para reportar a Plaspy usando la dirección y puerto del servidor configurados.
- Las actualizaciones de ubicación y estado se envían según los intervalos establecidos para condiciones de movimiento y detenido.
- Alarmas como vibración, SOS y eventos ACC se enviarán al servidor después de la configuración.
- Plaspy recibe el flujo del dispositivo y detecta automáticamente el protocolo del rastreador para su correcta interpretación.
- El mismo puerto de Plaspy se utiliza en los dispositivos compatibles, lo que hace consistente el aprovisionamiento.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software soportado por el H09, por ejemplo la interfaz de comandos SMS proporcionada por YulongDa.
2. Ingrese la información del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo acepte el dispositivo.
3. Configure el puerto en 8888, que es el puerto estándar de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el H09 requiere una selección explícita de transporte.
5. Aplique o guarde la configuración usando el método del fabricante, normalmente mediante el envío de comandos SMS o la herramienta del vendedor.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware requiere un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo en su cuenta de Plaspy y confirmando la recepción de posiciones entrantes.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS se extraen de la guía pública de configuración del modelo H09. Los ejemplos asumen que la contraseña del dispositivo es 000000, que suele ser el valor de fábrica. Mantenga el orden de los comandos al aplicar estos ajustes.

- Configurar el APN del operador
Si su APN sólo requiere el nombre del APN:
```
*APN#000000#{{apn}}#
```
Si el APN requiere usuario y contraseña, incluya estos marcadores:
```
*APN#000000#{{apn}}#{{apnu}}#{{apnp}}#
```
Notas: {{apn}} es el nombre del APN suministrado por su operador móvil. {{apnu}} y {{apnp}} son los campos opcionales de usuario y contraseña del APN. Mantenga estos marcadores al completar con las credenciales de su operador.

- Configurar el servidor GPRS para apuntar a Plaspy
```
*IP#000000#54.85.159.138#8888#
```
Este ejemplo usa la IP del servidor Plaspy. Si su dispositivo o firmware acepta un nombre de dominio, puede ingresar alternativamente el dominio d.plaspy.com mediante la herramienta del fabricante, pero el ejemplo público anterior utiliza la IP.

- Establecer intervalo de reporte en movimiento a 60 segundos
```
XT60
```

- Establecer intervalo de reporte en detenido a 60 segundos
```
NXT60
```

Notas iniciales opcionales: los ejemplos suponen la contraseña por defecto 000000. Si la contraseña de su dispositivo fue cambiada por un instalador o vendedor, use la contraseña actual en lugar de 000000.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o los marcadores soportados; revise las notas de la versión del firmware antes de realizar aprovisionamiento masivo.
- Algunas unidades H09 aceptan comandos SMS mientras que otras pueden ser provisionadas con software de PC del proveedor o una herramienta de configuración; siga el método proporcionado por su vendedor.
- Elija UDP o TCP según lo solicite el dispositivo; Plaspy soporta ambos transportes y detectará automáticamente el protocolo correcto cuando el dispositivo se conecte.
- Confirme el APN y las credenciales PDP con el operador móvil para evitar problemas de conectividad.
- Si la configuración no surte efecto de inmediato, reiniciar o hacer un ciclo de alimentación del dispositivo suele ser necesario.

## Por qué usar Plaspy con esta configuración

Configurar el YulongDa H09 para reportar a Plaspy ofrece una forma directa de centralizar las actualizaciones de ubicación y estado del vehículo para monitoreo, alertas y supervisión operativa. Usar los ajustes de servidor compartidos de Plaspy garantiza un proceso de aprovisionamiento uniforme en toda la flota y permite incorporar rápidamente unidades H09 de forma individual.

To learn more about Plaspy and to see platform features, visit https://www.plaspy.com. For the most current device specific setup steps, firmware details, and full manufacturer documentation for the YulongDa H09, review the YulongDa website at http://www.yulongdatechnology.com since manufacturer specifications and recommended setup methods can change over time.
