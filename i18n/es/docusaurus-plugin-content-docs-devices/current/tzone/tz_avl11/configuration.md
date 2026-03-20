---
slug: /tzone/tz_avl11/configuration
id: tz_avl11-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL11 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TZone TZ-AVL11 y enviar datos por GPRS o SMS a Plaspy con ajustes y comandos de ejemplo
keywords:
  - Configuración del TZone TZ-AVL11
  - Instalación TZone TZ-AVL11
  - Rastreador TZone Plaspy
  - Configuración de servidor TZ-AVL11
  - Configuración GPS TZ-AVL11
  - Seguimiento vehicular TZone
  - Configuración GPRS TZ-AVL11
  - Configuración SMS TZone
  - Configuración de dispositivo Plaspy
  - Guía de configuración de rastreadores GPS
---

# TZone - TZ-AVL11 Configuración

Esta página recopila la información pública necesaria para usar el rastreador TZone TZ-AVL11 con Plaspy. Incluye los ajustes de servidor y comandos de ejemplo que puede emplear para apuntar un TZ-AVL11 hacia Plaspy, de modo que el dispositivo reporte ubicación y estado a la plataforma. Use esta guía junto con la documentación del rastreador y las notas del instalador proporcionadas por el proveedor del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TZ-AVL11 admite reporte por GPRS mediante TCP o UDP y configuración por SMS, por lo que esta página incluye el flujo de comandos SMS común para configurar el reporte GPRS a Plaspy.

## Visión general de la configuración

El proceso de configuración prepara el TZ-AVL11 para enviar mensajes de posición y eventos a Plaspy, de modo que el dispositivo sea visible y administrable en la plataforma. Normalmente implica configurar el APN de la red, el intervalo de reporte y el endpoint y transporte del servidor GPRS.

- Configure el APN del operador de la SIM para que el dispositivo pueda conectarse a datos móviles.
- Defina el intervalo de actualización de ubicación adecuado para su caso de uso.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para entregar la telemetría.
- Active el modo de reporte por GPRS para que el rastreador envíe datos por IP móvil.
- Verifique la conectividad y que el dispositivo aparezca en Plaspy usando el servidor y puerto compartidos.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores son los detalles del endpoint público que deberá usar al configurar el TZ-AVL11 para que reporte a Plaspy.

## Requisitos típicos previos a la configuración

- Una unidad TZ-AVL11 con batería y alimentación instaladas según las indicaciones del fabricante.
- Una tarjeta SIM activa con datos habilitados y el APN correcto para el operador móvil.
- Acceso a la mensajería SMS desde la SIM o el teléfono que utilizará para enviar los comandos de configuración.
- Que el firmware del equipo soporte reporte GPRS y configuración por SMS en su unidad.
- Instrucciones o herramientas de configuración del fabricante para la puesta en marcha inicial si son necesarias.
- Una forma de monitorear la conectividad del dispositivo desde Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TZ-AVL11 puede configurarse para enviar datos de posición y eventos a Plaspy por GPRS utilizando TCP o UDP. Cuando se configura correctamente, el rastreador establecerá una sesión con el endpoint compartido de Plaspy y comenzará a reportar actualizaciones de ubicación en el intervalo configurado.

- El dispositivo abre una conexión a d.plaspy.com o a la IP del servidor 54.85.159.138.
- Las comunicaciones usan el puerto 8888 para todos los dispositivos en el entorno Plaspy.
- Puede seleccionar transporte UDP o TCP según los requerimientos del equipo; Plaspy detectará automáticamente el protocolo.
- El rastreador transmite paquetes periódicos de ubicación y mensajes de eventos a Plaspy para su visualización y procesamiento.
- Una vez que comienza el reporte, el rastreador se vuelve visible en la interfaz de Plaspy para monitoreo y alertas.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software correspondiente, o prepárese para enviar comandos SMS según lo soporte el TZ-AVL11.
2. Configure el APN del operador en el rastreador para que pueda establecer sesiones GPRS.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y establezca el puerto 8888.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere esa elección.
5. Defina un intervalo de actualización adecuado para el reporte de posición y aplique o guarde la configuración.
6. Active o habilite el modo de reporte por GPRS en el dispositivo y reinícielo si es necesario.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con las actualizaciones esperadas.

Si utiliza la configuración por SMS para la puesta en marcha inicial, siga la secuencia de comandos SMS de ejemplo que se muestra abajo para establecer el APN, el intervalo de reporte, la IP y el puerto del servidor, y para activar el modo GPRS.

## Ejemplos de comandos de configuración

El TZ-AVL11 soporta configuración mediante SMS. Los siguientes comandos públicos aparecen en el contenido del fabricante y pueden enviarse como mensajes SMS desde el teléfono del propietario al rastreador. La contraseña de configuración por defecto usada en estos comandos es 000000 como se muestra. Mantenga los marcadores de posición donde corresponda.

1. Configurar el APN del operador
   - Use este comando para establecer el APN y opcionalmente usuario y contraseña del APN.
   - {{apn}} es la cadena del APN del operador. {{apnu}} y {{apnp}} son el usuario y la contraseña del APN opcionales.

```
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

   - Si no necesita usuario ni contraseña para el APN, envíe:

```
*000000,011,{{apn}}#
```

2. Establecer el intervalo de actualización a 60 segundos
```
*000000,018,60,999#
```
   - Esto define el intervalo de reporte y un parámetro adicional usado por el dispositivo. Mantenga los valores tal como se muestran si desea actualizaciones cada 60 segundos.

3. Establecer el servidor GPRS a Plaspy
   - Este comando configura el dispositivo para enviar datos directamente a Plaspy usando la IP pública y el puerto.

```
*000000,015,0,54.85.159.138,8888#
```

4. Activar el modo de reporte por GPRS
```
*000000,016,1#
```

Notas sobre marcadores de posición y valores por defecto:
- {{apn}} debe reemplazarse por el APN del operador móvil asociado a la SIM del dispositivo.
- {{apnu}} y {{apnp}} son opcionales y deben incluirse solo si su operador los requiere.
- La contraseña numérica inicial 000000 en estos comandos de ejemplo es la contraseña de fábrica que aparece en el conjunto de comandos público. Confirme la contraseña correcta de su unidad si fue modificada.

## Notas de configuración

- La configuración por SMS es un método común para instaladores en este modelo; registre cualquier cambio de contraseña que realice durante la configuración.
- Las versiones de firmware y las revisiones de hardware pueden alterar la sintaxis de los comandos o los parámetros disponibles; verifique los comandos con la documentación actual del fabricante.
- Elegir TCP o UDP afecta la forma en que el dispositivo mantiene la conexión; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Confirme siempre el APN correcto para la tarjeta SIM antes de enviar comandos de servidor o activación de GPRS.
- Después de aplicar los ajustes, espere un minuto para que el dispositivo se registre en la red y comience a reportar antes de realizar las comprobaciones de validación.

## Por qué usar Plaspy con esta configuración

Configurar el TZ-AVL11 para reportar a Plaspy ofrece una vía sencilla para obtener visibilidad de vehículos y activos. Al apuntar el rastreador al servidor y puerto compartidos de Plaspy, las organizaciones obtienen reporte continuo de ubicación, alertas de eventos y monitoreo centralizado sin tener que gestionar endpoints de servidor individuales para cada dispositivo.

Para obtener más información sobre Plaspy y cómo funciona con el TZ-AVL11, visite https://www.plaspy.com. Para comandos específicos del dispositivo, comportamiento de firmware y detalles de instalación más actuales, verifique la documentación del fabricante en http://www.tzonedigital.com/ antes del despliegue.
