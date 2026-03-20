---
slug: /wanway/gs22/configuration
id: gs22-configuration
sidebar_label: Configuration
title: WanWay - GS22 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el WanWay GS22 para usarlo con Plaspy mediante ajustes de servidor compartido y comandos SMS para una puesta en marcha rápida
keywords:
  - Configuración WanWay GS22
  - Instalación WanWay GS22
  - Configuración GS22 para Plaspy
  - Configuración rastreador GPS WanWay
  - Configuración de servidor GS22
  - Configuración de rastreador en Plaspy
  - Configuración de rastreo de vehículos
  - Comandos SMS para rastreador GPS
  - Configuración rastreador OBD2
  - Configuración de seguimiento de flotas
---

# WanWay - Configuración GS22

Esta página describe el contexto público de configuración para usar el rastreador WanWay GS22 con la plataforma Plaspy. Reúne los ajustes prácticos y públicos y los comandos SMS de configuración necesarios para apuntar un dispositivo GS22 a Plaspy y validar la conectividad básica. Use esta guía junto con la documentación de hardware y firmware del GS22 proporcionada por el fabricante para detalles específicos del equipo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GS22 admite comandos de configuración por SMS que se pueden usar para definir el APN, el servidor y los intervalos de reporte al preparar el dispositivo para Plaspy.

## Visión general de la configuración

Esta configuración prepara el GS22 para enviar datos de posición y estado a Plaspy, de modo que el dispositivo sea visible y gestionable en la plataforma. Los pasos siguientes se centran en asignar el endpoint de Plaspy, validar la conectividad GPRS y habilitar el reporte periódico.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que la telemetría entrante llegue a la plataforma.
- Configurar el APN del operador para que el GS22 pueda utilizar datos celulares para reportes GPRS.
- Establecer un intervalo de reporte para controlar la frecuencia con la que el rastreador envía telemetría a Plaspy.
- Cambiar el rastreador a modo GPRS y confirmar que esté conectado activamente.
- Verificar la configuración y el estado del dispositivo con los comandos de verificación del GS22.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la instalación

- Un dispositivo GS22 encendido y accesible para configuración.
- Una tarjeta SIM operativa con plan de datos o SMS activo y los datos APN correctos del operador.
- Capacidad para enviar y recibir mensajes SMS desde la ubicación de instalación para la configuración por SMS.
- Acceso al método o herramientas oficiales de configuración WanWay para la revisión de firmware y hardware de su GS22.
- Conocimientos básicos sobre si su instalador necesita UDP o TCP para el entorno si el dispositivo requiere seleccionar transporte.

## Cómo se conecta este rastreador a Plaspy

El GS22 puede configurarse para reportar ubicación y estado del dispositivo al endpoint compartido de Plaspy y al puerto correspondiente, de modo que Plaspy pueda mostrar posición, historial y alertas.

- Al dispositivo se le asigna el dominio o la IP del servidor Plaspy y el puerto para que las subidas de telemetría lleguen a Plaspy.
- Los intervalos de reporte determinan con qué frecuencia el rastreador envía actualizaciones a d.plaspy.com en el puerto 8888.
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador para su correcto parseo.
- Una vez conectado, el rastreador aparece en Plaspy para monitoreo, reproducción de trazas y gestión de eventos.
- Los comandos de verificación pueden usarse para confirmar que el dispositivo está usando el servidor configurado y enviando datos.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración WanWay GS22 para su dispositivo o utilice los comandos SMS provistos por el fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo.
3. Configure el puerto del servidor en 8888 para coincidir con los ajustes de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte, tenga en cuenta que Plaspy acepta ambos y detectará el protocolo.
5. Aplique o guarde la configuración en el dispositivo o envíe los comandos SMS correspondientes.
6. Reinicie el dispositivo si el firmware del GS22 lo requiere o después de guardar para asegurar que los ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy verificando el estado del equipo o utilizando los comandos de verificación del GS22.

## Comandos de configuración de ejemplo

El GS22 soporta configuración vía SMS. Los siguientes comandos SMS públicos se usan comúnmente en la documentación del fabricante para configurar el APN, el servidor, los intervalos de reporte y activar GPRS. Mantenga los marcadores de posición al sustituir por los valores de su operador.

- Configurar el APN del operador
```text
APN,[apn]#
```
APN con nombre de usuario y contraseña opcionales (cuando el operador lo requiere)
```text
APN,[apn],[apnu],[apnp]#
```
Explicación: [apn] es el APN de su operador móvil. [apnu] y [apnp] son marcadores de usuario y contraseña del APN opcionales.

- Configurar el servidor GPRS para apuntar a Plaspy
```text
SERVER,1,d.plaspy.com,8888,0#
```
Nota: Este comando establece el dominio del servidor d.plaspy.com y el puerto 8888. Los campos finales están definidos por el proveedor en la sintaxis SMS del GS22.

- Establecer el intervalo de reporte (ejemplo define temporizadores primario y secundario)
```text
TIMER,60,60#
```
Explicación: Los números definen intervalos de reporte en segundos según la interfaz SMS del GS22.

- Activar modo GPRS
```text
GPRSON,1#
```

- Comprobar la configuración actual
```text
PARAM#
```

- Consultar el estado del rastreador
```text
STATUS#
```

Use los comandos PARAM# y STATUS# para verificar el servidor, el APN y el estado operativo después de aplicar la configuración.

## Notas sobre la configuración

- El GS22 admite configuración por SMS como se muestra arriba; algunos instaladores pueden preferir herramientas del proveedor o una app de configuración según el firmware.
- Revisiones de firmware o versiones de hardware pueden cambiar la sintaxis de comandos SMS o los parámetros requeridos; siempre confirme con el manual del GS22 para su unidad específica.
- Al enviar comandos APN, incluya [apnu] y [apnp] solo si su operador requiere usuario y contraseña.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo utilizado.
- Permita tiempo después de guardar los ajustes o reiniciar para que el dispositivo establezca GPRS y reporte a Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el WanWay GS22 para reportar a Plaspy brinda a las organizaciones visibilidad consistente de la ubicación del vehículo, el estado y los eventos mediante un endpoint compartido de la plataforma. Con los ajustes del servidor Plaspy aplicados, el GS22 puede enviar actualizaciones periódicas que facilitan el rastreo, la reproducción de trazas y la supervisión operativa en Plaspy.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones de dispositivos visite https://www.plaspy.com. Para las instrucciones de configuración específicas de dispositivo más recientes, avisos de firmware y orientación del fabricante, verifique los detalles en el sitio oficial de WanWay https://www.wanwaytech.net/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
