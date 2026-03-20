---
slug: /topfly/torchx_110/configuration
id: torchx_110-configuration
sidebar_label: Configuration
title: TopFly - TorchX 110 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopFly TorchX 110 con ajustes de servidor Plaspy y comandos SMS para integración rápida
keywords:
  - configuración TopFly TorchX 110
  - configuración TorchX 110 Plaspy
  - configuración rastreador GPS TopFly
  - configuración servidor TorchX 110
  - integración rastreador Plaspy
  - guía configuración rastreador OBDII
  - comandos SMS TorchX 110
  - configuración plataforma seguimiento de vehículos
  - configuración rastreadores GPS para flota
  - integración telemetría CAN bus
---

# TopFly - Configuración TorchX 110

Esta página describe el contexto público de configuración necesario para usar el TopFly TorchX 110 con Plaspy. Resume los ajustes prácticos del servidor y el flujo de configuración que puede aplicar para apuntar el dispositivo a Plaspy, de modo que el rastreador transmita ubicación y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TorchX 110 admite comandos por SMS y configuración local que se pueden usar para establecer el APN, el endpoint del servidor y los intervalos de reporte antes de validar el dispositivo en Plaspy.

## Resumen de la configuración

El proceso prepara al TorchX 110 para comunicarse de forma fiable con Plaspy y reportar posición, telemetría del bus CAN y eventos. Esta página se centra en los pasos y comandos públicos necesarios para apuntar el dispositivo al endpoint de Plaspy y establecer intervalos de reporte adecuados.

- Configurar el APN del equipo para que la unidad pueda abrir una sesión de datos GPRS o LTE.
- Establecer el endpoint del servidor a Plaspy, usando dominio o IP, y utilizar el puerto compartido de Plaspy.
- Elegir el modo de transporte que soporte el dispositivo (UDP o TCP) y guardar esa configuración.
- Definir los intervalos de reporte para que las actualizaciones de posición y la telemetría lleguen con la frecuencia deseada.
- Verificar que el equipo se registre y comience a enviar mensajes al endpoint de Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Asegúrese de que el TorchX 110 esté alimentado e instalado según las indicaciones del fabricante, por ejemplo conectado al puerto OBDII para alimentación del vehículo.
- Una tarjeta SIM válida con un plan de datos y las credenciales APN correctas del operador móvil.
- Acceso al canal de configuración que soporte la unidad, como comandos SMS o la herramienta de configuración del proveedor.
- Conocimiento de la contraseña predeterminada del dispositivo si la configuración por SMS la requiere. El ejemplo público usa la contraseña predeterminada 0000.
- Una cuenta en Plaspy y la capacidad de validar dispositivos en Plaspy después de la configuración.
- Un periodo de pruebas para confirmar que se reciben actualizaciones frecuentes y telemetría en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El TorchX 110 se configura para reportar posición y telemetría del vehículo al endpoint y puerto compartido de Plaspy, de forma que Plaspy pueda ingerir y mostrar datos en tiempo real y históricos para operaciones de flota.

- El rastreador abre una conexión de datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte se configura como UDP o TCP según su preferencia y las opciones del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes entrantes.
- La telemetría, incluida la posición GNSS y los campos del bus CAN, se reenvía a la plataforma Plaspy para su visualización, alertas e informes.
- Los intervalos regulares de actualización y el reporte de eventos aseguran que el dispositivo permanezca visible en los paneles y registros de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TopFly para el TorchX 110, como el conjunto de comandos SMS del proveedor o la herramienta de configuración.
2. Configure el APN del operador usando el método del fabricante para que el equipo pueda establecer una sesión de datos celular.
3. Ingrese el endpoint del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138.
4. Configure el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para confirmar los cambios.
6. Valide que el dispositivo reporte a Plaspy y que la telemetría y la ubicación aparezcan en su cuenta de Plaspy.

## Ejemplo de comandos de configuración

El TorchX 110 admite configuración por SMS. Los siguientes comandos públicos son un ejemplo común de flujo de configuración usando la contraseña predeterminada 0000. Envíe cada línea como un SMS al dispositivo. Conserve los marcadores de posición para los valores del APN y reemplácelos por las credenciales de su operador donde corresponda.

- Establecer la zona horaria a UTC 0
```
GMT,0000,0#
```

- Configurar el APN del operador y, opcionalmente, el usuario y la contraseña del APN
```
APN,0000,[apn],[apnu],[apnp]#
```
Nota: [apn] es la cadena del APN del operador. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN. Déjelos en blanco u omita los campos si su operador no requiere credenciales.

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```
IP,0000,54.85.159.138 8888#
```
También puede apuntar al dominio d.plaspy.com si el dispositivo admite nombres de dominio en la configuración del servidor.

- Establecer el intervalo de reporte a 60 segundos
```
TIMER,0000,60:60:0:0#
```
Este comando TIMER define intervalos de reporte periódicos. Ajuste los valores según sus necesidades de telemetría y las capacidades del dispositivo.

## Notas de configuración

- La configuración por SMS es común en los dispositivos TopFly; siga las instrucciones oficiales del fabricante para la sintaxis de los comandos y casos especiales.
- Las versiones de firmware y las variantes regionales del dispositivo pueden modificar los comandos disponibles o el comportamiento del transporte. Confirme los comandos según las notas de firmware de su dispositivo.
- Elija UDP o TCP según la fiabilidad de la red y las políticas de firewall. Plaspy acepta ambos transportes y detecta el protocolo automáticamente.
- Reemplace los marcadores de APN por los datos de su operador celular antes de enviar los mensajes SMS.
- Tenga en cuenta la contraseña predeterminada del dispositivo. Si cambia la contraseña, guárdela de forma segura para permitir futuras configuraciones remotas.

## Por qué usar Plaspy con esta configuración

Usar el TorchX 110 con Plaspy ofrece a las organizaciones una vía sencilla para recopilar GPS de alta frecuencia y telemetría del bus CAN, confiando en un único endpoint y puerto de Plaspy para todos los dispositivos compatibles. Apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y elegir UDP o TCP es el patrón público de configuración que permite a Plaspy detectar automáticamente el protocolo del rastreador y comenzar a ingerir datos.

Para obtener más información sobre Plaspy y cómo la plataforma maneja la incorporación de dispositivos y la telemetría, visite https://www.plaspy.com. Para las notas más recientes específicas del dispositivo, firmware y referencias de comandos del fabricante, confirme los detalles actuales en https://www.topflytech.com/ ya que la implementación y el firmware pueden cambiar con el tiempo.
