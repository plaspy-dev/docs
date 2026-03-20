---
slug: /yulongda/h02/configuration
id: h02-configuration
sidebar_label: Configuration
title: YulongDa - H02 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el H02 de YulongDa para Plaspy con ajustes de servidor compartido y comandos SMS para APN y servidor
keywords:
  - configuración YulongDa H02
  - configuración H02 para Plaspy
  - configuración de servidor YulongDa H02
  - YulongDa H02 para Plaspy
  - configuración rastreador GPS H02
  - configuración H02 para Plaspy
  - configuración rastreador GPS YulongDa
  - configuración servidor rastreador GPS
  - rastreo de vehículos H02
  - configuración rastreador Plaspy
---

# YulongDa - Configuración H02

Esta página documenta el contexto público de configuración para usar el rastreador YulongDa H02 con Plaspy. Explica los ajustes públicos del servidor Plaspy necesarios para encaminar los datos del dispositivo a la plataforma y muestra comandos SMS prácticos y pasos de configuración de uso común entre instaladores e integradores.

Plaspy utiliza los mismos ajustes de servidor y puerto para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que esta página se concentra en los ajustes públicos y prácticos y en los comandos SMS incluidos en el ejemplo de configuración disponible para el modelo.

## Resumen de la configuración

El objetivo al configurar el YulongDa H02 para Plaspy es preparar el dispositivo para que envíe datos de ubicación y estado de forma fiable al punto final compartido de Plaspy, de modo que la unidad aparezca y se actualice correctamente en la plataforma. Los comandos públicos que se muestran a continuación y los ajustes de servidor le permiten establecer el APN del operador, apuntar el dispositivo al endpoint de Plaspy y ajustar los intervalos básicos de reporte.

- Configurar el APN del operador para que el dispositivo se conecte a la red de datos móviles y alcance Plaspy.
- Establecer la dirección del servidor GPRS para que los datos se entreguen a Plaspy en d.plaspy.com o en la IP equivalente.
- Ajustar los intervalos de reporte de posición para los estados en movimiento y detenidos según las necesidades de monitoreo.
- Validar la conectividad del dispositivo con Plaspy y confirmar que la unidad aparezca en la plataforma.
- Asegurarse de que el dispositivo use UDP o TCP en el puerto compartido de Plaspy según sea necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son los ajustes públicos del endpoint de Plaspy que debe usar al configurar el H02.

## Requisitos habituales antes de comenzar

- Un equipo YulongDa H02 con alimentación y accesible, con una tarjeta SIM funcional y un plan de datos activo si va a usar entrega por GPRS. El H02 admite rutas de configuración por GPRS o por SMS como se muestra en los comandos de ejemplo.
- Conocimiento del APN del operador de la SIM y de cualquier nombre de usuario o contraseña necesarios para el acceso de datos.
- Acceso al método de configuración soportado por el fabricante, como comandos SMS o la herramienta de configuración del proveedor.
- La contraseña por defecto del dispositivo si el conjunto de comandos la requiere; los ejemplos asumen la contraseña inicial 000000.
- Cobertura de la red móvil y conectividad GPRS en el lugar de la instalación.
- Un método para ver o recibir el dispositivo en Plaspy después de aplicar los ajustes, para validar que el reporte está activo.

## Cómo se conecta este rastreador a Plaspy

El YulongDa H02 transmite los datos de posición registrados a la plataforma Plaspy usando datos celulares o SMS según el módem y la configuración. Cuando se configura para usar GPRS, el dispositivo abre una conexión al endpoint del servidor Plaspy y envía telemetría al puerto compartido.

- El dispositivo se apunta al dominio o a la IP del servidor Plaspy para que los datos salientes se enruten hacia Plaspy.
- Los datos se envían por UDP o TCP al puerto 8888 según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo entrante del rastreador y procesa los mensajes del dispositivo.
- Se transmiten actualizaciones periódicas de posición y cambios de estado para que la unidad sea visible en la interfaz de Plaspy.
- Los intervalos de reporte se pueden ajustar para que las actualizaciones en movimiento y detenidas se adapten a sus necesidades de monitoreo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de YulongDa para el H02, como el conjunto de comandos SMS del fabricante o el software de configuración.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor o IP.
3. Establezca el puerto de destino a 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; Plaspy admite ambos en el mismo puerto.
5. Configure el APN del operador y cualquier usuario o contraseña del APN que requiera la SIM usando el comando o la herramienta correspondiente.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo indican.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo y las posiciones recientes en la plataforma Plaspy.

Si utiliza los comandos SMS proporcionados, siga el orden y los valores predeterminados descritos más abajo para establecer el APN, el servidor y los intervalos de reporte.

## Comandos de ejemplo para la configuración

Los siguientes comandos se extraen del ejemplo público de configuración del modelo H02. Se usan mensajes SMS enviados desde un teléfono de control al dispositivo. Los ejemplos asumen la contraseña inicial del equipo 000000, que puede ser la predeterminada de fábrica. Mantenga los marcadores de posición tal como aparecen.

- Establecer el APN del operador. Si el APN requiere usuario o contraseña, envíe la variante que incluye [apnu] y [apnp].

```
*APN#000000#[apn]#
```

Variante opcional con usuario y contraseña del APN:

```
*APN#000000#[apn]#[apnu]#[apnp]#
```

Nota: Reemplace [apn] por la cadena APN de su operador móvil. Reemplace [apnu] y [apnp] por el usuario y la contraseña del APN si su operador los requiere. Si no se necesita usuario ni contraseña, use el comando más corto.

- Apuntar el servidor GPRS a Plaspy usando la IP y el puerto de Plaspy:

```
*IP#000000#54.85.159.138#8888#
```

Este comando apunta el dispositivo a Plaspy. También puede usar d.plaspy.com en herramientas del fabricante o en campos que acepten nombres de dominio.

- Establecer el intervalo de actualización en movimiento a 60 segundos:

```
XT60
```

- Establecer el intervalo de actualización en reposo a 60 segundos:

```
NXT60
```

Preserve el orden de los comandos al seguir la guía del fabricante. Algunos dispositivos aceptan nombres de dominio en lugar de la dirección IP, pero la IP mostrada arriba es el endpoint público de Plaspy usado en el ejemplo. Si su dispositivo exige una selección explícita de transporte entre UDP o TCP, utilice la herramienta del dispositivo o el comando SMS documentado por YulongDa para elegir el transporte preferido; Plaspy admite ambos en el puerto 8888.

## Notas de configuración

- Los comandos de ejemplo usan configuración por SMS, que es común en dispositivos YulongDa, pero en algunos casos se emplea software de PC u otras herramientas OTA según el firmware y la revisión del modelo.
- Las contraseñas por defecto del dispositivo varían según la producción y la región; los ejemplos asumen 000000 como contraseña inicial. Confirme la contraseña real en la etiqueta del dispositivo o en la documentación del fabricante.
- Las diferencias de firmware pueden cambiar la sintaxis de los comandos, los comandos disponibles o los pasos requeridos. Siempre confirme la sintaxis con la documentación actual de YulongDa para el H02.
- Elija UDP o TCP en el dispositivo solo si este requiere una selección explícita de transporte. Plaspy aceptará cualquiera de los dos protocolos en el puerto compartido 8888.
- Verifique los valores de APN, usuario y contraseña con el operador móvil antes de enviar comandos. Una configuración de APN incorrecta impedirá la conectividad GPRS.

## Por qué usar Plaspy con esta configuración

Usar el YulongDa H02 con Plaspy ofrece una forma sencilla de centralizar el reporte de ubicación y estado para vehículos y otros activos. Con el endpoint compartido de Plaspy y la detección automática de protocolos, muchos equipos H02 pueden configurarse rápidamente para reportar a una única plataforma para monitoreo, generación de informes y supervisión operativa.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, notas de firmware y orientación de configuración del YulongDa H02, confirme los detalles en el sitio del fabricante http://www.yulongdatechnology.com ya que los pasos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
