---
slug: /gotop/gx6/configuration
id: gx6-configuration
sidebar_label: Configuration
title: GOTOP - GX6 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GOTOP GX6 para usar con Plaspy con ajustes de servidor transporte y pasos prácticos
keywords:
  - Configuración GOTOP GX6
  - Instalación GOTOP GX6
  - Configuración servidor GX6
  - Rastreador GOTOP Plaspy
  - Configuración rastreador GPS GX6
  - Configuración seguimiento de vehículos
  - Rastreador gestión de flotas
  - Integración GX6 con plataforma
  - Configuración rastreador Plaspy
  - Guía GOTOP GX6
---

# GOTOP - Configuración del GX6

Esta página documenta el contexto de configuración necesario para usar el rastreador GOTOP GX6 con Plaspy. Se enfoca en los valores prácticos de servidor y transporte que debe establecer para apuntar el dispositivo a Plaspy, explica el flujo de trabajo esperado para la puesta en marcha y resalta los principales requisitos a verificar antes de la integración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el GX6 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y el método de configuración que provea el vendedor, por lo que siga esta guía para la parte de Plaspy y consulte al fabricante para los pasos específicos del dispositivo.

## Resumen de configuración

Este proceso prepara al GX6 para comunicarse con la plataforma Plaspy de modo que el dispositivo pueda informar ubicación y eventos y aparecer en Plaspy para su monitoreo y gestión de flota.

- Configure el rastreador para enviar datos al endpoint del servidor Plaspy para que los mensajes de ubicación y eventos se entreguen.
- Seleccione la opción de transporte que soporte el equipo UDP o TCP en el puerto compartido de Plaspy.
- Guarde y aplique la configuración usando el método oficial de GOTOP para que el dispositivo utilice los nuevos valores de servidor.
- Reinicie o haga un ciclo de energía del dispositivo si es necesario para activar los nuevos ajustes.
- Valide la conectividad en Plaspy para confirmar que el GX6 está reportando y visible en su cuenta.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Utilice el dominio d.plaspy.com o la IP 54.85.159.138 al configurar el GX6. El equipo puede enviarse por UDP o TCP en el puerto 8888 y Plaspy detectará automáticamente el protocolo entrante.

## Requisitos típicos antes de la configuración

- El GX6 debe estar alimentado e instalado según las instrucciones del fabricante para que los cambios de configuración persistan.
- Una SIM con datos activa y cobertura de red móvil válida para 4G LTE o redes de respaldo compatibles con el dispositivo.
- Acceso al método oficial de configuración GOTOP, como el software de configuración o comandos SMS/serie si el proveedor los suministra.
- Conocimiento de los ajustes APN necesarios para la SIM y la forma de introducirlos o provisionarlos mediante la interfaz de configuración del dispositivo.
- Una forma de probar la conectividad, por ejemplo observando los reportes del dispositivo en Plaspy o mediante las herramientas de verificación del fabricante.
- Confirmación de la versión de firmware y la revisión de hardware del equipo para asegurar el procedimiento de configuración correcto.

## Cómo se conecta este rastreador a Plaspy

Al configurar el GX6 para Plaspy, el rastreador se ajusta para enviar sus mensajes de ubicación y estado al endpoint y puerto compartido de Plaspy, de modo que la plataforma reciba y procese la telemetría para visibilidad y monitoreo.

- El rastreador envía paquetes de ubicación periódicos o por eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al parser correspondiente.
- Los eventos reportados por el GX6, como violaciones de geocerca, exceso de velocidad, cambios de estado ACC y alarmas de alimentación, se reenvían a la plataforma para alertas y registro.
- Una configuración exitosa hace que el GX6 aparezca en Plaspy con acceso a ubicación, historial e informes de eventos para la supervisión de la flota.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración GOTOP suministrado con el GX6 por el vendedor o fabricante.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como endpoint del servidor.
3. Configure el puerto del servidor en 8888, que es el puerto estándar utilizado por Plaspy para todos los dispositivos.
4. Elija el transporte UDP o TCP si el GX6 requiere seleccionar un transporte.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que los ajustes se escribieron correctamente.
6. Reinicie o haga ciclo de energía del GX6 si las instrucciones del fabricante exigen un reinicio para que los cambios surtan efecto.
7. Valide que el equipo reporte a Plaspy verificando la llegada de conexión o telemetría en la plataforma.

## Ejemplos de comandos de configuración

El método de configuración del GX6 puede variar según el firmware y las herramientas del proveedor. Dado que el fabricante provee las interfaces de configuración, aquí no se incluyen formatos exactos de comandos ni cadenas SMS. Utilice la herramienta oficial de GOTOP o el manual de usuario del GX6 para comandos y ejemplos específicos del dispositivo.

Si la documentación de su instalador incluye ejemplos de comandos para establecer dirección de servidor, puerto, transporte o APN, úselos exactamente como los proporcione el fabricante. Mantenga los marcadores de posición como APN o credenciales de usuario según lo requiera su proveedor de SIM al ingresar los parámetros.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de configuración y los comandos disponibles, por lo que siempre confirme los pasos para su revisión del dispositivo.
- TCP y UDP tienen compensaciones; UDP es sin estado y suele ser más sencillo mientras que TCP ofrece fiabilidad a nivel de conexión. Elija el transporte que mejor se ajuste a su red y al comportamiento del dispositivo.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo entrante para aplicar el parser correcto.
- Si su configuración requiere APN o autenticación de la SIM, asegúrese de provisionar esos parámetros mediante la herramienta de GOTOP o el método de configuración correspondiente.
- Las prácticas del instalador y las variantes regionales del GX6 pueden requerir pasos ligeramente distintos para ingresar la dirección del servidor o guardar la configuración.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP GX6 para reportar a Plaspy brinda a los operadores de flota una plataforma homogénea para ubicación de vehículos, monitoreo de eventos y supervisión operativa. Con Plaspy manejando la detección de protocolos y usando un endpoint y puerto compartidos, la integración se centra en los ajustes del dispositivo y la verificación en lugar del mapeo de protocolos.

Para saber más sobre Plaspy y cómo su flota puede aprovechar la plataforma visite https://www.plaspy.com. Para detalles específicos de instalación del GX6, notas de firmware y herramientas oficiales de configuración consulte la información en el sitio del fabricante https://www.gotop.cc/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
