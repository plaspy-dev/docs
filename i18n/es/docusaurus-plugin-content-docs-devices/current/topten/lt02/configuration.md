---
slug: /topten/lt02/configuration
id: lt02-configuration
sidebar_label: Configuration
title: TopTen - LT02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador TopTen LT02 a Plaspy usando los ajustes de servidor compartido
keywords:
  - Configuración TopTen LT02
  - Instalación TopTen LT02
  - TopTen LT02 Plaspy
  - Configuración de servidor LT02
  - Configuración rastreador GPS LT02
  - Configuración SMS del rastreador
  - Integración plataforma GPS
  - Configuración rastreo de vehículos
  - Configuración de rastreador Plaspy
  - Configuración APN rastreador GPS
---

# TopTen - Configuración del LT02

Esta página describe el contexto público de configuración para usar el rastreador mini GPS TopTen LT02 con Plaspy. Reúne los valores de servidor prácticos y los comandos SMS de fábrica de uso común para que pueda preparar el dispositivo y enviar ubicación y estado a la plataforma Plaspy.

Plaspy utiliza un endpoint y puerto de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice los comandos a continuación como orientación pública y confirme el comportamiento del equipo con la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo de este proceso es asegurar que su LT02 reporte de forma confiable al endpoint de Plaspy y aparezca correctamente en la plataforma. En el LT02, la configuración principal suele realizarse mediante comandos SMS proporcionados por el fabricante y verificando el identificador del dispositivo que el rastreador usará en Plaspy.

- Configurar el LT02 para enviar datos al endpoint de Plaspy para que las actualizaciones de ubicación y eventos lleguen a la plataforma.
- Establecer el APN y las configuraciones GPRS para que el dispositivo pueda usar datos móviles.
- Verificar el identificador del rastreador derivado del IMEI para que el dispositivo se asocie al registro correcto en Plaspy.
- Validar la conectividad tras aplicar los ajustes y confirmar que el dispositivo sea visible en Plaspy.
- Mantener a mano los comandos SMS del fabricante y los marcadores de posición para reconfiguración remota o resolución de problemas.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Estos valores son la configuración pública del servidor que debe usar al configurar el LT02 para reportar a Plaspy.

## Requisitos antes de la configuración

- Un equipo LT02 con alimentación y una tarjeta SIM activa que soporte SMS y datos móviles
- Conocer el IMEI del dispositivo para confirmar el identificador que usa el LT02
- Acceso al método de comandos SMS del fabricante o a una herramienta de configuración aprobada por TopTen
- Las credenciales APN correctas del operador móvil para habilitar datos GPRS
- Capacidad para enviar y recibir SMS con el rastreador para configuración remota y verificación

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el LT02 envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que el dispositivo se rastree en la plataforma. Plaspy usa el identificador que reporta el rastreador para asociar los datos entrantes con el registro de cuenta correcto.

- El LT02 debe configurarse para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Elija UDP o TCP si el firmware del dispositivo solicita selección de transporte; Plaspy acepta ambos
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al puerto 8888
- El identificador del rastreador para el LT02 corresponde a los últimos 14 dígitos del IMEI según lo reportado por el comando PAR
- Una vez que el dispositivo esté reportando, Plaspy mostrará actualizaciones de ubicación y mensajes de eventos del LT02

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de TopTen para el LT02, comúnmente comandos por SMS o la herramienta del proveedor indicada por el fabricante.
2. Ingrese el endpoint de Plaspy como dominio d.plaspy.com o la IP del servidor 54.85.159.138 según las opciones del dispositivo.
3. Ajuste el puerto del servidor a 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione UDP o TCP si el LT02 requiere una selección explícita de transporte.
5. Configure el APN y los detalles del servidor GPRS usando el formato de comandos provisto por el fabricante, incluyendo las credenciales de su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o las instrucciones del fabricante lo requieren.
7. Verifique que el LT02 informe a Plaspy y que el identificador del dispositivo (últimos 14 dígitos del IMEI) aparezca correctamente en la plataforma.

## Ejemplos de comandos de configuración

El TopTen LT02 admite configuración por SMS. El fabricante publica estos comandos públicos como método estándar para restaurar valores por defecto, establecer APN y parámetros de servidor, y verificar ajustes. Preserve los marcadores de posición al enviar comandos.

- Reinicio opcional a ajustes de fábrica (usar solo cuando sea necesario o para una configuración inicial):
```
111111CLR
```

- Configure el APN y el servidor de Plaspy (reemplace los marcadores de posición con los valores APN de su SIM). Este comando establece el APN, la IP del servidor, el puerto, el intervalo de reporte y otros parámetros de ejecución:
```
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Explicación de los marcadores de posición:
- {{apn}} — nombre del APN principal del operador móvil
- {{apnu}} — nombre de usuario del APN si el operador lo requiere (dejar vacío si no es necesario)
- {{apnp}} — contraseña del APN si el operador la requiere (dejar vacío si no es necesario)

- Consultar los ajustes WWW actuales en el dispositivo:
```
111111WWW:
```

Notas de uso:
- El orden de los comandos puede importar al preparar el dispositivo; el comando de reinicio es opcional y suele usarse solo para un inicio limpio.
- Envíe SMS desde un número autorizado por el rastreador (la documentación del fabricante especificará las reglas de autorización).

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; siempre verifique con la documentación de TopTen.
- El LT02 admite configuración por SMS como se muestra; puede existir una herramienta alternativa del fabricante para configuración local según su proveedor.
- Plaspy acepta UDP y TCP en el puerto 8888; elija la opción de transporte adecuada según su instalación y firmware del equipo.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que coincidir servidor y puerto es crítico.
- Confirme el mapeo del identificador del dispositivo: el LT02 usa los últimos 14 dígitos del IMEI como ID del rastreador al parsear la respuesta PAR.

## Por qué usar Plaspy con esta configuración

Configurar el TopTen LT02 para reportar a Plaspy proporciona a las organizaciones visibilidad centralizada de la ubicación de vehículos, alertas y estado operativo sin necesitar endpoints específicos por dispositivo. Usar un único endpoint compartido de Plaspy simplifica la incorporación de flotas y reduce la carga de configuración por equipo.

Para saber más sobre cómo Plaspy soporta la integración de dispositivos y la monitorización de flotas, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware e instrucciones del fabricante para el TopTen LT02, verifique los detalles en el sitio oficial de TopTen http://www.t10.cn ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
