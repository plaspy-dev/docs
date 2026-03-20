---
slug: /megastek/gt_89/configuration
id: gt_89-configuration
sidebar_label: Configuration
title: Megastek - GT-89 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek GT-89 e integrarlo con Plaspy mediante servidor y comandos SMS
keywords:
  - Configuración Megastek GT-89
  - Instalación Megastek GT-89
  - Integración GT-89 Plaspy
  - Configuración de servidor GT-89
  - Comandos SMS GT-89
  - Compatibilidad GPS Plaspy
  - Rastreo vehicular GT-89
  - Configuración GPRS GT-89
  - Configuración de dispositivo Plaspy
  - Detección de protocolo del rastreador
---

# Megastek - Configuración GT-89

Esta página describe el contexto público de configuración para usar el rastreador Megastek GT-89 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy espera y presenta los comandos SMS públicos proporcionados por el fabricante que se utilizan comúnmente para preparar el dispositivo y operarlo en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor. Cuando estén disponibles, deben utilizarse los métodos oficiales de Megastek; los comandos que se muestran a continuación reflejan los ejemplos públicos de SMS ofrecidos para el GT-89.

## Resumen de la configuración

El objetivo de la configuración es preparar el GT-89 para comunicarse de forma fiable con Plaspy, de modo que el dispositivo aparezca en la plataforma y reporte ubicación y estados. Para los equipos GT-89 esto generalmente implica asignar una identidad al dispositivo, configurar el APN de datos móviles, apuntar el rastreador al endpoint y puerto de Plaspy, activar el reporte por GPRS y establecer un intervalo de actualización adecuado.

- Establecer la identidad del equipo para que los reportes se asocien con la unidad correcta en Plaspy.
- Configurar el APN del operador móvil para que el rastreador pueda enviar datos por GPRS.
- Apuntar el rastreador a los ajustes de servidor de Plaspy para que posiciones y eventos lleguen a la plataforma.
- Establecer el intervalo de reporte y activar el modo GPRS para seguimiento continuo.
- Verificar que el dispositivo aparezca y se actualice en Plaspy tras aplicar los cambios.

## Ajustes del servidor Plaspy

Configure el GT-89 para enviar datos al servidor de Plaspy usando estos ajustes públicos:

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP; configure el dispositivo en cualquiera de los protocolos según lo solicite
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar conexiones entrantes de los dispositivos compatibles

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del rastreador cuando lleguen los datos.

## Requisitos previos habituales

- Un GT-89 con alimentación, batería cargada o conexión a la energía del vehículo
- Una tarjeta SIM activa con datos y SMS habilitados y saldo suficiente para uso de SMS y GPRS
- Acceso al IMEI del rastreador y a cualquier contraseña del dispositivo necesaria para la configuración
- Capacidad para enviar comandos SMS desde un número autorizado o acceso a la herramienta de configuración del fabricante para el GT-89
- Una cuenta en Plaspy o acceso a la plataforma para verificar que el dispositivo aparece tras la configuración
- Documentación del fabricante para la revisión de firmware específica, si está disponible

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GT-89 reporta ubicación y estado al endpoint y puerto compartidos de Plaspy. El dispositivo usa GPRS para abrir una sesión de datos y transmitir información de GPS y eventos, de modo que vehículos y activos aparecen en la plataforma casi en tiempo real.

- El rastreador se configura para reportar al servidor de Plaspy en d.plaspy.com o en 54.85.159.138
- Los datos se envían al puerto 8888, que Plaspy utiliza para los dispositivos soportados
- Puede configurar el rastreador para utilizar transporte UDP o TCP según las opciones del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes
- Una vez activo el reporte, la plataforma muestra la posición y el estado del dispositivo y permite configuraciones adicionales para alertas e historial

## Flujo de configuración típico

1. Acceda al método oficial de configuración del Megastek GT-89 recomendado por el proveedor, normalmente comandos SMS o la utilidad de configuración del fabricante.
2. Prepare los datos del dispositivo, como el IMEI, y confirme la contraseña del equipo (el valor predeterminado mostrado abajo es 000000 si no se ha cambiado).
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 en el dispositivo.
5. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
6. Aplique o guarde los cambios y reinicie el equipo si el rastreador necesita reinicio para aplicar los parámetros de red.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma como se espera.

Si utiliza los comandos de ejemplo del fabricante que figuran más abajo, envíelos en el orden indicado y reemplace los marcadores con sus valores.

## Ejemplo de comandos de configuración

La configuración de muestra del GT-89 puede realizarse por SMS. Los siguientes comandos públicos se proporcionan en el ejemplo del fabricante. El ejemplo utiliza la contraseña del dispositivo 000000 por defecto. Reemplace la contraseña si la ha cambiado.

- Notas sobre los marcadores de posición
  - Sustituya \<IMEI> por el IMEI de 15 dígitos del dispositivo cuando se requiera.
  - [apn] es el marcador del APN del operador móvil.
  - [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN; inclúyalos solo si su operador los requiere.

1. Establecer la identidad del equipo
   - Reemplace XXXXXXXXXXXXXXX por el IMEI del dispositivo o por el identificador de 15 dígitos requerido por sus herramientas de proveedor.
   ```sms
   M000000,22,XXXXXXXXXXXXXXX
   ```

2. Configurar el APN del operador
   - Sustituya [apn] por el APN de su operador. Si es necesario, incluya [apnu] y [apnp] para usuario y contraseña del APN.
   ```sms
   M000000,23,[apn]{{,[apnu],[apnp]}}
   ```
   Ejemplo con los campos opcionales visibles:
   ```sms
   M000000,23,[apn],[apnu],[apnp]
   ```

3. Establecer el intervalo de actualización a 60 segundos
   ```sms
   M000000,25,60
   ```

4. Configurar el servidor GPRS para apuntar a Plaspy
   - Este comando establece el servidor GPRS con la IP y el puerto de Plaspy. La muestra incluye un código inicial seguido de la IP del servidor y el puerto.
   ```sms
   M000000,24,56 54.85.159.138,8888
   ```
   Alternativamente, cuando se use un nombre de dominio, utilice d.plaspy.com si el flujo de configuración del dispositivo lo soporta.

5. Habilitar modo GPRS
   ```sms
   M000000,21,2
   ```

Importante: la contraseña al comienzo de cada comando mostrado arriba aparece como 000000 en el ejemplo público. Si la contraseña de su dispositivo es distinta, reemplace 000000 por la contraseña activa antes de enviar los SMS de configuración.

## Notas de configuración

- El ejemplo anterior usa configuración por SMS tal como figura en los comandos públicos. Algunos instaladores prefieren la herramienta de PC del proveedor o métodos OTA si el firmware lo soporta.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros soportados. Verifique los comandos con la documentación actual de Megastek para el firmware de su equipo.
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del operador; Plaspy acepta ambos y detecta el protocolo automáticamente.
- El endpoint del servidor Plaspy puede configurarse usando el dominio d.plaspy.com o la IP 54.85.159.138 junto con el puerto 8888.
- Si cambia la contraseña del dispositivo, actualice el prefijo de los SMS de comando antes de enviar cualquier SMS de configuración.

## Por qué usar Plaspy con esta configuración

Usar el Megastek GT-89 con Plaspy ofrece una ruta práctica para obtener visibilidad de vehículos y activos con una configuración de servidor compartida y predecible. Apuntando el GT-89 a d.plaspy.com o 54.85.159.138 en el puerto 8888 y activando el reporte por GPRS, las organizaciones obtienen actualizaciones centralizadas de ubicación, reportes de estado y una incorporación más sencilla de dispositivos a la plataforma Plaspy.

Para obtener más información sobre Plaspy y cómo gestionar rastreadores a escala visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo y detalles de firmware actualizados, verifique la información en el sitio del fabricante https://www.megastek.com/.
