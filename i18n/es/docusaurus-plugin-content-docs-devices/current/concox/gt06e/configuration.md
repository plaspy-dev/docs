---
slug: /concox/gt06e/configuration
id: gt06e-configuration
sidebar_label: Configuration
title: Concox - GT06E Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox GT06E con Plaspy, incluye ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración Concox GT06E
  - Instalación Concox GT06E
  - Configuración servidor Concox GT06E
  - Configuración GT06E Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Rastreador gestión de flotas
  - Comandos SMS GT06E
  - Configuración GPRS rastreador
---

# Concox - GT06E Configuración

Esta página describe el contexto público de configuración para usar el rastreador Concox GT06E con Plaspy. Reúne la información práctica y no propietaria que usted necesita para configurar el dispositivo y que reporte a los servidores de Plaspy, incluyendo el host del servidor, opciones de transporte y ejemplos de comandos SMS comúnmente usados en este modelo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta a la plataforma. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, las herramientas del instalador o personalizaciones del proveedor. Los ejemplos en esta página usan comandos SMS de uso público para el GT06E cuando están disponibles y explican los marcadores de posición requeridos, como los valores del APN.

## Visión general de la configuración

Este proceso prepara un rastreador GT06E para comunicarse con Plaspy y aparecer en la plataforma para visibilidad en tiempo real y monitoreo operativo.

- Apunte el GT06E a los ajustes de servidor de Plaspy para que envíe datos de ubicación y eventos a la plataforma.
- Configure el APN y habilite GPRS para que el dispositivo pueda usar datos móviles y alcanzar Plaspy.
- Elija transporte UDP o TCP y establezca el puerto que utiliza Plaspy para asegurar la conectividad.
- Valide que el dispositivo informe correctamente a Plaspy y ajuste los intervalos de reporte según sea necesario.
- Use métodos soportados por el fabricante, como comandos SMS o herramientas del proveedor, para aplicar la configuración.

## Ajustes de servidor de Plaspy

Configure el GT06E para que reporte al servidor de Plaspy usando los siguientes ajustes públicos:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte: UDP o TCP (ambos soportados)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y puede aceptar conexiones por dominio o por IP.

## Requisitos típicos antes de comenzar

- Una unidad GT06E con alimentación y acceso a su interfaz de SMS o de configuración.
- Una tarjeta SIM válida provisionada para datos móviles y SMS si va a usar configuración por SMS o reportes por GPRS.
- La información correcta del APN de su operador móvil (APN, usuario, contraseña) para habilitar GPRS.
- Acceso al método oficial de configuración de Concox o a la herramienta del proveedor, o la capacidad de enviar comandos SMS al dispositivo.
- Conocimiento básico del IMEI del dispositivo y de los procedimientos del instalador para aplicar comandos.
- Entender que versiones de firmware o variantes regionales pueden modificar los conjuntos de comandos o el comportamiento.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado correctamente, el GT06E envía periódicamente información de ubicación y eventos a Plaspy para que la plataforma muestre posiciones y alertas casi en tiempo real.

- El dispositivo se configura con el dominio o IP del servidor de Plaspy y el puerto compartido para que los datos se enruten a Plaspy.
- El transporte se establece en UDP o TCP según el soporte del dispositivo y la preferencia del instalador.
- El rastreador abre una sesión de datos GPRS usando el APN del operador para transmitir telemetría.
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe la primera conexión, lo que simplifica la configuración del lado del servidor.
- Una vez activo el reporte, Plaspy recibe actualizaciones de posición, informes temporizados y eventos del dispositivo para su monitoreo.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante, como el software del proveedor o la interfaz de comandos SMS.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138.
3. Establezca el puerto en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN del operador y habilite GPRS para que el dispositivo use datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma.

Si utiliza comandos SMS para la configuración, siga el orden y la sintaxis específicos del dispositivo proporcionados por Concox o su proveedor; a continuación hay una secuencia de comandos de ejemplo.

## Comandos de configuración de ejemplo

El GT06E puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos públicos están documentados por el fabricante y deben enviarse en el orden mostrado para la configuración inicial. Marque el comando de reinicio como opcional o solo para reconfiguración inicial cuando sea necesario.

- Reinicio de fábrica opcional (usar solo si necesita restaurar valores predeterminados)
```
FACTORY#
```

- Establecer la zona horaria a UTC+0
```
GMT,E,0#
```

- Establecer el APN del operador
Nota: {{apn}} es el APN del operador móvil. Los marcadores opcionales {{apnu}} y {{apnp}} representan el usuario y la contraseña del APN si el operador los requiere.
```
APN,{{apn}}#
```
O si se requiere usuario y contraseña:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Establecer el servidor GPRS a Plaspy por dominio (recomendado para resolución DNS)
```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativamente, establecer el servidor GPRS a Plaspy por IP
```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización/reporte a 60 segundos (dos variantes comunes)
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Habilitar modo GPRS
```
GPRSON,1#
```

- Consultar los parámetros GPRS actuales (comando de verificación)
```
GPRSSET#
```

Envíe estos comandos SMS al número del dispositivo en el orden apropiado para su despliegue. Reemplace los marcadores de posición con los detalles del APN de su operador cuando sea necesario.

## Notas de configuración

- Los comandos SMS y la configuración GPRS mostrados aquí son comandos de uso público comúnmente asociados con el GT06E; la sintaxis real puede variar según el firmware o las personalizaciones del proveedor.
- Plaspy acepta conexiones por dominio o por IP y usa el puerto 8888 para todos los dispositivos; puede usar d.plaspy.com o la dirección IP en el comando SERVER.
- Elija UDP o TCP según su red y las capacidades del firmware del dispositivo; algunos instaladores prefieren UDP por simplicidad y otros prefieren TCP para entrega más fiable.
- Mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores de su operador. Si su SIM no requiere usuario o contraseña, solo es necesario el APN.
- Confirme siempre el soporte de comandos y la sintaxis exacta con la documentación de Concox o su proveedor antes de aplicar cambios en producción.

## Por qué usar Plaspy con esta configuración

Usar el Concox GT06E con Plaspy proporciona una forma directa de enrutar la telemetría y los datos de evento a una única plataforma para visibilidad de la flota y supervisión operativa. Configurar el rastreador con los ajustes de servidor de Plaspy permite monitoreo centralizado, alertas y seguimiento histórico de vehículos y activos.

Learn more about Plaspy and how it can be used with supported trackers at https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer setup guidance verify details on the Concox official site https://www.iconcox.com/ as manufacturer specifications and setup methods can change over time.
