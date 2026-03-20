---
slug: /topshine/ogt02/configuration
id: ogt02-configuration
sidebar_label: Configuration
title: TopShine - OGT02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador TopShine OGT02 para integrarlo con Plaspy usando servidor compartido y comandos SMS y GPRS
keywords:
  - Configuración TopShine OGT02
  - Instalación TopShine OGT02
  - Configuración OGT02 Plaspy
  - Ajustes servidor Plaspy
  - Instalación rastreador OGT02
  - Configuración rastreador OBD2
  - Configuración seguimiento vehicular
  - Seguimiento de flotas OGT02
  - Configuración plataforma GPS Plaspy
  - Tutorial TopShine OGT02
---

# TopShine - Configuración OGT02

Esta página documenta el contexto público de configuración para usar el TopShine OGT02 con Plaspy. Explica los ajustes compartidos del servidor Plaspy, el flujo de trabajo habitual para preparar un OGT02 y los comandos SMS y GPRS de ejemplo que el fabricante publica y que se usan comúnmente para configurar el APN, el servidor y el comportamiento de reporte.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador al recibir datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos a continuación se basan en los comandos públicos proporcionados para el OGT02 y en los ajustes del servidor Plaspy que aplican a todos los dispositivos.

## Resumen de la configuración

El proceso de configuración prepara el OGT02 para comunicarse de forma fiable con Plaspy a través de la red y garantiza que el dispositivo reporte posición y telemetría a la plataforma. Para las unidades OGT02 esto normalmente implica definir la identidad del equipo, configurar el APN del operador y apuntar el rastreador al endpoint y puerto del servidor Plaspy.

- Configure la identidad del dispositivo y el mapeo del IMEI para que Plaspy reconozca la unidad
- Establezca el APN del operador y, si corresponde, las credenciales del APN para que el rastreador use GPRS
- Apunte el dispositivo a los ajustes del servidor Plaspy para habilitar el reporte en vivo
- Elija UDP o TCP si el dispositivo requiere selección explícita del transporte
- Valide la conectividad y confirme que el dispositivo aparece en los paneles de Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el OGT02. Estos valores son el endpoint y puerto compartidos usados por Plaspy para todos los dispositivos soportados.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda ingerir los datos sin importar la variante del protocolo

Todos los rastreadores soportados por Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del dispositivo cuando la unidad reporta.

## Requisitos habituales antes de la configuración

- Una unidad OGT02 alimentada e instalada en el puerto OBD II del vehículo, con el encendido del vehículo activado según se requiera
- Una tarjeta SIM válida con datos habilitados y soporte SMS si va a usar configuración por SMS o reporte de respaldo
- Acceso al IMEI del dispositivo y a cualquier contraseña requerida para la configuración (la contraseña por defecto del OGT02 aparece en los comandos públicos más abajo)
- Acceso al método oficial de configuración TopShine para su unidad, como la interfaz de comandos SMS o el software del proveedor
- Una cuenta Plaspy o acceso a la plataforma para verificar que el dispositivo aparece y reporta correctamente después de la configuración

## Cómo se conecta este rastreador a Plaspy

El OGT02 se configura para reportar ubicación y telemetría OBD al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ofrecer seguimiento en tiempo real, alertas y reproducción histórica. La comunicación puede usar GPRS para el envío de datos y SMS como método alternativo de configuración o respaldo.

- El rastreador envía informes de posición GPS y la telemetría OBD disponible al endpoint del servidor Plaspy
- Las alertas y eventos de movimiento (por ejemplo del acelerómetro) se entregan a Plaspy para notificaciones y procesamiento de reglas
- La identidad del dispositivo se mapea para que Plaspy pueda asociar los informes entrantes con el vehículo y el registro de telemetría correcto
- El dispositivo apunta al endpoint compartido d.plaspy.com o a 54.85.159.138 y utiliza el puerto 8888 para el reporte
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los informes, simplificando la selección de protocolo en la mayoría de los despliegues

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración TopShine para su unidad OGT02, como comandos SMS o la herramienta de configuración del proveedor documentada por el fabricante.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del dispositivo en 8888, que es el puerto usado por todos los dispositivos Plaspy.  
4. Elija la opción de transporte UDP o TCP si el dispositivo requiere selección explícita.  
5. Configure el APN del operador y cualquier usuario o contraseña del APN que requiera la tarjeta SIM.  
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si el firmware exige un reboot para aplicar los cambios.  
7. Valide que el dispositivo reporte a Plaspy confirmando que la unidad aparece y envía actualizaciones de ubicación en los paneles de la plataforma Plaspy.

Si utiliza comandos SMS para la configuración, siga la secuencia recomendada por TopShine y verifique los valores de IMEI y contraseña antes de enviar comandos.

## Comandos de configuración de ejemplo

El proveedor del OGT02 ofrece comandos SMS públicos para configurar el dispositivo. Los comandos de ejemplo abajo usan la contraseña por defecto 000000. Si la contraseña de su dispositivo ha sido cambiada, reemplace 000000 por la contraseña activa.

Nota sobre los marcadores
- {{apn}} es la cadena APN del operador móvil
- {{apnu}} es el usuario del APN cuando se requiere
- {{apnp}} es la contraseña del APN cuando se requiere
- IMEI debe sustituirse por el valor IMEI del dispositivo cuando se solicite

Comandos en el orden comúnmente usado para la configuración inicial:

1. Reinicio opcional a ajustes de fábrica (use solo si necesita resetear el dispositivo)
```
W000000,990,099###
```

2. Establecer el ID del dispositivo. El comando del proveedor usa los primeros 14 dígitos del IMEI como Id mientras que Plaspy asocia la unidad por su IMEI completo (15 dígitos). Reemplace IMEI14 con los primeros 14 dígitos derivados de su IMEI.
```
W000000,010,IMEI14
```

3. Establecer el APN del operador y las credenciales opcionales del APN. Reemplace {{apn}} y las opcionales {{apnu}} y {{apnp}} por los valores de su operador SIM.
```
W000000,011,{{apn}}[,{{apnu}},{{apnp}}]
```
(Si no se requiere usuario ni contraseña del APN, envíe solo el APN. Los corchetes indican campos opcionales.)

4. Configurar el servidor GPRS con la IP y el puerto de Plaspy. Este ejemplo usa la IP pública de Plaspy y el puerto compartido.
```
W000000,012,54.85.159.138,8888
```

5. Cambiar el dispositivo al modo de trabajo GPRS
```
W000000,013,2
```

6. Establecer el intervalo de actualización de reporte. El valor numérico depende del firmware del dispositivo para los códigos de intervalo. El ejemplo usa el código 6 según las muestras del proveedor.
```
W000000,014,6
```

7. Consultar el IMEI del dispositivo para verificación
```
W000000,601
```

Preserve el orden cuando el dispositivo lo requiera. Use la contraseña del dispositivo al inicio de cada comando si el firmware espera la contraseña prefijada en la cadena del comando.

## Notas de configuración

- El OGT02 soporta modos de trabajo tanto GPRS como SMS según la documentación pública. SMS puede usarse para configuración o como respaldo cuando GPRS no está disponible.
- Las revisiones de firmware y hardware pueden utilizar sintaxis de comandos o códigos de parámetros ligeramente diferentes. Siempre confirme los comandos contra la documentación del firmware de su dispositivo.
- El ejemplo del proveedor configura el Id del dispositivo usando los primeros 14 dígitos del IMEI mientras que Plaspy normalmente identifica las unidades por el IMEI completo. Asegúrese de que el mapeo que use su instalador coincida con el registro del dispositivo en Plaspy.
- Elija UDP o TCP de acuerdo con las necesidades de su despliegue; Plaspy acepta cualquiera de los dos transportes y detecta automáticamente el protocolo del rastreador cuando llegan los informes.
- La contraseña por defecto del dispositivo mostrada en los comandos públicos es 000000. Si la contraseña fue cambiada en campo, use la contraseña activa al enviar comandos.

## Por qué usar Plaspy con esta configuración

Usar el TopShine OGT02 con Plaspy ofrece un camino sencillo para obtener visibilidad en tiempo real del vehículo y gestión centralizada de flotas sin instalaciones complejas. El factor de forma plug and play en el OBD II reduce el tiempo de instalación, y configurar la unidad para que reporte a Plaspy en d.plaspy.com en el puerto 8888 permite una ingestión consistente de posición y telemetría OBD para monitoreo, alertas y reproducción histórica.

Conozca más sobre Plaspy y las capacidades de la plataforma en https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante más recientes, verifique la información actual en el sitio de TopShine https://www.gztopshine.com/ ya que las especificaciones y pasos de configuración del fabricante pueden cambiar con el tiempo.
