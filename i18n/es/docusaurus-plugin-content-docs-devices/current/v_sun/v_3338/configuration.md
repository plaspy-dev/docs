---
slug: /v_sun/v_3338/configuration
id: v_3338-configuration
sidebar_label: Configuration
title: V-SUN - V-3338 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del V-SUN V-3338 con ajustes de servidor Plaspy y comandos SMS para reportes GPRS
keywords:
  - Configuración V-SUN V-3338
  - Instalación V-SUN V-3338
  - V-SUN V-3338 Plaspy
  - Configuración de dispositivo Plaspy
  - Configuración de servidor V-3338
  - Configuración rastreador GPS V-SUN
  - Configuración de rastreo de vehículos
  - Configuración GPRS para rastreador
  - Comandos SMS de configuración
  - Ajustes de servidor para rastreador GPS
---

# V-SUN - Configuración del V-3338

Esta página describe el contexto público de configuración para usar el rastreador GPS V-SUN V-3338 con la plataforma Plaspy. Resume los pasos prácticos de configuración y los comandos públicos que preparan al V-3338 para enviar datos de ubicación a Plaspy usando GPRS vía la red GSM y la interfaz de comandos SMS cuando aplique.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El V-3338 admite configuración por SMS y GPRS; los ejemplos siguientes muestran los comandos SMS públicos comúnmente usados para establecer el APN y los parámetros de servidor.

## Resumen de configuración

Configurar el V-SUN V-3338 para Plaspy implica preparar el dispositivo para comunicarse de forma fiable con un punto de conexión del servidor Plaspy, establecer el APN y el transporte, y verificar que el rastreador reporte a la plataforma. El proceso suele realizarse mediante comandos SMS enviados al dispositivo o usando la herramienta de configuración del fabricante, según lo disponible.

- Establecer el APN del dispositivo y, si corresponde, las credenciales APN para que el equipo pueda registrar en la red GPRS del operador.
- Configurar el dispositivo para enviar datos de ubicación al endpoint y puerto del servidor Plaspy.
- Seleccionar UDP o TCP como transporte si el firmware del dispositivo lo requiere.
- Aplicar la configuración y habilitar el modo GPRS para que el rastreador comience a subir datos.
- Validar la conectividad y confirmar que el rastreador sea visible en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos previos habituales

- Una tarjeta SIM funcional con datos y capacidad de SMS insertada en el V-3338.
- Energice el dispositivo y confirme que tenga fijación GPS o buena visibilidad del cielo para pruebas cuando sea posible.
- Acceso a la interfaz de comandos SMS del dispositivo o a la herramienta oficial de configuración V-SUN.
- Conocer el APN del operador y, opcionalmente, el usuario y la contraseña del APN para su SIM.
- Conocer la contraseña por defecto del dispositivo si los comandos SMS requieren un código de seguridad (los ejemplos públicos usan 0000).

## Cómo se conecta este rastreador a Plaspy

El V-3338 se configura para enviar datos de posicionamiento al endpoint y puerto compartidos de Plaspy, de forma que Plaspy pueda ingerir la telemetría y mostrar la ubicación en la plataforma. La detección automática de protocolo de Plaspy significa que sólo necesita apuntar el dispositivo al endpoint y puerto, sin seleccionar una versión de protocolo específica de Plaspy.

- El rastreador envía mensajes GPRS a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP según las opciones del firmware y la configuración.
- Plaspy recibe los mensajes del dispositivo y los enlaza a un registro de dispositivo mediante detección automática de protocolo.
- Una vez en reporte, el dispositivo muestra ubicación en tiempo real y la trayectoria histórica dentro de Plaspy.
- Se puede usar SMS para configurar el APN y los parámetros del servidor cuando no se dispone de una herramienta de configuración.

## Flujo de configuración común

1. Acceda al método oficial de configuración V-SUN, ya sea la interfaz de comandos SMS o el software del fabricante.
2. Introduzca la dirección del servidor Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en el campo de servidor.
3. Configure el puerto en 8888, dado que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Establezca el APN del operador y, si su SIM lo requiere, el usuario y la contraseña del APN.
6. Aplique o guarde la configuración y habilite el modo GPRS en el dispositivo.
7. Reinicie el equipo si el firmware lo solicita y luego valide que el dispositivo esté reportando a Plaspy.

## Ejemplos de comandos de configuración

El V-3338 admite configuración por SMS. Los comandos que siguen son los ejemplos públicos documentados por el fabricante. Mantenga la contraseña por defecto del dispositivo o reemplácela según corresponda. Los ejemplos usan la contraseña por defecto 0000.

1. Reinicio opcional a fábrica (usar sólo si es necesario):
```
*RESET#0000##
```
2. Establecer el APN del operador. Reemplace los marcadores con los valores de su operador:
```
#803#0000#{{apn}}#{{apnu}}#{{apnp}}##
```
- {{apn}} es el nombre del punto de acceso del operador.
- {{apnu}} es el usuario del APN si el operador lo requiere.
- {{apnp}} es la contraseña del APN si el operador lo requiere.

3. Configurar el servidor GPRS de Plaspy por IP y puerto:
```
#804#0000#54.85.159.138#8888##
```
4. Establecer el intervalo de actualización en movimiento (ejemplo de la documentación pública):
```
#805#0000#120#1##
```
5. Establecer el intervalo de actualización en reposo (ejemplo de la documentación pública):
```
#809#0000#120#1##
```
6. Habilitar modo GPRS:
```
7100000
```
7. Habilitar modo GPS:
```
2220000
```

Siga los comandos en el orden indicado cuando la secuencia sea relevante y ajuste el campo de la contraseña si la cambió desde el valor por defecto 0000. Si su operador requiere credenciales APN, proporcione {{apnu}} y {{apnp}} como se muestra. Los valores numéricos de los intervalos son provistos por el fabricante y pueden representar segundos o unidades internas según el firmware.

## Notas de configuración

- El firmware y sus revisiones pueden cambiar la sintaxis de comandos o el significado de los parámetros. Confirme siempre con la documentación actual del fabricante V-SUN.
- La configuración por SMS documentada públicamente es útil para instalaciones de campo cuando no se dispone de una herramienta de configuración.
- Elija UDP o TCP según el soporte del firmware del dispositivo y los requisitos de red. Plaspy acepta ambos transportes en el puerto 8888.
- Verifique los ajustes del APN del dispositivo y pruebe la conectividad de datos antes de esperar reportes en vivo.
- Los ejemplos usan la contraseña por defecto 0000; cambie la contraseña del dispositivo para asegurar deployments tras las pruebas exitosas.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el V-SUN V-3338 ofrece una forma simple de centralizar el reporte de ubicación de vehículos o activos, acceder a trayectorias históricas y monitorear los dispositivos de forma remota. Configurar el V-3338 para apuntar al endpoint de Plaspy simplifica la integración porque Plaspy utiliza un puerto único y detección automática de protocolo para los rastreadores soportados.

Para saber más sobre Plaspy y los flujos de trabajo soportados visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y referencias oficiales de comandos, verifique la información en el sitio del fabricante V-SUN en http://www.v-sun.cc/. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que siempre confirme los procedimientos actuales antes de un despliegue amplio.
