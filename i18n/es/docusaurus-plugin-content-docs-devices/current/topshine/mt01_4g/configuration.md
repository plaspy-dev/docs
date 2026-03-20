---
slug: /topshine/mt01_4g/configuration
id: mt01_4g-configuration
sidebar_label: Configuration
title: TopShine - MT01-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TopShine MT01-4G con Plaspy usando servidor compartido y ajustes por SMS o GPRS
keywords:
  - configuración TopShine MT01-4G
  - configuración TopShine MT01-4G para Plaspy
  - configuración rastreador Plaspy
  - configuración servidor MT01-4G
  - instalación rastreador MT01-4G
  - incorporación de dispositivos Plaspy
  - comandos SMS TopShine
  - configuración seguimiento vehicular
  - configuración plataforma seguimiento flotas
  - integración telemetría GPS
---

# TopShine - MT01-4G Configuración

Esta página documenta el contexto público de configuración para utilizar el TopShine MT01-4G con Plaspy. Resume los ajustes públicos del servidor de Plaspy, los requisitos típicos y los pasos prácticos para direccionar un MT01-4G hacia Plaspy. Cuando están disponibles, se incluyen ejemplos de comandos SMS y los marcadores de posición del fabricante para que los instaladores los apliquen directamente o los adapten a sus herramientas.

Plaspy emplea un único endpoint de servidor compartido y puerto para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se centra en los pasos públicos y prácticos necesarios para conectar un MT01-4G a la plataforma Plaspy e incluye los ejemplos de SMS proporcionados por el proveedor.

## Resumen de configuración

El proceso de configuración prepara el MT01-4G para comunicarse de forma fiable con Plaspy, habilitando seguimiento en tiempo real, telemetría y alertas. Habitualmente implica establecer la identidad del dispositivo, configurar parámetros de datos móviles y apuntar la unidad al servidor y puerto de Plaspy. Los ejemplos abajo muestran comandos SMS públicos que muchos instaladores usan para configurar dispositivos TopShine.

- Establecer el identificador del dispositivo para que Plaspy asocie el rastreador a un registro de vehículo.
- Configurar el APN del operador móvil y, si aplica, el usuario y la contraseña del APN para datos GPRS.
- Apuntar el rastreador al endpoint o IP de Plaspy y usar el puerto 8888 para el transporte de datos.
- Elegir UDP o TCP si el equipo requiere selección explícita del transporte.
- Aplicar y reiniciar el dispositivo para que empiece a reportar al endpoint de Plaspy.
- Verificar que el dispositivo sea visible en Plaspy confirmando actualizaciones periódicas de posición.

## Ajustes del servidor de Plaspy

Utilice los siguientes ajustes públicos del servidor Plaspy al configurar el MT01-4G. Estos valores son utilizados por Plaspy para todos los dispositivos compatibles.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos y detecta el protocolo de forma automática

## Requisitos previos

- Un MT01-4G con alimentación, instalado o temporalmente activado en banco de pruebas con acceso a funciones SMS y GPRS
- Una tarjeta SIM activa con plan de datos configurada para el dispositivo y con los ajustes APN correctos
- Acceso al IMEI del dispositivo para crear o verificar el identificador usado por Plaspy
- La contraseña por defecto del dispositivo suministrada por el fabricante si la configuración por SMS la requiere; los ejemplos públicos abajo usan la contraseña por defecto 000000
- Capacidad para enviar comandos SMS desde un teléfono móvil o una herramienta de configuración que soporte la sintaxis SMS de TopShine
- Confirmación del APN correcto, y del usuario y contraseña del APN del operador si fueran necesarios

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el MT01-4G transmite ubicación y telemetría al endpoint y puerto del servidor Plaspy. Plaspy recibe cargas útiles de posición y eventos, asocia el identificador del dispositivo a un registro de vehículo y pone los datos a disposición en el panel, alertas e informes.

- El rastreador reporta posiciones GPS y actualizaciones de movimiento al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- La telemetría como nivel de combustible, estado de encendido, eventos de relé y alarmas se envía a Plaspy junto con la ubicación
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un perfil de protocolo en la plataforma
- Puede configurar el dispositivo para usar UDP o TCP hacia el mismo puerto 8888 de Plaspy según las opciones del equipo
- Una vez que el dispositivo reporta, Plaspy muestra posiciones en tiempo real, gráficas de telemetría y notificaciones de eventos

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración del fabricante, o prepárese para enviar comandos SMS desde un número autorizado.
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en la configuración del dispositivo.
3. Configure el puerto en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita de transporte.
5. Configure el APN de la SIM y las credenciales opcionales del APN para que el dispositivo pueda abrir una sesión de datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy confirmando actualizaciones periódicas de posición y telemetría en el panel de Plaspy.

## Comandos de configuración de ejemplo

El fabricante proporciona comandos de configuración vía SMS. Los comandos de ejemplo abajo usan la contraseña pública por defecto del dispositivo 000000 según la documentación del proveedor. Conserve los marcadores de posición y sustitúyalos por sus valores reales.

- Reinicio opcional a fábrica inicial
```
W000000,990,099###
```
- Establecer el ID del dispositivo (usar los primeros 14 dígitos del IMEI en este comando). Reemplace <device_id_14> con los primeros 14 dígitos del IMEI
```
W000000,010,<device_id_14>
```
- Establecer el APN del operador. Reemplace {{apn}} con el APN del operador. Si es necesario, incluya usuario y contraseña opcionales del APN como {{apnu}} y {{apnp}}
```
W000000,011,{{apn}}[,{{apnu}},{{apnp}}]
```
- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto
```
W000000,012,54.85.159.138,8888
```
- Cambiar el dispositivo a modo GPRS
```
W000000,013,2
```
- Establecer el intervalo de actualización (ejemplo valor 6 mostrado por el fabricante)
```
W000000,014,6
```
- Comando de consulta para obtener el IMEI del dispositivo
```
W000000,601
```

Notas sobre los marcadores de posición
- {{apn}} es el APN del operador móvil y debe reemplazarse por la cadena APN del operador de la SIM.
- {{apnu}} y {{apnp}} son el usuario y la contraseña opcionales del APN cuando el operador requiere credenciales.
- <device_id_14> representa los primeros 14 dígitos derivados del IMEI según lo requiere la secuencia de comandos SMS. El ejemplo del fabricante hace referencia al procesamiento del IMEI para crear el ID del dispositivo.

## Notas de configuración

- La configuración por SMS es compatible con el dispositivo y es un método habitual de instalación; asegúrese de enviar los comandos SMS desde un número autorizado si el dispositivo restringe las fuentes de comando.
- La contraseña por defecto usada en los ejemplos públicos es 000000; confirme la contraseña de fábrica correcta y cámbiela si su política de seguridad lo requiere.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis o el comportamiento de los comandos; verifique los comandos contra la documentación del fabricante si alguno no produce el resultado esperado.
- Elija UDP o TCP según sus requisitos de red y fiabilidad. Ambos transportes son compatibles con Plaspy en el puerto 8888.
- Confirme el APN y las credenciales del operador móvil antes de cambiar al modo GPRS para evitar interrupciones de conectividad.

## Por qué usar Plaspy con esta configuración

Configurar el TopShine MT01-4G para reportar a Plaspy brinda a los operadores de flota visibilidad consolidada de la ubicación del vehículo, telemetría de combustible, eventos de encendido y relé, y condiciones de alarma. Con Plaspy recibiendo actualizaciones regulares desde el MT01-4G, las organizaciones pueden usar paneles, alertas e informes para monitorear operaciones, detectar problemas de combustible y actuar en flujos de trabajo de inmovilización o recuperación cuando sea necesario.

Learn more about Plaspy and device onboarding at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so please verify the latest setup instructions on the official TopShine website https://www.gztopshine.com/ before deploying at scale.
