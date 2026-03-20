---
slug: /tzone/tz_avl19/configuration
id: tz_avl19-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL19 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TZone TZ-AVL19 con ajustes de servidor Plaspy y comandos SMS para integración
keywords:
  - TZone TZ-AVL19
  - Configuración TZ-AVL19
  - Configuración del rastreador TZone
  - Configuración de rastreador Plaspy
  - Configuración de rastreo de vehículos
  - Configuración de servidor para rastreador GPS
  - Comandos SMS TZ-AVL19
  - Configuración de rastreador GPRS
  - Rastreador para gestión de flotas
  - Configuración de plataforma GPS
---

# TZone - TZ-AVL19 Configuración

Esta página aborda el contexto público de configuración para usar el rastreador GPS TZone TZ-AVL19 con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos SMS proporcionados por el fabricante que se usan comúnmente para dejar la unidad lista para reportar a la plataforma Plaspy. El contenido está dirigido a usuarios técnicos e instaladores que aplicarán los ajustes compartidos de Plaspy y validarán la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador durante las conexiones iniciales. Los pasos exactos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta guía junto con la documentación del fabricante del TZ-AVL19 y cualquier instrucción específica de firmware que tenga disponible.

## Resumen de la configuración

El objetivo al configurar un TZ-AVL19 para Plaspy es preparar el dispositivo para enviar datos de ubicación y eventos de forma confiable al endpoint de Plaspy y verificar que la unidad aparezca en su cuenta de Plaspy. Muchos instaladores usan la configuración por SMS o la herramienta de configuración del fabricante para definir el APN, el intervalo de reporte, la dirección del servidor y el transporte.

- Configure el APN del dispositivo para que pueda establecer una conexión GPRS para el reporte
- Defina el intervalo de reporte para que las actualizaciones se ajusten a sus necesidades de rastreo
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que los datos lleguen a la plataforma
- Active el modo de reporte por GPRS y valide que el dispositivo sea visible en Plaspy
- Confirme la selección del transporte (UDP o TCP) cuando el firmware del dispositivo lo requiera

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes del servidor Plaspy al configurar el TZ-AVL19 para reportar:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; elija el transporte que requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Nota: Plaspy usa el mismo puerto para todos los dispositivos compatibles, y la plataforma detectará el protocolo automáticamente durante la conexión del dispositivo.

## Requisitos típicos antes de la configuración

- Un rastreador TZ-AVL19 con alimentación y funcionamiento disponible para configuración
- Una tarjeta SIM activa con plan de datos y los ajustes APN correctos para el operador móvil
- Capacidad para enviar SMS o acceso a la herramienta de configuración del fabricante para enviar comandos
- El IMEI o identificador del dispositivo para poder localizar el rastreador en Plaspy después de configurarlo
- Acceso a la documentación del fabricante del TZ-AVL19 o a la guía del instalador para notas específicas de firmware
- Una cuenta Plaspy o acceso a la plataforma para verificar que el dispositivo está reportando al servicio

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TZ-AVL19 utilizará GPRS para enviar mensajes de posición y eventos al endpoint de Plaspy. Plaspy recoge esos mensajes, reconoce automáticamente el protocolo del dispositivo y presenta el rastreador como activo en la plataforma para monitoreo e informes.

- El rastreador envía paquetes GPRS (TCP o UDP) al endpoint y puerto configurados
- Plaspy recibe las conexiones entrantes de dispositivos en el endpoint y puerto compartidos
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes para la plataforma
- Los reportes y alarmas del dispositivo se vuelven visibles en Plaspy tras el registro y el parseo exitoso de los mensajes
- El SMS se usa con frecuencia para la configuración inicial, pero no para el envío continuo de datos a Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración del TZ-AVL19 proporcionado por el fabricante, generalmente comandos SMS o una herramienta del proveedor.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 según el formato de comando del dispositivo o la preferencia del instalador.
3. Establezca el puerto en 8888 ya que Plaspy usa un puerto común para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte durante la configuración.
5. Aplique o guarde la configuración en el dispositivo usando el método del fabricante (SMS o herramienta).
6. Reinicie el dispositivo si el firmware lo requiere para aplicar los ajustes GPRS y activar el reporte.
7. Valide que el dispositivo reporte a Plaspy y que sea visible en su cuenta de la plataforma.

## Comandos de configuración de ejemplo

El TZ-AVL19 puede configurarse mediante comandos SMS. Los siguientes comandos públicos aparecen en materiales del fabricante y se presentan aquí en el orden original. Sustituya los marcadores por sus valores reales.

- Configurar el APN del operador
  - Forma básica (solo APN):
  ```
  *000000,011,{{apn}}#
  ```
  - Con usuario y contraseña de APN (si el operador lo requiere):
  ```
  *000000,011,{{apn}},{{apnu}},{{apnp}}#
  ```
  - Explicación: reemplace {{apn}} con el APN de su operador. Si su operador exige usuario y contraseña, reemplace {{apnu}} y {{apnp}} por esos valores; de lo contrario omítalos cuando el formato lo permita.

- Establecer el intervalo de actualización a 60 segundos
  ```
  *000000,018,60,999#
  ```
  - Explicación: este comando define el intervalo de reporte; el valor 60 está en segundos. Mantenga el resto del comando tal como lo indica el fabricante.

- Establecer el servidor GPRS (ejemplo usando IP y puerto de Plaspy)
  ```
  *000000,015,0,54.85.159.138,8888#
  ```
  - Alternativa: si su dispositivo acepta nombres DNS, puede reemplazar la IP numérica por el dominio de Plaspy:
  ```
  *000000,015,0,d.plaspy.com,8888#
  ```
  - Explicación: esto apunta el rastreador al servidor Plaspy. Use la IP numérica o el dominio según lo acepte su firmware.

- Activar el modo GPRS
  ```
  *000000,016,1#
  ```
  - Explicación: este comando habilita el modo de reporte por GPRS para que el dispositivo use datos por paquetes y envíe mensajes al servidor configurado.

Siga con precisión el formato SMS del fabricante y espere las confirmaciones de éxito cuando aplique. Conserve cualquier delimitador requerido y la contraseña o PIN del dispositivo si el formato de comando solicita autenticación.

## Notas de configuración

- Las diferencias de firmware pueden modificar la sintaxis de los comandos o los parámetros disponibles; siempre confirme los comandos exactos para su versión de firmware.
- El TZ-AVL19 soporta tanto TCP como UDP; elija según la preferencia del instalador y el comportamiento del firmware. Plaspy aceptará cualquiera en el puerto compartido.
- La configuración por SMS es un método común y práctico para la configuración en campo, pero las herramientas del proveedor pueden ofrecer una interfaz para aprovisionamiento masivo.
- Use el dominio d.plaspy.com cuando sea posible si prefiere nombres DNS; de lo contrario la IP 54.85.159.138 es un endpoint público válido de Plaspy.
- Asegúrese de que el dispositivo esté en modo GPRS después de activar el reporte y que las credenciales de APN sean correctas para permitir sesiones de datos por paquetes.

## Por qué usar Plaspy con esta configuración

Configurar el TZ-AVL19 para reportar a Plaspy ofrece una forma sencilla de integrar la ubicación del vehículo, las alarmas y los eventos operativos en una única plataforma de monitoreo de flotas. Para organizaciones que requieren rastreo continuo, visibilidad de alarmas y telemática consolidada, utilizar el endpoint compartido de Plaspy simplifica el aprovisionamiento de dispositivos y reduce la complejidad de configuración por unidad.

Para obtener más información sobre Plaspy, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y orientación de instalación del TZ-AVL19, verifique los detalles en el sitio del fabricante http://www.tzonedigital.com/ ya que las especificaciones del proveedor y los métodos de configuración pueden cambiar con el tiempo.
